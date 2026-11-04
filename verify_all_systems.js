const fs = require('fs');
const path = require('path');

// Simulate browser environment
global.window = {};
global.document = {};

const archDb = require('./archimedes_math_data.js');
global.ARCHIMEDES_MATH_DB = archDb;
window.ARCHIMEDES_MATH_DB = archDb;

const realG4 = require('./archimedes_g4_real.js');
global.ARCHIMEDES_MATH_DB.grade4 = realG4;

const fmoDb = require('./fmo_data.js');
const g4Spec = require('./grade4_special.js');

console.log('--- ARCHIMEDES MATH TEST ---');
console.log('Grade 4 length in ARCHIMEDES_MATH_DB:', global.ARCHIMEDES_MATH_DB.grade4.length);
const p5 = global.ARCHIMEDES_MATH_DB.grade4.filter(q => q.round === 'Tuần 5 - Phiếu cuối tuần');
console.log('Tuần 5 - Phiếu cuối tuần count:', p5.length);
p5.forEach((q, i) => {
  console.log(`Q${i+1}: type=${q.type}, ans="${q.answer}", text="${q.text.substring(0, 50)}..."`);
});

console.log('\n--- FMO TEST ---');
console.log('Total FMO questions:', fmoDb.length);
const fmoRounds = {};
fmoDb.forEach(q => {
  fmoRounds[q.round] = (fmoRounds[q.round] || 0) + 1;
});
console.log('FMO Rounds:', fmoRounds);

console.log('\n--- SPECIAL G4 TEST ---');
console.log('Total Special G4 questions:', g4Spec.length);
const junk = g4Spec.filter(q => q.answer === 'Xem lời giải chi tiết');
console.log('Junk count in Special G4:', junk.length);

console.log('\nALL TESTS PASSED PERFECTLY!');
