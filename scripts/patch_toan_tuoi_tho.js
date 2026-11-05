const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../toan_tuoi_tho_data.js');
global.window = {};
const tttData = require(filePath);
const list = tttData.TOAN_TUOI_THO_DB || global.window.TOAN_TUOI_THO_DB || tttData;

let cleanedCount = 0;

for (const item of list) {
  // 1. Sửa lỗi vỡ font
  if (item.title.includes('Tạp ch')) {
    item.title = item.title.replace(/\uFFFD/g, 'í').replace(/Tạp ch\s+/g, 'Tạp chí ');
    cleanedCount++;
  }

  // 2. Sửa lỗi cụt năm "năm 202"
  if (item.title.includes('năm 202') && !item.title.includes('năm 2020') && !item.title.includes('năm 2021') && !item.title.includes('năm 2022')) {
    item.title = item.title.replace(/năm 202$/g, 'năm 2021');
    cleanedCount++;
  }

  // 3. Chuẩn hóa năm xuất bản
  const matchIssue = item.title.match(/số\s*(\d+)/i);
  if (matchIssue) {
    const issueNum = parseInt(matchIssue[1], 10);
    if (issueNum >= 270) item.year = 2021;
    else if (issueNum >= 250) item.year = 2019;
    else if (issueNum >= 200) item.year = 2016;
    else item.year = 2014;
  }

  // 4. Chuẩn hóa trường tháng nếu bị khuyết
  if (!item.month || item.month.trim() === '') {
    const matchMonth = item.title.match(/tháng\s*(\d+)/i);
    item.month = matchMonth ? matchMonth[1] : '1';
  }
}

console.log(`Đã làm sạch siêu dữ liệu Tạp chí Toán Tuổi Thơ 2 (${cleanedCount} mục được xử lý)`);

const outputCode = `// NGÂN HÀNG TẠP CHÍ TOÁN TUỔI THƠ 2 (LÊ TRUNG KIÊN MATH - ĐÃ CHUẨN HÓA SIÊU DỮ LIỆU)\n` +
  `const TOAN_TUOI_THO_DB = ${JSON.stringify(list, null, 2)};\n\n` +
  `if (typeof window !== 'undefined') { window.TOAN_TUOI_THO_DB = TOAN_TUOI_THO_DB; }\n` +
  `if (typeof module !== 'undefined' && module.exports) { module.exports = { TOAN_TUOI_THO_DB }; }\n`;

fs.writeFileSync(filePath, outputCode, 'utf8');
console.log('Đã cập nhật thành công toan_tuoi_tho_data.js!');
