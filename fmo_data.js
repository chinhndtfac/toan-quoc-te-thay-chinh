// BỘ NGÂN HÀNG ĐỀ THI OLYMPIC TOÁN TIẾNG ANH FMO (FERMAT MATHEMATICAL OLYMPIAD)
// KHỐI 4 - ĐỀ THI VÒNG LOẠI & CHUNG KẾT QUỐC GIA (FULL ĐÁP ÁN & HÌNH ẢNH MINH HỌA)
// Bản quyền giáo trình: Ban tổ chức FMO & Thầy Nguyễn Đình Chinh (0941.492.468)

const FMO_DATA_DB = [
  {
    "id": "FMO-G4-DE1-01",
    "exam": "FMO",
    "grade": 4,
    "round": "Đề thi thử Vòng loại FMO G4 - Đề số 1",
    "topic": "Tư duy logic & Hình học",
    "num": 1,
    "text": "Cho quy luật dưới đây, tìm hình thích hợp thay thế dấu hỏi chấm:",
    "image": "images/fmo_g4_de1_q1.png",
    "options": [
      "A. Phương án A",
      "B. Phương án B",
      "C. Phương án C",
      "D. Phương án D",
      "E. Phương án E"
    ],
    "answer": "C",
    "acceptedAnswers": [
      "C"
    ],
    "explanation": "Quy luật: Ở mỗi hàng, hình tiếp theo thu được bằng cách quay hình trước đó 90° ngược chiều kim đồng hồ.\n- Hàng 1: Tam giác chỉ lên (đen bên phải) -> quay 90° chỉ sang trái (đen ở trên) -> quay 90° chỉ xuống (đen bên trái).\n- Hàng 2: Tam giác chỉ sang phải -> quay 90° chỉ lên -> quay 90° chỉ sang trái.\n- Hàng 3: Tam giác chỉ xuống -> quay 90° chỉ sang phải -> quay 90° thì tam giác sẽ chỉ lên trên với nửa bên trái tô đen và nửa bên phải màu trắng.\nĐối chiếu các phương án thì phương án C hoàn toàn chính xác.\nĐáp án: C.",
    "type": "mc",
    "subItems": []
  },
  {
    "id": "FMO-G4-DE1-02",
    "exam": "FMO",
    "grade": 4,
    "round": "Đề thi thử Vòng loại FMO G4 - Đề số 1",
    "topic": "Hình học & Đếm hình",
    "num": 2,
    "text": "Có bao nhiêu hình tam giác trong hình vẽ con chim dưới đây?",
    "image": "images/fmo_g4_de1_q2.png",
    "options": [
      "A. 14",
      "B. 15",
      "C. 16",
      "D. 17",
      "E. 18"
    ],
    "answer": "C",
    "acceptedAnswers": [
      "C",
      "16"
    ],
    "explanation": "Đếm chi tiết các hình tam giác tạo nên con chim:\n- Phần mỏ: 2 hình tam giác.\n- Phần mào và đầu: 3 hình tam giác (2 tam giác chỏm mào và 1 tam giác trán).\n- Vùng mắt vàng: 1 hình tam giác.\n- Phần cổ (nâu nhạt): 1 hình tam giác.\n- Phần ngực & bụng: 4 hình tam giác (1 tam giác ngực, 1 vàng, 1 cam, 1 hồng).\n- Phần cánh (đỏ đậm): 1 hình tam giác.\n- Phần đuôi: 1 hình tam giác dài.\n- Phần hai chân: mỗi chân gồm 1 tam giác cẳng chân và 1 tam giác bàn chân -> 2 × 2 = 4 tam giác.\nTổng số hình tam giác đếm được là 16 hình.\nĐáp án: C (16).",
    "type": "mc",
    "subItems": []
  },
  {
    "id": "FMO-G4-DE1-03",
    "exam": "FMO",
    "grade": 4,
    "round": "Đề thi thử Vòng loại FMO G4 - Đề số 1",
    "topic": "Số học & Dãy số",
    "num": 3,
    "text": "Tìm số tiếp theo của dãy số có quy luật dưới đây:",
    "image": "images/fmo_g4_de1_q3.png",
    "options": [
      "A. 30",
      "B. 32",
      "C. 28",
      "D. 34",
      "E. 36"
    ],
    "answer": "E",
    "acceptedAnswers": [
      "E",
      "36"
    ],
    "explanation": "Xét khoảng cách giữa các số liên tiếp trên toa tàu:\n- 6 - 5 = 1\n- 8 - 6 = 2\n- 12 - 8 = 4\n- 20 - 12 = 8\nQuy luật: Số lượng cộng thêm ở mỗi bước luôn gấp đôi số lượng cộng ở bước trước (1, 2, 4, 8, ...). Số tiếp theo cần cộng thêm là 8 × 2 = 16.\nSố cần tìm điền vào toa dấu ? là: 20 + 16 = 36.\nĐáp án: E (36).",
    "type": "mc",
    "subItems": []
  },
  {
    "id": "FMO-G4-DE1-04",
    "exam": "FMO",
    "grade": 4,
    "round": "Đề thi thử Vòng loại FMO G4 - Đề số 1",
    "topic": "Đại lượng & Đo lường",
    "num": 4,
    "text": "John có hai sợi dây dài 1 m và hai sợi dây dài 3 dm. Hỏi đáp án nào sau đây không thể là tổng chiều dài của các đoạn dây được nối lại?",
    "image": "images/fmo_g4_de1_q4.png",
    "options": [
      "A. 6 dm",
      "B. 7 dm",
      "C. 13 dm",
      "D. 20 dm",
      "E. 23 dm"
    ],
    "answer": "B",
    "acceptedAnswers": [
      "B",
      "7 dm"
    ],
    "explanation": "Đổi đơn vị: 1 m = 10 dm.\nJohn có các đoạn dây có độ dài là: 10 dm, 10 dm, 3 dm, 3 dm.\nXét các khả năng nối dây:\n- Nối 2 đoạn 3 dm: 3 + 3 = 6 dm (Phương án A tạo được).\n- Nối 1 đoạn 10 dm và 1 đoạn 3 dm: 10 + 3 = 13 dm (Phương án C tạo được).\n- Nối 2 đoạn 10 dm: 10 + 10 = 20 dm (Phương án D tạo được).\n- Nối 2 đoạn 10 dm và 1 đoạn 3 dm: 10 + 10 + 3 = 23 dm (Phương án E tạo được).\nDo đó không thể có cách nối nào tạo thành tổng chiều dài là 7 dm.\nĐáp án: B (7 dm).",
    "type": "mc",
    "subItems": []
  },
  {
    "id": "FMO-G4-DE1-05",
    "exam": "FMO",
    "grade": 4,
    "round": "Đề thi thử Vòng loại FMO G4 - Đề số 1",
    "topic": "Bài toán tính tuổi",
    "num": 5,
    "text": "Năm nay, Jack 11 tuổi và Jane 17 tuổi. Khi tuổi của Jane gấp đôi tuổi của Jack năm nay, hỏi lúc đó Jack bao nhiêu tuổi?",
    "image": null,
    "options": [
      "A. 28",
      "B. 22",
      "C. 34",
      "D. 40",
      "E. 16"
    ],
    "answer": "E",
    "acceptedAnswers": [
      "E",
      "16"
    ],
    "explanation": "- Tuổi của Jack năm nay là 11 tuổi.\n- Khi tuổi của Jane gấp đôi tuổi của Jack năm nay, thì lúc đó Jane sẽ là: 11 × 2 = 22 tuổi.\n- Số năm trôi qua kể từ hiện tại đến lúc đó là: 22 - 17 = 5 năm.\n- Khi đó tuổi của Jack sẽ là: 11 + 5 = 16 tuổi.\nĐáp án: E (16).",
    "type": "mc",
    "subItems": []
  },
  {
    "id": "FMO-G4-DE1-06",
    "exam": "FMO",
    "grade": 4,
    "round": "Đề thi thử Vòng loại FMO G4 - Đề số 1",
    "topic": "Hình học không gian",
    "num": 6,
    "text": "Một nhân viên khách sạn xếp những chiếc cặp y hệt chồng lên nhau như hình vẽ dưới đây. Hỏi có ít nhất bao nhiêu chiếc cặp?",
    "image": "images/fmo_g4_de1_q6.png",
    "options": [
      "A. 19",
      "B. 20",
      "C. 21",
      "D. 22",
      "E. 23"
    ],
    "answer": "D",
    "acceptedAnswers": [
      "D",
      "22"
    ],
    "explanation": "Đếm số chiếc cặp theo từng tầng từ trên xuống dưới:\n- Tầng 3 (trên cùng): Có 2 chiếc cặp nhìn thấy rõ.\n- Tầng 2: Có 9 chiếc cặp làm giá đỡ trực tiếp cho tầng trên.\n- Tầng 1 (đáy): Để chống đỡ cho 9 chiếc cặp ở tầng 2 và theo cấu trúc bề mặt đáy thì có ít nhất 11 chiếc cặp.\nTổng số chiếc cặp ít nhất là: 2 + 9 + 11 = 22 chiếc cặp.\nĐáp án: D (22).",
    "type": "mc",
    "subItems": []
  },
  {
    "id": "FMO-G4-DE1-07",
    "exam": "FMO",
    "grade": 4,
    "round": "Đề thi thử Vòng loại FMO G4 - Đề số 1",
    "topic": "Tính ngược từ cuối",
    "num": 7,
    "text": "Một chiếc xe ô tô bắt đầu chuyến đi với một lượng xăng. Vào ngày thứ nhất, họ đổ thêm 25 lít vào bình xăng. Vào ngày thứ hai, họ tốn 10 lít để lái xe, nhưng sau đó dừng lại và đổ thêm 5 lít nữa. Vào ngày thứ ba, họ dùng hết một nửa số xăng còn lại nên trong bình chỉ còn 16 lít. Hỏi lượng xăng ban đầu trong xe ô tô là bao nhiêu lít?",
    "image": null,
    "options": [
      "A. 28",
      "B. 52",
      "C. 12",
      "D. 48",
      "E. 72"
    ],
    "answer": "C",
    "acceptedAnswers": [
      "C",
      "12"
    ],
    "explanation": "Dùng phương pháp tính ngược từ cuối:\n- Ở ngày thứ ba, sau khi dùng hết một nửa số xăng thì còn 16 lít => Số xăng trước khi dùng ngày thứ ba là: 16 × 2 = 32 lít.\n- Ở ngày thứ hai đổ thêm 5 lít thì được 32 lít => Trước khi đổ 5 lít, số xăng là: 32 - 5 = 27 lít.\n- Ngày thứ hai tiêu tốn 10 lít => Trước khi lái xe ngày thứ hai, số xăng là: 27 + 10 = 37 lít.\n- Ngày thứ nhất đổ thêm 25 lít thì được 37 lít => Lượng xăng ban đầu của xe là: 37 - 25 = 12 lít.\nĐáp án: C (12).",
    "type": "mc",
    "subItems": []
  },
  {
    "id": "FMO-G4-DE1-08",
    "exam": "FMO",
    "grade": 4,
    "round": "Đề thi thử Vòng loại FMO G4 - Đề số 1",
    "topic": "Biểu đồ & Thống kê",
    "num": 8,
    "text": "Vào buổi học cuối cùng, cô giáo mua 10 chiếc bánh mỗi loại. Biểu đồ dưới đây biểu diễn số lượng bánh đã được ăn. Hỏi loại bánh nào còn lại nhiều nhất?",
    "image": "images/fmo_g4_de1_q8.png",
    "options": [
      "A. Bánh vàng cắm cờ (Phương án A)",
      "B. Bánh xoắn sôcôla (Phương án B)",
      "C. Bánh kem hồng quả cherry (Phương án C)",
      "D. Bánh kem tim đỏ đế xanh (Phương án D)",
      "E. Bánh kem tim đôi đế đỏ (Phương án E)"
    ],
    "answer": "A",
    "acceptedAnswers": [
      "A"
    ],
    "explanation": "Cô giáo mua 10 chiếc bánh cho mỗi loại. Loại bánh còn lại nhiều nhất chính là loại bánh có số lượng bị ăn ÍT NHẤT:\n- Bánh A (vàng cắm cờ): Cột biểu đồ chỉ mức 2 chiếc bị ăn => Còn lại: 10 - 2 = 8 chiếc.\n- Bánh B: Bị ăn 7 chiếc => Còn lại 3 chiếc.\n- Bánh C: Bị ăn 5 chiếc => Còn lại 5 chiếc.\n- Bánh D: Bị ăn 8 chiếc => Còn lại 2 chiếc.\n- Bánh E: Bị ăn 3 chiếc => Còn lại 7 chiếc.\nVậy loại bánh A còn lại nhiều nhất (8 chiếc).\nĐáp án: A.",
    "type": "mc",
    "subItems": []
  },
  {
    "id": "FMO-G4-DE1-09",
    "exam": "FMO",
    "grade": 4,
    "round": "Đề thi thử Vòng loại FMO G4 - Đề số 1",
    "topic": "Lịch & Thời gian",
    "num": 9,
    "text": "Hôm nay là thứ Bảy, ngày 10 tháng 10. Mark rất hào hứng vì anh ấy đã mua vé cho buổi hòa nhạc vào ngày cuối cùng của tháng này. Hỏi buổi hòa nhạc diễn ra vào thứ mấy trong tuần?",
    "image": null,
    "options": [
      "A. Thứ Hai",
      "B. Thứ Sáu",
      "C. Thứ Năm",
      "D. Chủ nhật",
      "E. Thứ Bảy"
    ],
    "answer": "E",
    "acceptedAnswers": [
      "E",
      "Thứ Bảy",
      "Thu Bay"
    ],
    "explanation": "- Tháng 10 có 31 ngày, do đó ngày cuối cùng của tháng này là ngày 31 tháng 10.\n- Khoảng cách giữa ngày 31 tháng 10 và ngày 10 tháng 10 là: 31 - 10 = 21 ngày.\n- Vì 21 chia hết cho 7 (21 : 7 = 3 tuần tròn), nên ngày 31 tháng 10 có cùng thứ trong tuần với ngày 10 tháng 10.\n- Ngày 10 tháng 10 là thứ Bảy, nên ngày 31 tháng 10 cũng là thứ Bảy.\nĐáp án: E (Thứ Bảy).",
    "type": "mc",
    "subItems": []
  },
  {
    "id": "FMO-G4-DE1-10",
    "exam": "FMO",
    "grade": 4,
    "round": "Đề thi thử Vòng loại FMO G4 - Đề số 1",
    "topic": "Tổ hợp & Phép đếm",
    "num": 10,
    "text": "Amy có 5 thẻ số sau đây (8, 5, 2, 4, 7). Cô ấy muốn ghép 2 tấm thẻ để tạo thành một số lẻ có 2 chữ số. Hỏi cô ấy có thể tạo được bao nhiêu số lẻ khác nhau?",
    "image": "images/fmo_g4_de1_q10.png",
    "options": [
      "A. 12",
      "B. 8",
      "C. 4",
      "D. 6",
      "E. 10"
    ],
    "answer": "B",
    "acceptedAnswers": [
      "B",
      "8"
    ],
    "explanation": "- Để tạo thành số lẻ có 2 chữ số, chữ số hàng đơn vị phải là chữ số lẻ. Trong 5 thẻ {8, 5, 2, 4, 7}, có 2 thẻ mang chữ số lẻ là 5 và 7 => Có 2 cách chọn chữ số hàng đơn vị.\n- Sau khi chọn 1 thẻ làm hàng đơn vị, còn lại 4 tấm thẻ. Bất kỳ thẻ nào trong 4 thẻ này cũng có thể làm chữ số hàng chục (vì không có thẻ số 0) => Có 4 cách chọn chữ số hàng chục.\n- Số lượng số lẻ có 2 chữ số có thể tạo thành là: 4 × 2 = 8 số.\n(Cụ thể: 85, 25, 45, 75 và 87, 57, 27, 47).\nĐáp án: B (8).",
    "type": "mc",
    "subItems": []
  },
  {
    "id": "FMO-G4-DE1-11",
    "exam": "FMO",
    "grade": 4,
    "round": "Đề thi thử Vòng loại FMO G4 - Đề số 1",
    "topic": "Quy luật số học",
    "num": 11,
    "text": "Dựa vào quy luật sau để tìm số thay thế dấu hỏi chấm:",
    "image": "images/fmo_g4_de1_q11.png",
    "options": [
      "A. 49",
      "B. 43",
      "C. 19",
      "D. 95",
      "E. 94"
    ],
    "answer": "A",
    "acceptedAnswers": [
      "A",
      "49"
    ],
    "explanation": "Quan sát các cụm số:\n- Cụm 1: Hai hình tròn là 7 và 3. Tích = 7 × 3 = 21, Tổng = 7 + 3 = 10. Số trong ô vuông = 21 + 10 = 31.\n- Cụm 2: Hai hình tròn là 6 và 10. Tích = 6 × 10 = 60, Tổng = 6 + 10 = 16. Số trong ô vuông = 60 + 16 = 76.\n- Cụm 3: Hai hình tròn là 5 và 8. Tích = 5 × 8 = 40, Tổng = 5 + 8 = 13. Số trong ô vuông = 40 + 13 = 53.\n=> Quy luật: Số ở ô vuông trên = (Tích hai số hình tròn) + (Tổng hai số hình tròn).\nÁp dụng cho cụm có dấu ? với hai số 9 và 4:\nÔ cần điền = (9 × 4) + (9 + 4) = 36 + 13 = 49.\nĐáp án: A (49).",
    "type": "mc",
    "subItems": []
  },
  {
    "id": "FMO-G4-DE1-12",
    "exam": "FMO",
    "grade": 4,
    "round": "Đề thi thử Vòng loại FMO G4 - Đề số 1",
    "topic": "Toán có lời văn & Biểu đồ",
    "num": 12,
    "text": "Tại một hội chợ có năm học sinh bán nước chanh. Số ly nước chanh mỗi học sinh bán được thể hiện trong biểu đồ dưới đây. Mỗi bạn bán 3 ly đầu tiên của mình với giá 1 đô-la mỗi ly. Mỗi ly tiếp theo được bán với giá 2 đô-la. Hỏi các bạn thu được tất cả bao nhiêu đô-la?",
    "image": "images/fmo_g4_de1_q12.png",
    "options": [
      "A. 78",
      "B. 106",
      "C. 68",
      "D. 101",
      "E. 91"
    ],
    "answer": "E",
    "acceptedAnswers": [
      "E",
      "91"
    ],
    "explanation": "Tính số tiền mỗi bạn thu được dựa trên số ly bán được:\n- Ashley bán 10 ly: 3 ly đầu giá 1$ (3$), 7 ly tiếp theo giá 2$ (7 × 2 = 14$) => Tổng: 3 + 14 = 17 đô-la.\n- Brandon bán 15 ly: 3 ly đầu giá 1$ (3$), 12 ly tiếp theo giá 2$ (12 × 2 = 24$) => Tổng: 3 + 24 = 27 đô-la.\n- Conor bán 9 ly: 3 ly đầu giá 1$ (3$), 6 ly tiếp theo giá 2$ (6 × 2 = 12$) => Tổng: 3 + 12 = 15 đô-la.\n- Dexter bán 7 ly: 3 ly đầu giá 1$ (3$), 4 ly tiếp theo giá 2$ (4 × 2 = 8$) => Tổng: 3 + 8 = 11 đô-la.\n- Elena bán 12 ly: 3 ly đầu giá 1$ (3$), 9 ly tiếp theo giá 2$ (9 × 2 = 18$) => Tổng: 3 + 18 = 21 đô-la.\nTổng số tiền tất cả các bạn thu được là: 17 + 27 + 15 + 11 + 21 = 91 đô-la.\nĐáp án: E (91).",
    "type": "mc",
    "subItems": []
  },
  {
    "id": "FMO-G4-DE1-13",
    "exam": "FMO",
    "grade": 4,
    "round": "Đề thi thử Vòng loại FMO G4 - Đề số 1",
    "topic": "Cân thăng bằng & Đại số sơ cấp",
    "num": 13,
    "text": "Dựa vào hai chiếc cân thăng bằng dưới đây, tìm cân nặng của chiếc rương nhẹ hơn.",
    "image": "images/fmo_g4_de1_q13.png",
    "options": [
      "A. 40 kg",
      "B. 32 kg",
      "C. 64 kg",
      "D. 24 kg",
      "E. 16 kg"
    ],
    "answer": "B",
    "acceptedAnswers": [
      "B",
      "32",
      "32 kg"
    ],
    "explanation": "Gọi rương lớn (vàng có khóa) là A và chiếc rương nhỏ hơn (màu nâu sẫm, nhẹ hơn) là B.\n- Cân thứ hai thăng bằng: Rương A = Rương B + 8 kg.\n- Cân thứ nhất thăng bằng: Rương A + Rương B = 72 kg.\nThay A = B + 8 kg vào cân thứ nhất, ta có:\n(B + 8) + B = 72 kg\n2 × B + 8 = 72 kg\n2 × B = 64 kg => B = 32 kg.\n(Rương lớn A nặng: 32 + 8 = 40 kg).\nVậy chiếc rương nhẹ hơn nặng 32 kg.\nĐáp án: B (32 kg).",
    "type": "mc",
    "subItems": []
  },
  {
    "id": "FMO-G4-DE1-14",
    "exam": "FMO",
    "grade": 4,
    "round": "Đề thi thử Vòng loại FMO G4 - Đề số 1",
    "topic": "Hình học ghép hình",
    "num": 14,
    "text": "Donald có 2 mảnh ghép như hình dưới đây. Khi ghép 2 mảnh đó lại, Donald có thể tạo được bao nhiêu hình trong các hình sau đây?",
    "image": "images/fmo_g4_de1_q14.png",
    "options": [
      "A. 0",
      "B. 1",
      "C. 2",
      "D. 3",
      "E. 4"
    ],
    "answer": "D",
    "acceptedAnswers": [
      "D",
      "3"
    ],
    "explanation": "Thử xoay và ghép mảnh màu tím (5 ô vuông) và mảnh màu cam (3 ô vuông hình chữ L) vào 4 hình:\n- Hình 1: Ghép được (mảnh tím ở dưới và trái, mảnh cam ở góc trên phải).\n- Hình 2: Ghép được (xoay mảnh cam ghép vào góc trên trái).\n- Hình 3: Không thể ghép được khớp khít đúng hình dạng hai mảnh ban đầu.\n- Hình 4: Ghép được (mảnh cam ở dưới cùng bên trái, mảnh tím ghép ở giữa và trên).\nVậy Donald có thể tạo được đúng 3 hình.\nĐáp án: D (3).",
    "type": "mc",
    "subItems": []
  },
  {
    "id": "FMO-G4-DE1-15",
    "exam": "FMO",
    "grade": 4,
    "round": "Đề thi thử Vòng loại FMO G4 - Đề số 1",
    "topic": "Chu vi & Diện tích",
    "num": 15,
    "text": "Một người nông dân có một chuồng heo hình vuông với chu vi 36 m. Một ngày, ông quyết định mở rộng chuồng thêm 4 mét về phía bên trái và 3 mét về phía bên phải như hình dưới đây. Tính diện tích của chuồng mới.",
    "image": "images/fmo_g4_de1_q15.png",
    "options": [
      "A. 144 m²",
      "B. 78 m²",
      "C. 96 m²",
      "D. 117 m²",
      "E. 50 m²"
    ],
    "answer": "A",
    "acceptedAnswers": [
      "A",
      "144",
      "144 m2",
      "144 m²"
    ],
    "explanation": "- Cạnh của chuồng heo hình vuông ban đầu là: 36 : 4 = 9 m.\n- Khi mở rộng thêm 4 m bên trái và 3 m bên phải, chiều dài mới của chuồng heo là: 9 + 4 + 3 = 16 m.\n- Chiều rộng của chuồng mới vẫn bằng cạnh ban đầu là 9 m.\n- Diện tích của chuồng mới là: 16 × 9 = 144 m².\nĐáp án: A (144 m²).",
    "type": "mc",
    "subItems": []
  },
  {
    "id": "FMO-G4-DE1-16",
    "exam": "FMO",
    "grade": 4,
    "round": "Đề thi thử Vòng loại FMO G4 - Đề số 1",
    "topic": "Phép tính hình vẽ (Cryptarithm)",
    "num": 16,
    "text": "Tìm giá trị của số còn thiếu thay thế dấu hỏi chấm:",
    "image": "images/fmo_g4_de1_q16.png",
    "options": [
      "A. 6",
      "B. 7",
      "C. 8",
      "D. 9",
      "E. 10"
    ],
    "answer": "C",
    "acceptedAnswers": [
      "C",
      "8"
    ],
    "explanation": "Ký hiệu các hình:\n- Xoắn ốc = A\n- Trái đất = B\n- Sao Thổ = C\nTừ phương trình 3: B + A = C\nThay (A + B) = C vào phương trình 1: (A + B) + C = 12 => C + C = 12 => C (Sao Thổ) = 6.\nThay C = 6 vào phương trình 2: B + 6 + B = 14 => 2 × B = 8 => B (Trái đất) = 4.\nTừ phương trình 3: A (Xoắn ốc) = C - B = 6 - 4 = 2.\nPhương trình cần tìm: A + C = 2 + 6 = 8.\nĐáp án: C (8).",
    "type": "mc",
    "subItems": []
  },
  {
    "id": "FMO-G4-DE1-17",
    "exam": "FMO",
    "grade": 4,
    "round": "Đề thi thử Vòng loại FMO G4 - Đề số 1",
    "topic": "Quy luật dãy số cách đều",
    "num": 17,
    "text": "Dựa vào quy luật dưới đây, hỏi có bao nhiêu củ cà rốt trong hình thứ 25?",
    "image": "images/fmo_g4_de1_q17.png",
    "options": [
      "A. 78",
      "B. 75",
      "C. 80",
      "D. 74",
      "E. 77"
    ],
    "answer": "E",
    "acceptedAnswers": [
      "E",
      "77"
    ],
    "explanation": "Đếm số củ cà rốt ở mỗi hình:\n- Hình 1 có: 5 củ cà rốt.\n- Hình 2 có: 8 củ cà rốt.\n- Hình 3 có: 11 củ cà rốt.\n- Hình 4 có: 14 củ cà rốt.\nTa có dãy số cách đều với số hạng đầu là 5 và khoảng cách giữa hai số liên tiếp là 3 đơn vị.\nSố củ cà rốt ở hình thứ 25 là: 5 + (25 - 1) × 3 = 5 + 24 × 3 = 5 + 72 = 77 củ cà rốt.\nĐáp án: E (77).",
    "type": "mc",
    "subItems": []
  },
  {
    "id": "FMO-G4-DE1-18",
    "exam": "FMO",
    "grade": 4,
    "round": "Đề thi thử Vòng loại FMO G4 - Đề số 1",
    "topic": "Chu vi & Diện tích",
    "num": 18,
    "text": "Một mảnh vải hình chữ nhật được cắt thành hai hình vuông, mỗi hình có diện tích là 64 dm² và một hình chữ nhật có diện tích là 48 dm² (minh họa như hình vẽ). Tìm chu vi của mảnh vải ban đầu.",
    "image": "images/fmo_g4_de1_q18.png",
    "options": [
      "A. 176 dm",
      "B. 54 dm",
      "C. 60 dm",
      "D. 102 dm",
      "E. 92 dm"
    ],
    "answer": "B",
    "acceptedAnswers": [
      "B",
      "54",
      "54 dm"
    ],
    "explanation": "- Cạnh của mỗi hình vuông có diện tích 64 dm² là 8 dm (vì 8 × 8 = 64).\n- Hai hình vuông nằm kề nhau trên chiều dài mảnh vải, nên chiều dài của mảnh vải là: 8 + 8 = 16 dm.\n- Hình chữ nhật bên dưới có chiều dài bằng chiều dài mảnh vải là 16 dm và diện tích là 48 dm² => Chiều rộng của phần hình chữ nhật này là: 48 : 16 = 3 dm.\n- Chiều rộng ban đầu của mảnh vải là: 8 + 3 = 11 dm.\n- Chu vi của mảnh vải ban đầu là: (16 + 11) × 2 = 54 dm.\nĐáp án: B (54 dm).",
    "type": "mc",
    "subItems": []
  },
  {
    "id": "FMO-G4-DE1-19",
    "exam": "FMO",
    "grade": 4,
    "round": "Đề thi thử Vòng loại FMO G4 - Đề số 1",
    "topic": "Bài toán thời gian & Ca làm việc",
    "num": 19,
    "text": "Một nhà máy có 5 ca làm việc, mỗi ca kéo dài 90 phút. Công nhân được nghỉ giải lao 35 phút giữa 2 ca liên tiếp. Biết rằng ca làm việc cuối cùng kết thúc lúc 17:30, hỏi ca đầu tiên bắt đầu lúc mấy giờ?",
    "image": null,
    "options": [
      "A. 08:40",
      "B. 07:05",
      "C. 07:20",
      "D. 08:05",
      "E. 07:40"
    ],
    "answer": "E",
    "acceptedAnswers": [
      "E",
      "07:40"
    ],
    "explanation": "- Tổng thời gian làm việc của 5 ca là: 5 × 90 = 450 phút.\n- Giữa 5 ca làm việc có 4 lần nghỉ giải lao, tổng thời gian nghỉ là: 4 × 35 = 140 phút.\n- Tổng thời gian từ khi bắt đầu ca 1 đến khi kết thúc ca 5 là: 450 + 140 = 590 phút.\n- Đổi 590 phút = 9 giờ 50 phút.\n- Ca cuối cùng kết thúc lúc 17:30. Tính lùi lại 9 giờ 50 phút:\n  + 17 giờ 30 phút - 9 giờ = 8 giờ 30 phút.\n  + 8 giờ 30 phút - 50 phút = 7 giờ 40 phút (07:40).\nVậy ca làm việc đầu tiên bắt đầu lúc 07:40.\nĐáp án: E (07:40).",
    "type": "mc",
    "subItems": []
  },
  {
    "id": "FMO-G4-DE1-20",
    "exam": "FMO",
    "grade": 4,
    "round": "Đề thi thử Vòng loại FMO G4 - Đề số 1",
    "topic": "Suy luận logic & Vị trí",
    "num": 20,
    "text": "Ryan muốn sắp xếp sáu món đồ chơi bao gồm một chú gấu bông, một chiếc ô tô, một con búp bê, một con vịt, một quả bóng, một chiếc máy bay trên kệ trưng bày 6 tầng (từ tầng 1st đến tầng 6th) như hình vẽ. Biết rằng:\n• Gấu bông là món đồ chơi thứ 3 phía trên con vịt. (1)\n• Ô tô là món đồ chơi thứ 3 phía trên máy bay. (2)\n• Con vịt nằm ở vị trí trên cùng hoặc dưới cùng của kệ. (3)\n• Máy bay nằm giữa ô tô và quả bóng. (4)\nHỏi Ryan cần đặt con búp bê ở tầng nào?",
    "image": "images/fmo_g4_de1_q20.png",
    "options": [
      "A. Tầng 1 (1st)",
      "B. Tầng 2 (2nd)",
      "C. Tầng 4 (4th)",
      "D. Tầng 5 (5th)",
      "E. Tầng 6 (6th)"
    ],
    "answer": "D",
    "acceptedAnswers": [
      "D",
      "5",
      "5th",
      "Tầng 5",
      "Tang 5"
    ],
    "explanation": "Phân tích các dữ kiện:\n- Từ (1) và (3): Con vịt không thể ở tầng 6 vì gấu bông ở trên con vịt. Do đó con vịt bắt buộc ở tầng 1 (1st).\n  => Gấu bông ở tầng 1 + 3 = tầng 4 (4th).\n- Từ (2): Ô tô cách máy bay 3 tầng lên phía trên, nên các cặp vị trí có thể là: máy bay tầng 2 - ô tô tầng 5, hoặc máy bay tầng 3 - ô tô tầng 6.\n- Từ (4): Máy bay nằm giữa ô tô và quả bóng. Nếu máy bay ở tầng 2 thì quả bóng phải ở tầng 1, nhưng tầng 1 đã là con vịt (mâu thuẫn). Do đó máy bay phải ở tầng 3 (3rd), ô tô ở tầng 6 (6th), và quả bóng ở tầng 2 (2nd).\n- Các tầng đã có món đồ chơi: Tầng 1 (Vịt), Tầng 2 (Bóng), Tầng 3 (Máy bay), Tầng 4 (Gấu bông), Tầng 6 (Ô tô).\n=> Vị trí duy nhất còn lại cho con búp bê là Tầng 5 (5th).\nĐáp án: D (Tầng 5).",
    "type": "mc",
    "subItems": []
  },
  {
    "id": "FMO-G4-DE1-21",
    "exam": "FMO",
    "grade": 4,
    "round": "Đề thi thử Vòng loại FMO G4 - Đề số 1",
    "topic": "Tối ưu hóa chi phí (Điền đáp số)",
    "num": 21,
    "text": "Một cửa hàng chỉ bán hai loại hộp giấy như sau: Hộp nhỏ chứa 100 tờ giấy ăn có giá 4 đô-la; Hộp lớn chứa 180 tờ giấy ăn có giá 6 đô-la. John cần chuẩn bị ít nhất 1000 tờ giấy ăn cho bữa tiệc của mình. Hỏi giá tiền thấp nhất anh ấy phải trả là bao nhiêu đô-la?",
    "image": "images/fmo_g4_de1_q21.png",
    "options": [],
    "answer": "34",
    "acceptedAnswers": [
      "34",
      "34 đô-la",
      "34$",
      "34 dola"
    ],
    "explanation": "So sánh hiệu quả chi phí của hai loại hộp:\n- Hộp nhỏ: 100 tờ giá 4$ => 1$ mua được 100 : 4 = 25 tờ giấy.\n- Hộp lớn: 180 tờ giá 6$ => 1$ mua được 180 : 6 = 30 tờ giấy.\nVì hộp lớn rẻ hơn đáng kể trên mỗi tờ giấy, ta ưu tiên mua càng nhiều hộp lớn càng tốt:\n- TH1: Mua toàn hộp lớn: Cần mua 1000 : 180 = 5,55 => phải mua 6 hộp lớn (1080 tờ). Chi phí: 6 × 6$ = 36 đô-la.\n- TH2: Mua 5 hộp lớn: Lượng giấy có được = 5 × 180 = 900 tờ. Còn thiếu: 1000 - 900 = 100 tờ. Mua thêm đúng 1 hộp nhỏ (100 tờ). Tổng chi phí: 5 × 6$ + 1 × 4$ = 30 + 4 = 34 đô-la.\n- TH3: Mua 4 hộp lớn: Lượng giấy có được = 4 × 180 = 720 tờ. Còn thiếu 280 tờ => Cần 3 hộp nhỏ (300 tờ). Tổng chi phí: 4 × 6$ + 3 × 4$ = 24 + 12 = 36 đô-la.\nSo sánh các trường hợp, chi phí thấp nhất là 34 đô-la (khi mua 5 hộp lớn và 1 hộp nhỏ).\nĐáp số: 34.",
    "type": "fill",
    "subItems": []
  },
  {
    "id": "FMO-G4-DE02-01",
    "exam": "FMO",
    "grade": 4,
    "round": "Đề thi thử Vòng loại FMO G4 - Đề số 2",
    "topic": "Quy luật dãy số",
    "num": 1,
    "text": "Tìm số tiếp theo của dãy số có quy luật dưới đây:\n\n14, 1, 17, 3, 20, 5, 23, 7, ......",
    "image": null,
    "options": [
      "A) 26",
      "B) 9",
      "C) 24",
      "D) 8",
      "E) 25"
    ],
    "answer": "A",
    "acceptedAnswers": [
      "A",
      "26"
    ],
    "explanation": "Dãy số được tạo bởi 2 dãy số đan xen kẽ nhau:\n- Dãy vị trí lẻ: 14, 17, 20, 23, ... (mỗi số đứng sau bằng số đứng trước cộng thêm 3).\n- Dãy vị trí chẵn: 1, 3, 5, 7, ... (mỗi số đứng sau bằng số đứng trước cộng thêm 2).\nSố tiếp theo cần điền ở vị trí thứ 9 (vị trí lẻ), thuộc dãy số thứ nhất:\n23 + 3 = 26.\nĐáp án: A) 26.",
    "type": "mc",
    "subItems": []
  },
  {
    "id": "FMO-G4-DE02-02",
    "exam": "FMO",
    "grade": 4,
    "round": "Đề thi thử Vòng loại FMO G4 - Đề số 2",
    "topic": "Tư duy logic hình ảnh",
    "num": 2,
    "text": "Cho quy luật dưới đây, tìm hình thích hợp thay thế dấu hỏi chấm:",
    "image": "images/fmo_g4_de2_q2.png",
    "options": [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    "answer": "E",
    "acceptedAnswers": [
      "E"
    ],
    "explanation": "Quan sát quy luật biến đổi của các hình theo từng hàng và cột, hình phù hợp nhất thay thế cho dấu ? là hình E.\nĐáp án: E.",
    "type": "mc",
    "subItems": []
  },
  {
    "id": "FMO-G4-DE02-03",
    "exam": "FMO",
    "grade": 4,
    "round": "Đề thi thử Vòng loại FMO G4 - Đề số 2",
    "topic": "Tổ hợp và số học",
    "num": 3,
    "text": "Chun buộc tóc được bán theo một bộ 3 cái hoặc một bộ 5 cái. Lisa muốn mua một số chun buộc tóc. Hỏi đáp án nào sau đây KHÔNG THỂ là tổng số chun buộc tóc mà cô ấy có thể mua được?",
    "image": "images/fmo_g4_de2_q3.png",
    "options": [
      "A) 9",
      "B) 10",
      "C) 6",
      "D) 7",
      "E) 8"
    ],
    "answer": "D",
    "acceptedAnswers": [
      "D",
      "7"
    ],
    "explanation": "Tổng số chun buộc tóc Lisa có thể mua có dạng 3a + 5b (với a, b là các số tự nhiên không âm):\n- Với 6: 3 × 2 + 5 × 0 = 6 (mua 2 bộ 3)\n- Với 8: 3 × 1 + 5 × 1 = 8 (mua 1 bộ 3 và 1 bộ 5)\n- Với 9: 3 × 3 + 5 × 0 = 9 (mua 3 bộ 3)\n- Với 10: 3 × 0 + 5 × 2 = 10 (mua 2 bộ 5)\n- Với 7: không có cặp số tự nhiên (a, b) nào thỏa mãn 3a + 5b = 7.\nDo đó số chun buộc tóc không thể mua được là 7.\nĐáp án: D) 7.",
    "type": "mc",
    "subItems": []
  },
  {
    "id": "FMO-G4-DE02-04",
    "exam": "FMO",
    "grade": 4,
    "round": "Đề thi thử Vòng loại FMO G4 - Đề số 2",
    "topic": "Phương pháp tính ngược từ cuối",
    "num": 4,
    "text": "Lúc đầu, có một số thỏ trong sở thú. Trong tháng đầu tiên, có 12 chú thỏ con được sinh ra. Trong tháng thứ hai, có thêm 4 chú thỏ con được sinh ra nhưng có 3 chú thỏ trốn thoát. Trong tháng thứ ba, họ chuyển một nửa số thỏ sang nơi khác. Lúc này, trong sở thú còn lại 15 con thỏ. Hỏi lúc đầu sở thú có bao nhiêu con thỏ?",
    "image": null,
    "options": [
      "A) 17",
      "B) 41",
      "C) 43",
      "D) 49",
      "E) 11"
    ],
    "answer": "A",
    "acceptedAnswers": [
      "A",
      "17"
    ],
    "explanation": "Áp dụng phương pháp tính ngược từ cuối:\n- Ở tháng thứ ba chuyển một nửa số thỏ đi thì còn lại 15 con, vậy số thỏ trước khi chuyển là: 15 × 2 = 30 (con).\n- Ở tháng thứ hai có 4 con sinh ra và 3 con trốn thoát (tăng thêm 4 – 3 = 1 con), vậy số thỏ trước tháng thứ hai là: 30 – 4 + 3 = 29 (con).\n- Ở tháng đầu tiên có 12 con sinh ra, vậy số thỏ ban đầu là: 29 – 12 = 17 (con).\nĐáp án: A) 17 con thỏ.",
    "type": "mc",
    "subItems": []
  },
  {
    "id": "FMO-G4-DE02-05",
    "exam": "FMO",
    "grade": 4,
    "round": "Đề thi thử Vòng loại FMO G4 - Đề số 2",
    "topic": "Đếm hình học",
    "num": 5,
    "text": "Có bao nhiêu hình tam giác trong hình vẽ cầu trượt dưới đây?",
    "image": "images/fmo_g4_de2_q5.png",
    "options": [
      "A) 11",
      "B) 12",
      "C) 13",
      "D) 14",
      "E) 15"
    ],
    "answer": "C",
    "acceptedAnswers": [
      "C",
      "13"
    ],
    "explanation": "Đếm lần lượt từng loại hình tam giác:\n- Tam giác đơn (ghép từ 1 mảnh): 9 hình tam giác nhỏ.\n- Tam giác ghép từ 2 mảnh: 3 hình.\n- Tam giác lớn bao quanh: 1 hình.\nTổng cộng có: 9 + 3 + 1 = 13 hình tam giác.\nĐáp án: C) 13.",
    "type": "mc",
    "subItems": []
  },
  {
    "id": "FMO-G4-DE02-06",
    "exam": "FMO",
    "grade": 4,
    "round": "Đề thi thử Vòng loại FMO G4 - Đề số 2",
    "topic": "Hình học không gian",
    "num": 6,
    "text": "Aiden xếp các khối lập phương y hệt chồng lên nhau để được hình dưới đây. Hỏi anh ấy có thể nhìn thấy ít nhất bao nhiêu mặt hình vuông từ đằng trước?",
    "image": "images/fmo_g4_de2_q6.png",
    "options": [
      "A) 7",
      "B) 8",
      "C) 9",
      "D) 10",
      "E) 11"
    ],
    "answer": "E",
    "acceptedAnswers": [
      "E",
      "11"
    ],
    "explanation": "Quan sát hình chiếu đứng từ phía trước (front view):\nĐếm số cột và chiều cao các cột khối lập phương nhìn thấy từ phía trước:\nTổng số mặt hình vuông nhìn thấy từ phía trước là 11 mặt.\nĐáp án: E) 11.",
    "type": "mc",
    "subItems": []
  },
  {
    "id": "FMO-G4-DE02-07",
    "exam": "FMO",
    "grade": 4,
    "round": "Đề thi thử Vòng loại FMO G4 - Đề số 2",
    "topic": "Cấu tạo số",
    "num": 7,
    "text": "Miley viết tất cả các số lẻ có 2 chữ số mà tổng các chữ số bằng 12. Hỏi Miley có thể viết được nhiều nhất bao nhiêu số như vậy?",
    "image": null,
    "options": [
      "A) 5",
      "B) 3",
      "C) 7",
      "D) 4",
      "E) 6"
    ],
    "answer": "D",
    "acceptedAnswers": [
      "D",
      "4"
    ],
    "explanation": "Gọi số có hai chữ số là ab (a khác 0, a + b = 12).\nVì số cần tìm là số lẻ nên chữ số hàng đơn vị b phải là số lẻ: b ∈ {1; 3; 5; 7; 9}.\n- Nếu b = 9 thì a = 12 – 9 = 3 (số 39 - thỏa mãn)\n- Nếu b = 7 thì a = 12 – 7 = 5 (số 57 - thỏa mãn)\n- Nếu b = 5 thì a = 12 – 5 = 7 (số 75 - thỏa mãn)\n- Nếu b = 3 thì a = 12 – 3 = 9 (số 93 - thỏa mãn)\n- Nếu b = 1 thì a = 12 – 1 = 11 (loại vì a là chữ số ≤ 9)\nVậy có tất cả 4 số thỏa mãn là: 39, 57, 75, 93.\nĐáp án: D) 4.",
    "type": "mc",
    "subItems": []
  },
  {
    "id": "FMO-G4-DE02-08",
    "exam": "FMO",
    "grade": 4,
    "round": "Đề thi thử Vòng loại FMO G4 - Đề số 2",
    "topic": "Định nghĩa phép toán mới",
    "num": 8,
    "text": "Dựa vào quy luật sau để tìm kết quả của phép tính cuối cùng:",
    "image": "images/fmo_g4_de2_q8.png",
    "options": [
      "A) 6",
      "B) 7",
      "C) 8",
      "D) 9",
      "E) 10"
    ],
    "answer": "A",
    "acceptedAnswers": [
      "A",
      "6"
    ],
    "explanation": "Phân tích giá trị của từng biểu tượng trong hình:\nSau khi giải các hệ phương trình hình vẽ, ta tìm được giá trị của phép tính cuối cùng bằng 6.\nĐáp án: A) 6.",
    "type": "mc",
    "subItems": []
  },
  {
    "id": "FMO-G4-DE02-09",
    "exam": "FMO",
    "grade": 4,
    "round": "Đề thi thử Vòng loại FMO G4 - Đề số 2",
    "topic": "Lịch và thời gian",
    "num": 9,
    "text": "Hôm nay là thứ Hai, ngày 4 tháng 5. Anna dự kiến đi du lịch cùng gia đình vào Tết thiếu nhi, ngày 1 tháng 6. Hỏi chuyến đi đó rơi vào thứ mấy trong tuần?",
    "image": null,
    "options": [
      "A) Thứ Sáu",
      "B) Thứ Bảy",
      "C) Chủ Nhật",
      "D) Thứ Hai",
      "E) Thứ Ba"
    ],
    "answer": "D",
    "acceptedAnswers": [
      "D",
      "Thứ Hai",
      "Thu Hai"
    ],
    "explanation": "Tháng 5 có 31 ngày.\nKhoảng thời gian từ ngày 4 tháng 5 đến ngày 1 tháng 6 gồm số ngày là:\n(31 – 4) + 1 = 28 (ngày).\nVì 28 chia hết cho 7 (28 : 7 = 4 tuần đúng) nên ngày 1 tháng 6 có cùng thứ trong tuần với ngày 4 tháng 5, tức là Thứ Hai.\nĐáp án: D) Thứ Hai.",
    "type": "mc",
    "subItems": []
  },
  {
    "id": "FMO-G4-DE02-10",
    "exam": "FMO",
    "grade": 4,
    "round": "Đề thi thử Vòng loại FMO G4 - Đề số 2",
    "topic": "Biểu đồ tranh",
    "num": 10,
    "text": "Biểu đồ dưới đây thể hiện món ăn yêu thích của tất cả học sinh trong lớp. Biết rằng có 12 bạn thích gà rán nhất, hỏi có bao nhiêu bạn thích ăn mì ramen nhất?",
    "image": "images/fmo_g4_de2_q10.png",
    "options": [
      "A) 6",
      "B) 9",
      "C) 10",
      "D) 12",
      "E) 15"
    ],
    "answer": "E",
    "acceptedAnswers": [
      "E",
      "15"
    ],
    "explanation": "Trên biểu đồ, gà rán được biểu thị bởi 4 biểu tượng tương ứng với 12 bạn học sinh.\nDo đó mỗi biểu tượng ứng với: 12 : 4 = 3 (học sinh).\nMón mì ramen được biểu thị bởi 5 biểu tượng, nên số bạn thích ăn mì ramen nhất là:\n5 × 3 = 15 (học sinh).\nĐáp án: E) 15.",
    "type": "mc",
    "subItems": []
  },
  {
    "id": "FMO-G4-DE02-11",
    "exam": "FMO",
    "grade": 4,
    "round": "Đề thi thử Vòng loại FMO G4 - Đề số 2",
    "topic": "Dãy số cách đều",
    "num": 11,
    "text": "Vào mùa hè, Adrian lên kế hoạch giảm cân bằng cách chạy bộ mỗi ngày. Vào ngày đầu tiên, anh ấy chạy được 500 m. Cứ sau mỗi ngày, anh ấy lại chạy thêm 300 m so với ngày hôm trước. Hỏi vào ngày thứ 25, anh ấy chạy được bao nhiêu mét?",
    "image": null,
    "options": [
      "A) 7400 m",
      "B) 8000 m",
      "C) 7700 m",
      "D) 8300 m",
      "E) 7500 m"
    ],
    "answer": "C",
    "acceptedAnswers": [
      "C",
      "7700",
      "7700m"
    ],
    "explanation": "Quãng đường chạy mỗi ngày lập thành dãy số cách đều với số hạng đầu là 500 và khoảng cách là 300:\nQuãng đường chạy trong ngày thứ 25 là:\n500 + (25 – 1) × 300 = 500 + 24 × 300 = 500 + 7200 = 7700 (m).\nĐáp án: C) 7700 m.",
    "type": "mc",
    "subItems": []
  },
  {
    "id": "FMO-G4-DE02-12",
    "exam": "FMO",
    "grade": 4,
    "round": "Đề thi thử Vòng loại FMO G4 - Đề số 2",
    "topic": "Đọc biểu đồ cột",
    "num": 12,
    "text": "Số sách được quyên góp bởi 5 học sinh được ghi lại trong biểu đồ dưới đây. Mỗi bạn quyên góp nhiều hơn 8 quyển sách được tặng 3 chiếc bút. Hỏi các bạn nhận được tất cả bao nhiêu chiếc bút?",
    "image": "images/fmo_g4_de2_q12.png",
    "options": [
      "A) 3",
      "B) 6",
      "C) 9",
      "D) 12",
      "E) 15"
    ],
    "answer": "B",
    "acceptedAnswers": [
      "B",
      "6"
    ],
    "explanation": "Quan sát biểu đồ, số bạn quyên góp nhiều hơn 8 quyển sách là 2 bạn.\nMỗi bạn nhận được 3 chiếc bút, do đó tổng số bút các bạn nhận được là:\n2 × 3 = 6 (chiếc bút).\nĐáp án: B) 6.",
    "type": "mc",
    "subItems": []
  },
  {
    "id": "FMO-G4-DE02-13",
    "exam": "FMO",
    "grade": 4,
    "round": "Đề thi thử Vòng loại FMO G4 - Đề số 2",
    "topic": "Toán tính tuổi",
    "num": 13,
    "text": "Andy nói rằng: “7 năm nữa, em sẽ bằng tuổi anh bây giờ.” Oliver nói rằng: “Đúng vậy. Và tổng số tuổi hiện tại của anh em mình là 33 tuổi.” Dựa vào cuộc trò chuyện trên, hỏi tuổi hiện tại của Andy là bao nhiêu?",
    "image": null,
    "options": [
      "A) 13",
      "B) 20",
      "C) 14",
      "D) 19",
      "E) 12"
    ],
    "answer": "A",
    "acceptedAnswers": [
      "A",
      "13"
    ],
    "explanation": "Từ câu nói của Andy, Oliver hơn Andy 7 tuổi (hiệu số tuổi là 7).\nTổng số tuổi hiện tại của hai anh em là 33 tuổi.\nTuổi hiện tại của Andy (số bé) là:\n(33 – 7) : 2 = 13 (tuổi).\nTuổi của Oliver là: 13 + 7 = 20 (tuổi).\nĐáp án: A) 13 tuổi.",
    "type": "mc",
    "subItems": []
  },
  {
    "id": "FMO-G4-DE02-14",
    "exam": "FMO",
    "grade": 4,
    "round": "Đề thi thử Vòng loại FMO G4 - Đề số 2",
    "topic": "Chu vi hình học",
    "num": 14,
    "text": "Cho các viên gạch hình vuông giống nhau đều có diện tích 4 m². Chúng được lát xung quanh một bể bơi hình chữ nhật như hình dưới đây. Hãy tìm chu vi của bể bơi.",
    "image": "images/fmo_g4_de2_q14.png",
    "options": [
      "A) 24 m",
      "B) 32 m",
      "C) 20 m",
      "D) 16 m",
      "E) 28 m"
    ],
    "answer": "E",
    "acceptedAnswers": [
      "E",
      "28",
      "28m"
    ],
    "explanation": "Vì diện tích mỗi viên gạch hình vuông là 4 m² nên cạnh mỗi viên gạch là 2 m (do 2 × 2 = 4).\nQuan sát hình vẽ:\n- Chiều dài của bể bơi chiếm 5 cạnh viên gạch: 5 × 2 = 10 (m).\n- Chiều rộng của bể bơi chiếm 2 cạnh viên gạch: 2 × 2 = 4 (m).\nChu vi của bể bơi hình chữ nhật là:\n(10 + 4) × 2 = 28 (m).\nĐáp án: E) 28 m.",
    "type": "mc",
    "subItems": []
  },
  {
    "id": "FMO-G4-DE02-15",
    "exam": "FMO",
    "grade": 4,
    "round": "Đề thi thử Vòng loại FMO G4 - Đề số 2",
    "topic": "Dãy hình có quy luật",
    "num": 15,
    "text": "Dựa vào quy luật dưới đây, hỏi có bao nhiêu cái cây trong hình thứ 19?",
    "image": "images/fmo_g4_de2_q15.png",
    "options": [
      "A) 72",
      "B) 76",
      "C) 80",
      "D) 84",
      "E) 100"
    ],
    "answer": "B",
    "acceptedAnswers": [
      "B",
      "76"
    ],
    "explanation": "Quan sát số cây trong các hình:\n- Hình 1 có 4 cây: 4 × 1 = 4\n- Hình 2 có 8 cây: 4 × 2 = 8\n- Hình 3 có 12 cây: 4 × 3 = 12\n- Hình 4 có 16 cây: 4 × 4 = 16\nQuy luật: Số cây trong hình thứ n bằng 4 × n.\nVậy số cây trong hình thứ 19 là:\n4 × 19 = 76 (cây).\nĐáp án: B) 76.",
    "type": "mc",
    "subItems": []
  },
  {
    "id": "FMO-G4-DE02-16",
    "exam": "FMO",
    "grade": 4,
    "round": "Đề thi thử Vòng loại FMO G4 - Đề số 2",
    "topic": "Diện tích và chu vi hình học",
    "num": 16,
    "text": "Cô Eli trồng hoa trong một khu vườn hình chữ nhật với chu vi 200 m. Cô ấy chia khu vườn thành một mảnh hình vuông ở giữa để trồng hoa hồng và hai mảnh hình chữ nhật giống nhau để trồng hoa cúc. Biết rằng chu vi của mảnh đất trồng hoa hồng là 120 m, tìm tổng diện tích của các mảnh đất trồng hoa cúc.",
    "image": "images/fmo_g4_de2_q16.png",
    "options": [
      "A) 1200 m²",
      "B) 600 m²",
      "C) 150 m²",
      "D) 300 m²",
      "E) 4200 m²"
    ],
    "answer": "A",
    "acceptedAnswers": [
      "A",
      "1200",
      "1200 m²",
      "1200m2"
    ],
    "explanation": "- Mảnh đất trồng hoa hồng là hình vuông có chu vi 120 m, nên cạnh hình vuông là: 120 : 4 = 30 (m).\nDo đó, chiều rộng của khu vườn là 30 m.\n- Nửa chu vi của khu vườn là: 200 : 2 = 100 (m).\nChiều dài của khu vườn là: 100 – 30 = 70 (m).\n- Chiều dài khu vườn gồm 1 cạnh hình vuông ở giữa và chiều rộng của 2 mảnh hoa cúc ở hai bên:\nTổng chiều rộng của 2 mảnh đất trồng hoa cúc là: 70 – 30 = 40 (m).\n- Cả hai mảnh trồng hoa cúc đều có chiều dài bằng cạnh hình vuông (30 m).\nTổng diện tích của các mảnh đất trồng hoa cúc là:\n30 × 40 = 1200 (m²).\nĐáp án: A) 1200 m².",
    "type": "mc",
    "subItems": []
  },
  {
    "id": "FMO-G4-DE02-17",
    "exam": "FMO",
    "grade": 4,
    "round": "Đề thi thử Vòng loại FMO G4 - Đề số 2",
    "topic": "Toán que tính và tỉ lệ",
    "num": 17,
    "text": "Để tạo ra một hình vuông, Amy cần 8 que tính màu đỏ. Sau đó, cô ấy dùng thêm 3 que tính màu xanh lá để tạo ra một hình tam giác bên trong mỗi hình vuông. Biết rằng Amy đã dùng tổng cộng 264 que tính, tìm hiệu của số que tính màu đỏ và số que tính màu xanh lá.",
    "image": "images/fmo_g4_de2_q17.png",
    "options": [
      "A) 100",
      "B) 120",
      "C) 125",
      "D) 110",
      "E) 115"
    ],
    "answer": "B",
    "acceptedAnswers": [
      "B",
      "120"
    ],
    "explanation": "Mỗi hình hoàn chỉnh gồm 1 hình vuông và 1 tam giác bên trong cần số que tính là:\n8 + 3 = 11 (que tính).\nSố hình Amy đã ghép được là:\n264 : 11 = 24 (hình).\nSố que tính màu đỏ đã dùng là: 24 × 8 = 192 (que).\nSố que tính màu xanh lá đã dùng là: 24 × 3 = 72 (que).\nHiệu giữa số que tính màu đỏ và màu xanh lá là:\n192 – 72 = 120 (que) (hoặc 24 × (8 – 3) = 24 × 5 = 120 que).\nĐáp án: B) 120.",
    "type": "mc",
    "subItems": []
  },
  {
    "id": "FMO-G4-DE02-18",
    "exam": "FMO",
    "grade": 4,
    "round": "Đề thi thử Vòng loại FMO G4 - Đề số 2",
    "topic": "Suy luận logic vị trí xếp hàng",
    "num": 18,
    "text": "6 người bạn gồm A, B, C, D, E, F xếp thành một hàng dọc như hình dưới đây. A là người thứ tư đứng trước D và A đứng cạnh B. E là người duy nhất ở giữa F và C. Hỏi ai là người đứng ở đầu hàng?",
    "image": "images/fmo_g4_de2_q18.png",
    "options": [
      "A) Bạn A",
      "B) Bạn B",
      "C) Bạn C",
      "D) Bạn D",
      "E) Bạn E"
    ],
    "answer": "B",
    "acceptedAnswers": [
      "B",
      "Bạn B",
      "Ban B"
    ],
    "explanation": "Đánh số vị trí từ 1 (đầu hàng) đến 6 (cuối hàng):\n- A là người thứ 4 đứng trước D: khoảng cách giữa A và D là 4 vị trí, nên chỉ có thể là A ở vị trí 2 và D ở vị trí 6 (vị trí 2 + 4 = 6).\n- A đứng cạnh B: vì vị trí 2 là A nên B chỉ có thể ở vị trí 1 hoặc vị trí 3.\n- E là người duy nhất ở giữa F và C, nghĩa là bộ ba (F, E, C) hoặc (C, E, F) phải đứng liền nhau chiếm 3 vị trí liên tiếp. Ba vị trí liên tiếp trống duy nhất là 3, 4, 5!\n- Do đó, B phải đứng ở vị trí 1 (đầu hàng).\nThứ tự hoàn chỉnh của hàng là: B (1), A (2), F/C (3), E (4), C/F (5), D (6).\nVậy người đứng ở đầu hàng là Bạn B.\nĐáp án: B) Bạn B.",
    "type": "mc",
    "subItems": []
  },
  {
    "id": "FMO-G4-DE02-19",
    "exam": "FMO",
    "grade": 4,
    "round": "Đề thi thử Vòng loại FMO G4 - Đề số 2",
    "topic": "Toán thời gian thực tế",
    "num": 19,
    "text": "Một ngày có 8 tiết học và mỗi tiết dài 45 phút. Giữa hai tiết học liên tiếp có một khoảng nghỉ dài 10 phút. Tuy nhiên, giữa tiết học thứ 4 và tiết học thứ 5, học sinh được nghỉ ăn trưa trong 1 tiếng. Biết rằng trường bắt đầu học lúc 8 giờ sáng, hỏi trường tan học lúc mấy giờ?",
    "image": null,
    "options": [
      "A) 15:10",
      "B) 17:00",
      "C) 16:20",
      "D) 16:00",
      "E) 16:10"
    ],
    "answer": "D",
    "acceptedAnswers": [
      "D",
      "16:00",
      "16h",
      "16 giờ"
    ],
    "explanation": "- Tổng thời gian của 8 tiết học là: 8 × 45 = 360 (phút) = 6 giờ.\n- Giữa 8 tiết học có 7 khoảng nghỉ:\n  + 1 khoảng nghỉ trưa (giữa tiết 4 và tiết 5) dài 1 giờ = 60 phút.\n  + 6 khoảng nghỉ ngắn còn lại dài: 6 × 10 = 60 phút = 1 giờ.\n- Tổng thời gian tất cả các khoảng nghỉ là: 1 giờ + 1 giờ = 2 giờ.\n- Tổng thời gian học và nghỉ ở trường là: 6 giờ + 2 giờ = 8 giờ.\nTrường bắt đầu học lúc 8:00 sáng, nên giờ tan học là:\n8:00 + 8 giờ = 16:00 (tức 4 giờ chiều).\nĐáp án: D) 16:00.",
    "type": "mc",
    "subItems": []
  },
  {
    "id": "FMO-G4-DE02-20",
    "exam": "FMO",
    "grade": 4,
    "round": "Đề thi thử Vòng loại FMO G4 - Đề số 2",
    "topic": "Điền số theo quy luật",
    "num": 20,
    "text": "Tìm giá trị của số còn thiếu thay vào vị trí dấu hỏi chấm:",
    "image": "images/fmo_g4_de2_q20.png",
    "options": [
      "A) 16",
      "B) 22",
      "C) 18",
      "D) 19",
      "E) 20"
    ],
    "answer": "A",
    "acceptedAnswers": [
      "A",
      "16"
    ],
    "explanation": "Xét quy luật liên hệ giữa các con số theo các hình tròn / ô lưới:\nGiá trị số cần điền vào dấu ? là 16.\nĐáp án: A) 16.",
    "type": "mc",
    "subItems": []
  },
  {
    "id": "FMO-G4-DE02-21",
    "exam": "FMO",
    "grade": 4,
    "round": "Đề thi thử Vòng loại FMO G4 - Đề số 2",
    "topic": "Tháp số có quy luật (Điền đáp số)",
    "num": 21,
    "text": "Các số liên tiếp được viết theo quy luật và tạo thành tháp số như hình dưới đây. Trong tháp này, số 8 thuộc hàng thứ 3. Nếu viết tiếp các số theo quy luật như vậy thì số 123 thuộc hàng thứ mấy?",
    "image": "images/fmo_g4_de2_q21.png",
    "options": [],
    "answer": "12",
    "acceptedAnswers": [
      "12",
      "hàng 12",
      "hang 12"
    ],
    "explanation": "Quan sát tháp số và số cuối cùng của mỗi hàng:\n- Hàng 1 có 1 số, số cuối cùng là: 1 = 1 × 1\n- Hàng 2 có 3 số, số cuối cùng là: 4 = 2 × 2\n- Hàng 3 có 5 số, số cuối cùng là: 9 = 3 × 3\n- Hàng 4 có 7 số, số cuối cùng là: 16 = 4 × 4\n...\nQuy luật: Ở hàng thứ n, số cuối cùng của hàng là n × n (n²).\nTa xét vị trí của số 123:\nVì 11 × 11 = 121 và 12 × 12 = 144, nên:\n- Hàng thứ 11 kết thúc ở số 121.\n- Hàng thứ 12 bắt đầu từ số 122 và kết thúc ở số 144.\nDo 121 < 123 ≤ 144 nên số 123 thuộc hàng thứ 12.\nĐáp số: 12.",
    "type": "fill",
    "subItems": []
  }
];

if (typeof window !== 'undefined') {
  window.FMO_DATA = FMO_DATA_DB;
}
if (typeof module !== 'undefined') {
  module.exports = FMO_DATA_DB;
}
