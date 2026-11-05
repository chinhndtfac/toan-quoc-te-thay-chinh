const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../timo_data.js');
global.window = {};
const timoData = require(filePath);
const timoDb = timoData.TIMO_DB || global.window.TIMO_DB;

const cleanedDb = {};
let removedCount = 0;
let reindexedCount = 0;
let fixedPerimeter = false;

function normalizeRoundName(round) {
  if (!round) return '';
  return round
    .replace(/^Vong loai\s*-\s*De so\s*(\d+)/i, (m, d) => `Vòng loại - Đề số ${d.padStart(2, '0')}`)
    .replace(/^Vòng loại\s*-\s*Đề số\s*(\d+)/i, (m, d) => `Vòng loại - Đề số ${d.padStart(2, '0')}`)
    .replace(/^Vong quoc gia\s*-\s*De so\s*(\d+)/i, (m, d) => `Vòng quốc gia - Đề số ${d.padStart(2, '0')}`)
    .replace(/^Vòng quốc gia\s*-\s*Đề số\s*(\d+)/i, (m, d) => `Vòng quốc gia - Đề số ${d.padStart(2, '0')}`)
    .replace(/^Vong chung ket\s*-\s*De so\s*(\d+)/i, (m, d) => `Vòng chung kết - Đề số ${d.padStart(2, '0')}`)
    .replace(/^Vòng chung kết\s*-\s*Đề số\s*(\d+)/i, (m, d) => `Vòng chung kết - Đề số ${d.padStart(2, '0')}`)
    .trim();
}

for (const grade of Object.keys(timoDb)) {
  const list = timoDb[grade] || [];
  const uniqueList = [];
  const seenExact = new Set();
  const idOccurrences = new Map();

  for (const q of list) {
    // 1. Chuẩn hóa tên vòng thi
    q.round = normalizeRoundName(q.round);

    // 2. Sửa lỗi câu Chu vi TIMO G4 Đề 5 Câu 17
    if (q.id === '4-Vong loai - De so 5-17' || (q.text && q.text.includes('The area of a rectangle is 20. The length is 5 times as the width. Find its perimeter.'))) {
      q.answer = 'D';
      q.acceptedAnswers = ['D', 'd', '24', 'D. 24', '24 cm'];
      q.type = 'mc';
      fixedPerimeter = true;
    }

    // 3. Khử trùng lặp nội dung thực sự (cùng vòng thi và cùng đề bài)
    const exactKey = `${q.round}|${(q.text || '').trim().toLowerCase()}`;
    if (seenExact.has(exactKey)) {
      removedCount++;
      continue;
    }
    seenExact.add(exactKey);

    // 4. Tái định danh phân nhánh nếu trùng ID
    const baseId = q.id || 'TIMO-Q';
    const count = idOccurrences.get(baseId) || 0;
    idOccurrences.set(baseId, count + 1);

    if (count > 0) {
      const suffix = String.fromCharCode(65 + count); // B, C, D...
      q.id = `${baseId}-${suffix}`;
      reindexedCount++;
    }

    uniqueList.push(q);
  }

  cleanedDb[grade] = uniqueList;
  console.log(`[Khối ${grade}] Gốc: ${list.length} -> Sau chuẩn hóa: ${uniqueList.length}`);
}

console.log(`Đã loại bỏ ${removedCount} câu trùng lặp nội dung thực sự.`);
console.log(`Đã phân nhánh định danh ${reindexedCount} câu hỏi khác biệt để bảo tồn tri thức.`);
console.log(`Trạng thái sửa câu Chu vi TIMO: ${fixedPerimeter ? 'THÀNH CÔNG' : 'CHƯA TÌM THẤY'}`);

const outputCode = `// BỘ ĐỀ THI OLYMPIC TOÁN TIMO KHỐI 1 - 5 (ĐÃ CHUẨN HÓA & ĐỒNG NHẤT)\n` +
  `const TIMO_DB = ${JSON.stringify(cleanedDb, null, 2)};\n\n` +
  `if (typeof window !== 'undefined') { window.TIMO_DB = TIMO_DB; }\n` +
  `if (typeof module !== 'undefined') { module.exports = { TIMO_DB }; }\n`;

fs.writeFileSync(filePath, outputCode, 'utf8');
console.log('Đã cập nhật thành công timo_data.js!');
