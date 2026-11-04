const fs = require('fs');
const path = require('path');

const content = fs.readFileSync(path.join(__dirname, 'archimedes_math_data.js'), 'utf8');
const matches = [];
let idx = 0;
while ((idx = content.indexOf('Bảng đơn vị khối lượng, giây và thế kỉ', idx)) !== null && idx !== -1) {
  matches.push(idx);
  idx += 30;
}
console.log('Matches found:', matches.length);
matches.forEach((pos, i) => {
  console.log(`Match ${i}:`, content.substring(pos - 100, pos + 250));
});
