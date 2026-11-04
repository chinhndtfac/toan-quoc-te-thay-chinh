const fs = require('fs');
const content = fs.readFileSync('C:\\Users\\HNBV3384\\.gemini\\antigravity\\scratch\\toan-quoc-te\\fmo_de2_raw.txt', 'utf8');

const qList = [16, 17, 18, 19, 20, 21];
qList.forEach(qNum => {
  const re = new RegExp(`ĐVH\\s+${qNum}\\*?\\.([\\s\\S]*?)(?=ĐVH|$)`);
  const m = content.match(re);
  if (m) {
    console.log(`================ Q${qNum} ================`);
    console.log(m[1].trim());
  }
});
