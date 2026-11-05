const fs = require('fs');
const html = fs.readFileSync('C:/Users/HNBV3384/.gemini/antigravity/scratch/toan-quoc-te/index.html', 'utf8');

const idx = html.indexOf('function renderResults');
console.log(html.substring(idx + 1500, idx + 3500));
