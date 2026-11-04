const fs = require('fs');
let code = fs.readFileSync('C:\\Users\\HNBV3384\\.gemini\\antigravity\\scratch\\toan-quoc-te\\grade4_special_orig.js', 'utf8');
const fn = new Function(code + '; return GRADE4_SPECIAL_DB;');
const db = fn();

const ncQuestions = db.filter(q => q.id && q.id.startsWith('G4-NC-'));
const oldQuestions = db.filter(q => !q.id || !q.id.startsWith('G4-NC-'));

console.log('Authentic G4-NC questions:', ncQuestions.length);
console.log('Old scraped questions:', oldQuestions.length);

const ncTopics = {};
ncQuestions.forEach(q => {
  const t = q.round || q.topic;
  ncTopics[t] = (ncTopics[t] || 0) + 1;
});

console.log('Authentic Topics:', Object.keys(ncTopics).length);
for (const [k, v] of Object.entries(ncTopics)) {
  console.log(`  - ${k}: ${v} câu`);
}
