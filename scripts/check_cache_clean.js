const fs = require('fs');
const html = fs.readFileSync('C:/Users/HNBV3384/.gemini/antigravity/scratch/toan-quoc-te/index.html', 'utf8');

const target = 'mathquiz_last_version';
let idx = 0;
while ((idx = html.indexOf(target, idx)) !== -1) {
  console.log(html.substring(idx - 100, idx + 300));
  idx += 30;
}
