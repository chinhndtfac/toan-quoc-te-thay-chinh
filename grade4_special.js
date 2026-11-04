// NGÂN HÀNG CHUYÊN ĐỀ TOÁN NÂNG CAO & OLYMPIC LỚP 4 (CHUẨN GIÁO TRÌNH THẦY NGUYỄN ĐÌNH CHINH - 04. NC 2017)
// Đầy đủ Chuyên đề Toán nâng cao CLC & SEAMO, cùng Math IQ chọn lọc có sơ đồ hình vẽ chuẩn
// Tác giả hệ thống: Thầy Nguyễn Đình Chinh (0941.492.468)

const GRADE4_SPECIAL_DB = [
  {
    "id": "G4-NC-01-01",
    "exam": "SPECIAL_G4",
    "grade": 4,
    "round": "01_VIẾT SỐ VỚI ĐIỀU KIỆN CHO TRƯỚC P1",
    "topic": "Cấu tạo số tự nhiên",
    "num": 1,
    "text": "Viết số tự nhiên X lớn nhất có các chữ số khác nhau và có tổng các chữ số bằng 19.",
    "type": "fill",
    "answer": "943210",
    "acceptedAnswers": [
      "943210",
      "943 210",
      "943.210"
    ],
    "explanation": "Để số X lớn nhất thì X phải có nhiều chữ số nhất có thể.\nTa chọn các chữ số khác nhau nhỏ nhất có thể từ 0 trở lên: 0 + 1 + 2 + 3 + 4 = 10.\nCòn thiếu: 19 – 10 = 9.\nVì 9 khác với các chữ số {0, 1, 2, 3, 4} nên ta chọn tập các chữ số là {9, 4, 3, 2, 1, 0}.\nSắp xếp từ lớn đến bé để được số lớn nhất: 943 210.\nĐáp số: 943 210."
  },
  {
    "id": "G4-NC-01-02",
    "exam": "SPECIAL_G4",
    "grade": 4,
    "round": "01_VIẾT SỐ VỚI ĐIỀU KIỆN CHO TRƯỚC P1",
    "topic": "Cấu tạo số tự nhiên",
    "num": 2,
    "text": "Viết số tự nhiên X lớn nhất có các chữ số khác nhau và có tổng các chữ số bằng 14.",
    "type": "fill",
    "answer": "83210",
    "acceptedAnswers": [
      "83210",
      "83 210",
      "83.210"
    ],
    "explanation": "Để số X lớn nhất thì X phải có nhiều chữ số nhất có thể.\nChọn các chữ số khác nhau nhỏ nhất: 0 + 1 + 2 + 3 = 6.\nCòn thiếu: 14 – 6 = 8.\nVì 8 khác với {0, 1, 2, 3} nên tập các chữ số là {8, 3, 2, 1, 0}.\nSắp xếp giảm dần ta được số lớn nhất: 83 210.\nĐáp số: 83 210."
  },
  {
    "id": "G4-NC-01-03",
    "exam": "SPECIAL_G4",
    "grade": 4,
    "round": "01_VIẾT SỐ VỚI ĐIỀU KIỆN CHO TRƯỚC P1",
    "topic": "Cấu tạo số tự nhiên",
    "num": 3,
    "text": "Viết số tự nhiên X lớn nhất có các chữ số khác nhau và có tổng các chữ số bằng 45.",
    "type": "fill",
    "answer": "9876543210",
    "acceptedAnswers": [
      "9876543210",
      "9 876 543 210",
      "9.876.543.210"
    ],
    "explanation": "Tổng tất cả 10 chữ số từ 0 đến 9 là:\n0 + 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 = 45.\nĐể số lớn nhất ta sắp xếp 10 chữ số này theo thứ tự giảm dần:\n9 876 543 210.\nĐáp số: 9 876 543 210."
  },
  {
    "id": "G4-NC-01-04",
    "exam": "SPECIAL_G4",
    "grade": 4,
    "round": "01_VIẾT SỐ VỚI ĐIỀU KIỆN CHO TRƯỚC P1",
    "topic": "Cấu tạo số tự nhiên",
    "num": 4,
    "text": "Viết số tự nhiên Y lớn nhất có ba chữ số và có tổng các chữ số bằng 13.",
    "type": "fill",
    "answer": "940",
    "acceptedAnswers": [
      "940"
    ],
    "explanation": "Số có 3 chữ số có dạng abc.\nĐể số lớn nhất thì chữ số hàng trăm a phải lớn nhất, chọn a = 9.\nTổng hai chữ số còn lại là: 13 – 9 = 4.\nĐể số lớn nhất thì hàng chục b lớn nhất, chọn b = 4, khi đó hàng đơn vị c = 0.\nVậy số cần tìm là 940 (đề bài không yêu cầu các chữ số khác nhau).\nĐáp số: 940."
  },
  {
    "id": "G4-NC-01-05",
    "exam": "SPECIAL_G4",
    "grade": 4,
    "round": "01_VIẾT SỐ VỚI ĐIỀU KIỆN CHO TRƯỚC P1",
    "topic": "Cấu tạo số tự nhiên",
    "num": 5,
    "text": "Viết số tự nhiên Y lớn nhất có ba chữ số và có tổng các chữ số bằng 20.",
    "type": "fill",
    "answer": "992",
    "acceptedAnswers": [
      "992"
    ],
    "explanation": "Để số lớn nhất thì hàng trăm lớn nhất: a = 9.\nHàng chục lớn nhất: b = 9.\nKhi đó chữ số hàng đơn vị là: 20 – (9 + 9) = 2.\nVậy số lớn nhất là: 992.\nĐáp số: 992."
  },
  {
    "id": "G4-NC-01-06",
    "exam": "SPECIAL_G4",
    "grade": 4,
    "round": "01_VIẾT SỐ VỚI ĐIỀU KIỆN CHO TRƯỚC P1",
    "topic": "Cấu tạo số tự nhiên",
    "num": 6,
    "text": "Viết số tự nhiên Y lớn nhất có ba chữ số và có tổng các chữ số bằng 8.",
    "type": "fill",
    "answer": "800",
    "acceptedAnswers": [
      "800"
    ],
    "explanation": "Để số lớn nhất thì chữ số hàng trăm lớn nhất: a = 8.\nKhi đó tổng hai chữ số còn lại là: 8 – 8 = 0, nên b = 0 và c = 0.\nVậy số lớn nhất là: 800.\nĐáp số: 800."
  },
  {
    "id": "G4-NC-01-07",
    "exam": "SPECIAL_G4",
    "grade": 4,
    "round": "01_VIẾT SỐ VỚI ĐIỀU KIỆN CHO TRƯỚC P1",
    "topic": "Tích các chữ số",
    "num": 7,
    "text": "Tìm số tự nhiên A lớn nhất có các chữ số khác nhau mà tích các chữ số bằng 40.",
    "type": "fill",
    "answer": "5421",
    "acceptedAnswers": [
      "5421",
      "5 421",
      "5.421"
    ],
    "explanation": "Phân tích 40 thành tích các chữ số khác nhau:\n40 = 8 × 5 = 4 × 2 × 5 = 5 × 4 × 2 × 1.\nĐể số lớn nhất thì cần nhiều chữ số nhất, ta chọn tập chữ số {5, 4, 2, 1}.\nSắp xếp giảm dần ta được số lớn nhất: 5421.\nĐáp số: 5421."
  },
  {
    "id": "G4-NC-01-08",
    "exam": "SPECIAL_G4",
    "grade": 4,
    "round": "01_VIẾT SỐ VỚI ĐIỀU KIỆN CHO TRƯỚC P1",
    "topic": "Tích các chữ số",
    "num": 8,
    "text": "Tìm số tự nhiên A lớn nhất có năm chữ số mà tích các chữ số bằng 40.",
    "type": "fill",
    "answer": "85111",
    "acceptedAnswers": [
      "85111",
      "85 111",
      "85.111"
    ],
    "explanation": "Đề bài không yêu cầu các chữ số khác nhau.\nĐể số có 5 chữ số lớn nhất, chữ số hàng chục nghìn phải lớn nhất có thể: chọn chữ số 8 (vì 40 = 8 × 5).\nKhi đó 40 = 8 × 5 × 1 × 1 × 1.\nSố lớn nhất có 5 chữ số là: 85111.\nĐáp số: 85111."
  },
  {
    "id": "G4-NC-01-09",
    "exam": "SPECIAL_G4",
    "grade": 4,
    "round": "01_VIẾT SỐ VỚI ĐIỀU KIỆN CHO TRƯỚC P1",
    "topic": "Tích các chữ số",
    "num": 9,
    "text": "Tìm số tự nhiên A chẵn lớn nhất có năm chữ số mà tích các chữ số bằng 40.",
    "type": "fill",
    "answer": "54112",
    "acceptedAnswers": [
      "54112",
      "54 112",
      "54.112"
    ],
    "explanation": "Số chẵn thì chữ số hàng đơn vị phải là số chẵn (có thể là 2, 4 hoặc 8):\n- Nếu tận cùng là 8: 40 = 5 × 1 × 1 × 1 × 8 -> số lớn nhất là 51118.\n- Nếu tận cùng là 4: 40 = 5 × 2 × 1 × 1 × 4 -> số lớn nhất là 52114.\n- Nếu tận cùng là 2: 40 = 5 × 4 × 1 × 1 × 2 -> số lớn nhất là 54112.\nSo sánh ta thấy số chẵn lớn nhất là: 54112.\nĐáp số: 54112."
  },
  {
    "id": "G4-NC-01-10",
    "exam": "SPECIAL_G4",
    "grade": 4,
    "round": "01_VIẾT SỐ VỚI ĐIỀU KIỆN CHO TRƯỚC P1",
    "topic": "Tích các chữ số",
    "num": 10,
    "text": "Tìm số tự nhiên A chẵn bé nhất có năm chữ số mà tích các chữ số bằng 40.",
    "type": "fill",
    "answer": "11158",
    "acceptedAnswers": [
      "11158",
      "11 158",
      "11.158"
    ],
    "explanation": "Để số bé nhất thì chữ số ở hàng cao nhất phải nhỏ nhất (chọn các chữ số 1 đứng đầu).\nChữ số tận cùng phải chẵn (2, 4 hoặc 8):\n- Nếu tận cùng là 8: số bé nhất là 11158.\n- Nếu tận cùng là 4: số bé nhất là 11254.\n- Nếu tận cùng là 2: số bé nhất là 11452.\nSo sánh ta thấy số chẵn bé nhất là: 11158.\nĐáp số: 11158."
  },
  {
    "id": "G4-NC-01-11",
    "exam": "SPECIAL_G4",
    "grade": 4,
    "round": "01_VIẾT SỐ VỚI ĐIỀU KIỆN CHO TRƯỚC P1",
    "topic": "Cấu tạo số tự nhiên",
    "num": 11,
    "text": "Viết số tự nhiên X bé nhất có tổng các chữ số bằng 19.",
    "type": "fill",
    "answer": "199",
    "acceptedAnswers": [
      "199"
    ],
    "explanation": "Số tự nhiên bé nhất khi nó có ít chữ số nhất. Để ít chữ số nhất thì các chữ số ở hàng thấp phải lớn nhất (bằng 9).\nTa có: 19 = 9 + 9 + 1.\nVậy số bé nhất là: 199.\nĐáp số: 199."
  },
  {
    "id": "G4-NC-01-12",
    "exam": "SPECIAL_G4",
    "grade": 4,
    "round": "01_VIẾT SỐ VỚI ĐIỀU KIỆN CHO TRƯỚC P1",
    "topic": "Cấu tạo số tự nhiên",
    "num": 12,
    "text": "Viết số tự nhiên X bé nhất có các chữ số khác nhau và tổng các chữ số của số đó bằng 17.",
    "type": "fill",
    "answer": "89",
    "acceptedAnswers": [
      "89"
    ],
    "explanation": "Để số bé nhất thì số đó phải có ít chữ số nhất. Ta chọn chữ số hàng đơn vị lớn nhất là 9.\nKhi đó chữ số hàng chục là: 17 – 9 = 8.\nVì 8 và 9 là hai chữ số khác nhau nên số cần tìm có 2 chữ số là 89.\n(Số 89 có 2 chữ số sẽ luôn nhỏ hơn bất kỳ số có 3 chữ số nào như 179 hay 269).\nĐáp số: 89."
  },
  {
    "id": "G4-NC-01-13",
    "exam": "SPECIAL_G4",
    "grade": 4,
    "round": "01_VIẾT SỐ VỚI ĐIỀU KIỆN CHO TRƯỚC P1",
    "topic": "Cấu tạo số tự nhiên",
    "num": 13,
    "text": "Viết số tự nhiên E bé nhất có tổng các chữ số bằng 38.",
    "type": "fill",
    "answer": "29999",
    "acceptedAnswers": [
      "29999",
      "29 999",
      "29.999"
    ],
    "explanation": "Để số bé nhất thì cần ít chữ số nhất, nên ưu tiên các chữ số lớn nhất là 9:\n38 = 9 + 9 + 9 + 9 + 2.\nChữ số đầu tiên là 2, bốn chữ số tiếp theo là 9.\nVậy số bé nhất là: 29 999.\nĐáp số: 29 999."
  },
  {
    "id": "G4-NC-01-14",
    "exam": "SPECIAL_G4",
    "grade": 4,
    "round": "01_VIẾT SỐ VỚI ĐIỀU KIỆN CHO TRƯỚC P1",
    "topic": "Cấu tạo số tự nhiên",
    "num": 14,
    "text": "Viết số tự nhiên E bé nhất có các chữ số khác nhau và tổng các chữ số bằng 38.",
    "type": "fill",
    "answer": "356789",
    "acceptedAnswers": [
      "356789",
      "356 789",
      "356.789"
    ],
    "explanation": "Để số bé nhất có các chữ số khác nhau thì cần ít chữ số nhất. Ta chọn các chữ số từ hàng đơn vị sang trái lớn nhất có thể và khác nhau:\n9 + 8 + 7 + 6 + 5 = 35.\nCòn thiếu: 38 – 35 = 3.\nVậy số bé nhất là: 356 789.\nĐáp số: 356 789."
  },
  {
    "id": "G4-NC-01-15",
    "exam": "SPECIAL_G4",
    "grade": 4,
    "round": "01_VIẾT SỐ VỚI ĐIỀU KIỆN CHO TRƯỚC P1",
    "topic": "Tích các chữ số",
    "num": 15,
    "text": "Viết số tự nhiên E bé nhất có tích các chữ số bằng 120.",
    "type": "fill",
    "answer": "358",
    "acceptedAnswers": [
      "358"
    ],
    "explanation": "Để số bé nhất thì cần ít chữ số nhất, nên các chữ số phải lớn nhất có thể (≤ 9):\n120 = 8 × 15 = 8 × 5 × 3.\nSắp xếp các chữ số {3, 5, 8} theo thứ tự tăng dần ta được số bé nhất: 358.\nĐáp số: 358."
  },
  {
    "id": "G4-NC-01-16",
    "exam": "SPECIAL_G4",
    "grade": 4,
    "round": "01_VIẾT SỐ VỚI ĐIỀU KIỆN CHO TRƯỚC P1",
    "topic": "Xóa chữ số",
    "num": 16,
    "text": "Cho số tự nhiên 127 062 492. Xoá đi năm chữ số, giữ nguyên thứ tự các chữ số còn lại để được số tự nhiên lớn nhất.",
    "type": "fill",
    "answer": "7692",
    "acceptedAnswers": [
      "7692",
      "7 692",
      "7.692"
    ],
    "explanation": "Số ban đầu có 9 chữ số. Xóa đi 5 chữ số thì số còn lại có 4 chữ số.\nĐể số còn lại lớn nhất:\n- Chữ số hàng nghìn lớn nhất có thể: sau khi bỏ '1' và '2', ta chọn được chữ số '7'.\n- Sau chữ số 7 còn lại '062 492': để hàng trăm lớn nhất ta bỏ '0', chọn chữ số '6'.\n- Sau chữ số 6 còn lại '2 492': để hàng chục lớn nhất ta bỏ '2' và '4', chọn chữ số '9'.\n- Chữ số hàng đơn vị còn lại là '2'.\nVậy số lớn nhất thu được là: 7692.\nĐáp số: 7692."
  },
  {
    "id": "G4-NC-01-17",
    "exam": "SPECIAL_G4",
    "grade": 4,
    "round": "01_VIẾT SỐ VỚI ĐIỀU KIỆN CHO TRƯỚC P1",
    "topic": "Xóa chữ số",
    "num": 17,
    "text": "Cho số tự nhiên 127 062 492. Xoá đi năm chữ số, giữ nguyên thứ tự các chữ số còn lại để được số tự nhiên bé nhất.",
    "type": "fill",
    "answer": "1022",
    "acceptedAnswers": [
      "1022",
      "1 022",
      "1.022"
    ],
    "explanation": "Số ban đầu có 9 chữ số, xóa 5 chữ số còn lại 4 chữ số.\nĐể số còn lại bé nhất:\n- Chữ số hàng nghìn bé nhất khác 0: chọn chữ số '1' đầu tiên.\n- Sau chữ số 1 còn lại '27 062 492': để hàng trăm bé nhất ta bỏ '2' và '7', chọn chữ số '0'.\n- Sau chữ số 0 còn lại '62 492': để hàng chục bé nhất ta bỏ '6', chọn chữ số '2'.\n- Sau chữ số 2 còn lại '492': để hàng đơn vị bé nhất ta bỏ '4' và '9', chọn chữ số '2'.\nVậy số bé nhất thu được là: 1022.\nĐáp số: 1022."
  },
  {
    "id": "G4-NC-01-18",
    "exam": "SPECIAL_G4",
    "grade": 4,
    "round": "01_VIẾT SỐ VỚI ĐIỀU KIỆN CHO TRƯỚC P1",
    "topic": "Cấu tạo số tự nhiên",
    "num": 18,
    "text": "Viết số tự nhiên chẵn lớn nhất có bốn chữ số.",
    "type": "fill",
    "answer": "9998",
    "acceptedAnswers": [
      "9998",
      "9 998",
      "9.998"
    ],
    "explanation": "Đề bài không yêu cầu các chữ số khác nhau.\nĐể số lớn nhất thì hàng nghìn là 9, hàng trăm là 9, hàng chục là 9.\nChữ số hàng đơn vị phải là chữ số chẵn lớn nhất là 8.\nVậy số cần tìm là: 9998.\nĐáp số: 9998."
  },
  {
    "id": "G4-NC-01-19",
    "exam": "SPECIAL_G4",
    "grade": 4,
    "round": "01_VIẾT SỐ VỚI ĐIỀU KIỆN CHO TRƯỚC P1",
    "topic": "Cấu tạo số tự nhiên",
    "num": 19,
    "text": "Viết số tự nhiên chẵn nhỏ nhất có bốn chữ số khác nhau.",
    "type": "fill",
    "answer": "1024",
    "acceptedAnswers": [
      "1024",
      "1 024",
      "1.024"
    ],
    "explanation": "Để số nhỏ nhất có 4 chữ số khác nhau:\n- Hàng nghìn nhỏ nhất khác 0 là 1.\n- Hàng trăm nhỏ nhất chưa dùng là 0.\n- Hàng chục nhỏ nhất chưa dùng là 2.\n- Hàng đơn vị phải chẵn, khác {1, 0, 2} nên chọn chữ số 4.\nVậy số cần tìm là: 1024.\nĐáp số: 1024."
  },
  {
    "id": "G4-NC-01-20",
    "exam": "SPECIAL_G4",
    "grade": 4,
    "round": "01_VIẾT SỐ VỚI ĐIỀU KIỆN CHO TRƯỚC P1",
    "topic": "Cấu tạo số tự nhiên",
    "num": 20,
    "text": "Viết số tự nhiên lẻ bé nhất có năm chữ số.",
    "type": "fill",
    "answer": "10001",
    "acceptedAnswers": [
      "10001",
      "10 001",
      "10.001"
    ],
    "explanation": "Số có 5 chữ số bé nhất là 10 000.\nĐể là số lẻ thì chữ số hàng đơn vị phải là số lẻ nhỏ nhất là 1.\nVậy số cần tìm là: 10 001.\nĐáp số: 10 001."
  },
  {
    "id": "G4-NC-01-21",
    "exam": "SPECIAL_G4",
    "grade": 4,
    "round": "01_VIẾT SỐ VỚI ĐIỀU KIỆN CHO TRƯỚC P1",
    "topic": "Cấu tạo số tự nhiên",
    "num": 21,
    "text": "Viết số tự nhiên lẻ lớn nhất có năm chữ số khác nhau.",
    "type": "fill",
    "answer": "98765",
    "acceptedAnswers": [
      "98765",
      "98 765",
      "98.765"
    ],
    "explanation": "Để số lớn nhất có 5 chữ số khác nhau:\n- Hàng chục nghìn là 9\n- Hàng nghìn là 8\n- Hàng trăm là 7\n- Hàng chục là 6\n- Hàng đơn vị phải là số lẻ khác các chữ số trên nên chọn 5.\nVậy số cần tìm là: 98 765.\nĐáp số: 98 765."
  },
  {
    "id": "G4-NC-01-22",
    "exam": "SPECIAL_G4",
    "grade": 4,
    "round": "01_VIẾT SỐ VỚI ĐIỀU KIỆN CHO TRƯỚC P1",
    "topic": "Cấu tạo số tự nhiên",
    "num": 22,
    "text": "Từ các chữ số 0; 2; 5; 6; 8; 9, viết số chẵn lớn nhất có bốn chữ số khác nhau.",
    "type": "fill",
    "answer": "9862",
    "acceptedAnswers": [
      "9862",
      "9 862",
      "9.862"
    ],
    "explanation": "Từ các chữ số {0, 2, 5, 6, 8, 9}:\nĐể số chẵn lớn nhất có 4 chữ số khác nhau:\n- Hàng nghìn lớn nhất: 9\n- Hàng trăm lớn nhất: 8\n- Hàng chục lớn nhất: 6\n- Hàng đơn vị phải là số chẵn từ các chữ số còn lại {0, 2, 5}, nên chọn số 2.\nVậy số cần tìm là: 9862.\nĐáp số: 9862."
  },
  {
    "id": "G4-NC-01-23",
    "exam": "SPECIAL_G4",
    "grade": 4,
    "round": "01_VIẾT SỐ VỚI ĐIỀU KIỆN CHO TRƯỚC P1",
    "topic": "Cấu tạo số tự nhiên",
    "num": 23,
    "text": "Từ các chữ số 0; 2; 5; 6; 8; 9, viết số lẻ bé nhất có ba chữ số khác nhau.",
    "type": "fill",
    "answer": "205",
    "acceptedAnswers": [
      "205"
    ],
    "explanation": "Từ các chữ số {0, 2, 5, 6, 8, 9}:\nĐể số lẻ bé nhất có 3 chữ số khác nhau:\n- Hàng trăm bé nhất khác 0: 2\n- Hàng chục bé nhất chưa dùng: 0\n- Hàng đơn vị phải lẻ (còn lại 5 hoặc 9), nên chọn 5.\nVậy số cần tìm là: 205.\nĐáp số: 205."
  },
  {
    "id": "G4-NC-01-24",
    "exam": "SPECIAL_G4",
    "grade": 4,
    "round": "01_VIẾT SỐ VỚI ĐIỀU KIỆN CHO TRƯỚC P1",
    "topic": "Cấu tạo số tự nhiên",
    "num": 24,
    "text": "Viết số tự nhiên lớn nhất có bốn chữ số và tổng các chữ số bằng 29.",
    "type": "fill",
    "answer": "9992",
    "acceptedAnswers": [
      "9992",
      "9 992",
      "9.992"
    ],
    "explanation": "Để số lớn nhất, ưu tiên các hàng bên trái đạt giá trị lớn nhất là 9:\n29 = 9 + 9 + 9 + 2.\nVậy số lớn nhất là: 9992.\nĐáp số: 9992."
  },
  {
    "id": "G4-NC-01-25",
    "exam": "SPECIAL_G4",
    "grade": 4,
    "round": "01_VIẾT SỐ VỚI ĐIỀU KIỆN CHO TRƯỚC P1",
    "topic": "Cấu tạo số tự nhiên",
    "num": 25,
    "text": "Viết số tự nhiên lớn nhất có bốn chữ số và tổng các chữ số bằng 34.",
    "type": "fill",
    "answer": "9997",
    "acceptedAnswers": [
      "9997",
      "9 997",
      "9.997"
    ],
    "explanation": "Ưu tiên 3 chữ số hàng cao bằng 9:\n34 = 9 + 9 + 9 + 7.\nVậy số lớn nhất là: 9997.\nĐáp số: 9997."
  },
  {
    "id": "G4-NC-01-26",
    "exam": "SPECIAL_G4",
    "grade": 4,
    "round": "01_VIẾT SỐ VỚI ĐIỀU KIỆN CHO TRƯỚC P1",
    "topic": "Cấu tạo số tự nhiên",
    "num": 26,
    "text": "Viết số tự nhiên lớn nhất có bốn chữ số và tổng các chữ số bằng 8.",
    "type": "fill",
    "answer": "8000",
    "acceptedAnswers": [
      "8000",
      "8 000",
      "8.000"
    ],
    "explanation": "Để số lớn nhất có 4 chữ số, chữ số hàng nghìn lớn nhất bằng 8.\nKhi đó 3 chữ số còn lại bằng 0: 8000 (tổng các chữ số: 8 + 0 + 0 + 0 = 8).\nVậy số lớn nhất là: 8000.\nĐáp số: 8000."
  },
  {
    "id": "G4-NC-01-27",
    "exam": "SPECIAL_G4",
    "grade": 4,
    "round": "01_VIẾT SỐ VỚI ĐIỀU KIỆN CHO TRƯỚC P1",
    "topic": "Cấu tạo số tự nhiên",
    "num": 27,
    "text": "Viết số tự nhiên lớn nhất có bốn chữ số và tổng các chữ số bằng 17.",
    "type": "fill",
    "answer": "9800",
    "acceptedAnswers": [
      "9800",
      "9 800",
      "9.800"
    ],
    "explanation": "Hàng nghìn lớn nhất bằng 9.\nHàng trăm lớn nhất: 17 – 9 = 8.\nHai chữ số hàng chục và đơn vị bằng 0.\nVậy số lớn nhất là: 9800.\nĐáp số: 9800."
  },
  {
    "id": "G4-NC-1013",
    "exam": "SPECIAL_G4",
    "grade": 4,
    "round": "02_VIẾT SỐ VỚI ĐIỀU KIỆN CHO TRƯỚC P2",
    "topic": "02_VIẾT SỐ VỚI ĐIỀU KIỆN CHO TRƯỚC P2",
    "num": 1,
    "text": ". Viết số tự nhiên lớn nhất có năm chữ số và tổng các chữ số là:\r\na) 29\r\n\r\nb) 34\r\n\r\nc) 7\r\n\r\nd) 18",
    "options": [],
    "answer": "là: 9 900",
    "acceptedAnswers": [
      "là: 9 900",
      "là:9900"
    ],
    "explanation": "Lời giải:\r\nĐể số lớn nhất, ta ưu tiên các hàng bên trái là các chữ số lớn nhất.\r\na) 29 = 9 + 9 + 9 + 2\r\nSố lớn nhất là: 9 992.\r\nb) 34 = 9 + 9 + 9 + 7\r\nSố lớn nhất là: 9 997.\r\nc) 7 = 7 + 0 + 0 + 0\r\nSố lớn nhất là: 7 000.\r\nd) 18 = 9 + 9 + 0 + 0\r\nSố lớn nhất là: 9 900.",
    "type": "fill"
  },
  {
    "id": "G4-NC-1014",
    "exam": "SPECIAL_G4",
    "grade": 4,
    "round": "02_VIẾT SỐ VỚI ĐIỀU KIỆN CHO TRƯỚC P2",
    "topic": "02_VIẾT SỐ VỚI ĐIỀU KIỆN CHO TRƯỚC P2",
    "num": 2,
    "text": ". Viết số tự nhiên bé nhất có tổng các chữ số là:\r\na) 29\r\n\r\nb) 34\r\n\r\nc) 7\r\n\r\nd) 18",
    "options": [],
    "answer": "là 99",
    "acceptedAnswers": [
      "là 99",
      "là99"
    ],
    "explanation": "Lời giải:\r\nLưu ý: Bài này không yêu cầu viết số có bao nhiêu chữ số cụ thể nên muốn số bé nhất thì\r\nsố cần có ít chữ số nhất.\r\nTa tách tổng thành các số lớn nhất có thể.\r\na) 29 = 9 + 9 + 9 + 2\r\nSố bé nhất là 2 999.\r\nb) 34 = 9 + 9 + 9 + 7\r\nSố bé nhất là 7 999.\r\nc) 7 = 7\r\nSố bé nhất là 7.\r\nd) 18 = 9 + 9\r\nSố bé nhất là 99.\r\n\r\n\r\nTHẦY ĐẶNG VIỆT HÙNG",
    "type": "fill"
  },
  {
    "id": "G4-NC-1015",
    "exam": "SPECIAL_G4",
    "grade": 4,
    "round": "02_VIẾT SỐ VỚI ĐIỀU KIỆN CHO TRƯỚC P2",
    "topic": "02_VIẾT SỐ VỚI ĐIỀU KIỆN CHO TRƯỚC P2",
    "num": 3,
    "text": ". Viết số tự nhiên bé nhất có năm chữ số và tổng các chữ số là:\r\na) 28\r\n\r\nb) 33\r\n\r\nc) 9\r\n\r\nd) 16",
    "options": [],
    "answer": "là 10 079",
    "acceptedAnswers": [
      "là 10 079",
      "là10079"
    ],
    "explanation": "Lời giải:\r\nMuốn số bé nhất thì các chữ số lớn được đặt về các hàng bên phải.\r\na) Ta có: 28 = 9 + 9 + 9 + 1\r\n\r\nb) Ta có: 33 = 9 + 9 + 9 + 6\r\n\r\nSố bé nhất là 10 999.\r\n\r\nSố bé nhất là 69 999.\r\n\r\nc) Ta có: 9 = 9 + 0 + 0 + 0 + 0\r\n\r\nd) Ta có: 16 = 9 + 7 + 0 + 0 + 0\r\n\r\nSố bé nhất là 10 008.\r\n\r\nSố bé nhất là 10 079.",
    "type": "fill"
  },
  {
    "id": "G4-NC-1016",
    "exam": "SPECIAL_G4",
    "grade": 4,
    "round": "02_VIẾT SỐ VỚI ĐIỀU KIỆN CHO TRƯỚC P2",
    "topic": "02_VIẾT SỐ VỚI ĐIỀU KIỆN CHO TRƯỚC P2",
    "num": 4,
    "text": ". Viết số tự nhiên bé nhất có các chữ số khác nhau và tổng các chữ số là:\r\na) 29\r\n\r\nb) 34\r\n\r\nc) 7\r\n\r\nd) 18",
    "options": [],
    "answer": "là 189",
    "acceptedAnswers": [
      "là 189",
      "là189"
    ],
    "explanation": "Lời giải:\r\nLưu ý: Muốn số bé nhất thì số cần có ít chữ số nhất và các chữ số bé hơn đặt về các hàng bên trái.\r\na) Ta có: 29 = 9 + 8 + 7 + 5\r\n\r\nb) Ta có: 34 = 9 + 8 + 7 + 6 + 4\r\n\r\nSố bé nhất là 5 789.\r\n\r\nSố bé nhất là 46 789.\r\n\r\nc) Ta có: 7 = 7\r\n\r\nd) Ta có: 18 = 9 + 8 + 1\r\n\r\nSố bé nhất là 7.\r\n\r\nSố bé nhất là 189.",
    "type": "fill"
  },
  {
    "id": "G4-NC-1017",
    "exam": "SPECIAL_G4",
    "grade": 4,
    "round": "02_VIẾT SỐ VỚI ĐIỀU KIỆN CHO TRƯỚC P2",
    "topic": "02_VIẾT SỐ VỚI ĐIỀU KIỆN CHO TRƯỚC P2",
    "num": 5,
    "text": ". Viết số tự nhiên lớn nhất có các chữ số khác nhau và tích các chữ số là:\r\na) 20\r\n\r\nb) 8\r\n\r\nc) 60\r\n\r\nd) 240",
    "options": [],
    "answer": "là 65 421",
    "acceptedAnswers": [
      "là 65 421",
      "là65421"
    ],
    "explanation": "Lời giải:\r\nLưu ý: Muốn số lớn nhất thì cần có nhiều chữ số nhất và các chữ số lớn đặt về các hàng bên trái.\r\na) 20 = 1 × 2 × 2 × 5\r\n\r\nb) 8 = 1 × 2 × 4\r\n\r\nDo đề yêu cầu các chữ số khác nhau nên:\r\n\r\nSố lớn nhất là 421.\r\n\r\n20 = 1 × 4 × 5\r\nSố lớn nhất là 541.\r\nc) 60 = 1 × 2 × 5 × 6\r\n\r\nd) 240 = 1 × 2 × 3 × 4 × 5 × 2\r\n\r\nSố lớn nhất là 6 521.\r\n\r\nDo các chữ số khác nhau nên:\r\n240 = 1 × 2 × 4 × 5 × 6\r\nSố lớn nhất là 65 421.\r\n\r\n\r\nTHẦY ĐẶNG VIỆT HÙNG",
    "type": "fill"
  },
  {
    "id": "G4-NC-1018",
    "exam": "SPECIAL_G4",
    "grade": 4,
    "round": "02_VIẾT SỐ VỚI ĐIỀU KIỆN CHO TRƯỚC P2",
    "topic": "02_VIẾT SỐ VỚI ĐIỀU KIỆN CHO TRƯỚC P2",
    "num": 6,
    "text": ". Viết số tự nhiên bé nhất có các chữ số khác nhau và tích các chữ số là:\r\na) 30\r\n\r\nb) 12\r\n\r\nc) 90\r\n\r\nd) 180",
    "options": [],
    "answer": "là 459",
    "acceptedAnswers": [
      "là 459",
      "là459"
    ],
    "explanation": "Lời giải:\r\nLưu ý: Muốn số bé nhất thì số cần có ít chữ số nhất và các chữ số bé hơn đặt về các hàng bên trái.\r\na) 30 = 1 × 5 × 6\r\nSố bé nhất là 56.\r\nb) 12 = 1 × 2 × 6 = 1 × 3 × 4\r\nSố bé nhất là 26.\r\nc) 90 = 1 × 2 × 5 × 9\r\nSố bé nhất là 259.\r\nd) 180 = 1 × 9 × 20 (xuất hiện số 20 là số có hai chữ số → tách tiếp thành các số có một chữ số)\r\n180 = 1 × 9 × 5 × 4\r\nSố bé nhất là 459.\r\nVẫn có thế tách 1 × 9 × 5 × 4 = 1 × 3 × 3 × 5 × 2 × 2. Tuy nhiên đề bài yêu cầu số có các chữ\r\nsố khác nhau nên trường hợp tách 180 = 1 × 3 × 3 × 5 × 2 × 2 loại.",
    "type": "fill"
  },
  {
    "id": "G4-NC-1019",
    "exam": "SPECIAL_G4",
    "grade": 4,
    "round": "02_VIẾT SỐ VỚI ĐIỀU KIỆN CHO TRƯỚC P2",
    "topic": "02_VIẾT SỐ VỚI ĐIỀU KIỆN CHO TRƯỚC P2",
    "num": 7,
    "text": ". Viết số tự nhiên lớn nhất có năm chữ số và tích các chữ số là:\r\na) 20\r\n\r\nb) 8\r\n\r\nc) 60\r\n\r\nd) 240",
    "options": [],
    "answer": "là 86 511",
    "acceptedAnswers": [
      "là 86 511",
      "là86511"
    ],
    "explanation": "Lời giải:\r\nLưu ý: Muốn số lớn nhất thì chữ số hàng cao nhất phải lớn nhất.\r\na) 20 = 5 × 4 × 1 × 1 × 1\r\n\r\nb) 8 = 8 × 1 × 1 × 1 × 1\r\n\r\nSố lớn nhất là 54 111.\r\n\r\nSố lớn nhất là 81 111.\r\n\r\nc) 60 = 6 × 5 × 2 × 1 × 1\r\n\r\nd) 240 = 24 × 10 = 2 × 4 × 3 × 2 × 5 = 8 × 6 × 5 × 1 × 1\r\n\r\nSố lớn nhất là 65 211.\r\n\r\nSố lớn nhất là 86 511.",
    "type": "fill"
  },
  {
    "id": "G4-NC-1020",
    "exam": "SPECIAL_G4",
    "grade": 4,
    "round": "02_VIẾT SỐ VỚI ĐIỀU KIỆN CHO TRƯỚC P2",
    "topic": "02_VIẾT SỐ VỚI ĐIỀU KIỆN CHO TRƯỚC P2",
    "num": 8,
    "text": ". Viết số tự nhiên bé nhất có bốn chữ số và tích các chữ số là:\r\na) 20\r\n\r\nb) 8\r\n\r\nc) 60\r\n\r\nd) 240",
    "options": [],
    "answer": "là 1 568",
    "acceptedAnswers": [
      "là 1 568",
      "là1568"
    ],
    "explanation": "Lời giải:\r\nLưu ý: Muốn số bé nhất thì các chữ số bé hơn đặt về các hàng bên trái.\r\na) 20 = 1 × 1 × 4 × 5\r\nSố bé nhất là 1 145.\r\n\r\n\r\n\r\nb) 8 = 1 × 1 × 1 × 8\r\nSố bé nhất là 1 118.\r\nc) 60 = 1 × 2 × 5 × 6\r\nSố bé nhất là 1 256.\r\nd) 240 = 1 × 5 × 6 × 8\r\nSố bé nhất là 1 568.",
    "type": "fill"
  },
  {
    "id": "G4-NC-1021",
    "exam": "SPECIAL_G4",
    "grade": 4,
    "round": "02_VIẾT SỐ VỚI ĐIỀU KIỆN CHO TRƯỚC P2",
    "topic": "02_VIẾT SỐ VỚI ĐIỀU KIỆN CHO TRƯỚC P2",
    "num": 9,
    "text": ". Viết các số có hai chữ số, hiệu các chữ số là 4. Tìm hiệu của số lớn nhất và\r\nsố bé nhất trong các số đó.",
    "options": [],
    "answer": "là: 15",
    "acceptedAnswers": [
      "là: 15",
      "là:15"
    ],
    "explanation": "Lời giải:\r\nTa có: 4 = 4 – 0 = 5 – 1 = 6 – 2 = 7 – 3 = 8 – 4 = 9 – 5\r\nNhư vậy có các cặp số có hiệu là 4 là: (4; 0); (5; 1); (6; 2); (7; 3); (8; 4); (9; 5)\r\nCác số cần tìm là: 40; 51; 15; 62; 26; 73; 37; 84; 48; 95; 59.\r\nSố lớn nhất là: 95\r\nSố bé nhất là: 15\r\nHiệu hai số là: 95 – 15 = 80\r\nLưu ý: Sau khi lập được một cặp số, nhớ đảo vị trí các chữ số để tìm thêm số mới.",
    "type": "fill"
  },
  {
    "id": "G4-NC-1022",
    "exam": "SPECIAL_G4",
    "grade": 4,
    "round": "02_VIẾT SỐ VỚI ĐIỀU KIỆN CHO TRƯỚC P2",
    "topic": "02_VIẾT SỐ VỚI ĐIỀU KIỆN CHO TRƯỚC P2",
    "num": 10,
    "text": ". Viết các số có hai chữ số, thương các chữ số là 2. Tính tổng của các số đó.",
    "options": [],
    "answer": "2",
    "acceptedAnswers": [
      "2",
      "2"
    ],
    "explanation": "Lời giải:\r\nTa có: 2 = 2 : 1 = 4 : 2 = 6 : 3 = 8: 4\r\nNhư vậy có các cặp số có thương là 2 là: (2; 1); (4; 2); (6; 3); (8; 4)\r\nCác số cần tìm là: 21; 12; 42; 24; 63; 36; 84; 48.\r\nTổng các số đó là: 21 + 12 + 42 + 24 + 63 + 36 + 48 + 84 = 330",
    "type": "fill"
  },
  {
    "id": "G4-NC-1024",
    "exam": "SPECIAL_G4",
    "grade": 4,
    "round": "02_VIẾT SỐ VỚI ĐIỀU KIỆN CHO TRƯỚC P2",
    "topic": "02_VIẾT SỐ VỚI ĐIỀU KIỆN CHO TRƯỚC P2",
    "num": 12,
    "text": ". Viết số lẻ lớn nhất có các chữ số khác nhau, tổng các chữ số là 35.",
    "options": [],
    "answer": "ta được: 98 753 201",
    "acceptedAnswers": [
      "ta được: 98 753 201",
      "tađược:98753201"
    ],
    "explanation": "Lời giải:\r\nLưu ý: Muốn số lớn nhất thì số đó cần có nhiều chữ số nhất.\r\nTách 35 thành tổng các số khác nhau:\r\n35 = 0 + 1 + 2 + 3 + 4 + 5 + 6 + 7 + 7 = 0 + 1 + 2 + 3 + 5 + 7 + 8 + 9\r\nĐể số là số lẻ thì chữ số hàng đơn vị phải lẻ.\r\nSắp xếp để số lớn nhất ta được: 98 753 201.",
    "type": "fill"
  },
  {
    "id": "G4-NC-1025",
    "exam": "SPECIAL_G4",
    "grade": 4,
    "round": "02_VIẾT SỐ VỚI ĐIỀU KIỆN CHO TRƯỚC P2",
    "topic": "02_VIẾT SỐ VỚI ĐIỀU KIỆN CHO TRƯỚC P2",
    "num": 13,
    "text": ". Viết số chẵn lớn nhất có các chữ số khác nhau, tích các chữ số là 420.",
    "options": [],
    "answer": "42",
    "acceptedAnswers": [
      "42",
      "42"
    ],
    "explanation": "Lời giải:\r\nLưu ý: Để viết được số chẵn lớn nhất thì 420 cần tách thành tích các số nhỏ nhất có thể.\r\nTách 420 thành tích các số khác nhau: 420 = 42 × 10 = 6 × 7 × 5 × 2 × 1\r\nVậy số chẵn lớn nhất tìm được là 76 512.",
    "type": "fill"
  },
  {
    "id": "G4-NC-1026",
    "exam": "SPECIAL_G4",
    "grade": 4,
    "round": "02_VIẾT SỐ VỚI ĐIỀU KIỆN CHO TRƯỚC P2",
    "topic": "02_VIẾT SỐ VỚI ĐIỀU KIỆN CHO TRƯỚC P2",
    "num": 14,
    "text": ". Cho số 205 316 745. Xoá đi năm chữ số, giữ nguyên thứ tự các chữ số còn\r\nlại để được số tự nhiên:\r\na) Bé nhất.\r\nb) Lớn nhất.",
    "options": [],
    "answer": "thì ưu tiên giữ các chữ số lớn hơn ở bên trái",
    "acceptedAnswers": [
      "thì ưu tiên giữ các chữ số lớn hơn ở bên trái",
      "thìưutiêngiữcácchữsốlớnhơnởbêntrái"
    ],
    "explanation": "Lời giải:\r\nSố đã cho là số có chín chữ số. Khi xóa đi năm chữ số thì còn lại 4 chữ số.\r\na) Muốn số còn lại là số bé nhất thì ưu tiên giữ các chữ số nhỏ hơn ở bên trái.\r\nTa chọn lần lượt các chữ số 1; 6; 4; 5\r\nVậy số mới lập được là 1645\r\nb) Muốn số còn lại là số lớn nhất thì ưu tiên giữ các chữ số lớn hơn ở bên trái.\r\nTa chọn lần lượt các chữ số 6; 7; 4; 5\r\nVậy số mới lập được là 6 745.\r\n\r\n\r\nTHẦY ĐẶNG VIỆT HÙNG",
    "type": "fill"
  },
  {
    "id": "G4-NC-1027",
    "exam": "SPECIAL_G4",
    "grade": 4,
    "round": "02_VIẾT SỐ VỚI ĐIỀU KIỆN CHO TRƯỚC P2",
    "topic": "02_VIẾT SỐ VỚI ĐIỀU KIỆN CHO TRƯỚC P2",
    "num": 15,
    "text": ". Viết liên tiếp các số có hai chữ số từ 30 đến 25 theo thứ tự từ lớn đến bé\r\nđể được một số A có nhiều chữ số.\r\na) Hỏi số A có bao nhiêu chữ số?\r\nb) Xoá đi năm chữ số của số A và giữ nguyên thứ tự các chữ số còn lại để được số lớn\r\nnhất.",
    "options": [],
    "answer": "thì ưu tiên giữ các chữ số lớn hơn ở bên trái",
    "acceptedAnswers": [
      "thì ưu tiên giữ các chữ số lớn hơn ở bên trái",
      "thìưutiêngiữcácchữsốlớnhơnởbêntrái"
    ],
    "explanation": "Lời giải:\r\na) Từ 30 đến 25 có số số hạng là: (30 – 25) : 1 + 1 = 6 (số)\r\nSố A có số chữ số là: 6 × 2 = 12 (chữ số)\r\nb) Số A là: 302928272625\r\nXóa đi năm chữ số thì A là số có bảy chữ số.\r\nMuốn số còn lại là số lớn nhất thì ưu tiên giữ các chữ số lớn hơn ở bên trái.\r\nTa được số 9 872 625.",
    "type": "fill"
  },
  {
    "id": "G4-NC-1028",
    "exam": "SPECIAL_G4",
    "grade": 4,
    "round": "02_VIẾT SỐ VỚI ĐIỀU KIỆN CHO TRƯỚC P2",
    "topic": "02_VIẾT SỐ VỚI ĐIỀU KIỆN CHO TRƯỚC P2",
    "num": 16,
    "text": ". Viết liên tiếp các số tự nhiên từ 5 đến 15 theo thứ tự từ bé đến lớn để\r\nđược một số B có nhiều chữ số 567...1415.\r\na) Hỏi số B có bao nhiêu chữ số?\r\nb) Xoá đi mười một chữ số của số B và giữ nguyên thứ tự các chữ số còn lại để được số\r\nlớn nhất.",
    "options": [],
    "answer": "thì ưu tiên giữ các chữ số lớn hơn ở bên trái",
    "acceptedAnswers": [
      "thì ưu tiên giữ các chữ số lớn hơn ở bên trái",
      "thìưutiêngiữcácchữsốlớnhơnởbêntrái"
    ],
    "explanation": "Lời giải:\r\na) Từ 5 đến 9 có 5 số nên có 5 × 1 = 5 chữ số.\r\nTừ 10 đến 15 có 6 số nên có 6 × 2 = 12 chữ số\r\nVậy số B có: 5 + 12 = 17 chữ số\r\nb) Số B là: 56789101112131415.\r\nXóa đi mười một chữ số thì B là số có sáu chữ số.\r\nMuốn số còn lại là số lớn nhất thì ưu tiên giữ các chữ số lớn hơn ở bên trái.\r\nTa được số 931 415.",
    "type": "fill"
  },
  {
    "id": "G4-NC-1030",
    "exam": "SPECIAL_G4",
    "grade": 4,
    "round": "03_ĐẾM SỐ VÀ CHỮ SỐ P1",
    "topic": "03_ĐẾM SỐ VÀ CHỮ SỐ P1",
    "num": 1,
    "text": ". Ở một khu vườn thần kì có 5 cây thần kì. Mỗi cây có 4 cành và mỗi cành\r\ncó 8 chiếc lá. Hỏi số cành cây, lá cây của khu vườn thần kì đó là bao nhiêu?",
    "options": [],
    "answer": "a) 20 cành cây; b) 160 chiếc lá",
    "acceptedAnswers": [
      "a) 20 cành cây; b) 160 chiếc lá",
      "a)20cànhcây;b)160chiếclá"
    ],
    "explanation": "Lời giải:\r\nSố cành cây trong khu vườn là: 5 × 4 = 20 (cành)\r\nSố lá cây trong khu vườn là: 20 × 8 = 160 (lá)\r\nĐáp số: a) 20 cành cây; b) 160 chiếc lá",
    "type": "fill"
  },
  {
    "id": "G4-NC-1031",
    "exam": "SPECIAL_G4",
    "grade": 4,
    "round": "03_ĐẾM SỐ VÀ CHỮ SỐ P1",
    "topic": "03_ĐẾM SỐ VÀ CHỮ SỐ P1",
    "num": 2,
    "text": ". Đến một ngày nọ, tại chân của mỗi chiếc lá trong vườn thần kì đều xuất\r\nhiện 3 bông hoa gồm 2 bông màu trắng và 1 bông màu đỏ. Hỏi có bao nhiêu bông hoa\r\nmàu đỏ, bao nhiêu bông hoa màu trắng?",
    "options": [],
    "answer": "a) 320 bông hoa đỏ; b) 160 bông hoa trắng",
    "acceptedAnswers": [
      "a) 320 bông hoa đỏ; b) 160 bông hoa trắng",
      "a)320bônghoađỏ;b)160bônghoatrắng"
    ],
    "explanation": "Lời giải:\r\nCó số bông hoa màu trắng là: 160 × 2 = 320 (bông)\r\nCó số bông hoa màu đỏ là: 160 × 1 = 160 (bông)\r\nĐáp số: a) 320 bông hoa đỏ; b) 160 bông hoa trắng",
    "type": "fill"
  },
  {
    "id": "G4-NC-1032",
    "exam": "SPECIAL_G4",
    "grade": 4,
    "round": "03_ĐẾM SỐ VÀ CHỮ SỐ P1",
    "topic": "03_ĐẾM SỐ VÀ CHỮ SỐ P1",
    "num": 3,
    "text": ". Mỗi bông hoa màu trắng kết hợp với một bông hoa đỏ tạo ra một chùm\r\ncó 7 quả. Mỗi quả này khi chín đều cho ra 3 hạt. Vậy đến khi quả chín, chủ khu vườn\r\nthu được bao nhiêu hạt cây thần kì?",
    "options": [],
    "answer": "3 360 hạt",
    "acceptedAnswers": [
      "3 360 hạt",
      "3360hạt"
    ],
    "explanation": "Lời giải:\r\nCó 160 bông hoa trắng và 320 bông hoa đỏ.\r\n1 chùm cần: 1 hoa đỏ và 1 hoa trắng\r\nVậy tạo ra được 160 chùm.\r\nKhi chín, khu vườn tạo ra được số hạt cây thần kì là:\r\n160 × 7 × 3 = 3 360 (hạt)\r\nĐáp số: 3 360 hạt",
    "type": "fill"
  },
  {
    "id": "G4-NC-1033",
    "exam": "SPECIAL_G4",
    "grade": 4,
    "round": "03_ĐẾM SỐ VÀ CHỮ SỐ P1",
    "topic": "03_ĐẾM SỐ VÀ CHỮ SỐ P1",
    "num": 4,
    "text": ". Có bao nhiêu số tự nhiên có 3 chữ số?",
    "options": [],
    "answer": "900 số tự nhiên có ba chữ số",
    "acceptedAnswers": [
      "900 số tự nhiên có ba chữ số",
      "900sốtựnhiêncóbachữsố"
    ],
    "explanation": "Lời giải:\r\nĐể làm được bài này, HS cần ghi nhớ công thức tính số số hạng của dãy số cách đều như sau:\r\nSố số hạng = (Số lớn – Số bé) : Khoảng cách + 1\r\nKhoảng cách của các số tự nhiên là 1; Số lớn là 999; Số bé là 100.\r\n\r\n\r\n\r\nCó số số tự nhiên có 3 chữ số là: (999 – 100) : 1 + 1 = 900 (số)\r\nVậy có 900 số tự nhiên có ba chữ số.",
    "type": "fill"
  },
  {
    "id": "G4-NC-1034",
    "exam": "SPECIAL_G4",
    "grade": 4,
    "round": "03_ĐẾM SỐ VÀ CHỮ SỐ P1",
    "topic": "03_ĐẾM SỐ VÀ CHỮ SỐ P1",
    "num": 5,
    "text": ". Có bao nhiêu số tự nhiên có 3 chữ số khác nhau?",
    "options": [],
    "answer": "648 số tự nhiên có 3 chữ số khác nhau",
    "acceptedAnswers": [
      "648 số tự nhiên có 3 chữ số khác nhau",
      "648sốtựnhiêncó3chữsốkhácnhau"
    ],
    "explanation": "Lời giải:\r\nGọi số tự nhiên có ba chữ số khác nhau có dạng ̅̅̅̅̅\r\n𝑎𝑏𝑐 (a khác 0; a, b, c khác nhau).\r\n- Chữ số hàng trăm a có 9 cách chọn (từ 1 đến 9).\r\n- Chữ số hàng chục b có 9 cách chọn (từ 0 đến 9, trừ đi 1 chữ số a).\r\n- Chữ số hàng đơn vị c có 8 cách chọn (từ 0 đến 9, trừ đi 2 chữ số a và b).\r\nVậy số các số tự nhiên có ba chữ số khác nhau là: 9 × 9 × 8 = 648 (số)\r\nVậy có 648 số tự nhiên có 3 chữ số khác nhau.",
    "type": "fill"
  },
  {
    "id": "G4-NC-1035",
    "exam": "SPECIAL_G4",
    "grade": 4,
    "round": "03_ĐẾM SỐ VÀ CHỮ SỐ P1",
    "topic": "03_ĐẾM SỐ VÀ CHỮ SỐ P1",
    "num": 6,
    "text": ". Từ ba chữ số 4; 5; 7, viết được bao nhiêu số tự nhiên:\r\na) Có ba chữ số?\r\nb) Có ba chữ số khác nhau?\r\nc) Có ba chữ số khác nhau và là số chẵn?",
    "options": [],
    "answer": "27 số tự nhiên có ba chữ số được viết từ các số trên",
    "acceptedAnswers": [
      "27 số tự nhiên có ba chữ số được viết từ các số trên",
      "27sốtựnhiêncóbachữsốđượcviếttừcácsốtrên"
    ],
    "explanation": "Lời giải:\r\na) Gọi số tự nhiên có ba chữ số có dạng ̅̅̅̅̅\r\n𝑎𝑏𝑐 (a khác 0)\r\nVì bài này không yêu cầu lập số có ba chữ số khác nhau nên các chữ số có thể lặp lại ở các hàng.\r\n- Hàng trăm a có 3 cách chọn.\r\n- Hàng chục b có 3 cách chọn.\r\n- Hàng đơn vị c có 3 cách chọn.\r\nVậy số các số tự nhiên có ba chữ số là: 3 × 3 × 3 = 27 (số)\r\nVậy có 27 số tự nhiên có ba chữ số được viết từ các số trên.\r\nb) Gọi số tự nhiên có ba chữ số khác nhau có dạng ̅̅̅̅̅\r\n𝑎𝑏𝑐 (a khác 0; a, b, c khác nhau).\r\n- Hàng trăm a có 3 cách chọn.\r\n- Hàng chục b có 2 cách chọn (trừ đi 1 chữ số a).\r\n- Hàng đơn vị c có 1 cách chọn (trừ đi 2 chữ số a và b).\r\nVậy số các số tự nhiên có ba chữ số khác nhau là: 3 × 2 × 1 = 6 (số)\r\nVậy có 6 số tự nhiên có ba chữ số khác nhau được viết từ các số trên.\r\n̅̅̅̅̅ (a khác 0; a, b, c khác nhau).\r\nc) Gọi số tự nhiên có ba chữ số khác nhau và là số chẵn có dạng 𝑎𝑏𝑐\r\nLưu ý: Với dạng bài yêu cầu lập số chẵn, ta cần xét chữ số hàng đơn vị trước.\r\n- Hàng đơn vị c có 1 cách chọn (c là 4).\r\n- Hàng trăm a có 2 cách chọn.\r\n- Hàng chục b có 1 cách chọn.\r\n\r\n\r\n\r\nVậy lập được: 1 × 2 × 1 = 2 số chẵn có ba chữ số khác nhau từ các số đã cho.",
    "type": "fill"
  },
  {
    "id": "G4-NC-1036",
    "exam": "SPECIAL_G4",
    "grade": 4,
    "round": "03_ĐẾM SỐ VÀ CHỮ SỐ P1",
    "topic": "03_ĐẾM SỐ VÀ CHỮ SỐ P1",
    "num": 7,
    "text": ". Từ bốn chữ số 0; 2; 8; 9, viết được bao nhiêu số tự nhiên:\r\na) Có ba chữ số?\r\nb) Có ba chữ số khác nhau?",
    "options": [],
    "answer": "48",
    "acceptedAnswers": [
      "48",
      "48"
    ],
    "explanation": "Lời giải:\r\na) Lưu ý: Bài này khác bài trước do yêu cầu lập số có ba chữ số nhưng các chữ số không cần khác\r\nnhau. Như vậy cách chọn các hàng được lặp lại (trừ hàng trăm không được chọn 0).\r\n̅̅̅̅̅ (a khác 0)\r\nGọi số tự nhiên có ba chữ số có dạng 𝑎𝑏𝑐\r\n- Hàng trăm a có 3 cách chọn (không chọn 0)\r\n- Hàng chục b có 4 cách chọn (chọn được chữ số 0)\r\n- Hàng đơn vị c có 4 cách chọn.\r\nVậy viết được tất cả: 3 × 4 × 4 = 48 số có ba chữ số.\r\nb) Lưu ý: Bài này khác Câu 6 ý b vì các chữ số đã cho xuất hiện chữ số 0 nên a không thể chọn\r\nchữ số 0.\r\n̅̅̅̅̅ (a khác 0; a, b, c khác nhau).\r\nGọi số tự nhiên có ba chữ số khác nhau có dạng 𝑎𝑏𝑐\r\n- Hàng trăm a có 3 cách chọn.\r\n- Hàng chục b có 3 cách chọn (trừ đi 1 chữ số a).\r\n- Hàng đơn vị c có 2 cách chọn (trừ đi 2 chữ số a và b).\r\nVậy số các số tự nhiên có ba chữ số khác nhau là: 3 × 3 × 2 = 18 (số)\r\nVậy có 18 số tự nhiên có ba chữ số khác nhau được viết từ các số trên.",
    "type": "fill"
  },
  {
    "id": "G4-NC-1037",
    "exam": "SPECIAL_G4",
    "grade": 4,
    "round": "03_ĐẾM SỐ VÀ CHỮ SỐ P1",
    "topic": "03_ĐẾM SỐ VÀ CHỮ SỐ P1",
    "num": 8,
    "text": ". Từ năm chữ số 0; 1; 7; 6; 8, viết được bao nhiêu số lẻ có ba chữ số khác\r\nnhau?",
    "options": [],
    "answer": "18 số lẻ có ba chữ số khác nhau được viết từ các số trên",
    "acceptedAnswers": [
      "18 số lẻ có ba chữ số khác nhau được viết từ các số trên",
      "18sốlẻcóbachữsốkhácnhauđượcviếttừcácsốtrên"
    ],
    "explanation": "Lời giải:\r\na) Lưu ý: Để làm được bài này ta cần xét chữ số hàng đơn vị trước, sau đó quay lại xét chữ số\r\nhàng trăm.\r\n̅̅̅̅̅ (a khác 0).\r\nGọi số lẻ có ba chữ số khác nhau có dạng 𝑎𝑏𝑐\r\n- Hàng đơn vị c có 2 cách chọn (chọn 1 hoặc 7).\r\n- Hàng trăm a có 3 cách chọn (trừ đi 0 và chữ số c)\r\n- Hàng chục b có 3 cách chọn.\r\nVậy số các số lẻ có ba chữ số khác nhau là: 2 × 3 × 3 = 18 (số)\r\nVậy có 18 số lẻ có ba chữ số khác nhau được viết từ các số trên.\r\n\r\n\r\nTHẦY ĐẶNG VIỆT HÙNG",
    "type": "fill"
  },
  {
    "id": "G4-NC-1038",
    "exam": "SPECIAL_G4",
    "grade": 4,
    "round": "03_ĐẾM SỐ VÀ CHỮ SỐ P1",
    "topic": "03_ĐẾM SỐ VÀ CHỮ SỐ P1",
    "num": 9,
    "text": ". Từ 5 chữ số 0; 1; 3; 6; 8. Viết được bao nhiêu chữ số chẵn có ba chữ số\r\nkhác nhau.",
    "options": [],
    "answer": "tổng cộng: 12 + 18 = 30 số chẵn có ba chữ số khác nhau",
    "acceptedAnswers": [
      "tổng cộng: 12 + 18 = 30 số chẵn có ba chữ số khác nhau",
      "tổngcộng:12+18=30sốchẵncóbachữsốkhácnhau"
    ],
    "explanation": "Lời giải:\r\na) Lưu ý: Để làm được bài này ta cần xét hai trường hợp: Chữ số hàng đơn vị là 0; Chữ số hàng\r\nđơn vị là 6; 8 (Vì khi đó cách chọn chữ số hàng trăm cũng khác nhau).\r\nGọi số chẵn có ba chữ số khác nhau có dạng ̅̅̅̅̅\r\n𝑎𝑏𝑐 (a khác 0).\r\nTH1: Chữ số hàng đơn vị c là 0 thì:\r\n- Chữ số hàng đơn vị c có 1 cách chọn.\r\n- Chữ số hàng trăm a có 4 cách chọn.\r\n- Chữ số hàng chục b có 3 cách chọn.\r\nVậy có: 1 × 4 × 3 = 12 (số)\r\nTH2: Chữ số hàng đơn vị c là 6; 8.\r\n- Chữ số hàng đơn vị c có 2 cách chọn.\r\n- Chữ số hàng trăm a có 3 cách chọn.\r\n- Chữ số hàng chục b có 3 cách chọn.\r\nVậy có: 2 × 3 × 3 = 18 (số)\r\nVậy có tổng cộng: 12 + 18 = 30 số chẵn có ba chữ số khác nhau.",
    "type": "fill"
  },
  {
    "id": "G4-NC-1039",
    "exam": "SPECIAL_G4",
    "grade": 4,
    "round": "03_ĐẾM SỐ VÀ CHỮ SỐ P1",
    "topic": "03_ĐẾM SỐ VÀ CHỮ SỐ P1",
    "num": 10,
    "text": ". Từ các chữ số 0; 1; 4; 6; 9, viết được bao nhiêu số có bốn chữ số khác\r\nnhau?",
    "options": [],
    "answer": "4 × 4 × 3 × 2 = 96 (số)",
    "acceptedAnswers": [
      "4 × 4 × 3 × 2 = 96 (số)",
      "4×4×3×2=96(số)"
    ],
    "explanation": "Lời giải:\r\nGọi số có bốn chữ số khác nhau có dạng ̅̅̅̅̅̅̅\r\n𝑎𝑏𝑐𝑑 (a khác 0).\r\n- Chữ số hàng nghìn a có 4 cách chọn.\r\n- Chữ số hàng trăm b có 4 cách chọn.\r\n- Chữ số hàng chục c có 3 cách chọn.\r\n- Chữ số hàng đơn vị c có 2 cách chọn.\r\nVậy có: 4 × 4 × 3 × 2 = 96 (số)",
    "type": "fill"
  },
  {
    "id": "G4-NC-1040",
    "exam": "SPECIAL_G4",
    "grade": 4,
    "round": "03_ĐẾM SỐ VÀ CHỮ SỐ P1",
    "topic": "03_ĐẾM SỐ VÀ CHỮ SỐ P1",
    "num": 11,
    "text": ". Từ các chữ số 2; 5; 7; 8, viết được bao nhiêu số tự nhiên thoả mãn:\r\na) Có ba chữ số?\r\nb) Có bốn chữ số khác nhau?\r\nc) Là số chẵn, có ba chữ số khác nhau?",
    "options": [],
    "answer": "2 × 3 × 2 = 12 (số)",
    "acceptedAnswers": [
      "2 × 3 × 2 = 12 (số)",
      "2×3×2=12(số)"
    ],
    "explanation": "Lời giải:\r\na) Gọi số có ba chữ số có dạng ̅̅̅̅̅\r\n𝑎𝑏𝑐 (a khác 0).\r\n- Chữ số hàng trăm a có 4 cách chọn.\r\n\r\n\r\n\r\n- Chữ số hàng chục b có 4 cách chọn.\r\n- Chữ số hàng đơn vị c có 4 cách chọn.\r\nVậy có: 4 × 4 × 4 = 64 (số)\r\nb) Gọi số có bốn chữ số khác nhau có dạng ̅̅̅̅̅̅̅\r\n𝑎𝑏𝑐𝑑 .\r\n- Chữ số hàng nghìn a có 4 cách chọn.\r\n- Chữ số hàng trăm b có 3 cách chọn.\r\n- Chữ số hàng chục c có 2 cách chọn.\r\n- Chữ số hàng đơn vị c có 1 cách chọn.\r\nVậy có: 4 × 3 × 2 × 1 = 24 (số)\r\nc) Gọi số chẵn có ba chữ số khác nhau có dạng ̅̅̅̅̅\r\n𝑎𝑏𝑐\r\n- Chữ số hàng đơn vị c có 2 cách chọn.\r\n- Chữ số hàng trăm a có 3 cách chọn.\r\n- Chữ số hàng chục b có 2 cách chọn.\r\nVậy có: 2 × 3 × 2 = 12 (số)",
    "type": "fill"
  },
  {
    "id": "G4-NC-1041",
    "exam": "SPECIAL_G4",
    "grade": 4,
    "round": "03_ĐẾM SỐ VÀ CHỮ SỐ P1",
    "topic": "03_ĐẾM SỐ VÀ CHỮ SỐ P1",
    "num": 12,
    "text": ". Từ các chữ số 0; 1; 2; 8; 9, viết được bao nhiêu số lẻ có bốn chữ số khác\r\nnhau?",
    "options": [],
    "answer": "36 số lẻ có ba chữ số khác nhau được viết từ các số trên",
    "acceptedAnswers": [
      "36 số lẻ có ba chữ số khác nhau được viết từ các số trên",
      "36sốlẻcóbachữsốkhácnhauđượcviếttừcácsốtrên"
    ],
    "explanation": "Lời giải:\r\nLưu ý: Để làm được bài này ta cần xét chữ số hàng đơn vị trước, sau đó quay lại xét chữ\r\nsố hàng nghìn.\r\nGọi số lẻ có bốn chữ số khác nhau có dạng ̅̅̅̅̅̅̅\r\n𝑎𝑏𝑐𝑑 (a khác 0).\r\n- Hàng đơn vị d có 2 cách chọn (chọn 1 hoặc 9).\r\n- Hàng nghìn a có 3 cách chọn (trừ đi 0 và chữ số d)\r\n- Hàng trăm b có 3 cách chọn.\r\n- Hàng đơn vị c có 2 cách chọn.\r\nVậy số các số lẻ có ba chữ số khác nhau là: 2 × 3 × 3 × 2 = 36 (số)\r\nVậy có 36 số lẻ có ba chữ số khác nhau được viết từ các số trên.",
    "type": "fill"
  },
  {
    "id": "G4-NC-1042",
    "exam": "SPECIAL_G4",
    "grade": 4,
    "round": "03_ĐẾM SỐ VÀ CHỮ SỐ P1",
    "topic": "03_ĐẾM SỐ VÀ CHỮ SỐ P1",
    "num": 13,
    "text": ". Từ các chữ số 0; 1; 5; 7; 8, viết được bao nhiêu số có bốn chữ số bé hơn\r\n7000?",
    "options": [],
    "answer": "250",
    "acceptedAnswers": [
      "250",
      "250"
    ],
    "explanation": "Lời giải:\r\n̅̅̅̅̅̅̅ (a khác 0)\r\nGọi số có bốn chữ số có dạng 𝑎𝑏𝑐𝑑\r\n- Hàng nghìn a có 2 cách chọn (chọn 1 hoặc 5 để đảm bảo số đó bé hơn 7 000)\r\n- Hàng trăm b có 5 cách chọn.\r\n- Hàng chục c có 5 cách chọn.\r\n\r\n\r\n\r\n- Hàng đơn vị d có 5 cách chọn.\r\nVậy số các số có bốn chữ số khác nhau là:\r\n2 × 5 × 5 × 5 = 250 (số)",
    "type": "fill"
  },
  {
    "id": "G4-NC-1043",
    "exam": "SPECIAL_G4",
    "grade": 4,
    "round": "03_ĐẾM SỐ VÀ CHỮ SỐ P1",
    "topic": "03_ĐẾM SỐ VÀ CHỮ SỐ P1",
    "num": 14,
    "text": ". Có bao nhiêu số tự nhiên có hai chữ số mà cả hai chữ số đó đều bé hơn\r\n6?",
    "options": [],
    "answer": "30",
    "acceptedAnswers": [
      "30",
      "30"
    ],
    "explanation": "Lời giải:\r\nGọi số có hai chữ số có dạng ̅̅̅\r\n𝑎𝑏 (a khác 0, a và b < 6)\r\n- Hàng chục a có 5 cách chọn (từ 1 đến 5)\r\n- Hàng đơn vị b có 6 cách chọn (từ 0 đến 6)\r\nVậy có số số tự nhiên có hai chữ số mà cả hai chữ số đó đều bé hơn 6 là: 5 × 6 = 30 (số)",
    "type": "fill"
  },
  {
    "id": "G4-NC-1044",
    "exam": "SPECIAL_G4",
    "grade": 4,
    "round": "03_ĐẾM SỐ VÀ CHỮ SỐ P1",
    "topic": "03_ĐẾM SỐ VÀ CHỮ SỐ P1",
    "num": 15,
    "text": ". Có bao nhiêu số tự nhiên có ba chữ số mà cả ba chữ số đó đều lớn hơn 5?",
    "options": [],
    "answer": "64",
    "acceptedAnswers": [
      "64",
      "64"
    ],
    "explanation": "Lời giải:\r\nGọi số có ba chữ số có dạng ̅̅̅̅̅\r\n𝑎𝑏𝑐 (a khác 0, a; b; c > 5)\r\nHàng trăm, hàng chục và hàng đơn vị đều có 4 cách chọn (từ 6 đến 9)\r\nVậy có số số tự nhiên có ba chữ số mà cả ba chữ số đó đều lớn hơn 5 là: 4 × 4 × 4 = 64 (số)",
    "type": "fill"
  },
  {
    "id": "G4-NC-1045",
    "exam": "SPECIAL_G4",
    "grade": 4,
    "round": "03_ĐẾM SỐ VÀ CHỮ SỐ P1",
    "topic": "03_ĐẾM SỐ VÀ CHỮ SỐ P1",
    "num": 16,
    "text": ". Có bao nhiêu số tự nhiên có ba chữ số chứa đúng một chữ số 7?",
    "options": [],
    "answer": "tất cả: 81 + 72 + 72 = 225 số",
    "acceptedAnswers": [
      "tất cả: 81 + 72 + 72 = 225 số",
      "tấtcả:81+72+72=225số"
    ],
    "explanation": "Lời giải:\r\nĐể các số có ba chữ số mà chứa đúng một chữ số 7 thì:\r\n• Chữ số 7 có thể ở 3 vị trí: hàng trăm; hàng chục hoặc hàng đơn vị\r\n• Khi đó các vị trí còn lại là các chữ số khác 7.\r\nTa xét các trừng hợp như sau:\r\nTH1: Chữ số 7 ở hàng trăm thì:\r\n- Hàng trăm có 1 cách chọn (chọn 7)\r\n- Hàng chục có 9 cách chọn (chọn từ 0 đến 9, trừ 7)\r\n- Hàng đơn vị có 9 cách chọn (chọn từ 0 đến 9, trừ 7)\r\n\r\n→ Có: 1 × 9 × 9 = 81 (số)\r\n\r\n\r\n\r\nTH2: Chữ số 7 ở hàng chục thì:\r\n- Hàng chục có 1 cách chọn (chọn 7)\r\n- Hàng trăm có 8 cách chọn (chọn từ 1 đến 9, trừ 7)\r\n- Hàng đơn vị có 9 cách chọn (chọn từ 0 đến 9, trừ 7)\r\n\r\n→ Có: 1 × 8 × 9 = 72 (số)\r\nTH3: Chữ số 7 ở hàng đơn vị thì:\r\n- Hàng đơn vị có 1 cách chọn (chọn 7)\r\n- Hàng trăm có 8 cách chọn (chọn từ 1 đến 9, trừ 7)\r\n- Hàng chục có 9 cách chọn (chọn từ 0 đến 9, trừ 7)\r\n\r\n→ Có: 1 × 8 × 9 = 72 (số)\r\nVậy có tất cả: 81 + 72 + 72 = 225 số.\r\n\r\nTrong quá trình nhận được phản hồi góp ý của bố mẹ và các con. Thầy Hùng xin cảm ơn !",
    "type": "fill"
  },
  {
    "id": "G4-NC-1047",
    "exam": "SPECIAL_G4",
    "grade": 4,
    "round": "04_ĐẾM SỐ VÀ CHỮ SỐ P2",
    "topic": "04_ĐẾM SỐ VÀ CHỮ SỐ P2",
    "num": 1,
    "text": ". Từ các chữ số 0; 1; 2; 8; 9, viết được bao nhiêu số chẵn có bốn chữ số khác\r\nnhau?",
    "options": [],
    "answer": "tổng cộng: 24 + 36 = 60 số chẵn có bốn chữ số khác nhau",
    "acceptedAnswers": [
      "tổng cộng: 24 + 36 = 60 số chẵn có bốn chữ số khác nhau",
      "tổngcộng:24+36=60sốchẵncóbốnchữsốkhácnhau"
    ],
    "explanation": "Lời giải:\r\nLưu ý: Để làm được bài này ta cần xét hai trường hợp: Chữ số hàng đơn vị là 0; Chữ số hàng\r\nđơn vị là 2; 8 (Vì khi đó cách chọn chữ số hàng nghìn cũng khác nhau).\r\n̅̅̅̅̅ 𝑑 (a khác 0).\r\nGọi số chẵn có bốn chữ số khác nhau có dạng 𝑎𝑏𝑐\r\nTH1: Chữ số hàng đơn vị d là 0 thì:\r\n- Chữ số hàng đơn vị d có 1 cách chọn.\r\n- Chữ số hàng nghìn a có 4 cách chọn.\r\n- Chữ số hàng trăm b có 3 cách chọn.\r\n- Chữ số hàng chục c có 2 cách chọn.\r\nVậy có: 1 × 4 × 3 × 2 = 24 (số)\r\nTH2: Chữ số hàng đơn vị d là 2; 8.\r\n- Chữ số hàng đơn vị d có 2 cách chọn.\r\n- Chữ số hàng nghìn a có 3 cách chọn.\r\n- Chữ số hàng trăm b có 3 cách chọn.\r\n- Chữ số hàng chục c có 2 cách chọn.\r\nVậy có: 2 × 3 × 3 × 2 = 36 (số)\r\nVậy có tổng cộng: 24 + 36 = 60 số chẵn có bốn chữ số khác nhau.",
    "type": "fill"
  },
  {
    "id": "G4-NC-1048",
    "exam": "SPECIAL_G4",
    "grade": 4,
    "round": "04_ĐẾM SỐ VÀ CHỮ SỐ P2",
    "topic": "04_ĐẾM SỐ VÀ CHỮ SỐ P2",
    "num": 2,
    "text": ". Có bao nhiêu số tự nhiên:\r\na) Có bốn chữ số khác nhau?\r\nb) Có bốn chữ số khác nhau đều là chữ số chẵn?",
    "options": [],
    "answer": "4 × 4 × 3 × 2 = 96 (số)",
    "acceptedAnswers": [
      "4 × 4 × 3 × 2 = 96 (số)",
      "4×4×3×2=96(số)"
    ],
    "explanation": "Lời giải:\r\na) Gọi số tự nhiên có bốn chữ số khác nhau có dạng ̅̅̅̅̅\r\n𝑎𝑏𝑐 𝑑 (a khác 0).\r\n- Chữ số hàng nghìn a có 9 cách chọn (trừ 0).\r\n- Chữ số hàng trăm b có 9 cách chọn.\r\n- Chữ số hàng chục c có 8 cách chọn.\r\n- Chữ số hàng đơn vị d có 7 cách chọn.\r\nVậy có: 9 × 9 × 8 × 7 = 4 536 (số)\r\nb) Để lập được các số tự nhiên có 4 chữ số khác nhau đều là chữ số chẵn, ta chỉ xét các chữ số: 0;\r\n2; 4; 6; 8\r\n\r\n\r\n\r\n̅̅̅̅̅ 𝑑 (a khác 0).\r\nGọi số tự nhiên có bốn chữ số khác nhau có dạng 𝑎𝑏𝑐\r\n- Chữ số hàng nghìn a có 4 cách chọn (trừ 0).\r\n- Chữ số hàng trăm b có 4 cách chọn.\r\n- Chữ số hàng chục c có 3 cách chọn.\r\n- Chữ số hàng đơn vị d có 2 cách chọn.\r\nVậy có: 4 × 4 × 3 × 2 = 96 (số)",
    "type": "fill"
  },
  {
    "id": "G4-NC-1049",
    "exam": "SPECIAL_G4",
    "grade": 4,
    "round": "04_ĐẾM SỐ VÀ CHỮ SỐ P2",
    "topic": "04_ĐẾM SỐ VÀ CHỮ SỐ P2",
    "num": 3,
    "text": ". Từ bốn chữ số 2; 3; 5; 6, có bao nhiêu số tự nhiên có ba chữ số khác nhau\r\ntừ bốn chữ số trên. Hỏi mỗi chữ số xuất hiện bao nhiêu lần ở mỗi hàng?",
    "options": [],
    "answer": "4 × 3 × 2 = 24 (số)",
    "acceptedAnswers": [
      "4 × 3 × 2 = 24 (số)",
      "4×3×2=24(số)"
    ],
    "explanation": "Lời giải:\r\n+) Gọi số tự nhiên có ba chữ số khác nhau có dạng ̅̅̅̅̅\r\n𝑎𝑏𝑐 (a khác 0).\r\n- Chữ số hàng trăm a có 4 cách chọn.\r\n- Chữ số hàng chục b có 3 cách chọn.\r\n- Chữ số hàng đơn vị c có 2 cách chọn.\r\nVậy có: 4 × 3 × 2 = 24 (số)\r\n+) Muốn biết mỗi chữ số xuất hiện bao nhiêu lần ở mỗi hàng, ta xét:\r\n24 số vừa tìm được có:\r\n- 24 vị trí hàng trăm\r\n- 24 vị trí hàng chục\r\n- 24 vị trí hàng đơn vị\r\nMà 4 chữ số (2; 3; 5; 6) cùng “bình đẳng”, không xuất hiện chữ số 0nên 24 vị trí ấy được chia\r\nđều cho 4 chữ số.\r\nVậy mỗi chữ số xuất hiện số lần ở mỗi hàng là: 24 : 4 = 6 (lần)",
    "type": "fill"
  },
  {
    "id": "G4-NC-1050",
    "exam": "SPECIAL_G4",
    "grade": 4,
    "round": "04_ĐẾM SỐ VÀ CHỮ SỐ P2",
    "topic": "04_ĐẾM SỐ VÀ CHỮ SỐ P2",
    "num": 4,
    "text": ". Có thể lập được bao nhiêu số tự nhiên có ba chữ số khác nhau từ các chữ\r\nsố 0; 1; 2; 8? Hỏi mỗi chữ số xuất hiện bao nhiêu lần ở mỗi hàng?",
    "options": [],
    "answer": "3 × 3 × 2 = 18 (số)",
    "acceptedAnswers": [
      "3 × 3 × 2 = 18 (số)",
      "3×3×2=18(số)"
    ],
    "explanation": "Lời giải:\r\n̅̅̅̅̅ (a khác 0).\r\na) Gọi số tự nhiên có ba chữ số khác nhau có dạng 𝑎𝑏𝑐\r\n- Chữ số hàng trăm a có 3 cách chọn.\r\n- Chữ số hàng chục b có 3 cách chọn.\r\n- Chữ số hàng đơn vị c có 2 cách chọn.\r\nVậy có: 3 × 3 × 2 = 18 (số)\r\nb) Lưu ý: Bài này các chữ số đã cho xuất hiện chữ số 0 nên ta phải tách ra từng trường hợp.\r\n+) Xét hàng trăm a = 0\r\n\r\n\r\n\r\nDo hàng trăm không thể là chữ số 0 nên 18 số lập được có 18 vị trí hàng trăm được chia đều cho\r\n3 chữ số còn lại là 1; 2; 8.\r\nNhư vậy 1; 2; 8 xuất hiện: 18 : 3 = 6 (lần) ở hàng trăm\r\n0 xuất hiện 0 lần ở hàng trăm.\r\n+) Xét hàng chục b = 0\r\nHàng trăm a có 3 cách chọn\r\nHàng đơn vị c có 2 cách chọn.\r\nNhư vậy, các số có chữ số hàng chục là 0 sẽ có 6 số, tương ứng số 0 xuất hiện ở hàng chục 6 lần.\r\nCòn lại 12 số nên 3 số 1; 2; 8 sẽ xuất hiện: 12 : 3 = 4 lần ở các hàng.\r\n+) Xét hàng đơn vị c = 0\r\nHàng trăm a có 3 cách chọn\r\nHàng chục b có 2 cách chọn.\r\nNhư vậy, các số có chữ số hàng đơn vị là 0 sẽ có 6 số, tương ứng số 0 xuất hiện ở hàng đơn vị 6\r\nlần.\r\nCòn lại 12 số nên 3 số 1; 2; 8 sẽ xuất hiện: 12 : 3 = 4 lần ở các hàng.",
    "type": "fill"
  },
  {
    "id": "G4-NC-1051",
    "exam": "SPECIAL_G4",
    "grade": 4,
    "round": "04_ĐẾM SỐ VÀ CHỮ SỐ P2",
    "topic": "04_ĐẾM SỐ VÀ CHỮ SỐ P2",
    "num": 5,
    "text": ". Có thể lập được bao nhiêu số tự nhiên có ba chữ số khác nhau từ các chữ\r\nsố 2; 3; 5? Tính tổng của các số đó.",
    "options": [],
    "answer": "3 × 2 × 1 = 6 (số)",
    "acceptedAnswers": [
      "3 × 2 × 1 = 6 (số)",
      "3×2×1=6(số)"
    ],
    "explanation": "Lời giải:\r\n̅̅̅̅̅ (a khác 0).\r\n+) Gọi số tự nhiên có ba chữ số khác nhau có dạng 𝑎𝑏𝑐\r\n- Chữ số hàng trăm a có 3 cách chọn.\r\n- Chữ số hàng chục b có 2 cách chọn.\r\n- Chữ số hàng đơn vị c có 1 cách chọn.\r\nVậy có: 3 × 2 × 1 = 6 (số)\r\n+) Ta thấy mỗi chữ số xuất hiện: 6 : 3 = 2 (lần) ở mỗi hàng.\r\nTổng các chữ số là: 2 + 3 + 5 = 10\r\nTổng hàng đơn vị là: 10 × 2 = 20 (vì mỗi chữ số xuất hiện 2 lần)\r\nTổng hàng chục là: 10 × 2 × 10 = 200\r\nTổng hàng trăm là: 10 × 2 × 100 = 2 000\r\nTính tổng của 6 số đó là: 20 + 200 + 2 000 = 2 220\r\n\r\n\r\nTHẦY ĐẶNG VIỆT HÙNG",
    "type": "fill"
  },
  {
    "id": "G4-NC-1052",
    "exam": "SPECIAL_G4",
    "grade": 4,
    "round": "04_ĐẾM SỐ VÀ CHỮ SỐ P2",
    "topic": "04_ĐẾM SỐ VÀ CHỮ SỐ P2",
    "num": 6,
    "text": ". Có thể lập được bao nhiêu số tự nhiên có bốn chữ số khác nhau từ các\r\nchữ số 1; 2; 3; 4? Tính tổng của các số đó.",
    "options": [],
    "answer": "4 × 3 × 2 × 1 = 24 (số)",
    "acceptedAnswers": [
      "4 × 3 × 2 × 1 = 24 (số)",
      "4×3×2×1=24(số)"
    ],
    "explanation": "Lời giải:\r\n+) Gọi số tự nhiên có bốn chữ số khác nhau có dạng ̅̅̅̅̅̅̅\r\n𝑎𝑏𝑐𝑑 (a khác 0).\r\n- Chữ số hàng nghìn a có 4 cách chọn.\r\n- Chữ số hàng trăm b có 3 cách chọn.\r\n- Chữ số hàng chục c có 2 cách chọn.\r\n- Chữ số hàng đơn vị d có 1 cách chọn.\r\nVậy có: 4 × 3 × 2 × 1 = 24 (số)\r\n+) Ta thấy mỗi chữ số xuất hiện: 24 : 4 = 6 (lần) ở mỗi hàng.\r\nTổng các chữ số là: 1 + 2 + 3 + 4 = 10\r\nTổng hàng đơn vị là: 10 × 6 = 60 (vì mỗi chữ số xuất hiện 6 lần)\r\nTổng hàng chục là: 10 × 6 × 10 = 600\r\nTổng hàng trăm là: 10 × 6 × 100 = 6 000\r\nTổng hàng nghìn là: 10 × 6 × 1 000 = 60 000\r\nTính tổng của 6 số đó là: 60 + 600 + 6 000 + 60 000 = 66 660",
    "type": "fill"
  },
  {
    "id": "G4-NC-1053",
    "exam": "SPECIAL_G4",
    "grade": 4,
    "round": "04_ĐẾM SỐ VÀ CHỮ SỐ P2",
    "topic": "04_ĐẾM SỐ VÀ CHỮ SỐ P2",
    "num": 7,
    "text": ". Có thể lập được bao nhiêu số tự nhiên có ba chữ số khác nhau từ các chữ\r\nsố 3; 4; 6; 7? Tính tổng của các số đó.",
    "options": [],
    "answer": "4 × 3 × 2 = 24 (số)",
    "acceptedAnswers": [
      "4 × 3 × 2 = 24 (số)",
      "4×3×2=24(số)"
    ],
    "explanation": "Lời giải:\r\n+) Gọi số tự nhiên có ba chữ số khác nhau có dạng ̅̅̅̅̅\r\n𝑎𝑏𝑐 (a khác 0).\r\n- Chữ số hàng trăm a có 4 cách chọn.\r\n- Chữ số hàng chục b có 3 cách chọn.\r\n- Chữ số hàng đơn vị c có 2 cách chọn.\r\nVậy có: 4 × 3 × 2 = 24 (số)\r\n+) Ta thấy mỗi chữ số xuất hiện: 24 : 4 = 6 (lần) ở mỗi hàng.\r\nTổng các chữ số là: 3 + 4 + 6 + 7 = 20\r\nTổng hàng đơn vị là: 20 × 6 = 120 (vì mỗi chữ số xuất hiện 6 lần)\r\nTổng hàng chục là: 20 × 6 × 10 = 1 200\r\nTổng hàng trăm là: 20 × 6 × 100 = 12 000\r\nTính tổng của 6 số đó là: 120 + 1 200 + 12 000 = 13 320\r\n\r\n\r\nTHẦY ĐẶNG VIỆT HÙNG",
    "type": "fill"
  },
  {
    "id": "G4-NC-1054",
    "exam": "SPECIAL_G4",
    "grade": 4,
    "round": "04_ĐẾM SỐ VÀ CHỮ SỐ P2",
    "topic": "04_ĐẾM SỐ VÀ CHỮ SỐ P2",
    "num": 8,
    "text": ". Mật khẩu điện thoại của Thầy Hùng là bốn chữ số mà khi đọc các chữ số\r\ntheo thứ tự từ trái sang phải hay từ phải sang trái đều được cùng một số có bốn chữ số.\r\nHỏi có thể lập được bao nhiêu mật khẩu thoả mãn điều kiện trên?",
    "options": [],
    "answer": "100",
    "acceptedAnswers": [
      "100",
      "100"
    ],
    "explanation": "Lời giải:\r\n̅̅̅̅̅̅̅ .\r\nGọi mật khẩu của thầy Hùng có dạng 𝑎𝑏𝑐𝑑\r\nVì khi đọc các chữ số theo thứ tự từ trái sang phải hay từ phải sang trái đều được cùng một số có\r\nbốn chữ số nên: a = d; b = c\r\nVậy mật khẩu có dạng ̅̅̅̅̅̅̅\r\n𝑎𝑏𝑏𝑎\r\n- a có 10 cách chọn (không cần khác 0 vì đề bài không phải là số có 4 chữ số, chỉ đơn giản là mật\r\nkhẩu 4 chữ số)\r\n- b có 10 cách chọn\r\nVậy có thể lập được: 10 × 10 = 100 mật khẩu thỏa mãn điều kiện trên.",
    "type": "fill"
  },
  {
    "id": "G4-NC-1055",
    "exam": "SPECIAL_G4",
    "grade": 4,
    "round": "04_ĐẾM SỐ VÀ CHỮ SỐ P2",
    "topic": "04_ĐẾM SỐ VÀ CHỮ SỐ P2",
    "num": 9,
    "text": ". Hoàng muốn mở ổ khoá của Nam. Ổ khoá của Nam có ba vòng số, mỗi\r\nvòng số là một chữ số từ 0 đến 9. Nam gợi ý cho Hoàng các chữ số từ trái sang phải: chữ\r\nsố đầu tiên bằng chữ số cuối cùng và là số chẵn; chữ số ở giữa là số lẻ. Hỏi Hoàng phải\r\nthử ít nhất bao nhiêu lần khác nhau để mở được ổ khoá?",
    "options": [],
    "answer": "25",
    "acceptedAnswers": [
      "25",
      "25"
    ],
    "explanation": "Lời giải:\r\nVì chữ số đầu tiên bằng chữ số cuối cùng nên mật khẩu mở ổ khóa của Nam có dạng ̅̅̅̅̅\r\n𝑎𝑏𝑎 .\r\nChữ số đầu tiên và chữ sốcuối cùng là chữ số chẵn nên có 5 cách chọn (0; 2; 4; 6; 8)\r\nChữ số ở giữa là số lẻ nên có 5 cách chọn (1; 3; 5; 7; 9)\r\nVậy Hoàng phải thử ít nhất số lần là: 5 × 5 = 25 lần",
    "type": "fill"
  },
  {
    "id": "G4-NC-1056",
    "exam": "SPECIAL_G4",
    "grade": 4,
    "round": "04_ĐẾM SỐ VÀ CHỮ SỐ P2",
    "topic": "04_ĐẾM SỐ VÀ CHỮ SỐ P2",
    "num": 10,
    "text": ". Một sân vận động bán vé với số sê-ri đánh số từ 00 001 đến 20 000. Người\r\nnào có chiếc vé may mắn sẽ được tặng một đồ uống miễn phí. Một chiếc vé may mắn là\r\nkhi số sê-ri của vé đó có ba chữ số cuối cùng giống nhau. Hỏi có bao nhiêu chiếc vé may\r\nmắn như thế?",
    "options": [],
    "answer": "200 tấm vé may mắn",
    "acceptedAnswers": [
      "200 tấm vé may mắn",
      "200tấmvémaymắn"
    ],
    "explanation": "Lời giải:\r\nGọi những tấm vé may mắn có dạng ̅̅̅̅̅̅̅̅\r\n𝑎𝑏 𝑐𝑐𝑐 .\r\nTa tính từ 00 000 đến 19 999 thì:\r\n- a có 2 cách chọn (0; 1)\r\n- b có 10 cách chọn (từ 0 đến 9)\r\n- c có 10 cách chọn (từ 0 đến 9)\r\nVậy có: 2 × 10 × 10 = 200\r\nTuy nhiên, số 00 000 bị loại do tính từ 00 001 nhưng lại tính thêm số 20 000\r\n\r\n\r\n\r\nVậy có 200 tấm vé may mắn.",
    "type": "fill"
  },
  {
    "id": "G4-NC-1057",
    "exam": "SPECIAL_G4",
    "grade": 4,
    "round": "04_ĐẾM SỐ VÀ CHỮ SỐ P2",
    "topic": "04_ĐẾM SỐ VÀ CHỮ SỐ P2",
    "num": 11,
    "text": ". Có thể lập được bao nhiêu số tự nhiên có bốn chữ số khác nhau từ các\r\nchữ số 1; 2; 4; 5 mà chữ số 2 và 4 luôn đứng cạnh nhau?",
    "options": [],
    "answer": "6",
    "acceptedAnswers": [
      "6",
      "6"
    ],
    "explanation": "Lời giải:\r\nTH1: Khi 2 và 4 đứng cạnh nhau và 2 đứng trước 4 (24)\r\nGọi nhóm chữ số 24 là một chữ số x.\r\nKhi đó, bài toán trở thành: Lập các số có ba chữ số khác nhau từ ba chữ số x; 1; 5.\r\n- Hàng trăm có 3 cách chọn\r\n\r\n- Hàng chục có 2 cách chọn\r\n- Hàng đơn vị có 1 cách chọn\r\nVậy số cách lập trong trường hợp này là: 3 × 2 × 1 = 6 (cách)\r\nTH2: Khi 2 và 4 đứng cạnh nhau và 4 đứng trước 2 (42)\r\nGọi nhóm chữ số 2 là một chữ số y.\r\nTương tự cũng có 6 cách lập.\r\nVậy có tất cả 12 cách lập số có 4 chữ số từ các chữ số 1; 2; 4; 5 mà chữ số 2 và chữ số 4 đứng\r\ncạnh nhau.",
    "type": "fill"
  },
  {
    "id": "G4-NC-1058",
    "exam": "SPECIAL_G4",
    "grade": 4,
    "round": "04_ĐẾM SỐ VÀ CHỮ SỐ P2",
    "topic": "04_ĐẾM SỐ VÀ CHỮ SỐ P2",
    "num": 12,
    "text": ". Năm bạn Hoàng, Hùng, Hưng, Hải và Huy xếp thành một hàng ngang để\r\nchụp ảnh. Hỏi có bao nhiêu cách xếp thành một hàng ngang sao cho bạn Hải và Huy\r\nkhông đứng cạnh nhau?",
    "options": [],
    "answer": "72 cách",
    "acceptedAnswers": [
      "72 cách",
      "72cách"
    ],
    "explanation": "Lời giải:\r\nSố cách xếp năm bạn thành một hàng là: 5 × 4 × 3 × 2 × 1 = 120 (cách)\r\nBây giờ, ta đi tính số cách là Hải và Huy luôn đứng cạnh nhau.\r\n+) TH1: Hải và Huy đứng cạnh nhau và Hải đứng cạnh Huy.\r\nKhi đó ta có 4 đối tượng:\r\n• (Hải, Huy)\r\n• Hoàng\r\n• Hùng\r\n• Hưng\r\nSố cách xếp 4 đối tượng là: 4 × 3 × 2 × 1 = 24 (cách)\r\n+) TH2: Hải và Huy đứng cạnh nhau và Huy đứng cạnh Hải.\r\nTương tự cũng có 24 cách.\r\n\r\n→ Cộng hai trường hợp lại ta có: 24 + 24 = 48 cách để Hải và Huy luôn đứng cạnh nhau.\r\n\r\n\r\n\r\nNhư vậy có số cách xếp thành một hàng ngang sao cho bạn Hải và Huy không đứng cạnh nhau\r\nlà: 120 – 48 = 72 (cách)\r\nĐáp số: 72 cách",
    "type": "fill"
  },
  {
    "id": "G4-NC-1059",
    "exam": "SPECIAL_G4",
    "grade": 4,
    "round": "04_ĐẾM SỐ VÀ CHỮ SỐ P2",
    "topic": "04_ĐẾM SỐ VÀ CHỮ SỐ P2",
    "num": 13,
    "text": ". Có bao nhiêu số tự nhiên có ba chữ số mà tổng các chữ số bằng 5?",
    "options": [],
    "answer": "1",
    "acceptedAnswers": [
      "1",
      "1"
    ],
    "explanation": "Lời giải:\r\nGọi số cần tìm có dạng ̅̅̅̅̅\r\n𝑎𝑏𝑐 (a khác 0)\r\nTH1: a = 1 thì b + c = 4\r\nCác cách chọn b, c là (0; 4), (1; 3), (2; 2), (3; 1), (4; 0).\r\n\r\n→ Có 5 số\r\nTH2: a = 2 thì b + c = 3\r\nCác cách chọn b, c là (0; 3), (1; 2), (2; 1), (3; 0)\r\n\r\n→ Có 4 số\r\nTH3: a = 3 thì b + c = 2\r\nCác cách chọn b, c là (0; 2), (1; 1), (2; 0)\r\n\r\n→ Có 3 số\r\nTH4: a = 4 thì b + c = 1\r\nCác cách chọn b, c là (0; 1), (1; 0)\r\n\r\n→ Có 2 số\r\nTH5: a = 5 thì b + c = 0\r\nCác cách chọn b, c là (0; 0)\r\n\r\n→ Có 1 số\r\nVậy số các số tự nhiên có ba chữ số mà tổng các chữ số bằng 5 là: 5 + 4 + 3 + 2 + 1 = 15 số.",
    "type": "fill"
  },
  {
    "id": "G4-NC-1060",
    "exam": "SPECIAL_G4",
    "grade": 4,
    "round": "04_ĐẾM SỐ VÀ CHỮ SỐ P2",
    "topic": "04_ĐẾM SỐ VÀ CHỮ SỐ P2",
    "num": 14,
    "text": ". Có bao nhiêu số tự nhiên có ba chữ số khác nhau mà tổng các chữ số bằng\r\n7?",
    "options": [],
    "answer": "4 + 4 + 2 + 2 + 2 + 2 = 16 số",
    "acceptedAnswers": [
      "4 + 4 + 2 + 2 + 2 + 2 = 16 số",
      "4+4+2+2+2+2=16số"
    ],
    "explanation": "Lời giải:\r\n̅̅̅̅̅ (a khác 0; a, b, c khác nhau)\r\nGọi số cần tìm có dạng 𝑎𝑏𝑐\r\nTH1: a = 1 thì b + c = 6\r\nCác cách chọn b, c là (0; 6),(2; 4),(4; 2),(6; 0),(5; 1).\r\nLoại (5;1) vì trùng chữ số 1 với a.\r\n\r\n→ Có 4 số\r\nTH2: a = 2 thì b + c = 5\r\n\r\n\r\n\r\nCác cách chọn b, c là (0; 5),(1; 4),(4; 1),(5; 0).\r\n\r\n→ Có 4 số\r\nTH3: a = 3 thì b + c = 4\r\nCác cách chọn b, c là (0; 4),(1; 3),(3; 1),(4; 0).\r\nLoại (1;3) và (3;1) vì trùng chữ số 3 với a.\r\n\r\n→ Có 2 số\r\nTH4: a = 4 thì b + c = 3\r\nCác cách chọn b, c là (0; 3),(1; 2),(2; 1),(3; 0).\r\n\r\n→ Có 4 số\r\nTH5: a = 5 thì b + c = 2\r\nCác cách chọn b, c là (0; 2),(2; 0),(1; 1) .\r\nLoại (1;1) vì trùng nhau.\r\n\r\n→ Có 2 số\r\nTH6: a = 6 thì b + c = 1\r\nCác cách chọn b, c là (0; 1),(1; 0).\r\n\r\n→ Có 2 số\r\nTH7: a = 7 thì b = c = 0\r\n\r\n→ Loại vì trùng nhau\r\nVậy có: 4 + 4 + 2 + 2 + 2 + 2 = 16 số",
    "type": "fill"
  },
  {
    "id": "G4-NC-1061",
    "exam": "SPECIAL_G4",
    "grade": 4,
    "round": "04_ĐẾM SỐ VÀ CHỮ SỐ P2",
    "topic": "04_ĐẾM SỐ VÀ CHỮ SỐ P2",
    "num": 15,
    "text": ". Tổng các chữ số của 2026 là 10. Hỏi có bao nhiêu số tự nhiên có bốn chữ\r\nsố khác nhau bé hơn 3000 và lớn hơn 2000 mà tổng các chữ số là 10?",
    "options": [],
    "answer": "8",
    "acceptedAnswers": [
      "8",
      "8"
    ],
    "explanation": "Lời giải:\r\nVì số cần tìm lớn hơn 2 000 và bé hơn 3 000 nên chữ số hàng nghìn là 2.\r\nGọi số cần tìm có dạng ̅̅̅̅̅̅̅\r\n2 𝑏𝑐𝑑 (b, c, d khác nhau)\r\nĐể tổng các chữ số là 10 thì b + c + d = 8, trong đó b, c, d không là 2.\r\nTa có: 8 = 0 + 1 + 7 = 0 + 3 + 5 = 1 + 3 + 4\r\nTH1: Với bộ (0; 1; 7), ta lập được: 3 × 2 × 1 = 6 số\r\nTH2: Với bộ (0; 3; 5), ta lập được: 3 × 2 × 1 = 6 số\r\nTH3: Với bộ (1; 3; 4), ta lập được: 3 × 2 × 1 = 6 số\r\nVậy số các số cần tìm là: 6 + 6 + 6 = 18 số",
    "type": "fill"
  },
  {
    "id": "G4-NC-1074",
    "exam": "SPECIAL_G4",
    "grade": 4,
    "round": "01_GIÁ TRỊ TRUNG BÌNH P1",
    "topic": "01_GIÁ TRỊ TRUNG BÌNH P1",
    "num": 1,
    "text": "Điểm trung bình của 4 bài kiểm tra Toán đầu tiên của Nam là 85 điểm. Điểm\r\ncủa bài kiểm tra thứ 5 là 95 điểm. Hỏi điểm trung bình của 5 bài kiểm tra của Nam\r\nlà bao nhiêu?\r\n(A) 86\r\n\r\n(B) 87\r\n\r\n(C) 88\r\n\r\n(D) 89\r\n\r\n(E) 90",
    "options": [
      "A. 86",
      "B. 87",
      "C. 88",
      "D. 89"
    ],
    "answer": "(B) 87",
    "acceptedAnswers": [
      "(B) 87",
      "(B)87"
    ],
    "explanation": " Tổng điểm 4 bài đầu: 4 × 85 = 340 điểm.\r\n Tổng điểm 5 bài: 340 + 95 = 435 điểm.\r\n Điểm trung bình 5 bài: 435: 5 = 87 điểm.\r\n→ Đáp án (B) 87",
    "type": "mc"
  },
  {
    "id": "G4-NC-1075",
    "exam": "SPECIAL_G4",
    "grade": 4,
    "round": "01_GIÁ TRỊ TRUNG BÌNH P1",
    "topic": "01_GIÁ TRỊ TRUNG BÌNH P1",
    "num": 2,
    "text": "Trung bình cộng số quả táo hái được trong 3 ngày đầu của một cửa hàng là\r\n120 quả/ngày. Ngày thứ 4 cửa hàng hái được 160 quả. Hỏi trung bình mỗi ngày\r\ntrong 4 ngày đó cửa hàng hái được bao nhiêu quả táo?\r\n(A) 125\r\n\r\n(B) 130\r\n\r\n(C) 135\r\n\r\n(D) 140\r\n\r\n(E) 145",
    "options": [
      "A. 125",
      "B. 130",
      "C. 135",
      "D. 140"
    ],
    "answer": "(B) 130",
    "acceptedAnswers": [
      "(B) 130",
      "(B)130"
    ],
    "explanation": " Tổng số quả 3 ngày đầu: 3 × 120 = 360 quả.\r\n Tổng số quả 4 ngày: 360 + 160 = 520 quả.\r\n Trung bình mỗi ngày: 520: 4 = 130 quả.\r\n→ Đáp án (B) 130",
    "type": "mc"
  },
  {
    "id": "G4-NC-1076",
    "exam": "SPECIAL_G4",
    "grade": 4,
    "round": "01_GIÁ TRỊ TRUNG BÌNH P1",
    "topic": "01_GIÁ TRỊ TRUNG BÌNH P1",
    "num": 3,
    "text": "Số lượng khách hàng trung bình ghé thăm một cửa hàng trong 5 ngày đầu\r\ntuần là 42 người/ngày. Vào ngày thứ 6, có 72 khách hàng ghé thăm. Hỏi số lượng\r\nkhách hàng trung bình mỗi ngày trong 6 ngày đó là bao nhiêu?\r\n(A) 45\r\n\r\n(B) 47\r\n\r\n(C) 48\r\n\r\n(D) 50\r\n\r\n(E) 52",
    "options": [
      "A. 45",
      "B. 47",
      "C. 48",
      "D. 50"
    ],
    "answer": "(B) 47",
    "acceptedAnswers": [
      "(B) 47",
      "(B)47"
    ],
    "explanation": " Tổng số khách 5 ngày đầu: 5 × 42 = 210 người.\r\n Tổng số khách 6 ngày: 210 + 72 = 282 người.\r\n Trung bình 6 ngày: 282: 6 = 47 người.\r\n→ Đáp án (B) 47",
    "type": "mc"
  },
  {
    "id": "G4-NC-1077",
    "exam": "SPECIAL_G4",
    "grade": 4,
    "round": "01_GIÁ TRỊ TRUNG BÌNH P1",
    "topic": "01_GIÁ TRỊ TRUNG BÌNH P1",
    "num": 4,
    "text": "Điểm trung bình của 3 bài kiểm tra Văn của Mai là 8,0 điểm. Để điểm trung\r\nbình sau 4 bài kiểm tra tăng lên 8,25 điểm, thì bài kiểm tra thứ 4 Mai cần đạt bao\r\nnhiêu điểm?\r\n(A) 9,0\r\n\r\n(B) 9,2\r\n\r\n(C) 9,5\r\n\r\n(D) 9,8",
    "options": [
      "A. 9,0",
      "B. 9,2",
      "C. 9,5",
      "D. 9,8"
    ],
    "answer": "(A) 9,0",
    "acceptedAnswers": [
      "(A) 9,0",
      "(A)9,0"
    ],
    "explanation": " Tổng điểm 3 bài đầu: 3 × 8,0 = 24,0 điểm.\r\n Tổng điểm cần đạt sau 4 bài: 4 × 8,25 = 33,0 điểm.\r\n Điểm bài thứ 4 cần đạt: 33,0 − 24,0 = 9,0 điểm.\r\n→ Đáp án (A) 9,0\r\n\r\n(E) 10,0",
    "type": "mc"
  },
  {
    "id": "G4-NC-1078",
    "exam": "SPECIAL_G4",
    "grade": 4,
    "round": "01_GIÁ TRỊ TRUNG BÌNH P1",
    "topic": "01_GIÁ TRỊ TRUNG BÌNH P1",
    "num": 5,
    "text": "Trong 4 trận đấu bóng rổ đầu tiên, Hùng ghi được trung bình 15 điểm mỗi\r\ntrận. Sang trận thứ 5, Hùng ghi được 25 điểm. Hỏi trung bình số điểm Hùng ghi\r\nđược trong mỗi trận sau 5 trận đấu là bao nhiêu?\r\n(A) 16\r\n\r\n(B) 17\r\n\r\n(C) 18\r\n\r\n(D) 19\r\n\r\n(E) 20",
    "options": [
      "A. 16",
      "B. 17",
      "C. 18",
      "D. 19"
    ],
    "answer": "(B) 17",
    "acceptedAnswers": [
      "(B) 17",
      "(B)17"
    ],
    "explanation": " Tổng số điểm 4 trận đầu: 4 × 15 = 60 điểm.\r\n Tổng số điểm 5 trận: 60 + 25 = 85 điểm.\r\n Trung bình 5 trận: 85: 5 = 17 điểm.\r\n→ Đáp án (B) 17",
    "type": "mc"
  },
  {
    "id": "G4-NC-1079",
    "exam": "SPECIAL_G4",
    "grade": 4,
    "round": "01_GIÁ TRỊ TRUNG BÌNH P1",
    "topic": "01_GIÁ TRỊ TRUNG BÌNH P1",
    "num": 6,
    "text": "Trọng lượng trung bình của 4 kiện hàng đầu tiên là 50 kg. Kiện hàng thứ 5\r\nnặng 75 kg. Hỏi trọng lượng trung bình của cả 5 kiện hàng đó là bao nhiêu kg?\r\n(A) 53\r\n\r\n(B) 55\r\n\r\n(C) 57\r\n\r\n(D) 60\r\n\r\n(E) 62",
    "options": [
      "A. 53",
      "B. 55",
      "C. 57",
      "D. 60"
    ],
    "answer": "(B) 55",
    "acceptedAnswers": [
      "(B) 55",
      "(B)55"
    ],
    "explanation": " Tổng trọng lượng 4 kiện đầu: 4 × 50 = 200 kg.\r\n Tổng trọng lượng 5 kiện: 200 + 75 = 275 kg.\r\n Trọng lượng trung bình 5 kiện: 275: 5 = 55 kg.\r\n→ Đáp án (B) 55",
    "type": "mc"
  },
  {
    "id": "G4-NC-1080",
    "exam": "SPECIAL_G4",
    "grade": 4,
    "round": "01_GIÁ TRỊ TRUNG BÌNH P1",
    "topic": "01_GIÁ TRỊ TRUNG BÌNH P1",
    "num": 7,
    "text": "Một vận động viên chạy bộ có vận tốc trung bình trong 3 giờ đầu là 12\r\nkm/giờ. Ở giờ thứ 4, vận động viên đó chạy được 16 km. Hỏi vận tốc trung bình\r\ntrong cả 4 giờ chạy của vận động viên đó là bao nhiêu km/giờ?\r\n(A) 12,5\r\n\r\n(B) 13\r\n\r\n(C) 13,5\r\n\r\n(D) 14\r\n\r\n(E) 14,5",
    "options": [
      "A. 12,5",
      "B. 13",
      "C. 13,5",
      "D. 14"
    ],
    "answer": "(B) 13",
    "acceptedAnswers": [
      "(B) 13",
      "(B)13"
    ],
    "explanation": " Tổng quãng đường 3 giờ đầu: 3 × 12 = 36 km.\r\n Tổng quãng đường 4 giờ: 36 + 16 = 52 km.\r\n Vận tốc trung bình 4 giờ: 52: 4 = 13 km/giờ.\r\n→ Đáp án (B) 13",
    "type": "mc"
  },
  {
    "id": "G4-NC-1081",
    "exam": "SPECIAL_G4",
    "grade": 4,
    "round": "01_GIÁ TRỊ TRUNG BÌNH P1",
    "topic": "01_GIÁ TRỊ TRUNG BÌNH P1",
    "num": 8,
    "text": "Điểm trung bình 4 bài kiểm tra Khoa học của Linh là 78 điểm. Bài kiểm tra\r\nthứ 5 Linh đạt 98 điểm. Hỏi điểm trung bình của 5 bài kiểm tra của Linh là bao\r\nnhiêu?\r\n(A) 81\r\n\r\n(B) 82\r\n\r\n(C) 83",
    "options": [
      "A. 81",
      "B. 82",
      "C. 83"
    ],
    "answer": "(B) 82",
    "acceptedAnswers": [
      "(B) 82",
      "(B)82"
    ],
    "explanation": " Tổng điểm 4 bài đầu: 4 × 78 = 312 điểm.\r\n Tổng điểm 5 bài: 312 + 98 = 410 điểm.\r\n Điểm trung bình 5 bài: 410: 5 = 82 điểm.\r\n→ Đáp án (B) 82\r\n\r\n(D) 84\r\n\r\n(E) 85",
    "type": "mc"
  },
  {
    "id": "G4-NC-1082",
    "exam": "SPECIAL_G4",
    "grade": 4,
    "round": "01_GIÁ TRỊ TRUNG BÌNH P1",
    "topic": "01_GIÁ TRỊ TRUNG BÌNH P1",
    "num": 9,
    "text": "Số tiền tiết kiệm trung bình trong 3 tháng đầu năm của Bình là 200 nghìn\r\nđồng/tháng. Sang tháng thứ 4, Bình tiết kiệm được 360 nghìn đồng. Hỏi số tiền tiết\r\nkiệm trung bình mỗi tháng trong 4 tháng đó của Bình là bao nhiêu nghìn đồng?\r\n(A) 220\r\n\r\n(B) 230\r\n\r\n(C) 240\r\n\r\n(D) 250\r\n\r\n(E) 260",
    "options": [
      "A. 220",
      "B. 230",
      "C. 240",
      "D. 250"
    ],
    "answer": "(C) 240",
    "acceptedAnswers": [
      "(C) 240",
      "(C)240"
    ],
    "explanation": " Tổng tiền 3 tháng đầu: 3 × 200 = 600 nghìn đồng.\r\n Tổng tiền 4 tháng: 600 + 360 = 960 nghìn đồng.\r\n Trung bình mỗi tháng: 960: 4 = 240 nghìn đồng.\r\n→ Đáp án (C) 240",
    "type": "mc"
  },
  {
    "id": "G4-NC-1083",
    "exam": "SPECIAL_G4",
    "grade": 4,
    "round": "01_GIÁ TRỊ TRUNG BÌNH P1",
    "topic": "01_GIÁ TRỊ TRUNG BÌNH P1",
    "num": 10,
    "text": "Một học sinh có điểm trung bình 4 bài kiểm tra là 8,0. Bài kiểm tra thứ 5 học\r\nsinh đó được bao nhiêu điểm để trung bình 5 bài tăng lên 8,4?\r\n(A) 9,0\r\n\r\n(B) 9,5\r\n\r\n(C) 10,0\r\n\r\n(D) 8,8\r\n\r\n(E) 9,2",
    "options": [
      "A. 9,0",
      "B. 9,5",
      "C. 10,0",
      "D. 8,8"
    ],
    "answer": "(C) 10,0",
    "acceptedAnswers": [
      "(C) 10,0",
      "(C)10,0"
    ],
    "explanation": " Tổng điểm 4 bài đầu: 4 × 8,0 = 32 điểm.\r\n Tổng điểm 5 bài (để TB = 8,4): 5 × 8,4 = 42 điểm.\r\n Điểm bài thứ 5: 42 − 32 = 10,0 điểm.\r\n→ Đáp án (C) 10,0",
    "type": "mc"
  },
  {
    "id": "G4-NC-1084",
    "exam": "SPECIAL_G4",
    "grade": 4,
    "round": "01_GIÁ TRỊ TRUNG BÌNH P1",
    "topic": "01_GIÁ TRỊ TRUNG BÌNH P1",
    "num": 11,
    "text": "Một cửa hàng có doanh thu trung bình 30 triệu đồng/ngày trong 4 ngày đầu\r\ntuần. Ngày thứ 5, doanh thu đạt 50 triệu. Hỏi doanh thu trung bình 5 ngày là bao\r\nnhiêu?\r\n(A) 32\r\n\r\n(B) 34\r\n\r\n(C) 36\r\n\r\n(D) 38\r\n\r\n(E) 40",
    "options": [
      "A. 32",
      "B. 34",
      "C. 36",
      "D. 38"
    ],
    "answer": "(B) 34",
    "acceptedAnswers": [
      "(B) 34",
      "(B)34"
    ],
    "explanation": " Tổng doanh thu 4 ngày đầu: 4 × 30 = 120 triệu.\r\n Doanh thu ngày 5: 50 triệu.\r\n Tổng doanh thu 5 ngày: 120 + 50 = 170 triệu.\r\n Trung bình 5 ngày: 170 : 5 = 34 triệu/ngày.\r\n→ Đáp án (B) 34",
    "type": "mc"
  },
  {
    "id": "G4-NC-1085",
    "exam": "SPECIAL_G4",
    "grade": 4,
    "round": "01_GIÁ TRỊ TRUNG BÌNH P1",
    "topic": "01_GIÁ TRỊ TRUNG BÌNH P1",
    "num": 12,
    "text": "Trung bình tuổi của 5 người trong một nhóm là 24. Khi thêm một người mới,\r\ntrung bình tuổi cả nhóm là 25. Hỏi người mới bao nhiêu tuổi?\r\n(A) 28\r\n\r\n(B) 29\r\n\r\n(C) 30",
    "options": [
      "A. 28",
      "B. 29",
      "C. 30"
    ],
    "answer": "(C) 30",
    "acceptedAnswers": [
      "(C) 30",
      "(C)30"
    ],
    "explanation": " Tổng tuổi 5 người: 5 × 24 = 120.\r\n Tổng tuổi 6 người (TB = 25): 6 × 25 = 150.\r\n Tuổi người mới: 150 − 120 = 30 tuổi.\r\n→ Đáp án (C) 30\r\n\r\n(D) 31\r\n\r\n(E) 32",
    "type": "mc"
  },
  {
    "id": "G4-NC-1086",
    "exam": "SPECIAL_G4",
    "grade": 4,
    "round": "01_GIÁ TRỊ TRUNG BÌNH P1",
    "topic": "01_GIÁ TRỊ TRUNG BÌNH P1",
    "num": 13,
    "text": "Một lớp có 30 học sinh, điểm trung bình môn Toán là 7,0. Nếu 10 học sinh\r\ntrong đó có điểm trung bình 8,0 thì 20 học sinh còn lại có điểm trung bình là bao\r\nnhiêu?\r\n(A) 6,0\r\n\r\n(B) 6,3\r\n\r\n(C) 6,5\r\n\r\n(D) 6,7\r\n\r\n(E) 7,0",
    "options": [
      "A. 6,0",
      "B. 6,3",
      "C. 6,5",
      "D. 6,7"
    ],
    "answer": "(C) 6,5",
    "acceptedAnswers": [
      "(C) 6,5",
      "(C)6,5"
    ],
    "explanation": " Tổng điểm 30 học sinh: 30 × 7,0 = 210.\r\n Tổng điểm 10 học sinh (TB 8,0): 10 × 8,0 = 80.\r\n Tổng điểm 20 học sinh còn lại: 210 − 80 = 130.\r\n Trung bình 20 học sinh còn lại: 130 : 20 = 6,5.\r\n→ Đáp án (C) 6,5",
    "type": "mc"
  },
  {
    "id": "G4-NC-1087",
    "exam": "SPECIAL_G4",
    "grade": 4,
    "round": "01_GIÁ TRỊ TRUNG BÌNH P1",
    "topic": "01_GIÁ TRỊ TRUNG BÌNH P1",
    "num": 14,
    "text": "Trung bình của 10 số là 20. Nếu thay một số bằng số khác lớn hơn nó 15 đơn\r\nvị, trung bình mới là bao nhiêu?\r\n(A) 20,5\r\n\r\n(B) 21\r\n\r\n(C) 21,5\r\n\r\n(D) 22\r\n\r\n(E) 22,5",
    "options": [
      "A. 20,5",
      "B. 21",
      "C. 21,5",
      "D. 22"
    ],
    "answer": "(C) 21,5",
    "acceptedAnswers": [
      "(C) 21,5",
      "(C)21,5"
    ],
    "explanation": " Tổng 10 số ban đầu: 10 × 20 = 200.\r\n Thay một số bằng số lớn hơn 15 đơn vị → tổng mới: 200 + 15 = 215.\r\n Trung bình mới: 215 : 10 = 21,5.\r\n→ Đáp án (C) 21,5",
    "type": "mc"
  },
  {
    "id": "G4-NC-1088",
    "exam": "SPECIAL_G4",
    "grade": 4,
    "round": "01_GIÁ TRỊ TRUNG BÌNH P1",
    "topic": "01_GIÁ TRỊ TRUNG BÌNH P1",
    "num": 15,
    "text": "Trung bình 6 ngày đầu tháng, một cửa hàng bán được 40 sản phẩm/ngày.\r\nTrung bình 24 ngày còn lại trong tháng (30 ngày), cửa hàng bán được 55 sản\r\nphẩm/ngày. Hỏi trung bình cả tháng bán được bao nhiêu sản phẩm/ngày?\r\n(A) 50\r\n\r\n(B) 51\r\n\r\n(C) 52\r\n\r\n(D) 53",
    "options": [
      "A. 50",
      "B. 51",
      "C. 52",
      "D. 53"
    ],
    "answer": "(C) 52",
    "acceptedAnswers": [
      "(C) 52",
      "(C)52"
    ],
    "explanation": " Tổng sản phẩm 6 ngày đầu: 6 × 40 = 240 sản phẩm.\r\n Tổng sản phẩm 24 ngày còn lại: 24 × 55 = 1320 sản phẩm.\r\n Tổng sản phẩm cả tháng (30 ngày): 240 + 1320 = 1560 sản phẩm.\r\n Trung bình cả tháng: 1560 : 30 = 52 sản phẩm/ngày.\r\n→ Đáp án (C) 52\r\n\r\n(E) 54",
    "type": "mc"
  },
  {
    "id": "G4-NC-1089",
    "exam": "SPECIAL_G4",
    "grade": 4,
    "round": "02_GIÁ TRỊ TRUNG BÌNH P2",
    "topic": "02_GIÁ TRỊ TRUNG BÌNH P2",
    "num": 1,
    "text": "Số thứ nhất là 124. Số thứ hai bằng một nửa số thứ nhất. Số thứ ba bằng trung\r\nbình cộng 3 số. Hỏi số thứ ba bằng bao nhiêu?",
    "options": [],
    "answer": "93",
    "acceptedAnswers": [
      "93",
      "93"
    ],
    "explanation": " Số thứ hai là 124 : 2 = 62\r\n Tổng của 3 số là: 124 + 62 + ST3 = 3  ×  ST3 → ST3 = 186 : 2 = 93\r\n→ Đáp án: 93",
    "type": "fill"
  },
  {
    "id": "G4-NC-1090",
    "exam": "SPECIAL_G4",
    "grade": 4,
    "round": "02_GIÁ TRỊ TRUNG BÌNH P2",
    "topic": "02_GIÁ TRỊ TRUNG BÌNH P2",
    "num": 2,
    "text": "Số thứ nhất là 150. Số thứ hai gấp 3 lần số thứ nhất. Số thứ ba bằng trung\r\nbình cộng 3 số. Hỏi số thứ ba bằng bao nhiêu?",
    "options": [],
    "answer": "300",
    "acceptedAnswers": [
      "300",
      "300"
    ],
    "explanation": " Số thứ hai là 150 × 3 = 450\r\n Tổng của 3 số là: 150 + 450 + ST3 = 3 × ST3 → ST3 = (150 + 450) : 2 = 300\r\n→ Đáp án: 300",
    "type": "fill"
  },
  {
    "id": "G4-NC-1091",
    "exam": "SPECIAL_G4",
    "grade": 4,
    "round": "02_GIÁ TRỊ TRUNG BÌNH P2",
    "topic": "02_GIÁ TRỊ TRUNG BÌNH P2",
    "num": 3,
    "text": "Số thứ nhất là 210. Số thứ hai bằng 1/3 số thứ nhất. Số thứ ba bằng trung bình\r\ncộng 3 số. Hỏi số thứ ba bằng bao nhiêu?",
    "options": [],
    "answer": "140",
    "acceptedAnswers": [
      "140",
      "140"
    ],
    "explanation": " Số thứ hai là 210 : 3 = 70\r\n Tổng của 3 số là: 210 + 70 + ST3 = 3 × ST3 → ST3 = (210 + 70) : 2 = 140\r\n→ Đáp án: 140",
    "type": "fill"
  },
  {
    "id": "G4-NC-1092",
    "exam": "SPECIAL_G4",
    "grade": 4,
    "round": "02_GIÁ TRỊ TRUNG BÌNH P2",
    "topic": "02_GIÁ TRỊ TRUNG BÌNH P2",
    "num": 4,
    "text": "Số thứ nhất là 84. Số thứ hai lớn hơn số thứ nhất 16 đơn vị. Số thứ ba bằng\r\ntrung bình cộng 3 số. Hỏi số thứ ba bằng bao nhiêu?",
    "options": [],
    "answer": "92",
    "acceptedAnswers": [
      "92",
      "92"
    ],
    "explanation": " Số thứ hai là 84 + 16 = 100\r\n Tổng của 3 số là: 84 + 100 + ST3 = 3 × ST3 → ST3 = (84 + 100) : 2 = 92\r\n→ Đáp án: 92",
    "type": "fill"
  },
  {
    "id": "G4-NC-1093",
    "exam": "SPECIAL_G4",
    "grade": 4,
    "round": "02_GIÁ TRỊ TRUNG BÌNH P2",
    "topic": "02_GIÁ TRỊ TRUNG BÌNH P2",
    "num": 5,
    "text": "Số thứ nhất là 90. Số thứ hai bằng 2/3 số thứ nhất. Số thứ ba bằng trung bình\r\ncộng 3 số. Hỏi số thứ ba bằng bao nhiêu?",
    "options": [],
    "answer": "75",
    "acceptedAnswers": [
      "75",
      "75"
    ],
    "explanation": " Số thứ hai là 90 : 3 × 2 = 60\r\n Tổng của 3 số là: 90 + 60 + ST3 = 3 × ST3 → ST3 = (90 + 60) : 2 = 75\r\n\r\n→ Đáp án: 75",
    "type": "fill"
  },
  {
    "id": "G4-NC-1094",
    "exam": "SPECIAL_G4",
    "grade": 4,
    "round": "02_GIÁ TRỊ TRUNG BÌNH P2",
    "topic": "02_GIÁ TRỊ TRUNG BÌNH P2",
    "num": 6,
    "text": "Số thứ nhất là 45. Số thứ hai gấp 2 lần số thứ nhất. Số thứ ba bằng tổng số\r\nthứ nhất và số thứ hai. Số thứ tư bằng trung bình cộng 4 số. Hỏi số thứ tư bằng bao\r\nnhiêu?",
    "options": [],
    "answer": "90",
    "acceptedAnswers": [
      "90",
      "90"
    ],
    "explanation": " Số thứ hai là 45 × 2 = 90\r\n Số thứ ba là 45 + 90 = 135\r\n\r\n Tổng của 4 số là: 45 + 90 + 135 + ST4 = 4 × ST4\r\n→ 3 × ST4 = 45 + 90 + 135 = 270 → ST4 = 270 : 3 = 90\r\n→ Đáp án: 90",
    "type": "fill"
  },
  {
    "id": "G4-NC-1095",
    "exam": "SPECIAL_G4",
    "grade": 4,
    "round": "02_GIÁ TRỊ TRUNG BÌNH P2",
    "topic": "02_GIÁ TRỊ TRUNG BÌNH P2",
    "num": 7,
    "text": "Số thứ nhất là 60. Số thứ hai bằng một nửa số thứ nhất. Số thứ ba gấp 3 lần\r\nsố thứ hai. Số thứ tư bằng trung bình cộng 4 số. Hỏi số thứ tư bằng bao nhiêu?",
    "options": [],
    "answer": "60",
    "acceptedAnswers": [
      "60",
      "60"
    ],
    "explanation": " Số thứ hai là 60 : 2 = 30\r\n Số thứ ba là 30 × 3 = 90\r\n Tổng của 4 số là: 60 + 30 + 90 + ST4 = 4 × ST4\r\n→ 3 × ST4 = 60 + 30 + 90 = 180 → ST4 = 180 : 3 = 60\r\n→ Đáp án: 60",
    "type": "fill"
  },
  {
    "id": "G4-NC-1096",
    "exam": "SPECIAL_G4",
    "grade": 4,
    "round": "02_GIÁ TRỊ TRUNG BÌNH P2",
    "topic": "02_GIÁ TRỊ TRUNG BÌNH P2",
    "num": 8,
    "text": "Số thứ nhất là 75. Số thứ hai gấp 3 lần số thứ nhất. Số thứ ba bằng tổng số\r\nthứ nhất và số thứ hai. Số thứ tư bằng trung bình cộng 4 số. Hỏi số thứ tư bằng bao\r\nnhiêu?",
    "options": [],
    "answer": "200",
    "acceptedAnswers": [
      "200",
      "200"
    ],
    "explanation": " Số thứ hai là 75 × 3 = 225\r\n Số thứ ba là 75 + 225 = 300\r\n Tổng của 4 số là: 75 + 225 + 300 + ST4 = 4 × ST4\r\n→ 3 × ST4 = 75 + 225 + 300 = 600 → ST4 = 600 : 3 = 200\r\n→ Đáp án: 200",
    "type": "fill"
  },
  {
    "id": "G4-NC-1097",
    "exam": "SPECIAL_G4",
    "grade": 4,
    "round": "02_GIÁ TRỊ TRUNG BÌNH P2",
    "topic": "02_GIÁ TRỊ TRUNG BÌNH P2",
    "num": 9,
    "text": "Số thứ nhất là 32. Số thứ hai gấp đôi số thứ nhất. Số thứ ba bằng tổng số thứ\r\nnhất và số thứ hai. Số thứ tư gấp 3 lần số thứ nhất. Số thứ năm bằng trung bình cộng\r\n5 số. Hỏi số thứ năm bằng bao nhiêu?",
    "options": [],
    "answer": "72",
    "acceptedAnswers": [
      "72",
      "72"
    ],
    "explanation": " Số thứ hai là 32 × 2 = 64\r\n Số thứ ba là 32 + 64 = 96\r\n Số thứ tư là 32 × 3 = 96\r\n Tổng của 5 số là: 32 + 64 + 96 + 96 + ST5 = 5 × ST5\r\n→ 4 × ST5 = 32 + 64 + 96 + 96 = 288 → ST5 = 288 : 4 = 72\r\n→ Đáp án: 72",
    "type": "fill"
  },
  {
    "id": "G4-NC-1098",
    "exam": "SPECIAL_G4",
    "grade": 4,
    "round": "02_GIÁ TRỊ TRUNG BÌNH P2",
    "topic": "02_GIÁ TRỊ TRUNG BÌNH P2",
    "num": 10,
    "text": "Số thứ nhất là 40. Số thứ hai bằng một nửa số thứ nhất. Số thứ ba gấp 2 lần\r\nsố thứ hai. Số thứ tư gấp 3 lần số thứ nhất. Số thứ năm bằng trung bình cộng 5 số.\r\nHỏi số thứ năm bằng bao nhiêu?",
    "options": [],
    "answer": "55",
    "acceptedAnswers": [
      "55",
      "55"
    ],
    "explanation": " Số thứ hai là 40 : 2 = 20\r\n Số thứ ba là 20 × 2 = 40\r\n Số thứ tư là 40 × 3 = 120\r\n Tổng của 5 số là: 40 + 20 + 40 + 120 + ST5 = 5 × ST5\r\n\r\n→ 4 × ST5 = 40 + 20 + 40 + 120 = 220 → ST5 = 220 : 4 = 55\r\n→ Đáp án: 55",
    "type": "fill"
  },
  {
    "id": "G4-NC-1099",
    "exam": "SPECIAL_G4",
    "grade": 4,
    "round": "02_GIÁ TRỊ TRUNG BÌNH P2",
    "topic": "02_GIÁ TRỊ TRUNG BÌNH P2",
    "num": 11,
    "text": "Cô Lan có 25 học sinh trong lớp. Điểm trung bình bài kiểm tra của cả lớp là\r\n72. Sau khi loại bỏ điểm cao nhất, điểm trung bình của các bạn còn lại là 71. Hỏi điểm\r\ncao nhất là bao nhiêu?",
    "options": [],
    "answer": "1800",
    "acceptedAnswers": [
      "1800",
      "1800"
    ],
    "explanation": " Tổng điểm ban đầu của 25 học sinh: 25 × 72 = 1800\r\n Sau khi loại bỏ điểm cao nhất, còn 24 học sinh, tổng điểm: 24 × 71 = 1704\r\n Điểm cao nhất bằng hiệu hai tổng: 1800 − 1704 = 96",
    "type": "fill"
  },
  {
    "id": "G4-NC-1100",
    "exam": "SPECIAL_G4",
    "grade": 4,
    "round": "02_GIÁ TRỊ TRUNG BÌNH P2",
    "topic": "02_GIÁ TRỊ TRUNG BÌNH P2",
    "num": 12,
    "text": "Nhóm học tập có 15 bạn, điểm trung bình là 68. Một bạn mới gia nhập nhóm\r\nvà điểm trung bình của cả nhóm trở thành 69. Hỏi bạn mới có điểm là bao nhiêu?",
    "options": [],
    "answer": "1020",
    "acceptedAnswers": [
      "1020",
      "1020"
    ],
    "explanation": " Tổng điểm của 15 bạn ban đầu: 15 × 68 = 1020\r\n Sau khi thêm bạn mới, nhóm có 16 bạn, tổng điểm: 16 × 69 = 1104\r\n Điểm của bạn mới: 1104 − 1020 = 84",
    "type": "fill"
  },
  {
    "id": "G4-NC-1108",
    "exam": "SPECIAL_G4",
    "grade": 4,
    "round": "03_SỐ NGUYÊN TỐ P1",
    "topic": "03_SỐ NGUYÊN TỐ P1",
    "num": 8,
    "text": "Cho 𝑥 là một số tự nhiên. Biết 𝑥 + 1 là một số nguyên tố và 𝑥 + 3 cũng là một\r\nsố nguyên tố. Giá trị của 𝑥 là:\r\n(A) 1\r\n\r\n9.\r\n\r\n(B) 2\r\n\r\n(C) 3\r\n\r\n(D) 4\r\n\r\n(E) 5\r\n\r\n[ĐVH] Tìm số tự nhiên 𝑎 sao cho 𝑎 + 2 và 𝑎 + 4 đều là các số nguyên tố.\r\n(A) 1\r\n\r\n(B) 2\r\n\r\n(C) 3\r\n\r\n(D) 5\r\n\r\n(E) 7",
    "options": [
      "A. 1",
      "B. 2",
      "C. 3",
      "D. 4",
      "A. 1",
      "B. 2",
      "C. 3",
      "D. 5"
    ],
    "answer": "A",
    "acceptedAnswers": [
      "A",
      "A"
    ],
    "explanation": "Lời giải chi tiết đang được cập nhật.",
    "type": "mc"
  },
  {
    "id": "G4-NC-1109",
    "exam": "SPECIAL_G4",
    "grade": 4,
    "round": "03_SỐ NGUYÊN TỐ P1",
    "topic": "03_SỐ NGUYÊN TỐ P1",
    "num": 10,
    "text": "Cho 𝑛 là số tự nhiên. Biết 𝑛 + 1 là số nguyên tố và 𝑛 + 7 cũng là số nguyên\r\ntố. Giá trị của 𝑛 có thể là:\r\n(A) 2\r\n\r\n11.\r\n\r\n(C) 6\r\n\r\n(D) 8\r\n\r\n(E) 10\r\n\r\n[ĐVH] Biết 𝑦 − 1 và 𝑦 + 3 đều là số nguyên tố (với 𝑦 là số tự nhiên). Giá trị của 𝑦 là:\r\n(A) 2\r\n\r\n12.\r\n\r\n(B) 4\r\n\r\n(B) 3\r\n\r\n(C) 4\r\n\r\n(D) 5\r\n\r\n(E) 6\r\n\r\n[ĐVH] Biết 𝑘 + 5 là số nguyên tố và 𝑘 + 7 là số nguyên tố (với 𝑘 là số tự nhiên). Giá\r\ntrị nhỏ nhất của 𝑘 là:\r\n(A) 0\r\n\r\n13.\r\n\r\n(B) 1\r\n\r\n(C) 2\r\n\r\n(D) 3\r\n\r\n(E) 4\r\n\r\n[ĐVH] Cho 𝑥 là số tự nhiên, biết rằng 𝑥 + 2 là số nguyên tố và 𝑥 + 10 cũng là số\r\nnguyên tố. Giá trị của 𝑥 là:\r\n(A) 1\r\n\r\n14.\r\n\r\n(B) 3\r\n\r\n(C) 5\r\n\r\n(D) 7\r\n\r\n(E) 9\r\n\r\n[ĐVH] Biết 𝑎 là một số tự nhiên lẻ sao cho 𝑎 + 2 và 𝑎 + 6 đều là số nguyên tố. Giá trị\r\ncủa 𝑎 là:\r\n(A) 1\r\n\r\n15.\r\n\r\n(B) 3\r\n\r\n(C) 5\r\n\r\n(D) 7\r\n\r\n(E) 9\r\n\r\n[ĐVH] Cho 𝑛 là số tự nhiên lớn hơn 0. Nếu 𝑛 + 3 và 𝑛 + 9 đều là số nguyên tố, thì\r\ngiá trị của 𝑛 là:\r\n(A) 2\r\n\r\n16.\r\n\r\n(B) 4\r\n\r\n(C) 8\r\n\r\n(D) 10\r\n\r\n(E) 12\r\n\r\n[ĐVH] Cho 𝑚 là số tự nhiên. Các biểu thức 𝑚 + 1, 𝑚 + 3 và 𝑚 + 7 đều là số nguyên\r\ntố. Giá trị của 𝑚 là:\r\n(A) 1\r\n\r\n17.\r\n\r\n(B) 2\r\n\r\n(C) 3\r\n\r\n(D) 4\r\n\r\n[ĐVH] Tìm số tự nhiên 𝑝 sao cho 𝑝 + 1, 𝑝 + 5 và 𝑝 + 7 đồng thời là các số nguyên tố.\r\n(A) 1\r\n\r\n(B) 2\r\n\r\n(C) 3\r\n\r\n(D) 4\r\n\r\n(E) 5",
    "options": [
      "A. 2",
      "C. 6",
      "D. 8",
      "A. 2",
      "B. 4",
      "B. 3",
      "C. 4",
      "D. 5",
      "A. 0",
      "B. 1",
      "C. 2",
      "D. 3",
      "A. 1",
      "B. 3",
      "C. 5",
      "D. 7",
      "A. 1",
      "B. 3",
      "C. 5",
      "D. 7",
      "A. 2",
      "B. 4",
      "C. 8",
      "D. 10",
      "A. 1",
      "B. 2",
      "C. 3",
      "D. 4",
      "A. 1",
      "B. 2",
      "C. 3",
      "D. 4"
    ],
    "answer": "A",
    "acceptedAnswers": [
      "A",
      "A"
    ],
    "explanation": "Lời giải chi tiết đang được cập nhật.",
    "type": "mc"
  },
  {
    "id": "G4-NC-1128",
    "exam": "SPECIAL_G4",
    "grade": 4,
    "round": "05_BÀI TOÁN GÀ VÀ THỎ",
    "topic": "05_BÀI TOÁN GÀ VÀ THỎ",
    "num": 1,
    "text": "A farmer has 30 chickens and rabbits altogether. There are only 100 legs.\r\nFind the number of chickens and the number of rabbits that the farmer has.\r\nMột người nông dân có tất cả 30 con gà và thỏ. Tổng cộng có 100 cái chân. Hãy tìm số gà\r\nvà số thỏ mà người nông dân đó có.",
    "options": [],
    "answer": "20 con thỏ và 10 con gà",
    "acceptedAnswers": [
      "20 con thỏ và 10 con gà",
      "20conthỏvà10congà"
    ],
    "explanation": " Giả sử tất cả là gà, số chân là 30  ×  2 = 60 chân\r\n Số chân bị thiếu là 100 – 60 = 40\r\n Sự chênh lệch số chân khi coi 1 gà là 1 thỏ là 4 – 2 = 2 (chân)\r\n Số thỏ là 40 : 2 = 20 con\r\n Vậy có 20 con thỏ và 10 con gà.",
    "type": "fill"
  },
  {
    "id": "G4-NC-1129",
    "exam": "SPECIAL_G4",
    "grade": 4,
    "round": "05_BÀI TOÁN GÀ VÀ THỎ",
    "topic": "05_BÀI TOÁN GÀ VÀ THỎ",
    "num": 2,
    "text": "Samantha has 30 pieces of $2 and $5 notes altogether. The total value of the\r\nmoney she has is $120. Find the number of pieces of $2 notes and the number of\r\npieces of $5 notes that Samantha has.\r\nSamantha có tất cả 30 tờ tiền loại 2 đô la và 5 đô la. Tổng giá trị số tiền cô ấy có là 120 đô\r\nla. Hãy tìm số tờ tiền loại 2 đô la và số tờ tiền loại 5 đô la mà Samantha có.",
    "options": [],
    "answer": "10 tờ 2 đô la và 20 tờ 5 đô la",
    "acceptedAnswers": [
      "10 tờ 2 đô la và 20 tờ 5 đô la",
      "10tờ2đôlavà20tờ5đôla"
    ],
    "explanation": " Samantha có 30 tờ tiền loại 2 đô la và 5 đô la, tổng 120 đô la.\r\n Giả sử tất cả là tờ 2 đô la, số tiền là 30 × 2 = 60 (đô la)\r\n Số tiền bị thiếu là 120 – 60 = 60 (đô la)\r\n Sự chênh lệch khi đổi 1 tờ 2 đô la thành 1 tờ 5 đô la là 5 – 2 = 3 (đô la)\r\n Số tờ 5 đô la là 60 : 3 = 20 (tờ)\r\n Số tờ 2 đô la là 30 – 20 = 10 (tờ)\r\n Vậy có 10 tờ 2 đô la và 20 tờ 5 đô la.",
    "type": "fill"
  },
  {
    "id": "G4-NC-1130",
    "exam": "SPECIAL_G4",
    "grade": 4,
    "round": "05_BÀI TOÁN GÀ VÀ THỎ",
    "topic": "05_BÀI TOÁN GÀ VÀ THỎ",
    "num": 3,
    "text": "There are 24 cars and motorcycles in a car park. There are a total of 76\r\nwheels. How many motorcycles are there? How many cars are there?\r\nCó 24 chiếc xe ô tô và xe máy trong một bãi đỗ xe. Tổng cộng có 76 bánh xe. Hỏi có bao\r\nnhiêu chiếc xe máy? Có bao nhiêu chiếc xe ô tô?",
    "options": [],
    "answer": "10 chiếc xe máy và 14 chiếc ô tô",
    "acceptedAnswers": [
      "10 chiếc xe máy và 14 chiếc ô tô",
      "10chiếcxemáyvà14chiếcôtô"
    ],
    "explanation": " Giả sử tất cả là xe máy (2 bánh), số bánh xe là 24 × 2 = 48 (bánh)\r\n Số bánh bị thiếu là 76 – 48 = 28 (bánh)\r\n Sự chênh lệch khi coi 1 xe máy là 1 ô tô là 4 – 2 = 2 (bánh)\r\n Số ô tô là 28 : 2 = 14 (chiếc)\r\n Số xe máy là 24 – 14 = 10 (chiếc)\r\n Vậy có 10 chiếc xe máy và 14 chiếc ô tô.",
    "type": "fill"
  },
  {
    "id": "G4-NC-1131",
    "exam": "SPECIAL_G4",
    "grade": 4,
    "round": "05_BÀI TOÁN GÀ VÀ THỎ",
    "topic": "05_BÀI TOÁN GÀ VÀ THỎ",
    "num": 4,
    "text": "There were 6 questions in a mathematics competition. 5 marks would be\r\nawarded for every correct answer. 2 marks would be deducted for a wrong answer.\r\nIf Valerie scored 23 marks in the mathematics competition, how many questions\r\ndid she answer correctly?\r\nCó 6 câu hỏi trong một cuộc thi toán học. Mỗi câu trả lời đúng được cộng 5 điểm. Mỗi câu\r\ntrả lời sai bị trừ 2 điểm. Nếu Valerie đạt được 23 điểm trong cuộc thi toán học, hỏi bạn ấy\r\nđã trả lời đúng bao nhiêu câu?",
    "options": [],
    "answer": "30",
    "acceptedAnswers": [
      "30",
      "30"
    ],
    "explanation": " Giả sử Valerie trả lời đúng cả 6 câu, số điểm là 6 × 5 = 30 (điểm)\r\n Số điểm bị dư là 30 – 23 = 7 (điểm)\r\n Mỗi lần đổi 1 câu đúng thành 1 câu sai, điểm giảm 5 + 2 = 7 (điểm)\r\n Số câu sai là 7 : 7 = 1 (câu)\r\n Số câu đúng là 6 – 1 = 5 (câu)\r\n Vậy Valerie trả lời đúng 5 câu.",
    "type": "fill"
  },
  {
    "id": "G4-NC-1132",
    "exam": "SPECIAL_G4",
    "grade": 4,
    "round": "05_BÀI TOÁN GÀ VÀ THỎ",
    "topic": "05_BÀI TOÁN GÀ VÀ THỎ",
    "num": 5,
    "text": "There was a total of 30 cars and motorcycles at a car park. There were 100\r\nwheels in all. How many cars were there at the car park?\r\nCó tổng cộng 30 chiếc xe ô tô và xe máy trong một bãi đỗ xe. Tổng cộng có 100 bánh xe.\r\nHỏi có bao nhiêu chiếc xe ô tô trong bãi đỗ xe?",
    "options": [],
    "answer": "20 chiếc ô tô trong bãi đỗ xe (và 10 chiếc xe máy)",
    "acceptedAnswers": [
      "20 chiếc ô tô trong bãi đỗ xe (và 10 chiếc xe máy)",
      "20chiếcôtôtrongbãiđỗxe(và10chiếcxemáy)"
    ],
    "explanation": " Giả sử tất cả là xe máy (2 bánh), số bánh xe là 30 × 2 = 60 (bánh)\r\n Số bánh bị thiếu là 100 – 60 = 40 (bánh)\r\n Sự chênh lệch khi coi 1 xe máy là 1 ô tô là 4 – 2 = 2 (bánh)\r\n Số ô tô là 40 : 2 = 20 (chiếc)\r\n Vậy có 20 chiếc ô tô trong bãi đỗ xe (và 10 chiếc xe máy).",
    "type": "fill"
  },
  {
    "id": "G4-NC-1133",
    "exam": "SPECIAL_G4",
    "grade": 4,
    "round": "05_BÀI TOÁN GÀ VÀ THỎ",
    "topic": "05_BÀI TOÁN GÀ VÀ THỎ",
    "num": 6,
    "text": "Each adult movie ticket costs $8. Each child movie ticket costs $5. Sean buys\r\n10 movie tickets altogether. He pays $74 in all. Find the number of adult movie\r\ntickets and the number of child movie tickets Sean buys.\r\nMỗi vé xem phim người lớn giá 8 đô la. Mỗi vé xem phim trẻ em giá 5 đô la. Sean mua tất\r\ncả 10 vé xem phim. Anh ấy trả tổng cộng 74 đô la. Hãy tìm số vé người lớn và số vé trẻ\r\nem mà Sean đã mua.",
    "options": [],
    "answer": "50",
    "acceptedAnswers": [
      "50",
      "50"
    ],
    "explanation": " Giả sử tất cả là vé trẻ em, số tiền là 10 × 5 = 50 (đô la)\r\n Số tiền bị thiếu là 74 – 50 = 24 (đô la)\r\n Sự chênh lệch khi đổi 1 vé trẻ em thành 1 vé người lớn là 8 – 5 = 3 (đô la)\r\n Số vé người lớn là 24 : 3 = 8 (vé)\r\n Số vé trẻ em là 10 – 8 = 2 (vé)\r\n Vậy Sean mua 8 vé người lớn và 2 vé trẻ em.",
    "type": "fill"
  },
  {
    "id": "G4-NC-1134",
    "exam": "SPECIAL_G4",
    "grade": 4,
    "round": "05_BÀI TOÁN GÀ VÀ THỎ",
    "topic": "05_BÀI TOÁN GÀ VÀ THỎ",
    "num": 7,
    "text": "Clifford has 30 pieces of 50¢ and 20¢ stamps. The total value of all his stamps\r\nis $12. Find the number of 50¢ and 20¢ stamps Clifford has.\r\nClifford có 30 con tem loại 50 xu và 20 xu. Tổng giá trị số tem của anh ấy là 12 đô la. Hãy\r\ntìm số tem loại 50 xu và số tem loại 20 xu mà Clifford có.",
    "options": [],
    "answer": "600",
    "acceptedAnswers": [
      "600",
      "600"
    ],
    "explanation": " Giả sử tất cả là tem 20 xu, số tiền là 30 × 20 = 600 (xu)\r\n Số tiền bị thiếu là 1200 – 600 = 600 (xu)\r\n Sự chênh lệch khi đổi 1 tem 20 xu thành 1 tem 50 xu là 50 – 20 = 30 (xu)\r\n Số tem 50 xu là 600 : 30 = 20 (con)\r\n Số tem 20 xu là 30 – 20 = 10 (con)\r\n Vậy Clifford có 20 con tem 50 xu và 10 con tem 20 xu.",
    "type": "fill"
  },
  {
    "id": "G4-NC-1135",
    "exam": "SPECIAL_G4",
    "grade": 4,
    "round": "05_BÀI TOÁN GÀ VÀ THỎ",
    "topic": "05_BÀI TOÁN GÀ VÀ THỎ",
    "num": 8,
    "text": "Natalie saves 30 pieces of $5 and $10 notes. Her total savings is $220. How\r\nmany pieces of $10 notes does Natalie save?\r\nNatalie tiết kiệm 30 tờ tiền loại 5 đô la và 10 đô la. Tổng số tiền tiết kiệm của cô ấy là 220\r\nđô la. Hỏi Natalie tiết kiệm bao nhiêu tờ tiền loại 10 đô la?",
    "options": [],
    "answer": "150",
    "acceptedAnswers": [
      "150",
      "150"
    ],
    "explanation": " Giả sử tất cả là tờ 5 đô la, số tiền là 30 × 5 = 150 (đô la)\r\n Số tiền bị thiếu là 220 – 150 = 70 (đô la)\r\n Sự chênh lệch khi đổi 1 tờ 5 đô la thành 1 tờ 10 đô la là 10 – 5 = 5 (đô la)\r\n Số tờ 10 đô la là 70 : 5 = 14 (tờ)\r\n Vậy Natalie tiết kiệm 14 tờ 10 đô la (và 16 tờ 5 đô la).",
    "type": "fill"
  },
  {
    "id": "G4-NC-1136",
    "exam": "SPECIAL_G4",
    "grade": 4,
    "round": "05_BÀI TOÁN GÀ VÀ THỎ",
    "topic": "05_BÀI TOÁN GÀ VÀ THỎ",
    "num": 9,
    "text": "A spider has 8 legs and a dragonfly has 6 legs. There are 20 spiders and\r\ndragonflies altogether. There are 144 legs in all. Find the number of spiders and the\r\nnumber of dragonflies.\r\nMột con nhện có 8 chân và một con chuồn chuồn có 6 chân. Có tất cả 20 con nhện và\r\nchuồn chuồn. Tổng cộng có 144 cái chân. Hãy tìm số con nhện và số con chuồn chuồn.",
    "options": [],
    "answer": "12 con nhện và 8 con chuồn chuồn",
    "acceptedAnswers": [
      "12 con nhện và 8 con chuồn chuồn",
      "12connhệnvà8conchuồnchuồn"
    ],
    "explanation": " Giả sử tất cả là chuồn chuồn, số chân là 20 × 6 = 120 (chân)\r\n Số chân bị thiếu là 144 – 120 = 24 (chân)\r\n Sự chênh lệch khi coi 1 chuồn chuồn là 1 nhện là 8 – 6 = 2 (chân)\r\n Số nhện là 24 : 2 = 12 (con)\r\n Số chuồn chuồn là 20 – 12 = 8 (con)\r\n Vậy có 12 con nhện và 8 con chuồn chuồn.",
    "type": "fill"
  },
  {
    "id": "G4-NC-1137",
    "exam": "SPECIAL_G4",
    "grade": 4,
    "round": "05_BÀI TOÁN GÀ VÀ THỎ",
    "topic": "05_BÀI TOÁN GÀ VÀ THỎ",
    "num": 10,
    "text": "There were 25 questions in a mathematics quiz. If a question was answered\r\ncorrectly, 4 marks would be given, otherwise 1 mark would be deducted. If John\r\nscored 85 marks in the mathematics quiz, how many questions had he answered\r\ncorrectly?\r\nCó 25 câu hỏi trong một bài kiểm tra toán học. Nếu trả lời đúng một câu, bạn sẽ được\r\ncộng 4 điểm, còn nếu trả lời sai sẽ bị trừ 1 điểm. Nếu John đạt được 85 điểm trong bài\r\nkiểm tra toán học, hỏi bạn ấy đã trả lời đúng bao nhiêu câu?",
    "options": [],
    "answer": "100",
    "acceptedAnswers": [
      "100",
      "100"
    ],
    "explanation": " Giả sử John trả lời đúng cả 25 câu, số điểm là 25 × 4 = 100 (điểm)\r\n Số điểm bị dư là 100 – 85 = 15 (điểm)\r\n Mỗi lần đổi 1 câu đúng thành 1 câu sai, điểm giảm 4 + 1 = 5 (điểm)\r\n Số câu sai là 15 : 5 = 3 (câu)\r\n Số câu đúng là 25 – 3 = 22 (câu)\r\n Vậy John trả lời đúng 22 câu.",
    "type": "fill"
  },
  {
    "id": "G4-NC-1138",
    "exam": "SPECIAL_G4",
    "grade": 4,
    "round": "05_BÀI TOÁN GÀ VÀ THỎ",
    "topic": "05_BÀI TOÁN GÀ VÀ THỎ",
    "num": 11,
    "text": "There were 45 questions in a science contest. 4 marks would be awarded for\r\nevery correct answer. 2 marks would be deducted for every wrong answer. All\r\nquestions had to be answered. If Henry scored 150 marks, how many questions had\r\nhe answered wrongly?\r\nCó 45 câu hỏi trong một cuộc thi khoa học. Mỗi câu trả lời đúng được cộng 4 điểm. Mỗi\r\ncâu trả lời sai bị trừ 2 điểm. Tất cả các câu hỏi đều phải được trả lời. Nếu Henry đạt được\r\n150 điểm, hỏi bạn ấy đã trả lời sai bao nhiêu câu?",
    "options": [],
    "answer": "180",
    "acceptedAnswers": [
      "180",
      "180"
    ],
    "explanation": " Giả sử Henry trả lời đúng cả 45 câu, số điểm là 45 × 4 = 180 (điểm)\r\n Số điểm bị dư là 180 – 150 = 30 (điểm)\r\n Mỗi lần đổi 1 câu đúng thành 1 câu sai, điểm giảm 4 + 2 = 6 (điểm)\r\n Số câu sai là 30 : 6 = 5 (câu)\r\n Vậy Henry trả lời sai 5 câu.",
    "type": "fill"
  },
  {
    "id": "G4-NC-1139",
    "exam": "SPECIAL_G4",
    "grade": 4,
    "round": "05_BÀI TOÁN GÀ VÀ THỎ",
    "topic": "05_BÀI TOÁN GÀ VÀ THỎ",
    "num": 12,
    "text": "There are 30 questions in a mathematics competition. All questions must be\r\nanswered. 5 marks are awarded for every correct answer. 2 marks will be deducted\r\nfor a wrong answer. If Amy scores 122 marks, how many questions does she answer\r\ncorrectly?\r\nCó 30 câu hỏi trong một cuộc thi toán học. Tất cả các câu hỏi đều phải được trả lời. Mỗi\r\ncâu trả lời đúng được cộng 5 điểm. Mỗi câu trả lời sai bị trừ 2 điểm. Nếu Amy đạt được\r\n122 điểm, hỏi bạn ấy đã trả lời đúng bao nhiêu câu?",
    "options": [],
    "answer": "150",
    "acceptedAnswers": [
      "150",
      "150"
    ],
    "explanation": " Giả sử Amy trả lời đúng cả 30 câu, số điểm là 30 × 5 = 150 (điểm)\r\n Số điểm bị dư là 150 – 122 = 28 (điểm)\r\n Mỗi lần đổi 1 câu đúng thành 1 câu sai, điểm giảm 5 + 2 = 7 (điểm)\r\n\r\n Số câu sai là 28 : 7 = 4 (câu)\r\n Số câu đúng là 30 – 4 = 26 (câu)\r\n Vậy Amy trả lời đúng 26 câu.",
    "type": "fill"
  },
  {
    "id": "G4-NC-1140",
    "exam": "SPECIAL_G4",
    "grade": 4,
    "round": "05_BÀI TOÁN GÀ VÀ THỎ",
    "topic": "05_BÀI TOÁN GÀ VÀ THỎ",
    "num": 13,
    "text": "For every slice of bread a child takes, an adult takes 2 slices of bread. If there\r\nare 66 adults and children in all and 99 slices of bread are taken,\r\n(a) how many adults are there?\r\n(b) how many children are there?\r\nCứ mỗi lát bánh mì một trẻ em lấy, thì một người lớn lấy 2 lát bánh mì. Nếu có tất cả 66\r\nngười lớn và trẻ em, và tổng cộng 99 lát bánh mì được lấy,\r\n(a) có bao nhiêu người lớn?\r\n(b) có bao nhiêu trẻ em?",
    "options": [],
    "answer": "33 người lớn và có 33 trẻ em",
    "acceptedAnswers": [
      "33 người lớn và có 33 trẻ em",
      "33ngườilớnvàcó33trẻem"
    ],
    "explanation": " Giả sử tất cả là trẻ em, số lát bánh mì là 66 × 1 = 66 (lát)\r\n Số lát bị thiếu là 99 – 66 = 33 (lát)\r\n Sự chênh lệch khi coi 1 trẻ em là 1 người lớn là 2 – 1 = 1 (lát)\r\n Số người lớn là 33 : 1 = 33 (người)\r\n Số trẻ em là 66 – 33 = 33 (người)\r\n Vậy có 33 người lớn và có 33 trẻ em.",
    "type": "fill"
  },
  {
    "id": "G4-NC-1141",
    "exam": "SPECIAL_G4",
    "grade": 4,
    "round": "05_BÀI TOÁN GÀ VÀ THỎ",
    "topic": "05_BÀI TOÁN GÀ VÀ THỎ",
    "num": 14,
    "text": "There were 100 adults and children altogether. An adult could consume 3\r\nbuns while 3 children could only finish one bun. If 100 buns were consumed, how\r\nmany adults were there?\r\nCó tất cả 100 người lớn và trẻ em. Một người lớn có thể ăn hết 3 cái bánh bao, trong khi 3\r\ntrẻ em chỉ ăn hết được 1 cái bánh bao. Nếu 100 cái bánh bao đã được ăn hết, hỏi có bao\r\nnhiêu người lớn?",
    "options": [],
    "answer": "25 người lớn (và 75 trẻ em)",
    "acceptedAnswers": [
      "25 người lớn (và 75 trẻ em)",
      "25ngườilớn(và75trẻem)"
    ],
    "explanation": " Giả sử tất cả là trẻ em, số bánh ăn là 100 × 1/3 = 100/3 (cái)\r\n Số bánh bị thiếu là 100 – 100/3 = 200/3 (cái)\r\n Sự chênh lệch khi coi 1 trẻ em là 1 người lớn là 3 – 1/3 = 8/3 (cái)\r\n Số người lớn là 200/3 : 8/3 = 25 (người)\r\n Vậy có 25 người lớn (và 75 trẻ em).",
    "type": "fill"
  },
  {
    "id": "G4-NC-1142",
    "exam": "SPECIAL_G4",
    "grade": 4,
    "round": "05_BÀI TOÁN GÀ VÀ THỎ",
    "topic": "05_BÀI TOÁN GÀ VÀ THỎ",
    "num": 15,
    "text": "56 teachers and pupils went for a river cruise. The seating capacity of a big\r\nboat was 8 people and the seating capacity of a small boat was 6 people. Find the\r\nnumber of big boats and the number of small boats.\r\n56 giáo viên và học sinh đã đi du thuyền trên sông. Sức chứa của một thuyền lớn là 8\r\nngười và sức chứa của một thuyền nhỏ là 6 người. Hãy tìm số thuyền lớn và số thuyền\r\nnhỏ.",
    "options": [],
    "answer": "1 thuyền lớn và 8 thuyền nhỏ, hoặc 4 thuyền lớn",
    "acceptedAnswers": [
      "1 thuyền lớn và 8 thuyền nhỏ, hoặc 4 thuyền lớn",
      "1thuyềnlớnvà8thuyềnnhỏ,hoặc4thuyềnlớn"
    ],
    "explanation": " Đề không cho tổng số thuyền nên ta hiểu là mỗi thuyền chở đầy người và tìm số\r\nthuyền sao cho vừa đủ 56 người.\r\n\r\n Tổng số thuyền thì chưa biết, nên ta dùng cách thử số thuyền lớn:\r\n- Nếu có 1 thuyền lớn: số người còn lại là 56 – 8 = 48, mà 48 : 6 = 8 (thuyền nhỏ)\r\n- Nếu có 4 thuyền lớn: 56 – 32 = 24, mà 24 : 6 = 4 (thuyền nhỏ)\r\n\r\n Vậy bài này có nhiều đáp án: 1 thuyền lớn và 8 thuyền nhỏ, hoặc 4 thuyền lớn\r\nvà 4 thuyền nhỏ",
    "type": "fill"
  },
  {
    "id": "G4-NC-1143",
    "exam": "SPECIAL_G4",
    "grade": 4,
    "round": "05_BÀI TOÁN GÀ VÀ THỎ",
    "topic": "05_BÀI TOÁN GÀ VÀ THỎ",
    "num": 16,
    "text": "There are 20 questions in a mathematics contest. 8 marks will be awarded\r\nfor each correct answer. 4 marks will be deducted for each wrong answer. All the\r\nquestions must be answered. If Isabelle scores 100 marks in the mathematics\r\ncontest, how many questions does she answer correctly?\r\nCó 20 câu hỏi trong một cuộc thi toán học. Mỗi câu trả lời đúng được cộng 8 điểm. Mỗi\r\ncâu trả lời sai bị trừ 4 điểm. Tất cả các câu hỏi đều phải được trả lời. Nếu Isabelle đạt\r\nđược 100 điểm trong cuộc thi toán học, hỏi bạn ấy đã trả lời đúng bao nhiêu câu?",
    "options": [],
    "answer": "160",
    "acceptedAnswers": [
      "160",
      "160"
    ],
    "explanation": " Giả sử Isabelle trả lời đúng cả 20 câu, số điểm là 20 × 8 = 160 (điểm)\r\n Số điểm bị dư là 160 – 100 = 60 (điểm)\r\n Mỗi lần đổi 1 câu đúng thành 1 câu sai, điểm giảm 8 + 4 = 12 (điểm)\r\n Số câu sai là 60 : 12 = 5 (câu)\r\n Số câu đúng là 20 – 5 = 15 (câu)\r\n Vậy Isabelle trả lời đúng 15 câu.\r\n17*. [ĐVH] A PE teacher bought 4 identical basketballs and 5 identical volleyballs for\r\n$230. Each basketball was $8 more expensive than a volleyball. Find the cost of each\r\nbasketball and each volleyball.\r\nMột giáo viên thể dục đã mua 4 quả bóng rổ giống hệt nhau và 5 quả bóng chuyền giống\r\nhệt nhau với giá 230 đô la. Mỗi quả bóng rổ đắt hơn một quả bóng chuyền 8 đô la. Hãy\r\ntìm giá của mỗi quả bóng rổ và mỗi quả bóng chuyền.\r\n\r\n Giả sử cả 9 quả đều có giá bằng bóng chuyền, thì 4 quả bóng rổ cần bớt đi 4 × 8 =\r\n32 (đô la)\r\n\r\n Giá của 9 quả bóng chuyền là 230 – 32 = 198 (đô la)\r\n\r\n Giá mỗi quả bóng chuyền là 198 : 9 = 22 (đô la)\r\n Giá mỗi quả bóng rổ là 22 + 8 = 30 (đô la)\r\n Vậy mỗi quả bóng rổ giá 30 đô la, mỗi quả bóng chuyền giá 22 đô la.",
    "type": "fill"
  },
  {
    "id": "G4-NC-1144",
    "exam": "SPECIAL_G4",
    "grade": 4,
    "round": "05_BÀI TOÁN GÀ VÀ THỎ",
    "topic": "05_BÀI TOÁN GÀ VÀ THỎ",
    "num": 18,
    "text": "A pen cost $4 and a book cost $7. Samuel paid $64 for 10 such pens and\r\nbooks. Find the number of pens and the number of books he had bought.\r\nMột cây bút giá 4 đô la và một quyển sách giá 7 đô la. Samuel đã trả 64 đô la cho 10 cây\r\nbút và quyển sách như vậy. Hãy tìm số bút và số sách mà anh ấy đã mua.",
    "options": [],
    "answer": "40",
    "acceptedAnswers": [
      "40",
      "40"
    ],
    "explanation": " Giả sử tất cả là bút, số tiền là 10 × 4 = 40 (đô la)\r\n Số tiền bị thiếu là 64 – 40 = 24 (đô la)\r\n Sự chênh lệch khi đổi 1 bút thành 1 sách là 7 – 4 = 3 (đô la)\r\n Số sách là 24 : 3 = 8 (quyển)\r\n Số bút là 10 – 8 = 2 (cây)\r\n Vậy Samuel mua 2 cây bút và 8 quyển sách.",
    "type": "fill"
  },
  {
    "id": "G4-NC-1145",
    "exam": "SPECIAL_G4",
    "grade": 4,
    "round": "05_BÀI TOÁN GÀ VÀ THỎ",
    "topic": "05_BÀI TOÁN GÀ VÀ THỎ",
    "num": 19,
    "text": "A whiteboard marker cost $3. A paintbrush cost $1. A teacher paid $28 in\r\nall for 12 paintbrushes and whiteboard markers. How many whiteboard markers\r\nand how many paintbrushes did the teacher buy?\r\nMột cây bút lông bảng trắng giá 3 đô la. Một cây cọ vẽ giá 1 đô la. Một giáo viên đã trả\r\ntổng cộng 28 đô la cho 12 cây cọ vẽ và bút lông bảng trắng. Hỏi giáo viên đó đã mua bao\r\nnhiêu cây bút lông bảng trắng và bao nhiêu cây cọ vẽ?",
    "options": [],
    "answer": "12",
    "acceptedAnswers": [
      "12",
      "12"
    ],
    "explanation": " Giả sử tất cả là cọ vẽ, số tiền là 12 × 1 = 12 (đô la)\r\n Số tiền bị thiếu là 28 – 12 = 16 (đô la)\r\n Sự chênh lệch khi đổi 1 cọ vẽ thành 1 bút lông bảng là 3 – 1 = 2 (đô la)\r\n Số bút lông bảng là 16 : 2 = 8 (cây)\r\n Số cọ vẽ là 12 – 8 = 4 (cây)\r\n Vậy giáo viên mua 8 cây bút lông bảng trắng và 4 cây cọ vẽ.",
    "type": "fill"
  },
  {
    "id": "G4-NC-1146",
    "exam": "SPECIAL_G4",
    "grade": 4,
    "round": "06_BÀI TOÁN TÍNH TUỔI",
    "topic": "06_BÀI TOÁN TÍNH TUỔI",
    "num": 1,
    "text": "The sum of the ages of two brothers is 28. The younger brother was 2\r\nyears younger than the older sibling ten years ago. How old are they now?\r\nTổng số tuổi của hai anh em là 28. Mười năm trước, người em kém người anh 2 tuổi.\r\nHỏi hiện nay họ bao nhiêu tuổi?",
    "options": [],
    "answer": "2",
    "acceptedAnswers": [
      "2",
      "2"
    ],
    "explanation": " Hiệu số tuổi không đổi theo thời gian nên hiện tại Anh – Em = 2 tuổi\r\n Kết hợp với Anh + Em = 28 tuổi → Anh = 15 tuổi và Em = 13 tuổi",
    "type": "fill"
  },
  {
    "id": "G4-NC-1147",
    "exam": "SPECIAL_G4",
    "grade": 4,
    "round": "06_BÀI TOÁN TÍNH TUỔI",
    "topic": "06_BÀI TOÁN TÍNH TUỔI",
    "num": 2,
    "text": "The sum of my parents' ages is 70. Twenty years ago, my father was 4\r\nyears older than my mother. How old are they now?\r\nTổng số tuổi của bố mẹ tôi là 70. Hai mươi năm trước, bố tôi hơn mẹ tôi 4 tuổi. Hỏi hiện\r\nnay họ bao nhiêu tuổi?",
    "options": [],
    "answer": "4",
    "acceptedAnswers": [
      "4",
      "4"
    ],
    "explanation": " Hiệu số tuổi không đổi theo thời gian nên hiện tại Bố – Mẹ = 4 tuổi\r\n Kết hợp với Bố + Mẹ = 70 tuổi → Bố = 37 tuổi và Mẹ = 33 tuổi",
    "type": "fill"
  },
  {
    "id": "G4-NC-1148",
    "exam": "SPECIAL_G4",
    "grade": 4,
    "round": "06_BÀI TOÁN TÍNH TUỔI",
    "topic": "06_BÀI TOÁN TÍNH TUỔI",
    "num": 3,
    "text": "Sean is 26 years old. He is 8 years older than John. How many years ago\r\nwas Sean's age three times John's age?\r\nSean 26 tuổi. Cậu ấy hơn John 8 tuổi. Hỏi cách đây bao nhiêu năm tuổi của Sean gấp ba\r\nlần tuổi của John?",
    "options": [],
    "answer": "8",
    "acceptedAnswers": [
      "8",
      "8"
    ],
    "explanation": " Hiệu số tuổi không thay đổi, luôn là 8 tuổi\r\n Khi mà Sean gấp 3 lần tuổi của John thì Sean chiếm 3p, John chiếm 1p\r\n→ Hiệu là 2p = 8 nên 1p = 4 tuổi\r\n Tức là khi đó Sean 12 tuổi → Cách đây là 14 năm",
    "type": "fill"
  },
  {
    "id": "G4-NC-1149",
    "exam": "SPECIAL_G4",
    "grade": 4,
    "round": "06_BÀI TOÁN TÍNH TUỔI",
    "topic": "06_BÀI TOÁN TÍNH TUỔI",
    "num": 4,
    "text": "Xavier is 2 years old and his mother is 26 years old. In how many years'\r\ntime will his mother's age be three times Xavier's age?\r\nXavier 2 tuổi và mẹ cậu ấy 26 tuổi. Hỏi sau bao nhiêu năm nữa tuổi của mẹ cậu ấy sẽ\r\ngấp ba lần tuổi của Xavier?",
    "options": [],
    "answer": "24",
    "acceptedAnswers": [
      "24",
      "24"
    ],
    "explanation": " Hiệu số tuổi không thay đổi, luôn là 26 – 2 = 24 (tuổi)\r\n Khi mẹ gấp 3 lần tuổi Xavier thì mẹ chiếm 3p, Xavier chiếm 1p\r\n Hiệu là 2p = 24 nên 1p = 12 tuổi\r\n Tức là khi đó Xavier 12 tuổi, mẹ 36 tuổi\r\n Sau số năm là 12 – 2 = 10 (năm)\r\n Vậy sau 10 năm nữa tuổi mẹ gấp ba lần tuổi Xavier.",
    "type": "fill"
  },
  {
    "id": "G4-NC-1150",
    "exam": "SPECIAL_G4",
    "grade": 4,
    "round": "06_BÀI TOÁN TÍNH TUỔI",
    "topic": "06_BÀI TOÁN TÍNH TUỔI",
    "num": 5,
    "text": "The sum of John’s age and his father’s age is 44. Three years ago, the\r\nfather was 20 years older than John. How old are they now?\r\nTổng số tuổi của John và bố cậu ấy là 44. Ba năm trước, bố hơn John 20 tuổi. Hỏi hiện\r\nnay họ bao nhiêu tuổi?",
    "options": [],
    "answer": "20",
    "acceptedAnswers": [
      "20",
      "20"
    ],
    "explanation": " Hiệu số tuổi không đổi theo thời gian nên hiện tại Bố – John = 20 tuổi\r\n Kết hợp với Bố + John = 44 tuổi\r\n Bố = (44 + 20) : 2 = 32 tuổi\r\n John = (44 – 20) : 2 = 12 tuổi\r\n Vậy hiện nay bố 32 tuổi và John 12 tuổi.",
    "type": "fill"
  },
  {
    "id": "G4-NC-1151",
    "exam": "SPECIAL_G4",
    "grade": 4,
    "round": "06_BÀI TOÁN TÍNH TUỔI",
    "topic": "06_BÀI TOÁN TÍNH TUỔI",
    "num": 6,
    "text": "Raphael is 8 years old. One day, he asked his mother about her age.\r\n\"When you reach my age, I will be 54 years old,\" replied his mother. How old is\r\nRaphael’s mother?\r\nRaphael 8 tuổi. Một ngày nọ, cậu ấy hỏi mẹ về tuổi của bà. \"Khi con bằng tuổi mẹ hiện\r\nnay, mẹ sẽ 54 tuổi,\" mẹ cậu trả lời. Hỏi mẹ của Raphael bao nhiêu tuổi?",
    "options": [],
    "answer": "8",
    "acceptedAnswers": [
      "8",
      "8"
    ],
    "explanation": " Gọi x là hiệu số tuổi của hai mẹ con, x sẽ không thay đổi\r\n Khi con 8 tuổi thì hiện tại tuổi mẹ là 8 + x\r\n Khi con bằng mẹ hiện tại (tức 8 + x) thì tuổi mẹ là (8 + x) + x = 8 + 2x\r\n Theo bài thì 8 + 2x = 54 → x = 23\r\n Vậy hiện tại Mẹ 31 tuổi.",
    "type": "fill"
  },
  {
    "id": "G4-NC-1152",
    "exam": "SPECIAL_G4",
    "grade": 4,
    "round": "06_BÀI TOÁN TÍNH TUỔI",
    "topic": "06_BÀI TOÁN TÍNH TUỔI",
    "num": 7,
    "text": "Four years ago, the age of Isabelle’s mother was 4 times that of hers. Her\r\nmother is 44 years old. How old is Isabelle?\r\nBốn năm trước, tuổi của mẹ Isabelle gấp 4 lần tuổi của cô ấy. Mẹ cô ấy hiện 44 tuổi. Hỏi\r\nIsabelle bao nhiêu tuổi?",
    "options": [],
    "answer": "40",
    "acceptedAnswers": [
      "40",
      "40"
    ],
    "explanation": " Bốn năm trước, mẹ có số tuổi là 44 – 4 = 40 (tuổi)\r\n Khi đó mẹ chiếm 4p, Isabelle chiếm 1p\r\n 4p = 40 nên 1p = 10 tuổi\r\n Tức là bốn năm trước Isabelle 10 tuổi, nên hiện nay Isabelle 10 + 4 = 14 (tuổi)\r\n Vậy Isabelle 14 tuổi.",
    "type": "fill"
  },
  {
    "id": "G4-NC-1153",
    "exam": "SPECIAL_G4",
    "grade": 4,
    "round": "06_BÀI TOÁN TÍNH TUỔI",
    "topic": "06_BÀI TOÁN TÍNH TUỔI",
    "num": 8,
    "text": "Joel is 8 years old. His mother is 34 years old. In how many years’ time\r\nwill his mother’s age be three times Joel’s age?\r\nJoel 8 tuổi. Mẹ cậu ấy 34 tuổi. Hỏi sau bao nhiêu năm nữa tuổi của mẹ cậu ấy sẽ gấp ba\r\nlần tuổi của Joel?",
    "options": [],
    "answer": "26",
    "acceptedAnswers": [
      "26",
      "26"
    ],
    "explanation": " Hiệu số tuổi không thay đổi, luôn là 34 – 8 = 26 (tuổi)\r\n Khi mẹ gấp 3 lần tuổi Joel thì mẹ chiếm 3p, Joel chiếm 1p\r\n Hiệu là 2p = 26 nên 1p = 13 tuổi\r\n\r\n Tức là khi đó Joel 13 tuổi, sau số năm là 13 – 8 = 5 (năm)\r\n Vậy sau 5 năm nữa.",
    "type": "fill"
  },
  {
    "id": "G4-NC-1154",
    "exam": "SPECIAL_G4",
    "grade": 4,
    "round": "06_BÀI TOÁN TÍNH TUỔI",
    "topic": "06_BÀI TOÁN TÍNH TUỔI",
    "num": 9,
    "text": "Beatrice is 10 years old. Her father is 34 years old. How many years ago\r\nwas her father's age four times Beatrice's age?\r\nBeatrice 10 tuổi. Bố cô ấy 34 tuổi. Hỏi cách đây bao nhiêu năm tuổi của bố cô ấy gấp bốn\r\nlần tuổi của Beatrice?",
    "options": [],
    "answer": "24",
    "acceptedAnswers": [
      "24",
      "24"
    ],
    "explanation": " Hiệu số tuổi không thay đổi, luôn là 34 – 10 = 24 (tuổi)\r\n Khi bố gấp 4 lần tuổi Beatrice thì bố chiếm 4p, Beatrice chiếm 1p\r\n Hiệu là 3p = 24 nên 1p = 8 tuổi\r\n Tức là khi đó Beatrice 8 tuổi, cách đây 10 – 8 = 2 (năm)\r\n Vậy cách đây 2 năm.",
    "type": "fill"
  },
  {
    "id": "G4-NC-1155",
    "exam": "SPECIAL_G4",
    "grade": 4,
    "round": "06_BÀI TOÁN TÍNH TUỔI",
    "topic": "06_BÀI TOÁN TÍNH TUỔI",
    "num": 10,
    "text": "The sum of Grandfather’s age and Jimmy’s age is 66. Three years later,\r\nGrandfather’s age will be 8 times Jimmy’s age. How old are Jimmy and his\r\ngrandfather?\r\nTổng số tuổi của ông nội và Jimmy là 66. Ba năm sau, tuổi của ông nội sẽ gấp 8 lần tuổi\r\ncủa Jimmy. Hỏi Jimmy và ông nội của cậu ấy bao nhiêu tuổi?",
    "options": [],
    "answer": "72",
    "acceptedAnswers": [
      "72",
      "72"
    ],
    "explanation": " Ba năm sau, tổng số tuổi của hai người là 66 + 3 × 2 = 72 (tuổi)\r\n Khi đó ông chiếm 8p, Jimmy chiếm 1p, tổng là 9p = 72 nên 1p = 8 tuổi\r\n Ba năm sau Jimmy 8 tuổi, ông 8 × 8 = 64 tuổi\r\n Hiện nay Jimmy 8 – 3 = 5 (tuổi), ông 64 – 3 = 61 (tuổi)\r\n Vậy Jimmy 5 tuổi và ông nội 61 tuổi.",
    "type": "fill"
  },
  {
    "id": "G4-NC-1156",
    "exam": "SPECIAL_G4",
    "grade": 4,
    "round": "06_BÀI TOÁN TÍNH TUỔI",
    "topic": "06_BÀI TOÁN TÍNH TUỔI",
    "num": 11,
    "text": "Samuel’s grandmother is 64 years old. Samuel is 13 years old. In how\r\nmany years’ time will his grandmother’s age be four times Samuel’s age?\r\nBà của Samuel 64 tuổi. Samuel 13 tuổi. Hỏi sau bao nhiêu năm nữa tuổi của bà sẽ gấp\r\nbốn lần tuổi của Samuel?",
    "options": [],
    "answer": "51",
    "acceptedAnswers": [
      "51",
      "51"
    ],
    "explanation": " Hiệu số tuổi không thay đổi, luôn là 64 – 13 = 51 (tuổi)\r\n Khi bà gấp 4 lần tuổi Samuel thì bà chiếm 4p, Samuel chiếm 1p\r\n Hiệu là 3p = 51 nên 1p = 17 tuổi\r\n Tức là khi đó Samuel 17 tuổi, sau số năm là 17 – 13 = 4 (năm)\r\n Vậy sau 4 năm nữa.",
    "type": "fill"
  },
  {
    "id": "G4-NC-1157",
    "exam": "SPECIAL_G4",
    "grade": 4,
    "round": "06_BÀI TOÁN TÍNH TUỔI",
    "topic": "06_BÀI TOÁN TÍNH TUỔI",
    "num": 12,
    "text": "A daughter is 8 years old. Her mother is 38 years old. In how many years’\r\ntime will the mother’s age be three times the daughter’s age?\r\nMột người con gái 8 tuổi. Mẹ của cô bé 38 tuổi. Hỏi sau bao nhiêu năm nữa tuổi của\r\nngười mẹ sẽ gấp ba lần tuổi của con gái?",
    "options": [],
    "answer": "30",
    "acceptedAnswers": [
      "30",
      "30"
    ],
    "explanation": " Hiệu số tuổi không thay đổi, luôn là 38 – 8 = 30 (tuổi)\r\n Khi mẹ gấp 3 lần tuổi con thì mẹ chiếm 3p, con chiếm 1p\r\n Hiệu là 2p = 30 nên 1p = 15 tuổi\r\n Tức là khi đó con gái 15 tuổi, sau số năm là 15 – 8 = 7 (năm)\r\n Vậy sau 7 năm nữa.",
    "type": "fill"
  },
  {
    "id": "G4-NC-1158",
    "exam": "SPECIAL_G4",
    "grade": 4,
    "round": "06_BÀI TOÁN TÍNH TUỔI",
    "topic": "06_BÀI TOÁN TÍNH TUỔI",
    "num": 13,
    "text": "The sum of Melanie’s and her brother’s ages is 35. Four years from now,\r\nMelanie will be 5 years older than her brother. How old is Melanie? How old is\r\nher brother?\r\nTổng số tuổi của Melanie và anh/em trai cô ấy là 35. Bốn năm nữa, Melanie sẽ hơn\r\nanh/em trai mình 5 tuổi. Hỏi Melanie bao nhiêu tuổi? Anh/em trai cô ấy bao nhiêu tuổi?",
    "options": [],
    "answer": "5",
    "acceptedAnswers": [
      "5",
      "5"
    ],
    "explanation": " Hiệu số tuổi không đổi theo thời gian nên hiện tại Melanie – Anh/em = 5 tuổi\r\n Kết hợp với Melanie + Anh/em = 35 tuổi\r\n Melanie = (35 + 5) : 2 = 20 tuổi\r\n Anh/em trai = (35 – 5) : 2 = 15 tuổi\r\n Vậy Melanie 20 tuổi và anh/em trai 15 tuổi.",
    "type": "fill"
  },
  {
    "id": "G4-NC-1159",
    "exam": "SPECIAL_G4",
    "grade": 4,
    "round": "06_BÀI TOÁN TÍNH TUỔI",
    "topic": "06_BÀI TOÁN TÍNH TUỔI",
    "num": 14,
    "text": "Jonathan is 10 years old. His brother, Joseph, is 14 years old. How old will\r\neach boy be when the sum of their ages is 50?\r\nJonathan 10 tuổi. Anh trai cậu ấy, Joseph, 14 tuổi. Hỏi mỗi cậu bé sẽ bao nhiêu tuổi khi\r\ntổng số tuổi của cả hai là 50?",
    "options": [],
    "answer": "24",
    "acceptedAnswers": [
      "24",
      "24"
    ],
    "explanation": " Tổng số tuổi hiện nay là 10 + 14 = 24 (tuổi)\r\n Số tuổi cần tăng thêm là 50 – 24 = 26 (tuổi)\r\n Mỗi năm, mỗi người tăng 1 tuổi nên tổng tăng 2 tuổi\r\n Số năm cần thêm là 26 : 2 = 13 (năm)\r\n Jonathan: 10 + 13 = 23 (tuổi); Joseph: 14 + 13 = 27 (tuổi)\r\n Vậy Jonathan 23 tuổi và Joseph 27 tuổi.",
    "type": "fill"
  },
  {
    "id": "G4-NC-1160",
    "exam": "SPECIAL_G4",
    "grade": 4,
    "round": "06_BÀI TOÁN TÍNH TUỔI",
    "topic": "06_BÀI TOÁN TÍNH TUỔI",
    "num": 15,
    "text": "Granny Mabel is 60 years old. Kelly is 5 years old. In how many years'\r\ntime will Granny Mabel's age be six times Kelly's age?\r\nBà Mabel 60 tuổi. Kelly 5 tuổi. Hỏi sau bao nhiêu năm nữa tuổi của bà Mabel sẽ gấp sáu\r\nlần tuổi của Kelly?",
    "options": [],
    "answer": "55",
    "acceptedAnswers": [
      "55",
      "55"
    ],
    "explanation": " Hiệu số tuổi không thay đổi, luôn là 60 – 5 = 55 (tuổi)\r\n Khi bà gấp 6 lần tuổi Kelly thì bà chiếm 6p, Kelly chiếm 1p\r\n Hiệu là 5p = 55 nên 1p = 11 tuổi\r\n Tức là khi đó Kelly 11 tuổi, sau số năm là 11 – 5 = 6 (năm)\r\n Vậy sau 6 năm nữa.",
    "type": "fill"
  },
  {
    "id": "G4-NC-1161",
    "exam": "SPECIAL_G4",
    "grade": 4,
    "round": "06_BÀI TOÁN TÍNH TUỔI",
    "topic": "06_BÀI TOÁN TÍNH TUỔI",
    "num": 16,
    "text": "A father is 50 years old. His son is 24 years old. How many years ago was\r\nthe father's age three times his son's age?\r\nMột người cha 50 tuổi. Con trai ông ấy 24 tuổi. Hỏi cách đây bao nhiêu năm tuổi của\r\nngười cha gấp ba lần tuổi của con trai?",
    "options": [],
    "answer": "26",
    "acceptedAnswers": [
      "26",
      "26"
    ],
    "explanation": " Hiệu số tuổi không thay đổi, luôn là 50 – 24 = 26 (tuổi)\r\n Khi cha gấp 3 lần tuổi con thì cha chiếm 3p, con chiếm 1p\r\n Hiệu là 2p = 26 nên 1p = 13 tuổi\r\n Tức là khi đó con trai 13 tuổi, cách đây 24 – 13 = 11 (năm)\r\n Vậy cách đây 11 năm.",
    "type": "fill"
  },
  {
    "id": "G4-NC-1162",
    "exam": "SPECIAL_G4",
    "grade": 4,
    "round": "06_BÀI TOÁN TÍNH TUỔI",
    "topic": "06_BÀI TOÁN TÍNH TUỔI",
    "num": 17,
    "text": "Jenevieve is 10 years old. She asks her teacher about her age. \"I will be 58\r\nyears old by the time you reach my age,\" replies her teacher. How old is her\r\nteacher?\r\nJenevieve 10 tuổi. Cô bé hỏi cô giáo về tuổi của cô. \"Cô sẽ 58 tuổi vào lúc em bằng tuổi cô\r\nhiện nay,\" cô giáo trả lời. Hỏi cô giáo bao nhiêu tuổi?",
    "options": [],
    "answer": "10",
    "acceptedAnswers": [
      "10",
      "10"
    ],
    "explanation": " Gọi x là hiệu số tuổi của cô giáo và Jene, x sẽ không thay đổi\r\n Hiện tại Jene 10 tuổi thì tuổi cô giáo là 10 + x\r\n Khi Jene bằng tuổi cô hiện nay (tức 10 + x) thì tuổi cô là (10 + x) + x = 10 + 2x\r\n Theo bài thì 10 + 2x = 58 → 2x = 48 → x = 24\r\n Vậy hiện tại cô giáo 10 + 24 = 34 (tuổi)\r\n Vậy cô giáo 34 tuổi.",
    "type": "fill"
  },
  {
    "id": "G4-NC-1163",
    "exam": "SPECIAL_G4",
    "grade": 4,
    "round": "06_BÀI TOÁN TÍNH TUỔI",
    "topic": "06_BÀI TOÁN TÍNH TUỔI",
    "num": 18,
    "text": "Cindy is 12 years old. She asks Auntie Zoe about her age. \"I will be 62\r\nyears old by the time you reach my age,\" replies Auntie Zoe. How old is Auntie\r\nZoe?\r\nCindy 12 tuổi. Cô bé hỏi Dì Zoe về tuổi của dì. \"Dì sẽ 62 tuổi vào lúc cháu bằng tuổi dì\r\nhiện nay,\" Dì Zoe trả lời. Hỏi Dì Zoe bao nhiêu tuổi?",
    "options": [],
    "answer": "12",
    "acceptedAnswers": [
      "12",
      "12"
    ],
    "explanation": " Gọi x là hiệu số tuổi của Dì Zoe và Cindy, x sẽ không thay đổi\r\n Hiện tại Cindy 12 tuổi thì tuổi Dì Zoe là 12 + x\r\n Khi Cindy bằng tuổi Dì hiện nay (tức 12 + x) thì tuổi Dì là (12 + x) + x = 12 + 2x\r\n Theo bài thì 12 + 2x = 62 → 2x = 50 → x = 25\r\n Vậy hiện tại Dì Zoe 12 + 25 = 37 (tuổi)\r\n Vậy Dì Zoe 37 tuổi.",
    "type": "fill"
  },
  {
    "id": "G4-NC-1164",
    "exam": "SPECIAL_G4",
    "grade": 4,
    "round": "06_BÀI TOÁN TÍNH TUỔI",
    "topic": "06_BÀI TOÁN TÍNH TUỔI",
    "num": 19,
    "text": "The sum of a father’s age and his son’s age is 60. The father’s age was 3\r\ntimes his son’s age eight years ago. How old are they now?\r\nTổng số tuổi của một người cha và con trai là 60. Tám năm trước, tuổi của người cha\r\ngấp 3 lần tuổi của con trai. Hỏi hiện nay họ bao nhiêu tuổi?",
    "options": [],
    "answer": "44",
    "acceptedAnswers": [
      "44",
      "44"
    ],
    "explanation": " Tám năm trước, tổng số tuổi của hai người là 60 – 8 × 2 = 44 (tuổi)\r\n Khi đó cha chiếm 3p, con chiếm 1p, tổng là 4p = 44 nên 1p = 11 tuổi\r\n Tám năm trước con 11 tuổi, cha 11 × 3 = 33 tuổi\r\n Hiện nay con 11 + 8 = 19 (tuổi), cha 33 + 8 = 41 (tuổi)\r\n Vậy cha 41 tuổi và con trai 19 tuổi.",
    "type": "fill"
  },
  {
    "id": "G4-NC-1165",
    "exam": "SPECIAL_G4",
    "grade": 4,
    "round": "06_BÀI TOÁN TÍNH TUỔI",
    "topic": "06_BÀI TOÁN TÍNH TUỔI",
    "num": 20,
    "text": "The sum of a father’s age and his daughter’s age is 50. The father’s age\r\nwill be 3 times his daughter’s age five years from now. How old is the father?\r\nHow old is his daughter?\r\nTổng số tuổi của một người cha và con gái là 50. Năm năm nữa, tuổi của người cha sẽ\r\ngấp 3 lần tuổi của con gái. Hỏi người cha bao nhiêu tuổi? Con gái ông ấy bao nhiêu tuổi?",
    "options": [],
    "answer": "60",
    "acceptedAnswers": [
      "60",
      "60"
    ],
    "explanation": " Năm năm nữa, tổng số tuổi của hai người là 50 + 5 × 2 = 60 (tuổi)\r\n Khi đó cha chiếm 3p, con gái chiếm 1p, tổng là 4p = 60 nên 1p = 15 tuổi\r\n Năm năm nữa con gái 15 tuổi, cha 15 × 3 = 45 tuổi\r\n Hiện nay con gái 15 – 5 = 10 (tuổi), cha 45 – 5 = 40 (tuổi)\r\n Vậy cha 40 tuổi và con gái 10 tuổi.",
    "type": "fill"
  },
  {
    "id": "G4-NC-1166",
    "exam": "SPECIAL_G4",
    "grade": 4,
    "round": "06_BÀI TOÁN TÍNH TUỔI",
    "topic": "06_BÀI TOÁN TÍNH TUỔI",
    "num": 21,
    "text": "David’s mother is 30 years older than him. Her age will be four times\r\nDavid’s eight years later. How old is David now?\r\nMẹ của David hơn cậu ấy 30 tuổi. Tám năm sau, tuổi của bà sẽ gấp bốn lần tuổi của\r\nDavid. Hỏi hiện nay David bao nhiêu tuổi?",
    "options": [],
    "answer": "30",
    "acceptedAnswers": [
      "30",
      "30"
    ],
    "explanation": " Hiệu số tuổi không thay đổi, luôn là 30 tuổi\r\n Khi mẹ gấp 4 lần tuổi David thì mẹ chiếm 4p, David chiếm 1p\r\n Hiệu là 3p = 30 nên 1p = 10 tuổi\r\n Tức là tám năm sau David 10 tuổi, nên hiện nay David 10 – 8 = 2 (tuổi)\r\n Vậy David 2 tuổi.",
    "type": "fill"
  },
  {
    "id": "G4-NC-1167",
    "exam": "SPECIAL_G4",
    "grade": 4,
    "round": "06_BÀI TOÁN TÍNH TUỔI",
    "topic": "06_BÀI TOÁN TÍNH TUỔI",
    "num": 22,
    "text": "Raymond’s grandfather is 50 years older than him. His grandfather’s age\r\nwas six times Raymond’s six years ago. How old is Raymond’s grandfather now?\r\nÔng nội của Raymond hơn cậu ấy 50 tuổi. Sáu năm trước, tuổi của ông nội gấp sáu lần\r\ntuổi của Raymond. Hỏi hiện nay ông nội của Raymond bao nhiêu tuổi?",
    "options": [],
    "answer": "50",
    "acceptedAnswers": [
      "50",
      "50"
    ],
    "explanation": " Hiệu số tuổi không thay đổi, luôn là 50 tuổi\r\n Khi ông gấp 6 lần tuổi Raymond thì ông chiếm 6p, Raymond chiếm 1p\r\n Hiệu là 5p = 50 nên 1p = 10 tuổi\r\n Tức là sáu năm trước Raymond 10 tuổi, ông 10 × 6 = 60 tuổi\r\n Hiện nay ông nội 60 + 6 = 66 (tuổi)\r\n Vậy ông nội của Raymond hiện 66 tuổi (và Raymond 16 tuổi).",
    "type": "fill"
  },
  {
    "id": "G4-NC-1183",
    "exam": "SPECIAL_G4",
    "grade": 4,
    "round": "08_CHUYỂN ĐỘNG BẮT KỊP NGƯỢC CHIỀU",
    "topic": "08_CHUYỂN ĐỘNG BẮT KỊP NGƯỢC CHIỀU",
    "num": 1,
    "text": "Xe A rời Thị trấn A để đi đến Thị trấn B. Xe B rời Thị trấn B để đi đến Thị\r\ntrấn A cùng lúc đó. Hai xe gặp nhau sau 4 giờ. Tìm khoảng cách giữa Thị trấn A\r\nvà Thị trấn B, biết tốc độ di chuyển của chúng lần lượt là 65 km/h và 80 km/h.",
    "options": [],
    "answer": "260",
    "acceptedAnswers": [
      "260",
      "260"
    ],
    "explanation": " Sau 4 giờ xe A đi được quãng đường là 65  ×  4 = 260 km\r\n Sau 4 giờ xe B đi được quãng đường là 80  ×  4 = 320 km\r\n Khoảng cách giữa hai thị trấn là 260 + 320 = 580 km",
    "type": "fill"
  },
  {
    "id": "G4-NC-1184",
    "exam": "SPECIAL_G4",
    "grade": 4,
    "round": "08_CHUYỂN ĐỘNG BẮT KỊP NGƯỢC CHIỀU",
    "topic": "08_CHUYỂN ĐỘNG BẮT KỊP NGƯỢC CHIỀU",
    "num": 2,
    "text": "Peter đi bộ từ thư viện đến trung tâm mua sắm. Cùng lúc đó, Jane đi bộ\r\ntừ trung tâm mua sắm đến thư viện. Họ gặp nhau 5 phút sau đó. Biết rằng tốc độ\r\nđi bộ của họ lần lượt là 60 m/phút và 50 m/phút, khoảng cách giữa thư viện và\r\ntrung tâm mua sắm là bao nhiêu?",
    "options": [],
    "answer": "300",
    "acceptedAnswers": [
      "300",
      "300"
    ],
    "explanation": " Sau 5 phút Peter đi được quãng đường là 60 × 5 = 300 m\r\n Sau 5 phút Jane đi được quãng đường là 50 × 5 = 250 m\r\n Khoảng cách giữa thư viện và trung tâm mua sắm là 300 + 250 = 550 m",
    "type": "fill"
  },
  {
    "id": "G4-NC-1185",
    "exam": "SPECIAL_G4",
    "grade": 4,
    "round": "08_CHUYỂN ĐỘNG BẮT KỊP NGƯỢC CHIỀU",
    "topic": "08_CHUYỂN ĐỘNG BẮT KỊP NGƯỢC CHIỀU",
    "num": 3,
    "text": "Tốc độ đi bộ của Shawn là 75 m/phút. Tốc độ chạy của cậu ấy gấp 2 lần\r\ntốc độ đi bộ. Cậu ấy mất 24 phút để đi bộ đến trường. Hỏi cậu ấy mất bao lâu\r\nnếu cậu ấy đi bộ một nửa quãng đường và chạy nửa quãng đường còn lại?",
    "options": [],
    "answer": "150",
    "acceptedAnswers": [
      "150",
      "150"
    ],
    "explanation": " Tốc độ chạy của Shawn là 75 × 2 = 150 m/phút\r\n Quãng đường từ nhà đến trường là 75 × 24 = 1800 m\r\n Một nửa quãng đường là 1800 : 2 = 900 m\r\n Thời gian đi bộ một nửa quãng đường là 900 : 75 = 12 phút\r\n Thời gian chạy một nửa quãng đường là 900 : 150 = 6 phút\r\n Thời gian cậu ấy đi hết quãng đường là 12 + 6 = 18 phút",
    "type": "fill"
  },
  {
    "id": "G4-NC-1186",
    "exam": "SPECIAL_G4",
    "grade": 4,
    "round": "08_CHUYỂN ĐỘNG BẮT KỊP NGƯỢC CHIỀU",
    "topic": "08_CHUYỂN ĐỘNG BẮT KỊP NGƯỢC CHIỀU",
    "num": 4,
    "text": "Peter đi bộ từ trung tâm mua sắm đến công viên. Cùng lúc đó, Jane đi bộ\r\ntừ công viên đến trung tâm mua sắm. Tốc độ của họ lần lượt là 60 m/phút và 70\r\nm/phút. Hỏi khoảng cách từ thư viện đến trung tâm mua sắm là bao nhiêu nếu\r\nhai người gặp nhau tại điểm cách trung điểm 15 m?",
    "options": [],
    "answer": "30",
    "acceptedAnswers": [
      "30",
      "30"
    ],
    "explanation": " Peter chậm hơn Jane nên Peter đi chưa tới trung điểm, còn Jane đã đi qua trung\r\nđiểm.\r\n Peter cách trung điểm 15 m và Jane qua trung điểm 15 m nên Jane đi nhiều hơn\r\nPeter 15 + 15 = 30 m\r\n Mỗi phút Jane đi nhiều hơn Peter 70 − 60 = 10 m\r\n Thời gian hai người đi đến khi gặp nhau là 30 : 10 = 3 phút\r\n\r\n Sau 3 phút Peter đi được 60 × 3 = 180 m\r\n Sau 3 phút Jane đi được 70 × 3 = 210 m\r\n Khoảng cách cần tìm là 180 + 210 = 390 m",
    "type": "fill"
  },
  {
    "id": "G4-NC-1187",
    "exam": "SPECIAL_G4",
    "grade": 4,
    "round": "08_CHUYỂN ĐỘNG BẮT KỊP NGƯỢC CHIỀU",
    "topic": "08_CHUYỂN ĐỘNG BẮT KỊP NGƯỢC CHIỀU",
    "num": 5,
    "text": "Mark đạp xe từ Thị trấn A đến Thị trấn B. Cùng lúc đó, Nick đạp xe từ Thị\r\ntrấn B đến Thị trấn A. Tốc độ của họ lần lượt là 12 km/h và 15 km/h. Một lúc sau\r\nhọ gặp nhau tại một điểm cách trung điểm của hai thị trấn 3 km. Khoảng cách giữa\r\nThị trấn A và Thị trấn B là bao nhiêu?",
    "options": [],
    "answer": "6",
    "acceptedAnswers": [
      "6",
      "6"
    ],
    "explanation": " Mark chậm hơn Nick nên Nick đi nhiều hơn Mark 3 + 3 = 6 km\r\n Mỗi giờ Nick đi nhiều hơn Mark 15 − 12 = 3 km\r\n Thời gian hai người đi đến khi gặp nhau là 6 : 3 = 2 giờ\r\n Sau 2 giờ Mark đi được 12 × 2 = 24 km\r\n Sau 2 giờ Nick đi được 15 × 2 = 30 km\r\n Khoảng cách giữa Thị trấn A và Thị trấn B là 24 + 30 = 54 km\r\n\r\n6*.\r\n\r\n[ĐVH] Một chiếc xe tải đi từ Thị trấn A đến Thị trấn B với tốc độ 60 km/h. Cùng\r\nlúc đó, một chiếc ô tô đi từ Thị trấn B đến Thị trấn A với tốc độ 80 km/h. Chúng\r\ngặp nhau tại điểm cách trung điểm của hai thị trấn 30 km. Tìm khoảng cách giữa\r\nhai thị trấn.\r\n Xe tải chậm hơn ô tô nên ô tô đi nhiều hơn xe tải 30 + 30 = 60 km\r\n Mỗi giờ ô tô đi nhiều hơn xe tải 80 − 60 = 20 km\r\n Thời gian hai xe đi đến khi gặp nhau là 60 : 20 = 3 giờ\r\n Sau 3 giờ xe tải đi được 60 × 3 = 180 km\r\n Sau 3 giờ ô tô đi được 80 × 3 = 240 km\r\n Khoảng cách giữa hai thị trấn là 180 + 240 = 420 km",
    "type": "fill"
  },
  {
    "id": "G4-NC-1188",
    "exam": "SPECIAL_G4",
    "grade": 4,
    "round": "08_CHUYỂN ĐỘNG BẮT KỊP NGƯỢC CHIỀU",
    "topic": "08_CHUYỂN ĐỘNG BẮT KỊP NGƯỢC CHIỀU",
    "num": 7,
    "text": "Qiqi đi bộ từ thư viện đến trường với tốc độ 60 m/phút. 2 phút sau,\r\nWeiling cũng rời thư viện đi đến trường với tốc độ 72 m/phút. Weiling đến\r\ntrường trước Qiqi 4 phút. Khoảng cách giữa thư viện và trường học là bao nhiêu?",
    "options": [],
    "answer": "6",
    "acceptedAnswers": [
      "6",
      "6"
    ],
    "explanation": " Weiling xuất phát sau Qiqi 2 phút nhưng đến trước 4 phút nên thời gian \r\nWeiling đi ít hơn thời gian Qiqi đi là 2 + 4 = 6 phút\r\n Tỉ số tốc độ của Qiqi và Weiling là 60 : 72 = 5 : 6\r\n Trên cùng một quãng đường, tỉ số thời gian của Qiqi và Weiling là 6 : 5\r\n Hiệu số phần bằng nhau là 6 − 5 = 1 phần, ứng với 6 phút\r\n Thời gian Qiqi đi là 6 × 6 = 36 phút\r\n Khoảng cách giữa thư viện và trường học là 60 × 36 = 2160 m",
    "type": "fill"
  },
  {
    "id": "G4-NC-1189",
    "exam": "SPECIAL_G4",
    "grade": 4,
    "round": "08_CHUYỂN ĐỘNG BẮT KỊP NGƯỢC CHIỀU",
    "topic": "08_CHUYỂN ĐỘNG BẮT KỊP NGƯỢC CHIỀU",
    "num": 8,
    "text": "Hai thị trấn A và B cách nhau 270 km. Cùng một lúc, xe thứ nhất rời A\r\nvới vận tốc 50 km/h, xe thứ hai rời B với vận tốc 40 km/h, hai xe đi ngược chiều\r\nnhau (đi về phía nhau). Hỏi sau bao lâu hai xe gặp nhau?",
    "options": [],
    "answer": "3 giờ",
    "acceptedAnswers": [
      "3 giờ",
      "3giờ"
    ],
    "explanation": " Tổng vận tốc: 50 + 40 = 90 (km/h).\r\n Thời gian gặp nhau: 270 : 90 = 3 (giờ).\r\n Đáp số: 3 giờ.",
    "type": "fill"
  },
  {
    "id": "G4-NC-1190",
    "exam": "SPECIAL_G4",
    "grade": 4,
    "round": "08_CHUYỂN ĐỘNG BẮT KỊP NGƯỢC CHIỀU",
    "topic": "08_CHUYỂN ĐỘNG BẮT KỊP NGƯỢC CHIỀU",
    "num": 9,
    "text": "Thị trấn X và thị trấn Y cách nhau 360 km. Lúc 7 giờ, xe A rời X với vận\r\ntốc 55 km/h và xe B rời Y với vận tốc 65 km/h, hai xe đi ngược chiều nhau. Hỏi\r\nhai xe gặp nhau lúc mấy giờ và chỗ gặp nhau cách X bao nhiêu km?",
    "options": [],
    "answer": "lúc 10 giờ, cách X 165 km",
    "acceptedAnswers": [
      "lúc 10 giờ, cách X 165 km",
      "lúc10giờ,cáchX165km"
    ],
    "explanation": " Tổng vận tốc: 55 + 65 = 120 (km/h).\r\n Thời gian gặp nhau: 360 : 120 = 3 (giờ). Lúc gặp nhau: 7 + 3 = 10 (giờ).\r\n Chỗ gặp cách X: 55 x 3 = 165 (km).\r\n Đáp số: lúc 10 giờ, cách X 165 km.",
    "type": "fill"
  },
  {
    "id": "G4-NC-1191",
    "exam": "SPECIAL_G4",
    "grade": 4,
    "round": "08_CHUYỂN ĐỘNG BẮT KỊP NGƯỢC CHIỀU",
    "topic": "08_CHUYỂN ĐỘNG BẮT KỊP NGƯỢC CHIỀU",
    "num": 10,
    "text": "Hai xe cùng xuất phát một lúc từ hai bến cách nhau 420 km và đi ngược\r\nchiều nhau. Sau 4 giờ thì hai xe gặp nhau. Biết vận tốc xe thứ nhất là 55 km/h,\r\ntính vận tốc xe thứ hai.",
    "options": [],
    "answer": "50 km/h",
    "acceptedAnswers": [
      "50 km/h",
      "50km/h"
    ],
    "explanation": " Tổng vận tốc hai xe: 420 : 4 = 105 (km/h).\r\n Vận tốc xe thứ hai: 105 – 55 = 50 (km/h).\r\n Đáp số: 50 km/h.",
    "type": "fill"
  },
  {
    "id": "G4-NC-1192",
    "exam": "SPECIAL_G4",
    "grade": 4,
    "round": "08_CHUYỂN ĐỘNG BẮT KỊP NGƯỢC CHIỀU",
    "topic": "08_CHUYỂN ĐỘNG BẮT KỊP NGƯỢC CHIỀU",
    "num": 11,
    "text": "Hai thị trấn M và N cách nhau 350 km. Lúc 6 giờ, xe A rời M với vận tốc\r\n40 km/h đi về phía N. Đến 8 giờ, xe B rời N với vận tốc 50 km/h đi về phía M.\r\nHỏi hai xe gặp nhau lúc mấy giờ?",
    "options": [],
    "answer": "11 giờ",
    "acceptedAnswers": [
      "11 giờ",
      "11giờ"
    ],
    "explanation": " Lúc 8 giờ, xe A đã đi được: 40  ×  2 = 80 (km).\r\n Quãng đường còn lại giữa hai xe: 350 – 80 = 270 (km).\r\n Tổng vận tốc: 40 + 50 = 90 (km/h).\r\n Thời gian gặp nhau kể từ 8 giờ: 270 : 90 = 3 (giờ).\r\n Lúc gặp nhau: 8 + 3 = 11 (giờ).\r\n Đáp số: 11 giờ.",
    "type": "fill"
  },
  {
    "id": "G4-NC-1193",
    "exam": "SPECIAL_G4",
    "grade": 4,
    "round": "08_CHUYỂN ĐỘNG BẮT KỊP NGƯỢC CHIỀU",
    "topic": "08_CHUYỂN ĐỘNG BẮT KỊP NGƯỢC CHIỀU",
    "num": 12,
    "text": "Hai xe cùng rời một địa điểm vào cùng một lúc và đi theo hai hướng\r\nngược nhau, vận tốc lần lượt là 48 km/h và 52 km/h. Hỏi sau bao lâu thì hai xe\r\ncách nhau 300 km?",
    "options": [],
    "answer": "3 giờ",
    "acceptedAnswers": [
      "3 giờ",
      "3giờ"
    ],
    "explanation": " Mỗi giờ hai xe rời xa nhau: 48 + 52 = 100 (km).\r\n Thời gian: 300 : 100 = 3 (giờ).\r\n Đáp số: 3 giờ.",
    "type": "fill"
  },
  {
    "id": "G4-NC-1194",
    "exam": "SPECIAL_G4",
    "grade": 4,
    "round": "08_CHUYỂN ĐỘNG BẮT KỊP NGƯỢC CHIỀU",
    "topic": "08_CHUYỂN ĐỘNG BẮT KỊP NGƯỢC CHIỀU",
    "num": 13,
    "text": "Lúc 8 giờ, xe A rời bến P với vận tốc 45 km/h. Đến 9 giờ, xe B cũng rời\r\nbến P với vận tốc 55 km/h, đi theo hướng ngược lại với xe A. Hỏi lúc 12 giờ, hai\r\nxe cách nhau bao nhiêu km?",
    "options": [],
    "answer": "345 km",
    "acceptedAnswers": [
      "345 km",
      "345km"
    ],
    "explanation": " Đến 12 giờ, xe A đã đi: 12 – 8 = 4 (giờ), được 45  ×  4 = 180 (km).\r\n Xe B đã đi: 12 – 9 = 3 (giờ), được 55  ×  3 = 165 (km).\r\n Vì hai xe đi ngược hướng nên khoảng cách là: 180 + 165 = 345 (km).\r\n Đáp số: 345 km.",
    "type": "fill"
  },
  {
    "id": "G4-NC-1195",
    "exam": "SPECIAL_G4",
    "grade": 4,
    "round": "08_CHUYỂN ĐỘNG BẮT KỊP NGƯỢC CHIỀU",
    "topic": "08_CHUYỂN ĐỘNG BẮT KỊP NGƯỢC CHIỀU",
    "num": 14,
    "text": "Hai xe cùng xuất phát một lúc từ hai thị trấn cách nhau 396 km, đi ngược\r\nchiều nhau và gặp nhau sau 3 giờ. Biết xe thứ nhất đi nhanh hơn xe thứ hai 12\r\nkm/h. Tính vận tốc mỗi xe.",
    "options": [],
    "answer": "72 km/h và 60 km/h",
    "acceptedAnswers": [
      "72 km/h và 60 km/h",
      "72km/hvà60km/h"
    ],
    "explanation": " Tổng vận tốc: 396 : 3 = 132 (km/h).\r\n Vận tốc xe thứ hai: (132 – 12) : 2 = 60 (km/h).\r\n Vận tốc xe thứ nhất: 60 + 12 = 72 (km/h).\r\n Đáp số: 72 km/h và 60 km/h.",
    "type": "fill"
  },
  {
    "id": "G4-NC-1196",
    "exam": "SPECIAL_G4",
    "grade": 4,
    "round": "08_CHUYỂN ĐỘNG BẮT KỊP NGƯỢC CHIỀU",
    "topic": "08_CHUYỂN ĐỘNG BẮT KỊP NGƯỢC CHIỀU",
    "num": 15,
    "text": "Hai thị trấn cách nhau 240 km. Cùng một lúc, xe A rời thị trấn thứ nhất\r\nvới vận tốc 50 km/h, xe B rời thị trấn thứ hai với vận tốc 70 km/h, hai xe đi ngược\r\nchiều nhau (đi về phía nhau) và cứ tiếp tục chạy sau khi gặp nhau. Hỏi sau bao\r\nlâu kể từ lúc xuất phát thì hai xe cách nhau 60 km? (Có hai trường hợp.)",
    "options": [],
    "answer": "120",
    "acceptedAnswers": [
      "120",
      "120"
    ],
    "explanation": " Tổng vận tốc: 50 + 70 = 120 (km/h).\r\n Trường hợp 1 (chưa gặp nhau): hai xe đã đến gần nhau thêm 240 – 60 = 180\r\n(km), thời gian: 180 : 120 = 1,5 (giờ).\r\n Trường hợp 2 (đã gặp nhau và đi qua nhau): hai xe đã đi tổng cộng 240 + 60 =\r\n300 (km), thời gian: 300 : 120 = 2,5 (giờ).\r\n Đáp số: sau 1,5 giờ (1 giờ 30 phút) hoặc sau 2,5 giờ (2 giờ 30 phút).",
    "type": "fill"
  },
  {
    "id": "G4-NC-1197",
    "exam": "SPECIAL_G4",
    "grade": 4,
    "round": "08_CHUYỂN ĐỘNG BẮT KỊP NGƯỢC CHIỀU",
    "topic": "08_CHUYỂN ĐỘNG BẮT KỊP NGƯỢC CHIỀU",
    "num": 16,
    "text": "Hai xe cùng xuất phát một lúc từ X và Y, đi ngược chiều nhau và gặp\r\nnhau sau 3 giờ. Chỗ gặp nhau cách X 150 km và cách Y 180 km. Tính khoảng\r\ncách XY và vận tốc mỗi xe.",
    "options": [],
    "answer": "XY = 330 km; vận tốc hai xe là 50 km/h và 60 km/h",
    "acceptedAnswers": [
      "XY = 330 km; vận tốc hai xe là 50 km/h và 60 km/h",
      "XY=330km;vậntốchaixelà50km/hvà60km/h"
    ],
    "explanation": " Quãng đường XY: 150 + 180 = 330 (km).\r\n Vận tốc xe đi từ X: 150 : 3 = 50 (km/h).\r\n Vận tốc xe đi từ Y: 180 : 3 = 60 (km/h).\r\n Đáp số: XY = 330 km; vận tốc hai xe là 50 km/h và 60 km/h.",
    "type": "fill"
  },
  {
    "id": "G4-NC-1198",
    "exam": "SPECIAL_G4",
    "grade": 4,
    "round": "08_CHUYỂN ĐỘNG BẮT KỊP NGƯỢC CHIỀU",
    "topic": "08_CHUYỂN ĐỘNG BẮT KỊP NGƯỢC CHIỀU",
    "num": 17,
    "text": "Xe A rời thị trấn X với vận tốc 40 km/h, xe B rời thị trấn Y với vận tốc 80\r\nkm/h, hai xe xuất phát cùng lúc và đi về phía nhau. Khoảng cách XY là 360 km.\r\nSau khi gặp nhau, mỗi xe tiếp tục đi đến thị trấn của xe kia. Hỏi sau khi gặp\r\nnhau, xe A cần đi thêm bao lâu để đến Y, xe B cần đi thêm bao lâu để đến X?",
    "options": [],
    "answer": "xe A đi thêm 6 giờ, xe B đi thêm 1,5 giờ (1 giờ 30 phút)",
    "acceptedAnswers": [
      "xe A đi thêm 6 giờ, xe B đi thêm 1,5 giờ (1 giờ 30 phút)",
      "xeAđithêm6giờ,xeBđithêm1,5giờ(1giờ30phút)"
    ],
    "explanation": " Tổng vận tốc: 40 + 80 = 120 (km/h).\r\n Thời gian gặp nhau: 360 : 120 = 3 (giờ).\r\n Lúc gặp nhau, xe A đã đi: 40  ×  3 = 120 (km) và xe B đã đi: 80  ×  3 = 240 (km).\r\n Xe A còn phải đi đoạn bằng quãng đường xe B đã đi (240 km): 240 : 40 = 6 (giờ).\r\n Xe B còn phải đi đoạn bằng quãng đường xe A đã đi (120 km): 120 : 80 = 1,5\r\n(giờ).\r\n Đáp số: xe A đi thêm 6 giờ, xe B đi thêm 1,5 giờ (1 giờ 30 phút).",
    "type": "fill"
  },
  {
    "id": "G4-NC-1199",
    "exam": "SPECIAL_G4",
    "grade": 4,
    "round": "09_CHUYỂN ĐỘNG BẮT KỊP CÙNG CHIỀU",
    "topic": "09_CHUYỂN ĐỘNG BẮT KỊP CÙNG CHIỀU",
    "num": 1,
    "text": "Xe A rời thị trấn X một giờ trước khi xe B rời thị trấn Y. Xe A đi với vận tốc\r\n60 km/h, xe B đi với vận tốc 45 km/h. Sau 4 giờ kể từ khi xe A bắt đầu hành trình,\r\nxe A đuổi kịp xe B. Tính khoảng cách giữa X và Y, biết hai xe đi cùng chiều.",
    "options": [],
    "answer": "240",
    "acceptedAnswers": [
      "240",
      "240"
    ],
    "explanation": " Sau 4 giờ xe A đi được quãng đường là 60  ×  4 = 240 km = XZ\r\n Xe B xuất phát sau nên khi xe A đi 4 giờ thì xe B đi 3 giờ, quãng đường mà xe B\r\nđi được là 45  ×  3 = 135 km = YZ\r\n Hai xe gặp nhau tại điểm Z như hình vẽ\r\n Ta dễ thấy XY = 240 – 135 = 105 km",
    "type": "fill"
  },
  {
    "id": "G4-NC-1200",
    "exam": "SPECIAL_G4",
    "grade": 4,
    "round": "09_CHUYỂN ĐỘNG BẮT KỊP CÙNG CHIỀU",
    "topic": "09_CHUYỂN ĐỘNG BẮT KỊP CÙNG CHIỀU",
    "num": 2,
    "text": "Xe máy A rời thành phố M hai giờ trước khi xe máy B rời thành phố N. Xe\r\nA đi với vận tốc 50 km/h, xe B đi với vận tốc 40 km/h. Sau 6 giờ kể từ khi xe A xuất\r\nphát, xe A đuổi kịp xe B. Tính khoảng cách giữa M và N, biết hai xe đi cùng chiều.",
    "options": [],
    "answer": "300",
    "acceptedAnswers": [
      "300",
      "300"
    ],
    "explanation": " Sau 6 giờ xe A đi được quãng đường là 50 × 6 = 300 km = MZ\r\n Xe B xuất phát sau nên khi xe A đi 6 giờ thì xe B đi 4 giờ, quãng đường mà xe B\r\nđi được là 40 × 4 = 160 km = NZ\r\n Hai xe gặp nhau tại điểm Z\r\n Ta dễ thấy MN = 300 − 160 = 140 km",
    "type": "fill"
  },
  {
    "id": "G4-NC-1201",
    "exam": "SPECIAL_G4",
    "grade": 4,
    "round": "09_CHUYỂN ĐỘNG BẮT KỊP CÙNG CHIỀU",
    "topic": "09_CHUYỂN ĐỘNG BẮT KỊP CÙNG CHIỀU",
    "num": 3,
    "text": "Ô tô A rời bến P một giờ trước khi ô tô B rời bến Q. Ô tô A đi với vận tốc\r\n72 km/h, ô tô B đi với vận tốc 60 km/h. Sau 7 giờ kể từ khi ô tô A xuất phát, ô tô A\r\nđuổi kịp ô tô B. Tính khoảng cách giữa hai bến P và Q, biết hai xe đi cùng chiều.",
    "options": [],
    "answer": "504",
    "acceptedAnswers": [
      "504",
      "504"
    ],
    "explanation": " Sau 7 giờ ô tô A đi được quãng đường là 72 × 7 = 504 km = PZ\r\n Ô tô B xuất phát sau nên khi ô tô A đi 7 giờ thì ô tô B đi 6 giờ, quãng đường mà\r\nô tô B đi được là 60 × 6 = 360 km = QZ\r\n Hai xe gặp nhau tại điểm Z\r\n Ta dễ thấy PQ = 504 − 360 = 144 km",
    "type": "fill"
  },
  {
    "id": "G4-NC-1202",
    "exam": "SPECIAL_G4",
    "grade": 4,
    "round": "09_CHUYỂN ĐỘNG BẮT KỊP CÙNG CHIỀU",
    "topic": "09_CHUYỂN ĐỘNG BẮT KỊP CÙNG CHIỀU",
    "num": 4,
    "text": "Xe khách A rời thị trấn H hai giờ trước khi xe tải B rời thị trấn K. Xe khách\r\nđi với vận tốc 90 km/h, xe tải đi với vận tốc 70 km/h. Sau 5 giờ kể từ khi xe khách\r\nxuất phát, xe khách đuổi kịp xe tải. Tính khoảng cách giữa H và K, biết hai xe đi\r\ncùng chiều.",
    "options": [],
    "answer": "450",
    "acceptedAnswers": [
      "450",
      "450"
    ],
    "explanation": " Sau 5 giờ xe khách đi được quãng đường là 90 × 5 = 450 km = HZ\r\n Xe tải xuất phát sau nên khi xe khách đi 5 giờ thì xe tải đi 3 giờ, quãng đường\r\nmà xe tải đi được là 70 × 3 = 210 km = KZ\r\n Hai xe gặp nhau tại điểm Z\r\n Ta dễ thấy HK = 450 − 210 = 240 km",
    "type": "fill"
  },
  {
    "id": "G4-NC-1203",
    "exam": "SPECIAL_G4",
    "grade": 4,
    "round": "09_CHUYỂN ĐỘNG BẮT KỊP CÙNG CHIỀU",
    "topic": "09_CHUYỂN ĐỘNG BẮT KỊP CÙNG CHIỀU",
    "num": 5,
    "text": "Xe A rời thị trấn C một giờ trước khi xe B rời thị trấn D. Xe A đi với vận tốc\r\n45 km/h, xe B đi với vận tốc 36 km/h. Sau 5 giờ kể từ khi xe A xuất phát, xe A đuổi\r\nkịp xe B. Tính khoảng cách giữa C và D, biết hai xe đi cùng chiều.",
    "options": [],
    "answer": "225",
    "acceptedAnswers": [
      "225",
      "225"
    ],
    "explanation": " Sau 5 giờ xe A đi được quãng đường là 45 × 5 = 225 km = CZ\r\n Xe B xuất phát sau nên khi xe A đi 5 giờ thì xe B đi 4 giờ, quãng đường mà xe B\r\nđi được là 36 × 4 = 144 km = DZ\r\n Hai xe gặp nhau tại điểm Z\r\n Ta dễ thấy CD = 225 − 144 = 81 km",
    "type": "fill"
  },
  {
    "id": "G4-NC-1204",
    "exam": "SPECIAL_G4",
    "grade": 4,
    "round": "09_CHUYỂN ĐỘNG BẮT KỊP CÙNG CHIỀU",
    "topic": "09_CHUYỂN ĐỘNG BẮT KỊP CÙNG CHIỀU",
    "num": 6,
    "text": "Xe A rời thị trấn E ba giờ trước khi xe B rời thị trấn F. Xe A đi với vận tốc\r\n84 km/h, xe B đi với vận tốc 65 km/h. Sau 8 giờ kể từ khi xe A xuất phát, xe A đuổi\r\nkịp xe B. Tính khoảng cách giữa E và F, biết hai xe đi cùng chiều.",
    "options": [],
    "answer": "672",
    "acceptedAnswers": [
      "672",
      "672"
    ],
    "explanation": " Sau 8 giờ xe A đi được quãng đường là 84 × 8 = 672 km = EZ\r\n Xe B xuất phát sau nên khi xe A đi 8 giờ thì xe B đi 5 giờ, quãng đường mà xe B\r\nđi được là 65 × 5 = 325 km = FZ\r\n Hai xe gặp nhau tại điểm Z\r\n Ta dễ thấy EF = 672 − 325 = 347 km",
    "type": "fill"
  },
  {
    "id": "G4-NC-1205",
    "exam": "SPECIAL_G4",
    "grade": 4,
    "round": "09_CHUYỂN ĐỘNG BẮT KỊP CÙNG CHIỀU",
    "topic": "09_CHUYỂN ĐỘNG BẮT KỊP CÙNG CHIỀU",
    "num": 7,
    "text": "Xe A rời thị trấn G hai giờ trước khi xe B rời thị trấn L. Xe A đi với vận tốc\r\n55 km/h, xe B đi với vận tốc 45 km/h. Sau 7 giờ kể từ khi xe A xuất phát, xe A đuổi\r\nkịp xe B. Tính khoảng cách giữa G và L, biết hai xe đi cùng chiều.",
    "options": [],
    "answer": "385",
    "acceptedAnswers": [
      "385",
      "385"
    ],
    "explanation": " Sau 7 giờ xe A đi được quãng đường là 55 × 7 = 385 km = GZ\r\n Xe B xuất phát sau nên khi xe A đi 7 giờ thì xe B đi 5 giờ, quãng đường mà xe B\r\nđi được là 45 × 5 = 225 km = LZ\r\n Hai xe gặp nhau tại điểm Z\r\n Ta dễ thấy GL = 385 − 225 = 160 km",
    "type": "fill"
  },
  {
    "id": "G4-NC-1206",
    "exam": "SPECIAL_G4",
    "grade": 4,
    "round": "09_CHUYỂN ĐỘNG BẮT KỊP CÙNG CHIỀU",
    "topic": "09_CHUYỂN ĐỘNG BẮT KỊP CÙNG CHIỀU",
    "num": 8,
    "text": "Xe A rời thị trấn S một giờ trước khi xe B rời thị trấn T. Xe A đi với vận tốc\r\n100 km/h, xe B đi với vận tốc 85 km/h. Sau 9 giờ kể từ khi xe A xuất phát, xe A đuổi\r\nkịp xe B. Tính khoảng cách giữa S và T, biết hai xe đi cùng chiều.",
    "options": [],
    "answer": "900",
    "acceptedAnswers": [
      "900",
      "900"
    ],
    "explanation": " Sau 9 giờ xe A đi được quãng đường là 100 × 9 = 900 km = SZ\r\n Xe B xuất phát sau nên khi xe A đi 9 giờ thì xe B đi 8 giờ, quãng đường mà xe B\r\nđi được là 85 × 8 = 680 km = TZ\r\n Hai xe gặp nhau tại điểm Z\r\n Ta dễ thấy ST = 900 − 680 = 220 km",
    "type": "fill"
  },
  {
    "id": "G4-NC-1207",
    "exam": "SPECIAL_G4",
    "grade": 4,
    "round": "09_CHUYỂN ĐỘNG BẮT KỊP CÙNG CHIỀU",
    "topic": "09_CHUYỂN ĐỘNG BẮT KỊP CÙNG CHIỀU",
    "num": 9,
    "text": "Xe A rời thị trấn U ba giờ trước khi xe B rời thị trấn V. Xe A đi với vận tốc\r\n48 km/h, xe B đi với vận tốc 40 km/h. Sau 10 giờ kể từ khi xe A xuất phát, xe A đuổi\r\nkịp xe B. Tính khoảng cách giữa U và V, biết hai xe đi cùng chiều.",
    "options": [],
    "answer": "480",
    "acceptedAnswers": [
      "480",
      "480"
    ],
    "explanation": " Sau 10 giờ xe A đi được quãng đường là 48 × 10 = 480 km = UZ\r\n Xe B xuất phát sau nên khi xe A đi 10 giờ thì xe B đi 7 giờ, quãng đường mà xe\r\nB đi được là 40 × 7 = 280 km = VZ\r\n Hai xe gặp nhau tại điểm Z\r\n Ta dễ thấy UV = 480 − 280 = 200 km",
    "type": "fill"
  },
  {
    "id": "G4-NC-1208",
    "exam": "SPECIAL_G4",
    "grade": 4,
    "round": "09_CHUYỂN ĐỘNG BẮT KỊP CÙNG CHIỀU",
    "topic": "09_CHUYỂN ĐỘNG BẮT KỊP CÙNG CHIỀU",
    "num": 10,
    "text": "Xe A rời thị trấn Z hai giờ trước khi xe B rời thị trấn W. Xe A đi với vận tốc\r\n66 km/h, xe B đi với vận tốc 54 km/h. Sau 8 giờ kể từ khi xe A xuất phát, xe A đuổi\r\nkịp xe B. Tính khoảng cách giữa Z và W, biết hai xe đi cùng chiều.",
    "options": [],
    "answer": "528",
    "acceptedAnswers": [
      "528",
      "528"
    ],
    "explanation": " Sau 8 giờ xe A đi được quãng đường là 66 × 8 = 528 km = ZZ′ (với Z′ là điểm gặp\r\nnhau, gọi là điểm P)\r\n Để tránh trùng tên điểm, gọi điểm hai xe gặp nhau là P:\r\n Sau 8 giờ xe A đi được quãng đường là 66 × 8 = 528 km = ZP\r\n Xe B xuất phát sau nên khi xe A đi 8 giờ thì xe B đi 6 giờ, quãng đường mà xe B\r\nđi được là 54 × 6 = 324 km = WP\r\n Hai xe gặp nhau tại điểm P\r\n Ta dễ thấy ZW = 528 − 324 = 204 km",
    "type": "fill"
  },
  {
    "id": "G4-NC-1209",
    "exam": "SPECIAL_G4",
    "grade": 4,
    "round": "09_CHUYỂN ĐỘNG BẮT KỊP CÙNG CHIỀU",
    "topic": "09_CHUYỂN ĐỘNG BẮT KỊP CÙNG CHIỀU",
    "num": 11,
    "text": "Lúc 7 giờ, xe A rời thị trấn X với vận tốc 60 km/h. Cùng lúc đó, xe B rời thị\r\ntrấn Y với vận tốc 50 km/h. Thị trấn Y cách X 40 km, hai xe đi cùng chiều và Y ở\r\nphía trước X. Hỏi xe A đuổi kịp xe B sau bao lâu và vào lúc mấy giờ?",
    "options": [],
    "answer": "10",
    "acceptedAnswers": [
      "10",
      "10"
    ],
    "explanation": " Xe A chạy nhanh hơn xe B, mỗi giờ xe A đuổi gần được xe B là 60 − 50 = 10 km\r\n Khoảng cách ban đầu giữa hai xe là 40 km\r\n Thời gian xe A đuổi kịp xe B là 40 : 10 = 4 giờ\r\n Hai xe sẽ gặp nhau lúc 7 + 4 = 11 giờ",
    "type": "fill"
  },
  {
    "id": "G4-NC-1210",
    "exam": "SPECIAL_G4",
    "grade": 4,
    "round": "09_CHUYỂN ĐỘNG BẮT KỊP CÙNG CHIỀU",
    "topic": "09_CHUYỂN ĐỘNG BẮT KỊP CÙNG CHIỀU",
    "num": 12,
    "text": "Xe A rời thị trấn X trước xe B rời thị trấn Y 2 giờ, vận tốc xe A là 70 km/h.\r\nThị trấn Y cách X 200 km, hai xe đi cùng chiều. Sau 6 giờ kể từ khi xe A xuất phát\r\nthì A đuổi kịp B. Tính vận tốc xe B.",
    "options": [],
    "answer": "420",
    "acceptedAnswers": [
      "420",
      "420"
    ],
    "explanation": " Sau 6 giờ xe A đi được quãng đường là 70 × 6 = 420 km = XZ\r\n Xe B xuất phát sau 2 giờ nên khi xe A đi 6 giờ thì xe B đi 6 − 2 = 4 giờ\r\n Hai xe gặp nhau tại điểm Z như hình vẽ\r\n Ta dễ thấy quãng đường xe B đi được là YZ = 420 − 200 = 220 km\r\n Vận tốc xe B là 220 : 4 = 55 km/h",
    "type": "fill"
  },
  {
    "id": "G4-NC-1211",
    "exam": "SPECIAL_G4",
    "grade": 4,
    "round": "09_CHUYỂN ĐỘNG BẮT KỊP CÙNG CHIỀU",
    "topic": "09_CHUYỂN ĐỘNG BẮT KỊP CÙNG CHIỀU",
    "num": 13,
    "text": "Xe A rời thị trấn X với vận tốc 80 km/h, xe B rời thị trấn Y với vận tốc 60\r\nkm/h. Hai thị trấn cách nhau 60 km, hai xe đi cùng chiều và Y ở phía trước X. Biết\r\nxe A đuổi kịp xe B sau 6 giờ kể từ khi xe A xuất phát. Hỏi xe B rời Y trước xe A bao\r\nnhiêu giờ?",
    "options": [],
    "answer": "480",
    "acceptedAnswers": [
      "480",
      "480"
    ],
    "explanation": " Sau 6 giờ xe A đi được quãng đường là 80 × 6 = 480 km = XZ\r\n Hai xe gặp nhau tại điểm Z như hình vẽ\r\n Ta dễ thấy quãng đường xe B đi được là YZ = 480 − 60 = 420 km\r\n Thời gian xe B đi là 420 : 60 = 7 giờ\r\n Xe B đi nhiều hơn xe A là 7 − 6 = 1 giờ\r\n Vậy xe B rời Y trước xe A 1 giờ",
    "type": "fill"
  },
  {
    "id": "G4-NC-1212",
    "exam": "SPECIAL_G4",
    "grade": 4,
    "round": "09_CHUYỂN ĐỘNG BẮT KỊP CÙNG CHIỀU",
    "topic": "09_CHUYỂN ĐỘNG BẮT KỊP CÙNG CHIỀU",
    "num": 14,
    "text": "Xe A rời bến lúc 8 giờ với vận tốc 45 km/h. Đến 10 giờ, xe B rời cùng bến\r\nđó, đi cùng chiều với vận tốc 60 km/h. Hỏi xe B đuổi kịp xe A lúc mấy giờ và tại\r\nnơi cách bến bao nhiêu km?",
    "options": [],
    "answer": "90",
    "acceptedAnswers": [
      "90",
      "90"
    ],
    "explanation": " Từ 8 giờ đến 10 giờ xe A đi được quãng đường là 45 × 2 = 90 km\r\n Mỗi giờ xe B đuổi gần được xe A là 60 − 45 = 15 km\r\n Thời gian xe B đuổi kịp xe A là 90 : 15 = 6 giờ\r\n Xe B đuổi kịp xe A lúc 10 + 6 = 16 giờ\r\n Nơi gặp nhau cách bến là 60 × 6 = 360 km",
    "type": "fill"
  },
  {
    "id": "G4-NC-1213",
    "exam": "SPECIAL_G4",
    "grade": 4,
    "round": "09_CHUYỂN ĐỘNG BẮT KỊP CÙNG CHIỀU",
    "topic": "09_CHUYỂN ĐỘNG BẮT KỊP CÙNG CHIỀU",
    "num": 15,
    "text": "Xe A rời thị trấn X với vận tốc 72 km/h, xe B rời thị trấn Y với vận tốc 60\r\nkm/h, hai xe xuất phát cùng lúc và đi cùng chiều. Y cách X 48 km và ở phía trước\r\nX. Hỏi 7 giờ sau khi xuất phát, hai xe cách nhau bao nhiêu km?",
    "options": [],
    "answer": "12",
    "acceptedAnswers": [
      "12",
      "12"
    ],
    "explanation": " Mỗi giờ xe A đuổi gần được xe B là 72 − 60 = 12 km\r\n Sau 7 giờ xe A đuổi gần được xe B là 12 × 7 = 84 km\r\n Khoảng cách ban đầu là 48 km nên xe A đã đuổi kịp và vượt xe B\r\n Lúc đó hai xe cách nhau là 84 − 48 = 36 km (xe A ở phía trước)",
    "type": "fill"
  },
  {
    "id": "G4-NC-1214",
    "exam": "SPECIAL_G4",
    "grade": 4,
    "round": "09_CHUYỂN ĐỘNG BẮT KỊP CÙNG CHIỀU",
    "topic": "09_CHUYỂN ĐỘNG BẮT KỊP CÙNG CHIỀU",
    "num": 16,
    "text": "Hai xe cùng xuất phát một lúc, đi cùng chiều. Xe A đi từ thị trấn X với vận\r\ntốc 54 km/h, xe B đi từ thị trấn Y với vận tốc 45 km/h. Y cách X 36 km và ở phía\r\ntrước X. Tính quãng đường xe A đã đi khi đuổi kịp xe B.",
    "options": [],
    "answer": "9",
    "acceptedAnswers": [
      "9",
      "9"
    ],
    "explanation": " Mỗi giờ xe A đuổi gần được xe B là 54 − 45 = 9 km\r\n Khoảng cách ban đầu là 36 km\r\n Thời gian xe A đuổi kịp xe B là 36 : 9 = 4 giờ\r\n Quãng đường xe A đã đi là 54 × 4 = 216 km\r\n\r\n17*.\r\n\r\n[ĐVH] Lúc 6 giờ, xe B rời bến. Đến 9 giờ, xe A rời cùng bến đó, đi cùng chiều và\r\nđuổi kịp xe B lúc 15 giờ. Biết vận tốc xe A lớn hơn vận tốc xe B là 15 km/h. Tính\r\nvận tốc mỗi xe.\r\n Từ 6 giờ đến 9 giờ xe B đi được 3 giờ\r\n Xe A đuổi kịp xe B lúc 15 giờ nên thời gian xe A đi là 15 − 9 = 6 giờ\r\n Thời gian xe B đi là 15 − 6 = 9 giờ\r\n Cùng một quãng đường, thời gian của xe A và xe B có tỉ số 6 : 9 = 2 : 3\r\n Nên tỉ số vận tốc của xe A và xe B là 3 : 2\r\n Hiệu số phần bằng nhau là 3 − 2 = 1 phần, ứng với 15 km/h\r\n Vận tốc xe B là 15 × 2 = 30 km/h\r\n Vận tốc xe A là 15 × 3 = 45 km/h",
    "type": "fill"
  },
  {
    "id": "G4-IQ-05-1",
    "exam": "SPECIAL_G4",
    "grade": 4,
    "round": "05_MATH IQ LEVEL 2_Đề số 5",
    "topic": "05_MATH IQ LEVEL 2_Đề số 5",
    "num": 1,
    "text": "Quan sát và lựa chọn phương án phù hợp để hoàn thành quy luật hình:",
    "image": "images/math_iq_g4_de5_q1.png",
    "options": [
      "A. Phương án A",
      "B. Phương án B",
      "C. Phương án C"
    ],
    "answer": "C",
    "explanation": "Quy luật: Ở mỗi hàng, tổng số ô vuông được tô màu đen là 20 ô.\n- Hàng 1: 5 + 6 + 6 + 3 = 20 ô tô đậm.\n- Hàng 2: 5 + 5 + 5 + 5 = 20 ô tô đậm.\n- Hàng 3: Đang có 6 + 6 + 3 = 15 ô tô đậm, do đó hình còn thiếu phải có: 20 - 15 = 5 ô vuông tô đậm.\nĐối chiếu các phương án A, B, C thì chỉ có hình C có đúng 5 ô vuông tô đậm.\nĐáp án: C.",
    "type": "mc",
    "subItems": []
  },
  {
    "id": "G4-IQ-05-2",
    "exam": "SPECIAL_G4",
    "grade": 4,
    "round": "05_MATH IQ LEVEL 2_Đề số 5",
    "topic": "05_MATH IQ LEVEL 2_Đề số 5",
    "num": 2,
    "text": "Quan sát quy luật và tìm số thích hợp điền vào vị trí dấu hỏi:",
    "image": "images/math_iq_g4_de5_q2.png",
    "options": [],
    "answer": "37",
    "acceptedAnswers": [
      "37"
    ],
    "explanation": "Quy luật: Ở mỗi hàng, chữ số bên phải thêm 2 đơn vị rồi ghép với chữ số bên trái để được số ở giữa có hai chữ số:\n- Hàng 1: Chữ số bên phải là 3, thêm 2 được 5. Ghép với chữ số bên trái là 6 được số ở giữa là 65.\n- Hàng 3: Chữ số bên phải là 4, thêm 2 được 6. Ghép với chữ số bên trái là 5 được số ở giữa là 56.\n- Hàng 2: Chữ số bên phải là 5, thêm 2 được 7. Ghép với chữ số bên trái là 3 được số ở giữa là 37.\nVậy số cần điền vào dấu ? là 37.\nĐáp số: 37.",
    "type": "fill",
    "subItems": []
  },
  {
    "id": "G4-IQ-05-3",
    "exam": "SPECIAL_G4",
    "grade": 4,
    "round": "05_MATH IQ LEVEL 2_Đề số 5",
    "topic": "05_MATH IQ LEVEL 2_Đề số 5",
    "num": 3,
    "text": "Số nào sẽ hoàn thiện quy luật dưới đây?",
    "image": "images/math_iq_g4_de5_q3.png",
    "options": [],
    "answer": "1",
    "acceptedAnswers": [
      "1"
    ],
    "explanation": "Quy luật: Ở mỗi hàng, ghép các chữ số tạo thành một số có 3 chữ số:\n- Hàng 1 ghép được số: 936\n- Hàng 2 ghép được số: 425\nLấy hiệu hai số: 936 - 425 = 511.\nSố ở hàng thứ ba chính là 511, do đó chữ số ở vị trí dấu ? là chữ số 1.\nĐáp số: 1.",
    "type": "fill",
    "subItems": []
  },
  {
    "id": "G4-IQ-05-4",
    "exam": "SPECIAL_G4",
    "grade": 4,
    "round": "05_MATH IQ LEVEL 2_Đề số 5",
    "topic": "05_MATH IQ LEVEL 2_Đề số 5",
    "num": 4,
    "text": "Quan sát quy luật và tìm số thích hợp điền vào vị trí dấu hỏi:",
    "image": "images/math_iq_g4_de5_q4.png",
    "options": [],
    "answer": "5",
    "acceptedAnswers": [
      "5"
    ],
    "explanation": "Quy luật: Ở mỗi hình thoi, hiệu của các cặp số đối diện nhau luôn bằng 3:\n- Hình 1: 10 - 7 = 3 và 9 - 6 = 3.\n- Hình 3: 15 - 12 = 3 và 12 - 9 = 3.\n- Hình 2: 11 - 8 = 3, do đó số ở đáy phải thỏa mãn: ? - 2 = 3 => ? = 5.\nVậy số cần điền vào dấu ? là 5.\nĐáp số: 5.",
    "type": "fill",
    "subItems": []
  },
  {
    "id": "G4-IQ-05-5",
    "exam": "SPECIAL_G4",
    "grade": 4,
    "round": "05_MATH IQ LEVEL 2_Đề số 5",
    "topic": "05_MATH IQ LEVEL 2_Đề số 5",
    "num": 5,
    "text": "Quan sát quy luật và tìm hình thích hợp điền vào vị trí dấu hỏi:",
    "image": "images/math_iq_g4_de5_q5.png",
    "options": [
      "A. Hình vuông 12",
      "B. Hình vuông 15",
      "C. Hình tròn 4"
    ],
    "answer": "B",
    "explanation": "Quy luật: Ở mỗi hàng luôn chứa 2 hình tròn, 1 hình vuông và 1 hình lục giác. Đồng thời, tổng các số trong 2 hình tròn bằng tổng các số trong 2 hình còn lại:\n- Hàng 1: Tổng 2 hình tròn (5 + 9 = 14) = Hình vuông 6 + Lục giác 8 (14).\n- Hàng 2: Tổng 2 hình tròn (12 + 9 = 21) = Hình vuông 10 + Lục giác 11 (21).\n- Hàng 3: Đang có 2 hình tròn (9 và 9) và 1 hình lục giác (3). Do đó, hình còn thiếu phải là 1 hình vuông có số x sao cho: 9 + 9 = 3 + x => x = 15.\nĐối chiếu các phương án A, B, C thì hình B là hình vuông chứa số 15.\nĐáp án: B.",
    "type": "mc",
    "subItems": []
  },
  {
    "id": "G4-IQ-05-6",
    "exam": "SPECIAL_G4",
    "grade": 4,
    "round": "05_MATH IQ LEVEL 2_Đề số 5",
    "topic": "05_MATH IQ LEVEL 2_Đề số 5",
    "num": 6,
    "text": "Điền chữ cái còn thiếu để hoàn thành quy luật dưới đây:",
    "image": "images/math_iq_g4_de5_q6.png",
    "options": [],
    "answer": "U",
    "acceptedAnswers": [
      "U",
      "u"
    ],
    "explanation": "Quy luật: Xét theo từng cột dọc, cộng thứ tự của chữ cái trong bảng chữ cái tiếng Anh ở hàng 1 và hàng 2 ta được chữ cái ở hàng 3:\n- Cột 3: I (thứ 9) + A (thứ 1) = J (thứ 10).\n- Cột 2: U (thứ 21) + C (thứ 3) = X (thứ 24).\n- Cột 1: Q (thứ 17) + D (thứ 4) = U (thứ 21).\nVậy chữ cái cần điền vào dấu ? là U.\nĐáp số: U.",
    "type": "fill",
    "subItems": []
  },
  {
    "id": "G4-IQ-05-7",
    "exam": "SPECIAL_G4",
    "grade": 4,
    "round": "05_MATH IQ LEVEL 2_Đề số 5",
    "topic": "05_MATH IQ LEVEL 2_Đề số 5",
    "num": 7,
    "text": "Quan sát quy luật và điền số còn thiếu vào vị trí dấu hỏi:",
    "image": "images/math_iq_g4_de5_q7.png",
    "options": [],
    "answer": "6",
    "acceptedAnswers": [
      "6"
    ],
    "explanation": "Quy luật: Hiệu giữa hai số đối diện nhau qua cạnh hoặc đường chéo thêm 1 thì được số ở trung tâm cạnh tương ứng:\n- Cạnh trên: 7 - 4 = 3, thêm 1 được số ở giữa là 4.\n- Cạnh phải: 9 - 7 = 2, thêm 1 được số ở giữa là 3.\n- Cạnh trái: 5 - 4 = 1, thêm 1 được số ở giữa là 2.\n- Cạnh dưới: 9 - 5 = 4, thêm 1 được số ở giữa là 5.\nÁp dụng cho tâm chính giữa (giao của hai đường chéo):\n- Đường chéo 9 và 4: (9 - 4) + 1 = 5 + 1 = 6.\n- Đường chéo 7 và 2: (7 - 2) + 1 = 5 + 1 = 6.\nVậy số cần điền vào dấu ? ở chính giữa là 6.\nĐáp số: 6.",
    "type": "fill",
    "subItems": []
  },
  {
    "id": "G4-IQ-05-8",
    "exam": "SPECIAL_G4",
    "grade": 4,
    "round": "05_MATH IQ LEVEL 2_Đề số 5",
    "topic": "05_MATH IQ LEVEL 2_Đề số 5",
    "num": 8,
    "text": "Quan sát quy luật và điền số thích hợp vào vị trí dấu hỏi:",
    "image": "images/math_iq_g4_de5_q8.png",
    "options": [],
    "answer": "10",
    "acceptedAnswers": [
      "10"
    ],
    "explanation": "Quy luật: Ở mỗi hình tròn, các số có mối quan hệ gấp đôi:\n- Hình 1: Số bên trái gấp đôi số bên phải (6 = 3 × 2, 4 = 2 × 2).\n- Hình 3: Số bên phải gấp đôi số bên trái (12 = 6 × 2, 2 = 1 × 2).\n- Hình 2: Hàng trên số bên phải gấp đôi số bên trái (8 = 4 × 2). Do đó hàng dưới số ở vị trí dấu ? phải bằng gấp đôi của 5: 5 × 2 = 10.\nVậy số cần điền vào dấu ? là 10.\nĐáp số: 10.",
    "type": "fill",
    "subItems": []
  }
];

if (typeof window !== 'undefined') {
  window.GRADE4_SPECIAL_DATA = GRADE4_SPECIAL_DB;
}
if (typeof module !== 'undefined') {
  module.exports = GRADE4_SPECIAL_DB;
}
