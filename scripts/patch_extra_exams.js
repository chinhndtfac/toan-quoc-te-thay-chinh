const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../extra_exams.js');
let code = fs.readFileSync(filePath, 'utf8');

if (!code.includes('module.exports = EXTRA_EXAMS_DB')) {
  code += '\n\nif (typeof window !== "undefined") { window.EXTRA_EXAMS_DB = EXTRA_EXAMS_DB; }\nif (typeof module !== "undefined") { module.exports = EXTRA_EXAMS_DB; }\n';
  fs.writeFileSync(filePath, code, 'utf8');
  console.log('Added exports to extra_exams.js');
} else {
  console.log('extra_exams.js already exports');
}
