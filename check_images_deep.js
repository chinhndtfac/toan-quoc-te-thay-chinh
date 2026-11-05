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
const toanTuoiThoDb = (require(path.join(baseDir, 'toan_tuoi_tho_data.js')) || {}).TOAN_TUOI_THO_DB || [];

console.log('--- CHECKING ALL IMAGE REFERENCES ---');
const allDatasets = [
  { name: 'TIMO', data: timoDb, isGradeObject: true },
  { name: 'KANGAROO', data: kangarooDb, isGradeObject: true },
  { name: 'TOAN_365', data: toan365Db, isGradeObject: true },
  { name: 'FMO', data: fmoDb, isGradeObject: false },
  { name: 'GRADE4_SPECIAL', data: grade4Spec, isGradeObject: false },
  { name: 'ARCHIMEDES_MATH', data: archMathDb, isGradeObject: true },
  { name: 'TIENG_VIET', data: tiengVietDb, isGradeObject: true },
  { name: 'TOAN_TUOI_THO', data: toanTuoiThoDb, isGradeObject: false },
];

const missingImages = [];
let totalImagesChecked = 0;

function checkImg(q, ctx) {
  if (q.image) {
    totalImagesChecked++;
    const rawPath = q.image;
    // Check various possible locations
    const p1 = path.join(baseDir, rawPath);
    const p2 = path.join(baseDir, 'images', path.basename(rawPath));
    if (!fs.existsSync(p1) && !fs.existsSync(p2)) {
      missingImages.push({ ctx, id: q.id, image: rawPath, text: q.text?.slice(0, 80) });
    }
  }
}

for (const ds of allDatasets) {
  if (ds.isGradeObject) {
    for (const g of Object.keys(ds.data)) {
      (ds.data[g] || []).forEach((q, i) => checkImg(q, `${ds.name} - ${g} - #${i+1}`));
    }
  } else {
    (ds.data || []).forEach((q, i) => checkImg(q, `${ds.name} - #${i+1}`));
  }
}

console.log(`Total images checked: ${totalImagesChecked}`);
console.log(`Total missing images: ${missingImages.length}`);
if (missingImages.length > 0) {
  console.log(JSON.stringify(missingImages, null, 2));
}
