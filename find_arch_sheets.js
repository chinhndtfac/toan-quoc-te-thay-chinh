const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

const pdfPath = 'V:\\ChinhND\\Đề ôn tập\\Bộ bài tập Archimedes\\Lớp 4\\toasn 4 q1.pdf';
const pdftoppm = 'C:\\Users\\HNBV3384\\.gemini\\antigravity\\scratch\\tools\\poppler\\poppler-24.08.0\\Library\\bin\\pdftoppm.exe';
const outDir = 'C:\\Users\\HNBV3384\\.gemini\\antigravity\\scratch\\toan-quoc-te\\images\\arch_find';

if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

console.log('Rendering low-res thumbnails to find all Phiếu cuối tuần...');
// Render 50 dpi thumbnails of all 34 sheets to inspect
execSync(`"${pdftoppm}" -png -r 50 "${pdfPath}" "${outDir}\\sheet"`);
console.log('Done rendering sheets.');
