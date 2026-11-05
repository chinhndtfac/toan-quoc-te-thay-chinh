const fs = require('fs');
const path = require('path');
const baseDir = 'C:/Users/HNBV3384/.gemini/antigravity/scratch/toan-quoc-te';

const timoDb = require(path.join(baseDir, 'timo_data.js')).TIMO_DB || {};
const kangarooDb = require(path.join(baseDir, 'kangaroo_data.js')).KANGAROO_DB || {};
const toan365Db = require(path.join(baseDir, 'toan365_data.js')) || {};
const fmoDb = require(path.join(baseDir, 'fmo_data.js')) || [];
const grade4Spec = require(path.join(baseDir, 'grade4_special.js')) || [];
const archMathDb = require(path.join(baseDir, 'archimedes_math_data.js')) || {};
const tiengVietDb = (require(path.join(baseDir, 'tieng_viet_data.js')) || {}).TIENG_VIET_DB || {};

const allDatasets = [
  { name: 'TIMO', data: timoDb, isGradeObject: true },
  { name: 'KANGAROO', data: kangarooDb, isGradeObject: true },
  { name: 'TOAN_365', data: toan365Db, isGradeObject: true },
  { name: 'FMO', data: fmoDb, isGradeObject: false },
  { name: 'GRADE4_SPECIAL', data: grade4Spec, isGradeObject: false },
  { name: 'ARCHIMEDES_MATH', data: archMathDb, isGradeObject: true },
  { name: 'TIENG_VIET', data: tiengVietDb, isGradeObject: true },
];

const suspicious = [];

function checkMathConsistency(q, ctx) {
  const text = q.text || '';
  const ans = String(q.answer || '').trim();
  const expl = q.explanation || q.solution || '';

  // 1. Check if explanation concludes with "Đáp số: X" or "Đáp án: X" but ans != X
  const dsMatch = expl.match(/(?:đáp số|đáp án|chọn phương án|chọn đáp án|kết quả)\s*[:=]?\s*([A-Za-z0-9,\.\-]+)/i);
  if (dsMatch) {
    const dsVal = dsMatch[1].trim();
    // If both are letters A-E
    if (/^[A-E]$/i.test(ans) && /^[A-E]$/i.test(dsVal) && ans.toUpperCase() !== dsVal.toUpperCase()) {
      suspicious.push({
        type: 'EXPLANATION_LETTER_MISMATCH',
        ctx,
        id: q.id,
        answer: ans,
        explanationVal: dsVal,
        text: text.slice(0, 100),
        expl: expl.slice(0, 150)
      });
    }
    // If both are numbers
    const numAns = ans.match(/^-?\d+([,\.]\d+)?$/);
    const numDs = dsVal.match(/^-?\d+([,\.]\d+)?$/);
    if (numAns && numDs && numAns[0].replace(',', '.') !== numDs[0].replace(',', '.')) {
      suspicious.push({
        type: 'EXPLANATION_NUMBER_MISMATCH',
        ctx,
        id: q.id,
        answer: ans,
        explanationVal: dsVal,
        text: text.slice(0, 100),
        expl: expl.slice(0, 150)
      });
    }
  }

  // 2. Check if question text has obvious calculation like "Tính: a + b - c" or "Tính giá trị biểu thức"
  const calcMatch = text.match(/tính(?:\s*giá trị biểu thức)?\s*[:\s]+([0-9\s\+\-\*\/×÷\(\)]+)\s*$/i);
  if (calcMatch && /^[0-9\s\+\-\*\/×÷\(\)]+$/.test(calcMatch[1].trim())) {
    try {
      const expr = calcMatch[1].replace(/×/g, '*').replace(/÷/g, '/').trim();
      const val = eval(expr);
      if (Number.isFinite(val) && ans !== String(val)) {
        suspicious.push({
          type: 'CALCULATION_MISMATCH',
          ctx,
          id: q.id,
          expr,
          calculated: val,
          answer: ans,
          text: text.slice(0, 100)
        });
      }
    } catch(e) {}
  }
}

for (const ds of allDatasets) {
  if (ds.isGradeObject) {
    for (const g of Object.keys(ds.data)) {
      (ds.data[g] || []).forEach((q, i) => checkMathConsistency(q, `${ds.name} - ${g} - #${i+1}`));
    }
  } else {
    (ds.data || []).forEach((q, i) => checkMathConsistency(q, `${ds.name} - #${i+1}`));
  }
}

console.log('Suspicious math consistency items:', suspicious.length);
fs.writeFileSync(path.join(baseDir, 'suspicious_math.json'), JSON.stringify(suspicious, null, 2));
suspicious.forEach(s => console.log(JSON.stringify(s)));
