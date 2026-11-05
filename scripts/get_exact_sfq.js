const fs = require('fs');
const html = fs.readFileSync('C:/Users/HNBV3384/.gemini/antigravity/scratch/toan-quoc-te/index.html', 'utf8');

const startIdx = html.indexOf('function startFreshQuiz()');
const endIdx = html.indexOf('function renderQuiz(app)', startIdx);

console.log('=== EXACT CURRENT STARTFRESHQUIZ BLOCK ===');
console.log(html.substring(startIdx, endIdx));
