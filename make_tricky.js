const fs = require('fs');
const parseScript = fs.readFileSync('C:/Users/HNBV3384/.gemini/antigravity/scratch/toan-quoc-te/parse_all_grades.js', 'utf8');

const code = parseScript + `
const allParsed = [...g1, ...g2, ...g3, ...g5];
const tricky = allParsed.filter(q => !/^[\\d.,]+$/.test(q.answer.trim()));
console.log('Total tricky answers:', tricky.length);
tricky.forEach(q => {
  console.log(\`[\${q.id}] Ans: "\${q.answer}" | Prob: "\${q.text.substring(0, 70)}..."\`);
});
`;

fs.writeFileSync('C:/Users/HNBV3384/.gemini/antigravity/scratch/toan-quoc-te/inspect_tricky.js', code, 'utf8');
