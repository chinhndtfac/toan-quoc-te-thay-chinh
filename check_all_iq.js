const fs = require('fs');
const path = require('path');

const g4 = fs.readFileSync(path.join(__dirname, 'grade4_special.js'), 'utf8');

const match = g4.match(/window\.GRADE4_SPECIAL_DATA\s*=\s*(\[[\s\S]*\]);/);
if (match) {
  const data = JSON.parse(match[1]);
  console.log('Total items in GRADE4_SPECIAL_DATA:', data.length);
  const topicMap = {};
  data.forEach((item, idx) => {
    const t = item.topic || 'unknown';
    if (!topicMap[t]) topicMap[t] = { total: 0, junk: 0 };
    topicMap[t].total++;
    const str = JSON.stringify(item);
    if (str.includes('Xem l') || str.includes('Quy lu') || item.answer === 'Xem lời giải' || (item.options && item.options.some(o => o.includes('Xem l')))) {
      topicMap[t].junk++;
    }
  });
  console.log('Topics and junk count:');
  for (const [t, stats] of Object.entries(topicMap)) {
    console.log(` - ${t}: total=${stats.total}, junk=${stats.junk}`);
  }
} else {
  console.log('Could not match JSON array');
}
