const fs = require('fs');
const path = require('path');

const g4Path = path.join(__dirname, 'grade4_special.js');
let db = require(g4Path);
console.log('Original db length:', db.length);

const nc_p1 = require('./nc_p1_questions.js');

// Filter out old p1 questions
db = db.filter(q => !(q.round && q.round.includes('01_VIẾT SỐ')));
console.log('After removing old p1:', db.length);

// Also filter out any other item that has answer === "Xem lời giải chi tiết" or text starting with author headers
const beforeClean = db.length;
db = db.filter(q => {
  if (q.answer === 'Xem lời giải chi tiết') return false;
  if (q.text && q.text.includes('Xem lời giải chi tiết')) return false;
  if (q.text && q.text.includes('Biên soạn  Sưu tầm')) return false;
  return true;
});
console.log(`Cleaned ${beforeClean - db.length} remaining junk items from other topics.`);

// Add new authentic nc_p1
db.unshift(...nc_p1);
console.log('Final db length:', db.length);

const output = `// NGÂN HÀNG CHUYÊN ĐỀ TOÁN NÂNG CAO & OLYMPIC LỚP 4 (CHUẨN GIÁO TRÌNH THẦY NGUYỄN ĐÌNH CHINH - 04. NC 2017)
// Đầy đủ Chuyên đề Toán nâng cao CLC & SEAMO, cùng Math IQ chọn lọc có sơ đồ hình vẽ chuẩn
// Tác giả hệ thống: Thầy Nguyễn Đình Chinh (0941.492.468)

const GRADE4_SPECIAL_DB = ${JSON.stringify(db, null, 2)};

if (typeof window !== 'undefined') {
  window.GRADE4_SPECIAL_DATA = GRADE4_SPECIAL_DB;
}
if (typeof module !== 'undefined') {
  module.exports = GRADE4_SPECIAL_DB;
}
`;

fs.writeFileSync(g4Path, output, 'utf8');
console.log('Successfully updated grade4_special.js');
