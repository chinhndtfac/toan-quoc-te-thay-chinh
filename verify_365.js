const db = require('./toan365_data.js');
console.log('Grade 4 length:', db.grade4.length);

const rounds = {};
db.grade4.forEach(q => {
  rounds[q.round] = (rounds[q.round] || 0) + 1;
});
console.log('Total rounds:', Object.keys(rounds).length);
for (const [r, c] of Object.entries(rounds)) {
  console.log(` - ${r}: ${c} bài`);
}

const noAns = db.grade4.filter(q => !q.answer);
console.log('Questions without answer:', noAns.length);
const noExp = db.grade4.filter(q => !q.explanation);
console.log('Questions without explanation:', noExp.length);
