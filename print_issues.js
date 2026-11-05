const fs = require('fs');
const issues = JSON.parse(fs.readFileSync('C:/Users/HNBV3384/.gemini/antigravity/scratch/toan-quoc-te/audit_report.json', 'utf8'));

for (let i = 0; i < issues.length; i++) {
  const iss = issues[i];
  console.log(`\n================ Issue ${i+1}: ${iss.type} ================`);
  console.log('Location:', iss.id);
  console.log('Text:', iss.text);
  if (iss.options) console.log('Options:', JSON.stringify(iss.options));
  if (iss.answer) console.log('Current Answer:', iss.answer);
  if (iss.solutionSnippet) console.log('Solution Snippet:', iss.solutionSnippet);
  if (iss.image) console.log('Image:', iss.image);
}
