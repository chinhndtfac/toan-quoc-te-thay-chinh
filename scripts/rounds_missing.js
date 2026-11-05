const fs = require('fs');
const vm = require('vm');

const code = fs.readFileSync('C:/Users/HNBV3384/.gemini/antigravity/scratch/toan-quoc-te/timo_data.js', 'utf8');
const sandbox = { window: {} };
vm.createContext(sandbox);
vm.runInContext(code, sandbox);
const db = sandbox.TIMO_DB || sandbox.window.TIMO_DB;

const rounds = {};
for (let g = 1; g <= 5; g++) {
  const list = db['grade' + g] || [];
  list.forEach(q => {
    const key = `Grade ${g} - ${q.round}`;
    if (!rounds[key]) rounds[key] = { total: 0, missingImg: 0, missingList: [] };
    rounds[key].total++;
    const text = (q.text || '').toLowerCase();
    const needsImg = /figure below|polygon below|grid below|pattern below|hình dưới đây|trong hình dưới|theo hình vẽ|như hình vẽ|bảng dưới đây|bảng số dưới đây|được tô màu|hình sau|hình vẽ sau|following figure/i.test(text);
    if (needsImg && !q.image) {
      rounds[key].missingImg++;
      rounds[key].missingList.push({ num: q.num, id: q.id });
    }
  });
}

console.log('Rounds breakdown:');
for (let k in rounds) {
  if (rounds[k].missingImg > 0) {
    console.log(`${k}: ${rounds[k].missingImg}/${rounds[k].total} missing images -> Q:`, rounds[k].missingList.map(x => x.num).join(', '));
  }
}
