const fs = require('fs');
const path = require('path');
const baseDir = 'C:/Users/HNBV3384/.gemini/antigravity/scratch/toan-quoc-te';
const kangaroo = require(path.join(baseDir, 'kangaroo_data.js')).KANGAROO_DB;

console.log('--- CHECKING KANGAROO_DB ALL GRADES ---');

const kIssues = [];

for (const g of Object.keys(kangaroo)) {
  const list = kangaroo[g] || [];
  list.forEach((q, idx) => {
    const ans = String(q.answer || '').trim();
    const text = String(q.text || '').trim();
    const expl = String(q.explanation || q.solution || '').trim();

    if (!q.options || q.options.length < 2) {
      kIssues.push({ grade: g, id: q.id, type: 'NO_OPTIONS', ans, text: text.slice(0, 80) });
      return;
    }

    // Check duplicate options
    const oSet = new Set(q.options.map(o => o.trim()));
    if (oSet.size < q.options.length) {
      kIssues.push({ grade: g, id: q.id, type: 'DUPLICATE_OPTIONS', options: q.options, text: text.slice(0, 80) });
    }

    // Check if ans is valid option letter
    const validLetters = q.options.map((o, i) => {
      const m = o.match(/^([A-E])[\.\:]/);
      return m ? m[1] : String.fromCharCode(65 + i);
    });
    if (!validLetters.includes(ans.toUpperCase()) && !q.options.some(o => o.trim() === ans)) {
      kIssues.push({ grade: g, id: q.id, type: 'ANS_NOT_IN_OPTIONS', ans, options: q.options, text: text.slice(0, 80) });
    }
  });
}

console.log('Total Kangaroo issues found:', kIssues.length);
kIssues.forEach(iss => console.log(JSON.stringify(iss, null, 2)));
