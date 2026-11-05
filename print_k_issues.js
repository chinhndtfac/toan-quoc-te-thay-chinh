const fs = require('fs');
const kangarooDb = require('C:/Users/HNBV3384/.gemini/antigravity/scratch/toan-quoc-te/kangaroo_data.js').KANGAROO_DB;

const qList = [
  kangarooDb.grade4.find(q => q.id === 'IKMC-G4-D09-Q06'),
  kangarooDb.grade4.find(q => q.id === 'IKMC-G4-D09-Q23'),
  kangarooDb.grade1.find(q => q.id === 'IKMC-G1-D01-Q23')
];

qList.forEach(q => {
  if (!q) return;
  console.log(`\n=== ID: ${q.id} ===`);
  console.log('Text:\n', q.text);
  console.log('Answer:', q.answer);
  console.log('Options:', q.options);
});
