const fs = require('fs');
const html = fs.readFileSync('C:/Users/HNBV3384/.gemini/antigravity/scratch/toan-quoc-te/index.html', 'utf8');

const idx = html.indexOf('d.image ?');
console.log(html.substring(idx - 100, idx + 400));
