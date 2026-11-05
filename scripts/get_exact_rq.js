const fs = require('fs');
const html = fs.readFileSync('C:/Users/HNBV3384/.gemini/antigravity/scratch/toan-quoc-te/index.html', 'utf8');

const rqIdx = html.indexOf('function renderQuiz(app)');
console.log(html.substring(rqIdx, rqIdx + 1500));
