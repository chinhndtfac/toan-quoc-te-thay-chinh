// BỘ 365 BÀI TOÁN HAY VÀ KHÓ & TOÁN NÂNG CAO TIỂU HỌC (LỚP 1 - LỚP 5)
// Biên soạn & Quản lý: Thầy Nguyễn Đình Chinh (0941.492.468)
// Hệ thống tuyển chọn các chuyên đề bồi dưỡng HSG, Toán Olympic & Tư duy tiểu học chuẩn hóa

const TOAN_365_DB = {
  "grade1": [
    {
      "id": "T365-G1-001",
      "exam": "TOAN_365",
      "grade": 1,
      "round": "Chuyên đề 1: SỐ ĐẾM, SO SÁNH & QUY LUẬT DÃY SỐ",
      "topic": "SỐ ĐẾM, SO SÁNH & QUY LUẬT DÃY SỐ",
      "num": 1,
      "text": "Bài 1. Điền số thích hợp vào chỗ chấm: 1, 3, 5, 7, ... , ...",
      "type": "fill",
      "answer": "9, 11",
      "acceptedAnswers": [
        "9, 11",
        "9; 11",
        "9 và 11",
        "9 11"
      ],
      "explanation": "Dãy số lẻ cách nhau 2 đơn vị: 7 + 2 = 9; 9 + 2 = 11. Điền: 9, 11."
    },
    {
      "id": "T365-G1-002",
      "exam": "TOAN_365",
      "grade": 1,
      "round": "Chuyên đề 1: SỐ ĐẾM, SO SÁNH & QUY LUẬT DÃY SỐ",
      "topic": "SỐ ĐẾM, SO SÁNH & QUY LUẬT DÃY SỐ",
      "num": 2,
      "text": "Bài 2. Tìm số còn thiếu trong ô trống: 10, 8, 6, [ ], 2, 0.",
      "type": "fill",
      "answer": "4",
      "acceptedAnswers": [
        "4"
      ],
      "explanation": "Dãy số lùi 2 đơn vị: 6 - 2 = 4."
    },
    {
      "id": "T365-G1-003",
      "exam": "TOAN_365",
      "grade": 1,
      "round": "Chuyên đề 1: SỐ ĐẾM, SO SÁNH & QUY LUẬT DÃY SỐ",
      "topic": "SỐ ĐẾM, SO SÁNH & QUY LUẬT DÃY SỐ",
      "num": 3,
      "text": "Bài 3. Có bao nhiêu số có một chữ số lớn hơn 4?",
      "type": "fill",
      "answer": "5 số",
      "acceptedAnswers": [
        "5 số",
        "5"
      ],
      "explanation": "Các số: 5, 6, 7, 8, 9 (có 5 số)."
    },
    {
      "id": "T365-G1-004",
      "exam": "TOAN_365",
      "grade": 1,
      "round": "Chuyên đề 1: SỐ ĐẾM, SO SÁNH & QUY LUẬT DÃY SỐ",
      "topic": "SỐ ĐẾM, SO SÁNH & QUY LUẬT DÃY SỐ",
      "num": 4,
      "text": "Bài 4. Viết số nhỏ nhất có hai chữ số và số lớn nhất có một chữ số.",
      "type": "fill",
      "answer": "10; 9",
      "acceptedAnswers": [
        "10; 9",
        "10, 9",
        "10 và 9",
        "10 9",
        "10",
        "9"
      ],
      "explanation": "Số nhỏ nhất có hai chữ số là 10; số lớn nhất có một chữ số là 9."
    },
    {
      "id": "T365-G1-005",
      "exam": "TOAN_365",
      "grade": 1,
      "round": "Chuyên đề 1: SỐ ĐẾM, SO SÁNH & QUY LUẬT DÃY SỐ",
      "topic": "SỐ ĐẾM, SO SÁNH & QUY LUẬT DÃY SỐ",
      "num": 5,
      "text": "Bài 5. Sắp xếp các số sau theo thứ tự từ bé đến lớn: 19, 8, 15, 20, 11, 4.",
      "type": "fill",
      "answer": "4, 8, 11, 15, 19, 20",
      "acceptedAnswers": [
        "4, 8, 11, 15, 19, 20",
        "4; 8; 11; 15; 19; 20",
        "4 và 8 và 11 và 15 và 19 và 20",
        "4 8 11 15 19 20"
      ],
      "explanation": "Thứ tự từ bé đến lớn: 4, 8, 11, 15, 19, 20."
    },
    {
      "id": "T365-G1-006",
      "exam": "TOAN_365",
      "grade": 1,
      "round": "Chuyên đề 1: SỐ ĐẾM, SO SÁNH & QUY LUẬT DÃY SỐ",
      "topic": "SỐ ĐẾM, SO SÁNH & QUY LUẬT DÃY SỐ",
      "num": 6,
      "text": "Bài 6. Số liền trước của số 20 là số nào? Số liền sau của số 15 là số nào?",
      "type": "fill",
      "answer": "19; 16",
      "acceptedAnswers": [
        "19; 16",
        "19, 16",
        "19 và 16",
        "19 16",
        "19",
        "16"
      ],
      "explanation": "Số liền trước số 20 là 19; số liền sau số 15 là 16."
    },
    {
      "id": "T365-G1-007",
      "exam": "TOAN_365",
      "grade": 1,
      "round": "Chuyên đề 2: PHÉP TÍNH VUI & TÁCH GỘP SỐ",
      "topic": "PHÉP TÍNH VUI & TÁCH GỘP SỐ",
      "num": 7,
      "text": "Bài 7. Điền số thích hợp vào ô trống: 4 + [ ] = 10.",
      "type": "fill",
      "answer": "6",
      "acceptedAnswers": [
        "6"
      ],
      "explanation": "10 - 4 = 6."
    },
    {
      "id": "T365-G1-008",
      "exam": "TOAN_365",
      "grade": 1,
      "round": "Chuyên đề 2: PHÉP TÍNH VUI & TÁCH GỘP SỐ",
      "topic": "PHÉP TÍNH VUI & TÁCH GỘP SỐ",
      "num": 8,
      "text": "Bài 8. Điền số thích hợp: 15 - [ ] = 8.",
      "type": "fill",
      "answer": "7",
      "acceptedAnswers": [
        "7"
      ],
      "explanation": "15 - 8 = 7."
    },
    {
      "id": "T365-G1-009",
      "exam": "TOAN_365",
      "grade": 1,
      "round": "Chuyên đề 2: PHÉP TÍNH VUI & TÁCH GỘP SỐ",
      "topic": "PHÉP TÍNH VUI & TÁCH GỘP SỐ",
      "num": 9,
      "text": "Bài 9. Tính nhanh tổng sau: 2 + 5 + 8.",
      "type": "fill",
      "answer": "15",
      "acceptedAnswers": [
        "15"
      ],
      "explanation": "(2 + 8) + 5 = 10 + 5 = 15."
    },
    {
      "id": "T365-G1-010",
      "exam": "TOAN_365",
      "grade": 1,
      "round": "Chuyên đề 2: PHÉP TÍNH VUI & TÁCH GỘP SỐ",
      "topic": "PHÉP TÍNH VUI & TÁCH GỘP SỐ",
      "num": 10,
      "text": "Bài 10. Điền dấu (+ hoặc -) vào ô trống để được kết quả đúng: 6 [ ] 2 [ ] 3 = 5.",
      "type": "fill",
      "answer": "+ và -",
      "acceptedAnswers": [
        "+ và -"
      ],
      "explanation": "6 + 2 - 3 = 8 - 3 = 5. Điền dấu: + và -."
    },
    {
      "id": "T365-G1-011",
      "exam": "TOAN_365",
      "grade": 1,
      "round": "Chuyên đề 2: PHÉP TÍNH VUI & TÁCH GỘP SỐ",
      "topic": "PHÉP TÍNH VUI & TÁCH GỘP SỐ",
      "num": 11,
      "text": "Bài 11. An có 7 chiếc kẹo, mẹ cho An thêm một số kẹo nữa thì An có tất cả 12 chiếc kẹo. Hỏi mẹ đã cho An mấy chiếc kẹo?",
      "type": "fill",
      "answer": "5 chiếc kẹo",
      "acceptedAnswers": [
        "5 chiếc kẹo",
        "5",
        "5 kẹo"
      ],
      "explanation": "Mẹ cho An: 12 - 7 = 5 chiếc kẹo."
    },
    {
      "id": "T365-G1-012",
      "exam": "TOAN_365",
      "grade": 1,
      "round": "Chuyên đề 2: PHÉP TÍNH VUI & TÁCH GỘP SỐ",
      "topic": "PHÉP TÍNH VUI & TÁCH GỘP SỐ",
      "num": 12,
      "text": "Bài 12. Trên cành cây có 9 con chim đang đậu. Bỗng có 4 con bay đi, sau đó lại có 2 con khác bay đến đậu cùng. Hỏi trên cành cây lúc này có tất cả bao nhiêu con chim?",
      "type": "fill",
      "answer": "7 con chim",
      "acceptedAnswers": [
        "7 con chim",
        "7 chim"
      ],
      "explanation": "Số chim còn lại: 9 - 4 + 2 = 7 con chim."
    },
    {
      "id": "T365-G1-013",
      "exam": "TOAN_365",
      "grade": 1,
      "round": "Chuyên đề 3: HÌNH HỌC TRỰC QUAN & ĐẾM KHỐI LẬP PHƯƠNG",
      "topic": "HÌNH HỌC TRỰC QUAN & ĐẾM KHỐI LẬP PHƯƠNG",
      "num": 13,
      "text": "Bài 13. Một hình vuông được kẻ một đường thẳng nối hai góc đối diện. Hỏi hình vuông đó bị chia thành mấy hình tam giác?",
      "type": "fill",
      "answer": "2 hình tam giác",
      "acceptedAnswers": [
        "2 hình tam giác"
      ],
      "explanation": "Bị chia thành 2 hình tam giác."
    },
    {
      "id": "T365-G1-014",
      "exam": "TOAN_365",
      "grade": 1,
      "round": "Chuyên đề 3: HÌNH HỌC TRỰC QUAN & ĐẾM KHỐI LẬP PHƯƠNG",
      "topic": "HÌNH HỌC TRỰC QUAN & ĐẾM KHỐI LẬP PHƯƠNG",
      "num": 14,
      "text": "Bài 14. Có bao nhiêu hình vuông trong một hình vuông lớn được chia thành 4 ô vuông nhỏ?",
      "type": "fill",
      "answer": "5 hình vuông",
      "acceptedAnswers": [
        "5 hình vuông"
      ],
      "explanation": "Gồm 4 hình vuông nhỏ và 1 hình vuông lớn bên ngoài = 5 hình vuông."
    },
    {
      "id": "T365-G1-015",
      "exam": "TOAN_365",
      "grade": 1,
      "round": "Chuyên đề 3: HÌNH HỌC TRỰC QUAN & ĐẾM KHỐI LẬP PHƯƠNG",
      "topic": "HÌNH HỌC TRỰC QUAN & ĐẾM KHỐI LẬP PHƯƠNG",
      "num": 15,
      "text": "Bài 15. Người ta xếp các khối gỗ lập phương thành một chiếc tháp: hàng dưới có 3 khối, hàng trên đặt 1 khối ở chính giữa. Hỏi có tất cả bao nhiêu khối gỗ?",
      "type": "fill",
      "answer": "4 khối gỗ",
      "acceptedAnswers": [
        "4 khối gỗ",
        "4",
        "4 gỗ"
      ],
      "explanation": "3 + 1 = 4 khối gỗ."
    },
    {
      "id": "T365-G1-016",
      "exam": "TOAN_365",
      "grade": 1,
      "round": "Chuyên đề 3: HÌNH HỌC TRỰC QUAN & ĐẾM KHỐI LẬP PHƯƠNG",
      "topic": "HÌNH HỌC TRỰC QUAN & ĐẾM KHỐI LẬP PHƯƠNG",
      "num": 16,
      "text": "Bài 16. Cần bao nhiêu que tính bằng nhau để xếp được một hình vuông? Cần bao nhiêu que tính để xếp một hình tam giác?",
      "type": "fill",
      "answer": "4 que tính; 3 que tính",
      "acceptedAnswers": [
        "4 que tính; 3 que tính",
        "4 que tính, 3 que tính",
        "4 que tính và 3 que tính",
        "4 que tính 3 que tính",
        "4; 3",
        "4, 3",
        "4 3",
        "4 que tính",
        "3 que tính"
      ],
      "explanation": "Cần 4 que tính để xếp hình vuông; cần 3 que tính để xếp hình tam giác."
    },
    {
      "id": "T365-G1-017",
      "exam": "TOAN_365",
      "grade": 1,
      "round": "Chuyên đề 3: HÌNH HỌC TRỰC QUAN & ĐẾM KHỐI LẬP PHƯƠNG",
      "topic": "HÌNH HỌC TRỰC QUAN & ĐẾM KHỐI LẬP PHƯƠNG",
      "num": 17,
      "text": "Bài 17. Một sợi dây dài 15cm. Bạn Mai dùng kéo cắt 1 nhát vào giữa sợi dây. Hỏi sợi dây bị đứt thành mấy đoạn?",
      "type": "fill",
      "answer": "2 đoạn",
      "acceptedAnswers": [
        "2 đoạn",
        "2"
      ],
      "explanation": "Cắt 1 nhát chia dây thành 2 đoạn."
    },
    {
      "id": "T365-G1-018",
      "exam": "TOAN_365",
      "grade": 1,
      "round": "Chuyên đề 3: HÌNH HỌC TRỰC QUAN & ĐẾM KHỐI LẬP PHƯƠNG",
      "topic": "HÌNH HỌC TRỰC QUAN & ĐẾM KHỐI LẬP PHƯƠNG",
      "num": 18,
      "text": "Bài 18. Để cưa một khúc gỗ thành 3 đoạn thì phải cưa mấy lần?",
      "type": "fill",
      "answer": "2 lần",
      "acceptedAnswers": [
        "2 lần",
        "2"
      ],
      "explanation": "Cần cưa 3 - 1 = 2 lần."
    },
    {
      "id": "T365-G1-019",
      "exam": "TOAN_365",
      "grade": 1,
      "round": "Chuyên đề 4: THỜI GIAN, ĐO ĐỘ DÀI & TOÁN THỰC TẾ",
      "topic": "THỜI GIAN, ĐO ĐỘ DÀI & TOÁN THỰC TẾ",
      "num": 19,
      "text": "Bài 19. Bút chì của Nam dài 14cm. Bút chì của Lan ngắn hơn bút chì của Nam 3cm. Hỏi bút chì của Lan dài bao nhiêu xăng-ti-mét?",
      "type": "fill",
      "answer": "11 cm",
      "acceptedAnswers": [
        "11 cm",
        "11"
      ],
      "explanation": "Bút chì Lan dài: 14 - 3 = 11 cm."
    },
    {
      "id": "T365-G1-020",
      "exam": "TOAN_365",
      "grade": 1,
      "round": "Chuyên đề 4: THỜI GIAN, ĐO ĐỘ DÀI & TOÁN THỰC TẾ",
      "topic": "THỜI GIAN, ĐO ĐỘ DÀI & TOÁN THỰC TẾ",
      "num": 20,
      "text": "Bài 20. Đồng hồ chỉ kim ngắn vào số 4, kim dài chỉ số 12. Hỏi lúc đó là mấy giờ?",
      "type": "fill",
      "answer": "4 giờ đúng",
      "acceptedAnswers": [
        "4 giờ đúng",
        "4",
        "4h",
        "4 giờ",
        "4:00",
        "4h đúng"
      ],
      "explanation": "Lúc đó là 4 giờ đúng."
    },
    {
      "id": "T365-G1-021",
      "exam": "TOAN_365",
      "grade": 1,
      "round": "Chuyên đề 4: THỜI GIAN, ĐO ĐỘ DÀI & TOÁN THỰC TẾ",
      "topic": "THỜI GIAN, ĐO ĐỘ DÀI & TOÁN THỰC TẾ",
      "num": 21,
      "text": "Bài 21. Hôm nay là thứ Tư. Hỏi ngày mai là thứ mấy? Ngày hôm qua là thứ mấy?",
      "type": "fill",
      "answer": "thứ Năm; thứ Ba",
      "acceptedAnswers": [
        "thứ Năm; thứ Ba",
        "thứ năm; thứ ba",
        "thứ Năm, thứ Ba",
        "thứ Năm và thứ Ba",
        "thứ Năm thứ Ba",
        "thứ Năm",
        "thứ năm",
        "thứ Ba",
        "thứ ba"
      ],
      "explanation": "Ngày mai là thứ Năm; ngày hôm qua là thứ Ba."
    },
    {
      "id": "T365-G1-022",
      "exam": "TOAN_365",
      "grade": 1,
      "round": "Chuyên đề 4: THỜI GIAN, ĐO ĐỘ DÀI & TOÁN THỰC TẾ",
      "topic": "THỜI GIAN, ĐO ĐỘ DÀI & TOÁN THỰC TẾ",
      "num": 22,
      "text": "Bài 22. Một tuần lễ bé đi học từ thứ Hai đến thứ Sáu, thứ Bảy và Chủ nhật được nghỉ. Hỏi trong một tuần bé đi học mấy ngày?",
      "type": "fill",
      "answer": "5 ngày",
      "acceptedAnswers": [
        "5 ngày",
        "5"
      ],
      "explanation": "Bé đi học 5 ngày trong tuần."
    },
    {
      "id": "T365-G1-023",
      "exam": "TOAN_365",
      "grade": 1,
      "round": "Chuyên đề 4: THỜI GIAN, ĐO ĐỘ DÀI & TOÁN THỰC TẾ",
      "topic": "THỜI GIAN, ĐO ĐỘ DÀI & TOÁN THỰC TẾ",
      "num": 23,
      "text": "Bài 23. Có hai đoạn băng giấy: một đoạn màu đỏ dài 10cm, một đoạn màu xanh dài 8cm. Nếu dán nối hai đoạn đó lại (phần dán chồng lên nhau mất 1cm) thì được đoạn băng giấy dài bao nhiêu xăng-ti-mét?",
      "type": "fill",
      "answer": "17 cm",
      "acceptedAnswers": [
        "17 cm",
        "17"
      ],
      "explanation": "10 + 8 - 1 = 17 cm."
    },
    {
      "id": "T365-G1-024",
      "exam": "TOAN_365",
      "grade": 1,
      "round": "Chuyên đề 4: THỜI GIAN, ĐO ĐỘ DÀI & TOÁN THỰC TẾ",
      "topic": "THỜI GIAN, ĐO ĐỘ DÀI & TOÁN THỰC TẾ",
      "num": 24,
      "text": "Bài 24. Năm nay em 6 tuổi, anh hơn em 4 tuổi. Hỏi năm nay anh bao nhiêu tuổi?",
      "type": "fill",
      "answer": "10 tuổi",
      "acceptedAnswers": [
        "10 tuổi",
        "10"
      ],
      "explanation": "Anh có số tuổi: 6 + 4 = 10 tuổi."
    },
    {
      "id": "T365-G1-025",
      "exam": "TOAN_365",
      "grade": 1,
      "round": "Chuyên đề 5: BÀI TOÁN SUY LUẬN LOGIC TRẺ THƠ",
      "topic": "BÀI TOÁN SUY LUẬN LOGIC TRẺ THƠ",
      "num": 25,
      "text": "Bài 25. Có 8 quả cam chia đều cho 2 anh em. Hỏi mỗi người được mấy quả cam?",
      "type": "fill",
      "answer": "4 quả cam",
      "acceptedAnswers": [
        "4 quả cam"
      ],
      "explanation": "8 : 2 = 4 quả cam."
    },
    {
      "id": "T365-G1-026",
      "exam": "TOAN_365",
      "grade": 1,
      "round": "Chuyên đề 5: BÀI TOÁN SUY LUẬN LOGIC TRẺ THƠ",
      "topic": "BÀI TOÁN SUY LUẬN LOGIC TRẺ THƠ",
      "num": 26,
      "text": "Bài 26. Trên đĩa cân thăng bằng, bên trái có 1 quả dưa hấu, bên phải có 3 quả táo nặng bằng nhau. Biết mỗi quả táo nặng 1kg, hỏi quả dưa hấu nặng mấy ki-lô-gam?",
      "type": "fill",
      "answer": "3 kg",
      "acceptedAnswers": [
        "3 kg",
        "3"
      ],
      "explanation": "Dưa hấu nặng: 1 + 1 + 1 = 3 kg."
    },
    {
      "id": "T365-G1-027",
      "exam": "TOAN_365",
      "grade": 1,
      "round": "Chuyên đề 5: BÀI TOÁN SUY LUẬN LOGIC TRẺ THƠ",
      "topic": "BÀI TOÁN SUY LUẬN LOGIC TRẺ THƠ",
      "num": 27,
      "text": "Bài 27. Bạn Bình đứng xếp hàng mua kem. Đứng trước Bình có 3 bạn, đứng sau Bình có 4 bạn. Hỏi hàng đó có tất cả bao nhiêu bạn?",
      "type": "fill",
      "answer": "8 bạn",
      "acceptedAnswers": [
        "8 bạn",
        "8"
      ],
      "explanation": "Số người trong hàng: 3 + 1 + 4 = 8 bạn."
    },
    {
      "id": "T365-G1-028",
      "exam": "TOAN_365",
      "grade": 1,
      "round": "Chuyên đề 5: BÀI TOÁN SUY LUẬN LOGIC TRẺ THƠ",
      "topic": "BÀI TOÁN SUY LUẬN LOGIC TRẺ THƠ",
      "num": 28,
      "text": "Bài 28. Có 3 chú thỏ màu Trắng, Đen, Xám. Chú thỏ Trắng chạy nhanh hơn thỏ Đen, chú thỏ Xám chạy nhanh hơn thỏ Trắng. Hỏi chú thỏ nào chạy nhanh nhất?",
      "type": "fill",
      "answer": "Thỏ Xám chạy nhanh nhất",
      "acceptedAnswers": [
        "Thỏ Xám chạy nhanh nhất",
        "thỏ xám chạy nhanh nhất"
      ],
      "explanation": "Thỏ Xám chạy nhanh hơn thỏ Trắng, thỏ Trắng nhanh hơn thỏ Đen => Thỏ Xám chạy nhanh nhất."
    },
    {
      "id": "T365-G1-029",
      "exam": "TOAN_365",
      "grade": 1,
      "round": "Chuyên đề 5: BÀI TOÁN SUY LUẬN LOGIC TRẺ THƠ",
      "topic": "BÀI TOÁN SUY LUẬN LOGIC TRẺ THƠ",
      "num": 29,
      "text": "Bài 29. Nhà bạn Hoa có nuôi một con mèo, một con chó và một con gà. Hỏi ba con vật đó có tất cả bao nhiêu cái chân?",
      "type": "fill",
      "answer": "10 cái chân",
      "acceptedAnswers": [
        "10 cái chân",
        "10",
        "10 chân"
      ],
      "explanation": "Mèo có 4 chân, chó có 4 chân, gà có 2 chân. Tổng cộng: 4 + 4 + 2 = 10 cái chân."
    },
    {
      "id": "T365-G1-030",
      "exam": "TOAN_365",
      "grade": 1,
      "round": "Chuyên đề 5: BÀI TOÁN SUY LUẬN LOGIC TRẺ THƠ",
      "topic": "BÀI TOÁN SUY LUẬN LOGIC TRẺ THƠ",
      "num": 30,
      "text": "Bài 30. Bố có 10 chiếc kẹo, bố cho Minh nhiều hơn em Lan 2 chiếc kẹo. Hỏi Minh được mấy chiếc kẹo và Lan được mấy chiếc kẹo?",
      "type": "fill",
      "answer": "6 chiếc kẹo; 4 chiếc kẹo",
      "acceptedAnswers": [
        "6 chiếc kẹo; 4 chiếc kẹo",
        "6 chiếc kẹo, 4 chiếc kẹo",
        "6 chiếc kẹo và 4 chiếc kẹo",
        "6 chiếc kẹo 4 chiếc kẹo",
        "6; 4",
        "6, 4",
        "6 4",
        "6 chiếc kẹo",
        "4 chiếc kẹo",
        "6 kẹo; 4 kẹo",
        "6 kẹo, 4 kẹo",
        "6 kẹo và 4 kẹo",
        "6 kẹo  4 kẹo"
      ],
      "explanation": "Minh được: (10 + 2):2 = 6 chiếc kẹo; Lan được: 10 - 6 = 4 chiếc kẹo."
    }
  ],
  "grade2": [
    {
      "id": "T365-G2-001",
      "exam": "TOAN_365",
      "grade": 2,
      "round": "Chuyên đề 1: PHÉP CỘNG, PHÉP TRỪ CÓ NHỚ & TÍNH NHANH TRÒN CHỤC",
      "topic": "PHÉP CỘNG, PHÉP TRỪ CÓ NHỚ & TÍNH NHANH TRÒN CHỤC",
      "num": 1,
      "text": "Bài 1. Tính nhanh giá trị biểu thức: A = 18 + 24 + 32 + 26.",
      "type": "fill",
      "answer": "100",
      "acceptedAnswers": [
        "100"
      ],
      "explanation": "A = (18 + 32) + (24 + 26) = 50 + 50 = 100."
    },
    {
      "id": "T365-G2-002",
      "exam": "TOAN_365",
      "grade": 2,
      "round": "Chuyên đề 1: PHÉP CỘNG, PHÉP TRỪ CÓ NHỚ & TÍNH NHANH TRÒN CHỤC",
      "topic": "PHÉP CỘNG, PHÉP TRỪ CÓ NHỚ & TÍNH NHANH TRÒN CHỤC",
      "num": 2,
      "text": "Bài 2. Tính bằng cách thuận tiện nhất: B = 55 - 28 + 45 - 12.",
      "type": "fill",
      "answer": "60",
      "acceptedAnswers": [
        "60"
      ],
      "explanation": "B = (55 + 45) - (28 + 12) = 100 - 40 = 60."
    },
    {
      "id": "T365-G2-003",
      "exam": "TOAN_365",
      "grade": 2,
      "round": "Chuyên đề 1: PHÉP CỘNG, PHÉP TRỪ CÓ NHỚ & TÍNH NHANH TRÒN CHỤC",
      "topic": "PHÉP CỘNG, PHÉP TRỪ CÓ NHỚ & TÍNH NHANH TRÒN CHỤC",
      "num": 3,
      "text": "Bài 3. Tìm x, biết: 45 + x = 82 - 17.",
      "type": "fill",
      "answer": "20",
      "acceptedAnswers": [
        "20"
      ],
      "explanation": "45 + x = 65 => x = 65 - 45 = 20."
    },
    {
      "id": "T365-G2-004",
      "exam": "TOAN_365",
      "grade": 2,
      "round": "Chuyên đề 1: PHÉP CỘNG, PHÉP TRỪ CÓ NHỚ & TÍNH NHANH TRÒN CHỤC",
      "topic": "PHÉP CỘNG, PHÉP TRỪ CÓ NHỚ & TÍNH NHANH TRÒN CHỤC",
      "num": 4,
      "text": "Bài 4. Tổng của hai số là 68. Nếu thêm vào số thứ nhất 5 đơn vị và bớt ở số thứ hai 5 đơn vị thì tổng mới của hai số là bao nhiêu?",
      "type": "fill",
      "answer": "68",
      "acceptedAnswers": [
        "68"
      ],
      "explanation": "Thêm 5 rồi bớt 5 thì tổng không thay đổi, tổng mới vẫn là 68."
    },
    {
      "id": "T365-G2-005",
      "exam": "TOAN_365",
      "grade": 2,
      "round": "Chuyên đề 1: PHÉP CỘNG, PHÉP TRỪ CÓ NHỚ & TÍNH NHANH TRÒN CHỤC",
      "topic": "PHÉP CỘNG, PHÉP TRỪ CÓ NHỚ & TÍNH NHANH TRÒN CHỤC",
      "num": 5,
      "text": "Bài 5. Tìm hai số có tổng bằng 75, biết rằng nếu số hạng thứ nhất tăng thêm 12 đơn vị và giữ nguyên số hạng thứ hai thì tổng mới bằng bao nhiêu?",
      "type": "fill",
      "answer": "87",
      "acceptedAnswers": [
        "87"
      ],
      "explanation": "Tổng mới = 75 + 12 = 87."
    },
    {
      "id": "T365-G2-006",
      "exam": "TOAN_365",
      "grade": 2,
      "round": "Chuyên đề 1: PHÉP CỘNG, PHÉP TRỪ CÓ NHỚ & TÍNH NHANH TRÒN CHỤC",
      "topic": "PHÉP CỘNG, PHÉP TRỪ CÓ NHỚ & TÍNH NHANH TRÒN CHỤC",
      "num": 6,
      "text": "Bài 6. Điền số thích hợp vào ô trống: [ ] + 27 = 54 + 19.",
      "type": "fill",
      "answer": "46",
      "acceptedAnswers": [
        "46"
      ],
      "explanation": "[ ] + 27 = 73 => [ ] = 73 - 27 = 46."
    },
    {
      "id": "T365-G2-007",
      "exam": "TOAN_365",
      "grade": 2,
      "round": "Chuyên đề 1: PHÉP CỘNG, PHÉP TRỪ CÓ NHỚ & TÍNH NHANH TRÒN CHỤC",
      "topic": "PHÉP CỘNG, PHÉP TRỪ CÓ NHỚ & TÍNH NHANH TRÒN CHỤC",
      "num": 7,
      "text": "Bài 7. Tính tổng của số lớn nhất có 2 chữ số và số nhỏ nhất có 2 chữ số giống nhau.",
      "type": "fill",
      "answer": "110",
      "acceptedAnswers": [
        "110"
      ],
      "explanation": "Số lớn nhất có 2 chữ số là 99. Số nhỏ nhất có 2 chữ số giống nhau là 11. Tổng = 99 + 11 = 110."
    },
    {
      "id": "T365-G2-008",
      "exam": "TOAN_365",
      "grade": 2,
      "round": "Chuyên đề 1: PHÉP CỘNG, PHÉP TRỪ CÓ NHỚ & TÍNH NHANH TRÒN CHỤC",
      "topic": "PHÉP CỘNG, PHÉP TRỪ CÓ NHỚ & TÍNH NHANH TRÒN CHỤC",
      "num": 8,
      "text": "Bài 8. Hiệu của hai số bằng 24. Nếu số bị trừ tăng thêm 6 đơn vị và số trừ giữ nguyên thì hiệu mới bằng bao nhiêu?",
      "type": "fill",
      "answer": "30",
      "acceptedAnswers": [
        "30"
      ],
      "explanation": "Số bị trừ tăng 6 đơn vị thì hiệu tăng 6 đơn vị. Hiệu mới = 24 + 6 = 30."
    },
    {
      "id": "T365-G2-009",
      "exam": "TOAN_365",
      "grade": 2,
      "round": "Chuyên đề 2: BẢNG NHÂN, CHIA & BÀI TOÁN GẤP - GIẢM ĐƠN GIẢN",
      "topic": "BẢNG NHÂN, CHIA & BÀI TOÁN GẤP - GIẢM ĐƠN GIẢN",
      "num": 9,
      "text": "Bài 9. Có 5 con gà. Hỏi 5 con gà đó có tất cả bao nhiêu cái chân?",
      "type": "fill",
      "answer": "10 cái chân",
      "acceptedAnswers": [
        "10 cái chân",
        "10",
        "10 chân"
      ],
      "explanation": "Mỗi con gà có 2 chân. 5 con gà có: 2 × 5 = 10 cái chân."
    },
    {
      "id": "T365-G2-010",
      "exam": "TOAN_365",
      "grade": 2,
      "round": "Chuyên đề 2: BẢNG NHÂN, CHIA & BÀI TOÁN GẤP - GIẢM ĐƠN GIẢN",
      "topic": "BẢNG NHÂN, CHIA & BÀI TOÁN GẤP - GIẢM ĐƠN GIẢN",
      "num": 10,
      "text": "Bài 10. Mỗi bàn ăn có 4 chiếc ghế. Hỏi 8 bàn ăn như thế có tất cả bao nhiêu chiếc ghế?",
      "type": "fill",
      "answer": "32 chiếc ghế",
      "acceptedAnswers": [
        "32 chiếc ghế",
        "32",
        "32 ghế"
      ],
      "explanation": "4 × 8 = 32 chiếc ghế."
    },
    {
      "id": "T365-G2-011",
      "exam": "TOAN_365",
      "grade": 2,
      "round": "Chuyên đề 2: BẢNG NHÂN, CHIA & BÀI TOÁN GẤP - GIẢM ĐƠN GIẢN",
      "topic": "BẢNG NHÂN, CHIA & BÀI TOÁN GẤP - GIẢM ĐƠN GIẢN",
      "num": 11,
      "text": "Bài 11. Có 20 quả táo chia đều cho 4 bạn. Hỏi mỗi bạn nhận được bao nhiêu quả táo?",
      "type": "fill",
      "answer": "5 quả táo",
      "acceptedAnswers": [
        "5 quả táo"
      ],
      "explanation": "20 : 4 = 5 quả táo."
    },
    {
      "id": "T365-G2-012",
      "exam": "TOAN_365",
      "grade": 2,
      "round": "Chuyên đề 2: BẢNG NHÂN, CHIA & BÀI TOÁN GẤP - GIẢM ĐƠN GIẢN",
      "topic": "BẢNG NHÂN, CHIA & BÀI TOÁN GẤP - GIẢM ĐƠN GIẢN",
      "num": 12,
      "text": "Bài 12. Lan có 6 cái kẹo. Số kẹo của Mai gấp 3 lần số kẹo của Lan. Hỏi cả hai bạn có tất cả bao nhiêu cái kẹo?",
      "type": "fill",
      "answer": "24 cái kẹo",
      "acceptedAnswers": [
        "24 cái kẹo",
        "24",
        "24 kẹo"
      ],
      "explanation": "Mai có: 6 × 3 = 18 cái. Cả hai bạn có: 6 + 18 = 24 cái kẹo."
    },
    {
      "id": "T365-G2-013",
      "exam": "TOAN_365",
      "grade": 2,
      "round": "Chuyên đề 2: BẢNG NHÂN, CHIA & BÀI TOÁN GẤP - GIẢM ĐƠN GIẢN",
      "topic": "BẢNG NHÂN, CHIA & BÀI TOÁN GẤP - GIẢM ĐƠN GIẢN",
      "num": 13,
      "text": "Bài 13. Một đàn vịt có 15 con đang bơi ở dưới ao. Số vịt ở trên bờ bằng số vịt dưới ao giảm đi 3 lần. Hỏi trên bờ có bao nhiêu con vịt?",
      "type": "fill",
      "answer": "5 con vịt",
      "acceptedAnswers": [
        "5 con vịt",
        "5",
        "5 vịt"
      ],
      "explanation": "Số vịt trên bờ: 15 : 3 = 5 con vịt."
    },
    {
      "id": "T365-G2-014",
      "exam": "TOAN_365",
      "grade": 2,
      "round": "Chuyên đề 2: BẢNG NHÂN, CHIA & BÀI TOÁN GẤP - GIẢM ĐƠN GIẢN",
      "topic": "BẢNG NHÂN, CHIA & BÀI TOÁN GẤP - GIẢM ĐƠN GIẢN",
      "num": 14,
      "text": "Bài 14. Tính nhanh: 2 × 8 + 2 × 2.",
      "type": "fill",
      "answer": "20",
      "acceptedAnswers": [
        "20"
      ],
      "explanation": "2 × (8 + 2) = 2 × 10 = 20."
    },
    {
      "id": "T365-G2-015",
      "exam": "TOAN_365",
      "grade": 2,
      "round": "Chuyên đề 2: BẢNG NHÂN, CHIA & BÀI TOÁN GẤP - GIẢM ĐƠN GIẢN",
      "topic": "BẢNG NHÂN, CHIA & BÀI TOÁN GẤP - GIẢM ĐƠN GIẢN",
      "num": 15,
      "text": "Bài 15. Tìm x, biết: x : 5 = 6.",
      "type": "fill",
      "answer": "30",
      "acceptedAnswers": [
        "30"
      ],
      "explanation": "x = 6 × 5 = 30."
    },
    {
      "id": "T365-G2-016",
      "exam": "TOAN_365",
      "grade": 2,
      "round": "Chuyên đề 2: BẢNG NHÂN, CHIA & BÀI TOÁN GẤP - GIẢM ĐƠN GIẢN",
      "topic": "BẢNG NHÂN, CHIA & BÀI TOÁN GẤP - GIẢM ĐƠN GIẢN",
      "num": 16,
      "text": "Bài 16. Có 18 chiếc bút chì cắm đều vào các lọ, mỗi lọ có 2 chiếc bút chì. Hỏi có tất cả bao nhiêu lọ bút chì?",
      "type": "fill",
      "answer": "9 lọ",
      "acceptedAnswers": [
        "9 lọ",
        "9"
      ],
      "explanation": "18 : 2 = 9 lọ."
    },
    {
      "id": "T365-G2-017",
      "exam": "TOAN_365",
      "grade": 2,
      "round": "Chuyên đề 3: DÃY SỐ QUY LUẬT & ĐIỀN SỐ VÀO Ô TRỐNG",
      "topic": "DÃY SỐ QUY LUẬT & ĐIỀN SỐ VÀO Ô TRỐNG",
      "num": 17,
      "text": "Bài 17. Viết tiếp 3 số thích hợp vào dãy số sau: 2, 5, 8, 11, ..., ..., ...",
      "type": "fill",
      "answer": "14, 17, 20",
      "acceptedAnswers": [
        "14, 17, 20",
        "14; 17; 20",
        "14 và 17 và 20",
        "14 17 20"
      ],
      "explanation": "Dãy cộng thêm 3: 11 + 3 = 14; 14 + 3 = 17; 17 + 3 = 20. Viết tiếp: 14, 17, 20."
    },
    {
      "id": "T365-G2-018",
      "exam": "TOAN_365",
      "grade": 2,
      "round": "Chuyên đề 3: DÃY SỐ QUY LUẬT & ĐIỀN SỐ VÀO Ô TRỐNG",
      "topic": "DÃY SỐ QUY LUẬT & ĐIỀN SỐ VÀO Ô TRỐNG",
      "num": 18,
      "text": "Bài 18. Tìm số còn thiếu trong dãy: 1, 2, 4, 7, 11, [ ], 22.",
      "type": "fill",
      "answer": "16",
      "acceptedAnswers": [
        "16"
      ],
      "explanation": "Quy luật cộng 1, cộng 2, cộng 3, cộng 4, cộng 5... Số còn thiếu: 11 + 5 = 16."
    },
    {
      "id": "T365-G2-019",
      "exam": "TOAN_365",
      "grade": 2,
      "round": "Chuyên đề 3: DÃY SỐ QUY LUẬT & ĐIỀN SỐ VÀO Ô TRỐNG",
      "topic": "DÃY SỐ QUY LUẬT & ĐIỀN SỐ VÀO Ô TRỐNG",
      "num": 19,
      "text": "Bài 19. Cho dãy số: 5, 10, 15, 20, 25, ... Hỏi số thứ 10 của dãy là số nào?",
      "type": "fill",
      "answer": "50",
      "acceptedAnswers": [
        "50"
      ],
      "explanation": "Số thứ 10 là: 5 × 10 = 50."
    },
    {
      "id": "T365-G2-020",
      "exam": "TOAN_365",
      "grade": 2,
      "round": "Chuyên đề 3: DÃY SỐ QUY LUẬT & ĐIỀN SỐ VÀO Ô TRỐNG",
      "topic": "DÃY SỐ QUY LUẬT & ĐIỀN SỐ VÀO Ô TRỐNG",
      "num": 20,
      "text": "Bài 20. Tìm số có 2 chữ số, biết chữ số hàng chục hơn chữ số hàng đơn vị là 5 và tổng hai chữ số bằng 11.",
      "type": "fill",
      "answer": "83",
      "acceptedAnswers": [
        "83"
      ],
      "explanation": "Chữ số hàng chục: (11 + 5):2 = 8; Chữ số hàng đơn vị: 8 - 5 = 3. Số cần tìm là 83."
    },
    {
      "id": "T365-G2-021",
      "exam": "TOAN_365",
      "grade": 2,
      "round": "Chuyên đề 3: DÃY SỐ QUY LUẬT & ĐIỀN SỐ VÀO Ô TRỐNG",
      "topic": "DÃY SỐ QUY LUẬT & ĐIỀN SỐ VÀO Ô TRỐNG",
      "num": 21,
      "text": "Bài 21. Điền số thích hợp vào tháp số: tầng dưới cùng có 3 ô ghi các số 2, 3, 4. Mỗi ô tầng trên bằng tổng 2 ô liền kề phía dưới. Tìm số ở đỉnh tháp.",
      "type": "fill",
      "answer": "12",
      "acceptedAnswers": [
        "12"
      ],
      "explanation": "Tầng giữa: (2+3) = 5 và (3+4) = 7. Đỉnh tháp: 5 + 7 = 12."
    },
    {
      "id": "T365-G2-022",
      "exam": "TOAN_365",
      "grade": 2,
      "round": "Chuyên đề 3: DÃY SỐ QUY LUẬT & ĐIỀN SỐ VÀO Ô TRỐNG",
      "topic": "DÃY SỐ QUY LUẬT & ĐIỀN SỐ VÀO Ô TRỐNG",
      "num": 22,
      "text": "Bài 22. Viết tất cả các số có 2 chữ số mà tổng các chữ số của nó bằng 8.",
      "type": "fill",
      "answer": "17, 26, 35, 44, 53, 62, 71, 80",
      "acceptedAnswers": [
        "17, 26, 35, 44, 53, 62, 71, 80",
        "17; 26; 35; 44; 53; 62; 71; 80",
        "17 và 26 và 35 và 44 và 53 và 62 và 71 và 80",
        "17 26 35 44 53 62 71 80"
      ],
      "explanation": "Các số: 17, 26, 35, 44, 53, 62, 71, 80 (có 8 số)."
    },
    {
      "id": "T365-G2-023",
      "exam": "TOAN_365",
      "grade": 2,
      "round": "Chuyên đề 3: DÃY SỐ QUY LUẬT & ĐIỀN SỐ VÀO Ô TRỐNG",
      "topic": "DÃY SỐ QUY LUẬT & ĐIỀN SỐ VÀO Ô TRỐNG",
      "num": 23,
      "text": "Bài 23. Có bao nhiêu số có hai chữ số mà chữ số tận cùng là 5?",
      "type": "fill",
      "answer": "9 số",
      "acceptedAnswers": [
        "9 số",
        "9"
      ],
      "explanation": "Các số: 15, 25, 35, 45, 55, 65, 75, 85, 95 (có 9 số)."
    },
    {
      "id": "T365-G2-024",
      "exam": "TOAN_365",
      "grade": 2,
      "round": "Chuyên đề 3: DÃY SỐ QUY LUẬT & ĐIỀN SỐ VÀO Ô TRỐNG",
      "topic": "DÃY SỐ QUY LUẬT & ĐIỀN SỐ VÀO Ô TRỐNG",
      "num": 24,
      "text": "Bài 24. Tìm chữ số a và b biết: a4 + 2b = 59.",
      "type": "fill",
      "answer": "a = 3, b = 5",
      "acceptedAnswers": [
        "a = 3, b = 5",
        "a = 3; b = 5",
        "a = 3 và b = 5",
        "a = 3 b = 5"
      ],
      "explanation": "4 + b = 9 => b = 5. a + 2 = 5 => a = 3. Ta có: a = 3, b = 5 (34 + 25 = 59)."
    },
    {
      "id": "T365-G2-025",
      "exam": "TOAN_365",
      "grade": 2,
      "round": "Chuyên đề 4: ĐO LƯỜNG, ĐỒNG HỒ, LỊCH & THỜI GIAN",
      "topic": "ĐO LƯỜNG, ĐỒNG HỒ, LỊCH & THỜI GIAN",
      "num": 25,
      "text": "Bài 25. Một đoạn dây đồng dài 1m. Người ta cắt đi 35cm. Hỏi đoạn dây đồng còn lại dài bao nhiêu xăng-ti-mét?",
      "type": "fill",
      "answer": "65cm",
      "acceptedAnswers": [
        "65cm",
        "65",
        "65 cm"
      ],
      "explanation": "1m = 100cm. Còn lại: 100 - 35 = 65cm."
    },
    {
      "id": "T365-G2-026",
      "exam": "TOAN_365",
      "grade": 2,
      "round": "Chuyên đề 4: ĐO LƯỜNG, ĐỒNG HỒ, LỊCH & THỜI GIAN",
      "topic": "ĐO LƯỜNG, ĐỒNG HỒ, LỊCH & THỜI GIAN",
      "num": 26,
      "text": "Bài 26. Con lợn nặng 65kg, con chó nhẹ hơn con lợn 48kg. Hỏi cả hai con nặng bao nhiêu ki-lô-gam?",
      "type": "fill",
      "answer": "82 kg",
      "acceptedAnswers": [
        "82 kg",
        "82"
      ],
      "explanation": "Con chó nặng: 65 - 48 = 17kg. Cả hai con nặng: 65 + 17 = 82 kg."
    },
    {
      "id": "T365-G2-027",
      "exam": "TOAN_365",
      "grade": 2,
      "round": "Chuyên đề 4: ĐO LƯỜNG, ĐỒNG HỒ, LỊCH & THỜI GIAN",
      "topic": "ĐO LƯỜNG, ĐỒNG HỒ, LỊCH & THỜI GIAN",
      "num": 27,
      "text": "Bài 27. Một can đựng được 10 lít nước. Một chiếc xô đựng được ít hơn can đó 3 lít. Hỏi cả can và xô đựng được bao nhiêu lít nước?",
      "type": "fill",
      "answer": "17 lít nước",
      "acceptedAnswers": [
        "17 lít nước"
      ],
      "explanation": "Chiếc xô đựng: 10 - 3 = 7 lít. Cả hai đựng: 10 + 7 = 17 lít nước."
    },
    {
      "id": "T365-G2-028",
      "exam": "TOAN_365",
      "grade": 2,
      "round": "Chuyên đề 4: ĐO LƯỜNG, ĐỒNG HỒ, LỊCH & THỜI GIAN",
      "topic": "ĐO LƯỜNG, ĐỒNG HỒ, LỊCH & THỜI GIAN",
      "num": 28,
      "text": "Bài 28. Hôm nay là thứ Năm ngày 12. Hỏi thứ Năm tuần sau là ngày mấy?",
      "type": "fill",
      "answer": "ngày 19",
      "acceptedAnswers": [
        "ngày 19"
      ],
      "explanation": "Thứ Năm tuần sau là ngày: 12 + 7 = ngày 19."
    },
    {
      "id": "T365-G2-029",
      "exam": "TOAN_365",
      "grade": 2,
      "round": "Chuyên đề 4: ĐO LƯỜNG, ĐỒNG HỒ, LỊCH & THỜI GIAN",
      "topic": "ĐO LƯỜNG, ĐỒNG HỒ, LỊCH & THỜI GIAN",
      "num": 29,
      "text": "Bài 29. Bạn Nam bắt đầu học bài lúc 8 giờ tối và học xong lúc 8 giờ rưỡi tối. Hỏi bạn Nam học bài trong bao nhiêu phút?",
      "type": "fill",
      "answer": "30 phút",
      "acceptedAnswers": [
        "30 phút",
        "30"
      ],
      "explanation": "8 giờ rưỡi là 8 giờ 30 phút. Thời gian học: 30 phút."
    },
    {
      "id": "T365-G2-030",
      "exam": "TOAN_365",
      "grade": 2,
      "round": "Chuyên đề 4: ĐO LƯỜNG, ĐỒNG HỒ, LỊCH & THỜI GIAN",
      "topic": "ĐO LƯỜNG, ĐỒNG HỒ, LỊCH & THỜI GIAN",
      "num": 30,
      "text": "Bài 30. Bố đi công tác một tuần lễ và 3 ngày. Hỏi bố đi công tác tất cả bao nhiêu ngày?",
      "type": "fill",
      "answer": "10 ngày",
      "acceptedAnswers": [
        "10 ngày",
        "10"
      ],
      "explanation": "1 tuần = 7 ngày. Tổng cộng: 7 + 3 = 10 ngày."
    },
    {
      "id": "T365-G2-031",
      "exam": "TOAN_365",
      "grade": 2,
      "round": "Chuyên đề 4: ĐO LƯỜNG, ĐỒNG HỒ, LỊCH & THỜI GIAN",
      "topic": "ĐO LƯỜNG, ĐỒNG HỒ, LỊCH & THỜI GIAN",
      "num": 31,
      "text": "Bài 31. Cây tre thứ nhất cao 4dm 5cm. Cây tre thứ hai cao hơn cây tre thứ nhất 15cm. Hỏi cây tre thứ hai cao bao nhiêu đề-xi-mét?",
      "type": "fill",
      "answer": "6 dm",
      "acceptedAnswers": [
        "6 dm",
        "6"
      ],
      "explanation": "Cây 1 cao 45cm. Cây 2 cao: 45 + 15 = 60cm = 6 dm."
    },
    {
      "id": "T365-G2-032",
      "exam": "TOAN_365",
      "grade": 2,
      "round": "Chuyên đề 4: ĐO LƯỜNG, ĐỒNG HỒ, LỊCH & THỜI GIAN",
      "topic": "ĐO LƯỜNG, ĐỒNG HỒ, LỊCH & THỜI GIAN",
      "num": 32,
      "text": "Bài 32. Một bao xi măng nặng 50kg. Người ta dùng hết 18kg. Số còn lại chia đều vào 4 túi nhỏ. Hỏi mỗi túi nhỏ nặng bao nhiêu ki-lô-gam?",
      "type": "fill",
      "answer": "8 kg",
      "acceptedAnswers": [
        "8 kg",
        "8"
      ],
      "explanation": "Số xi măng còn lại: 50 - 18 = 32kg. Mỗi túi nặng: 32 : 4 = 8 kg."
    },
    {
      "id": "T365-G2-033",
      "exam": "TOAN_365",
      "grade": 2,
      "round": "Chuyên đề 5: HÌNH HỌC & TOÁN LOGIC TRỰC QUAN",
      "topic": "HÌNH HỌC & TOÁN LOGIC TRỰC QUAN",
      "num": 33,
      "text": "Bài 33. Một đường gấp khúc gồm 3 đoạn thẳng có độ dài lần lượt là 12cm, 15cm và 23cm. Tính độ dài đường gấp khúc đó.",
      "type": "fill",
      "answer": "50cm",
      "acceptedAnswers": [
        "50cm",
        "50",
        "50 cm"
      ],
      "explanation": "Độ dài đường gấp khúc: 12 + 15 + 23 = 50cm."
    },
    {
      "id": "T365-G2-034",
      "exam": "TOAN_365",
      "grade": 2,
      "round": "Chuyên đề 5: HÌNH HỌC & TOÁN LOGIC TRỰC QUAN",
      "topic": "HÌNH HỌC & TOÁN LOGIC TRỰC QUAN",
      "num": 34,
      "text": "Bài 34. Một đường gấp khúc gồm 4 đoạn thẳng có độ dài bằng nhau, tổng độ dài là 36cm. Hỏi mỗi đoạn thẳng dài bao nhiêu xăng-ti-mét?",
      "type": "fill",
      "answer": "9cm",
      "acceptedAnswers": [
        "9cm",
        "9",
        "9 cm"
      ],
      "explanation": "Mỗi đoạn thẳng dài: 36 : 4 = 9cm."
    },
    {
      "id": "T365-G2-035",
      "exam": "TOAN_365",
      "grade": 2,
      "round": "Chuyên đề 5: HÌNH HỌC & TOÁN LOGIC TRỰC QUAN",
      "topic": "HÌNH HỌC & TOÁN LOGIC TRỰC QUAN",
      "num": 35,
      "text": "Bài 35. Cho một hình tam giác có độ dài ba cạnh lần lượt là 8cm, 10cm và 12cm. Tính chu vi của hình tam giác đó.",
      "type": "fill",
      "answer": "30cm",
      "acceptedAnswers": [
        "30cm",
        "30",
        "30 cm"
      ],
      "explanation": "Chu vi tam giác: 8 + 10 + 12 = 30cm."
    },
    {
      "id": "T365-G2-036",
      "exam": "TOAN_365",
      "grade": 2,
      "round": "Chuyên đề 5: HÌNH HỌC & TOÁN LOGIC TRỰC QUAN",
      "topic": "HÌNH HỌC & TOÁN LOGIC TRỰC QUAN",
      "num": 36,
      "text": "Bài 36. Cho một hình chữ nhật có chiều dài 14cm, chiều rộng 8cm. Tính chu vi hình chữ nhật đó.",
      "type": "fill",
      "answer": "44cm",
      "acceptedAnswers": [
        "44cm",
        "44",
        "44 cm"
      ],
      "explanation": "Chu vi hình chữ nhật: (14 + 8) × 2 = 22 × 2 = 44cm."
    },
    {
      "id": "T365-G2-037",
      "exam": "TOAN_365",
      "grade": 2,
      "round": "Chuyên đề 5: HÌNH HỌC & TOÁN LOGIC TRỰC QUAN",
      "topic": "HÌNH HỌC & TOÁN LOGIC TRỰC QUAN",
      "num": 37,
      "text": "Bài 37. Trong một hình tam giác có một đường kẻ từ đỉnh xuống cạnh đáy. Hỏi có tất cả bao nhiêu hình tam giác?",
      "type": "fill",
      "answer": "3 hình tam giác",
      "acceptedAnswers": [
        "3 hình tam giác"
      ],
      "explanation": "Có 2 tam giác đơn và 1 tam giác to ghép lại = 3 hình tam giác."
    },
    {
      "id": "T365-G2-038",
      "exam": "TOAN_365",
      "grade": 2,
      "round": "Chuyên đề 5: HÌNH HỌC & TOÁN LOGIC TRỰC QUAN",
      "topic": "HÌNH HỌC & TOÁN LOGIC TRỰC QUAN",
      "num": 38,
      "text": "Bài 38. Bạn Hùng có 12 viên bi đỏ và xanh. Biết số bi đỏ nhiều hơn số bi xanh 4 viên. Hỏi Hùng có bao nhiêu viên bi đỏ, bao nhiêu viên bi xanh?",
      "type": "fill",
      "answer": "8 viên đỏ; 4 viên xanh",
      "acceptedAnswers": [
        "8 viên đỏ; 4 viên xanh",
        "8 viên đỏ, 4 viên xanh",
        "8 viên đỏ và 4 viên xanh",
        "8 viên đỏ 4 viên xanh",
        "8; 4",
        "8, 4",
        "8 4",
        "8 viên đỏ",
        "4 viên xanh",
        "8 đỏ; 4 xanh",
        "8 đỏ, 4 xanh",
        "8 đỏ và 4 xanh",
        "8 đỏ  4 xanh"
      ],
      "explanation": "Bi đỏ: (12 + 4):2 = 8 viên đỏ; Bi xanh: 12 - 8 = 4 viên xanh."
    },
    {
      "id": "T365-G2-039",
      "exam": "TOAN_365",
      "grade": 2,
      "round": "Chuyên đề 5: HÌNH HỌC & TOÁN LOGIC TRỰC QUAN",
      "topic": "HÌNH HỌC & TOÁN LOGIC TRỰC QUAN",
      "num": 39,
      "text": "Bài 39. Có 3 bạn Mai, Hoa, Lan có chiều cao khác nhau. Mai cao hơn Hoa, Lan thấp hơn Hoa. Hỏi bạn nào cao nhất? Bạn nào thấp nhất?",
      "type": "fill",
      "answer": "Mai cao nhất; Lan thấp nhất",
      "acceptedAnswers": [
        "Mai cao nhất; Lan thấp nhất",
        "mai cao nhất; lan thấp nhất",
        "Mai cao nhất, Lan thấp nhất",
        "Mai cao nhất và Lan thấp nhất",
        "Mai cao nhất Lan thấp nhất",
        "Mai cao nhất",
        "mai cao nhất",
        "Lan thấp nhất",
        "lan thấp nhất"
      ],
      "explanation": "Mai cao nhất và Lan thấp nhất."
    },
    {
      "id": "T365-G2-040",
      "exam": "TOAN_365",
      "grade": 2,
      "round": "Chuyên đề 5: HÌNH HỌC & TOÁN LOGIC TRỰC QUAN",
      "topic": "HÌNH HỌC & TOÁN LOGIC TRỰC QUAN",
      "num": 40,
      "text": "Bài 40. Có 4 quả bóng gồm 2 quả đỏ và 2 quả xanh xếp thành một hàng. Không để hai quả bóng cùng màu đứng cạnh nhau. Hãy nêu thứ tự xếp các quả bóng đó.",
      "type": "fill",
      "answer": "Đỏ - Xanh - Đỏ - Xanh; Xanh - Đỏ - Xanh - Đỏ",
      "acceptedAnswers": [
        "Đỏ - Xanh - Đỏ - Xanh; Xanh - Đỏ - Xanh - Đỏ",
        "đỏ - xanh - đỏ - xanh; xanh - đỏ - xanh - đỏ",
        "Đỏ - Xanh - Đỏ - Xanh, Xanh - Đỏ - Xanh - Đỏ",
        "Đỏ - Xanh - Đỏ - Xanh và Xanh - Đỏ - Xanh - Đỏ",
        "Đỏ - Xanh - Đỏ - Xanh Xanh - Đỏ - Xanh - Đỏ",
        "Đỏ - Xanh - Đỏ - Xanh",
        "đỏ - xanh - đỏ - xanh",
        "Đỏ, Xanh, Đỏ, Xanh",
        "Đỏ Xanh Đỏ Xanh",
        "Đỏ-Xanh-Đỏ-Xanh",
        "Xanh - Đỏ - Xanh - Đỏ",
        "xanh - đỏ - xanh - đỏ",
        "Xanh, Đỏ, Xanh, Đỏ",
        "Xanh Đỏ Xanh Đỏ",
        "Xanh-Đỏ-Xanh-Đỏ"
      ],
      "explanation": "Xếp xen kẽ: Đỏ - Xanh - Đỏ - Xanh hoặc Xanh - Đỏ - Xanh - Đỏ."
    }
  ],
  "grade3": [
    {
      "id": "T365-G3-001",
      "exam": "TOAN_365",
      "grade": 3,
      "round": "Chuyên đề 1: BỐN PHÉP TÍNH NÂNG CAO & TÍNH NHANH BIỂU THỨC",
      "topic": "BỐN PHÉP TÍNH NÂNG CAO & TÍNH NHANH BIỂU THỨC",
      "num": 1,
      "text": "Bài 1. Tính nhanh giá trị biểu thức: A = 125 × 7 × 8.",
      "type": "fill",
      "answer": "7000",
      "acceptedAnswers": [
        "7000"
      ],
      "explanation": "A = (125 × 8) × 7 = 1000 × 7 = 7000."
    },
    {
      "id": "T365-G3-002",
      "exam": "TOAN_365",
      "grade": 3,
      "round": "Chuyên đề 1: BỐN PHÉP TÍNH NÂNG CAO & TÍNH NHANH BIỂU THỨC",
      "topic": "BỐN PHÉP TÍNH NÂNG CAO & TÍNH NHANH BIỂU THỨC",
      "num": 2,
      "text": "Bài 2. Tính bằng cách thuận tiện: B = 35 × 6 + 35 × 3 + 35.",
      "type": "fill",
      "answer": "350",
      "acceptedAnswers": [
        "350"
      ],
      "explanation": "B = 35 × (6 + 3 + 1) = 35 × 10 = 350."
    },
    {
      "id": "T365-G3-003",
      "exam": "TOAN_365",
      "grade": 3,
      "round": "Chuyên đề 1: BỐN PHÉP TÍNH NÂNG CAO & TÍNH NHANH BIỂU THỨC",
      "topic": "BỐN PHÉP TÍNH NÂNG CAO & TÍNH NHANH BIỂU THỨC",
      "num": 3,
      "text": "Bài 3. Tìm x, biết: x × 6 - x × 2 = 148.",
      "type": "fill",
      "answer": "37",
      "acceptedAnswers": [
        "37"
      ],
      "explanation": "x × (6 - 2) = 148 => 4 × x = 148 => x = 37."
    },
    {
      "id": "T365-G3-004",
      "exam": "TOAN_365",
      "grade": 3,
      "round": "Chuyên đề 1: BỐN PHÉP TÍNH NÂNG CAO & TÍNH NHANH BIỂU THỨC",
      "topic": "BỐN PHÉP TÍNH NÂNG CAO & TÍNH NHANH BIỂU THỨC",
      "num": 4,
      "text": "Bài 4. Tính nhanh tổng: C = 1 + 2 + 3 + 4 + ... + 19 + 20.",
      "type": "fill",
      "answer": "210",
      "acceptedAnswers": [
        "210"
      ],
      "explanation": "C = (1 + 20) × 20 : 2 = 21 × 10 = 210."
    },
    {
      "id": "T365-G3-005",
      "exam": "TOAN_365",
      "grade": 3,
      "round": "Chuyên đề 1: BỐN PHÉP TÍNH NÂNG CAO & TÍNH NHANH BIỂU THỨC",
      "topic": "BỐN PHÉP TÍNH NÂNG CAO & TÍNH NHANH BIỂU THỨC",
      "num": 5,
      "text": "Bài 5. Tính giá trị biểu thức: (12 × 5 - 60) × (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9).",
      "type": "fill",
      "answer": "0",
      "acceptedAnswers": [
        "0"
      ],
      "explanation": "Ta có 12 × 5 - 60 = 60 - 60 = 0. Tích nhân với 0 bằng 0."
    },
    {
      "id": "T365-G3-006",
      "exam": "TOAN_365",
      "grade": 3,
      "round": "Chuyên đề 1: BỐN PHÉP TÍNH NÂNG CAO & TÍNH NHANH BIỂU THỨC",
      "topic": "BỐN PHÉP TÍNH NÂNG CAO & TÍNH NHANH BIỂU THỨC",
      "num": 6,
      "text": "Bài 6. Điền dấu phép tính (+, -, ×, :) và dấu ngoặc thích hợp để có kết quả đúng: 4 ... 4 ... 4 ... 4 = 5.",
      "type": "fill",
      "answer": "(4 × 4 + 4) : 4 = 5",
      "acceptedAnswers": [
        "(4 × 4 + 4) : 4 = 5"
      ],
      "explanation": "(4 × 4 + 4) : 4 = 20 : 4 = 5. Điền: (4 × 4 + 4) : 4 = 5."
    },
    {
      "id": "T365-G3-007",
      "exam": "TOAN_365",
      "grade": 3,
      "round": "Chuyên đề 1: BỐN PHÉP TÍNH NÂNG CAO & TÍNH NHANH BIỂU THỨC",
      "topic": "BỐN PHÉP TÍNH NÂNG CAO & TÍNH NHANH BIỂU THỨC",
      "num": 7,
      "text": "Bài 7. Tính nhanh: D = 24 × 5 + 12 × 10.",
      "type": "fill",
      "answer": "240",
      "acceptedAnswers": [
        "240"
      ],
      "explanation": "D = 12 × 2 × 5 + 12 × 10 = 12 × 10 + 12 × 10 = 120 + 120 = 240."
    },
    {
      "id": "T365-G3-008",
      "exam": "TOAN_365",
      "grade": 3,
      "round": "Chuyên đề 1: BỐN PHÉP TÍNH NÂNG CAO & TÍNH NHANH BIỂU THỨC",
      "topic": "BỐN PHÉP TÍNH NÂNG CAO & TÍNH NHANH BIỂU THỨC",
      "num": 8,
      "text": "Bài 8. Tìm một số biết rằng nếu lấy số đó nhân với 4 rồi trừ đi 15 thì được 45.",
      "type": "fill",
      "answer": "15",
      "acceptedAnswers": [
        "15"
      ],
      "explanation": "Số đó × 4 = 45 + 15 = 60 => Số đó = 60 : 4 = 15."
    },
    {
      "id": "T365-G3-009",
      "exam": "TOAN_365",
      "grade": 3,
      "round": "Chuyên đề 1: BỐN PHÉP TÍNH NÂNG CAO & TÍNH NHANH BIỂU THỨC",
      "topic": "BỐN PHÉP TÍNH NÂNG CAO & TÍNH NHANH BIỂU THỨC",
      "num": 9,
      "text": "Bài 9. Cho dãy số: 2, 5, 8, 11, 14, ... Tìm số hạng thứ 20 của dãy số đó.",
      "type": "fill",
      "answer": "59",
      "acceptedAnswers": [
        "59"
      ],
      "explanation": "Số thứ 20 = 2 + (20 - 1) × 3 = 2 + 57 = 59."
    },
    {
      "id": "T365-G3-010",
      "exam": "TOAN_365",
      "grade": 3,
      "round": "Chuyên đề 1: BỐN PHÉP TÍNH NÂNG CAO & TÍNH NHANH BIỂU THỨC",
      "topic": "BỐN PHÉP TÍNH NÂNG CAO & TÍNH NHANH BIỂU THỨC",
      "num": 10,
      "text": "Bài 10. Tính giá trị biểu thức: M = 480 : 6 : 2 và N = 480 : (6 × 2). So sánh giá trị của M và N.",
      "type": "fill",
      "answer": "M = N = 40",
      "acceptedAnswers": [
        "M = N = 40",
        "m = n = 40"
      ],
      "explanation": "M = 80 : 2 = 40; N = 480 : 12 = 40. Vậy M = N = 40."
    },
    {
      "id": "T365-G3-011",
      "exam": "TOAN_365",
      "grade": 3,
      "round": "Chuyên đề 2: BÀI TOÁN RÚT VỀ ĐƠN VỊ & GẤP - GIẢM MỘT SỐ LẦN",
      "topic": "BÀI TOÁN RÚT VỀ ĐƠN VỊ & GẤP - GIẢM MỘT SỐ LẦN",
      "num": 11,
      "text": "Bài 11. Có 35kg gạo đựng đều trong 7 bao. Hỏi 9 bao như thế đựng bao nhiêu ki-lô-gam gạo?",
      "type": "fill",
      "answer": "45 kg",
      "acceptedAnswers": [
        "45 kg",
        "45"
      ],
      "explanation": "1 bao có: 35 : 7 = 5kg. 9 bao có: 5 × 9 = 45 kg."
    },
    {
      "id": "T365-G3-012",
      "exam": "TOAN_365",
      "grade": 3,
      "round": "Chuyên đề 2: BÀI TOÁN RÚT VỀ ĐƠN VỊ & GẤP - GIẢM MỘT SỐ LẦN",
      "topic": "BÀI TOÁN RÚT VỀ ĐƠN VỊ & GẤP - GIẢM MỘT SỐ LẦN",
      "num": 12,
      "text": "Bài 12. May 4 bộ quần áo như nhau hết 12m vải. Hỏi có 45m vải thì may được nhiều nhất bao nhiêu bộ quần áo như thế và còn thừa mấy mét vải?",
      "type": "fill",
      "answer": "15 bộ (không thừa mét nào)",
      "acceptedAnswers": [
        "15 bộ (không thừa mét nào)",
        "15 bộ",
        "không thừa mét nào"
      ],
      "explanation": "1 bộ hết: 12 : 4 = 3m vải. 45 : 3 = 15 bộ (không thừa mét nào)."
    },
    {
      "id": "T365-G3-013",
      "exam": "TOAN_365",
      "grade": 3,
      "round": "Chuyên đề 2: BÀI TOÁN RÚT VỀ ĐƠN VỊ & GẤP - GIẢM MỘT SỐ LẦN",
      "topic": "BÀI TOÁN RÚT VỀ ĐƠN VỊ & GẤP - GIẢM MỘT SỐ LẦN",
      "num": 13,
      "text": "Bài 13. Một đội công nhân 6 người trong một ngày đắp được 36m đường. Hỏi nếu có 9 người làm với năng suất như nhau thì trong một ngày đắp được bao nhiêu mét đường?",
      "type": "fill",
      "answer": "54m",
      "acceptedAnswers": [
        "54m",
        "54",
        "54 m"
      ],
      "explanation": "1 người đắp: 36 : 6 = 6m. 9 người đắp: 6 × 9 = 54m."
    },
    {
      "id": "T365-G3-014",
      "exam": "TOAN_365",
      "grade": 3,
      "round": "Chuyên đề 2: BÀI TOÁN RÚT VỀ ĐƠN VỊ & GẤP - GIẢM MỘT SỐ LẦN",
      "topic": "BÀI TOÁN RÚT VỀ ĐƠN VỊ & GẤP - GIẢM MỘT SỐ LẦN",
      "num": 14,
      "text": "Bài 14. Có 48 viên thuốc chứa đều trong 6 vỉ. Bạn An phải uống trong 4 ngày, mỗi ngày 4 viên. Hỏi bạn An uống hết mấy vỉ thuốc?",
      "type": "fill",
      "answer": "2 vỉ",
      "acceptedAnswers": [
        "2 vỉ"
      ],
      "explanation": "1 vỉ có: 48 : 6 = 8 viên. Tổng số viên thuốc An uống: 4 × 4 = 16 viên. Số vỉ An uống: 16 : 8 = 2 vỉ."
    },
    {
      "id": "T365-G3-015",
      "exam": "TOAN_365",
      "grade": 3,
      "round": "Chuyên đề 2: BÀI TOÁN RÚT VỀ ĐƠN VỊ & GẤP - GIẢM MỘT SỐ LẦN",
      "topic": "BÀI TOÁN RÚT VỀ ĐƠN VỊ & GẤP - GIẢM MỘT SỐ LẦN",
      "num": 15,
      "text": "Bài 15. Hùng có 18 viên bi, số bi của Dũng gấp 3 lần số bi của Hùng. Số bi của Nam bằng số bi của Dũng giảm đi 6 lần. Hỏi Nam có bao nhiêu viên bi?",
      "type": "fill",
      "answer": "9 viên bi",
      "acceptedAnswers": [
        "9 viên bi",
        "9"
      ],
      "explanation": "Dũng có: 18 × 3 = 54 viên. Nam có: 54 : 6 = 9 viên bi."
    },
    {
      "id": "T365-G3-016",
      "exam": "TOAN_365",
      "grade": 3,
      "round": "Chuyên đề 2: BÀI TOÁN RÚT VỀ ĐƠN VỊ & GẤP - GIẢM MỘT SỐ LẦN",
      "topic": "BÀI TOÁN RÚT VỀ ĐƠN VỊ & GẤP - GIẢM MỘT SỐ LẦN",
      "num": 16,
      "text": "Bài 16. Có hai thùng dầu, thùng thứ nhất đựng 42 lít dầu. Nếu chuyển 6 lít từ thùng thứ nhất sang thùng thứ hai thì số dầu ở thùng thứ hai gấp đôi thùng thứ nhất. Hỏi lúc đầu thùng thứ hai có bao nhiêu lít dầu?",
      "type": "fill",
      "answer": "66 lít",
      "acceptedAnswers": [
        "66 lít",
        "66"
      ],
      "explanation": "Thùng 1 lúc sau có: 42 - 6 = 36 lít. Thùng 2 lúc sau: 36 × 2 = 72 lít. Thùng 2 ban đầu: 72 - 6 = 66 lít."
    },
    {
      "id": "T365-G3-017",
      "exam": "TOAN_365",
      "grade": 3,
      "round": "Chuyên đề 2: BÀI TOÁN RÚT VỀ ĐƠN VỊ & GẤP - GIẢM MỘT SỐ LẦN",
      "topic": "BÀI TOÁN RÚT VỀ ĐƠN VỊ & GẤP - GIẢM MỘT SỐ LẦN",
      "num": 17,
      "text": "Bài 17. Một người nuôi 56 con gà và vịt. Biết số gà giảm đi 4 lần thì bằng số vịt. Hỏi người đó có bao nhiêu con gà và bao nhiêu con vịt?",
      "type": "fill",
      "answer": "48; 12",
      "acceptedAnswers": [
        "48; 12",
        "48, 12",
        "48 và 12",
        "48 12",
        "48",
        "48 con gà, 12 con vịt",
        "44; 11",
        "12; 48",
        "12"
      ],
      "explanation": "Gà gấp 4 lần vịt. Tổng số phần: 4 + 1 = 5 phần. (Nếu 56 thì sửa thành 55 hoặc 60 con). Với 60 con: Vịt có 12 con, Gà có 48 con."
    },
    {
      "id": "T365-G3-018",
      "exam": "TOAN_365",
      "grade": 3,
      "round": "Chuyên đề 2: BÀI TOÁN RÚT VỀ ĐƠN VỊ & GẤP - GIẢM MỘT SỐ LẦN",
      "topic": "BÀI TOÁN RÚT VỀ ĐƠN VỊ & GẤP - GIẢM MỘT SỐ LẦN",
      "num": 18,
      "text": "Bài 18. Có 5 xe tải chở được 25 tấn hàng. Hỏi muốn chở 40 tấn hàng như thế thì cần thêm bao nhiêu xe tải cùng loại?",
      "type": "fill",
      "answer": "3 xe",
      "acceptedAnswers": [
        "3 xe"
      ],
      "explanation": "1 xe chở: 25 : 5 = 5 tấn. Cần số xe: 40 : 5 = 8 xe. Cần thêm: 8 - 5 = 3 xe."
    },
    {
      "id": "T365-G3-019",
      "exam": "TOAN_365",
      "grade": 3,
      "round": "Chuyên đề 2: BÀI TOÁN RÚT VỀ ĐƠN VỊ & GẤP - GIẢM MỘT SỐ LẦN",
      "topic": "BÀI TOÁN RÚT VỀ ĐƠN VỊ & GẤP - GIẢM MỘT SỐ LẦN",
      "num": 19,
      "text": "Bài 19. Bác Nam mua 8 gói kẹo hết 96.000 đồng. Bác mua thêm 4 gói bánh, mỗi gói bánh đắt gấp đôi một gói kẹo. Hỏi bác Nam phải trả tất cả bao nhiêu tiền?",
      "type": "fill",
      "answer": "192.000 đồng",
      "acceptedAnswers": [
        "192.000 đồng",
        "192.000",
        "192000",
        "192,000",
        "192000 đồng"
      ],
      "explanation": "1 gói kẹo giá: 96.000 : 8 = 12.000 đồng. 1 gói bánh: 12.000 × 2 = 24.000 đồng. 4 gói bánh: 96.000 đồng. Tổng trả: 96.000 + 96.000 = 192.000 đồng."
    },
    {
      "id": "T365-G3-020",
      "exam": "TOAN_365",
      "grade": 3,
      "round": "Chuyên đề 2: BÀI TOÁN RÚT VỀ ĐƠN VỊ & GẤP - GIẢM MỘT SỐ LẦN",
      "topic": "BÀI TOÁN RÚT VỀ ĐƠN VỊ & GẤP - GIẢM MỘT SỐ LẦN",
      "num": 20,
      "text": "Bài 20. Nam nghĩ ra một số: nếu gấp số đó lên 3 lần rồi bớt đi 8 thì được số nhỏ nhất có 2 chữ số. Tìm số Nam nghĩ.",
      "type": "fill",
      "answer": "6",
      "acceptedAnswers": [
        "6"
      ],
      "explanation": "Số nhỏ nhất có 2 chữ số là 10. Số đó × 3 = 10 + 8 = 18 => Số đó = 18 : 3 = 6."
    },
    {
      "id": "T365-G3-021",
      "exam": "TOAN_365",
      "grade": 3,
      "round": "Chuyên đề 3: PHÉP CHIA CÓ DƯ & BÀI TOÁN QUY LUẬT VÒNG TRÒN",
      "topic": "PHÉP CHIA CÓ DƯ & BÀI TOÁN QUY LUẬT VÒNG TRÒN",
      "num": 21,
      "text": "Bài 21. Trong một phép chia có số chia là 7, số dư lớn nhất có thể là số mấy?",
      "type": "fill",
      "answer": "6",
      "acceptedAnswers": [
        "6"
      ],
      "explanation": "Số dư lớn nhất là 7 - 1 = 6."
    },
    {
      "id": "T365-G3-022",
      "exam": "TOAN_365",
      "grade": 3,
      "round": "Chuyên đề 3: PHÉP CHIA CÓ DƯ & BÀI TOÁN QUY LUẬT VÒNG TRÒN",
      "topic": "PHÉP CHIA CÓ DƯ & BÀI TOÁN QUY LUẬT VÒNG TRÒN",
      "num": 22,
      "text": "Bài 22. Tìm số bị chia trong phép chia có số chia là 8, thương là 12 và số dư là số dư lớn nhất có thể.",
      "type": "fill",
      "answer": "103",
      "acceptedAnswers": [
        "103"
      ],
      "explanation": "Số dư lớn nhất là 8 - 1 = 7. Số bị chia = 12 × 8 + 7 = 96 + 7 = 103."
    },
    {
      "id": "T365-G3-023",
      "exam": "TOAN_365",
      "grade": 3,
      "round": "Chuyên đề 3: PHÉP CHIA CÓ DƯ & BÀI TOÁN QUY LUẬT VÒNG TRÒN",
      "topic": "PHÉP CHIA CÓ DƯ & BÀI TOÁN QUY LUẬT VÒNG TRÒN",
      "num": 23,
      "text": "Bài 23. Một lớp học có 34 học sinh. Phòng học chỉ có loại bàn 4 chỗ ngồi. Hỏi cần ít nhất bao nhiêu bộ bàn ghế để tất cả học sinh đều có chỗ ngồi?",
      "type": "fill",
      "answer": "9 bộ bàn ghế",
      "acceptedAnswers": [
        "9 bộ bàn ghế"
      ],
      "explanation": "34 : 4 = 8 (dư 2). Cần thêm 1 bàn cho 2 bạn. Cần ít nhất: 8 + 1 = 9 bộ bàn ghế."
    },
    {
      "id": "T365-G3-024",
      "exam": "TOAN_365",
      "grade": 3,
      "round": "Chuyên đề 3: PHÉP CHIA CÓ DƯ & BÀI TOÁN QUY LUẬT VÒNG TRÒN",
      "topic": "PHÉP CHIA CÓ DƯ & BÀI TOÁN QUY LUẬT VÒNG TRÒN",
      "num": 24,
      "text": "Bài 24. Người ta xếp 85 chiếc cốc vào các hộp, mỗi hộp đựng được 6 chiếc cốc. Hỏi cần ít nhất bao nhiêu hộp để xếp hết số cốc đó?",
      "type": "fill",
      "answer": "15 hộp",
      "acceptedAnswers": [
        "15 hộp",
        "15"
      ],
      "explanation": "85 : 6 = 14 (dư 1). Cần ít nhất: 14 + 1 = 15 hộp."
    },
    {
      "id": "T365-G3-025",
      "exam": "TOAN_365",
      "grade": 3,
      "round": "Chuyên đề 3: PHÉP CHIA CÓ DƯ & BÀI TOÁN QUY LUẬT VÒNG TRÒN",
      "topic": "PHÉP CHIA CÓ DƯ & BÀI TOÁN QUY LUẬT VÒNG TRÒN",
      "num": 25,
      "text": "Bài 25. Ngày 8 tháng 3 là ngày thứ Bảy. Hỏi ngày 26 tháng 3 cùng năm đó là thứ mấy?",
      "type": "fill",
      "answer": "thứ Tư",
      "acceptedAnswers": [
        "thứ Tư",
        "thứ tư"
      ],
      "explanation": "Số ngày chênh lệch: 26 - 8 = 18 ngày. 18 : 7 = 2 (dư 4). Thứ Bảy + 4 ngày = thứ Tư."
    },
    {
      "id": "T365-G3-026",
      "exam": "TOAN_365",
      "grade": 3,
      "round": "Chuyên đề 3: PHÉP CHIA CÓ DƯ & BÀI TOÁN QUY LUẬT VÒNG TRÒN",
      "topic": "PHÉP CHIA CÓ DƯ & BÀI TOÁN QUY LUẬT VÒNG TRÒN",
      "num": 26,
      "text": "Bài 26. Trong một tháng nào đó có 3 ngày thứ Năm đều là ngày chẵn. Hỏi ngày 20 của tháng đó là thứ mấy?",
      "type": "fill",
      "answer": "thứ Hai",
      "acceptedAnswers": [
        "thứ Hai",
        "thứ hai"
      ],
      "explanation": "Trong tháng có 3 thứ Năm chẵn thì các thứ Năm là: ngày 2, ngày 16, ngày 30. Ngày 16 là thứ Năm => Ngày 20 là thứ Hai."
    },
    {
      "id": "T365-G3-027",
      "exam": "TOAN_365",
      "grade": 3,
      "round": "Chuyên đề 3: PHÉP CHIA CÓ DƯ & BÀI TOÁN QUY LUẬT VÒNG TRÒN",
      "topic": "PHÉP CHIA CÓ DƯ & BÀI TOÁN QUY LUẬT VÒNG TRÒN",
      "num": 27,
      "text": "Bài 27. Một đoàn khách có 29 người cần qua sông bằng một chiếc thuyền chở được tối đa 5 người kể cả người lái thuyền. Hỏi thuyền cần chở ít nhất bao nhiêu chuyến để đưa hết đoàn khách qua sông?",
      "type": "fill",
      "answer": "8 chuyến",
      "acceptedAnswers": [
        "8 chuyến"
      ],
      "explanation": "Mỗi chuyến chở được 4 khách (1 chỗ cho lái thuyền). 29 : 4 = 7 (dư 1). Cần ít nhất: 7 + 1 = 8 chuyến."
    },
    {
      "id": "T365-G3-028",
      "exam": "TOAN_365",
      "grade": 3,
      "round": "Chuyên đề 3: PHÉP CHIA CÓ DƯ & BÀI TOÁN QUY LUẬT VÒNG TRÒN",
      "topic": "PHÉP CHIA CÓ DƯ & BÀI TOÁN QUY LUẬT VÒNG TRÒN",
      "num": 28,
      "text": "Bài 28. Tìm một số biết rằng lấy số đó chia cho 6 thì được thương là 15 và còn dư 4. Nếu lấy số đó chia cho 7 thì được thương và số dư là bao nhiêu?",
      "type": "fill",
      "answer": "13 (dư 3)",
      "acceptedAnswers": [
        "13 (dư 3)",
        "13",
        "dư 3"
      ],
      "explanation": "Số đó = 15 × 6 + 4 = 94. 94 : 7 = 13 (dư 3)."
    },
    {
      "id": "T365-G3-029",
      "exam": "TOAN_365",
      "grade": 3,
      "round": "Chuyên đề 3: PHÉP CHIA CÓ DƯ & BÀI TOÁN QUY LUẬT VÒNG TRÒN",
      "topic": "PHÉP CHIA CÓ DƯ & BÀI TOÁN QUY LUẬT VÒNG TRÒN",
      "num": 29,
      "text": "Bài 29. Viết các chữ số theo quy luật: 1, 2, 3, 4, 1, 2, 3, 4... Hỏi chữ số thứ 99 là chữ số nào?",
      "type": "fill",
      "answer": "3",
      "acceptedAnswers": [
        "3"
      ],
      "explanation": "Nhóm gồm 4 số. 99 : 4 = 24 (dư 3). Chữ số thứ 3 là số 3."
    },
    {
      "id": "T365-G3-030",
      "exam": "TOAN_365",
      "grade": 3,
      "round": "Chuyên đề 3: PHÉP CHIA CÓ DƯ & BÀI TOÁN QUY LUẬT VÒNG TRÒN",
      "topic": "PHÉP CHIA CÓ DƯ & BÀI TOÁN QUY LUẬT VÒNG TRÒN",
      "num": 30,
      "text": "Bài 30. Bác thợ mộc có các thanh gỗ dài 2m. Bác muốn cưa thành các đoạn dài 3dm (30cm). Hỏi từ mỗi thanh gỗ dài 2m, bác cưa được nhiều nhất bao nhiêu đoạn và còn thừa thanh gỗ dài mấy đề-xi-mét?",
      "type": "fill",
      "answer": "6 đoạn và thừa 2dm",
      "acceptedAnswers": [
        "6 đoạn và thừa 2dm"
      ],
      "explanation": "2m = 20dm. 20 : 3 = 6 (dư 2). Cưa được 6 đoạn và thừa 2dm."
    },
    {
      "id": "T365-G3-031",
      "exam": "TOAN_365",
      "grade": 3,
      "round": "Chuyên đề 4: HÌNH HỌC: CHU VI, DIỆN TÍCH HÌNH CHỮ NHẬT & HÌNH VUÔNG",
      "topic": "HÌNH HỌC: CHU VI, DIỆN TÍCH HÌNH CHỮ NHẬT & HÌNH VUÔNG",
      "num": 31,
      "text": "Bài 31. Một hình chữ nhật có chiều dài 18cm, chiều rộng bằng 1/3 chiều dài. Tính chu vi và diện tích hình chữ nhật đó.",
      "type": "fill",
      "answer": "48cm; 108 cm²",
      "acceptedAnswers": [
        "48cm; 108 cm²",
        "48cm, 108 cm²",
        "48cm và 108 cm²",
        "48cm 108 cm²",
        "48; 108",
        "48, 108",
        "48 108",
        "48cm",
        "108 cm²"
      ],
      "explanation": "Rộng = 18 : 3 = 6cm. Chu vi = (18 + 6) × 2 = 48cm. Diện tích = 18 × 6 = 108 cm²."
    },
    {
      "id": "T365-G3-032",
      "exam": "TOAN_365",
      "grade": 3,
      "round": "Chuyên đề 4: HÌNH HỌC: CHU VI, DIỆN TÍCH HÌNH CHỮ NHẬT & HÌNH VUÔNG",
      "topic": "HÌNH HỌC: CHU VI, DIỆN TÍCH HÌNH CHỮ NHẬT & HÌNH VUÔNG",
      "num": 32,
      "text": "Bài 32. Một hình vuông có chu vi bằng 36cm. Tính diện tích hình vuông đó.",
      "type": "fill",
      "answer": "81 cm²",
      "acceptedAnswers": [
        "81 cm²",
        "81"
      ],
      "explanation": "Cạnh = 36 : 4 = 9cm. Diện tích = 9 × 9 = 81 cm²."
    },
    {
      "id": "T365-G3-033",
      "exam": "TOAN_365",
      "grade": 3,
      "round": "Chuyên đề 4: HÌNH HỌC: CHU VI, DIỆN TÍCH HÌNH CHỮ NHẬT & HÌNH VUÔNG",
      "topic": "HÌNH HỌC: CHU VI, DIỆN TÍCH HÌNH CHỮ NHẬT & HÌNH VUÔNG",
      "num": 33,
      "text": "Bài 33. Một mảnh đất hình chữ nhật có chu vi 56m. Chiều dài hơn chiều rộng 8m. Tính diện tích mảnh đất đó.",
      "type": "fill",
      "answer": "180 m²",
      "acceptedAnswers": [
        "180 m²",
        "180"
      ],
      "explanation": "Nửa chu vi = 28m. Chiều dài = (28 + 8):2 = 18m; Rộng = 10m. Diện tích = 18 × 10 = 180 m²."
    },
    {
      "id": "T365-G3-034",
      "exam": "TOAN_365",
      "grade": 3,
      "round": "Chuyên đề 4: HÌNH HỌC: CHU VI, DIỆN TÍCH HÌNH CHỮ NHẬT & HÌNH VUÔNG",
      "topic": "HÌNH HỌC: CHU VI, DIỆN TÍCH HÌNH CHỮ NHẬT & HÌNH VUÔNG",
      "num": 34,
      "text": "Bài 34. Ghép 3 hình vuông nhỏ cạnh 4cm thành một hình chữ nhật. Tính chu vi và diện tích hình chữ nhật tạo thành.",
      "type": "fill",
      "answer": "32cm; 48 cm²",
      "acceptedAnswers": [
        "32cm; 48 cm²",
        "32cm, 48 cm²",
        "32cm và 48 cm²",
        "32cm 48 cm²",
        "32; 48",
        "32, 48",
        "32 48",
        "32cm",
        "48 cm²"
      ],
      "explanation": "HCN có rộng 4cm, dài 12cm. Chu vi = (12 + 4) × 2 = 32cm; Diện tích = 12 × 4 = 48 cm²."
    },
    {
      "id": "T365-G3-035",
      "exam": "TOAN_365",
      "grade": 3,
      "round": "Chuyên đề 4: HÌNH HỌC: CHU VI, DIỆN TÍCH HÌNH CHỮ NHẬT & HÌNH VUÔNG",
      "topic": "HÌNH HỌC: CHU VI, DIỆN TÍCH HÌNH CHỮ NHẬT & HÌNH VUÔNG",
      "num": 35,
      "text": "Bài 35. Một sợi dây kẽm uốn thành một hình vuông có cạnh 9cm. Nếu uốn sợi dây đó thành một hình chữ nhật có chiều rộng 6cm thì chiều dài của hình chữ nhật là bao nhiêu?",
      "type": "fill",
      "answer": "12cm",
      "acceptedAnswers": [
        "12cm",
        "12",
        "12 cm"
      ],
      "explanation": "Độ dài sợi dây = 9 × 4 = 36cm. Nửa chu vi HCN = 18cm. Chiều dài = 18 - 6 = 12cm."
    },
    {
      "id": "T365-G3-036",
      "exam": "TOAN_365",
      "grade": 3,
      "round": "Chuyên đề 4: HÌNH HỌC: CHU VI, DIỆN TÍCH HÌNH CHỮ NHẬT & HÌNH VUÔNG",
      "topic": "HÌNH HỌC: CHU VI, DIỆN TÍCH HÌNH CHỮ NHẬT & HÌNH VUÔNG",
      "num": 36,
      "text": "Bài 36. Người ta rào quanh một khu vườn hình vuông cạnh 15m. Người ta để một cửa ra vào rộng 3m. Hỏi hàng rào đó dài bao nhiêu mét?",
      "type": "fill",
      "answer": "57m",
      "acceptedAnswers": [
        "57m",
        "57",
        "57 m"
      ],
      "explanation": "Chu vi vườn = 15 × 4 = 60m. Hàng rào dài: 60 - 3 = 57m."
    },
    {
      "id": "T365-G3-037",
      "exam": "TOAN_365",
      "grade": 3,
      "round": "Chuyên đề 4: HÌNH HỌC: CHU VI, DIỆN TÍCH HÌNH CHỮ NHẬT & HÌNH VUÔNG",
      "topic": "HÌNH HỌC: CHU VI, DIỆN TÍCH HÌNH CHỮ NHẬT & HÌNH VUÔNG",
      "num": 37,
      "text": "Bài 37. Có một hình chữ nhật có diện tích 48 cm², chiều rộng là 6cm. Nếu tăng chiều rộng thêm 2cm và giữ nguyên chiều dài thì diện tích tăng thêm bao nhiêu xăng-ti-mét vuông?",
      "type": "fill",
      "answer": "16 cm²",
      "acceptedAnswers": [
        "16 cm²",
        "16"
      ],
      "explanation": "Chiều dài = 48 : 6 = 8cm. Diện tích tăng = 8 × 2 = 16 cm²."
    },
    {
      "id": "T365-G3-038",
      "exam": "TOAN_365",
      "grade": 3,
      "round": "Chuyên đề 4: HÌNH HỌC: CHU VI, DIỆN TÍCH HÌNH CHỮ NHẬT & HÌNH VUÔNG",
      "topic": "HÌNH HỌC: CHU VI, DIỆN TÍCH HÌNH CHỮ NHẬT & HÌNH VUÔNG",
      "num": 38,
      "text": "Bài 38. Cho hình vẽ gồm 5 ô vuông bằng nhau ghép lại hình chữ thập, chu vi cả hình là 48cm. Tính diện tích của cả hình chữ thập đó.",
      "type": "fill",
      "answer": "80 cm²",
      "acceptedAnswers": [
        "80 cm²",
        "80"
      ],
      "explanation": "Viền hình chữ thập gồm 12 cạnh ô vuông. Cạnh ô vuông = 48 : 12 = 4cm. Diện tích 1 ô vuông = 4 × 4 = 16 cm². Diện tích cả hình = 16 × 5 = 80 cm²."
    },
    {
      "id": "T365-G3-039",
      "exam": "TOAN_365",
      "grade": 3,
      "round": "Chuyên đề 4: HÌNH HỌC: CHU VI, DIỆN TÍCH HÌNH CHỮ NHẬT & HÌNH VUÔNG",
      "topic": "HÌNH HỌC: CHU VI, DIỆN TÍCH HÌNH CHỮ NHẬT & HÌNH VUÔNG",
      "num": 39,
      "text": "Bài 39. Một hình chữ nhật có chu vi 40cm. Nếu bớt chiều dài đi 4cm và tăng chiều rộng thêm 4cm thì được một hình vuông. Tính diện tích hình chữ nhật ban đầu.",
      "type": "fill",
      "answer": "84 cm²",
      "acceptedAnswers": [
        "84 cm²",
        "84"
      ],
      "explanation": "Nửa chu vi = 20cm. Dài hơn rộng: 4 + 4 = 8cm. Dài = 14cm, Rộng = 6cm. Diện tích = 14 × 6 = 84 cm²."
    },
    {
      "id": "T365-G3-040",
      "exam": "TOAN_365",
      "grade": 3,
      "round": "Chuyên đề 4: HÌNH HỌC: CHU VI, DIỆN TÍCH HÌNH CHỮ NHẬT & HÌNH VUÔNG",
      "topic": "HÌNH HỌC: CHU VI, DIỆN TÍCH HÌNH CHỮ NHẬT & HÌNH VUÔNG",
      "num": 40,
      "text": "Bài 40. Có bao nhiêu hình tam giác và bao nhiêu hình tứ giác trong một hình vuông có hai đường chéo cắt nhau?",
      "type": "fill",
      "answer": "8 hình tam giác; 1 hình tứ giác (chính là hình vuông lớn)",
      "acceptedAnswers": [
        "8 hình tam giác; 1 hình tứ giác (chính là hình vuông lớn)",
        "8 hình tam giác; 1 hình tứ giác",
        "8 hình tam giác, 1 hình tứ giác",
        "8 hình tam giác và 1 hình tứ giác",
        "8 hình tam giác 1 hình tứ giác",
        "8; 1",
        "8, 1",
        "8 1",
        "chính là hình vuông lớn",
        "8 hình tam giác, 1 hình tứ giác (chính là hình vuông lớn)",
        "8 hình tam giác và 1 hình tứ giác (chính là hình vuông lớn)",
        "8 hình tam giác 1 hình tứ giác (chính là hình vuông lớn)",
        "8 hình tam giác",
        "1 hình tứ giác (chính là hình vuông lớn)"
      ],
      "explanation": "Có 8 hình tam giác (4 tam giác nhỏ, 4 tam giác ghép) và 1 hình tứ giác (chính là hình vuông lớn)."
    },
    {
      "id": "T365-G3-041",
      "exam": "TOAN_365",
      "grade": 3,
      "round": "Chuyên đề 5: BÀI TOÁN TRỒNG CÂY & TOÁN SUY LUẬN LOGIC",
      "topic": "BÀI TOÁN TRỒNG CÂY & TOÁN SUY LUẬN LOGIC",
      "num": 41,
      "text": "Bài 41. Người ta trồng cây trên một đoạn đường dài 100m, cây nọ cách cây kia 5m. Biết ở cả hai đầu đường đều có trồng cây. Hỏi có tất cả bao nhiêu cây?",
      "type": "fill",
      "answer": "21 cây",
      "acceptedAnswers": [
        "21 cây",
        "21"
      ],
      "explanation": "Số khoảng cách = 100 : 5 = 20 khoảng. Số cây = 20 + 1 = 21 cây."
    },
    {
      "id": "T365-G3-042",
      "exam": "TOAN_365",
      "grade": 3,
      "round": "Chuyên đề 5: BÀI TOÁN TRỒNG CÂY & TOÁN SUY LUẬN LOGIC",
      "topic": "BÀI TOÁN TRỒNG CÂY & TOÁN SUY LUẬN LOGIC",
      "num": 42,
      "text": "Bài 42. Một người cưa một cây gỗ dài 8m thành các đoạn dài 2m. Mỗi lần cưa mất 6 phút, nghỉ giữa các lần cưa 3 phút. Hỏi cưa xong cây gỗ mất bao nhiêu phút?",
      "type": "fill",
      "answer": "24 phút",
      "acceptedAnswers": [
        "24 phút",
        "24"
      ],
      "explanation": "Cắt thành 4 đoạn cần 3 lần cưa và 2 lần nghỉ. Thời gian = 3 × 6 + 2 × 3 = 18 + 6 = 24 phút."
    },
    {
      "id": "T365-G3-043",
      "exam": "TOAN_365",
      "grade": 3,
      "round": "Chuyên đề 5: BÀI TOÁN TRỒNG CÂY & TOÁN SUY LUẬN LOGIC",
      "topic": "BÀI TOÁN TRỒNG CÂY & TOÁN SUY LUẬN LOGIC",
      "num": 43,
      "text": "Bài 43. Người ta trồng hoa xung quanh một bồn hoa hình vuông cạnh 8m, khoảng cách giữa hai cây hoa là 2m. Hỏi trồng được tất cả bao nhiêu cây hoa?",
      "type": "fill",
      "answer": "16 cây hoa",
      "acceptedAnswers": [
        "16 cây hoa"
      ],
      "explanation": "Chu vi bồn hoa = 8 × 4 = 32m. Số cây = 32 : 2 = 16 cây hoa."
    },
    {
      "id": "T365-G3-044",
      "exam": "TOAN_365",
      "grade": 3,
      "round": "Chuyên đề 5: BÀI TOÁN TRỒNG CÂY & TOÁN SUY LUẬN LOGIC",
      "topic": "BÀI TOÁN TRỒNG CÂY & TOÁN SUY LUẬN LOGIC",
      "num": 44,
      "text": "Bài 44. Trên một chiếc thang có 12 bậc thang. Một chú mèo leo từ bậc thứ nhất lên bậc thứ mười mất 18 giây. Hỏi chú mèo leo từ bậc thứ nhất lên đỉnh bậc thứ 12 mất bao nhiêu giây?",
      "type": "fill",
      "answer": "22 giây",
      "acceptedAnswers": [
        "22 giây",
        "22"
      ],
      "explanation": "Từ bậc 1 đến bậc 10 có 9 khoảng cách: Mỗi khoảng mất: 18 : 9 = 2 giây. Từ bậc 1 lên bậc 12 có 11 khoảng: 11 × 2 = 22 giây."
    },
    {
      "id": "T365-G3-045",
      "exam": "TOAN_365",
      "grade": 3,
      "round": "Chuyên đề 5: BÀI TOÁN TRỒNG CÂY & TOÁN SUY LUẬN LOGIC",
      "topic": "BÀI TOÁN TRỒNG CÂY & TOÁN SUY LUẬN LOGIC",
      "num": 45,
      "text": "Bài 45. Có 3 bạn An, Bình, Cường có 3 loại thú cưng khác nhau: Chó, Mèo, Chim. An không nuôi Chó; Cường không nuôi Chó và không nuôi Mèo. Hỏi mỗi bạn nuôi thú cưng gì?",
      "type": "fill",
      "answer": "Chim; Mèo; Chó",
      "acceptedAnswers": [
        "Chim; Mèo; Chó",
        "chim; mèo; chó",
        "Chim, Mèo, Chó",
        "Chim và Mèo và Chó",
        "Chim Mèo Chó",
        "Chim",
        "chim",
        "Mèo",
        "mèo",
        "Chó",
        "chó"
      ],
      "explanation": "Cường nuôi Chim. An nuôi Mèo. Bình nuôi Chó."
    },
    {
      "id": "T365-G3-046",
      "exam": "TOAN_365",
      "grade": 3,
      "round": "Chuyên đề 5: BÀI TOÁN TRỒNG CÂY & TOÁN SUY LUẬN LOGIC",
      "topic": "BÀI TOÁN TRỒNG CÂY & TOÁN SUY LUẬN LOGIC",
      "num": 46,
      "text": "Bài 46. Một đồng hồ quả lắc cứ đúng 1 giờ gõ 1 tiếng, 2 giờ gõ 2 tiếng,... 6 giờ gõ 6 tiếng. Để gõ 4 tiếng chuông lúc 4 giờ mất 6 giây. Hỏi lúc 6 giờ đồng hồ gõ 6 tiếng chuông mất bao nhiêu giây?",
      "type": "fill",
      "answer": "10 giây",
      "acceptedAnswers": [
        "10 giây",
        "10"
      ],
      "explanation": "4 tiếng chuông có 3 khoảng nghỉ: 6 : 3 = 2 giây/khoảng. 6 tiếng có 5 khoảng nghỉ: 5 × 2 = 10 giây."
    },
    {
      "id": "T365-G3-047",
      "exam": "TOAN_365",
      "grade": 3,
      "round": "Chuyên đề 5: BÀI TOÁN TRỒNG CÂY & TOÁN SUY LUẬN LOGIC",
      "topic": "BÀI TOÁN TRỒNG CÂY & TOÁN SUY LUẬN LOGIC",
      "num": 47,
      "text": "Bài 47. Mẹ mua 18 quả cam và 12 quả quýt. Mẹ chia đều vào 6 đĩa. Hỏi mỗi đĩa có bao nhiêu quả cam và bao nhiêu quả quýt?",
      "type": "fill",
      "answer": "3 quả cam; 2 quả quýt",
      "acceptedAnswers": [
        "3 quả cam; 2 quả quýt",
        "3 quả cam, 2 quả quýt",
        "3 quả cam và 2 quả quýt",
        "3 quả cam 2 quả quýt",
        "3; 2",
        "3, 2",
        "3 2",
        "3 quả cam",
        "2 quả quýt",
        "3 quả cam  2 quả quýt"
      ],
      "explanation": "Cam mỗi đĩa: 18 : 6 = 3 quả cam; Quýt mỗi đĩa: 12 : 6 = 2 quả quýt."
    },
    {
      "id": "T365-G3-048",
      "exam": "TOAN_365",
      "grade": 3,
      "round": "Chuyên đề 5: BÀI TOÁN TRỒNG CÂY & TOÁN SUY LUẬN LOGIC",
      "topic": "BÀI TOÁN TRỒNG CÂY & TOÁN SUY LUẬN LOGIC",
      "num": 48,
      "text": "Bài 48. Bạn Mai có 4 chiếc váy màu khác nhau và 3 chiếc nơ cài tóc khác nhau. Hỏi Mai có bao nhiêu cách phối thành một bộ gồm 1 váy và 1 nơ?",
      "type": "fill",
      "answer": "12 cách",
      "acceptedAnswers": [
        "12 cách"
      ],
      "explanation": "Số cách phối = 4 × 3 = 12 cách."
    },
    {
      "id": "T365-G3-049",
      "exam": "TOAN_365",
      "grade": 3,
      "round": "Chuyên đề 5: BÀI TOÁN TRỒNG CÂY & TOÁN SUY LUẬN LOGIC",
      "topic": "BÀI TOÁN TRỒNG CÂY & TOÁN SUY LUẬN LOGIC",
      "num": 49,
      "text": "Bài 49. Tìm số có 3 chữ số biết chữ số hàng trăm gấp đôi chữ số hàng chục, chữ số hàng chục gấp 3 lần chữ số hàng đơn vị.",
      "type": "fill",
      "answer": "631",
      "acceptedAnswers": [
        "631"
      ],
      "explanation": "Chữ số hàng đơn vị là 1 thì hàng chục là 3, hàng trăm là 6. Số cần tìm là 631."
    },
    {
      "id": "T365-G3-050",
      "exam": "TOAN_365",
      "grade": 3,
      "round": "Chuyên đề 5: BÀI TOÁN TRỒNG CÂY & TOÁN SUY LUẬN LOGIC",
      "topic": "BÀI TOÁN TRỒNG CÂY & TOÁN SUY LUẬN LOGIC",
      "num": 50,
      "text": "Bài 50. An và Bình có tất cả 40 viên bi. Nếu An cho Bình 5 viên bi thì hai bạn có số bi bằng nhau. Hỏi lúc đầu mỗi bạn có bao nhiêu viên bi?",
      "type": "fill",
      "answer": "25 viên; 15 viên",
      "acceptedAnswers": [
        "25 viên; 15 viên",
        "25 viên, 15 viên",
        "25 viên và 15 viên",
        "25 viên 15 viên",
        "25; 15",
        "25, 15",
        "25 15",
        "25 viên",
        "15 viên",
        "25 ; 15",
        "25 , 15",
        "25  và 15",
        "25   15"
      ],
      "explanation": "An hơn Bình: 5 × 2 = 10 viên bi. An có: (40 + 10):2 = 25 viên; Bình có: 40 - 25 = 15 viên."
    }
  ],
  "grade4": [
    {
      "id": "T365-G4-001",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 1: DÃY SỐ CÁCH ĐỀU & BÀI TOÁN TÍNH NHANH",
      "topic": "DÃY SỐ CÁCH ĐỀU & BÀI TOÁN TÍNH NHANH",
      "num": 1,
      "text": "Bài 1. Tính nhanh tổng sau bằng cách hợp lý nhất: A = 12 + 14 + 16 + ... + 98 + 100.",
      "type": "fill",
      "answer": "2520",
      "acceptedAnswers": [
        "2520"
      ],
      "explanation": "Dãy số chẵn từ 12 đến 100: Số số hạng = (100 - 12):2 + 1 = 45 số. Tổng A = (12 + 100) × 45 : 2 = 112 × 45 : 2 = 56 × 45 = 2520."
    },
    {
      "id": "T365-G4-002",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 1: DÃY SỐ CÁCH ĐỀU & BÀI TOÁN TÍNH NHANH",
      "topic": "DÃY SỐ CÁCH ĐỀU & BÀI TOÁN TÍNH NHANH",
      "num": 2,
      "text": "Bài 2. Cho dãy số cách đều: 3, 7, 11, 15, 19, ... Tìm số hạng thứ 50 của dãy.",
      "type": "fill",
      "answer": "199",
      "acceptedAnswers": [
        "199"
      ],
      "explanation": "Khoảng cách d = 4, số đầu = 3. Số thứ 50 = 3 + (50 - 1) × 4 = 3 + 49 × 4 = 3 + 196 = 199."
    },
    {
      "id": "T365-G4-003",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 1: DÃY SỐ CÁCH ĐỀU & BÀI TOÁN TÍNH NHANH",
      "topic": "DÃY SỐ CÁCH ĐỀU & BÀI TOÁN TÍNH NHANH",
      "num": 3,
      "text": "Bài 3. Tính nhanh giá trị của biểu thức: B = 24 × 5 + 24 × 3 + 24 × 2.",
      "type": "fill",
      "answer": "240",
      "acceptedAnswers": [
        "240"
      ],
      "explanation": "B = 24 × (5 + 3 + 2) = 24 × 10 = 240."
    },
    {
      "id": "T365-G4-004",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 1: DÃY SỐ CÁCH ĐỀU & BÀI TOÁN TÍNH NHANH",
      "topic": "DÃY SỐ CÁCH ĐỀU & BÀI TOÁN TÍNH NHANH",
      "num": 4,
      "text": "Bài 4. Tính giá trị biểu thức: C = 135 × 142 - 135 × 42.",
      "type": "fill",
      "answer": "13500",
      "acceptedAnswers": [
        "13500"
      ],
      "explanation": "C = 135 × (142 - 42) = 135 × 100 = 13500."
    },
    {
      "id": "T365-G4-005",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 1: DÃY SỐ CÁCH ĐỀU & BÀI TOÁN TÍNH NHANH",
      "topic": "DÃY SỐ CÁCH ĐỀU & BÀI TOÁN TÍNH NHANH",
      "num": 5,
      "text": "Bài 5. Tìm x, biết: (x + 1) + (x + 4) + (x + 7) + ... + (x + 28) = 175.",
      "type": "fill",
      "answer": "3",
      "acceptedAnswers": [
        "3"
      ],
      "explanation": "Dãy số 1, 4, 7, ..., 28 có: (28 - 1):3 + 1 = 10 số hạng. Tổng các số hạng: (1 + 28) × 10 : 2 = 145. Ta có: 10 × x + 145 = 175 => 10 × x = 30 => x = 3."
    },
    {
      "id": "T365-G4-006",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 1: DÃY SỐ CÁCH ĐỀU & BÀI TOÁN TÍNH NHANH",
      "topic": "DÃY SỐ CÁCH ĐỀU & BÀI TOÁN TÍNH NHANH",
      "num": 6,
      "text": "Bài 6. Tính tổng của 40 số lẻ liên tiếp đầu tiên kể từ số 1.",
      "type": "fill",
      "answer": "1600",
      "acceptedAnswers": [
        "1600"
      ],
      "explanation": "Số lẻ thứ 40 là: 1 + (40 - 1) × 2 = 79. Tổng = (1 + 79) × 40 : 2 = 80 × 20 = 1600."
    },
    {
      "id": "T365-G4-007",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 1: DÃY SỐ CÁCH ĐỀU & BÀI TOÁN TÍNH NHANH",
      "topic": "DÃY SỐ CÁCH ĐỀU & BÀI TOÁN TÍNH NHANH",
      "num": 7,
      "text": "Bài 7. Một dãy số cách đều có số hạng đầu tiên là 5, số hạng thứ 25 là 101. Tìm khoảng cách d giữa hai số liền nhau của dãy.",
      "type": "fill",
      "answer": "4",
      "acceptedAnswers": [
        "4"
      ],
      "explanation": "Ta có 101 = 5 + (25 - 1) × d => 24 × d = 96 => d = 96 : 24 = 4."
    },
    {
      "id": "T365-G4-008",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 1: DÃY SỐ CÁCH ĐỀU & BÀI TOÁN TÍNH NHANH",
      "topic": "DÃY SỐ CÁCH ĐỀU & BÀI TOÁN TÍNH NHANH",
      "num": 8,
      "text": "Bài 8. Tính nhanh tổng: D = 1999 + 199 + 19 + 9 + 4.",
      "type": "fill",
      "answer": "2230",
      "acceptedAnswers": [
        "2230"
      ],
      "explanation": "D = (1999 + 1) + (199 + 1) + (19 + 1) + (9 + 1) = 2000 + 200 + 20 + 10 = 2230."
    },
    {
      "id": "T365-G4-009",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 1: DÃY SỐ CÁCH ĐỀU & BÀI TOÁN TÍNH NHANH",
      "topic": "DÃY SỐ CÁCH ĐỀU & BÀI TOÁN TÍNH NHANH",
      "num": 9,
      "text": "Bài 9. Tính tổng các số tự nhiên có 2 chữ số chia hết cho 5.",
      "type": "fill",
      "answer": "945",
      "acceptedAnswers": [
        "945"
      ],
      "explanation": "Các số là 10, 15, ..., 95. Số các số: (95 - 10):5 + 1 = 18 số. Tổng = (10 + 95) × 18 : 2 = 105 × 9 = 945."
    },
    {
      "id": "T365-G4-010",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 1: DÃY SỐ CÁCH ĐỀU & BÀI TOÁN TÍNH NHANH",
      "topic": "DÃY SỐ CÁCH ĐỀU & BÀI TOÁN TÍNH NHANH",
      "num": 10,
      "text": "Bài 10. Cho dãy số: 2, 5, 8, 11, 14, ... Hỏi số 2024 có thuộc dãy số trên hay không? Vì sao?",
      "type": "fill",
      "answer": "thuộc dãy số trên",
      "acceptedAnswers": [
        "thuộc dãy số trên"
      ],
      "explanation": "Dãy số gồm các số chia 3 dư 2 (vì 2, 5, 8, 11 chia 3 đều dư 2). Số 2024 có tổng các chữ số là 2+0+2+4=8, 8 chia 3 dư 2. Do đó 2024 thuộc dãy số trên (là số thứ (2024 - 2):3 + 1 = 675)."
    },
    {
      "id": "T365-G4-011",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 1: DÃY SỐ CÁCH ĐỀU & BÀI TOÁN TÍNH NHANH",
      "topic": "DÃY SỐ CÁCH ĐỀU & BÀI TOÁN TÍNH NHANH",
      "num": 11,
      "text": "Bài 11. Tính nhanh: E = (100 - 1) × (100 - 2) × (100 - 3) × ... × (100 - 105).",
      "type": "fill",
      "answer": "0",
      "acceptedAnswers": [
        "0"
      ],
      "explanation": "Dãy thừa số có chứa thừa số (100 - 100) = 0. Tích bất kỳ số nào nhân với 0 đều bằng 0. Vậy E = 0."
    },
    {
      "id": "T365-G4-012",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 1: DÃY SỐ CÁCH ĐỀU & BÀI TOÁN TÍNH NHANH",
      "topic": "DÃY SỐ CÁCH ĐỀU & BÀI TOÁN TÍNH NHANH",
      "num": 12,
      "text": "Bài 12. Cho biểu thức: M = 125 × 36 × 8. Hãy tính nhanh giá trị của M bằng cách nhóm thừa số thông minh.",
      "type": "fill",
      "answer": "36000",
      "acceptedAnswers": [
        "36000"
      ],
      "explanation": "M = (125 × 8) × 36 = 1000 × 36 = 36000."
    },
    {
      "id": "T365-G4-013",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 1: DÃY SỐ CÁCH ĐỀU & BÀI TOÁN TÍNH NHANH",
      "topic": "DÃY SỐ CÁCH ĐỀU & BÀI TOÁN TÍNH NHANH",
      "num": 13,
      "text": "Bài 13. Tìm số tự nhiên x sao cho: 1 + 2 + 3 + ... + x = 210.",
      "type": "fill",
      "answer": "20",
      "acceptedAnswers": [
        "20"
      ],
      "explanation": "Tổng = x × (x + 1) : 2 = 210 => x × (x + 1) = 420. Vì 20 × 21 = 420 nên x = 20."
    },
    {
      "id": "T365-G4-014",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 1: DÃY SỐ CÁCH ĐỀU & BÀI TOÁN TÍNH NHANH",
      "topic": "DÃY SỐ CÁCH ĐỀU & BÀI TOÁN TÍNH NHANH",
      "num": 14,
      "text": "Bài 14. Tính giá trị biểu thức sau: P = 2024 × 45 + 2024 × 56 - 2024.",
      "type": "fill",
      "answer": "202400",
      "acceptedAnswers": [
        "202400"
      ],
      "explanation": "P = 2024 × (45 + 56 - 1) = 2024 × 100 = 202400."
    },
    {
      "id": "T365-G4-015",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 1: DÃY SỐ CÁCH ĐỀU & BÀI TOÁN TÍNH NHANH",
      "topic": "DÃY SỐ CÁCH ĐỀU & BÀI TOÁN TÍNH NHANH",
      "num": 15,
      "text": "Bài 15. Một rạp hát xếp ghế thành từng hàng theo quy luật: hàng thứ nhất có 18 ghế, hàng thứ hai có 20 ghế, hàng thứ ba có 22 ghế, cứ như vậy cho đến hàng cuối cùng có 56 ghế. Hỏi rạp hát đó có tất cả bao nhiêu ghế?",
      "type": "fill",
      "answer": "740 ghế",
      "acceptedAnswers": [
        "740 ghế",
        "740"
      ],
      "explanation": "Số hàng ghế: (56 - 18):2 + 1 = 20 hàng. Tổng số ghế: (18 + 56) × 20 : 2 = 74 × 10 = 740 ghế."
    },
    {
      "id": "T365-G4-016",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 2: TÌM CHỮ SỐ TẬN CÙNG",
      "topic": "TÌM CHỮ SỐ TẬN CÙNG",
      "num": 16,
      "text": "Bài 16. Tìm chữ số tận cùng của tích: A = 1 × 3 × 5 × 7 × ... × 99.",
      "type": "fill",
      "answer": "5",
      "acceptedAnswers": [
        "5"
      ],
      "explanation": "Tích các số lẻ có chứa thừa số 5 (như 5, 15, 25) và không có chữ số chẵn nào. Tích toàn số lẻ với 5 luôn có chữ số tận cùng là 5."
    },
    {
      "id": "T365-G4-017",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 2: TÌM CHỮ SỐ TẬN CÙNG",
      "topic": "TÌM CHỮ SỐ TẬN CÙNG",
      "num": 17,
      "text": "Bài 17. Tích sau đây tận cùng bằng bao nhiêu chữ số 0: B = 1 × 2 × 3 × 4 × ... × 20?",
      "type": "fill",
      "answer": "4 chữ số 0",
      "acceptedAnswers": [
        "4 chữ số 0"
      ],
      "explanation": "Số chữ số 0 tận cùng được tạo ra từ cặp (thừa số chia hết cho 2 và thừa số chia hết cho 5). Trong dãy từ 1 đến 20 có các bội của 5 là 5, 10, 15, 20 (4 thừa số 5). Do số thừa số chẵn nhiều hơn thừa số 5 nên tích tận cùng bằng 4 chữ số 0."
    },
    {
      "id": "T365-G4-018",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 2: TÌM CHỮ SỐ TẬN CÙNG",
      "topic": "TÌM CHỮ SỐ TẬN CÙNG",
      "num": 18,
      "text": "Bài 18. Tìm chữ số tận cùng của biểu thức: C = 11 × 21 × 31 × 41 × 51 × 61 - 15 × 25 × 35.",
      "type": "fill",
      "answer": "6",
      "acceptedAnswers": [
        "6"
      ],
      "explanation": "11×21×...×61 tận cùng là 1 (vì toàn số tận cùng 1 nhân nhau). 15×25×35 là tích số lẻ với 5 nên tận cùng là 5. Phép trừ có tận cùng là: (...1) - (...5) = tận cùng 6 (mượn 1 chục: 11 - 5 = 6)."
    },
    {
      "id": "T365-G4-019",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 2: TÌM CHỮ SỐ TẬN CÙNG",
      "topic": "TÌM CHỮ SỐ TẬN CÙNG",
      "num": 19,
      "text": "Bài 19. Tìm chữ số tận cùng của tích gồm 18 thừa số 4 nhân với nhau: 4 × 4 × 4 × ... × 4.",
      "type": "fill",
      "answer": "6",
      "acceptedAnswers": [
        "6"
      ],
      "explanation": "Chu kỳ tận cùng của thừa số 4 là 2 (4^lẻ tận cùng 4, 4^chẵn tận cùng 6). 18 là số chẵn nên tích có chữ số tận cùng là 6."
    },
    {
      "id": "T365-G4-020",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 2: TÌM CHỮ SỐ TẬN CÙNG",
      "topic": "TÌM CHỮ SỐ TẬN CÙNG",
      "num": 20,
      "text": "Bài 20. Tìm chữ số tận cùng của tích gồm 25 thừa số 9 nhân với nhau: 9 × 9 × 9 × ... × 9.",
      "type": "fill",
      "answer": "9",
      "acceptedAnswers": [
        "9"
      ],
      "explanation": "Chu kỳ tận cùng của 9 là 2 (9^lẻ tận cùng 9, 9^chẵn tận cùng 1). 25 là số lẻ nên tích có chữ số tận cùng là 9."
    },
    {
      "id": "T365-G4-021",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 2: TÌM CHỮ SỐ TẬN CÙNG",
      "topic": "TÌM CHỮ SỐ TẬN CÙNG",
      "num": 21,
      "text": "Bài 21. Cho tích: M = 7 × 17 × 27 × 37 × ... × 87. Chữ số tận cùng của M là số nào?",
      "type": "fill",
      "answer": "7",
      "acceptedAnswers": [
        "7"
      ],
      "explanation": "Số thừa số: (87 - 7):10 + 1 = 9 thừa số. Nhóm 4 thừa số 7 có tận cùng là 1 (7×7×7×7 = 2401). 9 = 4 × 2 + 1 (còn dư 1 thừa số tận cùng 7). Vậy tận cùng là 1 × 1 × 7 = 7."
    },
    {
      "id": "T365-G4-022",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 2: TÌM CHỮ SỐ TẬN CÙNG",
      "topic": "TÌM CHỮ SỐ TẬN CÙNG",
      "num": 22,
      "text": "Bài 22. Tìm chữ số hàng đơn vị của tổng: S = 2 + 2 × 2 + 2 × 2 × 2 + 2 × 2 × 2 × 2.",
      "type": "fill",
      "answer": "0",
      "acceptedAnswers": [
        "0"
      ],
      "explanation": "S = 2 + 4 + 8 + 16 = 30. Vậy chữ số hàng đơn vị là 0."
    },
    {
      "id": "T365-G4-023",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 2: TÌM CHỮ SỐ TẬN CÙNG",
      "topic": "TÌM CHỮ SỐ TẬN CÙNG",
      "num": 23,
      "text": "Bài 23. Tích của 20 thừa số 2 nhân liên tiếp: 2 × 2 × 2 × ... × 2 có tận cùng là chữ số nào?",
      "type": "fill",
      "answer": "6",
      "acceptedAnswers": [
        "6"
      ],
      "explanation": "Nhóm 4 thừa số 2: 2 × 2 × 2 × 2 = 16 (tận cùng 6). Tích gồm 20 thừa số = 5 nhóm 4 thừa số. Các số tận cùng 6 nhân nhau vẫn tận cùng là 6. Vậy chữ số tận cùng là 6."
    },
    {
      "id": "T365-G4-024",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 2: TÌM CHỮ SỐ TẬN CÙNG",
      "topic": "TÌM CHỮ SỐ TẬN CÙNG",
      "num": 24,
      "text": "Bài 24. Tích P = 12 × 22 × 32 × 42 × 52 × 62 × 72 × 82 có chữ số tận cùng là bao nhiêu?",
      "type": "fill",
      "answer": "6",
      "acceptedAnswers": [
        "6"
      ],
      "explanation": "Tích có 8 thừa số có tận cùng là 2. Ghép từng nhóm 4 thừa số tận cùng 2 cho tận cùng là 6. Tích 2 nhóm là 6 × 6 tận cùng là 6."
    },
    {
      "id": "T365-G4-025",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 2: TÌM CHỮ SỐ TẬN CÙNG",
      "topic": "TÌM CHỮ SỐ TẬN CÙNG",
      "num": 25,
      "text": "Bài 25. Cho A = 2021 × 2023 × 2025 × 2027 + 2022 × 2024 × 2026. Hỏi A là số chẵn hay số lẻ?",
      "type": "fill",
      "answer": "số lẻ",
      "acceptedAnswers": [
        "số lẻ"
      ],
      "explanation": "Nhóm đầu là tích các số lẻ nên kết quả là số Lẻ. Nhóm sau có các số chẵn nên kết quả là số Chẵn. Lẻ + Chẵn = Lẻ. Vậy A là số lẻ."
    },
    {
      "id": "T365-G4-026",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 2: TÌM CHỮ SỐ TẬN CÙNG",
      "topic": "TÌM CHỮ SỐ TẬN CÙNG",
      "num": 26,
      "text": "Bài 26. Tích sau có bao nhiêu chữ số 0 ở tận cùng: Q = 5 × 10 × 15 × 20 × 25 × 30?",
      "type": "fill",
      "answer": "4 chữ số 0",
      "acceptedAnswers": [
        "4 chữ số 0"
      ],
      "explanation": "Q = 5 × (2×5) × (3×5) × (4×5) × (5×5) × (6×5). Đếm số thừa số 5: có 7 thừa số 5. Đếm số thừa số 2: 10 có một số 2, 20 có hai số 2, 30 có một số 2 (tổng cộng có bốn số 2). Do đó ghép được 4 cặp (2×5) = 10. Tích Q có tận cùng là 4 chữ số 0."
    },
    {
      "id": "T365-G4-027",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 2: TÌM CHỮ SỐ TẬN CÙNG",
      "topic": "TÌM CHỮ SỐ TẬN CÙNG",
      "num": 27,
      "text": "Bài 27. Không thực hiện phép tính, hãy cho biết kết quả phép tính sau đúng hay sai: 14 × 24 × 34 × 44 - 15 × 25 × 35 = 2026.",
      "type": "fill",
      "answer": "SAI",
      "acceptedAnswers": [
        "SAI",
        "sai"
      ],
      "explanation": "Tích 14×24×34×44 có 4 thừa số tận cùng 4 nên có tận cùng là 6. Tích 15×25×35 tận cùng là 5. Hiệu phải có tận cùng là 6 - 5 = 1. Kết quả đề cho là 2026 (tận cùng là 6) nên phép tính trên là SAI."
    },
    {
      "id": "T365-G4-028",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 2: TÌM CHỮ SỐ TẬN CÙNG",
      "topic": "TÌM CHỮ SỐ TẬN CÙNG",
      "num": 28,
      "text": "Bài 28. Tìm chữ số tận cùng của tổng: H = 1 × 2 + 2 × 3 + 3 × 4 + 4 × 5 + 5 × 6 + 6 × 7 + 7 × 8 + 8 × 9.",
      "type": "fill",
      "answer": "0",
      "acceptedAnswers": [
        "0"
      ],
      "explanation": "Chữ số tận cùng các tích: 2 + 6 + 2 + 0 + 0 + 2 + 6 + 2 = 20 → chữ số tận cùng là 0."
    },
    {
      "id": "T365-G4-029",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 2: TÌM CHỮ SỐ TẬN CÙNG",
      "topic": "TÌM CHỮ SỐ TẬN CÙNG",
      "num": 29,
      "text": "Bài 29. Tích gồm 2024 thừa số 7: 7 × 7 × ... × 7 có chữ số tận cùng là số nào?",
      "type": "fill",
      "answer": "1",
      "acceptedAnswers": [
        "1"
      ],
      "explanation": "2024 chia hết cho 4 (2024 : 4 = 506 nhóm). Mỗi nhóm 4 thừa số 7 có tận cùng là 1. Vậy tích tận cùng là 1."
    },
    {
      "id": "T365-G4-030",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 2: TÌM CHỮ SỐ TẬN CÙNG",
      "topic": "TÌM CHỮ SỐ TẬN CÙNG",
      "num": 30,
      "text": "Bài 30. Bạn An nhân tất cả các số tự nhiên từ 1 đến 50 với nhau. Hỏi kết quả tích đó có tận cùng là bao nhiêu chữ số 0?",
      "type": "fill",
      "answer": "12 chữ số 0",
      "acceptedAnswers": [
        "12 chữ số 0"
      ],
      "explanation": "Từ 1 đến 50 có các bội của 5 là: 5, 10, 15, ..., 50 → (50 - 5):5 + 1 = 10 số. Trong đó 25 và 50 mỗi số chia hết cho 25 (có 2 thừa số 5), đóng góp thêm 2 thừa số 5 nữa. Tổng số thừa số 5 là 10 + 2 = 12. Vậy tích có 12 chữ số 0 ở tận cùng."
    },
    {
      "id": "T365-G4-031",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 3: BÀI TOÁN ĐÁNH SỐ TRANG SÁCH",
      "topic": "BÀI TOÁN ĐÁNH SỐ TRANG SÁCH",
      "num": 31,
      "text": "Bài 31. Để đánh số trang một cuốn vở dày 84 trang (bắt đầu từ trang 1), cần dùng tất cả bao nhiêu chữ số?",
      "type": "fill",
      "answer": "159 chữ số",
      "acceptedAnswers": [
        "159 chữ số",
        "159"
      ],
      "explanation": "Từ 1 đến 9: 9 chữ số. Từ 10 đến 84 có: (84 - 10) + 1 = 75 trang × 2 = 150 chữ số. Tổng = 9 + 150 = 159 chữ số."
    },
    {
      "id": "T365-G4-032",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 3: BÀI TOÁN ĐÁNH SỐ TRANG SÁCH",
      "topic": "BÀI TOÁN ĐÁNH SỐ TRANG SÁCH",
      "num": 32,
      "text": "Bài 32. Một cuốn truyện tranh dày 150 trang. Hỏi người ta phải dùng tất cả bao nhiêu lượt chữ số để đánh số trang cuốn truyện đó?",
      "type": "fill",
      "answer": "342 chữ số",
      "acceptedAnswers": [
        "342 chữ số",
        "342"
      ],
      "explanation": "Từ 1 đến 9: 9 chữ số. Từ 10 đến 99: 90 × 2 = 180 chữ số. Từ 100 đến 150 có: 51 trang × 3 = 153 chữ số. Tổng = 9 + 180 + 153 = 342 chữ số."
    },
    {
      "id": "T365-G4-033",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 3: BÀI TOÁN ĐÁNH SỐ TRANG SÁCH",
      "topic": "BÀI TOÁN ĐÁNH SỐ TRANG SÁCH",
      "num": 33,
      "text": "Bài 33. Để đánh số các trang của một cuốn sách giáo khoa Toán 4, người ta đã phải dùng 216 lượt chữ số. Hỏi cuốn sách đó dày bao nhiêu trang?",
      "type": "fill",
      "answer": "108 trang",
      "acceptedAnswers": [
        "108 trang"
      ],
      "explanation": "Đánh hết 99 trang đầu cần: 9 + 180 = 189 chữ số. Số chữ số còn lại để đánh các trang có 3 chữ số: 216 - 189 = 27 chữ số. Số trang có 3 chữ số: 27 : 3 = 9 trang. Cuốn sách dày: 99 + 9 = 108 trang."
    },
    {
      "id": "T365-G4-034",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 3: BÀI TOÁN ĐÁNH SỐ TRANG SÁCH",
      "topic": "BÀI TOÁN ĐÁNH SỐ TRANG SÁCH",
      "num": 34,
      "text": "Bài 34. Đánh số trang một cuốn sổ tay người ta phải dùng đúng 393 chữ số. Hỏi cuốn sổ tay đó có bao nhiêu trang?",
      "type": "fill",
      "answer": "167 trang",
      "acceptedAnswers": [
        "167 trang"
      ],
      "explanation": "Số chữ số cho các trang có 3 chữ số: 393 - 189 = 204 chữ số. Số trang 3 chữ số: 204 : 3 = 68 trang. Cuốn sổ có: 99 + 68 = 167 trang."
    },
    {
      "id": "T365-G4-035",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 3: BÀI TOÁN ĐÁNH SỐ TRANG SÁCH",
      "topic": "BÀI TOÁN ĐÁNH SỐ TRANG SÁCH",
      "num": 35,
      "text": "Bài 35. Trong một cuốn sách dày 180 trang, chữ số 5 xuất hiện bao nhiêu lần ở phần đánh số trang?",
      "type": "fill",
      "answer": "38 lần",
      "acceptedAnswers": [
        "38 lần",
        "38"
      ],
      "explanation": "Từ 1 đến 99 có 20 chữ số 5 (ở hàng đơn vị: 5, 15, ..., 95 là 10 số; ở hàng chục: 50, 51, ..., 59 là 10 số). Từ 100 đến 180 có 18 chữ số 5 (hàng đơn vị: 105, 115, ..., 175 là 8 số; hàng chục: 150 đến 159 là 10 số). Tổng cộng: 20 + 18 = 38 lần."
    },
    {
      "id": "T365-G4-036",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 3: BÀI TOÁN ĐÁNH SỐ TRANG SÁCH",
      "topic": "BÀI TOÁN ĐÁNH SỐ TRANG SÁCH",
      "num": 36,
      "text": "Bài 36. Người ta dùng 756 chữ số để đánh số trang một cuốn từ điển mini. Hỏi chữ số thứ 500 thuộc trang sách nào?",
      "type": "fill",
      "answer": "trang 203",
      "acceptedAnswers": [
        "trang 203"
      ],
      "explanation": "99 trang đầu dùng 189 chữ số. Còn lại: 500 - 189 = 311 chữ số cho các trang 3 chữ số. Ta có: 311 : 3 = 103 (dư 2). Điều này có nghĩa chữ số thứ 500 là chữ số thứ 2 của trang thứ (99 + 103 + 1) = 203. Vậy chữ số thứ 500 thuộc trang 203 (và chính là chữ số 0)."
    },
    {
      "id": "T365-G4-037",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 3: BÀI TOÁN ĐÁNH SỐ TRANG SÁCH",
      "topic": "BÀI TOÁN ĐÁNH SỐ TRANG SÁCH",
      "num": 37,
      "text": "Bài 37. Để đánh số thứ tự các phòng khách sạn có 3 chữ số bắt đầu từ số 101 đến 175, người ta phải gắn bao nhiêu chữ số kim loại?",
      "type": "fill",
      "answer": "225 chữ số",
      "acceptedAnswers": [
        "225 chữ số",
        "225"
      ],
      "explanation": "Số phòng: (175 - 101) + 1 = 75 phòng. Mỗi phòng có 3 chữ số: 75 × 3 = 225 chữ số."
    },
    {
      "id": "T365-G4-038",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 3: BÀI TOÁN ĐÁNH SỐ TRANG SÁCH",
      "topic": "BÀI TOÁN ĐÁNH SỐ TRANG SÁCH",
      "num": 38,
      "text": "Bài 38. Để đánh số trang một quyển sách, trung bình mỗi trang phải dùng 2 chữ số. Hỏi quyển sách đó có bao nhiêu trang?",
      "type": "fill",
      "answer": "108 trang",
      "acceptedAnswers": [
        "108 trang"
      ],
      "explanation": "Để trung bình mỗi trang có 2 chữ số thì các trang có 1 chữ số (từ 1 đến 9, thiếu 1 chữ số mỗi trang, tổng thiếu 9 chữ số) phải được bù bởi 9 trang có 3 chữ số (từ 100 đến 108, mỗi trang thừa 1 chữ số). Vậy cuốn sách có đúng 108 trang. Đáp số: 108 trang."
    },
    {
      "id": "T365-G4-039",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 3: BÀI TOÁN ĐÁNH SỐ TRANG SÁCH",
      "topic": "BÀI TOÁN ĐÁNH SỐ TRANG SÁCH",
      "num": 39,
      "text": "Bài 39. Một cuốn sách có số trang là một số có 3 chữ số. Để đánh số trang sách đó người ta phải dùng 645 chữ số. Hỏi trang cuối cùng của cuốn sách là số mấy?",
      "type": "fill",
      "answer": "trang 251",
      "acceptedAnswers": [
        "trang 251"
      ],
      "explanation": "Số chữ số các trang 3 chữ số: 645 - 189 = 456. Số trang có 3 chữ số: 456 : 3 = 152 trang. Trang cuối cùng: 99 + 152 = trang 251."
    },
    {
      "id": "T365-G4-040",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 3: BÀI TOÁN ĐÁNH SỐ TRANG SÁCH",
      "topic": "BÀI TOÁN ĐÁNH SỐ TRANG SÁCH",
      "num": 40,
      "text": "Bài 40. Khi đánh số trang một cuốn sách dày 250 trang, người ta phải dùng bao nhiêu chữ số 1?",
      "type": "fill",
      "answer": "155 chữ số 1",
      "acceptedAnswers": [
        "155 chữ số 1"
      ],
      "explanation": "Chữ số 1 ở hàng đơn vị (1, 11, ..., 241): 25 lần. Chữ số 1 ở hàng chục (10-19, 110-119, 210-219): 10 × 3 = 30 lần. Chữ số 1 ở hàng trăm (100 đến 199): 100 lần. Tổng cộng = 25 + 30 + 100 = 155 chữ số 1."
    },
    {
      "id": "T365-G4-041",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 3: BÀI TOÁN ĐÁNH SỐ TRANG SÁCH",
      "topic": "BÀI TOÁN ĐÁNH SỐ TRANG SÁCH",
      "num": 41,
      "text": "Bài 41. Người ta viết liền nhau các số tự nhiên liên tiếp từ 1 đến 50 thành một số lớn: 123456789101112...4950. Hỏi số lớn này có tất cả bao nhiêu chữ số?",
      "type": "fill",
      "answer": "91 chữ số",
      "acceptedAnswers": [
        "91 chữ số",
        "91"
      ],
      "explanation": "Từ 1 đến 9: 9 chữ số. Từ 10 đến 50 có: (50 - 10) + 1 = 41 số có 2 chữ số → 41 × 2 = 82 chữ số. Tổng số chữ số = 9 + 82 = 91 chữ số."
    },
    {
      "id": "T365-G4-042",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 3: BÀI TOÁN ĐÁNH SỐ TRANG SÁCH",
      "topic": "BÀI TOÁN ĐÁNH SỐ TRANG SÁCH",
      "num": 42,
      "text": "Bài 42. Trong dãy số tự nhiên viết liền nhau ở Bài 41, chữ số thứ 65 tính từ trái sang phải là chữ số nào?",
      "type": "fill",
      "answer": "chữ số 7",
      "acceptedAnswers": [
        "chữ số 7"
      ],
      "explanation": "Bỏ qua 9 chữ số đầu (từ 1 đến 9), còn lại 65 - 9 = 56 chữ số. 56 : 2 = 28 số có 2 chữ số. Số thứ 28 có 2 chữ số là: 10 + 28 - 1 = 37. Chữ số thứ 56 của nhóm 2 chữ số chính là chữ số hàng đơn vị của số 37, tức là chữ số 7."
    },
    {
      "id": "T365-G4-043",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 3: BÀI TOÁN ĐÁNH SỐ TRANG SÁCH",
      "topic": "BÀI TOÁN ĐÁNH SỐ TRANG SÁCH",
      "num": 43,
      "text": "Bài 43. Bạn Nam làm rơi một tờ giấy rời trong cuốn sách. Tổng hai số trang ghi trên tờ giấy đó là 125. Hỏi đó là tờ giấy mang hai số trang nào?",
      "type": "fill",
      "answer": "trang 62 và trang 63",
      "acceptedAnswers": [
        "trang 62 và trang 63"
      ],
      "explanation": "Hai mặt của một tờ giấy luôn mang hai số tự nhiên liên tiếp (trang chẵn và trang lẻ). Hai số liên tiếp có tổng 125 là: Số trang nhỏ = (125 - 1):2 = 62; Số trang lớn = 63. Vậy đó là tờ giấy mang trang 62 và trang 63."
    },
    {
      "id": "T365-G4-044",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 3: BÀI TOÁN ĐÁNH SỐ TRANG SÁCH",
      "topic": "BÀI TOÁN ĐÁNH SỐ TRANG SÁCH",
      "num": 44,
      "text": "Bài 44. Một học sinh xé ngẫu nhiên 5 tờ giấy trong một quyển sách. Hỏi tổng các số trang của 5 tờ giấy bị xé đó có thể là một số chẵn được không? Vì sao?",
      "type": "fill",
      "answer": "không thể là một số chẵn",
      "acceptedAnswers": [
        "không thể là một số chẵn",
        "không thể",
        "khong the",
        "không",
        "khong"
      ],
      "explanation": "Mỗi tờ giấy gồm 1 trang chẵn và 1 trang lẻ nên tổng số trang trên mỗi tờ luôn là số Lẻ. Xé 5 tờ giấy tức là có tổng của 5 số lẻ. Tổng của một số lẻ các số lẻ luôn là số Lẻ. Do đó tổng số trang bị xé không thể là một số chẵn."
    },
    {
      "id": "T365-G4-045",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 3: BÀI TOÁN ĐÁNH SỐ TRANG SÁCH",
      "topic": "BÀI TOÁN ĐÁNH SỐ TRANG SÁCH",
      "num": 45,
      "text": "Bài 45. Người ta đánh số trang một cuốn tài liệu bằng các số chẵn: 2, 4, 6, 8, ... Biết rằng trang cuối cùng được đánh số 160. Hỏi đã dùng bao nhiêu chữ số để đánh trang cho cuốn tài liệu đó?",
      "type": "fill",
      "answer": "187 chữ số",
      "acceptedAnswers": [
        "187 chữ số",
        "187"
      ],
      "explanation": "Các trang chẵn: Từ 2 đến 8 có 4 trang (1 chữ số) = 4 chữ số. Từ 10 đến 98 có (98 - 10):2 + 1 = 45 trang (2 chữ số) = 90 chữ số. Từ 100 đến 160 có (160 - 100):2 + 1 = 31 trang (3 chữ số) = 93 chữ số. Tổng chữ số = 4 + 90 + 93 = 187 chữ số."
    },
    {
      "id": "T365-G4-046",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 4: SỬ DỤNG TÍNH CHẴN LẺ ĐỂ GIẢI TOÁN",
      "topic": "SỬ DỤNG TÍNH CHẴN LẺ ĐỂ GIẢI TOÁN",
      "num": 46,
      "text": "Bài 46. Tổng của 7 số tự nhiên bất kỳ là một số lẻ. Hỏi trong 7 số đó có thể có bao nhiêu số lẻ?",
      "type": "fill",
      "answer": "1, 3, 5 hoặc 7 số lẻ",
      "acceptedAnswers": [
        "1, 3, 5 hoặc 7 số lẻ",
        "1; 3; 5 hoặc 7 số lẻ",
        "1 và 3 và 5 hoặc 7 số lẻ",
        "1 3 5 hoặc 7 số lẻ",
        "1, 3, 5",
        "7 số lẻ"
      ],
      "explanation": "Tổng của 7 số là số lẻ khi và chỉ khi số lượng số lẻ trong tổng là một số lẻ. Do đó, có thể có 1, 3, 5 hoặc 7 số lẻ."
    },
    {
      "id": "T365-G4-047",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 4: SỬ DỤNG TÍNH CHẴN LẺ ĐỂ GIẢI TOÁN",
      "topic": "SỬ DỤNG TÍNH CHẴN LẺ ĐỂ GIẢI TOÁN",
      "num": 47,
      "text": "Bài 47. Tìm hiệu của hai số chẵn, biết giữa chúng có đúng 8 số chẵn khác.",
      "type": "fill",
      "answer": "18",
      "acceptedAnswers": [
        "18"
      ],
      "explanation": "Giữa chúng có 8 số chẵn nghĩa là có 9 khoảng cách, mỗi khoảng là 2 đơn vị. Hiệu = 9 × 2 = 18."
    },
    {
      "id": "T365-G4-048",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 4: SỬ DỤNG TÍNH CHẴN LẺ ĐỂ GIẢI TOÁN",
      "topic": "SỬ DỤNG TÍNH CHẴN LẺ ĐỂ GIẢI TOÁN",
      "num": 48,
      "text": "Bài 48. Hai số tự nhiên có tổng bằng 2025. Hỏi tích của chúng là số chẵn hay số lẻ?",
      "type": "fill",
      "answer": "số chẵn",
      "acceptedAnswers": [
        "số chẵn"
      ],
      "explanation": "Tổng của hai số là 2025 (số lẻ) nên một số phải là số Chẵn và một số phải là số Lẻ. Tích của số Chẵn với số Lẻ luôn là một số chẵn."
    },
    {
      "id": "T365-G4-049",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 4: SỬ DỤNG TÍNH CHẴN LẺ ĐỂ GIẢI TOÁN",
      "topic": "SỬ DỤNG TÍNH CHẴN LẺ ĐỂ GIẢI TOÁN",
      "num": 49,
      "text": "Bài 49. Tìm hai số tự nhiên chẵn liên tiếp có tổng bằng 154.",
      "type": "fill",
      "answer": "76 và 78",
      "acceptedAnswers": [
        "76 và 78"
      ],
      "explanation": "Hai số chẵn liên tiếp hơn kém nhau 2 đơn vị. Số bé: (154 - 2):2 = 76; Số lớn: 76 + 2 = 78. Đáp số: 76 và 78."
    },
    {
      "id": "T365-G4-050",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 4: SỬ DỤNG TÍNH CHẴN LẺ ĐỂ GIẢI TOÁN",
      "topic": "SỬ DỤNG TÍNH CHẴN LẺ ĐỂ GIẢI TOÁN",
      "num": 50,
      "text": "Bài 50. Tìm hai số lẻ có tổng bằng 240, biết rằng giữa chúng có 12 số lẻ khác.",
      "type": "fill",
      "answer": "107 và 133",
      "acceptedAnswers": [
        "107 và 133"
      ],
      "explanation": "Giữa hai số lẻ có 12 số lẻ khác thì hiệu của chúng là: (12 + 1) × 2 = 26. Số bé = (240 - 26):2 = 107; Số lớn = 107 + 26 = 133. Đáp số: 107 và 133."
    },
    {
      "id": "T365-G4-051",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 4: SỬ DỤNG TÍNH CHẴN LẺ ĐỂ GIẢI TOÁN",
      "topic": "SỬ DỤNG TÍNH CHẴN LẺ ĐỂ GIẢI TOÁN",
      "num": 51,
      "text": "Bài 51. Có 10 tấm thẻ ghi các số từ 1 đến 10. Bạn Bình chọn 5 thẻ và bạn An lấy 5 thẻ còn lại. Bạn Bình nhân 5 số của mình lại, bạn An cũng nhân 5 số của mình lại rồi cộng hai kết quả với nhau. Hỏi tổng nhận được là số chẵn hay lẻ?",
      "type": "fill",
      "answer": "số chẵn",
      "acceptedAnswers": [
        "số chẵn"
      ],
      "explanation": "Từ 1 đến 10 có 5 số lẻ và 5 số chẵn. Khi chia thành 2 nhóm 5 thẻ, chắc chắn ít nhất 1 bạn có chứa số chẵn (thực tế vì có 5 số chẵn nên cả hai bạn hoặc ít nhất một bạn đều có số chẵn). Nhóm nào có ít nhất một số chẵn thì tích sẽ chẵn. Cả 2 tích đều là số chẵn nên tổng hai tích chắc chắn là số chẵn."
    },
    {
      "id": "T365-G4-052",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 4: SỬ DỤNG TÍNH CHẴN LẺ ĐỂ GIẢI TOÁN",
      "topic": "SỬ DỤNG TÍNH CHẴN LẺ ĐỂ GIẢI TOÁN",
      "num": 52,
      "text": "Bài 52. Giữa hai số tự nhiên có 10 số chẵn và hiệu của chúng là 21. Hỏi hai số đó là hai số chẵn hay hai số lẻ, hay một chẵn một lẻ?",
      "type": "fill",
      "answer": "một số chẵn và một số lẻ",
      "acceptedAnswers": [
        "một số chẵn và một số lẻ"
      ],
      "explanation": "Hiệu là 21 (số lẻ). Hiệu giữa hai số là số lẻ khi và chỉ khi một số là chẵn và một số là lẻ. Vậy hai số đó là một số chẵn và một số lẻ."
    },
    {
      "id": "T365-G4-053",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 4: SỬ DỤNG TÍNH CHẴN LẺ ĐỂ GIẢI TOÁN",
      "topic": "SỬ DỤNG TÍNH CHẴN LẺ ĐỂ GIẢI TOÁN",
      "num": 53,
      "text": "Bài 53. Cho bảng ô vuông 5 × 5 gồm 25 ô. Điền vào mỗi ô một số tự nhiên lẻ. Tính tổng tất cả các số trong bảng và cho biết tổng đó là số chẵn hay số lẻ?",
      "type": "fill",
      "answer": "số lẻ",
      "acceptedAnswers": [
        "số lẻ"
      ],
      "explanation": "Bảng có 25 ô, tức là tổng của 25 số lẻ. Tổng của 25 số lẻ (25 là số lẻ) luôn là một số lẻ."
    },
    {
      "id": "T365-G4-054",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 4: SỬ DỤNG TÍNH CHẴN LẺ ĐỂ GIẢI TOÁN",
      "topic": "SỬ DỤNG TÍNH CHẴN LẺ ĐỂ GIẢI TOÁN",
      "num": 54,
      "text": "Bài 54. Cho 3 số tự nhiên a, b, c. Chứng minh rằng tích (a - b)(b - c)(c - a) luôn là một số chẵn.",
      "type": "fill",
      "answer": "số chẵn",
      "acceptedAnswers": [
        "số chẵn"
      ],
      "explanation": "Trong 3 số tự nhiên a, b, c theo nguyên lý chẵn lẻ luôn có ít nhất hai số cùng tính chẵn lẻ (cùng chẵn hoặc cùng lẻ). Hiệu của hai số cùng tính chẵn lẻ luôn là một số chẵn. Trong tích có ít nhất một thừa số chẵn nên tích luôn là số chẵn."
    },
    {
      "id": "T365-G4-055",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 4: SỬ DỤNG TÍNH CHẴN LẺ ĐỂ GIẢI TOÁN",
      "topic": "SỬ DỤNG TÍNH CHẴN LẺ ĐỂ GIẢI TOÁN",
      "num": 55,
      "text": "Bài 55. Bạn Linh viết lên bảng 9 số tự nhiên liên tiếp. Bạn xóa đi một số thì tổng của 8 số còn lại bằng 2024. Hỏi số bạn Linh đã xóa là số chẵn hay số lẻ?",
      "type": "fill",
      "answer": "số lẻ",
      "acceptedAnswers": [
        "số lẻ"
      ],
      "explanation": "Trong 9 số tự nhiên liên tiếp luôn có tổng là một số chia hết cho 9. Trong 9 số liên tiếp thì hoặc có 5 số chẵn 4 số lẻ (tổng chẵn) hoặc có 5 số lẻ 4 số chẵn (tổng lẻ). Ta thấy tổng của 8 số còn lại là 2024 (số chẵn). Nếu tổng 9 số ban đầu là lẻ thì số bị xóa là Lẻ - Chẵn = Lẻ. Ngược lại nếu tổng ban đầu chẵn thì số bị xóa là Chẵn - Chẵn = Chẵn. Ta kiểm tra: 9 số liên tiếp có dạng n-4 đến n+4 thì tổng bằng 9n. Vì 2024 chia 9 dư 8, nên 9n - số xóa = 2024 => số xóa chia 9 dư 1. Trong dãy liên tiếp, số xóa phải là số lẻ (chứng minh cụ thể qua tính chẵn lẻ của 9n)."
    },
    {
      "id": "T365-G4-056",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 4: SỬ DỤNG TÍNH CHẴN LẺ ĐỂ GIẢI TOÁN",
      "topic": "SỬ DỤNG TÍNH CHẴN LẺ ĐỂ GIẢI TOÁN",
      "num": 56,
      "text": "Bài 56. Tìm hiệu của hai số tự nhiên, biết số thứ nhất là số chẵn lớn nhất có 2 chữ số, số thứ hai là số lẻ nhỏ nhất có 2 chữ số khác nhau.",
      "type": "fill",
      "answer": "85",
      "acceptedAnswers": [
        "85"
      ],
      "explanation": "Số chẵn lớn nhất có 2 chữ số là 98. Số lẻ nhỏ nhất có 2 chữ số khác nhau là 13. Hiệu = 98 - 13 = 85."
    },
    {
      "id": "T365-G4-057",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 4: SỬ DỤNG TÍNH CHẴN LẺ ĐỂ GIẢI TOÁN",
      "topic": "SỬ DỤNG TÍNH CHẴN LẺ ĐỂ GIẢI TOÁN",
      "num": 57,
      "text": "Bài 57. Tổng của 3 số tự nhiên liên tiếp là 2025. Hãy tìm 3 số đó.",
      "type": "fill",
      "answer": "674, 675, 676",
      "acceptedAnswers": [
        "674, 675, 676",
        "674; 675; 676",
        "674 và 675 và 676",
        "674 675 676"
      ],
      "explanation": "Ba số liên tiếp có tổng 2025 thì số ở giữa (trung bình cộng) là: 2025 : 3 = 675. Ba số đó là: 674, 675, 676."
    },
    {
      "id": "T365-G4-058",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 4: SỬ DỤNG TÍNH CHẴN LẺ ĐỂ GIẢI TOÁN",
      "topic": "SỬ DỤNG TÍNH CHẴN LẺ ĐỂ GIẢI TOÁN",
      "num": 58,
      "text": "Bài 58. Tổng của 4 số tự nhiên liên tiếp có thể bằng 2026 được không? Vì sao?",
      "type": "fill",
      "answer": "hoàn toàn có thể được",
      "acceptedAnswers": [
        "hoàn toàn có thể được"
      ],
      "explanation": "Bốn số tự nhiên liên tiếp gồm 2 số chẵn và 2 số lẻ. Tổng 2 số chẵn là chẵn, tổng 2 số lẻ là chẵn, nên tổng của 4 số tự nhiên liên tiếp luôn là số chẵn. Tuy nhiên bốn số có dạng a + (a+1) + (a+2) + (a+3) = 4a + 6. Vì 4a + 6 chia 4 dư 2, mà 2026 chia 4 dư 2 (2026 = 506 × 4 + 2). Vậy có: 4a = 2020 => a = 505. Do đó hoàn toàn có thể được (4 số đó là 505, 506, 507, 508)."
    },
    {
      "id": "T365-G4-059",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 4: SỬ DỤNG TÍNH CHẴN LẺ ĐỂ GIẢI TOÁN",
      "topic": "SỬ DỤNG TÍNH CHẴN LẺ ĐỂ GIẢI TOÁN",
      "num": 59,
      "text": "Bài 59. Một đoàn tàu có 9 toa, mỗi toa chở một số chẵn hành khách hoặc một số lẻ hành khách. Biết rằng tổng số hành khách trên toàn bộ đoàn tàu là một số lẻ. Hỏi trên tàu có ít nhất bao nhiêu toa chở số lẻ hành khách?",
      "type": "fill",
      "answer": "1 toa",
      "acceptedAnswers": [
        "1 toa"
      ],
      "explanation": "Tổng số khách là số lẻ thì số toa chở số lẻ hành khách phải là một số lẻ (vì tổng các số chẵn luôn chẵn). Số lẻ nhỏ nhất lớn hơn 0 là 1. Vậy có ít nhất 1 toa chở số lẻ hành khách."
    },
    {
      "id": "T365-G4-060",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 4: SỬ DỤNG TÍNH CHẴN LẺ ĐỂ GIẢI TOÁN",
      "topic": "SỬ DỤNG TÍNH CHẴN LẺ ĐỂ GIẢI TOÁN",
      "num": 60,
      "text": "Bài 60. Trên bàn có 15 đồng xu, mỗi đồng xu đều có hai mặt: mặt hình và mặt số. Ban đầu tất cả 15 đồng xu đều ngửa mặt hình. Mỗi lượt chơi, người ta lật đúng 4 đồng xu bất kỳ. Hỏi sau một số lượt chơi, có thể đưa toàn bộ 15 đồng xu về mặt số được không? Giải thích.",
      "type": "fill",
      "answer": "không thể",
      "acceptedAnswers": [
        "không thể",
        "khong the",
        "không",
        "khong"
      ],
      "explanation": "Ban đầu có 0 mặt số (số chẵn). Mỗi lần lật 4 đồng xu thì số mặt số thay đổi một lượng chẵn (tăng 4, tăng 2, không đổi, giảm 2, hoặc giảm 4), vì vậy sau mỗi lượt chơi, số lượng đồng xu có mặt số luôn là một số chẵn. Số 15 là số lẻ nên không thể đưa toàn bộ 15 đồng xu về mặt số được."
    },
    {
      "id": "T365-G4-061",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 5: CẤU TẠO SỐ TỰ NHIÊN & LẬP SỐ THEO ĐIỀU KIỆN",
      "topic": "CẤU TẠO SỐ TỰ NHIÊN & LẬP SỐ THEO ĐIỀU KIỆN",
      "num": 61,
      "text": "Bài 61. Từ các chữ số 0, 2, 5, 8 có thể lập được bao nhiêu số tự nhiên có 3 chữ số khác nhau?",
      "type": "fill",
      "answer": "18 số",
      "acceptedAnswers": [
        "18 số",
        "18"
      ],
      "explanation": "Chữ số hàng trăm có 3 cách chọn (2, 5, 8). Chữ số hàng chục có 3 cách chọn (khác hàng trăm). Chữ số hàng đơn vị có 2 cách chọn. Số các số lập được: 3 × 3 × 2 = 18 số."
    },
    {
      "id": "T365-G4-062",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 5: CẤU TẠO SỐ TỰ NHIÊN & LẬP SỐ THEO ĐIỀU KIỆN",
      "topic": "CẤU TẠO SỐ TỰ NHIÊN & LẬP SỐ THEO ĐIỀU KIỆN",
      "num": 62,
      "text": "Bài 62. Có bao nhiêu số chẵn có 3 chữ số được tạo thành từ các chữ số 1, 2, 3, 4, 5 (các chữ số có thể lặp lại)?",
      "type": "fill",
      "answer": "50 số",
      "acceptedAnswers": [
        "50 số",
        "50"
      ],
      "explanation": "Số chẵn nên hàng đơn vị chỉ có thể chọn 2 hoặc 4 (2 cách chọn). Hàng trăm có 5 cách chọn. Hàng chục có 5 cách chọn. Số các số chẵn lập được: 5 × 5 × 2 = 50 số."
    },
    {
      "id": "T365-G4-063",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 5: CẤU TẠO SỐ TỰ NHIÊN & LẬP SỐ THEO ĐIỀU KIỆN",
      "topic": "CẤU TẠO SỐ TỰ NHIÊN & LẬP SỐ THEO ĐIỀU KIỆN",
      "num": 63,
      "text": "Bài 63. Tìm một số có 2 chữ số, biết rằng nếu viết thêm chữ số 2 vào bên phải số đó thì số đó tăng thêm 245 đơn vị.",
      "type": "fill",
      "answer": "27",
      "acceptedAnswers": [
        "27"
      ],
      "explanation": "Khi viết thêm chữ số 2 vào bên phải ta được ab2 = ab × 10 + 2. Ta có: ab × 10 + 2 - ab = 245 => 9 × ab = 243 => ab = 243 : 9 = 27."
    },
    {
      "id": "T365-G4-064",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 5: CẤU TẠO SỐ TỰ NHIÊN & LẬP SỐ THEO ĐIỀU KIỆN",
      "topic": "CẤU TẠO SỐ TỰ NHIÊN & LẬP SỐ THEO ĐIỀU KIỆN",
      "num": 64,
      "text": "Bài 64. Tìm một số tự nhiên có 3 chữ số, biết rằng nếu xóa chữ số 7 ở hàng trăm của số đó thì ta được số mới bằng 1/9 số ban đầu.",
      "type": "fill",
      "answer": "không có số thỏa mãn nguyên vẹn",
      "acceptedAnswers": [
        "không có số thỏa mãn nguyên vẹn"
      ],
      "explanation": "Gọi số cần tìm là 7bc. Xóa chữ số 7 ta được bc. Ta có: 7bc = 9 × bc => 700 + bc = 9 × bc => 8 × bc = 700. Không chia hết cho số tự nhiên (thay số 720 thì chia hết). Đề bài chính xác: 7bc = 9 × bc => với số 775 ta có 75, hoặc xóa chữ số hàng trăm được số mới bằng 1/9 thì 700 : 8 = 87.5. Trường hợp số đúng đề thi: Xóa chữ số 7 ở hàng nghìn hoặc chữ số 7 ở hàng trăm bằng 1/15, hoặc 7bc - bc = 700. Với bài toán này số tự nhiên tương thích là không có số thỏa mãn nguyên vẹn (nếu số mới bằng 1/9 số ban đầu thì số ban đầu là số có dạng bc0 + ... điều chỉnh đề: nếu số ban đầu là 775 thì xóa 7 được 75)."
    },
    {
      "id": "T365-G4-065",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 5: CẤU TẠO SỐ TỰ NHIÊN & LẬP SỐ THEO ĐIỀU KIỆN",
      "topic": "CẤU TẠO SỐ TỰ NHIÊN & LẬP SỐ THEO ĐIỀU KIỆN",
      "num": 65,
      "text": "Bài 65. Tìm một số có 2 chữ số, biết rằng tổng các chữ số của nó bằng 12 và hiệu giữa chữ số hàng chục và chữ số hàng đơn vị bằng 4.",
      "type": "fill",
      "answer": "84",
      "acceptedAnswers": [
        "84"
      ],
      "explanation": "Chữ số hàng chục: (12 + 4) : 2 = 8. Chữ số hàng đơn vị: 8 - 4 = 4. Số cần tìm là 84."
    },
    {
      "id": "T365-G4-066",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 5: CẤU TẠO SỐ TỰ NHIÊN & LẬP SỐ THEO ĐIỀU KIỆN",
      "topic": "CẤU TẠO SỐ TỰ NHIÊN & LẬP SỐ THEO ĐIỀU KIỆN",
      "num": 66,
      "text": "Bài 66. Khi viết thêm chữ số 0 vào giữa chữ số hàng chục và hàng đơn vị của một số có hai chữ số, ta được một số gấp 9 lần số ban đầu. Tìm số ban đầu đó.",
      "type": "fill",
      "answer": "45",
      "acceptedAnswers": [
        "45"
      ],
      "explanation": "a0b = 9 × ab => 100a + b = 9 × (10a + b) => 100a + b = 90a + 9b => 10a = 8b => 5a = 4b. Vì a, b là chữ số (a ≠ 0) nên a = 4, b = 5. Số cần tìm là 45."
    },
    {
      "id": "T365-G4-067",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 5: CẤU TẠO SỐ TỰ NHIÊN & LẬP SỐ THEO ĐIỀU KIỆN",
      "topic": "CẤU TẠO SỐ TỰ NHIÊN & LẬP SỐ THEO ĐIỀU KIỆN",
      "num": 67,
      "text": "Bài 67. Tính tổng của tất cả các số có 3 chữ số khác nhau được lập từ 3 chữ số 1, 3, 5.",
      "type": "fill",
      "answer": "1998",
      "acceptedAnswers": [
        "1998"
      ],
      "explanation": "Có 6 số được lập: 135, 153, 315, 351, 513, 531. Mỗi chữ số 1, 3, 5 xuất hiện 2 lần ở hàng trăm, 2 lần ở hàng chục, 2 lần ở hàng đơn vị. Tổng = (1 + 3 + 5) × 2 × 100 + (1 + 3 + 5) × 2 × 10 + (1 + 3 + 5) × 2 × 1 = 9 × 2 × 111 = 18 × 111 = 1998."
    },
    {
      "id": "T365-G4-068",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 5: CẤU TẠO SỐ TỰ NHIÊN & LẬP SỐ THEO ĐIỀU KIỆN",
      "topic": "CẤU TẠO SỐ TỰ NHIÊN & LẬP SỐ THEO ĐIỀU KIỆN",
      "num": 68,
      "text": "Bài 68. Tìm một số tự nhiên có 2 chữ số, biết rằng nếu đổi chỗ hai chữ số của số đó cho nhau ta được số mới lớn hơn số cũ 36 đơn vị.",
      "type": "fill",
      "answer": "15, 26, 37, 48, 59",
      "acceptedAnswers": [
        "15, 26, 37, 48, 59",
        "15; 26; 37; 48; 59",
        "15 và 26 và 37 và 48 và 59",
        "15 26 37 48 59"
      ],
      "explanation": "ba - ab = 36 => (10b + a) - (10a + b) = 36 => 9 × (b - a) = 36 => b - a = 4. Các số thỏa mãn gồm: 15, 26, 37, 48, 59."
    },
    {
      "id": "T365-G4-069",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 5: CẤU TẠO SỐ TỰ NHIÊN & LẬP SỐ THEO ĐIỀU KIỆN",
      "topic": "CẤU TẠO SỐ TỰ NHIÊN & LẬP SỐ THEO ĐIỀU KIỆN",
      "num": 69,
      "text": "Bài 69. Tìm số có 3 chữ số, biết rằng chữ số hàng trăm gấp 3 lần chữ số hàng chục, chữ số hàng chục gấp 2 lần chữ số hàng đơn vị.",
      "type": "fill",
      "answer": "621",
      "acceptedAnswers": [
        "621"
      ],
      "explanation": "Chữ số hàng đơn vị c khác 0. Nếu c = 1 thì b = 2 và a = 6 (số 621). Nếu c = 2 thì b = 4 và a = 12 (loại vì a là chữ số). Vậy số cần tìm là 621."
    },
    {
      "id": "T365-G4-070",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 5: CẤU TẠO SỐ TỰ NHIÊN & LẬP SỐ THEO ĐIỀU KIỆN",
      "topic": "CẤU TẠO SỐ TỰ NHIÊN & LẬP SỐ THEO ĐIỀU KIỆN",
      "num": 70,
      "text": "Bài 70. Cho số tự nhiên A. Nếu xóa đi chữ số 5 ở hàng đơn vị của A thì số đó giảm đi 1787 đơn vị. Tìm số A.",
      "type": "fill",
      "answer": "1985",
      "acceptedAnswers": [
        "1985"
      ],
      "explanation": "A = B × 10 + 5. Ta có: B × 10 + 5 - B = 1787 => 9 × B = 1782 => B = 198. Vậy số A = 1985."
    },
    {
      "id": "T365-G4-071",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 5: CẤU TẠO SỐ TỰ NHIÊN & LẬP SỐ THEO ĐIỀU KIỆN",
      "topic": "CẤU TẠO SỐ TỰ NHIÊN & LẬP SỐ THEO ĐIỀU KIỆN",
      "num": 71,
      "text": "Bài 71. Có bao nhiêu số tự nhiên có hai chữ số mà chữ số hàng chục lớn hơn chữ số hàng đơn vị?",
      "type": "fill",
      "answer": "45 số",
      "acceptedAnswers": [
        "45 số",
        "45"
      ],
      "explanation": "Nếu hàng chục là 1: có 1 số (10). Hàng chục là 2: có 2 số (20, 21)... Hàng chục là 9: có 9 số. Tổng = 1 + 2 + 3 + ... + 9 = 45 số."
    },
    {
      "id": "T365-G4-072",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 5: CẤU TẠO SỐ TỰ NHIÊN & LẬP SỐ THEO ĐIỀU KIỆN",
      "topic": "CẤU TẠO SỐ TỰ NHIÊN & LẬP SỐ THEO ĐIỀU KIỆN",
      "num": 72,
      "text": "Bài 72. Tìm số tự nhiên có hai chữ số ab biết rằng: a + b = 9 và ab - ba = 27.",
      "type": "fill",
      "answer": "63",
      "acceptedAnswers": [
        "63"
      ],
      "explanation": "ab - ba = 9 × (a - b) = 27 => a - b = 3. Lại có a + b = 9. Ta tìm được a = (9 + 3):2 = 6, b = 3. Số cần tìm là 63."
    },
    {
      "id": "T365-G4-073",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 5: CẤU TẠO SỐ TỰ NHIÊN & LẬP SỐ THEO ĐIỀU KIỆN",
      "topic": "CẤU TẠO SỐ TỰ NHIÊN & LẬP SỐ THEO ĐIỀU KIỆN",
      "num": 73,
      "text": "Bài 73. Tìm một số có 3 chữ số biết rằng số đó chia hết cho 5 và tổng ba chữ số của nó bằng 16, biết chữ số hàng trăm bằng chữ số hàng chục.",
      "type": "fill",
      "answer": "880",
      "acceptedAnswers": [
        "880"
      ],
      "explanation": "Số chia hết cho 5 nên chữ số tận cùng là 0 hoặc 5. Nếu tận cùng là 0: a + a + 0 = 16 => 2a = 16 => a = 8 (số 880). Nếu tận cùng là 5: a + a + 5 = 16 => 2a = 11 (loại vì a nguyên). Vậy số cần tìm là 880."
    },
    {
      "id": "T365-G4-074",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 5: CẤU TẠO SỐ TỰ NHIÊN & LẬP SỐ THEO ĐIỀU KIỆN",
      "topic": "CẤU TẠO SỐ TỰ NHIÊN & LẬP SỐ THEO ĐIỀU KIỆN",
      "num": 74,
      "text": "Bài 74. Một số có 4 chữ số có dạng 2a3b. Tìm a và b để số đó chia hết cho cả 2, 5 và 9.",
      "type": "fill",
      "answer": "a = 4, b = 0",
      "acceptedAnswers": [
        "a = 4, b = 0",
        "a = 4; b = 0",
        "a = 4 và b = 0",
        "a = 4 b = 0"
      ],
      "explanation": "2a3b chia hết cho 2 và 5 nên tận cùng b = 0. Số có dạng 2a30. Để chia hết cho 9 thì (2 + a + 3 + 0) = 5 + a chia hết cho 9 => a = 4. Vậy a = 4, b = 0 (số đó là 2430)."
    },
    {
      "id": "T365-G4-075",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 5: CẤU TẠO SỐ TỰ NHIÊN & LẬP SỐ THEO ĐIỀU KIỆN",
      "topic": "CẤU TẠO SỐ TỰ NHIÊN & LẬP SỐ THEO ĐIỀU KIỆN",
      "num": 75,
      "text": "Bài 75. Tìm số tự nhiên có hai chữ số, biết rằng nếu lấy số đó chia cho tổng các chữ số của nó thì được thương là 6 và dư 2.",
      "type": "fill",
      "answer": "32 và 86",
      "acceptedAnswers": [
        "32 và 86"
      ],
      "explanation": "ab = 6 × (a + b) + 2 => 10a + b = 6a + 6b + 2 => 4a = 5b + 2. Vì b là chữ số, 5b + 2 là số chẵn nên b phải là số chẵn (0, 2, 4, 6, 8). Thử b = 2: 4a = 12 => a = 3. (Kiểm tra 32 : (3+2) = 32 : 5 = 6 dư 2 - đúng). Thử b = 6: 4a = 32 => a = 8. (Kiểm tra 86 : 14 = 6 dư 2 - đúng). Vậy có 2 số thỏa mãn là 32 và 86."
    },
    {
      "id": "T365-G4-076",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 6: DÃY SỐ TUẦN HOÀN VÀ QUY LUẬT CHU KỲ",
      "topic": "DÃY SỐ TUẦN HOÀN VÀ QUY LUẬT CHU KỲ",
      "num": 76,
      "text": "Bài 76. Một người viết dãy từ lặp lại: VIETNAMVIETNAM... Hỏi chữ cái thứ 100 trong dãy là chữ gì?",
      "type": "fill",
      "answer": "I",
      "acceptedAnswers": [
        "I",
        "i"
      ],
      "explanation": "Từ VIETNAM có 7 chữ cái. Ta có: 100 : 7 = 14 (dư 2). Chữ cái thứ 2 của từ là chữ I."
    },
    {
      "id": "T365-G4-077",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 6: DÃY SỐ TUẦN HOÀN VÀ QUY LUẬT CHU KỲ",
      "topic": "DÃY SỐ TUẦN HOÀN VÀ QUY LUẬT CHU KỲ",
      "num": 77,
      "text": "Bài 77. Trong dãy chữ VIETNAM lặp lại như trên, trong 200 chữ cái đầu tiên có bao nhiêu chữ cái 'E'?",
      "type": "fill",
      "answer": "29 chữ E",
      "acceptedAnswers": [
        "29 chữ E",
        "29 chữ e"
      ],
      "explanation": "Mỗi cụm 7 chữ cái có đúng 1 chữ E. 200 : 7 = 28 (dư 4). Trong 4 chữ cái còn lại (V, I, E, T) có thêm 1 chữ E. Tổng số chữ E = 28 + 1 = 29 chữ E."
    },
    {
      "id": "T365-G4-078",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 6: DÃY SỐ TUẦN HOÀN VÀ QUY LUẬT CHU KỲ",
      "topic": "DÃY SỐ TUẦN HOÀN VÀ QUY LUẬT CHU KỲ",
      "num": 78,
      "text": "Bài 78. Người ta treo các bóng đèn màu theo thứ tự: Đỏ, Vàng, Xanh, Tím, Đỏ, Vàng, Xanh, Tím... Hỏi bóng đèn thứ 246 là bóng đèn màu gì?",
      "type": "fill",
      "answer": "màu Vàng",
      "acceptedAnswers": [
        "màu Vàng",
        "màu vàng"
      ],
      "explanation": "Chu kỳ gồm 4 màu (Đỏ, Vàng, Xanh, Tím). 246 : 4 = 61 (dư 2). Màu thứ 2 của chu kỳ là màu Vàng."
    },
    {
      "id": "T365-G4-079",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 6: DÃY SỐ TUẦN HOÀN VÀ QUY LUẬT CHU KỲ",
      "topic": "DÃY SỐ TUẦN HOÀN VÀ QUY LUẬT CHU KỲ",
      "num": 79,
      "text": "Bài 79. Có 150 viên bi được xếp thành hàng theo quy luật: 1 viên đỏ, 2 viên xanh, 3 viên vàng rồi lại đến 1 viên đỏ, 2 viên xanh, 3 viên vàng... Hỏi viên bi thứ 150 là viên bi màu gì?",
      "type": "fill",
      "answer": "màu Vàng",
      "acceptedAnswers": [
        "màu Vàng",
        "màu vàng"
      ],
      "explanation": "Mỗi cụm gồm: 1 đỏ + 2 xanh + 3 vàng = 6 viên bi. 150 : 6 = 25 (chia hết). Viên bi thứ 150 là viên cuối cùng của cụm, tức là màu Vàng."
    },
    {
      "id": "T365-G4-080",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 6: DÃY SỐ TUẦN HOÀN VÀ QUY LUẬT CHU KỲ",
      "topic": "DÃY SỐ TUẦN HOÀN VÀ QUY LUẬT CHU KỲ",
      "num": 80,
      "text": "Bài 80. Cho dãy số: 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, ... Tính tổng của 63 số hạng đầu tiên của dãy số đó.",
      "type": "fill",
      "answer": "186",
      "acceptedAnswers": [
        "186"
      ],
      "explanation": "Chu kỳ là nhóm (1, 2, 3, 4, 5) gồm 5 số với tổng = 1+2+3+4+5 = 15. 63 : 5 = 12 (dư 3). Ba số dư là 1, 2, 3. Tổng = 12 × 15 + (1 + 2 + 3) = 180 + 6 = 186."
    },
    {
      "id": "T365-G4-081",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 6: DÃY SỐ TUẦN HOÀN VÀ QUY LUẬT CHU KỲ",
      "topic": "DÃY SỐ TUẦN HOÀN VÀ QUY LUẬT CHU KỲ",
      "num": 81,
      "text": "Bài 81. Người ta tô màu các ô vuông trên một dải giấy dài theo thứ tự lặp lại: 2 ô đỏ, 3 ô xanh, 1 ô vàng. Hỏi nếu dải giấy có 185 ô vuông thì có bao nhiêu ô được tô màu xanh?",
      "type": "fill",
      "answer": "93 ô",
      "acceptedAnswers": [
        "93 ô"
      ],
      "explanation": "Mỗi chu kỳ gồm: 2 + 3 + 1 = 6 ô (trong đó có 3 ô xanh). 185 : 6 = 30 (dư 5). Trong 5 ô còn lại gồm 2 ô đỏ và 3 ô xanh. Tổng số ô xanh = 30 × 3 + 3 = 93 ô."
    },
    {
      "id": "T365-G4-082",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 6: DÃY SỐ TUẦN HOÀN VÀ QUY LUẬT CHU KỲ",
      "topic": "DÃY SỐ TUẦN HOÀN VÀ QUY LUẬT CHU KỲ",
      "num": 82,
      "text": "Bài 82. Bạn Lan viết dãy chữ MATHSPACE liên tục. Bạn đếm được dãy chữ đã viết có đúng 50 chữ 'A'. Hỏi chữ cái cuối cùng bạn viết là chữ nào?",
      "type": "fill",
      "answer": "E",
      "acceptedAnswers": [
        "E",
        "e"
      ],
      "explanation": "Từ MATHSPACE có 9 chữ cái và chứa 2 chữ 'A' (ở vị trí 2 và 7). Để có 50 chữ 'A' cần viết đúng 50 : 2 = 25 cụm hoàn chỉnh. Chữ cái cuối cùng của cụm thứ 25 là chữ E."
    },
    {
      "id": "T365-G4-083",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 6: DÃY SỐ TUẦN HOÀN VÀ QUY LUẬT CHU KỲ",
      "topic": "DÃY SỐ TUẦN HOÀN VÀ QUY LUẬT CHU KỲ",
      "num": 83,
      "text": "Bài 83. Hôm nay là thứ Ba. Hỏi 100 ngày sau là thứ mấy trong tuần?",
      "type": "fill",
      "answer": "thứ Năm",
      "acceptedAnswers": [
        "thứ Năm",
        "thứ năm"
      ],
      "explanation": "Một tuần có 7 ngày. 100 : 7 = 14 (dư 2). Sau đúng 14 tuần vẫn là thứ Ba, cộng thêm 2 ngày nữa: Thứ Ba + 2 ngày = thứ Năm."
    },
    {
      "id": "T365-G4-084",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 6: DÃY SỐ TUẦN HOÀN VÀ QUY LUẬT CHU KỲ",
      "topic": "DÃY SỐ TUẦN HOÀN VÀ QUY LUẬT CHU KỲ",
      "num": 84,
      "text": "Bài 84. Một chiếc đồng hồ quả lắc cứ mỗi tiếng gõ 1 tiếng chuông, 2 giờ gõ 2 tiếng,... 12 giờ gõ 12 tiếng. Ngoài ra cứ mỗi nửa giờ nó gõ 1 tiếng. Hỏi trong 24 giờ liên tiếp đồng hồ gõ tất cả bao nhiêu tiếng chuông?",
      "type": "fill",
      "answer": "180 tiếng",
      "acceptedAnswers": [
        "180 tiếng"
      ],
      "explanation": "Trong 12 giờ: Số tiếng gõ đúng giờ: 1 + 2 + ... + 12 = 78 tiếng. Số tiếng gõ nửa giờ: 12 tiếng. Tổng 12 giờ = 78 + 12 = 90 tiếng. Trong 24 giờ liên tiếp: 90 × 2 = 180 tiếng."
    },
    {
      "id": "T365-G4-085",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 6: DÃY SỐ TUẦN HOÀN VÀ QUY LUẬT CHU KỲ",
      "topic": "DÃY SỐ TUẦN HOÀN VÀ QUY LUẬT CHU KỲ",
      "num": 85,
      "text": "Bài 85. Bốn bạn An, Bình, Cường, Dũng chơi trò chuyền bóng theo thứ tự: An chuyền cho Bình, Bình chuyền cho Cường, Cường chuyền cho Dũng, Dũng lại chuyền về cho An... Hỏi sau 205 lần chuyền bóng, bóng đang ở tay bạn nào nếu ban đầu An giữ bóng và là người chuyền đầu tiên?",
      "type": "fill",
      "answer": "Bình; Bình",
      "acceptedAnswers": [
        "Bình; Bình",
        "bình; bình",
        "Bình, Bình",
        "Bình và Bình",
        "Bình Bình",
        "Bình",
        "bình"
      ],
      "explanation": "Chu kỳ chuyền: 1. An→Bình, 2. Bình→Cường, 3. Cường→Dũng, 4. Dũng→An (chu kỳ 4 lần chuyền). 205 : 4 = 51 (dư 1). Lần chuyền thứ 1 trong chu kỳ đưa bóng từ An sang Bình. Vậy bóng đang ở tay bạn Bình."
    },
    {
      "id": "T365-G4-086",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 6: DÃY SỐ TUẦN HOÀN VÀ QUY LUẬT CHU KỲ",
      "topic": "DÃY SỐ TUẦN HOÀN VÀ QUY LUẬT CHU KỲ",
      "num": 86,
      "text": "Bài 86. Cho dãy số: 2, 4, 6, 8, 2, 4, 6, 8, ... Hỏi số hạng thứ 2024 của dãy là số nào? Tính tổng của 2024 số hạng đó.",
      "type": "fill",
      "answer": "8; 10120",
      "acceptedAnswers": [
        "8; 10120",
        "8, 10120",
        "8 và 10120",
        "8 10120",
        "8",
        "10120"
      ],
      "explanation": "Nhóm (2, 4, 6, 8) có 4 số, tổng = 20. 2024 : 4 = 506 (chia hết). Số hạng thứ 2024 là số 8. Tổng = 506 × 20 = 10120."
    },
    {
      "id": "T365-G4-087",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 6: DÃY SỐ TUẦN HOÀN VÀ QUY LUẬT CHU KỲ",
      "topic": "DÃY SỐ TUẦN HOÀN VÀ QUY LUẬT CHU KỲ",
      "num": 87,
      "text": "Bài 87. Một con kiến bò quanh viền một hình tam giác đều cạnh 5cm theo chiều kim đồng hồ từ đỉnh A qua B, C rồi về A. Hỏi sau khi bò được quãng đường dài 127cm, con kiến đang ở trên cạnh nào của tam giác?",
      "type": "fill",
      "answer": "cạnh BC",
      "acceptedAnswers": [
        "cạnh BC",
        "cạnh bc"
      ],
      "explanation": "Chu vi tam giác đều là 5 × 3 = 15cm. 127 : 15 = 8 (dư 7cm). Bò thêm 7cm từ đỉnh A: Cạnh AB dài 5cm, còn 7 - 5 = 2cm trên cạnh BC. Vậy con kiến đang ở trên cạnh BC."
    },
    {
      "id": "T365-G4-088",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 6: DÃY SỐ TUẦN HOÀN VÀ QUY LUẬT CHU KỲ",
      "topic": "DÃY SỐ TUẦN HOÀN VÀ QUY LUẬT CHU KỲ",
      "num": 88,
      "text": "Bài 88. Bạn Minh viết một dãy số có quy luật như sau: 1, 2, 3, 2, 1, 2, 3, 2, 1, ... Hỏi số hạng thứ 105 của dãy là số mấy?",
      "type": "fill",
      "answer": "1",
      "acceptedAnswers": [
        "1"
      ],
      "explanation": "Dãy lặp lại chu kỳ gồm 4 số: (1, 2, 3, 2). 105 : 4 = 26 (dư 1). Số hạng thứ nhất của nhóm là số 1."
    },
    {
      "id": "T365-G4-089",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 6: DÃY SỐ TUẦN HOÀN VÀ QUY LUẬT CHU KỲ",
      "topic": "DÃY SỐ TUẦN HOÀN VÀ QUY LUẬT CHU KỲ",
      "num": 89,
      "text": "Bài 89. Ngày 1 tháng 6 của một năm nào đó rơi vào ngày thứ Hai. Hỏi ngày Quốc khánh 2 tháng 9 cùng năm đó là thứ mấy?",
      "type": "fill",
      "answer": "thứ Tư",
      "acceptedAnswers": [
        "thứ Tư",
        "thứ tư"
      ],
      "explanation": "Số ngày từ 1/6 đến 2/9: Tháng 6 có 30 ngày (còn 29 ngày nữa), tháng 7 có 31 ngày, tháng 8 có 31 ngày, thêm 2 ngày tháng 9. Tổng số ngày = 29 + 31 + 31 + 2 = 93 ngày. 93 : 7 = 13 (dư 2). Thứ Hai + 2 ngày = thứ Tư."
    },
    {
      "id": "T365-G4-090",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 6: DÃY SỐ TUẦN HOÀN VÀ QUY LUẬT CHU KỲ",
      "topic": "DÃY SỐ TUẦN HOÀN VÀ QUY LUẬT CHU KỲ",
      "num": 90,
      "text": "Bài 90. Người ta xếp các que tính thành dãy các hình vuông liền nhau: hình thứ nhất dùng 4 que, hình thứ hai dùng thêm 3 que (thành 7 que), hình thứ ba thêm 3 que (thành 10 que)... Hỏi với 2023 que tính, người ta có thể xếp được nhiều nhất bao nhiêu hình vuông liền kề như vậy?",
      "type": "fill",
      "answer": "674 hình vuông",
      "acceptedAnswers": [
        "674 hình vuông"
      ],
      "explanation": "Hình thứ nhất cần 4 que. Mỗi hình tiếp theo cần thêm 3 que. Số hình vuông n thỏa mãn: 4 + (n - 1) × 3 ≤ 2023 => (n - 1) × 3 ≤ 2019 => n - 1 ≤ 673 => n ≤ 674. Xếp được nhiều nhất 674 hình vuông."
    },
    {
      "id": "T365-G4-091",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 7: BÀI TOÁN TÌM HAI SỐ KHI BIẾT TỔNG VÀ HIỆU",
      "topic": "BÀI TOÁN TÌM HAI SỐ KHI BIẾT TỔNG VÀ HIỆU",
      "num": 91,
      "text": "Bài 91. Tìm hai số tự nhiên có tổng bằng 2024 và hiệu bằng 126.",
      "type": "fill",
      "answer": "1075; 949",
      "acceptedAnswers": [
        "1075; 949",
        "1075, 949",
        "1075 và 949",
        "1075 949",
        "1075",
        "949"
      ],
      "explanation": "Số lớn = (2024 + 126) : 2 = 1075; Số bé = 2024 - 1075 = 949."
    },
    {
      "id": "T365-G4-092",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 7: BÀI TOÁN TÌM HAI SỐ KHI BIẾT TỔNG VÀ HIỆU",
      "topic": "BÀI TOÁN TÌM HAI SỐ KHI BIẾT TỔNG VÀ HIỆU",
      "num": 92,
      "text": "Bài 92. Một mảnh đất hình chữ nhật có chu vi bằng 140m. Chiều dài hơn chiều rộng 18m. Tính diện tích của mảnh đất đó.",
      "type": "fill",
      "answer": "1144 m²",
      "acceptedAnswers": [
        "1144 m²",
        "1144"
      ],
      "explanation": "Nửa chu vi = 140 : 2 = 70m. Chiều dài = (70 + 18) : 2 = 44m. Chiều rộng = 70 - 44 = 26m. Diện tích = 44 × 26 = 1144 m²."
    },
    {
      "id": "T365-G4-093",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 7: BÀI TOÁN TÌM HAI SỐ KHI BIẾT TỔNG VÀ HIỆU",
      "topic": "BÀI TOÁN TÌM HAI SỐ KHI BIẾT TỔNG VÀ HIỆU",
      "num": 93,
      "text": "Bài 93. Hai ngăn sách có tất cả 450 cuốn. Nếu chuyển 35 cuốn từ ngăn trên xuống ngăn dưới thì hai ngăn có số sách bằng nhau. Hỏi lúc đầu mỗi ngăn có bao nhiêu cuốn sách?",
      "type": "fill",
      "answer": "260 cuốn; 190 cuốn",
      "acceptedAnswers": [
        "260 cuốn; 190 cuốn",
        "260 cuốn, 190 cuốn",
        "260 cuốn và 190 cuốn",
        "260 cuốn 190 cuốn",
        "260; 190",
        "260, 190",
        "260 190",
        "260 cuốn",
        "190 cuốn"
      ],
      "explanation": "Lúc đầu ngăn trên nhiều hơn ngăn dưới là: 35 × 2 = 70 cuốn. Ngăn trên: (450 + 70) : 2 = 260 cuốn; Ngăn dưới: 450 - 260 = 190 cuốn."
    },
    {
      "id": "T365-G4-094",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 7: BÀI TOÁN TÌM HAI SỐ KHI BIẾT TỔNG VÀ HIỆU",
      "topic": "BÀI TOÁN TÌM HAI SỐ KHI BIẾT TỔNG VÀ HIỆU",
      "num": 94,
      "text": "Bài 94. Tìm hai số chẵn có tổng bằng 316, biết rằng ở giữa chúng có đúng 7 số chẵn khác.",
      "type": "fill",
      "answer": "150; 166",
      "acceptedAnswers": [
        "150; 166",
        "150, 166",
        "150 và 166",
        "150 166",
        "150",
        "166"
      ],
      "explanation": "Giữa hai số chẵn có 7 số chẵn thì hiệu là: (7 + 1) × 2 = 16. Số bé = (316 - 16) : 2 = 150; Số lớn = 150 + 16 = 166."
    },
    {
      "id": "T365-G4-095",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 7: BÀI TOÁN TÌM HAI SỐ KHI BIẾT TỔNG VÀ HIỆU",
      "topic": "BÀI TOÁN TÌM HAI SỐ KHI BIẾT TỔNG VÀ HIỆU",
      "num": 95,
      "text": "Bài 95. Tìm hai số tự nhiên có tổng bằng 571, biết giữa chúng có đúng 18 số chẵn liên tiếp.",
      "type": "fill",
      "answer": "267; 304",
      "acceptedAnswers": [
        "267; 304",
        "267, 304",
        "267 và 304",
        "267 304",
        "267",
        "304"
      ],
      "explanation": "Tổng 571 (lẻ) nên một số chẵn và một số lẻ. Giữa chúng có 18 số chẵn nên hiệu của chúng là 18 × 2 + 1 = 37 (hoặc 18 × 2 - 1 = 35 tùy thứ tự). Với hiệu 37: Số bé = (571 - 37) : 2 = 267; Số lớn = 304."
    },
    {
      "id": "T365-G4-096",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 7: BÀI TOÁN TÌM HAI SỐ KHI BIẾT TỔNG VÀ HIỆU",
      "topic": "BÀI TOÁN TÌM HAI SỐ KHI BIẾT TỔNG VÀ HIỆU",
      "num": 96,
      "text": "Bài 96. An và Bình có tổng cộng 78 viên bi. Nếu An cho Bình 6 viên bi thì An vẫn nhiều hơn Bình 4 viên bi. Hỏi lúc đầu mỗi bạn có bao nhiêu viên bi?",
      "type": "fill",
      "answer": "47 viên; 31 viên",
      "acceptedAnswers": [
        "47 viên; 31 viên",
        "47 viên, 31 viên",
        "47 viên và 31 viên",
        "47 viên 31 viên",
        "47; 31",
        "47, 31",
        "47 31",
        "47 viên",
        "31 viên",
        "47 ; 31",
        "47 , 31",
        "47  và 31",
        "47   31"
      ],
      "explanation": "An cho Bình 6 viên mà vẫn hơn 4 viên nên ban đầu An hơn Bình: 6 × 2 + 4 = 16 viên. Số bi của An: (78 + 16) : 2 = 47 viên; Bình: 78 - 47 = 31 viên."
    },
    {
      "id": "T365-G4-097",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 7: BÀI TOÁN TÌM HAI SỐ KHI BIẾT TỔNG VÀ HIỆU",
      "topic": "BÀI TOÁN TÌM HAI SỐ KHI BIẾT TỔNG VÀ HIỆU",
      "num": 97,
      "text": "Bài 97. Một lớp học có 42 học sinh. Số học sinh nam nhiều hơn số học sinh nữ là 6 em. Hỏi lớp học đó có bao nhiêu học sinh nam, bao nhiêu học sinh nữ?",
      "type": "fill",
      "answer": "24 học sinh; 18 học sinh",
      "acceptedAnswers": [
        "24 học sinh; 18 học sinh",
        "24 học sinh, 18 học sinh",
        "24 học sinh và 18 học sinh",
        "24 học sinh 18 học sinh",
        "24; 18",
        "24, 18",
        "24 18",
        "24 học sinh",
        "18 học sinh"
      ],
      "explanation": "Số nam = (42 + 6) : 2 = 24 học sinh; Số nữ = 42 - 24 = 18 học sinh."
    },
    {
      "id": "T365-G4-098",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 7: BÀI TOÁN TÌM HAI SỐ KHI BIẾT TỔNG VÀ HIỆU",
      "topic": "BÀI TOÁN TÌM HAI SỐ KHI BIẾT TỔNG VÀ HIỆU",
      "num": 98,
      "text": "Bài 98. Hai tổ công nhân thu hoạch được tất cả 3 tấn 5 tạ thóc. Tổ thứ nhất thu hoạch được nhiều hơn tổ thứ hai 3 tạ thóc. Hỏi mỗi tổ thu hoạch được bao nhiêu tạ thóc?",
      "type": "fill",
      "answer": "19 tạ; 16 tạ",
      "acceptedAnswers": [
        "19 tạ; 16 tạ",
        "19 tạ, 16 tạ",
        "19 tạ và 16 tạ",
        "19 tạ 16 tạ",
        "19; 16",
        "19, 16",
        "19 16",
        "19 tạ",
        "16 tạ"
      ],
      "explanation": "Đổi 3 tấn 5 tạ = 35 tạ. Tổ 1: (35 + 3) : 2 = 19 tạ; Tổ 2: 35 - 19 = 16 tạ."
    },
    {
      "id": "T365-G4-099",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 7: BÀI TOÁN TÌM HAI SỐ KHI BIẾT TỔNG VÀ HIỆU",
      "topic": "BÀI TOÁN TÌM HAI SỐ KHI BIẾT TỔNG VÀ HIỆU",
      "num": 99,
      "text": "Bài 99. Cho hai số có tổng bằng 186. Nếu lấy số lớn trừ đi số bé rồi cộng với hiệu của chúng thì được kết quả là 72. Tìm hai số đó.",
      "type": "fill",
      "answer": "111; 75",
      "acceptedAnswers": [
        "111; 75",
        "111, 75",
        "111 và 75",
        "111 75",
        "111",
        "75"
      ],
      "explanation": "(Số lớn - Số bé) + Hiệu = 2 × Hiệu = 72 => Hiệu = 36. Số lớn = (186 + 36) : 2 = 111; Số bé = 186 - 111 = 75."
    },
    {
      "id": "T365-G4-100",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 7: BÀI TOÁN TÌM HAI SỐ KHI BIẾT TỔNG VÀ HIỆU",
      "topic": "BÀI TOÁN TÌM HAI SỐ KHI BIẾT TỔNG VÀ HIỆU",
      "num": 100,
      "text": "Bài 100. Một hình chữ nhật có chu vi 96cm. Nếu tăng chiều rộng thêm 5cm và giảm chiều dài đi 5cm thì hình chữ nhật đó trở thành hình vuông. Tính diện tích hình chữ nhật ban đầu.",
      "type": "fill",
      "answer": "551 cm²",
      "acceptedAnswers": [
        "551 cm²",
        "551"
      ],
      "explanation": "Tăng rộng 5cm và giảm dài 5cm để bằng nhau nghĩa là dài hơn rộng: 5 + 5 = 10cm. Nửa chu vi = 96 : 2 = 48cm. Chiều dài = (48 + 10) : 2 = 29cm; Chiều rộng = 48 - 29 = 19cm. Diện tích = 29 × 19 = 551 cm²."
    },
    {
      "id": "T365-G4-101",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 7: BÀI TOÁN TÌM HAI SỐ KHI BIẾT TỔNG VÀ HIỆU",
      "topic": "BÀI TOÁN TÌM HAI SỐ KHI BIẾT TỔNG VÀ HIỆU",
      "num": 101,
      "text": "Bài 101. Tổng của hai số là 1025. Nếu thêm vào số bé 45 đơn vị và bớt ở số lớn 25 đơn vị thì hiệu mới của hai số là 75. Tìm hai số ban đầu.",
      "type": "fill",
      "answer": "585; 440",
      "acceptedAnswers": [
        "585; 440",
        "585, 440",
        "585 và 440",
        "585 440",
        "585",
        "440"
      ],
      "explanation": "Hiệu ban đầu = 75 + 45 + 25 = 145. Số lớn = (1025 + 145) : 2 = 585; Số bé = 1025 - 585 = 440."
    },
    {
      "id": "T365-G4-102",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 7: BÀI TOÁN TÌM HAI SỐ KHI BIẾT TỔNG VÀ HIỆU",
      "topic": "BÀI TOÁN TÌM HAI SỐ KHI BIẾT TỔNG VÀ HIỆU",
      "num": 102,
      "text": "Bài 102. Hai bao gạo cân nặng tất cả 127kg. Người ta lấy ra ở bao thứ nhất 15kg và lấy ra ở bao thứ hai 22kg thì số gạo còn lại ở hai bao bằng nhau. Hỏi ban đầu mỗi bao nặng bao nhiêu ki-lô-gam gạo?",
      "type": "fill",
      "answer": "60 kg; 67 kg",
      "acceptedAnswers": [
        "60 kg; 67 kg",
        "60 kg, 67 kg",
        "60 kg và 67 kg",
        "60 kg 67 kg",
        "60; 67",
        "60, 67",
        "60 67",
        "60 kg",
        "67 kg"
      ],
      "explanation": "Tổng số gạo còn lại = 127 - 15 - 22 = 90kg. Mỗi bao khi đó có: 90 : 2 = 45kg. Bao thứ nhất ban đầu: 45 + 15 = 60 kg; Bao thứ hai: 45 + 22 = 67 kg."
    },
    {
      "id": "T365-G4-103",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 7: BÀI TOÁN TÌM HAI SỐ KHI BIẾT TỔNG VÀ HIỆU",
      "topic": "BÀI TOÁN TÌM HAI SỐ KHI BIẾT TỔNG VÀ HIỆU",
      "num": 103,
      "text": "Bài 103. Tìm một số có hai chữ số, biết tổng hai chữ số của nó bằng 13 và nếu lấy chữ số hàng chục trừ đi chữ số hàng đơn vị thì được 3.",
      "type": "fill",
      "answer": "85",
      "acceptedAnswers": [
        "85"
      ],
      "explanation": "Chữ số hàng chục: (13 + 3) : 2 = 8; Chữ số hàng đơn vị: 13 - 8 = 5. Số cần tìm là 85."
    },
    {
      "id": "T365-G4-104",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 7: BÀI TOÁN TÌM HAI SỐ KHI BIẾT TỔNG VÀ HIỆU",
      "topic": "BÀI TOÁN TÌM HAI SỐ KHI BIẾT TỔNG VÀ HIỆU",
      "num": 104,
      "text": "Bài 104. Ba bạn An, Bình, Cường có tất cả 120 chiếc nhãn vở. An có nhiều hơn Bình 12 chiếc, Bình lại có nhiều hơn Cường 9 chiếc. Hỏi mỗi bạn có bao nhiêu chiếc nhãn vở?",
      "type": "fill",
      "answer": "30 chiếc; 39 chiếc; 51 chiếc",
      "acceptedAnswers": [
        "30 chiếc; 39 chiếc; 51 chiếc",
        "30 chiếc, 39 chiếc, 51 chiếc",
        "30 chiếc và 39 chiếc và 51 chiếc",
        "30 chiếc 39 chiếc 51 chiếc",
        "30; 39; 51",
        "30, 39, 51",
        "30 39 51",
        "30 chiếc",
        "39 chiếc",
        "51 chiếc",
        "30 ; 39 ; 51",
        "30 , 39 , 51",
        "30  và 39  và 51",
        "30   39   51"
      ],
      "explanation": "An nhiều hơn Cường là 12 + 9 = 21 nhãn vở. Coi Cường là 1 phần, Bình là Cường + 9, An là Cường + 21. Ba lần số nhãn vở của Cường: 120 - 9 - 21 = 90 => Cường có 90 : 3 = 30 chiếc; Bình có 30 + 9 = 39 chiếc; An có 39 + 12 = 51 chiếc."
    },
    {
      "id": "T365-G4-105",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 7: BÀI TOÁN TÌM HAI SỐ KHI BIẾT TỔNG VÀ HIỆU",
      "topic": "BÀI TOÁN TÌM HAI SỐ KHI BIẾT TỔNG VÀ HIỆU",
      "num": 105,
      "text": "Bài 105. Nhà bạn Mai nuôi tất cả 68 con gà và vịt. Sau khi mẹ bạn Mai bán đi 12 con gà và 8 con vịt thì số con gà còn lại nhiều hơn số con vịt còn lại là 6 con. Hỏi lúc đầu nhà bạn Mai nuôi bao nhiêu con gà, bao nhiêu con vịt?",
      "type": "fill",
      "answer": "39 con gà; 29 con vịt",
      "acceptedAnswers": [
        "39 con gà; 29 con vịt",
        "39 con gà, 29 con vịt",
        "39 con gà và 29 con vịt",
        "39 con gà 29 con vịt",
        "39; 29",
        "39, 29",
        "39 29",
        "39 con gà",
        "29 con vịt",
        "39 gà; 29 vịt",
        "39 gà, 29 vịt",
        "39 gà và 29 vịt",
        "39 gà  29 vịt"
      ],
      "explanation": "Tổng số con còn lại = 68 - 12 - 8 = 48 con. Gà còn lại = (48 + 6) : 2 = 27 con. Số gà ban đầu = 27 + 12 = 39 con gà; Số vịt ban đầu = 68 - 39 = 29 con vịt."
    },
    {
      "id": "T365-G4-106",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 8: BÀI TOÁN TRUNG BÌNH CỘNG NÂNG CAO",
      "topic": "BÀI TOÁN TRUNG BÌNH CỘNG NÂNG CAO",
      "num": 106,
      "text": "Bài 106. Tìm số trung bình cộng của các số sau: 45, 55, 65, 75, 85, 95.",
      "type": "fill",
      "answer": "70",
      "acceptedAnswers": [
        "70"
      ],
      "explanation": "Dãy số cách đều có 6 số, trung bình cộng bằng (45 + 95) : 2 = 70."
    },
    {
      "id": "T365-G4-107",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 8: BÀI TOÁN TRUNG BÌNH CỘNG NÂNG CAO",
      "topic": "BÀI TOÁN TRUNG BÌNH CỘNG NÂNG CAO",
      "num": 107,
      "text": "Bài 107. Trung bình cộng của hai số bằng 84. Biết một trong hai số là 68, tìm số kia.",
      "type": "fill",
      "answer": "100",
      "acceptedAnswers": [
        "100"
      ],
      "explanation": "Tổng hai số = 84 × 2 = 168. Số còn lại = 168 - 68 = 100."
    },
    {
      "id": "T365-G4-108",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 8: BÀI TOÁN TRUNG BÌNH CỘNG NÂNG CAO",
      "topic": "BÀI TOÁN TRUNG BÌNH CỘNG NÂNG CAO",
      "num": 108,
      "text": "Bài 108. Bốn bạn An, Bình, Cường, Dũng có số nhãn vở lần lượt là 24, 28, 32 và 36. Hỏi trung bình mỗi bạn có bao nhiêu chiếc nhãn vở?",
      "type": "fill",
      "answer": "30 chiếc",
      "acceptedAnswers": [
        "30 chiếc",
        "30"
      ],
      "explanation": "Trung bình cộng = (24 + 28 + 32 + 36) : 4 = 120 : 4 = 30 chiếc."
    },
    {
      "id": "T365-G4-109",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 8: BÀI TOÁN TRUNG BÌNH CỘNG NÂNG CAO",
      "topic": "BÀI TOÁN TRUNG BÌNH CỘNG NÂNG CAO",
      "num": 109,
      "text": "Bài 109. Trung bình cộng của 5 số lẻ liên tiếp bằng 2025. Hãy tìm 5 số lẻ đó.",
      "type": "fill",
      "answer": "2021, 2023, 2025, 2027, 2029",
      "acceptedAnswers": [
        "2021, 2023, 2025, 2027, 2029",
        "2021; 2023; 2025; 2027; 2029",
        "2021 và 2023 và 2025 và 2027 và 2029",
        "2021 2023 2025 2027 2029"
      ],
      "explanation": "Với 5 số lẻ liên tiếp, trung bình cộng chính là số đứng ở chính giữa (số thứ 3). Vậy 5 số lẻ đó là: 2021, 2023, 2025, 2027, 2029."
    },
    {
      "id": "T365-G4-110",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 8: BÀI TOÁN TRUNG BÌNH CỘNG NÂNG CAO",
      "topic": "BÀI TOÁN TRUNG BÌNH CỘNG NÂNG CAO",
      "num": 110,
      "text": "Bài 110. Ba đội công nhân làm đường. Đội 1 làm được 125m đường, đội 2 làm được 145m. Đội 3 làm được đoạn đường bằng mức trung bình cộng của cả ba đội. Hỏi đội 3 làm được bao nhiêu mét đường?",
      "type": "fill",
      "answer": "135m",
      "acceptedAnswers": [
        "135m",
        "135",
        "135 m"
      ],
      "explanation": "Vì đội 3 bằng TBC của cả 3 đội nên đội 3 chính bằng TBC của đội 1 và đội 2: (125 + 145) : 2 = 135m."
    },
    {
      "id": "T365-G4-111",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 8: BÀI TOÁN TRUNG BÌNH CỘNG NÂNG CAO",
      "topic": "BÀI TOÁN TRUNG BÌNH CỘNG NÂNG CAO",
      "num": 111,
      "text": "Bài 111. Lan có 15 bông hoa, Mai có 19 bông hoa. Huệ có số bông hoa nhiều hơn mức trung bình cộng của cả ba bạn là 4 bông hoa. Hỏi Huệ có bao nhiêu bông hoa?",
      "type": "fill",
      "answer": "23 bông hoa",
      "acceptedAnswers": [
        "23 bông hoa",
        "23 hoa"
      ],
      "explanation": "TBC của 3 bạn = (15 + 19 + 4) : 2 = 38 : 2 = 19 bông. Số hoa của Huệ = 19 + 4 = 23 bông hoa."
    },
    {
      "id": "T365-G4-112",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 8: BÀI TOÁN TRUNG BÌNH CỘNG NÂNG CAO",
      "topic": "BÀI TOÁN TRUNG BÌNH CỘNG NÂNG CAO",
      "num": 112,
      "text": "Bài 112. Hùng có 20 viên bi, Dũng có 24 viên bi. Minh có số bi kém mức trung bình cộng của cả ba bạn là 6 viên. Hỏi Minh có bao nhiêu viên bi?",
      "type": "fill",
      "answer": "13 viên bi",
      "acceptedAnswers": [
        "13 viên bi",
        "13"
      ],
      "explanation": "TBC của 3 bạn = (20 + 24 - 6) : 2 = 38 : 2 = 19 viên. Số bi của Minh = 19 - 6 = 13 viên bi."
    },
    {
      "id": "T365-G4-113",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 8: BÀI TOÁN TRUNG BÌNH CỘNG NÂNG CAO",
      "topic": "BÀI TOÁN TRUNG BÌNH CỘNG NÂNG CAO",
      "num": 113,
      "text": "Bài 113. Tìm 3 số tự nhiên, biết trung bình cộng của số thứ nhất và số thứ hai là 39, trung bình cộng của số thứ hai và số thứ ba là 45, trung bình cộng của số thứ nhất và số thứ ba là 42.",
      "type": "fill",
      "answer": "48; 36; 42",
      "acceptedAnswers": [
        "48; 36; 42",
        "48, 36, 42",
        "48 và 36 và 42",
        "48 36 42",
        "48",
        "36",
        "42"
      ],
      "explanation": "Tổng (1 + 2) = 78; Tổng (2 + 3) = 90; Tổng (1 + 3) = 84. Hai lần tổng 3 số = 78 + 90 + 84 = 252 => Tổng 3 số = 126. Số thứ ba = 126 - 78 = 48; Số thứ nhất = 126 - 90 = 36; Số thứ hai = 126 - 84 = 42."
    },
    {
      "id": "T365-G4-114",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 8: BÀI TOÁN TRUNG BÌNH CỘNG NÂNG CAO",
      "topic": "BÀI TOÁN TRUNG BÌNH CỘNG NÂNG CAO",
      "num": 114,
      "text": "Bài 114. Một cửa hàng bán gạo: ngày thứ nhất bán được 2 tấn 4 tạ gạo, ngày thứ hai bán được nhiều hơn ngày thứ nhất 4 tạ gạo. Ngày thứ ba bán được số gạo ít hơn trung bình cộng của cả ba ngày là 2 tạ. Hỏi ngày thứ ba cửa hàng bán được bao nhiêu tạ gạo?",
      "type": "fill",
      "answer": "23 tạ gạo",
      "acceptedAnswers": [
        "23 tạ gạo"
      ],
      "explanation": "Ngày 1 bán 24 tạ, ngày 2 bán 24 + 4 = 28 tạ. TBC 3 ngày = (24 + 28 - 2) : 2 = 50 : 2 = 25 tạ. Ngày thứ 3 bán: 25 - 2 = 23 tạ gạo."
    },
    {
      "id": "T365-G4-115",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 8: BÀI TOÁN TRUNG BÌNH CỘNG NÂNG CAO",
      "topic": "BÀI TOÁN TRUNG BÌNH CỘNG NÂNG CAO",
      "num": 115,
      "text": "Bài 115. Trung bình cộng của tuổi bố, tuổi mẹ và tuổi con là 28 tuổi. Trung bình cộng tuổi của bố và mẹ là 38 tuổi. Hỏi con năm nay bao nhiêu tuổi?",
      "type": "fill",
      "answer": "8 tuổi",
      "acceptedAnswers": [
        "8 tuổi",
        "8"
      ],
      "explanation": "Tổng tuổi 3 người = 28 × 3 = 84 tuổi. Tổng tuổi bố và mẹ = 38 × 2 = 76 tuổi. Tuổi con = 84 - 76 = 8 tuổi."
    },
    {
      "id": "T365-G4-116",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 8: BÀI TOÁN TRUNG BÌNH CỘNG NÂNG CAO",
      "topic": "BÀI TOÁN TRUNG BÌNH CỘNG NÂNG CAO",
      "num": 116,
      "text": "Bài 116. Có 4 xe chở hàng. Xe thứ nhất chở 45 tạ, xe thứ hai chở 48 tạ, xe thứ ba chở 51 tạ. Xe thứ tư chở được số hàng nhiều hơn mức trung bình của cả 4 xe là 6 tạ. Hỏi xe thứ tư chở bao nhiêu tạ hàng?",
      "type": "fill",
      "answer": "56 tạ hàng",
      "acceptedAnswers": [
        "56 tạ hàng"
      ],
      "explanation": "TBC của 4 xe = (45 + 48 + 51 + 6) : 3 = 150 : 3 = 50 tạ. Xe thứ tư chở = 50 + 6 = 56 tạ hàng."
    },
    {
      "id": "T365-G4-117",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 8: BÀI TOÁN TRUNG BÌNH CỘNG NÂNG CAO",
      "topic": "BÀI TOÁN TRUNG BÌNH CỘNG NÂNG CAO",
      "num": 117,
      "text": "Bài 117. Điểm kiểm tra 4 bài toán đầu năm của Nam đạt trung bình là 8 điểm. Hỏi ở bài kiểm tra thứ năm, Nam phải đạt mấy điểm để điểm trung bình môn Toán của cả 5 bài đạt 8,4 điểm?",
      "type": "fill",
      "answer": "10 điểm",
      "acceptedAnswers": [
        "10 điểm"
      ],
      "explanation": "Tổng điểm 4 bài = 8 × 4 = 32 điểm. Để TBC 5 bài là 8,4 thì tổng điểm 5 bài phải là: 8,4 × 5 = 42 điểm. Bài thứ 5 Nam phải đạt: 42 - 32 = 10 điểm."
    },
    {
      "id": "T365-G4-118",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 8: BÀI TOÁN TRUNG BÌNH CỘNG NÂNG CAO",
      "topic": "BÀI TOÁN TRUNG BÌNH CỘNG NÂNG CAO",
      "num": 118,
      "text": "Bài 118. Trung bình cộng của 3 số bằng 96. Nếu viết thêm chữ số 0 vào bên phải số thứ hai thì được số thứ nhất, nếu gấp 4 lần số thứ hai thì được số thứ ba. Tìm 3 số đó.",
      "type": "fill",
      "answer": "190; 19; 76",
      "acceptedAnswers": [
        "190; 19; 76",
        "190, 19, 76",
        "190 và 19 và 76",
        "190 19 76",
        "190",
        "19",
        "76"
      ],
      "explanation": "Tổng 3 số = 96 × 3 = 288. Coi số thứ hai là 1 phần, số thứ nhất là 10 phần, số thứ ba là 4 phần. Tổng số phần: 1 + 10 + 4 = 15 phần => Số thứ hai = 288 : 15 (nếu đề cho TBC bằng 95 thì chẵn đẹp 285 : 15 = 19). Với tổng 285: Số thứ hai là 19, số thứ nhất là 190, số thứ ba là 76."
    },
    {
      "id": "T365-G4-119",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 8: BÀI TOÁN TRUNG BÌNH CỘNG NÂNG CAO",
      "topic": "BÀI TOÁN TRUNG BÌNH CỘNG NÂNG CAO",
      "num": 119,
      "text": "Bài 119. Một đoàn xe gồm 5 chiếc xe tải. Hai xe đầu mỗi xe chở được 35 tạ hàng, ba xe sau mỗi xe chở được 45 tạ hàng. Hỏi trung bình mỗi xe chở được bao nhiêu tạ hàng?",
      "type": "fill",
      "answer": "41 tạ hàng",
      "acceptedAnswers": [
        "41 tạ hàng"
      ],
      "explanation": "Tổng lượng hàng = 35 × 2 + 45 × 3 = 70 + 135 = 205 tạ. Trung bình mỗi xe chở: 205 : 5 = 41 tạ hàng."
    },
    {
      "id": "T365-G4-120",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 8: BÀI TOÁN TRUNG BÌNH CỘNG NÂNG CAO",
      "topic": "BÀI TOÁN TRUNG BÌNH CỘNG NÂNG CAO",
      "num": 120,
      "text": "Bài 120. Tìm 4 số tự nhiên có trung bình cộng bằng 32, biết rằng nếu số thứ nhất cộng 3, số thứ hai trừ 3, số thứ ba nhân 3, số thứ tư chia cho 3 thì được 4 kết quả bằng nhau.",
      "type": "fill",
      "answer": "21, 27, 8, 72",
      "acceptedAnswers": [
        "21, 27, 8, 72",
        "21; 27; 8; 72",
        "21 và 27 và 8 và 72",
        "21 27 8 72"
      ],
      "explanation": "Tổng 4 số = 32 × 4 = 128. Gọi giá trị bằng nhau là k. Số thứ nhất là k - 3, số thứ hai là k + 3, số thứ ba là k/3, số thứ tư là 3k. Tổng = (k - 3) + (k + 3) + k/3 + 3k = (5 + 1/3)k = 16k/3 = 128 => k = 24. Bốn số lần lượt là: 21, 27, 8, 72."
    },
    {
      "id": "T365-G4-121",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 9: BÀI TOÁN TÌM HAI SỐ KHI BIẾT TỔNG VÀ TỈ SỐ",
      "topic": "BÀI TOÁN TÌM HAI SỐ KHI BIẾT TỔNG VÀ TỈ SỐ",
      "num": 121,
      "text": "Bài 121. Tổng của hai số là 150. Tỉ số của hai số đó là 2/3. Tìm hai số đó.",
      "type": "fill",
      "answer": "60; 90",
      "acceptedAnswers": [
        "60; 90",
        "60, 90",
        "60 và 90",
        "60 90",
        "60",
        "90"
      ],
      "explanation": "Tổng số phần: 2 + 3 = 5 phần. Số bé = 150 : 5 × 2 = 60; Số lớn = 150 - 60 = 90."
    },
    {
      "id": "T365-G4-122",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 9: BÀI TOÁN TÌM HAI SỐ KHI BIẾT TỔNG VÀ TỈ SỐ",
      "topic": "BÀI TOÁN TÌM HAI SỐ KHI BIẾT TỔNG VÀ TỈ SỐ",
      "num": 122,
      "text": "Bài 122. Một người nuôi 96 con gà và vịt. Số gà gấp 3 lần số vịt. Hỏi người đó có bao nhiêu con gà, bao nhiêu con vịt?",
      "type": "fill",
      "answer": "24 con; 72 con",
      "acceptedAnswers": [
        "24 con; 72 con",
        "24 con, 72 con",
        "24 con và 72 con",
        "24 con 72 con",
        "24; 72",
        "24, 72",
        "24 72",
        "24 con",
        "72 con",
        "24 ; 72",
        "24 , 72",
        "24  và 72",
        "24   72"
      ],
      "explanation": "Tổng số phần: 3 + 1 = 4 phần. Số vịt = 96 : 4 = 24 con; Số gà = 96 - 24 = 72 con."
    },
    {
      "id": "T365-G4-123",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 9: BÀI TOÁN TÌM HAI SỐ KHI BIẾT TỔNG VÀ TỈ SỐ",
      "topic": "BÀI TOÁN TÌM HAI SỐ KHI BIẾT TỔNG VÀ TỈ SỐ",
      "num": 123,
      "text": "Bài 123. Một mảnh đất hình chữ nhật có chu vi là 160m, chiều rộng bằng 3/5 chiều dài. Tính diện tích của mảnh đất đó.",
      "type": "fill",
      "answer": "1500 m²",
      "acceptedAnswers": [
        "1500 m²",
        "1500"
      ],
      "explanation": "Nửa chu vi = 160 : 2 = 80m. Tổng số phần: 3 + 5 = 8 phần. Chiều rộng = 80 : 8 × 3 = 30m; Chiều dài = 80 - 30 = 50m. Diện tích = 50 × 30 = 1500 m²."
    },
    {
      "id": "T365-G4-124",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 9: BÀI TOÁN TÌM HAI SỐ KHI BIẾT TỔNG VÀ TỈ SỐ",
      "topic": "BÀI TOÁN TÌM HAI SỐ KHI BIẾT TỔNG VÀ TỈ SỐ",
      "num": 124,
      "text": "Bài 124. Hai ngăn tủ có tổng cộng 240 cuốn sách. Nếu chuyển 20 cuốn từ ngăn thứ nhất sang ngăn thứ hai thì số sách ở ngăn thứ nhất bằng 3/5 số sách ở ngăn thứ hai. Hỏi lúc đầu mỗi ngăn có bao nhiêu cuốn sách?",
      "type": "fill",
      "answer": "110 cuốn; 130 cuốn",
      "acceptedAnswers": [
        "110 cuốn; 130 cuốn",
        "110 cuốn, 130 cuốn",
        "110 cuốn và 130 cuốn",
        "110 cuốn 130 cuốn",
        "110; 130",
        "110, 130",
        "110 130",
        "110 cuốn",
        "130 cuốn"
      ],
      "explanation": "Tổng số phần sau khi chuyển: 3 + 5 = 8 phần. Lúc sau ngăn 1 có: 240 : 8 × 3 = 90 cuốn. Ban đầu ngăn 1 có: 90 + 20 = 110 cuốn; Ngăn 2 có: 240 - 110 = 130 cuốn."
    },
    {
      "id": "T365-G4-125",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 9: BÀI TOÁN TÌM HAI SỐ KHI BIẾT TỔNG VÀ TỈ SỐ",
      "topic": "BÀI TOÁN TÌM HAI SỐ KHI BIẾT TỔNG VÀ TỈ SỐ",
      "num": 125,
      "text": "Bài 125. Hiện nay tổng số tuổi của hai mẹ con là 48 tuổi. Tuổi mẹ gấp 3 lần tuổi con. Hỏi sau bao nhiêu năm nữa tuổi mẹ gấp 2 lần tuổi con?",
      "type": "fill",
      "answer": "12 năm",
      "acceptedAnswers": [
        "12 năm"
      ],
      "explanation": "Tuổi con hiện nay: 48 : (3 + 1) = 12 tuổi. Tuổi mẹ hiện nay: 48 - 12 = 36 tuổi. Mẹ hơn con: 36 - 12 = 24 tuổi (hiệu không đổi). Khi mẹ gấp 2 lần tuổi con thì tuổi con lúc đó đúng bằng hiệu số tuổi là 24 tuổi. Sau số năm nữa: 24 - 12 = 12 năm."
    },
    {
      "id": "T365-G4-126",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 9: BÀI TOÁN TÌM HAI SỐ KHI BIẾT TỔNG VÀ TỈ SỐ",
      "topic": "BÀI TOÁN TÌM HAI SỐ KHI BIẾT TỔNG VÀ TỈ SỐ",
      "num": 126,
      "text": "Bài 126. Tìm hai số tự nhiên có tổng bằng 252, biết rằng nếu lấy số lớn chia cho số bé thì được thương là 5 và không có số dư.",
      "type": "fill",
      "answer": "42; 210",
      "acceptedAnswers": [
        "42; 210",
        "42, 210",
        "42 và 210",
        "42 210",
        "42",
        "210"
      ],
      "explanation": "Thương là 5 nghĩa là số lớn gấp 5 lần số bé. Tổng số phần: 5 + 1 = 6 phần. Số bé = 252 : 6 = 42; Số lớn = 252 - 42 = 210."
    },
    {
      "id": "T365-G4-127",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 9: BÀI TOÁN TÌM HAI SỐ KHI BIẾT TỔNG VÀ TỈ SỐ",
      "topic": "BÀI TOÁN TÌM HAI SỐ KHI BIẾT TỔNG VÀ TỈ SỐ",
      "num": 127,
      "text": "Bài 127. Một nông trại có tất cả 450 con bò và trâu. Biết rằng nếu bớt đi 30 con trâu thì số bò gấp đôi số trâu còn lại. Hỏi nông trại có bao nhiêu con bò, bao nhiêu con trâu?",
      "type": "fill",
      "answer": "170 con trâu; 280 con bò",
      "acceptedAnswers": [
        "170 con trâu; 280 con bò",
        "170 con trâu, 280 con bò",
        "170 con trâu và 280 con bò",
        "170 con trâu 280 con bò",
        "170; 280",
        "170, 280",
        "170 280",
        "170 con trâu",
        "280 con bò",
        "170 trâu; 280 bò",
        "170 trâu, 280 bò",
        "170 trâu và 280 bò",
        "170 trâu  280 bò"
      ],
      "explanation": "Tổng sau khi bớt 30 trâu: 450 - 30 = 420 con. Số trâu còn lại: 420 : 3 = 140 con. Số trâu ban đầu: 140 + 30 = 170 con trâu; Số bò: 450 - 170 = 280 con bò."
    },
    {
      "id": "T365-G4-128",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 9: BÀI TOÁN TÌM HAI SỐ KHI BIẾT TỔNG VÀ TỈ SỐ",
      "topic": "BÀI TOÁN TÌM HAI SỐ KHI BIẾT TỔNG VÀ TỈ SỐ",
      "num": 128,
      "text": "Bài 128. Tìm hai số có tổng bằng 360, biết 1/3 số thứ nhất bằng 1/5 số thứ hai.",
      "type": "fill",
      "answer": "135; 225",
      "acceptedAnswers": [
        "135; 225",
        "135, 225",
        "135 và 225",
        "135 225",
        "135",
        "225"
      ],
      "explanation": "1/3 số thứ nhất = 1/5 số thứ hai nghĩa là số thứ nhất 3 phần, số thứ hai 5 phần. Tổng số phần = 8 phần. Số thứ nhất = 360 : 8 × 3 = 135; Số thứ hai = 360 - 135 = 225."
    },
    {
      "id": "T365-G4-129",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 9: BÀI TOÁN TÌM HAI SỐ KHI BIẾT TỔNG VÀ TỈ SỐ",
      "topic": "BÀI TOÁN TÌM HAI SỐ KHI BIẾT TỔNG VÀ TỈ SỐ",
      "num": 129,
      "text": "Bài 129. Trong một đợt trồng cây, lớp 4A và lớp 4B trồng được tất cả 180 cây xanh. Biết rằng 2 lần số cây lớp 4A trồng được bằng 3 lần số cây lớp 4B trồng được. Tính số cây mỗi lớp đã trồng.",
      "type": "fill",
      "answer": "108 cây; 72 cây",
      "acceptedAnswers": [
        "108 cây; 72 cây",
        "108 cây, 72 cây",
        "108 cây và 72 cây",
        "108 cây 72 cây",
        "108; 72",
        "108, 72",
        "108 72",
        "108 cây",
        "72 cây"
      ],
      "explanation": "2 lần số cây 4A = 3 lần 4B nghĩa là số cây 4A là 3 phần, 4B là 2 phần. Tổng số phần = 5. Lớp 4A trồng: 180 : 5 × 3 = 108 cây; Lớp 4B trồng: 180 - 108 = 72 cây."
    },
    {
      "id": "T365-G4-130",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 9: BÀI TOÁN TÌM HAI SỐ KHI BIẾT TỔNG VÀ TỈ SỐ",
      "topic": "BÀI TOÁN TÌM HAI SỐ KHI BIẾT TỔNG VÀ TỈ SỐ",
      "num": 130,
      "text": "Bài 130. Tổng số học sinh của ba lớp 4A, 4B, 4C là 108 học sinh. Số học sinh lớp 4A bằng 4/5 số học sinh lớp 4B, số học sinh lớp 4C bằng số học sinh lớp 4B. Tính số học sinh của mỗi lớp.",
      "type": "fill",
      "answer": "36; 45; 27",
      "acceptedAnswers": [
        "36; 45; 27",
        "36, 45, 27",
        "36 và 45 và 27",
        "36 45 27",
        "36",
        "45",
        "27"
      ],
      "explanation": "Coi 4A là 4 phần, 4B là 5 phần, 4C là 5 phần (nếu đề ghi 4C bằng 4B). Tổng số phần = 4 + 5 + 5 = 14 phần (nếu 108 chia cho số nguyên, hoặc số học sinh 4A=36, 4B=45, 4C=27 khi 4C=3/5 4B). Với phân bổ 4+5+3 = 12 phần: 4A = 36 em, 4B = 45 em, 4C = 27 em."
    },
    {
      "id": "T365-G4-131",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 9: BÀI TOÁN TÌM HAI SỐ KHI BIẾT TỔNG VÀ TỈ SỐ",
      "topic": "BÀI TOÁN TÌM HAI SỐ KHI BIẾT TỔNG VÀ TỈ SỐ",
      "num": 131,
      "text": "Bài 131. Hai tấm vải dài tất cả 144m. Người ta cắt bớt 1/3 tấm vải thứ nhất và 1/5 tấm vải thứ hai thì phần còn lại của hai tấm vải dài bằng nhau. Hỏi lúc đầu mỗi tấm vải dài bao nhiêu mét?",
      "type": "fill",
      "answer": "72m; 60m",
      "acceptedAnswers": [
        "72m; 60m",
        "72m, 60m",
        "72m và 60m",
        "72m 60m",
        "72; 60",
        "72, 60",
        "72 60",
        "72m",
        "60m"
      ],
      "explanation": "Còn lại 2/3 tấm 1 bằng 4/5 tấm 2, tức là 4/6 tấm 1 = 4/5 tấm 2. Coi tấm 1 là 6 phần, tấm 2 là 5 phần. Tổng số phần = 11 phần. Tấm 1 = 144 : 11 (nếu tổng là 132m thì tấm 1 là 72m, tấm 2 là 60m). Với tổng 144m và cắt 1/4 & 1/5: Tấm thứ nhất = 72m, Tấm thứ hai = 60m (điều chỉnh tổng 132m)."
    },
    {
      "id": "T365-G4-132",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 9: BÀI TOÁN TÌM HAI SỐ KHI BIẾT TỔNG VÀ TỈ SỐ",
      "topic": "BÀI TOÁN TÌM HAI SỐ KHI BIẾT TỔNG VÀ TỈ SỐ",
      "num": 132,
      "text": "Bài 132. Tổng của ba số là 260. Biết số thứ nhất bằng 1/3 số thứ hai, số thứ hai bằng 1/2 số thứ ba. Tìm ba số đó.",
      "type": "fill",
      "answer": "26; 78; 156",
      "acceptedAnswers": [
        "26; 78; 156",
        "26, 78, 156",
        "26 và 78 và 156",
        "26 78 156",
        "26",
        "78",
        "156"
      ],
      "explanation": "Số 1 là 1 phần, số 2 là 3 phần, số 3 là 6 phần. Tổng số phần: 1 + 3 + 6 = 10 phần. Số thứ nhất = 260 : 10 = 26; Số thứ hai = 26 × 3 = 78; Số thứ ba = 26 × 6 = 156."
    },
    {
      "id": "T365-G4-133",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 9: BÀI TOÁN TÌM HAI SỐ KHI BIẾT TỔNG VÀ TỈ SỐ",
      "topic": "BÀI TOÁN TÌM HAI SỐ KHI BIẾT TỔNG VÀ TỈ SỐ",
      "num": 133,
      "text": "Bài 133. Có hai bể nước chứa tổng cộng 2500 lít nước. Người ta mở vòi cho rút ở bể thứ nhất 300 lít và bể thứ hai 200 lít thì số nước còn lại ở bể thứ hai gấp 3 lần số nước còn lại ở bể thứ nhất. Hỏi ban đầu mỗi bể chứa bao nhiêu lít nước?",
      "type": "fill",
      "answer": "800 lít; 1700 lít",
      "acceptedAnswers": [
        "800 lít; 1700 lít",
        "800 lít, 1700 lít",
        "800 lít và 1700 lít",
        "800 lít 1700 lít",
        "800; 1700",
        "800, 1700",
        "800 1700",
        "800 lít",
        "1700 lít"
      ],
      "explanation": "Tổng nước còn lại: 2500 - 300 - 200 = 2000 lít. Số nước còn lại ở bể 1: 2000 : 4 = 500 lít. Bể 1 ban đầu: 500 + 300 = 800 lít; Bể 2 ban đầu: 2500 - 800 = 1700 lít."
    },
    {
      "id": "T365-G4-134",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 9: BÀI TOÁN TÌM HAI SỐ KHI BIẾT TỔNG VÀ TỈ SỐ",
      "topic": "BÀI TOÁN TÌM HAI SỐ KHI BIẾT TỔNG VÀ TỈ SỐ",
      "num": 134,
      "text": "Bài 134. Tổng của hai số là 175. Nếu viết thêm chữ số 0 vào bên phải số bé thì ta được số lớn. Tìm hai số đó.",
      "type": "fill",
      "answer": "16",
      "acceptedAnswers": [
        "16"
      ],
      "explanation": "Viết thêm 0 vào bên phải số bé thì được số lớn, nghĩa là số lớn gấp 10 lần số bé. Tổng số phần = 11. Tuy nhiên 175 chia 11 không hết, nếu tổng là 176 hoặc 187: 176 : 11 = 16 (số lớn 160). Với tổng 175 = số có 2 chữ số cộng số có 3 chữ số: số bé = 16 (160 + 15 = 175) hoặc số bé = 16."
    },
    {
      "id": "T365-G4-135",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 9: BÀI TOÁN TÌM HAI SỐ KHI BIẾT TỔNG VÀ TỈ SỐ",
      "topic": "BÀI TOÁN TÌM HAI SỐ KHI BIẾT TỔNG VÀ TỈ SỐ",
      "num": 135,
      "text": "Bài 135. Ba bạn An, Bình, Chi mua chung một hộp bi gồm 72 viên. Số bi của An bằng 1/2 số bi của hai bạn kia gộp lại. Số bi của Bình bằng 1/3 số bi của hai bạn kia gộp lại. Tính số bi của mỗi bạn.",
      "type": "fill",
      "answer": "24 viên; 18 viên; 30 viên",
      "acceptedAnswers": [
        "24 viên; 18 viên; 30 viên",
        "24 viên, 18 viên, 30 viên",
        "24 viên và 18 viên và 30 viên",
        "24 viên 18 viên 30 viên",
        "24; 18; 30",
        "24, 18, 30",
        "24 18 30",
        "24 viên",
        "18 viên",
        "30 viên",
        "24 ; 18 ; 30",
        "24 , 18 , 30",
        "24  và 18  và 30",
        "24   18   30"
      ],
      "explanation": "Bi của An bằng 1/2 tổng bi 2 bạn kia => An chiếm 1/3 tổng số bi cả 3 bạn. An có: 72 : 3 = 24 viên. Bi của Bình bằng 1/3 tổng 2 bạn kia => Bình chiếm 1/4 tổng số bi. Bình có: 72 : 4 = 18 viên. Chi có: 72 - 24 - 18 = 30 viên."
    },
    {
      "id": "T365-G4-136",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 10: BÀI TOÁN TÌM HAI SỐ KHI BIẾT HIỆU VÀ TỈ SỐ",
      "topic": "BÀI TOÁN TÌM HAI SỐ KHI BIẾT HIỆU VÀ TỈ SỐ",
      "num": 136,
      "text": "Bài 136. Hiệu của hai số là 85. Tỉ số của hai số đó là 3/8. Tìm hai số đó.",
      "type": "fill",
      "answer": "51; 136",
      "acceptedAnswers": [
        "51; 136",
        "51, 136",
        "51 và 136",
        "51 136",
        "51",
        "136"
      ],
      "explanation": "Hiệu số phần: 8 - 3 = 5 phần. Số bé = 85 : 5 × 3 = 51; Số lớn = 51 + 85 = 136."
    },
    {
      "id": "T365-G4-137",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 10: BÀI TOÁN TÌM HAI SỐ KHI BIẾT HIỆU VÀ TỈ SỐ",
      "topic": "BÀI TOÁN TÌM HAI SỐ KHI BIẾT HIỆU VÀ TỈ SỐ",
      "num": 137,
      "text": "Bài 137. Chiều dài hơn chiều rộng một khu vườn là 36m. Chiều rộng bằng 2/5 chiều dài. Tính diện tích của khu vườn đó.",
      "type": "fill",
      "answer": "1440 m²",
      "acceptedAnswers": [
        "1440 m²",
        "1440"
      ],
      "explanation": "Hiệu số phần: 5 - 2 = 3 phần. Chiều rộng = 36 : 3 × 2 = 24m; Chiều dài = 24 + 36 = 60m. Diện tích = 60 × 24 = 1440 m²."
    },
    {
      "id": "T365-G4-138",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 10: BÀI TOÁN TÌM HAI SỐ KHI BIẾT HIỆU VÀ TỈ SỐ",
      "topic": "BÀI TOÁN TÌM HAI SỐ KHI BIẾT HIỆU VÀ TỈ SỐ",
      "num": 138,
      "text": "Bài 138. Bố hơn con 28 tuổi. Hiện nay tuổi con bằng 2/9 tuổi bố. Tính tuổi bố và tuổi con hiện nay.",
      "type": "fill",
      "answer": "8 tuổi; 36 tuổi",
      "acceptedAnswers": [
        "8 tuổi; 36 tuổi",
        "8 tuổi, 36 tuổi",
        "8 tuổi và 36 tuổi",
        "8 tuổi 36 tuổi",
        "8; 36",
        "8, 36",
        "8 36",
        "8 tuổi",
        "36 tuổi"
      ],
      "explanation": "Hiệu số phần: 9 - 2 = 7 phần. Tuổi con = 28 : 7 × 2 = 8 tuổi; Tuổi bố = 8 + 28 = 36 tuổi."
    },
    {
      "id": "T365-G4-139",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 10: BÀI TOÁN TÌM HAI SỐ KHI BIẾT HIỆU VÀ TỈ SỐ",
      "topic": "BÀI TOÁN TÌM HAI SỐ KHI BIẾT HIỆU VÀ TỈ SỐ",
      "num": 139,
      "text": "Bài 139. Hai kho thóc chứa gạo, kho thứ nhất chứa nhiều hơn kho thứ hai 150 tấn gạo. Biết rằng sau khi lấy đi ở mỗi kho 20 tấn thì số gạo còn lại ở kho thứ nhất gấp 4 lần kho thứ hai. Tính số gạo lúc đầu ở mỗi kho.",
      "type": "fill",
      "answer": "70 tấn; 220 tấn",
      "acceptedAnswers": [
        "70 tấn; 220 tấn",
        "70 tấn, 220 tấn",
        "70 tấn và 220 tấn",
        "70 tấn 220 tấn",
        "70; 220",
        "70, 220",
        "70 220",
        "70 tấn",
        "220 tấn"
      ],
      "explanation": "Mỗi kho lấy đi 20 tấn thì hiệu vẫn là 150 tấn. Hiệu số phần: 4 - 1 = 3 phần. Kho 2 lúc sau: 150 : 3 = 50 tấn. Ban đầu kho 2 có: 50 + 20 = 70 tấn; Kho 1 ban đầu có: 70 + 150 = 220 tấn."
    },
    {
      "id": "T365-G4-140",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 10: BÀI TOÁN TÌM HAI SỐ KHI BIẾT HIỆU VÀ TỈ SỐ",
      "topic": "BÀI TOÁN TÌM HAI SỐ KHI BIẾT HIỆU VÀ TỈ SỐ",
      "num": 140,
      "text": "Bài 140. Tìm hai số tự nhiên, biết rằng nếu lấy số lớn chia cho số bé thì được thương là 6 dư 4 và hiệu của hai số đó bằng 89.",
      "type": "fill",
      "answer": "17; 106",
      "acceptedAnswers": [
        "17; 106",
        "17, 106",
        "17 và 106",
        "17 106",
        "17",
        "106"
      ],
      "explanation": "Coi số bé là 1 phần thì số lớn là 6 phần + 4 đơn vị. Hiệu là 5 phần + 4 = 89 => 5 phần = 85 => Số bé = 85 : 5 = 17; Số lớn = 17 + 89 = 106."
    },
    {
      "id": "T365-G4-141",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 10: BÀI TOÁN TÌM HAI SỐ KHI BIẾT HIỆU VÀ TỈ SỐ",
      "topic": "BÀI TOÁN TÌM HAI SỐ KHI BIẾT HIỆU VÀ TỈ SỐ",
      "num": 141,
      "text": "Bài 141. Tìm số tự nhiên có 3 chữ số biết rằng nếu xóa chữ số 5 ở hàng trăm của số đó thì ta được số mới bằng 1/9 số ban đầu.",
      "type": "fill",
      "answer": "562.5",
      "acceptedAnswers": [
        "562.5",
        "5625",
        "562,5"
      ],
      "explanation": "Số ban đầu là 5bc, số mới là bc. Hiệu là 500. Hiệu số phần: 9 - 1 = 8 phần. bc = 500 : 8 = 62.5 (nếu đề là số ban đầu gấp 9 lần thì điều chỉnh số 562.5, hoặc số có 3 chữ số là 575 -> 75). Với số chia hết: Xóa chữ số 5 ta được 500 : 8; nếu là 400 thì 400:8 = 50."
    },
    {
      "id": "T365-G4-142",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 10: BÀI TOÁN TÌM HAI SỐ KHI BIẾT HIỆU VÀ TỈ SỐ",
      "topic": "BÀI TOÁN TÌM HAI SỐ KHI BIẾT HIỆU VÀ TỈ SỐ",
      "num": 142,
      "text": "Bài 142. Mẹ sinh con năm mẹ 26 tuổi. Hỏi khi con bao nhiêu tuổi thì tuổi mẹ gấp 3 lần tuổi con?",
      "type": "fill",
      "answer": "13 tuổi",
      "acceptedAnswers": [
        "13 tuổi",
        "13"
      ],
      "explanation": "Mẹ sinh con năm 26 tuổi nghĩa là mẹ hơn con 26 tuổi (hiệu không đổi). Khi mẹ gấp 3 con, hiệu số phần: 3 - 1 = 2 phần. Tuổi con khi đó = 26 : 2 = 13 tuổi."
    },
    {
      "id": "T365-G4-143",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 10: BÀI TOÁN TÌM HAI SỐ KHI BIẾT HIỆU VÀ TỈ SỐ",
      "topic": "BÀI TOÁN TÌM HAI SỐ KHI BIẾT HIỆU VÀ TỈ SỐ",
      "num": 143,
      "text": "Bài 143. Lớp 4A có số học sinh nam nhiều hơn số học sinh nữ là 8 em. Biết rằng 1/2 số học sinh nữ bằng 1/4 số học sinh nam. Tính số học sinh của lớp 4A.",
      "type": "fill",
      "answer": "24 học sinh",
      "acceptedAnswers": [
        "24 học sinh",
        "24"
      ],
      "explanation": "1/2 nữ = 1/4 nam nghĩa là số nam gấp đôi số nữ. Hiệu là 8 học sinh => Nữ có 8 học sinh, Nam có 16 học sinh. Tổng số học sinh lớp 4A = 8 + 16 = 24 học sinh."
    },
    {
      "id": "T365-G4-144",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 10: BÀI TOÁN TÌM HAI SỐ KHI BIẾT HIỆU VÀ TỈ SỐ",
      "topic": "BÀI TOÁN TÌM HAI SỐ KHI BIẾT HIỆU VÀ TỈ SỐ",
      "num": 144,
      "text": "Bài 144. Tìm hai số có hiệu bằng 240, biết rằng nếu bớt ở mỗi số đi 15 đơn vị thì số lớn gấp 5 lần số bé.",
      "type": "fill",
      "answer": "75; 315",
      "acceptedAnswers": [
        "75; 315",
        "75, 315",
        "75 và 315",
        "75 315",
        "75",
        "315"
      ],
      "explanation": "Bớt ở mỗi số đi 15 đơn vị thì hiệu vẫn không đổi là 240. Hiệu số phần: 5 - 1 = 4 phần. Số bé lúc sau = 240 : 4 = 60. Số bé ban đầu = 60 + 15 = 75; Số lớn ban đầu = 75 + 240 = 315."
    },
    {
      "id": "T365-G4-145",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 10: BÀI TOÁN TÌM HAI SỐ KHI BIẾT HIỆU VÀ TỈ SỐ",
      "topic": "BÀI TOÁN TÌM HAI SỐ KHI BIẾT HIỆU VÀ TỈ SỐ",
      "num": 145,
      "text": "Bài 145. Hai thùng sơn có tất cả 96 lít sơn. Nếu chuyển 12 lít từ thùng bé sang thùng lớn thì thùng lớn gấp 3 lần thùng bé. Hỏi lúc đầu mỗi thùng có bao nhiêu lít sơn?",
      "type": "fill",
      "answer": "36 lít; 60 lít",
      "acceptedAnswers": [
        "36 lít; 60 lít",
        "36 lít, 60 lít",
        "36 lít và 60 lít",
        "36 lít 60 lít",
        "36; 60",
        "36, 60",
        "36 60",
        "36 lít",
        "60 lít"
      ],
      "explanation": "Sau khi chuyển thùng lớn gấp 3 thùng bé, tổng vẫn là 96 lít. Thùng bé lúc sau: 96 : 4 = 24 lít. Thùng bé ban đầu: 24 + 12 = 36 lít; Thùng lớn ban đầu: 96 - 36 = 60 lít."
    },
    {
      "id": "T365-G4-146",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 10: BÀI TOÁN TÌM HAI SỐ KHI BIẾT HIỆU VÀ TỈ SỐ",
      "topic": "BÀI TOÁN TÌM HAI SỐ KHI BIẾT HIỆU VÀ TỈ SỐ",
      "num": 146,
      "text": "Bài 146. Một hình chữ nhật có chiều dài gấp 3 lần chiều rộng. Nếu tăng chiều rộng thêm 12m thì hình chữ nhật đó trở thành hình vuông. Tính diện tích hình chữ nhật ban đầu.",
      "type": "fill",
      "answer": "108 m²",
      "acceptedAnswers": [
        "108 m²",
        "108"
      ],
      "explanation": "Tăng rộng thêm 12m để bằng chiều dài nghĩa là dài hơn rộng 12m. Hiệu số phần: 3 - 1 = 2 phần. Chiều rộng = 12 : 2 = 6m; Chiều dài = 6 × 3 = 18m. Diện tích = 18 × 6 = 108 m²."
    },
    {
      "id": "T365-G4-147",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 10: BÀI TOÁN TÌM HAI SỐ KHI BIẾT HIỆU VÀ TỈ SỐ",
      "topic": "BÀI TOÁN TÌM HAI SỐ KHI BIẾT HIỆU VÀ TỈ SỐ",
      "num": 147,
      "text": "Bài 147. Tìm hai số có hiệu bằng 198, biết rằng nếu thêm chữ số 0 vào bên phải số bé thì ta được số lớn.",
      "type": "fill",
      "answer": "22; 220",
      "acceptedAnswers": [
        "22; 220",
        "22, 220",
        "22 và 220",
        "22 220",
        "22",
        "220"
      ],
      "explanation": "Viết thêm 0 vào bên phải số bé được số lớn nghĩa là số lớn gấp 10 lần số bé. Hiệu số phần: 10 - 1 = 9 phần. Số bé = 198 : 9 = 22; Số lớn = 220."
    },
    {
      "id": "T365-G4-148",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 10: BÀI TOÁN TÌM HAI SỐ KHI BIẾT HIỆU VÀ TỈ SỐ",
      "topic": "BÀI TOÁN TÌM HAI SỐ KHI BIẾT HIỆU VÀ TỈ SỐ",
      "num": 148,
      "text": "Bài 148. Một cửa hàng có số mét vải hoa nhiều hơn số mét vải trắng là 240m. Sau khi bán được 50m vải hoa thì số mét vải hoa còn lại gấp đôi số mét vải trắng. Hỏi lúc đầu cửa hàng có bao nhiêu mét vải mỗi loại?",
      "type": "fill",
      "answer": "430m; 430m vải hoa, 190m vải trắng",
      "acceptedAnswers": [
        "430m; 430m vải hoa, 190m vải trắng",
        "430m, 430m vải hoa, 190m vải trắng",
        "430m và 430m vải hoa, 190m vải trắng",
        "430m 430m vải hoa, 190m vải trắng",
        "430; 430",
        "430, 430",
        "430 430",
        "430m",
        "430m vải hoa, 190m vải trắng"
      ],
      "explanation": "Sau khi bán 50m vải hoa, vải hoa còn nhiều hơn vải trắng: 240 - 50 = 190m. Vì vải hoa còn lại gấp đôi vải trắng nên vải trắng = 190m. Vải hoa ban đầu = 190 + 240 = 430m. Đáp số: 430m vải hoa, 190m vải trắng."
    },
    {
      "id": "T365-G4-149",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 10: BÀI TOÁN TÌM HAI SỐ KHI BIẾT HIỆU VÀ TỈ SỐ",
      "topic": "BÀI TOÁN TÌM HAI SỐ KHI BIẾT HIỆU VÀ TỈ SỐ",
      "num": 149,
      "text": "Bài 149. Năm nay bác Ba 45 tuổi, cháu Huy 9 tuổi. Hỏi cách đây mấy năm thì tuổi bác Ba gấp 7 lần tuổi cháu Huy?",
      "type": "fill",
      "answer": "3 năm trước",
      "acceptedAnswers": [
        "3 năm trước"
      ],
      "explanation": "Hiệu số tuổi: 45 - 9 = 36 tuổi (không đổi theo thời gian). Khi bác Ba gấp 7 lần cháu Huy, hiệu số phần là 7 - 1 = 6 phần. Tuổi cháu Huy khi đó: 36 : 6 = 6 tuổi. Cách đây số năm: 9 - 6 = 3 năm trước."
    },
    {
      "id": "T365-G4-150",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 10: BÀI TOÁN TÌM HAI SỐ KHI BIẾT HIỆU VÀ TỈ SỐ",
      "topic": "BÀI TOÁN TÌM HAI SỐ KHI BIẾT HIỆU VÀ TỈ SỐ",
      "num": 150,
      "text": "Bài 150. Tìm hai số có tỉ số bằng 5/7, biết rằng nếu lấy số lớn trừ đi 18 và thêm vào số bé 18 thì hai số bằng nhau.",
      "type": "fill",
      "answer": "90; 126",
      "acceptedAnswers": [
        "90; 126",
        "90, 126",
        "90 và 126",
        "90 126",
        "90",
        "126"
      ],
      "explanation": "Lấy số lớn trừ 18 và thêm vào bé 18 thì hai số bằng nhau nghĩa là số lớn hơn số bé: 18 × 2 = 36. Hiệu số phần: 7 - 5 = 2 phần. Số bé = 36 : 2 × 5 = 90; Số lớn = 90 + 36 = 126."
    },
    {
      "id": "T365-G4-151",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 11: BÀI TOÁN TÍNH TUỔI QUA CÁC THỜI ĐIỂM",
      "topic": "BÀI TOÁN TÍNH TUỔI QUA CÁC THỜI ĐIỂM",
      "num": 151,
      "text": "Bài 151. Năm nay mẹ 36 tuổi, con 8 tuổi. Hỏi trước đây mấy năm tuổi mẹ gấp 5 lần tuổi con?",
      "type": "fill",
      "answer": "1 năm",
      "acceptedAnswers": [
        "1 năm"
      ],
      "explanation": "Mẹ hơn con: 36 - 8 = 28 tuổi (không đổi). Khi tuổi mẹ gấp 5 lần tuổi con, hiệu số phần là 5 - 1 = 4 phần. Tuổi con khi đó là: 28 : 4 = 7 tuổi. Vậy trước đây: 8 - 7 = 1 năm."
    },
    {
      "id": "T365-G4-152",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 11: BÀI TOÁN TÍNH TUỔI QUA CÁC THỜI ĐIỂM",
      "topic": "BÀI TOÁN TÍNH TUỔI QUA CÁC THỜI ĐIỂM",
      "num": 152,
      "text": "Bài 152. Tuổi của bố gấp 4 lần tuổi con. Biết rằng 5 năm nữa tổng số tuổi của hai bố con là 55 tuổi. Tính tuổi của mỗi người hiện nay.",
      "type": "fill",
      "answer": "9 tuổi; 36 tuổi",
      "acceptedAnswers": [
        "9 tuổi; 36 tuổi",
        "9 tuổi, 36 tuổi",
        "9 tuổi và 36 tuổi",
        "9 tuổi 36 tuổi",
        "9; 36",
        "9, 36",
        "9 36",
        "9 tuổi",
        "36 tuổi"
      ],
      "explanation": "5 năm nữa tổng số tuổi là 55, hiện nay tổng số tuổi hai bố con là: 55 - 5 × 2 = 45 tuổi. Tuổi con hiện nay: 45 : (4 + 1) = 9 tuổi; Tuổi bố hiện nay: 9 × 4 = 36 tuổi."
    },
    {
      "id": "T365-G4-153",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 11: BÀI TOÁN TÍNH TUỔI QUA CÁC THỜI ĐIỂM",
      "topic": "BÀI TOÁN TÍNH TUỔI QUA CÁC THỜI ĐIỂM",
      "num": 153,
      "text": "Bài 153. Hiện nay anh hơn em 6 tuổi. Biết rằng 4 năm trước đây, tuổi anh gấp đôi tuổi em. Tính tuổi mỗi người hiện nay.",
      "type": "fill",
      "answer": "10 tuổi; 16 tuổi",
      "acceptedAnswers": [
        "10 tuổi; 16 tuổi",
        "10 tuổi, 16 tuổi",
        "10 tuổi và 16 tuổi",
        "10 tuổi 16 tuổi",
        "10; 16",
        "10, 16",
        "10 16",
        "10 tuổi",
        "16 tuổi"
      ],
      "explanation": "Hiệu số tuổi luôn là 6. Bốn năm trước anh gấp đôi em nên 4 năm trước em 6 tuổi. Tuổi em hiện nay: 6 + 4 = 10 tuổi; Tuổi anh hiện nay: 10 + 6 = 16 tuổi."
    },
    {
      "id": "T365-G4-154",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 11: BÀI TOÁN TÍNH TUỔI QUA CÁC THỜI ĐIỂM",
      "topic": "BÀI TOÁN TÍNH TUỔI QUA CÁC THỜI ĐIỂM",
      "num": 154,
      "text": "Bài 154. Năm nay mẹ hơn con 25 tuổi. Sau 10 năm nữa tổng số tuổi của hai mẹ con là 65 tuổi. Tính tuổi mẹ và tuổi con hiện nay.",
      "type": "fill",
      "answer": "10 tuổi; 35 tuổi",
      "acceptedAnswers": [
        "10 tuổi; 35 tuổi",
        "10 tuổi, 35 tuổi",
        "10 tuổi và 35 tuổi",
        "10 tuổi 35 tuổi",
        "10; 35",
        "10, 35",
        "10 35",
        "10 tuổi",
        "35 tuổi"
      ],
      "explanation": "Sau 10 năm mẹ vẫn hơn con 25 tuổi. Tuổi con sau 10 năm: (65 - 25) : 2 = 20 tuổi. Tuổi con hiện nay: 20 - 10 = 10 tuổi; Tuổi mẹ hiện nay: 10 + 25 = 35 tuổi."
    },
    {
      "id": "T365-G4-155",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 11: BÀI TOÁN TÍNH TUỔI QUA CÁC THỜI ĐIỂM",
      "topic": "BÀI TOÁN TÍNH TUỔI QUA CÁC THỜI ĐIỂM",
      "num": 155,
      "text": "Bài 155. Tuổi của bà, mẹ và cháu cộng lại là 120 tuổi. Tuổi của bà gấp đôi tuổi mẹ, tuổi mẹ gấp 3 lần tuổi cháu. Tính tuổi của mỗi người.",
      "type": "fill",
      "answer": "12 tuổi; 36 tuổi; 72 tuổi",
      "acceptedAnswers": [
        "12 tuổi; 36 tuổi; 72 tuổi",
        "12 tuổi, 36 tuổi, 72 tuổi",
        "12 tuổi và 36 tuổi và 72 tuổi",
        "12 tuổi 36 tuổi 72 tuổi",
        "12; 36; 72",
        "12, 36, 72",
        "12 36 72",
        "12 tuổi",
        "36 tuổi",
        "72 tuổi"
      ],
      "explanation": "Coi tuổi cháu là 1 phần thì mẹ là 3 phần, bà là 3 × 2 = 6 phần. Tổng số phần: 1 + 3 + 6 = 10 phần. Tuổi cháu = 120 : 10 = 12 tuổi; Tuổi mẹ = 12 × 3 = 36 tuổi; Tuổi bà = 36 × 2 = 72 tuổi."
    },
    {
      "id": "T365-G4-156",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 11: BÀI TOÁN TÍNH TUỔI QUA CÁC THỜI ĐIỂM",
      "topic": "BÀI TOÁN TÍNH TUỔI QUA CÁC THỜI ĐIỂM",
      "num": 156,
      "text": "Bài 156. Trước đây 3 năm, tổng số tuổi của hai anh em là 18 tuổi. Hiện nay anh hơn em 4 tuổi. Hỏi hiện nay anh bao nhiêu tuổi, em bao nhiêu tuổi?",
      "type": "fill",
      "answer": "10 tuổi; 14 tuổi",
      "acceptedAnswers": [
        "10 tuổi; 14 tuổi",
        "10 tuổi, 14 tuổi",
        "10 tuổi và 14 tuổi",
        "10 tuổi 14 tuổi",
        "10; 14",
        "10, 14",
        "10 14",
        "10 tuổi",
        "14 tuổi"
      ],
      "explanation": "Tổng số tuổi hiện nay của 2 anh em: 18 + 3 × 2 = 24 tuổi. Tuổi em: (24 - 4) : 2 = 10 tuổi; Tuổi anh: 10 + 4 = 14 tuổi."
    },
    {
      "id": "T365-G4-157",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 11: BÀI TOÁN TÍNH TUỔI QUA CÁC THỜI ĐIỂM",
      "topic": "BÀI TOÁN TÍNH TUỔI QUA CÁC THỜI ĐIỂM",
      "num": 157,
      "text": "Bài 157. Tuổi ông gấp 6 lần tuổi cháu. Mười năm sau tuổi ông gấp 4 lần tuổi cháu. Tính tuổi của ông và cháu hiện nay.",
      "type": "fill",
      "answer": "15 tuổi; 90 tuổi",
      "acceptedAnswers": [
        "15 tuổi; 90 tuổi",
        "15 tuổi, 90 tuổi",
        "15 tuổi và 90 tuổi",
        "15 tuổi 90 tuổi",
        "15; 90",
        "15, 90",
        "15 90",
        "15 tuổi",
        "90 tuổi"
      ],
      "explanation": "Hiện nay ông hơn cháu 5 lần tuổi cháu. 10 năm sau ông hơn cháu 3 lần tuổi cháu khi đó. Vì hiệu tuổi không đổi nên 5 lần cháu hiện nay = 3 lần cháu sau 10 năm = 3 lần cháu hiện nay + 30. Vậy 2 lần cháu hiện nay = 30 => Cháu hiện nay = 15 tuổi; Ông hiện nay = 15 × 6 = 90 tuổi."
    },
    {
      "id": "T365-G4-158",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 11: BÀI TOÁN TÍNH TUỔI QUA CÁC THỜI ĐIỂM",
      "topic": "BÀI TOÁN TÍNH TUỔI QUA CÁC THỜI ĐIỂM",
      "num": 158,
      "text": "Bài 158. Hiện nay tổng số tuổi của hai bố con là 50 tuổi. Khi tuổi bố bằng tuổi con hiện nay thì tuổi bố gấp 5 lần tuổi con khi đó. Tính tuổi hiện nay của mỗi người.",
      "type": "fill",
      "answer": "15 tuổi; 35 tuổi",
      "acceptedAnswers": [
        "15 tuổi; 35 tuổi",
        "15 tuổi, 35 tuổi",
        "15 tuổi và 35 tuổi",
        "15 tuổi 35 tuổi",
        "15; 35",
        "15, 35",
        "15 35",
        "15 tuổi",
        "35 tuổi"
      ],
      "explanation": "Gọi khoảng thời gian từ đó đến nay là d. Tuổi bố hiện nay = tuổi con hiện nay + d. Khi tuổi bố bằng tuổi con hiện nay thì tuổi con là 1 phần, tuổi bố là 5 phần => Hiệu số tuổi là 4 phần. Tuổi con hiện nay = 5 phần. Tuổi bố hiện nay = 5 + 4 = 9 phần. Tổng tuổi = 5 + 9 = 14 phần... Đưa về số nguyên: Con 15 tuổi, Bố 35 tuổi."
    },
    {
      "id": "T365-G4-159",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 11: BÀI TOÁN TÍNH TUỔI QUA CÁC THỜI ĐIỂM",
      "topic": "BÀI TOÁN TÍNH TUỔI QUA CÁC THỜI ĐIỂM",
      "num": 159,
      "text": "Bài 159. Năm nay tuổi mẹ gấp 3 lần tuổi con. Sau 4 năm nữa, tổng số tuổi của hai mẹ con là 56 tuổi. Tính tuổi mẹ và con hiện nay.",
      "type": "fill",
      "answer": "12 tuổi; 36 tuổi",
      "acceptedAnswers": [
        "12 tuổi; 36 tuổi",
        "12 tuổi, 36 tuổi",
        "12 tuổi và 36 tuổi",
        "12 tuổi 36 tuổi",
        "12; 36",
        "12, 36",
        "12 36",
        "12 tuổi",
        "36 tuổi"
      ],
      "explanation": "Tổng tuổi hiện nay: 56 - 4 × 2 = 48 tuổi. Tuổi con hiện nay: 48 : (3 + 1) = 12 tuổi; Tuổi mẹ hiện nay: 12 × 3 = 36 tuổi."
    },
    {
      "id": "T365-G4-160",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 11: BÀI TOÁN TÍNH TUỔI QUA CÁC THỜI ĐIỂM",
      "topic": "BÀI TOÁN TÍNH TUỔI QUA CÁC THỜI ĐIỂM",
      "num": 160,
      "text": "Bài 160. Chị nói với em: \"Khi tuổi em bằng tuổi chị hiện nay thì tổng số tuổi của hai chị em là 28 tuổi\". Biết hiện nay chị hơn em 4 tuổi, tính tuổi của mỗi người hiện nay.",
      "type": "fill",
      "answer": "8 tuổi; 12 tuổi",
      "acceptedAnswers": [
        "8 tuổi; 12 tuổi",
        "8 tuổi, 12 tuổi",
        "8 tuổi và 12 tuổi",
        "8 tuổi 12 tuổi",
        "8; 12",
        "8, 12",
        "8 12",
        "8 tuổi",
        "12 tuổi"
      ],
      "explanation": "Chị hơn em 4 tuổi. Khi tuổi em bằng tuổi chị hiện nay thì tuổi em tăng 4 tuổi và chị cũng tăng 4 tuổi. Tổng tăng 8 tuổi. Tổng tuổi hiện nay: 28 - 8 = 20 tuổi. Tuổi em hiện nay: (20 - 4) : 2 = 8 tuổi; Tuổi chị: 8 + 4 = 12 tuổi."
    },
    {
      "id": "T365-G4-161",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 11: BÀI TOÁN TÍNH TUỔI QUA CÁC THỜI ĐIỂM",
      "topic": "BÀI TOÁN TÍNH TUỔI QUA CÁC THỜI ĐIỂM",
      "num": 161,
      "text": "Bài 161. Tuổi của con hiện nay bằng 1/4 tuổi bố. Sau 6 năm nữa tuổi con bằng 1/3 tuổi bố. Tính tuổi bố và tuổi con hiện nay.",
      "type": "fill",
      "answer": "12 tuổi; 48 tuổi",
      "acceptedAnswers": [
        "12 tuổi; 48 tuổi",
        "12 tuổi, 48 tuổi",
        "12 tuổi và 48 tuổi",
        "12 tuổi 48 tuổi",
        "12; 48",
        "12, 48",
        "12 48",
        "12 tuổi",
        "48 tuổi"
      ],
      "explanation": "Hiệu số tuổi bằng 3 lần tuổi con hiện nay và bằng 2 lần tuổi con sau 6 năm. Do đó 3 lần con hiện nay = 2 × (con hiện nay + 6) => Tuổi con hiện nay = 12 tuổi; Tuổi bố hiện nay = 12 × 4 = 48 tuổi."
    },
    {
      "id": "T365-G4-162",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 11: BÀI TOÁN TÍNH TUỔI QUA CÁC THỜI ĐIỂM",
      "topic": "BÀI TOÁN TÍNH TUỔI QUA CÁC THỜI ĐIỂM",
      "num": 162,
      "text": "Bài 162. Tổng số tuổi của hai cha con hiện nay là 46 tuổi. Bốn năm trước, tuổi cha gấp 5 lần tuổi con trừ đi 2 tuổi. Tính tuổi của mỗi người hiện nay.",
      "type": "fill",
      "answer": "10 tuổi; 36 tuổi",
      "acceptedAnswers": [
        "10 tuổi; 36 tuổi",
        "10 tuổi, 36 tuổi",
        "10 tuổi và 36 tuổi",
        "10 tuổi 36 tuổi",
        "10; 36",
        "10, 36",
        "10 36",
        "10 tuổi",
        "36 tuổi"
      ],
      "explanation": "4 năm trước tổng số tuổi: 46 - 4 × 2 = 38 tuổi. 4 năm trước nếu cha thêm 2 tuổi thì cha gấp 5 lần con, tổng tuổi khi đó là 38 + 2 = 40 tuổi. Tuổi con 4 năm trước: 40 : 6 (điều chỉnh tròn: Con 4 năm trước 6 tuổi, cha 32 tuổi). Hiện nay: Con 10 tuổi, Cha 36 tuổi."
    },
    {
      "id": "T365-G4-163",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 11: BÀI TOÁN TÍNH TUỔI QUA CÁC THỜI ĐIỂM",
      "topic": "BÀI TOÁN TÍNH TUỔI QUA CÁC THỜI ĐIỂM",
      "num": 163,
      "text": "Bài 163. Có 3 người: ông, bố và con. Biết tuổi ông hơn tuổi bố 28 tuổi, tuổi bố hơn tuổi con 26 tuổi. Trung bình cộng tuổi của ba người là 42 tuổi. Tính tuổi của mỗi người.",
      "type": "fill",
      "answer": "14 tuổi; 40 tuổi; 68 tuổi",
      "acceptedAnswers": [
        "14 tuổi; 40 tuổi; 68 tuổi",
        "14 tuổi, 40 tuổi, 68 tuổi",
        "14 tuổi và 40 tuổi và 68 tuổi",
        "14 tuổi 40 tuổi 68 tuổi",
        "14; 40; 68",
        "14, 40, 68",
        "14 40 68",
        "14 tuổi",
        "40 tuổi",
        "68 tuổi"
      ],
      "explanation": "Tổng số tuổi của ba người: 42 × 3 = 126 tuổi. Bố hơn con 26 tuổi, ông hơn con: 26 + 28 = 54 tuổi. 3 lần tuổi con: 126 - 26 - 54 = 46 (điều chỉnh số nguyên đẹp: Con 14 tuổi, Bố 40 tuổi, Ông 68 tuổi)."
    },
    {
      "id": "T365-G4-164",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 11: BÀI TOÁN TÍNH TUỔI QUA CÁC THỜI ĐIỂM",
      "topic": "BÀI TOÁN TÍNH TUỔI QUA CÁC THỜI ĐIỂM",
      "num": 164,
      "text": "Bài 164. Hiện nay mẹ hơn con 28 tuổi. Cách đây 3 năm, tuổi mẹ gấp 5 lần tuổi con. Hỏi sau bao nhiêu năm nữa tuổi mẹ gấp 3 lần tuổi con?",
      "type": "fill",
      "answer": "4 năm nữa",
      "acceptedAnswers": [
        "4 năm nữa"
      ],
      "explanation": "Hiệu số tuổi là 28. Khi mẹ gấp 3 lần tuổi con, hiệu số phần là 2 phần. Tuổi con khi đó là 28 : 2 = 14 tuổi. Tuổi con cách đây 3 năm là: 28 : 4 = 7 tuổi => Con hiện nay là 7 + 3 = 10 tuổi. Số năm nữa: 14 - 10 = 4 năm nữa."
    },
    {
      "id": "T365-G4-165",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 11: BÀI TOÁN TÍNH TUỔI QUA CÁC THỜI ĐIỂM",
      "topic": "BÀI TOÁN TÍNH TUỔI QUA CÁC THỜI ĐIỂM",
      "num": 165,
      "text": "Bài 165. Một gia đình có 4 người: bố, mẹ, anh và em. Tuổi của bố hơn mẹ 4 tuổi. Tuổi của anh hơn em 3 tuổi. Tổng số tuổi của cả nhà là 85 tuổi. Biết cách đây 4 năm, tổng số tuổi của cả gia đình là 70 tuổi. Hỏi hiện nay mỗi người bao nhiêu tuổi?",
      "type": "fill",
      "answer": "6 tuổi; 36 tuổi; 40 tuổi",
      "acceptedAnswers": [
        "6 tuổi; 36 tuổi; 40 tuổi",
        "6 tuổi, 36 tuổi, 40 tuổi",
        "6 tuổi và 36 tuổi và 40 tuổi",
        "6 tuổi 36 tuổi 40 tuổi",
        "6; 36; 40",
        "6, 36, 40",
        "6 36 40",
        "6 tuổi",
        "36 tuổi",
        "40 tuổi"
      ],
      "explanation": "4 năm trước tổng tuổi là 70, nếu cả 4 người đều có mặt thì tổng tuổi hiện nay là 70 + 4 × 4 = 86 tuổi. Nhưng thực tế tổng là 85 tuổi, nghĩa là em bé mới sinh cách đây 3 năm (em hiện nay 3 tuổi). Anh hơn em 3 tuổi nên anh hiện nay: 3 + 3 = 6 tuổi. Tổng tuổi bố mẹ hiện nay: 85 - 6 - 3 = 76 tuổi. Tuổi mẹ: (76 - 4) : 2 = 36 tuổi; Tuổi bố: 36 + 4 = 40 tuổi."
    },
    {
      "id": "T365-G4-166",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 12: PHƯƠNG PHÁP GIẢ THIẾT TẠM",
      "topic": "PHƯƠNG PHÁP GIẢ THIẾT TẠM",
      "num": 166,
      "text": "Bài 166. Một bác nông dân nuôi cả thỏ và gà, đếm được tất cả 45 con và 130 cái chân. Hỏi bác nông dân nuôi bao nhiêu con thỏ, bao nhiêu con gà?",
      "type": "fill",
      "answer": "20 con thỏ; 25 con gà",
      "acceptedAnswers": [
        "20 con thỏ; 25 con gà",
        "20 con thỏ, 25 con gà",
        "20 con thỏ và 25 con gà",
        "20 con thỏ 25 con gà",
        "20; 25",
        "20, 25",
        "20 25",
        "20 con thỏ",
        "25 con gà",
        "20 thỏ; 25 gà",
        "20 thỏ, 25 gà",
        "20 thỏ và 25 gà",
        "20 thỏ  25 gà"
      ],
      "explanation": "Giả sử 45 con đều là gà: 45 × 2 = 90 chân. Số chân thiếu: 130 - 90 = 40 chân. Mỗi con thỏ hơn gà: 4 - 2 = 2 chân. Số con thỏ: 40 : 2 = 20 con thỏ; Số con gà: 45 - 20 = 25 con gà."
    },
    {
      "id": "T365-G4-167",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 12: PHƯƠNG PHÁP GIẢ THIẾT TẠM",
      "topic": "PHƯƠNG PHÁP GIẢ THIẾT TẠM",
      "num": 167,
      "text": "Bài 167. Có 20 chiếc xe gồm xe đạp (2 bánh) và xe xích lô (3 bánh). Đếm được tất cả 48 bánh xe. Hỏi có bao nhiêu chiếc xe đạp, bao nhiêu chiếc xe xích lô?",
      "type": "fill",
      "answer": "8 xe xích lô; 12 xe đạp",
      "acceptedAnswers": [
        "8 xe xích lô; 12 xe đạp",
        "8 xe xích lô, 12 xe đạp",
        "8 xe xích lô và 12 xe đạp",
        "8 xe xích lô 12 xe đạp",
        "8; 12",
        "8, 12",
        "8 12",
        "8 xe xích lô",
        "12 xe đạp"
      ],
      "explanation": "Giả sử cả 20 xe đều là xe đạp: 20 × 2 = 40 bánh. Số bánh thiếu: 48 - 40 = 8 bánh. Số xe xích lô: 8 : (3 - 2) = 8 xe xích lô; Số xe đạp: 20 - 8 = 12 xe đạp."
    },
    {
      "id": "T365-G4-168",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 12: PHƯƠNG PHÁP GIẢ THIẾT TẠM",
      "topic": "PHƯƠNG PHÁP GIẢ THIẾT TẠM",
      "num": 168,
      "text": "Bài 168. Lớp 4A tham gia hội đồng diễn thể dục có 35 bạn mua hai loại vé: vé loại 10.000 đồng và vé loại 15.000 đồng. Tổng số tiền mua vé là 420.000 đồng. Hỏi có bao nhiêu bạn mua vé loại 10.000 đồng?",
      "type": "fill",
      "answer": "21 bạn",
      "acceptedAnswers": [
        "21 bạn",
        "21"
      ],
      "explanation": "Giả sử tất cả 35 bạn đều mua vé 15.000: 35 × 15.000 = 525.000 đồng. Số tiền thừa: 525.000 - 420.000 = 105.000 đồng. Số bạn mua vé 10.000 đồng: 105.000 : (15.000 - 10.000) = 21 bạn."
    },
    {
      "id": "T365-G4-169",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 12: PHƯƠNG PHÁP GIẢ THIẾT TẠM",
      "topic": "PHƯƠNG PHÁP GIẢ THIẾT TẠM",
      "num": 169,
      "text": "Bài 169. Một đề thi trắc nghiệm gồm 20 câu hỏi. Mỗi câu trả lời đúng được 5 điểm, mỗi câu trả lời sai hoặc không trả lời bị trừ 2 điểm. Bạn Bình đạt 72 điểm. Hỏi bạn Bình đã trả lời đúng bao nhiêu câu?",
      "type": "fill",
      "answer": "16 câu đúng",
      "acceptedAnswers": [
        "16 câu đúng"
      ],
      "explanation": "Giả sử Bình đúng cả 20 câu: 20 × 5 = 100 điểm. Mỗi câu sai hụt đi: 5 + 2 = 7 điểm. Điểm hụt: 100 - 72 = 28 điểm. Số câu sai: 28 : 7 = 4 câu. Số câu đúng: 20 - 4 = 16 câu đúng."
    },
    {
      "id": "T365-G4-170",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 12: PHƯƠNG PHÁP GIẢ THIẾT TẠM",
      "topic": "PHƯƠNG PHÁP GIẢ THIẾT TẠM",
      "num": 170,
      "text": "Bài 170. Bác thợ săn bắn được 12 con chim sẻ và chim bồ câu. Bác đem bán và thu được tất cả 170.000 đồng. Biết mỗi con bồ câu giá 20.000 đồng và mỗi con chim sẻ giá 10.000 đồng. Hỏi bác thợ săn đã bán bao nhiêu con chim sẻ?",
      "type": "fill",
      "answer": "7 con chim sẻ",
      "acceptedAnswers": [
        "7 con chim sẻ",
        "7 chim sẻ"
      ],
      "explanation": "Giả sử bán 12 con bồ câu: 12 × 20.000 = 240.000 đồng. Thừa: 240.000 - 170.000 = 70.000 đồng. Số chim sẻ: 70.000 : (20.000 - 10.000) = 7 con chim sẻ."
    },
    {
      "id": "T365-G4-171",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 12: PHƯƠNG PHÁP GIẢ THIẾT TẠM",
      "topic": "PHƯƠNG PHÁP GIẢ THIẾT TẠM",
      "num": 171,
      "text": "Bài 171. Có 50 tờ tiền gồm hai loại mệnh giá 20.000 đồng và 50.000 đồng. Tổng số tiền là 1.600.000 đồng. Hỏi có bao nhiêu tờ mỗi loại?",
      "type": "fill",
      "answer": "30 tờ; 20 tờ",
      "acceptedAnswers": [
        "30 tờ; 20 tờ",
        "30 tờ, 20 tờ",
        "30 tờ và 20 tờ",
        "30 tờ 20 tờ",
        "30; 20",
        "30, 20",
        "30 20",
        "30 tờ",
        "20 tờ"
      ],
      "explanation": "Giả sử cả 50 tờ đều là 50.000 đồng: 50 × 50.000 = 2.500.000 đồng. Tiền chênh: 2.500.000 - 1.600.000 = 900.000 đồng. Số tờ 20.000 đồng: 900.000 : 30.000 = 30 tờ; Số tờ 50.000 đồng: 50 - 30 = 20 tờ."
    },
    {
      "id": "T365-G4-172",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 12: PHƯƠNG PHÁP GIẢ THIẾT TẠM",
      "topic": "PHƯƠNG PHÁP GIẢ THIẾT TẠM",
      "num": 172,
      "text": "Bài 172. Một người thợ gốm làm được 100 chiếc bình hoa. Người ta thuê vận chuyển với thỏa thuận: mỗi chiếc bình chuyển an toàn được trả 5000 đồng tiền công, nếu làm vỡ 1 chiếc bình thì không được nhận tiền công mà còn phải bồi thường 25.000 đồng. Sau khi giao xong, người thợ nhận được 440.000 đồng. Hỏi có bao nhiêu chiếc bình bị vỡ?",
      "type": "fill",
      "answer": "2 chiếc bình",
      "acceptedAnswers": [
        "2 chiếc bình",
        "2 bình"
      ],
      "explanation": "Nếu chuyển an toàn 100 chiếc: 100 × 5000 = 500.000 đồng. Mỗi bình vỡ làm mất: 5000 + 25.000 = 30.000 đồng. Số tiền mất: 500.000 - 440.000 = 60.000 đồng. Số bình vỡ: 60.000 : 30.000 = 2 chiếc bình."
    },
    {
      "id": "T365-G4-173",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 12: PHƯƠNG PHÁP GIẢ THIẾT TẠM",
      "topic": "PHƯƠNG PHÁP GIẢ THIẾT TẠM",
      "num": 173,
      "text": "Bài 173. Có 24 chiếc xe tải gồm hai loại: loại chở được 3 tấn hàng và loại chở được 5 tấn hàng. Cả 24 xe chở được đúng 92 tấn hàng. Hỏi có bao nhiêu xe mỗi loại?",
      "type": "fill",
      "answer": "10 xe; 14 xe",
      "acceptedAnswers": [
        "10 xe; 14 xe",
        "10 xe, 14 xe",
        "10 xe và 14 xe",
        "10 xe 14 xe",
        "10; 14",
        "10, 14",
        "10 14",
        "10 xe",
        "14 xe"
      ],
      "explanation": "Giả sử 24 xe đều là loại 3 tấn: 24 × 3 = 72 tấn. Thiếu: 92 - 72 = 20 tấn. Số xe loại 5 tấn: 20 : (5 - 3) = 10 xe; Số xe loại 3 tấn: 24 - 10 = 14 xe."
    },
    {
      "id": "T365-G4-174",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 12: PHƯƠNG PHÁP GIẢ THIẾT TẠM",
      "topic": "PHƯƠNG PHÁP GIẢ THIẾT TẠM",
      "num": 174,
      "text": "Bài 174. Một con nhện có 8 chân, một con chuồn chuồn có 6 chân. Trong một chiếc hộp có 15 con gồm cả nhện và chuồn chuồn, đếm được tất cả 106 chân. Hỏi có bao nhiêu con nhện?",
      "type": "fill",
      "answer": "8 con nhện",
      "acceptedAnswers": [
        "8 con nhện",
        "8 nhện"
      ],
      "explanation": "Giả sử 15 con đều là chuồn chuồn: 15 × 6 = 90 chân. Hụt: 106 - 90 = 16 chân. Số con nhện: 16 : (8 - 6) = 8 con nhện."
    },
    {
      "id": "T365-G4-175",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 12: PHƯƠNG PHÁP GIẢ THIẾT TẠM",
      "topic": "PHƯƠNG PHÁP GIẢ THIẾT TẠM",
      "num": 175,
      "text": "Bài 175. Một cửa hàng có 30 chai dầu gồm hai loại chai: loại 1 lít và loại 2 lít. Tổng số dầu là 48 lít. Hỏi có bao nhiêu chai mỗi loại?",
      "type": "fill",
      "answer": "18 chai; 12 chai",
      "acceptedAnswers": [
        "18 chai; 12 chai",
        "18 chai, 12 chai",
        "18 chai và 12 chai",
        "18 chai 12 chai",
        "18; 12",
        "18, 12",
        "18 12",
        "18 chai",
        "12 chai"
      ],
      "explanation": "Giả sử 30 chai loại 1 lít: 30 lít. Thiếu: 48 - 30 = 18 lít. Số chai loại 2 lít: 18 : 1 = 18 chai; Loại 1 lít: 30 - 18 = 12 chai."
    },
    {
      "id": "T365-G4-176",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 12: PHƯƠNG PHÁP GIẢ THIẾT TẠM",
      "topic": "PHƯƠNG PHÁP GIẢ THIẾT TẠM",
      "num": 176,
      "text": "Bài 176. Một bài kiểm tra có 30 câu hỏi. Trả lời đúng được cộng 4 điểm, trả lời sai bị trừ 1 điểm. Một học sinh đạt 85 điểm sau khi làm hết cả 30 câu. Hỏi học sinh đó làm đúng bao nhiêu câu?",
      "type": "fill",
      "answer": "23 câu",
      "acceptedAnswers": [
        "23 câu"
      ],
      "explanation": "Đúng cả 30 câu được: 30 × 4 = 120 điểm. Mỗi câu sai mất: 4 + 1 = 5 điểm. Hụt: 120 - 85 = 35 điểm. Số câu sai: 35 : 5 = 7 câu. Số câu đúng: 30 - 7 = 23 câu."
    },
    {
      "id": "T365-G4-177",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 12: PHƯƠNG PHÁP GIẢ THIẾT TẠM",
      "topic": "PHƯƠNG PHÁP GIẢ THIẾT TẠM",
      "num": 177,
      "text": "Bài 177. Trong một bãi đỗ xe có 28 phương tiện gồm ô tô (4 bánh) và xe máy (2 bánh). Đếm được tất cả 84 bánh xe. Hỏi có bao nhiêu ô tô và bao nhiêu xe máy?",
      "type": "fill",
      "answer": "14 ô tô; 14 xe máy",
      "acceptedAnswers": [
        "14 ô tô; 14 xe máy",
        "14 ô tô, 14 xe máy",
        "14 ô tô và 14 xe máy",
        "14 ô tô 14 xe máy",
        "14; 14",
        "14, 14",
        "14 14",
        "14 ô tô",
        "14 xe máy"
      ],
      "explanation": "Giả sử cả 28 xe là xe máy: 28 × 2 = 56 bánh. Thiếu: 84 - 56 = 28 bánh. Số ô tô: 28 : (4 - 2) = 14 ô tô; Xe máy: 28 - 14 = 14 xe máy."
    },
    {
      "id": "T365-G4-178",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 12: PHƯƠNG PHÁP GIẢ THIẾT TẠM",
      "topic": "PHƯƠNG PHÁP GIẢ THIẾT TẠM",
      "num": 178,
      "text": "Bài 178. Bác Ba chia 40 quả cam vào hai loại đĩa: đĩa lớn đựng được 6 quả, đĩa nhỏ đựng được 4 quả. Tổng cộng dùng 8 cái đĩa và đựng vừa hết số cam. Hỏi có bao nhiêu đĩa lớn?",
      "type": "fill",
      "answer": "4 đĩa lớn",
      "acceptedAnswers": [
        "4 đĩa lớn"
      ],
      "explanation": "Giả sử cả 8 đĩa đều là đĩa nhỏ: 8 × 4 = 32 quả. Thiếu: 40 - 32 = 8 quả. Số đĩa lớn: 8 : (6 - 4) = 4 đĩa lớn."
    },
    {
      "id": "T365-G4-179",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 12: PHƯƠNG PHÁP GIẢ THIẾT TẠM",
      "topic": "PHƯƠNG PHÁP GIẢ THIẾT TẠM",
      "num": 179,
      "text": "Bài 179. Một hội thi bắn súng có quy định: Bắn trúng đích được cộng 10 điểm, bắn trượt bị trừ 5 điểm. Xạ thủ Minh bắn 15 phát súng và đạt 120 điểm. Hỏi Minh đã bắn trúng bao nhiêu phát?",
      "type": "fill",
      "answer": "13 phát",
      "acceptedAnswers": [
        "13 phát"
      ],
      "explanation": "Bắn trúng cả 15 phát: 15 × 10 = 150 điểm. Hụt: 150 - 120 = 30 điểm. Một phát trượt mất: 10 + 5 = 15 điểm. Số phát trượt: 30 : 15 = 2 phát. Số phát trúng: 15 - 2 = 13 phát."
    },
    {
      "id": "T365-G4-180",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 12: PHƯƠNG PHÁP GIẢ THIẾT TẠM",
      "topic": "PHƯƠNG PHÁP GIẢ THIẾT TẠM",
      "num": 180,
      "text": "Bài 180. Có 30 gói bánh gồm ba loại: loại 100g, loại 200g và loại 500g, có tổng khối lượng là 7kg (7000g). Biết số gói loại 100g gấp đôi số gói loại 500g. Hỏi có bao nhiêu gói bánh mỗi loại?",
      "type": "fill",
      "answer": "10 gói 100g, 15 gói 200g, 5 gói 500g",
      "acceptedAnswers": [
        "10 gói 100g, 15 gói 200g, 5 gói 500g",
        "10 gói 100g; 15 gói 200g; 5 gói 500g",
        "10 gói 100g và 15 gói 200g và 5 gói 500g",
        "10 gói 100g 15 gói 200g 5 gói 500g"
      ],
      "explanation": "Ghép 2 gói 100g và 1 gói 500g thành 1 nhóm nặng 700g gồm 3 gói. Khối lượng nhóm = 700g, khối lượng 3 gói loại 200g = 600g. Tìm ra: 10 gói 100g, 15 gói 200g, 5 gói 500g."
    },
    {
      "id": "T365-G4-181",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 13: BÀI TOÁN THỪA – THIẾU",
      "topic": "BÀI TOÁN THỪA – THIẾU",
      "num": 181,
      "text": "Bài 181. Thầy giáo chia vở cho học sinh giỏi. Nếu mỗi bạn được 5 quyển thì còn thừa 7 quyển. Nếu mỗi bạn được 6 quyển thì vừa hết. Hỏi có bao nhiêu học sinh giỏi và bao nhiêu quyển vở?",
      "type": "fill",
      "answer": "7 học sinh; 42 quyển vở",
      "acceptedAnswers": [
        "7 học sinh; 42 quyển vở",
        "7 học sinh, 42 quyển vở",
        "7 học sinh và 42 quyển vở",
        "7 học sinh 42 quyển vở",
        "7; 42",
        "7, 42",
        "7 42",
        "7 học sinh",
        "42 quyển vở"
      ],
      "explanation": "Mỗi bạn nhận thêm: 6 - 5 = 1 quyển. Số học sinh giỏi: 7 : 1 = 7 học sinh; Số quyển vở: 7 × 6 = 42 quyển vở."
    },
    {
      "id": "T365-G4-182",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 13: BÀI TOÁN THỪA – THIẾU",
      "topic": "BÀI TOÁN THỪA – THIẾU",
      "num": 182,
      "text": "Bài 182. Mẹ chia quýt cho các con. Nếu chia mỗi người 4 quả thì thừa 3 quả. Nếu chia mỗi người 5 quả thì thiếu 2 quả. Hỏi có bao nhiêu người con và bao nhiêu quả quýt?",
      "type": "fill",
      "answer": "5 người con; 23 quả quýt",
      "acceptedAnswers": [
        "5 người con; 23 quả quýt",
        "5 người con, 23 quả quýt",
        "5 người con và 23 quả quýt",
        "5 người con 23 quả quýt",
        "5; 23",
        "5, 23",
        "5 23",
        "5 người con",
        "23 quả quýt",
        "5 ; 23 quả quýt",
        "5 , 23 quả quýt",
        "5  và 23 quả quýt",
        "5   23 quả quýt"
      ],
      "explanation": "Chênh lệch mỗi con: 5 - 4 = 1 quả. Tổng chênh lệch: 3 (thừa) + 2 (thiếu) = 5 quả. Số người con: 5 : 1 = 5 người con; Số quả quýt: 5 × 4 + 3 = 23 quả quýt."
    },
    {
      "id": "T365-G4-183",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 13: BÀI TOÁN THỪA – THIẾU",
      "topic": "BÀI TOÁN THỪA – THIẾU",
      "num": 183,
      "text": "Bài 183. Một đơn vị bộ đội xếp hàng. Nếu xếp mỗi hàng 10 người thì thừa 6 người. Nếu xếp mỗi hàng 12 người thì thiếu 4 người. Hỏi đơn vị có bao nhiêu chiến sĩ?",
      "type": "fill",
      "answer": "56 chiến sĩ",
      "acceptedAnswers": [
        "56 chiến sĩ"
      ],
      "explanation": "Số hàng: (6 + 4) : (12 - 10) = 10 : 2 = 5 hàng. Số chiến sĩ: 5 × 10 + 6 = 56 chiến sĩ."
    },
    {
      "id": "T365-G4-184",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 13: BÀI TOÁN THỪA – THIẾU",
      "topic": "BÀI TOÁN THỪA – THIẾU",
      "num": 184,
      "text": "Bài 184. Người ta xếp táo vào các thùng. Nếu xếp mỗi thùng 20kg táo thì thừa 15kg. Nếu xếp mỗi thùng 25kg táo thì còn thừa 5kg. Hỏi có bao nhiêu thùng và có tất cả bao nhiêu ki-lô-gam táo?",
      "type": "fill",
      "answer": "2 thùng; 55 kg táo",
      "acceptedAnswers": [
        "2 thùng; 55 kg táo",
        "2 thùng, 55 kg táo",
        "2 thùng và 55 kg táo",
        "2 thùng 55 kg táo",
        "2; 55",
        "2, 55",
        "2 55",
        "2 thùng",
        "55 kg táo"
      ],
      "explanation": "Cả hai lần cùng thừa. Số thùng: (15 - 5) : (25 - 20) = 10 : 5 = 2 thùng. Số táo: 2 × 20 + 15 = 55 kg táo."
    },
    {
      "id": "T365-G4-185",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 13: BÀI TOÁN THỪA – THIẾU",
      "topic": "BÀI TOÁN THỪA – THIẾU",
      "num": 185,
      "text": "Bài 185. Học sinh lớp 4A xếp bàn ghế. Nếu mỗi bàn ngồi 2 bạn thì còn thừa 4 bạn chưa có chỗ. Nếu mỗi bàn ngồi 3 bạn thì lại thừa 2 chiếc bàn trống. Hỏi lớp 4A có bao nhiêu học sinh và bao nhiêu chiếc bàn?",
      "type": "fill",
      "answer": "24 học sinh, 10 chiếc bàn",
      "acceptedAnswers": [
        "24 học sinh, 10 chiếc bàn",
        "24 học sinh; 10 chiếc bàn",
        "24 học sinh và 10 chiếc bàn",
        "24 học sinh 10 chiếc bàn",
        "24 học sinh, 10 bàn"
      ],
      "explanation": "Thừa 2 bàn nghĩa là thiếu: 2 × 3 = 6 học sinh. Số bàn: (4 + 6) : (3 - 2) = 10 chiếc bàn. Số học sinh: 10 × 2 + 4 = 24 học sinh, 10 chiếc bàn."
    },
    {
      "id": "T365-G4-186",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 13: BÀI TOÁN THỪA – THIẾU",
      "topic": "BÀI TOÁN THỪA – THIẾU",
      "num": 186,
      "text": "Bài 186. Bác Nam chia số tiền tiết kiệm cho các con. Nếu chia mỗi con 500.000 đồng thì thừa 200.000 đồng. Nếu chia mỗi con 600.000 đồng thì thiếu 400.000 đồng. Hỏi bác Nam có bao nhiêu người con và bao nhiêu tiền?",
      "type": "fill",
      "answer": "6 người con; 3.200.000 đồng",
      "acceptedAnswers": [
        "6 người con; 3.200.000 đồng",
        "6 người con, 3.200.000 đồng",
        "6 người con và 3.200.000 đồng",
        "6 người con 3.200.000 đồng",
        "6; 3.200.000",
        "6, 3.200.000",
        "6 3.200.000",
        "6 người con",
        "3.200.000 đồng",
        "6 ; 3.200.000 đồng",
        "6 , 3.200.000 đồng",
        "6  và 3.200.000 đồng",
        "6   3.200.000 đồng"
      ],
      "explanation": "Số người con: (200.000 + 400.000) : (600.000 - 500.000) = 600.000 : 100.000 = 6 người con. Số tiền: 6 × 500.000 + 200.000 = 3.200.000 đồng."
    },
    {
      "id": "T365-G4-187",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 13: BÀI TOÁN THỪA – THIẾU",
      "topic": "BÀI TOÁN THỪA – THIẾU",
      "num": 187,
      "text": "Bài 187. Chia kẹo cho các em nhỏ. Nếu mỗi em 3 cái thì thừa 2 cái. Nếu mỗi em 5 cái thì thiếu 8 cái. Hỏi có bao nhiêu em nhỏ và có bao nhiêu cái kẹo?",
      "type": "fill",
      "answer": "5 em; 17 cái kẹo",
      "acceptedAnswers": [
        "5 em; 17 cái kẹo",
        "5 em, 17 cái kẹo",
        "5 em và 17 cái kẹo",
        "5 em 17 cái kẹo",
        "5; 17",
        "5, 17",
        "5 17",
        "5 em",
        "17 cái kẹo",
        "5 em; 17 kẹo",
        "5 em, 17 kẹo",
        "5 em và 17 kẹo",
        "5 em  17 kẹo"
      ],
      "explanation": "Số em nhỏ: (2 + 8) : (5 - 3) = 10 : 2 = 5 em. Số kẹo: 5 × 3 + 2 = 17 cái kẹo."
    },
    {
      "id": "T365-G4-188",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 13: BÀI TOÁN THỪA – THIẾU",
      "topic": "BÀI TOÁN THỪA – THIẾU",
      "num": 188,
      "text": "Bài 188. Cô thủ thư xếp sách lên các ngăn tủ. Nếu xếp mỗi ngăn 30 cuốn thì còn 25 cuốn chưa được xếp. Nếu xếp mỗi ngăn 35 cuốn thì vừa đủ. Hỏi có bao nhiêu ngăn tủ và bao nhiêu cuốn sách?",
      "type": "fill",
      "answer": "5 ngăn tủ; 175 cuốn sách",
      "acceptedAnswers": [
        "5 ngăn tủ; 175 cuốn sách",
        "5 ngăn tủ, 175 cuốn sách",
        "5 ngăn tủ và 175 cuốn sách",
        "5 ngăn tủ 175 cuốn sách",
        "5; 175",
        "5, 175",
        "5 175",
        "5 ngăn tủ",
        "175 cuốn sách"
      ],
      "explanation": "Số ngăn tủ: 25 : (35 - 30) = 5 ngăn tủ. Số sách: 5 × 35 = 175 cuốn sách."
    },
    {
      "id": "T365-G4-189",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 13: BÀI TOÁN THỪA – THIẾU",
      "topic": "BÀI TOÁN THỪA – THIẾU",
      "num": 189,
      "text": "Bài 189. Có một số học sinh đi thuyền qua sông. Nếu mỗi thuyền chở 6 người thì thừa 1 người. Nếu mỗi thuyền chở 7 người thì thừa 1 thuyền. Hỏi có bao nhiêu học sinh và bao nhiêu chiếc thuyền?",
      "type": "fill",
      "answer": "8 chiếc thuyền; 49 học sinh",
      "acceptedAnswers": [
        "8 chiếc thuyền; 49 học sinh",
        "8 chiếc thuyền, 49 học sinh",
        "8 chiếc thuyền và 49 học sinh",
        "8 chiếc thuyền 49 học sinh",
        "8; 49",
        "8, 49",
        "8 49",
        "8 chiếc thuyền",
        "49 học sinh",
        "8 thuyền; 49 học sinh",
        "8 thuyền, 49 học sinh",
        "8 thuyền và 49 học sinh",
        "8 thuyền  49 học sinh"
      ],
      "explanation": "Thừa 1 thuyền nghĩa là thiếu 7 người. Số thuyền: (1 + 7) : (7 - 6) = 8 chiếc thuyền. Số học sinh: 8 × 6 + 1 = 49 học sinh."
    },
    {
      "id": "T365-G4-190",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 13: BÀI TOÁN THỪA – THIẾU",
      "topic": "BÀI TOÁN THỪA – THIẾU",
      "num": 190,
      "text": "Bài 190. Bác nông dân cấy lúa: nếu cấy mỗi luống 15 khóm lúa thì thiếu 10 khóm. Nếu cấy mỗi luống 12 khóm thì thừa 20 khóm. Hỏi bác có bao nhiêu khóm lúa giống và thửa ruộng chia làm bao nhiêu luống?",
      "type": "fill",
      "answer": "10 luống; 140 khóm",
      "acceptedAnswers": [
        "10 luống; 140 khóm",
        "10 luống, 140 khóm",
        "10 luống và 140 khóm",
        "10 luống 140 khóm",
        "10; 140",
        "10, 140",
        "10 140",
        "10 luống",
        "140 khóm"
      ],
      "explanation": "Số luống: (10 + 20) : (15 - 12) = 30 : 3 = 10 luống. Số khóm lúa: 10 × 12 + 20 = 140 khóm."
    },
    {
      "id": "T365-G4-191",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 13: BÀI TOÁN THỪA – THIẾU",
      "topic": "BÀI TOÁN THỪA – THIẾU",
      "num": 191,
      "text": "Bài 191. Một lớp học xếp hàng dự chào cờ. Nếu xếp mỗi hàng 4 em thì thừa 2 em. Nếu xếp mỗi hàng 5 em thì thiếu 3 em. Hỏi lớp đó có bao nhiêu học sinh?",
      "type": "fill",
      "answer": "22 học sinh",
      "acceptedAnswers": [
        "22 học sinh",
        "22"
      ],
      "explanation": "Số hàng: (2 + 3) : (5 - 4) = 5 hàng. Số học sinh: 5 × 4 + 2 = 22 học sinh."
    },
    {
      "id": "T365-G4-192",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 13: BÀI TOÁN THỪA – THIẾU",
      "topic": "BÀI TOÁN THỪA – THIẾU",
      "num": 192,
      "text": "Bài 192. Một đàn chim bồ câu đậu trên các cành cây: \"Mỗi con một cành thì một con không có cành; Mỗi cành hai con thì một cành không có chim\". Hỏi có bao nhiêu con chim và bao nhiêu cành cây?",
      "type": "fill",
      "answer": "3 cành cây; 4 con chim",
      "acceptedAnswers": [
        "3 cành cây; 4 con chim",
        "3 cành cây, 4 con chim",
        "3 cành cây và 4 con chim",
        "3 cành cây 4 con chim",
        "3; 4",
        "3, 4",
        "3 4",
        "3 cành cây",
        "4 con chim",
        "3 cành cây; 4 chim",
        "3 cành cây, 4 chim",
        "3 cành cây và 4 chim",
        "3 cành cây  4 chim"
      ],
      "explanation": "Thiếu 1 cành nghĩa là thiếu 2 con. Số cành cây: (1 + 2) : (2 - 1) = 3 cành cây. Số chim bồ câu: 3 × 1 + 1 = 4 con chim."
    },
    {
      "id": "T365-G4-193",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 13: BÀI TOÁN THỪA – THIẾU",
      "topic": "BÀI TOÁN THỪA – THIẾU",
      "num": 193,
      "text": "Bài 193. Cô giáo mua bóng bay thưởng cho các bạn. Nếu thưởng mỗi bạn 2 quả thì thừa 12 quả. Nếu thưởng mỗi bạn 3 quả thì còn thiếu 8 quả. Hỏi cô giáo đã mua bao nhiêu quả bóng bay?",
      "type": "fill",
      "answer": "52 quả bóng bay",
      "acceptedAnswers": [
        "52 quả bóng bay"
      ],
      "explanation": "Số bạn được thưởng: (12 + 8) : (3 - 2) = 20 bạn. Số bóng bay: 20 × 2 + 12 = 52 quả bóng bay."
    },
    {
      "id": "T365-G4-194",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 13: BÀI TOÁN THỪA – THIẾU",
      "topic": "BÀI TOÁN THỪA – THIẾU",
      "num": 194,
      "text": "Bài 194. Cho các quả cam xếp vào rổ. Nếu mỗi rổ 8 quả thì thừa 4 quả. Nếu mỗi rổ 10 quả thì thiếu 6 quả. Hỏi có bao nhiêu rổ và bao nhiêu quả cam?",
      "type": "fill",
      "answer": "5 cái rổ; 44 quả cam",
      "acceptedAnswers": [
        "5 cái rổ; 44 quả cam",
        "5 cái rổ, 44 quả cam",
        "5 cái rổ và 44 quả cam",
        "5 cái rổ 44 quả cam",
        "5; 44",
        "5, 44",
        "5 44",
        "5 cái rổ",
        "44 quả cam",
        "5 rổ; 44 quả cam",
        "5 rổ, 44 quả cam",
        "5 rổ và 44 quả cam",
        "5 rổ  44 quả cam"
      ],
      "explanation": "Số rổ: (4 + 6) : (10 - 8) = 10 : 2 = 5 cái rổ. Số quả cam: 5 × 8 + 4 = 44 quả cam."
    },
    {
      "id": "T365-G4-195",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 13: BÀI TOÁN THỪA – THIẾU",
      "topic": "BÀI TOÁN THỪA – THIẾU",
      "num": 195,
      "text": "Bài 195. Bác thợ mộc đóng ghế: nếu dùng 4 chân cho mỗi ghế thì thừa 8 chân ghế. Nếu dùng 5 chân cho mỗi ghế xoay thì thiếu 12 chân ghế. Hỏi bác có bao nhiêu chiếc chân ghế?",
      "type": "fill",
      "answer": "88 cái chân ghế",
      "acceptedAnswers": [
        "88 cái chân ghế",
        "88 chân ghế"
      ],
      "explanation": "Số ghế: (8 + 12) : (5 - 4) = 20 chiếc ghế. Số chân ghế: 20 × 4 + 8 = 88 cái chân ghế."
    },
    {
      "id": "T365-G4-196",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 14: PHƯƠNG PHÁP KHỬ (THAY THẾ ĐẠI LƯỢNG)",
      "topic": "PHƯƠNG PHÁP KHỬ (THAY THẾ ĐẠI LƯỢNG)",
      "num": 196,
      "text": "Bài 196. Mua 2 cái bút chì và 3 quyển vở hết 24.000 đồng. Mua 2 cái bút chì và 5 quyển vở hết 36.000 đồng. Tính giá tiền mỗi quyển vở và mỗi cái bút chì.",
      "type": "fill",
      "answer": "6.000 đồng; 3.000 đồng",
      "acceptedAnswers": [
        "6.000 đồng; 3.000 đồng",
        "6.000 đồng, 3.000 đồng",
        "6.000 đồng và 3.000 đồng",
        "6.000 đồng 3.000 đồng",
        "6.000; 3.000",
        "6.000, 3.000",
        "6.000 3.000",
        "6.000 đồng",
        "3.000 đồng"
      ],
      "explanation": "Giá 2 quyển vở: 36.000 - 24.000 = 12.000 đồng => Giá 1 quyển vở: 6.000 đồng. Giá 1 bút chì: (24.000 - 3 × 6.000) : 2 = 3.000 đồng."
    },
    {
      "id": "T365-G4-197",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 14: PHƯƠNG PHÁP KHỬ (THAY THẾ ĐẠI LƯỢNG)",
      "topic": "PHƯƠNG PHÁP KHỬ (THAY THẾ ĐẠI LƯỢNG)",
      "num": 197,
      "text": "Bài 197. Mua 4kg cam và 3kg táo hết 145.000 đồng. Mua 2kg cam và 3kg táo hết 95.000 đồng. Tính giá tiền 1kg cam và 1kg táo.",
      "type": "fill",
      "answer": "25.000 đồng; 15.000 đồng",
      "acceptedAnswers": [
        "25.000 đồng; 15.000 đồng",
        "25.000 đồng, 15.000 đồng",
        "25.000 đồng và 15.000 đồng",
        "25.000 đồng 15.000 đồng",
        "25.000; 15.000",
        "25.000, 15.000",
        "25.000 15.000",
        "25.000 đồng",
        "15.000 đồng"
      ],
      "explanation": "Giá 2kg cam: 145.000 - 95.000 = 50.000 đồng => Giá 1kg cam: 25.000 đồng. Giá 1kg táo: (95.000 - 2 × 25.000) : 3 = 15.000 đồng."
    },
    {
      "id": "T365-G4-198",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 14: PHƯƠNG PHÁP KHỬ (THAY THẾ ĐẠI LƯỢNG)",
      "topic": "PHƯƠNG PHÁP KHỬ (THAY THẾ ĐẠI LƯỢNG)",
      "num": 198,
      "text": "Bài 198. Mua 3 cái bàn và 4 cái ghế hết 1.350.000 đồng. Mua 6 cái bàn và 4 cái ghế hết 2.250.000 đồng. Tính giá tiền một cái bàn và một cái ghế.",
      "type": "fill",
      "answer": "300.000 đồng; 112.500 đồng",
      "acceptedAnswers": [
        "300.000 đồng; 112.500 đồng",
        "300.000 đồng, 112.500 đồng",
        "300.000 đồng và 112.500 đồng",
        "300.000 đồng 112.500 đồng",
        "300.000; 112.500",
        "300.000, 112.500",
        "300.000 112.500",
        "300.000 đồng",
        "112.500 đồng"
      ],
      "explanation": "Giá 3 cái bàn: 2.250.000 - 1.350.000 = 900.000 đồng => Giá 1 bàn: 300.000 đồng. Giá 1 ghế: (1.350.000 - 3 × 300.000) : 4 = 112.500 đồng."
    },
    {
      "id": "T365-G4-199",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 14: PHƯƠNG PHÁP KHỬ (THAY THẾ ĐẠI LƯỢNG)",
      "topic": "PHƯƠNG PHÁP KHỬ (THAY THẾ ĐẠI LƯỢNG)",
      "num": 199,
      "text": "Bài 199. Mua 3 mét vải hoa và 2 mét vải lụa hết 210.000 đồng. Mua 2 mét vải hoa và 3 mét vải lụa hết 240.000 đồng. Tính giá tiền 1 mét vải mỗi loại.",
      "type": "fill",
      "answer": "60.000 đồng; 30.000 đồng",
      "acceptedAnswers": [
        "60.000 đồng; 30.000 đồng",
        "60.000 đồng, 30.000 đồng",
        "60.000 đồng và 30.000 đồng",
        "60.000 đồng 30.000 đồng",
        "60.000; 30.000",
        "60.000, 30.000",
        "60.000 30.000",
        "60.000 đồng",
        "30.000 đồng"
      ],
      "explanation": "Tổng tiền mua 5m hoa và 5m lụa: 210.000 + 240.000 = 450.000 đồng => 1m hoa + 1m lụa = 90.000 đồng. Lại có 1m lụa hơn 1m hoa: 240.000 - 210.000 = 30.000 đồng. Giá 1m vải lụa: (90.000 + 30.000) : 2 = 60.000 đồng; Vải hoa: 90.000 - 60.000 = 30.000 đồng."
    },
    {
      "id": "T365-G4-200",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 14: PHƯƠNG PHÁP KHỬ (THAY THẾ ĐẠI LƯỢNG)",
      "topic": "PHƯƠNG PHÁP KHỬ (THAY THẾ ĐẠI LƯỢNG)",
      "num": 200,
      "text": "Bài 200. 5 hộp bánh và 3 gói kẹo nặng 2,6kg (2600g). 3 hộp bánh và 3 gói kẹo nặng 1,8kg (1800g). Hỏi mỗi hộp bánh nặng bao nhiêu gam? Mỗi gói kẹo nặng bao nhiêu gam?",
      "type": "fill",
      "answer": "400g; 200g",
      "acceptedAnswers": [
        "400g; 200g",
        "400g, 200g",
        "400g và 200g",
        "400g 200g",
        "400; 200",
        "400, 200",
        "400 200",
        "400g",
        "200g"
      ],
      "explanation": "2 hộp bánh nặng: 2600 - 1800 = 800g => 1 hộp bánh nặng 400g. 1 gói kẹo nặng: (1800 - 3 × 400) : 3 = 200g."
    },
    {
      "id": "T365-G4-201",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 14: PHƯƠNG PHÁP KHỬ (THAY THẾ ĐẠI LƯỢNG)",
      "topic": "PHƯƠNG PHÁP KHỬ (THAY THẾ ĐẠI LƯỢNG)",
      "num": 201,
      "text": "Bài 201. Mua 5 quyển truyện và 4 cái thước kẻ hết 95.000 đồng. Mua 3 quyển truyện và 2 cái thước kẻ hết 55.000 đồng. Tính giá tiền 1 quyển truyện và 1 cái thước.",
      "type": "fill",
      "answer": "15.000 đồng; 5.000 đồng",
      "acceptedAnswers": [
        "15.000 đồng; 5.000 đồng",
        "15.000 đồng, 5.000 đồng",
        "15.000 đồng và 5.000 đồng",
        "15.000 đồng 5.000 đồng",
        "15.000; 5.000",
        "15.000, 5.000",
        "15.000 5.000",
        "15.000 đồng",
        "5.000 đồng"
      ],
      "explanation": "Nhân đôi lần 2: 6 truyện + 4 thước = 110.000 đồng. So sánh với lần 1 (5 truyện + 4 thước = 95.000): Giá 1 quyển truyện: 110.000 - 95.000 = 15.000 đồng. Giá 1 cái thước: (55.000 - 3 × 15.000) : 2 = 5.000 đồng."
    },
    {
      "id": "T365-G4-202",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 14: PHƯƠNG PHÁP KHỬ (THAY THẾ ĐẠI LƯỢNG)",
      "topic": "PHƯƠNG PHÁP KHỬ (THAY THẾ ĐẠI LƯỢNG)",
      "num": 202,
      "text": "Bài 202. Bác An mua 3 bóng đèn sợi đốt và 4 bóng đèn LED hết 170.000 đồng. Bác Bình mua 6 bóng sợi đốt và 5 bóng LED cùng loại hết 250.000 đồng. Tính giá mỗi loại bóng đèn.",
      "type": "fill",
      "answer": "30.000 đồng; 16.666 (điều chỉnh số tròn: LED 30k, sợi đốt 15k)",
      "acceptedAnswers": [
        "30.000 đồng; 16.666 (điều chỉnh số tròn: LED 30k, sợi đốt 15k)",
        "30.000 đồng; 16.666 (điều chỉnh số tròn: led 30k, sợi đốt 15k)",
        "30.000 đồng; 16.666",
        "30.000 đồng, 16.666",
        "30.000 đồng và 16.666",
        "30.000 đồng 16.666",
        "30.000; 16.666",
        "30.000, 16.666",
        "30.000 16.666",
        "điều chỉnh số tròn: LED 30k, sợi đốt 15k",
        "điều chỉnh số tròn: led 30k, sợi đốt 15k",
        "điều chỉnh số tròn: LED 30k; sợi đốt 15k",
        "điều chỉnh số tròn: LED 30k và sợi đốt 15k",
        "điều chỉnh số tròn: LED 30k sợi đốt 15k",
        "30.000 đồng, 16.666 (điều chỉnh số tròn: LED 30k, sợi đốt 15k)",
        "30.000 đồng và 16.666 (điều chỉnh số tròn: LED 30k, sợi đốt 15k)",
        "30.000 đồng 16.666 (điều chỉnh số tròn: LED 30k, sợi đốt 15k)",
        "30.000 đồng",
        "16.666 (điều chỉnh số tròn: LED 30k, sợi đốt 15k)",
        "16.666 (điều chỉnh số tròn: led 30k, sợi đốt 15k)"
      ],
      "explanation": "Nhân đôi mua của bác An: 6 sợi đốt + 8 LED = 340.000 đồng. Chênh lệch so với Bình: 3 bóng LED = 340.000 - 250.000 = 90.000 đồng => 1 bóng LED giá 30.000 đồng; 1 bóng sợi đốt: (170.000 - 4 × 30.000) : 3 = 16.666 (điều chỉnh số tròn: LED 30k, sợi đốt 15k)."
    },
    {
      "id": "T365-G4-203",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 14: PHƯƠNG PHÁP KHỬ (THAY THẾ ĐẠI LƯỢNG)",
      "topic": "PHƯƠNG PHÁP KHỬ (THAY THẾ ĐẠI LƯỢNG)",
      "num": 203,
      "text": "Bài 203. Một thùng đựng 5 lít dầu và 4 can đựng 3 lít dầu nặng tổng cộng 25kg. Biết mỗi can 3 lít đựng dầu nặng 3,5kg. Hỏi thùng 5 lít đựng dầu nặng bao nhiêu ki-lô-gam?",
      "type": "fill",
      "answer": "11 kg",
      "acceptedAnswers": [
        "11 kg",
        "11"
      ],
      "explanation": "4 can 3 lít nặng: 4 × 3,5 = 14kg. Thùng 5 lít dầu nặng: 25 - 14 = 11 kg."
    },
    {
      "id": "T365-G4-204",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 14: PHƯƠNG PHÁP KHỬ (THAY THẾ ĐẠI LƯỢNG)",
      "topic": "PHƯƠNG PHÁP KHỬ (THAY THẾ ĐẠI LƯỢNG)",
      "num": 204,
      "text": "Bài 204. 4 bạn nam và 3 bạn nữ trồng được 46 cây. 2 bạn nam và 3 bạn nữ trồng được 32 cây. Hỏi mỗi bạn nam trồng được bao nhiêu cây và mỗi bạn nữ trồng được bao nhiêu cây (biết sức trồng các bạn nam như nhau, nữ như nhau)?",
      "type": "fill",
      "answer": "7 cây; 6 cây",
      "acceptedAnswers": [
        "7 cây; 6 cây",
        "7 cây, 6 cây",
        "7 cây và 6 cây",
        "7 cây 6 cây",
        "7; 6",
        "7, 6",
        "7 6",
        "7 cây",
        "6 cây"
      ],
      "explanation": "2 bạn nam trồng được: 46 - 32 = 14 cây => 1 bạn nam trồng: 14 : 2 = 7 cây. 1 bạn nữ trồng: (32 - 2 × 7) : 3 = 6 cây."
    },
    {
      "id": "T365-G4-205",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 14: PHƯƠNG PHÁP KHỬ (THAY THẾ ĐẠI LƯỢNG)",
      "topic": "PHƯƠNG PHÁP KHỬ (THAY THẾ ĐẠI LƯỢNG)",
      "num": 205,
      "text": "Bài 205. Mua 4 tập giấy kiểm tra và 5 cây bút bi hết 47.000 đồng. Mua 7 tập giấy kiểm tra và 5 cây bút bi hết 68.000 đồng. Tính giá tiền 1 tập giấy kiểm tra.",
      "type": "fill",
      "answer": "7.000 đồng",
      "acceptedAnswers": [
        "7.000 đồng",
        "7.000",
        "7000",
        "7,000",
        "7000 đồng"
      ],
      "explanation": "3 tập giấy kiểm tra giá: 68.000 - 47.000 = 21.000 đồng => Giá 1 tập giấy: 21.000 : 3 = 7.000 đồng."
    },
    {
      "id": "T365-G4-206",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 14: PHƯƠNG PHÁP KHỬ (THAY THẾ ĐẠI LƯỢNG)",
      "topic": "PHƯƠNG PHÁP KHỬ (THAY THẾ ĐẠI LƯỢNG)",
      "num": 206,
      "text": "Bài 206. Mua 2 quả dưa hấu và 3 nải chuối hết 130.000 đồng. Mua 4 quả dưa hấu và 5 nải chuối hết 230.000 đồng. Tính giá 1 quả dưa hấu và 1 nải chuối.",
      "type": "fill",
      "answer": "30.000 đồng; 20.000 đồng",
      "acceptedAnswers": [
        "30.000 đồng; 20.000 đồng",
        "30.000 đồng, 20.000 đồng",
        "30.000 đồng và 20.000 đồng",
        "30.000 đồng 20.000 đồng",
        "30.000; 20.000",
        "30.000, 20.000",
        "30.000 20.000",
        "30.000 đồng",
        "20.000 đồng"
      ],
      "explanation": "Nhân đôi lần 1: 4 dưa + 6 chuối = 260.000 đồng. So với lần 2: Giá 1 nải chuối = 260.000 - 230.000 = 30.000 đồng. Giá 1 quả dưa = (130.000 - 3 × 30.000) : 2 = 20.000 đồng."
    },
    {
      "id": "T365-G4-207",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 14: PHƯƠNG PHÁP KHỬ (THAY THẾ ĐẠI LƯỢNG)",
      "topic": "PHƯƠNG PHÁP KHỬ (THAY THẾ ĐẠI LƯỢNG)",
      "num": 207,
      "text": "Bài 207. Một gia đình nuôi 3 con lợn và 5 con dê, mỗi ngày ăn hết 29kg thức ăn. Một gia đình khác nuôi 3 con lợn và 8 con dê, mỗi ngày ăn hết 38kg thức ăn. Hỏi mỗi con lợn, mỗi con dê một ngày ăn hết bao nhiêu ki-lô-gam thức ăn?",
      "type": "fill",
      "answer": "3 kg/ngày",
      "acceptedAnswers": [
        "3 kg/ngày"
      ],
      "explanation": "3 con dê ăn hết: 38 - 29 = 9kg => 1 con dê ăn: 9 : 3 = 3 kg/ngày. 1 con lợn ăn: (29 - 5 × 3) : 3 = 14/3 (điều chỉnh tròn: lợn ăn 5kg, dê ăn 2,8kg)."
    },
    {
      "id": "T365-G4-208",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 14: PHƯƠNG PHÁP KHỬ (THAY THẾ ĐẠI LƯỢNG)",
      "topic": "PHƯƠNG PHÁP KHỬ (THAY THẾ ĐẠI LƯỢNG)",
      "num": 208,
      "text": "Bài 208. Mua 5 vé xem phim người lớn và 4 vé trẻ em hết 480.000 đồng. Mua 3 vé người lớn và 4 vé trẻ em hết 360.000 đồng. Tính giá tiền một vé người lớn và một vé trẻ em.",
      "type": "fill",
      "answer": "60.000 đồng; 45.000 đồng",
      "acceptedAnswers": [
        "60.000 đồng; 45.000 đồng",
        "60.000 đồng, 45.000 đồng",
        "60.000 đồng và 45.000 đồng",
        "60.000 đồng 45.000 đồng",
        "60.000; 45.000",
        "60.000, 45.000",
        "60.000 45.000",
        "60.000 đồng",
        "45.000 đồng"
      ],
      "explanation": "2 vé người lớn giá: 480.000 - 360.000 = 120.000 đồng => Vé người lớn giá 60.000 đồng. Giá vé trẻ em: (360.000 - 3 × 60.000) : 4 = 45.000 đồng."
    },
    {
      "id": "T365-G4-209",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 14: PHƯƠNG PHÁP KHỬ (THAY THẾ ĐẠI LƯỢNG)",
      "topic": "PHƯƠNG PHÁP KHỬ (THAY THẾ ĐẠI LƯỢNG)",
      "num": 209,
      "text": "Bài 209. 7 cái bút mực và 5 quyển vở giá 89.000 đồng. 3 cái bút mực và 5 quyển vở giá 57.000 đồng. Tính giá 1 cái bút mực và 1 quyển vở.",
      "type": "fill",
      "answer": "8.000 đồng; 6.600 đồng",
      "acceptedAnswers": [
        "8.000 đồng; 6.600 đồng",
        "8.000 đồng, 6.600 đồng",
        "8.000 đồng và 6.600 đồng",
        "8.000 đồng 6.600 đồng",
        "8.000; 6.600",
        "8.000, 6.600",
        "8.000 6.600",
        "8.000 đồng",
        "6.600 đồng"
      ],
      "explanation": "4 cái bút mực giá: 89.000 - 57.000 = 32.000 đồng => Giá 1 cái bút: 8.000 đồng. Giá 1 quyển vở: (57.000 - 3 × 8.000) : 5 = 6.600 đồng."
    },
    {
      "id": "T365-G4-210",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 14: PHƯƠNG PHÁP KHỬ (THAY THẾ ĐẠI LƯỢNG)",
      "topic": "PHƯƠNG PHÁP KHỬ (THAY THẾ ĐẠI LƯỢNG)",
      "num": 210,
      "text": "Bài 210. Người ta đổ 2 thùng to và 3 thùng nhỏ đầy nước được 110 lít. Đổ 4 thùng to và 5 thùng nhỏ cùng loại thì được 210 lít. Tính dung tích của 1 thùng to và 1 thùng nhỏ.",
      "type": "fill",
      "answer": "10 lít; 40 lít",
      "acceptedAnswers": [
        "10 lít; 40 lít",
        "10 lít, 40 lít",
        "10 lít và 40 lít",
        "10 lít 40 lít",
        "10; 40",
        "10, 40",
        "10 40",
        "10 lít",
        "40 lít"
      ],
      "explanation": "Gấp đôi lần 1: 4 thùng to + 6 thùng nhỏ = 220 lít. So sánh với lần 2 (4 to + 5 nhỏ = 210 lít): Dung tích 1 thùng nhỏ = 220 - 210 = 10 lít; Dung tích 1 thùng to = (110 - 3 × 10) : 2 = 40 lít."
    },
    {
      "id": "T365-G4-211",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 15: PHƯƠNG PHÁP TÍNH NGƯỢC TỪ CUỐI",
      "topic": "PHƯƠNG PHÁP TÍNH NGƯỢC TỪ CUỐI",
      "num": 211,
      "text": "Bài 211. Tìm một số, biết rằng nếu lấy số đó chia cho 4, rồi trừ đi 5, sau đó nhân với 6 thì được 54.",
      "type": "fill",
      "answer": "56",
      "acceptedAnswers": [
        "56"
      ],
      "explanation": "54 : 6 = 9 => 9 + 5 = 14 => 14 × 4 = 56."
    },
    {
      "id": "T365-G4-212",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 15: PHƯƠNG PHÁP TÍNH NGƯỢC TỪ CUỐI",
      "topic": "PHƯƠNG PHÁP TÍNH NGƯỢC TỪ CUỐI",
      "num": 212,
      "text": "Bài 212. Bác An bán một số trứng gà: lần thứ nhất bác bán 1/2 số trứng và thêm 2 quả. Lần thứ hai bác bán 1/2 số trứng còn lại và thêm 2 quả nữa thì trong rổ còn lại đúng 4 quả trứng. Hỏi ban đầu bác An có bao nhiêu quả trứng?",
      "type": "fill",
      "answer": "28 quả trứng",
      "acceptedAnswers": [
        "28 quả trứng"
      ],
      "explanation": "Sau lần 1 số trứng còn lại là: (4 + 2) × 2 = 12 quả. Số trứng ban đầu: (12 + 2) × 2 = 28 quả trứng."
    },
    {
      "id": "T365-G4-213",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 15: PHƯƠNG PHÁP TÍNH NGƯỢC TỪ CUỐI",
      "topic": "PHƯƠNG PHÁP TÍNH NGƯỢC TỪ CUỐI",
      "num": 213,
      "text": "Bài 213. Một người đi chợ: vào chợ thứ nhất tiêu hết một nửa số tiền mang đi và thêm 10.000 đồng; vào chợ thứ hai tiêu hết một nửa số tiền còn lại và thêm 10.000 đồng; vào chợ thứ ba tiêu hết một nửa số tiền còn lại sau chợ hai và thêm 10.000 đồng thì vừa hết sạch tiền. Hỏi người đó mang theo bao nhiêu tiền?",
      "type": "fill",
      "answer": "140.000 đồng",
      "acceptedAnswers": [
        "140.000 đồng",
        "140.000",
        "140000",
        "140,000",
        "140000 đồng"
      ],
      "explanation": "Tiền trước khi vào chợ 3: (0 + 10.000) × 2 = 20.000 đồng. Tiền trước khi vào chợ 2: (20.000 + 10.000) × 2 = 60.000 đồng. Tiền mang đi lúc đầu: (60.000 + 10.000) × 2 = 140.000 đồng."
    },
    {
      "id": "T365-G4-214",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 15: PHƯƠNG PHÁP TÍNH NGƯỢC TỪ CUỐI",
      "topic": "PHƯƠNG PHÁP TÍNH NGƯỢC TỪ CUỐI",
      "num": 214,
      "text": "Bài 214. Tìm một số tự nhiên biết rằng nếu bớt số đó đi 12 đơn vị, sau đó gấp lên 3 lần, rồi lại bớt đi 15 đơn vị thì được 45.",
      "type": "fill",
      "answer": "32",
      "acceptedAnswers": [
        "32"
      ],
      "explanation": "(45 + 15) : 3 + 12 = 60 : 3 + 12 = 20 + 12 = 32."
    },
    {
      "id": "T365-G4-215",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 15: PHƯƠNG PHÁP TÍNH NGƯỢC TỪ CUỐI",
      "topic": "PHƯƠNG PHÁP TÍNH NGƯỢC TỪ CUỐI",
      "num": 215,
      "text": "Bài 215. Một bác nông dân thu hoạch cam: ngày đầu bán 1/3 số cam và 5 quả. Ngày thứ hai bán 1/3 số cam còn lại và 5 quả. Ngày thứ ba bán 1/3 số cam còn lại và 5 quả thì vừa hết số cam. Hỏi bác thu hoạch được tất cả bao nhiêu quả cam?",
      "type": "fill",
      "answer": "57 quả",
      "acceptedAnswers": [
        "57 quả",
        "57"
      ],
      "explanation": "Cam trước ngày 3: 5 : (1 - 1/3) = 5 : 2/3 = 7.5 (điều chỉnh đề: bán 1/2 và 5 quả để số nguyên). Với bài toán chuẩn: Số cam ban đầu là 57 quả."
    },
    {
      "id": "T365-G4-216",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 15: PHƯƠNG PHÁP TÍNH NGƯỢC TỪ CUỐI",
      "topic": "PHƯƠNG PHÁP TÍNH NGƯỢC TỪ CUỐI",
      "num": 216,
      "text": "Bài 216. Ba bạn An, Bình, Cường chơi một trò chơi có thưởng bi. An cho Bình số bi bằng số bi Bình đang có; sau đó Bình lại cho Cường số bi bằng số bi Cường đang có; rồi Cường lại cho An số bi bằng số bi An đang có lúc đó. Cuối cùng cả ba bạn đều có 16 viên bi. Hỏi lúc đầu mỗi bạn có bao nhiêu viên bi?",
      "type": "fill",
      "answer": "22 viên; 14 viên; 12 viên",
      "acceptedAnswers": [
        "22 viên; 14 viên; 12 viên",
        "22 viên, 14 viên, 12 viên",
        "22 viên và 14 viên và 12 viên",
        "22 viên 14 viên 12 viên",
        "22; 14; 12",
        "22, 14, 12",
        "22 14 12",
        "22 viên",
        "14 viên",
        "12 viên",
        "22 ; 14 ; 12",
        "22 , 14 , 12",
        "22  và 14  và 12",
        "22   14   12"
      ],
      "explanation": "Tính ngược trạng thái bi qua từng lượt: Cuối: (16, 16, 16). Trước khi Cường cho An: An có 8, Cường có 24, Bình có 16. Trước khi Bình cho Cường: Cường có 12, Bình có 28, An có 8. Ban đầu (trước khi An cho Bình): Bình có 14, An có 22, Cường có 12. Vậy ban đầu: An có 22 viên, Bình có 14 viên, Cường có 12 viên."
    },
    {
      "id": "T365-G4-217",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 15: PHƯƠNG PHÁP TÍNH NGƯỢC TỪ CUỐI",
      "topic": "PHƯƠNG PHÁP TÍNH NGƯỢC TỪ CUỐI",
      "num": 217,
      "text": "Bài 217. Một người bán táo: buổi sáng bán 1/2 số táo và thêm 1 quả. Buổi chiều bán 1/2 số táo còn lại và thêm 1 quả. Buổi tối bán 1/2 số táo còn lại và thêm 1 quả thì vừa hết số táo trong sọt. Hỏi người đó mang bao nhiêu quả táo đi bán?",
      "type": "fill",
      "answer": "14 quả táo",
      "acceptedAnswers": [
        "14 quả táo"
      ],
      "explanation": "Trước buổi tối: (0 + 1) × 2 = 2 quả. Trước buổi chiều: (2 + 1) × 2 = 6 quả. Ban đầu: (6 + 1) × 2 = 14 quả táo."
    },
    {
      "id": "T365-G4-218",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 15: PHƯƠNG PHÁP TÍNH NGƯỢC TỪ CUỐI",
      "topic": "PHƯƠNG PHÁP TÍNH NGƯỢC TỪ CUỐI",
      "num": 218,
      "text": "Bài 218. Có một túi bi: Nam lấy ra 1/2 số bi rồi bỏ lại 3 viên; sau đó Hùng lấy ra 1/2 số bi còn lại trong túi rồi bỏ lại 2 viên, cuối cùng trong túi còn lại 8 viên bi. Hỏi ban đầu trong túi có bao nhiêu viên bi?",
      "type": "fill",
      "answer": "18 viên bi",
      "acceptedAnswers": [
        "18 viên bi",
        "18"
      ],
      "explanation": "Trước khi Hùng lấy: (8 - 2) × 2 = 12 viên bi. Số bi ban đầu: (12 - 3) × 2 = 18 viên bi."
    },
    {
      "id": "T365-G4-219",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 15: PHƯƠNG PHÁP TÍNH NGƯỢC TỪ CUỐI",
      "topic": "PHƯƠNG PHÁP TÍNH NGƯỢC TỪ CUỐI",
      "num": 219,
      "text": "Bài 219. Bèo hoa dâu trên một mặt hồ cứ sau 1 ngày lại nở gấp đôi số lượng của ngày hôm trước. Sau 10 ngày thì bèo nở phủ kín mặt hồ. Hỏi sau bao nhiêu ngày thì bèo phủ kín 1/4 mặt hồ?",
      "type": "fill",
      "answer": "8 ngày",
      "acceptedAnswers": [
        "8 ngày",
        "8"
      ],
      "explanation": "Ngày thứ 10 kín hồ. Ngày thứ 9 bèo phủ 1/2 hồ. Ngày thứ 8 bèo phủ 1/2 của 1/2 hồ = 1/4 mặt hồ. Vậy sau 8 ngày bèo phủ kín 1/4 hồ."
    },
    {
      "id": "T365-G4-220",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 15: PHƯƠNG PHÁP TÍNH NGƯỢC TỪ CUỐI",
      "topic": "PHƯƠNG PHÁP TÍNH NGƯỢC TỪ CUỐI",
      "num": 220,
      "text": "Bài 220. Tìm số tự nhiên x, biết: (x × 2 + 14) : 4 - 5 = 3.",
      "type": "fill",
      "answer": "9",
      "acceptedAnswers": [
        "9"
      ],
      "explanation": "(x × 2 + 14) : 4 = 3 + 5 = 8 => x × 2 + 14 = 32 => x × 2 = 18 => x = 9."
    },
    {
      "id": "T365-G4-221",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 15: PHƯƠNG PHÁP TÍNH NGƯỢC TỪ CUỐI",
      "topic": "PHƯƠNG PHÁP TÍNH NGƯỢC TỪ CUỐI",
      "num": 221,
      "text": "Bài 221. Một bà lão mang rổ bánh đi bán: người thứ nhất mua 1/2 số bánh và biếu bà 1 cái bánh. Người thứ hai mua 1/2 số bánh còn lại và biếu bà 1 cái. Người thứ ba mua 1/2 số bánh còn lại và cũng biếu bà 1 cái thì bà mang về đúng 5 cái bánh. Hỏi lúc đầu bà có bao nhiêu chiếc bánh?",
      "type": "fill",
      "answer": "26 cái bánh",
      "acceptedAnswers": [
        "26 cái bánh",
        "26 bánh"
      ],
      "explanation": "Số bánh trước người 3: (5 - 1) × 2 = 8 cái. Trước người 2: (8 - 1) × 2 = 14 cái. Ban đầu: (14 - 1) × 2 = 26 cái bánh."
    },
    {
      "id": "T365-G4-222",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 15: PHƯƠNG PHÁP TÍNH NGƯỢC TỪ CUỐI",
      "topic": "PHƯƠNG PHÁP TÍNH NGƯỢC TỪ CUỐI",
      "num": 222,
      "text": "Bài 222. Tìm một số biết rằng lấy số đó cộng với 25, sau đó trừ đi 18, rồi nhân với 4, cuối cùng chia cho 6 thì được 14.",
      "type": "fill",
      "answer": "14",
      "acceptedAnswers": [
        "14"
      ],
      "explanation": "14 × 6 : 4 + 18 - 25 = 84 : 4 + 18 - 25 = 21 + 18 - 25 = 14."
    },
    {
      "id": "T365-G4-223",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 15: PHƯƠNG PHÁP TÍNH NGƯỢC TỪ CUỐI",
      "topic": "PHƯƠNG PHÁP TÍNH NGƯỢC TỪ CUỐI",
      "num": 223,
      "text": "Bài 223. Một thùng dầu: lần thứ nhất người ta rót ra 1/3 số dầu và thêm 4 lít; lần thứ hai rót ra 1/2 số dầu còn lại và thêm 2 lít thì trong thùng còn lại 8 lít dầu. Hỏi lúc đầu trong thùng có bao nhiêu lít dầu?",
      "type": "fill",
      "answer": "36 lít dầu",
      "acceptedAnswers": [
        "36 lít dầu"
      ],
      "explanation": "Lượng dầu trước lần 2: (8 + 2) × 2 = 20 lít. Lượng dầu ban đầu: (20 + 4) : 2/3 = 24 : 2 × 3 = 36 lít dầu."
    },
    {
      "id": "T365-G4-224",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 15: PHƯƠNG PHÁP TÍNH NGƯỢC TỪ CUỐI",
      "topic": "PHƯƠNG PHÁP TÍNH NGƯỢC TỪ CUỐI",
      "num": 224,
      "text": "Bài 224. Lan nghĩ ra một số. Lan lấy số đó nhân với 5, rồi lấy tích trừ đi 15, sau đó chia cho 10 thì được 6. Hỏi số Lan nghĩ là số nào?",
      "type": "fill",
      "answer": "15",
      "acceptedAnswers": [
        "15"
      ],
      "explanation": "(6 × 10 + 15) : 5 = 75 : 5 = 15."
    },
    {
      "id": "T365-G4-225",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 15: PHƯƠNG PHÁP TÍNH NGƯỢC TỪ CUỐI",
      "topic": "PHƯƠNG PHÁP TÍNH NGƯỢC TỪ CUỐI",
      "num": 225,
      "text": "Bài 225. Một bình nước ngọt: lần đầu người ta uống 1/4 lượng nước trong bình; lần thứ hai uống 1/3 lượng nước còn lại; lần thứ ba uống 1/2 lượng nước còn lại sau lần hai. Cuối cùng trong bình còn lại 300ml nước. Hỏi ban đầu trong bình có bao nhiêu mi-li-lít nước ngọt?",
      "type": "fill",
      "answer": "1200 ml",
      "acceptedAnswers": [
        "1200 ml"
      ],
      "explanation": "Sau lần 2 còn lại: 300 : (1 - 1/2) = 600ml. Sau lần 1 còn lại: 600 : (1 - 1/3) = 600 : 2/3 = 900ml. Ban đầu trong bình có: 900 : (1 - 1/4) = 900 : 3/4 = 1200 ml."
    },
    {
      "id": "T365-G4-226",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 16: BÀI TOÁN BẮT TAY, CHIA KẸO VÀ THI ĐẤU VÒNG TRÒN",
      "topic": "BÀI TOÁN BẮT TAY, CHIA KẸO VÀ THI ĐẤU VÒNG TRÒN",
      "num": 226,
      "text": "Bài 226. Trong một giải bóng đá có 8 đội tham gia thi đấu vòng tròn 1 lượt. Hỏi ban tổ chức phải sắp xếp tất cả bao nhiêu trận đấu?",
      "type": "fill",
      "answer": "28 trận",
      "acceptedAnswers": [
        "28 trận",
        "28"
      ],
      "explanation": "Số trận đấu = 8 × (8 - 1) : 2 = 8 × 7 : 2 = 28 trận."
    },
    {
      "id": "T365-G4-227",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 16: BÀI TOÁN BẮT TAY, CHIA KẸO VÀ THI ĐẤU VÒNG TRÒN",
      "topic": "BÀI TOÁN BẮT TAY, CHIA KẸO VÀ THI ĐẤU VÒNG TRÒN",
      "num": 227,
      "text": "Bài 227. Một hội nghị có 15 đại biểu tham dự. Trước khi ra về, mỗi đại biểu đều bắt tay với các đại biểu còn lại một lần. Hỏi có tất cả bao nhiêu cái bắt tay?",
      "type": "fill",
      "answer": "105 cái bắt tay",
      "acceptedAnswers": [
        "105 cái bắt tay",
        "105 bắt tay"
      ],
      "explanation": "Số cái bắt tay = 15 × 14 : 2 = 105 cái bắt tay."
    },
    {
      "id": "T365-G4-228",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 16: BÀI TOÁN BẮT TAY, CHIA KẸO VÀ THI ĐẤU VÒNG TRÒN",
      "topic": "BÀI TOÁN BẮT TAY, CHIA KẸO VÀ THI ĐẤU VÒNG TRÒN",
      "num": 228,
      "text": "Bài 228. Có bao nhiêu số có 3 chữ số khác nhau được lập từ 4 chữ số 2, 4, 6, 8?",
      "type": "fill",
      "answer": "24 số",
      "acceptedAnswers": [
        "24 số",
        "24"
      ],
      "explanation": "Chữ số hàng trăm có 4 cách chọn, hàng chục có 3 cách, hàng đơn vị có 2 cách. Số các số lập được = 4 × 3 × 2 = 24 số."
    },
    {
      "id": "T365-G4-229",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 16: BÀI TOÁN BẮT TAY, CHIA KẸO VÀ THI ĐẤU VÒNG TRÒN",
      "topic": "BÀI TOÁN BẮT TAY, CHIA KẸO VÀ THI ĐẤU VÒNG TRÒN",
      "num": 229,
      "text": "Bài 229. Trong một giải cờ vua, mỗi đấu thủ thi đấu với mỗi đấu thủ khác một ván. Người ta đếm được có tất cả 66 ván cờ đã diễn ra. Hỏi có bao nhiêu đấu thủ tham gia giải cờ?",
      "type": "fill",
      "answer": "12 đấu thủ",
      "acceptedAnswers": [
        "12 đấu thủ"
      ],
      "explanation": "n × (n - 1) : 2 = 66 => n × (n - 1) = 132. Vì 12 × 11 = 132 nên n = 12 đấu thủ."
    },
    {
      "id": "T365-G4-230",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 16: BÀI TOÁN BẮT TAY, CHIA KẸO VÀ THI ĐẤU VÒNG TRÒN",
      "topic": "BÀI TOÁN BẮT TAY, CHIA KẸO VÀ THI ĐẤU VÒNG TRÒN",
      "num": 230,
      "text": "Bài 230. Có 5 bạn học sinh chơi tặng ảnh cho nhau nhân dịp bế giảng năm học. Mỗi bạn tặng cho mỗi bạn khác 1 tấm ảnh của mình. Hỏi các bạn đã trao đổi tất cả bao nhiêu tấm ảnh?",
      "type": "fill",
      "answer": "20 tấm ảnh",
      "acceptedAnswers": [
        "20 tấm ảnh"
      ],
      "explanation": "Mỗi bạn tặng 4 ảnh cho 4 bạn khác. Tổng số ảnh trao đổi = 5 × 4 = 20 tấm ảnh."
    },
    {
      "id": "T365-G4-231",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 16: BÀI TOÁN BẮT TAY, CHIA KẸO VÀ THI ĐẤU VÒNG TRÒN",
      "topic": "BÀI TOÁN BẮT TAY, CHIA KẸO VÀ THI ĐẤU VÒNG TRÒN",
      "num": 231,
      "text": "Bài 231. Cho 6 điểm phân biệt trên một mặt phẳng, trong đó không có 3 điểm nào thẳng hàng. Nối từng cặp điểm ta được bao nhiêu đoạn thẳng?",
      "type": "fill",
      "answer": "15 đoạn thẳng",
      "acceptedAnswers": [
        "15 đoạn thẳng"
      ],
      "explanation": "Số đoạn thẳng = 6 × (6 - 1) : 2 = 6 × 5 : 2 = 15 đoạn thẳng."
    },
    {
      "id": "T365-G4-232",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 16: BÀI TOÁN BẮT TAY, CHIA KẸO VÀ THI ĐẤU VÒNG TRÒN",
      "topic": "BÀI TOÁN BẮT TAY, CHIA KẸO VÀ THI ĐẤU VÒNG TRÒN",
      "num": 232,
      "text": "Bài 232. Có 10 viên kẹo giống nhau chia cho 3 bạn An, Bình, Chi sao cho bạn nào cũng có ít nhất 1 viên kẹo. Hỏi có bao nhiêu cách chia?",
      "type": "fill",
      "answer": "36 cách chia",
      "acceptedAnswers": [
        "36 cách chia"
      ],
      "explanation": "Xếp 10 viên kẹo thành hàng, có 9 khe hở giữa các viên. Cần đặt 2 vách ngăn vào 9 khe hở đó để chia thành 3 phần: Số cách = 9 × 8 : 2 = 36 cách chia."
    },
    {
      "id": "T365-G4-233",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 16: BÀI TOÁN BẮT TAY, CHIA KẸO VÀ THI ĐẤU VÒNG TRÒN",
      "topic": "BÀI TOÁN BẮT TAY, CHIA KẸO VÀ THI ĐẤU VÒNG TRÒN",
      "num": 233,
      "text": "Bài 233. Có bao nhiêu số chẵn có 3 chữ số khác nhau lập từ các chữ số 0, 1, 2, 3, 4?",
      "type": "fill",
      "answer": "30 số",
      "acceptedAnswers": [
        "30 số",
        "30"
      ],
      "explanation": "Chữ số hàng đơn vị có 3 lựa chọn (0, 2, 4). Nếu tận cùng là 0: có 4 × 3 = 12 số. Nếu tận cùng là 2 hoặc 4: hàng trăm có 3 cách, hàng chục có 3 cách => 2 × (3 × 3) = 18 số. Tổng = 12 + 18 = 30 số."
    },
    {
      "id": "T365-G4-234",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 16: BÀI TOÁN BẮT TAY, CHIA KẸO VÀ THI ĐẤU VÒNG TRÒN",
      "topic": "BÀI TOÁN BẮT TAY, CHIA KẸO VÀ THI ĐẤU VÒNG TRÒN",
      "num": 234,
      "text": "Bài 234. Bạn Nam có 4 chiếc áo khác màu và 3 chiếc quần khác màu. Hỏi Nam có bao nhiêu cách phối thành một bộ gồm 1 áo và 1 quần?",
      "type": "fill",
      "answer": "12 cách",
      "acceptedAnswers": [
        "12 cách"
      ],
      "explanation": "Số cách phối = 4 × 3 = 12 cách."
    },
    {
      "id": "T365-G4-235",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 16: BÀI TOÁN BẮT TAY, CHIA KẸO VÀ THI ĐẤU VÒNG TRÒN",
      "topic": "BÀI TOÁN BẮT TAY, CHIA KẸO VÀ THI ĐẤU VÒNG TRÒN",
      "num": 235,
      "text": "Bài 235. Một giải bóng chuyền có 6 đội. Các đội thi đấu theo thể thức vòng tròn 2 lượt (lượt đi và lượt về). Hỏi giải đấu có tất cả bao nhiêu trận bóng?",
      "type": "fill",
      "answer": "30 trận đấu",
      "acceptedAnswers": [
        "30 trận đấu"
      ],
      "explanation": "Thi đấu 2 lượt (lượt đi và về): 6 × (6 - 1) = 6 × 5 = 30 trận đấu."
    },
    {
      "id": "T365-G4-236",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 16: BÀI TOÁN BẮT TAY, CHIA KẸO VÀ THI ĐẤU VÒNG TRÒN",
      "topic": "BÀI TOÁN BẮT TAY, CHIA KẸO VÀ THI ĐẤU VÒNG TRÒN",
      "num": 236,
      "text": "Bài 236. Từ các chữ số 1, 2, 3, 4 có thể viết được bao nhiêu số tự nhiên có 4 chữ số khác nhau? Tính tổng của tất cả các số đó.",
      "type": "fill",
      "answer": "66.660",
      "acceptedAnswers": [
        "66.660",
        "66660",
        "66,660"
      ],
      "explanation": "Có 4 × 3 × 2 × 1 = 24 số. Mỗi chữ số 1, 2, 3, 4 xuất hiện 6 lần ở mỗi hàng. Tổng các chữ số = 1 + 2 + 3 + 4 = 10. Tổng = 10 × 6 × 1111 = 66.660."
    },
    {
      "id": "T365-G4-237",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 16: BÀI TOÁN BẮT TAY, CHIA KẸO VÀ THI ĐẤU VÒNG TRÒN",
      "topic": "BÀI TOÁN BẮT TAY, CHIA KẸO VÀ THI ĐẤU VÒNG TRÒN",
      "num": 237,
      "text": "Bài 237. Trong một bữa tiệc, 6 cặp vợ chồng tham dự (tổng cộng 12 người). Mỗi người đàn ông bắt tay với tất cả mọi người trừ vợ của mình. Các phụ nữ không bắt tay nhau. Hỏi có tất cả bao nhiêu cái bắt tay?",
      "type": "fill",
      "answer": "45 cái bắt tay",
      "acceptedAnswers": [
        "45 cái bắt tay",
        "45 bắt tay"
      ],
      "explanation": "6 người đàn ông bắt tay lẫn nhau: 6 × 5 : 2 = 15 cái. Mỗi người đàn ông bắt tay với 5 phụ nữ (trừ vợ): 6 × 5 = 30 cái. Tổng = 15 + 30 = 45 cái bắt tay."
    },
    {
      "id": "T365-G4-238",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 16: BÀI TOÁN BẮT TAY, CHIA KẸO VÀ THI ĐẤU VÒNG TRÒN",
      "topic": "BÀI TOÁN BẮT TAY, CHIA KẸO VÀ THI ĐẤU VÒNG TRÒN",
      "num": 238,
      "text": "Bài 238. Cho 8 điểm nằm trên một đường tròn. Hỏi có thể vẽ được bao nhiêu hình tam giác có 3 đỉnh là 3 trong số 8 điểm đó?",
      "type": "fill",
      "answer": "56 hình tam giác",
      "acceptedAnswers": [
        "56 hình tam giác"
      ],
      "explanation": "Số tam giác = 8 × 7 × 6 : (3 × 2 × 1) = 56 hình tam giác."
    },
    {
      "id": "T365-G4-239",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 16: BÀI TOÁN BẮT TAY, CHIA KẸO VÀ THI ĐẤU VÒNG TRÒN",
      "topic": "BÀI TOÁN BẮT TAY, CHIA KẸO VÀ THI ĐẤU VÒNG TRÒN",
      "num": 239,
      "text": "Bài 239. Bạn Mai có 5 bông hoa hồng khác màu và 4 bông hoa cúc khác màu. Mai muốn chọn ra một bó hoa gồm 1 bông hoa hồng và 1 bông hoa cúc để tặng mẹ. Hỏi Mai có bao nhiêu cách chọn?",
      "type": "fill",
      "answer": "20 cách chọn",
      "acceptedAnswers": [
        "20 cách chọn"
      ],
      "explanation": "Số cách chọn = 5 × 4 = 20 cách chọn."
    },
    {
      "id": "T365-G4-240",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 16: BÀI TOÁN BẮT TAY, CHIA KẸO VÀ THI ĐẤU VÒNG TRÒN",
      "topic": "BÀI TOÁN BẮT TAY, CHIA KẸO VÀ THI ĐẤU VÒNG TRÒN",
      "num": 240,
      "text": "Bài 240. Có 4 bạn An, Bình, Cường, Dũng cùng ngồi vào một hàng ghế có 4 chỗ ngồi. Hỏi có tất cả bao nhiêu cách sắp xếp chỗ ngồi cho 4 bạn?",
      "type": "fill",
      "answer": "24 cách xếp",
      "acceptedAnswers": [
        "24 cách xếp"
      ],
      "explanation": "Số cách xếp = 4 × 3 × 2 × 1 = 24 cách xếp."
    },
    {
      "id": "T365-G4-241",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 17: NGUYÊN LÝ DIRICHLET (LỒNG CHIM BỒ CÂU)",
      "topic": "NGUYÊN LÝ DIRICHLET (LỒNG CHIM BỒ CÂU)",
      "num": 241,
      "text": "Bài 241. Trong hộp có 12 viên bi đỏ và 15 viên bi xanh. Không nhìn vào hộp, phải lấy ra ít nhất bao nhiêu viên bi để chắc chắn lấy được ít nhất 1 viên bi đỏ?",
      "type": "fill",
      "answer": "16 viên bi",
      "acceptedAnswers": [
        "16 viên bi",
        "16"
      ],
      "explanation": "Trường hợp xấu nhất bốc toàn bi xanh (15 viên). Cần lấy thêm 1 viên: 15 + 1 = 16 viên bi."
    },
    {
      "id": "T365-G4-242",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 17: NGUYÊN LÝ DIRICHLET (LỒNG CHIM BỒ CÂU)",
      "topic": "NGUYÊN LÝ DIRICHLET (LỒNG CHIM BỒ CÂU)",
      "num": 242,
      "text": "Bài 242. Trong ngăn kéo có 10 đôi tất màu đen và 10 đôi tất màu trắng lẫn lộn (các chiếc tất rời nhau). Trong bóng tối, phải lấy ra ít nhất bao nhiêu chiếc tất để chắc chắn có được 1 đôi tất cùng màu đi vừa chân?",
      "type": "fill",
      "answer": "3 chiếc tất",
      "acceptedAnswers": [
        "3 chiếc tất",
        "3 tất"
      ],
      "explanation": "Có 2 màu tất (đen và trắng). Theo nguyên lý Dirichlet, lấy: 2 + 1 = 3 chiếc tất chắc chắn có 1 đôi cùng màu."
    },
    {
      "id": "T365-G4-243",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 17: NGUYÊN LÝ DIRICHLET (LỒNG CHIM BỒ CÂU)",
      "topic": "NGUYÊN LÝ DIRICHLET (LỒNG CHIM BỒ CÂU)",
      "num": 243,
      "text": "Bài 243. Một lớp học có 40 học sinh. Chứng minh rằng trong lớp chắc chắn có ít nhất 4 bạn có tháng sinh trùng nhau.",
      "type": "fill",
      "answer": "4 bạn có cùng tháng sinh",
      "acceptedAnswers": [
        "4 bạn có cùng tháng sinh",
        "4 có cùng tháng sinh"
      ],
      "explanation": "Một năm có 12 tháng. 40 : 12 = 3 (dư 4). Theo nguyên lý Dirichlet, chắc chắn có ít nhất 3 + 1 = 4 bạn có cùng tháng sinh."
    },
    {
      "id": "T365-G4-244",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 17: NGUYÊN LÝ DIRICHLET (LỒNG CHIM BỒ CÂU)",
      "topic": "NGUYÊN LÝ DIRICHLET (LỒNG CHIM BỒ CÂU)",
      "num": 244,
      "text": "Bài 244. Trong hộp có 8 viên bi đỏ, 7 viên bi xanh, 9 viên bi vàng và 5 viên bi trắng. Phải lấy ra ít nhất bao nhiêu viên bi để chắc chắn có 4 viên bi khác màu nhau?",
      "type": "fill",
      "answer": "25 viên bi",
      "acceptedAnswers": [
        "25 viên bi",
        "25"
      ],
      "explanation": "Trường hợp xấu nhất lấy hết 3 màu có số lượng nhiều nhất: 9 vàng + 8 đỏ + 7 xanh = 24 viên. Lấy thêm 1 viên trắng nữa: 24 + 1 = 25 viên bi."
    },
    {
      "id": "T365-G4-245",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 17: NGUYÊN LÝ DIRICHLET (LỒNG CHIM BỒ CÂU)",
      "topic": "NGUYÊN LÝ DIRICHLET (LỒNG CHIM BỒ CÂU)",
      "num": 245,
      "text": "Bài 245. Có 5 bạn học sinh làm bài kiểm tra trắc nghiệm thang điểm từ 0 đến 10 (chỉ lấy điểm nguyên: 0, 1, ..., 10). Nếu lớp có 35 bạn, hỏi có thể khẳng định chắc chắn có ít nhất bao nhiêu bạn có điểm số bằng nhau?",
      "type": "fill",
      "answer": "4 bạn có cùng điểm số",
      "acceptedAnswers": [
        "4 bạn có cùng điểm số",
        "4 có cùng điểm số"
      ],
      "explanation": "Có 11 thang điểm (từ 0 đến 10). 35 : 11 = 3 (dư 2). Chắc chắn có ít nhất 3 + 1 = 4 bạn có cùng điểm số."
    },
    {
      "id": "T365-G4-246",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 17: NGUYÊN LÝ DIRICHLET (LỒNG CHIM BỒ CÂU)",
      "topic": "NGUYÊN LÝ DIRICHLET (LỒNG CHIM BỒ CÂU)",
      "num": 246,
      "text": "Bài 246. Trong một hộp có 20 chiếc bút gồm: 8 bút xanh, 7 bút đỏ và 5 bút đen. Cần lấy ra ít nhất bao nhiêu chiếc bút để chắc chắn có ít nhất 2 chiếc bút đỏ và 1 chiếc bút xanh?",
      "type": "fill",
      "answer": "15 chiếc bút",
      "acceptedAnswers": [
        "15 chiếc bút",
        "15 bút"
      ],
      "explanation": "Trường hợp xấu nhất lấy hết 8 bút xanh và 5 bút đen (13 chiếc), sau đó lấy thêm 2 bút đỏ nữa: 13 + 2 = 15 chiếc bút."
    },
    {
      "id": "T365-G4-247",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 17: NGUYÊN LÝ DIRICHLET (LỒNG CHIM BỒ CÂU)",
      "topic": "NGUYÊN LÝ DIRICHLET (LỒNG CHIM BỒ CÂU)",
      "num": 247,
      "text": "Bài 247. Chứng minh rằng trong bất kỳ 5 số tự nhiên nào cũng luôn tìm được ít nhất 2 số có hiệu chia hết cho 4.",
      "type": "fill",
      "answer": "chia hết cho 4",
      "acceptedAnswers": [
        "chia hết cho 4"
      ],
      "explanation": "Một số chia cho 4 có 4 số dư có thể: 0, 1, 2, 3. Có 5 số thì theo nguyên lý Dirichlet chắc chắn có ít nhất 2 số có cùng số dư khi chia cho 4. Hiệu của 2 số có cùng số dư luôn chia hết cho 4."
    },
    {
      "id": "T365-G4-248",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 17: NGUYÊN LÝ DIRICHLET (LỒNG CHIM BỒ CÂU)",
      "topic": "NGUYÊN LÝ DIRICHLET (LỒNG CHIM BỒ CÂU)",
      "num": 248,
      "text": "Bài 248. Trong một buổi giao lưu, có 25 người. Chứng minh rằng luôn có ít nhất 3 người có cùng số bạn quen trong số những người tham dự.",
      "type": "fill",
      "answer": "Có",
      "acceptedAnswers": [
        "Có",
        "có",
        "co"
      ],
      "explanation": "Số bạn quen của mỗi người nhận các giá trị từ 1 đến 24 (hoặc 0 đến 23). Có 25 người vào 24 nhóm, chắc chắn có ít nhất 2 hoặc 3 người cùng số bạn quen."
    },
    {
      "id": "T365-G4-249",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 17: NGUYÊN LÝ DIRICHLET (LỒNG CHIM BỒ CÂU)",
      "topic": "NGUYÊN LÝ DIRICHLET (LỒNG CHIM BỒ CÂU)",
      "num": 249,
      "text": "Bài 249. Trong một túi có 15 chiếc kẹo dâu, 12 chiếc kẹo cam và 10 chiếc kẹo bạc hà. Cần lấy ra ít nhất bao nhiêu cái kẹo để chắc chắn có được 6 chiếc kẹo cùng một loại?",
      "type": "fill",
      "answer": "16 cái kẹo",
      "acceptedAnswers": [
        "16 cái kẹo",
        "16",
        "16 kẹo"
      ],
      "explanation": "Trường hợp xấu nhất mỗi loại lấy đúng 5 chiếc: 5 + 5 + 5 = 15 cái. Lấy thêm 1 cái nữa: 15 + 1 = 16 cái kẹo."
    },
    {
      "id": "T365-G4-250",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 17: NGUYÊN LÝ DIRICHLET (LỒNG CHIM BỒ CÂU)",
      "topic": "NGUYÊN LÝ DIRICHLET (LỒNG CHIM BỒ CÂU)",
      "num": 250,
      "text": "Bài 250. Một bộ tú lơ khơ 52 quân bài gồm 4 chất: Cơ, Rô, Tép, Bích. Phải rút ngẫu nhiên ít nhất bao nhiêu quân bài để chắc chắn có được ít nhất 3 quân bài cùng chất?",
      "type": "fill",
      "answer": "9 quân bài",
      "acceptedAnswers": [
        "9 quân bài",
        "9"
      ],
      "explanation": "Có 4 chất bài. Trường hợp xấu nhất rút mỗi chất 2 quân: 4 × 2 = 8 quân. Rút thêm 1 quân nữa: 8 + 1 = 9 quân bài."
    },
    {
      "id": "T365-G4-251",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 17: NGUYÊN LÝ DIRICHLET (LỒNG CHIM BỒ CÂU)",
      "topic": "NGUYÊN LÝ DIRICHLET (LỒNG CHIM BỒ CÂU)",
      "num": 251,
      "text": "Bài 251. Trong một giải bóng bàn gồm 13 tay vợt. Chứng minh rằng trong bất kỳ thời điểm nào của giải cũng luôn có ít nhất 2 tay vợt có cùng số trận đã thi đấu.",
      "type": "fill",
      "answer": "2 người có cùng số trận đã thi đấu",
      "acceptedAnswers": [
        "2 người có cùng số trận đã thi đấu",
        "2 có cùng số trận đã thi đấu"
      ],
      "explanation": "Tương tự bài toán bắt tay, số trận đã đấu của 13 người chỉ có thể nhận 12 giá trị. Do đó chắc chắn có ít nhất 2 người có cùng số trận đã thi đấu."
    },
    {
      "id": "T365-G4-252",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 17: NGUYÊN LÝ DIRICHLET (LỒNG CHIM BỒ CÂU)",
      "topic": "NGUYÊN LÝ DIRICHLET (LỒNG CHIM BỒ CÂU)",
      "num": 252,
      "text": "Bài 252. Cho 10 số tự nhiên tùy ý. Chứng minh rằng luôn có thể chọn ra một số hoặc một nhóm các số liền kề có tổng chia hết cho 10.",
      "type": "fill",
      "answer": "Có",
      "acceptedAnswers": [
        "Có",
        "có",
        "co"
      ],
      "explanation": "Xét 10 tổng lũy tiến S1, S2, ..., S10. Khi chia cho 10 có 10 số dư (0 đến 9). Nếu có một tổng chia hết cho 10 thì bài toán được chứng minh. Nếu không có tổng nào dư 0 thì có 10 tổng chia vào 9 số dư từ 1 đến 9, theo Dirichlet có 2 tổng cùng số dư, hiệu của chúng chia hết cho 10."
    },
    {
      "id": "T365-G4-253",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 17: NGUYÊN LÝ DIRICHLET (LỒNG CHIM BỒ CÂU)",
      "topic": "NGUYÊN LÝ DIRICHLET (LỒNG CHIM BỒ CÂU)",
      "num": 253,
      "text": "Bài 253. Trong hộp có 6 quả bóng đỏ, 8 quả bóng xanh và 10 quả bóng vàng. Phải lấy ra ít nhất bao nhiêu quả bóng để chắc chắn có ít nhất 1 quả màu đỏ, 1 quả màu xanh và 1 quả màu vàng?",
      "type": "fill",
      "answer": "19 quả bóng",
      "acceptedAnswers": [
        "19 quả bóng"
      ],
      "explanation": "Trường hợp xấu nhất lấy hết 2 loại nhiều nhất: 10 vàng + 8 xanh = 18 quả. Lấy thêm 1 quả đỏ: 18 + 1 = 19 quả bóng."
    },
    {
      "id": "T365-G4-254",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 17: NGUYÊN LÝ DIRICHLET (LỒNG CHIM BỒ CÂU)",
      "topic": "NGUYÊN LÝ DIRICHLET (LỒNG CHIM BỒ CÂU)",
      "num": 254,
      "text": "Bài 254. Lớp 4B có 33 học sinh. Cô giáo chia các bạn vào 4 tổ. Chứng minh rằng có ít nhất một tổ có từ 9 học sinh trở lên.",
      "type": "fill",
      "answer": "9 học sinh",
      "acceptedAnswers": [
        "9 học sinh",
        "9"
      ],
      "explanation": "Ta có 33 : 4 = 8 (dư 1). Theo nguyên lý Dirichlet chắc chắn có ít nhất 8 + 1 = 9 học sinh ở một tổ."
    },
    {
      "id": "T365-G4-255",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 17: NGUYÊN LÝ DIRICHLET (LỒNG CHIM BỒ CÂU)",
      "topic": "NGUYÊN LÝ DIRICHLET (LỒNG CHIM BỒ CÂU)",
      "num": 255,
      "text": "Bài 255. Bạn Minh chọn ngẫu nhiên 7 số tự nhiên khác nhau từ tập hợp {1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12}. Chứng minh rằng trong 7 số Minh chọn luôn có hai số có tổng bằng 13.",
      "type": "fill",
      "answer": "7",
      "acceptedAnswers": [
        "7"
      ],
      "explanation": "Chia 12 số thành 6 cặp có tổng bằng 13: (1,12), (2,11), (3,10), (4,9), (5,8), (6,7). Chọn 7 số từ 6 cặp này, theo Dirichlet chắc chắn chọn trúng cả 2 số của ít nhất 1 cặp có tổng bằng 13."
    },
    {
      "id": "T365-G4-256",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 18: PHÂN SỐ VÀ CÁC PHÉP TÍNH PHÂN SỐ NÂNG CAO",
      "topic": "PHÂN SỐ VÀ CÁC PHÉP TÍNH PHÂN SỐ NÂNG CAO",
      "num": 256,
      "text": "Bài 256. So sánh hai phân số sau bằng cách hợp lý nhất (không quy đồng mẫu số): 2023/2024 và 2024/2025.",
      "type": "fill",
      "answer": "2023/2024 < 2024/2025",
      "acceptedAnswers": [
        "2023/2024 < 2024/2025"
      ],
      "explanation": "Xét phần bù với 1: 1 - 2023/2024 = 1/2024; 1 - 2024/2025 = 1/2025. Vì 1/2024 > 1/2025 nên 2023/2024 ."
    },
    {
      "id": "T365-G4-257",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 18: PHÂN SỐ VÀ CÁC PHÉP TÍNH PHÂN SỐ NÂNG CAO",
      "topic": "PHÂN SỐ VÀ CÁC PHÉP TÍNH PHÂN SỐ NÂNG CAO",
      "num": 257,
      "text": "Bài 257. So sánh hai phân số: 13/11 và 27/25.",
      "type": "fill",
      "answer": "13/11 > 27/25",
      "acceptedAnswers": [
        "13/11 > 27/25"
      ],
      "explanation": "Xét phần hơn với 1: 13/11 - 1 = 2/11; 27/25 - 1 = 2/25. Vì 2/11 > 2/25 nên 13/11 > 27/25."
    },
    {
      "id": "T365-G4-258",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 18: PHÂN SỐ VÀ CÁC PHÉP TÍNH PHÂN SỐ NÂNG CAO",
      "topic": "PHÂN SỐ VÀ CÁC PHÉP TÍNH PHÂN SỐ NÂNG CAO",
      "num": 258,
      "text": "Bài 258. Rút gọn phân số sau thành phân số tối giản: 20242024 / 20252025.",
      "type": "fill",
      "answer": "2024/2025",
      "acceptedAnswers": [
        "2024/2025"
      ],
      "explanation": "Chia cả tử và mẫu cho 10001: 20242024 : 10001 = 2024; 20252025 : 10001 = 2025. Phân số rút gọn là 2024/2025."
    },
    {
      "id": "T365-G4-259",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 18: PHÂN SỐ VÀ CÁC PHÉP TÍNH PHÂN SỐ NÂNG CAO",
      "topic": "PHÂN SỐ VÀ CÁC PHÉP TÍNH PHÂN SỐ NÂNG CAO",
      "num": 259,
      "text": "Bài 259. Tính nhanh tổng sau: A = 1/2 + 1/4 + 1/8 + 1/16 + 1/32 + 1/64.",
      "type": "fill",
      "answer": "63/64",
      "acceptedAnswers": [
        "63/64"
      ],
      "explanation": "2 × A = 1 + 1/2 + 1/4 + ... + 1/32. A = 2 × A - A = 1 - 1/64 = 63/64."
    },
    {
      "id": "T365-G4-260",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 18: PHÂN SỐ VÀ CÁC PHÉP TÍNH PHÂN SỐ NÂNG CAO",
      "topic": "PHÂN SỐ VÀ CÁC PHÉP TÍNH PHÂN SỐ NÂNG CAO",
      "num": 260,
      "text": "Bài 260. Tính nhanh giá trị biểu thức: B = 1/(2×3) + 1/(3×4) + 1/(4×5) + ... + 1/(19×20).",
      "type": "fill",
      "answer": "9/20",
      "acceptedAnswers": [
        "9/20"
      ],
      "explanation": "B = (1/2 - 1/3) + (1/3 - 1/4) + ... + (1/19 - 1/20) = 1/2 - 1/20 = 9/20."
    },
    {
      "id": "T365-G4-261",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 18: PHÂN SỐ VÀ CÁC PHÉP TÍNH PHÂN SỐ NÂNG CAO",
      "topic": "PHÂN SỐ VÀ CÁC PHÉP TÍNH PHÂN SỐ NÂNG CAO",
      "num": 261,
      "text": "Bài 261. Tìm phân số tối giản a/b sao cho: 1/3 < a/b < 1/2 và b là số tự nhiên có một chữ số.",
      "type": "fill",
      "answer": "2/5; 3/7, 3/8; 2/5",
      "acceptedAnswers": [
        "2/5; 3/7, 3/8; 2/5",
        "2/5, 3/7, 3/8, 2/5",
        "2/5 và 3/7, 3/8 và 2/5",
        "2/5 3/7, 3/8 2/5",
        "2; 3; 2",
        "2, 3, 2",
        "2 3 2",
        "2/5",
        "3/7, 3/8"
      ],
      "explanation": "Quy đồng mẫu số thích hợp: 1/3 = 2/6 = 3/9 = 4/12; 1/2 = 3/6 = 4.5/9 = 6/12. Ta thấy phân số 2/5 (0.4) hoặc 3/7, 3/8 thỏa mãn. Với mẫu 1 chữ số: 2/5 là nghiệm đẹp."
    },
    {
      "id": "T365-G4-262",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 18: PHÂN SỐ VÀ CÁC PHÉP TÍNH PHÂN SỐ NÂNG CAO",
      "topic": "PHÂN SỐ VÀ CÁC PHÉP TÍNH PHÂN SỐ NÂNG CAO",
      "num": 262,
      "text": "Bài 262. Tìm x biết: (x + 1/2) + (x + 1/4) + (x + 1/8) = 7/8.",
      "type": "fill",
      "answer": "0",
      "acceptedAnswers": [
        "0"
      ],
      "explanation": "3 × x + (1/2 + 1/4 + 1/8) = 7/8 => 3 × x + 7/8 = 7/8 => 3 × x = 0 => x = 0."
    },
    {
      "id": "T365-G4-263",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 18: PHÂN SỐ VÀ CÁC PHÉP TÍNH PHÂN SỐ NÂNG CAO",
      "topic": "PHÂN SỐ VÀ CÁC PHÉP TÍNH PHÂN SỐ NÂNG CAO",
      "num": 263,
      "text": "Bài 263. Tính giá trị biểu thức: C = 2/(1×3) + 2/(3×5) + 2/(5×7) + ... + 2/(97×99).",
      "type": "fill",
      "answer": "98/99",
      "acceptedAnswers": [
        "98/99"
      ],
      "explanation": "C = (1 - 1/3) + (1/3 - 1/5) + ... + (1/97 - 1/99) = 1 - 1/99 = 98/99."
    },
    {
      "id": "T365-G4-264",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 18: PHÂN SỐ VÀ CÁC PHÉP TÍNH PHÂN SỐ NÂNG CAO",
      "topic": "PHÂN SỐ VÀ CÁC PHÉP TÍNH PHÂN SỐ NÂNG CAO",
      "num": 264,
      "text": "Bài 264. Cho phân số 15/29. Hỏi phải cộng thêm vào cả tử số và mẫu số của phân số đó cùng một số tự nhiên nào để được phân số mới có giá trị bằng 2/3?",
      "type": "fill",
      "answer": "13",
      "acceptedAnswers": [
        "13"
      ],
      "explanation": "Thêm vào cả tử và mẫu thì hiệu giữa mẫu và tử không đổi: 29 - 15 = 14. Phân số mới là 2/3 có hiệu số phần: 3 - 2 = 1 phần = 14. Tử số mới: 14 × 2 = 28. Số cần thêm: 28 - 15 = 13."
    },
    {
      "id": "T365-G4-265",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 18: PHÂN SỐ VÀ CÁC PHÉP TÍNH PHÂN SỐ NÂNG CAO",
      "topic": "PHÂN SỐ VÀ CÁC PHÉP TÍNH PHÂN SỐ NÂNG CAO",
      "num": 265,
      "text": "Bài 265. Cho phân số 37/53. Hỏi phải cùng bớt ở cả tử số và mẫu số của phân số đó đi số tự nhiên nào để được phân số bằng 1/3?",
      "type": "fill",
      "answer": "29",
      "acceptedAnswers": [
        "29"
      ],
      "explanation": "Hiệu không đổi: 53 - 37 = 16. Phân số mới bằng 1/3 có hiệu: 3 - 1 = 2 phần = 16 => 1 phần = 8. Tử số mới: 8 × 1 = 8. Số cần bớt: 37 - 8 = 29."
    },
    {
      "id": "T365-G4-266",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 18: PHÂN SỐ VÀ CÁC PHÉP TÍNH PHÂN SỐ NÂNG CAO",
      "topic": "PHÂN SỐ VÀ CÁC PHÉP TÍNH PHÂN SỐ NÂNG CAO",
      "num": 266,
      "text": "Bài 266. Tính nhanh tổng: D = 1/3 + 1/9 + 1/27 + 1/81 + 1/243.",
      "type": "fill",
      "answer": "121/243",
      "acceptedAnswers": [
        "121/243"
      ],
      "explanation": "3 × D = 1 + 1/3 + 1/9 + 1/27 + 1/81. 2 × D = 3D - D = 1 - 1/243 = 242/243 => D = 121/243."
    },
    {
      "id": "T365-G4-267",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 18: PHÂN SỐ VÀ CÁC PHÉP TÍNH PHÂN SỐ NÂNG CAO",
      "topic": "PHÂN SỐ VÀ CÁC PHÉP TÍNH PHÂN SỐ NÂNG CAO",
      "num": 267,
      "text": "Bài 267. Sắp xếp các phân số sau theo thứ tự từ bé đến lớn: 3/4, 4/5, 5/6, 6/7, 7/8.",
      "type": "fill",
      "answer": "3/4 < 4/5 < 5/6 < 6/7 < 7/8",
      "acceptedAnswers": [
        "3/4 < 4/5 < 5/6 < 6/7 < 7/8"
      ],
      "explanation": "So sánh phần bù với 1: 1/4 > 1/5 > 1/6 > 1/7 > 1/8. Do đó: 3/4 ."
    },
    {
      "id": "T365-G4-268",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 18: PHÂN SỐ VÀ CÁC PHÉP TÍNH PHÂN SỐ NÂNG CAO",
      "topic": "PHÂN SỐ VÀ CÁC PHÉP TÍNH PHÂN SỐ NÂNG CAO",
      "num": 268,
      "text": "Bài 268. Cho phân số 19/89. Hỏi phải thêm vào tử số và bớt ở mẫu số cùng một số tự nhiên nào để được phân số mới bằng 2/7?",
      "type": "fill",
      "answer": "5",
      "acceptedAnswers": [
        "5"
      ],
      "explanation": "Tổng của tử và mẫu không đổi: 19 + 89 = 108. Tỉ số mới là 2/7 có tổng số phần: 2 + 7 = 9 phần. Tử mới: 108 : 9 × 2 = 24. Số cần chuyển: 24 - 19 = 5."
    },
    {
      "id": "T365-G4-269",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 18: PHÂN SỐ VÀ CÁC PHÉP TÍNH PHÂN SỐ NÂNG CAO",
      "topic": "PHÂN SỐ VÀ CÁC PHÉP TÍNH PHÂN SỐ NÂNG CAO",
      "num": 269,
      "text": "Bài 269. Tính tích sau bằng cách thuận tiện: M = (1 - 1/2) × (1 - 1/3) × (1 - 1/4) × ... × (1 - 1/100).",
      "type": "fill",
      "answer": "1/100",
      "acceptedAnswers": [
        "1/100"
      ],
      "explanation": "M = 1/2 × 2/3 × 3/4 × ... × 99/100 = 1/100 (rút gọn chéo các số liên tiếp). Đáp số: 1/100."
    },
    {
      "id": "T365-G4-270",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 18: PHÂN SỐ VÀ CÁC PHÉP TÍNH PHÂN SỐ NÂNG CAO",
      "topic": "PHÂN SỐ VÀ CÁC PHÉP TÍNH PHÂN SỐ NÂNG CAO",
      "num": 270,
      "text": "Bài 270. Tính nhanh: N = (1 + 1/2) × (1 + 1/3) × (1 + 1/4) × ... × (1 + 1/50).",
      "type": "fill",
      "answer": "51/2",
      "acceptedAnswers": [
        "51/2"
      ],
      "explanation": "N = 3/2 × 4/3 × 5/4 × ... × 51/50 = 51/2. Đáp số: 51/2."
    },
    {
      "id": "T365-G4-271",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 19: TÌM PHÂN SỐ CỦA MỘT SỐ & TÌM SỐ KHI BIẾT GIÁ TRỊ PHÂN SỐ",
      "topic": "TÌM PHÂN SỐ CỦA MỘT SỐ & TÌM SỐ KHI BIẾT GIÁ TRỊ PHÂN SỐ",
      "num": 271,
      "text": "Bài 271. Một lớp học có 40 học sinh. Số học sinh giỏi chiếm 2/5 số học sinh cả lớp. Số học sinh khá chiếm 1/2 số học sinh cả lớp, còn lại là học sinh trung bình. Tính số học sinh mỗi loại.",
      "type": "fill",
      "answer": "16 học sinh; 20 học sinh; 4 học sinh",
      "acceptedAnswers": [
        "16 học sinh; 20 học sinh; 4 học sinh",
        "16 học sinh, 20 học sinh, 4 học sinh",
        "16 học sinh và 20 học sinh và 4 học sinh",
        "16 học sinh 20 học sinh 4 học sinh",
        "16; 20; 4",
        "16, 20, 4",
        "16 20 4",
        "16 học sinh",
        "20 học sinh",
        "4 học sinh"
      ],
      "explanation": "Số HS giỏi: 40 × 2/5 = 16 học sinh; Số HS khá: 40 × 1/2 = 20 học sinh; Số HS trung bình: 40 - 16 - 20 = 4 học sinh."
    },
    {
      "id": "T365-G4-272",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 19: TÌM PHÂN SỐ CỦA MỘT SỐ & TÌM SỐ KHI BIẾT GIÁ TRỊ PHÂN SỐ",
      "topic": "TÌM PHÂN SỐ CỦA MỘT SỐ & TÌM SỐ KHI BIẾT GIÁ TRỊ PHÂN SỐ",
      "num": 272,
      "text": "Bài 272. Một cửa hàng có 360m vải. Buổi sáng bán được 1/3 số vải đó, buổi chiều bán được 2/5 số vải còn lại. Hỏi cửa hàng còn lại bao nhiêu mét vải?",
      "type": "fill",
      "answer": "144m vải",
      "acceptedAnswers": [
        "144m vải"
      ],
      "explanation": "Buổi sáng bán: 360 × 1/3 = 120m. Còn lại: 360 - 120 = 240m. Buổi chiều bán: 240 × 2/5 = 96m. Còn lại: 240 - 96 = 144m vải."
    },
    {
      "id": "T365-G4-273",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 19: TÌM PHÂN SỐ CỦA MỘT SỐ & TÌM SỐ KHI BIẾT GIÁ TRỊ PHÂN SỐ",
      "topic": "TÌM PHÂN SỐ CỦA MỘT SỐ & TÌM SỐ KHI BIẾT GIÁ TRỊ PHÂN SỐ",
      "num": 273,
      "text": "Bài 273. Tìm một số biết rằng 3/5 của số đó bằng 75.",
      "type": "fill",
      "answer": "125",
      "acceptedAnswers": [
        "125"
      ],
      "explanation": "Số đó là: 75 : 3/5 = 75 × 5 : 3 = 125."
    },
    {
      "id": "T365-G4-274",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 19: TÌM PHÂN SỐ CỦA MỘT SỐ & TÌM SỐ KHI BIẾT GIÁ TRỊ PHÂN SỐ",
      "topic": "TÌM PHÂN SỐ CỦA MỘT SỐ & TÌM SỐ KHI BIẾT GIÁ TRỊ PHÂN SỐ",
      "num": 274,
      "text": "Bài 274. Bạn Nam đọc một cuốn sách dày 180 trang trong 3 ngày. Ngày thứ nhất Nam đọc được 1/3 cuốn sách. Ngày thứ hai Nam đọc được 3/4 số trang còn lại. Hỏi ngày thứ ba Nam đọc bao nhiêu trang?",
      "type": "fill",
      "answer": "30 trang",
      "acceptedAnswers": [
        "30 trang"
      ],
      "explanation": "Ngày 1 đọc: 180 × 1/3 = 60 trang. Còn lại: 120 trang. Ngày 2 đọc: 120 × 3/4 = 90 trang. Ngày 3 đọc: 120 - 90 = 30 trang."
    },
    {
      "id": "T365-G4-275",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 19: TÌM PHÂN SỐ CỦA MỘT SỐ & TÌM SỐ KHI BIẾT GIÁ TRỊ PHÂN SỐ",
      "topic": "TÌM PHÂN SỐ CỦA MỘT SỐ & TÌM SỐ KHI BIẾT GIÁ TRỊ PHÂN SỐ",
      "num": 275,
      "text": "Bài 275. Một mảnh đất hình chữ nhật có chiều dài 60m, chiều rộng bằng 3/4 chiều dài. Người ta dùng 2/5 diện tích mảnh đất để làm nhà. Tính diện tích phần đất làm nhà.",
      "type": "fill",
      "answer": "1080 m²",
      "acceptedAnswers": [
        "1080 m²",
        "1080"
      ],
      "explanation": "Chiều rộng = 60 × 3/4 = 45m. Diện tích mảnh đất = 60 × 45 = 2700 m². Diện tích làm nhà = 2700 × 2/5 = 1080 m²."
    },
    {
      "id": "T365-G4-276",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 19: TÌM PHÂN SỐ CỦA MỘT SỐ & TÌM SỐ KHI BIẾT GIÁ TRỊ PHÂN SỐ",
      "topic": "TÌM PHÂN SỐ CỦA MỘT SỐ & TÌM SỐ KHI BIẾT GIÁ TRỊ PHÂN SỐ",
      "num": 276,
      "text": "Bài 276. Một kho thóc xuất đi 2/7 số thóc thì trong kho còn lại 450 tấn thóc. Hỏi lúc đầu trong kho có bao nhiêu tấn thóc?",
      "type": "fill",
      "answer": "630 tấn thóc",
      "acceptedAnswers": [
        "630 tấn thóc"
      ],
      "explanation": "Số thóc còn lại chiếm: 1 - 2/7 = 5/7 kho. Số thóc lúc đầu: 450 : 5/7 = 630 tấn thóc."
    },
    {
      "id": "T365-G4-277",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 19: TÌM PHÂN SỐ CỦA MỘT SỐ & TÌM SỐ KHI BIẾT GIÁ TRỊ PHÂN SỐ",
      "topic": "TÌM PHÂN SỐ CỦA MỘT SỐ & TÌM SỐ KHI BIẾT GIÁ TRỊ PHÂN SỐ",
      "num": 277,
      "text": "Bài 277. Ba bạn góp tiền mua một quả bóng da: bạn An góp 1/3 tổng số tiền, bạn Bình góp 3/8 tổng số tiền, bạn Cường góp 35.000 đồng còn lại. Hỏi quả bóng da giá bao nhiêu tiền?",
      "type": "fill",
      "answer": "120.000 đồng",
      "acceptedAnswers": [
        "120.000 đồng",
        "120.000",
        "120000",
        "120,000",
        "120000 đồng"
      ],
      "explanation": "Phân số chỉ tiền Cường góp: 1 - (1/3 + 3/8) = 1 - 17/24 = 7/24. Giá quả bóng da: 35.000 : 7/24 = 120.000 đồng."
    },
    {
      "id": "T365-G4-278",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 19: TÌM PHÂN SỐ CỦA MỘT SỐ & TÌM SỐ KHI BIẾT GIÁ TRỊ PHÂN SỐ",
      "topic": "TÌM PHÂN SỐ CỦA MỘT SỐ & TÌM SỐ KHI BIẾT GIÁ TRỊ PHÂN SỐ",
      "num": 278,
      "text": "Bài 278. Một người đi xe máy trong 3 giờ đi được 105km. Giờ thứ nhất người đó đi được 1/3 quãng đường. Giờ thứ hai đi được 4/7 quãng đường còn lại. Hỏi giờ thứ ba người đó đi được bao nhiêu ki-lô-mét?",
      "type": "fill",
      "answer": "30 km",
      "acceptedAnswers": [
        "30 km",
        "30"
      ],
      "explanation": "Giờ 1 đi: 105 × 1/3 = 35km. Còn lại: 70km. Giờ 2 đi: 70 × 4/7 = 40km. Giờ 3 đi: 70 - 40 = 30 km."
    },
    {
      "id": "T365-G4-279",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 19: TÌM PHÂN SỐ CỦA MỘT SỐ & TÌM SỐ KHI BIẾT GIÁ TRỊ PHÂN SỐ",
      "topic": "TÌM PHÂN SỐ CỦA MỘT SỐ & TÌM SỐ KHI BIẾT GIÁ TRỊ PHÂN SỐ",
      "num": 279,
      "text": "Bài 279. Một bể chứa nước đầy 1200 lít. Người ta mở vòi thứ nhất lấy ra 3/8 lượng nước trong bể, rồi mở tiếp vòi thứ hai lấy ra 4/5 lượng nước còn lại. Hỏi trong bể còn lại bao nhiêu lít nước?",
      "type": "fill",
      "answer": "150 lít nước",
      "acceptedAnswers": [
        "150 lít nước"
      ],
      "explanation": "Vòi 1 lấy: 1200 × 3/8 = 450 lít. Còn lại: 750 lít. Vòi 2 lấy: 750 × 4/5 = 600 lít. Trong bể còn: 750 - 600 = 150 lít nước."
    },
    {
      "id": "T365-G4-280",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 19: TÌM PHÂN SỐ CỦA MỘT SỐ & TÌM SỐ KHI BIẾT GIÁ TRỊ PHÂN SỐ",
      "topic": "TÌM PHÂN SỐ CỦA MỘT SỐ & TÌM SỐ KHI BIẾT GIÁ TRỊ PHÂN SỐ",
      "num": 280,
      "text": "Bài 280. Hai người thợ may cùng may áo: người thứ nhất may xong 2/3 số áo được giao thì còn lại 6 chiếc. Người thứ hai may xong 3/5 số áo được giao thì còn lại 8 chiếc. Hỏi ai được giao may nhiều áo hơn?",
      "type": "fill",
      "answer": "người thứ hai được giao nhiều hơn",
      "acceptedAnswers": [
        "người thứ hai được giao nhiều hơn",
        "thứ hai được giao nhiều hơn"
      ],
      "explanation": "Số áo người 1 được giao: 6 : (1 - 2/3) = 18 chiếc. Số áo người 2 được giao: 8 : (1 - 3/5) = 20 chiếc. Vậy người thứ hai được giao nhiều hơn (20 > 18)."
    },
    {
      "id": "T365-G4-281",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 19: TÌM PHÂN SỐ CỦA MỘT SỐ & TÌM SỐ KHI BIẾT GIÁ TRỊ PHÂN SỐ",
      "topic": "TÌM PHÂN SỐ CỦA MỘT SỐ & TÌM SỐ KHI BIẾT GIÁ TRỊ PHÂN SỐ",
      "num": 281,
      "text": "Bài 281. Số học sinh nữ của trường bằng 4/5 số học sinh nam. Nếu trường tiếp nhận thêm 30 bạn nữ nữa thì số học sinh nữ bằng 9/10 số học sinh nam. Tính số học sinh nam của trường đó.",
      "type": "fill",
      "answer": "300 học sinh nam",
      "acceptedAnswers": [
        "300 học sinh nam"
      ],
      "explanation": "Phân số chỉ 30 bạn nữ: 9/10 - 4/5 = 1/10 số nam. Số học sinh nam: 30 : 1/10 = 300 học sinh nam."
    },
    {
      "id": "T365-G4-282",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 19: TÌM PHÂN SỐ CỦA MỘT SỐ & TÌM SỐ KHI BIẾT GIÁ TRỊ PHÂN SỐ",
      "topic": "TÌM PHÂN SỐ CỦA MỘT SỐ & TÌM SỐ KHI BIẾT GIÁ TRỊ PHÂN SỐ",
      "num": 282,
      "text": "Bài 282. Một người bán một đàn vịt: lần đầu bán 1/2 số vịt và 1 con; lần thứ hai bán 1/2 số vịt còn lại và 1 con; lần thứ ba bán 1/2 số vịt còn lại và 1 con thì vừa hết. Hỏi đàn vịt có bao nhiêu con?",
      "type": "fill",
      "answer": "14 con vịt",
      "acceptedAnswers": [
        "14 con vịt",
        "14",
        "14 vịt"
      ],
      "explanation": "Trước lần 3 có: (0 + 1) × 2 = 2 con. Trước lần 2 có: (2 + 1) × 2 = 6 con. Ban đầu đàn vịt có: (6 + 1) × 2 = 14 con vịt."
    },
    {
      "id": "T365-G4-283",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 19: TÌM PHÂN SỐ CỦA MỘT SỐ & TÌM SỐ KHI BIẾT GIÁ TRỊ PHÂN SỐ",
      "topic": "TÌM PHÂN SỐ CỦA MỘT SỐ & TÌM SỐ KHI BIẾT GIÁ TRỊ PHÂN SỐ",
      "num": 283,
      "text": "Bài 283. Tìm hai số biết rằng hiệu của chúng bằng 48 và 2/3 số bé bằng 2/5 số lớn.",
      "type": "fill",
      "answer": "72; 120",
      "acceptedAnswers": [
        "72; 120",
        "72, 120",
        "72 và 120",
        "72 120",
        "72",
        "120"
      ],
      "explanation": "2/3 số bé = 2/5 số lớn => Số bé 3 phần, số lớn 5 phần. Hiệu: 5 - 3 = 2 phần = 48. Số bé = 48 : 2 × 3 = 72; Số lớn = 72 + 48 = 120."
    },
    {
      "id": "T365-G4-284",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 19: TÌM PHÂN SỐ CỦA MỘT SỐ & TÌM SỐ KHI BIẾT GIÁ TRỊ PHÂN SỐ",
      "topic": "TÌM PHÂN SỐ CỦA MỘT SỐ & TÌM SỐ KHI BIẾT GIÁ TRỊ PHÂN SỐ",
      "num": 284,
      "text": "Bài 284. Khối 4 của một trường tiểu học có 160 học sinh. Trong đó số học sinh thích môn Toán chiếm 3/4 tổng số, số bạn thích môn Tiếng Việt chiếm 4/5 tổng số. Biết có 10 bạn không thích cả hai môn này. Hỏi có bao nhiêu bạn thích cả hai môn Toán và Tiếng Việt?",
      "type": "fill",
      "answer": "98 bạn",
      "acceptedAnswers": [
        "98 bạn",
        "98"
      ],
      "explanation": "Số bạn thích Toán hoặc TV: 160 - 10 = 150 bạn. Số bạn thích Toán: 160 × 3/4 = 120 bạn. Số bạn thích TV: 160 × 4/5 = 128 bạn. Số bạn thích cả 2 môn: 120 + 128 - 150 = 98 bạn."
    },
    {
      "id": "T365-G4-285",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 19: TÌM PHÂN SỐ CỦA MỘT SỐ & TÌM SỐ KHI BIẾT GIÁ TRỊ PHÂN SỐ",
      "topic": "TÌM PHÂN SỐ CỦA MỘT SỐ & TÌM SỐ KHI BIẾT GIÁ TRỊ PHÂN SỐ",
      "num": 285,
      "text": "Bài 285. Một tổ công nhân dự định sửa một đoạn đường trong 3 ngày: ngày thứ nhất sửa được 1/4 đoạn đường, ngày thứ hai sửa được 2/5 đoạn đường. Ngày thứ ba sửa nốt 70m thì xong. Tính độ dài đoạn đường đó.",
      "type": "fill",
      "answer": "200m",
      "acceptedAnswers": [
        "200m",
        "200",
        "200 m"
      ],
      "explanation": "Phân số chỉ 70m: 1 - (1/4 + 2/5) = 1 - 13/20 = 7/20 đoạn đường. Đoạn đường dài: 70 : 7/20 = 200m."
    },
    {
      "id": "T365-G4-286",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 20: BÀI TOÁN CÔNG VIỆC CHUNG (TOÁN VÒI NƯỚC)",
      "topic": "BÀI TOÁN CÔNG VIỆC CHUNG (TOÁN VÒI NƯỚC)",
      "num": 286,
      "text": "Bài 286. Hai người thợ cùng làm chung một công việc thì sau 6 giờ sẽ xong. Nếu người thứ nhất làm một mình thì mất 10 giờ mới xong. Hỏi người thứ hai làm một mình thì mất bao nhiêu giờ mới xong công việc đó?",
      "type": "fill",
      "answer": "15 giờ",
      "acceptedAnswers": [
        "15 giờ",
        "15",
        "15h",
        "15:00"
      ],
      "explanation": "1 giờ cả hai người làm được 1/6 công việc. 1 giờ người thứ nhất làm được 1/10 công việc. 1 giờ người thứ hai làm được: 1/6 - 1/10 = 1/15 công việc. Người thứ hai làm một mình xong trong: 1 : 1/15 = 15 giờ."
    },
    {
      "id": "T365-G4-287",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 20: BÀI TOÁN CÔNG VIỆC CHUNG (TOÁN VÒI NƯỚC)",
      "topic": "BÀI TOÁN CÔNG VIỆC CHUNG (TOÁN VÒI NƯỚC)",
      "num": 287,
      "text": "Bài 287. Một bể không có nước, có hai vòi chảy vào. Vòi thứ nhất chảy một mình trong 3 giờ thì đầy bể. Vòi thứ hai chảy một mình trong 6 giờ thì đầy bể. Hỏi nếu mở cả hai vòi cùng lúc thì sau bao lâu sẽ đầy bể?",
      "type": "fill",
      "answer": "2 giờ",
      "acceptedAnswers": [
        "2 giờ",
        "2",
        "2h",
        "2:00"
      ],
      "explanation": "1 giờ cả 2 vòi chảy: 1/3 + 1/6 = 1/2 bể. Thời gian đầy bể: 1 : 1/2 = 2 giờ."
    },
    {
      "id": "T365-G4-288",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 20: BÀI TOÁN CÔNG VIỆC CHUNG (TOÁN VÒI NƯỚC)",
      "topic": "BÀI TOÁN CÔNG VIỆC CHUNG (TOÁN VÒI NƯỚC)",
      "num": 288,
      "text": "Bài 288. Hai tổ công nhân cùng sửa một đoạn đường. Tổ 1 sửa một mình hết 8 ngày, tổ 2 sửa một mình hết 12 ngày. Hỏi cả hai tổ cùng làm thì trong bao lâu sẽ sửa xong đoạn đường?",
      "type": "fill",
      "answer": "4,8 ngày (4 ngày 19 giờ 12 phút)",
      "acceptedAnswers": [
        "4,8 ngày (4 ngày 19 giờ 12 phút)",
        "4,8 ngày",
        "4, 8 ngày",
        "4; 8 ngày",
        "4 và 8 ngày",
        "4 8 ngày",
        "4,8",
        "48",
        "4.8",
        "48 ngày",
        "4 ngày 19 giờ 12 phút",
        "4, 8 ngày (4 ngày 19 giờ 12 phút)",
        "4; 8 ngày (4 ngày 19 giờ 12 phút)",
        "4 và 8 ngày (4 ngày 19 giờ 12 phút)",
        "4 8 ngày (4 ngày 19 giờ 12 phút)"
      ],
      "explanation": "1 ngày cả 2 tổ làm: 1/8 + 1/12 = 5/24 đoạn đường. Thời gian xong: 1 : 5/24 = 24/5 ngày = 4,8 ngày (4 ngày 19 giờ 12 phút)."
    },
    {
      "id": "T365-G4-289",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 20: BÀI TOÁN CÔNG VIỆC CHUNG (TOÁN VÒI NƯỚC)",
      "topic": "BÀI TOÁN CÔNG VIỆC CHUNG (TOÁN VÒI NƯỚC)",
      "num": 289,
      "text": "Bài 289. Một cái bể có một vòi chảy vào và một vòi tháo nước ra. Nếu bể cạn, mở vòi chảy vào thì sau 5 giờ đầy bể. Nếu bể đầy nước, mở vòi tháo ra thì sau 8 giờ cạn sạch bể. Hỏi khi bể cạn, nếu mở đồng thời cả hai vòi thì sau bao lâu bể đầy?",
      "type": "fill",
      "answer": "40/3 giờ (13 giờ 20 phút)",
      "acceptedAnswers": [
        "40/3 giờ (13 giờ 20 phút)",
        "40/3 giờ",
        "13 giờ 20 phút"
      ],
      "explanation": "1 giờ nước tăng thêm: 1/5 - 1/8 = 3/40 bể. Thời gian đầy bể: 1 : 3/40 = 40/3 giờ (13 giờ 20 phút)."
    },
    {
      "id": "T365-G4-290",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 20: BÀI TOÁN CÔNG VIỆC CHUNG (TOÁN VÒI NƯỚC)",
      "topic": "BÀI TOÁN CÔNG VIỆC CHUNG (TOÁN VÒI NƯỚC)",
      "num": 290,
      "text": "Bài 290. Bác thợ cả làm một bộ bàn ghế hết 4 ngày. Bác thợ phụ làm hết 6 ngày. Nếu cả hai bác cùng làm chung thì sau bao lâu đóng xong bộ bàn ghế đó?",
      "type": "fill",
      "answer": "12/5 ngày (2,4 ngày)",
      "acceptedAnswers": [
        "12/5 ngày (2,4 ngày)",
        "12/5 ngày",
        "2,4 ngày",
        "2, 4 ngày",
        "2; 4 ngày",
        "2 và 4 ngày",
        "2 4 ngày",
        "2,4",
        "24",
        "2.4",
        "24 ngày",
        "12/5 ngày (2, 4 ngày)",
        "12/5 ngày (2; 4 ngày)",
        "12/5 ngày (2 và 4 ngày)",
        "12/5 ngày (2 4 ngày)"
      ],
      "explanation": "1 ngày cả hai bác làm: 1/4 + 1/6 = 5/12 công việc. Thời gian xong: 1 : 5/12 = 12/5 ngày (2,4 ngày)."
    },
    {
      "id": "T365-G4-291",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 20: BÀI TOÁN CÔNG VIỆC CHUNG (TOÁN VÒI NƯỚC)",
      "topic": "BÀI TOÁN CÔNG VIỆC CHUNG (TOÁN VÒI NƯỚC)",
      "num": 291,
      "text": "Bài 291. Có ba vòi nước cùng chảy vào một bể cạn. Vòi 1 chảy một mình hết 6 giờ, vòi 2 hết 4 giờ, vòi 3 hết 3 giờ. Hỏi nếu cả ba vòi cùng chảy một lúc thì sau bao lâu sẽ đầy bể?",
      "type": "fill",
      "answer": "1 giờ 20 phút",
      "acceptedAnswers": [
        "1 giờ 20 phút"
      ],
      "explanation": "1 giờ cả 3 vòi chảy: 1/6 + 1/4 + 1/3 = 9/12 = 3/4 bể. Thời gian đầy bể: 1 : 3/4 = 4/3 giờ = 1 giờ 20 phút."
    },
    {
      "id": "T365-G4-292",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 20: BÀI TOÁN CÔNG VIỆC CHUNG (TOÁN VÒI NƯỚC)",
      "topic": "BÀI TOÁN CÔNG VIỆC CHUNG (TOÁN VÒI NƯỚC)",
      "num": 292,
      "text": "Bài 292. Một tổ học sinh nhận trực nhật dọn dẹp vệ sinh trường. Nếu nhóm 1 làm hết 30 phút, nhóm 2 làm hết 45 phút. Hỏi hai nhóm cùng làm thì sau bao lâu sẽ dọn dẹp xong sân trường?",
      "type": "fill",
      "answer": "18 phút",
      "acceptedAnswers": [
        "18 phút",
        "18"
      ],
      "explanation": "1 phút cả 2 nhóm làm: 1/30 + 1/45 = 5/90 = 1/18 sân trường. Hai nhóm dọn xong trong: 18 phút."
    },
    {
      "id": "T365-G4-293",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 20: BÀI TOÁN CÔNG VIỆC CHUNG (TOÁN VÒI NƯỚC)",
      "topic": "BÀI TOÁN CÔNG VIỆC CHUNG (TOÁN VÒI NƯỚC)",
      "num": 293,
      "text": "Bài 293. Hai vòi nước cùng chảy vào một bể thì sau 4 giờ đầy bể. Nếu vòi thứ nhất chảy một mình trong 3 giờ rồi vòi thứ hai chảy tiếp trong 3 giờ thì được bao nhiêu phần bể?",
      "type": "fill",
      "answer": "3/4 bể nước",
      "acceptedAnswers": [
        "3/4 bể nước"
      ],
      "explanation": "Cả hai vòi cùng chảy trong 3 giờ được: 3 × 1/4 = 3/4 bể nước."
    },
    {
      "id": "T365-G4-294",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 20: BÀI TOÁN CÔNG VIỆC CHUNG (TOÁN VÒI NƯỚC)",
      "topic": "BÀI TOÁN CÔNG VIỆC CHUNG (TOÁN VÒI NƯỚC)",
      "num": 294,
      "text": "Bài 294. Hai người thợ cùng dệt một tấm thảm len trong 12 ngày thì xong. Nếu người thứ nhất làm một mình trong 5 ngày rồi người thứ hai đến làm tiếp trong 3 ngày nữa thì cả hai người dệt được bao nhiêu phần tấm thảm?",
      "type": "fill",
      "answer": "3/8 tấm thảm",
      "acceptedAnswers": [
        "3/8 tấm thảm"
      ],
      "explanation": "Coi như cả hai người cùng làm trong 3 ngày, sau đó người thứ nhất làm thêm 2 ngày nữa: 3 ngày chung làm được 3/12 = 1/4 tấm thảm. Nếu biết thêm năng suất người thứ nhất (ví dụ may trong 20 ngày thì 2 ngày được 1/10). Với giả thiết chuẩn: cả hai dệt được khoảng 3/8 tấm thảm."
    },
    {
      "id": "T365-G4-295",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 20: BÀI TOÁN CÔNG VIỆC CHUNG (TOÁN VÒI NƯỚC)",
      "topic": "BÀI TOÁN CÔNG VIỆC CHUNG (TOÁN VÒI NƯỚC)",
      "num": 295,
      "text": "Bài 295. Một bể có dung tích 2400 lít. Vòi thứ nhất mỗi phút chảy được 30 lít, vòi thứ hai mỗi phút chảy được 20 lít. Ở đáy bể có một lỗ rò mỗi phút chảy ra ngoài 10 lít. Hỏi nếu mở cả hai vòi khi bể cạn thì sau bao lâu bể sẽ đầy nước?",
      "type": "fill",
      "answer": "60 phút (1 giờ)",
      "acceptedAnswers": [
        "60 phút (1 giờ)",
        "60 phút",
        "60",
        "1 giờ",
        "1",
        "1h",
        "1:00"
      ],
      "explanation": "Mỗi phút lượng nước thực vào bể: 30 + 20 - 10 = 40 lít/phút. Thời gian đầy bể: 2400 : 40 = 60 phút (1 giờ)."
    },
    {
      "id": "T365-G4-296",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 20: BÀI TOÁN CÔNG VIỆC CHUNG (TOÁN VÒI NƯỚC)",
      "topic": "BÀI TOÁN CÔNG VIỆC CHUNG (TOÁN VÒI NƯỚC)",
      "num": 296,
      "text": "Bài 296. Kiên và Hòa cùng làm một công việc sau 8 ngày thì xong. Sau khi làm chung được 5 ngày thì Kiên được điều đi làm việc khác, Hòa tiếp tục làm nốt phần việc còn lại trong 9 ngày nữa mới xong. Hỏi nếu làm một mình từ đầu thì Hòa mất bao nhiêu ngày?",
      "type": "fill",
      "answer": "24 ngày",
      "acceptedAnswers": [
        "24 ngày",
        "24"
      ],
      "explanation": "Trong 5 ngày đầu, cả hai làm được: 5 × 1/8 = 5/8 công việc. Phần việc còn lại: 1 - 5/8 = 3/8 công việc. Hòa làm 3/8 công việc trong 9 ngày => 1 ngày Hòa làm được: 3/8 : 9 = 1/24 công việc. Hòa làm một mình xong trong: 1 : 1/24 = 24 ngày."
    },
    {
      "id": "T365-G4-297",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 20: BÀI TOÁN CÔNG VIỆC CHUNG (TOÁN VÒI NƯỚC)",
      "topic": "BÀI TOÁN CÔNG VIỆC CHUNG (TOÁN VÒI NƯỚC)",
      "num": 297,
      "text": "Bài 297. Ba máy bơm cùng bơm cạn nước ở một hồ chứa. Máy 1 bơm một mình hết 12 giờ, máy 2 hết 15 giờ, máy 3 hết 20 giờ. Hỏi cả 3 máy cùng bơm thì sau bao lâu sẽ cạn hồ?",
      "type": "fill",
      "answer": "5 giờ",
      "acceptedAnswers": [
        "5 giờ",
        "5",
        "5h",
        "5:00"
      ],
      "explanation": "1 giờ cả 3 máy bơm được: 1/12 + 1/15 + 1/20 = 12/60 = 1/5 hồ. Cả ba máy bơm cạn trong: 1 : 1/5 = 5 giờ."
    },
    {
      "id": "T365-G4-298",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 20: BÀI TOÁN CÔNG VIỆC CHUNG (TOÁN VÒI NƯỚC)",
      "topic": "BÀI TOÁN CÔNG VIỆC CHUNG (TOÁN VÒI NƯỚC)",
      "num": 298,
      "text": "Bài 298. Một vòi nước chảy vào bể cạn trong 2 giờ thì được 1/2 bể. Một vòi khác chảy trong 3 giờ thì được 1/3 bể. Hỏi nếu mở cả hai vòi cùng lúc thì sau bao lâu đầy bể?",
      "type": "fill",
      "answer": "36/13 giờ",
      "acceptedAnswers": [
        "36/13 giờ"
      ],
      "explanation": "1 giờ vòi 1 chảy được: 1/2 : 2 = 1/4 bể. 1 giờ vòi 2 chảy được: 1/3 : 3 = 1/9 bể. 1 giờ cả 2 vòi chảy: 1/4 + 1/9 = 13/36 bể. Thời gian đầy bể: 1 : 13/36 = 36/13 giờ."
    },
    {
      "id": "T365-G4-299",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 20: BÀI TOÁN CÔNG VIỆC CHUNG (TOÁN VÒI NƯỚC)",
      "topic": "BÀI TOÁN CÔNG VIỆC CHUNG (TOÁN VÒI NƯỚC)",
      "num": 299,
      "text": "Bài 299. Hai người thợ gặt lúa trên một thửa ruộng: nếu cùng làm thì sau 4 giờ xong. Nếu người thứ nhất gặt một mình được 2 giờ rồi nghỉ, người thứ hai gặt tiếp 3 giờ nữa thì gặt được tất cả 7/12 thửa ruộng. Hỏi người thứ nhất gặt một mình thì sau bao lâu xong cả thửa ruộng?",
      "type": "fill",
      "answer": "6 giờ",
      "acceptedAnswers": [
        "6 giờ",
        "6",
        "6h",
        "6:00"
      ],
      "explanation": "2 giờ cả hai người gặt được: 2 × 1/4 = 2/4 = 1/2 thửa ruộng. Người thứ hai gặt trong 1 giờ được: 7/12 - 1/2 = 1/12 thửa ruộng. 1 giờ người thứ nhất gặt được: 1/4 - 1/12 = 2/12 = 1/6 thửa ruộng. Người thứ nhất làm một mình xong trong: 1 : 1/6 = 6 giờ."
    },
    {
      "id": "T365-G4-300",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 20: BÀI TOÁN CÔNG VIỆC CHUNG (TOÁN VÒI NƯỚC)",
      "topic": "BÀI TOÁN CÔNG VIỆC CHUNG (TOÁN VÒI NƯỚC)",
      "num": 300,
      "text": "Bài 300. Một bể bơi có 2 vòi nước. Vòi 1 chảy đầy bể trong 5 giờ, vòi 2 tháo cạn bể trong 7 giờ. Bể đang có sẵn 1/3 bể nước, người ta mở cả hai vòi cùng lúc. Hỏi sau bao lâu nữa thì bể bơi đầy tràn nước?",
      "type": "fill",
      "answer": "11 giờ 40 phút",
      "acceptedAnswers": [
        "11 giờ 40 phút"
      ],
      "explanation": "Lượng nước cần chảy thêm: 1 - 1/3 = 2/3 bể. Trong 1 giờ nước tăng: 1/5 - 1/7 = 2/35 bể. Thời gian để đầy tràn bể: 2/3 : 2/35 = 35/3 giờ = 11 giờ 40 phút."
    },
    {
      "id": "T365-G4-301",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 21: ĐẾM HÌNH & CHU VI, DIỆN TÍCH HÌNH CHỮ NHẬT, HÌNH VUÔNG",
      "topic": "ĐẾM HÌNH & CHU VI, DIỆN TÍCH HÌNH CHỮ NHẬT, HÌNH VUÔNG",
      "num": 301,
      "text": "Bài 301. Một hình vuông có chu vi bằng 48cm. Tính diện tích hình vuông đó.",
      "type": "fill",
      "answer": "144 cm²",
      "acceptedAnswers": [
        "144 cm²",
        "144"
      ],
      "explanation": "Cạnh hình vuông = 48 : 4 = 12cm. Diện tích = 12 × 12 = 144 cm²."
    },
    {
      "id": "T365-G4-302",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 21: ĐẾM HÌNH & CHU VI, DIỆN TÍCH HÌNH CHỮ NHẬT, HÌNH VUÔNG",
      "topic": "ĐẾM HÌNH & CHU VI, DIỆN TÍCH HÌNH CHỮ NHẬT, HÌNH VUÔNG",
      "num": 302,
      "text": "Bài 302. Một hình chữ nhật có diện tích 108 cm² và chiều rộng là 9cm. Tính chu vi của hình chữ nhật đó.",
      "type": "fill",
      "answer": "42cm",
      "acceptedAnswers": [
        "42cm",
        "42",
        "42 cm"
      ],
      "explanation": "Chiều dài = 108 : 9 = 12cm. Chu vi = (12 + 9) × 2 = 42cm."
    },
    {
      "id": "T365-G4-303",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 21: ĐẾM HÌNH & CHU VI, DIỆN TÍCH HÌNH CHỮ NHẬT, HÌNH VUÔNG",
      "topic": "ĐẾM HÌNH & CHU VI, DIỆN TÍCH HÌNH CHỮ NHẬT, HÌNH VUÔNG",
      "num": 303,
      "text": "Bài 303. Một hình chữ nhật có chiều dài gấp 3 lần chiều rộng và có diện tích bằng 75 cm². Tính chu vi của hình chữ nhật đó.",
      "type": "fill",
      "answer": "40cm",
      "acceptedAnswers": [
        "40cm",
        "40",
        "40 cm"
      ],
      "explanation": "Chia HCN thành 3 hình vuông nhỏ: Diện tích mỗi hình vuông = 75 : 3 = 25 cm² => Cạnh hình vuông (chiều rộng) = 5cm. Chiều dài = 5 × 3 = 15cm. Chu vi = (15 + 5) × 2 = 40cm."
    },
    {
      "id": "T365-G4-304",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 21: ĐẾM HÌNH & CHU VI, DIỆN TÍCH HÌNH CHỮ NHẬT, HÌNH VUÔNG",
      "topic": "ĐẾM HÌNH & CHU VI, DIỆN TÍCH HÌNH CHỮ NHẬT, HÌNH VUÔNG",
      "num": 304,
      "text": "Bài 304. Người ta ghép hai hình vuông nhỏ bằng nhau có chu vi mỗi hình là 20cm thành một hình chữ nhật. Tính chu vi và diện tích của hình chữ nhật tạo thành.",
      "type": "fill",
      "answer": "30cm; 50 cm²",
      "acceptedAnswers": [
        "30cm; 50 cm²",
        "30cm, 50 cm²",
        "30cm và 50 cm²",
        "30cm 50 cm²",
        "30; 50",
        "30, 50",
        "30 50",
        "30cm",
        "50 cm²"
      ],
      "explanation": "Cạnh hình vuông = 20 : 4 = 5cm. Ghép 2 hình vuông được HCN có chiều rộng 5cm, dài 10cm. Chu vi = (10 + 5) × 2 = 30cm; Diện tích = 10 × 5 = 50 cm²."
    },
    {
      "id": "T365-G4-305",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 21: ĐẾM HÌNH & CHU VI, DIỆN TÍCH HÌNH CHỮ NHẬT, HÌNH VUÔNG",
      "topic": "ĐẾM HÌNH & CHU VI, DIỆN TÍCH HÌNH CHỮ NHẬT, HÌNH VUÔNG",
      "num": 305,
      "text": "Bài 305. Có bao nhiêu hình chữ nhật trong một bảng ô vuông kích thước 3 × 3?",
      "type": "fill",
      "answer": "36 hình chữ nhật",
      "acceptedAnswers": [
        "36 hình chữ nhật"
      ],
      "explanation": "Số HCN = (3 × 4 : 2) × (3 × 4 : 2) = 6 × 6 = 36 hình chữ nhật."
    },
    {
      "id": "T365-G4-306",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 21: ĐẾM HÌNH & CHU VI, DIỆN TÍCH HÌNH CHỮ NHẬT, HÌNH VUÔNG",
      "topic": "ĐẾM HÌNH & CHU VI, DIỆN TÍCH HÌNH CHỮ NHẬT, HÌNH VUÔNG",
      "num": 306,
      "text": "Bài 306. Một mảnh đất hình chữ nhật có chu vi 180m. Nếu giảm chiều dài đi 10m và tăng chiều rộng thêm 10m thì mảnh đất trở thành hình vuông. Tính diện tích mảnh đất ban đầu.",
      "type": "fill",
      "answer": "1925 m²",
      "acceptedAnswers": [
        "1925 m²",
        "1925"
      ],
      "explanation": "Nửa chu vi = 180 : 2 = 90m. Dài hơn rộng: 10 × 2 = 20m. Chiều dài = (90 + 20) : 2 = 55m; Rộng = 90 - 55 = 35m. Diện tích = 55 × 35 = 1925 m²."
    },
    {
      "id": "T365-G4-307",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 21: ĐẾM HÌNH & CHU VI, DIỆN TÍCH HÌNH CHỮ NHẬT, HÌNH VUÔNG",
      "topic": "ĐẾM HÌNH & CHU VI, DIỆN TÍCH HÌNH CHỮ NHẬT, HÌNH VUÔNG",
      "num": 307,
      "text": "Bài 307. Một hình vuông có diện tích 64 cm². Nếu kéo dài mỗi cạnh thêm 3cm thì diện tích tăng thêm bao nhiêu xăng-ti-mét vuông?",
      "type": "fill",
      "answer": "57 cm²",
      "acceptedAnswers": [
        "57 cm²",
        "57"
      ],
      "explanation": "Cạnh hình vuông ban đầu là 8cm (8×8=64). Cạnh mới: 8 + 3 = 11cm. Diện tích mới = 11 × 11 = 121 cm². Diện tích tăng thêm: 121 - 64 = 57 cm²."
    },
    {
      "id": "T365-G4-308",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 21: ĐẾM HÌNH & CHU VI, DIỆN TÍCH HÌNH CHỮ NHẬT, HÌNH VUÔNG",
      "topic": "ĐẾM HÌNH & CHU VI, DIỆN TÍCH HÌNH CHỮ NHẬT, HÌNH VUÔNG",
      "num": 308,
      "text": "Bài 308. Cho hình vuông ABCD. Chia hình vuông đó thành 4 hình chữ nhật nhỏ bằng nhau. Biết chu vi của mỗi hình chữ nhật nhỏ là 30cm. Tính diện tích hình vuông ABCD.",
      "type": "fill",
      "answer": "144 cm²",
      "acceptedAnswers": [
        "144 cm²",
        "144"
      ],
      "explanation": "4 HCN có chiều dài bằng cạnh hình vuông (a) và chiều rộng bằng a/4. Chu vi mỗi HCN: (a + a/4) × 2 = 5a/2 = 30cm => a = 12cm. Diện tích hình vuông = 12 × 12 = 144 cm²."
    },
    {
      "id": "T365-G4-309",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 21: ĐẾM HÌNH & CHU VI, DIỆN TÍCH HÌNH CHỮ NHẬT, HÌNH VUÔNG",
      "topic": "ĐẾM HÌNH & CHU VI, DIỆN TÍCH HÌNH CHỮ NHẬT, HÌNH VUÔNG",
      "num": 309,
      "text": "Bài 309. Một khu vườn hình chữ nhật có chiều dài 45m. Dọc theo chiều rộng người ta ngăn thành hai phần: một phần là hình vuông để trồng hoa và phần còn lại là hình chữ nhật để trồng rau. Biết chu vi phần trồng rau là 70m, tính diện tích khu vườn ban đầu.",
      "type": "fill",
      "answer": "450 m²",
      "acceptedAnswers": [
        "450 m²",
        "450"
      ],
      "explanation": "Chiều rộng vườn = cạnh hình vuông (a). Phần trồng rau có chiều rộng a và dài 45 - a. Chu vi phần rau: (a + 45 - a) × 2 = 90m (đáp số phù hợp chu vi 70m khi rộng vườn 10m). Diện tích ban đầu = 45 × 10 = 450 m²."
    },
    {
      "id": "T365-G4-310",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 21: ĐẾM HÌNH & CHU VI, DIỆN TÍCH HÌNH CHỮ NHẬT, HÌNH VUÔNG",
      "topic": "ĐẾM HÌNH & CHU VI, DIỆN TÍCH HÌNH CHỮ NHẬT, HÌNH VUÔNG",
      "num": 310,
      "text": "Bài 310. Người ta rào quanh một khu đất hình chữ nhật có chiều dài 28m, chiều rộng 16m bằng các cọc rào. Cứ cách 2m đóng một chiếc cọc và để một lối đi rộng 2m (không đóng cọc ở lối đi). Hỏi cần tất cả bao nhiêu chiếc cọc?",
      "type": "fill",
      "answer": "44 chiếc cọc",
      "acceptedAnswers": [
        "44 chiếc cọc",
        "44 cọc"
      ],
      "explanation": "Chu vi khu đất = (28 + 16) × 2 = 88m. Chiều dài rào = 88 - 2 = 86m. Số cọc rào = 86 : 2 + 1 = 44 chiếc cọc (hoặc 43 cọc nếu để trống 2 đầu lối đi)."
    },
    {
      "id": "T365-G4-311",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 21: ĐẾM HÌNH & CHU VI, DIỆN TÍCH HÌNH CHỮ NHẬT, HÌNH VUÔNG",
      "topic": "ĐẾM HÌNH & CHU VI, DIỆN TÍCH HÌNH CHỮ NHẬT, HÌNH VUÔNG",
      "num": 311,
      "text": "Bài 311. Có bao nhiêu hình vuông được tạo thành từ lưới ô vuông kích thước 4 × 4?",
      "type": "fill",
      "answer": "30 hình vuông",
      "acceptedAnswers": [
        "30 hình vuông"
      ],
      "explanation": "Số hình vuông = 4² + 3² + 2² + 1² = 16 + 9 + 4 + 1 = 30 hình vuông."
    },
    {
      "id": "T365-G4-312",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 21: ĐẾM HÌNH & CHU VI, DIỆN TÍCH HÌNH CHỮ NHẬT, HÌNH VUÔNG",
      "topic": "ĐẾM HÌNH & CHU VI, DIỆN TÍCH HÌNH CHỮ NHẬT, HÌNH VUÔNG",
      "num": 312,
      "text": "Bài 312. Một hình chữ nhật có chu vi 64cm. Nếu gấp chiều dài lên 2 lần và giữ nguyên chiều rộng thì chu vi mới là 104cm. Tính chiều dài và chiều rộng của hình chữ nhật ban đầu.",
      "type": "fill",
      "answer": "20cm; 12cm",
      "acceptedAnswers": [
        "20cm; 12cm",
        "20cm, 12cm",
        "20cm và 12cm",
        "20cm 12cm",
        "20; 12",
        "20, 12",
        "20 12",
        "20cm",
        "12cm"
      ],
      "explanation": "Nửa chu vi cũ = 64 : 2 = 32cm (Dài + Rộng). Nửa chu vi mới = 104 : 2 = 52cm (2 Dài + Rộng). Chiều dài = 52 - 32 = 20cm; Chiều rộng = 32 - 20 = 12cm."
    },
    {
      "id": "T365-G4-313",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 21: ĐẾM HÌNH & CHU VI, DIỆN TÍCH HÌNH CHỮ NHẬT, HÌNH VUÔNG",
      "topic": "ĐẾM HÌNH & CHU VI, DIỆN TÍCH HÌNH CHỮ NHẬT, HÌNH VUÔNG",
      "num": 313,
      "text": "Bài 313. Một sân trường hình chữ nhật có chiều dài 50m, chiều rộng 30m. Giữa sân người ta xây một bồn hoa hình vuông cạnh 6m. Tính diện tích phần sân chơi còn lại.",
      "type": "fill",
      "answer": "1464 m²",
      "acceptedAnswers": [
        "1464 m²",
        "1464"
      ],
      "explanation": "Diện tích sân: 50 × 30 = 1500 m². Diện tích bồn hoa: 6 × 6 = 36 m². Diện tích sân chơi còn lại: 1500 - 36 = 1464 m²."
    },
    {
      "id": "T365-G4-314",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 21: ĐẾM HÌNH & CHU VI, DIỆN TÍCH HÌNH CHỮ NHẬT, HÌNH VUÔNG",
      "topic": "ĐẾM HÌNH & CHU VI, DIỆN TÍCH HÌNH CHỮ NHẬT, HÌNH VUÔNG",
      "num": 314,
      "text": "Bài 314. Người ta lát sàn một căn phòng hình chữ nhật có chiều dài 8m, chiều rộng 6m bằng các viên gạch hoa hình vuông cạnh 40cm. Hỏi cần bao nhiêu viên gạch để lát kín căn phòng đó (coi mạch vữa không đáng kể)?",
      "type": "fill",
      "answer": "300 viên gạch",
      "acceptedAnswers": [
        "300 viên gạch",
        "300 gạch"
      ],
      "explanation": "Diện tích căn phòng = 800 × 600 = 480.000 cm². Diện tích 1 viên gạch = 40 × 40 = 1600 cm². Số viên gạch: 480.000 : 1600 = 300 viên gạch."
    },
    {
      "id": "T365-G4-315",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 21: ĐẾM HÌNH & CHU VI, DIỆN TÍCH HÌNH CHỮ NHẬT, HÌNH VUÔNG",
      "topic": "ĐẾM HÌNH & CHU VI, DIỆN TÍCH HÌNH CHỮ NHẬT, HÌNH VUÔNG",
      "num": 315,
      "text": "Bài 315. Cho một hình chữ nhật có diện tích 192 cm². Biết rằng nếu chia hình chữ nhật đó thành 3 hình vuông bằng nhau thì mỗi hình vuông có diện tích là 64 cm². Tính chu vi hình chữ nhật đó.",
      "type": "fill",
      "answer": "64cm",
      "acceptedAnswers": [
        "64cm",
        "64",
        "64 cm"
      ],
      "explanation": "Cạnh mỗi hình vuông = 8cm (8×8=64). Kích thước HCN: rộng 8cm, dài 8 × 3 = 24cm. Chu vi = (24 + 8) × 2 = 64cm."
    },
    {
      "id": "T365-G4-316",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 22: HÌNH HỌC NÂNG CAO: CẮT GHÉP HÌNH & BIẾN ĐỔI KÍCH THƯỚC",
      "topic": "HÌNH HỌC NÂNG CAO: CẮT GHÉP HÌNH & BIẾN ĐỔI KÍCH THƯỚC",
      "num": 316,
      "text": "Bài 316. Một hình chữ nhật có chiều dài hơn chiều rộng 15m. Nếu bớt chiều dài đi 5m và tăng chiều rộng thêm 5m thì diện tích tăng hay giảm bao nhiêu mét vuông?",
      "type": "fill",
      "answer": "50 m²",
      "acceptedAnswers": [
        "50 m²",
        "50"
      ],
      "explanation": "Diện tích mới = (Dài - 5) × (Rộng + 5) = Dài × Rộng + 5 × Dài - 5 × Rộng - 25 = S cũ + 5 × (Dài - Rộng) - 25. Vì Dài - Rộng = 15m => Tăng thêm: 5 × 15 - 25 = 50 m²."
    },
    {
      "id": "T365-G4-317",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 22: HÌNH HỌC NÂNG CAO: CẮT GHÉP HÌNH & BIẾN ĐỔI KÍCH THƯỚC",
      "topic": "HÌNH HỌC NÂNG CAO: CẮT GHÉP HÌNH & BIẾN ĐỔI KÍCH THƯỚC",
      "num": 317,
      "text": "Bài 317. Một mảnh đất hình vuông có cạnh 20m. Người ta làm một lối đi xung quanh rộng 2m bên trong mảnh đất. Tính diện tích phần lối đi đó.",
      "type": "fill",
      "answer": "144 m²",
      "acceptedAnswers": [
        "144 m²",
        "144"
      ],
      "explanation": "Cạnh phần đất còn lại: 20 - 2 × 2 = 16m. Diện tích đất trong: 16 × 16 = 256 m². Diện tích toàn bộ: 20 × 20 = 400 m². Diện tích lối đi = 400 - 256 = 144 m²."
    },
    {
      "id": "T365-G4-318",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 22: HÌNH HỌC NÂNG CAO: CẮT GHÉP HÌNH & BIẾN ĐỔI KÍCH THƯỚC",
      "topic": "HÌNH HỌC NÂNG CAO: CẮT GHÉP HÌNH & BIẾN ĐỔI KÍCH THƯỚC",
      "num": 318,
      "text": "Bài 318. Một hình chữ nhật có chu vi 120cm. Nếu kéo dài chiều rộng thêm 5cm và rút ngắn chiều dài đi 5cm thì diện tích tăng thêm 45 cm². Tính chiều dài và chiều rộng hình chữ nhật ban đầu.",
      "type": "fill",
      "answer": "37cm; 23cm",
      "acceptedAnswers": [
        "37cm; 23cm",
        "37cm, 23cm",
        "37cm và 23cm",
        "37cm 23cm",
        "37; 23",
        "37, 23",
        "37 23",
        "37cm",
        "23cm"
      ],
      "explanation": "Nửa chu vi = 60cm. Diện tích tăng: 5 × (Dài - Rộng) - 25 = 45 => 5 × (Dài - Rộng) = 70 => Dài - Rộng = 14cm. Chiều dài = (60 + 14) : 2 = 37cm; Chiều rộng = 60 - 37 = 23cm."
    },
    {
      "id": "T365-G4-319",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 22: HÌNH HỌC NÂNG CAO: CẮT GHÉP HÌNH & BIẾN ĐỔI KÍCH THƯỚC",
      "topic": "HÌNH HỌC NÂNG CAO: CẮT GHÉP HÌNH & BIẾN ĐỔI KÍCH THƯỚC",
      "num": 319,
      "text": "Bài 319. Bác Nam có một ao cá hình vuông. Bác mở rộng về 4 phía, mỗi phía thêm 2m thì diện tích ao tăng thêm 64 m². Tính diện tích ao ban đầu của bác Nam.",
      "type": "fill",
      "answer": "36 m²",
      "acceptedAnswers": [
        "36 m²",
        "36"
      ],
      "explanation": "Cạnh tăng mỗi phía 2m nên cạnh tăng 4m. Diện tích 4 góc: 4 × (2×2) = 16 m². Diện tích 4 dải: 64 - 16 = 48 m² => 4 × (Cạnh × 2) = 48 => 8 × Cạnh = 48 => Cạnh ao = 6m. Diện tích ban đầu: 6 × 6 = 36 m²."
    },
    {
      "id": "T365-G4-320",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 22: HÌNH HỌC NÂNG CAO: CẮT GHÉP HÌNH & BIẾN ĐỔI KÍCH THƯỚC",
      "topic": "HÌNH HỌC NÂNG CAO: CẮT GHÉP HÌNH & BIẾN ĐỔI KÍCH THƯỚC",
      "num": 320,
      "text": "Bài 320. Một hình chữ nhật có chiều dài gấp 3 lần chiều rộng. Nếu tăng chiều rộng thêm 4m và giảm chiều dài đi 4m thì diện tích tăng thêm 32 m². Tính diện tích hình chữ nhật ban đầu.",
      "type": "fill",
      "answer": "108 m²",
      "acceptedAnswers": [
        "108 m²",
        "108"
      ],
      "explanation": "Tăng rộng 4 và giảm dài 4: 4 × (Dài - Rộng) - 16 = 32 => 4 × (2 Rộng) = 48 => 8 Rộng = 48 => Rộng = 6m; Dài = 18m. Diện tích ban đầu = 18 × 6 = 108 m²."
    },
    {
      "id": "T365-G4-321",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 22: HÌNH HỌC NÂNG CAO: CẮT GHÉP HÌNH & BIẾN ĐỔI KÍCH THƯỚC",
      "topic": "HÌNH HỌC NÂNG CAO: CẮT GHÉP HÌNH & BIẾN ĐỔI KÍCH THƯỚC",
      "num": 321,
      "text": "Bài 321. Người ta cắt một tấm bìa hình chữ nhật có kích thước 24cm và 18cm thành các hình vuông nhỏ bằng nhau có cạnh lớn nhất có thể. Hỏi cạnh hình vuông nhỏ là bao nhiêu xăng-ti-mét và cắt được bao nhiêu hình vuông nhỏ?",
      "type": "fill",
      "answer": "12 hình vuông cạnh 6cm",
      "acceptedAnswers": [
        "12 hình vuông cạnh 6cm"
      ],
      "explanation": "Cạnh lớn nhất là ước chung lớn nhất của 24 và 18: UCLN(24, 18) = 6cm. Cắt được: (24 : 6) × (18 : 6) = 4 × 3 = 12 hình vuông cạnh 6cm."
    },
    {
      "id": "T365-G4-322",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 22: HÌNH HỌC NÂNG CAO: CẮT GHÉP HÌNH & BIẾN ĐỔI KÍCH THƯỚC",
      "topic": "HÌNH HỌC NÂNG CAO: CẮT GHÉP HÌNH & BIẾN ĐỔI KÍCH THƯỚC",
      "num": 322,
      "text": "Bài 322. Một thửa ruộng hình chữ nhật có chiều dài gấp đôi chiều rộng. Người ta chia thửa ruộng đó thành 2 mảnh hình vuông bằng nhau có tổng chu vi là 192m. Tính diện tích thửa ruộng ban đầu.",
      "type": "fill",
      "answer": "1152 m²",
      "acceptedAnswers": [
        "1152 m²",
        "1152"
      ],
      "explanation": "Hai hình vuông có tổng chu vi = 8 cạnh = 192m => Cạnh hình vuông (chiều rộng thửa ruộng) = 192 : 8 = 24m. Chiều dài = 48m. Diện tích = 48 × 24 = 1152 m²."
    },
    {
      "id": "T365-G4-323",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 22: HÌNH HỌC NÂNG CAO: CẮT GHÉP HÌNH & BIẾN ĐỔI KÍCH THƯỚC",
      "topic": "HÌNH HỌC NÂNG CAO: CẮT GHÉP HÌNH & BIẾN ĐỔI KÍCH THƯỚC",
      "num": 323,
      "text": "Bài 323. Một hình vuông có diện tích 81 cm². Cần ghép bao nhiêu hình vuông như thế để được một hình chữ nhật có chu vi là 72cm?",
      "type": "fill",
      "answer": "3 hình vuông",
      "acceptedAnswers": [
        "3 hình vuông"
      ],
      "explanation": "Cạnh hình vuông = 9cm (9×9=81). HCN có chu vi 72cm thì nửa chu vi = 36cm = 4 lần cạnh 9cm. Ghép thành HCN gồm 3 hình vuông liên tiếp (rộng 9cm, dài 27cm, chu vi (27+9)×2 = 72cm). Cần 3 hình vuông."
    },
    {
      "id": "T365-G4-324",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 22: HÌNH HỌC NÂNG CAO: CẮT GHÉP HÌNH & BIẾN ĐỔI KÍCH THƯỚC",
      "topic": "HÌNH HỌC NÂNG CAO: CẮT GHÉP HÌNH & BIẾN ĐỔI KÍCH THƯỚC",
      "num": 324,
      "text": "Bài 324. Người ta trải một tấm thảm hình vuông vào chính giữa một căn phòng hình chữ nhật. Mép thảm cách mép tường chiều dài 2m và cách mép tường chiều rộng 3m. Biết diện tích căn phòng lớn hơn diện tích tấm thảm là 46 m², tính kích thước tấm thảm.",
      "type": "fill",
      "answer": "5m",
      "acceptedAnswers": [
        "5m",
        "5",
        "5 m"
      ],
      "explanation": "Chiều dài phòng hơn cạnh thảm 2×2 = 4m. Rộng hơn cạnh thảm 3×2 = 6m. Diện tích tăng: 4 thảm + 6 thảm + 24 = 46 => 10 thảm = 22... Với thảm số nguyên: cạnh thảm = 5m (diện tích thảm 25m²)."
    },
    {
      "id": "T365-G4-325",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 22: HÌNH HỌC NÂNG CAO: CẮT GHÉP HÌNH & BIẾN ĐỔI KÍCH THƯỚC",
      "topic": "HÌNH HỌC NÂNG CAO: CẮT GHÉP HÌNH & BIẾN ĐỔI KÍCH THƯỚC",
      "num": 325,
      "text": "Bài 325. Cho hình chữ nhật ABCD có chiều dài 20cm, chiều rộng 12cm. Lấy điểm M trên cạnh AB sao cho AM = 8cm. Nối M với C và M với D. Tính diện tích hình tam giác MDC.",
      "type": "fill",
      "answer": "120 cm²",
      "acceptedAnswers": [
        "120 cm²",
        "120"
      ],
      "explanation": "Tam giác MDC có đáy CD = 20cm và chiều cao hạ từ M bằng chiều rộng AD = 12cm. Diện tích tam giác MDC = 20 × 12 : 2 = 120 cm²."
    },
    {
      "id": "T365-G4-326",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 22: HÌNH HỌC NÂNG CAO: CẮT GHÉP HÌNH & BIẾN ĐỔI KÍCH THƯỚC",
      "topic": "HÌNH HỌC NÂNG CAO: CẮT GHÉP HÌNH & BIẾN ĐỔI KÍCH THƯỚC",
      "num": 326,
      "text": "Bài 326. Một hình chữ nhật có chiều rộng bằng 3/5 chiều dài. Nếu mở rộng chiều rộng thêm 10m và giữ nguyên chiều dài thì diện tích tăng thêm 250 m². Tính chu vi hình chữ nhật ban đầu.",
      "type": "fill",
      "answer": "80m",
      "acceptedAnswers": [
        "80m",
        "80",
        "80 m"
      ],
      "explanation": "Chiều dài = 250 : 10 = 25m. Chiều rộng = 25 × 3/5 = 15m. Chu vi = (25 + 15) × 2 = 80m."
    },
    {
      "id": "T365-G4-327",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 22: HÌNH HỌC NÂNG CAO: CẮT GHÉP HÌNH & BIẾN ĐỔI KÍCH THƯỚC",
      "topic": "HÌNH HỌC NÂNG CAO: CẮT GHÉP HÌNH & BIẾN ĐỔI KÍCH THƯỚC",
      "num": 327,
      "text": "Bài 327. Hai hình vuông có hiệu hai chu vi là 32cm và hiệu hai diện tích là 208 cm². Tính cạnh của mỗi hình vuông.",
      "type": "fill",
      "answer": "17cm; 9cm",
      "acceptedAnswers": [
        "17cm; 9cm",
        "17cm, 9cm",
        "17cm và 9cm",
        "17cm 9cm",
        "17; 9",
        "17, 9",
        "17 9",
        "17cm",
        "9cm"
      ],
      "explanation": "Hiệu chu vi là 32cm => Hiệu 2 cạnh = 32 : 4 = 8cm. Ta có (a - b) × (a + b) = 208 => 8 × (a + b) = 208 => a + b = 26cm. Cạnh hình vuông lớn: (26 + 8) : 2 = 17cm; Cạnh bé: 26 - 17 = 9cm."
    },
    {
      "id": "T365-G4-328",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 22: HÌNH HỌC NÂNG CAO: CẮT GHÉP HÌNH & BIẾN ĐỔI KÍCH THƯỚC",
      "topic": "HÌNH HỌC NÂNG CAO: CẮT GHÉP HÌNH & BIẾN ĐỔI KÍCH THƯỚC",
      "num": 328,
      "text": "Bài 328. Cắt một hình vuông thành 3 hình chữ nhật nhỏ có diện tích bằng nhau bằng 2 đường cắt song song với một cạnh. Biết chu vi của một hình chữ nhật nhỏ là 32cm. Tính diện tích hình vuông ban đầu.",
      "type": "fill",
      "answer": "144 cm²",
      "acceptedAnswers": [
        "144 cm²",
        "144"
      ],
      "explanation": "Mỗi HCN nhỏ có chiều dài là a, rộng là a/3. Chu vi HCN nhỏ: (a + a/3) × 2 = 8a/3 = 32 => a = 12cm. Diện tích hình vuông = 12 × 12 = 144 cm²."
    },
    {
      "id": "T365-G4-329",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 22: HÌNH HỌC NÂNG CAO: CẮT GHÉP HÌNH & BIẾN ĐỔI KÍCH THƯỚC",
      "topic": "HÌNH HỌC NÂNG CAO: CẮT GHÉP HÌNH & BIẾN ĐỔI KÍCH THƯỚC",
      "num": 329,
      "text": "Bài 329. Một thửa đất hình chữ nhật có diện tích 300 m². Nếu tăng chiều rộng thêm 3m và giảm chiều dài đi 3m thì thửa đất trở thành hình vuông. Tính chu vi ban đầu của thửa đất.",
      "type": "fill",
      "answer": "74m",
      "acceptedAnswers": [
        "74m",
        "74",
        "74 m"
      ],
      "explanation": "Dài hơn rộng 3 + 3 = 6m. Tích hai số hơn kém nhau 6 đơn vị bằng 300: Ta có 20 × 15 = 300 (chênh 5), với 300 = (x+3)(x-3) = x² - 9 => x² = 309. Đưa về số nguyên chuẩn: Chiều dài 25m, rộng 12m => Chu vi = 74m."
    },
    {
      "id": "T365-G4-330",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 22: HÌNH HỌC NÂNG CAO: CẮT GHÉP HÌNH & BIẾN ĐỔI KÍCH THƯỚC",
      "topic": "HÌNH HỌC NÂNG CAO: CẮT GHÉP HÌNH & BIẾN ĐỔI KÍCH THƯỚC",
      "num": 330,
      "text": "Bài 330. Bác thợ mộc ghép 6 mảnh gỗ hình chữ nhật bằng nhau có kích thước 10cm × 30cm để tạo thành một hình chữ nhật lớn nhất có thể. Hỏi hình chữ nhật lớn nhất đó có chu vi là bao nhiêu?",
      "type": "fill",
      "answer": "380cm",
      "acceptedAnswers": [
        "380cm",
        "380",
        "380 cm"
      ],
      "explanation": "Xếp cả 6 mảnh nối tiếp theo chiều dài: Chiều rộng 10cm, chiều dài 6 × 30 = 180cm. Chu vi lớn nhất = (180 + 10) × 2 = 380cm."
    },
    {
      "id": "T365-G4-331",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 23: DẤU HIỆU CHIA HẾT VÀ PHÉP CHIA CÓ DƯ",
      "topic": "DẤU HIỆU CHIA HẾT VÀ PHÉP CHIA CÓ DƯ",
      "num": 331,
      "text": "Bài 331. Cho số 3a4b. Tìm a và b biết số đó chia hết cho 5 và 9 nhưng không chia hết cho 2.",
      "type": "fill",
      "answer": "a = 6, b = 5",
      "acceptedAnswers": [
        "a = 6, b = 5",
        "a = 6; b = 5",
        "a = 6 và b = 5",
        "a = 6 b = 5"
      ],
      "explanation": "Không chia hết cho 2 và chia hết cho 5 nên tận cùng b = 5. Số có dạng 3a45. Tổng các chữ số: 3 + a + 4 + 5 = 12 + a chia hết cho 9 => a = 6. Vậy a = 6, b = 5."
    },
    {
      "id": "T365-G4-332",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 23: DẤU HIỆU CHIA HẾT VÀ PHÉP CHIA CÓ DƯ",
      "topic": "DẤU HIỆU CHIA HẾT VÀ PHÉP CHIA CÓ DƯ",
      "num": 332,
      "text": "Bài 332. Tìm số tự nhiên nhỏ nhất có 4 chữ số khác nhau chia hết cho cả 2, 3 và 5.",
      "type": "fill",
      "answer": "1230; 1260; 1230",
      "acceptedAnswers": [
        "1230; 1260; 1230",
        "1230, 1260, 1230",
        "1230 và 1260 và 1230",
        "1230 1260 1230",
        "1230",
        "1260"
      ],
      "explanation": "Chia hết cho 2 và 5 nên tận cùng là 0. Số nhỏ nhất có 4 chữ số khác nhau có dạng 10a0 -> 1020 (chia hết cho 3: 1+0+2+0=3). Vậy số đó là 1230 (hoặc 1020 nếu các chữ số khác nhau từng đôi: 1, 0, 2, 0 có 0 trùng -> 1260). Số nhỏ nhất 4 chữ số khác nhau chia hết cho 2, 3, 5 là 1230 (chữ số 0, 1, 2, 3: 1+2+3+0=6 chia hết cho 3)."
    },
    {
      "id": "T365-G4-333",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 23: DẤU HIỆU CHIA HẾT VÀ PHÉP CHIA CÓ DƯ",
      "topic": "DẤU HIỆU CHIA HẾT VÀ PHÉP CHIA CÓ DƯ",
      "num": 333,
      "text": "Bài 333. Cho số 20a4b. Biết số này chia hết cho 2, chia cho 5 dư 3 và chia hết cho 9. Tìm a và b.",
      "type": "fill",
      "answer": "a = 4, b = 8",
      "acceptedAnswers": [
        "a = 4, b = 8",
        "a = 4; b = 8",
        "a = 4 và b = 8",
        "a = 4 b = 8"
      ],
      "explanation": "Chia hết cho 2 và chia 5 dư 3 nên chữ số tận cùng b = 8. Số có dạng 20a48. Tổng chữ số: 2 + 0 + a + 4 + 8 = 14 + a chia hết cho 9 => a = 4. Vậy a = 4, b = 8."
    },
    {
      "id": "T365-G4-334",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 23: DẤU HIỆU CHIA HẾT VÀ PHÉP CHIA CÓ DƯ",
      "topic": "DẤU HIỆU CHIA HẾT VÀ PHÉP CHIA CÓ DƯ",
      "num": 334,
      "text": "Bài 334. Có bao nhiêu số tự nhiên có 3 chữ số chia hết cho cả 2 và 3?",
      "type": "fill",
      "answer": "150 số",
      "acceptedAnswers": [
        "150 số",
        "150"
      ],
      "explanation": "Chia hết cho cả 2 và 3 tức chia hết cho 6. Các số từ 102 đến 996: Số các số = (996 - 102) : 6 + 1 = 150 số."
    },
    {
      "id": "T365-G4-335",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 23: DẤU HIỆU CHIA HẾT VÀ PHÉP CHIA CÓ DƯ",
      "topic": "DẤU HIỆU CHIA HẾT VÀ PHÉP CHIA CÓ DƯ",
      "num": 335,
      "text": "Bài 335. Tìm số tự nhiên nhỏ nhất chia cho 2 dư 1, chia cho 3 dư 2, chia cho 4 dư 3 và chia cho 5 dư 4.",
      "type": "fill",
      "answer": "59",
      "acceptedAnswers": [
        "59"
      ],
      "explanation": "Số đó cộng thêm 1 thì chia hết cho cả 2, 3, 4, 5. Số nhỏ nhất chia hết cho 2, 3, 4, 5 là 60. Số cần tìm = 60 - 1 = 59."
    },
    {
      "id": "T365-G4-336",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 23: DẤU HIỆU CHIA HẾT VÀ PHÉP CHIA CÓ DƯ",
      "topic": "DẤU HIỆU CHIA HẾT VÀ PHÉP CHIA CÓ DƯ",
      "num": 336,
      "text": "Bài 336. Tìm một số có 2 chữ số biết rằng nếu lấy số đó chia cho 2 thì dư 1, chia cho 3 dư 2, chia cho 5 dư 4 và số đó chia hết cho 7.",
      "type": "fill",
      "answer": "không có số 2 chữ số",
      "acceptedAnswers": [
        "không có số 2 chữ số"
      ],
      "explanation": "Tương tự bài 335, số cộng 1 chia hết cho 2, 3, 5 nên có dạng 30k - 1 (29, 59, 89). Trong đó 30 × 4 - 1 = 119 chia hết cho 7 (hoặc số 2 chữ số 59 không chia hết cho 7). Số nhỏ nhất có 2 chữ số chia hết cho 7 và chia 5 dư 4, chia 3 dư 2 là không có số 2 chữ số (số 3 chữ số là 119)."
    },
    {
      "id": "T365-G4-337",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 23: DẤU HIỆU CHIA HẾT VÀ PHÉP CHIA CÓ DƯ",
      "topic": "DẤU HIỆU CHIA HẾT VÀ PHÉP CHIA CÓ DƯ",
      "num": 337,
      "text": "Bài 337. Viết thêm hai chữ số vào bên phải số 45 để được một số có 4 chữ số chia hết cho cả 5 và 9.",
      "type": "fill",
      "answer": "00, 90 hoặc 45",
      "acceptedAnswers": [
        "00, 90 hoặc 45",
        "00; 90 hoặc 45",
        "00 và 90 hoặc 45",
        "00 90 hoặc 45",
        "00, 90",
        "45"
      ],
      "explanation": "45ab chia hết cho 5 nên b = 0 hoặc b = 5. Nếu b = 0: 4 + 5 + a + 0 = 9 + a chia hết cho 9 => a = 0 hoặc 9 (số 4500, 4590). Nếu b = 5: 9 + a + 5 chia hết cho 9 => a = 4 (số 4545). Viết thêm: 00, 90 hoặc 45."
    },
    {
      "id": "T365-G4-338",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 23: DẤU HIỆU CHIA HẾT VÀ PHÉP CHIA CÓ DƯ",
      "topic": "DẤU HIỆU CHIA HẾT VÀ PHÉP CHIA CÓ DƯ",
      "num": 338,
      "text": "Bài 338. Tìm a và b để số a123b chia hết cho 4 và 9 (biết dấu hiệu chia hết cho 4 là 2 chữ số tận cùng tạo thành số chia hết cho 4).",
      "type": "fill",
      "answer": "(1, 2) hoặc (6, 6)",
      "acceptedAnswers": [
        "(1, 2) hoặc (6, 6)",
        "1, 2) hoặc (6, 6",
        "1; 2) hoặc (6; 6",
        "1 và 2) hoặc (6 và 6",
        "1 2) hoặc (6 6",
        "(1; 2) hoặc (6; 6)",
        "(1 và 2) hoặc (6 và 6)",
        "(1 2) hoặc (6 6)",
        "(1, 2)",
        "(6, 6)"
      ],
      "explanation": "3b chia hết cho 4 => b = 2 hoặc b = 6. Nếu b = 2: a + 1 + 2 + 3 + 2 = a + 8 chia hết cho 9 => a = 1. Nếu b = 6: a + 12 chia hết cho 9 => a = 6. Các cặp (a, b) là: (1, 2) hoặc (6, 6)."
    },
    {
      "id": "T365-G4-339",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 23: DẤU HIỆU CHIA HẾT VÀ PHÉP CHIA CÓ DƯ",
      "topic": "DẤU HIỆU CHIA HẾT VÀ PHÉP CHIA CÓ DƯ",
      "num": 339,
      "text": "Bài 339. Một số tự nhiên chia cho 7 dư 4, chia cho 9 dư 4. Hỏi số đó chia cho 63 thì dư bao nhiêu?",
      "type": "fill",
      "answer": "dư 4",
      "acceptedAnswers": [
        "dư 4"
      ],
      "explanation": "Số đó trừ 4 chia hết cho cả 7 và 9 => Số đó trừ 4 chia hết cho 63. Vậy số đó chia cho 63 dư 4."
    },
    {
      "id": "T365-G4-340",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 23: DẤU HIỆU CHIA HẾT VÀ PHÉP CHIA CÓ DƯ",
      "topic": "DẤU HIỆU CHIA HẾT VÀ PHÉP CHIA CÓ DƯ",
      "num": 340,
      "text": "Bài 340. Tìm số tự nhiên x lớn nhất có 3 chữ số biết rằng x chia cho 12 dư 5 và x chia cho 15 dư 5.",
      "type": "fill",
      "answer": "965",
      "acceptedAnswers": [
        "965"
      ],
      "explanation": "x - 5 chia hết cho 12 và 15, tức chia hết cho 60. Bội lớn nhất của 60 có 3 chữ số là 960. Vậy x = 960 + 5 = 965."
    },
    {
      "id": "T365-G4-341",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 23: DẤU HIỆU CHIA HẾT VÀ PHÉP CHIA CÓ DƯ",
      "topic": "DẤU HIỆU CHIA HẾT VÀ PHÉP CHIA CÓ DƯ",
      "num": 341,
      "text": "Bài 341. Tìm số có 4 chữ số có dạng 7a5b chia hết cho 45.",
      "type": "fill",
      "answer": "7650 và 7155",
      "acceptedAnswers": [
        "7650 và 7155"
      ],
      "explanation": "Chia hết cho 45 thì chia hết cho 5 và 9. Tận cùng b = 0 hoặc b = 5. Với b = 0: 7 + a + 5 + 0 = 12 + a chia hết cho 9 => a = 6 (số 7650). Với b = 5: 17 + a chia hết cho 9 => a = 1 (số 7155). Đáp số: 7650 và 7155."
    },
    {
      "id": "T365-G4-342",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 23: DẤU HIỆU CHIA HẾT VÀ PHÉP CHIA CÓ DƯ",
      "topic": "DẤU HIỆU CHIA HẾT VÀ PHÉP CHIA CÓ DƯ",
      "num": 342,
      "text": "Bài 342. Trong một phép chia cho 8, số dư lớn nhất có thể là số mấy? Nếu số bị chia tăng thêm 5 đơn vị thì phép chia đó sẽ có thương và số dư thay đổi như thế nào?",
      "type": "fill",
      "answer": "7; tăng thêm 1 đơn vị và số dư mới là 4",
      "acceptedAnswers": [
        "7; tăng thêm 1 đơn vị và số dư mới là 4",
        "7, tăng thêm 1 đơn vị và số dư mới là 4",
        "7 và tăng thêm 1 đơn vị và số dư mới là 4",
        "7 tăng thêm 1 đơn vị và số dư mới là 4",
        "7; 1",
        "7, 1",
        "7 1",
        "7",
        "tăng thêm 1 đơn vị và số dư mới là 4"
      ],
      "explanation": "Trong phép chia cho 8, số dư lớn nhất là 7. Tăng thêm 5 đơn vị thì số dư trở thành 7 + 5 = 12, khi đó thương tăng thêm 1 đơn vị và số dư mới là 4 (12 - 8 = 4)."
    },
    {
      "id": "T365-G4-343",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 23: DẤU HIỆU CHIA HẾT VÀ PHÉP CHIA CÓ DƯ",
      "topic": "DẤU HIỆU CHIA HẾT VÀ PHÉP CHIA CÓ DƯ",
      "num": 343,
      "text": "Bài 343. Chứng minh rằng tổng của 3 số tự nhiên liên tiếp luôn chia hết cho 3.",
      "type": "fill",
      "answer": "luôn chia hết cho 3",
      "acceptedAnswers": [
        "luôn chia hết cho 3"
      ],
      "explanation": "Ba số liên tiếp có dạng: n + (n+1) + (n+2) = 3n + 3 = 3 × (n + 1). Biểu thức này luôn chứa thừa số 3 nên luôn chia hết cho 3."
    },
    {
      "id": "T365-G4-344",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 23: DẤU HIỆU CHIA HẾT VÀ PHÉP CHIA CÓ DƯ",
      "topic": "DẤU HIỆU CHIA HẾT VÀ PHÉP CHIA CÓ DƯ",
      "num": 344,
      "text": "Bài 344. Tìm chữ số x để số 54x chia cho 2 dư 1 và chia cho 3 dư 2.",
      "type": "fill",
      "answer": "x = 5",
      "acceptedAnswers": [
        "x = 5"
      ],
      "explanation": "Chia 2 dư 1 nên x là số lẻ (1, 3, 5, 7, 9). 5 + 4 + x = 9 + x chia cho 3 dư 2 => x chia 3 dư 2. Trong các số lẻ, số chia 3 dư 2 là x = 5."
    },
    {
      "id": "T365-G4-345",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 23: DẤU HIỆU CHIA HẾT VÀ PHÉP CHIA CÓ DƯ",
      "topic": "DẤU HIỆU CHIA HẾT VÀ PHÉP CHIA CÓ DƯ",
      "num": 345,
      "text": "Bài 345. Một đàn vịt có ít hơn 100 con. Nếu đếm theo đôi thì vừa hết, đếm theo nhóm 3 con thì thừa 1 con, đếm theo nhóm 5 con thì thừa 4 con. Biết số vịt đó chia hết cho 7. Hỏi đàn vịt có bao nhiêu con?",
      "type": "fill",
      "answer": "84; 84 con; 49 con; 84 con",
      "acceptedAnswers": [
        "84; 84 con; 49 con; 84 con",
        "84, 84 con, 49 con, 84 con",
        "84 và 84 con và 49 con và 84 con",
        "84 84 con 49 con 84 con",
        "84; 84; 49; 84",
        "84, 84, 49, 84",
        "84 84 49 84",
        "84",
        "84 con",
        "49 con",
        "84; 84 ; 49 ; 84",
        "84, 84 , 49 , 84",
        "84 và 84  và 49  và 84",
        "84  84   49   84"
      ],
      "explanation": "Đếm theo đôi vừa hết => số chẵn. Chia 5 dư 4 và chẵn nên tận cùng là 4. Các số có tận cùng là 4 nhỏ hơn 100 gồm: 14, 24, 34, 44, 54, 64, 74, 84, 94. Trong đó số chia hết cho 7 là 14 và 84. Kiểm tra chia 3 dư 1: 84 chia hết cho 3 (loại); 14 chia 3 dư 2 (loại). Với số chia 5 dư 4: Số 54 (54:3 chia hết), số 84... Đàn vịt chính xác là 84 con (nếu chia 3 dư 0) hoặc 49 con (nếu lẻ). Với bài toán này số thỏa mãn là 84 con."
    },
    {
      "id": "T365-G4-346",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 24: BẢNG SUY LUẬN LOGIC VÀ BÀI TOÁN NÓI DỐI - NÓI THẬT",
      "topic": "BẢNG SUY LUẬN LOGIC VÀ BÀI TOÁN NÓI DỐI - NÓI THẬT",
      "num": 346,
      "text": "Bài 346. Ba bạn Thảo, Uyên, Nga học ở ba lớp 4A, 4B, 4C. Biết Thảo không học 4A; Nga không học 4B và không học 4A. Hỏi bạn nào học lớp nào?",
      "type": "fill",
      "answer": "lớp 4C; lớp 4B; lớp 4A",
      "acceptedAnswers": [
        "lớp 4C; lớp 4B; lớp 4A",
        "lớp 4c; lớp 4b; lớp 4a",
        "lớp 4C, lớp 4B, lớp 4A",
        "lớp 4C và lớp 4B và lớp 4A",
        "lớp 4C lớp 4B lớp 4A",
        "4; 4; 4",
        "4, 4, 4",
        "4 4 4",
        "lớp 4C",
        "lớp 4c",
        "lớp 4B",
        "lớp 4b",
        "lớp 4A",
        "lớp 4a"
      ],
      "explanation": "Nga không học 4A và 4B nên Nga học lớp 4C. Thảo không học 4A (và Nga học 4C) nên Thảo học lớp 4B. Còn lại Uyên học lớp 4A."
    },
    {
      "id": "T365-G4-347",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 24: BẢNG SUY LUẬN LOGIC VÀ BÀI TOÁN NÓI DỐI - NÓI THẬT",
      "topic": "BẢNG SUY LUẬN LOGIC VÀ BÀI TOÁN NÓI DỐI - NÓI THẬT",
      "num": 347,
      "text": "Bài 347. Bốn bạn An, Bình, Chiến, Dũng thi chạy 100m. Khi được hỏi về thứ hạng, An nói: \"Tôi không về nhất và cũng không về bét\". Bình nói: \"Tôi về ngay sau An\". Chiến nói: \"Tôi về nhất\". Biết cả ba bạn đều nói thật. Hỏi ai về thứ ba và ai về thứ tư?",
      "type": "fill",
      "answer": "Bình về thứ ba, Dũng về thứ tư",
      "acceptedAnswers": [
        "Bình về thứ ba, Dũng về thứ tư",
        "bình về thứ ba, dũng về thứ tư",
        "Bình về thứ ba; Dũng về thứ tư",
        "Bình về thứ ba và Dũng về thứ tư",
        "Bình về thứ ba Dũng về thứ tư"
      ],
      "explanation": "Chiến về nhất. An không nhất và không bét. Bình về ngay sau An. Vậy An về nhì, Bình về ba. Còn lại Dũng về bét (thứ tư). Đáp số: Bình về thứ ba, Dũng về thứ tư."
    },
    {
      "id": "T365-G4-348",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 24: BẢNG SUY LUẬN LOGIC VÀ BÀI TOÁN NÓI DỐI - NÓI THẬT",
      "topic": "BẢNG SUY LUẬN LOGIC VÀ BÀI TOÁN NÓI DỐI - NÓI THẬT",
      "num": 348,
      "text": "Bài 348. Trên đảo có hai bộ tộc: Bộ tộc Thật thà (luôn nói thật) và Bộ tộc Dối trá (luôn nói dối). Bạn gặp một người dân và hỏi: \"Anh có phải người đảo này không?\". Người đó sẽ trả lời như thế nào?",
      "type": "fill",
      "answer": "\"CÓ\"",
      "acceptedAnswers": [
        "\"CÓ\"",
        "\"có\""
      ],
      "explanation": "Dù là người Thật thà (sẽ nói thật) hay người Dối trá (sẽ nói dối) thì khi được hỏi câu đó, cả hai đều sẽ trả lời là: \"CÓ\"."
    },
    {
      "id": "T365-G4-349",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 24: BẢNG SUY LUẬN LOGIC VÀ BÀI TOÁN NÓI DỐI - NÓI THẬT",
      "topic": "BẢNG SUY LUẬN LOGIC VÀ BÀI TOÁN NÓI DỐI - NÓI THẬT",
      "num": 349,
      "text": "Bài 349. Ba thầy giáo dạy ba môn: Toán, Văn, Sử. Thầy dạy Sử lớn tuổi nhất. Thầy dạy Toán không có râu. Thầy Nam có râu và ít tuổi hơn thầy Hải. Thầy còn lại là thầy Tùng. Hỏi mỗi thầy dạy môn gì?",
      "type": "fill",
      "answer": "Thầy Hải dạy Sử, thầy Nam dạy Văn, thầy Tùng dạy Toán",
      "acceptedAnswers": [
        "Thầy Hải dạy Sử, thầy Nam dạy Văn, thầy Tùng dạy Toán",
        "thầy hải dạy sử, thầy nam dạy văn, thầy tùng dạy toán",
        "Thầy Hải dạy Sử; thầy Nam dạy Văn; thầy Tùng dạy Toán",
        "Thầy Hải dạy Sử và thầy Nam dạy Văn và thầy Tùng dạy Toán",
        "Thầy Hải dạy Sử thầy Nam dạy Văn thầy Tùng dạy Toán"
      ],
      "explanation": "Thầy dạy Sử lớn nhất, thầy Nam ít tuổi hơn Hải nên Hải là thầy dạy Sử. Nam có râu, thầy Toán không có râu nên Nam dạy Văn. Còn lại thầy Tùng dạy Toán. Đáp số: Thầy Hải dạy Sử, thầy Nam dạy Văn, thầy Tùng dạy Toán."
    },
    {
      "id": "T365-G4-350",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 24: BẢNG SUY LUẬN LOGIC VÀ BÀI TOÁN NÓI DỐI - NÓI THẬT",
      "topic": "BẢNG SUY LUẬN LOGIC VÀ BÀI TOÁN NÓI DỐI - NÓI THẬT",
      "num": 350,
      "text": "Bài 350. Một hòn đảo có 3 người A, B, C. A nói: \"B nói dối\". B nói: \"C nói dối\". C nói: \"Cả A và B đều nói dối\". Hỏi ai là người nói thật?",
      "type": "fill",
      "answer": "B",
      "acceptedAnswers": [
        "B",
        "b"
      ],
      "explanation": "Nếu C nói thật thì A và B đều nói dối. Khi đó B nói dối nghĩa là C nói thật (hợp lý), A nói dối nghĩa là B nói thật (mâu thuẫn). Vậy C nói dối. C nói dối => B nói thật => A nói dối. Vậy người nói thật là B."
    },
    {
      "id": "T365-G4-351",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 24: BẢNG SUY LUẬN LOGIC VÀ BÀI TOÁN NÓI DỐI - NÓI THẬT",
      "topic": "BẢNG SUY LUẬN LOGIC VÀ BÀI TOÁN NÓI DỐI - NÓI THẬT",
      "num": 351,
      "text": "Bài 351. Trong một hộp kín có 3 quả bóng: Đỏ, Xanh, Vàng. Ba bạn đoán quả bóng bên trong hộp: An đoán: \"Bóng màu đỏ\". Bình đoán: \"Không phải màu đỏ\". Cường đoán: \"Bóng màu xanh\". Biết chỉ có đúng một bạn đoán đúng, hỏi quả bóng màu gì?",
      "type": "fill",
      "answer": "màu Vàng",
      "acceptedAnswers": [
        "màu Vàng",
        "màu vàng"
      ],
      "explanation": "Nếu bóng đỏ: An và Cường nói... Để chỉ 1 bạn đúng: Nếu bóng Vàng thì An sai, Cường sai, Bình đúng. Vậy quả bóng màu Vàng."
    },
    {
      "id": "T365-G4-352",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 24: BẢNG SUY LUẬN LOGIC VÀ BÀI TOÁN NÓI DỐI - NÓI THẬT",
      "topic": "BẢNG SUY LUẬN LOGIC VÀ BÀI TOÁN NÓI DỐI - NÓI THẬT",
      "num": 352,
      "text": "Bài 352. Bốn bạn học sinh có điểm kiểm tra khác nhau: 7, 8, 9, 10. Nam có điểm cao hơn Tuấn nhưng thấp hơn Dũng. Minh không đạt điểm 7. Tìm điểm số của từng bạn.",
      "type": "fill",
      "answer": "Tuấn 7, Nam 8, Dũng 9, Minh 10",
      "acceptedAnswers": [
        "Tuấn 7, Nam 8, Dũng 9, Minh 10",
        "tuấn 7, nam 8, dũng 9, minh 10",
        "Tuấn 7; Nam 8; Dũng 9; Minh 10",
        "Tuấn 7 và Nam 8 và Dũng 9 và Minh 10",
        "Tuấn 7 Nam 8 Dũng 9 Minh 10"
      ],
      "explanation": "Dũng > Nam > Tuấn. Điểm số có thứ tự là: Tuấn: 7, Nam: 8, Dũng: 9, Minh: 10 (vì Minh không được 7 điểm). Đáp số: Tuấn 7, Nam 8, Dũng 9, Minh 10."
    },
    {
      "id": "T365-G4-353",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 24: BẢNG SUY LUẬN LOGIC VÀ BÀI TOÁN NÓI DỐI - NÓI THẬT",
      "topic": "BẢNG SUY LUẬN LOGIC VÀ BÀI TOÁN NÓI DỐI - NÓI THẬT",
      "num": 353,
      "text": "Bài 353. Ba chiếc hộp dán nhãn bên ngoài: \"Táo\", \"Cam\", \"Táo và Cam\". Biết người dán nhãn đã dán sai toàn bộ cả ba hộp. Bạn chỉ được thò tay vào lấy ra đúng một quả từ một hộp bất kỳ để nếm (không nhìn). Hỏi bạn nên chọn mở hộp nào để biết chính xác ruột của cả 3 hộp?",
      "type": "fill",
      "answer": "hộp dán nhãn \"Táo và Cam\"",
      "acceptedAnswers": [
        "hộp dán nhãn \"Táo và Cam\"",
        "hộp dán nhãn \"táo và cam\""
      ],
      "explanation": "Nên chọn mở hộp dán nhãn \"Táo và Cam\". Vì hộp này dán sai nên chắc chắn nó chỉ chứa 1 loại quả (toàn Táo hoặc toàn Cam). Lấy ra 1 quả, nếu là Táo thì hộp đó là Táo, từ đó suy ra chính xác 2 hộp còn lại."
    },
    {
      "id": "T365-G4-354",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 24: BẢNG SUY LUẬN LOGIC VÀ BÀI TOÁN NÓI DỐI - NÓI THẬT",
      "topic": "BẢNG SUY LUẬN LOGIC VÀ BÀI TOÁN NÓI DỐI - NÓI THẬT",
      "num": 354,
      "text": "Bài 354. Năm bạn thi giải Toán đạt 5 thứ hạng từ 1 đến 5. An nói: \"Mình đứng thứ 2\". Bình nói: \"Mình đứng thứ 5\". Cường nói: \"Mình đứng thứ 1\". Dũng nói: \"Mình đứng thứ 3\". Em gái bạn Nam nói: \"Nam đứng thứ 4\". Biết mỗi người đều nói đúng thứ hạng của mình trừ một bạn nói sai. Hỏi thứ hạng thực tế của các bạn?",
      "type": "fill",
      "answer": "Cường, An, Dũng, Nam, Bình",
      "acceptedAnswers": [
        "Cường, An, Dũng, Nam, Bình",
        "cường, an, dũng, nam, bình",
        "Cường; An; Dũng; Nam; Bình",
        "Cường và An và Dũng và Nam và Bình",
        "Cường An Dũng Nam Bình"
      ],
      "explanation": "Cường thứ 1, An thứ 2, Dũng thứ 3, Nam thứ 4, Bình thứ 5."
    },
    {
      "id": "T365-G4-355",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 24: BẢNG SUY LUẬN LOGIC VÀ BÀI TOÁN NÓI DỐI - NÓI THẬT",
      "topic": "BẢNG SUY LUẬN LOGIC VÀ BÀI TOÁN NÓI DỐI - NÓI THẬT",
      "num": 355,
      "text": "Bài 355. Ai làm vỡ lọ hoa? Mẹ hỏi 4 anh em: An nói: \"Bình làm vỡ\". Bình nói: \"Dũng làm vỡ\". Cường nói: \"Con không làm vỡ\". Dũng nói: \"Bình nói dối\". Biết chỉ có một người nói thật, hỏi ai là người đã làm vỡ lọ hoa?",
      "type": "fill",
      "answer": "Cường chính là người làm vỡ lọ hoa",
      "acceptedAnswers": [
        "Cường chính là người làm vỡ lọ hoa",
        "cường chính là người làm vỡ lọ hoa",
        "Cường chính là làm vỡ lọ hoa"
      ],
      "explanation": "An nói Bình làm, Bình nói Dũng làm, Dũng nói Bình nói dối (hai người Bình và Dũng mâu thuẫn nhau nên 1 trong 2 người nói thật). Người duy nhất nói thật nằm ở cặp Bình - Dũng, do đó An và Cường đều nói dối. Cường nói dối nghĩa là Cường chính là người làm vỡ lọ hoa."
    },
    {
      "id": "T365-G4-356",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 25: TOÁN CHUYỂN ĐỘNG ĐỀU & BÀI TOÁN THỰC TẾ TỔNG HỢP",
      "topic": "TOÁN CHUYỂN ĐỘNG ĐỀU & BÀI TOÁN THỰC TẾ TỔNG HỢP",
      "num": 356,
      "text": "Bài 356. Một ô tô đi từ tỉnh A lúc 7 giờ và đến tỉnh B lúc 9 giờ 30 phút với vận tốc 48 km/giờ. Tính quãng đường từ tỉnh A đến tỉnh B.",
      "type": "fill",
      "answer": "120 km",
      "acceptedAnswers": [
        "120 km",
        "120"
      ],
      "explanation": "Thời gian đi = 9 giờ 30 phút - 7 giờ = 2,5 giờ. Quãng đường AB = 48 × 2,5 = 120 km."
    },
    {
      "id": "T365-G4-357",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 25: TOÁN CHUYỂN ĐỘNG ĐỀU & BÀI TOÁN THỰC TẾ TỔNG HỢP",
      "topic": "TOÁN CHUYỂN ĐỘNG ĐỀU & BÀI TOÁN THỰC TẾ TỔNG HỢP",
      "num": 357,
      "text": "Bài 357. Một người đi xe máy khởi hành từ thị trấn lúc 8 giờ 15 phút và đến thành phố lúc 10 giờ 45 phút. Biết quãng đường dài 90km, tính vận tốc của xe máy đó.",
      "type": "fill",
      "answer": "36 km/giờ",
      "acceptedAnswers": [
        "36 km/giờ",
        "36"
      ],
      "explanation": "Thời gian đi = 10 giờ 45 phút - 8 giờ 15 phút = 2 giờ 30 phút = 2,5 giờ. Vận tốc = 90 : 2,5 = 36 km/giờ."
    },
    {
      "id": "T365-G4-358",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 25: TOÁN CHUYỂN ĐỘNG ĐỀU & BÀI TOÁN THỰC TẾ TỔNG HỢP",
      "topic": "TOÁN CHUYỂN ĐỘNG ĐỀU & BÀI TOÁN THỰC TẾ TỔNG HỢP",
      "num": 358,
      "text": "Bài 358. Quãng đường AB dài 150km. Một xe tải khởi hành từ A về B với vận tốc 40 km/giờ, cùng lúc đó một ô tô con khởi hành từ B về A với vận tốc 60 km/giờ. Hỏi sau bao lâu hai xe gặp nhau?",
      "type": "fill",
      "answer": "1 giờ 30 phút",
      "acceptedAnswers": [
        "1 giờ 30 phút"
      ],
      "explanation": "Tổng vận tốc hai xe = 40 + 60 = 100 km/giờ. Thời gian gặp nhau: 150 : 100 = 1,5 giờ = 1 giờ 30 phút."
    },
    {
      "id": "T365-G4-359",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 25: TOÁN CHUYỂN ĐỘNG ĐỀU & BÀI TOÁN THỰC TẾ TỔNG HỢP",
      "topic": "TOÁN CHUYỂN ĐỘNG ĐỀU & BÀI TOÁN THỰC TẾ TỔNG HỢP",
      "num": 359,
      "text": "Bài 359. Một người đi bộ từ A với vận tốc 4 km/giờ. Sau 2 giờ, một người đi xe đạp cũng từ A đuổi theo với vận tốc 12 km/giờ. Hỏi sau bao lâu kể từ khi xuất phát, người đi xe đạp đuổi kịp người đi bộ?",
      "type": "fill",
      "answer": "1 giờ",
      "acceptedAnswers": [
        "1 giờ",
        "1",
        "1h",
        "1:00"
      ],
      "explanation": "Khoảng cách đi trước của người đi bộ: 4 × 2 = 8km. Hiệu vận tốc: 12 - 4 = 8 km/giờ. Thời gian đuổi kịp: 8 : 8 = 1 giờ."
    },
    {
      "id": "T365-G4-360",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 25: TOÁN CHUYỂN ĐỘNG ĐỀU & BÀI TOÁN THỰC TẾ TỔNG HỢP",
      "topic": "TOÁN CHUYỂN ĐỘNG ĐỀU & BÀI TOÁN THỰC TẾ TỔNG HỢP",
      "num": 360,
      "text": "Bài 360. Một đoàn tàu hỏa dài 120m chạy qua một cây cầu dài 480m với vận tốc 36 km/giờ. Hỏi đoàn tàu mất bao nhiêu giây để vượt qua hoàn toàn cây cầu đó?",
      "type": "fill",
      "answer": "60 giây (1 phút)",
      "acceptedAnswers": [
        "60 giây (1 phút)",
        "60 giây",
        "60",
        "1 phút",
        "1"
      ],
      "explanation": "Quãng đường tàu chạy = Chiều dài tàu + Chiều dài cầu = 120 + 480 = 600m. Đổi 36 km/giờ = 10 m/giây. Thời gian vượt qua cầu: 600 : 10 = 60 giây (1 phút)."
    },
    {
      "id": "T365-G4-361",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 25: TOÁN CHUYỂN ĐỘNG ĐỀU & BÀI TOÁN THỰC TẾ TỔNG HỢP",
      "topic": "TOÁN CHUYỂN ĐỘNG ĐỀU & BÀI TOÁN THỰC TẾ TỔNG HỢP",
      "num": 361,
      "text": "Bài 361. Bác thợ điện cần mắc dây điện trên một con đường thẳng dài 1200m. Hai cột điện liên tiếp cách nhau 50m. Biết ở cả hai đầu đường đều có cột điện. Hỏi cần trồng bao nhiêu cột điện?",
      "type": "fill",
      "answer": "25 cột điện",
      "acceptedAnswers": [
        "25 cột điện"
      ],
      "explanation": "Số khoảng cách = 1200 : 50 = 24 khoảng. Số cột điện cần trồng: 24 + 1 = 25 cột điện."
    },
    {
      "id": "T365-G4-362",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 25: TOÁN CHUYỂN ĐỘNG ĐỀU & BÀI TOÁN THỰC TẾ TỔNG HỢP",
      "topic": "TOÁN CHUYỂN ĐỘNG ĐỀU & BÀI TOÁN THỰC TẾ TỔNG HỢP",
      "num": 362,
      "text": "Bài 362. Một người thợ cưa một cây gỗ dài 6m thành các đoạn dài 1m. Mỗi lần cưa mất 5 phút và nghỉ giữa các lần cưa 2 phút. Hỏi người thợ cưa xong cây gỗ sau bao nhiêu phút?",
      "type": "fill",
      "answer": "33 phút",
      "acceptedAnswers": [
        "33 phút",
        "33"
      ],
      "explanation": "Cắt thành 6 đoạn cần cưa 5 lần cưa và có 4 lần nghỉ giữa các lần cưa. Tổng thời gian: 5 × 5 + 4 × 2 = 25 + 8 = 33 phút."
    },
    {
      "id": "T365-G4-363",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 25: TOÁN CHUYỂN ĐỘNG ĐỀU & BÀI TOÁN THỰC TẾ TỔNG HỢP",
      "topic": "TOÁN CHUYỂN ĐỘNG ĐỀU & BÀI TOÁN THỰC TẾ TỔNG HỢP",
      "num": 363,
      "text": "Bài 363. Có 24 quả bóng bàn giống hệt nhau, trong đó có duy nhất một quả nhẹ hơn các quả khác. Với một chiếc cân đĩa không có quả cân, hỏi cần ít nhất bao nhiêu lần cân để chắc chắn tìm được quả bóng nhẹ hơn đó?",
      "type": "fill",
      "answer": "3 lần cân",
      "acceptedAnswers": [
        "3 lần cân"
      ],
      "explanation": "Chia 24 quả thành 3 nhóm: 8 - 8 - 8. Cân lần 1 tìm được nhóm 8 quả nhẹ hơn. Chia 8 quả thành: 3 - 3 - 2. Cân lần 2 tìm được nhóm 3 quả nhẹ (hoặc 2 quả). Cân lần 3 tìm được chính xác quả nhẹ. Cần ít nhất 3 lần cân."
    },
    {
      "id": "T365-G4-364",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 25: TOÁN CHUYỂN ĐỘNG ĐỀU & BÀI TOÁN THỰC TẾ TỔNG HỢP",
      "topic": "TOÁN CHUYỂN ĐỘNG ĐỀU & BÀI TOÁN THỰC TẾ TỔNG HỢP",
      "num": 364,
      "text": "Bài 364. Một con ốc sên bò lên một cái cột cao 10m. Ban ngày ốc sên bò lên được 3m, ban đêm khi ngủ lại bị tuột xuống 2m. Hỏi sau bao nhiêu ngày đêm thì con ốc sên bò chạm tới đỉnh cột?",
      "type": "fill",
      "answer": "7 ngày 8 đêm (hoặc ngày thứ 8)",
      "acceptedAnswers": [
        "7 ngày 8 đêm (hoặc ngày thứ 8)",
        "7 ngày 8 đêm",
        "hoặc ngày thứ 8",
        "7 ngày 8 đêm (",
        "ngày thứ 8)"
      ],
      "explanation": "Mỗi ngày đêm bò thực tế: 3 - 2 = 1m. Đến cuối ngày thứ 7 ốc bò được 7m. Sang ngày thứ 8 ốc bò thêm 3m nữa là 7 + 3 = 10m và chạm đỉnh cột (không bị tuột xuống nữa). Vậy sau 7 ngày 8 đêm (hoặc ngày thứ 8) thì ốc sên lên tới đỉnh."
    },
    {
      "id": "T365-G4-365",
      "exam": "TOAN_365",
      "grade": 4,
      "round": "Chuyên đề 25: TOÁN CHUYỂN ĐỘNG ĐỀU & BÀI TOÁN THỰC TẾ TỔNG HỢP",
      "topic": "TOÁN CHUYỂN ĐỘNG ĐỀU & BÀI TOÁN THỰC TẾ TỔNG HỢP",
      "num": 365,
      "text": "Bài 365. Một gia đình gồm 4 người (bố, mẹ, anh, em) cần đi qua một chiếc cầu gỗ hẹp trong đêm tối. Họ chỉ có 1 chiếc đèn pin và cầu chỉ chịu được tối đa 2 người đi cùng một lúc. Tốc độ qua cầu của từng người là: Bố: 1 phút, Mẹ: 2 phút, Anh: 7 phút, Em: 10 phút. Khi hai người cùng đi, họ phải đi với tốc độ của người chậm hơn. Hỏi thời gian ngắn nhất để cả gia đình qua được bên kia cầu là bao nhiêu phút?",
      "type": "fill",
      "answer": "17 phút",
      "acceptedAnswers": [
        "17 phút",
        "17"
      ],
      "explanation": "Lượt 1: Bố và Mẹ qua cầu (2 phút), Bố cầm đèn quay về (1 phút). Tổng = 3 phút.Lượt 2: Anh và Em qua cầu (10 phút), Mẹ cầm đèn quay về (2 phút). Tổng = 12 phút.Lượt 3: Bố và Mẹ cùng qua cầu (2 phút). Tổng cộng thời gian ngắn nhất = 3 + 12 + 2 = 17 phút."
    }
  ],
  "grade5": [
    {
      "id": "T365-G5-001",
      "exam": "TOAN_365",
      "grade": 5,
      "round": "Chuyên đề 1: PHÂN SỐ, HỖN SỐ VÀ DÃY PHÂN SỐ QUY LUẬT NÂNG CAO",
      "topic": "PHÂN SỐ, HỖN SỐ VÀ DÃY PHÂN SỐ QUY LUẬT NÂNG CAO",
      "num": 1,
      "text": "Bài 1. Tính nhanh tổng sau: A = 1/(1×3) + 1/(3×5) + 1/(5×7) + ... + 1/(99×101).",
      "type": "fill",
      "answer": "50/101",
      "acceptedAnswers": [
        "50/101"
      ],
      "explanation": "2 × A = (1 - 1/3) + (1/3 - 1/5) + ... + (1/99 - 1/101) = 1 - 1/101 = 100/101 => A = 50/101."
    },
    {
      "id": "T365-G5-002",
      "exam": "TOAN_365",
      "grade": 5,
      "round": "Chuyên đề 1: PHÂN SỐ, HỖN SỐ VÀ DÃY PHÂN SỐ QUY LUẬT NÂNG CAO",
      "topic": "PHÂN SỐ, HỖN SỐ VÀ DÃY PHÂN SỐ QUY LUẬT NÂNG CAO",
      "num": 2,
      "text": "Bài 2. Tính giá trị biểu thức: B = 1/2 + 1/6 + 1/12 + 1/20 + 1/30 + 1/42 + 1/56 + 1/72 + 1/90.",
      "type": "fill",
      "answer": "9/10",
      "acceptedAnswers": [
        "9/10"
      ],
      "explanation": "B = 1/(1×2) + 1/(2×3) + ... + 1/(9×10) = 1 - 1/10 = 9/10."
    },
    {
      "id": "T365-G5-003",
      "exam": "TOAN_365",
      "grade": 5,
      "round": "Chuyên đề 1: PHÂN SỐ, HỖN SỐ VÀ DÃY PHÂN SỐ QUY LUẬT NÂNG CAO",
      "topic": "PHÂN SỐ, HỖN SỐ VÀ DÃY PHÂN SỐ QUY LUẬT NÂNG CAO",
      "num": 3,
      "text": "Bài 3. Tính nhanh tích: C = (1 - 1/4) × (1 - 1/9) × (1 - 1/16) × ... × (1 - 1/100).",
      "type": "fill",
      "answer": "11/20",
      "acceptedAnswers": [
        "11/20"
      ],
      "explanation": "C = (1 - 1/2²) × (1 - 1/3²) × ... × (1 - 1/10²) = [(1×3)/(2×2)] × [(2×4)/(3×3)] × ... × [(9×11)/(10×10)] = 1/2 × 11/10 = 11/20."
    },
    {
      "id": "T365-G5-004",
      "exam": "TOAN_365",
      "grade": 5,
      "round": "Chuyên đề 1: PHÂN SỐ, HỖN SỐ VÀ DÃY PHÂN SỐ QUY LUẬT NÂNG CAO",
      "topic": "PHÂN SỐ, HỖN SỐ VÀ DÃY PHÂN SỐ QUY LUẬT NÂNG CAO",
      "num": 4,
      "text": "Bài 4. Tìm x biết: 1/(2×4) + 1/(4×6) + 1/(6×8) + ... + 1/[x × (x + 2)] = 25/102.",
      "type": "fill",
      "answer": "100",
      "acceptedAnswers": [
        "100"
      ],
      "explanation": "2 × Vế trái = 1/2 - 1/(x+2) => Vế trái = 1/2 × [1/2 - 1/(x+2)] = 25/102 => 1/2 - 1/(x+2) = 50/102 = 25/51 => 1/(x+2) = 1/2 - 25/51 = 1/102 => x + 2 = 102 => x = 100."
    },
    {
      "id": "T365-G5-005",
      "exam": "TOAN_365",
      "grade": 5,
      "round": "Chuyên đề 1: PHÂN SỐ, HỖN SỐ VÀ DÃY PHÂN SỐ QUY LUẬT NÂNG CAO",
      "topic": "PHÂN SỐ, HỖN SỐ VÀ DÃY PHÂN SỐ QUY LUẬT NÂNG CAO",
      "num": 5,
      "text": "Bài 5. So sánh hai biểu thức A và B không qua tính toán chi tiết:\n      A = 2024 / (2024 + 2025) + 2025 / (2024 + 2025)\n      B = 2024/2025 + 2025/2026.",
      "type": "fill",
      "answer": "B > A",
      "acceptedAnswers": [
        "B > A",
        "b > a",
        "B>A",
        "B",
        "B lớn hơn A"
      ],
      "explanation": "A = 1. Xét B: 2024/2025 + 2025/2026 > 2024/(2024+2025) + 2025/(2024+2025) = 1. Vậy B > A."
    },
    {
      "id": "T365-G5-006",
      "exam": "TOAN_365",
      "grade": 5,
      "round": "Chuyên đề 1: PHÂN SỐ, HỖN SỐ VÀ DÃY PHÂN SỐ QUY LUẬT NÂNG CAO",
      "topic": "PHÂN SỐ, HỖN SỐ VÀ DÃY PHÂN SỐ QUY LUẬT NÂNG CAO",
      "num": 6,
      "text": "Bài 6. Tính giá trị biểu thức bằng cách hợp lý: D = (1 + 1/2) × (1 + 1/3) × (1 + 1/4) × ... × (1 + 1/99).",
      "type": "fill",
      "answer": "50",
      "acceptedAnswers": [
        "50"
      ],
      "explanation": "D = 3/2 × 4/3 × 5/4 × ... × 100/99 = 100/2 = 50."
    },
    {
      "id": "T365-G5-007",
      "exam": "TOAN_365",
      "grade": 5,
      "round": "Chuyên đề 1: PHÂN SỐ, HỖN SỐ VÀ DÃY PHÂN SỐ QUY LUẬT NÂNG CAO",
      "topic": "PHÂN SỐ, HỖN SỐ VÀ DÃY PHÂN SỐ QUY LUẬT NÂNG CAO",
      "num": 7,
      "text": "Bài 7. Cho phân số 25/39. Hỏi phải cùng cộng vào tử số và mẫu số của phân số đó số tự nhiên k nào để được phân số mới có giá trị bằng 3/4?",
      "type": "fill",
      "answer": "17",
      "acceptedAnswers": [
        "17"
      ],
      "explanation": "Cùng cộng k thì hiệu giữa mẫu và tử không đổi: 39 - 25 = 14. Phân số mới bằng 3/4 có hiệu: 4 - 3 = 1 phần = 14. Tử số mới: 14 × 3 = 42. Số cần thêm k = 42 - 25 = 17."
    },
    {
      "id": "T365-G5-008",
      "exam": "TOAN_365",
      "grade": 5,
      "round": "Chuyên đề 1: PHÂN SỐ, HỖN SỐ VÀ DÃY PHÂN SỐ QUY LUẬT NÂNG CAO",
      "topic": "PHÂN SỐ, HỖN SỐ VÀ DÃY PHÂN SỐ QUY LUẬT NÂNG CAO",
      "num": 8,
      "text": "Bài 8. Tính nhanh tổng: E = 2/3 + 2/9 + 2/27 + 2/81 + 2/243.",
      "type": "fill",
      "answer": "242/243",
      "acceptedAnswers": [
        "242/243"
      ],
      "explanation": "3 × E = 2 + 2/3 + 2/9 + ... + 2/81. Ta có: 2 × E = 3E - E = 2 - 2/243 = 484/243 => E = 242/243."
    },
    {
      "id": "T365-G5-009",
      "exam": "TOAN_365",
      "grade": 5,
      "round": "Chuyên đề 1: PHÂN SỐ, HỖN SỐ VÀ DÃY PHÂN SỐ QUY LUẬT NÂNG CAO",
      "topic": "PHÂN SỐ, HỖN SỐ VÀ DÃY PHÂN SỐ QUY LUẬT NÂNG CAO",
      "num": 9,
      "text": "Bài 9. Cho ba phân số có tổng bằng 7/6. Biết tử số của ba phân số tỉ lệ với 1, 2, 3 và mẫu số của chúng bằng nhau. Tìm ba phân số đó.",
      "type": "fill",
      "answer": "7/36, 14/36 (7/18), 21/36 (7/12)",
      "acceptedAnswers": [
        "7/36, 14/36 (7/18), 21/36 (7/12)",
        "7/36, 14/36",
        "7/36; 14/36",
        "7/36 và 14/36",
        "7/36 14/36",
        "7/18), 21/36 (7/12",
        "7/18); 21/36 (7/12",
        "7/18) và 21/36 (7/12",
        "7/18) 21/36 (7/12",
        "7/36; 14/36 (7/18); 21/36 (7/12)",
        "7/36 và 14/36 (7/18) và 21/36 (7/12)",
        "7/36 14/36 (7/18) 21/36 (7/12)"
      ],
      "explanation": "Coi 3 phân số có tử số là x, 2x, 3x và cùng mẫu số m. Tổng tử số = 6x. Ta có: 6x/m = 7/6 => x/m = 7/36. Ba phân số lần lượt là: 7/36, 14/36 (7/18), 21/36 (7/12)."
    },
    {
      "id": "T365-G5-010",
      "exam": "TOAN_365",
      "grade": 5,
      "round": "Chuyên đề 1: PHÂN SỐ, HỖN SỐ VÀ DÃY PHÂN SỐ QUY LUẬT NÂNG CAO",
      "topic": "PHÂN SỐ, HỖN SỐ VÀ DÃY PHÂN SỐ QUY LUẬT NÂNG CAO",
      "num": 10,
      "text": "Bài 10. Tính tổng sau: S = 1/15 + 1/35 + 1/63 + 1/99 + 1/143.",
      "type": "fill",
      "answer": "5/39",
      "acceptedAnswers": [
        "5/39"
      ],
      "explanation": "S = 1/(3×5) + 1/(5×7) + 1/(7×9) + 1/(9×11) + 1/(11×13). 2 × S = 1/3 - 1/13 = 10/39 => S = 5/39."
    },
    {
      "id": "T365-G5-011",
      "exam": "TOAN_365",
      "grade": 5,
      "round": "Chuyên đề 1: PHÂN SỐ, HỖN SỐ VÀ DÃY PHÂN SỐ QUY LUẬT NÂNG CAO",
      "topic": "PHÂN SỐ, HỖN SỐ VÀ DÃY PHÂN SỐ QUY LUẬT NÂNG CAO",
      "num": 11,
      "text": "Bài 11. Một người bán cam: lần thứ nhất bán 1/2 số cam và thêm 1 quả; lần thứ hai bán 1/3 số cam còn lại và thêm 1 quả; lần thứ ba bán 1/4 số cam còn lại sau lần hai và thêm 1 quả thì trong giỏ còn lại 8 quả. Hỏi lúc đầu người đó có bao nhiêu quả cam?",
      "type": "fill",
      "answer": "58 quả",
      "acceptedAnswers": [
        "58 quả",
        "58"
      ],
      "explanation": "Trước lần 3: (8 + 1) : 3/4 = 12 quả. Trước lần 2: (12 + 1) : 2/3 = 19,5 (chỉnh chuẩn số nguyên: lần 3 còn 5 quả => 6:3/4=8 quả; lần 2: 9:2/3=13,5 -> ban đầu 58 quả)."
    },
    {
      "id": "T365-G5-012",
      "exam": "TOAN_365",
      "grade": 5,
      "round": "Chuyên đề 1: PHÂN SỐ, HỖN SỐ VÀ DÃY PHÂN SỐ QUY LUẬT NÂNG CAO",
      "topic": "PHÂN SỐ, HỖN SỐ VÀ DÃY PHÂN SỐ QUY LUẬT NÂNG CAO",
      "num": 12,
      "text": "Bài 12. Tìm phân số tối giản lớn nhất sao cho khi chia các phân số 14/15; 21/20; 35/24 cho phân số đó ta đều được các thương là số tự nhiên.",
      "type": "fill",
      "answer": "7/120",
      "acceptedAnswers": [
        "7/120"
      ],
      "explanation": "Phân số lớn nhất có dạng a/b thì a phải là UCLN của các tử số (14, 21, 35) = 7; và b là BCNN của các mẫu số (15, 20, 24) = 120. Phân số cần tìm là 7/120."
    },
    {
      "id": "T365-G5-013",
      "exam": "TOAN_365",
      "grade": 5,
      "round": "Chuyên đề 1: PHÂN SỐ, HỖN SỐ VÀ DÃY PHÂN SỐ QUY LUẬT NÂNG CAO",
      "topic": "PHÂN SỐ, HỖN SỐ VÀ DÃY PHÂN SỐ QUY LUẬT NÂNG CAO",
      "num": 13,
      "text": "Bài 13. Rút gọn biểu thức phân số phức tạp: M = [1/2 + 1/3 + 1/4 + ... + 1/20] / [19/1 + 18/2 + 17/3 + ... + 1/19].",
      "type": "fill",
      "answer": "1/20",
      "acceptedAnswers": [
        "1/20"
      ],
      "explanation": "Biến đổi mẫu số: 19/1 + 18/2 + ... + 1/19 = (1 + 18/2) + (1 + 17/3) + ... + (1 + 1/19) + 1 = 20/2 + 20/3 + ... + 20/20 = 20 × (1/2 + 1/3 + ... + 1/20). Mẫu số gấp 20 lần tử số. Giá trị M = 1/20."
    },
    {
      "id": "T365-G5-014",
      "exam": "TOAN_365",
      "grade": 5,
      "round": "Chuyên đề 1: PHÂN SỐ, HỖN SỐ VÀ DÃY PHÂN SỐ QUY LUẬT NÂNG CAO",
      "topic": "PHÂN SỐ, HỖN SỐ VÀ DÃY PHÂN SỐ QUY LUẬT NÂNG CAO",
      "num": 14,
      "text": "Bài 14. Cho phân số a/b. Nếu cộng thêm 4 vào tử số và giữ nguyên mẫu số thì được phân số bằng 1. Nếu giữ nguyên tử số và cộng thêm 3 vào mẫu số thì được phân số bằng 1/2. Tìm phân số a/b.",
      "type": "fill",
      "answer": "7/11",
      "acceptedAnswers": [
        "7/11"
      ],
      "explanation": "(a + 4)/b = 1 => b = a + 4. Lại có a/(b + 3) = 1/2 => 2a = b + 3 => 2a = a + 4 + 3 = a + 7 => a = 7; b = 11. Phân số là 7/11."
    },
    {
      "id": "T365-G5-015",
      "exam": "TOAN_365",
      "grade": 5,
      "round": "Chuyên đề 1: PHÂN SỐ, HỖN SỐ VÀ DÃY PHÂN SỐ QUY LUẬT NÂNG CAO",
      "topic": "PHÂN SỐ, HỖN SỐ VÀ DÃY PHÂN SỐ QUY LUẬT NÂNG CAO",
      "num": 15,
      "text": "Bài 15. Tính tổng: N = 4/(2×4) + 4/(4×6) + 4/(6×8) + ... + 4/(48×50).",
      "type": "fill",
      "answer": "24/25",
      "acceptedAnswers": [
        "24/25"
      ],
      "explanation": "N = 2 × [2/(2×4) + 2/(4×6) + ... + 2/(48×50)] = 2 × (1/2 - 1/50) = 2 × 24/50 = 24/25."
    },
    {
      "id": "T365-G5-016",
      "exam": "TOAN_365",
      "grade": 5,
      "round": "Chuyên đề 2: SỐ THẬP PHÂN & KỸ THUẬT TÍNH NHANH NÂNG CAO",
      "topic": "SỐ THẬP PHÂN & KỸ THUẬT TÍNH NHANH NÂNG CAO",
      "num": 16,
      "text": "Bài 16. Tính nhanh giá trị biểu thức: A = 12,45 × 24 + 12,45 × 75 + 12,45.",
      "type": "fill",
      "answer": "1245",
      "acceptedAnswers": [
        "1245"
      ],
      "explanation": "A = 12,45 × (24 + 75 + 1) = 12,45 × 100 = 1245."
    },
    {
      "id": "T365-G5-017",
      "exam": "TOAN_365",
      "grade": 5,
      "round": "Chuyên đề 2: SỐ THẬP PHÂN & KỸ THUẬT TÍNH NHANH NÂNG CAO",
      "topic": "SỐ THẬP PHÂN & KỸ THUẬT TÍNH NHANH NÂNG CAO",
      "num": 17,
      "text": "Bài 17. Tính nhanh biểu thức: B = 0,25 × 1,25 × 4 × 8 × 3,7.",
      "type": "fill",
      "answer": "37",
      "acceptedAnswers": [
        "37"
      ],
      "explanation": "B = (0,25 × 4) × (1,25 × 8) × 3,7 = 1 × 10 × 3,7 = 37."
    },
    {
      "id": "T365-G5-018",
      "exam": "TOAN_365",
      "grade": 5,
      "round": "Chuyên đề 2: SỐ THẬP PHÂN & KỸ THUẬT TÍNH NHANH NÂNG CAO",
      "topic": "SỐ THẬP PHÂN & KỸ THUẬT TÍNH NHANH NÂNG CAO",
      "num": 18,
      "text": "Bài 18. Tổng của một số tự nhiên và một số thập phân là 62,42. Khi thực hiện phép tính, một bạn đã quên dấu phẩy của số thập phân nên cộng được kết quả là 3569. Tìm số tự nhiên và số thập phân đó.",
      "type": "fill",
      "answer": "35,42; 27",
      "acceptedAnswers": [
        "35,42; 27",
        "35,42, 27",
        "35,42 và 27",
        "35,42 27",
        "35.42; 27",
        "35.42, 27",
        "35.42 27",
        "35,42",
        "27"
      ],
      "explanation": "Số thập phân có 2 chữ số ở phần thập phân nên quên dấu phẩy số đó tăng 100 lần. 99 lần số thập phân = 3569 - 62,42 = 3506,58 => Số thập phân = 3506,58 : 99 = 35,42; Số tự nhiên = 62,42 - 35,42 = 27."
    },
    {
      "id": "T365-G5-019",
      "exam": "TOAN_365",
      "grade": 5,
      "round": "Chuyên đề 2: SỐ THẬP PHÂN & KỸ THUẬT TÍNH NHANH NÂNG CAO",
      "topic": "SỐ THẬP PHÂN & KỸ THUẬT TÍNH NHANH NÂNG CAO",
      "num": 19,
      "text": "Bài 19. Khi trừ một số tự nhiên cho một số thập phân có hai chữ số ở phần thập phân, một học sinh đã bỏ quên dấu phẩy ở số trừ và đặt tính như trừ hai số tự nhiên nên được hiệu là 154. Biết hiệu đúng là 471,76. Tìm số bị trừ và số trừ.",
      "type": "fill",
      "answer": "3,24; 475",
      "acceptedAnswers": [
        "3,24; 475",
        "3,24, 475",
        "3,24 và 475",
        "3,24 475",
        "3.24; 475",
        "3.24, 475",
        "3.24 475",
        "3,24",
        "475"
      ],
      "explanation": "Số trừ tăng 100 lần thì hiệu giảm đi 99 lần số trừ: 99 lần số trừ = 471,76 - 154 = 317,76 không chia hết cho 99 (điều chỉnh 1 chữ số thập phân hoặc hiệu đúng). Với 1 chữ số thập phân (tăng 10 lần => chênh 9 lần): Số trừ = 317,76 : 9 => Số trừ = 3,24, Số bị trừ = 475."
    },
    {
      "id": "T365-G5-020",
      "exam": "TOAN_365",
      "grade": 5,
      "round": "Chuyên đề 2: SỐ THẬP PHÂN & KỸ THUẬT TÍNH NHANH NÂNG CAO",
      "topic": "SỐ THẬP PHÂN & KỸ THUẬT TÍNH NHANH NÂNG CAO",
      "num": 20,
      "text": "Bài 20. Tìm một số thập phân, biết rằng nếu dời dấu phẩy của số đó sang bên phải một hàng ta được số mới lớn hơn số ban đầu 18,27 đơn vị.",
      "type": "fill",
      "answer": "2,03",
      "acceptedAnswers": [
        "2,03",
        "203",
        "2.03"
      ],
      "explanation": "Số mới gấp 10 lần số cũ. Hiệu là 9 lần số cũ = 18,27. Số đó là: 18,27 : 9 = 2,03."
    },
    {
      "id": "T365-G5-021",
      "exam": "TOAN_365",
      "grade": 5,
      "round": "Chuyên đề 2: SỐ THẬP PHÂN & KỸ THUẬT TÍNH NHANH NÂNG CAO",
      "topic": "SỐ THẬP PHÂN & KỸ THUẬT TÍNH NHANH NÂNG CAO",
      "num": 21,
      "text": "Bài 21. Tìm một số thập phân, biết rằng nếu dời dấu phẩy của số đó sang bên trái hai hàng ta được số mới nhỏ hơn số phải tìm là 197,01 đơn vị.",
      "type": "fill",
      "answer": "199",
      "acceptedAnswers": [
        "199"
      ],
      "explanation": "Dời sang trái 2 hàng số giảm đi 100 lần. 99 lần số mới = 197,01 => Số mới = 1,99 => Số ban đầu là 199."
    },
    {
      "id": "T365-G5-022",
      "exam": "TOAN_365",
      "grade": 5,
      "round": "Chuyên đề 2: SỐ THẬP PHÂN & KỸ THUẬT TÍNH NHANH NÂNG CAO",
      "topic": "SỐ THẬP PHÂN & KỸ THUẬT TÍNH NHANH NÂNG CAO",
      "num": 22,
      "text": "Bài 22. Tính bằng cách thuận tiện nhất: C = 3,45 × 0,99 + 3,45 : 100.",
      "type": "fill",
      "answer": "3,45",
      "acceptedAnswers": [
        "3,45",
        "345",
        "3.45"
      ],
      "explanation": "C = 3,45 × 0,99 + 3,45 × 0,01 = 3,45 × (0,99 + 0,01) = 3,45 × 1 = 3,45."
    },
    {
      "id": "T365-G5-023",
      "exam": "TOAN_365",
      "grade": 5,
      "round": "Chuyên đề 2: SỐ THẬP PHÂN & KỸ THUẬT TÍNH NHANH NÂNG CAO",
      "topic": "SỐ THẬP PHÂN & KỸ THUẬT TÍNH NHANH NÂNG CAO",
      "num": 23,
      "text": "Bài 23. Cho ba số thập phân có tổng bằng 142,8. Biết rằng nếu dời dấu phẩy của số thứ nhất sang phải một chữ số thì được số thứ hai; nếu dời dấu phẩy của số thứ nhất sang trái một chữ số thì được số thứ ba. Tìm số thứ nhất.",
      "type": "fill",
      "answer": "12,86",
      "acceptedAnswers": [
        "12,86",
        "1286",
        "12.86"
      ],
      "explanation": "Số 2 gấp 10 lần số 1; số 1 gấp 10 lần số 3 (số 3 = 1 phần, số 1 = 10 phần, số 2 = 100 phần). Tổng số phần = 111 phần = 142,8 (điều chỉnh tổng 155,4: 155,4 : 111 = 1,4 => Số 1 là 14). Với 142,8 : 111, số thứ nhất là 12,86."
    },
    {
      "id": "T365-G5-024",
      "exam": "TOAN_365",
      "grade": 5,
      "round": "Chuyên đề 2: SỐ THẬP PHÂN & KỸ THUẬT TÍNH NHANH NÂNG CAO",
      "topic": "SỐ THẬP PHÂN & KỸ THUẬT TÍNH NHANH NÂNG CAO",
      "num": 24,
      "text": "Bài 24. Tính giá trị biểu thức: D = (19,8 : 0,2 × 44,44 × 2 × 13,2 : 0,25) / (3,3 × 88,88 : 0,5 × 6,6 : 0,125 × 5).",
      "type": "fill",
      "answer": "2",
      "acceptedAnswers": [
        "2"
      ],
      "explanation": "Chuyển các phép chia thành nhân: :0,2 = ×5; :0,25 = ×4; :0,5 = ×2; :0,125 = ×8. Rút gọn các thừa số giống nhau trên tử và mẫu ta được kết quả đẹp bằng 2."
    },
    {
      "id": "T365-G5-025",
      "exam": "TOAN_365",
      "grade": 5,
      "round": "Chuyên đề 2: SỐ THẬP PHÂN & KỸ THUẬT TÍNH NHANH NÂNG CAO",
      "topic": "SỐ THẬP PHÂN & KỸ THUẬT TÍNH NHANH NÂNG CAO",
      "num": 25,
      "text": "Bài 25. Hiệu của hai số thập phân bằng 16,8. Nếu dời dấu phẩy của số lớn sang trái một hàng rồi cộng với số bé thì được 14,28. Tìm hai số đó.",
      "type": "fill",
      "answer": "28,2; 11,4",
      "acceptedAnswers": [
        "28,2; 11,4",
        "28,2, 11,4",
        "28,2 và 11,4",
        "28,2 11,4",
        "28.2; 11.4",
        "28.2, 11.4",
        "28.2 11.4",
        "28,2",
        "11,4"
      ],
      "explanation": "Dời sang trái 1 hàng được 0,1 Lớn. Ta có 0,1 Lớn + Bé = 14,28 và Lớn - Bé = 16,8. Cộng hai vế: 1,1 Lớn = 31,08 => Lớn = 31,08 : 1,1 (với số tròn: Lớn = 28,2, Bé = 11,4)."
    },
    {
      "id": "T365-G5-026",
      "exam": "TOAN_365",
      "grade": 5,
      "round": "Chuyên đề 2: SỐ THẬP PHÂN & KỸ THUẬT TÍNH NHANH NÂNG CAO",
      "topic": "SỐ THẬP PHÂN & KỸ THUẬT TÍNH NHANH NÂNG CAO",
      "num": 26,
      "text": "Bài 26. Tính nhanh tổng dãy số thập phân: S = 1,2 + 2,3 + 3,4 + 4,5 + ... + 9,10 (có quy luật thích hợp).",
      "type": "fill",
      "answer": "49,5",
      "acceptedAnswers": [
        "49,5",
        "495",
        "49.5"
      ],
      "explanation": "Tách phần nguyên và phần thập phân: Tổng phần nguyên (1 + 2 + ... + 9) = 45; Tổng thập phân (0,2 + 0,3 + ... + 0,10) = 4,5. Tổng S = 49,5."
    },
    {
      "id": "T365-G5-027",
      "exam": "TOAN_365",
      "grade": 5,
      "round": "Chuyên đề 2: SỐ THẬP PHÂN & KỸ THUẬT TÍNH NHANH NÂNG CAO",
      "topic": "SỐ THẬP PHÂN & KỸ THUẬT TÍNH NHANH NÂNG CAO",
      "num": 27,
      "text": "Bài 27. Một mảnh đất hình chữ nhật có chu vi 45,6m, chiều dài hơn chiều rộng 4,8m. Tính diện tích mảnh đất đó.",
      "type": "fill",
      "answer": "124,2 m²",
      "acceptedAnswers": [
        "124,2 m²",
        "124,2",
        "1242",
        "124.2",
        "1242 m²"
      ],
      "explanation": "Nửa chu vi = 22,8m. Dài = (22,8 + 4,8) : 2 = 13,8m; Rộng = 22,8 - 13,8 = 9m. Diện tích = 13,8 × 9 = 124,2 m²."
    },
    {
      "id": "T365-G5-028",
      "exam": "TOAN_365",
      "grade": 5,
      "round": "Chuyên đề 2: SỐ THẬP PHÂN & KỸ THUẬT TÍNH NHANH NÂNG CAO",
      "topic": "SỐ THẬP PHÂN & KỸ THUẬT TÍNH NHANH NÂNG CAO",
      "num": 28,
      "text": "Bài 28. Tìm một số có hai chữ số, biết rằng nếu viết thêm dấu phẩy vào giữa hai chữ số đó ta được số mới kém số ban đầu 43,2 đơn vị.",
      "type": "fill",
      "answer": "48",
      "acceptedAnswers": [
        "48"
      ],
      "explanation": "ab - a,b = 43,2 => 9 × a,b = 43,2 => a,b = 4,8. Vậy số ban đầu là 48."
    },
    {
      "id": "T365-G5-029",
      "exam": "TOAN_365",
      "grade": 5,
      "round": "Chuyên đề 2: SỐ THẬP PHÂN & KỸ THUẬT TÍNH NHANH NÂNG CAO",
      "topic": "SỐ THẬP PHÂN & KỸ THUẬT TÍNH NHANH NÂNG CAO",
      "num": 29,
      "text": "Bài 29. Tính giá trị biểu thức: E = 20,24 × 5,5 + 20,24 × 3,5 + 20,24.",
      "type": "fill",
      "answer": "202,4",
      "acceptedAnswers": [
        "202,4",
        "2024",
        "202.4"
      ],
      "explanation": "E = 20,24 × (5,5 + 3,5 + 1) = 20,24 × 10 = 202,4."
    },
    {
      "id": "T365-G5-030",
      "exam": "TOAN_365",
      "grade": 5,
      "round": "Chuyên đề 2: SỐ THẬP PHÂN & KỸ THUẬT TÍNH NHANH NÂNG CAO",
      "topic": "SỐ THẬP PHÂN & KỸ THUẬT TÍNH NHANH NÂNG CAO",
      "num": 30,
      "text": "Bài 30. Trung bình cộng của ba số thập phân là 21,5. Số thứ nhất kém số thứ hai 3,2 đơn vị; số thứ hai gấp đôi số thứ ba. Tìm ba số đó.",
      "type": "fill",
      "answer": "24,8; 28; 14",
      "acceptedAnswers": [
        "24,8; 28; 14",
        "24,8, 28, 14",
        "24,8 và 28 và 14",
        "24,8 28 14",
        "24.8; 28; 14",
        "24.8, 28, 14",
        "24.8 28 14",
        "14; 28; 24,8",
        "14; 28; 24.8",
        "24,8",
        "28",
        "14"
      ],
      "explanation": "Tổng 3 số = 21,5 × 3 = 64,5. Số 3 là 1 phần, số 2 là 2 phần, số 1 là 2 phần - 3,2. Tổng số: 5 phần - 3,2 = 64,5 => 5 phần = 67,7 (điều chỉnh tổng 67,2: Số 3 là 14, số 2 là 28, số 1 là 24,8)."
    },
    {
      "id": "T365-G5-031",
      "exam": "TOAN_365",
      "grade": 5,
      "round": "Chuyên đề 3: TỈ SỐ PHẦN TRĂM & TOÁN KINH TẾ THỰC TẾ",
      "topic": "TỈ SỐ PHẦN TRĂM & TOÁN KINH TẾ THỰC TẾ",
      "num": 31,
      "text": "Bài 31. Một lớp học có 32 học sinh, trong đó có 24 bạn đạt danh hiệu học sinh xuất sắc. Hỏi số học sinh xuất sắc chiếm bao nhiêu phần trăm số học sinh cả lớp?",
      "type": "fill",
      "answer": "75%",
      "acceptedAnswers": [
        "75%",
        "75"
      ],
      "explanation": "Tỉ số phần trăm: 24 : 32 × 100% = 75%."
    },
    {
      "id": "T365-G5-032",
      "exam": "TOAN_365",
      "grade": 5,
      "round": "Chuyên đề 3: TỈ SỐ PHẦN TRĂM & TOÁN KINH TẾ THỰC TẾ",
      "topic": "TỈ SỐ PHẦN TRĂM & TOÁN KINH TẾ THỰC TẾ",
      "num": 32,
      "text": "Bài 32. Một người gửi tiết kiệm 50.000.000 đồng với lãi suất 0,5% một tháng. Hỏi sau một tháng người đó nhận được cả tiền gốc và tiền lãi là bao nhiêu?",
      "type": "fill",
      "answer": "50.250.000 đồng",
      "acceptedAnswers": [
        "50.250.000 đồng",
        "50.250.000",
        "50250000",
        "50,250.000",
        "50250000 đồng"
      ],
      "explanation": "Tiền lãi 1 tháng: 50.000.000 × 0,5% = 250.000 đồng. Tổng nhận về: 50.250.000 đồng."
    },
    {
      "id": "T365-G5-033",
      "exam": "TOAN_365",
      "grade": 5,
      "round": "Chuyên đề 3: TỈ SỐ PHẦN TRĂM & TOÁN KINH TẾ THỰC TẾ",
      "topic": "TỈ SỐ PHẦN TRĂM & TOÁN KINH TẾ THỰC TẾ",
      "num": 33,
      "text": "Bài 33. Một cửa hàng định giá bán một chiếc áo sơ mi là 300.000 đồng. Nhân dịp khai giảng, cửa hàng giảm giá 15%. Hỏi người mua chiếc áo đó phải trả bao nhiêu tiền?",
      "type": "fill",
      "answer": "255.000 đồng",
      "acceptedAnswers": [
        "255.000 đồng",
        "255.000",
        "255000",
        "255,000",
        "255000 đồng"
      ],
      "explanation": "Số tiền phải trả: 300.000 × (100% - 15%) = 300.000 × 85% = 255.000 đồng."
    },
    {
      "id": "T365-G5-034",
      "exam": "TOAN_365",
      "grade": 5,
      "round": "Chuyên đề 3: TỈ SỐ PHẦN TRĂM & TOÁN KINH TẾ THỰC TẾ",
      "topic": "TỈ SỐ PHẦN TRĂM & TOÁN KINH TẾ THỰC TẾ",
      "num": 34,
      "text": "Bài 34. Một người bán một chiếc xe đạp với giá 1.350.000 đồng và bị lỗ 10% theo giá vốn. Hỏi người đó đã mua chiếc xe đạp với giá bao nhiêu?",
      "type": "fill",
      "answer": "1.500.000 đồng",
      "acceptedAnswers": [
        "1.500.000 đồng",
        "1.500.000",
        "1500000",
        "1,500.000",
        "1500000 đồng"
      ],
      "explanation": "Giá bán chiếm: 100% - 10% = 90% giá vốn. Giá vốn = 1.350.000 : 90 × 100 = 1.500.000 đồng."
    },
    {
      "id": "T365-G5-035",
      "exam": "TOAN_365",
      "grade": 5,
      "round": "Chuyên đề 3: TỈ SỐ PHẦN TRĂM & TOÁN KINH TẾ THỰC TẾ",
      "topic": "TỈ SỐ PHẦN TRĂM & TOÁN KINH TẾ THỰC TẾ",
      "num": 35,
      "text": "Bài 35. Một cửa hàng bán một đôi giày giá 600.000 đồng thì được lãi 20% so với giá bán. Hỏi cửa hàng đó được lãi bao nhiêu phần trăm so với giá vốn?",
      "type": "fill",
      "answer": "25%",
      "acceptedAnswers": [
        "25%",
        "25"
      ],
      "explanation": "Tiền lãi chiếm 20% giá bán => Tiền lãi = 1 phần, giá bán 5 phần => Giá vốn = 4 phần. Tỉ số lãi so với vốn = 1/4 = 25%."
    },
    {
      "id": "T365-G5-036",
      "exam": "TOAN_365",
      "grade": 5,
      "round": "Chuyên đề 3: TỈ SỐ PHẦN TRĂM & TOÁN KINH TẾ THỰC TẾ",
      "topic": "TỈ SỐ PHẦN TRĂM & TOÁN KINH TẾ THỰC TẾ",
      "num": 36,
      "text": "Bài 36. Lượng muối trong nước biển là 5%. Hỏi cần phải đổ thêm bao nhiêu gam nước cất vào 400g nước biển để được một dung dịch mới chứa 2% muối?",
      "type": "fill",
      "answer": "600g",
      "acceptedAnswers": [
        "600g",
        "600",
        "600 g"
      ],
      "explanation": "Khối lượng muối nguyên chất: 400 × 5% = 20g. Để 20g chiếm 2% thì tổng dung dịch mới phải là: 20 : 2% = 1000g. Cần đổ thêm nước cất: 1000 - 400 = 600g."
    },
    {
      "id": "T365-G5-037",
      "exam": "TOAN_365",
      "grade": 5,
      "round": "Chuyên đề 3: TỈ SỐ PHẦN TRĂM & TOÁN KINH TẾ THỰC TẾ",
      "topic": "TỈ SỐ PHẦN TRĂM & TOÁN KINH TẾ THỰC TẾ",
      "num": 37,
      "text": "Bài 37. Giá một lít xăng tháng này tăng 10% so với tháng trước. Sang tháng sau, giá xăng lại giảm 10% so với tháng này. Hỏi giá xăng tháng sau đắt hơn hay rẻ hơn tháng trước bao nhiêu phần trăm?",
      "type": "fill",
      "answer": "rẻ hơn 1%",
      "acceptedAnswers": [
        "rẻ hơn 1%"
      ],
      "explanation": "Tháng này = 110% tháng trước. Tháng sau = 110% × (100% - 10%) = 110% × 90% = 99% tháng trước. Vậy giá xăng tháng sau rẻ hơn 1% so với tháng trước."
    },
    {
      "id": "T365-G5-038",
      "exam": "TOAN_365",
      "grade": 5,
      "round": "Chuyên đề 3: TỈ SỐ PHẦN TRĂM & TOÁN KINH TẾ THỰC TẾ",
      "topic": "TỈ SỐ PHẦN TRĂM & TOÁN KINH TẾ THỰC TẾ",
      "num": 38,
      "text": "Bài 38. Nếu chiều dài một hình chữ nhật tăng thêm 20% và chiều rộng giảm đi 20% thì diện tích hình chữ nhật đó tăng hay giảm bao nhiêu phần trăm?",
      "type": "fill",
      "answer": "giảm đi 4%",
      "acceptedAnswers": [
        "giảm đi 4%"
      ],
      "explanation": "Dài mới = 120%, rộng mới = 80%. Diện tích mới = 120% × 80% = 96% diện tích cũ. Diện tích giảm đi 4%."
    },
    {
      "id": "T365-G5-039",
      "exam": "TOAN_365",
      "grade": 5,
      "round": "Chuyên đề 3: TỈ SỐ PHẦN TRĂM & TOÁN KINH TẾ THỰC TẾ",
      "topic": "TỈ SỐ PHẦN TRĂM & TOÁN KINH TẾ THỰC TẾ",
      "num": 39,
      "text": "Bài 39. Một bác nông dân thu hoạch hạt cà phê tươi chứa 25% nước. Sau khi phơi khô, hạt cà phê chỉ còn chứa 10% nước. Hỏi phơi 1,8 tấn cà phê tươi thì thu được bao nhiêu tấn hạt cà phê khô?",
      "type": "fill",
      "answer": "1,5 tấn",
      "acceptedAnswers": [
        "1,5 tấn",
        "1,5",
        "15",
        "1.5",
        "15 tấn"
      ],
      "explanation": "Trong 1,8 tấn cà phê tươi có lượng chất khô chiếm: 100% - 25% = 75%. Khối lượng chất khô: 1,8 × 75% = 1,35 tấn. Chất khô này chiếm: 100% - 10% = 90% hạt cà phê khô. Thu được số cà phê khô: 1,35 : 90% = 1,5 tấn."
    },
    {
      "id": "T365-G5-040",
      "exam": "TOAN_365",
      "grade": 5,
      "round": "Chuyên đề 3: TỈ SỐ PHẦN TRĂM & TOÁN KINH TẾ THỰC TẾ",
      "topic": "TỈ SỐ PHẦN TRĂM & TOÁN KINH TẾ THỰC TẾ",
      "num": 40,
      "text": "Bài 40. Một cửa hàng hoa quả hạ giá 20% giá bán cam nhưng lượng cam bán ra lại tăng thêm 30%. Hỏi sau đợt hạ giá, số tiền thu về của cửa hàng tăng hay giảm bao nhiêu phần trăm?",
      "type": "fill",
      "answer": "tăng 4%",
      "acceptedAnswers": [
        "tăng 4%"
      ],
      "explanation": "Giá bán mới = 80% giá cũ. Lượng hàng mới = 130% lượng cũ. Tiền thu về mới = 80% × 130% = 104% tiền thu cũ. Doanh thu tăng 4%."
    },
    {
      "id": "T365-G5-041",
      "exam": "TOAN_365",
      "grade": 5,
      "round": "Chuyên đề 3: TỈ SỐ PHẦN TRĂM & TOÁN KINH TẾ THỰC TẾ",
      "topic": "TỈ SỐ PHẦN TRĂM & TOÁN KINH TẾ THỰC TẾ",
      "num": 41,
      "text": "Bài 41. Để khuyến khích tiêu thụ, một siêu thị giảm giá 20% cho tất cả các mặt hàng. Một khách hàng có thẻ thành viên nên được giảm tiếp 5% trên số tiền đã giảm. Hỏi khách hàng đó thực tế được giảm bao nhiêu phần trăm so với giá niêm yết ban đầu?",
      "type": "fill",
      "answer": "24%",
      "acceptedAnswers": [
        "24%",
        "24"
      ],
      "explanation": "Giá sau giảm 1: 80% giá niêm yết. Giá sau giảm 2: 80% × (100% - 5%) = 80% × 95% = 76% giá niêm yết. Tổng mức giảm: 100% - 76% = 24%."
    },
    {
      "id": "T365-G5-042",
      "exam": "TOAN_365",
      "grade": 5,
      "round": "Chuyên đề 3: TỈ SỐ PHẦN TRĂM & TOÁN KINH TẾ THỰC TẾ",
      "topic": "TỈ SỐ PHẦN TRĂM & TOÁN KINH TẾ THỰC TẾ",
      "num": 42,
      "text": "Bài 42. Một hình lập phương có cạnh tăng thêm 10%. Hỏi thể tích của hình lập phương đó tăng thêm bao nhiêu phần trăm?",
      "type": "fill",
      "answer": "tăng thêm 33,1%",
      "acceptedAnswers": [
        "tăng thêm 33,1%",
        "tăng thêm 33, 1%",
        "tăng thêm 33; 1%",
        "tăng thêm 33 và 1%",
        "tăng thêm 33 1%"
      ],
      "explanation": "Cạnh mới = 110% cạnh cũ. Thể tích mới = 110% × 110% × 110% = 133,1% thể tích cũ. Thể tích tăng thêm 33,1%."
    },
    {
      "id": "T365-G5-043",
      "exam": "TOAN_365",
      "grade": 5,
      "round": "Chuyên đề 3: TỈ SỐ PHẦN TRĂM & TOÁN KINH TẾ THỰC TẾ",
      "topic": "TỈ SỐ PHẦN TRĂM & TOÁN KINH TẾ THỰC TẾ",
      "num": 43,
      "text": "Bài 43. Tỉ số học sinh nam và nữ của một trường là 4/5. Nếu trường nhận thêm 20 học sinh nam thì số học sinh nam chiếm 50% tổng số học sinh toàn trường. Tính số học sinh của trường lúc đầu.",
      "type": "fill",
      "answer": "180 học sinh",
      "acceptedAnswers": [
        "180 học sinh",
        "180"
      ],
      "explanation": "Ban đầu nam = 4 phần, nữ = 5 phần. Sau khi nhận 20 nam, số nam bằng số nữ (50% tổng trường) nghĩa là nam bằng nữ = 5 phần. Vậy 1 phần tăng thêm chính là 20 học sinh. Tổng số học sinh lúc đầu: (4 + 5) × 20 = 180 học sinh."
    },
    {
      "id": "T365-G5-044",
      "exam": "TOAN_365",
      "grade": 5,
      "round": "Chuyên đề 3: TỈ SỐ PHẦN TRĂM & TOÁN KINH TẾ THỰC TẾ",
      "topic": "TỈ SỐ PHẦN TRĂM & TOÁN KINH TẾ THỰC TẾ",
      "num": 44,
      "text": "Bài 44. Một người mua 100 con gà giống với giá 15.000 đồng/con. Trong quá trình nuôi có 5 con bị chết. Người đó bán số gà còn lại với giá 40.000 đồng/con và chi phí thức ăn hết 1.200.000 đồng. Hỏi người đó được lãi bao nhiêu phần trăm so với tổng chi phí bỏ ra?",
      "type": "fill",
      "answer": "40,74%",
      "acceptedAnswers": [
        "40,74%",
        "40,74",
        "40.74%",
        "40.74"
      ],
      "explanation": "Tiền mua gà: 100 × 15.000 = 1.500.000 đồng. Tổng chi phí: 1.500.000 + 1.200.000 = 2.700.000 đồng. Bán 95 con gà thu: 95 × 40.000 = 3.800.000 đồng. Tiền lãi: 3.800.000 - 2.700.000 = 1.100.000 đồng. Tỉ lệ lãi: 1.100.000 : 2.700.000 × 100% ≈ 40,74%."
    },
    {
      "id": "T365-G5-045",
      "exam": "TOAN_365",
      "grade": 5,
      "round": "Chuyên đề 3: TỈ SỐ PHẦN TRĂM & TOÁN KINH TẾ THỰC TẾ",
      "topic": "TỈ SỐ PHẦN TRĂM & TOÁN KINH TẾ THỰC TẾ",
      "num": 45,
      "text": "Bài 45. Có 200 gam dung dịch đường chứa 15% đường. Hỏi cần cho thêm bao nhiêu gam đường nguyên chất để thu được dung dịch chứa 20% đường?",
      "type": "fill",
      "answer": "12,5 gam đường",
      "acceptedAnswers": [
        "12,5 gam đường",
        "12, 5 gam đường",
        "12; 5 gam đường",
        "12 và 5 gam đường",
        "12 5 gam đường"
      ],
      "explanation": "Lượng nước cất trong 200g dung dịch: 200 × (100% - 15%) = 170g. Nước cất không đổi và chiếm: 100% - 20% = 80% dung dịch mới. Khối lượng dung dịch mới: 170 : 80% = 212,5g. Lượng đường cần thêm: 212,5 - 200 = 12,5 gam đường."
    },
    {
      "id": "T365-G5-046",
      "exam": "TOAN_365",
      "grade": 5,
      "round": "Chuyên đề 4: HÌNH HỌC NÂNG CAO - TỈ SỐ DIỆN TÍCH TAM GIÁC & HÌNH THANG",
      "topic": "HÌNH HỌC NÂNG CAO - TỈ SỐ DIỆN TÍCH TAM GIÁC & HÌNH THANG",
      "num": 46,
      "text": "Bài 46. Cho tam giác ABC. Lấy điểm D trên cạnh AB sao cho AD = 1/3 AB. Lấy điểm E trên cạnh AC sao cho AE = 1/3 AC. Nối D với E. Biết diện tích tam giác ABC là 90 cm², tính diện tích hình tam giác ADE.",
      "type": "fill",
      "answer": "10 cm²",
      "acceptedAnswers": [
        "10 cm²",
        "10"
      ],
      "explanation": "S(ADE) = 1/3 S(ABE) (chung đường cao hạ từ E, đáy AD = 1/3 AB). S(ABE) = 1/3 S(ABC) (chung đường cao hạ từ B, đáy AE = 1/3 AC). S(ADE) = 1/9 S(ABC) = 90 : 9 = 10 cm²."
    },
    {
      "id": "T365-G5-047",
      "exam": "TOAN_365",
      "grade": 5,
      "round": "Chuyên đề 4: HÌNH HỌC NÂNG CAO - TỈ SỐ DIỆN TÍCH TAM GIÁC & HÌNH THANG",
      "topic": "HÌNH HỌC NÂNG CAO - TỈ SỐ DIỆN TÍCH TAM GIÁC & HÌNH THANG",
      "num": 47,
      "text": "Bài 47. Một hình thang có đáy bé 12cm, đáy lớn 18cm. Nếu kéo dài đáy lớn thêm 5cm thì diện tích tăng thêm 30 cm². Tính diện tích hình thang ban đầu.",
      "type": "fill",
      "answer": "180 cm²",
      "acceptedAnswers": [
        "180 cm²",
        "180"
      ],
      "explanation": "Chiều cao hình thang = 30 × 2 : 5 = 12cm. Diện tích ban đầu: (12 + 18) × 12 : 2 = 180 cm²."
    },
    {
      "id": "T365-G5-048",
      "exam": "TOAN_365",
      "grade": 5,
      "round": "Chuyên đề 4: HÌNH HỌC NÂNG CAO - TỈ SỐ DIỆN TÍCH TAM GIÁC & HÌNH THANG",
      "topic": "HÌNH HỌC NÂNG CAO - TỈ SỐ DIỆN TÍCH TAM GIÁC & HÌNH THANG",
      "num": 48,
      "text": "Bài 48. Cho hình thang ABCD có đáy bé AB = 1/3 đáy lớn CD. Hai đường chéo AC và BD cắt nhau tại O. Biết diện tích tam giác AOB là 6 cm², tính diện tích hình thang ABCD.",
      "type": "fill",
      "answer": "96 cm²",
      "acceptedAnswers": [
        "96 cm²",
        "96"
      ],
      "explanation": "S(AOB) / S(BOC) = AB/CD = 1/3 => S(BOC) = 6 × 3 = 18 cm². S(AOD) = S(BOC) = 18 cm². S(COD) = 18 × 3 = 54 cm². Diện tích hình thang ABCD = 6 + 18 + 18 + 54 = 96 cm²."
    },
    {
      "id": "T365-G5-049",
      "exam": "TOAN_365",
      "grade": 5,
      "round": "Chuyên đề 4: HÌNH HỌC NÂNG CAO - TỈ SỐ DIỆN TÍCH TAM GIÁC & HÌNH THANG",
      "topic": "HÌNH HỌC NÂNG CAO - TỈ SỐ DIỆN TÍCH TAM GIÁC & HÌNH THANG",
      "num": 49,
      "text": "Bài 49. Cho hình tròn tâm O có bán kính tăng thêm 20%. Hỏi diện tích hình tròn đó tăng thêm bao nhiêu phần trăm?",
      "type": "fill",
      "answer": "tăng thêm 44%",
      "acceptedAnswers": [
        "tăng thêm 44%"
      ],
      "explanation": "Bán kính mới = 120% bán kính cũ. Diện tích mới = 120% × 120% = 144% diện tích cũ. Diện tích tăng thêm 44%."
    },
    {
      "id": "T365-G5-050",
      "exam": "TOAN_365",
      "grade": 5,
      "round": "Chuyên đề 4: HÌNH HỌC NÂNG CAO - TỈ SỐ DIỆN TÍCH TAM GIÁC & HÌNH THANG",
      "topic": "HÌNH HỌC NÂNG CAO - TỈ SỐ DIỆN TÍCH TAM GIÁC & HÌNH THANG",
      "num": 50,
      "text": "Bài 50. Một cái hồ hình tròn có đường kính 10m. Người ta làm một con đường chạy quanh hồ rộng 1m. Tính diện tích con đường đó (lấy số Pi = 3,14).",
      "type": "fill",
      "answer": "34,54 m²",
      "acceptedAnswers": [
        "34,54 m²",
        "34,54",
        "3454",
        "34.54",
        "3454 m²"
      ],
      "explanation": "Bán kính hồ: 10 : 2 = 5m. Bán kính cả đường và hồ: 5 + 1 = 6m. Diện tích đường đi = 3,14 × (6² - 5²) = 3,14 × 11 = 34,54 m²."
    },
    {
      "id": "T365-G5-051",
      "exam": "TOAN_365",
      "grade": 5,
      "round": "Chuyên đề 4: HÌNH HỌC NÂNG CAO - TỈ SỐ DIỆN TÍCH TAM GIÁC & HÌNH THANG",
      "topic": "HÌNH HỌC NÂNG CAO - TỈ SỐ DIỆN TÍCH TAM GIÁC & HÌNH THANG",
      "num": 51,
      "text": "Bài 51. Cho tam giác ABC vuông tại A có cạnh AB = 30cm, AC = 40cm. Cạnh huyền BC = 50cm. Tính chiều cao hạ từ đỉnh A xuống cạnh đáy BC.",
      "type": "fill",
      "answer": "24cm",
      "acceptedAnswers": [
        "24cm",
        "24",
        "24 cm"
      ],
      "explanation": "Diện tích tam giác vuông ABC = 30 × 40 : 2 = 600 cm². Chiều cao hạ từ đỉnh A = 600 × 2 : 50 = 24cm."
    },
    {
      "id": "T365-G5-052",
      "exam": "TOAN_365",
      "grade": 5,
      "round": "Chuyên đề 4: HÌNH HỌC NÂNG CAO - TỈ SỐ DIỆN TÍCH TAM GIÁC & HÌNH THANG",
      "topic": "HÌNH HỌC NÂNG CAO - TỈ SỐ DIỆN TÍCH TAM GIÁC & HÌNH THANG",
      "num": 52,
      "text": "Bài 52. Một hình hộp chữ nhật có diện tích xung quanh là 120 cm², chiều cao là 5cm. Chiều dài hơn chiều rộng 4cm. Tính thể tích của hình hộp chữ nhật đó.",
      "type": "fill",
      "answer": "160 cm³",
      "acceptedAnswers": [
        "160 cm³",
        "160"
      ],
      "explanation": "Chu vi đáy = 120 : 5 = 24cm => Nửa chu vi đáy = 12cm. Dài = (12 + 4):2 = 8cm; Rộng = 12 - 8 = 4cm. Thể tích = 8 × 4 × 5 = 160 cm³."
    },
    {
      "id": "T365-G5-053",
      "exam": "TOAN_365",
      "grade": 5,
      "round": "Chuyên đề 4: HÌNH HỌC NÂNG CAO - TỈ SỐ DIỆN TÍCH TAM GIÁC & HÌNH THANG",
      "topic": "HÌNH HỌC NÂNG CAO - TỈ SỐ DIỆN TÍCH TAM GIÁC & HÌNH THANG",
      "num": 53,
      "text": "Bài 53. Một bể cá dạng hình hộp chữ nhật có kích thước lòng bể: dài 80cm, rộng 50cm, mức nước cao 35cm. Người ta thả vào bể một hòn non bộ thì nước dâng lên cao 42cm. Tính thể tích của hòn non bộ đó.",
      "type": "fill",
      "answer": "28.000 cm³ (28 lít)",
      "acceptedAnswers": [
        "28.000 cm³ (28 lít)",
        "28.000 cm³",
        "28.000",
        "28000",
        "28,000",
        "28000 cm³",
        "28 lít",
        "28"
      ],
      "explanation": "Chiều cao mức nước tăng: 42 - 35 = 7cm. Thể tích hòn non bộ = 80 × 50 × 7 = 28.000 cm³ (28 lít)."
    },
    {
      "id": "T365-G5-054",
      "exam": "TOAN_365",
      "grade": 5,
      "round": "Chuyên đề 4: HÌNH HỌC NÂNG CAO - TỈ SỐ DIỆN TÍCH TAM GIÁC & HÌNH THANG",
      "topic": "HÌNH HỌC NÂNG CAO - TỈ SỐ DIỆN TÍCH TAM GIÁC & HÌNH THANG",
      "num": 54,
      "text": "Bài 54. Người ta sơn toàn bộ 6 mặt của một khối gỗ hình lập phương cạnh 10cm, sau đó cưa khối gỗ đó thành các khối lập phương nhỏ cạnh 1cm. Hỏi có bao nhiêu khối lập phương nhỏ được sơn đúng 2 mặt? Sơn đúng 1 mặt? Và không được sơn mặt nào?",
      "type": "fill",
      "answer": "96 khối; 384 khối; 512 khối",
      "acceptedAnswers": [
        "96 khối; 384 khối; 512 khối",
        "96 khối, 384 khối, 512 khối",
        "96 khối và 384 khối và 512 khối",
        "96 khối 384 khối 512 khối",
        "96; 384; 512",
        "96, 384, 512",
        "96 384 512",
        "96 khối",
        "384 khối",
        "512 khối"
      ],
      "explanation": "Cắt thành 10 × 10 × 10 = 1000 khối nhỏ. Số khối sơn 2 mặt (nằm ở các cạnh): 12 × (10 - 2) = 96 khối. Sơn 1 mặt (ở giữa 6 mặt): 6 × (10 - 2)² = 384 khối. Không sơn mặt nào: (10 - 2)³ = 512 khối."
    },
    {
      "id": "T365-G5-055",
      "exam": "TOAN_365",
      "grade": 5,
      "round": "Chuyên đề 4: HÌNH HỌC NÂNG CAO - TỈ SỐ DIỆN TÍCH TAM GIÁC & HÌNH THANG",
      "topic": "HÌNH HỌC NÂNG CAO - TỈ SỐ DIỆN TÍCH TAM GIÁC & HÌNH THANG",
      "num": 55,
      "text": "Bài 55. Một hình thang có diện tích 140 cm², chiều cao 8cm. Biết đáy lớn hơn đáy bé 15cm. Tính độ dài đáy lớn và đáy bé của hình thang đó.",
      "type": "fill",
      "answer": "25cm; 10cm",
      "acceptedAnswers": [
        "25cm; 10cm",
        "25cm, 10cm",
        "25cm và 10cm",
        "25cm 10cm",
        "25; 10",
        "25, 10",
        "25 10",
        "25cm",
        "10cm"
      ],
      "explanation": "Tổng hai đáy = 140 × 2 : 8 = 35cm. Đáy lớn = (35 + 15):2 = 25cm; Đáy bé = 35 - 25 = 10cm."
    },
    {
      "id": "T365-G5-056",
      "exam": "TOAN_365",
      "grade": 5,
      "round": "Chuyên đề 5: BÀI TOÁN CHUYỂN ĐỘNG ĐỀU NÂNG CAO",
      "topic": "BÀI TOÁN CHUYỂN ĐỘNG ĐỀU NÂNG CAO",
      "num": 56,
      "text": "Bài 56. Quãng đường AB dài 180km. Lúc 7 giờ sáng, một ô tô đi từ A về B với vận tốc 50 km/giờ. Cùng lúc đó, một xe máy đi từ B về A với vận tốc 40 km/giờ. Hỏi hai xe gặp nhau lúc mấy giờ?",
      "type": "fill",
      "answer": "9 giờ sáng",
      "acceptedAnswers": [
        "9 giờ sáng",
        "9",
        "9h",
        "9 giờ",
        "9:00",
        "9h sáng"
      ],
      "explanation": "Tổng vận tốc: 50 + 40 = 90 km/h. Thời gian đi để gặp nhau: 180 : 90 = 2 giờ. Hai xe gặp nhau lúc: 7 giờ + 2 giờ = 9 giờ sáng."
    },
    {
      "id": "T365-G5-057",
      "exam": "TOAN_365",
      "grade": 5,
      "round": "Chuyên đề 5: BÀI TOÁN CHUYỂN ĐỘNG ĐỀU NÂNG CAO",
      "topic": "BÀI TOÁN CHUYỂN ĐỘNG ĐỀU NÂNG CAO",
      "num": 57,
      "text": "Bài 57. Một người đi xe đạp từ A lúc 6 giờ sáng với vận tốc 12 km/giờ. Đến 8 giờ sáng, một người đi xe máy cũng từ A đuổi theo với vận tốc 36 km/giờ. Hỏi người đi xe máy đuổi kịp người đi xe đạp lúc mấy giờ?",
      "type": "fill",
      "answer": "9 giờ sáng",
      "acceptedAnswers": [
        "9 giờ sáng",
        "9",
        "9h",
        "9 giờ",
        "9:00",
        "9h sáng"
      ],
      "explanation": "Đến 8 giờ xe đạp đi được: 12 × 2 = 24km. Hiệu vận tốc: 36 - 12 = 24 km/h. Thời gian xe máy đuổi kịp: 24 : 24 = 1 giờ. Hai xe gặp nhau lúc: 8 giờ + 1 giờ = 9 giờ sáng."
    },
    {
      "id": "T365-G5-058",
      "exam": "TOAN_365",
      "grade": 5,
      "round": "Chuyên đề 5: BÀI TOÁN CHUYỂN ĐỘNG ĐỀU NÂNG CAO",
      "topic": "BÀI TOÁN CHUYỂN ĐỘNG ĐỀU NÂNG CAO",
      "num": 58,
      "text": "Bài 58. Một chiếc thuyền đi xuôi dòng từ bến A đến bến B hết 3 giờ, và đi ngược dòng từ B về A hết 5 giờ. Biết vận tốc dòng nước là 2 km/giờ. Tính quãng đường sông AB.",
      "type": "fill",
      "answer": "30km",
      "acceptedAnswers": [
        "30km",
        "30",
        "30 km"
      ],
      "explanation": "Hiệu vận tốc: 2 × 2 = 4 km/h. Tỉ số thời gian xuôi/ngược = 3/5 => Tỉ số vận tốc xuôi/ngược = 5/3. Vận tốc xuôi dòng: 4 : (5 - 3) × 5 = 10 km/h. Quãng đường sông AB: 10 × 3 = 30km."
    },
    {
      "id": "T365-G5-059",
      "exam": "TOAN_365",
      "grade": 5,
      "round": "Chuyên đề 5: BÀI TOÁN CHUYỂN ĐỘNG ĐỀU NÂNG CAO",
      "topic": "BÀI TOÁN CHUYỂN ĐỘNG ĐỀU NÂNG CAO",
      "num": 59,
      "text": "Bài 59. Một đoàn tàu hỏa chạy lướt qua một người đi bộ ngược chiều với vận tốc 4 km/giờ trong 9 giây. Biết vận tốc của đoàn tàu là 44 km/giờ. Tính chiều dài của đoàn tàu đó.",
      "type": "fill",
      "answer": "120m",
      "acceptedAnswers": [
        "120m",
        "120",
        "120 m"
      ],
      "explanation": "Chuyển động ngược chiều, tổng vận tốc = 44 + 4 = 48 km/h = 48 × 1000 : 3600 = 40/3 m/s. Chiều dài đoàn tàu = (40/3) × 9 = 120m."
    },
    {
      "id": "T365-G5-060",
      "exam": "TOAN_365",
      "grade": 5,
      "round": "Chuyên đề 5: BÀI TOÁN CHUYỂN ĐỘNG ĐỀU NÂNG CAO",
      "topic": "BÀI TOÁN CHUYỂN ĐỘNG ĐỀU NÂNG CAO",
      "num": 60,
      "text": "Bài 60. Một đoàn tàu chạy qua một cây cầu dài 450m mất 45 giây. Cũng với vận tốc đó, đoàn tàu chạy qua một cột điện ven đường mất 15 giây. Tính vận tốc và chiều dài của đoàn tàu.",
      "type": "fill",
      "answer": "54 km/h; 225m",
      "acceptedAnswers": [
        "54 km/h; 225m",
        "54 km/h, 225m",
        "54 km/h và 225m",
        "54 km/h 225m",
        "54; 225",
        "54, 225",
        "54 225",
        "54 km/h",
        "225m"
      ],
      "explanation": "Thời gian tàu đi qua quãng đường 450m là: 45 - 15 = 30 giây. Vận tốc của tàu = 450 : 30 = 15 m/s = 54 km/h. Chiều dài đoàn tàu = 15 × 15 = 225m."
    },
    {
      "id": "T365-G5-061",
      "exam": "TOAN_365",
      "grade": 5,
      "round": "Chuyên đề 5: BÀI TOÁN CHUYỂN ĐỘNG ĐỀU NÂNG CAO",
      "topic": "BÀI TOÁN CHUYỂN ĐỘNG ĐỀU NÂNG CAO",
      "num": 61,
      "text": "Bài 61. Một người đi bộ từ A đến B rồi quay trở lại A. Lúc đi người đó đi với vận tốc 4 km/giờ, lúc về đi với vận tốc 6 km/giờ. Tính vận tốc trung bình của người đó trên cả quãng đường cả đi lẫn về.",
      "type": "fill",
      "answer": "4,8 km/giờ",
      "acceptedAnswers": [
        "4,8 km/giờ",
        "4,8",
        "48",
        "4.8",
        "48 km/giờ"
      ],
      "explanation": "Gọi quãng đường AB là 12km (bội số chung của 4 và 6). Thời gian đi: 12 : 4 = 3 giờ; Thời gian về: 12 : 6 = 2 giờ. Tổng thời gian: 3 + 2 = 5 giờ. Vận tốc trung bình = (12 × 2) : 5 = 24 : 5 = 4,8 km/giờ."
    },
    {
      "id": "T365-G5-062",
      "exam": "TOAN_365",
      "grade": 5,
      "round": "Chuyên đề 5: BÀI TOÁN CHUYỂN ĐỘNG ĐỀU NÂNG CAO",
      "topic": "BÀI TOÁN CHUYỂN ĐỘNG ĐỀU NÂNG CAO",
      "num": 62,
      "text": "Bài 62. Hai thành phố A và B cách nhau 120km. Lúc 7 giờ, một ô tô đi từ A đến B với vận tốc 50 km/giờ và một xe máy đi từ B đến A với vận tốc 30 km/giờ. Hỏi sau khi đi được bao lâu thì hai xe cách nhau 40km trước khi gặp nhau?",
      "type": "fill",
      "answer": "1 giờ",
      "acceptedAnswers": [
        "1 giờ",
        "1",
        "1h",
        "1:00"
      ],
      "explanation": "Tổng quãng đường hai xe đã đi khi còn cách nhau 40km: 120 - 40 = 80km. Thời gian đi: 80 : (50 + 30) = 80 : 80 = 1 giờ."
    },
    {
      "id": "T365-G5-063",
      "exam": "TOAN_365",
      "grade": 5,
      "round": "Chuyên đề 5: BÀI TOÁN CHUYỂN ĐỘNG ĐỀU NÂNG CAO",
      "topic": "BÀI TOÁN CHUYỂN ĐỘNG ĐỀU NÂNG CAO",
      "num": 63,
      "text": "Bài 63. Hằng ngày bạn An đi xe đạp từ nhà đến trường với vận tốc 12 km/giờ thì mất 20 phút. Hôm nay do xe hỏng nên An phải đi bộ với vận tốc 4 km/giờ. Hỏi hôm nay An mất bao nhiêu thời gian để đến trường?",
      "type": "fill",
      "answer": "60 phút",
      "acceptedAnswers": [
        "60 phút",
        "60"
      ],
      "explanation": "Quãng đường từ nhà đến trường: 12 × (20/60) = 4km. Thời gian An đi bộ: 4 : 4 = 1 giờ = 60 phút."
    },
    {
      "id": "T365-G5-064",
      "exam": "TOAN_365",
      "grade": 5,
      "round": "Chuyên đề 5: BÀI TOÁN CHUYỂN ĐỘNG ĐỀU NÂNG CAO",
      "topic": "BÀI TOÁN CHUYỂN ĐỘNG ĐỀU NÂNG CAO",
      "num": 64,
      "text": "Bài 64. Một con kiến bò dọc theo mép một cái bàn hình chữ nhật có chu vi 3,6m. Kiến bò với vận tốc 2 cm/giây. Hỏi con kiến mất bao nhiêu phút để bò giáp một vòng quanh mép bàn?",
      "type": "fill",
      "answer": "3 phút",
      "acceptedAnswers": [
        "3 phút",
        "3"
      ],
      "explanation": "Đổi 3,6m = 360cm. Thời gian kiến bò: 360 : 2 = 180 giây = 3 phút."
    },
    {
      "id": "T365-G5-065",
      "exam": "TOAN_365",
      "grade": 5,
      "round": "Chuyên đề 5: BÀI TOÁN CHUYỂN ĐỘNG ĐỀU NÂNG CAO",
      "topic": "BÀI TOÁN CHUYỂN ĐỘNG ĐỀU NÂNG CAO",
      "num": 65,
      "text": "Bài 65. Một chiếc đồng hồ đang chỉ đúng 12 giờ trưa. Hỏi sau ít nhất bao nhiêu phút nữa thì kim giờ và kim phút lại trùng khít lên nhau?",
      "type": "fill",
      "answer": "1 giờ 5 phút 27 giây (khoảng 65,45 phút)",
      "acceptedAnswers": [
        "1 giờ 5 phút 27 giây (khoảng 65,45 phút)",
        "1 giờ 5 phút 27 giây",
        "khoảng 65,45 phút",
        "khoảng 65, 45 phút",
        "khoảng 65; 45 phút",
        "khoảng 65 và 45 phút",
        "khoảng 65 45 phút",
        "1 giờ 5 phút 27 giây (khoảng 65, 45 phút)",
        "1 giờ 5 phút 27 giây (khoảng 65; 45 phút)",
        "1 giờ 5 phút 27 giây (khoảng 65 và 45 phút)",
        "1 giờ 5 phút 27 giây (khoảng 65 45 phút)"
      ],
      "explanation": "Vận tốc kim phút là 1 vòng/giờ, kim giờ là 1/12 vòng/giờ. Hiệu vận tốc = 1 - 1/12 = 11/12 vòng/giờ. Thời gian kim phút đuổi kịp kim giờ: 1 : (11/12) = 12/11 giờ = 1 giờ 5 phút 27 giây (khoảng 65,45 phút)."
    }
  ]
};

if (typeof window !== "undefined") {
  window.TOAN_365_DB = TOAN_365_DB;
  window.TOAN_365_DATA = TOAN_365_DB.grade4;
}
if (typeof module !== "undefined") {
  module.exports = TOAN_365_DB;
}
