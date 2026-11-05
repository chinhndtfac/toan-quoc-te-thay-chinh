const fs = require('fs');
const path = require('path');

const baseDir = 'C:/Users/HNBV3384/.gemini/antigravity/scratch/toan-quoc-te';
global.window = {};
global.document = {};

function safeRequire(filePath) {
  try {
    return require(path.join(baseDir, filePath));
  } catch (e) {
    console.error('Error requiring ' + filePath + ':', e.message);
    return null;
  }
}

const timoDb = safeRequire('timo_data.js')?.TIMO_DB || {};
const kangarooDb = safeRequire('kangaroo_data.js')?.KANGAROO_DB || {};
const toan365Db = safeRequire('toan365_data.js') || {};
const fmoDb = safeRequire('fmo_data.js') || [];
const grade4Spec = safeRequire('grade4_special.js') || [];
const archMathDb = safeRequire('archimedes_math_data.js') || {};
const realG4 = safeRequire('archimedes_g4_real.js');
if (realG4 && archMathDb.grade4) {
  archMathDb.grade4 = realG4;
}
const tiengVietDb = safeRequire('tieng_viet_data.js')?.TIENG_VIET_DB || {};
const toanTuoiThoDb = safeRequire('toan_tuoi_tho_data.js')?.TOAN_TUOI_THO_DB || [];

console.log('Loaded all databases successfully!');

const allDatasets = [
  { name: 'TIMO', data: timoDb, isGradeObject: true },
  { name: 'KANGAROO', data: kangarooDb, isGradeObject: true },
  { name: 'TOAN_365', data: toan365Db, isGradeObject: true },
  { name: 'FMO', data: fmoDb, isGradeObject: false },
  { name: 'GRADE4_SPECIAL', data: grade4Spec, isGradeObject: false },
  { name: 'ARCHIMEDES_MATH', data: archMathDb, isGradeObject: true },
  { name: 'TIENG_VIET', data: tiengVietDb, isGradeObject: true },
];

let totalQuestions = 0;
const issues = [];

