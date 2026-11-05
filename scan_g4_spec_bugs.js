const fs = require('fs');
const path = require('path');
const baseDir = 'C:/Users/HNBV3384/.gemini/antigravity/scratch/toan-quoc-te';
const g4Spec = require(path.join(baseDir, 'grade4_special.js'));

console.log('--- SCANNING ALL GRADE4_SPECIAL ROUNDS ---');

const errors = [];

g4Spec.forEach((q, idx) => {
  const ans = String(q.answer || '').trim();
  const expl = String(q.explanation || '').trim();

  // Find last line of explanation starting with • Vậy or Vậy
  const lines = expl.split('\n').map(l => l.trim()).filter(Boolean);
  const concludingLine = lines.find(l => /^•?\s*Vậy\b/i.test(l)) || lines[lines.length - 1] || '';

  // Check if concluding line has numbers that contradict answer
  // Or if answer is clearly an intermediate number from line 1
  if (lines.length > 1 && lines[0].includes('Giả sử') && lines[0].includes('=')) {
    const firstLineEq = lines[0].match(/=\s*(\d+)/);
    if (firstLineEq && ans === firstLineEq[1]) {
      // It took the first line equation result as answer!
      errors.push({
        num: idx + 1,
        id: q.id,
        round: q.round,
        ans,
        firstLine: lines[0],
        conclusion: concludingLine
      });
    }
  }
});

console.log(`Found ${errors.length} questions in GRADE4_SPECIAL where answer is the first-line assumption:`);
errors.forEach(e => {
  console.log(`\n[#${e.num}] ${e.id} (${e.round})`);
  console.log('Ans trong DB:', e.ans);
  console.log('Dòng giả sử đầu tiên:', e.firstLine);
  console.log('Kết luận thực tế:', e.conclusion);
});
