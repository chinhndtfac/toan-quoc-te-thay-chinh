const fs = require('fs');

const grade4Path = 'C:\\Users\\HNBV3384\\.gemini\\antigravity\\scratch\\toan-quoc-te\\grade4_special.js';
const origCode = fs.readFileSync('C:\\Users\\HNBV3384\\.gemini\\antigravity\\scratch\\toan-quoc-te\\grade4_special_orig.js', 'utf8');

// Load orig
const fn = new Function(origCode + '; return GRADE4_SPECIAL_DB;');
const origDb = fn();

// Extract authentic G4-NC questions
const ncQuestions = origDb.filter(q => q.id && q.id.startsWith('G4-NC-'));

// The 8 verified questions for Math IQ Level 2 De so 5
const mathIq5Questions = [
  {
    id: "G4-IQ-05-1",
    exam: "SPECIAL_G4",
    grade: 4,
    round: "05_MATH IQ LEVEL 2_Đề số 5",
    topic: "05_MATH IQ LEVEL 2_Đề số 5",
    num: 1,
    text: "Quan sát và lựa chọn phương án phù hợp để hoàn thành quy luật hình:",
    image: "images/math_iq_g4_de5_q1.png",
    options: ["A. Phương án A", "B. Phương án B", "C. Phương án C"],
    answer: "C",
    explanation: "Quy luật: Ở mỗi hàng, tổng số ô vuông được tô màu đen là 20 ô.\n- Hàng 1: 5 + 6 + 6 + 3 = 20 ô tô đậm.\n- Hàng 2: 5 + 5 + 5 + 5 = 20 ô tô đậm.\n- Hàng 3: Đang có 6 + 6 + 3 = 15 ô tô đậm, do đó hình còn thiếu phải có: 20 - 15 = 5 ô vuông tô đậm.\nĐối chiếu các phương án A, B, C thì chỉ có hình C có đúng 5 ô vuông tô đậm.\nĐáp án: C.",
    type: "mc",
    subItems: []
  },
  {
    id: "G4-IQ-05-2",
    exam: "SPECIAL_G4",
    grade: 4,
    round: "05_MATH IQ LEVEL 2_Đề số 5",
    topic: "05_MATH IQ LEVEL 2_Đề số 5",
    num: 2,
    text: "Quan sát quy luật và tìm số thích hợp điền vào vị trí dấu hỏi:",
    image: "images/math_iq_g4_de5_q2.png",
    options: [],
    answer: "37",
    acceptedAnswers: ["37"],
    explanation: "Quy luật: Ở mỗi hàng, chữ số bên phải thêm 2 đơn vị rồi ghép với chữ số bên trái để được số ở giữa có hai chữ số:\n- Hàng 1: Chữ số bên phải là 3, thêm 2 được 5. Ghép với chữ số bên trái là 6 được số ở giữa là 65.\n- Hàng 3: Chữ số bên phải là 4, thêm 2 được 6. Ghép với chữ số bên trái là 5 được số ở giữa là 56.\n- Hàng 2: Chữ số bên phải là 5, thêm 2 được 7. Ghép với chữ số bên trái là 3 được số ở giữa là 37.\nVậy số cần điền vào dấu ? là 37.\nĐáp số: 37.",
    type: "fill",
    subItems: []
  },
  {
    id: "G4-IQ-05-3",
    exam: "SPECIAL_G4",
    grade: 4,
    round: "05_MATH IQ LEVEL 2_Đề số 5",
    topic: "05_MATH IQ LEVEL 2_Đề số 5",
    num: 3,
    text: "Số nào sẽ hoàn thiện quy luật dưới đây?",
    image: "images/math_iq_g4_de5_q3.png",
    options: [],
    answer: "1",
    acceptedAnswers: ["1"],
    explanation: "Quy luật: Ở mỗi hàng, ghép các chữ số tạo thành một số có 3 chữ số:\n- Hàng 1 ghép được số: 936\n- Hàng 2 ghép được số: 425\nLấy hiệu hai số: 936 - 425 = 511.\nSố ở hàng thứ ba chính là 511, do đó chữ số ở vị trí dấu ? là chữ số 1.\nĐáp số: 1.",
    type: "fill",
    subItems: []
  },
  {
    id: "G4-IQ-05-4",
    exam: "SPECIAL_G4",
    grade: 4,
    round: "05_MATH IQ LEVEL 2_Đề số 5",
    topic: "05_MATH IQ LEVEL 2_Đề số 5",
    num: 4,
    text: "Quan sát quy luật và tìm số thích hợp điền vào vị trí dấu hỏi:",
    image: "images/math_iq_g4_de5_q4.png",
    options: [],
    answer: "5",
    acceptedAnswers: ["5"],
    explanation: "Quy luật: Ở mỗi hình thoi, hiệu của các cặp số đối diện nhau luôn bằng 3:\n- Hình 1: 10 - 7 = 3 và 9 - 6 = 3.\n- Hình 3: 15 - 12 = 3 và 12 - 9 = 3.\n- Hình 2: 11 - 8 = 3, do đó số ở đáy phải thỏa mãn: ? - 2 = 3 => ? = 5.\nVậy số cần điền vào dấu ? là 5.\nĐáp số: 5.",
    type: "fill",
    subItems: []
  },
  {
    id: "G4-IQ-05-5",
    exam: "SPECIAL_G4",
    grade: 4,
    round: "05_MATH IQ LEVEL 2_Đề số 5",
    topic: "05_MATH IQ LEVEL 2_Đề số 5",
    num: 5,
    text: "Quan sát quy luật và tìm hình thích hợp điền vào vị trí dấu hỏi:",
    image: "images/math_iq_g4_de5_q5.png",
    options: ["A. Hình vuông 12", "B. Hình vuông 15", "C. Hình tròn 4"],
    answer: "B",
    explanation: "Quy luật: Ở mỗi hàng luôn chứa 2 hình tròn, 1 hình vuông và 1 hình lục giác. Đồng thời, tổng các số trong 2 hình tròn bằng tổng các số trong 2 hình còn lại:\n- Hàng 1: Tổng 2 hình tròn (5 + 9 = 14) = Hình vuông 6 + Lục giác 8 (14).\n- Hàng 2: Tổng 2 hình tròn (12 + 9 = 21) = Hình vuông 10 + Lục giác 11 (21).\n- Hàng 3: Đang có 2 hình tròn (9 và 9) và 1 hình lục giác (3). Do đó, hình còn thiếu phải là 1 hình vuông có số x sao cho: 9 + 9 = 3 + x => x = 15.\nĐối chiếu các phương án A, B, C thì hình B là hình vuông chứa số 15.\nĐáp án: B.",
    type: "mc",
    subItems: []
  },
  {
    id: "G4-IQ-05-6",
    exam: "SPECIAL_G4",
    grade: 4,
    round: "05_MATH IQ LEVEL 2_Đề số 5",
    topic: "05_MATH IQ LEVEL 2_Đề số 5",
    num: 6,
    text: "Điền chữ cái còn thiếu để hoàn thành quy luật dưới đây:",
    image: "images/math_iq_g4_de5_q6.png",
    options: [],
    answer: "U",
    acceptedAnswers: ["U", "u"],
    explanation: "Quy luật: Xét theo từng cột dọc, cộng thứ tự của chữ cái trong bảng chữ cái tiếng Anh ở hàng 1 và hàng 2 ta được chữ cái ở hàng 3:\n- Cột 3: I (thứ 9) + A (thứ 1) = J (thứ 10).\n- Cột 2: U (thứ 21) + C (thứ 3) = X (thứ 24).\n- Cột 1: Q (thứ 17) + D (thứ 4) = U (thứ 21).\nVậy chữ cái cần điền vào dấu ? là U.\nĐáp số: U.",
    type: "fill",
    subItems: []
  },
  {
    id: "G4-IQ-05-7",
    exam: "SPECIAL_G4",
    grade: 4,
    round: "05_MATH IQ LEVEL 2_Đề số 5",
    topic: "05_MATH IQ LEVEL 2_Đề số 5",
    num: 7,
    text: "Quan sát quy luật và điền số còn thiếu vào vị trí dấu hỏi:",
    image: "images/math_iq_g4_de5_q7.png",
    options: [],
    answer: "6",
    acceptedAnswers: ["6"],
    explanation: "Quy luật: Hiệu giữa hai số đối diện nhau qua cạnh hoặc đường chéo thêm 1 thì được số ở trung tâm cạnh tương ứng:\n- Cạnh trên: 7 - 4 = 3, thêm 1 được số ở giữa là 4.\n- Cạnh phải: 9 - 7 = 2, thêm 1 được số ở giữa là 3.\n- Cạnh trái: 5 - 4 = 1, thêm 1 được số ở giữa là 2.\n- Cạnh dưới: 9 - 5 = 4, thêm 1 được số ở giữa là 5.\nÁp dụng cho tâm chính giữa (giao của hai đường chéo):\n- Đường chéo 9 và 4: (9 - 4) + 1 = 5 + 1 = 6.\n- Đường chéo 7 và 2: (7 - 2) + 1 = 5 + 1 = 6.\nVậy số cần điền vào dấu ? ở chính giữa là 6.\nĐáp số: 6.",
    type: "fill",
    subItems: []
  },
  {
    id: "G4-IQ-05-8",
    exam: "SPECIAL_G4",
    grade: 4,
    round: "05_MATH IQ LEVEL 2_Đề số 5",
    topic: "05_MATH IQ LEVEL 2_Đề số 5",
    num: 8,
    text: "Quan sát quy luật và điền số thích hợp vào vị trí dấu hỏi:",
    image: "images/math_iq_g4_de5_q8.png",
    options: [],
    answer: "10",
    acceptedAnswers: ["10"],
    explanation: "Quy luật: Ở mỗi hình tròn, các số có mối quan hệ gấp đôi:\n- Hình 1: Số bên trái gấp đôi số bên phải (6 = 3 × 2, 4 = 2 × 2).\n- Hình 3: Số bên phải gấp đôi số bên trái (12 = 6 × 2, 2 = 1 × 2).\n- Hình 2: Hàng trên số bên phải gấp đôi số bên trái (8 = 4 × 2). Do đó hàng dưới số ở vị trí dấu ? phải bằng gấp đôi của 5: 5 × 2 = 10.\nVậy số cần điền vào dấu ? là 10.\nĐáp số: 10.",
    type: "fill",
    subItems: []
  }
];

