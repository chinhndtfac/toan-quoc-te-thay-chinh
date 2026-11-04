const fs = require('fs');
const { execSync } = require('child_process');

// Run parse_all_grades logic and inspect answers
const parseScript = fs.readFileSync('C:/Users/HNBV3384/.gemini/antigravity/scratch/toan-quoc-te/parse_all_grades.js', 'utf8');
// Let's modify slightly to print answers summary
const inspectCode = parseScript + `
console.log('=== Sample answers G1 ===');
g1.slice(0, 10).forEach(q => console.log(q.id, '->', q.answer, '| Acc:', q.acceptedAnswers.slice(0, 4).join(', ')));
console.log('=== Sample answers G2 ===');
g2.slice(0, 10).forEach(q => console.log(q.id, '->', q.answer, '| Acc:', q.acceptedAnswers.slice(0, 4).join(', ')));
console.log('=== Sample answers G3 ===');
g3.slice(0, 10).forEach(q => console.log(q.id, '->', q.answer, '| Acc:', q.acceptedAnswers.slice(0, 4).join(', ')));
console.log('=== Sample answers G5 ===');
g5.slice(0, 10).forEach(q => console.log(q.id, '->', q.answer, '| Acc:', q.acceptedAnswers.slice(0, 4).join(', ')));
`;

fs.writeFileSync('C:/Users/HNBV3384/.gemini/antigravity/scratch/toan-quoc-te/inspect_all_answers.js', inspectCode, 'utf8');
