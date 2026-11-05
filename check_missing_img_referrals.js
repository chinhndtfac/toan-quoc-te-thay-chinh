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

const missingImageReferrals = [];

const pattern = /(?:hình vẽ|hình bên|hình dưới|hình sau|như hình|quan sát hình|trong hình|sơ đồ bên|bảng dưới đây|bảng sau|figure below|figure above|as shown|in the figure|in the picture|in the grid below|shown in the)/i;

function checkTextReferrals(q, ctx) {
  if (!q.image && q.text && pattern.test(q.text)) {
    // If it's pure ASCII table, skip
    if (q.text.includes('+---') || q.text.includes('|') || q.text.includes('-----------')) return;
    missingImageReferrals.push({
      ctx,
      id: q.id,
      round: q.round,
      text: q.text
    });
  }
}

for (const ds of allDatasets) {
  if (ds.isGradeObject) {
    for (const g of Object.keys(ds.data)) {
      (ds.data[g] || []).forEach((q, i) => checkTextReferrals(q, `${ds.name} - ${g} - #${i+1}`));
    }
  } else {
    (ds.data || []).forEach((q, i) => checkTextReferrals(q, `${ds.name} - #${i+1}`));
  }
}

console.log(`Total questions missing images when referred in text: ${missingImageReferrals.length}`);
fs.writeFileSync(path.join(baseDir, 'missing_image_referrals.json'), JSON.stringify(missingImageReferrals, null, 2));
missingImageReferrals.forEach((m, idx) => {
  console.log(`\n[#${idx+1}] ${m.ctx} - ID: ${m.id} (${m.round})`);
  console.log(m.text.slice(0, 150));
});
