const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../tieng_viet_data.js');
const tvData = require(filePath);
const tvDb = tvData.TIENG_VIET_DB;

// MAPPING 33 CÂU LỚP 1
const g1Fixes = {
  "TV-G1-W3-T1-1": {
    text: "Từ nào dưới đây viết đúng quy tắc chính tả với chữ \"gh\"?",
    options: ["A. gế gỗ", "B. ghé qua", "C. gà ghô", "D. ghà vịt"],
    answer: "B",
    explanation: "Quy tắc chính tả: 'gh' chỉ ghép với các âm e, ê, i. Do đó 'ghé qua' là từ viết đúng chính tả."
  },
  "TV-G1-W4-T1-1": {
    text: "Tiếng nào dưới đây chứa âm \"ngh\" viết đúng quy tắc chính tả?",
    options: ["A. nghĩ ngợi", "B. ngả nghiêng", "C. ngóng trông", "D. nghủ ngon"],
    answer: "A",
    explanation: "'ngh' chỉ đi với các âm e, ê, i. Trong các từ trên, 'nghĩ ngợi' viết đúng quy tắc."
  },
  "TV-G1-W5-T1-1": {
    text: "Tiếng nào dưới đây có chứa vần \"an\"?",
    options: ["A. Bạn bè", "B. Bát đũa", "C. Quả cam", "D. Cặp sách"],
    answer: "A",
    explanation: "Tiếng 'Bạn' gồm âm b, vần an và thanh nặng."
  },
  "TV-G1-W6-T1-1": {
    text: "Tiếng nào dưới đây có chứa vần \"en\"?",
    options: ["A. Đèn pin", "B. Nét chữ", "C. Búp sen", "D. Sấm chớp"],
    answer: "A",
    explanation: "Tiếng 'Đèn' gồm âm đ, vần en và thanh huyền."
  },
  "TV-G1-W7-T1-1": {
    text: "Tiếng nào dưới đây có chứa vần \"in\"?",
    options: ["A. Quả mít", "B. Con chim", "C. Máy in", "D. Nhịp cầu"],
    answer: "C",
    explanation: "Tiếng 'in' có vần in."
  },
  "TV-G1-W8-T1-1": {
    text: "Tiếng nào dưới đây có chứa vần \"on\"?",
    options: ["A. Tròn xoe", "B. Con non", "C. Cà rốt", "D. Quả xoài"],
    answer: "B",
    explanation: "Tiếng 'non' có âm n và vần on."
  },
  "TV-G1-W9-T1-1": {
    text: "Câu nào dưới đây là câu chào hỏi lễ phép khi gặp thầy cô giáo?",
    options: ["A. Chào bạn!", "B. Em chào thầy cô ạ!", "C. Tạm biệt nhé!", "D. Thầy cô đi đâu đấy?"],
    answer: "B",
    explanation: "'Em chào thầy cô ạ!' thể hiện sự lễ phép, tôn kính thầy cô."
  },
  "TV-G1-W10-T1-1": {
    text: "Tiếng nào dưới đây có chứa vần \"un\"?",
    options: ["A. Cây nấm", "B. Chim cút", "C. Bút chì", "D. Bún riêu"],
    answer: "D",
    explanation: "Tiếng 'Bún' gồm âm b, vần un và thanh sắc."
  },
  "TV-G1-W11-T1-1": {
    text: "Tiếng nào dưới đây có chứa vần \"ai\"?",
    options: ["A. Hoa mai", "B. Mây bay", "C. Cây cau", "D. Ngôi sao"],
    answer: "A",
    explanation: "Tiếng 'mai' có âm m và vần ai."
  },
  "TV-G1-W12-T1-1": {
    text: "Tiếng nào dưới đây có chứa vần \"ôi\"?",
    options: ["A. Con vẹt", "B. Quả ổi", "C. Đôi đũa", "D. Bơi lội"],
    answer: "B",
    explanation: "Tiếng 'ổi' có vần ôi và thanh hỏi."
  },
  "TV-G1-W13-T1-1": {
    text: "Tiếng nào dưới đây có chứa vần \"uôi\"?",
    options: ["A. Buổi sáng", "B. Quả chuối", "C. Tươi cười", "D. Gửi thư"],
    answer: "B",
    explanation: "Tiếng 'chuối' có âm ch, vần uôi và thanh sắc."
  },
  "TV-G1-W14-T1-1": {
    text: "Tiếng nào dưới đây có chứa vần \"eo\"?",
    options: ["A. Cái kéo", "B. Con sáo", "C. Chú cừu", "D. Dịu dàng"],
    answer: "A",
    explanation: "Tiếng 'kéo' có âm k, vần eo và thanh sắc."
  },
  "TV-G1-W15-T1-1": {
    text: "Từ nào dưới đây viết đúng chính tả với vần \"iê\"?",
    options: ["A. Con kiến", "B. Khuyên tai", "C. Ya ua", "D. Con iến"],
    answer: "A",
    explanation: "Tiếng 'kiến' có âm k, vần iên và thanh sắc."
  },
  "TV-G1-W16-T1-1": {
    text: "Tiếng nào dưới đây có chứa vần \"ươ\"?",
    options: ["A. Mùa xuân", "B. Cơn mưa", "C. Con hươu", "D. Quả chuối"],
    answer: "C",
    explanation: "Tiếng 'hươu' có âm h, vần ươu."
  },
  "TV-G1-W17-T1-1": {
    text: "Điền chữ thích hợp vào chỗ chấm: \"...ô giáo em rất hiền.\"",
    options: ["A. K", "B. C", "C. Q", "D. Gh"],
    answer: "B",
    explanation: "Chữ 'c' ghép với 'ô' tạo thành tiếng 'Cô'. 'Cô giáo em rất hiền.'"
  },
  "TV-G1-W18-T1-1": {
    text: "Từ nào dưới đây là từ chỉ hoạt động của học sinh trong giờ học?",
    options: ["A. Bàn ghế", "B. Nghe giảng", "C. Bảng đen", "D. Sách vở"],
    answer: "B",
    explanation: "'Nghe giảng' là từ chỉ hoạt động của học sinh."
  },
  "TV-G1-W19-T1-1": {
    text: "Tiếng nào dưới đây có chứa vần \"oa\"?",
    options: ["A. Bông hoa", "B. Mát mẻ", "C. Chèo thuyền", "D. Quả xoài"],
    answer: "A",
    explanation: "Tiếng 'hoa' gồm âm h và vần oa."
  },
  "TV-G1-W20-T1-1": {
    text: "Tiếng nào dưới đây có chứa vần \"oan\"?",
    options: ["A. Bé ngoan", "B. Thoát hiểm", "C. Vang lừng", "D. Cầu vồng"],
    answer: "A",
    explanation: "Tiếng 'ngoan' gồm âm ng và vần oan."
  },
  "TV-G1-W21-T1-1": {
    text: "Tiếng nào dưới đây có chứa vần \"uy\"?",
    options: ["A. Hoa huệ", "B. Tàu thủy", "C. Đêm khuya", "D. Chim yến"],
    answer: "B",
    explanation: "Tiếng 'thủy' gồm âm th, vần uy và thanh hỏi."
  },
  "TV-G1-W22-T1-1": {
    text: "Tiếng nào dưới đây có chứa vần \"uân\"?",
    options: ["A. Mùa xuân", "B. Xuất sắc", "C. Khuân vác", "D. Quầng trăng"],
    answer: "A",
    explanation: "Tiếng 'xuân' gồm âm x và vần uân."
  },
  "TV-G1-W23-T1-1": {
    text: "Dãy từ nào dưới đây gồm toàn các đồ dùng học tập của học sinh?",
    options: ["A. Bút chì, thước kẻ, tẩy gôm, hộp bút", "B. Bát đũa, xoong nồi, thìa dĩa", "C. Xe đạp, mũ bảo hiểm, áo mưa", "D. Cây cối, bông hoa, bãi cỏ"],
    answer: "A",
    explanation: "Bút chì, thước kẻ, tẩy gôm, hộp bút đều là đồ dùng học tập thân quen."
  },
  "TV-G1-W24-T1-1": {
    text: "Khi được người lớn tặng quà, em cần nói lời cảm ơn như thế nào?",
    options: ["A. Cho cháu xin nhé!", "B. Cháu cảm ơn ông bà/cha mẹ ạ!", "C. Không thích món này đâu.", "D. Đặt ở đây đi ạ."],
    answer: "B",
    explanation: "Nói lời cảm ơn lễ phép kèm tiếng 'ạ' ở cuối câu thể hiện thái độ ngoan ngoãn."
  },
  "TV-G1-W25-T1-1": {
    text: "Con vật nào dưới đây được mệnh danh là \"chúa sơn lâm\"?",
    options: ["A. Con thỏ", "B. Con hổ (cọp)", "C. Con sóc", "D. Con rùa"],
    answer: "B",
    explanation: "Con hổ (cọp) là loài thú dũng mãnh, được gọi là chúa sơn lâm."
  },
  "TV-G1-W26-T1-1": {
    text: "Từ nào dưới đây viết đúng chính tả?",
    options: ["A. Xinh xắn", "B. Súng sính", "C. Xung xướng", "D. Siêng lăng"],
    answer: "A",
    explanation: "'Xinh xắn' viết đúng chính tả với âm x."
  },
  "TV-G1-W27-T1-1": {
    text: "Thủ đô của nước Việt Nam ta là thành phố nào?",
    options: ["A. Thành phố Đà Nẵng", "B. Thủ đô Hà Nội", "C. Thành phố Hải Phòng", "D. Thành phố Cần Thơ"],
    answer: "B",
    explanation: "Thủ đô của nước Cộng hòa Xã hội Chủ nghĩa Việt Nam là Hà Nội."
  },
  "TV-G1-W28-T1-1": {
    text: "Từ nào dưới đây là từ chỉ màu sắc của lá cây tươi tốt?",
    options: ["A. Đỏ rực", "B. Vàng óng", "C. Xanh mướt", "D. Tím biếc"],
    answer: "C",
    explanation: "'Xanh mướt' là từ chỉ màu xanh tươi non đầy sức sống của cây lá."
  },
  "TV-G1-W29-T1-1": {
    text: "Dấu câu nào thường được đặt ở cuối câu kể?",
    options: ["A. Dấu chấm hỏi (?)", "B. Dấu chấm (.)", "C. Dấu chấm than (!)", "D. Dấu phẩy (,)"],
    answer: "B",
    explanation: "Cuối câu trần thuật (câu kể) ta dùng dấu chấm (.)."
  },
  "TV-G1-W30-T1-1": {
    text: "Điền chữ ch hoặc tr vào chỗ trống: \"Mặt ...ời mọc ở hướng đông.\"",
    options: ["A. ch", "B. tr", "C. c", "D. t"],
    answer: "B",
    explanation: "Từ đúng là 'Mặt trời', điền âm 'tr'."
  },
  "TV-G1-W31-T1-1": {
    text: "Điền l hoặc n thích hợp vào chỗ trống: \"...ước chảy xuôi dòng.\"",
    options: ["A. N", "B. L", "C. Đ", "D. R"],
    answer: "A",
    explanation: "Từ đúng chính tả là 'Nước chảy', điền âm 'N'."
  },
  "TV-G1-W32-T1-1": {
    text: "Trong câu thơ \"Trâu ơi ta bảo trâu này / Trâu ra ngoài ruộng trâu cày với ta\", con trâu giúp người nông dân làm việc gì?",
    options: ["A. Giữ nhà", "B. Bắt chuột", "C. Cày ruộng", "D. Kéo xe khách"],
    answer: "C",
    explanation: "Con trâu chăm chỉ giúp bác nông dân cày ruộng sản xuất lúa gạo."
  },
  "TV-G1-W33-T1-1": {
    text: "Khi kể lại một câu chuyện, chúng ta cần kể theo trình tự nào?",
    options: ["A. Kết thúc trước, mở đầu sau", "B. Mở đầu, diễn biến và kết thúc", "C. Kể lộn xộn các chi tiết", "D. Chỉ kể phần cuối"],
    answer: "B",
    explanation: "Một câu chuyện hoàn chỉnh cần có phần mở đầu, diễn biến các sự việc và kết thúc."
  },
  "TV-G1-W34-T1-1": {
    text: "Từ nào dưới đây gợi tả âm thanh tiếng cười giòn giã, vui tươi?",
    options: ["A. Rì rào", "B. Khúc khích", "C. Róc rách", "D. Ào ào"],
    answer: "B",
    explanation: "'Khúc khích' gợi tả tiếng cười nhỏ, liên tiếp và rất vui vẻ."
  },
  "TV-G1-W35-T1-1": {
    text: "Sau một năm học chăm chỉ dưới mái trường, các em học sinh lớp 1 sẽ được lên học lớp mấy?",
    options: ["A. Lớp 1", "B. Lớp 2", "C. Lớp 3", "D. Lớp 5"],
    answer: "B",
    explanation: "Sau khi hoàn thành chương trình Lớp 1, các em sẽ vinh dự được lên học Lớp 2!"
  }
};

