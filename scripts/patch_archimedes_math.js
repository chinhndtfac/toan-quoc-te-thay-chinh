const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../archimedes_math_data.js');
global.window = {};
const data = require(filePath);
const archDb = data.ARCHIMEDES_MATH_DB || global.window.ARCHIMEDES_MATH_DB || data;

const cleanedDb = {};
let removedCount = 0;

for (const grade of ['grade1', 'grade2', 'grade3', 'grade4', 'grade5']) {
  const list = archDb[grade] || [];
  const uniqueList = [];
  const seen = new Set();

  for (let i = 0; i < list.length; i++) {
    const curr = list[i];
    // Key based on id + round + text snippet
    const key = `${curr.id}|${curr.round}|${(curr.text || '').slice(0, 50)}`;
    if (seen.has(key)) {
      removedCount++;
    } else {
      seen.add(key);
      uniqueList.push(curr);
    }
  }
  cleanedDb[grade] = uniqueList;
  console.log(`[Khối ${grade}] Gốc: ${list.length} -> Sau lọc: ${uniqueList.length}`);
}

console.log(`Tổng số bản ghi rác trùng lặp đã loại bỏ: ${removedCount} (Kỳ vọng: 1680)`);

const outputCode = `// BỘ BÀI TẬP TOÁN ARCHIMEDES LỚP 1 - 5 (ĐÃ KHỬ TRÙNG LẶP CHUẨN HÓA)\n` +
  `const ARCHIMEDES_MATH_DB = ${JSON.stringify(cleanedDb, null, 2)};\n\n` +
  `if (typeof window !== 'undefined') { window.ARCHIMEDES_MATH_DB = ARCHIMEDES_MATH_DB; }\n` +
  `if (typeof module !== 'undefined') { module.exports = ARCHIMEDES_MATH_DB; }\n`;

fs.writeFileSync(filePath, outputCode, 'utf8');
console.log('Đã cập nhật thành công archimedes_math_data.js sạch!');
