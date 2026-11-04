const path = require('path');
const fs = require('fs');
const filePath = path.join(__dirname, 'archimedes_math_data.js');
const content = fs.readFileSync(filePath, 'utf8');
console.log('File size:', content.length);
const rounds = new Set();
const re = /round:\s*["']([^"']+)["']/g;
let m;
while ((m = re.exec(content)) !== null) {
  rounds.add(m[1]);
}
console.log('Total rounds:', rounds.size);
console.log('Rounds:', Array.from(rounds).slice(0, 30));

const lines = content.split('\n');
const matching = lines.filter(l => l.includes('Phiếu cuối tuần 5'));
console.log('Lines matching "Phiếu cuối tuần 5":', matching.length);
if (matching.length > 0) {
  console.log('Sample:', matching.slice(0, 3));
}