// MAPPING 35 CÂU LỚP 3
const g3Fixes = {
  "TV-G3-W1-T3-1": {
    text: "Dãy từ ngữ nào dưới đây gồm toàn các từ chỉ trẻ em (thiếu nhi)?",
    options: [
      "A. Trẻ nhỏ, thiếu niên, nhi đồng, con nít",
      "B. Thanh niên, trung niên, người già, cụ già",
      "C. Học sinh, giáo viên, hiệu trưởng, phụ huynh",
      "D. Chăm chỉ, ngoan ngoãn, thật thà, dũng cảm"
    ],
    answer: "A",
    explanation: "Các từ ở đáp án A đều dùng để chỉ trẻ em bám sát chủ điểm Thiếu nhi Tuần 1."
  },
  "TV-G3-W2-T3-1": {
    text: "Trong câu: \"Mặt trời đỏ rực như quả cầu lửa\", từ nào là từ chỉ sự so sánh?",
    options: ["A. Đỏ rực", "B. Như", "C. Quả cầu", "D. Mặt trời"],
    answer: "B",
    explanation: "Từ 'như' là từ chỉ quan hệ so sánh nối hai sự vật được so sánh."
  },
  "TV-G3-W3-T3-1": {
    text: "Dãy từ ngữ nào dưới đây gồm toàn các từ chỉ tình cảm gia đình?",
    options: [
      "A. Yêu thương, đùm bọc, kính trọng, hòa thuận",
      "B. Bàn ghế, giường tủ, quạt điện, tivi",
      "C. Nấu cơm, rửa bát, quét nhà, giặt giũ",
      "D. Thông minh, dũng cảm, nhanh nhẹn, khéo léo"
    ],
    answer: "A",
    explanation: "Yêu thương, đùm bọc, kính trọng, hòa thuận là các từ chỉ tình cảm ruột thịt trong gia đình."
  },
  "TV-G3-W4-T3-1": {
    text: "Câu nào dưới đây được cấu tạo theo mẫu câu \"Ai làm gì?\"?",
    options: [
      "A. Bạn Lan là học sinh giỏi của lớp em.",
      "B. Bác nông dân đang gặt lúa trên cánh đồng.",
      "C. Bông hoa hồng thơm ngát.",
      "D. Bầu trời mùa thu trong xanh."
    ],
    answer: "B",
    explanation: "Câu 'Bác nông dân đang gặt lúa...' có bộ phận trả lời câu hỏi Ai? (Bác nông dân) và làm gì? (đang gặt lúa)."
  },
  "TV-G3-W5-T3-1": {
    text: "Dấu hai chấm (:) trong câu sau dùng để làm gì? \"Cô giáo dặn cả lớp: Ngày mai các em nhớ mang đầy đủ đồ dùng học tập.\"",
    options: [
      "A. Dùng để kết thúc câu",
      "B. Báo hiệu phần trích dẫn lời nói trực tiếp của nhân vật",
      "C. Dùng để hỏi",
      "D. Báo hiệu kết thúc đoạn văn"
    ],
    answer: "B",
    explanation: "Dấu hai chấm báo hiệu lời nói trực tiếp của cô giáo được dẫn ra sau đó."
  },
  "TV-G3-W6-T3-1": {
    text: "Trong câu thơ: \"Bác kim giờ thận trọng / Nhích từng ly, từng ly\", sự vật nào được nhân hóa và gọi bằng từ ngữ nào?",
    options: [
      "A. Chiếc đồng hồ gọi bằng Chú",
      "B. Kim giờ được gọi bằng \"Bác\"",
      "C. Kim phút được gọi bằng Anh",
      "D. Kim giây được gọi bằng Bé"
    ],
    answer: "B",
    explanation: "Kim giờ được tác giả gọi thân mật bằng 'Bác' như một con người."
  },
  "TV-G3-W7-T3-1": {
    text: "Dãy từ ngữ nào dưới đây gồm toàn các từ chỉ hoạt động dạy và học ở trường?",
    options: [
      "A. Giảng bài, nghe giảng, phát biểu, thảo luận",
      "B. Bác sĩ, y tá, bệnh nhân, kê đơn",
      "C. Lái xe, bán vé, đón khách, sửa đường",
      "D. Trồng lúa, bón phân, tưới nước, thu hoạch"
    ],
    answer: "A",
    explanation: "Giảng bài, nghe giảng, phát biểu, thảo luận đều là hoạt động dạy và học."
  },
  "TV-G3-W8-T3-1": {
    text: "Câu nào dưới đây có sử dụng biện pháp nhân hóa (tả sự vật bằng từ ngữ chỉ hoạt động của con người)?",
    options: [
      "A. Dòng sông uốn khúc quanh làng.",
      "B. Chị gió vui vẻ reo vui trên những tán cây.",
      "C. Ngôi nhà mới xây rất khang trang.",
      "D. Đàn chim bay lượn trên bầu trời xanh."
    ],
    answer: "B",
    explanation: "Gió được gọi là 'chị' và có hành động 'vui vẻ reo vui' như con người."
  },
  "TV-G3-W9-T3-1": {
    text: "Từ nào dưới đây là từ ngữ chỉ phẩm chất tốt đẹp của người học sinh?",
    options: ["A. Chăm chỉ", "B. Cao lớn", "C. Mập mạp", "D. Nhanh nhảu đoảng"],
    answer: "A",
    explanation: "Chăm chỉ, cần cù là phẩm chất đạo đức quan trọng của học sinh."
  },
  "TV-G3-W10-T3-1": {
    text: "Dãy từ ngữ nào dưới đây gồm các hình ảnh thân thuộc của làng quê Việt Nam?",
    options: [
      "A. Cây đa, giếng nước, sân đình, cánh đồng lúa",
      "B. Tòa nhà chọc trời, cầu vượt, siêu thị lớn",
      "C. Đường ray xe lửa, ga hàng không, bến cảng biển",
      "D. Nhà máy, ống khói, khu công nghiệp"
    ],
    answer: "A",
    explanation: "Cây đa, giếng nước, sân đình, đồng lúa là nét đặc trưng truyền thống của làng quê Việt Nam."
  },
  "TV-G3-W11-T3-1": {
    text: "Câu nào dưới đây có phép so sánh âm thanh với âm thanh?",
    options: [
      "A. Tiếng suối trong như tiếng hát xa.",
      "B. Mặt trăng tròn như cái đĩa bạc.",
      "C. Bác nông dân cần cù như chú ong.",
      "D. Đôi mắt bé tròn xoe như hai hòn bi ve."
    ],
    answer: "A",
    explanation: "'Tiếng suối' (âm thanh) được so sánh với 'tiếng hát xa' (âm thanh)."
  },
  "TV-G3-W12-T3-1": {
    text: "Địa danh nổi tiếng nào dưới đây thuộc thủ đô Hà Nội?",
    options: ["A. Hồ Gươm (Hồ Hoàn Kiếm)", "B. Cầu Vàng Bà Nà", "C. Chợ Bến Thành", "D. Vịnh Hạ Long"],
    answer: "A",
    explanation: "Hồ Gươm (Hồ Hoàn Kiếm) gắn liền với Tháp Rùa là biểu tượng thiêng liêng của Hà Nội."
  },
  "TV-G3-W13-T3-1": {
    text: "Dãy từ ngữ nào dưới đây chỉ các đặc điểm của cuộc sống nơi thành thị (đô thị)?",
    options: [
      "A. Nhà cao tầng, xe cộ tấp nập, phố xá sầm uất",
      "B. Cánh đồng bao la, đàn trâu gặm cỏ, khói lam chiều",
      "C. Thuyền chài đánh cá, rặng dừa ven biển, sóng vỗ",
      "D. Đồi nương bậc thang, rừng thông reo, suối róc rách"
    ],
    answer: "A",
    explanation: "Nhà cao tầng, xe cộ tấp nập, phố xá sầm uất phản ánh cuộc sống đô thị hiện đại."
  },
  "TV-G3-W14-T3-1": {
    text: "Tên địa lí Việt Nam nào dưới đây được viết đúng quy tắc chính tả?",
    options: ["A. đà Nẵng", "B. Hà nội", "C. Thừa Thiên Huế", "D. hồ chí minh"],
    answer: "C",
    explanation: "Quy tắc viết hoa tên địa lí Việt Nam: Viết hoa chữ cái đầu của mỗi tiếng tạo nên tên đó ('Thừa Thiên Huế')."
  },
  "TV-G3-W15-T3-1": {
    text: "Đất nước Việt Nam chúng ta là một mái nhà chung gồm có bao nhiêu dân tộc anh em?",
    options: ["A. 45 dân tộc", "B. 54 dân tộc", "C. 64 dân tộc", "D. 50 dân tộc"],
    answer: "B",
    explanation: "Việt Nam gồm có 54 dân tộc anh em cùng chung sống đoàn kết, gắn bó."
  },
  "TV-G3-W16-T3-1": {
    text: "Dấu gạch ngang (-) trong đoạn văn trích sau có tác dụng gì? \"Thấy tôi, Hoa mừng rỡ chạy lại: - Cậu đến rồi à!\"",
    options: [
      "A. Đánh dấu chỗ bắt đầu lời nói của nhân vật",
      "B. Đánh dấu các ý liệt kê",
      "C. Đánh dấu phần chú thích",
      "D. Ngăn cách các vế câu"
    ],
    answer: "A",
    explanation: "Dấu gạch ngang đặt ở đầu dòng để đánh dấu lời nói trực tiếp của bạn Hoa."
  },
  "TV-G3-W17-T3-1": {
    text: "Một bức thư gửi cho bạn bè thường gồm các phần cơ bản nào?",
    options: [
      "A. Địa điểm và thời gian viết thư, lời chào, nội dung chính, lời chúc và chữ ký",
      "B. Chỉ cần viết lời chào và ký tên",
      "C. Chỉ cần viết địa chỉ người nhận",
      "D. Bắt đầu bằng mục lục bài học"
    ],
    answer: "A",
    explanation: "Cấu trúc cơ bản của một bức thư: Địa điểm, thời gian -> Lời chào -> Thăm hỏi, tâm sự -> Lời chúc, ký tên."
  },
  "TV-G3-W18-T3-1": {
    text: "Thành ngữ nào dưới đây khuyên chúng ta phải biết ơn những người đã giúp đỡ, tạo dựng thành quả cho mình?",
    options: [
      "A. Uống nước nhớ nguồn",
      "B. Đi một ngày đàng học một sàng khôn",
      "C. Học thầy không tày học bạn",
      "D. Có công mài sắt có ngày nên kim"
    ],
    answer: "A",
    explanation: "'Uống nước nhớ nguồn' là truyền thống đạo lí tốt đẹp nhắc nhở lòng biết ơn cội nguồn."
  },
  "TV-G3-W19-T3-1": {
    text: "Dãy từ ngữ nào dưới đây gồm toàn các từ chỉ những người trí thức đóng góp cho xã hội?",
    options: [
      "A. Bác sĩ, kĩ sư, giáo viên, nhà khoa học",
      "B. Thợ xây, thợ may, thợ mộc, công nhân",
      "C. Thợ làm bánh, nhân viên bán hàng, tài xế",
      "D. Nông dân, ngư dân, người làm vườn"
    ],
    answer: "A",
    explanation: "Bác sĩ, kĩ sư, giáo viên, nhà khoa học là những người lao động trí óc (trí thức)."
  },
  "TV-G3-W20-T3-1": {
    text: "Trong câu: \"Trâu ơi, trâu có nghe thấy tiếng chim hót không?\", tác giả đã nhân hóa con trâu bằng cách nào?",
    options: [
      "A. Trò chuyện, nói với sự vật thân mật như với một người bạn",
      "B. Tả màu lông của con trâu",
      "C. Đếm số chiếc sừng trâu",
      "D. Kể về chuồng trâu"
    ],
    answer: "A",
    explanation: "Dùng từ gọi 'Trâu ơi' và hỏi han trò chuyện thể hiện cách nhân hóa coi con vật như bạn bè thân thiết."
  },
  "TV-G3-W21-T3-1": {
    text: "Ai là nhà bác học vĩ đại đã phát minh ra bóng đèn điện chiếu sáng nhân loại?",
    options: ["A. Thomas Edison", "B. Isaac Newton", "C. Albert Einstein", "D. Marie Curie"],
    answer: "A",
    explanation: "Thomas Edison (Ê-đi-xơn) là nhà sáng chế lỗi lạc đã phát minh ra đèn sợi đốt thực dụng."
  },
  "TV-G3-W22-T3-1": {
    text: "Dấu phẩy (,) trong câu sau có tác dụng gì? \"Nhờ chăm chỉ học tập, Nam đã đạt danh hiệu học sinh xuất sắc.\"",
    options: [
      "A. Ngăn cách trạng ngữ chỉ nguyên nhân với nòng cốt câu",
      "B. Kết thúc một câu kể",
      "C. Dẫn lời nói của nhân vật",
      "D. Đánh dấu từ ngữ được trích dẫn"
    ],
    answer: "A",
    explanation: "Dấu phẩy ngăn cách trạng ngữ 'Nhờ chăm chỉ học tập' với chủ ngữ và vị ngữ chính."
  },
  "TV-G3-W23-T3-1": {
    text: "Dãy từ ngữ nào dưới đây chỉ các môn nghệ thuật?",
    options: [
      "A. Âm nhạc, hội họa, điện ảnh, điêu khắc, sân khấu",
      "B. Bóng đá, bơi lội, cầu lông, chạy bộ",
      "C. Toán học, Vật lí, Hóa học, Sinh học",
      "D. Nấu ăn, dọn dẹp, may vá, giặt giũ"
    ],
    answer: "A",
    explanation: "Âm nhạc, hội họa, điện ảnh, điêu khắc, sân khấu là các bộ môn nghệ thuật bồi đắp tâm hồn."
  },
  "TV-G3-W24-T3-1": {
    text: "Câu nào dưới đây sử dụng cả 2 biện pháp nghệ thuật: So sánh và Nhân hóa?",
    options: [
      "A. Những hạt mưa xuân dịu dàng nhảy múa như những vũ công tí hon.",
      "B. Bầu trời hôm nay rất trong xanh.",
      "C. Con mèo mướp nằm sưởi nắng bên hiên nhà.",
      "D. Cánh đồng bát ngát một màu vàng óng."
    ],
    answer: "A",
    explanation: "Nhân hóa: mưa xuân 'dịu dàng nhảy múa'; So sánh: 'như những vũ công tí hon'."
  },
  "TV-G3-W25-T3-1": {
    text: "Lễ hội nào dưới đây gắn liền với truyền thống nhớ ơn các vị Vua dựng nước đầu tiên của dân tộc ta?",
    options: [
      "A. Lễ hội Đền Hùng (Giỗ Tổ Hùng Vương)",
      "B. Hội Chùa Hương",
      "C. Hội Lim Bắc Ninh",
      "D. Lễ hội Cầu Ngư"
    ],
    answer: "A",
    explanation: "Lễ hội Đền Hùng vào mùng 10 tháng 3 âm lịch tôn vinh công lao dựng nước của các Vua Hùng."
  },
  "TV-G3-W26-T3-1": {
    text: "Câu tục ngữ nào dưới đây ca ngợi lòng kiên trì, quyết tâm vượt khó trong học tập và cuộc sống?",
    options: [
      "A. Có công mài sắt, có ngày nên kim",
      "B. Lá lành đùm lá rách",
      "C. Ăn quả nhớ kẻ trồng cây",
      "D. Gần mực thì đen, gần đèn thì rạng"
    ],
    answer: "A",
    explanation: "'Có công mài sắt, có ngày nên kim' khuyên răn sự bền chí, nhẫn nại sẽ dẫn tới thành công."
  },
  "TV-G3-W27-T3-1": {
    text: "Việc thường xuyên tập thể dục thể thao buổi sáng đem lại lợi ích gì cho học sinh?",
    options: [
      "A. Tăng cường sức khỏe, tinh thần sảng khoái và học tập tốt hơn",
      "B. Khiến cơ thể mệt mỏi và buồn ngủ cả ngày",
      "C. Giảm thị lực và trí nhớ",
      "D. Không có tác dụng gì"
    ],
    answer: "A",
    explanation: "Rèn luyện thể thao giúp cơ thể dẻo dai, khỏe mạnh và tràn đầy năng lượng học tập."
  },
  "TV-G3-W28-T3-1": {
    text: "Cặp từ nào dưới đây viết đúng chính tả để phân biệt l / n?",
    options: [
      "A. Lúa nếp - Nón lá",
      "B. Núa nếp - Lón lá",
      "C. Lúa lếp - Nón ná",
      "D. Núa lếp - Lón ná"
    ],
    answer: "A",
    explanation: "Chính tả chuẩn: 'Lúa nếp' (lúa âm l, nếp âm n) và 'Nón lá' (nón âm n, lá âm l)."
  },
  "TV-G3-W29-T3-1": {
    text: "Hành động nào dưới đây góp phần bảo vệ ngôi nhà chung Trái Đất của chúng ta?",
    options: [
      "A. Trồng cây gây rừng, vứt rác đúng nơi quy định, tiết kiệm điện nước",
      "B. Xả rác bừa bãi ra kênh rạch và đường phố",
      "C. Bẻ cành hái hoa nơi công viên trường học",
      "D. Lãng phí nước sạch khi sinh hoạt"
    ],
    answer: "A",
    explanation: "Trồng cây, không xả rác và tiết kiệm tài nguyên giúp giữ gìn môi trường sống xanh sạch đẹp."
  },
  "TV-G3-W30-T3-1": {
    text: "Từ ngữ nào dưới đây chỉ hiện tượng thiên tai do mưa lớn kéo dài gây ra?",
    options: ["A. Lũ lụt", "B. Hạn hán", "C. Nắng nóng kéo dài", "D. Động đất ngầm"],
    answer: "A",
    explanation: "Mưa lớn kéo dài làm nước sông suối dâng cao gây ra lũ lụt ngập úng."
  },
  "TV-G3-W31-T3-1": {
    text: "Hành tinh nào trong Hệ Mặt Trời là nơi con người và các loài sinh vật đang cùng sinh sống?",
    options: ["A. Trái Đất", "B. Sao Hỏa", "C. Sao Thủy", "D. Sao Kim"],
    answer: "A",
    explanation: "Trái Đất là hành tinh xanh duy nhất được biết đến có sự sống trong Hệ Mặt Trời."
  },
  "TV-G3-W32-T3-1": {
    text: "Nhân vật Dế Mèn trong tác phẩm \"Dế Mèn phiêu lưu ký\" của nhà văn Tô Hoài đã rút ra bài học gì sau cái chết của Dế Choắt?",
    options: [
      "A. Không được hung hăng, kiêu ngạo và trêu chọc làm hại người khác",
      "B. Phải bắt nạt kẻ yếu hơn mình",
      "C. Không nên đi ngao du thiên hạ",
      "D. Chỉ nên ở nhà một mình"
    ],
    answer: "A",
    explanation: "Dế Mèn đã ân hận sâu sắc vì thói kiêu ngạo, hung hăng gây ra cái chết thương tâm cho Dế Choắt."
  },
  "TV-G3-W33-T3-1": {
    text: "Trong bài thơ ca ngợi tình thầy trò, hình ảnh người thầy thường được ví với hình tượng cao đẹp nào?",
    options: [
      "A. Người lái đò cần mẫn đưa từng chuyến đò tri thức qua sông",
      "B. Người khách qua đường vội vã",
      "C. Người thợ xây dựng nhà ở",
      "D. Người chèo thuyền câu cá giải trí"
    ],
    answer: "A",
    explanation: "Hình ảnh người thầy chở những chuyến đò tri thức đưa học sinh cập bến tương lai là ẩn dụ quen thuộc và xúc động."
  },
  "TV-G3-W34-T3-1": {
    text: "Khi viết đoạn văn biểu cảm bày tỏ tình cảm đối với mẹ kính yêu, em nên chọn những từ ngữ như thế nào?",
    options: [
      "A. Chân thành, ấm áp, thể hiện lòng biết ơn sâu sắc",
      "B. Khô khan, máy móc, chỉ toàn số liệu",
      "C. Lạnh lùng, trách móc",
      "D. Sao chép nguyên văn không có cảm xúc"
    ],
    answer: "A",
    explanation: "Văn biểu cảm cần chân thành, ấm áp và xuất phát từ tình cảm yêu thương thật lòng."
  },
  "TV-G3-W35-T3-1": {
    text: "Kết thúc năm học lớp 3, các em học sinh bước vào kỳ nghỉ hè bổ ích sẽ chuẩn bị sẵn sàng hành trang bước lên khối lớp nào?",
    options: ["A. Lớp 4", "B. Lớp 3", "C. Lớp 2", "D. Lớp 1"],
    answer: "A",
    explanation: "Sau Lớp 3, các em sẽ tự tin bước vào Khối Lớp 4 với nhiều kiến thức mới mẻ, hào hứng!"
  }
};

