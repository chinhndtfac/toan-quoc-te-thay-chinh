const fs = require('fs');
const path = require('path');
const baseDir = 'C:/Users/HNBV3384/.gemini/antigravity/scratch/toan-quoc-te';
const g4Spec = require(path.join(baseDir, 'grade4_special.js'));

console.log('--- CHECKING ALL GRADE4_SPECIAL QUESTIONS FOR EMBEDDED QUESTIONS ---');
const embedded = [];

g4Spec.forEach((q, idx) => {
  const text = q.text || '';
  const expl = q.explanation || '';

  if (expl.includes('[ĐVH]') || expl.includes('A PE teacher') || expl.includes('Find the cost')) {
    embedded.push({
      num: idx + 1,
      id: q.id,
      round: q.round,
      where: 'explanation',
      snippet: expl.slice(expl.indexOf('[ĐVH]') - 20, expl.indexOf('[ĐVH]') + 80)
    });
  }
});

console.log('Embedded questions found:', embedded);