function checkQuestion(q, contextStr) {
  totalQuestions++;
  const idStr = `${contextStr} - Q[${q.id || 'no-id'}] (${q.round || 'no-round'})`;

  // 1. Missing or placeholder answer
  const ansStr = (q.answer !== undefined && q.answer !== null) ? String(q.answer).trim() : '';
  if (!ansStr) {
    issues.push({ type: 'MISSING_ANSWER', id: idStr, text: q.text, answer: q.answer, q });
    return;
  }

  const placeholderPatterns = [
    /xem lời giải/i,
    /đang cập nhật/i,
    /tự luận/i,
    /xem hình/i,
    /xem bài giải/i,
    /chưa có đáp án/i
  ];
  for (const pat of placeholderPatterns) {
    if (pat.test(ansStr)) {
      issues.push({ type: 'PLACEHOLDER_ANSWER', id: idStr, text: q.text, answer: ansStr, q });
      break;
    }
  }

  // 2. Multiple choice options mismatch
  if (Array.isArray(q.options) && q.options.length > 0) {
    if (q.options.length < 2) {
      issues.push({ type: 'TOO_FEW_OPTIONS', id: idStr, options: q.options, answer: ansStr, text: q.text });
    }

    // Check duplicate options
    const optSet = new Set(q.options.map(o => String(o).trim().toLowerCase()));
    if (optSet.size < q.options.length) {
      issues.push({ type: 'DUPLICATE_OPTIONS', id: idStr, options: q.options, text: q.text });
    }

    // Check if answer matches one of the options
    // It could be 'A', 'B', 'C', 'D' or '0', '1', '2' or option text itself
    const cleanOptLetters = q.options.map((opt, idx) => {
      const match = String(opt).match(/^([A-Ea-e])[\.\:\)]/);
      return match ? match[1].toUpperCase() : String.fromCharCode(65 + idx);
    });

    const isMatch = q.options.some((opt, idx) => {
      const sOpt = String(opt).trim();
      if (sOpt === ansStr) return true;
      if (cleanOptLetters[idx] === ansStr.toUpperCase()) return true;
      // Strip A. / B. prefix
      const stripped = sOpt.replace(/^[A-Ea-e][\.\:\)]\s*/, '').trim();
      if (stripped === ansStr) return true;
      return false;
    });

    if (!isMatch) {
      issues.push({
        type: 'ANSWER_NOT_IN_OPTIONS',
        id: idStr,
        answer: ansStr,
        options: q.options,
        text: q.text?.slice(0, 150)
      });
    }
  }

  // 3. Image missing
  if (q.image) {
    let imgPath = path.join(baseDir, q.image);
    if (!fs.existsSync(imgPath)) {
      // Check images/ subdir
      let imgPath2 = path.join(baseDir, 'images', path.basename(q.image));
      if (!fs.existsSync(imgPath2)) {
        issues.push({ type: 'MISSING_IMAGE_FILE', id: idStr, image: q.image, text: q.text?.slice(0, 100) });
      }
    }
  } else {
    // If text specifically refers to image
    if (q.text && /(?:như hình vẽ|trong hình bên|theo hình vẽ bên|xem hình dưới|quan sát hình|trong bảng dưới đây|trong lưới sau)/i.test(q.text)) {
      // Some math questions may not strictly need image if table is ASCII, but let's check
      if (!q.text.includes('+---') && !q.text.includes('|') && !q.image) {
        issues.push({ type: 'TEXT_REFERS_TO_IMAGE_BUT_NO_IMAGE', id: idStr, text: q.text?.slice(0, 150) });
      }
    }
  }

  // 4. Corrupt characters / OCR errors
  if (q.text && /[\uF000-\uF0FF]/.test(q.text)) {
    issues.push({ type: 'WINGDINGS_PUA_CHARACTERS', id: idStr, text: q.text?.slice(0, 120) });
  }

  // 5. Solution vs Answer mismatch
  if (q.solution) {
    const sol = String(q.solution);
    // Find "Đáp số: ..." or "Vậy đáp án là ..." or "Chọn ..."
    const matchDapSo = sol.match(/(?:đáp số|đáp án|kết quả là|vậy có|chọn)\s*[:=]?\s*([^\n\.\,]+)/i);
    if (matchDapSo) {
      const solVal = matchDapSo[1].trim();
      // If answer is distinct number and solVal has a different number
      const numAns = ansStr.match(/\b\d+\b/);
      const numSol = solVal.match(/\b\d+\b/);
      if (numAns && numSol && numAns[0] !== numSol[0] && !ansStr.includes(numSol[0])) {
        // Potential mismatch
        issues.push({
          type: 'POTENTIAL_ANSWER_SOLUTION_MISMATCH',
          id: idStr,
          answer: ansStr,
          solutionSnippet: solVal,
          text: q.text?.slice(0, 120),
          fullSolution: sol.slice(0, 200)
        });
      }
    }
  }
}

for (const ds of allDatasets) {
  if (ds.isGradeObject) {
    for (const g of Object.keys(ds.data)) {
      const list = ds.data[g];
      if (Array.isArray(list)) {
        list.forEach((q, idx) => checkQuestion(q, `${ds.name} - ${g} - #${idx+1}`));
      }
    }
  } else {
    if (Array.isArray(ds.data)) {
      ds.data.forEach((q, idx) => checkQuestion(q, `${ds.name} - #${idx+1}`));
    }
  }
}

console.log(`Total questions checked: ${totalQuestions}`);
console.log(`Total issues found: ${issues.length}`);

// Group issues by type
const byType = {};
for (const iss of issues) {
  byType[iss.type] = (byType[iss.type] || 0) + 1;
}
console.log('Issue breakdown:', byType);

fs.writeFileSync(path.join(baseDir, 'audit_report.json'), JSON.stringify(issues, null, 2));
console.log('Wrote report to audit_report.json');
