const fs = require('fs');
const path = require('path');
const baseDir = 'C:/Users/HNBV3384/.gemini/antigravity/scratch/toan-quoc-te';
const g4Spec = require(path.join(baseDir, 'grade4_special.js'));

console.log('--- SCANNING ALL GRADE4_SPECIAL ANSWERS VS EXPLANATIONS ---');

const mismatches = [];

g4Spec.forEach((q, idx) => {
  const ans = String(q.answer || '').trim();
  const expl = String(q.explanation || '').trim();
  const lines = expl.split('\n').map(l => l.trim()).filter(Boolean);

  // Look for the last line starting with "Vậy" or "Đáp số"
  let conclusionLine = '';
  for (let i = lines.length - 1; i >= 0; i--) {
    if (/^(?:•?\s*Vậy|Đáp số|Đáp án)/i.test(lines[i])) {
      conclusionLine = lines[i];
      break;
    }
  }

  // If there's an embedded question, note it
  if (conclusionLine) {
    // Extract numbers from ans and conclusionLine
    const numAns = ans.match(/\b\d+\b/g);
    const numConc = conclusionLine.match(/\b\d+\b/g);

    if (numAns && numConc) {
      // Check if none of the numbers in conclusionLine matches numAns[0]
      const matchesAny = numConc.some(n => numAns.includes(n));
      if (!matchesAny && !ans.includes('(') && !ans.includes('hoặc')) {
        mismatches.push({
          num: idx + 1,
          id: q.id,
          round: q.round,
          ans,
          conclusionLine,
          text: q.text?.slice(0, 90)
        });
      }
    }
  }
});

console.log(`Total answer vs conclusion mismatches in GRADE4_SPECIAL: ${mismatches.length}`);
mismatches.forEach(m => {
  console.log(`\n[#${m.num}] ${m.id} (${m.round})`);
  console.log('Đề:', m.text);
  console.log('Ans trong DB:', m.ans);
  console.log('Dòng kết luận:', m.conclusionLine);
});
