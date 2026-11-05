const fs = require('fs');
const html = fs.readFileSync('C:/Users/HNBV3384/.gemini/antigravity/scratch/toan-quoc-te/index.html', 'utf8');

const idx = html.indexOf('function renderReview');
if (idx !== -1) {
  console.log(html.substring(idx, idx + 1500));
} else {
  console.log('No renderReview found');
}
