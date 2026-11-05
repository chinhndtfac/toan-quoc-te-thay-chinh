const fs = require('fs');
const html = fs.readFileSync('C:/Users/HNBV3384/.gemini/antigravity/scratch/toan-quoc-te/index.html', 'utf8');

const regex = /q\.image/g;
let m;
while ((m = regex.exec(html)) !== null) {
  console.log('Match at', m.index, ':', html.substring(m.index - 30, m.index + 100).replace(/\n/g, ' '));
}
