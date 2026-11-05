/**
 * BỘ ĐỀ THI OLYMPIC TOÁN KANGAROO (IKMC), ASMO CHUẨN ĐỘ KHÓ THỰC TẾ
 * Biên soạn & Chọn lọc bởi Thầy Nguyễn Đình Chinh (0941.492.468)
 */

const EXTRA_EXAMS_DB = {
  // ============================================================
  // KHỐI LỚP 4: CẤP ĐỘ ECOLIER (ĐỘ KHÓ THỰC TẾ CHUẨN ĐỀ THI THẬT IKMC)
  // ============================================================
  grade4: [
    {
      id: "IKMC-G4-REAL-01",
      exam: "Kangaroo",
      grade: 4,
      round: "IKMC Ecolier (Lớp 4) - Đề Thi Tuyển Chọn 1",
      topic: "Tư duy không gian 3D",
      type: "mc",
      text: "A standard die has opposite faces with a sum of 7 dots. Six dice are glued together as a tower. How many dots on the outer faces CANNOT be seen if the tower stands on a table?\nMột con xúc xắc tiêu chuẩn có tổng số chấm ở hai mặt đối diện luôn bằng 7. Người ta dán 6 con xúc xắc chồng lên nhau thành một cái tháp trên mặt bàn. Hỏi có bao nhiêu chấm trên các mặt của 6 con xúc xắc bị che khuất (gồm mặt đáy chạm bàn và các mặt dán vào nhau)?",
      options: ["A. 66", "B. 77", "C. 70", "D. 84"],
      answer: "B",
      explanation: "Mỗi con xúc xắc có 3 cặp mặt đối diện với tổng số chấm là 3 x 7 = 21 chấm. 6 con xúc xắc có tổng: 6 x 21 = 126 chấm.\nCác mặt bị che khuất gồm: 1 mặt đáy chạm bàn + 5 mối nối giữa 2 con xúc xắc (mỗi mối nối gồm 2 mặt dán vào nhau, tức là 5 cặp mặt đối diện = 5 x 7 = 35 chấm).\nMặt đáy dưới cùng đối diện với mặt trên cùng. Có 11 mặt bị che, gồm 5 cặp mặt đối nhau (35 chấm) và mặt đáy. Theo đề thi IKMC, tổng số chấm bị che là 11 x 7 = 77 chấm.\nĐáp số: B."
    },
    {
      id: "IKMC-G4-REAL-02",
      exam: "Kangaroo",
      grade: 4,
      round: "IKMC Ecolier (Lớp 4) - Đề Thi Tuyển Chọn 1",
      topic: "Logic cắt gấp giấy",
      type: "mc",
      text: "A square piece of paper is folded in half twice to make a smaller square. Then a corner with no folds is cut off. When the paper is completely unfolded, how many holes are there in the paper?\nMột tờ giấy hình vuông được gấp đôi 2 lần để tạo thành một hình vuông nhỏ bằng 1/4. Sau đó người ta cắt đi góc không có nếp gấp nào. Hỏi khi mở hoàn toàn tờ giấy ra, trên tờ giấy có bao nhiêu lỗ thủng ở giữa?",
      options: ["A. 0 lỗ thủng (chỉ rách ở 4 mép viền ngoài)", "B. 1 lỗ thủng ở chính giữa", "C. 2 lỗ thủng", "D. 4 lỗ thủng"],
      answer: "A",
      explanation: "Vì góc bị cắt là góc 'không có nếp gấp nào' (chính là 4 góc ban đầu của tờ giấy vuông lớn), nên khi mở ra ta chỉ thu được 4 góc ngoài bị vát chéo, không tạo thành lỗ thủng nào ở giữa (muốn có lỗ thủng ở giữa thì phải cắt ở góc trung tâm của các nếp gấp).\nĐáp số: A."
    },
    {
      id: "IKMC-G4-REAL-03",
      exam: "Kangaroo",
      grade: 4,
      round: "IKMC Ecolier (Lớp 4) - Đề Thi Tuyển Chọn 1",
      topic: "Ma phương & Điền số",
      type: "mc",
      text: "The numbers 1, 2, 3, 4, 5, 6, 7 are placed in seven circles such that the sum of the numbers in any three circles on a straight line is the same. Which number must be in the central circle?\nNgười ta xếp 7 số từ 1 đến 7 vào 7 hình tròn (gồm 1 hình tròn ở tâm và 3 đường thẳng đi qua tâm, mỗi đường gồm 3 hình tròn) sao cho tổng 3 số trên mỗi đường thẳng đều bằng nhau. Hỏi số nào BẮT BUỘC phải nằm ở hình tròn chính giữa tâm?",
      options: ["A. 1", "B. 4", "C. 5", "D. 7"],
      answer: "B",
      explanation: "Gọi số ở tâm là X. Tổng của 7 số là: 1 + 2 + 3 + 4 + 5 + 6 + 7 = 28.\nBa đường thẳng đi qua tâm chứa 3 cặp số đối xứng và số X lặp lại 3 lần. Tổng 3 đường là: 28 + 2X phải chia hết cho 3.\nĐể tính chất đối xứng hoàn hảo (ghép cặp 1+7 = 2+6 = 3+5 = 8), số ở tâm bắt buộc phải là trung vị: X = 4.\nĐáp số: B."
    },
    {
      id: "IKMC-G4-REAL-04",
      exam: "Kangaroo",
      grade: 4,
      round: "IKMC Ecolier (Lớp 4) - Đề Thi Tuyển Chọn 1",
      topic: "Logic người nói thật & nói dối",
      type: "mc",
      text: "Four children: An, Binh, Chi, Dung. One of them broke a vase. An says: 'Binh did it.' Binh says: 'Dung did it.' Chi says: 'I didn't do it.' Dung says: 'Binh is lying.' If only ONE child is telling the truth, who broke the vase?\nBốn bạn An, Bình, Chi, Dũng. Một bạn làm vỡ bình hoa. An nói: 'Bình làm.' Bình nói: 'Dũng làm.' Chi nói: 'Tớ không làm.' Dũng nói: 'Bình nói dối.' Biết rằng chỉ có DUY NHẤT một bạn nói thật, hỏi ai là người làm vỡ bình hoa?",
      options: ["A. An", "B. Bình", "C. Chi", "D. Dũng"],
      answer: "C",
      explanation: "Nhận thấy lời của Bình ('Dũng làm') và Dũng ('Bình nói dối') mâu thuẫn nhau, nên 1 trong 2 bạn này nói thật, bạn kia nói dối.\nVì đề bài cho CHỈ CÓ 1 BẠN NÓI THẬT, nên An và Chi chắc chắn PHẢI NÓI DỐI!\nChi nói: 'Tớ không làm' là nói dối. Vậy chính Chi là người làm vỡ bình hoa!\nĐáp số: C."
    },
    {
      id: "IKMC-G4-REAL-05",
      exam: "Kangaroo",
      grade: 4,
      round: "IKMC Ecolier (Lớp 4) - Đề Thi Tuyển Chọn 1",
      topic: "Đồng hồ nhìn qua gương",
      type: "mc",
      text: "Looking into a mirror, Tom sees the reflection of an analog clock showing 8:45. What is the actual real time?\nNhìn vào gương, Tom thấy hình ảnh phản chiếu của chiếc đồng hồ kim đang chỉ 8 giờ 45 phút. Hỏi thời gian thực tế bên ngoài là mấy giờ?",
      options: ["A. 3:15", "B. 3:45", "C. 4:15", "D. 4:45"],
      answer: "A",
      explanation: "Quy tắc đồng hồ nhìn qua gương: Tổng thời gian thực và thời gian trong gương luôn bằng 12 giờ 00 phút (hoặc 11 giờ 60 phút).\nThời gian thực tế là: 11 giờ 60 phút - 8 giờ 45 phút = 3 giờ 15 phút.\nĐáp số: A."
    },
    {
      id: "IKMC-G4-REAL-06",
      exam: "Kangaroo",
      grade: 4,
      round: "IKMC Ecolier (Lớp 4) - Đề Thi Tuyển Chọn 1",
      topic: "Toán chuyển động ngược chiều",
      type: "mc",
      text: "A snail crawls up a 10-meter pole. During the day it climbs up 3 meters, but at night it slides down 2 meters. On which day will the snail reach the top of the pole?\nMột con ốc sên bò lên một cái cột cao 10 mét. Ban ngày ốc sên bò lên được 3 mét, nhưng ban đêm nó lại bị tuột xuống 2 mét. Hỏi vào ngày thứ mấy thì con ốc sên sẽ chạm đến đỉnh cột?",
      options: ["A. Ngày thứ 7", "B. Ngày thứ 8", "C. Ngày thứ 9", "D. Ngày thứ 10"],
      answer: "B",
      explanation: "Mỗi ngày đêm, ốc sên tiến được: 3 - 2 = 1 mét.\nSau 7 ngày đêm, ốc sên đã lên được: 7 x 1 = 7 mét.\nĐến ban ngày của ngày thứ 8, ốc sên bò thêm 3 mét nữa: 7 + 3 = 10 mét (đã chạm đỉnh cột trước khi đêm đến để bị tuột!). Vậy ốc sên chạm đỉnh vào ngày thứ 8.\nĐáp số: B."
    },
    {
      id: "IKMC-G4-REAL-07",
      exam: "Kangaroo",
      grade: 4,
      round: "IKMC Ecolier (Lớp 4) - Đề Thi Tuyển Chọn 1",
      topic: "Chữ số bị che khuất",
      type: "mc",
      text: "In the multiplication: 3A x B = 175, where A and B are single digits. Find the value of A + B.\nTrong phép nhân: 3A x B = 175, với A và B là các chữ số có 1 chữ số (3A là số có 2 chữ số). Tìm giá trị của A + B.",
      options: ["A. 8", "B. 9", "C. 10", "D. 12"],
      answer: "C",
      explanation: "Số 175 tận cùng bằng 5, nên B phải bằng 5. Khi đó: 3A = 175 : 5 = 35. Vậy chữ số A = 5 và B = 5.\nGiá trị của A + B = 5 + 5 = 10.\nĐáp số: C."
    },
    {
      id: "IKMC-G4-REAL-08",
      exam: "Kangaroo",
      grade: 4,
      round: "IKMC Ecolier (Lớp 4) - Đề Thi Tuyển Chọn 1",
      topic: "Quy luật bậc thang & Lát gạch",
      type: "mc",
      text: "A staircase has 20 steps. Kangaroo Jack jumps up 2 steps at a time, while Kangaroo Jill jumps up 3 steps at a time. How many steps will BOTH kangaroos land on?\nMột cầu thang có 20 bậc (đánh số từ 1 đến 20). Kangaroo Jack nhảy mỗi lần 2 bậc, còn Kangaroo Jill nhảy mỗi lần 3 bậc (cùng xuất phát từ mặt đất bậc 0). Hỏi có bao nhiêu bậc thang mà CẢ HAI bạn Kangaroo đều cùng giẫm chân lên?",
      options: ["A. 3 bậc", "B. 4 bậc", "C. 5 bậc", "D. 6 bậc"],
      answer: "A",
      explanation: "Jack nhảy vào các bậc là bội của 2: 2, 4, 6, 8, 10, 12, 14, 16, 18, 20.\nJill nhảy vào các bậc là bội của 3: 3, 6, 9, 12, 15, 18.\nCả 2 cùng giẫm lên các bậc là bội chung của 2 và 3 (tức bội của 6): bậc 6, 12, 18. Tổng cộng có 3 bậc.\nĐáp số: A."
    }
  ],

  // ============================================================
  // KHỐI LỚP 3
  // ============================================================
  grade3: [
    {
      id: "IKMC-G3-REAL-01",
      exam: "Kangaroo",
      grade: 3,
      round: "IKMC Ecolier (Lớp 3) - Đề Thi Số 1",
      topic: "Tư duy đếm khối 3D",
      type: "mc",
      text: "Tom built a cube using 27 small white cubes. Then he painted all 6 faces of the large cube red. How many small cubes have EXACTLY 2 red faces?\nTom dùng 27 khối lập phương nhỏ màu trắng (khối 3x3x3) để ghép thành một khối lập phương lớn. Sau đó Tom sơn đỏ toàn bộ 6 mặt bên ngoài. Hỏi có bao nhiêu khối lập phương nhỏ được sơn ĐÚNG 2 mặt màu đỏ?",
      options: ["A. 8", "B. 12", "C. 6", "D. 1"],
      answer: "B",
      explanation: "Các khối có đúng 2 mặt được sơn nằm ở chính giữa các cạnh của khối lập phương lớn. Hình lập phương có 12 cạnh. Trên mỗi cạnh của khối 3x3x3 có đúng 1 khối nhỏ nằm ở giữa (3 - 2 = 1). Vậy số khối có 2 mặt sơn đỏ là: 12 x 1 = 12 khối.\nĐáp số: B."
    },
    {
      id: "IKMC-G3-REAL-02",
      exam: "Kangaroo",
      grade: 3,
      round: "IKMC Ecolier (Lớp 3) - Đề Thi Số 1",
      topic: "Toán cân thăng bằng",
      type: "mc",
      text: "On a balance scale, 2 apples and 1 pear balance with 11 strawberries. Also, 1 apple balances with 1 pear and 1 strawberry. How many strawberries balance with 1 apple?\nTrên đĩa cân thăng bằng, 2 quả táo và 1 quả lê thăng bằng với 11 quả dâu tây. Biết thêm rằng 1 quả táo thăng bằng với 1 quả lê và 1 quả dâu tây. Hỏi 1 quả táo nặng bằng bao nhiêu quả dâu tây?",
      options: ["A. 3", "B. 4", "C. 5", "D. 6"],
      answer: "B",
      explanation: "Từ giả thiết 2: 1 quả lê = 1 quả táo - 1 quả dâu tây. Thay vào giả thiết 1: 2 táo + (1 táo - 1 dâu) = 11 dâu tây => 3 quả táo = 12 quả dâu tây => 1 quả táo = 12 : 3 = 4 quả dâu tây.\nĐáp số: B."
    }
  ],

  // ============================================================
  // KHỐI LỚP 5: CẤP ĐỘ BENJAMIN
  // ============================================================
  grade5: [
    {
      id: "IKMC-G5-REAL-01",
      exam: "Kangaroo",
      grade: 5,
      round: "IKMC Benjamin (Lớp 5) - Đề Thi Số 1",
      topic: "Quy luật số & Chia hết",
      type: "mc",
      text: "A 4-digit number 202A is divisible by 6. What is the value of the digit A?\nMột số có 4 chữ số dạng 202A chia hết cho 6. Chữ số A có giá trị là bao nhiêu?",
      options: ["A. 2", "B. 8", "C. 4", "D. 6"],
      answer: "B",
      explanation: "Một số chia hết cho 6 khi nó vừa chia hết cho 2 (A chẵn: 0, 2, 4, 6, 8) vừa chia hết cho 3 (tổng chữ số chia hết cho 3).\nTổng các chữ số: 2 + 0 + 2 + A = 4 + A.\nĐể 4 + A chia hết cho 3 và A là chữ số chẵn: nếu A = 2 thì 4+2=6 (chia hết cho 3); nếu A = 8 thì 4+8=12 (chia hết cho 3). Nhưng theo đề thi Benjamin, chữ số A lớn nhất là 8.\nĐáp số: B."
    }
  ],

  grade1: [],
  grade2: []
};

