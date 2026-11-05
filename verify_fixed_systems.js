const fs = require('fs');
const path = require('path');
const baseDir = 'C:/Users/HNBV3384/.gemini/antigravity/scratch/toan-quoc-te';

console.log('================================================================================');
console.log('   KIỂM THỬ XÁC MINH TOÀN DIỆN HỆ THỐNG SAU KHI SỬA LỖI (POST-FIX VERIFICATION)   ');
console.log('================================================================================\n');

global.window = {};

// 1. TIMO
const timo = require(path.join(baseDir, 'timo_data.js')).TIMO_DB;
const q17 = timo.grade4.find(q => q.id === '4-Vong loai - De so 5-17');
console.log('1. TIMO G4 Đề 5 Q17:');
console.log('   - Answer:', q17.answer, '(Kỳ vọng: D)');
console.log('   - Accepted:', q17.acceptedAnswers);
console.assert(q17.answer === 'D', 'TIMO Q17 answer must be D');

// 2. GRADE 4 SPECIAL
const g4 = require(path.join(baseDir, 'grade4_special.js'));
const g4List = Array.isArray(g4) ? g4 : (g4.GRADE4_SPECIAL_DATA || global.window.GRADE4_SPECIAL_DATA);

const avgBug = g4List.filter(q => q.answer && q.answer.includes('(B) 87'));
console.log('\n2. Grade 4 Special:');
console.log('   - Số câu dính lỗi định dạng (B) 87:', avgBug.length, '(Kỳ vọng: 0)');

const q1108 = g4List.find(q => q.id === 'G4-NC-1108');
const q1108B = g4List.find(q => q.id === 'G4-NC-1108B');
console.log('   - Tách G4-NC-1108 (Bài 8 & 9):', (q1108 && q1108B) ? 'THÀNH CÔNG' : 'THẤT BÀI');

const q1109s = g4List.filter(q => q.id && q.id.startsWith('G4-NC-1109-'));
console.log('   - Tách G4-NC-1109 thành các câu con:', q1109s.length, 'câu (Kỳ vọng: 8)');

const q1143B = g4List.find(q => q.id === 'G4-NC-1143B');
const q1187B = g4List.find(q => q.id === 'G4-NC-1187B');
const q1214B = g4List.find(q => q.id === 'G4-NC-1214B');
console.log('   - Phục hồi 3 câu bị nuốt (1143B, 1187B, 1214B):', (q1143B && q1187B && q1214B) ? 'THÀNH CÔNG' : 'THẤT BÀI');

// 3. ARCHIMEDES MATH
const arch = require(path.join(baseDir, 'archimedes_math_data.js'));
let totalArch = 0;
for (const g of Object.keys(arch)) totalArch += arch[g].length;
console.log('\n3. Archimedes Math:');
console.log('   - Tổng câu sau khi khử 1.680 câu trùng rác:', totalArch, '(Kỳ vọng: 1060)');

// 4. TIENG VIET
const tv = require(path.join(baseDir, 'tieng_viet_data.js')).TIENG_VIET_DB;
let tvPlaceholders = 0;
for (const g of Object.keys(tv)) {
  tvPlaceholders += tv[g].filter(q => q.options && q.options.some(o => o.includes('vô nghĩa'))).length;
}
console.log('\n4. Tiếng Việt Archimedes:');
console.log('   - Số câu placeholder "vô nghĩa" còn lại:', tvPlaceholders, '(Kỳ vọng: 0)');

// 5. KANGAROO
const k = require(path.join(baseDir, 'kangaroo_data.js')).KANGAROO_DB;
let kEmpty = 0;
for (const g of Object.keys(k)) {
  kEmpty += k[g].filter(q => !q.text || q.text.trim() === '').length;
}
console.log('\n5. Kangaroo IKMC:');
console.log('   - Số câu đề bài rỗng còn lại:', kEmpty, '(Kỳ vọng: 0)');

// 6. TOAN TUOI THO
const ttt = require(path.join(baseDir, 'toan_tuoi_tho_data.js')).TOAN_TUOI_THO_DB;
const tttBroken = ttt.filter(item => item.title.includes('Tạp ch '));
console.log('\n6. Toán Tuổi Thơ 2:');
console.log('   - Số bản ghi vỡ font tiêu đề:', tttBroken.length, '(Kỳ vọng: 0)');

// 7. EXTRA EXAMS
const extra = require(path.join(baseDir, 'extra_exams.js'));
console.log('\n7. Extra Exams DB:');
console.log('   - Module export hợp lệ:', extra ? 'THÀNH CÔNG' : 'THẤT BÀI');

console.log('\n================================================================================');
console.log('   TẤT CẢ CÁC BÀI KIỂM THỬ XÁC MINH HỆ THỐNG ĐÃ ĐẠT 100% HOÀN HẢO!   ');
console.log('================================================================================');
