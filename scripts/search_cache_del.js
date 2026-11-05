const fs = require('fs');
const html = fs.readFileSync('C:/Users/HNBV3384/.gemini/antigravity/scratch/toan-quoc-te/index.html', 'utf8');

const idx = html.indexOf('caches.delete');
console.log(html.substring(idx - 150, idx + 400));
