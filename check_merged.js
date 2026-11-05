const fs = require('fs');
const path = require('path');
const baseDir = 'C:/Users/HNBV3384/.gemini/antigravity/scratch/toan-quoc-te';

const g4Spec = require(path.join(baseDir, 'grade4_special.js')) || [];

console.log('--- Checking GRADE4_SPECIAL merged questions ---');
g4Spec.forEach((q, i) => {
  const matches = q.text.match(/\n\s*\d+\.\s*|\b\[ĐVH\]/g);
  if (matches && matches.length > 1) {
    console.log(`Q[${q.id}] at index ${i} has ${matches.length} merged questions! Round: ${q.round}`);
  }
});
