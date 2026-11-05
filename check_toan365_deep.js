const fs = require('fs');
const path = require('path');
const baseDir = 'C:/Users/HNBV3384/.gemini/antigravity/scratch/toan-quoc-te';
const toan365 = require(path.join(baseDir, 'toan365_data.js'));

console.log('--- CHECKING TOAN_365_DB GRADE 4 (365 QUESTIONS) ---');

const issues365 = [];

toan365.grade4.forEach((q, idx) => {
  const ans = String(q.answer || '').trim();
  const expl = String(q.explanation || '').trim();
  const text = String(q.text || '').trim();

  // 1. Check if explanation has "Đáp số: X" but ans != X
  const dsMatch = expl.match(/(?:đáp số|kết quả là|vậy số cần tìm là|vậy có|vậy diện tích là|vậy chu vi là)\s*[:=]?\s*([0-9\/\.,\-]+)/i);
  if (dsMatch) {
    const dsVal = dsMatch[1].replace(/[,.]00$/, '').trim();
    // compare digits
    const digitsAns = ans.replace(/[^0-9]/g, '');
    const digitsDs = dsVal.replace(/[^0-9]/g, '');
    if (digitsAns && digitsDs && digitsAns !== digitsDs && !ans.includes(dsVal)) {
      issues365.push({
        num: idx + 1,
        id: q.id,
        round: q.round,
        text: text.slice(0, 100),
        ans,
        dsVal,
        expl: expl.slice(-150)
      });
    }
  }
});

console.log(`Found ${issues365.length} possible mismatches in TOAN 365 Grade 4:`);
issues365.forEach(iss => {
  console.log(`\n[Bài ${iss.num}] ${iss.id} (${iss.round})`);
  console.log('Đề:', iss.text);
  console.log('Answer trong DB:', iss.ans);
  console.log('Đáp số trong Lời giải:', iss.dsVal);
  console.log('Lời giải đuôi:', iss.expl);
});
