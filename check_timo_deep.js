const fs = require('fs');
const path = require('path');
const baseDir = 'C:/Users/HNBV3384/.gemini/antigravity/scratch/toan-quoc-te';
const timo = require(path.join(baseDir, 'timo_data.js')).TIMO_DB;

console.log('--- CHECKING TIMO_DB ALL GRADES ---');

const timoIssues = [];

for (const g of Object.keys(timo)) {
  const list = timo[g] || [];
  list.forEach((q, idx) => {
    const ans = String(q.answer || '').trim();
    const text = String(q.text || '').trim();
    const expl = String(q.explanation || q.solution || '').trim();

    // Check multiple choice vs fill
    if (q.options && q.options.length > 0) {
      // Check if ans matches one of options
      const optClean = q.options.map(o => o.replace(/^[A-E][\.\:]\s*/, '').trim());
      const letters = q.options.map((o, i) => {
        const m = o.match(/^([A-E])[\.\:]/);
        return m ? m[1] : String.fromCharCode(65 + i);
      });
      const match = q.options.some((o, i) => o === ans || optClean[i] === ans || letters[i] === ans.toUpperCase());
      if (!match) {
        timoIssues.push({
          grade: g,
          id: q.id,
          round: q.round,
          type: 'MC_MISMATCH',
          text: text.slice(0, 100),
          ans,
          options: q.options
        });
      }
    }

    // Check explanation mismatch if any
    if (expl) {
      const m = expl.match(/(?:đáp số|đáp án|chọn)\s*[:=]?\s*([A-Za-z0-9,\.\-]+)/i);
      if (m) {
        const v = m[1].trim();
        if (/^[A-E]$/i.test(ans) && /^[A-E]$/i.test(v) && ans.toUpperCase() !== v.toUpperCase()) {
          timoIssues.push({
            grade: g,
            id: q.id,
            round: q.round,
            type: 'EXPL_LETTER_MISMATCH',
            text: text.slice(0, 100),
            ans,
            explAns: v
          });
        }
      }
    }
  });
}

console.log('Total TIMO issues found:', timoIssues.length);
timoIssues.forEach(iss => console.log(JSON.stringify(iss, null, 2)));
