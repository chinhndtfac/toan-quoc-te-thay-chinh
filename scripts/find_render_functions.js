const fs = require('fs');
const html = fs.readFileSync('C:/Users/HNBV3384/.gemini/antigravity/scratch/toan-quoc-te/index.html', 'utf8');

const regex = /function render([A-Z][a-zA-Z0-9]+)/g;
let m;
while ((m = regex.exec(html)) !== null) {
  console.log(m[0]);
}
