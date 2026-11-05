const fs = require('fs');
const html = fs.readFileSync('C:/Users/HNBV3384/.gemini/antigravity/scratch/toan-quoc-te/index.html', 'utf8');

const sfqIdx = html.indexOf('function startFreshQuiz()');
console.log(html.substring(sfqIdx, sfqIdx + 3000));
