const fs = require('fs');
const html = fs.readFileSync('C:/Users/HNBV3384/.gemini/antigravity/scratch/toan-quoc-te/index.html', 'utf8');

const target = 'caches.delete';
console.log('caches.delete in html:', html.includes(target));

const idx = html.indexOf('window.addEventListener(\'load\'');
if (idx !== -1) {
  console.log(html.substring(idx, idx + 600));
} else {
  console.log('No window load listener');
}
