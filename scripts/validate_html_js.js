const fs = require('fs');

const html = fs.readFileSync('C:/Users/HNBV3384/.gemini/antigravity/scratch/toan-quoc-te/index.html', 'utf8');

// Extract all <script> blocks that are inline (without src) and check for syntax errors
const scriptRegex = /<script(?![^>]*src=)[^>]*>([\s\S]*?)<\/script>/gi;
let match;
let count = 0;
while ((match = scriptRegex.exec(html)) !== null) {
  count++;
  const code = match[1];
  try {
    new Function(code);
    console.log(`Inline script #${count} syntax OK!`);
  } catch (e) {
    console.error(`Syntax error in inline script #${count}:`, e.message);
  }
}

console.log('Total inline scripts validated:', count);