const finalDb = [...ncQuestions, ...mathIq5Questions];
console.log(`Merged DB: ${finalDb.length} questions.`);

const finalTopics = {};
finalDb.forEach(q => {
  const t = q.round || q.topic;
  finalTopics[t] = (finalTopics[t] || 0) + 1;
});

console.log(`Total Topics: ${Object.keys(finalTopics).length}`);
for (const [k, v] of Object.entries(finalTopics)) {
  console.log(`  - ${k}: ${v} câu`);
}

const header = `// NGÂN HÀNG CHUYÊN ĐỀ TOÁN NÂNG CAO & OLYMPIC LỚP 4 (CHUẨN GIÁO TRÌNH THẦY NGUYỄN ĐÌNH CHINH - 04. NC 2017)
// Đầy đủ 24 Chuyên đề Toán nâng cao CLC & SEAMO, cùng Math IQ chọn lọc có sơ đồ hình vẽ chuẩn
// Tác giả hệ thống: Thầy Nguyễn Đình Chinh (0941.492.468)

const GRADE4_SPECIAL_DB = ${JSON.stringify(finalDb, null, 2)};

if (typeof window !== 'undefined') {
  window.GRADE4_SPECIAL_DATA = GRADE4_SPECIAL_DB;
}
if (typeof module !== 'undefined') {
  module.exports = GRADE4_SPECIAL_DB;
}
`;

fs.writeFileSync(grade4Path, header, 'utf8');
console.log('Successfully written clean grade4_special.js!');
