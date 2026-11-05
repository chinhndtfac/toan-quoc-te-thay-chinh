const fs = require('fs');
const vm = require('vm');

const code = fs.readFileSync('C:/Users/HNBV3384/.gemini/antigravity/scratch/toan-quoc-te/timo_data.js', 'utf8');
const sandbox = { window: {} };
vm.createContext(sandbox);
vm.runInContext(code, sandbox);
const db = sandbox.TIMO_DB || sandbox.window.TIMO_DB;

const g1 = db.grade1;
g1.forEach(q => {
  if (q.text && q.text.includes('How many line segments are there in the figure below')) {
    console.log(`ID: ${q.id} | Round: ${q.round} | Num: ${q.num} | Ans: ${q.answer}`);
    console.log(`Expl: ${q.explanation}`);
    console.log('---');
  }
});