let patchedCount = 0;

for (const q of tvDb.grade1) {
  if (g1Fixes[q.id]) {
    const f = g1Fixes[q.id];
    q.text = f.text;
    q.question = f.text;
    q.options = f.options;
    q.answer = f.answer;
    q.explanation = f.explanation;
    q.type = 'mc';
    patchedCount++;
  }
}

for (const q of tvDb.grade3) {
  if (g3Fixes[q.id]) {
    const f = g3Fixes[q.id];
    q.text = f.text;
    q.question = f.text;
    q.options = f.options;
    q.answer = f.answer;
    q.explanation = f.explanation;
    q.type = 'mc';
    patchedCount++;
  }
}

console.log(`Đã thay thế thành công ${patchedCount}/68 câu Tiếng Việt placeholder!`);

const output = `// BỘ BÀI TẬP TIẾNG VIỆT ARCHIMEDES LỚP 1 - 5 (ĐÃ CHUẨN HÓA 100%)\n` +
  `const TIENG_VIET_DB = ${JSON.stringify(tvDb, null, 2)};\n\n` +
  `if (typeof window !== 'undefined') { window.TIENG_VIET_DB = TIENG_VIET_DB; }\n` +
  `if (typeof module !== 'undefined' && module.exports) { module.exports = { TIENG_VIET_DB }; }\n`;

fs.writeFileSync(filePath, output, 'utf8');
console.log('Đã cập nhật thành công tệp tieng_viet_data.js!');
