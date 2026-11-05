const fs = require('fs');
const html = fs.readFileSync('C:/Users/HNBV3384/.gemini/antigravity/scratch/toan-quoc-te/index.html', 'utf8');

const target = 'function renderQuiz(app)';
const idx = html.indexOf(target);
console.log(html.substring(idx, idx + 1800));
