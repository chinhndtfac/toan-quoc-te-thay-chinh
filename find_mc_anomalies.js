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

const results = [];

function checkMC(q, ctx) {
  const isMC = q.type === 'mc' || (Array.isArray(q.options) && q.options.length >= 4);
  const ans = String(q.answer || '').trim();

  if (isMC) {
    // If it's MC, user clicks A, B, C, D, E.
    // If answer is not a single letter A-E, let's see what happens:
    if (!/^[A-E]$/i.test(ans)) {
      results.push({
        issue: 'MC_ANSWER_NOT_LETTER',
        ctx,
        id: q.id,
        round: q.round,
        answer: ans,
        options: q.options,
        text: q.text?.slice(0, 100)
      });
    }
  } else {
    // Fill in the blanks (tự luận)
    // If answer is just a single letter like 'A' or 'B', but there are NO options:
    if (/^[A-E]$/i.test(ans) && (!q.options || q.options.length === 0)) {
      results.push({
        issue: 'FILL_ANSWER_IS_LETTER_WITHOUT_OPTIONS',
        ctx,
        id: q.id,
        round: q.round,
        answer: ans,
        text: q.text?.slice(0, 100)
      });
    }
  }
}

for (const ds of allDatasets) {
  if (ds.isGradeObject) {
    for (const g of Object.keys(ds.data)) {
      (ds.data[g] || []).forEach((q, i) => checkMC(q, `${ds.name} - ${g} - #${i+1}`));
    }
  } else {
    (ds.data || []).forEach((q, i) => checkMC(q, `${ds.name} - #${i+1}`));
  }
}

console.log('Total MC / Fill anomaly issues:', results.length);
fs.writeFileSync(path.join(baseDir, 'mc_fill_anomalies.json'), JSON.stringify(results, null, 2));

// Summary count by issue and db
const summary = {};
results.forEach(r => {
  const k = r.issue + ' | ' + r.ctx.split(' - ')[0];
  summary[k] = (summary[k] || 0) + 1;
});
console.log('Summary:', summary);
