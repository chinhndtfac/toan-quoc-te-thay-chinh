const fs = require('fs');
const html = fs.readFileSync('C:/Users/HNBV3384/.gemini/antigravity/scratch/toan-quoc-te/index.html', 'utf8');

const lines = html.split('\n');
lines.forEach(l => {
  if (l.includes('<script') && l.includes('src=')) {
    console.log(l.trim());
  }
});