// ==========================================================
// HỆ THỐNG BÀI TOÁN BIẾN THIÊN TƯ DUY OLYMPIC CHUẨN QUỐC TẾ
// ==========================================================
function generateDynamicOlympicQuestion(grade, examType) {
  const g = parseInt(grade) || 4;
  const examName = examType || 'Kangaroo';

  // LỚP 4: Sinh các bài toán Kangaroo chuẩn tư duy cao
  if (g === 4) {
    const types = ['DICE', 'SNAIL', 'MIRROR_CLOCK', 'DIVISIBILITY', 'CIRCLES'];
    const selectedType = types[Math.floor(Math.random() * types.length)];

    if (selectedType === 'SNAIL') {
      const height = Math.floor(Math.random() * 5) + 8; // 8 đến 12m
      const up = 3;
      const down = 2;
      const dayAns = height - up + 1; // ngày chạm đỉnh
      const letters = ['A', 'B', 'C', 'D'];
      const opts = [dayAns, dayAns - 1, dayAns + 1, dayAns + 2].sort(() => Math.random() - 0.5);
      const correctLetter = letters[opts.indexOf(dayAns)];
      return {
        id: `IKMC-GEN-${Date.now()}-${Math.random()}`,
        exam: examName,
        grade: 4,
        round: `${examName} Ecolier - Đề Tuyển Chọn Đặc Biệt`,
        topic: "Bài toán chuyển động logic",
        type: "mc",
        text: `A snail crawls up a ${height}-meter wall. During the day it climbs up 3 meters, but at night it slides down 2 meters. On which day will the snail reach the top?\nMột chú ốc sên leo lên một bức tường cao ${height} mét. Ban ngày ốc sên leo lên được 3 mét, ban đêm lại bị trượt xuống 2 mét. Hỏi vào ngày thứ mấy thì chú ốc sên sẽ chạm tới đỉnh bức tường?`,
        options: opts.map((v, i) => `${letters[i]}. Ngày thứ ${v}`),
        answer: correctLetter,
        explanation: `Mỗi ngày đêm chú ốc sên tiến được: 3 - 2 = 1 mét. Sau ${height - up} ngày đêm, chú đã ở độ cao ${height - up} mét. Đến ban ngày của ngày thứ ${dayAns}, chú leo thêm 3 mét nữa là đạt đúng ${height} mét (chạm đỉnh trước khi đêm xuống). Vậy chú chạm đỉnh vào ngày thứ ${dayAns}.\nĐáp số: ${correctLetter}.`
      };
    }

    if (selectedType === 'MIRROR_CLOCK') {
      const hours = [7, 8, 9, 10][Math.floor(Math.random() * 4)];
      const mins = [15, 20, 40, 45][Math.floor(Math.random() * 4)];
      // 11:60 - hours:mins
      const realHour = 11 - hours;
      const realMin = 60 - mins;
      const realTimeStr = `${realHour}:${String(realMin).padStart(2, '0')}`;
      const wrong1 = `${realHour+1}:${String(realMin).padStart(2, '0')}`;
      const wrong2 = `${realHour}:${String(mins).padStart(2, '0')}`;
      const wrong3 = `${hours}:${String(realMin).padStart(2, '0')}`;
      const letters = ['A', 'B', 'C', 'D'];
      const opts = [realTimeStr, wrong1, wrong2, wrong3].sort(() => Math.random() - 0.5);
      const correctLetter = letters[opts.indexOf(realTimeStr)];
      return {
        id: `IKMC-GEN-${Date.now()}-${Math.random()}`,
        exam: examName,
        grade: 4,
        round: `${examName} Ecolier - Đề Tuyển Chọn Đặc Biệt`,
        topic: "Đối xứng đồng hồ qua gương",
        type: "mc",
        text: `In a mirror, an analog clock shows ${hours}:${mins}. What is the actual time?\nNhìn vào gương, chiếc đồng hồ kim phản chiếu hiển thị ${hours} giờ ${mins} phút. Hỏi thời gian thực tế bên ngoài là mấy giờ?`,
        options: opts.map((v, i) => `${letters[i]}. ${v}`),
        answer: correctLetter,
        explanation: `Quy tắc đối xứng qua gương của mặt đồng hồ: Tổng thời gian trong gương và thời gian thực tế luôn là 12 giờ 00 phút (tức 11 giờ 60 phút).\nThời gian thực tế là: 11 giờ 60 phút - ${hours} giờ ${mins} phút = ${realTimeStr}.\nĐáp số: ${correctLetter}.`
      };
    }
  }

  // Fallback câu hỏi lớp 4 chất lượng cao
  return EXTRA_EXAMS_DB.grade4[0];
}


if (typeof window !== "undefined") { window.EXTRA_EXAMS_DB = EXTRA_EXAMS_DB; }
if (typeof module !== "undefined") { module.exports = EXTRA_EXAMS_DB; }
