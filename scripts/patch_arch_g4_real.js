const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../archimedes_g4_real.js');
let content = fs.readFileSync(filePath, 'utf8');

const target = `  if (typeof ARCHIMEDES_MATH_DB !== 'undefined') {
    ARCHIMEDES_MATH_DB.grade4 = ARCHIMEDES_G4_REAL;
  }`;

const replacement = `  if (typeof ARCHIMEDES_MATH_DB !== 'undefined' && ARCHIMEDES_MATH_DB.grade4) {
    const realWeeks = new Set(ARCHIMEDES_G4_REAL.map(q => q.round));
    const remaining = ARCHIMEDES_MATH_DB.grade4.filter(q => !realWeeks.has(q.round));
    ARCHIMEDES_MATH_DB.grade4 = [...ARCHIMEDES_G4_REAL, ...remaining];
  }`;

if (content.includes('ARCHIMEDES_MATH_DB.grade4 = ARCHIMEDES_G4_REAL;')) {
  content = content.replace(/if\s*\(typeof ARCHIMEDES_MATH_DB !== ['"]undefined['"]\)\s*\{\s*ARCHIMEDES_MATH_DB\.grade4\s*=\s*ARCHIMEDES_G4_REAL;\s*\}/, replacement);
  fs.writeFileSync(filePath, content, 'utf8');
  console.log('Successfully updated archimedes_g4_real.js with smart merge!');
} else {
  console.log('Target pattern not found in archimedes_g4_real.js');
}
