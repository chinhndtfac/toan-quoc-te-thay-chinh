const fs = require('fs');
const vm = require('vm');

const code = fs.readFileSync('C:/Users/HNBV3384/.gemini/antigravity/scratch/toan-quoc-te/timo_data.js', 'utf8');
const sandbox = { window: {} };
vm.createContext(sandbox);
vm.runInContext(code, sandbox);
const db = sandbox.TIMO_DB || sandbox.window.TIMO_DB;

const missing = [];
for (let g = 1; g <= 5; g++) {
  const list = db['grade' + g] || [];
  list.forEach(q => {
    const text = (q.text || '').toLowerCase();
    const needsImg = /figure below|polygon below|grid below|pattern below|hình dưới đây|trong hình dưới|theo hình vẽ|như hình vẽ|bảng dưới đây|bảng số dưới đây|được tô màu|hình sau|hình vẽ sau|following figure/i.test(text);
    if (needsImg && !q.image) {
      missing.push({
        grade: g,
        id: q.id,
        round: q.round,
        topic: q.topic,
        text: q.text,
        ans: q.answer,
        expl: q.explanation
      });
    }
  });
}

console.log('Total missing image questions:', missing.length);

// Group by topic
const byTopic = {};
missing.forEach(m => {
  byTopic[m.topic] = (byTopic[m.topic] || 0) + 1;
});
console.log('By topic:', byTopic);

// Write to JSON for inspection
fs.writeFileSync('C:/Users/HNBV3384/.gemini/antigravity/scratch/toan-quoc-te/scripts/missing_timo_details.json', JSON.stringify(missing, null, 2), 'utf8');
console.log('Saved to missing_timo_details.json');
