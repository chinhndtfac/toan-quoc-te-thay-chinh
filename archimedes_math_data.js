// BỘ BÀI TẬP TOÁN ARCHIMEDES LỚP 1 - 5 (ĐÃ KHỬ TRÙNG LẶP CHUẨN HÓA)
const ARCHIMEDES_MATH_DB = {
  "grade1": [
    {
      "id": "ARCH-M-G1-W1-T1-01",
      "exam": "ARCHIMEDES_MATH",
      "grade": 1,
      "round": "Tuần 1 - Tiết 1",
      "topic": "Đếm và nhận biết số",
      "text": "Đếm số lượng chấm tròn trong thẻ: Thẻ có ⚫ ⚫ ⚫ chấm tròn. Thẻ đó có mấy chấm tròn?",
      "options": [
        "A. 2",
        "B. 3",
        "C. 4",
        "D. 5"
      ],
      "answer": "B",
      "explanation": "Đếm lần lượt: 1, 2, 3 chấm tròn. Vậy có 3 chấm tròn."
    },
    {
      "id": "ARCH-M-G1-W1-T1-02",
      "exam": "ARCHIMEDES_MATH",
      "grade": 1,
      "round": "Tuần 1 - Tiết 1",
      "topic": "Dãy số tiến từ 1 đến 10",
      "text": "Điền số thích hợp nhất vào ô trống trong dãy số sau: 1, [ ? ], 3, 4, 5, 6, 7",
      "options": [
        "A. 0",
        "B. 2",
        "C. 4",
        "D. 8"
      ],
      "answer": "B",
      "explanation": "Dãy số tự nhiên liên tiếp tăng dần: 1, 2, 3, 4, 5... Số còn thiếu giữa 1 và 3 là 2."
    },
    {
      "id": "ARCH-M-G1-W1-T1-03",
      "exam": "ARCHIMEDES_MATH",
      "grade": 1,
      "round": "Tuần 1 - Tiết 1",
      "topic": "Dãy số đếm lùi",
      "text": "Điền số thích hợp vào ô trống trong dãy đếm lùi sau: 9, 8, [ ? ], 6, 5, 4, 3",
      "options": [
        "A. 7",
        "B. 10",
        "C. 6",
        "D. 9"
      ],
      "answer": "A",
      "explanation": "Dãy số tự nhiên liên tiếp giảm dần: 9, 8, 7, 6, 5... Số còn thiếu giữa 8 và 6 là 7."
    },
    {
      "id": "ARCH-M-G1-W1-T1-04",
      "exam": "ARCHIMEDES_MATH",
      "grade": 1,
      "round": "Tuần 1 - Tiết 1",
      "topic": "Bài toán xếp hàng đếm người",
      "text": "An đứng thứ tư trong hàng nếu tính từ đầu hàng, và đứng thứ năm nếu tính từ cuối hàng. Hỏi có bao nhiêu bạn cùng xếp trong hàng đó?",
      "options": [
        "A. 8 bạn",
        "B. 9 bạn",
        "C. 7 bạn",
        "D. 10 bạn"
      ],
      "answer": "A",
      "explanation": "Đứng trước An có 3 bạn, đứng sau An có 4 bạn. Cùng với An có tất cả: 3 + 1 + 4 = 8 bạn (hoặc 4 + 5 - 1 = 8 bạn)."
    },
    {
      "id": "ARCH-M-G1-W1-T1-05",
      "exam": "ARCHIMEDES_MATH",
      "grade": 1,
      "round": "Tuần 1 - Tiết 1",
      "topic": "Tách gộp số",
      "text": "Tách gộp số: Số 3 gồm 2 và mấy?",
      "options": [
        "A. 1",
        "B. 2",
        "C. 3",
        "D. 0"
      ],
      "answer": "A",
      "explanation": "Ta có: 3 gồm 2 và 1 (2 + 1 = 3)."
    },
    {
      "id": "ARCH-M-G1-W1-T2-01",
      "exam": "ARCHIMEDES_MATH",
      "grade": 1,
      "round": "Tuần 1 - Tiết 2",
      "topic": "Tam giác số tư duy",
      "text": "Trong tam giác số, số ở đỉnh bằng tổng hai số ở đáy. Biết hai số ở đáy là 2 và 3, hỏi số ở đỉnh là bao nhiêu?",
      "options": [
        "A. 4",
        "B. 5",
        "C. 6",
        "D. 1"
      ],
      "answer": "B",
      "explanation": "Số ở đỉnh tam giác là: 2 + 3 = 5."
    },
    {
      "id": "ARCH-M-G1-W1-T2-02",
      "exam": "ARCHIMEDES_MATH",
      "grade": 1,
      "round": "Tuần 1 - Tiết 2",
      "topic": "Tách số 5",
      "text": "Số 5 gồm 4 và số nào dưới đây?",
      "options": [
        "A. 1",
        "B. 2",
        "C. 3",
        "D. 0"
      ],
      "answer": "A",
      "explanation": "Ta có: 5 gồm 4 và 1 (4 + 1 = 5)."
    },
    {
      "id": "ARCH-M-G1-W1-T2-03",
      "exam": "ARCHIMEDES_MATH",
      "grade": 1,
      "round": "Tuần 1 - Tiết 2",
      "topic": "Toán xếp hàng",
      "text": "Cô Nga xếp hàng mua vé xem phim. Đứng trước cô Nga có 5 người và cô Nga đứng thứ 5 từ cuối hàng lên. Hỏi có bao nhiêu người cùng xếp hàng?",
      "options": [
        "A. 9 người",
        "B. 10 người",
        "C. 11 người",
        "D. 8 người"
      ],
      "answer": "A",
      "explanation": "Đứng trước cô Nga có 5 người. Cô Nga đứng thứ 5 từ cuối lên nghĩa là đứng sau cô Nga có 4 người. Tổng số người xếp hàng: 5 + 1 + 4 = 10 người (hoặc 5 + 5 - 1 = 9 người nếu cô Nga là thứ 5 từ đầu và thứ 5 từ cuối; ở đây đứng trước có 5 người + cô Nga (thứ 6) + sau cô 4 người = 10 người)."
    },
    {
      "id": "ARCH-M-G1-W1-T2-04",
      "exam": "ARCHIMEDES_MATH",
      "grade": 1,
      "round": "Tuần 1 - Tiết 2",
      "topic": "Số liền sau",
      "text": "Số liền sau của số 2 là số nào?",
      "options": [
        "A. 1",
        "B. 3",
        "C. 4",
        "D. 5"
      ],
      "answer": "B",
      "explanation": "Số liền sau của số 2 hơn 2 một đơn vị: 2 + 1 = 3."
    },
    {
      "id": "ARCH-M-G1-W1-T2-05",
      "exam": "ARCHIMEDES_MATH",
      "grade": 1,
      "round": "Tuần 1 - Tiết 2",
      "topic": "Số ở giữa",
      "text": "Số nằm ở giữa số 3 và số 5 là số nào?",
      "options": [
        "A. 2",
        "B. 4",
        "C. 6",
        "D. 1"
      ],
      "answer": "B",
      "explanation": "Dãy số: 3, 4, 5. Vậy số nằm ở giữa 3 và 5 là 4."
    },
    {
      "id": "ARCH-M-G1-W1-T3-01",
      "exam": "ARCHIMEDES_MATH",
      "grade": 1,
      "round": "Tuần 1 - Tiết 3",
      "topic": "Dãy số quy luật",
      "text": "Điền số thích hợp vào ô trống trong dãy số lẻ: 1, 3, [ ? ], 7",
      "options": [
        "A. 4",
        "B. 5",
        "C. 6",
        "D. 8"
      ],
      "answer": "B",
      "explanation": "Dãy số lẻ tăng dần: 1 + 2 = 3; 3 + 2 = 5; 5 + 2 = 7. Số cần điền là 5."
    },
    {
      "id": "ARCH-M-G1-W1-T3-02",
      "exam": "ARCHIMEDES_MATH",
      "grade": 1,
      "round": "Tuần 1 - Tiết 3",
      "topic": "Tách gộp số",
      "text": "Số 6 gồm 2 và số mấy?",
      "options": [
        "A. 3",
        "B. 4",
        "C. 5",
        "D. 1"
      ],
      "answer": "B",
      "explanation": "6 gồm 2 và 4 vì 2 + 4 = 6."
    },
    {
      "id": "ARCH-M-G1-W1-T3-03",
      "exam": "ARCHIMEDES_MATH",
      "grade": 1,
      "round": "Tuần 1 - Tiết 3",
      "topic": "Phân loại logic",
      "text": "Cho các hình: Ô tô tải, Trực thăng, Xe máy, Cây nấm, Xe đạp, Tàu thủy. Hình nào khác loại với các hình còn lại?",
      "options": [
        "A. Trực thăng",
        "B. Xe máy",
        "C. Cây nấm",
        "D. Tàu thủy"
      ],
      "answer": "C",
      "explanation": "Cây nấm là sinh vật / thực vật, các hình còn lại đều là phương tiện giao thông."
    },
    {
      "id": "ARCH-M-G1-W1-T3-04",
      "exam": "ARCHIMEDES_MATH",
      "grade": 1,
      "round": "Tuần 1 - Tiết 3",
      "topic": "Số liền trước",
      "text": "Số liền trước của số 7 là số nào?",
      "options": [
        "A. 6",
        "B. 8",
        "C. 5",
        "D. 9"
      ],
      "answer": "A",
      "explanation": "Số liền trước của 7 kém 7 một đơn vị: 7 - 1 = 6."
    },
    {
      "id": "ARCH-M-G1-W1-T3-05",
      "exam": "ARCHIMEDES_MATH",
      "grade": 1,
      "round": "Tuần 1 - Tiết 3",
      "topic": "Đếm và so sánh số lượng",
      "text": "Trên bàn có 6 chiếc bút chì và 4 quả dứa. Số bút chì nhiều hơn số quả dứa là mấy cái?",
      "options": [
        "A. 1 cái",
        "B. 2 cái",
        "C. 3 cái",
        "D. 4 cái"
      ],
      "answer": "B",
      "explanation": "Số bút chì nhiều hơn số quả dứa là: 6 - 4 = 2 cái."
    },
    {
      "id": "ARCH-M-G1-W1-PKT-01",
      "exam": "ARCHIMEDES_MATH",
      "grade": 1,
      "round": "Tuần 1 - Phiếu cuối tuần",
      "topic": "Số học cơ bản",
      "text": "Số liền trước của số 1 là số nào?",
      "options": [
        "A. 0",
        "B. 2",
        "C. 3",
        "D. Không có số nào"
      ],
      "answer": "A",
      "explanation": "Trong tập hợp số tự nhiên bắt đầu từ 0, số liền trước của 1 là 0."
    },
    {
      "id": "ARCH-M-G1-W1-PKT-02",
      "exam": "ARCHIMEDES_MATH",
      "grade": 1,
      "round": "Tuần 1 - Phiếu cuối tuần",
      "topic": "Số học cơ bản",
      "text": "Số 7 là số liền trước của số nào?",
      "options": [
        "A. 6",
        "B. 8",
        "C. 9",
        "D. 5"
      ],
      "answer": "B",
      "explanation": "Số 7 đứng ngay trước số 8, vậy 7 là số liền trước của số 8."
    },
    {
      "id": "ARCH-M-G1-W1-PKT-03",
      "exam": "ARCHIMEDES_MATH",
      "grade": 1,
      "round": "Tuần 1 - Phiếu cuối tuần",
      "topic": "Tách gộp số 7",
      "text": "Số 7 gồm 3 và mấy?",
      "options": [
        "A. 3",
        "B. 4",
        "C. 5",
        "D. 2"
      ],
      "answer": "B",
      "explanation": "7 gồm 3 và 4 vì 3 + 4 = 7."
    },
    {
      "id": "ARCH-M-G1-W1-PKT-04",
      "exam": "ARCHIMEDES_MATH",
      "grade": 1,
      "round": "Tuần 1 - Phiếu cuối tuần",
      "topic": "Gộp số",
      "text": "Số nào gồm 3 và 3?",
      "options": [
        "A. 5",
        "B. 6",
        "C. 7",
        "D. 8"
      ],
      "answer": "B",
      "explanation": "Gộp 3 và 3 ta được: 3 + 3 = 6."
    },
    {
      "id": "ARCH-M-G1-W1-PKT-05",
      "exam": "ARCHIMEDES_MATH",
      "grade": 1,
      "round": "Tuần 1 - Phiếu cuối tuần",
      "topic": "Số liền sau",
      "text": "Số liền sau của số 5 là số nào?",
      "options": [
        "A. 4",
        "B. 6",
        "C. 7",
        "D. 8"
      ],
      "answer": "B",
      "explanation": "Số liền sau của 5 là 5 + 1 = 6."
    },
    {
      "id": "ARCH-M-G1-W1-TTK-01",
      "exam": "ARCHIMEDES_MATH",
      "grade": 1,
      "round": "Tuần 1 - Bài tập tham khảo",
      "topic": "Hình học phản chiếu qua mặt nước",
      "text": "Bạn An đang ngồi trên thuyền ở giữa hồ. Nhìn xuống mặt nước, An thấy hình ảnh phản chiếu của cây thông bên bờ hồ. Hình ảnh cây thông phản chiếu dưới mặt nước có đặc điểm gì?",
      "options": [
        "A. Cây thông lộn ngược, ngọn chỉ xuống dưới mặt nước",
        "B. Cây thông vẫn đứng thẳng như trên bờ",
        "C. Cây thông bị nằm ngang",
        "D. Cây thông biến thành hình tròn"
      ],
      "answer": "A",
      "explanation": "Hình ảnh phản chiếu qua mặt phẳng gương/mặt nước sẽ bị đối xứng ngược từ trên xuống dưới: ngọn cây chỉ xuống dưới."
    },
    {
      "id": "ARCH-M-G1-W1-TTK-02",
      "exam": "ARCHIMEDES_MATH",
      "grade": 1,
      "round": "Tuần 1 - Bài tập tham khảo",
      "topic": "Dãy số chẵn quy luật",
      "text": "Điền số tiếp theo vào dãy số cách đều: 0, 2, 4, 6, [ ? ]",
      "options": [
        "A. 7",
        "B. 8",
        "C. 9",
        "D. 10"
      ],
      "answer": "B",
      "explanation": "Quy luật cộng thêm 2 đơn vị: 0 + 2 = 2; 2 + 2 = 4; 4 + 2 = 6; 6 + 2 = 8."
    },
    {
      "id": "ARCH-M-G1-W1-TTK-03",
      "exam": "ARCHIMEDES_MATH",
      "grade": 1,
      "round": "Tuần 1 - Bài tập tham khảo",
      "topic": "Dãy số tam giác quy luật biến thiên",
      "text": "Quan sát dãy số: 0, 1, 3, 6, [ ? ]. Số tiếp theo theo quy luật là số nào?",
      "options": [
        "A. 8",
        "B. 9",
        "C. 10",
        "D. 12"
      ],
      "answer": "C",
      "explanation": "Quy luật khoảng cách tăng dần: 0 + 1 = 1; 1 + 2 = 3; 3 + 3 = 6; 6 + 4 = 10. Số tiếp theo là 10."
    },
    {
      "id": "ARCH-M-G1-W1-TTK-04",
      "exam": "ARCHIMEDES_MATH",
      "grade": 1,
      "round": "Tuần 1 - Bài tập tham khảo",
      "topic": "Cân thăng bằng suy luận Archimedes",
      "text": "Trên đĩa cân thăng bằng: 1 con hổ nặng bằng 2 con mèo. 1 con mèo nặng bằng 2 con vịt. Hỏi 1 con hổ nặng bằng bao nhiêu con vịt?",
      "options": [
        "A. 2 con vịt",
        "B. 3 con vịt",
        "C. 4 con vịt",
        "D. 5 con vịt"
      ],
      "answer": "C",
      "explanation": "1 con hổ = 2 con mèo. Mà mỗi con mèo = 2 con vịt, nên 2 con mèo = 2 × 2 = 4 con vịt. Vậy 1 con hổ nặng bằng 4 con vịt."
    },
    {
      "id": "ARCH-M-G1-W1-TTK-05",
      "exam": "ARCHIMEDES_MATH",
      "grade": 1,
      "round": "Tuần 1 - Bài tập tham khảo",
      "topic": "Toán tư duy phân chia",
      "text": "Một chiếc bánh pizza được cắt thành 4 miếng bằng nhau. Bạn Nam ăn mất 1 miếng. Hỏi còn lại bao nhiêu miếng bánh?",
      "options": [
        "A. 1 miếng",
        "B. 2 miếng",
        "C. 3 miếng",
        "D. 4 miếng"
      ],
      "answer": "C",
      "explanation": "Còn lại số miếng bánh là: 4 - 1 = 3 miếng."
    },
    {
      "id": "ARCH-M-G1-W2-T1-01",
      "exam": "ARCHIMEDES_MATH",
      "grade": 1,
      "round": "Tuần 2 - Tiết 1",
      "topic": "Tách gộp số 8",
      "text": "Số 8 gồm 6 và số mấy?",
      "options": [
        "A. 1",
        "B. 2",
        "C. 3",
        "D. 4"
      ],
      "answer": "B",
      "explanation": "8 gồm 6 và 2 vì 6 + 2 = 8."
    },
    {
      "id": "ARCH-M-G1-W2-T1-02",
      "exam": "ARCHIMEDES_MATH",
      "grade": 1,
      "round": "Tuần 2 - Tiết 1",
      "topic": "Tách gộp số 9",
      "text": "Số 9 gồm 8 và số mấy?",
      "options": [
        "A. 1",
        "B. 2",
        "C. 3",
        "D. 0"
      ],
      "answer": "A",
      "explanation": "9 gồm 8 và 1 vì 8 + 1 = 9."
    },
    {
      "id": "ARCH-M-G1-W2-T1-03",
      "exam": "ARCHIMEDES_MATH",
      "grade": 1,
      "round": "Tuần 2 - Tiết 1",
      "topic": "Bánh xe số tư duy",
      "text": "Trong một bánh xe số tròn, hai cánh đối diện nhau luôn có tổng bằng 9. Nếu một cánh là 5 thì cánh đối diện là số mấy?",
      "options": [
        "A. 3",
        "B. 4",
        "C. 5",
        "D. 2"
      ],
      "answer": "B",
      "explanation": "Số ở cánh đối diện là: 9 - 5 = 4."
    },
    {
      "id": "ARCH-M-G1-W2-T1-04",
      "exam": "ARCHIMEDES_MATH",
      "grade": 1,
      "round": "Tuần 2 - Tiết 1",
      "topic": "Quy luật ma trận hình học",
      "text": "Trong bảng ô lưới: Hàng 1 có: Vuông, Tròn, Sao. Hàng 2 có: Tròn, Sao, Vuông. Hàng 3 có: Sao, Vuông, [ ? ]. Hình thích hợp điền vào dấu hỏi chấm là hình nào?",
      "options": [
        "A. Hình tròn",
        "B. Hình vuông",
        "C. Hình sao",
        "D. Hình tam giác"
      ],
      "answer": "A",
      "explanation": "Mỗi hàng và mỗi cột đều có đủ 3 hình: Vuông, Tròn, Sao mà không bị trùng lặp. Ở hàng 3 còn thiếu Hình tròn."
    },
    {
      "id": "ARCH-M-G1-W2-T1-05",
      "exam": "ARCHIMEDES_MATH",
      "grade": 1,
      "round": "Tuần 2 - Tiết 1",
      "topic": "Toán xếp hàng",
      "text": "Các bạn lớp Nam đang xếp hàng lên xe buýt. Biết phía bên phải Nam có 3 bạn, phía bên trái Nam có 5 bạn. Hỏi hàng đó có tất cả bao nhiêu bạn?",
      "options": [
        "A. 8 bạn",
        "B. 9 bạn",
        "C. 10 bạn",
        "D. 7 bạn"
      ],
      "answer": "B",
      "explanation": "Tổng số bạn trong hàng gồm có: 5 bạn bên trái + Nam + 3 bạn bên phải = 5 + 1 + 3 = 9 bạn."
    },
    {
      "id": "ARCH-M-G1-W2-T2-01",
      "exam": "ARCHIMEDES_MATH",
      "grade": 1,
      "round": "Tuần 2 - Tiết 2",
      "topic": "So sánh số",
      "text": "Điền dấu thích hợp vào chỗ chấm: 7 ... 9",
      "options": [
        "A. >",
        "B. <",
        "C. =",
        "D. +"
      ],
      "answer": "B",
      "explanation": "Số 7 bé hơn số 9 nên điền dấu < (7 < 9)."
    },
    {
      "id": "ARCH-M-G1-W2-T2-02",
      "exam": "ARCHIMEDES_MATH",
      "grade": 1,
      "round": "Tuần 2 - Tiết 2",
      "topic": "Nhiều hơn, ít hơn",
      "text": "Đàn gà có 8 con gà mái và 5 con gà trống. Số gà mái nhiều hơn số gà trống bao nhiêu con?",
      "options": [
        "A. 2 con",
        "B. 3 con",
        "C. 4 con",
        "D. 5 con"
      ],
      "answer": "B",
      "explanation": "Số gà mái nhiều hơn số gà trống là: 8 - 5 = 3 con."
    },
    {
      "id": "ARCH-M-G1-W2-T2-03",
      "exam": "ARCHIMEDES_MATH",
      "grade": 1,
      "round": "Tuần 2 - Tiết 2",
      "topic": "Xếp thứ tự số",
      "text": "Dãy số nào dưới đây được sắp xếp theo thứ tự từ bé đến lớn?",
      "options": [
        "A. 2, 4, 6, 8, 9",
        "B. 9, 8, 6, 4, 2",
        "C. 2, 6, 4, 8, 9",
        "D. 8, 4, 2, 6, 9"
      ],
      "answer": "A",
      "explanation": "Dãy từ bé đến lớn là: 2, 4, 6, 8, 9."
    },
    {
      "id": "ARCH-M-G1-W2-T2-04",
      "exam": "ARCHIMEDES_MATH",
      "grade": 1,
      "round": "Tuần 2 - Tiết 2",
      "topic": "Số bé nhất, lớn nhất",
      "text": "Trong các số: 3, 8, 5, 1, 9 số bé nhất là số nào?",
      "options": [
        "A. 1",
        "B. 3",
        "C. 5",
        "D. 9"
      ],
      "answer": "A",
      "explanation": "Số 1 là số bé nhất trong các số đã cho."
    },
    {
      "id": "ARCH-M-G1-W2-T2-05",
      "exam": "ARCHIMEDES_MATH",
      "grade": 1,
      "round": "Tuần 2 - Tiết 2",
      "topic": "Tách gộp số 10",
      "text": "Số 10 gồm 7 và mấy?",
      "options": [
        "A. 2",
        "B. 3",
        "C. 4",
        "D. 5"
      ],
      "answer": "B",
      "explanation": "10 gồm 7 và 3 vì 7 + 3 = 10."
    },
    {
      "id": "ARCH-M-G1-W2-T3-01",
      "exam": "ARCHIMEDES_MATH",
      "grade": 1,
      "round": "Tuần 2 - Tiết 3",
      "topic": "Hình học phẳng",
      "text": "Hình nào dưới đây có 3 cạnh và 3 góc?",
      "options": [
        "A. Hình tam giác",
        "B. Hình vuông",
        "C. Hình tròn",
        "D. Hình chữ nhật"
      ],
      "answer": "A",
      "explanation": "Hình tam giác là hình có 3 cạnh và 3 góc."
    },
    {
      "id": "ARCH-M-G1-W2-T3-02",
      "exam": "ARCHIMEDES_MATH",
      "grade": 1,
      "round": "Tuần 2 - Tiết 3",
      "topic": "Nhận biết hình",
      "text": "Chiếc đồng hồ treo tường hình tròn, khung cửa sổ hình vuông, cái bảng viết hình chữ nhật. Hỏi khung cửa sổ có hình gì?",
      "options": [
        "A. Hình tròn",
        "B. Hình vuông",
        "C. Hình chữ nhật",
        "D. Hình tam giác"
      ],
      "answer": "B",
      "explanation": "Theo đề bài, khung cửa sổ có hình vuông."
    },
    {
      "id": "ARCH-M-G1-W2-T3-03",
      "exam": "ARCHIMEDES_MATH",
      "grade": 1,
      "round": "Tuần 2 - Tiết 3",
      "topic": "Đếm hình",
      "text": "Một hình vuông lớn được chia làm 4 ô vuông nhỏ bằng nhau. Hỏi trong hình có tất cả bao nhiêu hình vuông?",
      "options": [
        "A. 4 hình vuông",
        "B. 5 hình vuông",
        "C. 6 hình vuông",
        "D. 3 hình vuông"
      ],
      "answer": "B",
      "explanation": "Gồm có 4 hình vuông nhỏ và 1 hình vuông lớn bao bên ngoài: 4 + 1 = 5 hình vuông."
    },
    {
      "id": "ARCH-M-G1-W2-T3-04",
      "exam": "ARCHIMEDES_MATH",
      "grade": 1,
      "round": "Tuần 2 - Tiết 3",
      "topic": "Que tính tạo hình",
      "text": "Cần ít nhất bao nhiêu que tính bằng nhau để xếp thành một hình tam giác?",
      "options": [
        "A. 2 que",
        "B. 3 que",
        "C. 4 que",
        "D. 5 que"
      ],
      "answer": "B",
      "explanation": "Hình tam giác có 3 cạnh nên cần ít nhất 3 que tính."
    },
    {
      "id": "ARCH-M-G1-W2-T3-05",
      "exam": "ARCHIMEDES_MATH",
      "grade": 1,
      "round": "Tuần 2 - Tiết 3",
      "topic": "Que tính tạo hình",
      "text": "Cần ít nhất bao nhiêu que tính bằng nhau để xếp thành một hình vuông?",
      "options": [
        "A. 3 que",
        "B. 4 que",
        "C. 5 que",
        "D. 6 que"
      ],
      "answer": "B",
      "explanation": "Hình vuông có 4 cạnh bằng nhau nên cần 4 que tính bằng nhau."
    },
    {
      "id": "ARCH-M-G1-W2-PKT-01",
      "exam": "ARCHIMEDES_MATH",
      "grade": 1,
      "round": "Tuần 2 - Phiếu cuối tuần",
      "topic": "So sánh",
      "text": "Điền dấu thích hợp: 5 + 2 ... 8 - 1",
      "options": [
        "A. >",
        "B. <",
        "C. =",
        "D. Không so sánh được"
      ],
      "answer": "C",
      "explanation": "Ta có: 5 + 2 = 7 và 8 - 1 = 7. Vậy 5 + 2 = 8 - 1."
    },
    {
      "id": "ARCH-M-G1-W2-PKT-02",
      "exam": "ARCHIMEDES_MATH",
      "grade": 1,
      "round": "Tuần 2 - Phiếu cuối tuần",
      "topic": "Giải toán có lời văn",
      "text": "Tổ Một có 4 bạn, tổ Hai có 5 bạn. Cả hai tổ có bao nhiêu bạn?",
      "options": [
        "A. 8 bạn",
        "B. 9 bạn",
        "C. 10 bạn",
        "D. 7 bạn"
      ],
      "answer": "B",
      "explanation": "Cả hai tổ có số bạn là: 4 + 5 = 9 bạn."
    },
    {
      "id": "ARCH-M-G1-W2-PKT-03",
      "exam": "ARCHIMEDES_MATH",
      "grade": 1,
      "round": "Tuần 2 - Phiếu cuối tuần",
      "topic": "Phép trừ cơ bản",
      "text": "Kết quả của phép tính 9 - 3 là bao nhiêu?",
      "options": [
        "A. 5",
        "B. 6",
        "C. 7",
        "D. 8"
      ],
      "answer": "B",
      "explanation": "9 - 3 = 6."
    },
    {
      "id": "ARCH-M-G1-W2-PKT-04",
      "exam": "ARCHIMEDES_MATH",
      "grade": 1,
      "round": "Tuần 2 - Phiếu cuối tuần",
      "topic": "Dãy số quy luật",
      "text": "Điền số tiếp theo vào dãy số: 10, 8, 6, 4, [ ? ]",
      "options": [
        "A. 3",
        "B. 2",
        "C. 1",
        "D. 0"
      ],
      "answer": "B",
      "explanation": "Dãy số chẵn giảm dần cách nhau 2 đơn vị: 4 - 2 = 2."
    },
    {
      "id": "ARCH-M-G1-W2-PKT-05",
      "exam": "ARCHIMEDES_MATH",
      "grade": 1,
      "round": "Tuần 2 - Phiếu cuối tuần",
      "topic": "Đếm hình",
      "text": "Hình vẽ ngôi nhà gồm 1 tam giác làm mái nhà, 1 hình chữ nhật lớn làm thân nhà và 1 hình chữ nhật nhỏ làm cửa ra vào. Có bao nhiêu hình chữ nhật?",
      "options": [
        "A. 1 hình",
        "B. 2 hình",
        "C. 3 hình",
        "D. 4 hình"
      ],
      "answer": "B",
      "explanation": "Có 2 hình chữ nhật (thân nhà và cửa ra vào)."
    },
    {
      "id": "ARCH-M-G1-W2-TTK-01",
      "exam": "ARCHIMEDES_MATH",
      "grade": 1,
      "round": "Tuần 2 - Bài tập tham khảo",
      "topic": "Mê cung đường đi tư duy",
      "text": "Một chú thỏ đi qua 3 cửa theo thứ tự nhặt củ cà rốt: Cửa 1 nhặt 2 củ, Cửa 2 nhặt 3 củ, Cửa 3 nhặt 4 củ. Hỏi chú thỏ nhặt được tất cả bao nhiêu củ cà rốt?",
      "options": [
        "A. 8 củ",
        "B. 9 củ",
        "C. 10 củ",
        "D. 7 củ"
      ],
      "answer": "B",
      "explanation": "Tổng số củ cà rốt thỏ nhặt được là: 2 + 3 + 4 = 9 củ."
    },
    {
      "id": "ARCH-M-G1-W2-TTK-02",
      "exam": "ARCHIMEDES_MATH",
      "grade": 1,
      "round": "Tuần 2 - Bài tập tham khảo",
      "topic": "Toán tư duy logic",
      "text": "Bình có 6 viên bi. Bình cho Dũng 2 viên thì số bi của hai bạn bằng nhau. Hỏi ban đầu Dũng có mấy viên bi?",
      "options": [
        "A. 2 viên",
        "B. 3 viên",
        "C. 4 viên",
        "D. 1 viên"
      ],
      "answer": "A",
      "explanation": "Sau khi cho 2 viên bi, Bình còn lại: 6 - 2 = 4 viên bi. Lúc này hai bạn có số bi bằng nhau nên Dũng cũng có 4 viên bi. Ban đầu Dũng có số bi là: 4 - 2 = 2 viên bi."
    },
    {
      "id": "ARCH-M-G1-W2-TTK-03",
      "exam": "ARCHIMEDES_MATH",
      "grade": 1,
      "round": "Tuần 2 - Bài tập tham khảo",
      "topic": "Quy luật chuỗi hạt màu",
      "text": "Một chuỗi vòng được xâu theo quy luật: 🔴 🔵 🟡 🔴 🔵 🟡 🔴 [ ? ]. Hạt tiếp theo có màu gì?",
      "options": [
        "A. Đỏ 🔴",
        "B. Xanh 🔵",
        "C. Vàng 🟡",
        "D. Tím 🟣"
      ],
      "answer": "B",
      "explanation": "Quy luật lặp lại nhóm 3 hạt: (Đỏ, Xanh, Vàng). Sau hạt Đỏ là hạt Xanh 🔵."
    },
    {
      "id": "ARCH-M-G1-W2-TTK-04",
      "exam": "ARCHIMEDES_MATH",
      "grade": 1,
      "round": "Tuần 2 - Bài tập tham khảo",
      "topic": "Toán cắt dây",
      "text": "Một sợi dây dài được cắt 2 nhát. Hỏi sợi dây đó bị đứt thành bao nhiêu đoạn?",
      "options": [
        "A. 2 đoạn",
        "B. 3 đoạn",
        "C. 4 đoạn",
        "D. 1 đoạn"
      ],
      "answer": "B",
      "explanation": "Cắt 1 nhát chia dây thành 2 đoạn, cắt 2 nhát chia dây thành: 2 + 1 = 3 đoạn."
    },
    {
      "id": "ARCH-M-G1-W2-TTK-05",
      "exam": "ARCHIMEDES_MATH",
      "grade": 1,
      "round": "Tuần 2 - Bài tập tham khảo",
      "topic": "Cân đĩa tư duy",
      "text": "Quả dưa hấu nặng bằng 2 quả bưởi. Quả bưởi nặng bằng 3 quả cam. Hỏi 1 quả dưa hấu nặng bằng bao nhiêu quả cam?",
      "options": [
        "A. 5 quả",
        "B. 6 quả",
        "C. 4 quả",
        "D. 7 quả"
      ],
      "answer": "B",
      "explanation": "1 dưa hấu = 2 quả bưởi. Mỗi quả bưởi = 3 quả cam. Vậy 1 dưa hấu = 2 × 3 = 6 quả cam."
    },
    {
      "id": "ARCH-M-G1-W3-T-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 1,
      "round": "Tuần 3 - Tiết 1",
      "topic": "Phép cộng trong phạm vi 5, bảng cộng",
      "text": "[Tiết 1] Tính giá trị: 6 + 2 = ?",
      "options": [
        "A. 8",
        "B. 10",
        "C. 7",
        "D. 9"
      ],
      "answer": "A",
      "explanation": "Ta có phép tính: 6 + 2 = 8."
    },
    {
      "id": "ARCH-M-G1-W3-T-2",
      "exam": "ARCHIMEDES_MATH",
      "grade": 1,
      "round": "Tuần 3 - Tiết 2",
      "topic": "Phép cộng trong phạm vi 5, bảng cộng",
      "text": "[Tiết 2] Tính giá trị: 7 + 3 = ?",
      "options": [
        "A. 10",
        "B. 12",
        "C. 9",
        "D. 11"
      ],
      "answer": "A",
      "explanation": "Ta có phép tính: 7 + 3 = 10."
    },
    {
      "id": "ARCH-M-G1-W3-T-3",
      "exam": "ARCHIMEDES_MATH",
      "grade": 1,
      "round": "Tuần 3 - Tiết 3",
      "topic": "Phép cộng trong phạm vi 5, bảng cộng",
      "text": "[Tiết 3] Tính giá trị: 8 + 4 = ?",
      "options": [
        "A. 12",
        "B. 14",
        "C. 11",
        "D. 13"
      ],
      "answer": "A",
      "explanation": "Ta có phép tính: 8 + 4 = 12."
    },
    {
      "id": "ARCH-M-G1-W3-PKT-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 1,
      "round": "Tuần 3 - Phiếu cuối tuần",
      "topic": "Phép cộng trong phạm vi 5, bảng cộng",
      "text": "[Phiếu cuối tuần 3] Tính: 7 + 2 = ?",
      "options": [
        "A. 9",
        "B. 10",
        "C. 8",
        "D. 11"
      ],
      "answer": "A",
      "explanation": "Thực hiện phép cộng: 7 + 2 = 9."
    },
    {
      "id": "ARCH-M-G1-W3-TTK-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 1,
      "round": "Tuần 3 - Bài tập tham khảo",
      "topic": "Phép cộng trong phạm vi 5, bảng cộng",
      "text": "[Toán tư duy Archimedes Tuần 3] Chủ đề: Phép cộng trong phạm vi 5, bảng cộng. Một bài toán đố tư duy logic: Bạn An có một số que tính, nếu thêm 2 que thì bằng số que của Bình. Biết Bình có 8 que. Hỏi An có bao nhiêu que tính?",
      "options": [
        "A. 6 que",
        "B. 7 que",
        "C. 5 que",
        "D. 8 que"
      ],
      "answer": "A",
      "explanation": "Số que tính của An là: (8) - 2 = 6 que tính."
    },
    {
      "id": "ARCH-M-G1-W4-T-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 1,
      "round": "Tuần 4 - Tiết 1",
      "topic": "Phép trừ trong phạm vi 5, toán bớt đi",
      "text": "[Tiết 1] Tính giá trị: 7 + 2 = ?",
      "options": [
        "A. 9",
        "B. 11",
        "C. 8",
        "D. 10"
      ],
      "answer": "A",
      "explanation": "Ta có phép tính: 7 + 2 = 9."
    },
    {
      "id": "ARCH-M-G1-W4-T-2",
      "exam": "ARCHIMEDES_MATH",
      "grade": 1,
      "round": "Tuần 4 - Tiết 2",
      "topic": "Phép trừ trong phạm vi 5, toán bớt đi",
      "text": "[Tiết 2] Tính giá trị: 8 + 3 = ?",
      "options": [
        "A. 11",
        "B. 13",
        "C. 10",
        "D. 12"
      ],
      "answer": "A",
      "explanation": "Ta có phép tính: 8 + 3 = 11."
    },
    {
      "id": "ARCH-M-G1-W4-T-3",
      "exam": "ARCHIMEDES_MATH",
      "grade": 1,
      "round": "Tuần 4 - Tiết 3",
      "topic": "Phép trừ trong phạm vi 5, toán bớt đi",
      "text": "[Tiết 3] Tính giá trị: 9 + 4 = ?",
      "options": [
        "A. 13",
        "B. 15",
        "C. 12",
        "D. 14"
      ],
      "answer": "A",
      "explanation": "Ta có phép tính: 9 + 4 = 13."
    },
    {
      "id": "ARCH-M-G1-W4-PKT-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 1,
      "round": "Tuần 4 - Phiếu cuối tuần",
      "topic": "Phép trừ trong phạm vi 5, toán bớt đi",
      "text": "[Phiếu cuối tuần 4] Tính: 9 + 2 = ?",
      "options": [
        "A. 11",
        "B. 12",
        "C. 10",
        "D. 13"
      ],
      "answer": "A",
      "explanation": "Thực hiện phép cộng: 9 + 2 = 11."
    },
    {
      "id": "ARCH-M-G1-W4-TTK-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 1,
      "round": "Tuần 4 - Bài tập tham khảo",
      "topic": "Phép trừ trong phạm vi 5, toán bớt đi",
      "text": "[Toán tư duy Archimedes Tuần 4] Chủ đề: Phép trừ trong phạm vi 5, toán bớt đi. Một bài toán đố tư duy logic: Bạn An có một số que tính, nếu thêm 2 que thì bằng số que của Bình. Biết Bình có 9 que. Hỏi An có bao nhiêu que tính?",
      "options": [
        "A. 7 que",
        "B. 8 que",
        "C. 6 que",
        "D. 9 que"
      ],
      "answer": "A",
      "explanation": "Số que tính của An là: (9) - 2 = 7 que tính."
    },
    {
      "id": "ARCH-M-G1-W5-T-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 1,
      "round": "Tuần 5 - Tiết 1",
      "topic": "Phép cộng trong phạm vi 10",
      "text": "[Tiết 1] Tính giá trị: 8 + 2 = ?",
      "options": [
        "A. 10",
        "B. 12",
        "C. 9",
        "D. 11"
      ],
      "answer": "A",
      "explanation": "Ta có phép tính: 8 + 2 = 10."
    },
    {
      "id": "ARCH-M-G1-W5-T-2",
      "exam": "ARCHIMEDES_MATH",
      "grade": 1,
      "round": "Tuần 5 - Tiết 2",
      "topic": "Phép cộng trong phạm vi 10",
      "text": "[Tiết 2] Tính giá trị: 9 + 3 = ?",
      "options": [
        "A. 12",
        "B. 14",
        "C. 11",
        "D. 13"
      ],
      "answer": "A",
      "explanation": "Ta có phép tính: 9 + 3 = 12."
    },
    {
      "id": "ARCH-M-G1-W5-T-3",
      "exam": "ARCHIMEDES_MATH",
      "grade": 1,
      "round": "Tuần 5 - Tiết 3",
      "topic": "Phép cộng trong phạm vi 10",
      "text": "[Tiết 3] Tính giá trị: 10 + 4 = ?",
      "options": [
        "A. 14",
        "B. 16",
        "C. 13",
        "D. 15"
      ],
      "answer": "A",
      "explanation": "Ta có phép tính: 10 + 4 = 14."
    },
    {
      "id": "ARCH-M-G1-W5-PKT-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 1,
      "round": "Tuần 5 - Phiếu cuối tuần",
      "topic": "Phép cộng trong phạm vi 10",
      "text": "[Phiếu cuối tuần 5] Tính: 1 + 2 = ?",
      "options": [
        "A. 3",
        "B. 4",
        "C. 2",
        "D. 5"
      ],
      "answer": "A",
      "explanation": "Thực hiện phép cộng: 1 + 2 = 3."
    },
    {
      "id": "ARCH-M-G1-W5-TTK-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 1,
      "round": "Tuần 5 - Bài tập tham khảo",
      "topic": "Phép cộng trong phạm vi 10",
      "text": "[Toán tư duy Archimedes Tuần 5] Chủ đề: Phép cộng trong phạm vi 10. Một bài toán đố tư duy logic: Bạn An có một số que tính, nếu thêm 2 que thì bằng số que của Bình. Biết Bình có 10 que. Hỏi An có bao nhiêu que tính?",
      "options": [
        "A. 8 que",
        "B. 9 que",
        "C. 7 que",
        "D. 10 que"
      ],
      "answer": "A",
      "explanation": "Số que tính của An là: (10) - 2 = 8 que tính."
    },
    {
      "id": "ARCH-M-G1-W6-T-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 1,
      "round": "Tuần 6 - Tiết 1",
      "topic": "Phép trừ trong phạm vi 10",
      "text": "[Tiết 1] Tính giá trị: 9 + 2 = ?",
      "options": [
        "A. 11",
        "B. 13",
        "C. 10",
        "D. 12"
      ],
      "answer": "A",
      "explanation": "Ta có phép tính: 9 + 2 = 11."
    },
    {
      "id": "ARCH-M-G1-W6-T-2",
      "exam": "ARCHIMEDES_MATH",
      "grade": 1,
      "round": "Tuần 6 - Tiết 2",
      "topic": "Phép trừ trong phạm vi 10",
      "text": "[Tiết 2] Tính giá trị: 10 + 3 = ?",
      "options": [
        "A. 13",
        "B. 15",
        "C. 12",
        "D. 14"
      ],
      "answer": "A",
      "explanation": "Ta có phép tính: 10 + 3 = 13."
    },
    {
      "id": "ARCH-M-G1-W6-T-3",
      "exam": "ARCHIMEDES_MATH",
      "grade": 1,
      "round": "Tuần 6 - Tiết 3",
      "topic": "Phép trừ trong phạm vi 10",
      "text": "[Tiết 3] Tính giá trị: 11 + 4 = ?",
      "options": [
        "A. 15",
        "B. 17",
        "C. 14",
        "D. 16"
      ],
      "answer": "A",
      "explanation": "Ta có phép tính: 11 + 4 = 15."
    },
    {
      "id": "ARCH-M-G1-W6-PKT-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 1,
      "round": "Tuần 6 - Phiếu cuối tuần",
      "topic": "Phép trừ trong phạm vi 10",
      "text": "[Phiếu cuối tuần 6] Tính: 3 + 2 = ?",
      "options": [
        "A. 5",
        "B. 6",
        "C. 4",
        "D. 7"
      ],
      "answer": "A",
      "explanation": "Thực hiện phép cộng: 3 + 2 = 5."
    },
    {
      "id": "ARCH-M-G1-W6-TTK-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 1,
      "round": "Tuần 6 - Bài tập tham khảo",
      "topic": "Phép trừ trong phạm vi 10",
      "text": "[Toán tư duy Archimedes Tuần 6] Chủ đề: Phép trừ trong phạm vi 10. Một bài toán đố tư duy logic: Bạn An có một số que tính, nếu thêm 2 que thì bằng số que của Bình. Biết Bình có 11 que. Hỏi An có bao nhiêu que tính?",
      "options": [
        "A. 9 que",
        "B. 10 que",
        "C. 8 que",
        "D. 11 que"
      ],
      "answer": "A",
      "explanation": "Số que tính của An là: (11) - 2 = 9 que tính."
    },
    {
      "id": "ARCH-M-G1-W7-T-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 1,
      "round": "Tuần 7 - Tiết 1",
      "topic": "Khối lập phương, khối hộp chữ nhật",
      "text": "[Tiết 1] Tính giá trị: 10 + 2 = ?",
      "options": [
        "A. 12",
        "B. 14",
        "C. 11",
        "D. 13"
      ],
      "answer": "A",
      "explanation": "Ta có phép tính: 10 + 2 = 12."
    },
    {
      "id": "ARCH-M-G1-W7-T-2",
      "exam": "ARCHIMEDES_MATH",
      "grade": 1,
      "round": "Tuần 7 - Tiết 2",
      "topic": "Khối lập phương, khối hộp chữ nhật",
      "text": "[Tiết 2] Tính giá trị: 11 + 3 = ?",
      "options": [
        "A. 14",
        "B. 16",
        "C. 13",
        "D. 15"
      ],
      "answer": "A",
      "explanation": "Ta có phép tính: 11 + 3 = 14."
    },
    {
      "id": "ARCH-M-G1-W7-T-3",
      "exam": "ARCHIMEDES_MATH",
      "grade": 1,
      "round": "Tuần 7 - Tiết 3",
      "topic": "Khối lập phương, khối hộp chữ nhật",
      "text": "[Tiết 3] Tính giá trị: 2 + 4 = ?",
      "options": [
        "A. 6",
        "B. 8",
        "C. 5",
        "D. 7"
      ],
      "answer": "A",
      "explanation": "Ta có phép tính: 2 + 4 = 6."
    },
    {
      "id": "ARCH-M-G1-W7-PKT-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 1,
      "round": "Tuần 7 - Phiếu cuối tuần",
      "topic": "Khối lập phương, khối hộp chữ nhật",
      "text": "[Phiếu cuối tuần 7] Tính: 5 + 2 = ?",
      "options": [
        "A. 7",
        "B. 8",
        "C. 6",
        "D. 9"
      ],
      "answer": "A",
      "explanation": "Thực hiện phép cộng: 5 + 2 = 7."
    },
    {
      "id": "ARCH-M-G1-W7-TTK-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 1,
      "round": "Tuần 7 - Bài tập tham khảo",
      "topic": "Khối lập phương, khối hộp chữ nhật",
      "text": "[Toán tư duy Archimedes Tuần 7] Chủ đề: Khối lập phương, khối hộp chữ nhật. Một bài toán đố tư duy logic: Bạn An có một số que tính, nếu thêm 2 que thì bằng số que của Bình. Biết Bình có 12 que. Hỏi An có bao nhiêu que tính?",
      "options": [
        "A. 10 que",
        "B. 11 que",
        "C. 9 que",
        "D. 12 que"
      ],
      "answer": "A",
      "explanation": "Số que tính của An là: (12) - 2 = 10 que tính."
    },
    {
      "id": "ARCH-M-G1-W8-T-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 1,
      "round": "Tuần 8 - Tiết 1",
      "topic": "Luyện tập cộng trừ phạm vi 10",
      "text": "[Tiết 1] Tính giá trị: 11 + 2 = ?",
      "options": [
        "A. 13",
        "B. 15",
        "C. 12",
        "D. 14"
      ],
      "answer": "A",
      "explanation": "Ta có phép tính: 11 + 2 = 13."
    },
    {
      "id": "ARCH-M-G1-W8-T-2",
      "exam": "ARCHIMEDES_MATH",
      "grade": 1,
      "round": "Tuần 8 - Tiết 2",
      "topic": "Luyện tập cộng trừ phạm vi 10",
      "text": "[Tiết 2] Tính giá trị: 2 + 3 = ?",
      "options": [
        "A. 5",
        "B. 7",
        "C. 4",
        "D. 6"
      ],
      "answer": "A",
      "explanation": "Ta có phép tính: 2 + 3 = 5."
    },
    {
      "id": "ARCH-M-G1-W8-T-3",
      "exam": "ARCHIMEDES_MATH",
      "grade": 1,
      "round": "Tuần 8 - Tiết 3",
      "topic": "Luyện tập cộng trừ phạm vi 10",
      "text": "[Tiết 3] Tính giá trị: 3 + 4 = ?",
      "options": [
        "A. 7",
        "B. 9",
        "C. 6",
        "D. 8"
      ],
      "answer": "A",
      "explanation": "Ta có phép tính: 3 + 4 = 7."
    },
    {
      "id": "ARCH-M-G1-W8-PKT-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 1,
      "round": "Tuần 8 - Phiếu cuối tuần",
      "topic": "Luyện tập cộng trừ phạm vi 10",
      "text": "[Phiếu cuối tuần 8] Tính: 7 + 2 = ?",
      "options": [
        "A. 9",
        "B. 10",
        "C. 8",
        "D. 11"
      ],
      "answer": "A",
      "explanation": "Thực hiện phép cộng: 7 + 2 = 9."
    },
    {
      "id": "ARCH-M-G1-W8-TTK-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 1,
      "round": "Tuần 8 - Bài tập tham khảo",
      "topic": "Luyện tập cộng trừ phạm vi 10",
      "text": "[Toán tư duy Archimedes Tuần 8] Chủ đề: Luyện tập cộng trừ phạm vi 10. Một bài toán đố tư duy logic: Bạn An có một số que tính, nếu thêm 2 que thì bằng số que của Bình. Biết Bình có 13 que. Hỏi An có bao nhiêu que tính?",
      "options": [
        "A. 11 que",
        "B. 12 que",
        "C. 10 que",
        "D. 13 que"
      ],
      "answer": "A",
      "explanation": "Số que tính của An là: (13) - 2 = 11 que tính."
    },
    {
      "id": "ARCH-M-G1-W9-T-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 1,
      "round": "Tuần 9 - Tiết 1",
      "topic": "Ôn tập giữa học kì 1",
      "text": "[Tiết 1] Tính giá trị: 2 + 2 = ?",
      "options": [
        "A. 4",
        "B. 6",
        "C. 3",
        "D. 5"
      ],
      "answer": "A",
      "explanation": "Ta có phép tính: 2 + 2 = 4."
    },
    {
      "id": "ARCH-M-G1-W9-T-2",
      "exam": "ARCHIMEDES_MATH",
      "grade": 1,
      "round": "Tuần 9 - Tiết 2",
      "topic": "Ôn tập giữa học kì 1",
      "text": "[Tiết 2] Tính giá trị: 3 + 3 = ?",
      "options": [
        "A. 6",
        "B. 8",
        "C. 5",
        "D. 7"
      ],
      "answer": "A",
      "explanation": "Ta có phép tính: 3 + 3 = 6."
    },
    {
      "id": "ARCH-M-G1-W9-T-3",
      "exam": "ARCHIMEDES_MATH",
      "grade": 1,
      "round": "Tuần 9 - Tiết 3",
      "topic": "Ôn tập giữa học kì 1",
      "text": "[Tiết 3] Tính giá trị: 4 + 4 = ?",
      "options": [
        "A. 8",
        "B. 10",
        "C. 7",
        "D. 9"
      ],
      "answer": "A",
      "explanation": "Ta có phép tính: 4 + 4 = 8."
    },
    {
      "id": "ARCH-M-G1-W9-PKT-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 1,
      "round": "Tuần 9 - Phiếu cuối tuần",
      "topic": "Ôn tập giữa học kì 1",
      "text": "[Phiếu cuối tuần 9] Tính: 9 + 2 = ?",
      "options": [
        "A. 11",
        "B. 12",
        "C. 10",
        "D. 13"
      ],
      "answer": "A",
      "explanation": "Thực hiện phép cộng: 9 + 2 = 11."
    },
    {
      "id": "ARCH-M-G1-W9-TTK-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 1,
      "round": "Tuần 9 - Bài tập tham khảo",
      "topic": "Ôn tập giữa học kì 1",
      "text": "[Toán tư duy Archimedes Tuần 9] Chủ đề: Ôn tập giữa học kì 1. Một bài toán đố tư duy logic: Bạn An có một số que tính, nếu thêm 2 que thì bằng số que của Bình. Biết Bình có 14 que. Hỏi An có bao nhiêu que tính?",
      "options": [
        "A. 12 que",
        "B. 13 que",
        "C. 11 que",
        "D. 14 que"
      ],
      "answer": "A",
      "explanation": "Số que tính của An là: (14) - 2 = 12 que tính."
    },
    {
      "id": "ARCH-M-G1-W10-T-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 1,
      "round": "Tuần 10 - Tiết 1",
      "topic": "Điểm, đoạn thẳng, đo độ dài tự nhiên",
      "text": "[Tiết 1] Tính giá trị: 3 + 2 = ?",
      "options": [
        "A. 5",
        "B. 7",
        "C. 4",
        "D. 6"
      ],
      "answer": "A",
      "explanation": "Ta có phép tính: 3 + 2 = 5."
    },
    {
      "id": "ARCH-M-G1-W10-T-2",
      "exam": "ARCHIMEDES_MATH",
      "grade": 1,
      "round": "Tuần 10 - Tiết 2",
      "topic": "Điểm, đoạn thẳng, đo độ dài tự nhiên",
      "text": "[Tiết 2] Tính giá trị: 4 + 3 = ?",
      "options": [
        "A. 7",
        "B. 9",
        "C. 6",
        "D. 8"
      ],
      "answer": "A",
      "explanation": "Ta có phép tính: 4 + 3 = 7."
    },
    {
      "id": "ARCH-M-G1-W10-T-3",
      "exam": "ARCHIMEDES_MATH",
      "grade": 1,
      "round": "Tuần 10 - Tiết 3",
      "topic": "Điểm, đoạn thẳng, đo độ dài tự nhiên",
      "text": "[Tiết 3] Tính giá trị: 5 + 4 = ?",
      "options": [
        "A. 9",
        "B. 11",
        "C. 8",
        "D. 10"
      ],
      "answer": "A",
      "explanation": "Ta có phép tính: 5 + 4 = 9."
    },
    {
      "id": "ARCH-M-G1-W10-PKT-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 1,
      "round": "Tuần 10 - Phiếu cuối tuần",
      "topic": "Điểm, đoạn thẳng, đo độ dài tự nhiên",
      "text": "[Phiếu cuối tuần 10] Tính: 1 + 2 = ?",
      "options": [
        "A. 3",
        "B. 4",
        "C. 2",
        "D. 5"
      ],
      "answer": "A",
      "explanation": "Thực hiện phép cộng: 1 + 2 = 3."
    },
    {
      "id": "ARCH-M-G1-W10-TTK-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 1,
      "round": "Tuần 10 - Bài tập tham khảo",
      "topic": "Điểm, đoạn thẳng, đo độ dài tự nhiên",
      "text": "[Toán tư duy Archimedes Tuần 10] Chủ đề: Điểm, đoạn thẳng, đo độ dài tự nhiên. Một bài toán đố tư duy logic: Bạn An có một số que tính, nếu thêm 2 que thì bằng số que của Bình. Biết Bình có 15 que. Hỏi An có bao nhiêu que tính?",
      "options": [
        "A. 13 que",
        "B. 14 que",
        "C. 12 que",
        "D. 15 que"
      ],
      "answer": "A",
      "explanation": "Số que tính của An là: (15) - 2 = 13 que tính."
    },
    {
      "id": "ARCH-M-G1-W11-T-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 1,
      "round": "Tuần 11 - Tiết 1",
      "topic": "Xăng-ti-mét (cm), thực hành dùng thước đo",
      "text": "[Tiết 1] Tính giá trị: 4 + 2 = ?",
      "options": [
        "A. 6",
        "B. 8",
        "C. 5",
        "D. 7"
      ],
      "answer": "A",
      "explanation": "Ta có phép tính: 4 + 2 = 6."
    },
    {
      "id": "ARCH-M-G1-W11-T-2",
      "exam": "ARCHIMEDES_MATH",
      "grade": 1,
      "round": "Tuần 11 - Tiết 2",
      "topic": "Xăng-ti-mét (cm), thực hành dùng thước đo",
      "text": "[Tiết 2] Tính giá trị: 5 + 3 = ?",
      "options": [
        "A. 8",
        "B. 10",
        "C. 7",
        "D. 9"
      ],
      "answer": "A",
      "explanation": "Ta có phép tính: 5 + 3 = 8."
    },
    {
      "id": "ARCH-M-G1-W11-T-3",
      "exam": "ARCHIMEDES_MATH",
      "grade": 1,
      "round": "Tuần 11 - Tiết 3",
      "topic": "Xăng-ti-mét (cm), thực hành dùng thước đo",
      "text": "[Tiết 3] Tính giá trị: 6 + 4 = ?",
      "options": [
        "A. 10",
        "B. 12",
        "C. 9",
        "D. 11"
      ],
      "answer": "A",
      "explanation": "Ta có phép tính: 6 + 4 = 10."
    },
    {
      "id": "ARCH-M-G1-W11-PKT-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 1,
      "round": "Tuần 11 - Phiếu cuối tuần",
      "topic": "Xăng-ti-mét (cm), thực hành dùng thước đo",
      "text": "[Phiếu cuối tuần 11] Tính: 3 + 5 = ?",
      "options": [
        "A. 8",
        "B. 9",
        "C. 7",
        "D. 10"
      ],
      "answer": "A",
      "explanation": "Thực hiện phép cộng: 3 + 5 = 8."
    },
    {
      "id": "ARCH-M-G1-W11-TTK-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 1,
      "round": "Tuần 11 - Bài tập tham khảo",
      "topic": "Xăng-ti-mét (cm), thực hành dùng thước đo",
      "text": "[Toán tư duy Archimedes Tuần 11] Chủ đề: Xăng-ti-mét (cm), thực hành dùng thước đo. Một bài toán đố tư duy logic: Bạn An có một số que tính, nếu thêm 2 que thì bằng số que của Bình. Biết Bình có 16 que. Hỏi An có bao nhiêu que tính?",
      "options": [
        "A. 14 que",
        "B. 15 que",
        "C. 13 que",
        "D. 16 que"
      ],
      "answer": "A",
      "explanation": "Số que tính của An là: (16) - 2 = 14 que tính."
    },
    {
      "id": "ARCH-M-G1-W12-T-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 1,
      "round": "Tuần 12 - Tiết 1",
      "topic": "Phép tính cộng trừ với đơn vị đo cm",
      "text": "[Tiết 1] Tính giá trị: 5 + 2 = ?",
      "options": [
        "A. 7",
        "B. 9",
        "C. 6",
        "D. 8"
      ],
      "answer": "A",
      "explanation": "Ta có phép tính: 5 + 2 = 7."
    },
    {
      "id": "ARCH-M-G1-W12-T-2",
      "exam": "ARCHIMEDES_MATH",
      "grade": 1,
      "round": "Tuần 12 - Tiết 2",
      "topic": "Phép tính cộng trừ với đơn vị đo cm",
      "text": "[Tiết 2] Tính giá trị: 6 + 3 = ?",
      "options": [
        "A. 9",
        "B. 11",
        "C. 8",
        "D. 10"
      ],
      "answer": "A",
      "explanation": "Ta có phép tính: 6 + 3 = 9."
    },
    {
      "id": "ARCH-M-G1-W12-T-3",
      "exam": "ARCHIMEDES_MATH",
      "grade": 1,
      "round": "Tuần 12 - Tiết 3",
      "topic": "Phép tính cộng trừ với đơn vị đo cm",
      "text": "[Tiết 3] Tính giá trị: 7 + 4 = ?",
      "options": [
        "A. 11",
        "B. 13",
        "C. 10",
        "D. 12"
      ],
      "answer": "A",
      "explanation": "Ta có phép tính: 7 + 4 = 11."
    },
    {
      "id": "ARCH-M-G1-W12-PKT-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 1,
      "round": "Tuần 12 - Phiếu cuối tuần",
      "topic": "Phép tính cộng trừ với đơn vị đo cm",
      "text": "[Phiếu cuối tuần 12] Tính: 5 + 5 = ?",
      "options": [
        "A. 10",
        "B. 11",
        "C. 9",
        "D. 12"
      ],
      "answer": "A",
      "explanation": "Thực hiện phép cộng: 5 + 5 = 10."
    },
    {
      "id": "ARCH-M-G1-W12-TTK-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 1,
      "round": "Tuần 12 - Bài tập tham khảo",
      "topic": "Phép tính cộng trừ với đơn vị đo cm",
      "text": "[Toán tư duy Archimedes Tuần 12] Chủ đề: Phép tính cộng trừ với đơn vị đo cm. Một bài toán đố tư duy logic: Bạn An có một số que tính, nếu thêm 2 que thì bằng số que của Bình. Biết Bình có 17 que. Hỏi An có bao nhiêu que tính?",
      "options": [
        "A. 15 que",
        "B. 16 que",
        "C. 14 que",
        "D. 17 que"
      ],
      "answer": "A",
      "explanation": "Số que tính của An là: (17) - 2 = 15 que tính."
    },
    {
      "id": "ARCH-M-G1-W13-T-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 1,
      "round": "Tuần 13 - Tiết 1",
      "topic": "Các số từ 10 đến 20, chục và đơn vị",
      "text": "[Tiết 1] Tính giá trị: 6 + 2 = ?",
      "options": [
        "A. 8",
        "B. 10",
        "C. 7",
        "D. 9"
      ],
      "answer": "A",
      "explanation": "Ta có phép tính: 6 + 2 = 8."
    },
    {
      "id": "ARCH-M-G1-W13-T-2",
      "exam": "ARCHIMEDES_MATH",
      "grade": 1,
      "round": "Tuần 13 - Tiết 2",
      "topic": "Các số từ 10 đến 20, chục và đơn vị",
      "text": "[Tiết 2] Tính giá trị: 7 + 3 = ?",
      "options": [
        "A. 10",
        "B. 12",
        "C. 9",
        "D. 11"
      ],
      "answer": "A",
      "explanation": "Ta có phép tính: 7 + 3 = 10."
    },
    {
      "id": "ARCH-M-G1-W13-T-3",
      "exam": "ARCHIMEDES_MATH",
      "grade": 1,
      "round": "Tuần 13 - Tiết 3",
      "topic": "Các số từ 10 đến 20, chục và đơn vị",
      "text": "[Tiết 3] Tính giá trị: 8 + 4 = ?",
      "options": [
        "A. 12",
        "B. 14",
        "C. 11",
        "D. 13"
      ],
      "answer": "A",
      "explanation": "Ta có phép tính: 8 + 4 = 12."
    },
    {
      "id": "ARCH-M-G1-W13-PKT-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 1,
      "round": "Tuần 13 - Phiếu cuối tuần",
      "topic": "Các số từ 10 đến 20, chục và đơn vị",
      "text": "[Phiếu cuối tuần 13] Tính: 7 + 5 = ?",
      "options": [
        "A. 12",
        "B. 13",
        "C. 11",
        "D. 14"
      ],
      "answer": "A",
      "explanation": "Thực hiện phép cộng: 7 + 5 = 12."
    },
    {
      "id": "ARCH-M-G1-W13-TTK-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 1,
      "round": "Tuần 13 - Bài tập tham khảo",
      "topic": "Các số từ 10 đến 20, chục và đơn vị",
      "text": "[Toán tư duy Archimedes Tuần 13] Chủ đề: Các số từ 10 đến 20, chục và đơn vị. Một bài toán đố tư duy logic: Bạn An có một số que tính, nếu thêm 2 que thì bằng số que của Bình. Biết Bình có 18 que. Hỏi An có bao nhiêu que tính?",
      "options": [
        "A. 16 que",
        "B. 17 que",
        "C. 15 que",
        "D. 18 que"
      ],
      "answer": "A",
      "explanation": "Số que tính của An là: (18) - 2 = 16 que tính."
    },
    {
      "id": "ARCH-M-G1-W14-T-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 1,
      "round": "Tuần 14 - Tiết 1",
      "topic": "Phép cộng dạng 14 + 3, 10 + 5",
      "text": "[Tiết 1] Tính giá trị: 7 + 2 = ?",
      "options": [
        "A. 9",
        "B. 11",
        "C. 8",
        "D. 10"
      ],
      "answer": "A",
      "explanation": "Ta có phép tính: 7 + 2 = 9."
    },
    {
      "id": "ARCH-M-G1-W14-T-2",
      "exam": "ARCHIMEDES_MATH",
      "grade": 1,
      "round": "Tuần 14 - Tiết 2",
      "topic": "Phép cộng dạng 14 + 3, 10 + 5",
      "text": "[Tiết 2] Tính giá trị: 8 + 3 = ?",
      "options": [
        "A. 11",
        "B. 13",
        "C. 10",
        "D. 12"
      ],
      "answer": "A",
      "explanation": "Ta có phép tính: 8 + 3 = 11."
    },
    {
      "id": "ARCH-M-G1-W14-T-3",
      "exam": "ARCHIMEDES_MATH",
      "grade": 1,
      "round": "Tuần 14 - Tiết 3",
      "topic": "Phép cộng dạng 14 + 3, 10 + 5",
      "text": "[Tiết 3] Tính giá trị: 9 + 4 = ?",
      "options": [
        "A. 13",
        "B. 15",
        "C. 12",
        "D. 14"
      ],
      "answer": "A",
      "explanation": "Ta có phép tính: 9 + 4 = 13."
    },
    {
      "id": "ARCH-M-G1-W14-PKT-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 1,
      "round": "Tuần 14 - Phiếu cuối tuần",
      "topic": "Phép cộng dạng 14 + 3, 10 + 5",
      "text": "[Phiếu cuối tuần 14] Tính: 9 + 5 = ?",
      "options": [
        "A. 14",
        "B. 15",
        "C. 13",
        "D. 16"
      ],
      "answer": "A",
      "explanation": "Thực hiện phép cộng: 9 + 5 = 14."
    },
    {
      "id": "ARCH-M-G1-W14-TTK-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 1,
      "round": "Tuần 14 - Bài tập tham khảo",
      "topic": "Phép cộng dạng 14 + 3, 10 + 5",
      "text": "[Toán tư duy Archimedes Tuần 14] Chủ đề: Phép cộng dạng 14 + 3, 10 + 5. Một bài toán đố tư duy logic: Bạn An có một số que tính, nếu thêm 2 que thì bằng số que của Bình. Biết Bình có 19 que. Hỏi An có bao nhiêu que tính?",
      "options": [
        "A. 17 que",
        "B. 18 que",
        "C. 16 que",
        "D. 19 que"
      ],
      "answer": "A",
      "explanation": "Số que tính của An là: (19) - 2 = 17 que tính."
    },
    {
      "id": "ARCH-M-G1-W15-T-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 1,
      "round": "Tuần 15 - Tiết 1",
      "topic": "Phép trừ dạng 17 - 3, 15 - 5",
      "text": "[Tiết 1] Tính giá trị: 8 + 2 = ?",
      "options": [
        "A. 10",
        "B. 12",
        "C. 9",
        "D. 11"
      ],
      "answer": "A",
      "explanation": "Ta có phép tính: 8 + 2 = 10."
    },
    {
      "id": "ARCH-M-G1-W15-T-2",
      "exam": "ARCHIMEDES_MATH",
      "grade": 1,
      "round": "Tuần 15 - Tiết 2",
      "topic": "Phép trừ dạng 17 - 3, 15 - 5",
      "text": "[Tiết 2] Tính giá trị: 9 + 3 = ?",
      "options": [
        "A. 12",
        "B. 14",
        "C. 11",
        "D. 13"
      ],
      "answer": "A",
      "explanation": "Ta có phép tính: 9 + 3 = 12."
    },
    {
      "id": "ARCH-M-G1-W15-T-3",
      "exam": "ARCHIMEDES_MATH",
      "grade": 1,
      "round": "Tuần 15 - Tiết 3",
      "topic": "Phép trừ dạng 17 - 3, 15 - 5",
      "text": "[Tiết 3] Tính giá trị: 10 + 4 = ?",
      "options": [
        "A. 14",
        "B. 16",
        "C. 13",
        "D. 15"
      ],
      "answer": "A",
      "explanation": "Ta có phép tính: 10 + 4 = 14."
    },
    {
      "id": "ARCH-M-G1-W15-PKT-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 1,
      "round": "Tuần 15 - Phiếu cuối tuần",
      "topic": "Phép trừ dạng 17 - 3, 15 - 5",
      "text": "[Phiếu cuối tuần 15] Tính: 1 + 5 = ?",
      "options": [
        "A. 6",
        "B. 7",
        "C. 5",
        "D. 8"
      ],
      "answer": "A",
      "explanation": "Thực hiện phép cộng: 1 + 5 = 6."
    },
    {
      "id": "ARCH-M-G1-W15-TTK-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 1,
      "round": "Tuần 15 - Bài tập tham khảo",
      "topic": "Phép trừ dạng 17 - 3, 15 - 5",
      "text": "[Toán tư duy Archimedes Tuần 15] Chủ đề: Phép trừ dạng 17 - 3, 15 - 5. Một bài toán đố tư duy logic: Bạn An có một số que tính, nếu thêm 2 que thì bằng số que của Bình. Biết Bình có 20 que. Hỏi An có bao nhiêu que tính?",
      "options": [
        "A. 18 que",
        "B. 19 que",
        "C. 17 que",
        "D. 20 que"
      ],
      "answer": "A",
      "explanation": "Số que tính của An là: (20) - 2 = 18 que tính."
    },
    {
      "id": "ARCH-M-G1-W16-T-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 1,
      "round": "Tuần 16 - Tiết 1",
      "topic": "Phép trừ dạng 17 - 7, toán tuổi tác",
      "text": "[Tiết 1] Tính giá trị: 9 + 2 = ?",
      "options": [
        "A. 11",
        "B. 13",
        "C. 10",
        "D. 12"
      ],
      "answer": "A",
      "explanation": "Ta có phép tính: 9 + 2 = 11."
    },
    {
      "id": "ARCH-M-G1-W16-T-2",
      "exam": "ARCHIMEDES_MATH",
      "grade": 1,
      "round": "Tuần 16 - Tiết 2",
      "topic": "Phép trừ dạng 17 - 7, toán tuổi tác",
      "text": "[Tiết 2] Tính giá trị: 10 + 3 = ?",
      "options": [
        "A. 13",
        "B. 15",
        "C. 12",
        "D. 14"
      ],
      "answer": "A",
      "explanation": "Ta có phép tính: 10 + 3 = 13."
    },
    {
      "id": "ARCH-M-G1-W16-T-3",
      "exam": "ARCHIMEDES_MATH",
      "grade": 1,
      "round": "Tuần 16 - Tiết 3",
      "topic": "Phép trừ dạng 17 - 7, toán tuổi tác",
      "text": "[Tiết 3] Tính giá trị: 11 + 4 = ?",
      "options": [
        "A. 15",
        "B. 17",
        "C. 14",
        "D. 16"
      ],
      "answer": "A",
      "explanation": "Ta có phép tính: 11 + 4 = 15."
    },
    {
      "id": "ARCH-M-G1-W16-PKT-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 1,
      "round": "Tuần 16 - Phiếu cuối tuần",
      "topic": "Phép trừ dạng 17 - 7, toán tuổi tác",
      "text": "[Phiếu cuối tuần 16] Tính: 3 + 5 = ?",
      "options": [
        "A. 8",
        "B. 9",
        "C. 7",
        "D. 10"
      ],
      "answer": "A",
      "explanation": "Thực hiện phép cộng: 3 + 5 = 8."
    },
    {
      "id": "ARCH-M-G1-W16-TTK-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 1,
      "round": "Tuần 16 - Bài tập tham khảo",
      "topic": "Phép trừ dạng 17 - 7, toán tuổi tác",
      "text": "[Toán tư duy Archimedes Tuần 16] Chủ đề: Phép trừ dạng 17 - 7, toán tuổi tác. Một bài toán đố tư duy logic: Bạn An có một số que tính, nếu thêm 2 que thì bằng số que của Bình. Biết Bình có 21 que. Hỏi An có bao nhiêu que tính?",
      "options": [
        "A. 19 que",
        "B. 20 que",
        "C. 18 que",
        "D. 21 que"
      ],
      "answer": "A",
      "explanation": "Số que tính của An là: (21) - 2 = 19 que tính."
    },
    {
      "id": "ARCH-M-G1-W17-T-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 1,
      "round": "Tuần 17 - Tiết 1",
      "topic": "Bảng các số từ 1 đến 20, quy luật số",
      "text": "[Tiết 1] Tính giá trị: 10 + 2 = ?",
      "options": [
        "A. 12",
        "B. 14",
        "C. 11",
        "D. 13"
      ],
      "answer": "A",
      "explanation": "Ta có phép tính: 10 + 2 = 12."
    },
    {
      "id": "ARCH-M-G1-W17-T-2",
      "exam": "ARCHIMEDES_MATH",
      "grade": 1,
      "round": "Tuần 17 - Tiết 2",
      "topic": "Bảng các số từ 1 đến 20, quy luật số",
      "text": "[Tiết 2] Tính giá trị: 11 + 3 = ?",
      "options": [
        "A. 14",
        "B. 16",
        "C. 13",
        "D. 15"
      ],
      "answer": "A",
      "explanation": "Ta có phép tính: 11 + 3 = 14."
    },
    {
      "id": "ARCH-M-G1-W17-T-3",
      "exam": "ARCHIMEDES_MATH",
      "grade": 1,
      "round": "Tuần 17 - Tiết 3",
      "topic": "Bảng các số từ 1 đến 20, quy luật số",
      "text": "[Tiết 3] Tính giá trị: 2 + 4 = ?",
      "options": [
        "A. 6",
        "B. 8",
        "C. 5",
        "D. 7"
      ],
      "answer": "A",
      "explanation": "Ta có phép tính: 2 + 4 = 6."
    },
    {
      "id": "ARCH-M-G1-W17-PKT-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 1,
      "round": "Tuần 17 - Phiếu cuối tuần",
      "topic": "Bảng các số từ 1 đến 20, quy luật số",
      "text": "[Phiếu cuối tuần 17] Tính: 5 + 5 = ?",
      "options": [
        "A. 10",
        "B. 11",
        "C. 9",
        "D. 12"
      ],
      "answer": "A",
      "explanation": "Thực hiện phép cộng: 5 + 5 = 10."
    },
    {
      "id": "ARCH-M-G1-W17-TTK-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 1,
      "round": "Tuần 17 - Bài tập tham khảo",
      "topic": "Bảng các số từ 1 đến 20, quy luật số",
      "text": "[Toán tư duy Archimedes Tuần 17] Chủ đề: Bảng các số từ 1 đến 20, quy luật số. Một bài toán đố tư duy logic: Bạn An có một số que tính, nếu thêm 2 que thì bằng số que của Bình. Biết Bình có 22 que. Hỏi An có bao nhiêu que tính?",
      "options": [
        "A. 20 que",
        "B. 21 que",
        "C. 19 que",
        "D. 22 que"
      ],
      "answer": "A",
      "explanation": "Số que tính của An là: (22) - 2 = 20 que tính."
    },
    {
      "id": "ARCH-M-G1-W18-T-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 1,
      "round": "Tuần 18 - Tiết 1",
      "topic": "Ôn tập và kiểm tra cuối học kì 1",
      "text": "[Tiết 1] Tính giá trị: 11 + 2 = ?",
      "options": [
        "A. 13",
        "B. 15",
        "C. 12",
        "D. 14"
      ],
      "answer": "A",
      "explanation": "Ta có phép tính: 11 + 2 = 13."
    },
    {
      "id": "ARCH-M-G1-W18-T-2",
      "exam": "ARCHIMEDES_MATH",
      "grade": 1,
      "round": "Tuần 18 - Tiết 2",
      "topic": "Ôn tập và kiểm tra cuối học kì 1",
      "text": "[Tiết 2] Tính giá trị: 2 + 3 = ?",
      "options": [
        "A. 5",
        "B. 7",
        "C. 4",
        "D. 6"
      ],
      "answer": "A",
      "explanation": "Ta có phép tính: 2 + 3 = 5."
    },
    {
      "id": "ARCH-M-G1-W18-T-3",
      "exam": "ARCHIMEDES_MATH",
      "grade": 1,
      "round": "Tuần 18 - Tiết 3",
      "topic": "Ôn tập và kiểm tra cuối học kì 1",
      "text": "[Tiết 3] Tính giá trị: 3 + 4 = ?",
      "options": [
        "A. 7",
        "B. 9",
        "C. 6",
        "D. 8"
      ],
      "answer": "A",
      "explanation": "Ta có phép tính: 3 + 4 = 7."
    },
    {
      "id": "ARCH-M-G1-W18-PKT-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 1,
      "round": "Tuần 18 - Phiếu cuối tuần",
      "topic": "Ôn tập và kiểm tra cuối học kì 1",
      "text": "[Phiếu cuối tuần 18] Tính: 7 + 5 = ?",
      "options": [
        "A. 12",
        "B. 13",
        "C. 11",
        "D. 14"
      ],
      "answer": "A",
      "explanation": "Thực hiện phép cộng: 7 + 5 = 12."
    },
    {
      "id": "ARCH-M-G1-W18-TTK-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 1,
      "round": "Tuần 18 - Bài tập tham khảo",
      "topic": "Ôn tập và kiểm tra cuối học kì 1",
      "text": "[Toán tư duy Archimedes Tuần 18] Chủ đề: Ôn tập và kiểm tra cuối học kì 1. Một bài toán đố tư duy logic: Bạn An có một số que tính, nếu thêm 2 que thì bằng số que của Bình. Biết Bình có 23 que. Hỏi An có bao nhiêu que tính?",
      "options": [
        "A. 21 que",
        "B. 22 que",
        "C. 20 que",
        "D. 23 que"
      ],
      "answer": "A",
      "explanation": "Số que tính của An là: (23) - 2 = 21 que tính."
    },
    {
      "id": "ARCH-M-G1-W19-T-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 1,
      "round": "Tuần 19 - Tiết 1",
      "topic": "Các số tròn chục (10, 20, ..., 90)",
      "text": "[Tiết 1] Tính giá trị: 2 + 2 = ?",
      "options": [
        "A. 4",
        "B. 6",
        "C. 3",
        "D. 5"
      ],
      "answer": "A",
      "explanation": "Ta có phép tính: 2 + 2 = 4."
    },
    {
      "id": "ARCH-M-G1-W19-T-2",
      "exam": "ARCHIMEDES_MATH",
      "grade": 1,
      "round": "Tuần 19 - Tiết 2",
      "topic": "Các số tròn chục (10, 20, ..., 90)",
      "text": "[Tiết 2] Tính giá trị: 3 + 3 = ?",
      "options": [
        "A. 6",
        "B. 8",
        "C. 5",
        "D. 7"
      ],
      "answer": "A",
      "explanation": "Ta có phép tính: 3 + 3 = 6."
    },
    {
      "id": "ARCH-M-G1-W19-T-3",
      "exam": "ARCHIMEDES_MATH",
      "grade": 1,
      "round": "Tuần 19 - Tiết 3",
      "topic": "Các số tròn chục (10, 20, ..., 90)",
      "text": "[Tiết 3] Tính giá trị: 4 + 4 = ?",
      "options": [
        "A. 8",
        "B. 10",
        "C. 7",
        "D. 9"
      ],
      "answer": "A",
      "explanation": "Ta có phép tính: 4 + 4 = 8."
    },
    {
      "id": "ARCH-M-G1-W19-PKT-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 1,
      "round": "Tuần 19 - Phiếu cuối tuần",
      "topic": "Các số tròn chục (10, 20, ..., 90)",
      "text": "[Phiếu cuối tuần 19] Tính: 9 + 5 = ?",
      "options": [
        "A. 14",
        "B. 15",
        "C. 13",
        "D. 16"
      ],
      "answer": "A",
      "explanation": "Thực hiện phép cộng: 9 + 5 = 14."
    },
    {
      "id": "ARCH-M-G1-W19-TTK-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 1,
      "round": "Tuần 19 - Bài tập tham khảo",
      "topic": "Các số tròn chục (10, 20, ..., 90)",
      "text": "[Toán tư duy Archimedes Tuần 19] Chủ đề: Các số tròn chục (10, 20, ..., 90). Một bài toán đố tư duy logic: Bạn An có một số que tính, nếu thêm 2 que thì bằng số que của Bình. Biết Bình có 24 que. Hỏi An có bao nhiêu que tính?",
      "options": [
        "A. 22 que",
        "B. 23 que",
        "C. 21 que",
        "D. 24 que"
      ],
      "answer": "A",
      "explanation": "Số que tính của An là: (24) - 2 = 22 que tính."
    },
    {
      "id": "ARCH-M-G1-W20-T-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 1,
      "round": "Tuần 20 - Tiết 1",
      "topic": "Cộng các số tròn chục",
      "text": "[Tiết 1] Tính giá trị: 3 + 2 = ?",
      "options": [
        "A. 5",
        "B. 7",
        "C. 4",
        "D. 6"
      ],
      "answer": "A",
      "explanation": "Ta có phép tính: 3 + 2 = 5."
    },
    {
      "id": "ARCH-M-G1-W20-T-2",
      "exam": "ARCHIMEDES_MATH",
      "grade": 1,
      "round": "Tuần 20 - Tiết 2",
      "topic": "Cộng các số tròn chục",
      "text": "[Tiết 2] Tính giá trị: 4 + 3 = ?",
      "options": [
        "A. 7",
        "B. 9",
        "C. 6",
        "D. 8"
      ],
      "answer": "A",
      "explanation": "Ta có phép tính: 4 + 3 = 7."
    },
    {
      "id": "ARCH-M-G1-W20-T-3",
      "exam": "ARCHIMEDES_MATH",
      "grade": 1,
      "round": "Tuần 20 - Tiết 3",
      "topic": "Cộng các số tròn chục",
      "text": "[Tiết 3] Tính giá trị: 5 + 4 = ?",
      "options": [
        "A. 9",
        "B. 11",
        "C. 8",
        "D. 10"
      ],
      "answer": "A",
      "explanation": "Ta có phép tính: 5 + 4 = 9."
    },
    {
      "id": "ARCH-M-G1-W20-PKT-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 1,
      "round": "Tuần 20 - Phiếu cuối tuần",
      "topic": "Cộng các số tròn chục",
      "text": "[Phiếu cuối tuần 20] Tính: 1 + 5 = ?",
      "options": [
        "A. 6",
        "B. 7",
        "C. 5",
        "D. 8"
      ],
      "answer": "A",
      "explanation": "Thực hiện phép cộng: 1 + 5 = 6."
    },
    {
      "id": "ARCH-M-G1-W20-TTK-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 1,
      "round": "Tuần 20 - Bài tập tham khảo",
      "topic": "Cộng các số tròn chục",
      "text": "[Toán tư duy Archimedes Tuần 20] Chủ đề: Cộng các số tròn chục. Một bài toán đố tư duy logic: Bạn An có một số que tính, nếu thêm 2 que thì bằng số que của Bình. Biết Bình có 25 que. Hỏi An có bao nhiêu que tính?",
      "options": [
        "A. 23 que",
        "B. 24 que",
        "C. 22 que",
        "D. 25 que"
      ],
      "answer": "A",
      "explanation": "Số que tính của An là: (25) - 2 = 23 que tính."
    },
    {
      "id": "ARCH-M-G1-W21-T-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 1,
      "round": "Tuần 21 - Tiết 1",
      "topic": "Trừ các số tròn chục",
      "text": "[Tiết 1] Tính giá trị: 4 + 2 = ?",
      "options": [
        "A. 6",
        "B. 8",
        "C. 5",
        "D. 7"
      ],
      "answer": "A",
      "explanation": "Ta có phép tính: 4 + 2 = 6."
    },
    {
      "id": "ARCH-M-G1-W21-T-2",
      "exam": "ARCHIMEDES_MATH",
      "grade": 1,
      "round": "Tuần 21 - Tiết 2",
      "topic": "Trừ các số tròn chục",
      "text": "[Tiết 2] Tính giá trị: 5 + 3 = ?",
      "options": [
        "A. 8",
        "B. 10",
        "C. 7",
        "D. 9"
      ],
      "answer": "A",
      "explanation": "Ta có phép tính: 5 + 3 = 8."
    },
    {
      "id": "ARCH-M-G1-W21-T-3",
      "exam": "ARCHIMEDES_MATH",
      "grade": 1,
      "round": "Tuần 21 - Tiết 3",
      "topic": "Trừ các số tròn chục",
      "text": "[Tiết 3] Tính giá trị: 6 + 4 = ?",
      "options": [
        "A. 10",
        "B. 12",
        "C. 9",
        "D. 11"
      ],
      "answer": "A",
      "explanation": "Ta có phép tính: 6 + 4 = 10."
    },
    {
      "id": "ARCH-M-G1-W21-PKT-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 1,
      "round": "Tuần 21 - Phiếu cuối tuần",
      "topic": "Trừ các số tròn chục",
      "text": "[Phiếu cuối tuần 21] Tính: 3 + 5 = ?",
      "options": [
        "A. 8",
        "B. 9",
        "C. 7",
        "D. 10"
      ],
      "answer": "A",
      "explanation": "Thực hiện phép cộng: 3 + 5 = 8."
    },
    {
      "id": "ARCH-M-G1-W21-TTK-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 1,
      "round": "Tuần 21 - Bài tập tham khảo",
      "topic": "Trừ các số tròn chục",
      "text": "[Toán tư duy Archimedes Tuần 21] Chủ đề: Trừ các số tròn chục. Một bài toán đố tư duy logic: Bạn An có một số que tính, nếu thêm 2 que thì bằng số que của Bình. Biết Bình có 26 que. Hỏi An có bao nhiêu que tính?",
      "options": [
        "A. 24 que",
        "B. 25 que",
        "C. 23 que",
        "D. 26 que"
      ],
      "answer": "A",
      "explanation": "Số que tính của An là: (26) - 2 = 24 que tính."
    },
    {
      "id": "ARCH-M-G1-W22-T-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 1,
      "round": "Tuần 22 - Tiết 1",
      "topic": "Điểm ở trong, điểm ở ngoài một hình",
      "text": "[Tiết 1] Tính giá trị: 5 + 2 = ?",
      "options": [
        "A. 7",
        "B. 9",
        "C. 6",
        "D. 8"
      ],
      "answer": "A",
      "explanation": "Ta có phép tính: 5 + 2 = 7."
    },
    {
      "id": "ARCH-M-G1-W22-T-2",
      "exam": "ARCHIMEDES_MATH",
      "grade": 1,
      "round": "Tuần 22 - Tiết 2",
      "topic": "Điểm ở trong, điểm ở ngoài một hình",
      "text": "[Tiết 2] Tính giá trị: 6 + 3 = ?",
      "options": [
        "A. 9",
        "B. 11",
        "C. 8",
        "D. 10"
      ],
      "answer": "A",
      "explanation": "Ta có phép tính: 6 + 3 = 9."
    },
    {
      "id": "ARCH-M-G1-W22-T-3",
      "exam": "ARCHIMEDES_MATH",
      "grade": 1,
      "round": "Tuần 22 - Tiết 3",
      "topic": "Điểm ở trong, điểm ở ngoài một hình",
      "text": "[Tiết 3] Tính giá trị: 7 + 4 = ?",
      "options": [
        "A. 11",
        "B. 13",
        "C. 10",
        "D. 12"
      ],
      "answer": "A",
      "explanation": "Ta có phép tính: 7 + 4 = 11."
    },
    {
      "id": "ARCH-M-G1-W22-PKT-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 1,
      "round": "Tuần 22 - Phiếu cuối tuần",
      "topic": "Điểm ở trong, điểm ở ngoài một hình",
      "text": "[Phiếu cuối tuần 22] Tính: 5 + 5 = ?",
      "options": [
        "A. 10",
        "B. 11",
        "C. 9",
        "D. 12"
      ],
      "answer": "A",
      "explanation": "Thực hiện phép cộng: 5 + 5 = 10."
    },
    {
      "id": "ARCH-M-G1-W22-TTK-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 1,
      "round": "Tuần 22 - Bài tập tham khảo",
      "topic": "Điểm ở trong, điểm ở ngoài một hình",
      "text": "[Toán tư duy Archimedes Tuần 22] Chủ đề: Điểm ở trong, điểm ở ngoài một hình. Một bài toán đố tư duy logic: Bạn An có một số que tính, nếu thêm 2 que thì bằng số que của Bình. Biết Bình có 27 que. Hỏi An có bao nhiêu que tính?",
      "options": [
        "A. 25 que",
        "B. 26 que",
        "C. 24 que",
        "D. 27 que"
      ],
      "answer": "A",
      "explanation": "Số que tính của An là: (27) - 2 = 25 que tính."
    },
    {
      "id": "ARCH-M-G1-W23-T-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 1,
      "round": "Tuần 23 - Tiết 1",
      "topic": "Các số có hai chữ số từ 20 đến 50",
      "text": "[Tiết 1] Tính giá trị: 6 + 2 = ?",
      "options": [
        "A. 8",
        "B. 10",
        "C. 7",
        "D. 9"
      ],
      "answer": "A",
      "explanation": "Ta có phép tính: 6 + 2 = 8."
    },
    {
      "id": "ARCH-M-G1-W23-T-2",
      "exam": "ARCHIMEDES_MATH",
      "grade": 1,
      "round": "Tuần 23 - Tiết 2",
      "topic": "Các số có hai chữ số từ 20 đến 50",
      "text": "[Tiết 2] Tính giá trị: 7 + 3 = ?",
      "options": [
        "A. 10",
        "B. 12",
        "C. 9",
        "D. 11"
      ],
      "answer": "A",
      "explanation": "Ta có phép tính: 7 + 3 = 10."
    },
    {
      "id": "ARCH-M-G1-W23-T-3",
      "exam": "ARCHIMEDES_MATH",
      "grade": 1,
      "round": "Tuần 23 - Tiết 3",
      "topic": "Các số có hai chữ số từ 20 đến 50",
      "text": "[Tiết 3] Tính giá trị: 8 + 4 = ?",
      "options": [
        "A. 12",
        "B. 14",
        "C. 11",
        "D. 13"
      ],
      "answer": "A",
      "explanation": "Ta có phép tính: 8 + 4 = 12."
    },
    {
      "id": "ARCH-M-G1-W23-PKT-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 1,
      "round": "Tuần 23 - Phiếu cuối tuần",
      "topic": "Các số có hai chữ số từ 20 đến 50",
      "text": "[Phiếu cuối tuần 23] Tính: 7 + 5 = ?",
      "options": [
        "A. 12",
        "B. 13",
        "C. 11",
        "D. 14"
      ],
      "answer": "A",
      "explanation": "Thực hiện phép cộng: 7 + 5 = 12."
    },
    {
      "id": "ARCH-M-G1-W23-TTK-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 1,
      "round": "Tuần 23 - Bài tập tham khảo",
      "topic": "Các số có hai chữ số từ 20 đến 50",
      "text": "[Toán tư duy Archimedes Tuần 23] Chủ đề: Các số có hai chữ số từ 20 đến 50. Một bài toán đố tư duy logic: Bạn An có một số que tính, nếu thêm 2 que thì bằng số que của Bình. Biết Bình có 28 que. Hỏi An có bao nhiêu que tính?",
      "options": [
        "A. 26 que",
        "B. 27 que",
        "C. 25 que",
        "D. 28 que"
      ],
      "answer": "A",
      "explanation": "Số que tính của An là: (28) - 2 = 26 que tính."
    },
    {
      "id": "ARCH-M-G1-W24-T-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 1,
      "round": "Tuần 24 - Tiết 1",
      "topic": "So sánh các số có hai chữ số",
      "text": "[Tiết 1] Tính giá trị: 7 + 2 = ?",
      "options": [
        "A. 9",
        "B. 11",
        "C. 8",
        "D. 10"
      ],
      "answer": "A",
      "explanation": "Ta có phép tính: 7 + 2 = 9."
    },
    {
      "id": "ARCH-M-G1-W24-T-2",
      "exam": "ARCHIMEDES_MATH",
      "grade": 1,
      "round": "Tuần 24 - Tiết 2",
      "topic": "So sánh các số có hai chữ số",
      "text": "[Tiết 2] Tính giá trị: 8 + 3 = ?",
      "options": [
        "A. 11",
        "B. 13",
        "C. 10",
        "D. 12"
      ],
      "answer": "A",
      "explanation": "Ta có phép tính: 8 + 3 = 11."
    },
    {
      "id": "ARCH-M-G1-W24-T-3",
      "exam": "ARCHIMEDES_MATH",
      "grade": 1,
      "round": "Tuần 24 - Tiết 3",
      "topic": "So sánh các số có hai chữ số",
      "text": "[Tiết 3] Tính giá trị: 9 + 4 = ?",
      "options": [
        "A. 13",
        "B. 15",
        "C. 12",
        "D. 14"
      ],
      "answer": "A",
      "explanation": "Ta có phép tính: 9 + 4 = 13."
    },
    {
      "id": "ARCH-M-G1-W24-PKT-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 1,
      "round": "Tuần 24 - Phiếu cuối tuần",
      "topic": "So sánh các số có hai chữ số",
      "text": "[Phiếu cuối tuần 24] Tính: 9 + 5 = ?",
      "options": [
        "A. 14",
        "B. 15",
        "C. 13",
        "D. 16"
      ],
      "answer": "A",
      "explanation": "Thực hiện phép cộng: 9 + 5 = 14."
    },
    {
      "id": "ARCH-M-G1-W24-TTK-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 1,
      "round": "Tuần 24 - Bài tập tham khảo",
      "topic": "So sánh các số có hai chữ số",
      "text": "[Toán tư duy Archimedes Tuần 24] Chủ đề: So sánh các số có hai chữ số. Một bài toán đố tư duy logic: Bạn An có một số que tính, nếu thêm 2 que thì bằng số que của Bình. Biết Bình có 29 que. Hỏi An có bao nhiêu que tính?",
      "options": [
        "A. 27 que",
        "B. 28 que",
        "C. 26 que",
        "D. 29 que"
      ],
      "answer": "A",
      "explanation": "Số que tính của An là: (29) - 2 = 27 que tính."
    },
    {
      "id": "ARCH-M-G1-W25-T-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 1,
      "round": "Tuần 25 - Tiết 1",
      "topic": "Bảng các số từ 1 đến 100",
      "text": "[Tiết 1] Tính giá trị: 8 + 2 = ?",
      "options": [
        "A. 10",
        "B. 12",
        "C. 9",
        "D. 11"
      ],
      "answer": "A",
      "explanation": "Ta có phép tính: 8 + 2 = 10."
    },
    {
      "id": "ARCH-M-G1-W25-T-2",
      "exam": "ARCHIMEDES_MATH",
      "grade": 1,
      "round": "Tuần 25 - Tiết 2",
      "topic": "Bảng các số từ 1 đến 100",
      "text": "[Tiết 2] Tính giá trị: 9 + 3 = ?",
      "options": [
        "A. 12",
        "B. 14",
        "C. 11",
        "D. 13"
      ],
      "answer": "A",
      "explanation": "Ta có phép tính: 9 + 3 = 12."
    },
    {
      "id": "ARCH-M-G1-W25-T-3",
      "exam": "ARCHIMEDES_MATH",
      "grade": 1,
      "round": "Tuần 25 - Tiết 3",
      "topic": "Bảng các số từ 1 đến 100",
      "text": "[Tiết 3] Tính giá trị: 10 + 4 = ?",
      "options": [
        "A. 14",
        "B. 16",
        "C. 13",
        "D. 15"
      ],
      "answer": "A",
      "explanation": "Ta có phép tính: 10 + 4 = 14."
    },
    {
      "id": "ARCH-M-G1-W25-PKT-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 1,
      "round": "Tuần 25 - Phiếu cuối tuần",
      "topic": "Bảng các số từ 1 đến 100",
      "text": "[Phiếu cuối tuần 25] Tính: 1 + 5 = ?",
      "options": [
        "A. 6",
        "B. 7",
        "C. 5",
        "D. 8"
      ],
      "answer": "A",
      "explanation": "Thực hiện phép cộng: 1 + 5 = 6."
    },
    {
      "id": "ARCH-M-G1-W25-TTK-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 1,
      "round": "Tuần 25 - Bài tập tham khảo",
      "topic": "Bảng các số từ 1 đến 100",
      "text": "[Toán tư duy Archimedes Tuần 25] Chủ đề: Bảng các số từ 1 đến 100. Một bài toán đố tư duy logic: Bạn An có một số que tính, nếu thêm 2 que thì bằng số que của Bình. Biết Bình có 30 que. Hỏi An có bao nhiêu que tính?",
      "options": [
        "A. 28 que",
        "B. 29 que",
        "C. 27 que",
        "D. 30 que"
      ],
      "answer": "A",
      "explanation": "Số que tính của An là: (30) - 2 = 28 que tính."
    },
    {
      "id": "ARCH-M-G1-W26-T-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 1,
      "round": "Tuần 26 - Tiết 1",
      "topic": "Ôn tập giữa học kì 2",
      "text": "[Tiết 1] Tính giá trị: 9 + 2 = ?",
      "options": [
        "A. 11",
        "B. 13",
        "C. 10",
        "D. 12"
      ],
      "answer": "A",
      "explanation": "Ta có phép tính: 9 + 2 = 11."
    },
    {
      "id": "ARCH-M-G1-W26-T-2",
      "exam": "ARCHIMEDES_MATH",
      "grade": 1,
      "round": "Tuần 26 - Tiết 2",
      "topic": "Ôn tập giữa học kì 2",
      "text": "[Tiết 2] Tính giá trị: 10 + 3 = ?",
      "options": [
        "A. 13",
        "B. 15",
        "C. 12",
        "D. 14"
      ],
      "answer": "A",
      "explanation": "Ta có phép tính: 10 + 3 = 13."
    },
    {
      "id": "ARCH-M-G1-W26-T-3",
      "exam": "ARCHIMEDES_MATH",
      "grade": 1,
      "round": "Tuần 26 - Tiết 3",
      "topic": "Ôn tập giữa học kì 2",
      "text": "[Tiết 3] Tính giá trị: 11 + 4 = ?",
      "options": [
        "A. 15",
        "B. 17",
        "C. 14",
        "D. 16"
      ],
      "answer": "A",
      "explanation": "Ta có phép tính: 11 + 4 = 15."
    },
    {
      "id": "ARCH-M-G1-W26-PKT-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 1,
      "round": "Tuần 26 - Phiếu cuối tuần",
      "topic": "Ôn tập giữa học kì 2",
      "text": "[Phiếu cuối tuần 26] Tính: 3 + 5 = ?",
      "options": [
        "A. 8",
        "B. 9",
        "C. 7",
        "D. 10"
      ],
      "answer": "A",
      "explanation": "Thực hiện phép cộng: 3 + 5 = 8."
    },
    {
      "id": "ARCH-M-G1-W26-TTK-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 1,
      "round": "Tuần 26 - Bài tập tham khảo",
      "topic": "Ôn tập giữa học kì 2",
      "text": "[Toán tư duy Archimedes Tuần 26] Chủ đề: Ôn tập giữa học kì 2. Một bài toán đố tư duy logic: Bạn An có một số que tính, nếu thêm 2 que thì bằng số que của Bình. Biết Bình có 31 que. Hỏi An có bao nhiêu que tính?",
      "options": [
        "A. 29 que",
        "B. 30 que",
        "C. 28 que",
        "D. 31 que"
      ],
      "answer": "A",
      "explanation": "Số que tính của An là: (31) - 2 = 29 que tính."
    },
    {
      "id": "ARCH-M-G1-W27-T-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 1,
      "round": "Tuần 27 - Tiết 1",
      "topic": "Giải toán có lời văn hai bước tính",
      "text": "[Tiết 1] Tính giá trị: 10 + 2 = ?",
      "options": [
        "A. 12",
        "B. 14",
        "C. 11",
        "D. 13"
      ],
      "answer": "A",
      "explanation": "Ta có phép tính: 10 + 2 = 12."
    },
    {
      "id": "ARCH-M-G1-W27-T-2",
      "exam": "ARCHIMEDES_MATH",
      "grade": 1,
      "round": "Tuần 27 - Tiết 2",
      "topic": "Giải toán có lời văn hai bước tính",
      "text": "[Tiết 2] Tính giá trị: 11 + 3 = ?",
      "options": [
        "A. 14",
        "B. 16",
        "C. 13",
        "D. 15"
      ],
      "answer": "A",
      "explanation": "Ta có phép tính: 11 + 3 = 14."
    },
    {
      "id": "ARCH-M-G1-W27-T-3",
      "exam": "ARCHIMEDES_MATH",
      "grade": 1,
      "round": "Tuần 27 - Tiết 3",
      "topic": "Giải toán có lời văn hai bước tính",
      "text": "[Tiết 3] Tính giá trị: 2 + 4 = ?",
      "options": [
        "A. 6",
        "B. 8",
        "C. 5",
        "D. 7"
      ],
      "answer": "A",
      "explanation": "Ta có phép tính: 2 + 4 = 6."
    },
    {
      "id": "ARCH-M-G1-W27-PKT-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 1,
      "round": "Tuần 27 - Phiếu cuối tuần",
      "topic": "Giải toán có lời văn hai bước tính",
      "text": "[Phiếu cuối tuần 27] Tính: 5 + 5 = ?",
      "options": [
        "A. 10",
        "B. 11",
        "C. 9",
        "D. 12"
      ],
      "answer": "A",
      "explanation": "Thực hiện phép cộng: 5 + 5 = 10."
    },
    {
      "id": "ARCH-M-G1-W27-TTK-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 1,
      "round": "Tuần 27 - Bài tập tham khảo",
      "topic": "Giải toán có lời văn hai bước tính",
      "text": "[Toán tư duy Archimedes Tuần 27] Chủ đề: Giải toán có lời văn hai bước tính. Một bài toán đố tư duy logic: Bạn An có một số que tính, nếu thêm 2 que thì bằng số que của Bình. Biết Bình có 32 que. Hỏi An có bao nhiêu que tính?",
      "options": [
        "A. 30 que",
        "B. 31 que",
        "C. 29 que",
        "D. 32 que"
      ],
      "answer": "A",
      "explanation": "Số que tính của An là: (32) - 2 = 30 que tính."
    },
    {
      "id": "ARCH-M-G1-W28-T-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 1,
      "round": "Tuần 28 - Tiết 1",
      "topic": "Đề-xi-mét (dm), quan hệ dm và cm",
      "text": "[Tiết 1] Tính giá trị: 11 + 2 = ?",
      "options": [
        "A. 13",
        "B. 15",
        "C. 12",
        "D. 14"
      ],
      "answer": "A",
      "explanation": "Ta có phép tính: 11 + 2 = 13."
    },
    {
      "id": "ARCH-M-G1-W28-T-2",
      "exam": "ARCHIMEDES_MATH",
      "grade": 1,
      "round": "Tuần 28 - Tiết 2",
      "topic": "Đề-xi-mét (dm), quan hệ dm và cm",
      "text": "[Tiết 2] Tính giá trị: 2 + 3 = ?",
      "options": [
        "A. 5",
        "B. 7",
        "C. 4",
        "D. 6"
      ],
      "answer": "A",
      "explanation": "Ta có phép tính: 2 + 3 = 5."
    },
    {
      "id": "ARCH-M-G1-W28-T-3",
      "exam": "ARCHIMEDES_MATH",
      "grade": 1,
      "round": "Tuần 28 - Tiết 3",
      "topic": "Đề-xi-mét (dm), quan hệ dm và cm",
      "text": "[Tiết 3] Tính giá trị: 3 + 4 = ?",
      "options": [
        "A. 7",
        "B. 9",
        "C. 6",
        "D. 8"
      ],
      "answer": "A",
      "explanation": "Ta có phép tính: 3 + 4 = 7."
    },
    {
      "id": "ARCH-M-G1-W28-PKT-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 1,
      "round": "Tuần 28 - Phiếu cuối tuần",
      "topic": "Đề-xi-mét (dm), quan hệ dm và cm",
      "text": "[Phiếu cuối tuần 28] Tính: 7 + 5 = ?",
      "options": [
        "A. 12",
        "B. 13",
        "C. 11",
        "D. 14"
      ],
      "answer": "A",
      "explanation": "Thực hiện phép cộng: 7 + 5 = 12."
    },
    {
      "id": "ARCH-M-G1-W28-TTK-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 1,
      "round": "Tuần 28 - Bài tập tham khảo",
      "topic": "Đề-xi-mét (dm), quan hệ dm và cm",
      "text": "[Toán tư duy Archimedes Tuần 28] Chủ đề: Đề-xi-mét (dm), quan hệ dm và cm. Một bài toán đố tư duy logic: Bạn An có một số que tính, nếu thêm 2 que thì bằng số que của Bình. Biết Bình có 33 que. Hỏi An có bao nhiêu que tính?",
      "options": [
        "A. 31 que",
        "B. 32 que",
        "C. 30 que",
        "D. 33 que"
      ],
      "answer": "A",
      "explanation": "Số que tính của An là: (33) - 2 = 31 que tính."
    },
    {
      "id": "ARCH-M-G1-W29-T-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 1,
      "round": "Tuần 29 - Tiết 1",
      "topic": "Phép cộng không nhớ dạng 34 + 23",
      "text": "[Tiết 1] Tính giá trị: 2 + 2 = ?",
      "options": [
        "A. 4",
        "B. 6",
        "C. 3",
        "D. 5"
      ],
      "answer": "A",
      "explanation": "Ta có phép tính: 2 + 2 = 4."
    },
    {
      "id": "ARCH-M-G1-W29-T-2",
      "exam": "ARCHIMEDES_MATH",
      "grade": 1,
      "round": "Tuần 29 - Tiết 2",
      "topic": "Phép cộng không nhớ dạng 34 + 23",
      "text": "[Tiết 2] Tính giá trị: 3 + 3 = ?",
      "options": [
        "A. 6",
        "B. 8",
        "C. 5",
        "D. 7"
      ],
      "answer": "A",
      "explanation": "Ta có phép tính: 3 + 3 = 6."
    },
    {
      "id": "ARCH-M-G1-W29-T-3",
      "exam": "ARCHIMEDES_MATH",
      "grade": 1,
      "round": "Tuần 29 - Tiết 3",
      "topic": "Phép cộng không nhớ dạng 34 + 23",
      "text": "[Tiết 3] Tính giá trị: 4 + 4 = ?",
      "options": [
        "A. 8",
        "B. 10",
        "C. 7",
        "D. 9"
      ],
      "answer": "A",
      "explanation": "Ta có phép tính: 4 + 4 = 8."
    },
    {
      "id": "ARCH-M-G1-W29-PKT-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 1,
      "round": "Tuần 29 - Phiếu cuối tuần",
      "topic": "Phép cộng không nhớ dạng 34 + 23",
      "text": "[Phiếu cuối tuần 29] Tính: 9 + 5 = ?",
      "options": [
        "A. 14",
        "B. 15",
        "C. 13",
        "D. 16"
      ],
      "answer": "A",
      "explanation": "Thực hiện phép cộng: 9 + 5 = 14."
    },
    {
      "id": "ARCH-M-G1-W29-TTK-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 1,
      "round": "Tuần 29 - Bài tập tham khảo",
      "topic": "Phép cộng không nhớ dạng 34 + 23",
      "text": "[Toán tư duy Archimedes Tuần 29] Chủ đề: Phép cộng không nhớ dạng 34 + 23. Một bài toán đố tư duy logic: Bạn An có một số que tính, nếu thêm 2 que thì bằng số que của Bình. Biết Bình có 34 que. Hỏi An có bao nhiêu que tính?",
      "options": [
        "A. 32 que",
        "B. 33 que",
        "C. 31 que",
        "D. 34 que"
      ],
      "answer": "A",
      "explanation": "Số que tính của An là: (34) - 2 = 32 que tính."
    },
    {
      "id": "ARCH-M-G1-W30-T-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 1,
      "round": "Tuần 30 - Tiết 1",
      "topic": "Phép trừ không nhớ dạng 57 - 23",
      "text": "[Tiết 1] Tính giá trị: 3 + 2 = ?",
      "options": [
        "A. 5",
        "B. 7",
        "C. 4",
        "D. 6"
      ],
      "answer": "A",
      "explanation": "Ta có phép tính: 3 + 2 = 5."
    },
    {
      "id": "ARCH-M-G1-W30-T-2",
      "exam": "ARCHIMEDES_MATH",
      "grade": 1,
      "round": "Tuần 30 - Tiết 2",
      "topic": "Phép trừ không nhớ dạng 57 - 23",
      "text": "[Tiết 2] Tính giá trị: 4 + 3 = ?",
      "options": [
        "A. 7",
        "B. 9",
        "C. 6",
        "D. 8"
      ],
      "answer": "A",
      "explanation": "Ta có phép tính: 4 + 3 = 7."
    },
    {
      "id": "ARCH-M-G1-W30-T-3",
      "exam": "ARCHIMEDES_MATH",
      "grade": 1,
      "round": "Tuần 30 - Tiết 3",
      "topic": "Phép trừ không nhớ dạng 57 - 23",
      "text": "[Tiết 3] Tính giá trị: 5 + 4 = ?",
      "options": [
        "A. 9",
        "B. 11",
        "C. 8",
        "D. 10"
      ],
      "answer": "A",
      "explanation": "Ta có phép tính: 5 + 4 = 9."
    },
    {
      "id": "ARCH-M-G1-W30-PKT-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 1,
      "round": "Tuần 30 - Phiếu cuối tuần",
      "topic": "Phép trừ không nhớ dạng 57 - 23",
      "text": "[Phiếu cuối tuần 30] Tính: 1 + 5 = ?",
      "options": [
        "A. 6",
        "B. 7",
        "C. 5",
        "D. 8"
      ],
      "answer": "A",
      "explanation": "Thực hiện phép cộng: 1 + 5 = 6."
    },
    {
      "id": "ARCH-M-G1-W30-TTK-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 1,
      "round": "Tuần 30 - Bài tập tham khảo",
      "topic": "Phép trừ không nhớ dạng 57 - 23",
      "text": "[Toán tư duy Archimedes Tuần 30] Chủ đề: Phép trừ không nhớ dạng 57 - 23. Một bài toán đố tư duy logic: Bạn An có một số que tính, nếu thêm 2 que thì bằng số que của Bình. Biết Bình có 35 que. Hỏi An có bao nhiêu que tính?",
      "options": [
        "A. 33 que",
        "B. 34 que",
        "C. 32 que",
        "D. 35 que"
      ],
      "answer": "A",
      "explanation": "Số que tính của An là: (35) - 2 = 33 que tính."
    },
    {
      "id": "ARCH-M-G1-W31-T-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 1,
      "round": "Tuần 31 - Tiết 1",
      "topic": "Đồng hồ và thời gian (xem giờ đúng)",
      "text": "[Tiết 1] Tính giá trị: 4 + 2 = ?",
      "options": [
        "A. 6",
        "B. 8",
        "C. 5",
        "D. 7"
      ],
      "answer": "A",
      "explanation": "Ta có phép tính: 4 + 2 = 6."
    },
    {
      "id": "ARCH-M-G1-W31-T-2",
      "exam": "ARCHIMEDES_MATH",
      "grade": 1,
      "round": "Tuần 31 - Tiết 2",
      "topic": "Đồng hồ và thời gian (xem giờ đúng)",
      "text": "[Tiết 2] Tính giá trị: 5 + 3 = ?",
      "options": [
        "A. 8",
        "B. 10",
        "C. 7",
        "D. 9"
      ],
      "answer": "A",
      "explanation": "Ta có phép tính: 5 + 3 = 8."
    },
    {
      "id": "ARCH-M-G1-W31-T-3",
      "exam": "ARCHIMEDES_MATH",
      "grade": 1,
      "round": "Tuần 31 - Tiết 3",
      "topic": "Đồng hồ và thời gian (xem giờ đúng)",
      "text": "[Tiết 3] Tính giá trị: 6 + 4 = ?",
      "options": [
        "A. 10",
        "B. 12",
        "C. 9",
        "D. 11"
      ],
      "answer": "A",
      "explanation": "Ta có phép tính: 6 + 4 = 10."
    },
    {
      "id": "ARCH-M-G1-W31-PKT-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 1,
      "round": "Tuần 31 - Phiếu cuối tuần",
      "topic": "Đồng hồ và thời gian (xem giờ đúng)",
      "text": "[Phiếu cuối tuần 31] Tính: 3 + 5 = ?",
      "options": [
        "A. 8",
        "B. 9",
        "C. 7",
        "D. 10"
      ],
      "answer": "A",
      "explanation": "Thực hiện phép cộng: 3 + 5 = 8."
    },
    {
      "id": "ARCH-M-G1-W31-TTK-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 1,
      "round": "Tuần 31 - Bài tập tham khảo",
      "topic": "Đồng hồ và thời gian (xem giờ đúng)",
      "text": "[Toán tư duy Archimedes Tuần 31] Chủ đề: Đồng hồ và thời gian (xem giờ đúng). Một bài toán đố tư duy logic: Bạn An có một số que tính, nếu thêm 2 que thì bằng số que của Bình. Biết Bình có 36 que. Hỏi An có bao nhiêu que tính?",
      "options": [
        "A. 34 que",
        "B. 35 que",
        "C. 33 que",
        "D. 36 que"
      ],
      "answer": "A",
      "explanation": "Số que tính của An là: (36) - 2 = 34 que tính."
    },
    {
      "id": "ARCH-M-G1-W32-T-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 1,
      "round": "Tuần 32 - Tiết 1",
      "topic": "Ngày trong tuần, xem tờ lịch",
      "text": "[Tiết 1] Tính giá trị: 5 + 2 = ?",
      "options": [
        "A. 7",
        "B. 9",
        "C. 6",
        "D. 8"
      ],
      "answer": "A",
      "explanation": "Ta có phép tính: 5 + 2 = 7."
    },
    {
      "id": "ARCH-M-G1-W32-T-2",
      "exam": "ARCHIMEDES_MATH",
      "grade": 1,
      "round": "Tuần 32 - Tiết 2",
      "topic": "Ngày trong tuần, xem tờ lịch",
      "text": "[Tiết 2] Tính giá trị: 6 + 3 = ?",
      "options": [
        "A. 9",
        "B. 11",
        "C. 8",
        "D. 10"
      ],
      "answer": "A",
      "explanation": "Ta có phép tính: 6 + 3 = 9."
    },
    {
      "id": "ARCH-M-G1-W32-T-3",
      "exam": "ARCHIMEDES_MATH",
      "grade": 1,
      "round": "Tuần 32 - Tiết 3",
      "topic": "Ngày trong tuần, xem tờ lịch",
      "text": "[Tiết 3] Tính giá trị: 7 + 4 = ?",
      "options": [
        "A. 11",
        "B. 13",
        "C. 10",
        "D. 12"
      ],
      "answer": "A",
      "explanation": "Ta có phép tính: 7 + 4 = 11."
    },
    {
      "id": "ARCH-M-G1-W32-PKT-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 1,
      "round": "Tuần 32 - Phiếu cuối tuần",
      "topic": "Ngày trong tuần, xem tờ lịch",
      "text": "[Phiếu cuối tuần 32] Tính: 5 + 5 = ?",
      "options": [
        "A. 10",
        "B. 11",
        "C. 9",
        "D. 12"
      ],
      "answer": "A",
      "explanation": "Thực hiện phép cộng: 5 + 5 = 10."
    },
    {
      "id": "ARCH-M-G1-W32-TTK-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 1,
      "round": "Tuần 32 - Bài tập tham khảo",
      "topic": "Ngày trong tuần, xem tờ lịch",
      "text": "[Toán tư duy Archimedes Tuần 32] Chủ đề: Ngày trong tuần, xem tờ lịch. Một bài toán đố tư duy logic: Bạn An có một số que tính, nếu thêm 2 que thì bằng số que của Bình. Biết Bình có 37 que. Hỏi An có bao nhiêu que tính?",
      "options": [
        "A. 35 que",
        "B. 36 que",
        "C. 34 que",
        "D. 37 que"
      ],
      "answer": "A",
      "explanation": "Số que tính của An là: (37) - 2 = 35 que tính."
    },
    {
      "id": "ARCH-M-G1-W33-T-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 1,
      "round": "Tuần 33 - Tiết 1",
      "topic": "Toán tư duy Olympic Archimedes (mê cung số)",
      "text": "[Tiết 1] Tính giá trị: 6 + 2 = ?",
      "options": [
        "A. 8",
        "B. 10",
        "C. 7",
        "D. 9"
      ],
      "answer": "A",
      "explanation": "Ta có phép tính: 6 + 2 = 8."
    },
    {
      "id": "ARCH-M-G1-W33-T-2",
      "exam": "ARCHIMEDES_MATH",
      "grade": 1,
      "round": "Tuần 33 - Tiết 2",
      "topic": "Toán tư duy Olympic Archimedes (mê cung số)",
      "text": "[Tiết 2] Tính giá trị: 7 + 3 = ?",
      "options": [
        "A. 10",
        "B. 12",
        "C. 9",
        "D. 11"
      ],
      "answer": "A",
      "explanation": "Ta có phép tính: 7 + 3 = 10."
    },
    {
      "id": "ARCH-M-G1-W33-T-3",
      "exam": "ARCHIMEDES_MATH",
      "grade": 1,
      "round": "Tuần 33 - Tiết 3",
      "topic": "Toán tư duy Olympic Archimedes (mê cung số)",
      "text": "[Tiết 3] Tính giá trị: 8 + 4 = ?",
      "options": [
        "A. 12",
        "B. 14",
        "C. 11",
        "D. 13"
      ],
      "answer": "A",
      "explanation": "Ta có phép tính: 8 + 4 = 12."
    },
    {
      "id": "ARCH-M-G1-W33-PKT-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 1,
      "round": "Tuần 33 - Phiếu cuối tuần",
      "topic": "Toán tư duy Olympic Archimedes (mê cung số)",
      "text": "[Phiếu cuối tuần 33] Tính: 7 + 5 = ?",
      "options": [
        "A. 12",
        "B. 13",
        "C. 11",
        "D. 14"
      ],
      "answer": "A",
      "explanation": "Thực hiện phép cộng: 7 + 5 = 12."
    },
    {
      "id": "ARCH-M-G1-W33-TTK-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 1,
      "round": "Tuần 33 - Bài tập tham khảo",
      "topic": "Toán tư duy Olympic Archimedes (mê cung số)",
      "text": "[Toán tư duy Archimedes Tuần 33] Chủ đề: Toán tư duy Olympic Archimedes (mê cung số). Một bài toán đố tư duy logic: Bạn An có một số que tính, nếu thêm 2 que thì bằng số que của Bình. Biết Bình có 38 que. Hỏi An có bao nhiêu que tính?",
      "options": [
        "A. 36 que",
        "B. 37 que",
        "C. 35 que",
        "D. 38 que"
      ],
      "answer": "A",
      "explanation": "Số que tính của An là: (38) - 2 = 36 que tính."
    },
    {
      "id": "ARCH-M-G1-W34-T-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 1,
      "round": "Tuần 34 - Tiết 1",
      "topic": "Luyện tập tư duy đếm hình và logic",
      "text": "[Tiết 1] Tính giá trị: 7 + 2 = ?",
      "options": [
        "A. 9",
        "B. 11",
        "C. 8",
        "D. 10"
      ],
      "answer": "A",
      "explanation": "Ta có phép tính: 7 + 2 = 9."
    },
    {
      "id": "ARCH-M-G1-W34-T-2",
      "exam": "ARCHIMEDES_MATH",
      "grade": 1,
      "round": "Tuần 34 - Tiết 2",
      "topic": "Luyện tập tư duy đếm hình và logic",
      "text": "[Tiết 2] Tính giá trị: 8 + 3 = ?",
      "options": [
        "A. 11",
        "B. 13",
        "C. 10",
        "D. 12"
      ],
      "answer": "A",
      "explanation": "Ta có phép tính: 8 + 3 = 11."
    },
    {
      "id": "ARCH-M-G1-W34-T-3",
      "exam": "ARCHIMEDES_MATH",
      "grade": 1,
      "round": "Tuần 34 - Tiết 3",
      "topic": "Luyện tập tư duy đếm hình và logic",
      "text": "[Tiết 3] Tính giá trị: 9 + 4 = ?",
      "options": [
        "A. 13",
        "B. 15",
        "C. 12",
        "D. 14"
      ],
      "answer": "A",
      "explanation": "Ta có phép tính: 9 + 4 = 13."
    },
    {
      "id": "ARCH-M-G1-W34-PKT-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 1,
      "round": "Tuần 34 - Phiếu cuối tuần",
      "topic": "Luyện tập tư duy đếm hình và logic",
      "text": "[Phiếu cuối tuần 34] Tính: 9 + 5 = ?",
      "options": [
        "A. 14",
        "B. 15",
        "C. 13",
        "D. 16"
      ],
      "answer": "A",
      "explanation": "Thực hiện phép cộng: 9 + 5 = 14."
    },
    {
      "id": "ARCH-M-G1-W34-TTK-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 1,
      "round": "Tuần 34 - Bài tập tham khảo",
      "topic": "Luyện tập tư duy đếm hình và logic",
      "text": "[Toán tư duy Archimedes Tuần 34] Chủ đề: Luyện tập tư duy đếm hình và logic. Một bài toán đố tư duy logic: Bạn An có một số que tính, nếu thêm 2 que thì bằng số que của Bình. Biết Bình có 39 que. Hỏi An có bao nhiêu que tính?",
      "options": [
        "A. 37 que",
        "B. 38 que",
        "C. 36 que",
        "D. 39 que"
      ],
      "answer": "A",
      "explanation": "Số que tính của An là: (39) - 2 = 37 que tính."
    },
    {
      "id": "ARCH-M-G1-W35-T-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 1,
      "round": "Tuần 35 - Tiết 1",
      "topic": "Ôn tập và kiểm tra tổng kết cuối năm",
      "text": "[Tiết 1] Tính giá trị: 8 + 2 = ?",
      "options": [
        "A. 10",
        "B. 12",
        "C. 9",
        "D. 11"
      ],
      "answer": "A",
      "explanation": "Ta có phép tính: 8 + 2 = 10."
    },
    {
      "id": "ARCH-M-G1-W35-T-2",
      "exam": "ARCHIMEDES_MATH",
      "grade": 1,
      "round": "Tuần 35 - Tiết 2",
      "topic": "Ôn tập và kiểm tra tổng kết cuối năm",
      "text": "[Tiết 2] Tính giá trị: 9 + 3 = ?",
      "options": [
        "A. 12",
        "B. 14",
        "C. 11",
        "D. 13"
      ],
      "answer": "A",
      "explanation": "Ta có phép tính: 9 + 3 = 12."
    },
    {
      "id": "ARCH-M-G1-W35-T-3",
      "exam": "ARCHIMEDES_MATH",
      "grade": 1,
      "round": "Tuần 35 - Tiết 3",
      "topic": "Ôn tập và kiểm tra tổng kết cuối năm",
      "text": "[Tiết 3] Tính giá trị: 10 + 4 = ?",
      "options": [
        "A. 14",
        "B. 16",
        "C. 13",
        "D. 15"
      ],
      "answer": "A",
      "explanation": "Ta có phép tính: 10 + 4 = 14."
    },
    {
      "id": "ARCH-M-G1-W35-PKT-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 1,
      "round": "Tuần 35 - Phiếu cuối tuần",
      "topic": "Ôn tập và kiểm tra tổng kết cuối năm",
      "text": "[Phiếu cuối tuần 35] Tính: 1 + 5 = ?",
      "options": [
        "A. 6",
        "B. 7",
        "C. 5",
        "D. 8"
      ],
      "answer": "A",
      "explanation": "Thực hiện phép cộng: 1 + 5 = 6."
    },
    {
      "id": "ARCH-M-G1-W35-TTK-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 1,
      "round": "Tuần 35 - Bài tập tham khảo",
      "topic": "Ôn tập và kiểm tra tổng kết cuối năm",
      "text": "[Toán tư duy Archimedes Tuần 35] Chủ đề: Ôn tập và kiểm tra tổng kết cuối năm. Một bài toán đố tư duy logic: Bạn An có một số que tính, nếu thêm 2 que thì bằng số que của Bình. Biết Bình có 40 que. Hỏi An có bao nhiêu que tính?",
      "options": [
        "A. 38 que",
        "B. 39 que",
        "C. 37 que",
        "D. 40 que"
      ],
      "answer": "A",
      "explanation": "Số que tính của An là: (40) - 2 = 38 que tính."
    }
  ],
  "grade2": [
    {
      "id": "ARCH-M-G2-W1-T1-01",
      "exam": "ARCHIMEDES_MATH",
      "grade": 2,
      "round": "Tuần 1 - Tiết 1",
      "topic": "Ôn tập số trong phạm vi 100",
      "text": "Số gồm 5 chục và 8 đơn vị viết là số nào?",
      "options": [
        "A. 85",
        "B. 58",
        "C. 508",
        "D. 50"
      ],
      "answer": "B",
      "explanation": "Số gồm 5 chục và 8 đơn vị là số 58."
    },
    {
      "id": "ARCH-M-G2-W1-T1-02",
      "exam": "ARCHIMEDES_MATH",
      "grade": 2,
      "round": "Tuần 1 - Tiết 1",
      "topic": "Số tròn chục",
      "text": "Trong các số: 34, 50, 78, 92 số nào là số tròn chục?",
      "options": [
        "A. 34",
        "B. 50",
        "C. 78",
        "D. 92"
      ],
      "answer": "B",
      "explanation": "Số tròn chục có chữ số hàng đơn vị bằng 0. Vậy đó là số 50."
    },
    {
      "id": "ARCH-M-G2-W1-T1-03",
      "exam": "ARCHIMEDES_MATH",
      "grade": 2,
      "round": "Tuần 1 - Tiết 1",
      "topic": "Đếm cách 5",
      "text": "Điền số thích hợp vào chỗ trống: 25, 30, 35, [ ? ], 45",
      "options": [
        "A. 38",
        "B. 40",
        "C. 42",
        "D. 36"
      ],
      "answer": "B",
      "explanation": "Dãy số cách đều 5 đơn vị: 35 + 5 = 40."
    },
    {
      "id": "ARCH-M-G2-W1-T1-04",
      "exam": "ARCHIMEDES_MATH",
      "grade": 2,
      "round": "Tuần 1 - Tiết 1",
      "topic": "Số liền trước - liền sau",
      "text": "Số liền trước của số lớn nhất có hai chữ số là số nào?",
      "options": [
        "A. 98",
        "B. 99",
        "C. 100",
        "D. 97"
      ],
      "answer": "A",
      "explanation": "Số lớn nhất có hai chữ số là 99. Số liền trước của 99 là 98."
    },
    {
      "id": "ARCH-M-G2-W1-T1-05",
      "exam": "ARCHIMEDES_MATH",
      "grade": 2,
      "round": "Tuần 1 - Tiết 1",
      "topic": "Cấu tạo số",
      "text": "Tổng của chữ số hàng chục và chữ số hàng đơn vị của số 47 là bao nhiêu?",
      "options": [
        "A. 10",
        "B. 11",
        "C. 12",
        "D. 13"
      ],
      "answer": "B",
      "explanation": "Số 47 có chữ số hàng chục là 4, hàng đơn vị là 7. Tổng là: 4 + 7 = 11."
    },
    {
      "id": "ARCH-M-G2-W1-T2-01",
      "exam": "ARCHIMEDES_MATH",
      "grade": 2,
      "round": "Tuần 1 - Tiết 2",
      "topic": "Phép cộng không nhớ phạm vi 100",
      "text": "Tính kết quả của phép tính: 34 + 25 = ?",
      "options": [
        "A. 58",
        "B. 59",
        "C. 69",
        "D. 60"
      ],
      "answer": "B",
      "explanation": "34 + 25 = 59 (hàng đơn vị: 4 + 5 = 9, hàng chục: 3 + 2 = 5)."
    },
    {
      "id": "ARCH-M-G2-W1-T2-02",
      "exam": "ARCHIMEDES_MATH",
      "grade": 2,
      "round": "Tuần 1 - Tiết 2",
      "topic": "Tìm số hạng chưa biết",
      "text": "Tìm x biết: x + 23 = 58",
      "options": [
        "A. 35",
        "B. 25",
        "C. 81",
        "D. 34"
      ],
      "answer": "A",
      "explanation": "x = 58 - 23 = 35."
    },
    {
      "id": "ARCH-M-G2-W1-T2-03",
      "exam": "ARCHIMEDES_MATH",
      "grade": 2,
      "round": "Tuần 1 - Tiết 2",
      "topic": "Toán có lời văn",
      "text": "Lớp 2A có 21 học sinh nam và 17 học sinh nữ. Hỏi lớp 2A có tất cả bao nhiêu học sinh?",
      "options": [
        "A. 37 học sinh",
        "B. 38 học sinh",
        "C. 39 học sinh",
        "D. 40 học sinh"
      ],
      "answer": "B",
      "explanation": "Lớp 2A có tất cả số học sinh là: 21 + 17 = 38 học sinh."
    },
    {
      "id": "ARCH-M-G2-W1-T2-04",
      "exam": "ARCHIMEDES_MATH",
      "grade": 2,
      "round": "Tuần 1 - Tiết 2",
      "topic": "Tính nhanh",
      "text": "Tính nhanh giá trị của biểu thức: 12 + 35 + 8",
      "options": [
        "A. 55",
        "B. 54",
        "C. 56",
        "D. 50"
      ],
      "answer": "A",
      "explanation": "Nhóm (12 + 8) + 35 = 20 + 35 = 55."
    },
    {
      "id": "ARCH-M-G2-W1-T2-05",
      "exam": "ARCHIMEDES_MATH",
      "grade": 2,
      "round": "Tuần 1 - Tiết 2",
      "topic": "So sánh phép tính",
      "text": "Điền dấu thích hợp: 42 + 15 ... 24 + 33",
      "options": [
        "A. >",
        "B. <",
        "C. =",
        "D. +"
      ],
      "answer": "C",
      "explanation": "Ta có: 42 + 15 = 57 và 24 + 33 = 57. Vậy 57 = 57."
    },
    {
      "id": "ARCH-M-G2-W1-T3-01",
      "exam": "ARCHIMEDES_MATH",
      "grade": 2,
      "round": "Tuần 1 - Tiết 3",
      "topic": "Phép trừ không nhớ phạm vi 100",
      "text": "Kết quả của phép trừ 78 - 36 là bao nhiêu?",
      "options": [
        "A. 41",
        "B. 42",
        "C. 43",
        "D. 52"
      ],
      "answer": "B",
      "explanation": "78 - 36 = 42."
    },
    {
      "id": "ARCH-M-G2-W1-T3-02",
      "exam": "ARCHIMEDES_MATH",
      "grade": 2,
      "round": "Tuần 1 - Tiết 3",
      "topic": "Tìm số bị trừ",
      "text": "Tìm x biết: x - 14 = 52",
      "options": [
        "A. 38",
        "B. 66",
        "C. 65",
        "D. 67"
      ],
      "answer": "B",
      "explanation": "x = 52 + 14 = 66."
    },
    {
      "id": "ARCH-M-G2-W1-T3-03",
      "exam": "ARCHIMEDES_MATH",
      "grade": 2,
      "round": "Tuần 1 - Tiết 3",
      "topic": "Toán nhiều hơn, ít hơn",
      "text": "Bác Ba nuôi 68 con gà, số con vịt ít hơn số con gà là 24 con. Hỏi bác Ba nuôi bao nhiêu con vịt?",
      "options": [
        "A. 44 con",
        "B. 42 con",
        "C. 92 con",
        "D. 43 con"
      ],
      "answer": "A",
      "explanation": "Số con vịt bác Ba nuôi là: 68 - 24 = 44 con."
    },
    {
      "id": "ARCH-M-G2-W1-T3-04",
      "exam": "ARCHIMEDES_MATH",
      "grade": 2,
      "round": "Tuần 1 - Tiết 3",
      "topic": "Tìm số trừ",
      "text": "Tìm x biết: 89 - x = 45",
      "options": [
        "A. 44",
        "B. 43",
        "C. 54",
        "D. 134"
      ],
      "answer": "A",
      "explanation": "x = 89 - 45 = 44."
    },
    {
      "id": "ARCH-M-G2-W1-T3-05",
      "exam": "ARCHIMEDES_MATH",
      "grade": 2,
      "round": "Tuần 1 - Tiết 3",
      "topic": "Toán có lời văn",
      "text": "Một cửa hàng có 95 mét vải, buổi sáng đã bán được 40 mét vải. Hỏi cửa hàng còn lại bao nhiêu mét vải?",
      "options": [
        "A. 50 mét",
        "B. 55 mét",
        "C. 45 mét",
        "D. 60 mét"
      ],
      "answer": "B",
      "explanation": "Cửa hàng còn lại số mét vải là: 95 - 40 = 55 mét."
    },
    {
      "id": "ARCH-M-G2-W1-PKT-01",
      "exam": "ARCHIMEDES_MATH",
      "grade": 2,
      "round": "Tuần 1 - Phiếu cuối tuần",
      "topic": "Tổng hợp số học",
      "text": "Hiệu giữa số lớn nhất có hai chữ số và số bé nhất có hai chữ số là bao nhiêu?",
      "options": [
        "A. 89",
        "B. 90",
        "C. 88",
        "D. 99"
      ],
      "answer": "A",
      "explanation": "Số lớn nhất có 2 chữ số là 99, số bé nhất có 2 chữ số là 10. Hiệu là: 99 - 10 = 89."
    },
    {
      "id": "ARCH-M-G2-W1-PKT-02",
      "exam": "ARCHIMEDES_MATH",
      "grade": 2,
      "round": "Tuần 1 - Phiếu cuối tuần",
      "topic": "Tính giá trị biểu thức",
      "text": "Tính giá trị của biểu thức: 67 - 23 + 15 = ?",
      "options": [
        "A. 58",
        "B. 59",
        "C. 60",
        "D. 61"
      ],
      "answer": "B",
      "explanation": "67 - 23 + 15 = 44 + 15 = 59."
    },
    {
      "id": "ARCH-M-G2-W1-PKT-03",
      "exam": "ARCHIMEDES_MATH",
      "grade": 2,
      "round": "Tuần 1 - Phiếu cuối tuần",
      "topic": "Giải toán",
      "text": "Mẹ mua 2 chục quả trứng gà và 15 quả trứng vịt. Mẹ mua tất cả bao nhiêu quả trứng?",
      "options": [
        "A. 35 quả",
        "B. 17 quả",
        "C. 25 quả",
        "D. 30 quả"
      ],
      "answer": "A",
      "explanation": "2 chục = 20 quả. Tổng số trứng mẹ mua là: 20 + 15 = 35 quả."
    },
    {
      "id": "ARCH-M-G2-W1-PKT-04",
      "exam": "ARCHIMEDES_MATH",
      "grade": 2,
      "round": "Tuần 1 - Phiếu cuối tuần",
      "topic": "Quy luật số",
      "text": "Điền số tiếp theo vào dãy số: 11, 22, 33, 44, [ ? ]",
      "options": [
        "A. 45",
        "B. 55",
        "C. 54",
        "D. 66"
      ],
      "answer": "B",
      "explanation": "Dãy số tăng dần cách đều 11 đơn vị: 44 + 11 = 55."
    },
    {
      "id": "ARCH-M-G2-W1-PKT-05",
      "exam": "ARCHIMEDES_MATH",
      "grade": 2,
      "round": "Tuần 1 - Phiếu cuối tuần",
      "topic": "So sánh",
      "text": "Tìm x biết: 32 + x < 35 và x là số tự nhiên lớn hơn 1.",
      "options": [
        "A. x = 2",
        "B. x = 3",
        "C. x = 4",
        "D. x = 1"
      ],
      "answer": "A",
      "explanation": "32 + x < 35 nên x < 3. Vì x > 1 và là số tự nhiên nên x = 2."
    },
    {
      "id": "ARCH-M-G2-W1-TTK-01",
      "exam": "ARCHIMEDES_MATH",
      "grade": 2,
      "round": "Tuần 1 - Bài tập tham khảo",
      "topic": "Toán tư duy Archimedes",
      "text": "Viết tất cả các số có hai chữ số mà chữ số hàng chục hơn chữ số hàng đơn vị là 7. Có bao nhiêu số như vậy?",
      "options": [
        "A. 2 số",
        "B. 3 số",
        "C. 4 số",
        "D. 5 số"
      ],
      "answer": "B",
      "explanation": "Chữ số hàng chục a và hàng đơn vị b (a - b = 7). Vì a <= 9 nên các cặp (a, b) là: (7, 0), (8, 1), (9, 2). Vậy có 3 số: 70, 81, 92."
    },
    {
      "id": "ARCH-M-G2-W1-TTK-02",
      "exam": "ARCHIMEDES_MATH",
      "grade": 2,
      "round": "Tuần 1 - Bài tập tham khảo",
      "topic": "Điền chữ số bí ẩn",
      "text": "Tìm chữ số A trong phép cộng: 4A + A3 = 88",
      "options": [
        "A. 4",
        "B. 5",
        "C. 6",
        "D. 3"
      ],
      "answer": "A",
      "explanation": "Ở hàng đơn vị: A + 3 = 8 -> A = 5. Kiểm tra hàng chục: 4 + 5 = 9 != 8. Nếu không nhớ: A = 4 thì 44 + 43 = 87. Nếu A = 5 thì 45 + 53 = 98. Ở đây phép tính là: 4A + 3A = 88 -> 70 + 2A = 88 -> 2A = 18 -> A = 9. Với phép tính 4A + 44 = 88 thì A = 4."
    },
    {
      "id": "ARCH-M-G2-W1-TTK-03",
      "exam": "ARCHIMEDES_MATH",
      "grade": 2,
      "round": "Tuần 1 - Bài tập tham khảo",
      "topic": "Toán trồng cây",
      "text": "Người ta trồng 5 cây trên một đoạn đường thẳng. Khoảng cách giữa hai cây liên tiếp là 2 mét. Hỏi khoảng cách từ cây đầu tiên đến cây cuối cùng là bao nhiêu mét?",
      "options": [
        "A. 10 mét",
        "B. 8 mét",
        "C. 6 mét",
        "D. 12 mét"
      ],
      "answer": "B",
      "explanation": "5 cây trồng thẳng hàng tạo ra 4 khoảng cách: 5 - 1 = 4 khoảng cách. Độ dài từ cây đầu đến cây cuối là: 4 × 2 = 8 mét."
    },
    {
      "id": "ARCH-M-G2-W1-TTK-04",
      "exam": "ARCHIMEDES_MATH",
      "grade": 2,
      "round": "Tuần 1 - Bài tập tham khảo",
      "topic": "Toán tuổi tác",
      "text": "Năm nay Mai 7 tuổi, anh Nam 12 tuổi. Hỏi sau 3 năm nữa anh Nam hơn Mai bao nhiêu tuổi?",
      "options": [
        "A. 5 tuổi",
        "B. 8 tuổi",
        "C. 6 tuổi",
        "D. 7 tuổi"
      ],
      "answer": "A",
      "explanation": "Hiệu số tuổi giữa hai người không thay đổi theo thời gian. Hiện nay Nam hơn Mai: 12 - 7 = 5 tuổi. Sau 3 năm nữa Nam vẫn hơn Mai 5 tuổi."
    },
    {
      "id": "ARCH-M-G2-W1-TTK-05",
      "exam": "ARCHIMEDES_MATH",
      "grade": 2,
      "round": "Tuần 1 - Bài tập tham khảo",
      "topic": "Cắt que gỗ",
      "text": "Một thanh gỗ dài 12 mét được cưa thành các đoạn ngắn dài 3 mét. Mỗi lần cưa mất 2 phút. Hỏi cưa xong thanh gỗ mất bao nhiêu phút?",
      "options": [
        "A. 8 phút",
        "B. 6 phút",
        "C. 4 phút",
        "D. 10 phút"
      ],
      "answer": "B",
      "explanation": "Số đoạn gỗ là: 12 : 3 = 4 đoạn. Để có 4 đoạn cần cưa 3 lần: 4 - 1 = 3 lần cưa. Thời gian cưa là: 3 × 2 = 6 phút."
    },
    {
      "id": "ARCH-M-G2-W2-T-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 2,
      "round": "Tuần 2 - Tiết 1",
      "topic": "Tia số, số liền trước, số liền sau",
      "text": "[Tuần 2 - Tiết 1] Vận dụng: Tia số, số liền trước, số liền sau. Tính kết quả phép tính: 18 + 18 = ?",
      "options": [
        "A. 36",
        "B. 46",
        "C. 35",
        "D. 37"
      ],
      "answer": "A",
      "explanation": "18 + 18 = 36."
    },
    {
      "id": "ARCH-M-G2-W2-T-2",
      "exam": "ARCHIMEDES_MATH",
      "grade": 2,
      "round": "Tuần 2 - Tiết 2",
      "topic": "Tia số, số liền trước, số liền sau",
      "text": "[Tuần 2 - Tiết 2] Vận dụng: Tia số, số liền trước, số liền sau. Tính kết quả phép tính: 18 + 18 = ?",
      "options": [
        "A. 36",
        "B. 46",
        "C. 35",
        "D. 37"
      ],
      "answer": "A",
      "explanation": "18 + 18 = 36."
    },
    {
      "id": "ARCH-M-G2-W2-T-3",
      "exam": "ARCHIMEDES_MATH",
      "grade": 2,
      "round": "Tuần 2 - Tiết 3",
      "topic": "Tia số, số liền trước, số liền sau",
      "text": "[Tuần 2 - Tiết 3] Vận dụng: Tia số, số liền trước, số liền sau. Tính kết quả phép tính: 18 + 18 = ?",
      "options": [
        "A. 36",
        "B. 46",
        "C. 35",
        "D. 37"
      ],
      "answer": "A",
      "explanation": "18 + 18 = 36."
    },
    {
      "id": "ARCH-M-G2-W2-PKT-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 2,
      "round": "Tuần 2 - Phiếu cuối tuần",
      "topic": "Tia số, số liền trước, số liền sau",
      "text": "[Phiếu cuối tuần 2] Chủ đề: Tia số, số liền trước, số liền sau. Tìm x biết: x - 15 = 14",
      "options": [
        "A. 29",
        "B. 27",
        "C. 31",
        "D. 14"
      ],
      "answer": "A",
      "explanation": "Muốn tìm số bị trừ ta lấy hiệu cộng với số trừ: x = 14 + 15 = 29."
    },
    {
      "id": "ARCH-M-G2-W2-TTK-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 2,
      "round": "Tuần 2 - Bài tập tham khảo",
      "topic": "Tia số, số liền trước, số liền sau",
      "text": "[Toán tư duy Olympic Archimedes Tuần 2] Người ta trồng các cây cách đều nhau 3m trên một đoạn đường thẳng dài 12m. Hỏi trồng được bao nhiêu cây (ở cả hai đầu đường đều có cây)?",
      "options": [
        "A. 5 cây",
        "B. 4 cây",
        "C. 6 cây",
        "D. 7 cây"
      ],
      "answer": "A",
      "explanation": "Số khoảng cách là: 12 : 3 = 4 (khoảng cách).\nVì trồng cây ở cả 2 đầu đường nên số cây là: 4 + 1 = 5 cây."
    },
    {
      "id": "ARCH-M-G2-W3-T-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 2,
      "round": "Tuần 3 - Tiết 1",
      "topic": "Đề-xi-mét (dm), đo và ước lượng độ dài",
      "text": "[Tuần 3 - Tiết 1] Vận dụng: Đề-xi-mét (dm), đo và ước lượng độ dài. Tính kết quả phép tính: 21 + 18 = ?",
      "options": [
        "A. 39",
        "B. 49",
        "C. 38",
        "D. 40"
      ],
      "answer": "A",
      "explanation": "21 + 18 = 39."
    },
    {
      "id": "ARCH-M-G2-W3-T-2",
      "exam": "ARCHIMEDES_MATH",
      "grade": 2,
      "round": "Tuần 3 - Tiết 2",
      "topic": "Đề-xi-mét (dm), đo và ước lượng độ dài",
      "text": "[Tuần 3 - Tiết 2] Vận dụng: Đề-xi-mét (dm), đo và ước lượng độ dài. Tính kết quả phép tính: 21 + 18 = ?",
      "options": [
        "A. 39",
        "B. 49",
        "C. 38",
        "D. 40"
      ],
      "answer": "A",
      "explanation": "21 + 18 = 39."
    },
    {
      "id": "ARCH-M-G2-W3-T-3",
      "exam": "ARCHIMEDES_MATH",
      "grade": 2,
      "round": "Tuần 3 - Tiết 3",
      "topic": "Đề-xi-mét (dm), đo và ước lượng độ dài",
      "text": "[Tuần 3 - Tiết 3] Vận dụng: Đề-xi-mét (dm), đo và ước lượng độ dài. Tính kết quả phép tính: 21 + 18 = ?",
      "options": [
        "A. 39",
        "B. 49",
        "C. 38",
        "D. 40"
      ],
      "answer": "A",
      "explanation": "21 + 18 = 39."
    },
    {
      "id": "ARCH-M-G2-W3-PKT-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 2,
      "round": "Tuần 3 - Phiếu cuối tuần",
      "topic": "Đề-xi-mét (dm), đo và ước lượng độ dài",
      "text": "[Phiếu cuối tuần 3] Chủ đề: Đề-xi-mét (dm), đo và ước lượng độ dài. Tìm x biết: x - 15 = 16",
      "options": [
        "A. 31",
        "B. 29",
        "C. 33",
        "D. 16"
      ],
      "answer": "A",
      "explanation": "Muốn tìm số bị trừ ta lấy hiệu cộng với số trừ: x = 16 + 15 = 31."
    },
    {
      "id": "ARCH-M-G2-W3-TTK-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 2,
      "round": "Tuần 3 - Bài tập tham khảo",
      "topic": "Đề-xi-mét (dm), đo và ước lượng độ dài",
      "text": "[Toán tư duy Olympic Archimedes Tuần 3] Người ta trồng các cây cách đều nhau 3m trên một đoạn đường thẳng dài 18m. Hỏi trồng được bao nhiêu cây (ở cả hai đầu đường đều có cây)?",
      "options": [
        "A. 7 cây",
        "B. 6 cây",
        "C. 8 cây",
        "D. 9 cây"
      ],
      "answer": "A",
      "explanation": "Số khoảng cách là: 18 : 3 = 6 (khoảng cách).\nVì trồng cây ở cả 2 đầu đường nên số cây là: 6 + 1 = 7 cây."
    },
    {
      "id": "ARCH-M-G2-W4-T-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 2,
      "round": "Tuần 4 - Tiết 1",
      "topic": "Số hạng, tổng, tìm số hạng chưa biết",
      "text": "[Tuần 4 - Tiết 1] Vận dụng: Số hạng, tổng, tìm số hạng chưa biết. Tính kết quả phép tính: 24 + 18 = ?",
      "options": [
        "A. 42",
        "B. 52",
        "C. 41",
        "D. 43"
      ],
      "answer": "A",
      "explanation": "24 + 18 = 42."
    },
    {
      "id": "ARCH-M-G2-W4-T-2",
      "exam": "ARCHIMEDES_MATH",
      "grade": 2,
      "round": "Tuần 4 - Tiết 2",
      "topic": "Số hạng, tổng, tìm số hạng chưa biết",
      "text": "[Tuần 4 - Tiết 2] Vận dụng: Số hạng, tổng, tìm số hạng chưa biết. Tính kết quả phép tính: 24 + 18 = ?",
      "options": [
        "A. 42",
        "B. 52",
        "C. 41",
        "D. 43"
      ],
      "answer": "A",
      "explanation": "24 + 18 = 42."
    },
    {
      "id": "ARCH-M-G2-W4-T-3",
      "exam": "ARCHIMEDES_MATH",
      "grade": 2,
      "round": "Tuần 4 - Tiết 3",
      "topic": "Số hạng, tổng, tìm số hạng chưa biết",
      "text": "[Tuần 4 - Tiết 3] Vận dụng: Số hạng, tổng, tìm số hạng chưa biết. Tính kết quả phép tính: 24 + 18 = ?",
      "options": [
        "A. 42",
        "B. 52",
        "C. 41",
        "D. 43"
      ],
      "answer": "A",
      "explanation": "24 + 18 = 42."
    },
    {
      "id": "ARCH-M-G2-W4-PKT-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 2,
      "round": "Tuần 4 - Phiếu cuối tuần",
      "topic": "Số hạng, tổng, tìm số hạng chưa biết",
      "text": "[Phiếu cuối tuần 4] Chủ đề: Số hạng, tổng, tìm số hạng chưa biết. Tìm x biết: x - 15 = 18",
      "options": [
        "A. 33",
        "B. 31",
        "C. 35",
        "D. 18"
      ],
      "answer": "A",
      "explanation": "Muốn tìm số bị trừ ta lấy hiệu cộng với số trừ: x = 18 + 15 = 33."
    },
    {
      "id": "ARCH-M-G2-W4-TTK-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 2,
      "round": "Tuần 4 - Bài tập tham khảo",
      "topic": "Số hạng, tổng, tìm số hạng chưa biết",
      "text": "[Toán tư duy Olympic Archimedes Tuần 4] Người ta trồng các cây cách đều nhau 3m trên một đoạn đường thẳng dài 24m. Hỏi trồng được bao nhiêu cây (ở cả hai đầu đường đều có cây)?",
      "options": [
        "A. 9 cây",
        "B. 8 cây",
        "C. 10 cây",
        "D. 11 cây"
      ],
      "answer": "A",
      "explanation": "Số khoảng cách là: 24 : 3 = 8 (khoảng cách).\nVì trồng cây ở cả 2 đầu đường nên số cây là: 8 + 1 = 9 cây."
    },
    {
      "id": "ARCH-M-G2-W5-T-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 2,
      "round": "Tuần 5 - Tiết 1",
      "topic": "Số bị trừ, số trừ, hiệu",
      "text": "[Tuần 5 - Tiết 1] Vận dụng: Số bị trừ, số trừ, hiệu. Tính kết quả phép tính: 27 + 18 = ?",
      "options": [
        "A. 45",
        "B. 55",
        "C. 44",
        "D. 46"
      ],
      "answer": "A",
      "explanation": "27 + 18 = 45."
    },
    {
      "id": "ARCH-M-G2-W5-T-2",
      "exam": "ARCHIMEDES_MATH",
      "grade": 2,
      "round": "Tuần 5 - Tiết 2",
      "topic": "Số bị trừ, số trừ, hiệu",
      "text": "[Tuần 5 - Tiết 2] Vận dụng: Số bị trừ, số trừ, hiệu. Tính kết quả phép tính: 27 + 18 = ?",
      "options": [
        "A. 45",
        "B. 55",
        "C. 44",
        "D. 46"
      ],
      "answer": "A",
      "explanation": "27 + 18 = 45."
    },
    {
      "id": "ARCH-M-G2-W5-T-3",
      "exam": "ARCHIMEDES_MATH",
      "grade": 2,
      "round": "Tuần 5 - Tiết 3",
      "topic": "Số bị trừ, số trừ, hiệu",
      "text": "[Tuần 5 - Tiết 3] Vận dụng: Số bị trừ, số trừ, hiệu. Tính kết quả phép tính: 27 + 18 = ?",
      "options": [
        "A. 45",
        "B. 55",
        "C. 44",
        "D. 46"
      ],
      "answer": "A",
      "explanation": "27 + 18 = 45."
    },
    {
      "id": "ARCH-M-G2-W5-PKT-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 2,
      "round": "Tuần 5 - Phiếu cuối tuần",
      "topic": "Số bị trừ, số trừ, hiệu",
      "text": "[Phiếu cuối tuần 5] Chủ đề: Số bị trừ, số trừ, hiệu. Tìm x biết: x - 15 = 20",
      "options": [
        "A. 35",
        "B. 33",
        "C. 37",
        "D. 20"
      ],
      "answer": "A",
      "explanation": "Muốn tìm số bị trừ ta lấy hiệu cộng với số trừ: x = 20 + 15 = 35."
    },
    {
      "id": "ARCH-M-G2-W5-TTK-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 2,
      "round": "Tuần 5 - Bài tập tham khảo",
      "topic": "Số bị trừ, số trừ, hiệu",
      "text": "[Toán tư duy Olympic Archimedes Tuần 5] Người ta trồng các cây cách đều nhau 3m trên một đoạn đường thẳng dài 30m. Hỏi trồng được bao nhiêu cây (ở cả hai đầu đường đều có cây)?",
      "options": [
        "A. 11 cây",
        "B. 10 cây",
        "C. 12 cây",
        "D. 13 cây"
      ],
      "answer": "A",
      "explanation": "Số khoảng cách là: 30 : 3 = 10 (khoảng cách).\nVì trồng cây ở cả 2 đầu đường nên số cây là: 10 + 1 = 11 cây."
    },
    {
      "id": "ARCH-M-G2-W6-T-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 2,
      "round": "Tuần 6 - Tiết 1",
      "topic": "Phép cộng có nhớ phạm vi 20 (9 cộng một số)",
      "text": "[Tuần 6 - Tiết 1] Vận dụng: Phép cộng có nhớ phạm vi 20 (9 cộng một số). Tính kết quả phép tính: 30 + 18 = ?",
      "options": [
        "A. 48",
        "B. 58",
        "C. 47",
        "D. 49"
      ],
      "answer": "A",
      "explanation": "30 + 18 = 48."
    },
    {
      "id": "ARCH-M-G2-W6-T-2",
      "exam": "ARCHIMEDES_MATH",
      "grade": 2,
      "round": "Tuần 6 - Tiết 2",
      "topic": "Phép cộng có nhớ phạm vi 20 (9 cộng một số)",
      "text": "[Tuần 6 - Tiết 2] Vận dụng: Phép cộng có nhớ phạm vi 20 (9 cộng một số). Tính kết quả phép tính: 30 + 18 = ?",
      "options": [
        "A. 48",
        "B. 58",
        "C. 47",
        "D. 49"
      ],
      "answer": "A",
      "explanation": "30 + 18 = 48."
    },
    {
      "id": "ARCH-M-G2-W6-T-3",
      "exam": "ARCHIMEDES_MATH",
      "grade": 2,
      "round": "Tuần 6 - Tiết 3",
      "topic": "Phép cộng có nhớ phạm vi 20 (9 cộng một số)",
      "text": "[Tuần 6 - Tiết 3] Vận dụng: Phép cộng có nhớ phạm vi 20 (9 cộng một số). Tính kết quả phép tính: 30 + 18 = ?",
      "options": [
        "A. 48",
        "B. 58",
        "C. 47",
        "D. 49"
      ],
      "answer": "A",
      "explanation": "30 + 18 = 48."
    },
    {
      "id": "ARCH-M-G2-W6-PKT-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 2,
      "round": "Tuần 6 - Phiếu cuối tuần",
      "topic": "Phép cộng có nhớ phạm vi 20 (9 cộng một số)",
      "text": "[Phiếu cuối tuần 6] Chủ đề: Phép cộng có nhớ phạm vi 20 (9 cộng một số). Tìm x biết: x - 15 = 22",
      "options": [
        "A. 37",
        "B. 35",
        "C. 39",
        "D. 22"
      ],
      "answer": "A",
      "explanation": "Muốn tìm số bị trừ ta lấy hiệu cộng với số trừ: x = 22 + 15 = 37."
    },
    {
      "id": "ARCH-M-G2-W6-TTK-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 2,
      "round": "Tuần 6 - Bài tập tham khảo",
      "topic": "Phép cộng có nhớ phạm vi 20 (9 cộng một số)",
      "text": "[Toán tư duy Olympic Archimedes Tuần 6] Người ta trồng các cây cách đều nhau 3m trên một đoạn đường thẳng dài 36m. Hỏi trồng được bao nhiêu cây (ở cả hai đầu đường đều có cây)?",
      "options": [
        "A. 13 cây",
        "B. 12 cây",
        "C. 14 cây",
        "D. 15 cây"
      ],
      "answer": "A",
      "explanation": "Số khoảng cách là: 36 : 3 = 12 (khoảng cách).\nVì trồng cây ở cả 2 đầu đường nên số cây là: 12 + 1 = 13 cây."
    },
    {
      "id": "ARCH-M-G2-W7-T-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 2,
      "round": "Tuần 7 - Tiết 1",
      "topic": "8, 7, 6 cộng với một số",
      "text": "[Tuần 7 - Tiết 1] Vận dụng: 8, 7, 6 cộng với một số. Tính kết quả phép tính: 33 + 18 = ?",
      "options": [
        "A. 51",
        "B. 61",
        "C. 50",
        "D. 52"
      ],
      "answer": "A",
      "explanation": "33 + 18 = 51."
    },
    {
      "id": "ARCH-M-G2-W7-T-2",
      "exam": "ARCHIMEDES_MATH",
      "grade": 2,
      "round": "Tuần 7 - Tiết 2",
      "topic": "8, 7, 6 cộng với một số",
      "text": "[Tuần 7 - Tiết 2] Vận dụng: 8, 7, 6 cộng với một số. Tính kết quả phép tính: 33 + 18 = ?",
      "options": [
        "A. 51",
        "B. 61",
        "C. 50",
        "D. 52"
      ],
      "answer": "A",
      "explanation": "33 + 18 = 51."
    },
    {
      "id": "ARCH-M-G2-W7-T-3",
      "exam": "ARCHIMEDES_MATH",
      "grade": 2,
      "round": "Tuần 7 - Tiết 3",
      "topic": "8, 7, 6 cộng với một số",
      "text": "[Tuần 7 - Tiết 3] Vận dụng: 8, 7, 6 cộng với một số. Tính kết quả phép tính: 33 + 18 = ?",
      "options": [
        "A. 51",
        "B. 61",
        "C. 50",
        "D. 52"
      ],
      "answer": "A",
      "explanation": "33 + 18 = 51."
    },
    {
      "id": "ARCH-M-G2-W7-PKT-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 2,
      "round": "Tuần 7 - Phiếu cuối tuần",
      "topic": "8, 7, 6 cộng với một số",
      "text": "[Phiếu cuối tuần 7] Chủ đề: 8, 7, 6 cộng với một số. Tìm x biết: x - 15 = 24",
      "options": [
        "A. 39",
        "B. 37",
        "C. 41",
        "D. 24"
      ],
      "answer": "A",
      "explanation": "Muốn tìm số bị trừ ta lấy hiệu cộng với số trừ: x = 24 + 15 = 39."
    },
    {
      "id": "ARCH-M-G2-W7-TTK-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 2,
      "round": "Tuần 7 - Bài tập tham khảo",
      "topic": "8, 7, 6 cộng với một số",
      "text": "[Toán tư duy Olympic Archimedes Tuần 7] Người ta trồng các cây cách đều nhau 3m trên một đoạn đường thẳng dài 42m. Hỏi trồng được bao nhiêu cây (ở cả hai đầu đường đều có cây)?",
      "options": [
        "A. 15 cây",
        "B. 14 cây",
        "C. 16 cây",
        "D. 17 cây"
      ],
      "answer": "A",
      "explanation": "Số khoảng cách là: 42 : 3 = 14 (khoảng cách).\nVì trồng cây ở cả 2 đầu đường nên số cây là: 14 + 1 = 15 cây."
    },
    {
      "id": "ARCH-M-G2-W8-T-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 2,
      "round": "Tuần 8 - Tiết 1",
      "topic": "Bảng cộng có nhớ trong phạm vi 20",
      "text": "[Tuần 8 - Tiết 1] Vận dụng: Bảng cộng có nhớ trong phạm vi 20. Tính kết quả phép tính: 36 + 18 = ?",
      "options": [
        "A. 54",
        "B. 64",
        "C. 53",
        "D. 55"
      ],
      "answer": "A",
      "explanation": "36 + 18 = 54."
    },
    {
      "id": "ARCH-M-G2-W8-T-2",
      "exam": "ARCHIMEDES_MATH",
      "grade": 2,
      "round": "Tuần 8 - Tiết 2",
      "topic": "Bảng cộng có nhớ trong phạm vi 20",
      "text": "[Tuần 8 - Tiết 2] Vận dụng: Bảng cộng có nhớ trong phạm vi 20. Tính kết quả phép tính: 36 + 18 = ?",
      "options": [
        "A. 54",
        "B. 64",
        "C. 53",
        "D. 55"
      ],
      "answer": "A",
      "explanation": "36 + 18 = 54."
    },
    {
      "id": "ARCH-M-G2-W8-T-3",
      "exam": "ARCHIMEDES_MATH",
      "grade": 2,
      "round": "Tuần 8 - Tiết 3",
      "topic": "Bảng cộng có nhớ trong phạm vi 20",
      "text": "[Tuần 8 - Tiết 3] Vận dụng: Bảng cộng có nhớ trong phạm vi 20. Tính kết quả phép tính: 36 + 18 = ?",
      "options": [
        "A. 54",
        "B. 64",
        "C. 53",
        "D. 55"
      ],
      "answer": "A",
      "explanation": "36 + 18 = 54."
    },
    {
      "id": "ARCH-M-G2-W8-PKT-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 2,
      "round": "Tuần 8 - Phiếu cuối tuần",
      "topic": "Bảng cộng có nhớ trong phạm vi 20",
      "text": "[Phiếu cuối tuần 8] Chủ đề: Bảng cộng có nhớ trong phạm vi 20. Tìm x biết: x - 15 = 26",
      "options": [
        "A. 41",
        "B. 39",
        "C. 43",
        "D. 26"
      ],
      "answer": "A",
      "explanation": "Muốn tìm số bị trừ ta lấy hiệu cộng với số trừ: x = 26 + 15 = 41."
    },
    {
      "id": "ARCH-M-G2-W8-TTK-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 2,
      "round": "Tuần 8 - Bài tập tham khảo",
      "topic": "Bảng cộng có nhớ trong phạm vi 20",
      "text": "[Toán tư duy Olympic Archimedes Tuần 8] Người ta trồng các cây cách đều nhau 3m trên một đoạn đường thẳng dài 48m. Hỏi trồng được bao nhiêu cây (ở cả hai đầu đường đều có cây)?",
      "options": [
        "A. 17 cây",
        "B. 16 cây",
        "C. 18 cây",
        "D. 19 cây"
      ],
      "answer": "A",
      "explanation": "Số khoảng cách là: 48 : 3 = 16 (khoảng cách).\nVì trồng cây ở cả 2 đầu đường nên số cây là: 16 + 1 = 17 cây."
    },
    {
      "id": "ARCH-M-G2-W9-T-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 2,
      "round": "Tuần 9 - Tiết 1",
      "topic": "Ôn tập giữa học kì 1",
      "text": "[Tuần 9 - Tiết 1] Vận dụng: Ôn tập giữa học kì 1. Tính kết quả phép tính: 39 + 18 = ?",
      "options": [
        "A. 57",
        "B. 67",
        "C. 56",
        "D. 58"
      ],
      "answer": "A",
      "explanation": "39 + 18 = 57."
    },
    {
      "id": "ARCH-M-G2-W9-T-2",
      "exam": "ARCHIMEDES_MATH",
      "grade": 2,
      "round": "Tuần 9 - Tiết 2",
      "topic": "Ôn tập giữa học kì 1",
      "text": "[Tuần 9 - Tiết 2] Vận dụng: Ôn tập giữa học kì 1. Tính kết quả phép tính: 39 + 18 = ?",
      "options": [
        "A. 57",
        "B. 67",
        "C. 56",
        "D. 58"
      ],
      "answer": "A",
      "explanation": "39 + 18 = 57."
    },
    {
      "id": "ARCH-M-G2-W9-T-3",
      "exam": "ARCHIMEDES_MATH",
      "grade": 2,
      "round": "Tuần 9 - Tiết 3",
      "topic": "Ôn tập giữa học kì 1",
      "text": "[Tuần 9 - Tiết 3] Vận dụng: Ôn tập giữa học kì 1. Tính kết quả phép tính: 39 + 18 = ?",
      "options": [
        "A. 57",
        "B. 67",
        "C. 56",
        "D. 58"
      ],
      "answer": "A",
      "explanation": "39 + 18 = 57."
    },
    {
      "id": "ARCH-M-G2-W9-PKT-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 2,
      "round": "Tuần 9 - Phiếu cuối tuần",
      "topic": "Ôn tập giữa học kì 1",
      "text": "[Phiếu cuối tuần 9] Chủ đề: Ôn tập giữa học kì 1. Tìm x biết: x - 15 = 28",
      "options": [
        "A. 43",
        "B. 41",
        "C. 45",
        "D. 28"
      ],
      "answer": "A",
      "explanation": "Muốn tìm số bị trừ ta lấy hiệu cộng với số trừ: x = 28 + 15 = 43."
    },
    {
      "id": "ARCH-M-G2-W9-TTK-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 2,
      "round": "Tuần 9 - Bài tập tham khảo",
      "topic": "Ôn tập giữa học kì 1",
      "text": "[Toán tư duy Olympic Archimedes Tuần 9] Người ta trồng các cây cách đều nhau 3m trên một đoạn đường thẳng dài 54m. Hỏi trồng được bao nhiêu cây (ở cả hai đầu đường đều có cây)?",
      "options": [
        "A. 19 cây",
        "B. 18 cây",
        "C. 20 cây",
        "D. 21 cây"
      ],
      "answer": "A",
      "explanation": "Số khoảng cách là: 54 : 3 = 18 (khoảng cách).\nVì trồng cây ở cả 2 đầu đường nên số cây là: 18 + 1 = 19 cây."
    },
    {
      "id": "ARCH-M-G2-W10-T-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 2,
      "round": "Tuần 10 - Tiết 1",
      "topic": "11, 12 trừ đi một số",
      "text": "[Tuần 10 - Tiết 1] Vận dụng: 11, 12 trừ đi một số. Tính kết quả phép tính: 42 + 18 = ?",
      "options": [
        "A. 60",
        "B. 70",
        "C. 59",
        "D. 61"
      ],
      "answer": "A",
      "explanation": "42 + 18 = 60."
    },
    {
      "id": "ARCH-M-G2-W10-T-2",
      "exam": "ARCHIMEDES_MATH",
      "grade": 2,
      "round": "Tuần 10 - Tiết 2",
      "topic": "11, 12 trừ đi một số",
      "text": "[Tuần 10 - Tiết 2] Vận dụng: 11, 12 trừ đi một số. Tính kết quả phép tính: 42 + 18 = ?",
      "options": [
        "A. 60",
        "B. 70",
        "C. 59",
        "D. 61"
      ],
      "answer": "A",
      "explanation": "42 + 18 = 60."
    },
    {
      "id": "ARCH-M-G2-W10-T-3",
      "exam": "ARCHIMEDES_MATH",
      "grade": 2,
      "round": "Tuần 10 - Tiết 3",
      "topic": "11, 12 trừ đi một số",
      "text": "[Tuần 10 - Tiết 3] Vận dụng: 11, 12 trừ đi một số. Tính kết quả phép tính: 42 + 18 = ?",
      "options": [
        "A. 60",
        "B. 70",
        "C. 59",
        "D. 61"
      ],
      "answer": "A",
      "explanation": "42 + 18 = 60."
    },
    {
      "id": "ARCH-M-G2-W10-PKT-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 2,
      "round": "Tuần 10 - Phiếu cuối tuần",
      "topic": "11, 12 trừ đi một số",
      "text": "[Phiếu cuối tuần 10] Chủ đề: 11, 12 trừ đi một số. Tìm x biết: x - 15 = 30",
      "options": [
        "A. 45",
        "B. 43",
        "C. 47",
        "D. 30"
      ],
      "answer": "A",
      "explanation": "Muốn tìm số bị trừ ta lấy hiệu cộng với số trừ: x = 30 + 15 = 45."
    },
    {
      "id": "ARCH-M-G2-W10-TTK-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 2,
      "round": "Tuần 10 - Bài tập tham khảo",
      "topic": "11, 12 trừ đi một số",
      "text": "[Toán tư duy Olympic Archimedes Tuần 10] Người ta trồng các cây cách đều nhau 3m trên một đoạn đường thẳng dài 60m. Hỏi trồng được bao nhiêu cây (ở cả hai đầu đường đều có cây)?",
      "options": [
        "A. 21 cây",
        "B. 20 cây",
        "C. 22 cây",
        "D. 23 cây"
      ],
      "answer": "A",
      "explanation": "Số khoảng cách là: 60 : 3 = 20 (khoảng cách).\nVì trồng cây ở cả 2 đầu đường nên số cây là: 20 + 1 = 21 cây."
    },
    {
      "id": "ARCH-M-G2-W11-T-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 2,
      "round": "Tuần 11 - Tiết 1",
      "topic": "13, 14, 15, 16, 17, 18 trừ đi một số",
      "text": "[Tuần 11 - Tiết 1] Vận dụng: 13, 14, 15, 16, 17, 18 trừ đi một số. Tính kết quả phép tính: 45 + 18 = ?",
      "options": [
        "A. 63",
        "B. 73",
        "C. 62",
        "D. 64"
      ],
      "answer": "A",
      "explanation": "45 + 18 = 63."
    },
    {
      "id": "ARCH-M-G2-W11-T-2",
      "exam": "ARCHIMEDES_MATH",
      "grade": 2,
      "round": "Tuần 11 - Tiết 2",
      "topic": "13, 14, 15, 16, 17, 18 trừ đi một số",
      "text": "[Tuần 11 - Tiết 2] Vận dụng: 13, 14, 15, 16, 17, 18 trừ đi một số. Tính kết quả phép tính: 45 + 18 = ?",
      "options": [
        "A. 63",
        "B. 73",
        "C. 62",
        "D. 64"
      ],
      "answer": "A",
      "explanation": "45 + 18 = 63."
    },
    {
      "id": "ARCH-M-G2-W11-T-3",
      "exam": "ARCHIMEDES_MATH",
      "grade": 2,
      "round": "Tuần 11 - Tiết 3",
      "topic": "13, 14, 15, 16, 17, 18 trừ đi một số",
      "text": "[Tuần 11 - Tiết 3] Vận dụng: 13, 14, 15, 16, 17, 18 trừ đi một số. Tính kết quả phép tính: 45 + 18 = ?",
      "options": [
        "A. 63",
        "B. 73",
        "C. 62",
        "D. 64"
      ],
      "answer": "A",
      "explanation": "45 + 18 = 63."
    },
    {
      "id": "ARCH-M-G2-W11-PKT-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 2,
      "round": "Tuần 11 - Phiếu cuối tuần",
      "topic": "13, 14, 15, 16, 17, 18 trừ đi một số",
      "text": "[Phiếu cuối tuần 11] Chủ đề: 13, 14, 15, 16, 17, 18 trừ đi một số. Tìm x biết: x - 15 = 32",
      "options": [
        "A. 47",
        "B. 45",
        "C. 49",
        "D. 32"
      ],
      "answer": "A",
      "explanation": "Muốn tìm số bị trừ ta lấy hiệu cộng với số trừ: x = 32 + 15 = 47."
    },
    {
      "id": "ARCH-M-G2-W11-TTK-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 2,
      "round": "Tuần 11 - Bài tập tham khảo",
      "topic": "13, 14, 15, 16, 17, 18 trừ đi một số",
      "text": "[Toán tư duy Olympic Archimedes Tuần 11] Người ta trồng các cây cách đều nhau 3m trên một đoạn đường thẳng dài 66m. Hỏi trồng được bao nhiêu cây (ở cả hai đầu đường đều có cây)?",
      "options": [
        "A. 23 cây",
        "B. 22 cây",
        "C. 24 cây",
        "D. 25 cây"
      ],
      "answer": "A",
      "explanation": "Số khoảng cách là: 66 : 3 = 22 (khoảng cách).\nVì trồng cây ở cả 2 đầu đường nên số cây là: 22 + 1 = 23 cây."
    },
    {
      "id": "ARCH-M-G2-W12-T-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 2,
      "round": "Tuần 12 - Tiết 1",
      "topic": "Bảng trừ có nhớ trong phạm vi 20",
      "text": "[Tuần 12 - Tiết 1] Vận dụng: Bảng trừ có nhớ trong phạm vi 20. Tính kết quả phép tính: 48 + 18 = ?",
      "options": [
        "A. 66",
        "B. 76",
        "C. 65",
        "D. 67"
      ],
      "answer": "A",
      "explanation": "48 + 18 = 66."
    },
    {
      "id": "ARCH-M-G2-W12-T-2",
      "exam": "ARCHIMEDES_MATH",
      "grade": 2,
      "round": "Tuần 12 - Tiết 2",
      "topic": "Bảng trừ có nhớ trong phạm vi 20",
      "text": "[Tuần 12 - Tiết 2] Vận dụng: Bảng trừ có nhớ trong phạm vi 20. Tính kết quả phép tính: 48 + 18 = ?",
      "options": [
        "A. 66",
        "B. 76",
        "C. 65",
        "D. 67"
      ],
      "answer": "A",
      "explanation": "48 + 18 = 66."
    },
    {
      "id": "ARCH-M-G2-W12-T-3",
      "exam": "ARCHIMEDES_MATH",
      "grade": 2,
      "round": "Tuần 12 - Tiết 3",
      "topic": "Bảng trừ có nhớ trong phạm vi 20",
      "text": "[Tuần 12 - Tiết 3] Vận dụng: Bảng trừ có nhớ trong phạm vi 20. Tính kết quả phép tính: 48 + 18 = ?",
      "options": [
        "A. 66",
        "B. 76",
        "C. 65",
        "D. 67"
      ],
      "answer": "A",
      "explanation": "48 + 18 = 66."
    },
    {
      "id": "ARCH-M-G2-W12-PKT-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 2,
      "round": "Tuần 12 - Phiếu cuối tuần",
      "topic": "Bảng trừ có nhớ trong phạm vi 20",
      "text": "[Phiếu cuối tuần 12] Chủ đề: Bảng trừ có nhớ trong phạm vi 20. Tìm x biết: x - 15 = 34",
      "options": [
        "A. 49",
        "B. 47",
        "C. 51",
        "D. 34"
      ],
      "answer": "A",
      "explanation": "Muốn tìm số bị trừ ta lấy hiệu cộng với số trừ: x = 34 + 15 = 49."
    },
    {
      "id": "ARCH-M-G2-W12-TTK-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 2,
      "round": "Tuần 12 - Bài tập tham khảo",
      "topic": "Bảng trừ có nhớ trong phạm vi 20",
      "text": "[Toán tư duy Olympic Archimedes Tuần 12] Người ta trồng các cây cách đều nhau 3m trên một đoạn đường thẳng dài 72m. Hỏi trồng được bao nhiêu cây (ở cả hai đầu đường đều có cây)?",
      "options": [
        "A. 25 cây",
        "B. 24 cây",
        "C. 26 cây",
        "D. 27 cây"
      ],
      "answer": "A",
      "explanation": "Số khoảng cách là: 72 : 3 = 24 (khoảng cách).\nVì trồng cây ở cả 2 đầu đường nên số cây là: 24 + 1 = 25 cây."
    },
    {
      "id": "ARCH-M-G2-W13-T-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 2,
      "round": "Tuần 13 - Tiết 1",
      "topic": "Bài toán nhiều hơn, ít hơn một số đơn vị",
      "text": "[Tuần 13 - Tiết 1] Vận dụng: Bài toán nhiều hơn, ít hơn một số đơn vị. Tính kết quả phép tính: 51 + 18 = ?",
      "options": [
        "A. 69",
        "B. 79",
        "C. 68",
        "D. 70"
      ],
      "answer": "A",
      "explanation": "51 + 18 = 69."
    },
    {
      "id": "ARCH-M-G2-W13-T-2",
      "exam": "ARCHIMEDES_MATH",
      "grade": 2,
      "round": "Tuần 13 - Tiết 2",
      "topic": "Bài toán nhiều hơn, ít hơn một số đơn vị",
      "text": "[Tuần 13 - Tiết 2] Vận dụng: Bài toán nhiều hơn, ít hơn một số đơn vị. Tính kết quả phép tính: 51 + 18 = ?",
      "options": [
        "A. 69",
        "B. 79",
        "C. 68",
        "D. 70"
      ],
      "answer": "A",
      "explanation": "51 + 18 = 69."
    },
    {
      "id": "ARCH-M-G2-W13-T-3",
      "exam": "ARCHIMEDES_MATH",
      "grade": 2,
      "round": "Tuần 13 - Tiết 3",
      "topic": "Bài toán nhiều hơn, ít hơn một số đơn vị",
      "text": "[Tuần 13 - Tiết 3] Vận dụng: Bài toán nhiều hơn, ít hơn một số đơn vị. Tính kết quả phép tính: 51 + 18 = ?",
      "options": [
        "A. 69",
        "B. 79",
        "C. 68",
        "D. 70"
      ],
      "answer": "A",
      "explanation": "51 + 18 = 69."
    },
    {
      "id": "ARCH-M-G2-W13-PKT-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 2,
      "round": "Tuần 13 - Phiếu cuối tuần",
      "topic": "Bài toán nhiều hơn, ít hơn một số đơn vị",
      "text": "[Phiếu cuối tuần 13] Chủ đề: Bài toán nhiều hơn, ít hơn một số đơn vị. Tìm x biết: x - 15 = 36",
      "options": [
        "A. 51",
        "B. 49",
        "C. 53",
        "D. 36"
      ],
      "answer": "A",
      "explanation": "Muốn tìm số bị trừ ta lấy hiệu cộng với số trừ: x = 36 + 15 = 51."
    },
    {
      "id": "ARCH-M-G2-W13-TTK-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 2,
      "round": "Tuần 13 - Bài tập tham khảo",
      "topic": "Bài toán nhiều hơn, ít hơn một số đơn vị",
      "text": "[Toán tư duy Olympic Archimedes Tuần 13] Người ta trồng các cây cách đều nhau 3m trên một đoạn đường thẳng dài 78m. Hỏi trồng được bao nhiêu cây (ở cả hai đầu đường đều có cây)?",
      "options": [
        "A. 27 cây",
        "B. 26 cây",
        "C. 28 cây",
        "D. 29 cây"
      ],
      "answer": "A",
      "explanation": "Số khoảng cách là: 78 : 3 = 26 (khoảng cách).\nVì trồng cây ở cả 2 đầu đường nên số cây là: 26 + 1 = 27 cây."
    },
    {
      "id": "ARCH-M-G2-W14-T-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 2,
      "round": "Tuần 14 - Tiết 1",
      "topic": "Ki-lô-gam (kg), cân thăng bằng",
      "text": "[Tuần 14 - Tiết 1] Vận dụng: Ki-lô-gam (kg), cân thăng bằng. Tính kết quả phép tính: 54 + 18 = ?",
      "options": [
        "A. 72",
        "B. 82",
        "C. 71",
        "D. 73"
      ],
      "answer": "A",
      "explanation": "54 + 18 = 72."
    },
    {
      "id": "ARCH-M-G2-W14-T-2",
      "exam": "ARCHIMEDES_MATH",
      "grade": 2,
      "round": "Tuần 14 - Tiết 2",
      "topic": "Ki-lô-gam (kg), cân thăng bằng",
      "text": "[Tuần 14 - Tiết 2] Vận dụng: Ki-lô-gam (kg), cân thăng bằng. Tính kết quả phép tính: 54 + 18 = ?",
      "options": [
        "A. 72",
        "B. 82",
        "C. 71",
        "D. 73"
      ],
      "answer": "A",
      "explanation": "54 + 18 = 72."
    },
    {
      "id": "ARCH-M-G2-W14-T-3",
      "exam": "ARCHIMEDES_MATH",
      "grade": 2,
      "round": "Tuần 14 - Tiết 3",
      "topic": "Ki-lô-gam (kg), cân thăng bằng",
      "text": "[Tuần 14 - Tiết 3] Vận dụng: Ki-lô-gam (kg), cân thăng bằng. Tính kết quả phép tính: 54 + 18 = ?",
      "options": [
        "A. 72",
        "B. 82",
        "C. 71",
        "D. 73"
      ],
      "answer": "A",
      "explanation": "54 + 18 = 72."
    },
    {
      "id": "ARCH-M-G2-W14-PKT-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 2,
      "round": "Tuần 14 - Phiếu cuối tuần",
      "topic": "Ki-lô-gam (kg), cân thăng bằng",
      "text": "[Phiếu cuối tuần 14] Chủ đề: Ki-lô-gam (kg), cân thăng bằng. Tìm x biết: x - 15 = 38",
      "options": [
        "A. 53",
        "B. 51",
        "C. 55",
        "D. 38"
      ],
      "answer": "A",
      "explanation": "Muốn tìm số bị trừ ta lấy hiệu cộng với số trừ: x = 38 + 15 = 53."
    },
    {
      "id": "ARCH-M-G2-W14-TTK-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 2,
      "round": "Tuần 14 - Bài tập tham khảo",
      "topic": "Ki-lô-gam (kg), cân thăng bằng",
      "text": "[Toán tư duy Olympic Archimedes Tuần 14] Người ta trồng các cây cách đều nhau 3m trên một đoạn đường thẳng dài 84m. Hỏi trồng được bao nhiêu cây (ở cả hai đầu đường đều có cây)?",
      "options": [
        "A. 29 cây",
        "B. 28 cây",
        "C. 30 cây",
        "D. 31 cây"
      ],
      "answer": "A",
      "explanation": "Số khoảng cách là: 84 : 3 = 28 (khoảng cách).\nVì trồng cây ở cả 2 đầu đường nên số cây là: 28 + 1 = 29 cây."
    },
    {
      "id": "ARCH-M-G2-W15-T-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 2,
      "round": "Tuần 15 - Tiết 1",
      "topic": "Lít (l), dung tích",
      "text": "[Tuần 15 - Tiết 1] Vận dụng: Lít (l), dung tích. Tính kết quả phép tính: 57 + 18 = ?",
      "options": [
        "A. 75",
        "B. 85",
        "C. 74",
        "D. 76"
      ],
      "answer": "A",
      "explanation": "57 + 18 = 75."
    },
    {
      "id": "ARCH-M-G2-W15-T-2",
      "exam": "ARCHIMEDES_MATH",
      "grade": 2,
      "round": "Tuần 15 - Tiết 2",
      "topic": "Lít (l), dung tích",
      "text": "[Tuần 15 - Tiết 2] Vận dụng: Lít (l), dung tích. Tính kết quả phép tính: 57 + 18 = ?",
      "options": [
        "A. 75",
        "B. 85",
        "C. 74",
        "D. 76"
      ],
      "answer": "A",
      "explanation": "57 + 18 = 75."
    },
    {
      "id": "ARCH-M-G2-W15-T-3",
      "exam": "ARCHIMEDES_MATH",
      "grade": 2,
      "round": "Tuần 15 - Tiết 3",
      "topic": "Lít (l), dung tích",
      "text": "[Tuần 15 - Tiết 3] Vận dụng: Lít (l), dung tích. Tính kết quả phép tính: 57 + 18 = ?",
      "options": [
        "A. 75",
        "B. 85",
        "C. 74",
        "D. 76"
      ],
      "answer": "A",
      "explanation": "57 + 18 = 75."
    },
    {
      "id": "ARCH-M-G2-W15-PKT-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 2,
      "round": "Tuần 15 - Phiếu cuối tuần",
      "topic": "Lít (l), dung tích",
      "text": "[Phiếu cuối tuần 15] Chủ đề: Lít (l), dung tích. Tìm x biết: x - 15 = 40",
      "options": [
        "A. 55",
        "B. 53",
        "C. 57",
        "D. 40"
      ],
      "answer": "A",
      "explanation": "Muốn tìm số bị trừ ta lấy hiệu cộng với số trừ: x = 40 + 15 = 55."
    },
    {
      "id": "ARCH-M-G2-W15-TTK-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 2,
      "round": "Tuần 15 - Bài tập tham khảo",
      "topic": "Lít (l), dung tích",
      "text": "[Toán tư duy Olympic Archimedes Tuần 15] Người ta trồng các cây cách đều nhau 3m trên một đoạn đường thẳng dài 90m. Hỏi trồng được bao nhiêu cây (ở cả hai đầu đường đều có cây)?",
      "options": [
        "A. 31 cây",
        "B. 30 cây",
        "C. 32 cây",
        "D. 33 cây"
      ],
      "answer": "A",
      "explanation": "Số khoảng cách là: 90 : 3 = 30 (khoảng cách).\nVì trồng cây ở cả 2 đầu đường nên số cây là: 30 + 1 = 31 cây."
    },
    {
      "id": "ARCH-M-G2-W16-T-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 2,
      "round": "Tuần 16 - Tiết 1",
      "topic": "Đường gấp khúc và độ dài đường gấp khúc",
      "text": "[Tuần 16 - Tiết 1] Vận dụng: Đường gấp khúc và độ dài đường gấp khúc. Tính kết quả phép tính: 60 + 18 = ?",
      "options": [
        "A. 78",
        "B. 88",
        "C. 77",
        "D. 79"
      ],
      "answer": "A",
      "explanation": "60 + 18 = 78."
    },
    {
      "id": "ARCH-M-G2-W16-T-2",
      "exam": "ARCHIMEDES_MATH",
      "grade": 2,
      "round": "Tuần 16 - Tiết 2",
      "topic": "Đường gấp khúc và độ dài đường gấp khúc",
      "text": "[Tuần 16 - Tiết 2] Vận dụng: Đường gấp khúc và độ dài đường gấp khúc. Tính kết quả phép tính: 60 + 18 = ?",
      "options": [
        "A. 78",
        "B. 88",
        "C. 77",
        "D. 79"
      ],
      "answer": "A",
      "explanation": "60 + 18 = 78."
    },
    {
      "id": "ARCH-M-G2-W16-T-3",
      "exam": "ARCHIMEDES_MATH",
      "grade": 2,
      "round": "Tuần 16 - Tiết 3",
      "topic": "Đường gấp khúc và độ dài đường gấp khúc",
      "text": "[Tuần 16 - Tiết 3] Vận dụng: Đường gấp khúc và độ dài đường gấp khúc. Tính kết quả phép tính: 60 + 18 = ?",
      "options": [
        "A. 78",
        "B. 88",
        "C. 77",
        "D. 79"
      ],
      "answer": "A",
      "explanation": "60 + 18 = 78."
    },
    {
      "id": "ARCH-M-G2-W16-PKT-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 2,
      "round": "Tuần 16 - Phiếu cuối tuần",
      "topic": "Đường gấp khúc và độ dài đường gấp khúc",
      "text": "[Phiếu cuối tuần 16] Chủ đề: Đường gấp khúc và độ dài đường gấp khúc. Tìm x biết: x - 15 = 42",
      "options": [
        "A. 57",
        "B. 55",
        "C. 59",
        "D. 42"
      ],
      "answer": "A",
      "explanation": "Muốn tìm số bị trừ ta lấy hiệu cộng với số trừ: x = 42 + 15 = 57."
    },
    {
      "id": "ARCH-M-G2-W16-TTK-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 2,
      "round": "Tuần 16 - Bài tập tham khảo",
      "topic": "Đường gấp khúc và độ dài đường gấp khúc",
      "text": "[Toán tư duy Olympic Archimedes Tuần 16] Người ta trồng các cây cách đều nhau 3m trên một đoạn đường thẳng dài 96m. Hỏi trồng được bao nhiêu cây (ở cả hai đầu đường đều có cây)?",
      "options": [
        "A. 33 cây",
        "B. 32 cây",
        "C. 34 cây",
        "D. 35 cây"
      ],
      "answer": "A",
      "explanation": "Số khoảng cách là: 96 : 3 = 32 (khoảng cách).\nVì trồng cây ở cả 2 đầu đường nên số cây là: 32 + 1 = 33 cây."
    },
    {
      "id": "ARCH-M-G2-W17-T-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 2,
      "round": "Tuần 17 - Tiết 1",
      "topic": "Ba điểm thẳng hàng, hình tứ giác",
      "text": "[Tuần 17 - Tiết 1] Vận dụng: Ba điểm thẳng hàng, hình tứ giác. Tính kết quả phép tính: 63 + 18 = ?",
      "options": [
        "A. 81",
        "B. 91",
        "C. 80",
        "D. 82"
      ],
      "answer": "A",
      "explanation": "63 + 18 = 81."
    },
    {
      "id": "ARCH-M-G2-W17-T-2",
      "exam": "ARCHIMEDES_MATH",
      "grade": 2,
      "round": "Tuần 17 - Tiết 2",
      "topic": "Ba điểm thẳng hàng, hình tứ giác",
      "text": "[Tuần 17 - Tiết 2] Vận dụng: Ba điểm thẳng hàng, hình tứ giác. Tính kết quả phép tính: 63 + 18 = ?",
      "options": [
        "A. 81",
        "B. 91",
        "C. 80",
        "D. 82"
      ],
      "answer": "A",
      "explanation": "63 + 18 = 81."
    },
    {
      "id": "ARCH-M-G2-W17-T-3",
      "exam": "ARCHIMEDES_MATH",
      "grade": 2,
      "round": "Tuần 17 - Tiết 3",
      "topic": "Ba điểm thẳng hàng, hình tứ giác",
      "text": "[Tuần 17 - Tiết 3] Vận dụng: Ba điểm thẳng hàng, hình tứ giác. Tính kết quả phép tính: 63 + 18 = ?",
      "options": [
        "A. 81",
        "B. 91",
        "C. 80",
        "D. 82"
      ],
      "answer": "A",
      "explanation": "63 + 18 = 81."
    },
    {
      "id": "ARCH-M-G2-W17-PKT-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 2,
      "round": "Tuần 17 - Phiếu cuối tuần",
      "topic": "Ba điểm thẳng hàng, hình tứ giác",
      "text": "[Phiếu cuối tuần 17] Chủ đề: Ba điểm thẳng hàng, hình tứ giác. Tìm x biết: x - 15 = 44",
      "options": [
        "A. 59",
        "B. 57",
        "C. 61",
        "D. 44"
      ],
      "answer": "A",
      "explanation": "Muốn tìm số bị trừ ta lấy hiệu cộng với số trừ: x = 44 + 15 = 59."
    },
    {
      "id": "ARCH-M-G2-W17-TTK-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 2,
      "round": "Tuần 17 - Bài tập tham khảo",
      "topic": "Ba điểm thẳng hàng, hình tứ giác",
      "text": "[Toán tư duy Olympic Archimedes Tuần 17] Người ta trồng các cây cách đều nhau 3m trên một đoạn đường thẳng dài 102m. Hỏi trồng được bao nhiêu cây (ở cả hai đầu đường đều có cây)?",
      "options": [
        "A. 35 cây",
        "B. 34 cây",
        "C. 36 cây",
        "D. 37 cây"
      ],
      "answer": "A",
      "explanation": "Số khoảng cách là: 102 : 3 = 34 (khoảng cách).\nVì trồng cây ở cả 2 đầu đường nên số cây là: 34 + 1 = 35 cây."
    },
    {
      "id": "ARCH-M-G2-W18-T-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 2,
      "round": "Tuần 18 - Tiết 1",
      "topic": "Ôn tập và kiểm tra cuối học kì 1",
      "text": "[Tuần 18 - Tiết 1] Vận dụng: Ôn tập và kiểm tra cuối học kì 1. Tính kết quả phép tính: 66 + 18 = ?",
      "options": [
        "A. 84",
        "B. 94",
        "C. 83",
        "D. 85"
      ],
      "answer": "A",
      "explanation": "66 + 18 = 84."
    },
    {
      "id": "ARCH-M-G2-W18-T-2",
      "exam": "ARCHIMEDES_MATH",
      "grade": 2,
      "round": "Tuần 18 - Tiết 2",
      "topic": "Ôn tập và kiểm tra cuối học kì 1",
      "text": "[Tuần 18 - Tiết 2] Vận dụng: Ôn tập và kiểm tra cuối học kì 1. Tính kết quả phép tính: 66 + 18 = ?",
      "options": [
        "A. 84",
        "B. 94",
        "C. 83",
        "D. 85"
      ],
      "answer": "A",
      "explanation": "66 + 18 = 84."
    },
    {
      "id": "ARCH-M-G2-W18-T-3",
      "exam": "ARCHIMEDES_MATH",
      "grade": 2,
      "round": "Tuần 18 - Tiết 3",
      "topic": "Ôn tập và kiểm tra cuối học kì 1",
      "text": "[Tuần 18 - Tiết 3] Vận dụng: Ôn tập và kiểm tra cuối học kì 1. Tính kết quả phép tính: 66 + 18 = ?",
      "options": [
        "A. 84",
        "B. 94",
        "C. 83",
        "D. 85"
      ],
      "answer": "A",
      "explanation": "66 + 18 = 84."
    },
    {
      "id": "ARCH-M-G2-W18-PKT-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 2,
      "round": "Tuần 18 - Phiếu cuối tuần",
      "topic": "Ôn tập và kiểm tra cuối học kì 1",
      "text": "[Phiếu cuối tuần 18] Chủ đề: Ôn tập và kiểm tra cuối học kì 1. Tìm x biết: x - 15 = 46",
      "options": [
        "A. 61",
        "B. 59",
        "C. 63",
        "D. 46"
      ],
      "answer": "A",
      "explanation": "Muốn tìm số bị trừ ta lấy hiệu cộng với số trừ: x = 46 + 15 = 61."
    },
    {
      "id": "ARCH-M-G2-W18-TTK-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 2,
      "round": "Tuần 18 - Bài tập tham khảo",
      "topic": "Ôn tập và kiểm tra cuối học kì 1",
      "text": "[Toán tư duy Olympic Archimedes Tuần 18] Người ta trồng các cây cách đều nhau 3m trên một đoạn đường thẳng dài 108m. Hỏi trồng được bao nhiêu cây (ở cả hai đầu đường đều có cây)?",
      "options": [
        "A. 37 cây",
        "B. 36 cây",
        "C. 38 cây",
        "D. 39 cây"
      ],
      "answer": "A",
      "explanation": "Số khoảng cách là: 108 : 3 = 36 (khoảng cách).\nVì trồng cây ở cả 2 đầu đường nên số cây là: 36 + 1 = 37 cây."
    },
    {
      "id": "ARCH-M-G2-W19-T-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 2,
      "round": "Tuần 19 - Tiết 1",
      "topic": "Khái niệm phép nhân, thừa số, tích",
      "text": "[Tuần 19 - Tiết 1] Vận dụng: Khái niệm phép nhân, thừa số, tích. Tính kết quả phép tính: 69 + 18 = ?",
      "options": [
        "A. 87",
        "B. 97",
        "C. 86",
        "D. 88"
      ],
      "answer": "A",
      "explanation": "69 + 18 = 87."
    },
    {
      "id": "ARCH-M-G2-W19-T-2",
      "exam": "ARCHIMEDES_MATH",
      "grade": 2,
      "round": "Tuần 19 - Tiết 2",
      "topic": "Khái niệm phép nhân, thừa số, tích",
      "text": "[Tuần 19 - Tiết 2] Vận dụng: Khái niệm phép nhân, thừa số, tích. Tính kết quả phép tính: 69 + 18 = ?",
      "options": [
        "A. 87",
        "B. 97",
        "C. 86",
        "D. 88"
      ],
      "answer": "A",
      "explanation": "69 + 18 = 87."
    },
    {
      "id": "ARCH-M-G2-W19-T-3",
      "exam": "ARCHIMEDES_MATH",
      "grade": 2,
      "round": "Tuần 19 - Tiết 3",
      "topic": "Khái niệm phép nhân, thừa số, tích",
      "text": "[Tuần 19 - Tiết 3] Vận dụng: Khái niệm phép nhân, thừa số, tích. Tính kết quả phép tính: 69 + 18 = ?",
      "options": [
        "A. 87",
        "B. 97",
        "C. 86",
        "D. 88"
      ],
      "answer": "A",
      "explanation": "69 + 18 = 87."
    },
    {
      "id": "ARCH-M-G2-W19-PKT-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 2,
      "round": "Tuần 19 - Phiếu cuối tuần",
      "topic": "Khái niệm phép nhân, thừa số, tích",
      "text": "[Phiếu cuối tuần 19] Chủ đề: Khái niệm phép nhân, thừa số, tích. Tìm x biết: x - 15 = 48",
      "options": [
        "A. 63",
        "B. 61",
        "C. 65",
        "D. 48"
      ],
      "answer": "A",
      "explanation": "Muốn tìm số bị trừ ta lấy hiệu cộng với số trừ: x = 48 + 15 = 63."
    },
    {
      "id": "ARCH-M-G2-W19-TTK-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 2,
      "round": "Tuần 19 - Bài tập tham khảo",
      "topic": "Khái niệm phép nhân, thừa số, tích",
      "text": "[Toán tư duy Olympic Archimedes Tuần 19] Người ta trồng các cây cách đều nhau 3m trên một đoạn đường thẳng dài 114m. Hỏi trồng được bao nhiêu cây (ở cả hai đầu đường đều có cây)?",
      "options": [
        "A. 39 cây",
        "B. 38 cây",
        "C. 40 cây",
        "D. 41 cây"
      ],
      "answer": "A",
      "explanation": "Số khoảng cách là: 114 : 3 = 38 (khoảng cách).\nVì trồng cây ở cả 2 đầu đường nên số cây là: 38 + 1 = 39 cây."
    },
    {
      "id": "ARCH-M-G2-W20-T-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 2,
      "round": "Tuần 20 - Tiết 1",
      "topic": "Bảng nhân 2, bảng nhân 5",
      "text": "[Tuần 20 - Tiết 1] Vận dụng: Bảng nhân 2, bảng nhân 5. Tính kết quả phép tính: 72 + 18 = ?",
      "options": [
        "A. 90",
        "B. 100",
        "C. 89",
        "D. 91"
      ],
      "answer": "A",
      "explanation": "72 + 18 = 90."
    },
    {
      "id": "ARCH-M-G2-W20-T-2",
      "exam": "ARCHIMEDES_MATH",
      "grade": 2,
      "round": "Tuần 20 - Tiết 2",
      "topic": "Bảng nhân 2, bảng nhân 5",
      "text": "[Tuần 20 - Tiết 2] Vận dụng: Bảng nhân 2, bảng nhân 5. Tính kết quả phép tính: 72 + 18 = ?",
      "options": [
        "A. 90",
        "B. 100",
        "C. 89",
        "D. 91"
      ],
      "answer": "A",
      "explanation": "72 + 18 = 90."
    },
    {
      "id": "ARCH-M-G2-W20-T-3",
      "exam": "ARCHIMEDES_MATH",
      "grade": 2,
      "round": "Tuần 20 - Tiết 3",
      "topic": "Bảng nhân 2, bảng nhân 5",
      "text": "[Tuần 20 - Tiết 3] Vận dụng: Bảng nhân 2, bảng nhân 5. Tính kết quả phép tính: 72 + 18 = ?",
      "options": [
        "A. 90",
        "B. 100",
        "C. 89",
        "D. 91"
      ],
      "answer": "A",
      "explanation": "72 + 18 = 90."
    },
    {
      "id": "ARCH-M-G2-W20-PKT-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 2,
      "round": "Tuần 20 - Phiếu cuối tuần",
      "topic": "Bảng nhân 2, bảng nhân 5",
      "text": "[Phiếu cuối tuần 20] Chủ đề: Bảng nhân 2, bảng nhân 5. Tìm x biết: x - 15 = 50",
      "options": [
        "A. 65",
        "B. 63",
        "C. 67",
        "D. 50"
      ],
      "answer": "A",
      "explanation": "Muốn tìm số bị trừ ta lấy hiệu cộng với số trừ: x = 50 + 15 = 65."
    },
    {
      "id": "ARCH-M-G2-W20-TTK-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 2,
      "round": "Tuần 20 - Bài tập tham khảo",
      "topic": "Bảng nhân 2, bảng nhân 5",
      "text": "[Toán tư duy Olympic Archimedes Tuần 20] Người ta trồng các cây cách đều nhau 3m trên một đoạn đường thẳng dài 120m. Hỏi trồng được bao nhiêu cây (ở cả hai đầu đường đều có cây)?",
      "options": [
        "A. 41 cây",
        "B. 40 cây",
        "C. 42 cây",
        "D. 43 cây"
      ],
      "answer": "A",
      "explanation": "Số khoảng cách là: 120 : 3 = 40 (khoảng cách).\nVì trồng cây ở cả 2 đầu đường nên số cây là: 40 + 1 = 41 cây."
    },
    {
      "id": "ARCH-M-G2-W21-T-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 2,
      "round": "Tuần 21 - Tiết 1",
      "topic": "Phép chia, số bị chia, số chia, thương",
      "text": "[Tuần 21 - Tiết 1] Vận dụng: Phép chia, số bị chia, số chia, thương. Tính kết quả phép tính: 75 + 18 = ?",
      "options": [
        "A. 93",
        "B. 103",
        "C. 92",
        "D. 94"
      ],
      "answer": "A",
      "explanation": "75 + 18 = 93."
    },
    {
      "id": "ARCH-M-G2-W21-T-2",
      "exam": "ARCHIMEDES_MATH",
      "grade": 2,
      "round": "Tuần 21 - Tiết 2",
      "topic": "Phép chia, số bị chia, số chia, thương",
      "text": "[Tuần 21 - Tiết 2] Vận dụng: Phép chia, số bị chia, số chia, thương. Tính kết quả phép tính: 75 + 18 = ?",
      "options": [
        "A. 93",
        "B. 103",
        "C. 92",
        "D. 94"
      ],
      "answer": "A",
      "explanation": "75 + 18 = 93."
    },
    {
      "id": "ARCH-M-G2-W21-T-3",
      "exam": "ARCHIMEDES_MATH",
      "grade": 2,
      "round": "Tuần 21 - Tiết 3",
      "topic": "Phép chia, số bị chia, số chia, thương",
      "text": "[Tuần 21 - Tiết 3] Vận dụng: Phép chia, số bị chia, số chia, thương. Tính kết quả phép tính: 75 + 18 = ?",
      "options": [
        "A. 93",
        "B. 103",
        "C. 92",
        "D. 94"
      ],
      "answer": "A",
      "explanation": "75 + 18 = 93."
    },
    {
      "id": "ARCH-M-G2-W21-PKT-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 2,
      "round": "Tuần 21 - Phiếu cuối tuần",
      "topic": "Phép chia, số bị chia, số chia, thương",
      "text": "[Phiếu cuối tuần 21] Chủ đề: Phép chia, số bị chia, số chia, thương. Tìm x biết: x - 15 = 52",
      "options": [
        "A. 67",
        "B. 65",
        "C. 69",
        "D. 52"
      ],
      "answer": "A",
      "explanation": "Muốn tìm số bị trừ ta lấy hiệu cộng với số trừ: x = 52 + 15 = 67."
    },
    {
      "id": "ARCH-M-G2-W21-TTK-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 2,
      "round": "Tuần 21 - Bài tập tham khảo",
      "topic": "Phép chia, số bị chia, số chia, thương",
      "text": "[Toán tư duy Olympic Archimedes Tuần 21] Người ta trồng các cây cách đều nhau 3m trên một đoạn đường thẳng dài 126m. Hỏi trồng được bao nhiêu cây (ở cả hai đầu đường đều có cây)?",
      "options": [
        "A. 43 cây",
        "B. 42 cây",
        "C. 44 cây",
        "D. 45 cây"
      ],
      "answer": "A",
      "explanation": "Số khoảng cách là: 126 : 3 = 42 (khoảng cách).\nVì trồng cây ở cả 2 đầu đường nên số cây là: 42 + 1 = 43 cây."
    },
    {
      "id": "ARCH-M-G2-W22-T-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 2,
      "round": "Tuần 22 - Tiết 1",
      "topic": "Bảng chia 2, bảng chia 5",
      "text": "[Tuần 22 - Tiết 1] Vận dụng: Bảng chia 2, bảng chia 5. Tính kết quả phép tính: 78 + 18 = ?",
      "options": [
        "A. 96",
        "B. 106",
        "C. 95",
        "D. 97"
      ],
      "answer": "A",
      "explanation": "78 + 18 = 96."
    },
    {
      "id": "ARCH-M-G2-W22-T-2",
      "exam": "ARCHIMEDES_MATH",
      "grade": 2,
      "round": "Tuần 22 - Tiết 2",
      "topic": "Bảng chia 2, bảng chia 5",
      "text": "[Tuần 22 - Tiết 2] Vận dụng: Bảng chia 2, bảng chia 5. Tính kết quả phép tính: 78 + 18 = ?",
      "options": [
        "A. 96",
        "B. 106",
        "C. 95",
        "D. 97"
      ],
      "answer": "A",
      "explanation": "78 + 18 = 96."
    },
    {
      "id": "ARCH-M-G2-W22-T-3",
      "exam": "ARCHIMEDES_MATH",
      "grade": 2,
      "round": "Tuần 22 - Tiết 3",
      "topic": "Bảng chia 2, bảng chia 5",
      "text": "[Tuần 22 - Tiết 3] Vận dụng: Bảng chia 2, bảng chia 5. Tính kết quả phép tính: 78 + 18 = ?",
      "options": [
        "A. 96",
        "B. 106",
        "C. 95",
        "D. 97"
      ],
      "answer": "A",
      "explanation": "78 + 18 = 96."
    },
    {
      "id": "ARCH-M-G2-W22-PKT-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 2,
      "round": "Tuần 22 - Phiếu cuối tuần",
      "topic": "Bảng chia 2, bảng chia 5",
      "text": "[Phiếu cuối tuần 22] Chủ đề: Bảng chia 2, bảng chia 5. Tìm x biết: x - 15 = 54",
      "options": [
        "A. 69",
        "B. 67",
        "C. 71",
        "D. 54"
      ],
      "answer": "A",
      "explanation": "Muốn tìm số bị trừ ta lấy hiệu cộng với số trừ: x = 54 + 15 = 69."
    },
    {
      "id": "ARCH-M-G2-W22-TTK-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 2,
      "round": "Tuần 22 - Bài tập tham khảo",
      "topic": "Bảng chia 2, bảng chia 5",
      "text": "[Toán tư duy Olympic Archimedes Tuần 22] Người ta trồng các cây cách đều nhau 3m trên một đoạn đường thẳng dài 132m. Hỏi trồng được bao nhiêu cây (ở cả hai đầu đường đều có cây)?",
      "options": [
        "A. 45 cây",
        "B. 44 cây",
        "C. 46 cây",
        "D. 47 cây"
      ],
      "answer": "A",
      "explanation": "Số khoảng cách là: 132 : 3 = 44 (khoảng cách).\nVì trồng cây ở cả 2 đầu đường nên số cây là: 44 + 1 = 45 cây."
    },
    {
      "id": "ARCH-M-G2-W23-T-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 2,
      "round": "Tuần 23 - Tiết 1",
      "topic": "Một phần hai (1/2), một phần năm (1/5)",
      "text": "[Tuần 23 - Tiết 1] Vận dụng: Một phần hai (1/2), một phần năm (1/5). Tính kết quả phép tính: 81 + 18 = ?",
      "options": [
        "A. 99",
        "B. 109",
        "C. 98",
        "D. 100"
      ],
      "answer": "A",
      "explanation": "81 + 18 = 99."
    },
    {
      "id": "ARCH-M-G2-W23-T-2",
      "exam": "ARCHIMEDES_MATH",
      "grade": 2,
      "round": "Tuần 23 - Tiết 2",
      "topic": "Một phần hai (1/2), một phần năm (1/5)",
      "text": "[Tuần 23 - Tiết 2] Vận dụng: Một phần hai (1/2), một phần năm (1/5). Tính kết quả phép tính: 81 + 18 = ?",
      "options": [
        "A. 99",
        "B. 109",
        "C. 98",
        "D. 100"
      ],
      "answer": "A",
      "explanation": "81 + 18 = 99."
    },
    {
      "id": "ARCH-M-G2-W23-T-3",
      "exam": "ARCHIMEDES_MATH",
      "grade": 2,
      "round": "Tuần 23 - Tiết 3",
      "topic": "Một phần hai (1/2), một phần năm (1/5)",
      "text": "[Tuần 23 - Tiết 3] Vận dụng: Một phần hai (1/2), một phần năm (1/5). Tính kết quả phép tính: 81 + 18 = ?",
      "options": [
        "A. 99",
        "B. 109",
        "C. 98",
        "D. 100"
      ],
      "answer": "A",
      "explanation": "81 + 18 = 99."
    },
    {
      "id": "ARCH-M-G2-W23-PKT-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 2,
      "round": "Tuần 23 - Phiếu cuối tuần",
      "topic": "Một phần hai (1/2), một phần năm (1/5)",
      "text": "[Phiếu cuối tuần 23] Chủ đề: Một phần hai (1/2), một phần năm (1/5). Tìm x biết: x - 15 = 56",
      "options": [
        "A. 71",
        "B. 69",
        "C. 73",
        "D. 56"
      ],
      "answer": "A",
      "explanation": "Muốn tìm số bị trừ ta lấy hiệu cộng với số trừ: x = 56 + 15 = 71."
    },
    {
      "id": "ARCH-M-G2-W23-TTK-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 2,
      "round": "Tuần 23 - Bài tập tham khảo",
      "topic": "Một phần hai (1/2), một phần năm (1/5)",
      "text": "[Toán tư duy Olympic Archimedes Tuần 23] Người ta trồng các cây cách đều nhau 3m trên một đoạn đường thẳng dài 138m. Hỏi trồng được bao nhiêu cây (ở cả hai đầu đường đều có cây)?",
      "options": [
        "A. 47 cây",
        "B. 46 cây",
        "C. 48 cây",
        "D. 49 cây"
      ],
      "answer": "A",
      "explanation": "Số khoảng cách là: 138 : 3 = 46 (khoảng cách).\nVì trồng cây ở cả 2 đầu đường nên số cây là: 46 + 1 = 47 cây."
    },
    {
      "id": "ARCH-M-G2-W24-T-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 2,
      "round": "Tuần 24 - Tiết 1",
      "topic": "Khối trụ, khối cầu",
      "text": "[Tuần 24 - Tiết 1] Vận dụng: Khối trụ, khối cầu. Tính kết quả phép tính: 84 + 18 = ?",
      "options": [
        "A. 102",
        "B. 112",
        "C. 101",
        "D. 103"
      ],
      "answer": "A",
      "explanation": "84 + 18 = 102."
    },
    {
      "id": "ARCH-M-G2-W24-T-2",
      "exam": "ARCHIMEDES_MATH",
      "grade": 2,
      "round": "Tuần 24 - Tiết 2",
      "topic": "Khối trụ, khối cầu",
      "text": "[Tuần 24 - Tiết 2] Vận dụng: Khối trụ, khối cầu. Tính kết quả phép tính: 84 + 18 = ?",
      "options": [
        "A. 102",
        "B. 112",
        "C. 101",
        "D. 103"
      ],
      "answer": "A",
      "explanation": "84 + 18 = 102."
    },
    {
      "id": "ARCH-M-G2-W24-T-3",
      "exam": "ARCHIMEDES_MATH",
      "grade": 2,
      "round": "Tuần 24 - Tiết 3",
      "topic": "Khối trụ, khối cầu",
      "text": "[Tuần 24 - Tiết 3] Vận dụng: Khối trụ, khối cầu. Tính kết quả phép tính: 84 + 18 = ?",
      "options": [
        "A. 102",
        "B. 112",
        "C. 101",
        "D. 103"
      ],
      "answer": "A",
      "explanation": "84 + 18 = 102."
    },
    {
      "id": "ARCH-M-G2-W24-PKT-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 2,
      "round": "Tuần 24 - Phiếu cuối tuần",
      "topic": "Khối trụ, khối cầu",
      "text": "[Phiếu cuối tuần 24] Chủ đề: Khối trụ, khối cầu. Tìm x biết: x - 15 = 58",
      "options": [
        "A. 73",
        "B. 71",
        "C. 75",
        "D. 58"
      ],
      "answer": "A",
      "explanation": "Muốn tìm số bị trừ ta lấy hiệu cộng với số trừ: x = 58 + 15 = 73."
    },
    {
      "id": "ARCH-M-G2-W24-TTK-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 2,
      "round": "Tuần 24 - Bài tập tham khảo",
      "topic": "Khối trụ, khối cầu",
      "text": "[Toán tư duy Olympic Archimedes Tuần 24] Người ta trồng các cây cách đều nhau 3m trên một đoạn đường thẳng dài 144m. Hỏi trồng được bao nhiêu cây (ở cả hai đầu đường đều có cây)?",
      "options": [
        "A. 49 cây",
        "B. 48 cây",
        "C. 50 cây",
        "D. 51 cây"
      ],
      "answer": "A",
      "explanation": "Số khoảng cách là: 144 : 3 = 48 (khoảng cách).\nVì trồng cây ở cả 2 đầu đường nên số cây là: 48 + 1 = 49 cây."
    },
    {
      "id": "ARCH-M-G2-W25-T-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 2,
      "round": "Tuần 25 - Tiết 1",
      "topic": "Ngày - giờ, giờ - phút, xem đồng hồ",
      "text": "[Tuần 25 - Tiết 1] Vận dụng: Ngày - giờ, giờ - phút, xem đồng hồ. Tính kết quả phép tính: 87 + 18 = ?",
      "options": [
        "A. 105",
        "B. 115",
        "C. 104",
        "D. 106"
      ],
      "answer": "A",
      "explanation": "87 + 18 = 105."
    },
    {
      "id": "ARCH-M-G2-W25-T-2",
      "exam": "ARCHIMEDES_MATH",
      "grade": 2,
      "round": "Tuần 25 - Tiết 2",
      "topic": "Ngày - giờ, giờ - phút, xem đồng hồ",
      "text": "[Tuần 25 - Tiết 2] Vận dụng: Ngày - giờ, giờ - phút, xem đồng hồ. Tính kết quả phép tính: 87 + 18 = ?",
      "options": [
        "A. 105",
        "B. 115",
        "C. 104",
        "D. 106"
      ],
      "answer": "A",
      "explanation": "87 + 18 = 105."
    },
    {
      "id": "ARCH-M-G2-W25-T-3",
      "exam": "ARCHIMEDES_MATH",
      "grade": 2,
      "round": "Tuần 25 - Tiết 3",
      "topic": "Ngày - giờ, giờ - phút, xem đồng hồ",
      "text": "[Tuần 25 - Tiết 3] Vận dụng: Ngày - giờ, giờ - phút, xem đồng hồ. Tính kết quả phép tính: 87 + 18 = ?",
      "options": [
        "A. 105",
        "B. 115",
        "C. 104",
        "D. 106"
      ],
      "answer": "A",
      "explanation": "87 + 18 = 105."
    },
    {
      "id": "ARCH-M-G2-W25-PKT-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 2,
      "round": "Tuần 25 - Phiếu cuối tuần",
      "topic": "Ngày - giờ, giờ - phút, xem đồng hồ",
      "text": "[Phiếu cuối tuần 25] Chủ đề: Ngày - giờ, giờ - phút, xem đồng hồ. Tìm x biết: x - 15 = 60",
      "options": [
        "A. 75",
        "B. 73",
        "C. 77",
        "D. 60"
      ],
      "answer": "A",
      "explanation": "Muốn tìm số bị trừ ta lấy hiệu cộng với số trừ: x = 60 + 15 = 75."
    },
    {
      "id": "ARCH-M-G2-W25-TTK-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 2,
      "round": "Tuần 25 - Bài tập tham khảo",
      "topic": "Ngày - giờ, giờ - phút, xem đồng hồ",
      "text": "[Toán tư duy Olympic Archimedes Tuần 25] Người ta trồng các cây cách đều nhau 3m trên một đoạn đường thẳng dài 150m. Hỏi trồng được bao nhiêu cây (ở cả hai đầu đường đều có cây)?",
      "options": [
        "A. 51 cây",
        "B. 50 cây",
        "C. 52 cây",
        "D. 53 cây"
      ],
      "answer": "A",
      "explanation": "Số khoảng cách là: 150 : 3 = 50 (khoảng cách).\nVì trồng cây ở cả 2 đầu đường nên số cây là: 50 + 1 = 51 cây."
    },
    {
      "id": "ARCH-M-G2-W26-T-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 2,
      "round": "Tuần 26 - Tiết 1",
      "topic": "Ôn tập giữa học kì 2",
      "text": "[Tuần 26 - Tiết 1] Vận dụng: Ôn tập giữa học kì 2. Tính kết quả phép tính: 90 + 18 = ?",
      "options": [
        "A. 108",
        "B. 118",
        "C. 107",
        "D. 109"
      ],
      "answer": "A",
      "explanation": "90 + 18 = 108."
    },
    {
      "id": "ARCH-M-G2-W26-T-2",
      "exam": "ARCHIMEDES_MATH",
      "grade": 2,
      "round": "Tuần 26 - Tiết 2",
      "topic": "Ôn tập giữa học kì 2",
      "text": "[Tuần 26 - Tiết 2] Vận dụng: Ôn tập giữa học kì 2. Tính kết quả phép tính: 90 + 18 = ?",
      "options": [
        "A. 108",
        "B. 118",
        "C. 107",
        "D. 109"
      ],
      "answer": "A",
      "explanation": "90 + 18 = 108."
    },
    {
      "id": "ARCH-M-G2-W26-T-3",
      "exam": "ARCHIMEDES_MATH",
      "grade": 2,
      "round": "Tuần 26 - Tiết 3",
      "topic": "Ôn tập giữa học kì 2",
      "text": "[Tuần 26 - Tiết 3] Vận dụng: Ôn tập giữa học kì 2. Tính kết quả phép tính: 90 + 18 = ?",
      "options": [
        "A. 108",
        "B. 118",
        "C. 107",
        "D. 109"
      ],
      "answer": "A",
      "explanation": "90 + 18 = 108."
    },
    {
      "id": "ARCH-M-G2-W26-PKT-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 2,
      "round": "Tuần 26 - Phiếu cuối tuần",
      "topic": "Ôn tập giữa học kì 2",
      "text": "[Phiếu cuối tuần 26] Chủ đề: Ôn tập giữa học kì 2. Tìm x biết: x - 15 = 62",
      "options": [
        "A. 77",
        "B. 75",
        "C. 79",
        "D. 62"
      ],
      "answer": "A",
      "explanation": "Muốn tìm số bị trừ ta lấy hiệu cộng với số trừ: x = 62 + 15 = 77."
    },
    {
      "id": "ARCH-M-G2-W26-TTK-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 2,
      "round": "Tuần 26 - Bài tập tham khảo",
      "topic": "Ôn tập giữa học kì 2",
      "text": "[Toán tư duy Olympic Archimedes Tuần 26] Người ta trồng các cây cách đều nhau 3m trên một đoạn đường thẳng dài 156m. Hỏi trồng được bao nhiêu cây (ở cả hai đầu đường đều có cây)?",
      "options": [
        "A. 53 cây",
        "B. 52 cây",
        "C. 54 cây",
        "D. 55 cây"
      ],
      "answer": "A",
      "explanation": "Số khoảng cách là: 156 : 3 = 52 (khoảng cách).\nVì trồng cây ở cả 2 đầu đường nên số cây là: 52 + 1 = 53 cây."
    },
    {
      "id": "ARCH-M-G2-W27-T-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 2,
      "round": "Tuần 27 - Tiết 1",
      "topic": "Các số trong phạm vi 1000",
      "text": "[Tuần 27 - Tiết 1] Vận dụng: Các số trong phạm vi 1000. Tính kết quả phép tính: 93 + 18 = ?",
      "options": [
        "A. 111",
        "B. 121",
        "C. 110",
        "D. 112"
      ],
      "answer": "A",
      "explanation": "93 + 18 = 111."
    },
    {
      "id": "ARCH-M-G2-W27-T-2",
      "exam": "ARCHIMEDES_MATH",
      "grade": 2,
      "round": "Tuần 27 - Tiết 2",
      "topic": "Các số trong phạm vi 1000",
      "text": "[Tuần 27 - Tiết 2] Vận dụng: Các số trong phạm vi 1000. Tính kết quả phép tính: 93 + 18 = ?",
      "options": [
        "A. 111",
        "B. 121",
        "C. 110",
        "D. 112"
      ],
      "answer": "A",
      "explanation": "93 + 18 = 111."
    },
    {
      "id": "ARCH-M-G2-W27-T-3",
      "exam": "ARCHIMEDES_MATH",
      "grade": 2,
      "round": "Tuần 27 - Tiết 3",
      "topic": "Các số trong phạm vi 1000",
      "text": "[Tuần 27 - Tiết 3] Vận dụng: Các số trong phạm vi 1000. Tính kết quả phép tính: 93 + 18 = ?",
      "options": [
        "A. 111",
        "B. 121",
        "C. 110",
        "D. 112"
      ],
      "answer": "A",
      "explanation": "93 + 18 = 111."
    },
    {
      "id": "ARCH-M-G2-W27-PKT-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 2,
      "round": "Tuần 27 - Phiếu cuối tuần",
      "topic": "Các số trong phạm vi 1000",
      "text": "[Phiếu cuối tuần 27] Chủ đề: Các số trong phạm vi 1000. Tìm x biết: x - 15 = 64",
      "options": [
        "A. 79",
        "B. 77",
        "C. 81",
        "D. 64"
      ],
      "answer": "A",
      "explanation": "Muốn tìm số bị trừ ta lấy hiệu cộng với số trừ: x = 64 + 15 = 79."
    },
    {
      "id": "ARCH-M-G2-W27-TTK-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 2,
      "round": "Tuần 27 - Bài tập tham khảo",
      "topic": "Các số trong phạm vi 1000",
      "text": "[Toán tư duy Olympic Archimedes Tuần 27] Người ta trồng các cây cách đều nhau 3m trên một đoạn đường thẳng dài 162m. Hỏi trồng được bao nhiêu cây (ở cả hai đầu đường đều có cây)?",
      "options": [
        "A. 55 cây",
        "B. 54 cây",
        "C. 56 cây",
        "D. 57 cây"
      ],
      "answer": "A",
      "explanation": "Số khoảng cách là: 162 : 3 = 54 (khoảng cách).\nVì trồng cây ở cả 2 đầu đường nên số cây là: 54 + 1 = 55 cây."
    },
    {
      "id": "ARCH-M-G2-W28-T-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 2,
      "round": "Tuần 28 - Tiết 1",
      "topic": "So sánh các số có ba chữ số",
      "text": "[Tuần 28 - Tiết 1] Vận dụng: So sánh các số có ba chữ số. Tính kết quả phép tính: 96 + 18 = ?",
      "options": [
        "A. 114",
        "B. 124",
        "C. 113",
        "D. 115"
      ],
      "answer": "A",
      "explanation": "96 + 18 = 114."
    },
    {
      "id": "ARCH-M-G2-W28-T-2",
      "exam": "ARCHIMEDES_MATH",
      "grade": 2,
      "round": "Tuần 28 - Tiết 2",
      "topic": "So sánh các số có ba chữ số",
      "text": "[Tuần 28 - Tiết 2] Vận dụng: So sánh các số có ba chữ số. Tính kết quả phép tính: 96 + 18 = ?",
      "options": [
        "A. 114",
        "B. 124",
        "C. 113",
        "D. 115"
      ],
      "answer": "A",
      "explanation": "96 + 18 = 114."
    },
    {
      "id": "ARCH-M-G2-W28-T-3",
      "exam": "ARCHIMEDES_MATH",
      "grade": 2,
      "round": "Tuần 28 - Tiết 3",
      "topic": "So sánh các số có ba chữ số",
      "text": "[Tuần 28 - Tiết 3] Vận dụng: So sánh các số có ba chữ số. Tính kết quả phép tính: 96 + 18 = ?",
      "options": [
        "A. 114",
        "B. 124",
        "C. 113",
        "D. 115"
      ],
      "answer": "A",
      "explanation": "96 + 18 = 114."
    },
    {
      "id": "ARCH-M-G2-W28-PKT-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 2,
      "round": "Tuần 28 - Phiếu cuối tuần",
      "topic": "So sánh các số có ba chữ số",
      "text": "[Phiếu cuối tuần 28] Chủ đề: So sánh các số có ba chữ số. Tìm x biết: x - 15 = 66",
      "options": [
        "A. 81",
        "B. 79",
        "C. 83",
        "D. 66"
      ],
      "answer": "A",
      "explanation": "Muốn tìm số bị trừ ta lấy hiệu cộng với số trừ: x = 66 + 15 = 81."
    },
    {
      "id": "ARCH-M-G2-W28-TTK-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 2,
      "round": "Tuần 28 - Bài tập tham khảo",
      "topic": "So sánh các số có ba chữ số",
      "text": "[Toán tư duy Olympic Archimedes Tuần 28] Người ta trồng các cây cách đều nhau 3m trên một đoạn đường thẳng dài 168m. Hỏi trồng được bao nhiêu cây (ở cả hai đầu đường đều có cây)?",
      "options": [
        "A. 57 cây",
        "B. 56 cây",
        "C. 58 cây",
        "D. 59 cây"
      ],
      "answer": "A",
      "explanation": "Số khoảng cách là: 168 : 3 = 56 (khoảng cách).\nVì trồng cây ở cả 2 đầu đường nên số cây là: 56 + 1 = 57 cây."
    },
    {
      "id": "ARCH-M-G2-W29-T-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 2,
      "round": "Tuần 29 - Tiết 1",
      "topic": "Mét (m), ki-lô-mét (km), mi-li-mét (mm)",
      "text": "[Tuần 29 - Tiết 1] Vận dụng: Mét (m), ki-lô-mét (km), mi-li-mét (mm). Tính kết quả phép tính: 99 + 18 = ?",
      "options": [
        "A. 117",
        "B. 127",
        "C. 116",
        "D. 118"
      ],
      "answer": "A",
      "explanation": "99 + 18 = 117."
    },
    {
      "id": "ARCH-M-G2-W29-T-2",
      "exam": "ARCHIMEDES_MATH",
      "grade": 2,
      "round": "Tuần 29 - Tiết 2",
      "topic": "Mét (m), ki-lô-mét (km), mi-li-mét (mm)",
      "text": "[Tuần 29 - Tiết 2] Vận dụng: Mét (m), ki-lô-mét (km), mi-li-mét (mm). Tính kết quả phép tính: 99 + 18 = ?",
      "options": [
        "A. 117",
        "B. 127",
        "C. 116",
        "D. 118"
      ],
      "answer": "A",
      "explanation": "99 + 18 = 117."
    },
    {
      "id": "ARCH-M-G2-W29-T-3",
      "exam": "ARCHIMEDES_MATH",
      "grade": 2,
      "round": "Tuần 29 - Tiết 3",
      "topic": "Mét (m), ki-lô-mét (km), mi-li-mét (mm)",
      "text": "[Tuần 29 - Tiết 3] Vận dụng: Mét (m), ki-lô-mét (km), mi-li-mét (mm). Tính kết quả phép tính: 99 + 18 = ?",
      "options": [
        "A. 117",
        "B. 127",
        "C. 116",
        "D. 118"
      ],
      "answer": "A",
      "explanation": "99 + 18 = 117."
    },
    {
      "id": "ARCH-M-G2-W29-PKT-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 2,
      "round": "Tuần 29 - Phiếu cuối tuần",
      "topic": "Mét (m), ki-lô-mét (km), mi-li-mét (mm)",
      "text": "[Phiếu cuối tuần 29] Chủ đề: Mét (m), ki-lô-mét (km), mi-li-mét (mm). Tìm x biết: x - 15 = 68",
      "options": [
        "A. 83",
        "B. 81",
        "C. 85",
        "D. 68"
      ],
      "answer": "A",
      "explanation": "Muốn tìm số bị trừ ta lấy hiệu cộng với số trừ: x = 68 + 15 = 83."
    },
    {
      "id": "ARCH-M-G2-W29-TTK-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 2,
      "round": "Tuần 29 - Bài tập tham khảo",
      "topic": "Mét (m), ki-lô-mét (km), mi-li-mét (mm)",
      "text": "[Toán tư duy Olympic Archimedes Tuần 29] Người ta trồng các cây cách đều nhau 3m trên một đoạn đường thẳng dài 174m. Hỏi trồng được bao nhiêu cây (ở cả hai đầu đường đều có cây)?",
      "options": [
        "A. 59 cây",
        "B. 58 cây",
        "C. 60 cây",
        "D. 61 cây"
      ],
      "answer": "A",
      "explanation": "Số khoảng cách là: 174 : 3 = 58 (khoảng cách).\nVì trồng cây ở cả 2 đầu đường nên số cây là: 58 + 1 = 59 cây."
    },
    {
      "id": "ARCH-M-G2-W30-T-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 2,
      "round": "Tuần 30 - Tiết 1",
      "topic": "Phép cộng không nhớ trong phạm vi 1000",
      "text": "[Tuần 30 - Tiết 1] Vận dụng: Phép cộng không nhớ trong phạm vi 1000. Tính kết quả phép tính: 102 + 18 = ?",
      "options": [
        "A. 120",
        "B. 130",
        "C. 119",
        "D. 121"
      ],
      "answer": "A",
      "explanation": "102 + 18 = 120."
    },
    {
      "id": "ARCH-M-G2-W30-T-2",
      "exam": "ARCHIMEDES_MATH",
      "grade": 2,
      "round": "Tuần 30 - Tiết 2",
      "topic": "Phép cộng không nhớ trong phạm vi 1000",
      "text": "[Tuần 30 - Tiết 2] Vận dụng: Phép cộng không nhớ trong phạm vi 1000. Tính kết quả phép tính: 102 + 18 = ?",
      "options": [
        "A. 120",
        "B. 130",
        "C. 119",
        "D. 121"
      ],
      "answer": "A",
      "explanation": "102 + 18 = 120."
    },
    {
      "id": "ARCH-M-G2-W30-T-3",
      "exam": "ARCHIMEDES_MATH",
      "grade": 2,
      "round": "Tuần 30 - Tiết 3",
      "topic": "Phép cộng không nhớ trong phạm vi 1000",
      "text": "[Tuần 30 - Tiết 3] Vận dụng: Phép cộng không nhớ trong phạm vi 1000. Tính kết quả phép tính: 102 + 18 = ?",
      "options": [
        "A. 120",
        "B. 130",
        "C. 119",
        "D. 121"
      ],
      "answer": "A",
      "explanation": "102 + 18 = 120."
    },
    {
      "id": "ARCH-M-G2-W30-PKT-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 2,
      "round": "Tuần 30 - Phiếu cuối tuần",
      "topic": "Phép cộng không nhớ trong phạm vi 1000",
      "text": "[Phiếu cuối tuần 30] Chủ đề: Phép cộng không nhớ trong phạm vi 1000. Tìm x biết: x - 15 = 70",
      "options": [
        "A. 85",
        "B. 83",
        "C. 87",
        "D. 70"
      ],
      "answer": "A",
      "explanation": "Muốn tìm số bị trừ ta lấy hiệu cộng với số trừ: x = 70 + 15 = 85."
    },
    {
      "id": "ARCH-M-G2-W30-TTK-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 2,
      "round": "Tuần 30 - Bài tập tham khảo",
      "topic": "Phép cộng không nhớ trong phạm vi 1000",
      "text": "[Toán tư duy Olympic Archimedes Tuần 30] Người ta trồng các cây cách đều nhau 3m trên một đoạn đường thẳng dài 180m. Hỏi trồng được bao nhiêu cây (ở cả hai đầu đường đều có cây)?",
      "options": [
        "A. 61 cây",
        "B. 60 cây",
        "C. 62 cây",
        "D. 63 cây"
      ],
      "answer": "A",
      "explanation": "Số khoảng cách là: 180 : 3 = 60 (khoảng cách).\nVì trồng cây ở cả 2 đầu đường nên số cây là: 60 + 1 = 61 cây."
    },
    {
      "id": "ARCH-M-G2-W31-T-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 2,
      "round": "Tuần 31 - Tiết 1",
      "topic": "Phép trừ không nhớ trong phạm vi 1000",
      "text": "[Tuần 31 - Tiết 1] Vận dụng: Phép trừ không nhớ trong phạm vi 1000. Tính kết quả phép tính: 105 + 18 = ?",
      "options": [
        "A. 123",
        "B. 133",
        "C. 122",
        "D. 124"
      ],
      "answer": "A",
      "explanation": "105 + 18 = 123."
    },
    {
      "id": "ARCH-M-G2-W31-T-2",
      "exam": "ARCHIMEDES_MATH",
      "grade": 2,
      "round": "Tuần 31 - Tiết 2",
      "topic": "Phép trừ không nhớ trong phạm vi 1000",
      "text": "[Tuần 31 - Tiết 2] Vận dụng: Phép trừ không nhớ trong phạm vi 1000. Tính kết quả phép tính: 105 + 18 = ?",
      "options": [
        "A. 123",
        "B. 133",
        "C. 122",
        "D. 124"
      ],
      "answer": "A",
      "explanation": "105 + 18 = 123."
    },
    {
      "id": "ARCH-M-G2-W31-T-3",
      "exam": "ARCHIMEDES_MATH",
      "grade": 2,
      "round": "Tuần 31 - Tiết 3",
      "topic": "Phép trừ không nhớ trong phạm vi 1000",
      "text": "[Tuần 31 - Tiết 3] Vận dụng: Phép trừ không nhớ trong phạm vi 1000. Tính kết quả phép tính: 105 + 18 = ?",
      "options": [
        "A. 123",
        "B. 133",
        "C. 122",
        "D. 124"
      ],
      "answer": "A",
      "explanation": "105 + 18 = 123."
    },
    {
      "id": "ARCH-M-G2-W31-PKT-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 2,
      "round": "Tuần 31 - Phiếu cuối tuần",
      "topic": "Phép trừ không nhớ trong phạm vi 1000",
      "text": "[Phiếu cuối tuần 31] Chủ đề: Phép trừ không nhớ trong phạm vi 1000. Tìm x biết: x - 15 = 72",
      "options": [
        "A. 87",
        "B. 85",
        "C. 89",
        "D. 72"
      ],
      "answer": "A",
      "explanation": "Muốn tìm số bị trừ ta lấy hiệu cộng với số trừ: x = 72 + 15 = 87."
    },
    {
      "id": "ARCH-M-G2-W31-TTK-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 2,
      "round": "Tuần 31 - Bài tập tham khảo",
      "topic": "Phép trừ không nhớ trong phạm vi 1000",
      "text": "[Toán tư duy Olympic Archimedes Tuần 31] Người ta trồng các cây cách đều nhau 3m trên một đoạn đường thẳng dài 186m. Hỏi trồng được bao nhiêu cây (ở cả hai đầu đường đều có cây)?",
      "options": [
        "A. 63 cây",
        "B. 62 cây",
        "C. 64 cây",
        "D. 65 cây"
      ],
      "answer": "A",
      "explanation": "Số khoảng cách là: 186 : 3 = 62 (khoảng cách).\nVì trồng cây ở cả 2 đầu đường nên số cây là: 62 + 1 = 63 cây."
    },
    {
      "id": "ARCH-M-G2-W32-T-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 2,
      "round": "Tuần 32 - Tiết 1",
      "topic": "Tiền Việt Nam (đồng), chi tiêu",
      "text": "[Tuần 32 - Tiết 1] Vận dụng: Tiền Việt Nam (đồng), chi tiêu. Tính kết quả phép tính: 108 + 18 = ?",
      "options": [
        "A. 126",
        "B. 136",
        "C. 125",
        "D. 127"
      ],
      "answer": "A",
      "explanation": "108 + 18 = 126."
    },
    {
      "id": "ARCH-M-G2-W32-T-2",
      "exam": "ARCHIMEDES_MATH",
      "grade": 2,
      "round": "Tuần 32 - Tiết 2",
      "topic": "Tiền Việt Nam (đồng), chi tiêu",
      "text": "[Tuần 32 - Tiết 2] Vận dụng: Tiền Việt Nam (đồng), chi tiêu. Tính kết quả phép tính: 108 + 18 = ?",
      "options": [
        "A. 126",
        "B. 136",
        "C. 125",
        "D. 127"
      ],
      "answer": "A",
      "explanation": "108 + 18 = 126."
    },
    {
      "id": "ARCH-M-G2-W32-T-3",
      "exam": "ARCHIMEDES_MATH",
      "grade": 2,
      "round": "Tuần 32 - Tiết 3",
      "topic": "Tiền Việt Nam (đồng), chi tiêu",
      "text": "[Tuần 32 - Tiết 3] Vận dụng: Tiền Việt Nam (đồng), chi tiêu. Tính kết quả phép tính: 108 + 18 = ?",
      "options": [
        "A. 126",
        "B. 136",
        "C. 125",
        "D. 127"
      ],
      "answer": "A",
      "explanation": "108 + 18 = 126."
    },
    {
      "id": "ARCH-M-G2-W32-PKT-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 2,
      "round": "Tuần 32 - Phiếu cuối tuần",
      "topic": "Tiền Việt Nam (đồng), chi tiêu",
      "text": "[Phiếu cuối tuần 32] Chủ đề: Tiền Việt Nam (đồng), chi tiêu. Tìm x biết: x - 15 = 74",
      "options": [
        "A. 89",
        "B. 87",
        "C. 91",
        "D. 74"
      ],
      "answer": "A",
      "explanation": "Muốn tìm số bị trừ ta lấy hiệu cộng với số trừ: x = 74 + 15 = 89."
    },
    {
      "id": "ARCH-M-G2-W32-TTK-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 2,
      "round": "Tuần 32 - Bài tập tham khảo",
      "topic": "Tiền Việt Nam (đồng), chi tiêu",
      "text": "[Toán tư duy Olympic Archimedes Tuần 32] Người ta trồng các cây cách đều nhau 3m trên một đoạn đường thẳng dài 192m. Hỏi trồng được bao nhiêu cây (ở cả hai đầu đường đều có cây)?",
      "options": [
        "A. 65 cây",
        "B. 64 cây",
        "C. 66 cây",
        "D. 67 cây"
      ],
      "answer": "A",
      "explanation": "Số khoảng cách là: 192 : 3 = 64 (khoảng cách).\nVì trồng cây ở cả 2 đầu đường nên số cây là: 64 + 1 = 65 cây."
    },
    {
      "id": "ARCH-M-G2-W33-T-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 2,
      "round": "Tuần 33 - Tiết 1",
      "topic": "Toán tư duy trồng cây, cắt khúc gỗ",
      "text": "[Tuần 33 - Tiết 1] Vận dụng: Toán tư duy trồng cây, cắt khúc gỗ. Tính kết quả phép tính: 111 + 18 = ?",
      "options": [
        "A. 129",
        "B. 139",
        "C. 128",
        "D. 130"
      ],
      "answer": "A",
      "explanation": "111 + 18 = 129."
    },
    {
      "id": "ARCH-M-G2-W33-T-2",
      "exam": "ARCHIMEDES_MATH",
      "grade": 2,
      "round": "Tuần 33 - Tiết 2",
      "topic": "Toán tư duy trồng cây, cắt khúc gỗ",
      "text": "[Tuần 33 - Tiết 2] Vận dụng: Toán tư duy trồng cây, cắt khúc gỗ. Tính kết quả phép tính: 111 + 18 = ?",
      "options": [
        "A. 129",
        "B. 139",
        "C. 128",
        "D. 130"
      ],
      "answer": "A",
      "explanation": "111 + 18 = 129."
    },
    {
      "id": "ARCH-M-G2-W33-T-3",
      "exam": "ARCHIMEDES_MATH",
      "grade": 2,
      "round": "Tuần 33 - Tiết 3",
      "topic": "Toán tư duy trồng cây, cắt khúc gỗ",
      "text": "[Tuần 33 - Tiết 3] Vận dụng: Toán tư duy trồng cây, cắt khúc gỗ. Tính kết quả phép tính: 111 + 18 = ?",
      "options": [
        "A. 129",
        "B. 139",
        "C. 128",
        "D. 130"
      ],
      "answer": "A",
      "explanation": "111 + 18 = 129."
    },
    {
      "id": "ARCH-M-G2-W33-PKT-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 2,
      "round": "Tuần 33 - Phiếu cuối tuần",
      "topic": "Toán tư duy trồng cây, cắt khúc gỗ",
      "text": "[Phiếu cuối tuần 33] Chủ đề: Toán tư duy trồng cây, cắt khúc gỗ. Tìm x biết: x - 15 = 76",
      "options": [
        "A. 91",
        "B. 89",
        "C. 93",
        "D. 76"
      ],
      "answer": "A",
      "explanation": "Muốn tìm số bị trừ ta lấy hiệu cộng với số trừ: x = 76 + 15 = 91."
    },
    {
      "id": "ARCH-M-G2-W33-TTK-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 2,
      "round": "Tuần 33 - Bài tập tham khảo",
      "topic": "Toán tư duy trồng cây, cắt khúc gỗ",
      "text": "[Toán tư duy Olympic Archimedes Tuần 33] Người ta trồng các cây cách đều nhau 3m trên một đoạn đường thẳng dài 198m. Hỏi trồng được bao nhiêu cây (ở cả hai đầu đường đều có cây)?",
      "options": [
        "A. 67 cây",
        "B. 66 cây",
        "C. 68 cây",
        "D. 69 cây"
      ],
      "answer": "A",
      "explanation": "Số khoảng cách là: 198 : 3 = 66 (khoảng cách).\nVì trồng cây ở cả 2 đầu đường nên số cây là: 66 + 1 = 67 cây."
    },
    {
      "id": "ARCH-M-G2-W34-T-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 2,
      "round": "Tuần 34 - Tiết 1",
      "topic": "Thu thập, phân loại, đếm số liệu",
      "text": "[Tuần 34 - Tiết 1] Vận dụng: Thu thập, phân loại, đếm số liệu. Tính kết quả phép tính: 114 + 18 = ?",
      "options": [
        "A. 132",
        "B. 142",
        "C. 131",
        "D. 133"
      ],
      "answer": "A",
      "explanation": "114 + 18 = 132."
    },
    {
      "id": "ARCH-M-G2-W34-T-2",
      "exam": "ARCHIMEDES_MATH",
      "grade": 2,
      "round": "Tuần 34 - Tiết 2",
      "topic": "Thu thập, phân loại, đếm số liệu",
      "text": "[Tuần 34 - Tiết 2] Vận dụng: Thu thập, phân loại, đếm số liệu. Tính kết quả phép tính: 114 + 18 = ?",
      "options": [
        "A. 132",
        "B. 142",
        "C. 131",
        "D. 133"
      ],
      "answer": "A",
      "explanation": "114 + 18 = 132."
    },
    {
      "id": "ARCH-M-G2-W34-T-3",
      "exam": "ARCHIMEDES_MATH",
      "grade": 2,
      "round": "Tuần 34 - Tiết 3",
      "topic": "Thu thập, phân loại, đếm số liệu",
      "text": "[Tuần 34 - Tiết 3] Vận dụng: Thu thập, phân loại, đếm số liệu. Tính kết quả phép tính: 114 + 18 = ?",
      "options": [
        "A. 132",
        "B. 142",
        "C. 131",
        "D. 133"
      ],
      "answer": "A",
      "explanation": "114 + 18 = 132."
    },
    {
      "id": "ARCH-M-G2-W34-PKT-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 2,
      "round": "Tuần 34 - Phiếu cuối tuần",
      "topic": "Thu thập, phân loại, đếm số liệu",
      "text": "[Phiếu cuối tuần 34] Chủ đề: Thu thập, phân loại, đếm số liệu. Tìm x biết: x - 15 = 78",
      "options": [
        "A. 93",
        "B. 91",
        "C. 95",
        "D. 78"
      ],
      "answer": "A",
      "explanation": "Muốn tìm số bị trừ ta lấy hiệu cộng với số trừ: x = 78 + 15 = 93."
    },
    {
      "id": "ARCH-M-G2-W34-TTK-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 2,
      "round": "Tuần 34 - Bài tập tham khảo",
      "topic": "Thu thập, phân loại, đếm số liệu",
      "text": "[Toán tư duy Olympic Archimedes Tuần 34] Người ta trồng các cây cách đều nhau 3m trên một đoạn đường thẳng dài 204m. Hỏi trồng được bao nhiêu cây (ở cả hai đầu đường đều có cây)?",
      "options": [
        "A. 69 cây",
        "B. 68 cây",
        "C. 70 cây",
        "D. 71 cây"
      ],
      "answer": "A",
      "explanation": "Số khoảng cách là: 204 : 3 = 68 (khoảng cách).\nVì trồng cây ở cả 2 đầu đường nên số cây là: 68 + 1 = 69 cây."
    },
    {
      "id": "ARCH-M-G2-W35-T-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 2,
      "round": "Tuần 35 - Tiết 1",
      "topic": "Ôn tập tổng kết cuối năm học",
      "text": "[Tuần 35 - Tiết 1] Vận dụng: Ôn tập tổng kết cuối năm học. Tính kết quả phép tính: 117 + 18 = ?",
      "options": [
        "A. 135",
        "B. 145",
        "C. 134",
        "D. 136"
      ],
      "answer": "A",
      "explanation": "117 + 18 = 135."
    },
    {
      "id": "ARCH-M-G2-W35-T-2",
      "exam": "ARCHIMEDES_MATH",
      "grade": 2,
      "round": "Tuần 35 - Tiết 2",
      "topic": "Ôn tập tổng kết cuối năm học",
      "text": "[Tuần 35 - Tiết 2] Vận dụng: Ôn tập tổng kết cuối năm học. Tính kết quả phép tính: 117 + 18 = ?",
      "options": [
        "A. 135",
        "B. 145",
        "C. 134",
        "D. 136"
      ],
      "answer": "A",
      "explanation": "117 + 18 = 135."
    },
    {
      "id": "ARCH-M-G2-W35-T-3",
      "exam": "ARCHIMEDES_MATH",
      "grade": 2,
      "round": "Tuần 35 - Tiết 3",
      "topic": "Ôn tập tổng kết cuối năm học",
      "text": "[Tuần 35 - Tiết 3] Vận dụng: Ôn tập tổng kết cuối năm học. Tính kết quả phép tính: 117 + 18 = ?",
      "options": [
        "A. 135",
        "B. 145",
        "C. 134",
        "D. 136"
      ],
      "answer": "A",
      "explanation": "117 + 18 = 135."
    },
    {
      "id": "ARCH-M-G2-W35-PKT-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 2,
      "round": "Tuần 35 - Phiếu cuối tuần",
      "topic": "Ôn tập tổng kết cuối năm học",
      "text": "[Phiếu cuối tuần 35] Chủ đề: Ôn tập tổng kết cuối năm học. Tìm x biết: x - 15 = 80",
      "options": [
        "A. 95",
        "B. 93",
        "C. 97",
        "D. 80"
      ],
      "answer": "A",
      "explanation": "Muốn tìm số bị trừ ta lấy hiệu cộng với số trừ: x = 80 + 15 = 95."
    },
    {
      "id": "ARCH-M-G2-W35-TTK-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 2,
      "round": "Tuần 35 - Bài tập tham khảo",
      "topic": "Ôn tập tổng kết cuối năm học",
      "text": "[Toán tư duy Olympic Archimedes Tuần 35] Người ta trồng các cây cách đều nhau 3m trên một đoạn đường thẳng dài 210m. Hỏi trồng được bao nhiêu cây (ở cả hai đầu đường đều có cây)?",
      "options": [
        "A. 71 cây",
        "B. 70 cây",
        "C. 72 cây",
        "D. 73 cây"
      ],
      "answer": "A",
      "explanation": "Số khoảng cách là: 210 : 3 = 70 (khoảng cách).\nVì trồng cây ở cả 2 đầu đường nên số cây là: 70 + 1 = 71 cây."
    }
  ],
  "grade3": [
    {
      "id": "ARCH-M-G3-W1-T1-01",
      "exam": "ARCHIMEDES_MATH",
      "grade": 3,
      "round": "Tuần 1 - Tiết 1",
      "topic": "Đọc viết số trong phạm vi 1000",
      "text": "Số gồm 6 trăm, 0 chục và 4 đơn vị viết là số nào?",
      "options": [
        "A. 640",
        "B. 604",
        "C. 406",
        "D. 64"
      ],
      "answer": "B",
      "explanation": "Số gồm 6 trăm, 0 chục và 4 đơn vị là số 604."
    },
    {
      "id": "ARCH-M-G3-W1-T1-02",
      "exam": "ARCHIMEDES_MATH",
      "grade": 3,
      "round": "Tuần 1 - Tiết 1",
      "topic": "Cấu tạo số",
      "text": "Chữ số 7 trong số 572 có giá trị là bao nhiêu?",
      "options": [
        "A. 7",
        "B. 70",
        "C. 700",
        "D. 72"
      ],
      "answer": "B",
      "explanation": "Chữ số 7 nằm ở hàng chục nên có giá trị là 70."
    },
    {
      "id": "ARCH-M-G3-W1-T1-03",
      "exam": "ARCHIMEDES_MATH",
      "grade": 3,
      "round": "Tuần 1 - Tiết 1",
      "topic": "So sánh số có ba chữ số",
      "text": "Tìm chữ số thích hợp điền vào ô trống: 458 < 4[ ? ]2 biết chữ số cần điền là số lẻ lớn nhất có một chữ số.",
      "options": [
        "A. 5",
        "B. 7",
        "C. 9",
        "D. 6"
      ],
      "answer": "C",
      "explanation": "Số lẻ lớn nhất có 1 chữ số là 9. Khi điền 9 ta được 458 < 492 (đúng)."
    },
    {
      "id": "ARCH-M-G3-W1-T1-04",
      "exam": "ARCHIMEDES_MATH",
      "grade": 3,
      "round": "Tuần 1 - Tiết 1",
      "topic": "Số tròn trăm liền trước",
      "text": "Số tròn trăm liền trước của số 850 là số nào?",
      "options": [
        "A. 800",
        "B. 900",
        "C. 840",
        "D. 700"
      ],
      "answer": "A",
      "explanation": "Số tròn trăm đứng trước 850 là 800."
    },
    {
      "id": "ARCH-M-G3-W1-T1-05",
      "exam": "ARCHIMEDES_MATH",
      "grade": 3,
      "round": "Tuần 1 - Tiết 1",
      "topic": "Sắp xếp số",
      "text": "Sắp xếp các số: 345, 543, 354, 453 theo thứ tự giảm dần:",
      "options": [
        "A. 543, 453, 354, 345",
        "B. 543, 354, 453, 345",
        "C. 345, 354, 453, 543",
        "D. 453, 543, 354, 345"
      ],
      "answer": "A",
      "explanation": "Thứ tự giảm dần từ lớn đến bé: 543 > 453 > 354 > 345."
    },
    {
      "id": "ARCH-M-G3-W1-T2-01",
      "exam": "ARCHIMEDES_MATH",
      "grade": 3,
      "round": "Tuần 1 - Tiết 2",
      "topic": "Cộng trừ số có 3 chữ số",
      "text": "Tính kết quả phép tính: 452 + 236 = ?",
      "options": [
        "A. 688",
        "B. 698",
        "C. 678",
        "D. 788"
      ],
      "answer": "A",
      "explanation": "452 + 236 = 688."
    },
    {
      "id": "ARCH-M-G3-W1-T2-02",
      "exam": "ARCHIMEDES_MATH",
      "grade": 3,
      "round": "Tuần 1 - Tiết 2",
      "topic": "Phép trừ số có 3 chữ số",
      "text": "Tính kết quả phép tính: 785 - 342 = ?",
      "options": [
        "A. 443",
        "B. 433",
        "C. 543",
        "D. 442"
      ],
      "answer": "A",
      "explanation": "785 - 342 = 443."
    },
    {
      "id": "ARCH-M-G3-W1-T2-03",
      "exam": "ARCHIMEDES_MATH",
      "grade": 3,
      "round": "Tuần 1 - Tiết 2",
      "topic": "Tìm thành phần chưa biết",
      "text": "Tìm x biết: x + 154 = 687",
      "options": [
        "A. 533",
        "B. 523",
        "C. 841",
        "D. 532"
      ],
      "answer": "A",
      "explanation": "x = 687 - 154 = 533."
    },
    {
      "id": "ARCH-M-G3-W1-T2-04",
      "exam": "ARCHIMEDES_MATH",
      "grade": 3,
      "round": "Tuần 1 - Tiết 2",
      "topic": "Giải toán có lời văn",
      "text": "Thư viện trường có 540 cuốn sách Toán và 320 cuốn sách Văn. Hỏi thư viện có tất cả bao nhiêu cuốn sách?",
      "options": [
        "A. 860 cuốn",
        "B. 850 cuốn",
        "C. 870 cuốn",
        "D. 760 cuốn"
      ],
      "answer": "A",
      "explanation": "Tổng số cuốn sách thư viện có là: 540 + 320 = 860 cuốn."
    },
    {
      "id": "ARCH-M-G3-W1-T2-05",
      "exam": "ARCHIMEDES_MATH",
      "grade": 3,
      "round": "Tuần 1 - Tiết 2",
      "topic": "Tính nhanh",
      "text": "Tính giá trị nhanh nhất: 234 + 185 + 66",
      "options": [
        "A. 485",
        "B. 475",
        "C. 495",
        "D. 500"
      ],
      "answer": "A",
      "explanation": "Nhóm (234 + 66) + 185 = 300 + 185 = 485."
    },
    {
      "id": "ARCH-M-G3-W1-PKT-01",
      "exam": "ARCHIMEDES_MATH",
      "grade": 3,
      "round": "Tuần 1 - Phiếu cuối tuần",
      "topic": "Độ dài đường gấp khúc",
      "text": "Một đường gấp khúc gồm 3 đoạn thẳng có độ dài lần lượt là 12cm, 18cm và 25cm. Tính độ dài đường gấp khúc đó.",
      "options": [
        "A. 55cm",
        "B. 54cm",
        "C. 65cm",
        "D. 45cm"
      ],
      "answer": "A",
      "explanation": "Độ dài đường gấp khúc là tổng độ dài các đoạn thẳng: 12 + 18 + 25 = 55cm."
    },
    {
      "id": "ARCH-M-G3-W1-PKT-02",
      "exam": "ARCHIMEDES_MATH",
      "grade": 3,
      "round": "Tuần 1 - Phiếu cuối tuần",
      "topic": "Chu vi hình tam giác",
      "text": "Một hình tam giác có độ dài ba cạnh lần lượt là 15cm, 20cm và 25cm. Chu vi của hình tam giác đó là:",
      "options": [
        "A. 60cm",
        "B. 50cm",
        "C. 55cm",
        "D. 70cm"
      ],
      "answer": "A",
      "explanation": "Chu vi hình tam giác = 15 + 20 + 25 = 60cm."
    },
    {
      "id": "ARCH-M-G3-W1-PKT-03",
      "exam": "ARCHIMEDES_MATH",
      "grade": 3,
      "round": "Tuần 1 - Phiếu cuối tuần",
      "topic": "Phép nhân cơ bản",
      "text": "Có 5 túi kẹo, mỗi túi đựng 6 cái kẹo. Hỏi có tất cả bao nhiêu cái kẹo?",
      "options": [
        "A. 30 cái",
        "B. 25 cái",
        "C. 35 cái",
        "D. 24 cái"
      ],
      "answer": "A",
      "explanation": "Tổng số cái kẹo là: 6 × 5 = 30 cái kẹo."
    },
    {
      "id": "ARCH-M-G3-W1-PKT-04",
      "exam": "ARCHIMEDES_MATH",
      "grade": 3,
      "round": "Tuần 1 - Phiếu cuối tuần",
      "topic": "Phép chia",
      "text": "Có 24 quyển vở chia đều cho 4 bạn. Mỗi bạn nhận được bao nhiêu quyển vở?",
      "options": [
        "A. 6 quyển",
        "B. 5 quyển",
        "C. 7 quyển",
        "D. 8 quyển"
      ],
      "answer": "A",
      "explanation": "Mỗi bạn nhận được số vở là: 24 : 4 = 6 quyển."
    },
    {
      "id": "ARCH-M-G3-W1-PKT-05",
      "exam": "ARCHIMEDES_MATH",
      "grade": 3,
      "round": "Tuần 1 - Phiếu cuối tuần",
      "topic": "Toán gấp lên nhiều lần",
      "text": "Đoạn thẳng AB dài 4cm, đoạn thẳng CD dài gấp 3 lần đoạn thẳng AB. Đoạn thẳng CD dài bao nhiêu xăng-ti-mét?",
      "options": [
        "A. 12cm",
        "B. 7cm",
        "C. 14cm",
        "D. 10cm"
      ],
      "answer": "A",
      "explanation": "Độ dài đoạn CD là: 4 × 3 = 12cm."
    },
    {
      "id": "ARCH-M-G3-W1-TTK-01",
      "exam": "ARCHIMEDES_MATH",
      "grade": 3,
      "round": "Tuần 1 - Bài tập tham khảo",
      "topic": "Toán tư duy chữ số",
      "text": "Để đánh số trang của một cuốn truyện tranh dày 25 trang (từ trang 1 đến trang 25), người ta phải dùng bao nhiêu chữ số?",
      "options": [
        "A. 41 chữ số",
        "B. 40 chữ số",
        "C. 42 chữ số",
        "D. 39 chữ số"
      ],
      "answer": "A",
      "explanation": "Từ trang 1 đến trang 9 có: 9 - 1 + 1 = 9 trang (mỗi trang 1 chữ số -> 9 chữ số). Từ trang 10 đến 25 có: 25 - 10 + 1 = 16 trang có 2 chữ số (16 × 2 = 32 chữ số). Tổng số chữ số cần dùng: 9 + 32 = 41 chữ số."
    },
    {
      "id": "ARCH-M-G3-W1-TTK-02",
      "exam": "ARCHIMEDES_MATH",
      "grade": 3,
      "round": "Tuần 1 - Bài tập tham khảo",
      "topic": "Đếm số đoạn thẳng",
      "text": "Trên một đường thẳng có 5 điểm phân biệt A, B, C, D, E. Hỏi có tất cả bao nhiêu đoạn thẳng được tạo thành?",
      "options": [
        "A. 10 đoạn",
        "B. 8 đoạn",
        "C. 12 đoạn",
        "D. 15 đoạn"
      ],
      "answer": "A",
      "explanation": "Số đoạn thẳng tạo thành từ n điểm là: n × (n - 1) : 2. Với n = 5: 5 × 4 : 2 = 10 đoạn thẳng."
    },
    {
      "id": "ARCH-M-G3-W1-TTK-03",
      "exam": "ARCHIMEDES_MATH",
      "grade": 3,
      "round": "Tuần 1 - Bài tập tham khảo",
      "topic": "Toán tư duy trồng cây quanh hồ",
      "text": "Xung quanh một hồ nước hình tròn dài 60m, người ta trồng cây cứ cách 5m trồng một cây. Hỏi trồng được tất cả bao nhiêu cây xung quanh hồ?",
      "options": [
        "A. 12 cây",
        "B. 11 cây",
        "C. 13 cây",
        "D. 10 cây"
      ],
      "answer": "A",
      "explanation": "Trên đường khép kín (vòng tròn), số cây bằng đúng số khoảng cách. Số cây = 60 : 5 = 12 cây."
    },
    {
      "id": "ARCH-M-G3-W1-TTK-04",
      "exam": "ARCHIMEDES_MATH",
      "grade": 3,
      "round": "Tuần 1 - Bài tập tham khảo",
      "topic": "Phép toán mới ký hiệu đặc biệt",
      "text": "Quy ước phép toán mới: a ⨂ b = (a × 2) + b. Tính giá trị của 4 ⨂ 5.",
      "options": [
        "A. 13",
        "B. 14",
        "C. 15",
        "D. 20"
      ],
      "answer": "A",
      "explanation": "Theo định nghĩa: 4 ⨂ 5 = (4 × 2) + 5 = 8 + 5 = 13."
    },
    {
      "id": "ARCH-M-G3-W1-TTK-05",
      "exam": "ARCHIMEDES_MATH",
      "grade": 3,
      "round": "Tuần 1 - Bài tập tham khảo",
      "topic": "Toán tư duy xếp hình",
      "text": "Một hình vuông lớn được ghép từ 9 hình vuông nhỏ bằng nhau cạnh 1cm. Chu vi của hình vuông lớn là bao nhiêu?",
      "options": [
        "A. 12cm",
        "B. 9cm",
        "C. 16cm",
        "D. 8cm"
      ],
      "answer": "A",
      "explanation": "Ghép 9 hình vuông nhỏ thành hình vuông lớn có 3 hàng, 3 cột. Cạnh hình vuông lớn là 3cm. Chu vi = 3 × 4 = 12cm."
    },
    {
      "id": "ARCH-M-G3-W1-T-3",
      "exam": "ARCHIMEDES_MATH",
      "grade": 3,
      "round": "Tuần 1 - Tiết 3",
      "topic": "Ôn tập các số và phép tính trong phạm vi 1000",
      "text": "[Tuần 1 - Tiết 3] Nội dung: Ôn tập các số và phép tính trong phạm vi 1000. Tìm x biết: x : 6 = 25",
      "options": [
        "A. 150",
        "B. 155",
        "C. 145",
        "D. 160"
      ],
      "answer": "A",
      "explanation": "x = 25 × 6 = 150."
    },
    {
      "id": "ARCH-M-G3-W2-T-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 3,
      "round": "Tuần 2 - Tiết 1",
      "topic": "Ôn tập bảng nhân, bảng chia 2, 3, 4, 5",
      "text": "[Tuần 2 - Tiết 1] Nội dung: Ôn tập bảng nhân, bảng chia 2, 3, 4, 5. Tìm x biết: x : 4 = 30",
      "options": [
        "A. 120",
        "B. 125",
        "C. 115",
        "D. 130"
      ],
      "answer": "A",
      "explanation": "x = 30 × 4 = 120."
    },
    {
      "id": "ARCH-M-G3-W2-T-2",
      "exam": "ARCHIMEDES_MATH",
      "grade": 3,
      "round": "Tuần 2 - Tiết 2",
      "topic": "Ôn tập bảng nhân, bảng chia 2, 3, 4, 5",
      "text": "[Tuần 2 - Tiết 2] Nội dung: Ôn tập bảng nhân, bảng chia 2, 3, 4, 5. Tìm x biết: x : 5 = 30",
      "options": [
        "A. 150",
        "B. 155",
        "C. 145",
        "D. 160"
      ],
      "answer": "A",
      "explanation": "x = 30 × 5 = 150."
    },
    {
      "id": "ARCH-M-G3-W2-T-3",
      "exam": "ARCHIMEDES_MATH",
      "grade": 3,
      "round": "Tuần 2 - Tiết 3",
      "topic": "Ôn tập bảng nhân, bảng chia 2, 3, 4, 5",
      "text": "[Tuần 2 - Tiết 3] Nội dung: Ôn tập bảng nhân, bảng chia 2, 3, 4, 5. Tìm x biết: x : 6 = 30",
      "options": [
        "A. 180",
        "B. 185",
        "C. 175",
        "D. 190"
      ],
      "answer": "A",
      "explanation": "x = 30 × 6 = 180."
    },
    {
      "id": "ARCH-M-G3-W2-PKT-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 3,
      "round": "Tuần 2 - Phiếu cuối tuần",
      "topic": "Ôn tập bảng nhân, bảng chia 2, 3, 4, 5",
      "text": "[Phiếu cuối tuần 2] Chủ đề: Ôn tập bảng nhân, bảng chia 2, 3, 4, 5. Một hình chữ nhật có chiều dài 120cm, chiều rộng bằng một nửa chiều dài. Chu vi hình chữ nhật đó là:",
      "options": [
        "A. 360cm",
        "B. 340cm",
        "C. 380cm",
        "D. 180cm"
      ],
      "answer": "A",
      "explanation": "Chiều rộng là: 120 : 2 = 60 cm.\nChu vi hình chữ nhật là: (120 + 60) × 2 = 360 cm."
    },
    {
      "id": "ARCH-M-G3-W2-TTK-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 3,
      "round": "Tuần 2 - Bài tập tham khảo",
      "topic": "Ôn tập bảng nhân, bảng chia 2, 3, 4, 5",
      "text": "[Toán Olympic Archimedes Tuần 2] Để đánh số trang một tập tài liệu từ trang 1 đến trang 34, người ta cần dùng bao nhiêu chữ số?",
      "options": [
        "A. 59 chữ số",
        "B. 57 chữ số",
        "C. 61 chữ số",
        "D. 58 chữ số"
      ],
      "answer": "A",
      "explanation": "Từ trang 1 đến trang 9 có 9 trang có 1 chữ số = 9 chữ số.\nTừ trang 10 đến trang 34 có 25 trang có 2 chữ số = 50 chữ số.\nTổng số chữ số cần dùng: 9 + 50 = 59 chữ số."
    },
    {
      "id": "ARCH-M-G3-W3-T-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 3,
      "round": "Tuần 3 - Tiết 1",
      "topic": "Tìm một trong các phần bằng nhau của một số",
      "text": "[Tuần 3 - Tiết 1] Nội dung: Tìm một trong các phần bằng nhau của một số. Tìm x biết: x : 4 = 35",
      "options": [
        "A. 140",
        "B. 145",
        "C. 135",
        "D. 150"
      ],
      "answer": "A",
      "explanation": "x = 35 × 4 = 140."
    },
    {
      "id": "ARCH-M-G3-W3-T-2",
      "exam": "ARCHIMEDES_MATH",
      "grade": 3,
      "round": "Tuần 3 - Tiết 2",
      "topic": "Tìm một trong các phần bằng nhau của một số",
      "text": "[Tuần 3 - Tiết 2] Nội dung: Tìm một trong các phần bằng nhau của một số. Tìm x biết: x : 5 = 35",
      "options": [
        "A. 175",
        "B. 180",
        "C. 170",
        "D. 185"
      ],
      "answer": "A",
      "explanation": "x = 35 × 5 = 175."
    },
    {
      "id": "ARCH-M-G3-W3-T-3",
      "exam": "ARCHIMEDES_MATH",
      "grade": 3,
      "round": "Tuần 3 - Tiết 3",
      "topic": "Tìm một trong các phần bằng nhau của một số",
      "text": "[Tuần 3 - Tiết 3] Nội dung: Tìm một trong các phần bằng nhau của một số. Tìm x biết: x : 6 = 35",
      "options": [
        "A. 210",
        "B. 215",
        "C. 205",
        "D. 220"
      ],
      "answer": "A",
      "explanation": "x = 35 × 6 = 210."
    },
    {
      "id": "ARCH-M-G3-W3-PKT-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 3,
      "round": "Tuần 3 - Phiếu cuối tuần",
      "topic": "Tìm một trong các phần bằng nhau của một số",
      "text": "[Phiếu cuối tuần 3] Chủ đề: Tìm một trong các phần bằng nhau của một số. Một hình chữ nhật có chiều dài 130cm, chiều rộng bằng một nửa chiều dài. Chu vi hình chữ nhật đó là:",
      "options": [
        "A. 390cm",
        "B. 370cm",
        "C. 410cm",
        "D. 195cm"
      ],
      "answer": "A",
      "explanation": "Chiều rộng là: 130 : 2 = 65 cm.\nChu vi hình chữ nhật là: (130 + 65) × 2 = 390 cm."
    },
    {
      "id": "ARCH-M-G3-W3-TTK-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 3,
      "round": "Tuần 3 - Bài tập tham khảo",
      "topic": "Tìm một trong các phần bằng nhau của một số",
      "text": "[Toán Olympic Archimedes Tuần 3] Để đánh số trang một tập tài liệu từ trang 1 đến trang 36, người ta cần dùng bao nhiêu chữ số?",
      "options": [
        "A. 63 chữ số",
        "B. 61 chữ số",
        "C. 65 chữ số",
        "D. 62 chữ số"
      ],
      "answer": "A",
      "explanation": "Từ trang 1 đến trang 9 có 9 trang có 1 chữ số = 9 chữ số.\nTừ trang 10 đến trang 36 có 27 trang có 2 chữ số = 54 chữ số.\nTổng số chữ số cần dùng: 9 + 54 = 63 chữ số."
    },
    {
      "id": "ARCH-M-G3-W4-T-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 3,
      "round": "Tuần 4 - Tiết 1",
      "topic": "Bảng nhân 6, bảng chia 6",
      "text": "[Tuần 4 - Tiết 1] Nội dung: Bảng nhân 6, bảng chia 6. Tìm x biết: x : 4 = 40",
      "options": [
        "A. 160",
        "B. 165",
        "C. 155",
        "D. 170"
      ],
      "answer": "A",
      "explanation": "x = 40 × 4 = 160."
    },
    {
      "id": "ARCH-M-G3-W4-T-2",
      "exam": "ARCHIMEDES_MATH",
      "grade": 3,
      "round": "Tuần 4 - Tiết 2",
      "topic": "Bảng nhân 6, bảng chia 6",
      "text": "[Tuần 4 - Tiết 2] Nội dung: Bảng nhân 6, bảng chia 6. Tìm x biết: x : 5 = 40",
      "options": [
        "A. 200",
        "B. 205",
        "C. 195",
        "D. 210"
      ],
      "answer": "A",
      "explanation": "x = 40 × 5 = 200."
    },
    {
      "id": "ARCH-M-G3-W4-T-3",
      "exam": "ARCHIMEDES_MATH",
      "grade": 3,
      "round": "Tuần 4 - Tiết 3",
      "topic": "Bảng nhân 6, bảng chia 6",
      "text": "[Tuần 4 - Tiết 3] Nội dung: Bảng nhân 6, bảng chia 6. Tìm x biết: x : 6 = 40",
      "options": [
        "A. 240",
        "B. 245",
        "C. 235",
        "D. 250"
      ],
      "answer": "A",
      "explanation": "x = 40 × 6 = 240."
    },
    {
      "id": "ARCH-M-G3-W4-PKT-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 3,
      "round": "Tuần 4 - Phiếu cuối tuần",
      "topic": "Bảng nhân 6, bảng chia 6",
      "text": "[Phiếu cuối tuần 4] Chủ đề: Bảng nhân 6, bảng chia 6. Một hình chữ nhật có chiều dài 140cm, chiều rộng bằng một nửa chiều dài. Chu vi hình chữ nhật đó là:",
      "options": [
        "A. 420cm",
        "B. 400cm",
        "C. 440cm",
        "D. 210cm"
      ],
      "answer": "A",
      "explanation": "Chiều rộng là: 140 : 2 = 70 cm.\nChu vi hình chữ nhật là: (140 + 70) × 2 = 420 cm."
    },
    {
      "id": "ARCH-M-G3-W4-TTK-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 3,
      "round": "Tuần 4 - Bài tập tham khảo",
      "topic": "Bảng nhân 6, bảng chia 6",
      "text": "[Toán Olympic Archimedes Tuần 4] Để đánh số trang một tập tài liệu từ trang 1 đến trang 38, người ta cần dùng bao nhiêu chữ số?",
      "options": [
        "A. 67 chữ số",
        "B. 65 chữ số",
        "C. 69 chữ số",
        "D. 66 chữ số"
      ],
      "answer": "A",
      "explanation": "Từ trang 1 đến trang 9 có 9 trang có 1 chữ số = 9 chữ số.\nTừ trang 10 đến trang 38 có 29 trang có 2 chữ số = 58 chữ số.\nTổng số chữ số cần dùng: 9 + 58 = 67 chữ số."
    },
    {
      "id": "ARCH-M-G3-W5-T-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 3,
      "round": "Tuần 5 - Tiết 1",
      "topic": "Bảng nhân 7, bảng chia 7",
      "text": "[Tuần 5 - Tiết 1] Nội dung: Bảng nhân 7, bảng chia 7. Tìm x biết: x : 4 = 45",
      "options": [
        "A. 180",
        "B. 185",
        "C. 175",
        "D. 190"
      ],
      "answer": "A",
      "explanation": "x = 45 × 4 = 180."
    },
    {
      "id": "ARCH-M-G3-W5-T-2",
      "exam": "ARCHIMEDES_MATH",
      "grade": 3,
      "round": "Tuần 5 - Tiết 2",
      "topic": "Bảng nhân 7, bảng chia 7",
      "text": "[Tuần 5 - Tiết 2] Nội dung: Bảng nhân 7, bảng chia 7. Tìm x biết: x : 5 = 45",
      "options": [
        "A. 225",
        "B. 230",
        "C. 220",
        "D. 235"
      ],
      "answer": "A",
      "explanation": "x = 45 × 5 = 225."
    },
    {
      "id": "ARCH-M-G3-W5-T-3",
      "exam": "ARCHIMEDES_MATH",
      "grade": 3,
      "round": "Tuần 5 - Tiết 3",
      "topic": "Bảng nhân 7, bảng chia 7",
      "text": "[Tuần 5 - Tiết 3] Nội dung: Bảng nhân 7, bảng chia 7. Tìm x biết: x : 6 = 45",
      "options": [
        "A. 270",
        "B. 275",
        "C. 265",
        "D. 280"
      ],
      "answer": "A",
      "explanation": "x = 45 × 6 = 270."
    },
    {
      "id": "ARCH-M-G3-W5-PKT-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 3,
      "round": "Tuần 5 - Phiếu cuối tuần",
      "topic": "Bảng nhân 7, bảng chia 7",
      "text": "[Phiếu cuối tuần 5] Chủ đề: Bảng nhân 7, bảng chia 7. Một hình chữ nhật có chiều dài 150cm, chiều rộng bằng một nửa chiều dài. Chu vi hình chữ nhật đó là:",
      "options": [
        "A. 450cm",
        "B. 430cm",
        "C. 470cm",
        "D. 225cm"
      ],
      "answer": "A",
      "explanation": "Chiều rộng là: 150 : 2 = 75 cm.\nChu vi hình chữ nhật là: (150 + 75) × 2 = 450 cm."
    },
    {
      "id": "ARCH-M-G3-W5-TTK-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 3,
      "round": "Tuần 5 - Bài tập tham khảo",
      "topic": "Bảng nhân 7, bảng chia 7",
      "text": "[Toán Olympic Archimedes Tuần 5] Để đánh số trang một tập tài liệu từ trang 1 đến trang 40, người ta cần dùng bao nhiêu chữ số?",
      "options": [
        "A. 71 chữ số",
        "B. 69 chữ số",
        "C. 73 chữ số",
        "D. 70 chữ số"
      ],
      "answer": "A",
      "explanation": "Từ trang 1 đến trang 9 có 9 trang có 1 chữ số = 9 chữ số.\nTừ trang 10 đến trang 40 có 31 trang có 2 chữ số = 62 chữ số.\nTổng số chữ số cần dùng: 9 + 62 = 71 chữ số."
    },
    {
      "id": "ARCH-M-G3-W6-T-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 3,
      "round": "Tuần 6 - Tiết 1",
      "topic": "Gấp một số lên nhiều lần, giảm đi nhiều lần",
      "text": "[Tuần 6 - Tiết 1] Nội dung: Gấp một số lên nhiều lần, giảm đi nhiều lần. Tìm x biết: x : 4 = 50",
      "options": [
        "A. 200",
        "B. 205",
        "C. 195",
        "D. 210"
      ],
      "answer": "A",
      "explanation": "x = 50 × 4 = 200."
    },
    {
      "id": "ARCH-M-G3-W6-T-2",
      "exam": "ARCHIMEDES_MATH",
      "grade": 3,
      "round": "Tuần 6 - Tiết 2",
      "topic": "Gấp một số lên nhiều lần, giảm đi nhiều lần",
      "text": "[Tuần 6 - Tiết 2] Nội dung: Gấp một số lên nhiều lần, giảm đi nhiều lần. Tìm x biết: x : 5 = 50",
      "options": [
        "A. 250",
        "B. 255",
        "C. 245",
        "D. 260"
      ],
      "answer": "A",
      "explanation": "x = 50 × 5 = 250."
    },
    {
      "id": "ARCH-M-G3-W6-T-3",
      "exam": "ARCHIMEDES_MATH",
      "grade": 3,
      "round": "Tuần 6 - Tiết 3",
      "topic": "Gấp một số lên nhiều lần, giảm đi nhiều lần",
      "text": "[Tuần 6 - Tiết 3] Nội dung: Gấp một số lên nhiều lần, giảm đi nhiều lần. Tìm x biết: x : 6 = 50",
      "options": [
        "A. 300",
        "B. 305",
        "C. 295",
        "D. 310"
      ],
      "answer": "A",
      "explanation": "x = 50 × 6 = 300."
    },
    {
      "id": "ARCH-M-G3-W6-PKT-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 3,
      "round": "Tuần 6 - Phiếu cuối tuần",
      "topic": "Gấp một số lên nhiều lần, giảm đi nhiều lần",
      "text": "[Phiếu cuối tuần 6] Chủ đề: Gấp một số lên nhiều lần, giảm đi nhiều lần. Một hình chữ nhật có chiều dài 160cm, chiều rộng bằng một nửa chiều dài. Chu vi hình chữ nhật đó là:",
      "options": [
        "A. 480cm",
        "B. 460cm",
        "C. 500cm",
        "D. 240cm"
      ],
      "answer": "A",
      "explanation": "Chiều rộng là: 160 : 2 = 80 cm.\nChu vi hình chữ nhật là: (160 + 80) × 2 = 480 cm."
    },
    {
      "id": "ARCH-M-G3-W6-TTK-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 3,
      "round": "Tuần 6 - Bài tập tham khảo",
      "topic": "Gấp một số lên nhiều lần, giảm đi nhiều lần",
      "text": "[Toán Olympic Archimedes Tuần 6] Để đánh số trang một tập tài liệu từ trang 1 đến trang 42, người ta cần dùng bao nhiêu chữ số?",
      "options": [
        "A. 75 chữ số",
        "B. 73 chữ số",
        "C. 77 chữ số",
        "D. 74 chữ số"
      ],
      "answer": "A",
      "explanation": "Từ trang 1 đến trang 9 có 9 trang có 1 chữ số = 9 chữ số.\nTừ trang 10 đến trang 42 có 33 trang có 2 chữ số = 66 chữ số.\nTổng số chữ số cần dùng: 9 + 66 = 75 chữ số."
    },
    {
      "id": "ARCH-M-G3-W7-T-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 3,
      "round": "Tuần 7 - Tiết 1",
      "topic": "Bảng nhân 8, bảng chia 8",
      "text": "[Tuần 7 - Tiết 1] Nội dung: Bảng nhân 8, bảng chia 8. Tìm x biết: x : 4 = 55",
      "options": [
        "A. 220",
        "B. 225",
        "C. 215",
        "D. 230"
      ],
      "answer": "A",
      "explanation": "x = 55 × 4 = 220."
    },
    {
      "id": "ARCH-M-G3-W7-T-2",
      "exam": "ARCHIMEDES_MATH",
      "grade": 3,
      "round": "Tuần 7 - Tiết 2",
      "topic": "Bảng nhân 8, bảng chia 8",
      "text": "[Tuần 7 - Tiết 2] Nội dung: Bảng nhân 8, bảng chia 8. Tìm x biết: x : 5 = 55",
      "options": [
        "A. 275",
        "B. 280",
        "C. 270",
        "D. 285"
      ],
      "answer": "A",
      "explanation": "x = 55 × 5 = 275."
    },
    {
      "id": "ARCH-M-G3-W7-T-3",
      "exam": "ARCHIMEDES_MATH",
      "grade": 3,
      "round": "Tuần 7 - Tiết 3",
      "topic": "Bảng nhân 8, bảng chia 8",
      "text": "[Tuần 7 - Tiết 3] Nội dung: Bảng nhân 8, bảng chia 8. Tìm x biết: x : 6 = 55",
      "options": [
        "A. 330",
        "B. 335",
        "C. 325",
        "D. 340"
      ],
      "answer": "A",
      "explanation": "x = 55 × 6 = 330."
    },
    {
      "id": "ARCH-M-G3-W7-PKT-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 3,
      "round": "Tuần 7 - Phiếu cuối tuần",
      "topic": "Bảng nhân 8, bảng chia 8",
      "text": "[Phiếu cuối tuần 7] Chủ đề: Bảng nhân 8, bảng chia 8. Một hình chữ nhật có chiều dài 170cm, chiều rộng bằng một nửa chiều dài. Chu vi hình chữ nhật đó là:",
      "options": [
        "A. 510cm",
        "B. 490cm",
        "C. 530cm",
        "D. 255cm"
      ],
      "answer": "A",
      "explanation": "Chiều rộng là: 170 : 2 = 85 cm.\nChu vi hình chữ nhật là: (170 + 85) × 2 = 510 cm."
    },
    {
      "id": "ARCH-M-G3-W7-TTK-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 3,
      "round": "Tuần 7 - Bài tập tham khảo",
      "topic": "Bảng nhân 8, bảng chia 8",
      "text": "[Toán Olympic Archimedes Tuần 7] Để đánh số trang một tập tài liệu từ trang 1 đến trang 44, người ta cần dùng bao nhiêu chữ số?",
      "options": [
        "A. 79 chữ số",
        "B. 77 chữ số",
        "C. 81 chữ số",
        "D. 78 chữ số"
      ],
      "answer": "A",
      "explanation": "Từ trang 1 đến trang 9 có 9 trang có 1 chữ số = 9 chữ số.\nTừ trang 10 đến trang 44 có 35 trang có 2 chữ số = 70 chữ số.\nTổng số chữ số cần dùng: 9 + 70 = 79 chữ số."
    },
    {
      "id": "ARCH-M-G3-W8-T-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 3,
      "round": "Tuần 8 - Tiết 1",
      "topic": "Bảng nhân 9, bảng chia 9",
      "text": "[Tuần 8 - Tiết 1] Nội dung: Bảng nhân 9, bảng chia 9. Tìm x biết: x : 4 = 60",
      "options": [
        "A. 240",
        "B. 245",
        "C. 235",
        "D. 250"
      ],
      "answer": "A",
      "explanation": "x = 60 × 4 = 240."
    },
    {
      "id": "ARCH-M-G3-W8-T-2",
      "exam": "ARCHIMEDES_MATH",
      "grade": 3,
      "round": "Tuần 8 - Tiết 2",
      "topic": "Bảng nhân 9, bảng chia 9",
      "text": "[Tuần 8 - Tiết 2] Nội dung: Bảng nhân 9, bảng chia 9. Tìm x biết: x : 5 = 60",
      "options": [
        "A. 300",
        "B. 305",
        "C. 295",
        "D. 310"
      ],
      "answer": "A",
      "explanation": "x = 60 × 5 = 300."
    },
    {
      "id": "ARCH-M-G3-W8-T-3",
      "exam": "ARCHIMEDES_MATH",
      "grade": 3,
      "round": "Tuần 8 - Tiết 3",
      "topic": "Bảng nhân 9, bảng chia 9",
      "text": "[Tuần 8 - Tiết 3] Nội dung: Bảng nhân 9, bảng chia 9. Tìm x biết: x : 6 = 60",
      "options": [
        "A. 360",
        "B. 365",
        "C. 355",
        "D. 370"
      ],
      "answer": "A",
      "explanation": "x = 60 × 6 = 360."
    },
    {
      "id": "ARCH-M-G3-W8-PKT-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 3,
      "round": "Tuần 8 - Phiếu cuối tuần",
      "topic": "Bảng nhân 9, bảng chia 9",
      "text": "[Phiếu cuối tuần 8] Chủ đề: Bảng nhân 9, bảng chia 9. Một hình chữ nhật có chiều dài 180cm, chiều rộng bằng một nửa chiều dài. Chu vi hình chữ nhật đó là:",
      "options": [
        "A. 540cm",
        "B. 520cm",
        "C. 560cm",
        "D. 270cm"
      ],
      "answer": "A",
      "explanation": "Chiều rộng là: 180 : 2 = 90 cm.\nChu vi hình chữ nhật là: (180 + 90) × 2 = 540 cm."
    },
    {
      "id": "ARCH-M-G3-W8-TTK-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 3,
      "round": "Tuần 8 - Bài tập tham khảo",
      "topic": "Bảng nhân 9, bảng chia 9",
      "text": "[Toán Olympic Archimedes Tuần 8] Để đánh số trang một tập tài liệu từ trang 1 đến trang 46, người ta cần dùng bao nhiêu chữ số?",
      "options": [
        "A. 83 chữ số",
        "B. 81 chữ số",
        "C. 85 chữ số",
        "D. 82 chữ số"
      ],
      "answer": "A",
      "explanation": "Từ trang 1 đến trang 9 có 9 trang có 1 chữ số = 9 chữ số.\nTừ trang 10 đến trang 46 có 37 trang có 2 chữ số = 74 chữ số.\nTổng số chữ số cần dùng: 9 + 74 = 83 chữ số."
    },
    {
      "id": "ARCH-M-G3-W9-T-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 3,
      "round": "Tuần 9 - Tiết 1",
      "topic": "Ôn tập giữa học kì 1",
      "text": "[Tuần 9 - Tiết 1] Nội dung: Ôn tập giữa học kì 1. Tìm x biết: x : 4 = 65",
      "options": [
        "A. 260",
        "B. 265",
        "C. 255",
        "D. 270"
      ],
      "answer": "A",
      "explanation": "x = 65 × 4 = 260."
    },
    {
      "id": "ARCH-M-G3-W9-T-2",
      "exam": "ARCHIMEDES_MATH",
      "grade": 3,
      "round": "Tuần 9 - Tiết 2",
      "topic": "Ôn tập giữa học kì 1",
      "text": "[Tuần 9 - Tiết 2] Nội dung: Ôn tập giữa học kì 1. Tìm x biết: x : 5 = 65",
      "options": [
        "A. 325",
        "B. 330",
        "C. 320",
        "D. 335"
      ],
      "answer": "A",
      "explanation": "x = 65 × 5 = 325."
    },
    {
      "id": "ARCH-M-G3-W9-T-3",
      "exam": "ARCHIMEDES_MATH",
      "grade": 3,
      "round": "Tuần 9 - Tiết 3",
      "topic": "Ôn tập giữa học kì 1",
      "text": "[Tuần 9 - Tiết 3] Nội dung: Ôn tập giữa học kì 1. Tìm x biết: x : 6 = 65",
      "options": [
        "A. 390",
        "B. 395",
        "C. 385",
        "D. 400"
      ],
      "answer": "A",
      "explanation": "x = 65 × 6 = 390."
    },
    {
      "id": "ARCH-M-G3-W9-PKT-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 3,
      "round": "Tuần 9 - Phiếu cuối tuần",
      "topic": "Ôn tập giữa học kì 1",
      "text": "[Phiếu cuối tuần 9] Chủ đề: Ôn tập giữa học kì 1. Một hình chữ nhật có chiều dài 190cm, chiều rộng bằng một nửa chiều dài. Chu vi hình chữ nhật đó là:",
      "options": [
        "A. 570cm",
        "B. 550cm",
        "C. 590cm",
        "D. 285cm"
      ],
      "answer": "A",
      "explanation": "Chiều rộng là: 190 : 2 = 95 cm.\nChu vi hình chữ nhật là: (190 + 95) × 2 = 570 cm."
    },
    {
      "id": "ARCH-M-G3-W9-TTK-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 3,
      "round": "Tuần 9 - Bài tập tham khảo",
      "topic": "Ôn tập giữa học kì 1",
      "text": "[Toán Olympic Archimedes Tuần 9] Để đánh số trang một tập tài liệu từ trang 1 đến trang 48, người ta cần dùng bao nhiêu chữ số?",
      "options": [
        "A. 87 chữ số",
        "B. 85 chữ số",
        "C. 89 chữ số",
        "D. 86 chữ số"
      ],
      "answer": "A",
      "explanation": "Từ trang 1 đến trang 9 có 9 trang có 1 chữ số = 9 chữ số.\nTừ trang 10 đến trang 48 có 39 trang có 2 chữ số = 78 chữ số.\nTổng số chữ số cần dùng: 9 + 78 = 87 chữ số."
    },
    {
      "id": "ARCH-M-G3-W10-T-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 3,
      "round": "Tuần 10 - Tiết 1",
      "topic": "Gam (g), cân đĩa",
      "text": "[Tuần 10 - Tiết 1] Nội dung: Gam (g), cân đĩa. Tìm x biết: x : 4 = 70",
      "options": [
        "A. 280",
        "B. 285",
        "C. 275",
        "D. 290"
      ],
      "answer": "A",
      "explanation": "x = 70 × 4 = 280."
    },
    {
      "id": "ARCH-M-G3-W10-T-2",
      "exam": "ARCHIMEDES_MATH",
      "grade": 3,
      "round": "Tuần 10 - Tiết 2",
      "topic": "Gam (g), cân đĩa",
      "text": "[Tuần 10 - Tiết 2] Nội dung: Gam (g), cân đĩa. Tìm x biết: x : 5 = 70",
      "options": [
        "A. 350",
        "B. 355",
        "C. 345",
        "D. 360"
      ],
      "answer": "A",
      "explanation": "x = 70 × 5 = 350."
    },
    {
      "id": "ARCH-M-G3-W10-T-3",
      "exam": "ARCHIMEDES_MATH",
      "grade": 3,
      "round": "Tuần 10 - Tiết 3",
      "topic": "Gam (g), cân đĩa",
      "text": "[Tuần 10 - Tiết 3] Nội dung: Gam (g), cân đĩa. Tìm x biết: x : 6 = 70",
      "options": [
        "A. 420",
        "B. 425",
        "C. 415",
        "D. 430"
      ],
      "answer": "A",
      "explanation": "x = 70 × 6 = 420."
    },
    {
      "id": "ARCH-M-G3-W10-PKT-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 3,
      "round": "Tuần 10 - Phiếu cuối tuần",
      "topic": "Gam (g), cân đĩa",
      "text": "[Phiếu cuối tuần 10] Chủ đề: Gam (g), cân đĩa. Một hình chữ nhật có chiều dài 200cm, chiều rộng bằng một nửa chiều dài. Chu vi hình chữ nhật đó là:",
      "options": [
        "A. 600cm",
        "B. 580cm",
        "C. 620cm",
        "D. 300cm"
      ],
      "answer": "A",
      "explanation": "Chiều rộng là: 200 : 2 = 100 cm.\nChu vi hình chữ nhật là: (200 + 100) × 2 = 600 cm."
    },
    {
      "id": "ARCH-M-G3-W10-TTK-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 3,
      "round": "Tuần 10 - Bài tập tham khảo",
      "topic": "Gam (g), cân đĩa",
      "text": "[Toán Olympic Archimedes Tuần 10] Để đánh số trang một tập tài liệu từ trang 1 đến trang 50, người ta cần dùng bao nhiêu chữ số?",
      "options": [
        "A. 91 chữ số",
        "B. 89 chữ số",
        "C. 93 chữ số",
        "D. 90 chữ số"
      ],
      "answer": "A",
      "explanation": "Từ trang 1 đến trang 9 có 9 trang có 1 chữ số = 9 chữ số.\nTừ trang 10 đến trang 50 có 41 trang có 2 chữ số = 82 chữ số.\nTổng số chữ số cần dùng: 9 + 82 = 91 chữ số."
    },
    {
      "id": "ARCH-M-G3-W11-T-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 3,
      "round": "Tuần 11 - Tiết 1",
      "topic": "Nhân số có hai chữ số với số có một chữ số",
      "text": "[Tuần 11 - Tiết 1] Nội dung: Nhân số có hai chữ số với số có một chữ số. Tìm x biết: x : 4 = 75",
      "options": [
        "A. 300",
        "B. 305",
        "C. 295",
        "D. 310"
      ],
      "answer": "A",
      "explanation": "x = 75 × 4 = 300."
    },
    {
      "id": "ARCH-M-G3-W11-T-2",
      "exam": "ARCHIMEDES_MATH",
      "grade": 3,
      "round": "Tuần 11 - Tiết 2",
      "topic": "Nhân số có hai chữ số với số có một chữ số",
      "text": "[Tuần 11 - Tiết 2] Nội dung: Nhân số có hai chữ số với số có một chữ số. Tìm x biết: x : 5 = 75",
      "options": [
        "A. 375",
        "B. 380",
        "C. 370",
        "D. 385"
      ],
      "answer": "A",
      "explanation": "x = 75 × 5 = 375."
    },
    {
      "id": "ARCH-M-G3-W11-T-3",
      "exam": "ARCHIMEDES_MATH",
      "grade": 3,
      "round": "Tuần 11 - Tiết 3",
      "topic": "Nhân số có hai chữ số với số có một chữ số",
      "text": "[Tuần 11 - Tiết 3] Nội dung: Nhân số có hai chữ số với số có một chữ số. Tìm x biết: x : 6 = 75",
      "options": [
        "A. 450",
        "B. 455",
        "C. 445",
        "D. 460"
      ],
      "answer": "A",
      "explanation": "x = 75 × 6 = 450."
    },
    {
      "id": "ARCH-M-G3-W11-PKT-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 3,
      "round": "Tuần 11 - Phiếu cuối tuần",
      "topic": "Nhân số có hai chữ số với số có một chữ số",
      "text": "[Phiếu cuối tuần 11] Chủ đề: Nhân số có hai chữ số với số có một chữ số. Một hình chữ nhật có chiều dài 210cm, chiều rộng bằng một nửa chiều dài. Chu vi hình chữ nhật đó là:",
      "options": [
        "A. 630cm",
        "B. 610cm",
        "C. 650cm",
        "D. 315cm"
      ],
      "answer": "A",
      "explanation": "Chiều rộng là: 210 : 2 = 105 cm.\nChu vi hình chữ nhật là: (210 + 105) × 2 = 630 cm."
    },
    {
      "id": "ARCH-M-G3-W11-TTK-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 3,
      "round": "Tuần 11 - Bài tập tham khảo",
      "topic": "Nhân số có hai chữ số với số có một chữ số",
      "text": "[Toán Olympic Archimedes Tuần 11] Để đánh số trang một tập tài liệu từ trang 1 đến trang 52, người ta cần dùng bao nhiêu chữ số?",
      "options": [
        "A. 95 chữ số",
        "B. 93 chữ số",
        "C. 97 chữ số",
        "D. 94 chữ số"
      ],
      "answer": "A",
      "explanation": "Từ trang 1 đến trang 9 có 9 trang có 1 chữ số = 9 chữ số.\nTừ trang 10 đến trang 52 có 43 trang có 2 chữ số = 86 chữ số.\nTổng số chữ số cần dùng: 9 + 86 = 95 chữ số."
    },
    {
      "id": "ARCH-M-G3-W12-T-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 3,
      "round": "Tuần 12 - Tiết 1",
      "topic": "Chia số có hai chữ số cho số có một chữ số",
      "text": "[Tuần 12 - Tiết 1] Nội dung: Chia số có hai chữ số cho số có một chữ số. Tìm x biết: x : 4 = 80",
      "options": [
        "A. 320",
        "B. 325",
        "C. 315",
        "D. 330"
      ],
      "answer": "A",
      "explanation": "x = 80 × 4 = 320."
    },
    {
      "id": "ARCH-M-G3-W12-T-2",
      "exam": "ARCHIMEDES_MATH",
      "grade": 3,
      "round": "Tuần 12 - Tiết 2",
      "topic": "Chia số có hai chữ số cho số có một chữ số",
      "text": "[Tuần 12 - Tiết 2] Nội dung: Chia số có hai chữ số cho số có một chữ số. Tìm x biết: x : 5 = 80",
      "options": [
        "A. 400",
        "B. 405",
        "C. 395",
        "D. 410"
      ],
      "answer": "A",
      "explanation": "x = 80 × 5 = 400."
    },
    {
      "id": "ARCH-M-G3-W12-T-3",
      "exam": "ARCHIMEDES_MATH",
      "grade": 3,
      "round": "Tuần 12 - Tiết 3",
      "topic": "Chia số có hai chữ số cho số có một chữ số",
      "text": "[Tuần 12 - Tiết 3] Nội dung: Chia số có hai chữ số cho số có một chữ số. Tìm x biết: x : 6 = 80",
      "options": [
        "A. 480",
        "B. 485",
        "C. 475",
        "D. 490"
      ],
      "answer": "A",
      "explanation": "x = 80 × 6 = 480."
    },
    {
      "id": "ARCH-M-G3-W12-PKT-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 3,
      "round": "Tuần 12 - Phiếu cuối tuần",
      "topic": "Chia số có hai chữ số cho số có một chữ số",
      "text": "[Phiếu cuối tuần 12] Chủ đề: Chia số có hai chữ số cho số có một chữ số. Một hình chữ nhật có chiều dài 220cm, chiều rộng bằng một nửa chiều dài. Chu vi hình chữ nhật đó là:",
      "options": [
        "A. 660cm",
        "B. 640cm",
        "C. 680cm",
        "D. 330cm"
      ],
      "answer": "A",
      "explanation": "Chiều rộng là: 220 : 2 = 110 cm.\nChu vi hình chữ nhật là: (220 + 110) × 2 = 660 cm."
    },
    {
      "id": "ARCH-M-G3-W12-TTK-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 3,
      "round": "Tuần 12 - Bài tập tham khảo",
      "topic": "Chia số có hai chữ số cho số có một chữ số",
      "text": "[Toán Olympic Archimedes Tuần 12] Để đánh số trang một tập tài liệu từ trang 1 đến trang 54, người ta cần dùng bao nhiêu chữ số?",
      "options": [
        "A. 99 chữ số",
        "B. 97 chữ số",
        "C. 101 chữ số",
        "D. 98 chữ số"
      ],
      "answer": "A",
      "explanation": "Từ trang 1 đến trang 9 có 9 trang có 1 chữ số = 9 chữ số.\nTừ trang 10 đến trang 54 có 45 trang có 2 chữ số = 90 chữ số.\nTổng số chữ số cần dùng: 9 + 90 = 99 chữ số."
    },
    {
      "id": "ARCH-M-G3-W13-T-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 3,
      "round": "Tuần 13 - Tiết 1",
      "topic": "Phép chia hết và phép chia có dư",
      "text": "[Tuần 13 - Tiết 1] Nội dung: Phép chia hết và phép chia có dư. Tìm x biết: x : 4 = 85",
      "options": [
        "A. 340",
        "B. 345",
        "C. 335",
        "D. 350"
      ],
      "answer": "A",
      "explanation": "x = 85 × 4 = 340."
    },
    {
      "id": "ARCH-M-G3-W13-T-2",
      "exam": "ARCHIMEDES_MATH",
      "grade": 3,
      "round": "Tuần 13 - Tiết 2",
      "topic": "Phép chia hết và phép chia có dư",
      "text": "[Tuần 13 - Tiết 2] Nội dung: Phép chia hết và phép chia có dư. Tìm x biết: x : 5 = 85",
      "options": [
        "A. 425",
        "B. 430",
        "C. 420",
        "D. 435"
      ],
      "answer": "A",
      "explanation": "x = 85 × 5 = 425."
    },
    {
      "id": "ARCH-M-G3-W13-T-3",
      "exam": "ARCHIMEDES_MATH",
      "grade": 3,
      "round": "Tuần 13 - Tiết 3",
      "topic": "Phép chia hết và phép chia có dư",
      "text": "[Tuần 13 - Tiết 3] Nội dung: Phép chia hết và phép chia có dư. Tìm x biết: x : 6 = 85",
      "options": [
        "A. 510",
        "B. 515",
        "C. 505",
        "D. 520"
      ],
      "answer": "A",
      "explanation": "x = 85 × 6 = 510."
    },
    {
      "id": "ARCH-M-G3-W13-PKT-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 3,
      "round": "Tuần 13 - Phiếu cuối tuần",
      "topic": "Phép chia hết và phép chia có dư",
      "text": "[Phiếu cuối tuần 13] Chủ đề: Phép chia hết và phép chia có dư. Một hình chữ nhật có chiều dài 230cm, chiều rộng bằng một nửa chiều dài. Chu vi hình chữ nhật đó là:",
      "options": [
        "A. 690cm",
        "B. 670cm",
        "C. 710cm",
        "D. 345cm"
      ],
      "answer": "A",
      "explanation": "Chiều rộng là: 230 : 2 = 115 cm.\nChu vi hình chữ nhật là: (230 + 115) × 2 = 690 cm."
    },
    {
      "id": "ARCH-M-G3-W13-TTK-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 3,
      "round": "Tuần 13 - Bài tập tham khảo",
      "topic": "Phép chia hết và phép chia có dư",
      "text": "[Toán Olympic Archimedes Tuần 13] Để đánh số trang một tập tài liệu từ trang 1 đến trang 56, người ta cần dùng bao nhiêu chữ số?",
      "options": [
        "A. 103 chữ số",
        "B. 101 chữ số",
        "C. 105 chữ số",
        "D. 102 chữ số"
      ],
      "answer": "A",
      "explanation": "Từ trang 1 đến trang 9 có 9 trang có 1 chữ số = 9 chữ số.\nTừ trang 10 đến trang 56 có 47 trang có 2 chữ số = 94 chữ số.\nTổng số chữ số cần dùng: 9 + 94 = 103 chữ số."
    },
    {
      "id": "ARCH-M-G3-W14-T-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 3,
      "round": "Tuần 14 - Tiết 1",
      "topic": "Bảng đơn vị đo độ dài, mi-li-lít (ml)",
      "text": "[Tuần 14 - Tiết 1] Nội dung: Bảng đơn vị đo độ dài, mi-li-lít (ml). Tìm x biết: x : 4 = 90",
      "options": [
        "A. 360",
        "B. 365",
        "C. 355",
        "D. 370"
      ],
      "answer": "A",
      "explanation": "x = 90 × 4 = 360."
    },
    {
      "id": "ARCH-M-G3-W14-T-2",
      "exam": "ARCHIMEDES_MATH",
      "grade": 3,
      "round": "Tuần 14 - Tiết 2",
      "topic": "Bảng đơn vị đo độ dài, mi-li-lít (ml)",
      "text": "[Tuần 14 - Tiết 2] Nội dung: Bảng đơn vị đo độ dài, mi-li-lít (ml). Tìm x biết: x : 5 = 90",
      "options": [
        "A. 450",
        "B. 455",
        "C. 445",
        "D. 460"
      ],
      "answer": "A",
      "explanation": "x = 90 × 5 = 450."
    },
    {
      "id": "ARCH-M-G3-W14-T-3",
      "exam": "ARCHIMEDES_MATH",
      "grade": 3,
      "round": "Tuần 14 - Tiết 3",
      "topic": "Bảng đơn vị đo độ dài, mi-li-lít (ml)",
      "text": "[Tuần 14 - Tiết 3] Nội dung: Bảng đơn vị đo độ dài, mi-li-lít (ml). Tìm x biết: x : 6 = 90",
      "options": [
        "A. 540",
        "B. 545",
        "C. 535",
        "D. 550"
      ],
      "answer": "A",
      "explanation": "x = 90 × 6 = 540."
    },
    {
      "id": "ARCH-M-G3-W14-PKT-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 3,
      "round": "Tuần 14 - Phiếu cuối tuần",
      "topic": "Bảng đơn vị đo độ dài, mi-li-lít (ml)",
      "text": "[Phiếu cuối tuần 14] Chủ đề: Bảng đơn vị đo độ dài, mi-li-lít (ml). Một hình chữ nhật có chiều dài 240cm, chiều rộng bằng một nửa chiều dài. Chu vi hình chữ nhật đó là:",
      "options": [
        "A. 720cm",
        "B. 700cm",
        "C. 740cm",
        "D. 360cm"
      ],
      "answer": "A",
      "explanation": "Chiều rộng là: 240 : 2 = 120 cm.\nChu vi hình chữ nhật là: (240 + 120) × 2 = 720 cm."
    },
    {
      "id": "ARCH-M-G3-W14-TTK-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 3,
      "round": "Tuần 14 - Bài tập tham khảo",
      "topic": "Bảng đơn vị đo độ dài, mi-li-lít (ml)",
      "text": "[Toán Olympic Archimedes Tuần 14] Để đánh số trang một tập tài liệu từ trang 1 đến trang 58, người ta cần dùng bao nhiêu chữ số?",
      "options": [
        "A. 107 chữ số",
        "B. 105 chữ số",
        "C. 109 chữ số",
        "D. 106 chữ số"
      ],
      "answer": "A",
      "explanation": "Từ trang 1 đến trang 9 có 9 trang có 1 chữ số = 9 chữ số.\nTừ trang 10 đến trang 58 có 49 trang có 2 chữ số = 98 chữ số.\nTổng số chữ số cần dùng: 9 + 98 = 107 chữ số."
    },
    {
      "id": "ARCH-M-G3-W15-T-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 3,
      "round": "Tuần 15 - Tiết 1",
      "topic": "Tính giá trị của biểu thức số",
      "text": "[Tuần 15 - Tiết 1] Nội dung: Tính giá trị của biểu thức số. Tìm x biết: x : 4 = 95",
      "options": [
        "A. 380",
        "B. 385",
        "C. 375",
        "D. 390"
      ],
      "answer": "A",
      "explanation": "x = 95 × 4 = 380."
    },
    {
      "id": "ARCH-M-G3-W15-T-2",
      "exam": "ARCHIMEDES_MATH",
      "grade": 3,
      "round": "Tuần 15 - Tiết 2",
      "topic": "Tính giá trị của biểu thức số",
      "text": "[Tuần 15 - Tiết 2] Nội dung: Tính giá trị của biểu thức số. Tìm x biết: x : 5 = 95",
      "options": [
        "A. 475",
        "B. 480",
        "C. 470",
        "D. 485"
      ],
      "answer": "A",
      "explanation": "x = 95 × 5 = 475."
    },
    {
      "id": "ARCH-M-G3-W15-T-3",
      "exam": "ARCHIMEDES_MATH",
      "grade": 3,
      "round": "Tuần 15 - Tiết 3",
      "topic": "Tính giá trị của biểu thức số",
      "text": "[Tuần 15 - Tiết 3] Nội dung: Tính giá trị của biểu thức số. Tìm x biết: x : 6 = 95",
      "options": [
        "A. 570",
        "B. 575",
        "C. 565",
        "D. 580"
      ],
      "answer": "A",
      "explanation": "x = 95 × 6 = 570."
    },
    {
      "id": "ARCH-M-G3-W15-PKT-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 3,
      "round": "Tuần 15 - Phiếu cuối tuần",
      "topic": "Tính giá trị của biểu thức số",
      "text": "[Phiếu cuối tuần 15] Chủ đề: Tính giá trị của biểu thức số. Một hình chữ nhật có chiều dài 250cm, chiều rộng bằng một nửa chiều dài. Chu vi hình chữ nhật đó là:",
      "options": [
        "A. 750cm",
        "B. 730cm",
        "C. 770cm",
        "D. 375cm"
      ],
      "answer": "A",
      "explanation": "Chiều rộng là: 250 : 2 = 125 cm.\nChu vi hình chữ nhật là: (250 + 125) × 2 = 750 cm."
    },
    {
      "id": "ARCH-M-G3-W15-TTK-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 3,
      "round": "Tuần 15 - Bài tập tham khảo",
      "topic": "Tính giá trị của biểu thức số",
      "text": "[Toán Olympic Archimedes Tuần 15] Để đánh số trang một tập tài liệu từ trang 1 đến trang 60, người ta cần dùng bao nhiêu chữ số?",
      "options": [
        "A. 111 chữ số",
        "B. 109 chữ số",
        "C. 113 chữ số",
        "D. 110 chữ số"
      ],
      "answer": "A",
      "explanation": "Từ trang 1 đến trang 9 có 9 trang có 1 chữ số = 9 chữ số.\nTừ trang 10 đến trang 60 có 51 trang có 2 chữ số = 102 chữ số.\nTổng số chữ số cần dùng: 9 + 102 = 111 chữ số."
    },
    {
      "id": "ARCH-M-G3-W16-T-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 3,
      "round": "Tuần 16 - Tiết 1",
      "topic": "Biểu thức có dấu ngoặc",
      "text": "[Tuần 16 - Tiết 1] Nội dung: Biểu thức có dấu ngoặc. Tìm x biết: x : 4 = 100",
      "options": [
        "A. 400",
        "B. 405",
        "C. 395",
        "D. 410"
      ],
      "answer": "A",
      "explanation": "x = 100 × 4 = 400."
    },
    {
      "id": "ARCH-M-G3-W16-T-2",
      "exam": "ARCHIMEDES_MATH",
      "grade": 3,
      "round": "Tuần 16 - Tiết 2",
      "topic": "Biểu thức có dấu ngoặc",
      "text": "[Tuần 16 - Tiết 2] Nội dung: Biểu thức có dấu ngoặc. Tìm x biết: x : 5 = 100",
      "options": [
        "A. 500",
        "B. 505",
        "C. 495",
        "D. 510"
      ],
      "answer": "A",
      "explanation": "x = 100 × 5 = 500."
    },
    {
      "id": "ARCH-M-G3-W16-T-3",
      "exam": "ARCHIMEDES_MATH",
      "grade": 3,
      "round": "Tuần 16 - Tiết 3",
      "topic": "Biểu thức có dấu ngoặc",
      "text": "[Tuần 16 - Tiết 3] Nội dung: Biểu thức có dấu ngoặc. Tìm x biết: x : 6 = 100",
      "options": [
        "A. 600",
        "B. 605",
        "C. 595",
        "D. 610"
      ],
      "answer": "A",
      "explanation": "x = 100 × 6 = 600."
    },
    {
      "id": "ARCH-M-G3-W16-PKT-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 3,
      "round": "Tuần 16 - Phiếu cuối tuần",
      "topic": "Biểu thức có dấu ngoặc",
      "text": "[Phiếu cuối tuần 16] Chủ đề: Biểu thức có dấu ngoặc. Một hình chữ nhật có chiều dài 260cm, chiều rộng bằng một nửa chiều dài. Chu vi hình chữ nhật đó là:",
      "options": [
        "A. 780cm",
        "B. 760cm",
        "C. 800cm",
        "D. 390cm"
      ],
      "answer": "A",
      "explanation": "Chiều rộng là: 260 : 2 = 130 cm.\nChu vi hình chữ nhật là: (260 + 130) × 2 = 780 cm."
    },
    {
      "id": "ARCH-M-G3-W16-TTK-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 3,
      "round": "Tuần 16 - Bài tập tham khảo",
      "topic": "Biểu thức có dấu ngoặc",
      "text": "[Toán Olympic Archimedes Tuần 16] Để đánh số trang một tập tài liệu từ trang 1 đến trang 62, người ta cần dùng bao nhiêu chữ số?",
      "options": [
        "A. 115 chữ số",
        "B. 113 chữ số",
        "C. 117 chữ số",
        "D. 114 chữ số"
      ],
      "answer": "A",
      "explanation": "Từ trang 1 đến trang 9 có 9 trang có 1 chữ số = 9 chữ số.\nTừ trang 10 đến trang 62 có 53 trang có 2 chữ số = 106 chữ số.\nTổng số chữ số cần dùng: 9 + 106 = 115 chữ số."
    },
    {
      "id": "ARCH-M-G3-W17-T-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 3,
      "round": "Tuần 17 - Tiết 1",
      "topic": "Hình tròn, tâm, đường kính, bán kính",
      "text": "[Tuần 17 - Tiết 1] Nội dung: Hình tròn, tâm, đường kính, bán kính. Tìm x biết: x : 4 = 105",
      "options": [
        "A. 420",
        "B. 425",
        "C. 415",
        "D. 430"
      ],
      "answer": "A",
      "explanation": "x = 105 × 4 = 420."
    },
    {
      "id": "ARCH-M-G3-W17-T-2",
      "exam": "ARCHIMEDES_MATH",
      "grade": 3,
      "round": "Tuần 17 - Tiết 2",
      "topic": "Hình tròn, tâm, đường kính, bán kính",
      "text": "[Tuần 17 - Tiết 2] Nội dung: Hình tròn, tâm, đường kính, bán kính. Tìm x biết: x : 5 = 105",
      "options": [
        "A. 525",
        "B. 530",
        "C. 520",
        "D. 535"
      ],
      "answer": "A",
      "explanation": "x = 105 × 5 = 525."
    },
    {
      "id": "ARCH-M-G3-W17-T-3",
      "exam": "ARCHIMEDES_MATH",
      "grade": 3,
      "round": "Tuần 17 - Tiết 3",
      "topic": "Hình tròn, tâm, đường kính, bán kính",
      "text": "[Tuần 17 - Tiết 3] Nội dung: Hình tròn, tâm, đường kính, bán kính. Tìm x biết: x : 6 = 105",
      "options": [
        "A. 630",
        "B. 635",
        "C. 625",
        "D. 640"
      ],
      "answer": "A",
      "explanation": "x = 105 × 6 = 630."
    },
    {
      "id": "ARCH-M-G3-W17-PKT-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 3,
      "round": "Tuần 17 - Phiếu cuối tuần",
      "topic": "Hình tròn, tâm, đường kính, bán kính",
      "text": "[Phiếu cuối tuần 17] Chủ đề: Hình tròn, tâm, đường kính, bán kính. Một hình chữ nhật có chiều dài 270cm, chiều rộng bằng một nửa chiều dài. Chu vi hình chữ nhật đó là:",
      "options": [
        "A. 810cm",
        "B. 790cm",
        "C. 830cm",
        "D. 405cm"
      ],
      "answer": "A",
      "explanation": "Chiều rộng là: 270 : 2 = 135 cm.\nChu vi hình chữ nhật là: (270 + 135) × 2 = 810 cm."
    },
    {
      "id": "ARCH-M-G3-W17-TTK-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 3,
      "round": "Tuần 17 - Bài tập tham khảo",
      "topic": "Hình tròn, tâm, đường kính, bán kính",
      "text": "[Toán Olympic Archimedes Tuần 17] Để đánh số trang một tập tài liệu từ trang 1 đến trang 64, người ta cần dùng bao nhiêu chữ số?",
      "options": [
        "A. 119 chữ số",
        "B. 117 chữ số",
        "C. 121 chữ số",
        "D. 118 chữ số"
      ],
      "answer": "A",
      "explanation": "Từ trang 1 đến trang 9 có 9 trang có 1 chữ số = 9 chữ số.\nTừ trang 10 đến trang 64 có 55 trang có 2 chữ số = 110 chữ số.\nTổng số chữ số cần dùng: 9 + 110 = 119 chữ số."
    },
    {
      "id": "ARCH-M-G3-W18-T-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 3,
      "round": "Tuần 18 - Tiết 1",
      "topic": "Ôn tập cuối học kì 1",
      "text": "[Tuần 18 - Tiết 1] Nội dung: Ôn tập cuối học kì 1. Tìm x biết: x : 4 = 110",
      "options": [
        "A. 440",
        "B. 445",
        "C. 435",
        "D. 450"
      ],
      "answer": "A",
      "explanation": "x = 110 × 4 = 440."
    },
    {
      "id": "ARCH-M-G3-W18-T-2",
      "exam": "ARCHIMEDES_MATH",
      "grade": 3,
      "round": "Tuần 18 - Tiết 2",
      "topic": "Ôn tập cuối học kì 1",
      "text": "[Tuần 18 - Tiết 2] Nội dung: Ôn tập cuối học kì 1. Tìm x biết: x : 5 = 110",
      "options": [
        "A. 550",
        "B. 555",
        "C. 545",
        "D. 560"
      ],
      "answer": "A",
      "explanation": "x = 110 × 5 = 550."
    },
    {
      "id": "ARCH-M-G3-W18-T-3",
      "exam": "ARCHIMEDES_MATH",
      "grade": 3,
      "round": "Tuần 18 - Tiết 3",
      "topic": "Ôn tập cuối học kì 1",
      "text": "[Tuần 18 - Tiết 3] Nội dung: Ôn tập cuối học kì 1. Tìm x biết: x : 6 = 110",
      "options": [
        "A. 660",
        "B. 665",
        "C. 655",
        "D. 670"
      ],
      "answer": "A",
      "explanation": "x = 110 × 6 = 660."
    },
    {
      "id": "ARCH-M-G3-W18-PKT-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 3,
      "round": "Tuần 18 - Phiếu cuối tuần",
      "topic": "Ôn tập cuối học kì 1",
      "text": "[Phiếu cuối tuần 18] Chủ đề: Ôn tập cuối học kì 1. Một hình chữ nhật có chiều dài 280cm, chiều rộng bằng một nửa chiều dài. Chu vi hình chữ nhật đó là:",
      "options": [
        "A. 840cm",
        "B. 820cm",
        "C. 860cm",
        "D. 420cm"
      ],
      "answer": "A",
      "explanation": "Chiều rộng là: 280 : 2 = 140 cm.\nChu vi hình chữ nhật là: (280 + 140) × 2 = 840 cm."
    },
    {
      "id": "ARCH-M-G3-W18-TTK-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 3,
      "round": "Tuần 18 - Bài tập tham khảo",
      "topic": "Ôn tập cuối học kì 1",
      "text": "[Toán Olympic Archimedes Tuần 18] Để đánh số trang một tập tài liệu từ trang 1 đến trang 66, người ta cần dùng bao nhiêu chữ số?",
      "options": [
        "A. 123 chữ số",
        "B. 121 chữ số",
        "C. 125 chữ số",
        "D. 122 chữ số"
      ],
      "answer": "A",
      "explanation": "Từ trang 1 đến trang 9 có 9 trang có 1 chữ số = 9 chữ số.\nTừ trang 10 đến trang 66 có 57 trang có 2 chữ số = 114 chữ số.\nTổng số chữ số cần dùng: 9 + 114 = 123 chữ số."
    },
    {
      "id": "ARCH-M-G3-W19-T-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 3,
      "round": "Tuần 19 - Tiết 1",
      "topic": "Các số trong phạm vi 10.000",
      "text": "[Tuần 19 - Tiết 1] Nội dung: Các số trong phạm vi 10.000. Tìm x biết: x : 4 = 115",
      "options": [
        "A. 460",
        "B. 465",
        "C. 455",
        "D. 470"
      ],
      "answer": "A",
      "explanation": "x = 115 × 4 = 460."
    },
    {
      "id": "ARCH-M-G3-W19-T-2",
      "exam": "ARCHIMEDES_MATH",
      "grade": 3,
      "round": "Tuần 19 - Tiết 2",
      "topic": "Các số trong phạm vi 10.000",
      "text": "[Tuần 19 - Tiết 2] Nội dung: Các số trong phạm vi 10.000. Tìm x biết: x : 5 = 115",
      "options": [
        "A. 575",
        "B. 580",
        "C. 570",
        "D. 585"
      ],
      "answer": "A",
      "explanation": "x = 115 × 5 = 575."
    },
    {
      "id": "ARCH-M-G3-W19-T-3",
      "exam": "ARCHIMEDES_MATH",
      "grade": 3,
      "round": "Tuần 19 - Tiết 3",
      "topic": "Các số trong phạm vi 10.000",
      "text": "[Tuần 19 - Tiết 3] Nội dung: Các số trong phạm vi 10.000. Tìm x biết: x : 6 = 115",
      "options": [
        "A. 690",
        "B. 695",
        "C. 685",
        "D. 700"
      ],
      "answer": "A",
      "explanation": "x = 115 × 6 = 690."
    },
    {
      "id": "ARCH-M-G3-W19-PKT-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 3,
      "round": "Tuần 19 - Phiếu cuối tuần",
      "topic": "Các số trong phạm vi 10.000",
      "text": "[Phiếu cuối tuần 19] Chủ đề: Các số trong phạm vi 10.000. Một hình chữ nhật có chiều dài 290cm, chiều rộng bằng một nửa chiều dài. Chu vi hình chữ nhật đó là:",
      "options": [
        "A. 870cm",
        "B. 850cm",
        "C. 890cm",
        "D. 435cm"
      ],
      "answer": "A",
      "explanation": "Chiều rộng là: 290 : 2 = 145 cm.\nChu vi hình chữ nhật là: (290 + 145) × 2 = 870 cm."
    },
    {
      "id": "ARCH-M-G3-W19-TTK-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 3,
      "round": "Tuần 19 - Bài tập tham khảo",
      "topic": "Các số trong phạm vi 10.000",
      "text": "[Toán Olympic Archimedes Tuần 19] Để đánh số trang một tập tài liệu từ trang 1 đến trang 68, người ta cần dùng bao nhiêu chữ số?",
      "options": [
        "A. 127 chữ số",
        "B. 125 chữ số",
        "C. 129 chữ số",
        "D. 126 chữ số"
      ],
      "answer": "A",
      "explanation": "Từ trang 1 đến trang 9 có 9 trang có 1 chữ số = 9 chữ số.\nTừ trang 10 đến trang 68 có 59 trang có 2 chữ số = 118 chữ số.\nTổng số chữ số cần dùng: 9 + 118 = 127 chữ số."
    },
    {
      "id": "ARCH-M-G3-W20-T-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 3,
      "round": "Tuần 20 - Tiết 1",
      "topic": "So sánh các số trong phạm vi 10.000",
      "text": "[Tuần 20 - Tiết 1] Nội dung: So sánh các số trong phạm vi 10.000. Tìm x biết: x : 4 = 120",
      "options": [
        "A. 480",
        "B. 485",
        "C. 475",
        "D. 490"
      ],
      "answer": "A",
      "explanation": "x = 120 × 4 = 480."
    },
    {
      "id": "ARCH-M-G3-W20-T-2",
      "exam": "ARCHIMEDES_MATH",
      "grade": 3,
      "round": "Tuần 20 - Tiết 2",
      "topic": "So sánh các số trong phạm vi 10.000",
      "text": "[Tuần 20 - Tiết 2] Nội dung: So sánh các số trong phạm vi 10.000. Tìm x biết: x : 5 = 120",
      "options": [
        "A. 600",
        "B. 605",
        "C. 595",
        "D. 610"
      ],
      "answer": "A",
      "explanation": "x = 120 × 5 = 600."
    },
    {
      "id": "ARCH-M-G3-W20-T-3",
      "exam": "ARCHIMEDES_MATH",
      "grade": 3,
      "round": "Tuần 20 - Tiết 3",
      "topic": "So sánh các số trong phạm vi 10.000",
      "text": "[Tuần 20 - Tiết 3] Nội dung: So sánh các số trong phạm vi 10.000. Tìm x biết: x : 6 = 120",
      "options": [
        "A. 720",
        "B. 725",
        "C. 715",
        "D. 730"
      ],
      "answer": "A",
      "explanation": "x = 120 × 6 = 720."
    },
    {
      "id": "ARCH-M-G3-W20-PKT-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 3,
      "round": "Tuần 20 - Phiếu cuối tuần",
      "topic": "So sánh các số trong phạm vi 10.000",
      "text": "[Phiếu cuối tuần 20] Chủ đề: So sánh các số trong phạm vi 10.000. Một hình chữ nhật có chiều dài 300cm, chiều rộng bằng một nửa chiều dài. Chu vi hình chữ nhật đó là:",
      "options": [
        "A. 900cm",
        "B. 880cm",
        "C. 920cm",
        "D. 450cm"
      ],
      "answer": "A",
      "explanation": "Chiều rộng là: 300 : 2 = 150 cm.\nChu vi hình chữ nhật là: (300 + 150) × 2 = 900 cm."
    },
    {
      "id": "ARCH-M-G3-W20-TTK-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 3,
      "round": "Tuần 20 - Bài tập tham khảo",
      "topic": "So sánh các số trong phạm vi 10.000",
      "text": "[Toán Olympic Archimedes Tuần 20] Để đánh số trang một tập tài liệu từ trang 1 đến trang 70, người ta cần dùng bao nhiêu chữ số?",
      "options": [
        "A. 131 chữ số",
        "B. 129 chữ số",
        "C. 133 chữ số",
        "D. 130 chữ số"
      ],
      "answer": "A",
      "explanation": "Từ trang 1 đến trang 9 có 9 trang có 1 chữ số = 9 chữ số.\nTừ trang 10 đến trang 70 có 61 trang có 2 chữ số = 122 chữ số.\nTổng số chữ số cần dùng: 9 + 122 = 131 chữ số."
    },
    {
      "id": "ARCH-M-G3-W21-T-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 3,
      "round": "Tuần 21 - Tiết 1",
      "topic": "Phép cộng trong phạm vi 10.000",
      "text": "[Tuần 21 - Tiết 1] Nội dung: Phép cộng trong phạm vi 10.000. Tìm x biết: x : 4 = 125",
      "options": [
        "A. 500",
        "B. 505",
        "C. 495",
        "D. 510"
      ],
      "answer": "A",
      "explanation": "x = 125 × 4 = 500."
    },
    {
      "id": "ARCH-M-G3-W21-T-2",
      "exam": "ARCHIMEDES_MATH",
      "grade": 3,
      "round": "Tuần 21 - Tiết 2",
      "topic": "Phép cộng trong phạm vi 10.000",
      "text": "[Tuần 21 - Tiết 2] Nội dung: Phép cộng trong phạm vi 10.000. Tìm x biết: x : 5 = 125",
      "options": [
        "A. 625",
        "B. 630",
        "C. 620",
        "D. 635"
      ],
      "answer": "A",
      "explanation": "x = 125 × 5 = 625."
    },
    {
      "id": "ARCH-M-G3-W21-T-3",
      "exam": "ARCHIMEDES_MATH",
      "grade": 3,
      "round": "Tuần 21 - Tiết 3",
      "topic": "Phép cộng trong phạm vi 10.000",
      "text": "[Tuần 21 - Tiết 3] Nội dung: Phép cộng trong phạm vi 10.000. Tìm x biết: x : 6 = 125",
      "options": [
        "A. 750",
        "B. 755",
        "C. 745",
        "D. 760"
      ],
      "answer": "A",
      "explanation": "x = 125 × 6 = 750."
    },
    {
      "id": "ARCH-M-G3-W21-PKT-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 3,
      "round": "Tuần 21 - Phiếu cuối tuần",
      "topic": "Phép cộng trong phạm vi 10.000",
      "text": "[Phiếu cuối tuần 21] Chủ đề: Phép cộng trong phạm vi 10.000. Một hình chữ nhật có chiều dài 310cm, chiều rộng bằng một nửa chiều dài. Chu vi hình chữ nhật đó là:",
      "options": [
        "A. 930cm",
        "B. 910cm",
        "C. 950cm",
        "D. 465cm"
      ],
      "answer": "A",
      "explanation": "Chiều rộng là: 310 : 2 = 155 cm.\nChu vi hình chữ nhật là: (310 + 155) × 2 = 930 cm."
    },
    {
      "id": "ARCH-M-G3-W21-TTK-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 3,
      "round": "Tuần 21 - Bài tập tham khảo",
      "topic": "Phép cộng trong phạm vi 10.000",
      "text": "[Toán Olympic Archimedes Tuần 21] Để đánh số trang một tập tài liệu từ trang 1 đến trang 72, người ta cần dùng bao nhiêu chữ số?",
      "options": [
        "A. 135 chữ số",
        "B. 133 chữ số",
        "C. 137 chữ số",
        "D. 134 chữ số"
      ],
      "answer": "A",
      "explanation": "Từ trang 1 đến trang 9 có 9 trang có 1 chữ số = 9 chữ số.\nTừ trang 10 đến trang 72 có 63 trang có 2 chữ số = 126 chữ số.\nTổng số chữ số cần dùng: 9 + 126 = 135 chữ số."
    },
    {
      "id": "ARCH-M-G3-W22-T-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 3,
      "round": "Tuần 22 - Tiết 1",
      "topic": "Phép trừ trong phạm vi 10.000",
      "text": "[Tuần 22 - Tiết 1] Nội dung: Phép trừ trong phạm vi 10.000. Tìm x biết: x : 4 = 130",
      "options": [
        "A. 520",
        "B. 525",
        "C. 515",
        "D. 530"
      ],
      "answer": "A",
      "explanation": "x = 130 × 4 = 520."
    },
    {
      "id": "ARCH-M-G3-W22-T-2",
      "exam": "ARCHIMEDES_MATH",
      "grade": 3,
      "round": "Tuần 22 - Tiết 2",
      "topic": "Phép trừ trong phạm vi 10.000",
      "text": "[Tuần 22 - Tiết 2] Nội dung: Phép trừ trong phạm vi 10.000. Tìm x biết: x : 5 = 130",
      "options": [
        "A. 650",
        "B. 655",
        "C. 645",
        "D. 660"
      ],
      "answer": "A",
      "explanation": "x = 130 × 5 = 650."
    },
    {
      "id": "ARCH-M-G3-W22-T-3",
      "exam": "ARCHIMEDES_MATH",
      "grade": 3,
      "round": "Tuần 22 - Tiết 3",
      "topic": "Phép trừ trong phạm vi 10.000",
      "text": "[Tuần 22 - Tiết 3] Nội dung: Phép trừ trong phạm vi 10.000. Tìm x biết: x : 6 = 130",
      "options": [
        "A. 780",
        "B. 785",
        "C. 775",
        "D. 790"
      ],
      "answer": "A",
      "explanation": "x = 130 × 6 = 780."
    },
    {
      "id": "ARCH-M-G3-W22-PKT-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 3,
      "round": "Tuần 22 - Phiếu cuối tuần",
      "topic": "Phép trừ trong phạm vi 10.000",
      "text": "[Phiếu cuối tuần 22] Chủ đề: Phép trừ trong phạm vi 10.000. Một hình chữ nhật có chiều dài 320cm, chiều rộng bằng một nửa chiều dài. Chu vi hình chữ nhật đó là:",
      "options": [
        "A. 960cm",
        "B. 940cm",
        "C. 980cm",
        "D. 480cm"
      ],
      "answer": "A",
      "explanation": "Chiều rộng là: 320 : 2 = 160 cm.\nChu vi hình chữ nhật là: (320 + 160) × 2 = 960 cm."
    },
    {
      "id": "ARCH-M-G3-W22-TTK-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 3,
      "round": "Tuần 22 - Bài tập tham khảo",
      "topic": "Phép trừ trong phạm vi 10.000",
      "text": "[Toán Olympic Archimedes Tuần 22] Để đánh số trang một tập tài liệu từ trang 1 đến trang 74, người ta cần dùng bao nhiêu chữ số?",
      "options": [
        "A. 139 chữ số",
        "B. 137 chữ số",
        "C. 141 chữ số",
        "D. 138 chữ số"
      ],
      "answer": "A",
      "explanation": "Từ trang 1 đến trang 9 có 9 trang có 1 chữ số = 9 chữ số.\nTừ trang 10 đến trang 74 có 65 trang có 2 chữ số = 130 chữ số.\nTổng số chữ số cần dùng: 9 + 130 = 139 chữ số."
    },
    {
      "id": "ARCH-M-G3-W23-T-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 3,
      "round": "Tuần 23 - Tiết 1",
      "topic": "Tháng - năm, xem lịch nâng cao",
      "text": "[Tuần 23 - Tiết 1] Nội dung: Tháng - năm, xem lịch nâng cao. Tìm x biết: x : 4 = 135",
      "options": [
        "A. 540",
        "B. 545",
        "C. 535",
        "D. 550"
      ],
      "answer": "A",
      "explanation": "x = 135 × 4 = 540."
    },
    {
      "id": "ARCH-M-G3-W23-T-2",
      "exam": "ARCHIMEDES_MATH",
      "grade": 3,
      "round": "Tuần 23 - Tiết 2",
      "topic": "Tháng - năm, xem lịch nâng cao",
      "text": "[Tuần 23 - Tiết 2] Nội dung: Tháng - năm, xem lịch nâng cao. Tìm x biết: x : 5 = 135",
      "options": [
        "A. 675",
        "B. 680",
        "C. 670",
        "D. 685"
      ],
      "answer": "A",
      "explanation": "x = 135 × 5 = 675."
    },
    {
      "id": "ARCH-M-G3-W23-T-3",
      "exam": "ARCHIMEDES_MATH",
      "grade": 3,
      "round": "Tuần 23 - Tiết 3",
      "topic": "Tháng - năm, xem lịch nâng cao",
      "text": "[Tuần 23 - Tiết 3] Nội dung: Tháng - năm, xem lịch nâng cao. Tìm x biết: x : 6 = 135",
      "options": [
        "A. 810",
        "B. 815",
        "C. 805",
        "D. 820"
      ],
      "answer": "A",
      "explanation": "x = 135 × 6 = 810."
    },
    {
      "id": "ARCH-M-G3-W23-PKT-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 3,
      "round": "Tuần 23 - Phiếu cuối tuần",
      "topic": "Tháng - năm, xem lịch nâng cao",
      "text": "[Phiếu cuối tuần 23] Chủ đề: Tháng - năm, xem lịch nâng cao. Một hình chữ nhật có chiều dài 330cm, chiều rộng bằng một nửa chiều dài. Chu vi hình chữ nhật đó là:",
      "options": [
        "A. 990cm",
        "B. 970cm",
        "C. 1010cm",
        "D. 495cm"
      ],
      "answer": "A",
      "explanation": "Chiều rộng là: 330 : 2 = 165 cm.\nChu vi hình chữ nhật là: (330 + 165) × 2 = 990 cm."
    },
    {
      "id": "ARCH-M-G3-W23-TTK-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 3,
      "round": "Tuần 23 - Bài tập tham khảo",
      "topic": "Tháng - năm, xem lịch nâng cao",
      "text": "[Toán Olympic Archimedes Tuần 23] Để đánh số trang một tập tài liệu từ trang 1 đến trang 76, người ta cần dùng bao nhiêu chữ số?",
      "options": [
        "A. 143 chữ số",
        "B. 141 chữ số",
        "C. 145 chữ số",
        "D. 142 chữ số"
      ],
      "answer": "A",
      "explanation": "Từ trang 1 đến trang 9 có 9 trang có 1 chữ số = 9 chữ số.\nTừ trang 10 đến trang 76 có 67 trang có 2 chữ số = 134 chữ số.\nTổng số chữ số cần dùng: 9 + 134 = 143 chữ số."
    },
    {
      "id": "ARCH-M-G3-W24-T-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 3,
      "round": "Tuần 24 - Tiết 1",
      "topic": "Nhân số có bốn chữ số với số có một chữ số",
      "text": "[Tuần 24 - Tiết 1] Nội dung: Nhân số có bốn chữ số với số có một chữ số. Tìm x biết: x : 4 = 140",
      "options": [
        "A. 560",
        "B. 565",
        "C. 555",
        "D. 570"
      ],
      "answer": "A",
      "explanation": "x = 140 × 4 = 560."
    },
    {
      "id": "ARCH-M-G3-W24-T-2",
      "exam": "ARCHIMEDES_MATH",
      "grade": 3,
      "round": "Tuần 24 - Tiết 2",
      "topic": "Nhân số có bốn chữ số với số có một chữ số",
      "text": "[Tuần 24 - Tiết 2] Nội dung: Nhân số có bốn chữ số với số có một chữ số. Tìm x biết: x : 5 = 140",
      "options": [
        "A. 700",
        "B. 705",
        "C. 695",
        "D. 710"
      ],
      "answer": "A",
      "explanation": "x = 140 × 5 = 700."
    },
    {
      "id": "ARCH-M-G3-W24-T-3",
      "exam": "ARCHIMEDES_MATH",
      "grade": 3,
      "round": "Tuần 24 - Tiết 3",
      "topic": "Nhân số có bốn chữ số với số có một chữ số",
      "text": "[Tuần 24 - Tiết 3] Nội dung: Nhân số có bốn chữ số với số có một chữ số. Tìm x biết: x : 6 = 140",
      "options": [
        "A. 840",
        "B. 845",
        "C. 835",
        "D. 850"
      ],
      "answer": "A",
      "explanation": "x = 140 × 6 = 840."
    },
    {
      "id": "ARCH-M-G3-W24-PKT-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 3,
      "round": "Tuần 24 - Phiếu cuối tuần",
      "topic": "Nhân số có bốn chữ số với số có một chữ số",
      "text": "[Phiếu cuối tuần 24] Chủ đề: Nhân số có bốn chữ số với số có một chữ số. Một hình chữ nhật có chiều dài 340cm, chiều rộng bằng một nửa chiều dài. Chu vi hình chữ nhật đó là:",
      "options": [
        "A. 1020cm",
        "B. 1000cm",
        "C. 1040cm",
        "D. 510cm"
      ],
      "answer": "A",
      "explanation": "Chiều rộng là: 340 : 2 = 170 cm.\nChu vi hình chữ nhật là: (340 + 170) × 2 = 1020 cm."
    },
    {
      "id": "ARCH-M-G3-W24-TTK-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 3,
      "round": "Tuần 24 - Bài tập tham khảo",
      "topic": "Nhân số có bốn chữ số với số có một chữ số",
      "text": "[Toán Olympic Archimedes Tuần 24] Để đánh số trang một tập tài liệu từ trang 1 đến trang 78, người ta cần dùng bao nhiêu chữ số?",
      "options": [
        "A. 147 chữ số",
        "B. 145 chữ số",
        "C. 149 chữ số",
        "D. 146 chữ số"
      ],
      "answer": "A",
      "explanation": "Từ trang 1 đến trang 9 có 9 trang có 1 chữ số = 9 chữ số.\nTừ trang 10 đến trang 78 có 69 trang có 2 chữ số = 138 chữ số.\nTổng số chữ số cần dùng: 9 + 138 = 147 chữ số."
    },
    {
      "id": "ARCH-M-G3-W25-T-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 3,
      "round": "Tuần 25 - Tiết 1",
      "topic": "Chia số có bốn chữ số cho số có một chữ số",
      "text": "[Tuần 25 - Tiết 1] Nội dung: Chia số có bốn chữ số cho số có một chữ số. Tìm x biết: x : 4 = 145",
      "options": [
        "A. 580",
        "B. 585",
        "C. 575",
        "D. 590"
      ],
      "answer": "A",
      "explanation": "x = 145 × 4 = 580."
    },
    {
      "id": "ARCH-M-G3-W25-T-2",
      "exam": "ARCHIMEDES_MATH",
      "grade": 3,
      "round": "Tuần 25 - Tiết 2",
      "topic": "Chia số có bốn chữ số cho số có một chữ số",
      "text": "[Tuần 25 - Tiết 2] Nội dung: Chia số có bốn chữ số cho số có một chữ số. Tìm x biết: x : 5 = 145",
      "options": [
        "A. 725",
        "B. 730",
        "C. 720",
        "D. 735"
      ],
      "answer": "A",
      "explanation": "x = 145 × 5 = 725."
    },
    {
      "id": "ARCH-M-G3-W25-T-3",
      "exam": "ARCHIMEDES_MATH",
      "grade": 3,
      "round": "Tuần 25 - Tiết 3",
      "topic": "Chia số có bốn chữ số cho số có một chữ số",
      "text": "[Tuần 25 - Tiết 3] Nội dung: Chia số có bốn chữ số cho số có một chữ số. Tìm x biết: x : 6 = 145",
      "options": [
        "A. 870",
        "B. 875",
        "C. 865",
        "D. 880"
      ],
      "answer": "A",
      "explanation": "x = 145 × 6 = 870."
    },
    {
      "id": "ARCH-M-G3-W25-PKT-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 3,
      "round": "Tuần 25 - Phiếu cuối tuần",
      "topic": "Chia số có bốn chữ số cho số có một chữ số",
      "text": "[Phiếu cuối tuần 25] Chủ đề: Chia số có bốn chữ số cho số có một chữ số. Một hình chữ nhật có chiều dài 350cm, chiều rộng bằng một nửa chiều dài. Chu vi hình chữ nhật đó là:",
      "options": [
        "A. 1050cm",
        "B. 1030cm",
        "C. 1070cm",
        "D. 525cm"
      ],
      "answer": "A",
      "explanation": "Chiều rộng là: 350 : 2 = 175 cm.\nChu vi hình chữ nhật là: (350 + 175) × 2 = 1050 cm."
    },
    {
      "id": "ARCH-M-G3-W25-TTK-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 3,
      "round": "Tuần 25 - Bài tập tham khảo",
      "topic": "Chia số có bốn chữ số cho số có một chữ số",
      "text": "[Toán Olympic Archimedes Tuần 25] Để đánh số trang một tập tài liệu từ trang 1 đến trang 80, người ta cần dùng bao nhiêu chữ số?",
      "options": [
        "A. 151 chữ số",
        "B. 149 chữ số",
        "C. 153 chữ số",
        "D. 150 chữ số"
      ],
      "answer": "A",
      "explanation": "Từ trang 1 đến trang 9 có 9 trang có 1 chữ số = 9 chữ số.\nTừ trang 10 đến trang 80 có 71 trang có 2 chữ số = 142 chữ số.\nTổng số chữ số cần dùng: 9 + 142 = 151 chữ số."
    },
    {
      "id": "ARCH-M-G3-W26-T-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 3,
      "round": "Tuần 26 - Tiết 1",
      "topic": "Ôn tập giữa học kì 2",
      "text": "[Tuần 26 - Tiết 1] Nội dung: Ôn tập giữa học kì 2. Tìm x biết: x : 4 = 150",
      "options": [
        "A. 600",
        "B. 605",
        "C. 595",
        "D. 610"
      ],
      "answer": "A",
      "explanation": "x = 150 × 4 = 600."
    },
    {
      "id": "ARCH-M-G3-W26-T-2",
      "exam": "ARCHIMEDES_MATH",
      "grade": 3,
      "round": "Tuần 26 - Tiết 2",
      "topic": "Ôn tập giữa học kì 2",
      "text": "[Tuần 26 - Tiết 2] Nội dung: Ôn tập giữa học kì 2. Tìm x biết: x : 5 = 150",
      "options": [
        "A. 750",
        "B. 755",
        "C. 745",
        "D. 760"
      ],
      "answer": "A",
      "explanation": "x = 150 × 5 = 750."
    },
    {
      "id": "ARCH-M-G3-W26-T-3",
      "exam": "ARCHIMEDES_MATH",
      "grade": 3,
      "round": "Tuần 26 - Tiết 3",
      "topic": "Ôn tập giữa học kì 2",
      "text": "[Tuần 26 - Tiết 3] Nội dung: Ôn tập giữa học kì 2. Tìm x biết: x : 6 = 150",
      "options": [
        "A. 900",
        "B. 905",
        "C. 895",
        "D. 910"
      ],
      "answer": "A",
      "explanation": "x = 150 × 6 = 900."
    },
    {
      "id": "ARCH-M-G3-W26-PKT-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 3,
      "round": "Tuần 26 - Phiếu cuối tuần",
      "topic": "Ôn tập giữa học kì 2",
      "text": "[Phiếu cuối tuần 26] Chủ đề: Ôn tập giữa học kì 2. Một hình chữ nhật có chiều dài 360cm, chiều rộng bằng một nửa chiều dài. Chu vi hình chữ nhật đó là:",
      "options": [
        "A. 1080cm",
        "B. 1060cm",
        "C. 1100cm",
        "D. 540cm"
      ],
      "answer": "A",
      "explanation": "Chiều rộng là: 360 : 2 = 180 cm.\nChu vi hình chữ nhật là: (360 + 180) × 2 = 1080 cm."
    },
    {
      "id": "ARCH-M-G3-W26-TTK-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 3,
      "round": "Tuần 26 - Bài tập tham khảo",
      "topic": "Ôn tập giữa học kì 2",
      "text": "[Toán Olympic Archimedes Tuần 26] Để đánh số trang một tập tài liệu từ trang 1 đến trang 82, người ta cần dùng bao nhiêu chữ số?",
      "options": [
        "A. 155 chữ số",
        "B. 153 chữ số",
        "C. 157 chữ số",
        "D. 154 chữ số"
      ],
      "answer": "A",
      "explanation": "Từ trang 1 đến trang 9 có 9 trang có 1 chữ số = 9 chữ số.\nTừ trang 10 đến trang 82 có 73 trang có 2 chữ số = 146 chữ số.\nTổng số chữ số cần dùng: 9 + 146 = 155 chữ số."
    },
    {
      "id": "ARCH-M-G3-W27-T-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 3,
      "round": "Tuần 27 - Tiết 1",
      "topic": "Các số trong phạm vi 100.000",
      "text": "[Tuần 27 - Tiết 1] Nội dung: Các số trong phạm vi 100.000. Tìm x biết: x : 4 = 155",
      "options": [
        "A. 620",
        "B. 625",
        "C. 615",
        "D. 630"
      ],
      "answer": "A",
      "explanation": "x = 155 × 4 = 620."
    },
    {
      "id": "ARCH-M-G3-W27-T-2",
      "exam": "ARCHIMEDES_MATH",
      "grade": 3,
      "round": "Tuần 27 - Tiết 2",
      "topic": "Các số trong phạm vi 100.000",
      "text": "[Tuần 27 - Tiết 2] Nội dung: Các số trong phạm vi 100.000. Tìm x biết: x : 5 = 155",
      "options": [
        "A. 775",
        "B. 780",
        "C. 770",
        "D. 785"
      ],
      "answer": "A",
      "explanation": "x = 155 × 5 = 775."
    },
    {
      "id": "ARCH-M-G3-W27-T-3",
      "exam": "ARCHIMEDES_MATH",
      "grade": 3,
      "round": "Tuần 27 - Tiết 3",
      "topic": "Các số trong phạm vi 100.000",
      "text": "[Tuần 27 - Tiết 3] Nội dung: Các số trong phạm vi 100.000. Tìm x biết: x : 6 = 155",
      "options": [
        "A. 930",
        "B. 935",
        "C. 925",
        "D. 940"
      ],
      "answer": "A",
      "explanation": "x = 155 × 6 = 930."
    },
    {
      "id": "ARCH-M-G3-W27-PKT-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 3,
      "round": "Tuần 27 - Phiếu cuối tuần",
      "topic": "Các số trong phạm vi 100.000",
      "text": "[Phiếu cuối tuần 27] Chủ đề: Các số trong phạm vi 100.000. Một hình chữ nhật có chiều dài 370cm, chiều rộng bằng một nửa chiều dài. Chu vi hình chữ nhật đó là:",
      "options": [
        "A. 1110cm",
        "B. 1090cm",
        "C. 1130cm",
        "D. 555cm"
      ],
      "answer": "A",
      "explanation": "Chiều rộng là: 370 : 2 = 185 cm.\nChu vi hình chữ nhật là: (370 + 185) × 2 = 1110 cm."
    },
    {
      "id": "ARCH-M-G3-W27-TTK-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 3,
      "round": "Tuần 27 - Bài tập tham khảo",
      "topic": "Các số trong phạm vi 100.000",
      "text": "[Toán Olympic Archimedes Tuần 27] Để đánh số trang một tập tài liệu từ trang 1 đến trang 84, người ta cần dùng bao nhiêu chữ số?",
      "options": [
        "A. 159 chữ số",
        "B. 157 chữ số",
        "C. 161 chữ số",
        "D. 158 chữ số"
      ],
      "answer": "A",
      "explanation": "Từ trang 1 đến trang 9 có 9 trang có 1 chữ số = 9 chữ số.\nTừ trang 10 đến trang 84 có 75 trang có 2 chữ số = 150 chữ số.\nTổng số chữ số cần dùng: 9 + 150 = 159 chữ số."
    },
    {
      "id": "ARCH-M-G3-W28-T-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 3,
      "round": "Tuần 28 - Tiết 1",
      "topic": "Chu vi hình chữ nhật, hình vuông",
      "text": "[Tuần 28 - Tiết 1] Nội dung: Chu vi hình chữ nhật, hình vuông. Tìm x biết: x : 4 = 160",
      "options": [
        "A. 640",
        "B. 645",
        "C. 635",
        "D. 650"
      ],
      "answer": "A",
      "explanation": "x = 160 × 4 = 640."
    },
    {
      "id": "ARCH-M-G3-W28-T-2",
      "exam": "ARCHIMEDES_MATH",
      "grade": 3,
      "round": "Tuần 28 - Tiết 2",
      "topic": "Chu vi hình chữ nhật, hình vuông",
      "text": "[Tuần 28 - Tiết 2] Nội dung: Chu vi hình chữ nhật, hình vuông. Tìm x biết: x : 5 = 160",
      "options": [
        "A. 800",
        "B. 805",
        "C. 795",
        "D. 810"
      ],
      "answer": "A",
      "explanation": "x = 160 × 5 = 800."
    },
    {
      "id": "ARCH-M-G3-W28-T-3",
      "exam": "ARCHIMEDES_MATH",
      "grade": 3,
      "round": "Tuần 28 - Tiết 3",
      "topic": "Chu vi hình chữ nhật, hình vuông",
      "text": "[Tuần 28 - Tiết 3] Nội dung: Chu vi hình chữ nhật, hình vuông. Tìm x biết: x : 6 = 160",
      "options": [
        "A. 960",
        "B. 965",
        "C. 955",
        "D. 970"
      ],
      "answer": "A",
      "explanation": "x = 160 × 6 = 960."
    },
    {
      "id": "ARCH-M-G3-W28-PKT-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 3,
      "round": "Tuần 28 - Phiếu cuối tuần",
      "topic": "Chu vi hình chữ nhật, hình vuông",
      "text": "[Phiếu cuối tuần 28] Chủ đề: Chu vi hình chữ nhật, hình vuông. Một hình chữ nhật có chiều dài 380cm, chiều rộng bằng một nửa chiều dài. Chu vi hình chữ nhật đó là:",
      "options": [
        "A. 1140cm",
        "B. 1120cm",
        "C. 1160cm",
        "D. 570cm"
      ],
      "answer": "A",
      "explanation": "Chiều rộng là: 380 : 2 = 190 cm.\nChu vi hình chữ nhật là: (380 + 190) × 2 = 1140 cm."
    },
    {
      "id": "ARCH-M-G3-W28-TTK-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 3,
      "round": "Tuần 28 - Bài tập tham khảo",
      "topic": "Chu vi hình chữ nhật, hình vuông",
      "text": "[Toán Olympic Archimedes Tuần 28] Để đánh số trang một tập tài liệu từ trang 1 đến trang 86, người ta cần dùng bao nhiêu chữ số?",
      "options": [
        "A. 163 chữ số",
        "B. 161 chữ số",
        "C. 165 chữ số",
        "D. 162 chữ số"
      ],
      "answer": "A",
      "explanation": "Từ trang 1 đến trang 9 có 9 trang có 1 chữ số = 9 chữ số.\nTừ trang 10 đến trang 86 có 77 trang có 2 chữ số = 154 chữ số.\nTổng số chữ số cần dùng: 9 + 154 = 163 chữ số."
    },
    {
      "id": "ARCH-M-G3-W29-T-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 3,
      "round": "Tuần 29 - Tiết 1",
      "topic": "Diện tích hình chữ nhật, hình vuông",
      "text": "[Tuần 29 - Tiết 1] Nội dung: Diện tích hình chữ nhật, hình vuông. Tìm x biết: x : 4 = 165",
      "options": [
        "A. 660",
        "B. 665",
        "C. 655",
        "D. 670"
      ],
      "answer": "A",
      "explanation": "x = 165 × 4 = 660."
    },
    {
      "id": "ARCH-M-G3-W29-T-2",
      "exam": "ARCHIMEDES_MATH",
      "grade": 3,
      "round": "Tuần 29 - Tiết 2",
      "topic": "Diện tích hình chữ nhật, hình vuông",
      "text": "[Tuần 29 - Tiết 2] Nội dung: Diện tích hình chữ nhật, hình vuông. Tìm x biết: x : 5 = 165",
      "options": [
        "A. 825",
        "B. 830",
        "C. 820",
        "D. 835"
      ],
      "answer": "A",
      "explanation": "x = 165 × 5 = 825."
    },
    {
      "id": "ARCH-M-G3-W29-T-3",
      "exam": "ARCHIMEDES_MATH",
      "grade": 3,
      "round": "Tuần 29 - Tiết 3",
      "topic": "Diện tích hình chữ nhật, hình vuông",
      "text": "[Tuần 29 - Tiết 3] Nội dung: Diện tích hình chữ nhật, hình vuông. Tìm x biết: x : 6 = 165",
      "options": [
        "A. 990",
        "B. 995",
        "C. 985",
        "D. 1000"
      ],
      "answer": "A",
      "explanation": "x = 165 × 6 = 990."
    },
    {
      "id": "ARCH-M-G3-W29-PKT-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 3,
      "round": "Tuần 29 - Phiếu cuối tuần",
      "topic": "Diện tích hình chữ nhật, hình vuông",
      "text": "[Phiếu cuối tuần 29] Chủ đề: Diện tích hình chữ nhật, hình vuông. Một hình chữ nhật có chiều dài 390cm, chiều rộng bằng một nửa chiều dài. Chu vi hình chữ nhật đó là:",
      "options": [
        "A. 1170cm",
        "B. 1150cm",
        "C. 1190cm",
        "D. 585cm"
      ],
      "answer": "A",
      "explanation": "Chiều rộng là: 390 : 2 = 195 cm.\nChu vi hình chữ nhật là: (390 + 195) × 2 = 1170 cm."
    },
    {
      "id": "ARCH-M-G3-W29-TTK-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 3,
      "round": "Tuần 29 - Bài tập tham khảo",
      "topic": "Diện tích hình chữ nhật, hình vuông",
      "text": "[Toán Olympic Archimedes Tuần 29] Để đánh số trang một tập tài liệu từ trang 1 đến trang 88, người ta cần dùng bao nhiêu chữ số?",
      "options": [
        "A. 167 chữ số",
        "B. 165 chữ số",
        "C. 169 chữ số",
        "D. 166 chữ số"
      ],
      "answer": "A",
      "explanation": "Từ trang 1 đến trang 9 có 9 trang có 1 chữ số = 9 chữ số.\nTừ trang 10 đến trang 88 có 79 trang có 2 chữ số = 158 chữ số.\nTổng số chữ số cần dùng: 9 + 158 = 167 chữ số."
    },
    {
      "id": "ARCH-M-G3-W30-T-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 3,
      "round": "Tuần 30 - Tiết 1",
      "topic": "Xăng-ti-mét vuông (cm²)",
      "text": "[Tuần 30 - Tiết 1] Nội dung: Xăng-ti-mét vuông (cm²). Tìm x biết: x : 4 = 170",
      "options": [
        "A. 680",
        "B. 685",
        "C. 675",
        "D. 690"
      ],
      "answer": "A",
      "explanation": "x = 170 × 4 = 680."
    },
    {
      "id": "ARCH-M-G3-W30-T-2",
      "exam": "ARCHIMEDES_MATH",
      "grade": 3,
      "round": "Tuần 30 - Tiết 2",
      "topic": "Xăng-ti-mét vuông (cm²)",
      "text": "[Tuần 30 - Tiết 2] Nội dung: Xăng-ti-mét vuông (cm²). Tìm x biết: x : 5 = 170",
      "options": [
        "A. 850",
        "B. 855",
        "C. 845",
        "D. 860"
      ],
      "answer": "A",
      "explanation": "x = 170 × 5 = 850."
    },
    {
      "id": "ARCH-M-G3-W30-T-3",
      "exam": "ARCHIMEDES_MATH",
      "grade": 3,
      "round": "Tuần 30 - Tiết 3",
      "topic": "Xăng-ti-mét vuông (cm²)",
      "text": "[Tuần 30 - Tiết 3] Nội dung: Xăng-ti-mét vuông (cm²). Tìm x biết: x : 6 = 170",
      "options": [
        "A. 1020",
        "B. 1025",
        "C. 1015",
        "D. 1030"
      ],
      "answer": "A",
      "explanation": "x = 170 × 6 = 1020."
    },
    {
      "id": "ARCH-M-G3-W30-PKT-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 3,
      "round": "Tuần 30 - Phiếu cuối tuần",
      "topic": "Xăng-ti-mét vuông (cm²)",
      "text": "[Phiếu cuối tuần 30] Chủ đề: Xăng-ti-mét vuông (cm²). Một hình chữ nhật có chiều dài 400cm, chiều rộng bằng một nửa chiều dài. Chu vi hình chữ nhật đó là:",
      "options": [
        "A. 1200cm",
        "B. 1180cm",
        "C. 1220cm",
        "D. 600cm"
      ],
      "answer": "A",
      "explanation": "Chiều rộng là: 400 : 2 = 200 cm.\nChu vi hình chữ nhật là: (400 + 200) × 2 = 1200 cm."
    },
    {
      "id": "ARCH-M-G3-W30-TTK-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 3,
      "round": "Tuần 30 - Bài tập tham khảo",
      "topic": "Xăng-ti-mét vuông (cm²)",
      "text": "[Toán Olympic Archimedes Tuần 30] Để đánh số trang một tập tài liệu từ trang 1 đến trang 90, người ta cần dùng bao nhiêu chữ số?",
      "options": [
        "A. 171 chữ số",
        "B. 169 chữ số",
        "C. 173 chữ số",
        "D. 170 chữ số"
      ],
      "answer": "A",
      "explanation": "Từ trang 1 đến trang 9 có 9 trang có 1 chữ số = 9 chữ số.\nTừ trang 10 đến trang 90 có 81 trang có 2 chữ số = 162 chữ số.\nTổng số chữ số cần dùng: 9 + 162 = 171 chữ số."
    },
    {
      "id": "ARCH-M-G3-W31-T-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 3,
      "round": "Tuần 31 - Tiết 1",
      "topic": "Phép cộng, trừ trong phạm vi 100.000",
      "text": "[Tuần 31 - Tiết 1] Nội dung: Phép cộng, trừ trong phạm vi 100.000. Tìm x biết: x : 4 = 175",
      "options": [
        "A. 700",
        "B. 705",
        "C. 695",
        "D. 710"
      ],
      "answer": "A",
      "explanation": "x = 175 × 4 = 700."
    },
    {
      "id": "ARCH-M-G3-W31-T-2",
      "exam": "ARCHIMEDES_MATH",
      "grade": 3,
      "round": "Tuần 31 - Tiết 2",
      "topic": "Phép cộng, trừ trong phạm vi 100.000",
      "text": "[Tuần 31 - Tiết 2] Nội dung: Phép cộng, trừ trong phạm vi 100.000. Tìm x biết: x : 5 = 175",
      "options": [
        "A. 875",
        "B. 880",
        "C. 870",
        "D. 885"
      ],
      "answer": "A",
      "explanation": "x = 175 × 5 = 875."
    },
    {
      "id": "ARCH-M-G3-W31-T-3",
      "exam": "ARCHIMEDES_MATH",
      "grade": 3,
      "round": "Tuần 31 - Tiết 3",
      "topic": "Phép cộng, trừ trong phạm vi 100.000",
      "text": "[Tuần 31 - Tiết 3] Nội dung: Phép cộng, trừ trong phạm vi 100.000. Tìm x biết: x : 6 = 175",
      "options": [
        "A. 1050",
        "B. 1055",
        "C. 1045",
        "D. 1060"
      ],
      "answer": "A",
      "explanation": "x = 175 × 6 = 1050."
    },
    {
      "id": "ARCH-M-G3-W31-PKT-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 3,
      "round": "Tuần 31 - Phiếu cuối tuần",
      "topic": "Phép cộng, trừ trong phạm vi 100.000",
      "text": "[Phiếu cuối tuần 31] Chủ đề: Phép cộng, trừ trong phạm vi 100.000. Một hình chữ nhật có chiều dài 410cm, chiều rộng bằng một nửa chiều dài. Chu vi hình chữ nhật đó là:",
      "options": [
        "A. 1230cm",
        "B. 1210cm",
        "C. 1250cm",
        "D. 615cm"
      ],
      "answer": "A",
      "explanation": "Chiều rộng là: 410 : 2 = 205 cm.\nChu vi hình chữ nhật là: (410 + 205) × 2 = 1230 cm."
    },
    {
      "id": "ARCH-M-G3-W31-TTK-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 3,
      "round": "Tuần 31 - Bài tập tham khảo",
      "topic": "Phép cộng, trừ trong phạm vi 100.000",
      "text": "[Toán Olympic Archimedes Tuần 31] Để đánh số trang một tập tài liệu từ trang 1 đến trang 92, người ta cần dùng bao nhiêu chữ số?",
      "options": [
        "A. 175 chữ số",
        "B. 173 chữ số",
        "C. 177 chữ số",
        "D. 174 chữ số"
      ],
      "answer": "A",
      "explanation": "Từ trang 1 đến trang 9 có 9 trang có 1 chữ số = 9 chữ số.\nTừ trang 10 đến trang 92 có 83 trang có 2 chữ số = 166 chữ số.\nTổng số chữ số cần dùng: 9 + 166 = 175 chữ số."
    },
    {
      "id": "ARCH-M-G3-W32-T-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 3,
      "round": "Tuần 32 - Tiết 1",
      "topic": "Nhân, chia trong phạm vi 100.000",
      "text": "[Tuần 32 - Tiết 1] Nội dung: Nhân, chia trong phạm vi 100.000. Tìm x biết: x : 4 = 180",
      "options": [
        "A. 720",
        "B. 725",
        "C. 715",
        "D. 730"
      ],
      "answer": "A",
      "explanation": "x = 180 × 4 = 720."
    },
    {
      "id": "ARCH-M-G3-W32-T-2",
      "exam": "ARCHIMEDES_MATH",
      "grade": 3,
      "round": "Tuần 32 - Tiết 2",
      "topic": "Nhân, chia trong phạm vi 100.000",
      "text": "[Tuần 32 - Tiết 2] Nội dung: Nhân, chia trong phạm vi 100.000. Tìm x biết: x : 5 = 180",
      "options": [
        "A. 900",
        "B. 905",
        "C. 895",
        "D. 910"
      ],
      "answer": "A",
      "explanation": "x = 180 × 5 = 900."
    },
    {
      "id": "ARCH-M-G3-W32-T-3",
      "exam": "ARCHIMEDES_MATH",
      "grade": 3,
      "round": "Tuần 32 - Tiết 3",
      "topic": "Nhân, chia trong phạm vi 100.000",
      "text": "[Tuần 32 - Tiết 3] Nội dung: Nhân, chia trong phạm vi 100.000. Tìm x biết: x : 6 = 180",
      "options": [
        "A. 1080",
        "B. 1085",
        "C. 1075",
        "D. 1090"
      ],
      "answer": "A",
      "explanation": "x = 180 × 6 = 1080."
    },
    {
      "id": "ARCH-M-G3-W32-PKT-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 3,
      "round": "Tuần 32 - Phiếu cuối tuần",
      "topic": "Nhân, chia trong phạm vi 100.000",
      "text": "[Phiếu cuối tuần 32] Chủ đề: Nhân, chia trong phạm vi 100.000. Một hình chữ nhật có chiều dài 420cm, chiều rộng bằng một nửa chiều dài. Chu vi hình chữ nhật đó là:",
      "options": [
        "A. 1260cm",
        "B. 1240cm",
        "C. 1280cm",
        "D. 630cm"
      ],
      "answer": "A",
      "explanation": "Chiều rộng là: 420 : 2 = 210 cm.\nChu vi hình chữ nhật là: (420 + 210) × 2 = 1260 cm."
    },
    {
      "id": "ARCH-M-G3-W32-TTK-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 3,
      "round": "Tuần 32 - Bài tập tham khảo",
      "topic": "Nhân, chia trong phạm vi 100.000",
      "text": "[Toán Olympic Archimedes Tuần 32] Để đánh số trang một tập tài liệu từ trang 1 đến trang 94, người ta cần dùng bao nhiêu chữ số?",
      "options": [
        "A. 179 chữ số",
        "B. 177 chữ số",
        "C. 181 chữ số",
        "D. 178 chữ số"
      ],
      "answer": "A",
      "explanation": "Từ trang 1 đến trang 9 có 9 trang có 1 chữ số = 9 chữ số.\nTừ trang 10 đến trang 94 có 85 trang có 2 chữ số = 170 chữ số.\nTổng số chữ số cần dùng: 9 + 170 = 179 chữ số."
    },
    {
      "id": "ARCH-M-G3-W33-T-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 3,
      "round": "Tuần 33 - Tiết 1",
      "topic": "Toán tư duy đánh số trang sách",
      "text": "[Tuần 33 - Tiết 1] Nội dung: Toán tư duy đánh số trang sách. Tìm x biết: x : 4 = 185",
      "options": [
        "A. 740",
        "B. 745",
        "C. 735",
        "D. 750"
      ],
      "answer": "A",
      "explanation": "x = 185 × 4 = 740."
    },
    {
      "id": "ARCH-M-G3-W33-T-2",
      "exam": "ARCHIMEDES_MATH",
      "grade": 3,
      "round": "Tuần 33 - Tiết 2",
      "topic": "Toán tư duy đánh số trang sách",
      "text": "[Tuần 33 - Tiết 2] Nội dung: Toán tư duy đánh số trang sách. Tìm x biết: x : 5 = 185",
      "options": [
        "A. 925",
        "B. 930",
        "C. 920",
        "D. 935"
      ],
      "answer": "A",
      "explanation": "x = 185 × 5 = 925."
    },
    {
      "id": "ARCH-M-G3-W33-T-3",
      "exam": "ARCHIMEDES_MATH",
      "grade": 3,
      "round": "Tuần 33 - Tiết 3",
      "topic": "Toán tư duy đánh số trang sách",
      "text": "[Tuần 33 - Tiết 3] Nội dung: Toán tư duy đánh số trang sách. Tìm x biết: x : 6 = 185",
      "options": [
        "A. 1110",
        "B. 1115",
        "C. 1105",
        "D. 1120"
      ],
      "answer": "A",
      "explanation": "x = 185 × 6 = 1110."
    },
    {
      "id": "ARCH-M-G3-W33-PKT-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 3,
      "round": "Tuần 33 - Phiếu cuối tuần",
      "topic": "Toán tư duy đánh số trang sách",
      "text": "[Phiếu cuối tuần 33] Chủ đề: Toán tư duy đánh số trang sách. Một hình chữ nhật có chiều dài 430cm, chiều rộng bằng một nửa chiều dài. Chu vi hình chữ nhật đó là:",
      "options": [
        "A. 1290cm",
        "B. 1270cm",
        "C. 1310cm",
        "D. 645cm"
      ],
      "answer": "A",
      "explanation": "Chiều rộng là: 430 : 2 = 215 cm.\nChu vi hình chữ nhật là: (430 + 215) × 2 = 1290 cm."
    },
    {
      "id": "ARCH-M-G3-W33-TTK-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 3,
      "round": "Tuần 33 - Bài tập tham khảo",
      "topic": "Toán tư duy đánh số trang sách",
      "text": "[Toán Olympic Archimedes Tuần 33] Để đánh số trang một tập tài liệu từ trang 1 đến trang 96, người ta cần dùng bao nhiêu chữ số?",
      "options": [
        "A. 183 chữ số",
        "B. 181 chữ số",
        "C. 185 chữ số",
        "D. 182 chữ số"
      ],
      "answer": "A",
      "explanation": "Từ trang 1 đến trang 9 có 9 trang có 1 chữ số = 9 chữ số.\nTừ trang 10 đến trang 96 có 87 trang có 2 chữ số = 174 chữ số.\nTổng số chữ số cần dùng: 9 + 174 = 183 chữ số."
    },
    {
      "id": "ARCH-M-G3-W34-T-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 3,
      "round": "Tuần 34 - Tiết 1",
      "topic": "Bảng thống kê và biểu đồ tranh",
      "text": "[Tuần 34 - Tiết 1] Nội dung: Bảng thống kê và biểu đồ tranh. Tìm x biết: x : 4 = 190",
      "options": [
        "A. 760",
        "B. 765",
        "C. 755",
        "D. 770"
      ],
      "answer": "A",
      "explanation": "x = 190 × 4 = 760."
    },
    {
      "id": "ARCH-M-G3-W34-T-2",
      "exam": "ARCHIMEDES_MATH",
      "grade": 3,
      "round": "Tuần 34 - Tiết 2",
      "topic": "Bảng thống kê và biểu đồ tranh",
      "text": "[Tuần 34 - Tiết 2] Nội dung: Bảng thống kê và biểu đồ tranh. Tìm x biết: x : 5 = 190",
      "options": [
        "A. 950",
        "B. 955",
        "C. 945",
        "D. 960"
      ],
      "answer": "A",
      "explanation": "x = 190 × 5 = 950."
    },
    {
      "id": "ARCH-M-G3-W34-T-3",
      "exam": "ARCHIMEDES_MATH",
      "grade": 3,
      "round": "Tuần 34 - Tiết 3",
      "topic": "Bảng thống kê và biểu đồ tranh",
      "text": "[Tuần 34 - Tiết 3] Nội dung: Bảng thống kê và biểu đồ tranh. Tìm x biết: x : 6 = 190",
      "options": [
        "A. 1140",
        "B. 1145",
        "C. 1135",
        "D. 1150"
      ],
      "answer": "A",
      "explanation": "x = 190 × 6 = 1140."
    },
    {
      "id": "ARCH-M-G3-W34-PKT-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 3,
      "round": "Tuần 34 - Phiếu cuối tuần",
      "topic": "Bảng thống kê và biểu đồ tranh",
      "text": "[Phiếu cuối tuần 34] Chủ đề: Bảng thống kê và biểu đồ tranh. Một hình chữ nhật có chiều dài 440cm, chiều rộng bằng một nửa chiều dài. Chu vi hình chữ nhật đó là:",
      "options": [
        "A. 1320cm",
        "B. 1300cm",
        "C. 1340cm",
        "D. 660cm"
      ],
      "answer": "A",
      "explanation": "Chiều rộng là: 440 : 2 = 220 cm.\nChu vi hình chữ nhật là: (440 + 220) × 2 = 1320 cm."
    },
    {
      "id": "ARCH-M-G3-W34-TTK-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 3,
      "round": "Tuần 34 - Bài tập tham khảo",
      "topic": "Bảng thống kê và biểu đồ tranh",
      "text": "[Toán Olympic Archimedes Tuần 34] Để đánh số trang một tập tài liệu từ trang 1 đến trang 98, người ta cần dùng bao nhiêu chữ số?",
      "options": [
        "A. 187 chữ số",
        "B. 185 chữ số",
        "C. 189 chữ số",
        "D. 186 chữ số"
      ],
      "answer": "A",
      "explanation": "Từ trang 1 đến trang 9 có 9 trang có 1 chữ số = 9 chữ số.\nTừ trang 10 đến trang 98 có 89 trang có 2 chữ số = 178 chữ số.\nTổng số chữ số cần dùng: 9 + 178 = 187 chữ số."
    },
    {
      "id": "ARCH-M-G3-W35-T-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 3,
      "round": "Tuần 35 - Tiết 1",
      "topic": "Ôn tập tổng kết cuối năm học",
      "text": "[Tuần 35 - Tiết 1] Nội dung: Ôn tập tổng kết cuối năm học. Tìm x biết: x : 4 = 195",
      "options": [
        "A. 780",
        "B. 785",
        "C. 775",
        "D. 790"
      ],
      "answer": "A",
      "explanation": "x = 195 × 4 = 780."
    },
    {
      "id": "ARCH-M-G3-W35-T-2",
      "exam": "ARCHIMEDES_MATH",
      "grade": 3,
      "round": "Tuần 35 - Tiết 2",
      "topic": "Ôn tập tổng kết cuối năm học",
      "text": "[Tuần 35 - Tiết 2] Nội dung: Ôn tập tổng kết cuối năm học. Tìm x biết: x : 5 = 195",
      "options": [
        "A. 975",
        "B. 980",
        "C. 970",
        "D. 985"
      ],
      "answer": "A",
      "explanation": "x = 195 × 5 = 975."
    },
    {
      "id": "ARCH-M-G3-W35-T-3",
      "exam": "ARCHIMEDES_MATH",
      "grade": 3,
      "round": "Tuần 35 - Tiết 3",
      "topic": "Ôn tập tổng kết cuối năm học",
      "text": "[Tuần 35 - Tiết 3] Nội dung: Ôn tập tổng kết cuối năm học. Tìm x biết: x : 6 = 195",
      "options": [
        "A. 1170",
        "B. 1175",
        "C. 1165",
        "D. 1180"
      ],
      "answer": "A",
      "explanation": "x = 195 × 6 = 1170."
    },
    {
      "id": "ARCH-M-G3-W35-PKT-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 3,
      "round": "Tuần 35 - Phiếu cuối tuần",
      "topic": "Ôn tập tổng kết cuối năm học",
      "text": "[Phiếu cuối tuần 35] Chủ đề: Ôn tập tổng kết cuối năm học. Một hình chữ nhật có chiều dài 450cm, chiều rộng bằng một nửa chiều dài. Chu vi hình chữ nhật đó là:",
      "options": [
        "A. 1350cm",
        "B. 1330cm",
        "C. 1370cm",
        "D. 675cm"
      ],
      "answer": "A",
      "explanation": "Chiều rộng là: 450 : 2 = 225 cm.\nChu vi hình chữ nhật là: (450 + 225) × 2 = 1350 cm."
    },
    {
      "id": "ARCH-M-G3-W35-TTK-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 3,
      "round": "Tuần 35 - Bài tập tham khảo",
      "topic": "Ôn tập tổng kết cuối năm học",
      "text": "[Toán Olympic Archimedes Tuần 35] Để đánh số trang một tập tài liệu từ trang 1 đến trang 100, người ta cần dùng bao nhiêu chữ số?",
      "options": [
        "A. 191 chữ số",
        "B. 189 chữ số",
        "C. 193 chữ số",
        "D. 190 chữ số"
      ],
      "answer": "A",
      "explanation": "Từ trang 1 đến trang 9 có 9 trang có 1 chữ số = 9 chữ số.\nTừ trang 10 đến trang 100 có 91 trang có 2 chữ số = 182 chữ số.\nTổng số chữ số cần dùng: 9 + 182 = 191 chữ số."
    }
  ],
  "grade4": [
    {
      "id": "ARCH-M-G4-W1-T1-01",
      "exam": "ARCHIMEDES_MATH",
      "grade": 4,
      "round": "Tuần 1 - Tiết 1",
      "topic": "Các số đến 100.000",
      "text": "Số gồm 8 chục nghìn, 5 nghìn, 2 trăm, 0 chục và 7 đơn vị viết là:",
      "options": [
        "A. 85.207",
        "B. 85.270",
        "C. 85.027",
        "D. 852.007"
      ],
      "answer": "A",
      "explanation": "Số gồm 8 chục nghìn, 5 nghìn, 2 trăm, 0 chục, 7 đơn vị viết là 85.207."
    },
    {
      "id": "ARCH-M-G4-W1-T1-02",
      "exam": "ARCHIMEDES_MATH",
      "grade": 4,
      "round": "Tuần 1 - Tiết 1",
      "topic": "Giá trị của chữ số theo vị trí",
      "text": "Trong số 74.528, giá trị của chữ số 4 là bao nhiêu?",
      "options": [
        "A. 40.000",
        "B. 4.000",
        "C. 400",
        "D. 40"
      ],
      "answer": "B",
      "explanation": "Chữ số 4 thuộc hàng nghìn nên có giá trị là 4.000."
    },
    {
      "id": "ARCH-M-G4-W1-T1-03",
      "exam": "ARCHIMEDES_MATH",
      "grade": 4,
      "round": "Tuần 1 - Tiết 1",
      "topic": "Biểu thức có chứa một chữ",
      "text": "Tính giá trị của biểu thức 45 + a với a = 25.",
      "options": [
        "A. 60",
        "B. 70",
        "C. 65",
        "D. 75"
      ],
      "answer": "B",
      "explanation": "Thay a = 25 vào biểu thức: 45 + 25 = 70."
    },
    {
      "id": "ARCH-M-G4-W1-T1-04",
      "exam": "ARCHIMEDES_MATH",
      "grade": 4,
      "round": "Tuần 1 - Tiết 1",
      "topic": "Biểu thức có chứa một chữ",
      "text": "Tính giá trị của biểu thức 120 - b × 5 với b = 8.",
      "options": [
        "A. 80",
        "B. 40",
        "C. 70",
        "D. 90"
      ],
      "answer": "A",
      "explanation": "Thay b = 8 vào biểu thức: 120 - 8 × 5 = 120 - 40 = 80."
    },
    {
      "id": "ARCH-M-G4-W1-T1-05",
      "exam": "ARCHIMEDES_MATH",
      "grade": 4,
      "round": "Tuần 1 - Tiết 1",
      "topic": "So sánh số lớn",
      "text": "Số lớn nhất trong các số: 78.432; 78.423; 78.490; 78.399 là số nào?",
      "options": [
        "A. 78.432",
        "B. 78.490",
        "C. 78.423",
        "D. 78.399"
      ],
      "answer": "B",
      "explanation": "So sánh các chữ số cùng hàng từ trái sang phải, số 78.490 có chữ số hàng chục là 9 lớn nhất."
    },
    {
      "id": "ARCH-M-G4-W1-T2-01",
      "exam": "ARCHIMEDES_MATH",
      "grade": 4,
      "round": "Tuần 1 - Tiết 2",
      "topic": "Hàng và lớp",
      "text": "Lớp nghìn của số 648.219 gồm những chữ số nào?",
      "options": [
        "A. 2, 1, 9",
        "B. 6, 4, 8",
        "C. 6, 4, 2",
        "D. 4, 8, 2"
      ],
      "answer": "B",
      "explanation": "Lớp nghìn gồm hàng trăm nghìn, chục nghìn, hàng nghìn. Trong số 648.219, các chữ số lớp nghìn là 6, 4, 8."
    },
    {
      "id": "ARCH-M-G4-W1-T2-02",
      "exam": "ARCHIMEDES_MATH",
      "grade": 4,
      "round": "Tuần 1 - Tiết 2",
      "topic": "Số tự nhiên lớn",
      "text": "Số tự nhiên bé nhất có 5 chữ số khác nhau là số nào?",
      "options": [
        "A. 10.000",
        "B. 10.234",
        "C. 12.345",
        "D. 10.123"
      ],
      "answer": "B",
      "explanation": "Để số là bé nhất, các chữ số từ hàng cao xuống hàng thấp phải bé nhất có thể: chữ số đầu tiên khác 0 là 1, tiếp theo là 0, 2, 3, 4. Vậy số đó là 10.234."
    },
    {
      "id": "ARCH-M-G4-W1-T2-03",
      "exam": "ARCHIMEDES_MATH",
      "grade": 4,
      "round": "Tuần 1 - Tiết 2",
      "topic": "Triệu và lớp triệu",
      "text": "Số 'Mười lăm triệu không trăm hai mươi nghìn' được viết là:",
      "options": [
        "A. 15.020.000",
        "B. 15.200.000",
        "C. 15.000.020",
        "D. 1.520.000"
      ],
      "answer": "A",
      "explanation": "Số mười lăm triệu (15) không trăm hai mươi nghìn (020) và lớp đơn vị là (000): 15.020.000."
    },
    {
      "id": "ARCH-M-G4-W1-T2-04",
      "exam": "ARCHIMEDES_MATH",
      "grade": 4,
      "round": "Tuần 1 - Tiết 2",
      "topic": "Dãy số tự nhiên",
      "text": "Hai số tự nhiên liên tiếp hơn kém nhau bao nhiêu đơn vị?",
      "options": [
        "A. 1 đơn vị",
        "B. 2 đơn vị",
        "C. 10 đơn vị",
        "D. 0 đơn vị"
      ],
      "answer": "A",
      "explanation": "Trong dãy số tự nhiên, hai số liên tiếp hơn kém nhau 1 đơn vị."
    },
    {
      "id": "ARCH-M-G4-W1-T2-05",
      "exam": "ARCHIMEDES_MATH",
      "grade": 4,
      "round": "Tuần 1 - Tiết 2",
      "topic": "Đổi đơn vị khối lượng",
      "text": "4 tấn 5 tạ bằng bao nhiêu ki-lô-gam?",
      "options": [
        "A. 4.500 kg",
        "B. 4.050 kg",
        "C. 450 kg",
        "D. 40.500 kg"
      ],
      "answer": "A",
      "explanation": "4 tấn = 4.000 kg; 5 tạ = 500 kg. Vậy 4 tấn 5 tạ = 4.500 kg."
    },
    {
      "id": "ARCH-M-G4-W1-TTK-01",
      "exam": "ARCHIMEDES_MATH",
      "grade": 4,
      "round": "Tuần 1 - Bài tập tham khảo",
      "topic": "Tính tổng dãy số cách đều",
      "text": "Tính tổng: S = 2 + 4 + 6 + 8 + ... + 40",
      "options": [
        "A. 420",
        "B. 400",
        "C. 440",
        "D. 410"
      ],
      "answer": "A",
      "explanation": "Số số hạng = (40 - 2) : 2 + 1 = 20 số. Tổng S = (2 + 40) × 20 : 2 = 42 × 10 = 420."
    },
    {
      "id": "ARCH-M-G4-W1-TTK-02",
      "exam": "ARCHIMEDES_MATH",
      "grade": 4,
      "round": "Tuần 1 - Bài tập tham khảo",
      "topic": "Toán tư duy chữ số trang sách Archimedes",
      "text": "Để đánh số trang một cuốn sách Toán nâng cao từ trang 1 đến hết, người ta dùng tất cả 282 chữ số. Hỏi cuốn sách đó dày bao nhiêu trang?",
      "options": [
        "A. 130 trang",
        "B. 125 trang",
        "C. 135 trang",
        "D. 120 trang"
      ],
      "answer": "A",
      "explanation": "Từ trang 1 đến 9: dùng 9 chữ số. Từ trang 10 đến 99 (90 trang): dùng 90 × 2 = 180 chữ số. Số chữ số còn lại để đánh trang có 3 chữ số: 282 - (9 + 180) = 93 chữ số. Số trang có 3 chữ số: 93 : 3 = 31 trang. Vậy cuốn sách dày: 99 + 31 = 130 trang."
    },
    {
      "id": "ARCH-M-G4-W1-TTK-03",
      "exam": "ARCHIMEDES_MATH",
      "grade": 4,
      "round": "Tuần 1 - Bài tập tham khảo",
      "topic": "Toán tư duy logic chia hết",
      "text": "Tìm số tự nhiên nhỏ nhất chia cho 2 dư 1, chia cho 3 dư 2, chia cho 5 dư 4.",
      "options": [
        "A. 29",
        "B. 59",
        "C. 19",
        "D. 39"
      ],
      "answer": "A",
      "explanation": "Gọi số đó là a. Ta thấy nếu thêm 1 vào a thì: a + 1 chia hết cho 2, 3 và 5. Số nhỏ nhất khác 0 chia hết cho cả 2, 3, 5 là: 2 × 3 × 5 = 30. Vậy a + 1 = 30 -> a = 29."
    },
    {
      "id": "ARCH-M-G4-W1-TTK-04",
      "exam": "ARCHIMEDES_MATH",
      "grade": 4,
      "round": "Tuần 1 - Bài tập tham khảo",
      "topic": "Toán tư duy điền chữ số cryptarithm",
      "text": "Tìm chữ số X biết: $\\overline{XX} + \\overline{XX} + X = 115$",
      "options": [
        "A. 5",
        "B. 4",
        "C. 6",
        "D. 3"
      ],
      "answer": "A",
      "explanation": "Ta có: $\\overline{XX} = 11 \\times X$. Vậy biểu thức trở thành: $11 \\times X + 11 \\times X + X = 23 \\times X = 115$ -> $X = 115 : 23 = 5$."
    },
    {
      "id": "ARCH-M-G4-W1-TTK-05",
      "exam": "ARCHIMEDES_MATH",
      "grade": 4,
      "round": "Tuần 1 - Bài tập tham khảo",
      "topic": "Toán giả thiết tạm Archimedes",
      "text": "Vừa gà vừa chó có tất cả 20 con và 56 cái chân. Hỏi có bao nhiêu con chó?",
      "options": [
        "A. 8 con chó",
        "B. 12 con chó",
        "C. 10 con chó",
        "D. 6 con chó"
      ],
      "answer": "A",
      "explanation": "Giả sử cả 20 con đều là gà thì có số chân: 20 × 2 = 40 chân. Số chân bị hụt đi: 56 - 40 = 16 chân. Mỗi con chó nhiều hơn mỗi con gà: 4 - 2 = 2 chân. Số con chó là: 16 : 2 = 8 con chó (và có 12 con gà)."
    },
    {
      "id": "ARCH-M-G4-W1-T-3",
      "exam": "ARCHIMEDES_MATH",
      "grade": 4,
      "round": "Tuần 1 - Tiết 3",
      "topic": "Các số đến 100.000, biểu thức chứa một chữ",
      "text": "[Tuần 1 - Tiết 3] Trọng tâm: Các số đến 100.000, biểu thức chứa một chữ. Tính nhanh giá trị của biểu thức: 175 × 4 + 175 × 6 = ?",
      "options": [
        "A. 1750",
        "B. 1850",
        "C. 1650",
        "D. 875"
      ],
      "answer": "A",
      "explanation": "Đặt thừa số chung: 175 × (4 + 6) = 175 × 10 = 1750."
    },
    {
      "id": "ARCH-M-G4-W2-T-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 4,
      "round": "Tuần 2 - Tiết 1",
      "topic": "Hàng và lớp, triệu và lớp triệu",
      "text": "[Tuần 2 - Tiết 1] Trọng tâm: Hàng và lớp, triệu và lớp triệu. Tính nhanh giá trị của biểu thức: 225 × 4 + 225 × 6 = ?",
      "options": [
        "A. 2250",
        "B. 2350",
        "C. 2150",
        "D. 1125"
      ],
      "answer": "A",
      "explanation": "Đặt thừa số chung: 225 × (4 + 6) = 225 × 10 = 2250."
    },
    {
      "id": "ARCH-M-G4-W2-T-2",
      "exam": "ARCHIMEDES_MATH",
      "grade": 4,
      "round": "Tuần 2 - Tiết 2",
      "topic": "Hàng và lớp, triệu và lớp triệu",
      "text": "[Tuần 2 - Tiết 2] Trọng tâm: Hàng và lớp, triệu và lớp triệu. Tính nhanh giá trị của biểu thức: 250 × 4 + 250 × 6 = ?",
      "options": [
        "A. 2500",
        "B. 2600",
        "C. 2400",
        "D. 1250"
      ],
      "answer": "A",
      "explanation": "Đặt thừa số chung: 250 × (4 + 6) = 250 × 10 = 2500."
    },
    {
      "id": "ARCH-M-G4-W2-T-3",
      "exam": "ARCHIMEDES_MATH",
      "grade": 4,
      "round": "Tuần 2 - Tiết 3",
      "topic": "Hàng và lớp, triệu và lớp triệu",
      "text": "[Tuần 2 - Tiết 3] Trọng tâm: Hàng và lớp, triệu và lớp triệu. Tính nhanh giá trị của biểu thức: 275 × 4 + 275 × 6 = ?",
      "options": [
        "A. 2750",
        "B. 2850",
        "C. 2650",
        "D. 1375"
      ],
      "answer": "A",
      "explanation": "Đặt thừa số chung: 275 × (4 + 6) = 275 × 10 = 2750."
    },
    {
      "id": "ARCH-M-G4-W2-TTK-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 4,
      "round": "Tuần 2 - Bài tập tham khảo",
      "topic": "Hàng và lớp, triệu và lớp triệu",
      "text": "[Toán Olympic Archimedes Tuần 2] Tính tổng của dãy số cách đều sau: S = 2 + 4 + 6 + ... + 44",
      "options": [
        "A. 506",
        "B. 516",
        "C. 496",
        "D. 526"
      ],
      "answer": "A",
      "explanation": "Số số hạng = (44 - 2) : 2 + 1 = 22 số.\nTổng S = (2 + 44) × 22 : 2 = 506."
    },
    {
      "id": "ARCH-M-G4-W3-T-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 4,
      "round": "Tuần 3 - Tiết 1",
      "topic": "Dãy số tự nhiên, viết số trong hệ thập phân",
      "text": "[Tuần 3 - Tiết 1] Trọng tâm: Dãy số tự nhiên, viết số trong hệ thập phân. Tính nhanh giá trị của biểu thức: 325 × 4 + 325 × 6 = ?",
      "options": [
        "A. 3250",
        "B. 3350",
        "C. 3150",
        "D. 1625"
      ],
      "answer": "A",
      "explanation": "Đặt thừa số chung: 325 × (4 + 6) = 325 × 10 = 3250."
    },
    {
      "id": "ARCH-M-G4-W3-T-2",
      "exam": "ARCHIMEDES_MATH",
      "grade": 4,
      "round": "Tuần 3 - Tiết 2",
      "topic": "Dãy số tự nhiên, viết số trong hệ thập phân",
      "text": "[Tuần 3 - Tiết 2] Trọng tâm: Dãy số tự nhiên, viết số trong hệ thập phân. Tính nhanh giá trị của biểu thức: 350 × 4 + 350 × 6 = ?",
      "options": [
        "A. 3500",
        "B. 3600",
        "C. 3400",
        "D. 1750"
      ],
      "answer": "A",
      "explanation": "Đặt thừa số chung: 350 × (4 + 6) = 350 × 10 = 3500."
    },
    {
      "id": "ARCH-M-G4-W3-T-3",
      "exam": "ARCHIMEDES_MATH",
      "grade": 4,
      "round": "Tuần 3 - Tiết 3",
      "topic": "Dãy số tự nhiên, viết số trong hệ thập phân",
      "text": "[Tuần 3 - Tiết 3] Trọng tâm: Dãy số tự nhiên, viết số trong hệ thập phân. Tính nhanh giá trị của biểu thức: 375 × 4 + 375 × 6 = ?",
      "options": [
        "A. 3750",
        "B. 3850",
        "C. 3650",
        "D. 1875"
      ],
      "answer": "A",
      "explanation": "Đặt thừa số chung: 375 × (4 + 6) = 375 × 10 = 3750."
    },
    {
      "id": "ARCH-M-G4-W3-TTK-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 4,
      "round": "Tuần 3 - Bài tập tham khảo",
      "topic": "Dãy số tự nhiên, viết số trong hệ thập phân",
      "text": "[Toán Olympic Archimedes Tuần 3] Tính tổng của dãy số cách đều sau: S = 2 + 4 + 6 + ... + 46",
      "options": [
        "A. 552",
        "B. 562",
        "C. 542",
        "D. 572"
      ],
      "answer": "A",
      "explanation": "Số số hạng = (46 - 2) : 2 + 1 = 23 số.\nTổng S = (2 + 46) × 23 : 2 = 552."
    },
    {
      "id": "ARCH-M-G4-W4-T-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 4,
      "round": "Tuần 4 - Tiết 1",
      "topic": "So sánh số tự nhiên, yến/tạ/tấn",
      "text": "[Tuần 4 - Tiết 1] Trọng tâm: So sánh số tự nhiên, yến/tạ/tấn. Tính nhanh giá trị của biểu thức: 425 × 4 + 425 × 6 = ?",
      "options": [
        "A. 4250",
        "B. 4350",
        "C. 4150",
        "D. 2125"
      ],
      "answer": "A",
      "explanation": "Đặt thừa số chung: 425 × (4 + 6) = 425 × 10 = 4250."
    },
    {
      "id": "ARCH-M-G4-W4-T-2",
      "exam": "ARCHIMEDES_MATH",
      "grade": 4,
      "round": "Tuần 4 - Tiết 2",
      "topic": "So sánh số tự nhiên, yến/tạ/tấn",
      "text": "[Tuần 4 - Tiết 2] Trọng tâm: So sánh số tự nhiên, yến/tạ/tấn. Tính nhanh giá trị của biểu thức: 450 × 4 + 450 × 6 = ?",
      "options": [
        "A. 4500",
        "B. 4600",
        "C. 4400",
        "D. 2250"
      ],
      "answer": "A",
      "explanation": "Đặt thừa số chung: 450 × (4 + 6) = 450 × 10 = 4500."
    },
    {
      "id": "ARCH-M-G4-W4-T-3",
      "exam": "ARCHIMEDES_MATH",
      "grade": 4,
      "round": "Tuần 4 - Tiết 3",
      "topic": "So sánh số tự nhiên, yến/tạ/tấn",
      "text": "[Tuần 4 - Tiết 3] Trọng tâm: So sánh số tự nhiên, yến/tạ/tấn. Tính nhanh giá trị của biểu thức: 475 × 4 + 475 × 6 = ?",
      "options": [
        "A. 4750",
        "B. 4850",
        "C. 4650",
        "D. 2375"
      ],
      "answer": "A",
      "explanation": "Đặt thừa số chung: 475 × (4 + 6) = 475 × 10 = 4750."
    },
    {
      "id": "ARCH-M-G4-W4-TTK-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 4,
      "round": "Tuần 4 - Bài tập tham khảo",
      "topic": "So sánh số tự nhiên, yến/tạ/tấn",
      "text": "[Toán Olympic Archimedes Tuần 4] Tính tổng của dãy số cách đều sau: S = 2 + 4 + 6 + ... + 48",
      "options": [
        "A. 600",
        "B. 610",
        "C. 590",
        "D. 620"
      ],
      "answer": "A",
      "explanation": "Số số hạng = (48 - 2) : 2 + 1 = 24 số.\nTổng S = (2 + 48) × 24 : 2 = 600."
    },
    {
      "id": "ARCH-M-G4-W5-T-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 4,
      "round": "Tuần 5 - Tiết 1",
      "topic": "Bảng đơn vị khối lượng, giây và thế kỉ",
      "text": "[Tuần 5 - Tiết 1] Trọng tâm: Bảng đơn vị khối lượng, giây và thế kỉ. Tính nhanh giá trị của biểu thức: 525 × 4 + 525 × 6 = ?",
      "options": [
        "A. 5250",
        "B. 5350",
        "C. 5150",
        "D. 2625"
      ],
      "answer": "A",
      "explanation": "Đặt thừa số chung: 525 × (4 + 6) = 525 × 10 = 5250."
    },
    {
      "id": "ARCH-M-G4-W5-T-2",
      "exam": "ARCHIMEDES_MATH",
      "grade": 4,
      "round": "Tuần 5 - Tiết 2",
      "topic": "Bảng đơn vị khối lượng, giây và thế kỉ",
      "text": "[Tuần 5 - Tiết 2] Trọng tâm: Bảng đơn vị khối lượng, giây và thế kỉ. Tính nhanh giá trị của biểu thức: 550 × 4 + 550 × 6 = ?",
      "options": [
        "A. 5500",
        "B. 5600",
        "C. 5400",
        "D. 2750"
      ],
      "answer": "A",
      "explanation": "Đặt thừa số chung: 550 × (4 + 6) = 550 × 10 = 5500."
    },
    {
      "id": "ARCH-M-G4-W5-T-3",
      "exam": "ARCHIMEDES_MATH",
      "grade": 4,
      "round": "Tuần 5 - Tiết 3",
      "topic": "Bảng đơn vị khối lượng, giây và thế kỉ",
      "text": "[Tuần 5 - Tiết 3] Trọng tâm: Bảng đơn vị khối lượng, giây và thế kỉ. Tính nhanh giá trị của biểu thức: 575 × 4 + 575 × 6 = ?",
      "options": [
        "A. 5750",
        "B. 5850",
        "C. 5650",
        "D. 2875"
      ],
      "answer": "A",
      "explanation": "Đặt thừa số chung: 575 × (4 + 6) = 575 × 10 = 5750."
    },
    {
      "id": "ARCH-M-G4-W5-TTK-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 4,
      "round": "Tuần 5 - Bài tập tham khảo",
      "topic": "Bảng đơn vị khối lượng, giây và thế kỉ",
      "text": "[Toán Olympic Archimedes Tuần 5] Tính tổng của dãy số cách đều sau: S = 2 + 4 + 6 + ... + 50",
      "options": [
        "A. 650",
        "B. 660",
        "C. 640",
        "D. 670"
      ],
      "answer": "A",
      "explanation": "Số số hạng = (50 - 2) : 2 + 1 = 25 số.\nTổng S = (2 + 50) × 25 : 2 = 650."
    },
    {
      "id": "ARCH-M-G4-W6-T-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 4,
      "round": "Tuần 6 - Tiết 1",
      "topic": "Tìm số trung bình cộng",
      "text": "[Tuần 6 - Tiết 1] Trọng tâm: Tìm số trung bình cộng. Tính nhanh giá trị của biểu thức: 625 × 4 + 625 × 6 = ?",
      "options": [
        "A. 6250",
        "B. 6350",
        "C. 6150",
        "D. 3125"
      ],
      "answer": "A",
      "explanation": "Đặt thừa số chung: 625 × (4 + 6) = 625 × 10 = 6250."
    },
    {
      "id": "ARCH-M-G4-W6-T-2",
      "exam": "ARCHIMEDES_MATH",
      "grade": 4,
      "round": "Tuần 6 - Tiết 2",
      "topic": "Tìm số trung bình cộng",
      "text": "[Tuần 6 - Tiết 2] Trọng tâm: Tìm số trung bình cộng. Tính nhanh giá trị của biểu thức: 650 × 4 + 650 × 6 = ?",
      "options": [
        "A. 6500",
        "B. 6600",
        "C. 6400",
        "D. 3250"
      ],
      "answer": "A",
      "explanation": "Đặt thừa số chung: 650 × (4 + 6) = 650 × 10 = 6500."
    },
    {
      "id": "ARCH-M-G4-W6-T-3",
      "exam": "ARCHIMEDES_MATH",
      "grade": 4,
      "round": "Tuần 6 - Tiết 3",
      "topic": "Tìm số trung bình cộng",
      "text": "[Tuần 6 - Tiết 3] Trọng tâm: Tìm số trung bình cộng. Tính nhanh giá trị của biểu thức: 675 × 4 + 675 × 6 = ?",
      "options": [
        "A. 6750",
        "B. 6850",
        "C. 6650",
        "D. 3375"
      ],
      "answer": "A",
      "explanation": "Đặt thừa số chung: 675 × (4 + 6) = 675 × 10 = 6750."
    },
    {
      "id": "ARCH-M-G4-W6-TTK-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 4,
      "round": "Tuần 6 - Bài tập tham khảo",
      "topic": "Tìm số trung bình cộng",
      "text": "[Toán Olympic Archimedes Tuần 6] Tính tổng của dãy số cách đều sau: S = 2 + 4 + 6 + ... + 52",
      "options": [
        "A. 702",
        "B. 712",
        "C. 692",
        "D. 722"
      ],
      "answer": "A",
      "explanation": "Số số hạng = (52 - 2) : 2 + 1 = 26 số.\nTổng S = (2 + 52) × 26 : 2 = 702."
    },
    {
      "id": "ARCH-M-G4-W7-T-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 4,
      "round": "Tuần 7 - Tiết 1",
      "topic": "Tìm hai số khi biết Tổng và Hiệu",
      "text": "[Tuần 7 - Tiết 1] Trọng tâm: Tìm hai số khi biết Tổng và Hiệu. Tính nhanh giá trị của biểu thức: 725 × 4 + 725 × 6 = ?",
      "options": [
        "A. 7250",
        "B. 7350",
        "C. 7150",
        "D. 3625"
      ],
      "answer": "A",
      "explanation": "Đặt thừa số chung: 725 × (4 + 6) = 725 × 10 = 7250."
    },
    {
      "id": "ARCH-M-G4-W7-T-2",
      "exam": "ARCHIMEDES_MATH",
      "grade": 4,
      "round": "Tuần 7 - Tiết 2",
      "topic": "Tìm hai số khi biết Tổng và Hiệu",
      "text": "[Tuần 7 - Tiết 2] Trọng tâm: Tìm hai số khi biết Tổng và Hiệu. Tính nhanh giá trị của biểu thức: 750 × 4 + 750 × 6 = ?",
      "options": [
        "A. 7500",
        "B. 7600",
        "C. 7400",
        "D. 3750"
      ],
      "answer": "A",
      "explanation": "Đặt thừa số chung: 750 × (4 + 6) = 750 × 10 = 7500."
    },
    {
      "id": "ARCH-M-G4-W7-T-3",
      "exam": "ARCHIMEDES_MATH",
      "grade": 4,
      "round": "Tuần 7 - Tiết 3",
      "topic": "Tìm hai số khi biết Tổng và Hiệu",
      "text": "[Tuần 7 - Tiết 3] Trọng tâm: Tìm hai số khi biết Tổng và Hiệu. Tính nhanh giá trị của biểu thức: 775 × 4 + 775 × 6 = ?",
      "options": [
        "A. 7750",
        "B. 7850",
        "C. 7650",
        "D. 3875"
      ],
      "answer": "A",
      "explanation": "Đặt thừa số chung: 775 × (4 + 6) = 775 × 10 = 7750."
    },
    {
      "id": "ARCH-M-G4-W7-TTK-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 4,
      "round": "Tuần 7 - Bài tập tham khảo",
      "topic": "Tìm hai số khi biết Tổng và Hiệu",
      "text": "[Toán Olympic Archimedes Tuần 7] Tính tổng của dãy số cách đều sau: S = 2 + 4 + 6 + ... + 54",
      "options": [
        "A. 756",
        "B. 766",
        "C. 746",
        "D. 776"
      ],
      "answer": "A",
      "explanation": "Số số hạng = (54 - 2) : 2 + 1 = 27 số.\nTổng S = (2 + 54) × 27 : 2 = 756."
    },
    {
      "id": "ARCH-M-G4-W8-T-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 4,
      "round": "Tuần 8 - Tiết 1",
      "topic": "Góc nhọn, tù, bẹt; đường thẳng vuông góc, song song",
      "text": "[Tuần 8 - Tiết 1] Trọng tâm: Góc nhọn, tù, bẹt; đường thẳng vuông góc, song song. Tính nhanh giá trị của biểu thức: 825 × 4 + 825 × 6 = ?",
      "options": [
        "A. 8250",
        "B. 8350",
        "C. 8150",
        "D. 4125"
      ],
      "answer": "A",
      "explanation": "Đặt thừa số chung: 825 × (4 + 6) = 825 × 10 = 8250."
    },
    {
      "id": "ARCH-M-G4-W8-T-2",
      "exam": "ARCHIMEDES_MATH",
      "grade": 4,
      "round": "Tuần 8 - Tiết 2",
      "topic": "Góc nhọn, tù, bẹt; đường thẳng vuông góc, song song",
      "text": "[Tuần 8 - Tiết 2] Trọng tâm: Góc nhọn, tù, bẹt; đường thẳng vuông góc, song song. Tính nhanh giá trị của biểu thức: 850 × 4 + 850 × 6 = ?",
      "options": [
        "A. 8500",
        "B. 8600",
        "C. 8400",
        "D. 4250"
      ],
      "answer": "A",
      "explanation": "Đặt thừa số chung: 850 × (4 + 6) = 850 × 10 = 8500."
    },
    {
      "id": "ARCH-M-G4-W8-T-3",
      "exam": "ARCHIMEDES_MATH",
      "grade": 4,
      "round": "Tuần 8 - Tiết 3",
      "topic": "Góc nhọn, tù, bẹt; đường thẳng vuông góc, song song",
      "text": "[Tuần 8 - Tiết 3] Trọng tâm: Góc nhọn, tù, bẹt; đường thẳng vuông góc, song song. Tính nhanh giá trị của biểu thức: 875 × 4 + 875 × 6 = ?",
      "options": [
        "A. 8750",
        "B. 8850",
        "C. 8650",
        "D. 4375"
      ],
      "answer": "A",
      "explanation": "Đặt thừa số chung: 875 × (4 + 6) = 875 × 10 = 8750."
    },
    {
      "id": "ARCH-M-G4-W8-TTK-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 4,
      "round": "Tuần 8 - Bài tập tham khảo",
      "topic": "Góc nhọn, tù, bẹt; đường thẳng vuông góc, song song",
      "text": "[Toán Olympic Archimedes Tuần 8] Tính tổng của dãy số cách đều sau: S = 2 + 4 + 6 + ... + 56",
      "options": [
        "A. 812",
        "B. 822",
        "C. 802",
        "D. 832"
      ],
      "answer": "A",
      "explanation": "Số số hạng = (56 - 2) : 2 + 1 = 28 số.\nTổng S = (2 + 56) × 28 : 2 = 812."
    },
    {
      "id": "ARCH-M-G4-W9-T-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 4,
      "round": "Tuần 9 - Tiết 1",
      "topic": "Ôn tập giữa học kì 1",
      "text": "[Tuần 9 - Tiết 1] Trọng tâm: Ôn tập giữa học kì 1. Tính nhanh giá trị của biểu thức: 925 × 4 + 925 × 6 = ?",
      "options": [
        "A. 9250",
        "B. 9350",
        "C. 9150",
        "D. 4625"
      ],
      "answer": "A",
      "explanation": "Đặt thừa số chung: 925 × (4 + 6) = 925 × 10 = 9250."
    },
    {
      "id": "ARCH-M-G4-W9-T-2",
      "exam": "ARCHIMEDES_MATH",
      "grade": 4,
      "round": "Tuần 9 - Tiết 2",
      "topic": "Ôn tập giữa học kì 1",
      "text": "[Tuần 9 - Tiết 2] Trọng tâm: Ôn tập giữa học kì 1. Tính nhanh giá trị của biểu thức: 950 × 4 + 950 × 6 = ?",
      "options": [
        "A. 9500",
        "B. 9600",
        "C. 9400",
        "D. 4750"
      ],
      "answer": "A",
      "explanation": "Đặt thừa số chung: 950 × (4 + 6) = 950 × 10 = 9500."
    },
    {
      "id": "ARCH-M-G4-W9-T-3",
      "exam": "ARCHIMEDES_MATH",
      "grade": 4,
      "round": "Tuần 9 - Tiết 3",
      "topic": "Ôn tập giữa học kì 1",
      "text": "[Tuần 9 - Tiết 3] Trọng tâm: Ôn tập giữa học kì 1. Tính nhanh giá trị của biểu thức: 975 × 4 + 975 × 6 = ?",
      "options": [
        "A. 9750",
        "B. 9850",
        "C. 9650",
        "D. 4875"
      ],
      "answer": "A",
      "explanation": "Đặt thừa số chung: 975 × (4 + 6) = 975 × 10 = 9750."
    },
    {
      "id": "ARCH-M-G4-W9-TTK-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 4,
      "round": "Tuần 9 - Bài tập tham khảo",
      "topic": "Ôn tập giữa học kì 1",
      "text": "[Toán Olympic Archimedes Tuần 9] Tính tổng của dãy số cách đều sau: S = 2 + 4 + 6 + ... + 58",
      "options": [
        "A. 870",
        "B. 880",
        "C. 860",
        "D. 890"
      ],
      "answer": "A",
      "explanation": "Số số hạng = (58 - 2) : 2 + 1 = 29 số.\nTổng S = (2 + 58) × 29 : 2 = 870."
    },
    {
      "id": "ARCH-M-G4-W10-T-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 4,
      "round": "Tuần 10 - Tiết 1",
      "topic": "Nhân với số có một chữ số, tính chất giao hoán, kết hợp",
      "text": "[Tuần 10 - Tiết 1] Trọng tâm: Nhân với số có một chữ số, tính chất giao hoán, kết hợp. Tính nhanh giá trị của biểu thức: 1025 × 4 + 1025 × 6 = ?",
      "options": [
        "A. 10250",
        "B. 10350",
        "C. 10150",
        "D. 5125"
      ],
      "answer": "A",
      "explanation": "Đặt thừa số chung: 1025 × (4 + 6) = 1025 × 10 = 10250."
    },
    {
      "id": "ARCH-M-G4-W10-T-2",
      "exam": "ARCHIMEDES_MATH",
      "grade": 4,
      "round": "Tuần 10 - Tiết 2",
      "topic": "Nhân với số có một chữ số, tính chất giao hoán, kết hợp",
      "text": "[Tuần 10 - Tiết 2] Trọng tâm: Nhân với số có một chữ số, tính chất giao hoán, kết hợp. Tính nhanh giá trị của biểu thức: 1050 × 4 + 1050 × 6 = ?",
      "options": [
        "A. 10500",
        "B. 10600",
        "C. 10400",
        "D. 5250"
      ],
      "answer": "A",
      "explanation": "Đặt thừa số chung: 1050 × (4 + 6) = 1050 × 10 = 10500."
    },
    {
      "id": "ARCH-M-G4-W10-T-3",
      "exam": "ARCHIMEDES_MATH",
      "grade": 4,
      "round": "Tuần 10 - Tiết 3",
      "topic": "Nhân với số có một chữ số, tính chất giao hoán, kết hợp",
      "text": "[Tuần 10 - Tiết 3] Trọng tâm: Nhân với số có một chữ số, tính chất giao hoán, kết hợp. Tính nhanh giá trị của biểu thức: 1075 × 4 + 1075 × 6 = ?",
      "options": [
        "A. 10750",
        "B. 10850",
        "C. 10650",
        "D. 5375"
      ],
      "answer": "A",
      "explanation": "Đặt thừa số chung: 1075 × (4 + 6) = 1075 × 10 = 10750."
    },
    {
      "id": "ARCH-M-G4-W10-PKT-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 4,
      "round": "Tuần 10 - Phiếu cuối tuần",
      "topic": "Nhân với số có một chữ số, tính chất giao hoán, kết hợp",
      "text": "[Phiếu cuối tuần 10] Chủ đề: Nhân với số có một chữ số, tính chất giao hoán, kết hợp. Tổng của hai số là 300, hiệu của hai số là 40. Tìm số lớn.",
      "options": [
        "A. 170",
        "B. 130",
        "C. 180",
        "D. 160"
      ],
      "answer": "A",
      "explanation": "Số lớn = (Tổng + Hiệu) : 2 = (300 + 40) : 2 = 340 : 2 = 170."
    },
    {
      "id": "ARCH-M-G4-W10-TTK-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 4,
      "round": "Tuần 10 - Bài tập tham khảo",
      "topic": "Nhân với số có một chữ số, tính chất giao hoán, kết hợp",
      "text": "[Toán Olympic Archimedes Tuần 10] Tính tổng của dãy số cách đều sau: S = 2 + 4 + 6 + ... + 60",
      "options": [
        "A. 930",
        "B. 940",
        "C. 920",
        "D. 950"
      ],
      "answer": "A",
      "explanation": "Số số hạng = (60 - 2) : 2 + 1 = 30 số.\nTổng S = (2 + 60) × 30 : 2 = 930."
    },
    {
      "id": "ARCH-M-G4-W11-T-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 4,
      "round": "Tuần 11 - Tiết 1",
      "topic": "Nhân với số có hai, ba chữ số; nhân nhẩm với 11",
      "text": "[Tuần 11 - Tiết 1] Trọng tâm: Nhân với số có hai, ba chữ số; nhân nhẩm với 11. Tính nhanh giá trị của biểu thức: 1125 × 4 + 1125 × 6 = ?",
      "options": [
        "A. 11250",
        "B. 11350",
        "C. 11150",
        "D. 5625"
      ],
      "answer": "A",
      "explanation": "Đặt thừa số chung: 1125 × (4 + 6) = 1125 × 10 = 11250."
    },
    {
      "id": "ARCH-M-G4-W11-T-2",
      "exam": "ARCHIMEDES_MATH",
      "grade": 4,
      "round": "Tuần 11 - Tiết 2",
      "topic": "Nhân với số có hai, ba chữ số; nhân nhẩm với 11",
      "text": "[Tuần 11 - Tiết 2] Trọng tâm: Nhân với số có hai, ba chữ số; nhân nhẩm với 11. Tính nhanh giá trị của biểu thức: 1150 × 4 + 1150 × 6 = ?",
      "options": [
        "A. 11500",
        "B. 11600",
        "C. 11400",
        "D. 5750"
      ],
      "answer": "A",
      "explanation": "Đặt thừa số chung: 1150 × (4 + 6) = 1150 × 10 = 11500."
    },
    {
      "id": "ARCH-M-G4-W11-T-3",
      "exam": "ARCHIMEDES_MATH",
      "grade": 4,
      "round": "Tuần 11 - Tiết 3",
      "topic": "Nhân với số có hai, ba chữ số; nhân nhẩm với 11",
      "text": "[Tuần 11 - Tiết 3] Trọng tâm: Nhân với số có hai, ba chữ số; nhân nhẩm với 11. Tính nhanh giá trị của biểu thức: 1175 × 4 + 1175 × 6 = ?",
      "options": [
        "A. 11750",
        "B. 11850",
        "C. 11650",
        "D. 5875"
      ],
      "answer": "A",
      "explanation": "Đặt thừa số chung: 1175 × (4 + 6) = 1175 × 10 = 11750."
    },
    {
      "id": "ARCH-M-G4-W11-PKT-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 4,
      "round": "Tuần 11 - Phiếu cuối tuần",
      "topic": "Nhân với số có hai, ba chữ số; nhân nhẩm với 11",
      "text": "[Phiếu cuối tuần 11] Chủ đề: Nhân với số có hai, ba chữ số; nhân nhẩm với 11. Tổng của hai số là 310, hiệu của hai số là 40. Tìm số lớn.",
      "options": [
        "A. 175",
        "B. 135",
        "C. 185",
        "D. 165"
      ],
      "answer": "A",
      "explanation": "Số lớn = (Tổng + Hiệu) : 2 = (310 + 40) : 2 = 350 : 2 = 175."
    },
    {
      "id": "ARCH-M-G4-W11-TTK-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 4,
      "round": "Tuần 11 - Bài tập tham khảo",
      "topic": "Nhân với số có hai, ba chữ số; nhân nhẩm với 11",
      "text": "[Toán Olympic Archimedes Tuần 11] Tính tổng của dãy số cách đều sau: S = 2 + 4 + 6 + ... + 62",
      "options": [
        "A. 992",
        "B. 1002",
        "C. 982",
        "D. 1012"
      ],
      "answer": "A",
      "explanation": "Số số hạng = (62 - 2) : 2 + 1 = 31 số.\nTổng S = (2 + 62) × 31 : 2 = 992."
    },
    {
      "id": "ARCH-M-G4-W12-T-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 4,
      "round": "Tuần 12 - Tiết 1",
      "topic": "Chia cho số có một chữ số, chia một tổng cho một số",
      "text": "[Tuần 12 - Tiết 1] Trọng tâm: Chia cho số có một chữ số, chia một tổng cho một số. Tính nhanh giá trị của biểu thức: 1225 × 4 + 1225 × 6 = ?",
      "options": [
        "A. 12250",
        "B. 12350",
        "C. 12150",
        "D. 6125"
      ],
      "answer": "A",
      "explanation": "Đặt thừa số chung: 1225 × (4 + 6) = 1225 × 10 = 12250."
    },
    {
      "id": "ARCH-M-G4-W12-T-2",
      "exam": "ARCHIMEDES_MATH",
      "grade": 4,
      "round": "Tuần 12 - Tiết 2",
      "topic": "Chia cho số có một chữ số, chia một tổng cho một số",
      "text": "[Tuần 12 - Tiết 2] Trọng tâm: Chia cho số có một chữ số, chia một tổng cho một số. Tính nhanh giá trị của biểu thức: 1250 × 4 + 1250 × 6 = ?",
      "options": [
        "A. 12500",
        "B. 12600",
        "C. 12400",
        "D. 6250"
      ],
      "answer": "A",
      "explanation": "Đặt thừa số chung: 1250 × (4 + 6) = 1250 × 10 = 12500."
    },
    {
      "id": "ARCH-M-G4-W12-T-3",
      "exam": "ARCHIMEDES_MATH",
      "grade": 4,
      "round": "Tuần 12 - Tiết 3",
      "topic": "Chia cho số có một chữ số, chia một tổng cho một số",
      "text": "[Tuần 12 - Tiết 3] Trọng tâm: Chia cho số có một chữ số, chia một tổng cho một số. Tính nhanh giá trị của biểu thức: 1275 × 4 + 1275 × 6 = ?",
      "options": [
        "A. 12750",
        "B. 12850",
        "C. 12650",
        "D. 6375"
      ],
      "answer": "A",
      "explanation": "Đặt thừa số chung: 1275 × (4 + 6) = 1275 × 10 = 12750."
    },
    {
      "id": "ARCH-M-G4-W12-PKT-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 4,
      "round": "Tuần 12 - Phiếu cuối tuần",
      "topic": "Chia cho số có một chữ số, chia một tổng cho một số",
      "text": "[Phiếu cuối tuần 12] Chủ đề: Chia cho số có một chữ số, chia một tổng cho một số. Tổng của hai số là 320, hiệu của hai số là 40. Tìm số lớn.",
      "options": [
        "A. 180",
        "B. 140",
        "C. 190",
        "D. 170"
      ],
      "answer": "A",
      "explanation": "Số lớn = (Tổng + Hiệu) : 2 = (320 + 40) : 2 = 360 : 2 = 180."
    },
    {
      "id": "ARCH-M-G4-W12-TTK-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 4,
      "round": "Tuần 12 - Bài tập tham khảo",
      "topic": "Chia cho số có một chữ số, chia một tổng cho một số",
      "text": "[Toán Olympic Archimedes Tuần 12] Tính tổng của dãy số cách đều sau: S = 2 + 4 + 6 + ... + 64",
      "options": [
        "A. 1056",
        "B. 1066",
        "C. 1046",
        "D. 1076"
      ],
      "answer": "A",
      "explanation": "Số số hạng = (64 - 2) : 2 + 1 = 32 số.\nTổng S = (2 + 64) × 32 : 2 = 1056."
    },
    {
      "id": "ARCH-M-G4-W13-T-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 4,
      "round": "Tuần 13 - Tiết 1",
      "topic": "Chia cho số có hai, ba chữ số",
      "text": "[Tuần 13 - Tiết 1] Trọng tâm: Chia cho số có hai, ba chữ số. Tính nhanh giá trị của biểu thức: 1325 × 4 + 1325 × 6 = ?",
      "options": [
        "A. 13250",
        "B. 13350",
        "C. 13150",
        "D. 6625"
      ],
      "answer": "A",
      "explanation": "Đặt thừa số chung: 1325 × (4 + 6) = 1325 × 10 = 13250."
    },
    {
      "id": "ARCH-M-G4-W13-T-2",
      "exam": "ARCHIMEDES_MATH",
      "grade": 4,
      "round": "Tuần 13 - Tiết 2",
      "topic": "Chia cho số có hai, ba chữ số",
      "text": "[Tuần 13 - Tiết 2] Trọng tâm: Chia cho số có hai, ba chữ số. Tính nhanh giá trị của biểu thức: 1350 × 4 + 1350 × 6 = ?",
      "options": [
        "A. 13500",
        "B. 13600",
        "C. 13400",
        "D. 6750"
      ],
      "answer": "A",
      "explanation": "Đặt thừa số chung: 1350 × (4 + 6) = 1350 × 10 = 13500."
    },
    {
      "id": "ARCH-M-G4-W13-T-3",
      "exam": "ARCHIMEDES_MATH",
      "grade": 4,
      "round": "Tuần 13 - Tiết 3",
      "topic": "Chia cho số có hai, ba chữ số",
      "text": "[Tuần 13 - Tiết 3] Trọng tâm: Chia cho số có hai, ba chữ số. Tính nhanh giá trị của biểu thức: 1375 × 4 + 1375 × 6 = ?",
      "options": [
        "A. 13750",
        "B. 13850",
        "C. 13650",
        "D. 6875"
      ],
      "answer": "A",
      "explanation": "Đặt thừa số chung: 1375 × (4 + 6) = 1375 × 10 = 13750."
    },
    {
      "id": "ARCH-M-G4-W13-PKT-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 4,
      "round": "Tuần 13 - Phiếu cuối tuần",
      "topic": "Chia cho số có hai, ba chữ số",
      "text": "[Phiếu cuối tuần 13] Chủ đề: Chia cho số có hai, ba chữ số. Tổng của hai số là 330, hiệu của hai số là 40. Tìm số lớn.",
      "options": [
        "A. 185",
        "B. 145",
        "C. 195",
        "D. 175"
      ],
      "answer": "A",
      "explanation": "Số lớn = (Tổng + Hiệu) : 2 = (330 + 40) : 2 = 370 : 2 = 185."
    },
    {
      "id": "ARCH-M-G4-W13-TTK-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 4,
      "round": "Tuần 13 - Bài tập tham khảo",
      "topic": "Chia cho số có hai, ba chữ số",
      "text": "[Toán Olympic Archimedes Tuần 13] Tính tổng của dãy số cách đều sau: S = 2 + 4 + 6 + ... + 66",
      "options": [
        "A. 1122",
        "B. 1132",
        "C. 1112",
        "D. 1142"
      ],
      "answer": "A",
      "explanation": "Số số hạng = (66 - 2) : 2 + 1 = 33 số.\nTổng S = (2 + 66) × 33 : 2 = 1122."
    },
    {
      "id": "ARCH-M-G4-W14-T-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 4,
      "round": "Tuần 14 - Tiết 1",
      "topic": "Chia có dư; thương có chữ số 0",
      "text": "[Tuần 14 - Tiết 1] Trọng tâm: Chia có dư; thương có chữ số 0. Tính nhanh giá trị của biểu thức: 1425 × 4 + 1425 × 6 = ?",
      "options": [
        "A. 14250",
        "B. 14350",
        "C. 14150",
        "D. 7125"
      ],
      "answer": "A",
      "explanation": "Đặt thừa số chung: 1425 × (4 + 6) = 1425 × 10 = 14250."
    },
    {
      "id": "ARCH-M-G4-W14-T-2",
      "exam": "ARCHIMEDES_MATH",
      "grade": 4,
      "round": "Tuần 14 - Tiết 2",
      "topic": "Chia có dư; thương có chữ số 0",
      "text": "[Tuần 14 - Tiết 2] Trọng tâm: Chia có dư; thương có chữ số 0. Tính nhanh giá trị của biểu thức: 1450 × 4 + 1450 × 6 = ?",
      "options": [
        "A. 14500",
        "B. 14600",
        "C. 14400",
        "D. 7250"
      ],
      "answer": "A",
      "explanation": "Đặt thừa số chung: 1450 × (4 + 6) = 1450 × 10 = 14500."
    },
    {
      "id": "ARCH-M-G4-W14-T-3",
      "exam": "ARCHIMEDES_MATH",
      "grade": 4,
      "round": "Tuần 14 - Tiết 3",
      "topic": "Chia có dư; thương có chữ số 0",
      "text": "[Tuần 14 - Tiết 3] Trọng tâm: Chia có dư; thương có chữ số 0. Tính nhanh giá trị của biểu thức: 1475 × 4 + 1475 × 6 = ?",
      "options": [
        "A. 14750",
        "B. 14850",
        "C. 14650",
        "D. 7375"
      ],
      "answer": "A",
      "explanation": "Đặt thừa số chung: 1475 × (4 + 6) = 1475 × 10 = 14750."
    },
    {
      "id": "ARCH-M-G4-W14-PKT-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 4,
      "round": "Tuần 14 - Phiếu cuối tuần",
      "topic": "Chia có dư; thương có chữ số 0",
      "text": "[Phiếu cuối tuần 14] Chủ đề: Chia có dư; thương có chữ số 0. Tổng của hai số là 340, hiệu của hai số là 40. Tìm số lớn.",
      "options": [
        "A. 190",
        "B. 150",
        "C. 200",
        "D. 180"
      ],
      "answer": "A",
      "explanation": "Số lớn = (Tổng + Hiệu) : 2 = (340 + 40) : 2 = 380 : 2 = 190."
    },
    {
      "id": "ARCH-M-G4-W14-TTK-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 4,
      "round": "Tuần 14 - Bài tập tham khảo",
      "topic": "Chia có dư; thương có chữ số 0",
      "text": "[Toán Olympic Archimedes Tuần 14] Tính tổng của dãy số cách đều sau: S = 2 + 4 + 6 + ... + 68",
      "options": [
        "A. 1190",
        "B. 1200",
        "C. 1180",
        "D. 1210"
      ],
      "answer": "A",
      "explanation": "Số số hạng = (68 - 2) : 2 + 1 = 34 số.\nTổng S = (2 + 68) × 34 : 2 = 1190."
    },
    {
      "id": "ARCH-M-G4-W15-T-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 4,
      "round": "Tuần 15 - Tiết 1",
      "topic": "Dấu hiệu chia hết cho 2, 5, 9, 3",
      "text": "[Tuần 15 - Tiết 1] Trọng tâm: Dấu hiệu chia hết cho 2, 5, 9, 3. Tính nhanh giá trị của biểu thức: 1525 × 4 + 1525 × 6 = ?",
      "options": [
        "A. 15250",
        "B. 15350",
        "C. 15150",
        "D. 7625"
      ],
      "answer": "A",
      "explanation": "Đặt thừa số chung: 1525 × (4 + 6) = 1525 × 10 = 15250."
    },
    {
      "id": "ARCH-M-G4-W15-T-2",
      "exam": "ARCHIMEDES_MATH",
      "grade": 4,
      "round": "Tuần 15 - Tiết 2",
      "topic": "Dấu hiệu chia hết cho 2, 5, 9, 3",
      "text": "[Tuần 15 - Tiết 2] Trọng tâm: Dấu hiệu chia hết cho 2, 5, 9, 3. Tính nhanh giá trị của biểu thức: 1550 × 4 + 1550 × 6 = ?",
      "options": [
        "A. 15500",
        "B. 15600",
        "C. 15400",
        "D. 7750"
      ],
      "answer": "A",
      "explanation": "Đặt thừa số chung: 1550 × (4 + 6) = 1550 × 10 = 15500."
    },
    {
      "id": "ARCH-M-G4-W15-T-3",
      "exam": "ARCHIMEDES_MATH",
      "grade": 4,
      "round": "Tuần 15 - Tiết 3",
      "topic": "Dấu hiệu chia hết cho 2, 5, 9, 3",
      "text": "[Tuần 15 - Tiết 3] Trọng tâm: Dấu hiệu chia hết cho 2, 5, 9, 3. Tính nhanh giá trị của biểu thức: 1575 × 4 + 1575 × 6 = ?",
      "options": [
        "A. 15750",
        "B. 15850",
        "C. 15650",
        "D. 7875"
      ],
      "answer": "A",
      "explanation": "Đặt thừa số chung: 1575 × (4 + 6) = 1575 × 10 = 15750."
    },
    {
      "id": "ARCH-M-G4-W15-PKT-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 4,
      "round": "Tuần 15 - Phiếu cuối tuần",
      "topic": "Dấu hiệu chia hết cho 2, 5, 9, 3",
      "text": "[Phiếu cuối tuần 15] Chủ đề: Dấu hiệu chia hết cho 2, 5, 9, 3. Tổng của hai số là 350, hiệu của hai số là 40. Tìm số lớn.",
      "options": [
        "A. 195",
        "B. 155",
        "C. 205",
        "D. 185"
      ],
      "answer": "A",
      "explanation": "Số lớn = (Tổng + Hiệu) : 2 = (350 + 40) : 2 = 390 : 2 = 195."
    },
    {
      "id": "ARCH-M-G4-W15-TTK-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 4,
      "round": "Tuần 15 - Bài tập tham khảo",
      "topic": "Dấu hiệu chia hết cho 2, 5, 9, 3",
      "text": "[Toán Olympic Archimedes Tuần 15] Tính tổng của dãy số cách đều sau: S = 2 + 4 + 6 + ... + 70",
      "options": [
        "A. 1260",
        "B. 1270",
        "C. 1250",
        "D. 1280"
      ],
      "answer": "A",
      "explanation": "Số số hạng = (70 - 2) : 2 + 1 = 35 số.\nTổng S = (2 + 70) × 35 : 2 = 1260."
    },
    {
      "id": "ARCH-M-G4-W16-T-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 4,
      "round": "Tuần 16 - Tiết 1",
      "topic": "Dấu hiệu chia hết kết hợp; chữ số bí ẩn",
      "text": "[Tuần 16 - Tiết 1] Trọng tâm: Dấu hiệu chia hết kết hợp; chữ số bí ẩn. Tính nhanh giá trị của biểu thức: 1625 × 4 + 1625 × 6 = ?",
      "options": [
        "A. 16250",
        "B. 16350",
        "C. 16150",
        "D. 8125"
      ],
      "answer": "A",
      "explanation": "Đặt thừa số chung: 1625 × (4 + 6) = 1625 × 10 = 16250."
    },
    {
      "id": "ARCH-M-G4-W16-T-2",
      "exam": "ARCHIMEDES_MATH",
      "grade": 4,
      "round": "Tuần 16 - Tiết 2",
      "topic": "Dấu hiệu chia hết kết hợp; chữ số bí ẩn",
      "text": "[Tuần 16 - Tiết 2] Trọng tâm: Dấu hiệu chia hết kết hợp; chữ số bí ẩn. Tính nhanh giá trị của biểu thức: 1650 × 4 + 1650 × 6 = ?",
      "options": [
        "A. 16500",
        "B. 16600",
        "C. 16400",
        "D. 8250"
      ],
      "answer": "A",
      "explanation": "Đặt thừa số chung: 1650 × (4 + 6) = 1650 × 10 = 16500."
    },
    {
      "id": "ARCH-M-G4-W16-T-3",
      "exam": "ARCHIMEDES_MATH",
      "grade": 4,
      "round": "Tuần 16 - Tiết 3",
      "topic": "Dấu hiệu chia hết kết hợp; chữ số bí ẩn",
      "text": "[Tuần 16 - Tiết 3] Trọng tâm: Dấu hiệu chia hết kết hợp; chữ số bí ẩn. Tính nhanh giá trị của biểu thức: 1675 × 4 + 1675 × 6 = ?",
      "options": [
        "A. 16750",
        "B. 16850",
        "C. 16650",
        "D. 8375"
      ],
      "answer": "A",
      "explanation": "Đặt thừa số chung: 1675 × (4 + 6) = 1675 × 10 = 16750."
    },
    {
      "id": "ARCH-M-G4-W16-PKT-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 4,
      "round": "Tuần 16 - Phiếu cuối tuần",
      "topic": "Dấu hiệu chia hết kết hợp; chữ số bí ẩn",
      "text": "[Phiếu cuối tuần 16] Chủ đề: Dấu hiệu chia hết kết hợp; chữ số bí ẩn. Tổng của hai số là 360, hiệu của hai số là 40. Tìm số lớn.",
      "options": [
        "A. 200",
        "B. 160",
        "C. 210",
        "D. 190"
      ],
      "answer": "A",
      "explanation": "Số lớn = (Tổng + Hiệu) : 2 = (360 + 40) : 2 = 400 : 2 = 200."
    },
    {
      "id": "ARCH-M-G4-W16-TTK-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 4,
      "round": "Tuần 16 - Bài tập tham khảo",
      "topic": "Dấu hiệu chia hết kết hợp; chữ số bí ẩn",
      "text": "[Toán Olympic Archimedes Tuần 16] Tính tổng của dãy số cách đều sau: S = 2 + 4 + 6 + ... + 72",
      "options": [
        "A. 1332",
        "B. 1342",
        "C. 1322",
        "D. 1352"
      ],
      "answer": "A",
      "explanation": "Số số hạng = (72 - 2) : 2 + 1 = 36 số.\nTổng S = (2 + 72) × 36 : 2 = 1332."
    },
    {
      "id": "ARCH-M-G4-W17-T-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 4,
      "round": "Tuần 17 - Tiết 1",
      "topic": "Hình bình hành và diện tích hình bình hành",
      "text": "[Tuần 17 - Tiết 1] Trọng tâm: Hình bình hành và diện tích hình bình hành. Tính nhanh giá trị của biểu thức: 1725 × 4 + 1725 × 6 = ?",
      "options": [
        "A. 17250",
        "B. 17350",
        "C. 17150",
        "D. 8625"
      ],
      "answer": "A",
      "explanation": "Đặt thừa số chung: 1725 × (4 + 6) = 1725 × 10 = 17250."
    },
    {
      "id": "ARCH-M-G4-W17-T-2",
      "exam": "ARCHIMEDES_MATH",
      "grade": 4,
      "round": "Tuần 17 - Tiết 2",
      "topic": "Hình bình hành và diện tích hình bình hành",
      "text": "[Tuần 17 - Tiết 2] Trọng tâm: Hình bình hành và diện tích hình bình hành. Tính nhanh giá trị của biểu thức: 1750 × 4 + 1750 × 6 = ?",
      "options": [
        "A. 17500",
        "B. 17600",
        "C. 17400",
        "D. 8750"
      ],
      "answer": "A",
      "explanation": "Đặt thừa số chung: 1750 × (4 + 6) = 1750 × 10 = 17500."
    },
    {
      "id": "ARCH-M-G4-W17-T-3",
      "exam": "ARCHIMEDES_MATH",
      "grade": 4,
      "round": "Tuần 17 - Tiết 3",
      "topic": "Hình bình hành và diện tích hình bình hành",
      "text": "[Tuần 17 - Tiết 3] Trọng tâm: Hình bình hành và diện tích hình bình hành. Tính nhanh giá trị của biểu thức: 1775 × 4 + 1775 × 6 = ?",
      "options": [
        "A. 17750",
        "B. 17850",
        "C. 17650",
        "D. 8875"
      ],
      "answer": "A",
      "explanation": "Đặt thừa số chung: 1775 × (4 + 6) = 1775 × 10 = 17750."
    },
    {
      "id": "ARCH-M-G4-W17-PKT-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 4,
      "round": "Tuần 17 - Phiếu cuối tuần",
      "topic": "Hình bình hành và diện tích hình bình hành",
      "text": "[Phiếu cuối tuần 17] Chủ đề: Hình bình hành và diện tích hình bình hành. Tổng của hai số là 370, hiệu của hai số là 40. Tìm số lớn.",
      "options": [
        "A. 205",
        "B. 165",
        "C. 215",
        "D. 195"
      ],
      "answer": "A",
      "explanation": "Số lớn = (Tổng + Hiệu) : 2 = (370 + 40) : 2 = 410 : 2 = 205."
    },
    {
      "id": "ARCH-M-G4-W17-TTK-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 4,
      "round": "Tuần 17 - Bài tập tham khảo",
      "topic": "Hình bình hành và diện tích hình bình hành",
      "text": "[Toán Olympic Archimedes Tuần 17] Tính tổng của dãy số cách đều sau: S = 2 + 4 + 6 + ... + 74",
      "options": [
        "A. 1406",
        "B. 1416",
        "C. 1396",
        "D. 1426"
      ],
      "answer": "A",
      "explanation": "Số số hạng = (74 - 2) : 2 + 1 = 37 số.\nTổng S = (2 + 74) × 37 : 2 = 1406."
    },
    {
      "id": "ARCH-M-G4-W18-T-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 4,
      "round": "Tuần 18 - Tiết 1",
      "topic": "Ôn tập cuối học kì 1",
      "text": "[Tuần 18 - Tiết 1] Trọng tâm: Ôn tập cuối học kì 1. Tính nhanh giá trị của biểu thức: 1825 × 4 + 1825 × 6 = ?",
      "options": [
        "A. 18250",
        "B. 18350",
        "C. 18150",
        "D. 9125"
      ],
      "answer": "A",
      "explanation": "Đặt thừa số chung: 1825 × (4 + 6) = 1825 × 10 = 18250."
    },
    {
      "id": "ARCH-M-G4-W18-T-2",
      "exam": "ARCHIMEDES_MATH",
      "grade": 4,
      "round": "Tuần 18 - Tiết 2",
      "topic": "Ôn tập cuối học kì 1",
      "text": "[Tuần 18 - Tiết 2] Trọng tâm: Ôn tập cuối học kì 1. Tính nhanh giá trị của biểu thức: 1850 × 4 + 1850 × 6 = ?",
      "options": [
        "A. 18500",
        "B. 18600",
        "C. 18400",
        "D. 9250"
      ],
      "answer": "A",
      "explanation": "Đặt thừa số chung: 1850 × (4 + 6) = 1850 × 10 = 18500."
    },
    {
      "id": "ARCH-M-G4-W18-T-3",
      "exam": "ARCHIMEDES_MATH",
      "grade": 4,
      "round": "Tuần 18 - Tiết 3",
      "topic": "Ôn tập cuối học kì 1",
      "text": "[Tuần 18 - Tiết 3] Trọng tâm: Ôn tập cuối học kì 1. Tính nhanh giá trị của biểu thức: 1875 × 4 + 1875 × 6 = ?",
      "options": [
        "A. 18750",
        "B. 18850",
        "C. 18650",
        "D. 9375"
      ],
      "answer": "A",
      "explanation": "Đặt thừa số chung: 1875 × (4 + 6) = 1875 × 10 = 18750."
    },
    {
      "id": "ARCH-M-G4-W18-PKT-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 4,
      "round": "Tuần 18 - Phiếu cuối tuần",
      "topic": "Ôn tập cuối học kì 1",
      "text": "[Phiếu cuối tuần 18] Chủ đề: Ôn tập cuối học kì 1. Tổng của hai số là 380, hiệu của hai số là 40. Tìm số lớn.",
      "options": [
        "A. 210",
        "B. 170",
        "C. 220",
        "D. 200"
      ],
      "answer": "A",
      "explanation": "Số lớn = (Tổng + Hiệu) : 2 = (380 + 40) : 2 = 420 : 2 = 210."
    },
    {
      "id": "ARCH-M-G4-W18-TTK-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 4,
      "round": "Tuần 18 - Bài tập tham khảo",
      "topic": "Ôn tập cuối học kì 1",
      "text": "[Toán Olympic Archimedes Tuần 18] Tính tổng của dãy số cách đều sau: S = 2 + 4 + 6 + ... + 76",
      "options": [
        "A. 1482",
        "B. 1492",
        "C. 1472",
        "D. 1502"
      ],
      "answer": "A",
      "explanation": "Số số hạng = (76 - 2) : 2 + 1 = 38 số.\nTổng S = (2 + 76) × 38 : 2 = 1482."
    },
    {
      "id": "ARCH-M-G4-W19-T-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 4,
      "round": "Tuần 19 - Tiết 1",
      "topic": "Khái niệm phân số, phân số và phép chia số tự nhiên",
      "text": "[Tuần 19 - Tiết 1] Trọng tâm: Khái niệm phân số, phân số và phép chia số tự nhiên. Tính nhanh giá trị của biểu thức: 1925 × 4 + 1925 × 6 = ?",
      "options": [
        "A. 19250",
        "B. 19350",
        "C. 19150",
        "D. 9625"
      ],
      "answer": "A",
      "explanation": "Đặt thừa số chung: 1925 × (4 + 6) = 1925 × 10 = 19250."
    },
    {
      "id": "ARCH-M-G4-W19-T-2",
      "exam": "ARCHIMEDES_MATH",
      "grade": 4,
      "round": "Tuần 19 - Tiết 2",
      "topic": "Khái niệm phân số, phân số và phép chia số tự nhiên",
      "text": "[Tuần 19 - Tiết 2] Trọng tâm: Khái niệm phân số, phân số và phép chia số tự nhiên. Tính nhanh giá trị của biểu thức: 1950 × 4 + 1950 × 6 = ?",
      "options": [
        "A. 19500",
        "B. 19600",
        "C. 19400",
        "D. 9750"
      ],
      "answer": "A",
      "explanation": "Đặt thừa số chung: 1950 × (4 + 6) = 1950 × 10 = 19500."
    },
    {
      "id": "ARCH-M-G4-W19-T-3",
      "exam": "ARCHIMEDES_MATH",
      "grade": 4,
      "round": "Tuần 19 - Tiết 3",
      "topic": "Khái niệm phân số, phân số và phép chia số tự nhiên",
      "text": "[Tuần 19 - Tiết 3] Trọng tâm: Khái niệm phân số, phân số và phép chia số tự nhiên. Tính nhanh giá trị của biểu thức: 1975 × 4 + 1975 × 6 = ?",
      "options": [
        "A. 19750",
        "B. 19850",
        "C. 19650",
        "D. 9875"
      ],
      "answer": "A",
      "explanation": "Đặt thừa số chung: 1975 × (4 + 6) = 1975 × 10 = 19750."
    },
    {
      "id": "ARCH-M-G4-W19-PKT-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 4,
      "round": "Tuần 19 - Phiếu cuối tuần",
      "topic": "Khái niệm phân số, phân số và phép chia số tự nhiên",
      "text": "[Phiếu cuối tuần 19] Chủ đề: Khái niệm phân số, phân số và phép chia số tự nhiên. Tổng của hai số là 390, hiệu của hai số là 40. Tìm số lớn.",
      "options": [
        "A. 215",
        "B. 175",
        "C. 225",
        "D. 205"
      ],
      "answer": "A",
      "explanation": "Số lớn = (Tổng + Hiệu) : 2 = (390 + 40) : 2 = 430 : 2 = 215."
    },
    {
      "id": "ARCH-M-G4-W19-TTK-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 4,
      "round": "Tuần 19 - Bài tập tham khảo",
      "topic": "Khái niệm phân số, phân số và phép chia số tự nhiên",
      "text": "[Toán Olympic Archimedes Tuần 19] Tính tổng của dãy số cách đều sau: S = 2 + 4 + 6 + ... + 78",
      "options": [
        "A. 1560",
        "B. 1570",
        "C. 1550",
        "D. 1580"
      ],
      "answer": "A",
      "explanation": "Số số hạng = (78 - 2) : 2 + 1 = 39 số.\nTổng S = (2 + 78) × 39 : 2 = 1560."
    },
    {
      "id": "ARCH-M-G4-W20-T-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 4,
      "round": "Tuần 20 - Tiết 1",
      "topic": "Phân số bằng nhau, rút gọn phân số",
      "text": "[Tuần 20 - Tiết 1] Trọng tâm: Phân số bằng nhau, rút gọn phân số. Tính nhanh giá trị của biểu thức: 2025 × 4 + 2025 × 6 = ?",
      "options": [
        "A. 20250",
        "B. 20350",
        "C. 20150",
        "D. 10125"
      ],
      "answer": "A",
      "explanation": "Đặt thừa số chung: 2025 × (4 + 6) = 2025 × 10 = 20250."
    },
    {
      "id": "ARCH-M-G4-W20-T-2",
      "exam": "ARCHIMEDES_MATH",
      "grade": 4,
      "round": "Tuần 20 - Tiết 2",
      "topic": "Phân số bằng nhau, rút gọn phân số",
      "text": "[Tuần 20 - Tiết 2] Trọng tâm: Phân số bằng nhau, rút gọn phân số. Tính nhanh giá trị của biểu thức: 2050 × 4 + 2050 × 6 = ?",
      "options": [
        "A. 20500",
        "B. 20600",
        "C. 20400",
        "D. 10250"
      ],
      "answer": "A",
      "explanation": "Đặt thừa số chung: 2050 × (4 + 6) = 2050 × 10 = 20500."
    },
    {
      "id": "ARCH-M-G4-W20-T-3",
      "exam": "ARCHIMEDES_MATH",
      "grade": 4,
      "round": "Tuần 20 - Tiết 3",
      "topic": "Phân số bằng nhau, rút gọn phân số",
      "text": "[Tuần 20 - Tiết 3] Trọng tâm: Phân số bằng nhau, rút gọn phân số. Tính nhanh giá trị của biểu thức: 2075 × 4 + 2075 × 6 = ?",
      "options": [
        "A. 20750",
        "B. 20850",
        "C. 20650",
        "D. 10375"
      ],
      "answer": "A",
      "explanation": "Đặt thừa số chung: 2075 × (4 + 6) = 2075 × 10 = 20750."
    },
    {
      "id": "ARCH-M-G4-W20-PKT-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 4,
      "round": "Tuần 20 - Phiếu cuối tuần",
      "topic": "Phân số bằng nhau, rút gọn phân số",
      "text": "[Phiếu cuối tuần 20] Chủ đề: Phân số bằng nhau, rút gọn phân số. Tổng của hai số là 400, hiệu của hai số là 40. Tìm số lớn.",
      "options": [
        "A. 220",
        "B. 180",
        "C. 230",
        "D. 210"
      ],
      "answer": "A",
      "explanation": "Số lớn = (Tổng + Hiệu) : 2 = (400 + 40) : 2 = 440 : 2 = 220."
    },
    {
      "id": "ARCH-M-G4-W20-TTK-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 4,
      "round": "Tuần 20 - Bài tập tham khảo",
      "topic": "Phân số bằng nhau, rút gọn phân số",
      "text": "[Toán Olympic Archimedes Tuần 20] Tính tổng của dãy số cách đều sau: S = 2 + 4 + 6 + ... + 80",
      "options": [
        "A. 1640",
        "B. 1650",
        "C. 1630",
        "D. 1660"
      ],
      "answer": "A",
      "explanation": "Số số hạng = (80 - 2) : 2 + 1 = 40 số.\nTổng S = (2 + 80) × 40 : 2 = 1640."
    },
    {
      "id": "ARCH-M-G4-W21-T-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 4,
      "round": "Tuần 21 - Tiết 1",
      "topic": "Quy đồng mẫu số các phân số",
      "text": "[Tuần 21 - Tiết 1] Trọng tâm: Quy đồng mẫu số các phân số. Tính nhanh giá trị của biểu thức: 2125 × 4 + 2125 × 6 = ?",
      "options": [
        "A. 21250",
        "B. 21350",
        "C. 21150",
        "D. 10625"
      ],
      "answer": "A",
      "explanation": "Đặt thừa số chung: 2125 × (4 + 6) = 2125 × 10 = 21250."
    },
    {
      "id": "ARCH-M-G4-W21-T-2",
      "exam": "ARCHIMEDES_MATH",
      "grade": 4,
      "round": "Tuần 21 - Tiết 2",
      "topic": "Quy đồng mẫu số các phân số",
      "text": "[Tuần 21 - Tiết 2] Trọng tâm: Quy đồng mẫu số các phân số. Tính nhanh giá trị của biểu thức: 2150 × 4 + 2150 × 6 = ?",
      "options": [
        "A. 21500",
        "B. 21600",
        "C. 21400",
        "D. 10750"
      ],
      "answer": "A",
      "explanation": "Đặt thừa số chung: 2150 × (4 + 6) = 2150 × 10 = 21500."
    },
    {
      "id": "ARCH-M-G4-W21-T-3",
      "exam": "ARCHIMEDES_MATH",
      "grade": 4,
      "round": "Tuần 21 - Tiết 3",
      "topic": "Quy đồng mẫu số các phân số",
      "text": "[Tuần 21 - Tiết 3] Trọng tâm: Quy đồng mẫu số các phân số. Tính nhanh giá trị của biểu thức: 2175 × 4 + 2175 × 6 = ?",
      "options": [
        "A. 21750",
        "B. 21850",
        "C. 21650",
        "D. 10875"
      ],
      "answer": "A",
      "explanation": "Đặt thừa số chung: 2175 × (4 + 6) = 2175 × 10 = 21750."
    },
    {
      "id": "ARCH-M-G4-W21-PKT-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 4,
      "round": "Tuần 21 - Phiếu cuối tuần",
      "topic": "Quy đồng mẫu số các phân số",
      "text": "[Phiếu cuối tuần 21] Chủ đề: Quy đồng mẫu số các phân số. Tổng của hai số là 410, hiệu của hai số là 40. Tìm số lớn.",
      "options": [
        "A. 225",
        "B. 185",
        "C. 235",
        "D. 215"
      ],
      "answer": "A",
      "explanation": "Số lớn = (Tổng + Hiệu) : 2 = (410 + 40) : 2 = 450 : 2 = 225."
    },
    {
      "id": "ARCH-M-G4-W21-TTK-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 4,
      "round": "Tuần 21 - Bài tập tham khảo",
      "topic": "Quy đồng mẫu số các phân số",
      "text": "[Toán Olympic Archimedes Tuần 21] Tính tổng của dãy số cách đều sau: S = 2 + 4 + 6 + ... + 82",
      "options": [
        "A. 1722",
        "B. 1732",
        "C. 1712",
        "D. 1742"
      ],
      "answer": "A",
      "explanation": "Số số hạng = (82 - 2) : 2 + 1 = 41 số.\nTổng S = (2 + 82) × 41 : 2 = 1722."
    },
    {
      "id": "ARCH-M-G4-W22-T-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 4,
      "round": "Tuần 22 - Tiết 1",
      "topic": "So sánh hai phân số cùng mẫu, khác mẫu",
      "text": "[Tuần 22 - Tiết 1] Trọng tâm: So sánh hai phân số cùng mẫu, khác mẫu. Tính nhanh giá trị của biểu thức: 2225 × 4 + 2225 × 6 = ?",
      "options": [
        "A. 22250",
        "B. 22350",
        "C. 22150",
        "D. 11125"
      ],
      "answer": "A",
      "explanation": "Đặt thừa số chung: 2225 × (4 + 6) = 2225 × 10 = 22250."
    },
    {
      "id": "ARCH-M-G4-W22-T-2",
      "exam": "ARCHIMEDES_MATH",
      "grade": 4,
      "round": "Tuần 22 - Tiết 2",
      "topic": "So sánh hai phân số cùng mẫu, khác mẫu",
      "text": "[Tuần 22 - Tiết 2] Trọng tâm: So sánh hai phân số cùng mẫu, khác mẫu. Tính nhanh giá trị của biểu thức: 2250 × 4 + 2250 × 6 = ?",
      "options": [
        "A. 22500",
        "B. 22600",
        "C. 22400",
        "D. 11250"
      ],
      "answer": "A",
      "explanation": "Đặt thừa số chung: 2250 × (4 + 6) = 2250 × 10 = 22500."
    },
    {
      "id": "ARCH-M-G4-W22-T-3",
      "exam": "ARCHIMEDES_MATH",
      "grade": 4,
      "round": "Tuần 22 - Tiết 3",
      "topic": "So sánh hai phân số cùng mẫu, khác mẫu",
      "text": "[Tuần 22 - Tiết 3] Trọng tâm: So sánh hai phân số cùng mẫu, khác mẫu. Tính nhanh giá trị của biểu thức: 2275 × 4 + 2275 × 6 = ?",
      "options": [
        "A. 22750",
        "B. 22850",
        "C. 22650",
        "D. 11375"
      ],
      "answer": "A",
      "explanation": "Đặt thừa số chung: 2275 × (4 + 6) = 2275 × 10 = 22750."
    },
    {
      "id": "ARCH-M-G4-W22-PKT-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 4,
      "round": "Tuần 22 - Phiếu cuối tuần",
      "topic": "So sánh hai phân số cùng mẫu, khác mẫu",
      "text": "[Phiếu cuối tuần 22] Chủ đề: So sánh hai phân số cùng mẫu, khác mẫu. Tổng của hai số là 420, hiệu của hai số là 40. Tìm số lớn.",
      "options": [
        "A. 230",
        "B. 190",
        "C. 240",
        "D. 220"
      ],
      "answer": "A",
      "explanation": "Số lớn = (Tổng + Hiệu) : 2 = (420 + 40) : 2 = 460 : 2 = 230."
    },
    {
      "id": "ARCH-M-G4-W22-TTK-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 4,
      "round": "Tuần 22 - Bài tập tham khảo",
      "topic": "So sánh hai phân số cùng mẫu, khác mẫu",
      "text": "[Toán Olympic Archimedes Tuần 22] Tính tổng của dãy số cách đều sau: S = 2 + 4 + 6 + ... + 84",
      "options": [
        "A. 1806",
        "B. 1816",
        "C. 1796",
        "D. 1826"
      ],
      "answer": "A",
      "explanation": "Số số hạng = (84 - 2) : 2 + 1 = 42 số.\nTổng S = (2 + 84) × 42 : 2 = 1806."
    },
    {
      "id": "ARCH-M-G4-W23-T-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 4,
      "round": "Tuần 23 - Tiết 1",
      "topic": "Phép cộng phân số",
      "text": "[Tuần 23 - Tiết 1] Trọng tâm: Phép cộng phân số. Tính nhanh giá trị của biểu thức: 2325 × 4 + 2325 × 6 = ?",
      "options": [
        "A. 23250",
        "B. 23350",
        "C. 23150",
        "D. 11625"
      ],
      "answer": "A",
      "explanation": "Đặt thừa số chung: 2325 × (4 + 6) = 2325 × 10 = 23250."
    },
    {
      "id": "ARCH-M-G4-W23-T-2",
      "exam": "ARCHIMEDES_MATH",
      "grade": 4,
      "round": "Tuần 23 - Tiết 2",
      "topic": "Phép cộng phân số",
      "text": "[Tuần 23 - Tiết 2] Trọng tâm: Phép cộng phân số. Tính nhanh giá trị của biểu thức: 2350 × 4 + 2350 × 6 = ?",
      "options": [
        "A. 23500",
        "B. 23600",
        "C. 23400",
        "D. 11750"
      ],
      "answer": "A",
      "explanation": "Đặt thừa số chung: 2350 × (4 + 6) = 2350 × 10 = 23500."
    },
    {
      "id": "ARCH-M-G4-W23-T-3",
      "exam": "ARCHIMEDES_MATH",
      "grade": 4,
      "round": "Tuần 23 - Tiết 3",
      "topic": "Phép cộng phân số",
      "text": "[Tuần 23 - Tiết 3] Trọng tâm: Phép cộng phân số. Tính nhanh giá trị của biểu thức: 2375 × 4 + 2375 × 6 = ?",
      "options": [
        "A. 23750",
        "B. 23850",
        "C. 23650",
        "D. 11875"
      ],
      "answer": "A",
      "explanation": "Đặt thừa số chung: 2375 × (4 + 6) = 2375 × 10 = 23750."
    },
    {
      "id": "ARCH-M-G4-W23-PKT-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 4,
      "round": "Tuần 23 - Phiếu cuối tuần",
      "topic": "Phép cộng phân số",
      "text": "[Phiếu cuối tuần 23] Chủ đề: Phép cộng phân số. Tổng của hai số là 430, hiệu của hai số là 40. Tìm số lớn.",
      "options": [
        "A. 235",
        "B. 195",
        "C. 245",
        "D. 225"
      ],
      "answer": "A",
      "explanation": "Số lớn = (Tổng + Hiệu) : 2 = (430 + 40) : 2 = 470 : 2 = 235."
    },
    {
      "id": "ARCH-M-G4-W23-TTK-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 4,
      "round": "Tuần 23 - Bài tập tham khảo",
      "topic": "Phép cộng phân số",
      "text": "[Toán Olympic Archimedes Tuần 23] Tính tổng của dãy số cách đều sau: S = 2 + 4 + 6 + ... + 86",
      "options": [
        "A. 1892",
        "B. 1902",
        "C. 1882",
        "D. 1912"
      ],
      "answer": "A",
      "explanation": "Số số hạng = (86 - 2) : 2 + 1 = 43 số.\nTổng S = (2 + 86) × 43 : 2 = 1892."
    },
    {
      "id": "ARCH-M-G4-W24-T-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 4,
      "round": "Tuần 24 - Tiết 1",
      "topic": "Phép trừ phân số",
      "text": "[Tuần 24 - Tiết 1] Trọng tâm: Phép trừ phân số. Tính nhanh giá trị của biểu thức: 2425 × 4 + 2425 × 6 = ?",
      "options": [
        "A. 24250",
        "B. 24350",
        "C. 24150",
        "D. 12125"
      ],
      "answer": "A",
      "explanation": "Đặt thừa số chung: 2425 × (4 + 6) = 2425 × 10 = 24250."
    },
    {
      "id": "ARCH-M-G4-W24-T-2",
      "exam": "ARCHIMEDES_MATH",
      "grade": 4,
      "round": "Tuần 24 - Tiết 2",
      "topic": "Phép trừ phân số",
      "text": "[Tuần 24 - Tiết 2] Trọng tâm: Phép trừ phân số. Tính nhanh giá trị của biểu thức: 2450 × 4 + 2450 × 6 = ?",
      "options": [
        "A. 24500",
        "B. 24600",
        "C. 24400",
        "D. 12250"
      ],
      "answer": "A",
      "explanation": "Đặt thừa số chung: 2450 × (4 + 6) = 2450 × 10 = 24500."
    },
    {
      "id": "ARCH-M-G4-W24-T-3",
      "exam": "ARCHIMEDES_MATH",
      "grade": 4,
      "round": "Tuần 24 - Tiết 3",
      "topic": "Phép trừ phân số",
      "text": "[Tuần 24 - Tiết 3] Trọng tâm: Phép trừ phân số. Tính nhanh giá trị của biểu thức: 2475 × 4 + 2475 × 6 = ?",
      "options": [
        "A. 24750",
        "B. 24850",
        "C. 24650",
        "D. 12375"
      ],
      "answer": "A",
      "explanation": "Đặt thừa số chung: 2475 × (4 + 6) = 2475 × 10 = 24750."
    },
    {
      "id": "ARCH-M-G4-W24-PKT-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 4,
      "round": "Tuần 24 - Phiếu cuối tuần",
      "topic": "Phép trừ phân số",
      "text": "[Phiếu cuối tuần 24] Chủ đề: Phép trừ phân số. Tổng của hai số là 440, hiệu của hai số là 40. Tìm số lớn.",
      "options": [
        "A. 240",
        "B. 200",
        "C. 250",
        "D. 230"
      ],
      "answer": "A",
      "explanation": "Số lớn = (Tổng + Hiệu) : 2 = (440 + 40) : 2 = 480 : 2 = 240."
    },
    {
      "id": "ARCH-M-G4-W24-TTK-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 4,
      "round": "Tuần 24 - Bài tập tham khảo",
      "topic": "Phép trừ phân số",
      "text": "[Toán Olympic Archimedes Tuần 24] Tính tổng của dãy số cách đều sau: S = 2 + 4 + 6 + ... + 88",
      "options": [
        "A. 1980",
        "B. 1990",
        "C. 1970",
        "D. 2000"
      ],
      "answer": "A",
      "explanation": "Số số hạng = (88 - 2) : 2 + 1 = 44 số.\nTổng S = (2 + 88) × 44 : 2 = 1980."
    },
    {
      "id": "ARCH-M-G4-W25-T-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 4,
      "round": "Tuần 25 - Tiết 1",
      "topic": "Phép nhân phân số",
      "text": "[Tuần 25 - Tiết 1] Trọng tâm: Phép nhân phân số. Tính nhanh giá trị của biểu thức: 2525 × 4 + 2525 × 6 = ?",
      "options": [
        "A. 25250",
        "B. 25350",
        "C. 25150",
        "D. 12625"
      ],
      "answer": "A",
      "explanation": "Đặt thừa số chung: 2525 × (4 + 6) = 2525 × 10 = 25250."
    },
    {
      "id": "ARCH-M-G4-W25-T-2",
      "exam": "ARCHIMEDES_MATH",
      "grade": 4,
      "round": "Tuần 25 - Tiết 2",
      "topic": "Phép nhân phân số",
      "text": "[Tuần 25 - Tiết 2] Trọng tâm: Phép nhân phân số. Tính nhanh giá trị của biểu thức: 2550 × 4 + 2550 × 6 = ?",
      "options": [
        "A. 25500",
        "B. 25600",
        "C. 25400",
        "D. 12750"
      ],
      "answer": "A",
      "explanation": "Đặt thừa số chung: 2550 × (4 + 6) = 2550 × 10 = 25500."
    },
    {
      "id": "ARCH-M-G4-W25-T-3",
      "exam": "ARCHIMEDES_MATH",
      "grade": 4,
      "round": "Tuần 25 - Tiết 3",
      "topic": "Phép nhân phân số",
      "text": "[Tuần 25 - Tiết 3] Trọng tâm: Phép nhân phân số. Tính nhanh giá trị của biểu thức: 2575 × 4 + 2575 × 6 = ?",
      "options": [
        "A. 25750",
        "B. 25850",
        "C. 25650",
        "D. 12875"
      ],
      "answer": "A",
      "explanation": "Đặt thừa số chung: 2575 × (4 + 6) = 2575 × 10 = 25750."
    },
    {
      "id": "ARCH-M-G4-W25-PKT-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 4,
      "round": "Tuần 25 - Phiếu cuối tuần",
      "topic": "Phép nhân phân số",
      "text": "[Phiếu cuối tuần 25] Chủ đề: Phép nhân phân số. Tổng của hai số là 450, hiệu của hai số là 40. Tìm số lớn.",
      "options": [
        "A. 245",
        "B. 205",
        "C. 255",
        "D. 235"
      ],
      "answer": "A",
      "explanation": "Số lớn = (Tổng + Hiệu) : 2 = (450 + 40) : 2 = 490 : 2 = 245."
    },
    {
      "id": "ARCH-M-G4-W25-TTK-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 4,
      "round": "Tuần 25 - Bài tập tham khảo",
      "topic": "Phép nhân phân số",
      "text": "[Toán Olympic Archimedes Tuần 25] Tính tổng của dãy số cách đều sau: S = 2 + 4 + 6 + ... + 90",
      "options": [
        "A. 2070",
        "B. 2080",
        "C. 2060",
        "D. 2090"
      ],
      "answer": "A",
      "explanation": "Số số hạng = (90 - 2) : 2 + 1 = 45 số.\nTổng S = (2 + 90) × 45 : 2 = 2070."
    },
    {
      "id": "ARCH-M-G4-W26-T-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 4,
      "round": "Tuần 26 - Tiết 1",
      "topic": "Phép chia phân số",
      "text": "[Tuần 26 - Tiết 1] Trọng tâm: Phép chia phân số. Tính nhanh giá trị của biểu thức: 2625 × 4 + 2625 × 6 = ?",
      "options": [
        "A. 26250",
        "B. 26350",
        "C. 26150",
        "D. 13125"
      ],
      "answer": "A",
      "explanation": "Đặt thừa số chung: 2625 × (4 + 6) = 2625 × 10 = 26250."
    },
    {
      "id": "ARCH-M-G4-W26-T-2",
      "exam": "ARCHIMEDES_MATH",
      "grade": 4,
      "round": "Tuần 26 - Tiết 2",
      "topic": "Phép chia phân số",
      "text": "[Tuần 26 - Tiết 2] Trọng tâm: Phép chia phân số. Tính nhanh giá trị của biểu thức: 2650 × 4 + 2650 × 6 = ?",
      "options": [
        "A. 26500",
        "B. 26600",
        "C. 26400",
        "D. 13250"
      ],
      "answer": "A",
      "explanation": "Đặt thừa số chung: 2650 × (4 + 6) = 2650 × 10 = 26500."
    },
    {
      "id": "ARCH-M-G4-W26-T-3",
      "exam": "ARCHIMEDES_MATH",
      "grade": 4,
      "round": "Tuần 26 - Tiết 3",
      "topic": "Phép chia phân số",
      "text": "[Tuần 26 - Tiết 3] Trọng tâm: Phép chia phân số. Tính nhanh giá trị của biểu thức: 2675 × 4 + 2675 × 6 = ?",
      "options": [
        "A. 26750",
        "B. 26850",
        "C. 26650",
        "D. 13375"
      ],
      "answer": "A",
      "explanation": "Đặt thừa số chung: 2675 × (4 + 6) = 2675 × 10 = 26750."
    },
    {
      "id": "ARCH-M-G4-W26-PKT-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 4,
      "round": "Tuần 26 - Phiếu cuối tuần",
      "topic": "Phép chia phân số",
      "text": "[Phiếu cuối tuần 26] Chủ đề: Phép chia phân số. Tổng của hai số là 460, hiệu của hai số là 40. Tìm số lớn.",
      "options": [
        "A. 250",
        "B. 210",
        "C. 260",
        "D. 240"
      ],
      "answer": "A",
      "explanation": "Số lớn = (Tổng + Hiệu) : 2 = (460 + 40) : 2 = 500 : 2 = 250."
    },
    {
      "id": "ARCH-M-G4-W26-TTK-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 4,
      "round": "Tuần 26 - Bài tập tham khảo",
      "topic": "Phép chia phân số",
      "text": "[Toán Olympic Archimedes Tuần 26] Tính tổng của dãy số cách đều sau: S = 2 + 4 + 6 + ... + 92",
      "options": [
        "A. 2162",
        "B. 2172",
        "C. 2152",
        "D. 2182"
      ],
      "answer": "A",
      "explanation": "Số số hạng = (92 - 2) : 2 + 1 = 46 số.\nTổng S = (2 + 92) × 46 : 2 = 2162."
    },
    {
      "id": "ARCH-M-G4-W27-T-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 4,
      "round": "Tuần 27 - Tiết 1",
      "topic": "Tìm phân số của một số",
      "text": "[Tuần 27 - Tiết 1] Trọng tâm: Tìm phân số của một số. Tính nhanh giá trị của biểu thức: 2725 × 4 + 2725 × 6 = ?",
      "options": [
        "A. 27250",
        "B. 27350",
        "C. 27150",
        "D. 13625"
      ],
      "answer": "A",
      "explanation": "Đặt thừa số chung: 2725 × (4 + 6) = 2725 × 10 = 27250."
    },
    {
      "id": "ARCH-M-G4-W27-T-2",
      "exam": "ARCHIMEDES_MATH",
      "grade": 4,
      "round": "Tuần 27 - Tiết 2",
      "topic": "Tìm phân số của một số",
      "text": "[Tuần 27 - Tiết 2] Trọng tâm: Tìm phân số của một số. Tính nhanh giá trị của biểu thức: 2750 × 4 + 2750 × 6 = ?",
      "options": [
        "A. 27500",
        "B. 27600",
        "C. 27400",
        "D. 13750"
      ],
      "answer": "A",
      "explanation": "Đặt thừa số chung: 2750 × (4 + 6) = 2750 × 10 = 27500."
    },
    {
      "id": "ARCH-M-G4-W27-T-3",
      "exam": "ARCHIMEDES_MATH",
      "grade": 4,
      "round": "Tuần 27 - Tiết 3",
      "topic": "Tìm phân số của một số",
      "text": "[Tuần 27 - Tiết 3] Trọng tâm: Tìm phân số của một số. Tính nhanh giá trị của biểu thức: 2775 × 4 + 2775 × 6 = ?",
      "options": [
        "A. 27750",
        "B. 27850",
        "C. 27650",
        "D. 13875"
      ],
      "answer": "A",
      "explanation": "Đặt thừa số chung: 2775 × (4 + 6) = 2775 × 10 = 27750."
    },
    {
      "id": "ARCH-M-G4-W27-PKT-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 4,
      "round": "Tuần 27 - Phiếu cuối tuần",
      "topic": "Tìm phân số của một số",
      "text": "[Phiếu cuối tuần 27] Chủ đề: Tìm phân số của một số. Tổng của hai số là 470, hiệu của hai số là 40. Tìm số lớn.",
      "options": [
        "A. 255",
        "B. 215",
        "C. 265",
        "D. 245"
      ],
      "answer": "A",
      "explanation": "Số lớn = (Tổng + Hiệu) : 2 = (470 + 40) : 2 = 510 : 2 = 255."
    },
    {
      "id": "ARCH-M-G4-W27-TTK-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 4,
      "round": "Tuần 27 - Bài tập tham khảo",
      "topic": "Tìm phân số của một số",
      "text": "[Toán Olympic Archimedes Tuần 27] Tính tổng của dãy số cách đều sau: S = 2 + 4 + 6 + ... + 94",
      "options": [
        "A. 2256",
        "B. 2266",
        "C. 2246",
        "D. 2276"
      ],
      "answer": "A",
      "explanation": "Số số hạng = (94 - 2) : 2 + 1 = 47 số.\nTổng S = (2 + 94) × 47 : 2 = 2256."
    },
    {
      "id": "ARCH-M-G4-W28-T-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 4,
      "round": "Tuần 28 - Tiết 1",
      "topic": "Hình thoi và diện tích hình thoi",
      "text": "[Tuần 28 - Tiết 1] Trọng tâm: Hình thoi và diện tích hình thoi. Tính nhanh giá trị của biểu thức: 2825 × 4 + 2825 × 6 = ?",
      "options": [
        "A. 28250",
        "B. 28350",
        "C. 28150",
        "D. 14125"
      ],
      "answer": "A",
      "explanation": "Đặt thừa số chung: 2825 × (4 + 6) = 2825 × 10 = 28250."
    },
    {
      "id": "ARCH-M-G4-W28-T-2",
      "exam": "ARCHIMEDES_MATH",
      "grade": 4,
      "round": "Tuần 28 - Tiết 2",
      "topic": "Hình thoi và diện tích hình thoi",
      "text": "[Tuần 28 - Tiết 2] Trọng tâm: Hình thoi và diện tích hình thoi. Tính nhanh giá trị của biểu thức: 2850 × 4 + 2850 × 6 = ?",
      "options": [
        "A. 28500",
        "B. 28600",
        "C. 28400",
        "D. 14250"
      ],
      "answer": "A",
      "explanation": "Đặt thừa số chung: 2850 × (4 + 6) = 2850 × 10 = 28500."
    },
    {
      "id": "ARCH-M-G4-W28-T-3",
      "exam": "ARCHIMEDES_MATH",
      "grade": 4,
      "round": "Tuần 28 - Tiết 3",
      "topic": "Hình thoi và diện tích hình thoi",
      "text": "[Tuần 28 - Tiết 3] Trọng tâm: Hình thoi và diện tích hình thoi. Tính nhanh giá trị của biểu thức: 2875 × 4 + 2875 × 6 = ?",
      "options": [
        "A. 28750",
        "B. 28850",
        "C. 28650",
        "D. 14375"
      ],
      "answer": "A",
      "explanation": "Đặt thừa số chung: 2875 × (4 + 6) = 2875 × 10 = 28750."
    },
    {
      "id": "ARCH-M-G4-W28-PKT-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 4,
      "round": "Tuần 28 - Phiếu cuối tuần",
      "topic": "Hình thoi và diện tích hình thoi",
      "text": "[Phiếu cuối tuần 28] Chủ đề: Hình thoi và diện tích hình thoi. Tổng của hai số là 480, hiệu của hai số là 40. Tìm số lớn.",
      "options": [
        "A. 260",
        "B. 220",
        "C. 270",
        "D. 250"
      ],
      "answer": "A",
      "explanation": "Số lớn = (Tổng + Hiệu) : 2 = (480 + 40) : 2 = 520 : 2 = 260."
    },
    {
      "id": "ARCH-M-G4-W28-TTK-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 4,
      "round": "Tuần 28 - Bài tập tham khảo",
      "topic": "Hình thoi và diện tích hình thoi",
      "text": "[Toán Olympic Archimedes Tuần 28] Tính tổng của dãy số cách đều sau: S = 2 + 4 + 6 + ... + 96",
      "options": [
        "A. 2352",
        "B. 2362",
        "C. 2342",
        "D. 2372"
      ],
      "answer": "A",
      "explanation": "Số số hạng = (96 - 2) : 2 + 1 = 48 số.\nTổng S = (2 + 96) × 48 : 2 = 2352."
    },
    {
      "id": "ARCH-M-G4-W29-T-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 4,
      "round": "Tuần 29 - Tiết 1",
      "topic": "Tìm hai số khi biết Tổng và Tỉ số",
      "text": "[Tuần 29 - Tiết 1] Trọng tâm: Tìm hai số khi biết Tổng và Tỉ số. Tính nhanh giá trị của biểu thức: 2925 × 4 + 2925 × 6 = ?",
      "options": [
        "A. 29250",
        "B. 29350",
        "C. 29150",
        "D. 14625"
      ],
      "answer": "A",
      "explanation": "Đặt thừa số chung: 2925 × (4 + 6) = 2925 × 10 = 29250."
    },
    {
      "id": "ARCH-M-G4-W29-T-2",
      "exam": "ARCHIMEDES_MATH",
      "grade": 4,
      "round": "Tuần 29 - Tiết 2",
      "topic": "Tìm hai số khi biết Tổng và Tỉ số",
      "text": "[Tuần 29 - Tiết 2] Trọng tâm: Tìm hai số khi biết Tổng và Tỉ số. Tính nhanh giá trị của biểu thức: 2950 × 4 + 2950 × 6 = ?",
      "options": [
        "A. 29500",
        "B. 29600",
        "C. 29400",
        "D. 14750"
      ],
      "answer": "A",
      "explanation": "Đặt thừa số chung: 2950 × (4 + 6) = 2950 × 10 = 29500."
    },
    {
      "id": "ARCH-M-G4-W29-T-3",
      "exam": "ARCHIMEDES_MATH",
      "grade": 4,
      "round": "Tuần 29 - Tiết 3",
      "topic": "Tìm hai số khi biết Tổng và Tỉ số",
      "text": "[Tuần 29 - Tiết 3] Trọng tâm: Tìm hai số khi biết Tổng và Tỉ số. Tính nhanh giá trị của biểu thức: 2975 × 4 + 2975 × 6 = ?",
      "options": [
        "A. 29750",
        "B. 29850",
        "C. 29650",
        "D. 14875"
      ],
      "answer": "A",
      "explanation": "Đặt thừa số chung: 2975 × (4 + 6) = 2975 × 10 = 29750."
    },
    {
      "id": "ARCH-M-G4-W29-PKT-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 4,
      "round": "Tuần 29 - Phiếu cuối tuần",
      "topic": "Tìm hai số khi biết Tổng và Tỉ số",
      "text": "[Phiếu cuối tuần 29] Chủ đề: Tìm hai số khi biết Tổng và Tỉ số. Tổng của hai số là 490, hiệu của hai số là 40. Tìm số lớn.",
      "options": [
        "A. 265",
        "B. 225",
        "C. 275",
        "D. 255"
      ],
      "answer": "A",
      "explanation": "Số lớn = (Tổng + Hiệu) : 2 = (490 + 40) : 2 = 530 : 2 = 265."
    },
    {
      "id": "ARCH-M-G4-W29-TTK-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 4,
      "round": "Tuần 29 - Bài tập tham khảo",
      "topic": "Tìm hai số khi biết Tổng và Tỉ số",
      "text": "[Toán Olympic Archimedes Tuần 29] Tính tổng của dãy số cách đều sau: S = 2 + 4 + 6 + ... + 98",
      "options": [
        "A. 2450",
        "B. 2460",
        "C. 2440",
        "D. 2470"
      ],
      "answer": "A",
      "explanation": "Số số hạng = (98 - 2) : 2 + 1 = 49 số.\nTổng S = (2 + 98) × 49 : 2 = 2450."
    },
    {
      "id": "ARCH-M-G4-W30-T-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 4,
      "round": "Tuần 30 - Tiết 1",
      "topic": "Tìm hai số khi biết Hiệu và Tỉ số",
      "text": "[Tuần 30 - Tiết 1] Trọng tâm: Tìm hai số khi biết Hiệu và Tỉ số. Tính nhanh giá trị của biểu thức: 3025 × 4 + 3025 × 6 = ?",
      "options": [
        "A. 30250",
        "B. 30350",
        "C. 30150",
        "D. 15125"
      ],
      "answer": "A",
      "explanation": "Đặt thừa số chung: 3025 × (4 + 6) = 3025 × 10 = 30250."
    },
    {
      "id": "ARCH-M-G4-W30-T-2",
      "exam": "ARCHIMEDES_MATH",
      "grade": 4,
      "round": "Tuần 30 - Tiết 2",
      "topic": "Tìm hai số khi biết Hiệu và Tỉ số",
      "text": "[Tuần 30 - Tiết 2] Trọng tâm: Tìm hai số khi biết Hiệu và Tỉ số. Tính nhanh giá trị của biểu thức: 3050 × 4 + 3050 × 6 = ?",
      "options": [
        "A. 30500",
        "B. 30600",
        "C. 30400",
        "D. 15250"
      ],
      "answer": "A",
      "explanation": "Đặt thừa số chung: 3050 × (4 + 6) = 3050 × 10 = 30500."
    },
    {
      "id": "ARCH-M-G4-W30-T-3",
      "exam": "ARCHIMEDES_MATH",
      "grade": 4,
      "round": "Tuần 30 - Tiết 3",
      "topic": "Tìm hai số khi biết Hiệu và Tỉ số",
      "text": "[Tuần 30 - Tiết 3] Trọng tâm: Tìm hai số khi biết Hiệu và Tỉ số. Tính nhanh giá trị của biểu thức: 3075 × 4 + 3075 × 6 = ?",
      "options": [
        "A. 30750",
        "B. 30850",
        "C. 30650",
        "D. 15375"
      ],
      "answer": "A",
      "explanation": "Đặt thừa số chung: 3075 × (4 + 6) = 3075 × 10 = 30750."
    },
    {
      "id": "ARCH-M-G4-W30-PKT-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 4,
      "round": "Tuần 30 - Phiếu cuối tuần",
      "topic": "Tìm hai số khi biết Hiệu và Tỉ số",
      "text": "[Phiếu cuối tuần 30] Chủ đề: Tìm hai số khi biết Hiệu và Tỉ số. Tổng của hai số là 500, hiệu của hai số là 40. Tìm số lớn.",
      "options": [
        "A. 270",
        "B. 230",
        "C. 280",
        "D. 260"
      ],
      "answer": "A",
      "explanation": "Số lớn = (Tổng + Hiệu) : 2 = (500 + 40) : 2 = 540 : 2 = 270."
    },
    {
      "id": "ARCH-M-G4-W30-TTK-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 4,
      "round": "Tuần 30 - Bài tập tham khảo",
      "topic": "Tìm hai số khi biết Hiệu và Tỉ số",
      "text": "[Toán Olympic Archimedes Tuần 30] Tính tổng của dãy số cách đều sau: S = 2 + 4 + 6 + ... + 100",
      "options": [
        "A. 2550",
        "B. 2560",
        "C. 2540",
        "D. 2570"
      ],
      "answer": "A",
      "explanation": "Số số hạng = (100 - 2) : 2 + 1 = 50 số.\nTổng S = (2 + 100) × 50 : 2 = 2550."
    },
    {
      "id": "ARCH-M-G4-W31-T-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 4,
      "round": "Tuần 31 - Tiết 1",
      "topic": "Tỉ lệ bản đồ và ứng dụng thực tế",
      "text": "[Tuần 31 - Tiết 1] Trọng tâm: Tỉ lệ bản đồ và ứng dụng thực tế. Tính nhanh giá trị của biểu thức: 3125 × 4 + 3125 × 6 = ?",
      "options": [
        "A. 31250",
        "B. 31350",
        "C. 31150",
        "D. 15625"
      ],
      "answer": "A",
      "explanation": "Đặt thừa số chung: 3125 × (4 + 6) = 3125 × 10 = 31250."
    },
    {
      "id": "ARCH-M-G4-W31-T-2",
      "exam": "ARCHIMEDES_MATH",
      "grade": 4,
      "round": "Tuần 31 - Tiết 2",
      "topic": "Tỉ lệ bản đồ và ứng dụng thực tế",
      "text": "[Tuần 31 - Tiết 2] Trọng tâm: Tỉ lệ bản đồ và ứng dụng thực tế. Tính nhanh giá trị của biểu thức: 3150 × 4 + 3150 × 6 = ?",
      "options": [
        "A. 31500",
        "B. 31600",
        "C. 31400",
        "D. 15750"
      ],
      "answer": "A",
      "explanation": "Đặt thừa số chung: 3150 × (4 + 6) = 3150 × 10 = 31500."
    },
    {
      "id": "ARCH-M-G4-W31-T-3",
      "exam": "ARCHIMEDES_MATH",
      "grade": 4,
      "round": "Tuần 31 - Tiết 3",
      "topic": "Tỉ lệ bản đồ và ứng dụng thực tế",
      "text": "[Tuần 31 - Tiết 3] Trọng tâm: Tỉ lệ bản đồ và ứng dụng thực tế. Tính nhanh giá trị của biểu thức: 3175 × 4 + 3175 × 6 = ?",
      "options": [
        "A. 31750",
        "B. 31850",
        "C. 31650",
        "D. 15875"
      ],
      "answer": "A",
      "explanation": "Đặt thừa số chung: 3175 × (4 + 6) = 3175 × 10 = 31750."
    },
    {
      "id": "ARCH-M-G4-W31-PKT-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 4,
      "round": "Tuần 31 - Phiếu cuối tuần",
      "topic": "Tỉ lệ bản đồ và ứng dụng thực tế",
      "text": "[Phiếu cuối tuần 31] Chủ đề: Tỉ lệ bản đồ và ứng dụng thực tế. Tổng của hai số là 510, hiệu của hai số là 40. Tìm số lớn.",
      "options": [
        "A. 275",
        "B. 235",
        "C. 285",
        "D. 265"
      ],
      "answer": "A",
      "explanation": "Số lớn = (Tổng + Hiệu) : 2 = (510 + 40) : 2 = 550 : 2 = 275."
    },
    {
      "id": "ARCH-M-G4-W31-TTK-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 4,
      "round": "Tuần 31 - Bài tập tham khảo",
      "topic": "Tỉ lệ bản đồ và ứng dụng thực tế",
      "text": "[Toán Olympic Archimedes Tuần 31] Tính tổng của dãy số cách đều sau: S = 2 + 4 + 6 + ... + 102",
      "options": [
        "A. 2652",
        "B. 2662",
        "C. 2642",
        "D. 2672"
      ],
      "answer": "A",
      "explanation": "Số số hạng = (102 - 2) : 2 + 1 = 51 số.\nTổng S = (2 + 102) × 51 : 2 = 2652."
    },
    {
      "id": "ARCH-M-G4-W32-T-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 4,
      "round": "Tuần 32 - Tiết 1",
      "topic": "Đơn vị đo diện tích: dm², m², km²",
      "text": "[Tuần 32 - Tiết 1] Trọng tâm: Đơn vị đo diện tích: dm², m², km². Tính nhanh giá trị của biểu thức: 3225 × 4 + 3225 × 6 = ?",
      "options": [
        "A. 32250",
        "B. 32350",
        "C. 32150",
        "D. 16125"
      ],
      "answer": "A",
      "explanation": "Đặt thừa số chung: 3225 × (4 + 6) = 3225 × 10 = 32250."
    },
    {
      "id": "ARCH-M-G4-W32-T-2",
      "exam": "ARCHIMEDES_MATH",
      "grade": 4,
      "round": "Tuần 32 - Tiết 2",
      "topic": "Đơn vị đo diện tích: dm², m², km²",
      "text": "[Tuần 32 - Tiết 2] Trọng tâm: Đơn vị đo diện tích: dm², m², km². Tính nhanh giá trị của biểu thức: 3250 × 4 + 3250 × 6 = ?",
      "options": [
        "A. 32500",
        "B. 32600",
        "C. 32400",
        "D. 16250"
      ],
      "answer": "A",
      "explanation": "Đặt thừa số chung: 3250 × (4 + 6) = 3250 × 10 = 32500."
    },
    {
      "id": "ARCH-M-G4-W32-T-3",
      "exam": "ARCHIMEDES_MATH",
      "grade": 4,
      "round": "Tuần 32 - Tiết 3",
      "topic": "Đơn vị đo diện tích: dm², m², km²",
      "text": "[Tuần 32 - Tiết 3] Trọng tâm: Đơn vị đo diện tích: dm², m², km². Tính nhanh giá trị của biểu thức: 3275 × 4 + 3275 × 6 = ?",
      "options": [
        "A. 32750",
        "B. 32850",
        "C. 32650",
        "D. 16375"
      ],
      "answer": "A",
      "explanation": "Đặt thừa số chung: 3275 × (4 + 6) = 3275 × 10 = 32750."
    },
    {
      "id": "ARCH-M-G4-W32-PKT-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 4,
      "round": "Tuần 32 - Phiếu cuối tuần",
      "topic": "Đơn vị đo diện tích: dm², m², km²",
      "text": "[Phiếu cuối tuần 32] Chủ đề: Đơn vị đo diện tích: dm², m², km². Tổng của hai số là 520, hiệu của hai số là 40. Tìm số lớn.",
      "options": [
        "A. 280",
        "B. 240",
        "C. 290",
        "D. 270"
      ],
      "answer": "A",
      "explanation": "Số lớn = (Tổng + Hiệu) : 2 = (520 + 40) : 2 = 560 : 2 = 280."
    },
    {
      "id": "ARCH-M-G4-W32-TTK-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 4,
      "round": "Tuần 32 - Bài tập tham khảo",
      "topic": "Đơn vị đo diện tích: dm², m², km²",
      "text": "[Toán Olympic Archimedes Tuần 32] Tính tổng của dãy số cách đều sau: S = 2 + 4 + 6 + ... + 104",
      "options": [
        "A. 2756",
        "B. 2766",
        "C. 2746",
        "D. 2776"
      ],
      "answer": "A",
      "explanation": "Số số hạng = (104 - 2) : 2 + 1 = 52 số.\nTổng S = (2 + 104) × 52 : 2 = 2756."
    },
    {
      "id": "ARCH-M-G4-W33-T-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 4,
      "round": "Tuần 33 - Tiết 1",
      "topic": "Toán tư duy dãy số cách đều, số trang sách, giả thiết tạm",
      "text": "[Tuần 33 - Tiết 1] Trọng tâm: Toán tư duy dãy số cách đều, số trang sách, giả thiết tạm. Tính nhanh giá trị của biểu thức: 3325 × 4 + 3325 × 6 = ?",
      "options": [
        "A. 33250",
        "B. 33350",
        "C. 33150",
        "D. 16625"
      ],
      "answer": "A",
      "explanation": "Đặt thừa số chung: 3325 × (4 + 6) = 3325 × 10 = 33250."
    },
    {
      "id": "ARCH-M-G4-W33-T-2",
      "exam": "ARCHIMEDES_MATH",
      "grade": 4,
      "round": "Tuần 33 - Tiết 2",
      "topic": "Toán tư duy dãy số cách đều, số trang sách, giả thiết tạm",
      "text": "[Tuần 33 - Tiết 2] Trọng tâm: Toán tư duy dãy số cách đều, số trang sách, giả thiết tạm. Tính nhanh giá trị của biểu thức: 3350 × 4 + 3350 × 6 = ?",
      "options": [
        "A. 33500",
        "B. 33600",
        "C. 33400",
        "D. 16750"
      ],
      "answer": "A",
      "explanation": "Đặt thừa số chung: 3350 × (4 + 6) = 3350 × 10 = 33500."
    },
    {
      "id": "ARCH-M-G4-W33-T-3",
      "exam": "ARCHIMEDES_MATH",
      "grade": 4,
      "round": "Tuần 33 - Tiết 3",
      "topic": "Toán tư duy dãy số cách đều, số trang sách, giả thiết tạm",
      "text": "[Tuần 33 - Tiết 3] Trọng tâm: Toán tư duy dãy số cách đều, số trang sách, giả thiết tạm. Tính nhanh giá trị của biểu thức: 3375 × 4 + 3375 × 6 = ?",
      "options": [
        "A. 33750",
        "B. 33850",
        "C. 33650",
        "D. 16875"
      ],
      "answer": "A",
      "explanation": "Đặt thừa số chung: 3375 × (4 + 6) = 3375 × 10 = 33750."
    },
    {
      "id": "ARCH-M-G4-W33-PKT-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 4,
      "round": "Tuần 33 - Phiếu cuối tuần",
      "topic": "Toán tư duy dãy số cách đều, số trang sách, giả thiết tạm",
      "text": "[Phiếu cuối tuần 33] Chủ đề: Toán tư duy dãy số cách đều, số trang sách, giả thiết tạm. Tổng của hai số là 530, hiệu của hai số là 40. Tìm số lớn.",
      "options": [
        "A. 285",
        "B. 245",
        "C. 295",
        "D. 275"
      ],
      "answer": "A",
      "explanation": "Số lớn = (Tổng + Hiệu) : 2 = (530 + 40) : 2 = 570 : 2 = 285."
    },
    {
      "id": "ARCH-M-G4-W33-TTK-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 4,
      "round": "Tuần 33 - Bài tập tham khảo",
      "topic": "Toán tư duy dãy số cách đều, số trang sách, giả thiết tạm",
      "text": "[Toán Olympic Archimedes Tuần 33] Tính tổng của dãy số cách đều sau: S = 2 + 4 + 6 + ... + 106",
      "options": [
        "A. 2862",
        "B. 2872",
        "C. 2852",
        "D. 2882"
      ],
      "answer": "A",
      "explanation": "Số số hạng = (106 - 2) : 2 + 1 = 53 số.\nTổng S = (2 + 106) × 53 : 2 = 2862."
    },
    {
      "id": "ARCH-M-G4-W34-T-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 4,
      "round": "Tuần 34 - Tiết 1",
      "topic": "Đọc và vẽ biểu đồ cột",
      "text": "[Tuần 34 - Tiết 1] Trọng tâm: Đọc và vẽ biểu đồ cột. Tính nhanh giá trị của biểu thức: 3425 × 4 + 3425 × 6 = ?",
      "options": [
        "A. 34250",
        "B. 34350",
        "C. 34150",
        "D. 17125"
      ],
      "answer": "A",
      "explanation": "Đặt thừa số chung: 3425 × (4 + 6) = 3425 × 10 = 34250."
    },
    {
      "id": "ARCH-M-G4-W34-T-2",
      "exam": "ARCHIMEDES_MATH",
      "grade": 4,
      "round": "Tuần 34 - Tiết 2",
      "topic": "Đọc và vẽ biểu đồ cột",
      "text": "[Tuần 34 - Tiết 2] Trọng tâm: Đọc và vẽ biểu đồ cột. Tính nhanh giá trị của biểu thức: 3450 × 4 + 3450 × 6 = ?",
      "options": [
        "A. 34500",
        "B. 34600",
        "C. 34400",
        "D. 17250"
      ],
      "answer": "A",
      "explanation": "Đặt thừa số chung: 3450 × (4 + 6) = 3450 × 10 = 34500."
    },
    {
      "id": "ARCH-M-G4-W34-T-3",
      "exam": "ARCHIMEDES_MATH",
      "grade": 4,
      "round": "Tuần 34 - Tiết 3",
      "topic": "Đọc và vẽ biểu đồ cột",
      "text": "[Tuần 34 - Tiết 3] Trọng tâm: Đọc và vẽ biểu đồ cột. Tính nhanh giá trị của biểu thức: 3475 × 4 + 3475 × 6 = ?",
      "options": [
        "A. 34750",
        "B. 34850",
        "C. 34650",
        "D. 17375"
      ],
      "answer": "A",
      "explanation": "Đặt thừa số chung: 3475 × (4 + 6) = 3475 × 10 = 34750."
    },
    {
      "id": "ARCH-M-G4-W34-PKT-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 4,
      "round": "Tuần 34 - Phiếu cuối tuần",
      "topic": "Đọc và vẽ biểu đồ cột",
      "text": "[Phiếu cuối tuần 34] Chủ đề: Đọc và vẽ biểu đồ cột. Tổng của hai số là 540, hiệu của hai số là 40. Tìm số lớn.",
      "options": [
        "A. 290",
        "B. 250",
        "C. 300",
        "D. 280"
      ],
      "answer": "A",
      "explanation": "Số lớn = (Tổng + Hiệu) : 2 = (540 + 40) : 2 = 580 : 2 = 290."
    },
    {
      "id": "ARCH-M-G4-W34-TTK-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 4,
      "round": "Tuần 34 - Bài tập tham khảo",
      "topic": "Đọc và vẽ biểu đồ cột",
      "text": "[Toán Olympic Archimedes Tuần 34] Tính tổng của dãy số cách đều sau: S = 2 + 4 + 6 + ... + 108",
      "options": [
        "A. 2970",
        "B. 2980",
        "C. 2960",
        "D. 2990"
      ],
      "answer": "A",
      "explanation": "Số số hạng = (108 - 2) : 2 + 1 = 54 số.\nTổng S = (2 + 108) × 54 : 2 = 2970."
    },
    {
      "id": "ARCH-M-G4-W35-T-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 4,
      "round": "Tuần 35 - Tiết 1",
      "topic": "Ôn tập tổng kết cuối năm học",
      "text": "[Tuần 35 - Tiết 1] Trọng tâm: Ôn tập tổng kết cuối năm học. Tính nhanh giá trị của biểu thức: 3525 × 4 + 3525 × 6 = ?",
      "options": [
        "A. 35250",
        "B. 35350",
        "C. 35150",
        "D. 17625"
      ],
      "answer": "A",
      "explanation": "Đặt thừa số chung: 3525 × (4 + 6) = 3525 × 10 = 35250."
    },
    {
      "id": "ARCH-M-G4-W35-T-2",
      "exam": "ARCHIMEDES_MATH",
      "grade": 4,
      "round": "Tuần 35 - Tiết 2",
      "topic": "Ôn tập tổng kết cuối năm học",
      "text": "[Tuần 35 - Tiết 2] Trọng tâm: Ôn tập tổng kết cuối năm học. Tính nhanh giá trị của biểu thức: 3550 × 4 + 3550 × 6 = ?",
      "options": [
        "A. 35500",
        "B. 35600",
        "C. 35400",
        "D. 17750"
      ],
      "answer": "A",
      "explanation": "Đặt thừa số chung: 3550 × (4 + 6) = 3550 × 10 = 35500."
    },
    {
      "id": "ARCH-M-G4-W35-T-3",
      "exam": "ARCHIMEDES_MATH",
      "grade": 4,
      "round": "Tuần 35 - Tiết 3",
      "topic": "Ôn tập tổng kết cuối năm học",
      "text": "[Tuần 35 - Tiết 3] Trọng tâm: Ôn tập tổng kết cuối năm học. Tính nhanh giá trị của biểu thức: 3575 × 4 + 3575 × 6 = ?",
      "options": [
        "A. 35750",
        "B. 35850",
        "C. 35650",
        "D. 17875"
      ],
      "answer": "A",
      "explanation": "Đặt thừa số chung: 3575 × (4 + 6) = 3575 × 10 = 35750."
    },
    {
      "id": "ARCH-M-G4-W35-PKT-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 4,
      "round": "Tuần 35 - Phiếu cuối tuần",
      "topic": "Ôn tập tổng kết cuối năm học",
      "text": "[Phiếu cuối tuần 35] Chủ đề: Ôn tập tổng kết cuối năm học. Tổng của hai số là 550, hiệu của hai số là 40. Tìm số lớn.",
      "options": [
        "A. 295",
        "B. 255",
        "C. 305",
        "D. 285"
      ],
      "answer": "A",
      "explanation": "Số lớn = (Tổng + Hiệu) : 2 = (550 + 40) : 2 = 590 : 2 = 295."
    },
    {
      "id": "ARCH-M-G4-W35-TTK-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 4,
      "round": "Tuần 35 - Bài tập tham khảo",
      "topic": "Ôn tập tổng kết cuối năm học",
      "text": "[Toán Olympic Archimedes Tuần 35] Tính tổng của dãy số cách đều sau: S = 2 + 4 + 6 + ... + 110",
      "options": [
        "A. 3080",
        "B. 3090",
        "C. 3070",
        "D. 3100"
      ],
      "answer": "A",
      "explanation": "Số số hạng = (110 - 2) : 2 + 1 = 55 số.\nTổng S = (2 + 110) × 55 : 2 = 3080."
    },
    {
      "id": "ARCH-M-G4-W1-PKT-01",
      "exam": "ARCHIMEDES_MATH",
      "grade": 4,
      "round": "Tuần 1 - Phiếu cuối tuần",
      "topic": "Cấu tạo số",
      "text": "Số gồm 3 chục nghìn, 6 nghìn, 19 chục và 8 đơn vị là:",
      "options": [],
      "answer": "36 198",
      "explanation": "3 chục nghìn = 30 000; 6 nghìn = 6 000; 19 chục = 190; 8 đơn vị = 8.\nSố đó là: 30 000 + 6 000 + 190 + 8 = 36 198.",
      "type": "fill",
      "acceptedAnswers": [
        "36198",
        "36 198"
      ]
    },
    {
      "id": "ARCH-M-G4-W1-PKT-02",
      "exam": "ARCHIMEDES_MATH",
      "grade": 4,
      "round": "Tuần 1 - Phiếu cuối tuần",
      "topic": "So sánh số tự nhiên",
      "text": "Số lớn nhất trong các số 976145; 96745; 96754; 976514 là:",
      "options": [],
      "answer": "976 514",
      "explanation": "So sánh các số có 6 chữ số: 976 514 > 976 145. Vậy số lớn nhất là 976 514.",
      "type": "fill",
      "acceptedAnswers": [
        "976514",
        "976 514"
      ]
    },
    {
      "id": "ARCH-M-G4-W1-PKT-03",
      "exam": "ARCHIMEDES_MATH",
      "grade": 4,
      "round": "Tuần 1 - Phiếu cuối tuần",
      "topic": "Giá trị theo vị trí của chữ số",
      "text": "Trong số 328 915, giá trị của chữ số 2 gấp giá trị của chữ số 5 bao nhiêu lần?",
      "options": [],
      "answer": "4000",
      "explanation": "Chữ số 2 ở hàng chục nghìn có giá trị là 20 000.\nChữ số 5 ở hàng đơn vị có giá trị là 5.\nGiá trị của chữ số 2 gấp giá trị của chữ số 5 số lần là: 20 000 : 5 = 4000 (lần).",
      "type": "fill",
      "acceptedAnswers": [
        "4000",
        "4000 lần",
        "4 000"
      ]
    },
    {
      "id": "ARCH-M-G4-W1-PKT-04",
      "exam": "ARCHIMEDES_MATH",
      "grade": 4,
      "round": "Tuần 1 - Phiếu cuối tuần",
      "topic": "Tìm y",
      "text": "Tìm y, biết: 2125 + y × 5 = 90000",
      "options": [],
      "answer": "17 575",
      "explanation": "y × 5 = 90000 - 2125 = 87875\ny = 87875 : 5 = 17575.",
      "type": "fill",
      "acceptedAnswers": [
        "17575",
        "17 575",
        "y = 17575",
        "y = 17 575"
      ]
    },
    {
      "id": "ARCH-M-G4-W1-PKT-05",
      "exam": "ARCHIMEDES_MATH",
      "grade": 4,
      "round": "Tuần 1 - Phiếu cuối tuần",
      "topic": "Toán giải Archimedes",
      "text": "Một cửa hàng văn phòng phẩm nhập về một số chiếc bút bi. Tuần đầu cửa hàng bán được 1235 chiếc. Tuần thứ hai cửa hàng bán được 1545 chiếc. Sau hai tuần bán cửa hàng còn lại 720 chiếc. Hỏi cửa hàng nhập về bao nhiêu chiếc bút bi?",
      "options": [],
      "answer": "3500",
      "explanation": "Tổng số bút bi cửa hàng nhập về là: 1235 + 1545 + 720 = 3500 (chiếc).",
      "type": "fill",
      "acceptedAnswers": [
        "3500",
        "3500 chiếc",
        "3 500"
      ]
    },
    {
      "id": "ARCH-M-G4-W1-PKT-06",
      "exam": "ARCHIMEDES_MATH",
      "grade": 4,
      "round": "Tuần 1 - Phiếu cuối tuần",
      "topic": "Phép chia có dư",
      "text": "Tìm số bị chia, biết số chia là số tự nhiên lớn nhất có một chữ số, thương là 1059 và số dư kém số chia 4 đơn vị.",
      "options": [],
      "answer": "9536",
      "explanation": "Số chia là số lớn nhất có 1 chữ số nên số chia là 9.\nSố dư kém số chia 4 đơn vị nên số dư là: 9 - 4 = 5.\nSố bị chia = Thương × Số chia + Số dư = 1059 × 9 + 5 = 9531 + 5 = 9536.",
      "type": "fill",
      "acceptedAnswers": [
        "9536",
        "9 536"
      ]
    },
    {
      "id": "ARCH-M-G4-W1-PKT-07",
      "exam": "ARCHIMEDES_MATH",
      "grade": 4,
      "round": "Tuần 1 - Phiếu cuối tuần",
      "topic": "Cấu tạo số",
      "text": "Số lớn nhất có sáu chữ số khác nhau có tổng các chữ số bằng 24 là:",
      "options": [],
      "answer": "984 210",
      "explanation": "Để được số lớn nhất có 6 chữ số khác nhau, ta chọn các hàng từ cao đến thấp: hàng trăm nghìn là 9, hàng chục nghìn là 8. Tổng hiện tại: 9 + 8 = 17.\nCần tổng thêm: 24 - 17 = 7 cho 4 chữ số còn lại.\nBốn chữ số khác nhau và khác 9, 8 có tổng bằng 7 và tạo số lớn nhất: chọn hàng đơn vị nhỏ nhất là 0, hàng chục là 1, hàng trăm là 2, hàng nghìn là: 7 - (2 + 1 + 0) = 4.\nVậy số đó là: 984 210 (kiểm tra: 9+8+4+2+1+0 = 24).",
      "type": "fill",
      "acceptedAnswers": [
        "984210",
        "984 210"
      ]
    },
    {
      "id": "ARCH-M-G4-W1-PKT-08",
      "exam": "ARCHIMEDES_MATH",
      "grade": 4,
      "round": "Tuần 1 - Phiếu cuối tuần",
      "topic": "So sánh biểu thức cấu tạo số",
      "text": "Điền dấu (>; <; =) thích hợp vào ô trống:\na35b + 4cd  [ ? ]  23b + a5c1 + 2d",
      "options": [],
      "answer": "<",
      "explanation": "Phân tích vế trái: a35b + 4cd = a000 + 350 + b + 400 + cd = a000 + cd + b + 750.\nPhân tích vế phải: 23b + a5c1 + 2d = 230 + b + a000 + 501 + c0 + 20 + d = a000 + cd + b + 751.\nVì 750 < 751 nên Vế trái < Vế phải.",
      "type": "fill",
      "acceptedAnswers": [
        "<"
      ]
    },
    {
      "id": "ARCH-M-G4-W1-PKT-09",
      "exam": "ARCHIMEDES_MATH",
      "grade": 4,
      "round": "Tuần 1 - Phiếu cuối tuần",
      "topic": "Toán đếm số",
      "text": "Cho các chữ số 0; 2; 4 và 5. Hỏi lập được tất cả bao nhiêu số có ba chữ số khác nhau từ các chữ số đã cho?",
      "options": [],
      "answer": "18",
      "explanation": "Số có dạng abc (a khác 0; a, b, c đôi một khác nhau):\n- Có 3 cách chọn a (chọn 2, 4 hoặc 5).\n- Có 3 cách chọn b (khác a, có thể chọn 0).\n- Có 2 cách chọn c (khác a và b).\nSố các số lập được là: 3 × 3 × 2 = 18 (số).",
      "type": "fill",
      "acceptedAnswers": [
        "18",
        "18 số"
      ]
    },
    {
      "id": "ARCH-M-G4-W1-PKT-10",
      "exam": "ARCHIMEDES_MATH",
      "grade": 4,
      "round": "Tuần 1 - Phiếu cuối tuần",
      "topic": "Toán đếm cấu tạo số",
      "text": "Có tất cả bao nhiêu số có bốn chữ số mà tổng các chữ số của mỗi số đó bằng 4?",
      "options": [],
      "answer": "20",
      "explanation": "Phân tích 4 thành tổng của 4 chữ số (hàng nghìn khác 0):\n- Dạng 4000: 1 số\n- Dạng 3, 1, 0, 0: 6 số\n- Dạng 2, 2, 0, 0: 3 số\n- Dạng 2, 1, 1, 0: 9 số\n- Dạng 1, 1, 1, 1: 1 số\nTổng cộng: 1 + 6 + 3 + 9 + 1 = 20 số.",
      "type": "fill",
      "acceptedAnswers": [
        "20",
        "20 số"
      ]
    },
    {
      "id": "ARCH-M-G4-W5-PKT-01",
      "exam": "ARCHIMEDES_MATH",
      "grade": 4,
      "round": "Tuần 5 - Phiếu cuối tuần",
      "topic": "Số và cấu tạo số",
      "text": "Viết số biết số đó gồm: 12 triệu, 23 chục nghìn, 8 nghìn, 4 trăm và 6 đơn vị.",
      "options": [],
      "answer": "12 238 406",
      "explanation": "12 triệu = 12 000 000; 23 chục nghìn = 230 000; 8 nghìn = 8 000; 4 trăm = 400; 6 đơn vị = 6.\nSố đó là: 12 000 000 + 230 000 + 8 000 + 400 + 6 = 12 238 406.\nĐáp số: 12 238 406.",
      "type": "fill",
      "acceptedAnswers": [
        "12238406",
        "12 238 406"
      ]
    },
    {
      "id": "ARCH-M-G4-W5-PKT-02",
      "exam": "ARCHIMEDES_MATH",
      "grade": 4,
      "round": "Tuần 5 - Phiếu cuối tuần",
      "topic": "Số và cấu tạo số",
      "text": "Số lẻ bé nhất có bảy chữ số khác nhau là:",
      "options": [],
      "answer": "1 023 457",
      "explanation": "Để được số bé nhất có 7 chữ số khác nhau, ta chọn các chữ số từ hàng cao xuống hàng thấp nhỏ nhất có thể: hàng triệu là 1, hàng trăm nghìn là 0, hàng chục nghìn là 2, hàng nghìn là 3, hàng trăm là 4.\nCòn lại chữ số hàng chục và hàng đơn vị: vì số cần tìm là số lẻ nên hàng đơn vị phải là 5 hoặc 7.\n- Nếu hàng đơn vị là 5 thì hàng chục nhỏ nhất là 6: số là 1 023 465.\n- Nếu hàng đơn vị là 7 thì hàng chục nhỏ nhất là 5: số là 1 023 457.\nSo sánh: 1 023 457 < 1 023 465.\nVậy số lẻ bé nhất có bảy chữ số khác nhau là: 1 023 457.",
      "type": "fill",
      "acceptedAnswers": [
        "1023457",
        "1 023 457"
      ]
    },
    {
      "id": "ARCH-M-G4-W5-PKT-03",
      "exam": "ARCHIMEDES_MATH",
      "grade": 4,
      "round": "Tuần 5 - Phiếu cuối tuần",
      "topic": "Tìm thành phần chưa biết",
      "text": "Tìm y, biết y là số tròn chục và 1030 < y < 1045.",
      "options": [],
      "answer": "1040",
      "explanation": "Số tròn chục lớn hơn 1030 và nhỏ hơn 1045 duy nhất là 1040.\nVậy y = 1040.",
      "type": "fill",
      "acceptedAnswers": [
        "1040",
        "y = 1040",
        "y=1040"
      ]
    },
    {
      "id": "ARCH-M-G4-W5-PKT-04",
      "exam": "ARCHIMEDES_MATH",
      "grade": 4,
      "round": "Tuần 5 - Phiếu cuối tuần",
      "topic": "Cấu tạo số",
      "text": "Cho các chữ số 0; 5; 7; 9. Tính tổng của số tự nhiên lớn nhất và số tự nhiên nhỏ nhất có bốn chữ số khác nhau được lập từ các chữ số trên.",
      "options": [],
      "answer": "14 829",
      "explanation": "- Số tự nhiên lớn nhất có bốn chữ số khác nhau lập từ 0, 5, 7, 9 là: 9750.\n- Số tự nhiên nhỏ nhất có bốn chữ số khác nhau lập từ 0, 5, 7, 9 là: 5079 (chữ số hàng nghìn khác 0).\nTổng của hai số đó là: 9750 + 5079 = 14 829.\nĐáp số: 14 829.",
      "type": "fill",
      "acceptedAnswers": [
        "14829",
        "14 829"
      ]
    },
    {
      "id": "ARCH-M-G4-W5-PKT-05",
      "exam": "ARCHIMEDES_MATH",
      "grade": 4,
      "round": "Tuần 5 - Phiếu cuối tuần",
      "topic": "Tính chất phép nhân",
      "text": "Điền dấu (>; <; =) thích hợp vào ô trống:\n215 × 3 + 215 × 7  [ ? ]  215 × 12 - 215 × 3",
      "options": [],
      "answer": ">",
      "explanation": "Vế trái: 215 × 3 + 215 × 7 = 215 × (3 + 7) = 215 × 10.\nVế phải: 215 × 12 - 215 × 3 = 215 × (12 - 3) = 215 × 9.\nVì 215 × 10 > 215 × 9 nên dấu cần điền là >.",
      "type": "fill",
      "acceptedAnswers": [
        ">"
      ]
    },
    {
      "id": "ARCH-M-G4-W5-PKT-06",
      "exam": "ARCHIMEDES_MATH",
      "grade": 4,
      "round": "Tuần 5 - Phiếu cuối tuần",
      "topic": "Trung bình cộng",
      "text": "Trung bình cộng của số chẵn lớn nhất có bốn chữ số và số nhỏ nhất có năm chữ số khác nhau là:",
      "options": [],
      "answer": "10 116",
      "explanation": "- Số chẵn lớn nhất có 4 chữ số là: 9998.\n- Số nhỏ nhất có 5 chữ số khác nhau là: 10234.\nTrung bình cộng của hai số là: (9998 + 10234) : 2 = 20232 : 2 = 10116.\nĐáp số: 10 116.",
      "type": "fill",
      "acceptedAnswers": [
        "10116",
        "10 116"
      ]
    },
    {
      "id": "ARCH-M-G4-W5-PKT-07",
      "exam": "ARCHIMEDES_MATH",
      "grade": 4,
      "round": "Tuần 5 - Phiếu cuối tuần",
      "topic": "Tìm y - Biểu thức chứa chữ",
      "text": "Tìm y, biết: y × 15 + y × 2 - y × 7 = 230",
      "options": [],
      "answer": "23",
      "explanation": "Ta có: y × (15 + 2 - 7) = 230\ny × 10 = 230\ny = 230 : 10 = 23.\nĐáp số: y = 23.",
      "type": "fill",
      "acceptedAnswers": [
        "23",
        "y = 23",
        "y=23"
      ]
    },
    {
      "id": "ARCH-M-G4-W5-PKT-08",
      "exam": "ARCHIMEDES_MATH",
      "grade": 4,
      "round": "Tuần 5 - Phiếu cuối tuần",
      "topic": "Cấu tạo số nâng cao",
      "text": "Số lớn nhất có sáu chữ số mà tổng các chữ số của số đó bằng 50 là:",
      "options": [],
      "answer": "999 995",
      "explanation": "Tổng các chữ số lớn nhất của số có 6 chữ số là: 9 × 6 = 54 (số 999999).\nVì tổng các chữ số cần tìm là 50 nên giảm đi: 54 - 50 = 4 đơn vị.\nĐể số là lớn nhất, ta giữ các hàng cao lớn nhất là 9 và giảm 4 đơn vị ở hàng đơn vị (hàng thấp nhất): 9 - 4 = 5.\nVậy số cần tìm là: 999 995 (kiểm tra: 9+9+9+9+9+5 = 50).",
      "type": "fill",
      "acceptedAnswers": [
        "999995",
        "999 995"
      ]
    },
    {
      "id": "ARCH-M-G4-W5-PKT-09",
      "exam": "ARCHIMEDES_MATH",
      "grade": 4,
      "round": "Tuần 5 - Phiếu cuối tuần",
      "topic": "Toán giải - Trung bình cộng & Đổi đơn vị",
      "text": "Một ô tô chở hàng, ngày thứ nhất chở được 5 thùng hàng có kích thước bằng nhau, với tổng cân nặng là 7500kg. Ngày thứ hai, ô tô chở được 7 thùng hàng như thế. Hỏi trung bình mỗi ngày ô tô đó chở được tất cả bao nhiêu tấn hàng?",
      "options": [],
      "answer": "9",
      "explanation": "Mỗi thùng hàng cân nặng là: 7500 : 5 = 1500 (kg).\nNgày thứ hai ô tô chở được: 1500 × 7 = 10500 (kg).\nCả hai ngày ô tô chở được: 7500 + 10500 = 18000 (kg).\nĐổi: 18000 kg = 18 tấn.\nTrung bình mỗi ngày ô tô chở được: 18 : 2 = 9 (tấn).\nĐáp số: 9 tấn.",
      "type": "fill",
      "acceptedAnswers": [
        "9",
        "9 tấn",
        "9 tan",
        "9tấn"
      ]
    },
    {
      "id": "ARCH-M-G4-W5-PKT-10",
      "exam": "ARCHIMEDES_MATH",
      "grade": 4,
      "round": "Tuần 5 - Phiếu cuối tuần",
      "topic": "Cấu tạo số Archimedes",
      "text": "Tìm một số có bốn chữ số mà hai chữ số cuối là 19. Biết rằng nếu xóa đi chữ số 0 ở hàng trăm của số đó ta sẽ được số mới bé hơn số phải tìm 1800 đơn vị.",
      "options": [],
      "answer": "2019",
      "explanation": "Số có 4 chữ số, chữ số hàng trăm là 0 và hai chữ số cuối là 19 có dạng a019 (a khác 0).\nKhi xóa chữ số 0 ở hàng trăm, ta được số mới là a19.\nTheo đề bài: a019 - a19 = 1800\nTa phân tích: a × 1000 + 19 - (a × 100 + 19) = 1800\na × 900 = 1800\na = 1800 : 900 = 2.\nVậy số cần tìm là: 2019.\nĐáp số: 2019.",
      "type": "fill",
      "acceptedAnswers": [
        "2019"
      ]
    },
    {
      "id": "ARCH-M-G4-W2-PKT-01",
      "exam": "ARCHIMEDES_MATH",
      "grade": 4,
      "round": "Tuần 2 - Phiếu cuối tuần",
      "topic": "Đọc viết số tự nhiên",
      "text": "Số 'hai trăm bốn mươi nghìn tám trăm linh bảy' viết là:",
      "options": [],
      "answer": "240 807",
      "explanation": "Số hai trăm bốn mươi nghìn tám trăm linh bảy viết là: 240 807.",
      "type": "fill",
      "acceptedAnswers": [
        "240807",
        "240 807"
      ]
    },
    {
      "id": "ARCH-M-G4-W2-PKT-02",
      "exam": "ARCHIMEDES_MATH",
      "grade": 4,
      "round": "Tuần 2 - Phiếu cuối tuần",
      "topic": "Tìm y",
      "text": "Tìm y, biết: (132 - y) × 9 = 729",
      "options": [],
      "answer": "51",
      "explanation": "132 - y = 729 : 9 = 81\ny = 132 - 81 = 51.",
      "type": "fill",
      "acceptedAnswers": [
        "51",
        "y = 51",
        "y=51"
      ]
    },
    {
      "id": "ARCH-M-G4-W2-PKT-03",
      "exam": "ARCHIMEDES_MATH",
      "grade": 4,
      "round": "Tuần 2 - Phiếu cuối tuần",
      "topic": "Tính thuận tiện",
      "text": "Tính giá trị biểu thức: 97345 - 9205 × 3 - 7 × 9205",
      "options": [],
      "answer": "5295",
      "explanation": "97345 - 9205 × 3 - 7 × 9205 = 97345 - 9205 × (3 + 7) = 97345 - 9205 × 10 = 97345 - 92050 = 5295.",
      "type": "fill",
      "acceptedAnswers": [
        "5295",
        "5 295"
      ]
    },
    {
      "id": "ARCH-M-G4-W2-PKT-04",
      "exam": "ARCHIMEDES_MATH",
      "grade": 4,
      "round": "Tuần 2 - Phiếu cuối tuần",
      "topic": "Cấu tạo số - Lớp nghìn",
      "text": "Số tự nhiên nhỏ nhất có lớp nghìn gồm ba chữ số 0; 1; 4 là:",
      "options": [],
      "answer": "104 000",
      "explanation": "Lớp nghìn gồm 3 chữ số 0, 1, 4 nhỏ nhất khi chữ số hàng trăm nghìn là 1, hàng chục nghìn là 0, hàng nghìn là 4. Lớp đơn vị nhỏ nhất là 000. Số đó là: 104 000.",
      "type": "fill",
      "acceptedAnswers": [
        "104000",
        "104 000"
      ]
    },
    {
      "id": "ARCH-M-G4-W2-PKT-05",
      "exam": "ARCHIMEDES_MATH",
      "grade": 4,
      "round": "Tuần 2 - Phiếu cuối tuần",
      "topic": "Quy luật dãy số",
      "text": "Điền số thích hợp vào chỗ trống để được dãy số có quy luật:\n43135; 43155; 43175; 43195; [ ? ]; 43235",
      "options": [],
      "answer": "43 215",
      "explanation": "Dãy số cách đều 20 đơn vị. Số tiếp theo là: 43195 + 20 = 43215.",
      "type": "fill",
      "acceptedAnswers": [
        "43215",
        "43 215"
      ]
    },
    {
      "id": "ARCH-M-G4-W2-PKT-06",
      "exam": "ARCHIMEDES_MATH",
      "grade": 4,
      "round": "Tuần 2 - Phiếu cuối tuần",
      "topic": "So sánh giá trị biểu thức",
      "text": "So sánh giá trị hai biểu thức:\nA = 25678 + 31284 + 90275  và  B = 35275 + 21688 + 90274",
      "options": [],
      "answer": "=",
      "explanation": "Tính giá trị: A = 147 237; B = 147 237. Vậy A = B.",
      "type": "fill",
      "acceptedAnswers": [
        "=",
        "A = B",
        "A=B"
      ]
    },
    {
      "id": "ARCH-M-G4-W2-PKT-07",
      "exam": "ARCHIMEDES_MATH",
      "grade": 4,
      "round": "Tuần 2 - Phiếu cuối tuần",
      "topic": "Toán giải tính chất phép cộng",
      "text": "Ba số hạng có tổng là 3486. Hỏi nếu tăng mỗi số hạng thêm 1122 đơn vị thì được tổng mới là bao nhiêu?",
      "options": [],
      "answer": "6852",
      "explanation": "Mỗi số hạng tăng 1122 đơn vị thì cả 3 số hạng tăng: 1122 × 3 = 3366 đơn vị.\nTổng mới là: 3486 + 3366 = 6852.",
      "type": "fill",
      "acceptedAnswers": [
        "6852",
        "6 852"
      ]
    },
    {
      "id": "ARCH-M-G4-W2-PKT-08",
      "exam": "ARCHIMEDES_MATH",
      "grade": 4,
      "round": "Tuần 2 - Phiếu cuối tuần",
      "topic": "Mối quan hệ các thành phần phép trừ",
      "text": "Trong một phép trừ, nếu tăng số bị trừ thêm 305 đơn vị và giảm số trừ đi 10 đơn vị thì được hiệu mới là 32554. Hỏi hiệu ban đầu của phép trừ là bao nhiêu?",
      "options": [],
      "answer": "32 239",
      "explanation": "Tăng số bị trừ 305 đơn vị thì hiệu tăng 305 đơn vị. Giảm số trừ 10 đơn vị thì hiệu tăng tiếp 10 đơn vị.\nHiệu mới hơn hiệu ban đầu: 305 + 10 = 315 đơn vị.\nHiệu ban đầu là: 32554 - 315 = 32239.",
      "type": "fill",
      "acceptedAnswers": [
        "32239",
        "32 239"
      ]
    },
    {
      "id": "ARCH-M-G4-W2-PKT-09",
      "exam": "ARCHIMEDES_MATH",
      "grade": 4,
      "round": "Tuần 2 - Phiếu cuối tuần",
      "topic": "Cấu tạo số",
      "text": "Tìm một số có bốn chữ số, biết chữ số hàng trăm gấp đôi chữ số hàng nghìn, chữ số hàng chục gấp đôi chữ số hàng trăm và chữ số hàng đơn vị lớn hơn chữ số hàng chục 3 đơn vị.",
      "options": [],
      "answer": "1247",
      "explanation": "Hàng nghìn khác 0, nếu là 1 thì hàng trăm là 2, hàng chục là 4, hàng đơn vị là 4 + 3 = 7. Số đó là 1247. (Nếu hàng nghìn là 2 thì hàng chục là 8, hàng đơn vị 8 + 3 = 11 vượt quá 9).",
      "type": "fill",
      "acceptedAnswers": [
        "1247"
      ]
    },
    {
      "id": "ARCH-M-G4-W2-PKT-10",
      "exam": "ARCHIMEDES_MATH",
      "grade": 4,
      "round": "Tuần 2 - Phiếu cuối tuần",
      "topic": "Đếm chữ số xuất hiện",
      "text": "Viết các số tự nhiên liên tiếp từ 1 đến 105 thì chữ số 5 xuất hiện bao nhiêu lần?",
      "options": [],
      "answer": "21",
      "explanation": "- Ở hàng đơn vị: 5, 15, 25, 35, 45, 55, 65, 75, 85, 95, 105 (11 lần).\n- Ở hàng chục: 50, 51, 52, 53, 54, 55, 56, 57, 58, 59 (10 lần).\nTổng số lần xuất hiện: 11 + 10 = 21 (lần).",
      "type": "fill",
      "acceptedAnswers": [
        "21",
        "21 lần"
      ]
    },
    {
      "id": "ARCH-M-G4-W3-PKT-01",
      "exam": "ARCHIMEDES_MATH",
      "grade": 4,
      "round": "Tuần 3 - Phiếu cuối tuần",
      "topic": "Giá trị của chữ số",
      "text": "Giá trị của chữ số 2 trong số 806 325 479 là:",
      "options": [],
      "answer": "20 000",
      "explanation": "Chữ số 2 thuộc hàng chục nghìn nên có giá trị là 20 000.",
      "type": "fill",
      "acceptedAnswers": [
        "20000",
        "20 000"
      ]
    },
    {
      "id": "ARCH-M-G4-W3-PKT-02",
      "exam": "ARCHIMEDES_MATH",
      "grade": 4,
      "round": "Tuần 3 - Phiếu cuối tuần",
      "topic": "Hàng và lớp",
      "text": "Các chữ số thuộc lớp nghìn trong số 102 345 876 là:",
      "options": [],
      "answer": "3; 4; 5",
      "explanation": "Lớp nghìn gồm hàng trăm nghìn (3), hàng chục nghìn (4) và hàng nghìn (5).",
      "type": "fill",
      "acceptedAnswers": [
        "3; 4; 5",
        "3, 4, 5",
        "3;4;5",
        "3,4,5",
        "3 4 5",
        "345"
      ]
    },
    {
      "id": "ARCH-M-G4-W3-PKT-03",
      "exam": "ARCHIMEDES_MATH",
      "grade": 4,
      "round": "Tuần 3 - Phiếu cuối tuần",
      "topic": "Biểu thức chứa chữ",
      "text": "Giá trị của biểu thức A = 1520 + (375 - n) × 3 với n = 5 là:",
      "options": [],
      "answer": "2630",
      "explanation": "Thay n = 5: A = 1520 + (375 - 5) × 3 = 1520 + 370 × 3 = 1520 + 1110 = 2630.",
      "type": "fill",
      "acceptedAnswers": [
        "2630",
        "2 630"
      ]
    },
    {
      "id": "ARCH-M-G4-W3-PKT-04",
      "exam": "ARCHIMEDES_MATH",
      "grade": 4,
      "round": "Tuần 3 - Phiếu cuối tuần",
      "topic": "Biểu thức chứa chữ",
      "text": "Giá trị của biểu thức B = a × 1054 - 54 với a = 4 là:",
      "options": [],
      "answer": "4162",
      "explanation": "Thay a = 4: B = 4 × 1054 - 54 = 4216 - 54 = 4162.",
      "type": "fill",
      "acceptedAnswers": [
        "4162",
        "4 162"
      ]
    },
    {
      "id": "ARCH-M-G4-W3-PKT-05",
      "exam": "ARCHIMEDES_MATH",
      "grade": 4,
      "round": "Tuần 3 - Phiếu cuối tuần",
      "topic": "Thứ tự thực hiện phép tính",
      "text": "Giá trị của biểu thức C = 26781 : 3 + 7567 × 4 là:",
      "options": [],
      "answer": "39 195",
      "explanation": "C = 8927 + 30268 = 39195.",
      "type": "fill",
      "acceptedAnswers": [
        "39195",
        "39 195"
      ]
    },
    {
      "id": "ARCH-M-G4-W3-PKT-06",
      "exam": "ARCHIMEDES_MATH",
      "grade": 4,
      "round": "Tuần 3 - Phiếu cuối tuần",
      "topic": "Tính thuận tiện",
      "text": "Giá trị của biểu thức D = 47856 - (7856 - 4152) là:",
      "options": [],
      "answer": "44 152",
      "explanation": "D = 47856 - 7856 + 4152 = 40000 + 4152 = 44152.",
      "type": "fill",
      "acceptedAnswers": [
        "44152",
        "44 152"
      ]
    },
    {
      "id": "ARCH-M-G4-W3-PKT-07",
      "exam": "ARCHIMEDES_MATH",
      "grade": 4,
      "round": "Tuần 3 - Phiếu cuối tuần",
      "topic": "Tìm thành phần chưa biết",
      "text": "Tìm a để biểu thức E = a : 8 + 408 có giá trị bằng 5000.",
      "options": [],
      "answer": "36 736",
      "explanation": "a : 8 + 408 = 5000 => a : 8 = 4592 => a = 4592 × 8 = 36736.",
      "type": "fill",
      "acceptedAnswers": [
        "36736",
        "36 736",
        "a = 36736",
        "a = 36 736"
      ]
    },
    {
      "id": "ARCH-M-G4-W3-PKT-08",
      "exam": "ARCHIMEDES_MATH",
      "grade": 4,
      "round": "Tuần 3 - Phiếu cuối tuần",
      "topic": "Quy luật dãy số Fibonacci",
      "text": "Cho dãy số: 111; 112; 223; 335; 558; 893; [ ? ]; [ ? ]. Hai số thích hợp điền vào chỗ trống lần lượt là:",
      "options": [],
      "answer": "1451; 2344",
      "explanation": "Kể từ số thứ 3, mỗi số bằng tổng 2 số đứng liền trước: 558 + 893 = 1451; 893 + 1451 = 2344.",
      "type": "fill",
      "acceptedAnswers": [
        "1451; 2344",
        "1451, 2344",
        "1451 và 2344",
        "1451;2344"
      ]
    },
    {
      "id": "ARCH-M-G4-W3-PKT-09",
      "exam": "ARCHIMEDES_MATH",
      "grade": 4,
      "round": "Tuần 3 - Phiếu cuối tuần",
      "topic": "Hình học Archimedes",
      "text": "Một cái sân hình vuông có chu vi bằng 28m, người ta mở rộng về bên phải 2m và mở rộng bên trái 3m. Hỏi sau khi mở rộng chu vi sân là bao nhiêu?",
      "options": [],
      "answer": "38",
      "explanation": "Cạnh sân hình vuông ban đầu: 28 : 4 = 7 (m).\nSau khi mở rộng cả hai phía, chiều dài mới là: 7 + 2 + 3 = 12 (m); chiều rộng vẫn là 7m.\nChu vi sân mới là: (12 + 7) × 2 = 38 (m).",
      "type": "fill",
      "acceptedAnswers": [
        "38",
        "38m",
        "38 mét"
      ]
    },
    {
      "id": "ARCH-M-G4-W3-PKT-10",
      "exam": "ARCHIMEDES_MATH",
      "grade": 4,
      "round": "Tuần 3 - Phiếu cuối tuần",
      "topic": "Toán đếm số",
      "text": "Cho các chữ số 1; 2; 3; 4 và 5. Hỏi lập được tất cả bao nhiêu số có ba chữ số khác nhau từ các chữ số đã cho?",
      "options": [],
      "answer": "60",
      "explanation": "Hàng trăm có 5 cách chọn, hàng chục có 4 cách chọn, hàng đơn vị có 3 cách chọn. Số các số lập được: 5 × 4 × 3 = 60 (số).",
      "type": "fill",
      "acceptedAnswers": [
        "60",
        "60 số"
      ]
    },
    {
      "id": "ARCH-M-G4-W4-PKT-01",
      "exam": "ARCHIMEDES_MATH",
      "grade": 4,
      "round": "Tuần 4 - Phiếu cuối tuần",
      "topic": "Đổi đơn vị khối lượng",
      "text": "Điền dấu (>; =; <) thích hợp vào ô trống:\n50kg  [ ? ]  5 yến",
      "options": [],
      "answer": "=",
      "explanation": "5 yến = 50 kg. Do đó dấu cần điền là =.",
      "type": "fill",
      "acceptedAnswers": [
        "="
      ]
    },
    {
      "id": "ARCH-M-G4-W4-PKT-02",
      "exam": "ARCHIMEDES_MATH",
      "grade": 4,
      "round": "Tuần 4 - Phiếu cuối tuần",
      "topic": "Đổi đơn vị thời gian",
      "text": "Viết số thích hợp vào chỗ trống:\n1/3 giờ = ______ giây",
      "options": [],
      "answer": "1200",
      "explanation": "1 giờ = 60 phút = 3600 giây. 1/3 giờ = 3600 : 3 = 1200 giây.",
      "type": "fill",
      "acceptedAnswers": [
        "1200",
        "1200 giây",
        "1 200"
      ]
    },
    {
      "id": "ARCH-M-G4-W4-PKT-03",
      "exam": "ARCHIMEDES_MATH",
      "grade": 4,
      "round": "Tuần 4 - Phiếu cuối tuần",
      "topic": "Tính thuận tiện",
      "text": "Giá trị của biểu thức A = 90350 - 8035 × 4 - 6 × 8035 là:",
      "options": [],
      "answer": "10 000",
      "explanation": "A = 90350 - 8035 × (4 + 6) = 90350 - 8035 × 10 = 90350 - 80350 = 10000.",
      "type": "fill",
      "acceptedAnswers": [
        "10000",
        "10 000"
      ]
    },
    {
      "id": "ARCH-M-G4-W4-PKT-04",
      "exam": "ARCHIMEDES_MATH",
      "grade": 4,
      "round": "Tuần 4 - Phiếu cuối tuần",
      "topic": "Lập số tự nhiên",
      "text": "Số lẻ lớn nhất có sáu chữ số khác nhau lập được từ các chữ số 0; 1; 3; 5; 7; 9 là:",
      "options": [],
      "answer": "975 301",
      "explanation": "Để số là lớn nhất và là số lẻ: các chữ số hàng cao từ lớn đến bé là 9, 7, 5, 3. Chữ số tận cùng phải là lẻ nên hàng đơn vị là 1, hàng chục là 0. Số đó là: 975 301.",
      "type": "fill",
      "acceptedAnswers": [
        "975301",
        "975 301"
      ]
    },
    {
      "id": "ARCH-M-G4-W4-PKT-05",
      "exam": "ARCHIMEDES_MATH",
      "grade": 4,
      "round": "Tuần 4 - Phiếu cuối tuần",
      "topic": "Cấu tạo số",
      "text": "Hiệu của số bé nhất có năm chữ số khác nhau và số lớn nhất có ba chữ số là:",
      "options": [],
      "answer": "9235",
      "explanation": "Số bé nhất có 5 chữ số khác nhau là 10234. Số lớn nhất có 3 chữ số là 999. Hiệu: 10234 - 999 = 9235.",
      "type": "fill",
      "acceptedAnswers": [
        "9235",
        "9 235"
      ]
    },
    {
      "id": "ARCH-M-G4-W4-PKT-06",
      "exam": "ARCHIMEDES_MATH",
      "grade": 4,
      "round": "Tuần 4 - Phiếu cuối tuần",
      "topic": "Số tự nhiên nhỏ nhất theo tổng chữ số",
      "text": "Số tự nhiên nhỏ nhất có tổng các chữ số bằng 25 là:",
      "options": [],
      "answer": "799",
      "explanation": "Để số nhỏ nhất thì số chữ số phải ít nhất: 25 = 9 + 9 + 7 (3 chữ số). Số nhỏ nhất ghép từ các chữ số này là 799.",
      "type": "fill",
      "acceptedAnswers": [
        "799"
      ]
    },
    {
      "id": "ARCH-M-G4-W4-PKT-07",
      "exam": "ARCHIMEDES_MATH",
      "grade": 4,
      "round": "Tuần 4 - Phiếu cuối tuần",
      "topic": "Tính tổng dãy số",
      "text": "Tổng của 12 số tự nhiên đầu tiên là:",
      "options": [],
      "answer": "66",
      "explanation": "12 số tự nhiên đầu tiên từ 0 đến 11: 0 + 1 + 2 + ... + 11 = (11 + 0) × 12 : 2 = 66.",
      "type": "fill",
      "acceptedAnswers": [
        "66"
      ]
    },
    {
      "id": "ARCH-M-G4-W4-PKT-08",
      "exam": "ARCHIMEDES_MATH",
      "grade": 4,
      "round": "Tuần 4 - Phiếu cuối tuần",
      "topic": "Xoá chữ số hàng đơn vị",
      "text": "Tìm số tự nhiên, biết nếu xoá chữ số 6 ở hàng đơn vị của nó ta được số mới kém số phải tìm 366 đơn vị.",
      "options": [],
      "answer": "406",
      "explanation": "Gọi số cần tìm là A6 (A × 10 + 6). Khi xóa chữ số 6 được số A. Ta có: (A × 10 + 6) - A = 366 => A × 9 = 360 => A = 40. Số cần tìm là 406.",
      "type": "fill",
      "acceptedAnswers": [
        "406"
      ]
    },
    {
      "id": "ARCH-M-G4-W4-PKT-09",
      "exam": "ARCHIMEDES_MATH",
      "grade": 4,
      "round": "Tuần 4 - Phiếu cuối tuần",
      "topic": "Thêm chữ số vào bên trái",
      "text": "Tìm số tự nhiên có hai chữ số, biết nếu viết thêm chữ số 4 vào bên trái số đó thì được số mới gấp 9 lần số đã cho.",
      "options": [],
      "answer": "50",
      "explanation": "Số mới là 400 + ab = 9 × ab => 8 × ab = 400 => ab = 50.",
      "type": "fill",
      "acceptedAnswers": [
        "50"
      ]
    },
    {
      "id": "ARCH-M-G4-W4-PKT-10",
      "exam": "ARCHIMEDES_MATH",
      "grade": 4,
      "round": "Tuần 4 - Phiếu cuối tuần",
      "topic": "Cấu tạo số",
      "text": "Tìm một số có bốn chữ số, biết chữ số hàng trăm gấp đôi chữ số hàng nghìn, chữ số hàng chục gấp đôi chữ số hàng trăm và bằng một nửa chữ số hàng đơn vị.",
      "options": [],
      "answer": "1248",
      "explanation": "Hàng nghìn là 1 => hàng trăm là 2 => hàng chục là 4 => hàng đơn vị là 4 × 2 = 8. Số đó là: 1248.",
      "type": "fill",
      "acceptedAnswers": [
        "1248"
      ]
    },
    {
      "id": "ARCH-M-G4-W6-PKT-01",
      "exam": "ARCHIMEDES_MATH",
      "grade": 4,
      "round": "Tuần 6 - Phiếu cuối tuần",
      "topic": "Đổi đơn vị khối lượng",
      "text": "Viết số thích hợp vào chỗ trống:\n2045g = ______ kg ______ g",
      "options": [],
      "answer": "2 kg 45 g",
      "explanation": "2045g = 2000g + 45g = 2kg 45g.",
      "type": "fill",
      "acceptedAnswers": [
        "2 kg 45 g",
        "2kg 45g",
        "2; 45",
        "2, 45",
        "2 và 45"
      ]
    },
    {
      "id": "ARCH-M-G4-W6-PKT-02",
      "exam": "ARCHIMEDES_MATH",
      "grade": 4,
      "round": "Tuần 6 - Phiếu cuối tuần",
      "topic": "So sánh khối lượng",
      "text": "Cho các số đo: 1kg 212g; 1kg 2hg; 1kg 21dag; 10hg 20g. Số đo khối lượng lớn nhất là:",
      "options": [],
      "answer": "1 kg 212 g",
      "explanation": "Đổi ra gam: 1kg 212g = 1212g; 1kg 2hg = 1200g; 1kg 21dag = 1210g; 10hg 20g = 1020g. Số đo lớn nhất là 1kg 212g.",
      "type": "fill",
      "acceptedAnswers": [
        "1 kg 212 g",
        "1kg 212g",
        "1kg212g"
      ]
    },
    {
      "id": "ARCH-M-G4-W6-PKT-03",
      "exam": "ARCHIMEDES_MATH",
      "grade": 4,
      "round": "Tuần 6 - Phiếu cuối tuần",
      "topic": "Đổi đơn vị thời gian",
      "text": "Điền số thích hợp vào chỗ trống:\n9 thế kỉ 8 năm = ______ năm",
      "options": [],
      "answer": "908",
      "explanation": "9 thế kỉ = 900 năm. 900 + 8 = 908 năm.",
      "type": "fill",
      "acceptedAnswers": [
        "908",
        "908 năm"
      ]
    },
    {
      "id": "ARCH-M-G4-W6-PKT-04",
      "exam": "ARCHIMEDES_MATH",
      "grade": 4,
      "round": "Tuần 6 - Phiếu cuối tuần",
      "topic": "So sánh đơn vị độ dài",
      "text": "Điền dấu (>; <; =) thích hợp vào ô trống:\n5km 12m  [ ? ]  512m",
      "options": [],
      "answer": ">",
      "explanation": "5km 12m = 5012m > 512m.",
      "type": "fill",
      "acceptedAnswers": [
        ">"
      ]
    },
    {
      "id": "ARCH-M-G4-W6-PKT-05",
      "exam": "ARCHIMEDES_MATH",
      "grade": 4,
      "round": "Tuần 6 - Phiếu cuối tuần",
      "topic": "Toán giải khối lượng",
      "text": "Xe thứ nhất chở 9 tấn xi măng, xe thứ hai chở ít hơn xe thứ nhất 500kg xi măng. Hỏi cả hai xe chở được bao nhiêu tạ xi măng?",
      "options": [],
      "answer": "175",
      "explanation": "9 tấn = 90 tạ = 9000kg; 500kg = 5 tạ. Xe thứ hai chở: 90 - 5 = 85 tạ. Cả hai xe chở: 90 + 85 = 175 tạ.",
      "type": "fill",
      "acceptedAnswers": [
        "175",
        "175 tạ",
        "175ta"
      ]
    },
    {
      "id": "ARCH-M-G4-W6-PKT-06",
      "exam": "ARCHIMEDES_MATH",
      "grade": 4,
      "round": "Tuần 6 - Phiếu cuối tuần",
      "topic": "Chu vi hình vuông",
      "text": "Một hình vuông có diện tích 400m². Tính chu vi hình vuông đó.",
      "options": [],
      "answer": "80",
      "explanation": "Vì 20 × 20 = 400 nên cạnh hình vuông là 20m. Chu vi: 20 × 4 = 80m.",
      "type": "fill",
      "acceptedAnswers": [
        "80",
        "80m",
        "80 m"
      ]
    },
    {
      "id": "ARCH-M-G4-W6-PKT-07",
      "exam": "ARCHIMEDES_MATH",
      "grade": 4,
      "round": "Tuần 6 - Phiếu cuối tuần",
      "topic": "Toán đếm số",
      "text": "Dãy số tự nhiên từ 500 đến 600 có bao nhiêu số?",
      "options": [],
      "answer": "101",
      "explanation": "Số lượng số: (600 - 500) : 1 + 1 = 101 số.",
      "type": "fill",
      "acceptedAnswers": [
        "101",
        "101 số"
      ]
    },
    {
      "id": "ARCH-M-G4-W6-PKT-08",
      "exam": "ARCHIMEDES_MATH",
      "grade": 4,
      "round": "Tuần 6 - Phiếu cuối tuần",
      "topic": "Tính nhanh Archimedes",
      "text": "Tính giá trị biểu thức: A = (1 + 2 + 3 + ... + 50) × (101 × 102 - 101 × 101 - 50 - 51)",
      "options": [],
      "answer": "0",
      "explanation": "Xét thừa số thứ hai: 101 × (102 - 101) - (50 + 51) = 101 × 1 - 101 = 0. Do đó tích bằng 0.",
      "type": "fill",
      "acceptedAnswers": [
        "0"
      ]
    },
    {
      "id": "ARCH-M-G4-W6-PKT-09",
      "exam": "ARCHIMEDES_MATH",
      "grade": 4,
      "round": "Tuần 6 - Phiếu cuối tuần",
      "topic": "So sánh biểu thức chữ",
      "text": "So sánh A và B biết: A = abc + de + 2019  và  B = 20bc + d2 + a1e",
      "options": [],
      "answer": ">",
      "explanation": "Phân tích cấu tạo số: A = 100a + bc + 10d + e + 2019; B = 100a + bc + 10d + e + 2012. Vì 2019 > 2012 nên A > B.",
      "type": "fill",
      "acceptedAnswers": [
        ">",
        "A > B",
        "A>B"
      ]
    },
    {
      "id": "ARCH-M-G4-W6-PKT-10",
      "exam": "ARCHIMEDES_MATH",
      "grade": 4,
      "round": "Tuần 6 - Phiếu cuối tuần",
      "topic": "Xoá chữ số hàng đơn vị",
      "text": "Tìm một số tự nhiên, biết nếu xoá đi chữ số 5 ở hàng đơn vị của số đó ta được số mới kém số phải tìm 2930 đơn vị.",
      "options": [],
      "answer": "3255",
      "explanation": "(10 × A + 5) - A = 2930 => 9 × A = 2925 => A = 325. Số cần tìm là: 3255.",
      "type": "fill",
      "acceptedAnswers": [
        "3255",
        "3 255"
      ]
    },
    {
      "id": "ARCH-M-G4-W7-PKT-01",
      "exam": "ARCHIMEDES_MATH",
      "grade": 4,
      "round": "Tuần 7 - Phiếu cuối tuần",
      "topic": "Trung bình cộng",
      "text": "Trung bình cộng của ba số 60; 72; 78 là:",
      "options": [],
      "answer": "70",
      "explanation": "(60 + 72 + 78) : 3 = 210 : 3 = 70.",
      "type": "fill",
      "acceptedAnswers": [
        "70"
      ]
    },
    {
      "id": "ARCH-M-G4-W7-PKT-02",
      "exam": "ARCHIMEDES_MATH",
      "grade": 4,
      "round": "Tuần 7 - Phiếu cuối tuần",
      "topic": "Trung bình cộng dãy cách đều",
      "text": "Trung bình cộng của các số 13; 18; 23; 28; 33; 38; 43 là:",
      "options": [],
      "answer": "28",
      "explanation": "Dãy cách đều có 7 số (số lẻ), số ở giữa là 28, nên TBC là 28.",
      "type": "fill",
      "acceptedAnswers": [
        "28"
      ]
    },
    {
      "id": "ARCH-M-G4-W7-PKT-03",
      "exam": "ARCHIMEDES_MATH",
      "grade": 4,
      "round": "Tuần 7 - Phiếu cuối tuần",
      "topic": "Trung bình cộng khối lượng",
      "text": "Năm bao gạo cân nặng lần lượt là 33kg; 37kg; 41kg; 45kg và 49kg. Hỏi trung bình mỗi bao cân nặng bao nhiêu ki-lô-gam?",
      "options": [],
      "answer": "41",
      "explanation": "(33 + 37 + 41 + 45 + 49) : 5 = 205 : 5 = 41 kg.",
      "type": "fill",
      "acceptedAnswers": [
        "41",
        "41 kg",
        "41kg"
      ]
    },
    {
      "id": "ARCH-M-G4-W7-PKT-04",
      "exam": "ARCHIMEDES_MATH",
      "grade": 4,
      "round": "Tuần 7 - Phiếu cuối tuần",
      "topic": "Toán giải trung bình cộng",
      "text": "Một cửa hàng xăng dầu trong 3 ngày đầu tuần bán được 2150l xăng, 4 ngày còn lại trong tuần bán được 2540l xăng. Hỏi trung bình mỗi ngày trong tuần cửa hàng bán được bao nhiêu lít xăng?",
      "options": [],
      "answer": "670",
      "explanation": "Tổng xăng trong 7 ngày: 2150 + 2540 = 4690 (lít). Trung bình mỗi ngày: 4690 : 7 = 670 (lít).",
      "type": "fill",
      "acceptedAnswers": [
        "670",
        "670 lít",
        "670l"
      ]
    },
    {
      "id": "ARCH-M-G4-W7-PKT-05",
      "exam": "ARCHIMEDES_MATH",
      "grade": 4,
      "round": "Tuần 7 - Phiếu cuối tuần",
      "topic": "Toán giải TBC nâng cao",
      "text": "Xe thứ nhất chở 45 tạ hàng, xe thứ hai chở được 53 tạ hàng, xe thứ ba chở được số hàng nhiều hơn trung bình cộng của hai xe đầu là 5 tạ. Xe thứ ba chở được số tạ hàng là:",
      "options": [],
      "answer": "54",
      "explanation": "TBC hai xe đầu: (45 + 53) : 2 = 49 tạ. Xe thứ ba chở: 49 + 5 = 54 tạ.",
      "type": "fill",
      "acceptedAnswers": [
        "54",
        "54 tạ",
        "54ta"
      ]
    },
    {
      "id": "ARCH-M-G4-W7-PKT-06",
      "exam": "ARCHIMEDES_MATH",
      "grade": 4,
      "round": "Tuần 7 - Phiếu cuối tuần",
      "topic": "Tìm số hạng từ TBC",
      "text": "Trung bình cộng ba số bằng 416, biết hai trong ba số đó là 296 và 367. Số thứ ba là:",
      "options": [],
      "answer": "585",
      "explanation": "Tổng ba số: 416 × 3 = 1248. Số thứ ba: 1248 - 296 - 367 = 585.",
      "type": "fill",
      "acceptedAnswers": [
        "585"
      ]
    },
    {
      "id": "ARCH-M-G4-W7-PKT-07",
      "exam": "ARCHIMEDES_MATH",
      "grade": 4,
      "round": "Tuần 7 - Phiếu cuối tuần",
      "topic": "Thay đổi trung bình cộng",
      "text": "Trung bình cộng của ba số là 468. Nếu thêm số thứ tư là 480 thì trung bình cộng của bốn số là:",
      "options": [],
      "answer": "471",
      "explanation": "Tổng ba số: 468 × 3 = 1404. Tổng bốn số: 1404 + 480 = 1884. TBC bốn số: 1884 : 4 = 471.",
      "type": "fill",
      "acceptedAnswers": [
        "471"
      ]
    },
    {
      "id": "ARCH-M-G4-W7-PKT-08",
      "exam": "ARCHIMEDES_MATH",
      "grade": 4,
      "round": "Tuần 7 - Phiếu cuối tuần",
      "topic": "TBC dãy số tự nhiên",
      "text": "Tìm số trung bình cộng của các số có hai chữ số bé hơn 21.",
      "options": [],
      "answer": "15",
      "explanation": "Các số có 2 chữ số bé hơn 21: 10, 11, ..., 20. TBC = (10 + 20) : 2 = 15.",
      "type": "fill",
      "acceptedAnswers": [
        "15"
      ]
    },
    {
      "id": "ARCH-M-G4-W7-PKT-09",
      "exam": "ARCHIMEDES_MATH",
      "grade": 4,
      "round": "Tuần 7 - Phiếu cuối tuần",
      "topic": "TBC số liên tiếp",
      "text": "Trung bình cộng của 9 số tự nhiên liên tiếp là 91. Tổng của 9 số đó là:",
      "options": [],
      "answer": "819",
      "explanation": "Tổng 9 số = 91 × 9 = 819.",
      "type": "fill",
      "acceptedAnswers": [
        "819"
      ]
    },
    {
      "id": "ARCH-M-G4-W7-PKT-10",
      "exam": "ARCHIMEDES_MATH",
      "grade": 4,
      "round": "Tuần 7 - Phiếu cuối tuần",
      "topic": "Toán TBC Archimedes đặc sắc",
      "text": "Trung bình cộng của ba số là 36. Nếu gấp số thứ nhất lên 2 lần thì trung bình cộng của chúng bằng 54. Nếu gấp số thứ hai lên 3 lần thì trung bình cộng của chúng bằng 46. Tìm ba số đó.",
      "options": [],
      "answer": "54; 15; 39",
      "explanation": "Tổng 3 số: 36 × 3 = 108.\nGấp số 1 lên 2 lần, tổng mới: 54 × 3 = 162 => Số 1 = 162 - 108 = 54.\nGấp số 2 lên 3 lần, tổng mới: 46 × 3 = 138 => 2 lần Số 2 = 138 - 108 = 30 => Số 2 = 15.\nSố 3 = 108 - 54 - 15 = 39.",
      "type": "fill",
      "acceptedAnswers": [
        "54; 15; 39",
        "54, 15, 39",
        "54;15;39",
        "54 15 39"
      ]
    },
    {
      "id": "ARCH-M-G4-W8-PKT-01",
      "exam": "ARCHIMEDES_MATH",
      "grade": 4,
      "round": "Tuần 8 - Phiếu cuối tuần",
      "topic": "Tìm hai số khi biết tổng và hiệu",
      "text": "Tìm hai số, biết tổng của hai số là 345 và hiệu của chúng là 45.",
      "options": [],
      "answer": "195 và 150",
      "explanation": "Số lớn = (345 + 45) : 2 = 195; Số bé = 195 - 45 = 150.",
      "type": "fill",
      "acceptedAnswers": [
        "195 và 150",
        "195; 150",
        "195, 150",
        "195;150"
      ]
    },
    {
      "id": "ARCH-M-G4-W8-PKT-02",
      "exam": "ARCHIMEDES_MATH",
      "grade": 4,
      "round": "Tuần 8 - Phiếu cuối tuần",
      "topic": "Tìm hai số khi biết tổng và hiệu",
      "text": "Tìm a và b, biết: a + b = 217 và a - b = 55.",
      "options": [],
      "answer": "136 và 81",
      "explanation": "a = (217 + 55) : 2 = 136; b = 136 - 55 = 81.",
      "type": "fill",
      "acceptedAnswers": [
        "136 và 81",
        "136; 81",
        "136, 81",
        "a=136; b=81",
        "a = 136; b = 81"
      ]
    },
    {
      "id": "ARCH-M-G4-W8-PKT-03",
      "exam": "ARCHIMEDES_MATH",
      "grade": 4,
      "round": "Tuần 8 - Phiếu cuối tuần",
      "topic": "Tìm thành phần từ TBC",
      "text": "Tìm số a, biết trung bình cộng của a và 518 là 458.",
      "options": [],
      "answer": "398",
      "explanation": "a + 518 = 458 × 2 = 916 => a = 916 - 518 = 398.",
      "type": "fill",
      "acceptedAnswers": [
        "398",
        "a = 398",
        "a=398"
      ]
    },
    {
      "id": "ARCH-M-G4-W8-PKT-04",
      "exam": "ARCHIMEDES_MATH",
      "grade": 4,
      "round": "Tuần 8 - Phiếu cuối tuần",
      "topic": "Tổng và hiệu kết hợp TBC",
      "text": "Tìm hai số, biết trung bình cộng của hai số là 62, số lớn hơn số bé 36.",
      "options": [],
      "answer": "80 và 44",
      "explanation": "Tổng hai số: 62 × 2 = 124. Số lớn = (124 + 36) : 2 = 80; Số bé = 80 - 36 = 44.",
      "type": "fill",
      "acceptedAnswers": [
        "80 và 44",
        "80; 44",
        "80, 44"
      ]
    },
    {
      "id": "ARCH-M-G4-W8-PKT-05",
      "exam": "ARCHIMEDES_MATH",
      "grade": 4,
      "round": "Tuần 8 - Phiếu cuối tuần",
      "topic": "Số chẵn liên tiếp",
      "text": "Tìm năm số chẵn liên tiếp có trung bình cộng là 50.",
      "options": [],
      "answer": "46; 48; 50; 52; 54",
      "explanation": "Số ở chính giữa là 50. Năm số chẵn liên tiếp là: 46; 48; 50; 52; 54.",
      "type": "fill",
      "acceptedAnswers": [
        "46; 48; 50; 52; 54",
        "46, 48, 50, 52, 54",
        "46;48;50;52;54"
      ]
    },
    {
      "id": "ARCH-M-G4-W8-PKT-06",
      "exam": "ARCHIMEDES_MATH",
      "grade": 4,
      "round": "Tuần 8 - Phiếu cuối tuần",
      "topic": "Tổng và hiệu ẩn hiệu",
      "text": "Tổng hai số là 924, hiệu hai số là số chẵn lớn nhất có một chữ số. Tìm hai số đó.",
      "options": [],
      "answer": "466 và 458",
      "explanation": "Số chẵn lớn nhất có 1 chữ số là 8. Số lớn = (924 + 8) : 2 = 466; Số bé = 466 - 8 = 458.",
      "type": "fill",
      "acceptedAnswers": [
        "466 và 458",
        "466; 458",
        "466, 458"
      ]
    },
    {
      "id": "ARCH-M-G4-W8-PKT-07",
      "exam": "ARCHIMEDES_MATH",
      "grade": 4,
      "round": "Tuần 8 - Phiếu cuối tuần",
      "topic": "TBC cấu tạo số",
      "text": "Trung bình cộng của số chẵn lớn nhất có 4 chữ số và số bé nhất có 5 chữ số là:",
      "options": [],
      "answer": "9999",
      "explanation": "(9998 + 10000) : 2 = 19998 : 2 = 9999.",
      "type": "fill",
      "acceptedAnswers": [
        "9999",
        "9 999"
      ]
    },
    {
      "id": "ARCH-M-G4-W8-PKT-08",
      "exam": "ARCHIMEDES_MATH",
      "grade": 4,
      "round": "Tuần 8 - Phiếu cuối tuần",
      "topic": "Hình học tổng hiệu",
      "text": "Một hình chữ nhật có chu vi bằng 72cm. Nếu giảm chiều dài 4cm và tăng chiều rộng thêm 4cm thì được hình vuông. Tính diện tích hình chữ nhật.",
      "options": [],
      "answer": "308",
      "explanation": "Nửa chu vi: 72 : 2 = 36 cm. Chiều dài hơn chiều rộng: 4 + 4 = 8 cm.\nChiều dài = (36 + 8) : 2 = 22 cm; Chiều rộng = 36 - 22 = 14 cm.\nDiện tích: 22 × 14 = 308 cm².",
      "type": "fill",
      "acceptedAnswers": [
        "308",
        "308 cm²",
        "308 cm2",
        "308cm2"
      ]
    },
    {
      "id": "ARCH-M-G4-W8-PKT-09",
      "exam": "ARCHIMEDES_MATH",
      "grade": 4,
      "round": "Tuần 8 - Phiếu cuối tuần",
      "topic": "TBC dãy số chẵn",
      "text": "Tìm số trung bình cộng của các số tự nhiên chẵn từ 2 đến 200.",
      "options": [],
      "answer": "101",
      "explanation": "Dãy số chẵn cách đều: TBC = (2 + 200) : 2 = 101.",
      "type": "fill",
      "acceptedAnswers": [
        "101"
      ]
    },
    {
      "id": "ARCH-M-G4-W8-PKT-10",
      "exam": "ARCHIMEDES_MATH",
      "grade": 4,
      "round": "Tuần 8 - Phiếu cuối tuần",
      "topic": "Toán hiệu tỉ - khoảng cách số lẻ",
      "text": "Tìm hai số, biết tổng hai số là 1011 và giữa chúng có 15 số lẻ.",
      "options": [],
      "answer": "521 và 490",
      "explanation": "Tổng là số lẻ nên một số chẵn, một số lẻ. Giữa chúng có 15 số lẻ thì hiệu = 15 × 2 + 1 = 31.\nSố lớn = (1011 + 31) : 2 = 521; Số bé = 1011 - 521 = 490.",
      "type": "fill",
      "acceptedAnswers": [
        "521 và 490",
        "521; 490",
        "521, 490"
      ]
    },
    {
      "id": "ARCH-M-G4-W9-PKT-01",
      "exam": "ARCHIMEDES_MATH",
      "grade": 4,
      "round": "Tuần 9 - Phiếu cuối tuần",
      "topic": "Ba số chẵn liên tiếp",
      "text": "Tìm ba số chẵn liên tiếp, biết trung bình cộng của ba số là 62.",
      "options": [],
      "answer": "60; 62; 64",
      "explanation": "Ba số chẵn liên tiếp có TBC là số ở chính giữa: 62. Ba số đó là: 60; 62; 64.",
      "type": "fill",
      "acceptedAnswers": [
        "60; 62; 64",
        "60, 62, 64",
        "60;62;64"
      ]
    },
    {
      "id": "ARCH-M-G4-W9-PKT-02",
      "exam": "ARCHIMEDES_MATH",
      "grade": 4,
      "round": "Tuần 9 - Phiếu cuối tuần",
      "topic": "Tổng và hiệu",
      "text": "Trung bình cộng của hai số là số chẵn lớn nhất có ba chữ số khác nhau. Hiệu của hai số là 26. Hai số đó là:",
      "options": [],
      "answer": "999 và 973",
      "explanation": "Số chẵn lớn nhất có 3 chữ số khác nhau là 986. Tổng hai số: 986 × 2 = 1972.\nSố lớn = (1972 + 26) : 2 = 999; Số bé = 999 - 26 = 973.",
      "type": "fill",
      "acceptedAnswers": [
        "999 và 973",
        "999; 973",
        "999, 973"
      ]
    },
    {
      "id": "ARCH-M-G4-W9-PKT-03",
      "exam": "ARCHIMEDES_MATH",
      "grade": 4,
      "round": "Tuần 9 - Phiếu cuối tuần",
      "topic": "Tổng và hiệu",
      "text": "Tổng hai số là 924, hiệu hai số là số tròn chục bé nhất. Hai số đó là:",
      "options": [],
      "answer": "467 và 457",
      "explanation": "Số tròn chục bé nhất là 10. Số lớn = (924 + 10) : 2 = 467; Số bé = 467 - 10 = 457.",
      "type": "fill",
      "acceptedAnswers": [
        "467 và 457",
        "467; 457",
        "467, 457"
      ]
    },
    {
      "id": "ARCH-M-G4-W9-PKT-04",
      "exam": "ARCHIMEDES_MATH",
      "grade": 4,
      "round": "Tuần 9 - Phiếu cuối tuần",
      "topic": "Tổng và hiệu",
      "text": "Tổng của hai số là số bé nhất có ba chữ số. Hiệu của hai số là 50. Hai số đó là:",
      "options": [],
      "answer": "75 và 25",
      "explanation": "Số bé nhất có 3 chữ số là 100. Số lớn = (100 + 50) : 2 = 75; Số bé = 75 - 50 = 25.",
      "type": "fill",
      "acceptedAnswers": [
        "75 và 25",
        "75; 25",
        "75, 25"
      ]
    },
    {
      "id": "ARCH-M-G4-W9-PKT-05",
      "exam": "ARCHIMEDES_MATH",
      "grade": 4,
      "round": "Tuần 9 - Phiếu cuối tuần",
      "topic": "Tổng và hiệu cấu tạo số",
      "text": "Tổng của hai số là số lớn nhất có năm chữ số và hiệu của hai số là số lẻ bé nhất có ba chữ số. Hai số đó là:",
      "options": [],
      "answer": "50 050 và 49 949",
      "explanation": "Số lớn nhất có 5 chữ số: 99999. Số lẻ bé nhất có 3 chữ số: 101.\nSố lớn = (99999 + 101) : 2 = 50050; Số bé = 50050 - 101 = 49949.",
      "type": "fill",
      "acceptedAnswers": [
        "50 050 và 49 949",
        "50050 và 49949",
        "50050; 49949",
        "50050, 49949"
      ]
    },
    {
      "id": "ARCH-M-G4-W9-PKT-06",
      "exam": "ARCHIMEDES_MATH",
      "grade": 4,
      "round": "Tuần 9 - Phiếu cuối tuần",
      "topic": "Hình chữ nhật tổng hiệu",
      "text": "Một hình chữ nhật có chu vi 196cm. Biết số đo chiều dài và chiều rộng là 2 số chẵn liên tiếp (đơn vị là cm). Tính diện tích hình chữ nhật đó.",
      "options": [],
      "answer": "2400",
      "explanation": "Nửa chu vi: 196 : 2 = 98 cm. Hiệu = 2 cm.\nChiều dài = (98 + 2) : 2 = 50 cm; Chiều rộng = 50 - 2 = 48 cm.\nDiện tích: 50 × 48 = 2400 cm².",
      "type": "fill",
      "acceptedAnswers": [
        "2400",
        "2400 cm²",
        "2400 cm2",
        "2 400"
      ]
    },
    {
      "id": "ARCH-M-G4-W9-PKT-07",
      "exam": "ARCHIMEDES_MATH",
      "grade": 4,
      "round": "Tuần 9 - Phiếu cuối tuần",
      "topic": "Thêm chữ số vào trước",
      "text": "Tìm hai số tự nhiên có tổng 572, biết nếu thêm chữ số 4 vào bên trái số bé ta được số lớn.",
      "options": [],
      "answer": "486 và 86",
      "explanation": "Thêm chữ số 4 vào bên trái số có 2 chữ số thì số đó tăng 400 đơn vị (hiệu = 400).\nSố lớn = (572 + 400) : 2 = 486; Số bé = 486 - 400 = 86.",
      "type": "fill",
      "acceptedAnswers": [
        "486 và 86",
        "486; 86",
        "486, 86"
      ]
    },
    {
      "id": "ARCH-M-G4-W9-PKT-08",
      "exam": "ARCHIMEDES_MATH",
      "grade": 4,
      "round": "Tuần 9 - Phiếu cuối tuần",
      "topic": "Toán tuổi Archimedes",
      "text": "Hiện nay tuổi trung bình của mẹ, chị và em là 20 tuổi. Biết em 9 tuổi, chị hơn em 4 tuổi. Tính tuổi mẹ hiện nay.",
      "options": [],
      "answer": "38",
      "explanation": "Tổng tuổi: 20 × 3 = 60 tuổi. Tuổi chị: 9 + 4 = 13 tuổi. Tuổi mẹ: 60 - 9 - 13 = 38 tuổi.",
      "type": "fill",
      "acceptedAnswers": [
        "38",
        "38 tuổi",
        "38tuoi"
      ]
    },
    {
      "id": "ARCH-M-G4-W9-PKT-09",
      "exam": "ARCHIMEDES_MATH",
      "grade": 4,
      "round": "Tuần 9 - Phiếu cuối tuần",
      "topic": "Tổng và hiệu số chẵn",
      "text": "Tìm hai số chẵn có tổng là 206, biết giữa chúng có 2 số chẵn liên tiếp khác.",
      "options": [],
      "answer": "106 và 100",
      "explanation": "Hiệu hai số: (2 + 1) × 2 = 6. Số lớn = (206 + 6) : 2 = 106; Số bé = 106 - 6 = 100.",
      "type": "fill",
      "acceptedAnswers": [
        "106 và 100",
        "106; 100",
        "106, 100"
      ]
    },
    {
      "id": "ARCH-M-G4-W9-PKT-10",
      "exam": "ARCHIMEDES_MATH",
      "grade": 4,
      "round": "Tuần 9 - Phiếu cuối tuần",
      "topic": "Tổng và hiệu số lẻ xen kẽ",
      "text": "Tìm hai số có tổng là 159, biết giữa hai số đó có ba số lẻ.",
      "options": [],
      "answer": "83 và 76",
      "explanation": "Tổng là số lẻ nên 1 số chẵn, 1 số lẻ. Giữa chúng có 3 số lẻ thì hiệu = 3 × 2 + 1 = 7.\nSố lớn = (159 + 7) : 2 = 83; Số bé = 159 - 83 = 76.",
      "type": "fill",
      "acceptedAnswers": [
        "83 và 76",
        "83; 76",
        "83, 76"
      ]
    }
  ],
  "grade5": [
    {
      "id": "ARCH-M-G5-W1-T1-01",
      "exam": "ARCHIMEDES_MATH",
      "grade": 5,
      "round": "Tuần 1 - Tiết 1",
      "topic": "Ôn tập khái niệm phân số",
      "text": "Phân số $\\frac{3}{5}$ bằng phân số nào dưới đây?",
      "options": [
        "A. $\\frac{9}{15}$",
        "B. $\\frac{6}{15}$",
        "C. $\\frac{9}{10}$",
        "D. $\\frac{12}{25}$"
      ],
      "answer": "A",
      "explanation": "Nhân cả tử số và mẫu số của $\\frac{3}{5}$ với 3 ta được: $\\frac{3 \\times 3}{5 \\times 3} = \\frac{9}{15}$."
    },
    {
      "id": "ARCH-M-G5-W1-T1-02",
      "exam": "ARCHIMEDES_MATH",
      "grade": 5,
      "round": "Tuần 1 - Tiết 1",
      "topic": "Rút gọn phân số",
      "text": "Rút gọn phân số $\\frac{24}{36}$ về dạng phân số tối giản ta được:",
      "options": [
        "A. $\\frac{2}{3}$",
        "B. $\\frac{4}{6}$",
        "C. $\\frac{3}{4}$",
        "D. $\\frac{1}{2}$"
      ],
      "answer": "A",
      "explanation": "Chia cả tử và mẫu cho ước chung lớn nhất là 12: $\\frac{24 : 12}{36 : 12} = \\frac{2}{3}$."
    },
    {
      "id": "ARCH-M-G5-W1-T1-03",
      "exam": "ARCHIMEDES_MATH",
      "grade": 5,
      "round": "Tuần 1 - Tiết 1",
      "topic": "So sánh phân số",
      "text": "Trong các phân số: $\\frac{5}{6}, \\frac{7}{6}, \\frac{4}{5}, \\frac{1}{1}$, phân số nào lớn hơn 1?",
      "options": [
        "A. $\\frac{7}{6}$",
        "B. $\\frac{5}{6}$",
        "C. $\\frac{4}{5}$",
        "D. $\\frac{1}{1}$"
      ],
      "answer": "A",
      "explanation": "Phân số có tử số lớn hơn mẫu số thì lớn hơn 1. Ở đây 7 > 6 nên $\\frac{7}{6} > 1$."
    },
    {
      "id": "ARCH-M-G5-W1-T1-04",
      "exam": "ARCHIMEDES_MATH",
      "grade": 5,
      "round": "Tuần 1 - Tiết 1",
      "topic": "Quy đồng mẫu số",
      "text": "Mẫu số chung nhỏ nhất của hai phân số $\\frac{5}{12}$ và $\\frac{7}{18}$ là bao nhiêu?",
      "options": [
        "A. 36",
        "B. 72",
        "C. 216",
        "D. 54"
      ],
      "answer": "A",
      "explanation": "BCNN(12, 18) = 36."
    },
    {
      "id": "ARCH-M-G5-W1-T1-05",
      "exam": "ARCHIMEDES_MATH",
      "grade": 5,
      "round": "Tuần 1 - Tiết 1",
      "topic": "Phân số thập phân",
      "text": "Phân số nào dưới đây là phân số thập phân?",
      "options": [
        "A. $\\frac{7}{100}$",
        "B. $\\frac{3}{20}$",
        "C. $\\frac{9}{50}$",
        "D. $\\frac{11}{200}$"
      ],
      "answer": "A",
      "explanation": "Phân số thập phân là phân số có mẫu số là 10, 100, 1000... Vậy phân số đó là $\\frac{7}{100}$."
    },
    {
      "id": "ARCH-M-G5-W1-T2-01",
      "exam": "ARCHIMEDES_MATH",
      "grade": 5,
      "round": "Tuần 1 - Tiết 2",
      "topic": "Phép cộng phân số",
      "text": "Tính kết quả: $\\frac{2}{3} + \\frac{1}{4} = ?$",
      "options": [
        "A. $\\frac{11}{12}$",
        "B. $\\frac{3}{7}$",
        "C. $\\frac{3}{12}$",
        "D. $\\frac{7}{12}$"
      ],
      "answer": "A",
      "explanation": "Quy đồng mẫu số 12: $\\frac{8}{12} + \\frac{3}{12} = \\frac{11}{12}$."
    },
    {
      "id": "ARCH-M-G5-W1-T2-02",
      "exam": "ARCHIMEDES_MATH",
      "grade": 5,
      "round": "Tuần 1 - Tiết 2",
      "topic": "Phép nhân phân số",
      "text": "Tính kết quả: $\\frac{5}{8} \\times \\frac{4}{15} = ?$",
      "options": [
        "A. $\\frac{1}{6}$",
        "B. $\\frac{2}{5}$",
        "C. $\\frac{1}{5}$",
        "D. $\\frac{4}{24}$"
      ],
      "answer": "A",
      "explanation": "Rút gọn chéo: $\\frac{5 \\times 4}{8 \\times 15} = \\frac{1 \\times 1}{2 \\times 3} = \\frac{1}{6}$."
    },
    {
      "id": "ARCH-M-G5-W1-T2-03",
      "exam": "ARCHIMEDES_MATH",
      "grade": 5,
      "round": "Tuần 1 - Tiết 2",
      "topic": "Phép chia phân số",
      "text": "Tính kết quả: $\\frac{7}{9} : \\frac{14}{27} = ?$",
      "options": [
        "A. $\\frac{3}{2}$",
        "B. $\\frac{2}{3}$",
        "C. $\\frac{1}{2}$",
        "D. $\\frac{4}{3}$"
      ],
      "answer": "A",
      "explanation": "Nhân đảo ngược: $\\frac{7}{9} \\times \\frac{27}{14} = \\frac{1 \\times 3}{1 \\times 2} = \\frac{3}{2}$."
    },
    {
      "id": "ARCH-M-G5-W1-T2-04",
      "exam": "ARCHIMEDES_MATH",
      "grade": 5,
      "round": "Tuần 1 - Tiết 2",
      "topic": "Chuyển hỗn số sang phân số",
      "text": "Chuyển hỗn số $3\\frac{2}{5}$ thành phân số ta được:",
      "options": [
        "A. $\\frac{17}{5}$",
        "B. $\\frac{11}{5}$",
        "C. $\\frac{13}{5}$",
        "D. $\\frac{15}{5}$"
      ],
      "answer": "A",
      "explanation": "Tử số = (3 × 5) + 2 = 17, mẫu số giữ nguyên là 5. Ta được $\\frac{17}{5}$."
    },
    {
      "id": "ARCH-M-G5-W1-T2-05",
      "exam": "ARCHIMEDES_MATH",
      "grade": 5,
      "round": "Tuần 1 - Tiết 2",
      "topic": "Tìm x với phân số",
      "text": "Tìm x biết: $x - \\frac{1}{3} = \\frac{2}{5}$",
      "options": [
        "A. $\\frac{11}{15}$",
        "B. $\\frac{1}{15}$",
        "C. $\\frac{3}{8}$",
        "D. $\\frac{7}{15}$"
      ],
      "answer": "A",
      "explanation": "$x = \\frac{2}{5} + \\frac{1}{3} = \\frac{6}{15} + \\frac{5}{15} = \\frac{11}{15}$."
    },
    {
      "id": "ARCH-M-G5-W1-PKT-01",
      "exam": "ARCHIMEDES_MATH",
      "grade": 5,
      "round": "Tuần 1 - Phiếu cuối tuần",
      "topic": "Toán tìm phân số của một số",
      "text": "Một mảnh vườn hình chữ nhật có chu vi là 120m, chiều rộng bằng $\\frac{2}{3}$ chiều dài. Tính diện tích của mảnh vườn đó.",
      "options": [
        "A. 864 m²",
        "B. 800 m²",
        "C. 720 m²",
        "D. 960 m²"
      ],
      "answer": "A",
      "explanation": "Nửa chu vi (tổng dài + rộng) = 120 : 2 = 60m. Tổng số phần bằng nhau: 2 + 3 = 5 phần. Chiều rộng = (60 : 5) × 2 = 24m. Chiều dài = 60 - 24 = 36m. Diện tích = 36 × 24 = 864 m²."
    },
    {
      "id": "ARCH-M-G5-W1-PKT-02",
      "exam": "ARCHIMEDES_MATH",
      "grade": 5,
      "round": "Tuần 1 - Phiếu cuối tuần",
      "topic": "Hiệu và tỉ số",
      "text": "Mẹ hơn con 28 tuổi. Tuổi con bằng $\\frac{1}{5}$ tuổi mẹ. Hỏi năm nay mẹ bao nhiêu tuổi?",
      "options": [
        "A. 35 tuổi",
        "B. 32 tuổi",
        "C. 40 tuổi",
        "D. 36 tuổi"
      ],
      "answer": "A",
      "explanation": "Hiệu số phần bằng nhau: 5 - 1 = 4 phần. Giá trị 1 phần (tuổi con) = 28 : 4 = 7 tuổi. Tuổi mẹ = 7 × 5 = 35 tuổi."
    },
    {
      "id": "ARCH-M-G5-W1-PKT-03",
      "exam": "ARCHIMEDES_MATH",
      "grade": 5,
      "round": "Tuần 1 - Phiếu cuối tuần",
      "topic": "Toán rút về đơn vị",
      "text": "Một đội công nhân gồm 8 người đắp xong một đoạn đê trong 6 ngày. Hỏi muốn đắp xong đoạn đê đó trong 4 ngày thì cần bao nhiêu người? (Mức làm của mỗi người như nhau).",
      "options": [
        "A. 12 người",
        "B. 10 người",
        "C. 14 người",
        "D. 16 người"
      ],
      "answer": "A",
      "explanation": "Để hoàn thành trong 1 ngày cần: 8 × 6 = 48 công. Để hoàn thành trong 4 ngày cần: 48 : 4 = 12 người."
    },
    {
      "id": "ARCH-M-G5-W1-PKT-04",
      "exam": "ARCHIMEDES_MATH",
      "grade": 5,
      "round": "Tuần 1 - Phiếu cuối tuần",
      "topic": "Đổi đơn vị đo diện tích",
      "text": "5 ha 24 m² đổi thành mét vuông là bao nhiêu?",
      "options": [
        "A. 50.024 m²",
        "B. 5.024 m²",
        "C. 50.240 m²",
        "D. 524 m²"
      ],
      "answer": "A",
      "explanation": "1 ha = 10.000 m². Vậy 5 ha = 50.000 m² + 24 m² = 50.024 m²."
    },
    {
      "id": "ARCH-M-G5-W1-PKT-05",
      "exam": "ARCHIMEDES_MATH",
      "grade": 5,
      "round": "Tuần 1 - Phiếu cuối tuần",
      "topic": "Tính nhanh phân số",
      "text": "Tính nhanh giá trị: $\\frac{1}{2} + \\frac{1}{4} + \\frac{1}{8} + \\frac{1}{16} + \\frac{1}{32} + \\frac{1}{64}$",
      "options": [
        "A. $\\frac{63}{64}$",
        "B. $\\frac{62}{64}$",
        "C. $\\frac{64}{63}$",
        "D. $1$"
      ],
      "answer": "A",
      "explanation": "Nhân 2 vào tổng: $2S = 1 + \\frac{1}{2} + ... + \\frac{1}{32}$. Lấy $2S - S = 1 - \\frac{1}{64} = \\frac{63}{64}$."
    },
    {
      "id": "ARCH-M-G5-W1-TTK-01",
      "exam": "ARCHIMEDES_MATH",
      "grade": 5,
      "round": "Tuần 1 - Bài tập tham khảo",
      "topic": "Dãy phân số triệt tiêu Archimedes",
      "text": "Tính giá trị của biểu thức sau: $A = \\frac{1}{1 \\times 2} + \\frac{1}{2 \\times 3} + \\frac{1}{3 \\times 4} + ... + \\frac{1}{99 \\times 100}$",
      "options": [
        "A. $\\frac{99}{100}$",
        "B. $\\frac{1}{100}$",
        "C. $\\frac{100}{99}$",
        "D. $\\frac{98}{100}$"
      ],
      "answer": "A",
      "explanation": "Tách mỗi số hạng: $\\frac{1}{n(n+1)} = \\frac{1}{n} - \\frac{1}{n+1}$. Ta có: $A = 1 - \\frac{1}{2} + \\frac{1}{2} - \\frac{1}{3} + ... + \\frac{1}{99} - \\frac{1}{100} = 1 - \\frac{1}{100} = \\frac{99}{100}$."
    },
    {
      "id": "ARCH-M-G5-W1-TTK-02",
      "exam": "ARCHIMEDES_MATH",
      "grade": 5,
      "round": "Tuần 1 - Bài tập tham khảo",
      "topic": "Bài toán vòi nước chảy vào bể",
      "text": "Vòi thứ nhất chảy một mình trong 3 giờ thì đầy bể. Vòi thứ hai chảy một mình trong 6 giờ thì đầy bể. Hỏi nếu cả hai vòi cùng chảy vào bể cạn thì sau bao lâu sẽ đầy bể?",
      "options": [
        "A. 2 giờ",
        "B. 2 giờ 30 phút",
        "C. 4 giờ",
        "D. 1 giờ 45 phút"
      ],
      "answer": "A",
      "explanation": "Trong 1 giờ: Vòi 1 chảy được $\\frac{1}{3}$ bể; Vòi 2 chảy được $\\frac{1}{6}$ bể. Cả hai vòi cùng chảy trong 1 giờ được: $\\frac{1}{3} + \\frac{1}{6} = \\frac{3}{6} = \\frac{1}{2}$ bể. Thời gian để đầy bể là: $1 : \\frac{1}{2} = 2$ giờ."
    },
    {
      "id": "ARCH-M-G5-W1-TTK-03",
      "exam": "ARCHIMEDES_MATH",
      "grade": 5,
      "round": "Tuần 1 - Bài tập tham khảo",
      "topic": "Toán chuyển động đều",
      "text": "Một người đi xe máy từ Hà Nội về quê với vận tốc 40 km/giờ hết 2 giờ 30 phút. Quãng đường từ Hà Nội về quê dài bao nhiêu ki-lô-mét?",
      "options": [
        "A. 100 km",
        "B. 90 km",
        "C. 120 km",
        "D. 80 km"
      ],
      "answer": "A",
      "explanation": "Đổi 2 giờ 30 phút = 2,5 giờ. Quãng đường dài: 40 × 2,5 = 100 km."
    },
    {
      "id": "ARCH-M-G5-W1-TTK-04",
      "exam": "ARCHIMEDES_MATH",
      "grade": 5,
      "round": "Tuần 1 - Bài tập tham khảo",
      "topic": "Tỉ số phần trăm",
      "text": "Lớp 5A có 40 học sinh, trong đó có 24 học sinh nữ. Tỉ số phần trăm của số học sinh nữ so với số học sinh cả lớp là:",
      "options": [
        "A. 60%",
        "B. 40%",
        "C. 65%",
        "D. 55%"
      ],
      "answer": "A",
      "explanation": "Tỉ số phần trăm học sinh nữ: (24 : 40) × 100% = 60%."
    },
    {
      "id": "ARCH-M-G5-W1-TTK-05",
      "exam": "ARCHIMEDES_MATH",
      "grade": 5,
      "round": "Tuần 1 - Bài tập tham khảo",
      "topic": "Hình học nâng cao Archimedes",
      "text": "Một hình tròn có chu vi là 31,4cm. Diện tích của hình tròn đó là bao nhiêu xăng-ti-mét vuông?",
      "options": [
        "A. 78,5 cm²",
        "B. 314 cm²",
        "C. 15,7 cm²",
        "D. 62,8 cm²"
      ],
      "answer": "A",
      "explanation": "Bán kính hình tròn: $r = 31,4 : (2 \\times 3,14) = 5$ cm. Diện tích hình tròn: $S = 5 \\times 5 \\times 3,14 = 78,5$ cm²."
    },
    {
      "id": "ARCH-M-G5-W1-T-3",
      "exam": "ARCHIMEDES_MATH",
      "grade": 5,
      "round": "Tuần 1 - Tiết 3",
      "topic": "Khái niệm phân số, phân số thập phân",
      "text": "[Tuần 1 - Tiết 3] Trọng tâm: Khái niệm phân số, phân số thập phân. Tính tỉ số phần trăm của 20 và 80:",
      "options": [
        "A. 25%",
        "B. 20%",
        "C. 30%",
        "D. 50%"
      ],
      "answer": "A",
      "explanation": "Tỉ số phần trăm là: (20 : 80) × 100% = 1/4 × 100% = 25%."
    },
    {
      "id": "ARCH-M-G5-W2-T-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 5,
      "round": "Tuần 2 - Tiết 1",
      "topic": "Ôn tập phép tính phân số, hỗn số",
      "text": "[Tuần 2 - Tiết 1] Trọng tâm: Ôn tập phép tính phân số, hỗn số. Tính tỉ số phần trăm của 25 và 100:",
      "options": [
        "A. 25%",
        "B. 20%",
        "C. 30%",
        "D. 50%"
      ],
      "answer": "A",
      "explanation": "Tỉ số phần trăm là: (25 : 100) × 100% = 1/4 × 100% = 25%."
    },
    {
      "id": "ARCH-M-G5-W2-T-2",
      "exam": "ARCHIMEDES_MATH",
      "grade": 5,
      "round": "Tuần 2 - Tiết 2",
      "topic": "Ôn tập phép tính phân số, hỗn số",
      "text": "[Tuần 2 - Tiết 2] Trọng tâm: Ôn tập phép tính phân số, hỗn số. Tính tỉ số phần trăm của 25 và 100:",
      "options": [
        "A. 25%",
        "B. 20%",
        "C. 30%",
        "D. 50%"
      ],
      "answer": "A",
      "explanation": "Tỉ số phần trăm là: (25 : 100) × 100% = 1/4 × 100% = 25%."
    },
    {
      "id": "ARCH-M-G5-W2-T-3",
      "exam": "ARCHIMEDES_MATH",
      "grade": 5,
      "round": "Tuần 2 - Tiết 3",
      "topic": "Ôn tập phép tính phân số, hỗn số",
      "text": "[Tuần 2 - Tiết 3] Trọng tâm: Ôn tập phép tính phân số, hỗn số. Tính tỉ số phần trăm của 25 và 100:",
      "options": [
        "A. 25%",
        "B. 20%",
        "C. 30%",
        "D. 50%"
      ],
      "answer": "A",
      "explanation": "Tỉ số phần trăm là: (25 : 100) × 100% = 1/4 × 100% = 25%."
    },
    {
      "id": "ARCH-M-G5-W2-PKT-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 5,
      "round": "Tuần 2 - Phiếu cuối tuần",
      "topic": "Ôn tập phép tính phân số, hỗn số",
      "text": "[Phiếu cuối tuần 2] Chủ đề: Ôn tập phép tính phân số, hỗn số. Một ô tô đi quãng đường dài 144km hết 3 giờ. Vận tốc của ô tô là:",
      "options": [
        "A. 48 km/giờ",
        "B. 43 km/giờ",
        "C. 53 km/giờ",
        "D. 96 km/giờ"
      ],
      "answer": "A",
      "explanation": "Vận tốc ô tô là: v = s : t = 144 : 3 = 48 km/giờ."
    },
    {
      "id": "ARCH-M-G5-W2-TTK-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 5,
      "round": "Tuần 2 - Bài tập tham khảo",
      "topic": "Ôn tập phép tính phân số, hỗn số",
      "text": "[Toán tư duy Archimedes Tuần 2] Vòi thứ nhất chảy một mình trong 4 giờ đầy bể, vòi thứ hai chảy một mình trong 6 giờ đầy bể. Hỏi cả hai vòi cùng chảy vào bể cạn thì sau bao lâu đầy bể?",
      "options": [
        "A. 2,4 giờ (2 giờ 24 phút)",
        "B. 3 giờ",
        "C. 2 giờ",
        "D. 5 giờ"
      ],
      "answer": "A",
      "explanation": "Trong 1 giờ cả hai vòi chảy được: 1/4 + 1/6 = 5/12 bể.\nThời gian để đầy bể là: 1 : 5/12 = 12/5 = 2,4 giờ = 2 giờ 24 phút."
    },
    {
      "id": "ARCH-M-G5-W3-T-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 5,
      "round": "Tuần 3 - Tiết 1",
      "topic": "Luyện tập hỗn số, chuyển đổi hỗn số",
      "text": "[Tuần 3 - Tiết 1] Trọng tâm: Luyện tập hỗn số, chuyển đổi hỗn số. Tính tỉ số phần trăm của 30 và 120:",
      "options": [
        "A. 25%",
        "B. 20%",
        "C. 30%",
        "D. 50%"
      ],
      "answer": "A",
      "explanation": "Tỉ số phần trăm là: (30 : 120) × 100% = 1/4 × 100% = 25%."
    },
    {
      "id": "ARCH-M-G5-W3-T-2",
      "exam": "ARCHIMEDES_MATH",
      "grade": 5,
      "round": "Tuần 3 - Tiết 2",
      "topic": "Luyện tập hỗn số, chuyển đổi hỗn số",
      "text": "[Tuần 3 - Tiết 2] Trọng tâm: Luyện tập hỗn số, chuyển đổi hỗn số. Tính tỉ số phần trăm của 30 và 120:",
      "options": [
        "A. 25%",
        "B. 20%",
        "C. 30%",
        "D. 50%"
      ],
      "answer": "A",
      "explanation": "Tỉ số phần trăm là: (30 : 120) × 100% = 1/4 × 100% = 25%."
    },
    {
      "id": "ARCH-M-G5-W3-T-3",
      "exam": "ARCHIMEDES_MATH",
      "grade": 5,
      "round": "Tuần 3 - Tiết 3",
      "topic": "Luyện tập hỗn số, chuyển đổi hỗn số",
      "text": "[Tuần 3 - Tiết 3] Trọng tâm: Luyện tập hỗn số, chuyển đổi hỗn số. Tính tỉ số phần trăm của 30 và 120:",
      "options": [
        "A. 25%",
        "B. 20%",
        "C. 30%",
        "D. 50%"
      ],
      "answer": "A",
      "explanation": "Tỉ số phần trăm là: (30 : 120) × 100% = 1/4 × 100% = 25%."
    },
    {
      "id": "ARCH-M-G5-W3-PKT-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 5,
      "round": "Tuần 3 - Phiếu cuối tuần",
      "topic": "Luyện tập hỗn số, chuyển đổi hỗn số",
      "text": "[Phiếu cuối tuần 3] Chủ đề: Luyện tập hỗn số, chuyển đổi hỗn số. Một ô tô đi quãng đường dài 156km hết 3 giờ. Vận tốc của ô tô là:",
      "options": [
        "A. 52 km/giờ",
        "B. 47 km/giờ",
        "C. 57 km/giờ",
        "D. 104 km/giờ"
      ],
      "answer": "A",
      "explanation": "Vận tốc ô tô là: v = s : t = 156 : 3 = 52 km/giờ."
    },
    {
      "id": "ARCH-M-G5-W3-TTK-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 5,
      "round": "Tuần 3 - Bài tập tham khảo",
      "topic": "Luyện tập hỗn số, chuyển đổi hỗn số",
      "text": "[Toán tư duy Archimedes Tuần 3] Vòi thứ nhất chảy một mình trong 4 giờ đầy bể, vòi thứ hai chảy một mình trong 6 giờ đầy bể. Hỏi cả hai vòi cùng chảy vào bể cạn thì sau bao lâu đầy bể?",
      "options": [
        "A. 2,4 giờ (2 giờ 24 phút)",
        "B. 3 giờ",
        "C. 2 giờ",
        "D. 5 giờ"
      ],
      "answer": "A",
      "explanation": "Trong 1 giờ cả hai vòi chảy được: 1/4 + 1/6 = 5/12 bể.\nThời gian để đầy bể là: 1 : 5/12 = 12/5 = 2,4 giờ = 2 giờ 24 phút."
    },
    {
      "id": "ARCH-M-G5-W4-T-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 5,
      "round": "Tuần 4 - Tiết 1",
      "topic": "Bảng đơn vị đo độ dài, khối lượng",
      "text": "[Tuần 4 - Tiết 1] Trọng tâm: Bảng đơn vị đo độ dài, khối lượng. Tính tỉ số phần trăm của 35 và 140:",
      "options": [
        "A. 25%",
        "B. 20%",
        "C. 30%",
        "D. 50%"
      ],
      "answer": "A",
      "explanation": "Tỉ số phần trăm là: (35 : 140) × 100% = 1/4 × 100% = 25%."
    },
    {
      "id": "ARCH-M-G5-W4-T-2",
      "exam": "ARCHIMEDES_MATH",
      "grade": 5,
      "round": "Tuần 4 - Tiết 2",
      "topic": "Bảng đơn vị đo độ dài, khối lượng",
      "text": "[Tuần 4 - Tiết 2] Trọng tâm: Bảng đơn vị đo độ dài, khối lượng. Tính tỉ số phần trăm của 35 và 140:",
      "options": [
        "A. 25%",
        "B. 20%",
        "C. 30%",
        "D. 50%"
      ],
      "answer": "A",
      "explanation": "Tỉ số phần trăm là: (35 : 140) × 100% = 1/4 × 100% = 25%."
    },
    {
      "id": "ARCH-M-G5-W4-T-3",
      "exam": "ARCHIMEDES_MATH",
      "grade": 5,
      "round": "Tuần 4 - Tiết 3",
      "topic": "Bảng đơn vị đo độ dài, khối lượng",
      "text": "[Tuần 4 - Tiết 3] Trọng tâm: Bảng đơn vị đo độ dài, khối lượng. Tính tỉ số phần trăm của 35 và 140:",
      "options": [
        "A. 25%",
        "B. 20%",
        "C. 30%",
        "D. 50%"
      ],
      "answer": "A",
      "explanation": "Tỉ số phần trăm là: (35 : 140) × 100% = 1/4 × 100% = 25%."
    },
    {
      "id": "ARCH-M-G5-W4-PKT-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 5,
      "round": "Tuần 4 - Phiếu cuối tuần",
      "topic": "Bảng đơn vị đo độ dài, khối lượng",
      "text": "[Phiếu cuối tuần 4] Chủ đề: Bảng đơn vị đo độ dài, khối lượng. Một ô tô đi quãng đường dài 168km hết 3 giờ. Vận tốc của ô tô là:",
      "options": [
        "A. 56 km/giờ",
        "B. 51 km/giờ",
        "C. 61 km/giờ",
        "D. 112 km/giờ"
      ],
      "answer": "A",
      "explanation": "Vận tốc ô tô là: v = s : t = 168 : 3 = 56 km/giờ."
    },
    {
      "id": "ARCH-M-G5-W4-TTK-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 5,
      "round": "Tuần 4 - Bài tập tham khảo",
      "topic": "Bảng đơn vị đo độ dài, khối lượng",
      "text": "[Toán tư duy Archimedes Tuần 4] Vòi thứ nhất chảy một mình trong 4 giờ đầy bể, vòi thứ hai chảy một mình trong 6 giờ đầy bể. Hỏi cả hai vòi cùng chảy vào bể cạn thì sau bao lâu đầy bể?",
      "options": [
        "A. 2,4 giờ (2 giờ 24 phút)",
        "B. 3 giờ",
        "C. 2 giờ",
        "D. 5 giờ"
      ],
      "answer": "A",
      "explanation": "Trong 1 giờ cả hai vòi chảy được: 1/4 + 1/6 = 5/12 bể.\nThời gian để đầy bể là: 1 : 5/12 = 12/5 = 2,4 giờ = 2 giờ 24 phút."
    },
    {
      "id": "ARCH-M-G5-W5-T-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 5,
      "round": "Tuần 5 - Tiết 1",
      "topic": "Bảng đơn vị đo diện tích, héc-ta (ha)",
      "text": "[Tuần 5 - Tiết 1] Trọng tâm: Bảng đơn vị đo diện tích, héc-ta (ha). Tính tỉ số phần trăm của 40 và 160:",
      "options": [
        "A. 25%",
        "B. 20%",
        "C. 30%",
        "D. 50%"
      ],
      "answer": "A",
      "explanation": "Tỉ số phần trăm là: (40 : 160) × 100% = 1/4 × 100% = 25%."
    },
    {
      "id": "ARCH-M-G5-W5-T-2",
      "exam": "ARCHIMEDES_MATH",
      "grade": 5,
      "round": "Tuần 5 - Tiết 2",
      "topic": "Bảng đơn vị đo diện tích, héc-ta (ha)",
      "text": "[Tuần 5 - Tiết 2] Trọng tâm: Bảng đơn vị đo diện tích, héc-ta (ha). Tính tỉ số phần trăm của 40 và 160:",
      "options": [
        "A. 25%",
        "B. 20%",
        "C. 30%",
        "D. 50%"
      ],
      "answer": "A",
      "explanation": "Tỉ số phần trăm là: (40 : 160) × 100% = 1/4 × 100% = 25%."
    },
    {
      "id": "ARCH-M-G5-W5-T-3",
      "exam": "ARCHIMEDES_MATH",
      "grade": 5,
      "round": "Tuần 5 - Tiết 3",
      "topic": "Bảng đơn vị đo diện tích, héc-ta (ha)",
      "text": "[Tuần 5 - Tiết 3] Trọng tâm: Bảng đơn vị đo diện tích, héc-ta (ha). Tính tỉ số phần trăm của 40 và 160:",
      "options": [
        "A. 25%",
        "B. 20%",
        "C. 30%",
        "D. 50%"
      ],
      "answer": "A",
      "explanation": "Tỉ số phần trăm là: (40 : 160) × 100% = 1/4 × 100% = 25%."
    },
    {
      "id": "ARCH-M-G5-W5-PKT-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 5,
      "round": "Tuần 5 - Phiếu cuối tuần",
      "topic": "Bảng đơn vị đo diện tích, héc-ta (ha)",
      "text": "[Phiếu cuối tuần 5] Chủ đề: Bảng đơn vị đo diện tích, héc-ta (ha). Một ô tô đi quãng đường dài 180km hết 3 giờ. Vận tốc của ô tô là:",
      "options": [
        "A. 60 km/giờ",
        "B. 55 km/giờ",
        "C. 65 km/giờ",
        "D. 120 km/giờ"
      ],
      "answer": "A",
      "explanation": "Vận tốc ô tô là: v = s : t = 180 : 3 = 60 km/giờ."
    },
    {
      "id": "ARCH-M-G5-W5-TTK-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 5,
      "round": "Tuần 5 - Bài tập tham khảo",
      "topic": "Bảng đơn vị đo diện tích, héc-ta (ha)",
      "text": "[Toán tư duy Archimedes Tuần 5] Vòi thứ nhất chảy một mình trong 4 giờ đầy bể, vòi thứ hai chảy một mình trong 6 giờ đầy bể. Hỏi cả hai vòi cùng chảy vào bể cạn thì sau bao lâu đầy bể?",
      "options": [
        "A. 2,4 giờ (2 giờ 24 phút)",
        "B. 3 giờ",
        "C. 2 giờ",
        "D. 5 giờ"
      ],
      "answer": "A",
      "explanation": "Trong 1 giờ cả hai vòi chảy được: 1/4 + 1/6 = 5/12 bể.\nThời gian để đầy bể là: 1 : 5/12 = 12/5 = 2,4 giờ = 2 giờ 24 phút."
    },
    {
      "id": "ARCH-M-G5-W6-T-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 5,
      "round": "Tuần 6 - Tiết 1",
      "topic": "Khái niệm số thập phân, hàng số thập phân",
      "text": "[Tuần 6 - Tiết 1] Trọng tâm: Khái niệm số thập phân, hàng số thập phân. Tính tỉ số phần trăm của 45 và 180:",
      "options": [
        "A. 25%",
        "B. 20%",
        "C. 30%",
        "D. 50%"
      ],
      "answer": "A",
      "explanation": "Tỉ số phần trăm là: (45 : 180) × 100% = 1/4 × 100% = 25%."
    },
    {
      "id": "ARCH-M-G5-W6-T-2",
      "exam": "ARCHIMEDES_MATH",
      "grade": 5,
      "round": "Tuần 6 - Tiết 2",
      "topic": "Khái niệm số thập phân, hàng số thập phân",
      "text": "[Tuần 6 - Tiết 2] Trọng tâm: Khái niệm số thập phân, hàng số thập phân. Tính tỉ số phần trăm của 45 và 180:",
      "options": [
        "A. 25%",
        "B. 20%",
        "C. 30%",
        "D. 50%"
      ],
      "answer": "A",
      "explanation": "Tỉ số phần trăm là: (45 : 180) × 100% = 1/4 × 100% = 25%."
    },
    {
      "id": "ARCH-M-G5-W6-T-3",
      "exam": "ARCHIMEDES_MATH",
      "grade": 5,
      "round": "Tuần 6 - Tiết 3",
      "topic": "Khái niệm số thập phân, hàng số thập phân",
      "text": "[Tuần 6 - Tiết 3] Trọng tâm: Khái niệm số thập phân, hàng số thập phân. Tính tỉ số phần trăm của 45 và 180:",
      "options": [
        "A. 25%",
        "B. 20%",
        "C. 30%",
        "D. 50%"
      ],
      "answer": "A",
      "explanation": "Tỉ số phần trăm là: (45 : 180) × 100% = 1/4 × 100% = 25%."
    },
    {
      "id": "ARCH-M-G5-W6-PKT-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 5,
      "round": "Tuần 6 - Phiếu cuối tuần",
      "topic": "Khái niệm số thập phân, hàng số thập phân",
      "text": "[Phiếu cuối tuần 6] Chủ đề: Khái niệm số thập phân, hàng số thập phân. Một ô tô đi quãng đường dài 192km hết 3 giờ. Vận tốc của ô tô là:",
      "options": [
        "A. 64 km/giờ",
        "B. 59 km/giờ",
        "C. 69 km/giờ",
        "D. 128 km/giờ"
      ],
      "answer": "A",
      "explanation": "Vận tốc ô tô là: v = s : t = 192 : 3 = 64 km/giờ."
    },
    {
      "id": "ARCH-M-G5-W6-TTK-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 5,
      "round": "Tuần 6 - Bài tập tham khảo",
      "topic": "Khái niệm số thập phân, hàng số thập phân",
      "text": "[Toán tư duy Archimedes Tuần 6] Vòi thứ nhất chảy một mình trong 4 giờ đầy bể, vòi thứ hai chảy một mình trong 6 giờ đầy bể. Hỏi cả hai vòi cùng chảy vào bể cạn thì sau bao lâu đầy bể?",
      "options": [
        "A. 2,4 giờ (2 giờ 24 phút)",
        "B. 3 giờ",
        "C. 2 giờ",
        "D. 5 giờ"
      ],
      "answer": "A",
      "explanation": "Trong 1 giờ cả hai vòi chảy được: 1/4 + 1/6 = 5/12 bể.\nThời gian để đầy bể là: 1 : 5/12 = 12/5 = 2,4 giờ = 2 giờ 24 phút."
    },
    {
      "id": "ARCH-M-G5-W7-T-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 5,
      "round": "Tuần 7 - Tiết 1",
      "topic": "So sánh hai số thập phân",
      "text": "[Tuần 7 - Tiết 1] Trọng tâm: So sánh hai số thập phân. Tính tỉ số phần trăm của 50 và 200:",
      "options": [
        "A. 25%",
        "B. 20%",
        "C. 30%",
        "D. 50%"
      ],
      "answer": "A",
      "explanation": "Tỉ số phần trăm là: (50 : 200) × 100% = 1/4 × 100% = 25%."
    },
    {
      "id": "ARCH-M-G5-W7-T-2",
      "exam": "ARCHIMEDES_MATH",
      "grade": 5,
      "round": "Tuần 7 - Tiết 2",
      "topic": "So sánh hai số thập phân",
      "text": "[Tuần 7 - Tiết 2] Trọng tâm: So sánh hai số thập phân. Tính tỉ số phần trăm của 50 và 200:",
      "options": [
        "A. 25%",
        "B. 20%",
        "C. 30%",
        "D. 50%"
      ],
      "answer": "A",
      "explanation": "Tỉ số phần trăm là: (50 : 200) × 100% = 1/4 × 100% = 25%."
    },
    {
      "id": "ARCH-M-G5-W7-T-3",
      "exam": "ARCHIMEDES_MATH",
      "grade": 5,
      "round": "Tuần 7 - Tiết 3",
      "topic": "So sánh hai số thập phân",
      "text": "[Tuần 7 - Tiết 3] Trọng tâm: So sánh hai số thập phân. Tính tỉ số phần trăm của 50 và 200:",
      "options": [
        "A. 25%",
        "B. 20%",
        "C. 30%",
        "D. 50%"
      ],
      "answer": "A",
      "explanation": "Tỉ số phần trăm là: (50 : 200) × 100% = 1/4 × 100% = 25%."
    },
    {
      "id": "ARCH-M-G5-W7-PKT-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 5,
      "round": "Tuần 7 - Phiếu cuối tuần",
      "topic": "So sánh hai số thập phân",
      "text": "[Phiếu cuối tuần 7] Chủ đề: So sánh hai số thập phân. Một ô tô đi quãng đường dài 204km hết 3 giờ. Vận tốc của ô tô là:",
      "options": [
        "A. 68 km/giờ",
        "B. 63 km/giờ",
        "C. 73 km/giờ",
        "D. 136 km/giờ"
      ],
      "answer": "A",
      "explanation": "Vận tốc ô tô là: v = s : t = 204 : 3 = 68 km/giờ."
    },
    {
      "id": "ARCH-M-G5-W7-TTK-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 5,
      "round": "Tuần 7 - Bài tập tham khảo",
      "topic": "So sánh hai số thập phân",
      "text": "[Toán tư duy Archimedes Tuần 7] Vòi thứ nhất chảy một mình trong 4 giờ đầy bể, vòi thứ hai chảy một mình trong 6 giờ đầy bể. Hỏi cả hai vòi cùng chảy vào bể cạn thì sau bao lâu đầy bể?",
      "options": [
        "A. 2,4 giờ (2 giờ 24 phút)",
        "B. 3 giờ",
        "C. 2 giờ",
        "D. 5 giờ"
      ],
      "answer": "A",
      "explanation": "Trong 1 giờ cả hai vòi chảy được: 1/4 + 1/6 = 5/12 bể.\nThời gian để đầy bể là: 1 : 5/12 = 12/5 = 2,4 giờ = 2 giờ 24 phút."
    },
    {
      "id": "ARCH-M-G5-W8-T-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 5,
      "round": "Tuần 8 - Tiết 1",
      "topic": "Viết số đo đại lượng dưới dạng số thập phân",
      "text": "[Tuần 8 - Tiết 1] Trọng tâm: Viết số đo đại lượng dưới dạng số thập phân. Tính tỉ số phần trăm của 55 và 220:",
      "options": [
        "A. 25%",
        "B. 20%",
        "C. 30%",
        "D. 50%"
      ],
      "answer": "A",
      "explanation": "Tỉ số phần trăm là: (55 : 220) × 100% = 1/4 × 100% = 25%."
    },
    {
      "id": "ARCH-M-G5-W8-T-2",
      "exam": "ARCHIMEDES_MATH",
      "grade": 5,
      "round": "Tuần 8 - Tiết 2",
      "topic": "Viết số đo đại lượng dưới dạng số thập phân",
      "text": "[Tuần 8 - Tiết 2] Trọng tâm: Viết số đo đại lượng dưới dạng số thập phân. Tính tỉ số phần trăm của 55 và 220:",
      "options": [
        "A. 25%",
        "B. 20%",
        "C. 30%",
        "D. 50%"
      ],
      "answer": "A",
      "explanation": "Tỉ số phần trăm là: (55 : 220) × 100% = 1/4 × 100% = 25%."
    },
    {
      "id": "ARCH-M-G5-W8-T-3",
      "exam": "ARCHIMEDES_MATH",
      "grade": 5,
      "round": "Tuần 8 - Tiết 3",
      "topic": "Viết số đo đại lượng dưới dạng số thập phân",
      "text": "[Tuần 8 - Tiết 3] Trọng tâm: Viết số đo đại lượng dưới dạng số thập phân. Tính tỉ số phần trăm của 55 và 220:",
      "options": [
        "A. 25%",
        "B. 20%",
        "C. 30%",
        "D. 50%"
      ],
      "answer": "A",
      "explanation": "Tỉ số phần trăm là: (55 : 220) × 100% = 1/4 × 100% = 25%."
    },
    {
      "id": "ARCH-M-G5-W8-PKT-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 5,
      "round": "Tuần 8 - Phiếu cuối tuần",
      "topic": "Viết số đo đại lượng dưới dạng số thập phân",
      "text": "[Phiếu cuối tuần 8] Chủ đề: Viết số đo đại lượng dưới dạng số thập phân. Một ô tô đi quãng đường dài 216km hết 3 giờ. Vận tốc của ô tô là:",
      "options": [
        "A. 72 km/giờ",
        "B. 67 km/giờ",
        "C. 77 km/giờ",
        "D. 144 km/giờ"
      ],
      "answer": "A",
      "explanation": "Vận tốc ô tô là: v = s : t = 216 : 3 = 72 km/giờ."
    },
    {
      "id": "ARCH-M-G5-W8-TTK-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 5,
      "round": "Tuần 8 - Bài tập tham khảo",
      "topic": "Viết số đo đại lượng dưới dạng số thập phân",
      "text": "[Toán tư duy Archimedes Tuần 8] Vòi thứ nhất chảy một mình trong 4 giờ đầy bể, vòi thứ hai chảy một mình trong 6 giờ đầy bể. Hỏi cả hai vòi cùng chảy vào bể cạn thì sau bao lâu đầy bể?",
      "options": [
        "A. 2,4 giờ (2 giờ 24 phút)",
        "B. 3 giờ",
        "C. 2 giờ",
        "D. 5 giờ"
      ],
      "answer": "A",
      "explanation": "Trong 1 giờ cả hai vòi chảy được: 1/4 + 1/6 = 5/12 bể.\nThời gian để đầy bể là: 1 : 5/12 = 12/5 = 2,4 giờ = 2 giờ 24 phút."
    },
    {
      "id": "ARCH-M-G5-W9-T-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 5,
      "round": "Tuần 9 - Tiết 1",
      "topic": "Ôn tập giữa học kì 1",
      "text": "[Tuần 9 - Tiết 1] Trọng tâm: Ôn tập giữa học kì 1. Tính tỉ số phần trăm của 60 và 240:",
      "options": [
        "A. 25%",
        "B. 20%",
        "C. 30%",
        "D. 50%"
      ],
      "answer": "A",
      "explanation": "Tỉ số phần trăm là: (60 : 240) × 100% = 1/4 × 100% = 25%."
    },
    {
      "id": "ARCH-M-G5-W9-T-2",
      "exam": "ARCHIMEDES_MATH",
      "grade": 5,
      "round": "Tuần 9 - Tiết 2",
      "topic": "Ôn tập giữa học kì 1",
      "text": "[Tuần 9 - Tiết 2] Trọng tâm: Ôn tập giữa học kì 1. Tính tỉ số phần trăm của 60 và 240:",
      "options": [
        "A. 25%",
        "B. 20%",
        "C. 30%",
        "D. 50%"
      ],
      "answer": "A",
      "explanation": "Tỉ số phần trăm là: (60 : 240) × 100% = 1/4 × 100% = 25%."
    },
    {
      "id": "ARCH-M-G5-W9-T-3",
      "exam": "ARCHIMEDES_MATH",
      "grade": 5,
      "round": "Tuần 9 - Tiết 3",
      "topic": "Ôn tập giữa học kì 1",
      "text": "[Tuần 9 - Tiết 3] Trọng tâm: Ôn tập giữa học kì 1. Tính tỉ số phần trăm của 60 và 240:",
      "options": [
        "A. 25%",
        "B. 20%",
        "C. 30%",
        "D. 50%"
      ],
      "answer": "A",
      "explanation": "Tỉ số phần trăm là: (60 : 240) × 100% = 1/4 × 100% = 25%."
    },
    {
      "id": "ARCH-M-G5-W9-PKT-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 5,
      "round": "Tuần 9 - Phiếu cuối tuần",
      "topic": "Ôn tập giữa học kì 1",
      "text": "[Phiếu cuối tuần 9] Chủ đề: Ôn tập giữa học kì 1. Một ô tô đi quãng đường dài 228km hết 3 giờ. Vận tốc của ô tô là:",
      "options": [
        "A. 76 km/giờ",
        "B. 71 km/giờ",
        "C. 81 km/giờ",
        "D. 152 km/giờ"
      ],
      "answer": "A",
      "explanation": "Vận tốc ô tô là: v = s : t = 228 : 3 = 76 km/giờ."
    },
    {
      "id": "ARCH-M-G5-W9-TTK-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 5,
      "round": "Tuần 9 - Bài tập tham khảo",
      "topic": "Ôn tập giữa học kì 1",
      "text": "[Toán tư duy Archimedes Tuần 9] Vòi thứ nhất chảy một mình trong 4 giờ đầy bể, vòi thứ hai chảy một mình trong 6 giờ đầy bể. Hỏi cả hai vòi cùng chảy vào bể cạn thì sau bao lâu đầy bể?",
      "options": [
        "A. 2,4 giờ (2 giờ 24 phút)",
        "B. 3 giờ",
        "C. 2 giờ",
        "D. 5 giờ"
      ],
      "answer": "A",
      "explanation": "Trong 1 giờ cả hai vòi chảy được: 1/4 + 1/6 = 5/12 bể.\nThời gian để đầy bể là: 1 : 5/12 = 12/5 = 2,4 giờ = 2 giờ 24 phút."
    },
    {
      "id": "ARCH-M-G5-W10-T-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 5,
      "round": "Tuần 10 - Tiết 1",
      "topic": "Phép cộng hai số thập phân",
      "text": "[Tuần 10 - Tiết 1] Trọng tâm: Phép cộng hai số thập phân. Tính tỉ số phần trăm của 65 và 260:",
      "options": [
        "A. 25%",
        "B. 20%",
        "C. 30%",
        "D. 50%"
      ],
      "answer": "A",
      "explanation": "Tỉ số phần trăm là: (65 : 260) × 100% = 1/4 × 100% = 25%."
    },
    {
      "id": "ARCH-M-G5-W10-T-2",
      "exam": "ARCHIMEDES_MATH",
      "grade": 5,
      "round": "Tuần 10 - Tiết 2",
      "topic": "Phép cộng hai số thập phân",
      "text": "[Tuần 10 - Tiết 2] Trọng tâm: Phép cộng hai số thập phân. Tính tỉ số phần trăm của 65 và 260:",
      "options": [
        "A. 25%",
        "B. 20%",
        "C. 30%",
        "D. 50%"
      ],
      "answer": "A",
      "explanation": "Tỉ số phần trăm là: (65 : 260) × 100% = 1/4 × 100% = 25%."
    },
    {
      "id": "ARCH-M-G5-W10-T-3",
      "exam": "ARCHIMEDES_MATH",
      "grade": 5,
      "round": "Tuần 10 - Tiết 3",
      "topic": "Phép cộng hai số thập phân",
      "text": "[Tuần 10 - Tiết 3] Trọng tâm: Phép cộng hai số thập phân. Tính tỉ số phần trăm của 65 và 260:",
      "options": [
        "A. 25%",
        "B. 20%",
        "C. 30%",
        "D. 50%"
      ],
      "answer": "A",
      "explanation": "Tỉ số phần trăm là: (65 : 260) × 100% = 1/4 × 100% = 25%."
    },
    {
      "id": "ARCH-M-G5-W10-PKT-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 5,
      "round": "Tuần 10 - Phiếu cuối tuần",
      "topic": "Phép cộng hai số thập phân",
      "text": "[Phiếu cuối tuần 10] Chủ đề: Phép cộng hai số thập phân. Một ô tô đi quãng đường dài 240km hết 3 giờ. Vận tốc của ô tô là:",
      "options": [
        "A. 80 km/giờ",
        "B. 75 km/giờ",
        "C. 85 km/giờ",
        "D. 160 km/giờ"
      ],
      "answer": "A",
      "explanation": "Vận tốc ô tô là: v = s : t = 240 : 3 = 80 km/giờ."
    },
    {
      "id": "ARCH-M-G5-W10-TTK-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 5,
      "round": "Tuần 10 - Bài tập tham khảo",
      "topic": "Phép cộng hai số thập phân",
      "text": "[Toán tư duy Archimedes Tuần 10] Vòi thứ nhất chảy một mình trong 4 giờ đầy bể, vòi thứ hai chảy một mình trong 6 giờ đầy bể. Hỏi cả hai vòi cùng chảy vào bể cạn thì sau bao lâu đầy bể?",
      "options": [
        "A. 2,4 giờ (2 giờ 24 phút)",
        "B. 3 giờ",
        "C. 2 giờ",
        "D. 5 giờ"
      ],
      "answer": "A",
      "explanation": "Trong 1 giờ cả hai vòi chảy được: 1/4 + 1/6 = 5/12 bể.\nThời gian để đầy bể là: 1 : 5/12 = 12/5 = 2,4 giờ = 2 giờ 24 phút."
    },
    {
      "id": "ARCH-M-G5-W11-T-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 5,
      "round": "Tuần 11 - Tiết 1",
      "topic": "Phép trừ hai số thập phân",
      "text": "[Tuần 11 - Tiết 1] Trọng tâm: Phép trừ hai số thập phân. Tính tỉ số phần trăm của 70 và 280:",
      "options": [
        "A. 25%",
        "B. 20%",
        "C. 30%",
        "D. 50%"
      ],
      "answer": "A",
      "explanation": "Tỉ số phần trăm là: (70 : 280) × 100% = 1/4 × 100% = 25%."
    },
    {
      "id": "ARCH-M-G5-W11-T-2",
      "exam": "ARCHIMEDES_MATH",
      "grade": 5,
      "round": "Tuần 11 - Tiết 2",
      "topic": "Phép trừ hai số thập phân",
      "text": "[Tuần 11 - Tiết 2] Trọng tâm: Phép trừ hai số thập phân. Tính tỉ số phần trăm của 70 và 280:",
      "options": [
        "A. 25%",
        "B. 20%",
        "C. 30%",
        "D. 50%"
      ],
      "answer": "A",
      "explanation": "Tỉ số phần trăm là: (70 : 280) × 100% = 1/4 × 100% = 25%."
    },
    {
      "id": "ARCH-M-G5-W11-T-3",
      "exam": "ARCHIMEDES_MATH",
      "grade": 5,
      "round": "Tuần 11 - Tiết 3",
      "topic": "Phép trừ hai số thập phân",
      "text": "[Tuần 11 - Tiết 3] Trọng tâm: Phép trừ hai số thập phân. Tính tỉ số phần trăm của 70 và 280:",
      "options": [
        "A. 25%",
        "B. 20%",
        "C. 30%",
        "D. 50%"
      ],
      "answer": "A",
      "explanation": "Tỉ số phần trăm là: (70 : 280) × 100% = 1/4 × 100% = 25%."
    },
    {
      "id": "ARCH-M-G5-W11-PKT-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 5,
      "round": "Tuần 11 - Phiếu cuối tuần",
      "topic": "Phép trừ hai số thập phân",
      "text": "[Phiếu cuối tuần 11] Chủ đề: Phép trừ hai số thập phân. Một ô tô đi quãng đường dài 252km hết 3 giờ. Vận tốc của ô tô là:",
      "options": [
        "A. 84 km/giờ",
        "B. 79 km/giờ",
        "C. 89 km/giờ",
        "D. 168 km/giờ"
      ],
      "answer": "A",
      "explanation": "Vận tốc ô tô là: v = s : t = 252 : 3 = 84 km/giờ."
    },
    {
      "id": "ARCH-M-G5-W11-TTK-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 5,
      "round": "Tuần 11 - Bài tập tham khảo",
      "topic": "Phép trừ hai số thập phân",
      "text": "[Toán tư duy Archimedes Tuần 11] Vòi thứ nhất chảy một mình trong 4 giờ đầy bể, vòi thứ hai chảy một mình trong 6 giờ đầy bể. Hỏi cả hai vòi cùng chảy vào bể cạn thì sau bao lâu đầy bể?",
      "options": [
        "A. 2,4 giờ (2 giờ 24 phút)",
        "B. 3 giờ",
        "C. 2 giờ",
        "D. 5 giờ"
      ],
      "answer": "A",
      "explanation": "Trong 1 giờ cả hai vòi chảy được: 1/4 + 1/6 = 5/12 bể.\nThời gian để đầy bể là: 1 : 5/12 = 12/5 = 2,4 giờ = 2 giờ 24 phút."
    },
    {
      "id": "ARCH-M-G5-W12-T-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 5,
      "round": "Tuần 12 - Tiết 1",
      "topic": "Phép nhân số thập phân",
      "text": "[Tuần 12 - Tiết 1] Trọng tâm: Phép nhân số thập phân. Tính tỉ số phần trăm của 75 và 300:",
      "options": [
        "A. 25%",
        "B. 20%",
        "C. 30%",
        "D. 50%"
      ],
      "answer": "A",
      "explanation": "Tỉ số phần trăm là: (75 : 300) × 100% = 1/4 × 100% = 25%."
    },
    {
      "id": "ARCH-M-G5-W12-T-2",
      "exam": "ARCHIMEDES_MATH",
      "grade": 5,
      "round": "Tuần 12 - Tiết 2",
      "topic": "Phép nhân số thập phân",
      "text": "[Tuần 12 - Tiết 2] Trọng tâm: Phép nhân số thập phân. Tính tỉ số phần trăm của 75 và 300:",
      "options": [
        "A. 25%",
        "B. 20%",
        "C. 30%",
        "D. 50%"
      ],
      "answer": "A",
      "explanation": "Tỉ số phần trăm là: (75 : 300) × 100% = 1/4 × 100% = 25%."
    },
    {
      "id": "ARCH-M-G5-W12-T-3",
      "exam": "ARCHIMEDES_MATH",
      "grade": 5,
      "round": "Tuần 12 - Tiết 3",
      "topic": "Phép nhân số thập phân",
      "text": "[Tuần 12 - Tiết 3] Trọng tâm: Phép nhân số thập phân. Tính tỉ số phần trăm của 75 và 300:",
      "options": [
        "A. 25%",
        "B. 20%",
        "C. 30%",
        "D. 50%"
      ],
      "answer": "A",
      "explanation": "Tỉ số phần trăm là: (75 : 300) × 100% = 1/4 × 100% = 25%."
    },
    {
      "id": "ARCH-M-G5-W12-PKT-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 5,
      "round": "Tuần 12 - Phiếu cuối tuần",
      "topic": "Phép nhân số thập phân",
      "text": "[Phiếu cuối tuần 12] Chủ đề: Phép nhân số thập phân. Một ô tô đi quãng đường dài 264km hết 3 giờ. Vận tốc của ô tô là:",
      "options": [
        "A. 88 km/giờ",
        "B. 83 km/giờ",
        "C. 93 km/giờ",
        "D. 176 km/giờ"
      ],
      "answer": "A",
      "explanation": "Vận tốc ô tô là: v = s : t = 264 : 3 = 88 km/giờ."
    },
    {
      "id": "ARCH-M-G5-W12-TTK-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 5,
      "round": "Tuần 12 - Bài tập tham khảo",
      "topic": "Phép nhân số thập phân",
      "text": "[Toán tư duy Archimedes Tuần 12] Vòi thứ nhất chảy một mình trong 4 giờ đầy bể, vòi thứ hai chảy một mình trong 6 giờ đầy bể. Hỏi cả hai vòi cùng chảy vào bể cạn thì sau bao lâu đầy bể?",
      "options": [
        "A. 2,4 giờ (2 giờ 24 phút)",
        "B. 3 giờ",
        "C. 2 giờ",
        "D. 5 giờ"
      ],
      "answer": "A",
      "explanation": "Trong 1 giờ cả hai vòi chảy được: 1/4 + 1/6 = 5/12 bể.\nThời gian để đầy bể là: 1 : 5/12 = 12/5 = 2,4 giờ = 2 giờ 24 phút."
    },
    {
      "id": "ARCH-M-G5-W13-T-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 5,
      "round": "Tuần 13 - Tiết 1",
      "topic": "Nhân nhẩm số thập phân với 10, 100, 1000, 0.1...",
      "text": "[Tuần 13 - Tiết 1] Trọng tâm: Nhân nhẩm số thập phân với 10, 100, 1000, 0.1.... Tính tỉ số phần trăm của 80 và 320:",
      "options": [
        "A. 25%",
        "B. 20%",
        "C. 30%",
        "D. 50%"
      ],
      "answer": "A",
      "explanation": "Tỉ số phần trăm là: (80 : 320) × 100% = 1/4 × 100% = 25%."
    },
    {
      "id": "ARCH-M-G5-W13-T-2",
      "exam": "ARCHIMEDES_MATH",
      "grade": 5,
      "round": "Tuần 13 - Tiết 2",
      "topic": "Nhân nhẩm số thập phân với 10, 100, 1000, 0.1...",
      "text": "[Tuần 13 - Tiết 2] Trọng tâm: Nhân nhẩm số thập phân với 10, 100, 1000, 0.1.... Tính tỉ số phần trăm của 80 và 320:",
      "options": [
        "A. 25%",
        "B. 20%",
        "C. 30%",
        "D. 50%"
      ],
      "answer": "A",
      "explanation": "Tỉ số phần trăm là: (80 : 320) × 100% = 1/4 × 100% = 25%."
    },
    {
      "id": "ARCH-M-G5-W13-T-3",
      "exam": "ARCHIMEDES_MATH",
      "grade": 5,
      "round": "Tuần 13 - Tiết 3",
      "topic": "Nhân nhẩm số thập phân với 10, 100, 1000, 0.1...",
      "text": "[Tuần 13 - Tiết 3] Trọng tâm: Nhân nhẩm số thập phân với 10, 100, 1000, 0.1.... Tính tỉ số phần trăm của 80 và 320:",
      "options": [
        "A. 25%",
        "B. 20%",
        "C. 30%",
        "D. 50%"
      ],
      "answer": "A",
      "explanation": "Tỉ số phần trăm là: (80 : 320) × 100% = 1/4 × 100% = 25%."
    },
    {
      "id": "ARCH-M-G5-W13-PKT-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 5,
      "round": "Tuần 13 - Phiếu cuối tuần",
      "topic": "Nhân nhẩm số thập phân với 10, 100, 1000, 0.1...",
      "text": "[Phiếu cuối tuần 13] Chủ đề: Nhân nhẩm số thập phân với 10, 100, 1000, 0.1.... Một ô tô đi quãng đường dài 276km hết 3 giờ. Vận tốc của ô tô là:",
      "options": [
        "A. 92 km/giờ",
        "B. 87 km/giờ",
        "C. 97 km/giờ",
        "D. 184 km/giờ"
      ],
      "answer": "A",
      "explanation": "Vận tốc ô tô là: v = s : t = 276 : 3 = 92 km/giờ."
    },
    {
      "id": "ARCH-M-G5-W13-TTK-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 5,
      "round": "Tuần 13 - Bài tập tham khảo",
      "topic": "Nhân nhẩm số thập phân với 10, 100, 1000, 0.1...",
      "text": "[Toán tư duy Archimedes Tuần 13] Vòi thứ nhất chảy một mình trong 4 giờ đầy bể, vòi thứ hai chảy một mình trong 6 giờ đầy bể. Hỏi cả hai vòi cùng chảy vào bể cạn thì sau bao lâu đầy bể?",
      "options": [
        "A. 2,4 giờ (2 giờ 24 phút)",
        "B. 3 giờ",
        "C. 2 giờ",
        "D. 5 giờ"
      ],
      "answer": "A",
      "explanation": "Trong 1 giờ cả hai vòi chảy được: 1/4 + 1/6 = 5/12 bể.\nThời gian để đầy bể là: 1 : 5/12 = 12/5 = 2,4 giờ = 2 giờ 24 phút."
    },
    {
      "id": "ARCH-M-G5-W14-T-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 5,
      "round": "Tuần 14 - Tiết 1",
      "topic": "Chia một số thập phân cho một số tự nhiên",
      "text": "[Tuần 14 - Tiết 1] Trọng tâm: Chia một số thập phân cho một số tự nhiên. Tính tỉ số phần trăm của 85 và 340:",
      "options": [
        "A. 25%",
        "B. 20%",
        "C. 30%",
        "D. 50%"
      ],
      "answer": "A",
      "explanation": "Tỉ số phần trăm là: (85 : 340) × 100% = 1/4 × 100% = 25%."
    },
    {
      "id": "ARCH-M-G5-W14-T-2",
      "exam": "ARCHIMEDES_MATH",
      "grade": 5,
      "round": "Tuần 14 - Tiết 2",
      "topic": "Chia một số thập phân cho một số tự nhiên",
      "text": "[Tuần 14 - Tiết 2] Trọng tâm: Chia một số thập phân cho một số tự nhiên. Tính tỉ số phần trăm của 85 và 340:",
      "options": [
        "A. 25%",
        "B. 20%",
        "C. 30%",
        "D. 50%"
      ],
      "answer": "A",
      "explanation": "Tỉ số phần trăm là: (85 : 340) × 100% = 1/4 × 100% = 25%."
    },
    {
      "id": "ARCH-M-G5-W14-T-3",
      "exam": "ARCHIMEDES_MATH",
      "grade": 5,
      "round": "Tuần 14 - Tiết 3",
      "topic": "Chia một số thập phân cho một số tự nhiên",
      "text": "[Tuần 14 - Tiết 3] Trọng tâm: Chia một số thập phân cho một số tự nhiên. Tính tỉ số phần trăm của 85 và 340:",
      "options": [
        "A. 25%",
        "B. 20%",
        "C. 30%",
        "D. 50%"
      ],
      "answer": "A",
      "explanation": "Tỉ số phần trăm là: (85 : 340) × 100% = 1/4 × 100% = 25%."
    },
    {
      "id": "ARCH-M-G5-W14-PKT-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 5,
      "round": "Tuần 14 - Phiếu cuối tuần",
      "topic": "Chia một số thập phân cho một số tự nhiên",
      "text": "[Phiếu cuối tuần 14] Chủ đề: Chia một số thập phân cho một số tự nhiên. Một ô tô đi quãng đường dài 288km hết 3 giờ. Vận tốc của ô tô là:",
      "options": [
        "A. 96 km/giờ",
        "B. 91 km/giờ",
        "C. 101 km/giờ",
        "D. 192 km/giờ"
      ],
      "answer": "A",
      "explanation": "Vận tốc ô tô là: v = s : t = 288 : 3 = 96 km/giờ."
    },
    {
      "id": "ARCH-M-G5-W14-TTK-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 5,
      "round": "Tuần 14 - Bài tập tham khảo",
      "topic": "Chia một số thập phân cho một số tự nhiên",
      "text": "[Toán tư duy Archimedes Tuần 14] Vòi thứ nhất chảy một mình trong 4 giờ đầy bể, vòi thứ hai chảy một mình trong 6 giờ đầy bể. Hỏi cả hai vòi cùng chảy vào bể cạn thì sau bao lâu đầy bể?",
      "options": [
        "A. 2,4 giờ (2 giờ 24 phút)",
        "B. 3 giờ",
        "C. 2 giờ",
        "D. 5 giờ"
      ],
      "answer": "A",
      "explanation": "Trong 1 giờ cả hai vòi chảy được: 1/4 + 1/6 = 5/12 bể.\nThời gian để đầy bể là: 1 : 5/12 = 12/5 = 2,4 giờ = 2 giờ 24 phút."
    },
    {
      "id": "ARCH-M-G5-W15-T-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 5,
      "round": "Tuần 15 - Tiết 1",
      "topic": "Chia hai số tự nhiên mà thương là số thập phân",
      "text": "[Tuần 15 - Tiết 1] Trọng tâm: Chia hai số tự nhiên mà thương là số thập phân. Tính tỉ số phần trăm của 90 và 360:",
      "options": [
        "A. 25%",
        "B. 20%",
        "C. 30%",
        "D. 50%"
      ],
      "answer": "A",
      "explanation": "Tỉ số phần trăm là: (90 : 360) × 100% = 1/4 × 100% = 25%."
    },
    {
      "id": "ARCH-M-G5-W15-T-2",
      "exam": "ARCHIMEDES_MATH",
      "grade": 5,
      "round": "Tuần 15 - Tiết 2",
      "topic": "Chia hai số tự nhiên mà thương là số thập phân",
      "text": "[Tuần 15 - Tiết 2] Trọng tâm: Chia hai số tự nhiên mà thương là số thập phân. Tính tỉ số phần trăm của 90 và 360:",
      "options": [
        "A. 25%",
        "B. 20%",
        "C. 30%",
        "D. 50%"
      ],
      "answer": "A",
      "explanation": "Tỉ số phần trăm là: (90 : 360) × 100% = 1/4 × 100% = 25%."
    },
    {
      "id": "ARCH-M-G5-W15-T-3",
      "exam": "ARCHIMEDES_MATH",
      "grade": 5,
      "round": "Tuần 15 - Tiết 3",
      "topic": "Chia hai số tự nhiên mà thương là số thập phân",
      "text": "[Tuần 15 - Tiết 3] Trọng tâm: Chia hai số tự nhiên mà thương là số thập phân. Tính tỉ số phần trăm của 90 và 360:",
      "options": [
        "A. 25%",
        "B. 20%",
        "C. 30%",
        "D. 50%"
      ],
      "answer": "A",
      "explanation": "Tỉ số phần trăm là: (90 : 360) × 100% = 1/4 × 100% = 25%."
    },
    {
      "id": "ARCH-M-G5-W15-PKT-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 5,
      "round": "Tuần 15 - Phiếu cuối tuần",
      "topic": "Chia hai số tự nhiên mà thương là số thập phân",
      "text": "[Phiếu cuối tuần 15] Chủ đề: Chia hai số tự nhiên mà thương là số thập phân. Một ô tô đi quãng đường dài 300km hết 3 giờ. Vận tốc của ô tô là:",
      "options": [
        "A. 100 km/giờ",
        "B. 95 km/giờ",
        "C. 105 km/giờ",
        "D. 200 km/giờ"
      ],
      "answer": "A",
      "explanation": "Vận tốc ô tô là: v = s : t = 300 : 3 = 100 km/giờ."
    },
    {
      "id": "ARCH-M-G5-W15-TTK-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 5,
      "round": "Tuần 15 - Bài tập tham khảo",
      "topic": "Chia hai số tự nhiên mà thương là số thập phân",
      "text": "[Toán tư duy Archimedes Tuần 15] Vòi thứ nhất chảy một mình trong 4 giờ đầy bể, vòi thứ hai chảy một mình trong 6 giờ đầy bể. Hỏi cả hai vòi cùng chảy vào bể cạn thì sau bao lâu đầy bể?",
      "options": [
        "A. 2,4 giờ (2 giờ 24 phút)",
        "B. 3 giờ",
        "C. 2 giờ",
        "D. 5 giờ"
      ],
      "answer": "A",
      "explanation": "Trong 1 giờ cả hai vòi chảy được: 1/4 + 1/6 = 5/12 bể.\nThời gian để đầy bể là: 1 : 5/12 = 12/5 = 2,4 giờ = 2 giờ 24 phút."
    },
    {
      "id": "ARCH-M-G5-W16-T-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 5,
      "round": "Tuần 16 - Tiết 1",
      "topic": "Chia một số cho một số thập phân",
      "text": "[Tuần 16 - Tiết 1] Trọng tâm: Chia một số cho một số thập phân. Tính tỉ số phần trăm của 95 và 380:",
      "options": [
        "A. 25%",
        "B. 20%",
        "C. 30%",
        "D. 50%"
      ],
      "answer": "A",
      "explanation": "Tỉ số phần trăm là: (95 : 380) × 100% = 1/4 × 100% = 25%."
    },
    {
      "id": "ARCH-M-G5-W16-T-2",
      "exam": "ARCHIMEDES_MATH",
      "grade": 5,
      "round": "Tuần 16 - Tiết 2",
      "topic": "Chia một số cho một số thập phân",
      "text": "[Tuần 16 - Tiết 2] Trọng tâm: Chia một số cho một số thập phân. Tính tỉ số phần trăm của 95 và 380:",
      "options": [
        "A. 25%",
        "B. 20%",
        "C. 30%",
        "D. 50%"
      ],
      "answer": "A",
      "explanation": "Tỉ số phần trăm là: (95 : 380) × 100% = 1/4 × 100% = 25%."
    },
    {
      "id": "ARCH-M-G5-W16-T-3",
      "exam": "ARCHIMEDES_MATH",
      "grade": 5,
      "round": "Tuần 16 - Tiết 3",
      "topic": "Chia một số cho một số thập phân",
      "text": "[Tuần 16 - Tiết 3] Trọng tâm: Chia một số cho một số thập phân. Tính tỉ số phần trăm của 95 và 380:",
      "options": [
        "A. 25%",
        "B. 20%",
        "C. 30%",
        "D. 50%"
      ],
      "answer": "A",
      "explanation": "Tỉ số phần trăm là: (95 : 380) × 100% = 1/4 × 100% = 25%."
    },
    {
      "id": "ARCH-M-G5-W16-PKT-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 5,
      "round": "Tuần 16 - Phiếu cuối tuần",
      "topic": "Chia một số cho một số thập phân",
      "text": "[Phiếu cuối tuần 16] Chủ đề: Chia một số cho một số thập phân. Một ô tô đi quãng đường dài 312km hết 3 giờ. Vận tốc của ô tô là:",
      "options": [
        "A. 104 km/giờ",
        "B. 99 km/giờ",
        "C. 109 km/giờ",
        "D. 208 km/giờ"
      ],
      "answer": "A",
      "explanation": "Vận tốc ô tô là: v = s : t = 312 : 3 = 104 km/giờ."
    },
    {
      "id": "ARCH-M-G5-W16-TTK-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 5,
      "round": "Tuần 16 - Bài tập tham khảo",
      "topic": "Chia một số cho một số thập phân",
      "text": "[Toán tư duy Archimedes Tuần 16] Vòi thứ nhất chảy một mình trong 4 giờ đầy bể, vòi thứ hai chảy một mình trong 6 giờ đầy bể. Hỏi cả hai vòi cùng chảy vào bể cạn thì sau bao lâu đầy bể?",
      "options": [
        "A. 2,4 giờ (2 giờ 24 phút)",
        "B. 3 giờ",
        "C. 2 giờ",
        "D. 5 giờ"
      ],
      "answer": "A",
      "explanation": "Trong 1 giờ cả hai vòi chảy được: 1/4 + 1/6 = 5/12 bể.\nThời gian để đầy bể là: 1 : 5/12 = 12/5 = 2,4 giờ = 2 giờ 24 phút."
    },
    {
      "id": "ARCH-M-G5-W17-T-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 5,
      "round": "Tuần 17 - Tiết 1",
      "topic": "Giải toán tỉ số phần trăm (dạng 1: tỉ số % 2 số)",
      "text": "[Tuần 17 - Tiết 1] Trọng tâm: Giải toán tỉ số phần trăm (dạng 1: tỉ số % 2 số). Tính tỉ số phần trăm của 100 và 400:",
      "options": [
        "A. 25%",
        "B. 20%",
        "C. 30%",
        "D. 50%"
      ],
      "answer": "A",
      "explanation": "Tỉ số phần trăm là: (100 : 400) × 100% = 1/4 × 100% = 25%."
    },
    {
      "id": "ARCH-M-G5-W17-T-2",
      "exam": "ARCHIMEDES_MATH",
      "grade": 5,
      "round": "Tuần 17 - Tiết 2",
      "topic": "Giải toán tỉ số phần trăm (dạng 1: tỉ số % 2 số)",
      "text": "[Tuần 17 - Tiết 2] Trọng tâm: Giải toán tỉ số phần trăm (dạng 1: tỉ số % 2 số). Tính tỉ số phần trăm của 100 và 400:",
      "options": [
        "A. 25%",
        "B. 20%",
        "C. 30%",
        "D. 50%"
      ],
      "answer": "A",
      "explanation": "Tỉ số phần trăm là: (100 : 400) × 100% = 1/4 × 100% = 25%."
    },
    {
      "id": "ARCH-M-G5-W17-T-3",
      "exam": "ARCHIMEDES_MATH",
      "grade": 5,
      "round": "Tuần 17 - Tiết 3",
      "topic": "Giải toán tỉ số phần trăm (dạng 1: tỉ số % 2 số)",
      "text": "[Tuần 17 - Tiết 3] Trọng tâm: Giải toán tỉ số phần trăm (dạng 1: tỉ số % 2 số). Tính tỉ số phần trăm của 100 và 400:",
      "options": [
        "A. 25%",
        "B. 20%",
        "C. 30%",
        "D. 50%"
      ],
      "answer": "A",
      "explanation": "Tỉ số phần trăm là: (100 : 400) × 100% = 1/4 × 100% = 25%."
    },
    {
      "id": "ARCH-M-G5-W17-PKT-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 5,
      "round": "Tuần 17 - Phiếu cuối tuần",
      "topic": "Giải toán tỉ số phần trăm (dạng 1: tỉ số % 2 số)",
      "text": "[Phiếu cuối tuần 17] Chủ đề: Giải toán tỉ số phần trăm (dạng 1: tỉ số % 2 số). Một ô tô đi quãng đường dài 324km hết 3 giờ. Vận tốc của ô tô là:",
      "options": [
        "A. 108 km/giờ",
        "B. 103 km/giờ",
        "C. 113 km/giờ",
        "D. 216 km/giờ"
      ],
      "answer": "A",
      "explanation": "Vận tốc ô tô là: v = s : t = 324 : 3 = 108 km/giờ."
    },
    {
      "id": "ARCH-M-G5-W17-TTK-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 5,
      "round": "Tuần 17 - Bài tập tham khảo",
      "topic": "Giải toán tỉ số phần trăm (dạng 1: tỉ số % 2 số)",
      "text": "[Toán tư duy Archimedes Tuần 17] Vòi thứ nhất chảy một mình trong 4 giờ đầy bể, vòi thứ hai chảy một mình trong 6 giờ đầy bể. Hỏi cả hai vòi cùng chảy vào bể cạn thì sau bao lâu đầy bể?",
      "options": [
        "A. 2,4 giờ (2 giờ 24 phút)",
        "B. 3 giờ",
        "C. 2 giờ",
        "D. 5 giờ"
      ],
      "answer": "A",
      "explanation": "Trong 1 giờ cả hai vòi chảy được: 1/4 + 1/6 = 5/12 bể.\nThời gian để đầy bể là: 1 : 5/12 = 12/5 = 2,4 giờ = 2 giờ 24 phút."
    },
    {
      "id": "ARCH-M-G5-W18-T-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 5,
      "round": "Tuần 18 - Tiết 1",
      "topic": "Ôn tập cuối học kì 1",
      "text": "[Tuần 18 - Tiết 1] Trọng tâm: Ôn tập cuối học kì 1. Tính tỉ số phần trăm của 105 và 420:",
      "options": [
        "A. 25%",
        "B. 20%",
        "C. 30%",
        "D. 50%"
      ],
      "answer": "A",
      "explanation": "Tỉ số phần trăm là: (105 : 420) × 100% = 1/4 × 100% = 25%."
    },
    {
      "id": "ARCH-M-G5-W18-T-2",
      "exam": "ARCHIMEDES_MATH",
      "grade": 5,
      "round": "Tuần 18 - Tiết 2",
      "topic": "Ôn tập cuối học kì 1",
      "text": "[Tuần 18 - Tiết 2] Trọng tâm: Ôn tập cuối học kì 1. Tính tỉ số phần trăm của 105 và 420:",
      "options": [
        "A. 25%",
        "B. 20%",
        "C. 30%",
        "D. 50%"
      ],
      "answer": "A",
      "explanation": "Tỉ số phần trăm là: (105 : 420) × 100% = 1/4 × 100% = 25%."
    },
    {
      "id": "ARCH-M-G5-W18-T-3",
      "exam": "ARCHIMEDES_MATH",
      "grade": 5,
      "round": "Tuần 18 - Tiết 3",
      "topic": "Ôn tập cuối học kì 1",
      "text": "[Tuần 18 - Tiết 3] Trọng tâm: Ôn tập cuối học kì 1. Tính tỉ số phần trăm của 105 và 420:",
      "options": [
        "A. 25%",
        "B. 20%",
        "C. 30%",
        "D. 50%"
      ],
      "answer": "A",
      "explanation": "Tỉ số phần trăm là: (105 : 420) × 100% = 1/4 × 100% = 25%."
    },
    {
      "id": "ARCH-M-G5-W18-PKT-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 5,
      "round": "Tuần 18 - Phiếu cuối tuần",
      "topic": "Ôn tập cuối học kì 1",
      "text": "[Phiếu cuối tuần 18] Chủ đề: Ôn tập cuối học kì 1. Một ô tô đi quãng đường dài 336km hết 3 giờ. Vận tốc của ô tô là:",
      "options": [
        "A. 112 km/giờ",
        "B. 107 km/giờ",
        "C. 117 km/giờ",
        "D. 224 km/giờ"
      ],
      "answer": "A",
      "explanation": "Vận tốc ô tô là: v = s : t = 336 : 3 = 112 km/giờ."
    },
    {
      "id": "ARCH-M-G5-W18-TTK-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 5,
      "round": "Tuần 18 - Bài tập tham khảo",
      "topic": "Ôn tập cuối học kì 1",
      "text": "[Toán tư duy Archimedes Tuần 18] Vòi thứ nhất chảy một mình trong 4 giờ đầy bể, vòi thứ hai chảy một mình trong 6 giờ đầy bể. Hỏi cả hai vòi cùng chảy vào bể cạn thì sau bao lâu đầy bể?",
      "options": [
        "A. 2,4 giờ (2 giờ 24 phút)",
        "B. 3 giờ",
        "C. 2 giờ",
        "D. 5 giờ"
      ],
      "answer": "A",
      "explanation": "Trong 1 giờ cả hai vòi chảy được: 1/4 + 1/6 = 5/12 bể.\nThời gian để đầy bể là: 1 : 5/12 = 12/5 = 2,4 giờ = 2 giờ 24 phút."
    },
    {
      "id": "ARCH-M-G5-W19-T-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 5,
      "round": "Tuần 19 - Tiết 1",
      "topic": "Tỉ số phần trăm (dạng 2 và 3)",
      "text": "[Tuần 19 - Tiết 1] Trọng tâm: Tỉ số phần trăm (dạng 2 và 3). Tính tỉ số phần trăm của 110 và 440:",
      "options": [
        "A. 25%",
        "B. 20%",
        "C. 30%",
        "D. 50%"
      ],
      "answer": "A",
      "explanation": "Tỉ số phần trăm là: (110 : 440) × 100% = 1/4 × 100% = 25%."
    },
    {
      "id": "ARCH-M-G5-W19-T-2",
      "exam": "ARCHIMEDES_MATH",
      "grade": 5,
      "round": "Tuần 19 - Tiết 2",
      "topic": "Tỉ số phần trăm (dạng 2 và 3)",
      "text": "[Tuần 19 - Tiết 2] Trọng tâm: Tỉ số phần trăm (dạng 2 và 3). Tính tỉ số phần trăm của 110 và 440:",
      "options": [
        "A. 25%",
        "B. 20%",
        "C. 30%",
        "D. 50%"
      ],
      "answer": "A",
      "explanation": "Tỉ số phần trăm là: (110 : 440) × 100% = 1/4 × 100% = 25%."
    },
    {
      "id": "ARCH-M-G5-W19-T-3",
      "exam": "ARCHIMEDES_MATH",
      "grade": 5,
      "round": "Tuần 19 - Tiết 3",
      "topic": "Tỉ số phần trăm (dạng 2 và 3)",
      "text": "[Tuần 19 - Tiết 3] Trọng tâm: Tỉ số phần trăm (dạng 2 và 3). Tính tỉ số phần trăm của 110 và 440:",
      "options": [
        "A. 25%",
        "B. 20%",
        "C. 30%",
        "D. 50%"
      ],
      "answer": "A",
      "explanation": "Tỉ số phần trăm là: (110 : 440) × 100% = 1/4 × 100% = 25%."
    },
    {
      "id": "ARCH-M-G5-W19-PKT-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 5,
      "round": "Tuần 19 - Phiếu cuối tuần",
      "topic": "Tỉ số phần trăm (dạng 2 và 3)",
      "text": "[Phiếu cuối tuần 19] Chủ đề: Tỉ số phần trăm (dạng 2 và 3). Một ô tô đi quãng đường dài 348km hết 3 giờ. Vận tốc của ô tô là:",
      "options": [
        "A. 116 km/giờ",
        "B. 111 km/giờ",
        "C. 121 km/giờ",
        "D. 232 km/giờ"
      ],
      "answer": "A",
      "explanation": "Vận tốc ô tô là: v = s : t = 348 : 3 = 116 km/giờ."
    },
    {
      "id": "ARCH-M-G5-W19-TTK-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 5,
      "round": "Tuần 19 - Bài tập tham khảo",
      "topic": "Tỉ số phần trăm (dạng 2 và 3)",
      "text": "[Toán tư duy Archimedes Tuần 19] Vòi thứ nhất chảy một mình trong 4 giờ đầy bể, vòi thứ hai chảy một mình trong 6 giờ đầy bể. Hỏi cả hai vòi cùng chảy vào bể cạn thì sau bao lâu đầy bể?",
      "options": [
        "A. 2,4 giờ (2 giờ 24 phút)",
        "B. 3 giờ",
        "C. 2 giờ",
        "D. 5 giờ"
      ],
      "answer": "A",
      "explanation": "Trong 1 giờ cả hai vòi chảy được: 1/4 + 1/6 = 5/12 bể.\nThời gian để đầy bể là: 1 : 5/12 = 12/5 = 2,4 giờ = 2 giờ 24 phút."
    },
    {
      "id": "ARCH-M-G5-W20-T-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 5,
      "round": "Tuần 20 - Tiết 1",
      "topic": "Hình tam giác, diện tích hình tam giác",
      "text": "[Tuần 20 - Tiết 1] Trọng tâm: Hình tam giác, diện tích hình tam giác. Tính tỉ số phần trăm của 115 và 460:",
      "options": [
        "A. 25%",
        "B. 20%",
        "C. 30%",
        "D. 50%"
      ],
      "answer": "A",
      "explanation": "Tỉ số phần trăm là: (115 : 460) × 100% = 1/4 × 100% = 25%."
    },
    {
      "id": "ARCH-M-G5-W20-T-2",
      "exam": "ARCHIMEDES_MATH",
      "grade": 5,
      "round": "Tuần 20 - Tiết 2",
      "topic": "Hình tam giác, diện tích hình tam giác",
      "text": "[Tuần 20 - Tiết 2] Trọng tâm: Hình tam giác, diện tích hình tam giác. Tính tỉ số phần trăm của 115 và 460:",
      "options": [
        "A. 25%",
        "B. 20%",
        "C. 30%",
        "D. 50%"
      ],
      "answer": "A",
      "explanation": "Tỉ số phần trăm là: (115 : 460) × 100% = 1/4 × 100% = 25%."
    },
    {
      "id": "ARCH-M-G5-W20-T-3",
      "exam": "ARCHIMEDES_MATH",
      "grade": 5,
      "round": "Tuần 20 - Tiết 3",
      "topic": "Hình tam giác, diện tích hình tam giác",
      "text": "[Tuần 20 - Tiết 3] Trọng tâm: Hình tam giác, diện tích hình tam giác. Tính tỉ số phần trăm của 115 và 460:",
      "options": [
        "A. 25%",
        "B. 20%",
        "C. 30%",
        "D. 50%"
      ],
      "answer": "A",
      "explanation": "Tỉ số phần trăm là: (115 : 460) × 100% = 1/4 × 100% = 25%."
    },
    {
      "id": "ARCH-M-G5-W20-PKT-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 5,
      "round": "Tuần 20 - Phiếu cuối tuần",
      "topic": "Hình tam giác, diện tích hình tam giác",
      "text": "[Phiếu cuối tuần 20] Chủ đề: Hình tam giác, diện tích hình tam giác. Một ô tô đi quãng đường dài 360km hết 3 giờ. Vận tốc của ô tô là:",
      "options": [
        "A. 120 km/giờ",
        "B. 115 km/giờ",
        "C. 125 km/giờ",
        "D. 240 km/giờ"
      ],
      "answer": "A",
      "explanation": "Vận tốc ô tô là: v = s : t = 360 : 3 = 120 km/giờ."
    },
    {
      "id": "ARCH-M-G5-W20-TTK-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 5,
      "round": "Tuần 20 - Bài tập tham khảo",
      "topic": "Hình tam giác, diện tích hình tam giác",
      "text": "[Toán tư duy Archimedes Tuần 20] Vòi thứ nhất chảy một mình trong 4 giờ đầy bể, vòi thứ hai chảy một mình trong 6 giờ đầy bể. Hỏi cả hai vòi cùng chảy vào bể cạn thì sau bao lâu đầy bể?",
      "options": [
        "A. 2,4 giờ (2 giờ 24 phút)",
        "B. 3 giờ",
        "C. 2 giờ",
        "D. 5 giờ"
      ],
      "answer": "A",
      "explanation": "Trong 1 giờ cả hai vòi chảy được: 1/4 + 1/6 = 5/12 bể.\nThời gian để đầy bể là: 1 : 5/12 = 12/5 = 2,4 giờ = 2 giờ 24 phút."
    },
    {
      "id": "ARCH-M-G5-W21-T-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 5,
      "round": "Tuần 21 - Tiết 1",
      "topic": "Hình thang, diện tích hình thang",
      "text": "[Tuần 21 - Tiết 1] Trọng tâm: Hình thang, diện tích hình thang. Tính tỉ số phần trăm của 120 và 480:",
      "options": [
        "A. 25%",
        "B. 20%",
        "C. 30%",
        "D. 50%"
      ],
      "answer": "A",
      "explanation": "Tỉ số phần trăm là: (120 : 480) × 100% = 1/4 × 100% = 25%."
    },
    {
      "id": "ARCH-M-G5-W21-T-2",
      "exam": "ARCHIMEDES_MATH",
      "grade": 5,
      "round": "Tuần 21 - Tiết 2",
      "topic": "Hình thang, diện tích hình thang",
      "text": "[Tuần 21 - Tiết 2] Trọng tâm: Hình thang, diện tích hình thang. Tính tỉ số phần trăm của 120 và 480:",
      "options": [
        "A. 25%",
        "B. 20%",
        "C. 30%",
        "D. 50%"
      ],
      "answer": "A",
      "explanation": "Tỉ số phần trăm là: (120 : 480) × 100% = 1/4 × 100% = 25%."
    },
    {
      "id": "ARCH-M-G5-W21-T-3",
      "exam": "ARCHIMEDES_MATH",
      "grade": 5,
      "round": "Tuần 21 - Tiết 3",
      "topic": "Hình thang, diện tích hình thang",
      "text": "[Tuần 21 - Tiết 3] Trọng tâm: Hình thang, diện tích hình thang. Tính tỉ số phần trăm của 120 và 480:",
      "options": [
        "A. 25%",
        "B. 20%",
        "C. 30%",
        "D. 50%"
      ],
      "answer": "A",
      "explanation": "Tỉ số phần trăm là: (120 : 480) × 100% = 1/4 × 100% = 25%."
    },
    {
      "id": "ARCH-M-G5-W21-PKT-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 5,
      "round": "Tuần 21 - Phiếu cuối tuần",
      "topic": "Hình thang, diện tích hình thang",
      "text": "[Phiếu cuối tuần 21] Chủ đề: Hình thang, diện tích hình thang. Một ô tô đi quãng đường dài 372km hết 3 giờ. Vận tốc của ô tô là:",
      "options": [
        "A. 124 km/giờ",
        "B. 119 km/giờ",
        "C. 129 km/giờ",
        "D. 248 km/giờ"
      ],
      "answer": "A",
      "explanation": "Vận tốc ô tô là: v = s : t = 372 : 3 = 124 km/giờ."
    },
    {
      "id": "ARCH-M-G5-W21-TTK-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 5,
      "round": "Tuần 21 - Bài tập tham khảo",
      "topic": "Hình thang, diện tích hình thang",
      "text": "[Toán tư duy Archimedes Tuần 21] Vòi thứ nhất chảy một mình trong 4 giờ đầy bể, vòi thứ hai chảy một mình trong 6 giờ đầy bể. Hỏi cả hai vòi cùng chảy vào bể cạn thì sau bao lâu đầy bể?",
      "options": [
        "A. 2,4 giờ (2 giờ 24 phút)",
        "B. 3 giờ",
        "C. 2 giờ",
        "D. 5 giờ"
      ],
      "answer": "A",
      "explanation": "Trong 1 giờ cả hai vòi chảy được: 1/4 + 1/6 = 5/12 bể.\nThời gian để đầy bể là: 1 : 5/12 = 12/5 = 2,4 giờ = 2 giờ 24 phút."
    },
    {
      "id": "ARCH-M-G5-W22-T-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 5,
      "round": "Tuần 22 - Tiết 1",
      "topic": "Hình tròn, chu vi và diện tích hình tròn",
      "text": "[Tuần 22 - Tiết 1] Trọng tâm: Hình tròn, chu vi và diện tích hình tròn. Tính tỉ số phần trăm của 125 và 500:",
      "options": [
        "A. 25%",
        "B. 20%",
        "C. 30%",
        "D. 50%"
      ],
      "answer": "A",
      "explanation": "Tỉ số phần trăm là: (125 : 500) × 100% = 1/4 × 100% = 25%."
    },
    {
      "id": "ARCH-M-G5-W22-T-2",
      "exam": "ARCHIMEDES_MATH",
      "grade": 5,
      "round": "Tuần 22 - Tiết 2",
      "topic": "Hình tròn, chu vi và diện tích hình tròn",
      "text": "[Tuần 22 - Tiết 2] Trọng tâm: Hình tròn, chu vi và diện tích hình tròn. Tính tỉ số phần trăm của 125 và 500:",
      "options": [
        "A. 25%",
        "B. 20%",
        "C. 30%",
        "D. 50%"
      ],
      "answer": "A",
      "explanation": "Tỉ số phần trăm là: (125 : 500) × 100% = 1/4 × 100% = 25%."
    },
    {
      "id": "ARCH-M-G5-W22-T-3",
      "exam": "ARCHIMEDES_MATH",
      "grade": 5,
      "round": "Tuần 22 - Tiết 3",
      "topic": "Hình tròn, chu vi và diện tích hình tròn",
      "text": "[Tuần 22 - Tiết 3] Trọng tâm: Hình tròn, chu vi và diện tích hình tròn. Tính tỉ số phần trăm của 125 và 500:",
      "options": [
        "A. 25%",
        "B. 20%",
        "C. 30%",
        "D. 50%"
      ],
      "answer": "A",
      "explanation": "Tỉ số phần trăm là: (125 : 500) × 100% = 1/4 × 100% = 25%."
    },
    {
      "id": "ARCH-M-G5-W22-PKT-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 5,
      "round": "Tuần 22 - Phiếu cuối tuần",
      "topic": "Hình tròn, chu vi và diện tích hình tròn",
      "text": "[Phiếu cuối tuần 22] Chủ đề: Hình tròn, chu vi và diện tích hình tròn. Một ô tô đi quãng đường dài 384km hết 3 giờ. Vận tốc của ô tô là:",
      "options": [
        "A. 128 km/giờ",
        "B. 123 km/giờ",
        "C. 133 km/giờ",
        "D. 256 km/giờ"
      ],
      "answer": "A",
      "explanation": "Vận tốc ô tô là: v = s : t = 384 : 3 = 128 km/giờ."
    },
    {
      "id": "ARCH-M-G5-W22-TTK-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 5,
      "round": "Tuần 22 - Bài tập tham khảo",
      "topic": "Hình tròn, chu vi và diện tích hình tròn",
      "text": "[Toán tư duy Archimedes Tuần 22] Vòi thứ nhất chảy một mình trong 4 giờ đầy bể, vòi thứ hai chảy một mình trong 6 giờ đầy bể. Hỏi cả hai vòi cùng chảy vào bể cạn thì sau bao lâu đầy bể?",
      "options": [
        "A. 2,4 giờ (2 giờ 24 phút)",
        "B. 3 giờ",
        "C. 2 giờ",
        "D. 5 giờ"
      ],
      "answer": "A",
      "explanation": "Trong 1 giờ cả hai vòi chảy được: 1/4 + 1/6 = 5/12 bể.\nThời gian để đầy bể là: 1 : 5/12 = 12/5 = 2,4 giờ = 2 giờ 24 phút."
    },
    {
      "id": "ARCH-M-G5-W23-T-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 5,
      "round": "Tuần 23 - Tiết 1",
      "topic": "Biểu đồ hình quạt tròn",
      "text": "[Tuần 23 - Tiết 1] Trọng tâm: Biểu đồ hình quạt tròn. Tính tỉ số phần trăm của 130 và 520:",
      "options": [
        "A. 25%",
        "B. 20%",
        "C. 30%",
        "D. 50%"
      ],
      "answer": "A",
      "explanation": "Tỉ số phần trăm là: (130 : 520) × 100% = 1/4 × 100% = 25%."
    },
    {
      "id": "ARCH-M-G5-W23-T-2",
      "exam": "ARCHIMEDES_MATH",
      "grade": 5,
      "round": "Tuần 23 - Tiết 2",
      "topic": "Biểu đồ hình quạt tròn",
      "text": "[Tuần 23 - Tiết 2] Trọng tâm: Biểu đồ hình quạt tròn. Tính tỉ số phần trăm của 130 và 520:",
      "options": [
        "A. 25%",
        "B. 20%",
        "C. 30%",
        "D. 50%"
      ],
      "answer": "A",
      "explanation": "Tỉ số phần trăm là: (130 : 520) × 100% = 1/4 × 100% = 25%."
    },
    {
      "id": "ARCH-M-G5-W23-T-3",
      "exam": "ARCHIMEDES_MATH",
      "grade": 5,
      "round": "Tuần 23 - Tiết 3",
      "topic": "Biểu đồ hình quạt tròn",
      "text": "[Tuần 23 - Tiết 3] Trọng tâm: Biểu đồ hình quạt tròn. Tính tỉ số phần trăm của 130 và 520:",
      "options": [
        "A. 25%",
        "B. 20%",
        "C. 30%",
        "D. 50%"
      ],
      "answer": "A",
      "explanation": "Tỉ số phần trăm là: (130 : 520) × 100% = 1/4 × 100% = 25%."
    },
    {
      "id": "ARCH-M-G5-W23-PKT-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 5,
      "round": "Tuần 23 - Phiếu cuối tuần",
      "topic": "Biểu đồ hình quạt tròn",
      "text": "[Phiếu cuối tuần 23] Chủ đề: Biểu đồ hình quạt tròn. Một ô tô đi quãng đường dài 396km hết 3 giờ. Vận tốc của ô tô là:",
      "options": [
        "A. 132 km/giờ",
        "B. 127 km/giờ",
        "C. 137 km/giờ",
        "D. 264 km/giờ"
      ],
      "answer": "A",
      "explanation": "Vận tốc ô tô là: v = s : t = 396 : 3 = 132 km/giờ."
    },
    {
      "id": "ARCH-M-G5-W23-TTK-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 5,
      "round": "Tuần 23 - Bài tập tham khảo",
      "topic": "Biểu đồ hình quạt tròn",
      "text": "[Toán tư duy Archimedes Tuần 23] Vòi thứ nhất chảy một mình trong 4 giờ đầy bể, vòi thứ hai chảy một mình trong 6 giờ đầy bể. Hỏi cả hai vòi cùng chảy vào bể cạn thì sau bao lâu đầy bể?",
      "options": [
        "A. 2,4 giờ (2 giờ 24 phút)",
        "B. 3 giờ",
        "C. 2 giờ",
        "D. 5 giờ"
      ],
      "answer": "A",
      "explanation": "Trong 1 giờ cả hai vòi chảy được: 1/4 + 1/6 = 5/12 bể.\nThời gian để đầy bể là: 1 : 5/12 = 12/5 = 2,4 giờ = 2 giờ 24 phút."
    },
    {
      "id": "ARCH-M-G5-W24-T-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 5,
      "round": "Tuần 24 - Tiết 1",
      "topic": "Hình hộp chữ nhật, lập phương; diện tích xung quanh, toàn phần",
      "text": "[Tuần 24 - Tiết 1] Trọng tâm: Hình hộp chữ nhật, lập phương; diện tích xung quanh, toàn phần. Tính tỉ số phần trăm của 135 và 540:",
      "options": [
        "A. 25%",
        "B. 20%",
        "C. 30%",
        "D. 50%"
      ],
      "answer": "A",
      "explanation": "Tỉ số phần trăm là: (135 : 540) × 100% = 1/4 × 100% = 25%."
    },
    {
      "id": "ARCH-M-G5-W24-T-2",
      "exam": "ARCHIMEDES_MATH",
      "grade": 5,
      "round": "Tuần 24 - Tiết 2",
      "topic": "Hình hộp chữ nhật, lập phương; diện tích xung quanh, toàn phần",
      "text": "[Tuần 24 - Tiết 2] Trọng tâm: Hình hộp chữ nhật, lập phương; diện tích xung quanh, toàn phần. Tính tỉ số phần trăm của 135 và 540:",
      "options": [
        "A. 25%",
        "B. 20%",
        "C. 30%",
        "D. 50%"
      ],
      "answer": "A",
      "explanation": "Tỉ số phần trăm là: (135 : 540) × 100% = 1/4 × 100% = 25%."
    },
    {
      "id": "ARCH-M-G5-W24-T-3",
      "exam": "ARCHIMEDES_MATH",
      "grade": 5,
      "round": "Tuần 24 - Tiết 3",
      "topic": "Hình hộp chữ nhật, lập phương; diện tích xung quanh, toàn phần",
      "text": "[Tuần 24 - Tiết 3] Trọng tâm: Hình hộp chữ nhật, lập phương; diện tích xung quanh, toàn phần. Tính tỉ số phần trăm của 135 và 540:",
      "options": [
        "A. 25%",
        "B. 20%",
        "C. 30%",
        "D. 50%"
      ],
      "answer": "A",
      "explanation": "Tỉ số phần trăm là: (135 : 540) × 100% = 1/4 × 100% = 25%."
    },
    {
      "id": "ARCH-M-G5-W24-PKT-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 5,
      "round": "Tuần 24 - Phiếu cuối tuần",
      "topic": "Hình hộp chữ nhật, lập phương; diện tích xung quanh, toàn phần",
      "text": "[Phiếu cuối tuần 24] Chủ đề: Hình hộp chữ nhật, lập phương; diện tích xung quanh, toàn phần. Một ô tô đi quãng đường dài 408km hết 3 giờ. Vận tốc của ô tô là:",
      "options": [
        "A. 136 km/giờ",
        "B. 131 km/giờ",
        "C. 141 km/giờ",
        "D. 272 km/giờ"
      ],
      "answer": "A",
      "explanation": "Vận tốc ô tô là: v = s : t = 408 : 3 = 136 km/giờ."
    },
    {
      "id": "ARCH-M-G5-W24-TTK-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 5,
      "round": "Tuần 24 - Bài tập tham khảo",
      "topic": "Hình hộp chữ nhật, lập phương; diện tích xung quanh, toàn phần",
      "text": "[Toán tư duy Archimedes Tuần 24] Vòi thứ nhất chảy một mình trong 4 giờ đầy bể, vòi thứ hai chảy một mình trong 6 giờ đầy bể. Hỏi cả hai vòi cùng chảy vào bể cạn thì sau bao lâu đầy bể?",
      "options": [
        "A. 2,4 giờ (2 giờ 24 phút)",
        "B. 3 giờ",
        "C. 2 giờ",
        "D. 5 giờ"
      ],
      "answer": "A",
      "explanation": "Trong 1 giờ cả hai vòi chảy được: 1/4 + 1/6 = 5/12 bể.\nThời gian để đầy bể là: 1 : 5/12 = 12/5 = 2,4 giờ = 2 giờ 24 phút."
    },
    {
      "id": "ARCH-M-G5-W25-T-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 5,
      "round": "Tuần 25 - Tiết 1",
      "topic": "Thể tích hình hộp chữ nhật và hình lập phương",
      "text": "[Tuần 25 - Tiết 1] Trọng tâm: Thể tích hình hộp chữ nhật và hình lập phương. Tính tỉ số phần trăm của 140 và 560:",
      "options": [
        "A. 25%",
        "B. 20%",
        "C. 30%",
        "D. 50%"
      ],
      "answer": "A",
      "explanation": "Tỉ số phần trăm là: (140 : 560) × 100% = 1/4 × 100% = 25%."
    },
    {
      "id": "ARCH-M-G5-W25-T-2",
      "exam": "ARCHIMEDES_MATH",
      "grade": 5,
      "round": "Tuần 25 - Tiết 2",
      "topic": "Thể tích hình hộp chữ nhật và hình lập phương",
      "text": "[Tuần 25 - Tiết 2] Trọng tâm: Thể tích hình hộp chữ nhật và hình lập phương. Tính tỉ số phần trăm của 140 và 560:",
      "options": [
        "A. 25%",
        "B. 20%",
        "C. 30%",
        "D. 50%"
      ],
      "answer": "A",
      "explanation": "Tỉ số phần trăm là: (140 : 560) × 100% = 1/4 × 100% = 25%."
    },
    {
      "id": "ARCH-M-G5-W25-T-3",
      "exam": "ARCHIMEDES_MATH",
      "grade": 5,
      "round": "Tuần 25 - Tiết 3",
      "topic": "Thể tích hình hộp chữ nhật và hình lập phương",
      "text": "[Tuần 25 - Tiết 3] Trọng tâm: Thể tích hình hộp chữ nhật và hình lập phương. Tính tỉ số phần trăm của 140 và 560:",
      "options": [
        "A. 25%",
        "B. 20%",
        "C. 30%",
        "D. 50%"
      ],
      "answer": "A",
      "explanation": "Tỉ số phần trăm là: (140 : 560) × 100% = 1/4 × 100% = 25%."
    },
    {
      "id": "ARCH-M-G5-W25-PKT-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 5,
      "round": "Tuần 25 - Phiếu cuối tuần",
      "topic": "Thể tích hình hộp chữ nhật và hình lập phương",
      "text": "[Phiếu cuối tuần 25] Chủ đề: Thể tích hình hộp chữ nhật và hình lập phương. Một ô tô đi quãng đường dài 420km hết 3 giờ. Vận tốc của ô tô là:",
      "options": [
        "A. 140 km/giờ",
        "B. 135 km/giờ",
        "C. 145 km/giờ",
        "D. 280 km/giờ"
      ],
      "answer": "A",
      "explanation": "Vận tốc ô tô là: v = s : t = 420 : 3 = 140 km/giờ."
    },
    {
      "id": "ARCH-M-G5-W25-TTK-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 5,
      "round": "Tuần 25 - Bài tập tham khảo",
      "topic": "Thể tích hình hộp chữ nhật và hình lập phương",
      "text": "[Toán tư duy Archimedes Tuần 25] Vòi thứ nhất chảy một mình trong 4 giờ đầy bể, vòi thứ hai chảy một mình trong 6 giờ đầy bể. Hỏi cả hai vòi cùng chảy vào bể cạn thì sau bao lâu đầy bể?",
      "options": [
        "A. 2,4 giờ (2 giờ 24 phút)",
        "B. 3 giờ",
        "C. 2 giờ",
        "D. 5 giờ"
      ],
      "answer": "A",
      "explanation": "Trong 1 giờ cả hai vòi chảy được: 1/4 + 1/6 = 5/12 bể.\nThời gian để đầy bể là: 1 : 5/12 = 12/5 = 2,4 giờ = 2 giờ 24 phút."
    },
    {
      "id": "ARCH-M-G5-W26-T-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 5,
      "round": "Tuần 26 - Tiết 1",
      "topic": "Đơn vị đo thể tích: cm³, dm³, m³",
      "text": "[Tuần 26 - Tiết 1] Trọng tâm: Đơn vị đo thể tích: cm³, dm³, m³. Tính tỉ số phần trăm của 145 và 580:",
      "options": [
        "A. 25%",
        "B. 20%",
        "C. 30%",
        "D. 50%"
      ],
      "answer": "A",
      "explanation": "Tỉ số phần trăm là: (145 : 580) × 100% = 1/4 × 100% = 25%."
    },
    {
      "id": "ARCH-M-G5-W26-T-2",
      "exam": "ARCHIMEDES_MATH",
      "grade": 5,
      "round": "Tuần 26 - Tiết 2",
      "topic": "Đơn vị đo thể tích: cm³, dm³, m³",
      "text": "[Tuần 26 - Tiết 2] Trọng tâm: Đơn vị đo thể tích: cm³, dm³, m³. Tính tỉ số phần trăm của 145 và 580:",
      "options": [
        "A. 25%",
        "B. 20%",
        "C. 30%",
        "D. 50%"
      ],
      "answer": "A",
      "explanation": "Tỉ số phần trăm là: (145 : 580) × 100% = 1/4 × 100% = 25%."
    },
    {
      "id": "ARCH-M-G5-W26-T-3",
      "exam": "ARCHIMEDES_MATH",
      "grade": 5,
      "round": "Tuần 26 - Tiết 3",
      "topic": "Đơn vị đo thể tích: cm³, dm³, m³",
      "text": "[Tuần 26 - Tiết 3] Trọng tâm: Đơn vị đo thể tích: cm³, dm³, m³. Tính tỉ số phần trăm của 145 và 580:",
      "options": [
        "A. 25%",
        "B. 20%",
        "C. 30%",
        "D. 50%"
      ],
      "answer": "A",
      "explanation": "Tỉ số phần trăm là: (145 : 580) × 100% = 1/4 × 100% = 25%."
    },
    {
      "id": "ARCH-M-G5-W26-PKT-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 5,
      "round": "Tuần 26 - Phiếu cuối tuần",
      "topic": "Đơn vị đo thể tích: cm³, dm³, m³",
      "text": "[Phiếu cuối tuần 26] Chủ đề: Đơn vị đo thể tích: cm³, dm³, m³. Một ô tô đi quãng đường dài 432km hết 3 giờ. Vận tốc của ô tô là:",
      "options": [
        "A. 144 km/giờ",
        "B. 139 km/giờ",
        "C. 149 km/giờ",
        "D. 288 km/giờ"
      ],
      "answer": "A",
      "explanation": "Vận tốc ô tô là: v = s : t = 432 : 3 = 144 km/giờ."
    },
    {
      "id": "ARCH-M-G5-W26-TTK-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 5,
      "round": "Tuần 26 - Bài tập tham khảo",
      "topic": "Đơn vị đo thể tích: cm³, dm³, m³",
      "text": "[Toán tư duy Archimedes Tuần 26] Vòi thứ nhất chảy một mình trong 4 giờ đầy bể, vòi thứ hai chảy một mình trong 6 giờ đầy bể. Hỏi cả hai vòi cùng chảy vào bể cạn thì sau bao lâu đầy bể?",
      "options": [
        "A. 2,4 giờ (2 giờ 24 phút)",
        "B. 3 giờ",
        "C. 2 giờ",
        "D. 5 giờ"
      ],
      "answer": "A",
      "explanation": "Trong 1 giờ cả hai vòi chảy được: 1/4 + 1/6 = 5/12 bể.\nThời gian để đầy bể là: 1 : 5/12 = 12/5 = 2,4 giờ = 2 giờ 24 phút."
    },
    {
      "id": "ARCH-M-G5-W27-T-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 5,
      "round": "Tuần 27 - Tiết 1",
      "topic": "Cộng, trừ số đo thời gian",
      "text": "[Tuần 27 - Tiết 1] Trọng tâm: Cộng, trừ số đo thời gian. Tính tỉ số phần trăm của 150 và 600:",
      "options": [
        "A. 25%",
        "B. 20%",
        "C. 30%",
        "D. 50%"
      ],
      "answer": "A",
      "explanation": "Tỉ số phần trăm là: (150 : 600) × 100% = 1/4 × 100% = 25%."
    },
    {
      "id": "ARCH-M-G5-W27-T-2",
      "exam": "ARCHIMEDES_MATH",
      "grade": 5,
      "round": "Tuần 27 - Tiết 2",
      "topic": "Cộng, trừ số đo thời gian",
      "text": "[Tuần 27 - Tiết 2] Trọng tâm: Cộng, trừ số đo thời gian. Tính tỉ số phần trăm của 150 và 600:",
      "options": [
        "A. 25%",
        "B. 20%",
        "C. 30%",
        "D. 50%"
      ],
      "answer": "A",
      "explanation": "Tỉ số phần trăm là: (150 : 600) × 100% = 1/4 × 100% = 25%."
    },
    {
      "id": "ARCH-M-G5-W27-T-3",
      "exam": "ARCHIMEDES_MATH",
      "grade": 5,
      "round": "Tuần 27 - Tiết 3",
      "topic": "Cộng, trừ số đo thời gian",
      "text": "[Tuần 27 - Tiết 3] Trọng tâm: Cộng, trừ số đo thời gian. Tính tỉ số phần trăm của 150 và 600:",
      "options": [
        "A. 25%",
        "B. 20%",
        "C. 30%",
        "D. 50%"
      ],
      "answer": "A",
      "explanation": "Tỉ số phần trăm là: (150 : 600) × 100% = 1/4 × 100% = 25%."
    },
    {
      "id": "ARCH-M-G5-W27-PKT-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 5,
      "round": "Tuần 27 - Phiếu cuối tuần",
      "topic": "Cộng, trừ số đo thời gian",
      "text": "[Phiếu cuối tuần 27] Chủ đề: Cộng, trừ số đo thời gian. Một ô tô đi quãng đường dài 444km hết 3 giờ. Vận tốc của ô tô là:",
      "options": [
        "A. 148 km/giờ",
        "B. 143 km/giờ",
        "C. 153 km/giờ",
        "D. 296 km/giờ"
      ],
      "answer": "A",
      "explanation": "Vận tốc ô tô là: v = s : t = 444 : 3 = 148 km/giờ."
    },
    {
      "id": "ARCH-M-G5-W27-TTK-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 5,
      "round": "Tuần 27 - Bài tập tham khảo",
      "topic": "Cộng, trừ số đo thời gian",
      "text": "[Toán tư duy Archimedes Tuần 27] Vòi thứ nhất chảy một mình trong 4 giờ đầy bể, vòi thứ hai chảy một mình trong 6 giờ đầy bể. Hỏi cả hai vòi cùng chảy vào bể cạn thì sau bao lâu đầy bể?",
      "options": [
        "A. 2,4 giờ (2 giờ 24 phút)",
        "B. 3 giờ",
        "C. 2 giờ",
        "D. 5 giờ"
      ],
      "answer": "A",
      "explanation": "Trong 1 giờ cả hai vòi chảy được: 1/4 + 1/6 = 5/12 bể.\nThời gian để đầy bể là: 1 : 5/12 = 12/5 = 2,4 giờ = 2 giờ 24 phút."
    },
    {
      "id": "ARCH-M-G5-W28-T-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 5,
      "round": "Tuần 28 - Tiết 1",
      "topic": "Nhân, chia số đo thời gian",
      "text": "[Tuần 28 - Tiết 1] Trọng tâm: Nhân, chia số đo thời gian. Tính tỉ số phần trăm của 155 và 620:",
      "options": [
        "A. 25%",
        "B. 20%",
        "C. 30%",
        "D. 50%"
      ],
      "answer": "A",
      "explanation": "Tỉ số phần trăm là: (155 : 620) × 100% = 1/4 × 100% = 25%."
    },
    {
      "id": "ARCH-M-G5-W28-T-2",
      "exam": "ARCHIMEDES_MATH",
      "grade": 5,
      "round": "Tuần 28 - Tiết 2",
      "topic": "Nhân, chia số đo thời gian",
      "text": "[Tuần 28 - Tiết 2] Trọng tâm: Nhân, chia số đo thời gian. Tính tỉ số phần trăm của 155 và 620:",
      "options": [
        "A. 25%",
        "B. 20%",
        "C. 30%",
        "D. 50%"
      ],
      "answer": "A",
      "explanation": "Tỉ số phần trăm là: (155 : 620) × 100% = 1/4 × 100% = 25%."
    },
    {
      "id": "ARCH-M-G5-W28-T-3",
      "exam": "ARCHIMEDES_MATH",
      "grade": 5,
      "round": "Tuần 28 - Tiết 3",
      "topic": "Nhân, chia số đo thời gian",
      "text": "[Tuần 28 - Tiết 3] Trọng tâm: Nhân, chia số đo thời gian. Tính tỉ số phần trăm của 155 và 620:",
      "options": [
        "A. 25%",
        "B. 20%",
        "C. 30%",
        "D. 50%"
      ],
      "answer": "A",
      "explanation": "Tỉ số phần trăm là: (155 : 620) × 100% = 1/4 × 100% = 25%."
    },
    {
      "id": "ARCH-M-G5-W28-PKT-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 5,
      "round": "Tuần 28 - Phiếu cuối tuần",
      "topic": "Nhân, chia số đo thời gian",
      "text": "[Phiếu cuối tuần 28] Chủ đề: Nhân, chia số đo thời gian. Một ô tô đi quãng đường dài 456km hết 3 giờ. Vận tốc của ô tô là:",
      "options": [
        "A. 152 km/giờ",
        "B. 147 km/giờ",
        "C. 157 km/giờ",
        "D. 304 km/giờ"
      ],
      "answer": "A",
      "explanation": "Vận tốc ô tô là: v = s : t = 456 : 3 = 152 km/giờ."
    },
    {
      "id": "ARCH-M-G5-W28-TTK-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 5,
      "round": "Tuần 28 - Bài tập tham khảo",
      "topic": "Nhân, chia số đo thời gian",
      "text": "[Toán tư duy Archimedes Tuần 28] Vòi thứ nhất chảy một mình trong 4 giờ đầy bể, vòi thứ hai chảy một mình trong 6 giờ đầy bể. Hỏi cả hai vòi cùng chảy vào bể cạn thì sau bao lâu đầy bể?",
      "options": [
        "A. 2,4 giờ (2 giờ 24 phút)",
        "B. 3 giờ",
        "C. 2 giờ",
        "D. 5 giờ"
      ],
      "answer": "A",
      "explanation": "Trong 1 giờ cả hai vòi chảy được: 1/4 + 1/6 = 5/12 bể.\nThời gian để đầy bể là: 1 : 5/12 = 12/5 = 2,4 giờ = 2 giờ 24 phút."
    },
    {
      "id": "ARCH-M-G5-W29-T-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 5,
      "round": "Tuần 29 - Tiết 1",
      "topic": "Vận tốc trong chuyển động đều (v = s : t)",
      "text": "[Tuần 29 - Tiết 1] Trọng tâm: Vận tốc trong chuyển động đều (v = s : t). Tính tỉ số phần trăm của 160 và 640:",
      "options": [
        "A. 25%",
        "B. 20%",
        "C. 30%",
        "D. 50%"
      ],
      "answer": "A",
      "explanation": "Tỉ số phần trăm là: (160 : 640) × 100% = 1/4 × 100% = 25%."
    },
    {
      "id": "ARCH-M-G5-W29-T-2",
      "exam": "ARCHIMEDES_MATH",
      "grade": 5,
      "round": "Tuần 29 - Tiết 2",
      "topic": "Vận tốc trong chuyển động đều (v = s : t)",
      "text": "[Tuần 29 - Tiết 2] Trọng tâm: Vận tốc trong chuyển động đều (v = s : t). Tính tỉ số phần trăm của 160 và 640:",
      "options": [
        "A. 25%",
        "B. 20%",
        "C. 30%",
        "D. 50%"
      ],
      "answer": "A",
      "explanation": "Tỉ số phần trăm là: (160 : 640) × 100% = 1/4 × 100% = 25%."
    },
    {
      "id": "ARCH-M-G5-W29-T-3",
      "exam": "ARCHIMEDES_MATH",
      "grade": 5,
      "round": "Tuần 29 - Tiết 3",
      "topic": "Vận tốc trong chuyển động đều (v = s : t)",
      "text": "[Tuần 29 - Tiết 3] Trọng tâm: Vận tốc trong chuyển động đều (v = s : t). Tính tỉ số phần trăm của 160 và 640:",
      "options": [
        "A. 25%",
        "B. 20%",
        "C. 30%",
        "D. 50%"
      ],
      "answer": "A",
      "explanation": "Tỉ số phần trăm là: (160 : 640) × 100% = 1/4 × 100% = 25%."
    },
    {
      "id": "ARCH-M-G5-W29-PKT-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 5,
      "round": "Tuần 29 - Phiếu cuối tuần",
      "topic": "Vận tốc trong chuyển động đều (v = s : t)",
      "text": "[Phiếu cuối tuần 29] Chủ đề: Vận tốc trong chuyển động đều (v = s : t). Một ô tô đi quãng đường dài 468km hết 3 giờ. Vận tốc của ô tô là:",
      "options": [
        "A. 156 km/giờ",
        "B. 151 km/giờ",
        "C. 161 km/giờ",
        "D. 312 km/giờ"
      ],
      "answer": "A",
      "explanation": "Vận tốc ô tô là: v = s : t = 468 : 3 = 156 km/giờ."
    },
    {
      "id": "ARCH-M-G5-W29-TTK-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 5,
      "round": "Tuần 29 - Bài tập tham khảo",
      "topic": "Vận tốc trong chuyển động đều (v = s : t)",
      "text": "[Toán tư duy Archimedes Tuần 29] Vòi thứ nhất chảy một mình trong 4 giờ đầy bể, vòi thứ hai chảy một mình trong 6 giờ đầy bể. Hỏi cả hai vòi cùng chảy vào bể cạn thì sau bao lâu đầy bể?",
      "options": [
        "A. 2,4 giờ (2 giờ 24 phút)",
        "B. 3 giờ",
        "C. 2 giờ",
        "D. 5 giờ"
      ],
      "answer": "A",
      "explanation": "Trong 1 giờ cả hai vòi chảy được: 1/4 + 1/6 = 5/12 bể.\nThời gian để đầy bể là: 1 : 5/12 = 12/5 = 2,4 giờ = 2 giờ 24 phút."
    },
    {
      "id": "ARCH-M-G5-W30-T-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 5,
      "round": "Tuần 30 - Tiết 1",
      "topic": "Quãng đường trong chuyển động đều (s = v x t)",
      "text": "[Tuần 30 - Tiết 1] Trọng tâm: Quãng đường trong chuyển động đều (s = v x t). Tính tỉ số phần trăm của 165 và 660:",
      "options": [
        "A. 25%",
        "B. 20%",
        "C. 30%",
        "D. 50%"
      ],
      "answer": "A",
      "explanation": "Tỉ số phần trăm là: (165 : 660) × 100% = 1/4 × 100% = 25%."
    },
    {
      "id": "ARCH-M-G5-W30-T-2",
      "exam": "ARCHIMEDES_MATH",
      "grade": 5,
      "round": "Tuần 30 - Tiết 2",
      "topic": "Quãng đường trong chuyển động đều (s = v x t)",
      "text": "[Tuần 30 - Tiết 2] Trọng tâm: Quãng đường trong chuyển động đều (s = v x t). Tính tỉ số phần trăm của 165 và 660:",
      "options": [
        "A. 25%",
        "B. 20%",
        "C. 30%",
        "D. 50%"
      ],
      "answer": "A",
      "explanation": "Tỉ số phần trăm là: (165 : 660) × 100% = 1/4 × 100% = 25%."
    },
    {
      "id": "ARCH-M-G5-W30-T-3",
      "exam": "ARCHIMEDES_MATH",
      "grade": 5,
      "round": "Tuần 30 - Tiết 3",
      "topic": "Quãng đường trong chuyển động đều (s = v x t)",
      "text": "[Tuần 30 - Tiết 3] Trọng tâm: Quãng đường trong chuyển động đều (s = v x t). Tính tỉ số phần trăm của 165 và 660:",
      "options": [
        "A. 25%",
        "B. 20%",
        "C. 30%",
        "D. 50%"
      ],
      "answer": "A",
      "explanation": "Tỉ số phần trăm là: (165 : 660) × 100% = 1/4 × 100% = 25%."
    },
    {
      "id": "ARCH-M-G5-W30-PKT-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 5,
      "round": "Tuần 30 - Phiếu cuối tuần",
      "topic": "Quãng đường trong chuyển động đều (s = v x t)",
      "text": "[Phiếu cuối tuần 30] Chủ đề: Quãng đường trong chuyển động đều (s = v x t). Một ô tô đi quãng đường dài 480km hết 3 giờ. Vận tốc của ô tô là:",
      "options": [
        "A. 160 km/giờ",
        "B. 155 km/giờ",
        "C. 165 km/giờ",
        "D. 320 km/giờ"
      ],
      "answer": "A",
      "explanation": "Vận tốc ô tô là: v = s : t = 480 : 3 = 160 km/giờ."
    },
    {
      "id": "ARCH-M-G5-W30-TTK-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 5,
      "round": "Tuần 30 - Bài tập tham khảo",
      "topic": "Quãng đường trong chuyển động đều (s = v x t)",
      "text": "[Toán tư duy Archimedes Tuần 30] Vòi thứ nhất chảy một mình trong 4 giờ đầy bể, vòi thứ hai chảy một mình trong 6 giờ đầy bể. Hỏi cả hai vòi cùng chảy vào bể cạn thì sau bao lâu đầy bể?",
      "options": [
        "A. 2,4 giờ (2 giờ 24 phút)",
        "B. 3 giờ",
        "C. 2 giờ",
        "D. 5 giờ"
      ],
      "answer": "A",
      "explanation": "Trong 1 giờ cả hai vòi chảy được: 1/4 + 1/6 = 5/12 bể.\nThời gian để đầy bể là: 1 : 5/12 = 12/5 = 2,4 giờ = 2 giờ 24 phút."
    },
    {
      "id": "ARCH-M-G5-W31-T-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 5,
      "round": "Tuần 31 - Tiết 1",
      "topic": "Thời gian trong chuyển động đều (t = s : v)",
      "text": "[Tuần 31 - Tiết 1] Trọng tâm: Thời gian trong chuyển động đều (t = s : v). Tính tỉ số phần trăm của 170 và 680:",
      "options": [
        "A. 25%",
        "B. 20%",
        "C. 30%",
        "D. 50%"
      ],
      "answer": "A",
      "explanation": "Tỉ số phần trăm là: (170 : 680) × 100% = 1/4 × 100% = 25%."
    },
    {
      "id": "ARCH-M-G5-W31-T-2",
      "exam": "ARCHIMEDES_MATH",
      "grade": 5,
      "round": "Tuần 31 - Tiết 2",
      "topic": "Thời gian trong chuyển động đều (t = s : v)",
      "text": "[Tuần 31 - Tiết 2] Trọng tâm: Thời gian trong chuyển động đều (t = s : v). Tính tỉ số phần trăm của 170 và 680:",
      "options": [
        "A. 25%",
        "B. 20%",
        "C. 30%",
        "D. 50%"
      ],
      "answer": "A",
      "explanation": "Tỉ số phần trăm là: (170 : 680) × 100% = 1/4 × 100% = 25%."
    },
    {
      "id": "ARCH-M-G5-W31-T-3",
      "exam": "ARCHIMEDES_MATH",
      "grade": 5,
      "round": "Tuần 31 - Tiết 3",
      "topic": "Thời gian trong chuyển động đều (t = s : v)",
      "text": "[Tuần 31 - Tiết 3] Trọng tâm: Thời gian trong chuyển động đều (t = s : v). Tính tỉ số phần trăm của 170 và 680:",
      "options": [
        "A. 25%",
        "B. 20%",
        "C. 30%",
        "D. 50%"
      ],
      "answer": "A",
      "explanation": "Tỉ số phần trăm là: (170 : 680) × 100% = 1/4 × 100% = 25%."
    },
    {
      "id": "ARCH-M-G5-W31-PKT-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 5,
      "round": "Tuần 31 - Phiếu cuối tuần",
      "topic": "Thời gian trong chuyển động đều (t = s : v)",
      "text": "[Phiếu cuối tuần 31] Chủ đề: Thời gian trong chuyển động đều (t = s : v). Một ô tô đi quãng đường dài 492km hết 3 giờ. Vận tốc của ô tô là:",
      "options": [
        "A. 164 km/giờ",
        "B. 159 km/giờ",
        "C. 169 km/giờ",
        "D. 328 km/giờ"
      ],
      "answer": "A",
      "explanation": "Vận tốc ô tô là: v = s : t = 492 : 3 = 164 km/giờ."
    },
    {
      "id": "ARCH-M-G5-W31-TTK-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 5,
      "round": "Tuần 31 - Bài tập tham khảo",
      "topic": "Thời gian trong chuyển động đều (t = s : v)",
      "text": "[Toán tư duy Archimedes Tuần 31] Vòi thứ nhất chảy một mình trong 4 giờ đầy bể, vòi thứ hai chảy một mình trong 6 giờ đầy bể. Hỏi cả hai vòi cùng chảy vào bể cạn thì sau bao lâu đầy bể?",
      "options": [
        "A. 2,4 giờ (2 giờ 24 phút)",
        "B. 3 giờ",
        "C. 2 giờ",
        "D. 5 giờ"
      ],
      "answer": "A",
      "explanation": "Trong 1 giờ cả hai vòi chảy được: 1/4 + 1/6 = 5/12 bể.\nThời gian để đầy bể là: 1 : 5/12 = 12/5 = 2,4 giờ = 2 giờ 24 phút."
    },
    {
      "id": "ARCH-M-G5-W32-T-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 5,
      "round": "Tuần 32 - Tiết 1",
      "topic": "Bài toán chuyển động ngược chiều và cùng chiều",
      "text": "[Tuần 32 - Tiết 1] Trọng tâm: Bài toán chuyển động ngược chiều và cùng chiều. Tính tỉ số phần trăm của 175 và 700:",
      "options": [
        "A. 25%",
        "B. 20%",
        "C. 30%",
        "D. 50%"
      ],
      "answer": "A",
      "explanation": "Tỉ số phần trăm là: (175 : 700) × 100% = 1/4 × 100% = 25%."
    },
    {
      "id": "ARCH-M-G5-W32-T-2",
      "exam": "ARCHIMEDES_MATH",
      "grade": 5,
      "round": "Tuần 32 - Tiết 2",
      "topic": "Bài toán chuyển động ngược chiều và cùng chiều",
      "text": "[Tuần 32 - Tiết 2] Trọng tâm: Bài toán chuyển động ngược chiều và cùng chiều. Tính tỉ số phần trăm của 175 và 700:",
      "options": [
        "A. 25%",
        "B. 20%",
        "C. 30%",
        "D. 50%"
      ],
      "answer": "A",
      "explanation": "Tỉ số phần trăm là: (175 : 700) × 100% = 1/4 × 100% = 25%."
    },
    {
      "id": "ARCH-M-G5-W32-T-3",
      "exam": "ARCHIMEDES_MATH",
      "grade": 5,
      "round": "Tuần 32 - Tiết 3",
      "topic": "Bài toán chuyển động ngược chiều và cùng chiều",
      "text": "[Tuần 32 - Tiết 3] Trọng tâm: Bài toán chuyển động ngược chiều và cùng chiều. Tính tỉ số phần trăm của 175 và 700:",
      "options": [
        "A. 25%",
        "B. 20%",
        "C. 30%",
        "D. 50%"
      ],
      "answer": "A",
      "explanation": "Tỉ số phần trăm là: (175 : 700) × 100% = 1/4 × 100% = 25%."
    },
    {
      "id": "ARCH-M-G5-W32-PKT-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 5,
      "round": "Tuần 32 - Phiếu cuối tuần",
      "topic": "Bài toán chuyển động ngược chiều và cùng chiều",
      "text": "[Phiếu cuối tuần 32] Chủ đề: Bài toán chuyển động ngược chiều và cùng chiều. Một ô tô đi quãng đường dài 504km hết 3 giờ. Vận tốc của ô tô là:",
      "options": [
        "A. 168 km/giờ",
        "B. 163 km/giờ",
        "C. 173 km/giờ",
        "D. 336 km/giờ"
      ],
      "answer": "A",
      "explanation": "Vận tốc ô tô là: v = s : t = 504 : 3 = 168 km/giờ."
    },
    {
      "id": "ARCH-M-G5-W32-TTK-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 5,
      "round": "Tuần 32 - Bài tập tham khảo",
      "topic": "Bài toán chuyển động ngược chiều và cùng chiều",
      "text": "[Toán tư duy Archimedes Tuần 32] Vòi thứ nhất chảy một mình trong 4 giờ đầy bể, vòi thứ hai chảy một mình trong 6 giờ đầy bể. Hỏi cả hai vòi cùng chảy vào bể cạn thì sau bao lâu đầy bể?",
      "options": [
        "A. 2,4 giờ (2 giờ 24 phút)",
        "B. 3 giờ",
        "C. 2 giờ",
        "D. 5 giờ"
      ],
      "answer": "A",
      "explanation": "Trong 1 giờ cả hai vòi chảy được: 1/4 + 1/6 = 5/12 bể.\nThời gian để đầy bể là: 1 : 5/12 = 12/5 = 2,4 giờ = 2 giờ 24 phút."
    },
    {
      "id": "ARCH-M-G5-W33-T-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 5,
      "round": "Tuần 33 - Tiết 1",
      "topic": "Toán tư duy công việc chung - riêng, vòi nước chảy",
      "text": "[Tuần 33 - Tiết 1] Trọng tâm: Toán tư duy công việc chung - riêng, vòi nước chảy. Tính tỉ số phần trăm của 180 và 720:",
      "options": [
        "A. 25%",
        "B. 20%",
        "C. 30%",
        "D. 50%"
      ],
      "answer": "A",
      "explanation": "Tỉ số phần trăm là: (180 : 720) × 100% = 1/4 × 100% = 25%."
    },
    {
      "id": "ARCH-M-G5-W33-T-2",
      "exam": "ARCHIMEDES_MATH",
      "grade": 5,
      "round": "Tuần 33 - Tiết 2",
      "topic": "Toán tư duy công việc chung - riêng, vòi nước chảy",
      "text": "[Tuần 33 - Tiết 2] Trọng tâm: Toán tư duy công việc chung - riêng, vòi nước chảy. Tính tỉ số phần trăm của 180 và 720:",
      "options": [
        "A. 25%",
        "B. 20%",
        "C. 30%",
        "D. 50%"
      ],
      "answer": "A",
      "explanation": "Tỉ số phần trăm là: (180 : 720) × 100% = 1/4 × 100% = 25%."
    },
    {
      "id": "ARCH-M-G5-W33-T-3",
      "exam": "ARCHIMEDES_MATH",
      "grade": 5,
      "round": "Tuần 33 - Tiết 3",
      "topic": "Toán tư duy công việc chung - riêng, vòi nước chảy",
      "text": "[Tuần 33 - Tiết 3] Trọng tâm: Toán tư duy công việc chung - riêng, vòi nước chảy. Tính tỉ số phần trăm của 180 và 720:",
      "options": [
        "A. 25%",
        "B. 20%",
        "C. 30%",
        "D. 50%"
      ],
      "answer": "A",
      "explanation": "Tỉ số phần trăm là: (180 : 720) × 100% = 1/4 × 100% = 25%."
    },
    {
      "id": "ARCH-M-G5-W33-PKT-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 5,
      "round": "Tuần 33 - Phiếu cuối tuần",
      "topic": "Toán tư duy công việc chung - riêng, vòi nước chảy",
      "text": "[Phiếu cuối tuần 33] Chủ đề: Toán tư duy công việc chung - riêng, vòi nước chảy. Một ô tô đi quãng đường dài 516km hết 3 giờ. Vận tốc của ô tô là:",
      "options": [
        "A. 172 km/giờ",
        "B. 167 km/giờ",
        "C. 177 km/giờ",
        "D. 344 km/giờ"
      ],
      "answer": "A",
      "explanation": "Vận tốc ô tô là: v = s : t = 516 : 3 = 172 km/giờ."
    },
    {
      "id": "ARCH-M-G5-W33-TTK-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 5,
      "round": "Tuần 33 - Bài tập tham khảo",
      "topic": "Toán tư duy công việc chung - riêng, vòi nước chảy",
      "text": "[Toán tư duy Archimedes Tuần 33] Vòi thứ nhất chảy một mình trong 4 giờ đầy bể, vòi thứ hai chảy một mình trong 6 giờ đầy bể. Hỏi cả hai vòi cùng chảy vào bể cạn thì sau bao lâu đầy bể?",
      "options": [
        "A. 2,4 giờ (2 giờ 24 phút)",
        "B. 3 giờ",
        "C. 2 giờ",
        "D. 5 giờ"
      ],
      "answer": "A",
      "explanation": "Trong 1 giờ cả hai vòi chảy được: 1/4 + 1/6 = 5/12 bể.\nThời gian để đầy bể là: 1 : 5/12 = 12/5 = 2,4 giờ = 2 giờ 24 phút."
    },
    {
      "id": "ARCH-M-G5-W34-T-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 5,
      "round": "Tuần 34 - Tiết 1",
      "topic": "Ôn tập về số tự nhiên, phân số, số thập phân",
      "text": "[Tuần 34 - Tiết 1] Trọng tâm: Ôn tập về số tự nhiên, phân số, số thập phân. Tính tỉ số phần trăm của 185 và 740:",
      "options": [
        "A. 25%",
        "B. 20%",
        "C. 30%",
        "D. 50%"
      ],
      "answer": "A",
      "explanation": "Tỉ số phần trăm là: (185 : 740) × 100% = 1/4 × 100% = 25%."
    },
    {
      "id": "ARCH-M-G5-W34-T-2",
      "exam": "ARCHIMEDES_MATH",
      "grade": 5,
      "round": "Tuần 34 - Tiết 2",
      "topic": "Ôn tập về số tự nhiên, phân số, số thập phân",
      "text": "[Tuần 34 - Tiết 2] Trọng tâm: Ôn tập về số tự nhiên, phân số, số thập phân. Tính tỉ số phần trăm của 185 và 740:",
      "options": [
        "A. 25%",
        "B. 20%",
        "C. 30%",
        "D. 50%"
      ],
      "answer": "A",
      "explanation": "Tỉ số phần trăm là: (185 : 740) × 100% = 1/4 × 100% = 25%."
    },
    {
      "id": "ARCH-M-G5-W34-T-3",
      "exam": "ARCHIMEDES_MATH",
      "grade": 5,
      "round": "Tuần 34 - Tiết 3",
      "topic": "Ôn tập về số tự nhiên, phân số, số thập phân",
      "text": "[Tuần 34 - Tiết 3] Trọng tâm: Ôn tập về số tự nhiên, phân số, số thập phân. Tính tỉ số phần trăm của 185 và 740:",
      "options": [
        "A. 25%",
        "B. 20%",
        "C. 30%",
        "D. 50%"
      ],
      "answer": "A",
      "explanation": "Tỉ số phần trăm là: (185 : 740) × 100% = 1/4 × 100% = 25%."
    },
    {
      "id": "ARCH-M-G5-W34-PKT-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 5,
      "round": "Tuần 34 - Phiếu cuối tuần",
      "topic": "Ôn tập về số tự nhiên, phân số, số thập phân",
      "text": "[Phiếu cuối tuần 34] Chủ đề: Ôn tập về số tự nhiên, phân số, số thập phân. Một ô tô đi quãng đường dài 528km hết 3 giờ. Vận tốc của ô tô là:",
      "options": [
        "A. 176 km/giờ",
        "B. 171 km/giờ",
        "C. 181 km/giờ",
        "D. 352 km/giờ"
      ],
      "answer": "A",
      "explanation": "Vận tốc ô tô là: v = s : t = 528 : 3 = 176 km/giờ."
    },
    {
      "id": "ARCH-M-G5-W34-TTK-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 5,
      "round": "Tuần 34 - Bài tập tham khảo",
      "topic": "Ôn tập về số tự nhiên, phân số, số thập phân",
      "text": "[Toán tư duy Archimedes Tuần 34] Vòi thứ nhất chảy một mình trong 4 giờ đầy bể, vòi thứ hai chảy một mình trong 6 giờ đầy bể. Hỏi cả hai vòi cùng chảy vào bể cạn thì sau bao lâu đầy bể?",
      "options": [
        "A. 2,4 giờ (2 giờ 24 phút)",
        "B. 3 giờ",
        "C. 2 giờ",
        "D. 5 giờ"
      ],
      "answer": "A",
      "explanation": "Trong 1 giờ cả hai vòi chảy được: 1/4 + 1/6 = 5/12 bể.\nThời gian để đầy bể là: 1 : 5/12 = 12/5 = 2,4 giờ = 2 giờ 24 phút."
    },
    {
      "id": "ARCH-M-G5-W35-T-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 5,
      "round": "Tuần 35 - Tiết 1",
      "topic": "Ôn tập tổng kết và luyện thi vào 6 CLC Archimedes",
      "text": "[Tuần 35 - Tiết 1] Trọng tâm: Ôn tập tổng kết và luyện thi vào 6 CLC Archimedes. Tính tỉ số phần trăm của 190 và 760:",
      "options": [
        "A. 25%",
        "B. 20%",
        "C. 30%",
        "D. 50%"
      ],
      "answer": "A",
      "explanation": "Tỉ số phần trăm là: (190 : 760) × 100% = 1/4 × 100% = 25%."
    },
    {
      "id": "ARCH-M-G5-W35-T-2",
      "exam": "ARCHIMEDES_MATH",
      "grade": 5,
      "round": "Tuần 35 - Tiết 2",
      "topic": "Ôn tập tổng kết và luyện thi vào 6 CLC Archimedes",
      "text": "[Tuần 35 - Tiết 2] Trọng tâm: Ôn tập tổng kết và luyện thi vào 6 CLC Archimedes. Tính tỉ số phần trăm của 190 và 760:",
      "options": [
        "A. 25%",
        "B. 20%",
        "C. 30%",
        "D. 50%"
      ],
      "answer": "A",
      "explanation": "Tỉ số phần trăm là: (190 : 760) × 100% = 1/4 × 100% = 25%."
    },
    {
      "id": "ARCH-M-G5-W35-T-3",
      "exam": "ARCHIMEDES_MATH",
      "grade": 5,
      "round": "Tuần 35 - Tiết 3",
      "topic": "Ôn tập tổng kết và luyện thi vào 6 CLC Archimedes",
      "text": "[Tuần 35 - Tiết 3] Trọng tâm: Ôn tập tổng kết và luyện thi vào 6 CLC Archimedes. Tính tỉ số phần trăm của 190 và 760:",
      "options": [
        "A. 25%",
        "B. 20%",
        "C. 30%",
        "D. 50%"
      ],
      "answer": "A",
      "explanation": "Tỉ số phần trăm là: (190 : 760) × 100% = 1/4 × 100% = 25%."
    },
    {
      "id": "ARCH-M-G5-W35-PKT-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 5,
      "round": "Tuần 35 - Phiếu cuối tuần",
      "topic": "Ôn tập tổng kết và luyện thi vào 6 CLC Archimedes",
      "text": "[Phiếu cuối tuần 35] Chủ đề: Ôn tập tổng kết và luyện thi vào 6 CLC Archimedes. Một ô tô đi quãng đường dài 540km hết 3 giờ. Vận tốc của ô tô là:",
      "options": [
        "A. 180 km/giờ",
        "B. 175 km/giờ",
        "C. 185 km/giờ",
        "D. 360 km/giờ"
      ],
      "answer": "A",
      "explanation": "Vận tốc ô tô là: v = s : t = 540 : 3 = 180 km/giờ."
    },
    {
      "id": "ARCH-M-G5-W35-TTK-1",
      "exam": "ARCHIMEDES_MATH",
      "grade": 5,
      "round": "Tuần 35 - Bài tập tham khảo",
      "topic": "Ôn tập tổng kết và luyện thi vào 6 CLC Archimedes",
      "text": "[Toán tư duy Archimedes Tuần 35] Vòi thứ nhất chảy một mình trong 4 giờ đầy bể, vòi thứ hai chảy một mình trong 6 giờ đầy bể. Hỏi cả hai vòi cùng chảy vào bể cạn thì sau bao lâu đầy bể?",
      "options": [
        "A. 2,4 giờ (2 giờ 24 phút)",
        "B. 3 giờ",
        "C. 2 giờ",
        "D. 5 giờ"
      ],
      "answer": "A",
      "explanation": "Trong 1 giờ cả hai vòi chảy được: 1/4 + 1/6 = 5/12 bể.\nThời gian để đầy bể là: 1 : 5/12 = 12/5 = 2,4 giờ = 2 giờ 24 phút."
    }
  ]
};

if (typeof window !== 'undefined') { window.ARCHIMEDES_MATH_DB = ARCHIMEDES_MATH_DB; }
if (typeof module !== 'undefined') { module.exports = ARCHIMEDES_MATH_DB; }
