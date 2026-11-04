const { execSync } = require('child_process');
const pdftoppm = 'C:\\Users\\HNBV3384\\.gemini\\antigravity\\scratch\\tools\\poppler\\poppler-24.08.0\\Library\\bin\\pdftoppm.exe';
const pdfPath = 'V:\\ChinhND\\Đề ôn tập\\Bộ bài tập Archimedes\\Lớp 4\\toasn 4 q1.pdf';
const outDir = 'C:\\Users\\HNBV3384\\.gemini\\antigravity\\scratch\\toan-quoc-te\\images\\arch_weeks';

require('fs').mkdirSync(outDir, { recursive: true });

// Render sheets 11 to 20
execSync(`"${pdftoppm}" -png -r 100 -f 11 -l 20 "${pdfPath}" "${outDir}\\sheet"`);
console.log('Rendered sheets 11 to 20');
