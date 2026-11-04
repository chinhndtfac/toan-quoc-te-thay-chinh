const fs = require('fs');
const path = require('path');
const file = path.join(__dirname, 'archimedes_math_data.js');
let content = fs.readFileSync(file, 'utf8');
if (!content.includes('module.exports = ARCHIMEDES_MATH_DB')) {
  content += `\n\nif (typeof window !== 'undefined') {\n  window.ARCHIMEDES_MATH_DB = ARCHIMEDES_MATH_DB;\n}\nif (typeof module !== 'undefined') {\n  module.exports = ARCHIMEDES_MATH_DB;\n}\n`;
  fs.writeFileSync(file, content, 'utf8');
  console.log('Appended exports to archimedes_math_data.js');
} else {
  console.log('Already has exports');
}
