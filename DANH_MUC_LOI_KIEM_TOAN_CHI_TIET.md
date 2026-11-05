# DANH MỤC KIỂM TOÁN VÀ PHÂN LOẠI LỖI CHI TIẾT TOÀN BỘ KHO ĐỀ THI
## Hệ Thống Luyện Thi Toán Quốc Tế & Bồi Dưỡng Học Sinh Giỏi — Thầy Nguyễn Đình Chinh
**Cơ quan kiểm định**: Hội đồng Thẩm định & Kiểm định Chất lượng Đề thi (Quality Audit Council)  
**Ngày ban hành**: 05/11/2026  
**Phiên bản tài liệu**: 2.0 (Master Audit Delivery)  
**Phạm vi kiểm toán**: Toàn bộ 7.973 bản ghi / 7.370+ câu hỏi thuộc 9 bộ dữ liệu đề thi trên nền tảng:
`timo_data.js`, `kangaroo_data.js`, `fmo_data.js`, `grade4_special.js` (kèm `grade4_special_orig.js`), `toan365_data.js`, `archimedes_math_data.js` (kèm `archimedes_g4_real.js`), `tieng_viet_data.js`, `toan_tuoi_tho_data.js`, `extra_exams.js` và động cơ thi trong `index.html`.

---

## MỤC LỤC
1. [TỔNG QUAN VÀ BẢNG THỐNG KÊ QUY MÔ TOÀN BỘ KHO ĐỀ](#i-tổng-quan-và-bảng-thống-kê-quy-mô-toàn-bộ-kho-đề)
2. [CHUẨN MỰC ĐỊNH DANH MÃ LỖI & MA TRẬN MỨC ĐỘ NGHIÊM TRỌNG](#ii-chuẩn-mực-định-danh-mã-lỗi--ma-trận-mức-độ-nghiêm-trọng)
3. [DANH MỤC CHI TIẾT 1: TOÁN NÂNG CAO & AMO LỚP 4 (`grade4_special.js`)](#iii-danh-mục-chi-tiết-1-toán-nâng-cao--amo-lớp-4-grade4_specialjs)
   - [3.1. Danh mục 43 câu hỏi dính lỗi Giả thiết tạm (Assumption Bugs)](#31-danh-mục-43-câu-hỏi-dính-lỗi-giả-thiết-tạm-assumption-bugs)
   - [3.2. Danh mục 15 câu Giá trị Trung bình dính lỗi định dạng `(B) 87`](#32-danh-mục-15-câu-giá-trị-trung-bình-dính-lỗi-định-dạng-b-87)
   - [3.3. Lỗi gộp dính câu trong chuyên đề Số nguyên tố (`G4-NC-1108`, `G4-NC-1109`)](#33-lỗi-gộp-dính-câu-trong-chuyên-đề-số-nguyên-tố-g4-nc-1108-g4-nc-1109)
   - [3.4. Danh mục 3 câu hỏi bị nuốt vào trường Lời giải (`G4-NC-1143`, `1187`, `1214`)](#34-danh-mục-3-câu-hỏi-bị-nuốt-vào-trường-lời-giải-g4-nc-1143-1187-1214)
   - [3.5. Hiện trạng 338 câu hỏi bị ẩn do thiếu đáp số số hóa](#35-hiện-trạng-338-câu-hỏi-bị-ẩn-do-thiếu-đáp-số-số-hóa)
4. [DANH MỤC CHI TIẾT 2: KỲ THI TIMO KHỐI 1 - 5 (`timo_data.js`)](#iv-danh-mục-chi-tiết-2-kỳ-thi-timo-khối-1---5-timo_datajs)
   - [4.1. Lỗi sai đáp án Chu vi TIMO G4 Đề 5 Câu 17](#41-lỗi-sai-đáp-án-chu-vi-timo-g4-đề-5-câu-17)
   - [4.2. Danh mục 115 câu hỏi đề bài yêu cầu xem hình nhưng `image: null`](#42-danh-mục-115-câu-hỏi-đề-bài-yêu-cầu-xem-hình-nhưng-image-null)
   - [4.3. Hiện tượng trùng lặp 251 câu hỏi](#43-hiện-tượng-trùng-lặp-251-câu-hỏi)
   - [4.4. Phân mảnh 6 cặp vòng thi do không đồng nhất dấu tiếng Việt](#44-phân-mảnh-6-cặp-vòng-thi-do-không-đồng-nhất-dấu-tiếng-việt)
   - [4.5. Tệp phế tích `timo_database.json`](#45-tệp-phế-tích-timo_databasejson)
5. [DANH MỤC CHI TIẾT 3: KỲ THI KANGAROO IKMC KHỐI 1 - 5 (`kangaroo_data.js`)](#v-danh-mục-chi-tiết-3-kỳ-thi-kangaroo-ikmc-khối-1---5-kangaroo_datajs)
   - [5.1. Lỗi nuốt đề bài vào Phương án A (50 câu, đặc biệt G2 Đề 1)](#51-lỗi-nuốt-đề-bài-vào-phương-án-a-50-câu-đặc-biệt-g2-đề-1)
   - [5.2. Danh mục 5 câu hỏi có đề bài hoàn toàn rỗng (`text: ""`)](#52-danh-mục-5-câu-hỏi-có-đề-bài-hoàn-toàn-rỗng-text-)
   - [5.3. Xung đột trùng mã ID & tráo đổi đề - lời giải](#53-xung-đột-trùng-mã-id--tráo-đổi-đề---lời-giải)
   - [5.4. Lỗi ký tự đầu bị cắt cụt & ký tự rác OCR](#54-lỗi-ký-tự-đầu-bị-cắt-cụt--ký-tự-rác-ocr)
   - [5.5. 3 câu hỏi Kangaroo thiếu ảnh minh họa](#55-3-câu-hỏi-kangaroo-thiếu-ảnh-minh-họa)
6. [DANH MỤC CHI TIẾT 4: TOÁN ARCHIMEDES KHỐI 1 - 5 (`archimedes_math_data.js`)](#vi-danh-mục-chi-tiết-4-toán-archimedes-khối-1---5-archimedes_math_datajs)
   - [6.1. Lỗi nhân bản trùng lặp 3 lần liên tiếp (1.680 câu trùng rác)](#61-lỗi-nhân-bản-trùng-lặp-3-lần-liên-tiếp-1680-câu-trùng-rác)
   - [6.2. Lỗi ghi đè runtime làm mất 29 tuần Lớp 4 (`archimedes_g4_real.js`)](#62-lỗi-ghi-đè-runtime-làm-mất-29-tuần-lớp-4-archimedes_g4_realjs)
   - [6.3. Vấn đề 618 câu hỏi tự sinh theo mẫu chung (Generic Prompts)](#63-vấn-đề-618-câu-hỏi-tự-sinh-theo-mẫu-chung-generic-prompts)
7. [DANH MỤC CHI TIẾT 5: TIẾNG VIỆT ARCHIMEDES KHỐI 1 - 5 (`tieng_viet_data.js`)](#vii-danh-mục-chi-tiết-5-tiếng-việt-archimedes-khối-1---5-tieng_viet_datajs)
   - [7.1. Định vị và phân loại 68 câu hỏi chứa phương án vô nghĩa (Placeholder)](#71-định-vị-và-phân-loại-68-câu-hỏi-chứa-phương-án-vô-nghĩa-placeholder)
   - [7.2. Mâu thuẫn logic Lời giải - Đáp án ở các câu placeholder](#72-mâu-thuẫn-logic-lời-giải---đáp-án-ở-các-câu-placeholder)
8. [DANH MỤC CHI TIẾT 6: KỲ THI OLYMPIC FMO, ASMO & TOÁN TUỔI THƠ 2](#viii-danh-mục-chi-tiết-6-kỳ-thi-olympic-fmo-asmo--toán-tuổi-thơ-2)
   - [8.1. Lỗi bộ lọc khối lớp FMO trong `index.html`](#81-lỗi-bộ-lọc-khối-lớp-fmo-trong-indexhtml)
   - [8.2. Tình trạng kỳ thi ảo ASMO (0 câu hỏi trong DB)](#82-tình-trạng-kỳ-thi-ảo-asmo-0-câu-hỏi-trong-db)
   - [8.3. Kiểm toán Tạp chí Toán Tuổi Thơ 2 (`toan_tuoi_tho_data.js`)](#83-kiểm-toán-tạp-chí-toán-tuổi-thơ-2-toan_tuoi_tho_datajs)
9. [DANH MỤC CHI TIẾT 7: TÀI NGUYÊN HÌNH ẢNH & ĐỘNG CƠ CHẤM ĐIỂM](#ix-danh-mục-chi-tiết-7-tài-nguyên-hình-ảnh--động-cơ-chấm-điểm)
   - [9.1. Kiểm toán 638 tệp ảnh trên đĩa và 592 liên kết trong DB](#91-kiểm-toán-638-tệp-ảnh-trên-đĩa-và-592-liên-kết-trong-db)
   - [9.2. Lỗ hổng đối chiếu trắc nghiệm trong hàm `isAnswerCorrect`](#92-lỗ-hổng-đối-chiếu-trắc-nghiệm-trong-hàm-isanswercorrect)
   - [9.3. Lỗi hiển thị trắc nghiệm khi thiếu cờ `type: "mc"`](#93-lỗi-hiển-thị-trắc-nghiệm-khi-thiếu-cờ-type-mc)

---

## I. TỔNG QUAN VÀ BẢNG THỐNG KÊ QUY MÔ TOÀN BỘ KHO ĐỀ

Qua kết quả kiểm toán độc lập và thực thi kiểm chứng tự động (`verify_audit_catalog.js`) với **54/54 tiêu chuẩn đạt 100%**, Hội đồng Thẩm định ghi nhận hiện trạng định lượng toàn bộ kho câu hỏi như sau:

| STT | Kỳ thi / Tên Bộ Dữ Liệu | Tệp Nguồn Dữ Liệu | Số Bản Ghi Lưu Trữ | Số Câu Thực Tế (Unique) | Số Lượng Trùng Lặp | Tình Trạng Kỹ Thuật & Lỗi Trọng Tâm |
|:---:|:---|:---|:---:|:---:|:---:|:---|
| 1 | **TIMO (Khối 1 - 5)** | `timo_data.js` | **879** | **628** | **251** | 115 câu thiếu ảnh, 1 câu sai đáp án chu vi (Đề 5 Q17), 6 cặp vòng thi phân mảnh. |
| 2 | **Kangaroo IKMC (Khối 1 - 5)** | `kangaroo_data.js` | **862** | **858** | **4** | 24 câu G2 Đề 1 nuốt đề vào Option A, 5 câu text rỗng, 3 câu thiếu ảnh, xung đột ID. |
| 3 | **Olympic FMO** | `fmo_data.js` | **42** | **42** | 0 | 100% câu hỏi chuẩn G4 nhưng giao diện `index.html` hiển thị cho cả Khối 1, 2, 3, 5. |
| 4 | **Toán Nâng Cao & AMO Lớp 4** | `grade4_special.js` | **182** | **182** | 0 | 43 câu lỗi giả thiết tạm, 15 câu lỗi `(B) 87`, 2 câu gộp dính (10 bài), 3 câu nuốt đề, ẩn 338 câu. |
| 5 | **365 Bài Toán Hay & Khó (G1 - 5)** | `toan365_data.js` | **550** | **550** | 0 | Dữ liệu chuẩn xác 100%, Lớp 4 chuẩn 365 bài, các lớp 1, 2, 3, 5 từ 30 - 65 bài. |
| 6 | **Toán Archimedes Khối 1 - 5** | `archimedes_math_data.js` | **2.740** | **988** (text) / **1.060** (id) | **1.680** | Nhân 3 bản ghi (61,3% rác trùng lặp); Khối 4 bị `archimedes_g4_real.js` ghi đè mất 29 tuần. |
| 7 | **Toán Archimedes G4 Real** | `archimedes_g4_real.js` | **64** | **64** | 0 | Mới số hóa 6/35 tuần (Tuần 1 - 6), còn thiếu 29/35 tuần so với giáo trình scan gốc. |
| 8 | **Tiếng Việt Archimedes (G1 - 5)** | `tieng_viet_data.js` | **2.647** | **2.647** | 0 | 68 câu chứa phương án placeholder ("vô nghĩa"), lời giải khẳng định sai lệch so với đáp án. |
| 9 | **Tạp chí Toán Tuổi Thơ 2** | `toan_tuoi_tho_data.js` | **60** | **60** | 0 | Thư viện liên kết PDF Google Drive: 1 bản ghi lỗi font, 11 cụt năm, 6 gán sai 2025, 19 rỗng tháng. |
| 10 | **Đề Mở Rộng & ASMO** | `extra_exams.js` | **11** | **11** | 0 | 11 câu đều thuộc Kangaroo, **0 câu hỏi ASMO** (ASMO xuất hiện 14 lần trên UI nhưng DB rỗng 0 đề). |
| **Σ** | **TOÀN BỘ HỆ THỐNG** | | **7.973** | **6.966** | **1.935** | **Kho dữ liệu vượt mốc 7.370+ theo yêu cầu gốc.** |

---

## II. CHUẨN MỰC ĐỊNH DANH MÃ LỖI & MA TRẬN MỨC ĐỘ NGHIÊM TRỌNG

Mỗi lỗi trong tài liệu này được quản lý thống nhất theo cú pháp:
`ERR-[EXAM]-[GRADE]-[TOPIC/ROUND]-[QID]-[CATEGORY]`

### Bảng phân loại mức độ nghiêm trọng (Severity Matrix):
1. **CRITICAL / BLOCKER (Rất nghiêm trọng)**:
   - Sai logic toán học, tính sai kết quả, sai đáp án chấm trong cơ sở dữ liệu.
   - Lỗi chấm điểm khiến 100% học sinh chọn đúng vẫn bị chấm sai (`(B) 87`, TIMO G4 Đề 5 Q17).
   - Đề bài bị gộp dính nhiều bài toán hoặc bị nuốt vào trường lời giải, không thể làm được.
   - Kỳ thi ảo trên giao diện nhưng cơ sở dữ liệu hoàn toàn rỗng (ASMO).
2. **HIGH (Nghiêm trọng)**:
   - Đề bài yêu cầu học sinh xem hình vẽ/sơ đồ nhưng trường `image` để trống (`image: null`).
   - Câu hỏi chứa phương án rác, placeholder vô nghĩa ("Dãy từ vô nghĩa...").
   - Nuốt vế câu hỏi vào phương án A (Kangaroo G2 Đề 1).
   - Thiếu hụt khối lượng lớn chương trình (thiếu 29/35 tuần Toán Archimedes Khối 4).
3. **MEDIUM (Trung bình)**:
   - Trùng lặp dữ liệu lớn (Nhân bản lặp 3 lần Archimedes Math, 251 câu trùng TIMO).
   - Hiển thị sai đối tượng học sinh (FMO Lớp 4 hiển thị cho Lớp 1, 2, 3, 5).
   - Thiếu cờ `type: "mc"` dẫn tới hiển thị sai kiểu điều khiển giao diện.
4. **LOW / COSMETIC (Thấp / Thẩm mỹ)**:
   - Vỡ font ký tự Unicode, cụt chuỗi năm xuất bản tạp chí, lỗi khoảng trắng, không đồng nhất cách viết hoa tiêu đề.

---

## III. DANH MỤC CHI TIẾT 1: TOÁN NÂNG CAO & AMO LỚP 4 (`grade4_special.js`)

### 3.1. Danh mục 43 câu hỏi dính lỗi Giả thiết tạm (Assumption Bugs)
- **Tệp nguồn**: `grade4_special.js`
- **Nguyên nhân kỹ thuật**: Script bóc tách tự động ban đầu sử dụng biểu thức chính quy bắt số đầu tiên sau dấu `=` của bước biến đổi giả định trong lời giải thay vì bắt kết luận cuối cùng ("Đáp số: ...", "Vậy...").
- **Hậu quả**: Học sinh giải ra đúng đáp số thực tế của bài toán nhưng hệ thống chấm SAI 100% vì cơ sở dữ liệu lưu kết quả của bước giả thiết tạm!

Dưới đây là danh mục chi tiết toàn bộ 43 câu hỏi đã được kiểm định:

| # | Mã ID Câu Hỏi | Chuyên Đề | Nội Dung Đề Bài Tóm Tắt | Đáp Án Sai Trong DB | Bước Tính Trung Gian Bị Gắp Nhầm | Kết Luận Thực Tế Của Lời Giải | Đáp Số Chuẩn Đề Xuất & acceptedAnswers |
|:---:|:---|:---|:---|:---:|:---|:---|:---|
| 1 | `G4-NC-1131` | Gà & Thỏ | 6 questions contest, +5 correct, -1 wrong. Valerie scores 22. Correct qs? | **30** | `6 × 5 = 30 (điểm)` (Giả sử đúng hết) | Vậy Valerie trả lời đúng 5 câu. | `answer: "5"`, `acceptedAnswers: ["5", "5 câu"]` |
| 2 | `G4-NC-1133` | Gà & Thỏ | Adult ticket $8, child $5. Sean buys 10 tickets for $74. Adult tickets? | **50** | `10 × 5 = 50 (đô la)` (Giả sử toàn vé trẻ em) | Vậy Sean mua 8 vé người lớn và 2 vé trẻ em. | `answer: "8"`, `acceptedAnswers: ["8", "8 vé"]` |
| 3 | `G4-NC-1134` | Gà & Thỏ | 30 stamps (50¢ and 20¢), total $12. Number of 50¢ stamps? | **600** | `30 × 20 = 600 (xu)` (Giả sử toàn tem 20 xu) | Vậy Clifford có 20 con tem 50 xu và 10 con tem 20 xu. | `answer: "20"`, `acceptedAnswers: ["20", "20 tem", "20 con tem"]` |
| 4 | `G4-NC-1135` | Gà & Thỏ | 30 notes ($5 and $10), total $220. How many $10 notes? | **150** | `30 × 5 = 150 (đô la)` (Giả sử toàn tờ 5 đô) | Vậy Natalie tiết kiệm 14 tờ 10 đô la (và 16 tờ 5 đô la). | `answer: "14"`, `acceptedAnswers: ["14", "14 tờ"]` |
| 5 | `G4-NC-1137` | Gà & Thỏ | 25 questions, +4 correct, -2 wrong. John scores 82. Correct qs? | **100** | `25 × 4 = 100 (điểm)` (Giả sử đúng cả 25 câu) | Vậy John trả lời đúng 22 câu. | `answer: "22"`, `acceptedAnswers: ["22", "22 câu"]` |
| 6 | `G4-NC-1138` | Gà & Thỏ | 45 questions, +4 correct, -2 wrong. Henry scores 150. Wrong qs? | **180** | `45 × 4 = 180 (điểm)` (Giả sử đúng cả 45 câu) | Vậy Henry trả lời sai 5 câu. | `answer: "5"`, `acceptedAnswers: ["5", "5 câu"]` |
| 7 | `G4-NC-1139` | Gà & Thỏ | 30 questions, +5 correct, -3 wrong. Amy scores 118. Correct qs? | **150** | `30 × 5 = 150 (điểm)` (Giả sử đúng cả 30 câu) | Vậy Amy trả lời đúng 26 câu. | `answer: "26"`, `acceptedAnswers: ["26", "26 câu"]` |
| 8 | `G4-NC-1143` | Gà & Thỏ | 20 questions, +8 correct, -4 wrong. Isabelle scores 100. Correct qs? | **160** | `20 × 8 = 160 (điểm)` (Giả sử đúng cả 20 câu) | Vậy Isabelle trả lời đúng 15 câu. | `answer: "15"`, `acceptedAnswers: ["15", "15 câu"]` |
| 9 | `G4-NC-1144` | Gà & Thỏ | Pen $4, book $7. Samuel paid $64 for 10 items. Number of pens? | **40** | `10 × 4 = 40 (đô la)` (Giả sử toàn bộ là bút) | Vậy Samuel mua 2 cây bút và 8 quyển sách. | `answer: "2"`, `acceptedAnswers: ["2", "2 bút", "2 cây bút"]` |
| 10 | `G4-NC-1145` | Gà & Thỏ | Marker $3, paintbrush $1. Teacher paid $28 for 12 items. Markers? | **12** | `12 × 1 = 12 (đô la)` (Giả sử toàn cọ vẽ) | Vậy giáo viên mua 8 cây bút lông và 4 cây cọ vẽ. | `answer: "8"`, `acceptedAnswers: ["8", "8 cây", "8 bút lông"]` |
| 11 | `G4-NC-1146` | Tính Tuổi | Tổng tuổi 2 anh em là 28. Em kém anh 2 tuổi. Tuổi mỗi người? | **2** | Hiệu số tuổi đề bài cho là 2 | Anh 15 tuổi và Em 13 tuổi. | `answer: "15 và 13"`, `acceptedAnswers: ["15 và 13", "15, 13", "15; 13", "15 13", "anh 15, em 13"]` |
| 12 | `G4-NC-1147` | Tính Tuổi | Tổng tuổi bố mẹ là 70. 20 năm trước bố hơn mẹ 4 tuổi. Tuổi bố mẹ? | **4** | Hiệu số tuổi cố định là 4 | Bố 37 tuổi và Mẹ 33 tuổi. | `answer: "37 và 33"`, `acceptedAnswers: ["37 và 33", "37, 33", "37; 33", "bố 37, mẹ 33"]` |
| 13 | `G4-NC-1148` | Tính Tuổi | Sean 26 tuổi, hơn John 8 tuổi. Cách đây bao nhiêu năm Sean gấp 3 John? | **8** | Hiệu số tuổi Sean hơn John là 8 | Cách đây là 14 năm. | `answer: "14"`, `acceptedAnswers: ["14", "14 năm"]` |
| 14 | `G4-NC-1149` | Tính Tuổi | Xavier 2 tuổi, mẹ 26 tuổi. Sau mấy năm tuổi mẹ gấp 3 lần con? | **24** | Hiệu số tuổi mẹ hơn con: 26 - 2 = 24 | Vậy sau 10 năm nữa. | `answer: "10"`, `acceptedAnswers: ["10", "10 năm"]` |
| 15 | `G4-NC-1150` | Tính Tuổi | Tổng tuổi John và bố là 44. Ba năm trước bố hơn John 20 tuổi. Tuổi hiện nay? | **20** | Hiệu số tuổi bố hơn John là 20 | Bố 32 tuổi và John 12 tuổi. | `answer: "32 và 12"`, `acceptedAnswers: ["32 và 12", "32, 12", "32; 12", "bố 32, con 12"]` |
| 16 | `G4-NC-1151` | Tính Tuổi | Raphael 8 tuổi. Mẹ nói: Khi con bằng tuổi mẹ, mẹ 54. Tuổi mẹ hiện nay? | **8** | Tuổi Raphael hiện tại là 8 | Hiện tại Mẹ 31 tuổi. | `answer: "31"`, `acceptedAnswers: ["31", "31 tuổi"]` |
| 17 | `G4-NC-1152` | Tính Tuổi | Isabelle và mẹ. 4 năm trước mẹ gấp 4 con. Mẹ 44 tuổi. Tuổi Isabelle hiện nay? | **40** | `44 - 4 = 40 (tuổi mẹ 4 năm trước)` | Hiện nay Isabelle 14 tuổi. | `answer: "14"`, `acceptedAnswers: ["14", "14 tuổi"]` |
| 18 | `G4-NC-1153` | Tính Tuổi | Joel 8 tuổi, mẹ 34 tuổi. Sau mấy năm tuổi mẹ gấp 3 Joel? | **26** | `Hiệu số tuổi: 34 - 8 = 26` | Sau 5 năm nữa. | `answer: "5"`, `acceptedAnswers: ["5", "5 năm"]` |
| 19 | `G4-NC-1154` | Tính Tuổi | Beatrice 10 tuổi, bố 34 tuổi. Cách đây mấy năm bố gấp 4 Beatrice? | **24** | `Hiệu số tuổi: 34 - 10 = 24` | Cách đây 2 năm. | `answer: "2"`, `acceptedAnswers: ["2", "2 năm"]` |
| 20 | `G4-NC-1155` | Tính Tuổi | Tổng tuổi ông và Jimmy là 66. 3 năm sau ông gấp 8 Jimmy. Tuổi mỗi người hiện nay? | **72** | `Tổng tuổi 3 năm sau: 66 + 6 = 72` | Jimmy 5 tuổi và ông nội 61 tuổi. | `answer: "5 và 61"`, `acceptedAnswers: ["5 và 61", "5, 61", "5; 61", "Jimmy 5, ông 61"]` |
| 21 | `G4-NC-1156` | Tính Tuổi | Bà Samuel 64 tuổi, Samuel 13 tuổi. Sau mấy năm bà gấp 4 Samuel? | **51** | `Hiệu số tuổi: 64 - 13 = 51` | Sau 4 năm nữa. | `answer: "4"`, `acceptedAnswers: ["4", "4 năm"]` |
| 22 | `G4-NC-1157` | Tính Tuổi | Con gái 8 tuổi, mẹ 38 tuổi. Sau mấy năm mẹ gấp 3 con gái? | **30** | `Hiệu số tuổi: 38 - 8 = 30` | Sau 7 năm nữa. | `answer: "7"`, `acceptedAnswers: ["7", "7 năm"]` |
| 23 | `G4-NC-1158` | Tính Tuổi | Tổng tuổi Melanie và em trai là 35. 4 năm nữa Melanie hơn em 5 tuổi. Tuổi mỗi người? | **5** | `Hiệu số tuổi đề bài cho là 5` | Melanie 20 tuổi và em trai 15 tuổi. | `answer: "20 và 15"`, `acceptedAnswers: ["20 và 15", "20, 15", "20; 15"]` |
| 24 | `G4-NC-1159` | Tính Tuổi | Jonathan 10 tuổi, Joseph 14 tuổi. Tuổi mỗi người khi tổng tuổi là 50? | **24** | `Tổng tuổi hiện tại: 10 + 14 = 24` | Jonathan 23 tuổi và Joseph 27 tuổi. | `answer: "23 và 27"`, `acceptedAnswers: ["23 và 27", "23, 27", "23; 27"]` |
| 25 | `G4-NC-1160` | Tính Tuổi | Bà Mabel 60 tuổi, Kelly 5 tuổi. Sau mấy năm bà gấp 6 Kelly? | **55** | `Hiệu số tuổi: 60 - 5 = 55` | Sau 6 năm nữa. | `answer: "6"`, `acceptedAnswers: ["6", "6 năm"]` |
| 26 | `G4-NC-1161` | Tính Tuổi | Bố 50 tuổi, con trai 24 tuổi. Cách đây mấy năm bố gấp 3 con trai? | **26** | `Hiệu số tuổi: 50 - 24 = 26` | Cách đây 11 năm. | `answer: "11"`, `acceptedAnswers: ["11", "11 năm"]` |
| 27 | `G4-NC-1162` | Tính Tuổi | Jenevieve 10 tuổi. Khi em bằng tuổi cô, cô 58 tuổi. Tuổi cô giáo hiện nay? | **10** | `Tuổi hiện tại của Jenevieve là 10` | Cô giáo 34 tuổi. | `answer: "34"`, `acceptedAnswers: ["34", "34 tuổi"]` |
| 28 | `G4-NC-1163` | Tính Tuổi | Cindy 12 tuổi. Khi cháu bằng tuổi dì, dì 62 tuổi. Tuổi Dì Zoe hiện nay? | **12** | `Tuổi hiện tại của Cindy là 12` | Dì Zoe 37 tuổi. | `answer: "37"`, `acceptedAnswers: ["37", "37 tuổi"]` |
| 29 | `G4-NC-1164` | Tính Tuổi | Tổng tuổi 2 bố con là 60. 8 năm trước bố gấp 3 con. Tuổi hiện nay? | **44** | Tổng tuổi 8 năm trước: 60 - 16 = 44 | Bố 41 tuổi, con 19 tuổi. | `answer: "41 và 19"`, `acceptedAnswers: ["41 và 19", "41, 19", "41; 19", "bố 41, con 19"]` |
| 30 | `G4-NC-1165` | Tính Tuổi | Tổng tuổi cha và con gái là 50. 5 năm nữa cha gấp 3 con. Tuổi hiện nay? | **60** | Tổng tuổi 5 năm nữa: 50 + 10 = 60 | Cha 40 tuổi, con 10 tuổi. | `answer: "40 và 10"`, `acceptedAnswers: ["40 và 10", "40, 10", "40; 10", "bố 40, con 10"]` |
| 31 | `G4-NC-1166` | Tính Tuổi | Mẹ hơn David 30 tuổi. 8 năm nữa mẹ gấp 4 David. Tuổi David hiện nay? | **30** | Hiệu số tuổi đề bài cho là 30 | David hiện nay 2 tuổi. | `answer: "2"`, `acceptedAnswers: ["2", "2 tuổi"]` |
| 32 | `G4-NC-1167` | Tính Tuổi | Ông hơn Raymond 50 tuổi. 6 năm trước ông gấp 6 Raymond. Tuổi ông hiện nay? | **50** | Hiệu số tuổi đề bài cho là 50 | Ông nội hiện nay 66 tuổi. | `answer: "66"`, `acceptedAnswers: ["66", "66 tuổi"]` |
| 33 | `G4-NC-1185` | Chuyển động ngược | Shawn đi bộ 75m/p, chạy gấp 2. Mất 24p đi bộ. Đi bộ 1/2 và chạy 1/2 mất bao lâu? | **150** | Vận tốc chạy: 75 × 2 = 150 m/p | Thời gian là 12 + 6 = 18 phút. | `answer: "18"`, `acceptedAnswers: ["18", "18 phút"]` |
| 34 | `G4-NC-1186` | Chuyển động ngược | Peter 60m/p, Jane 70m/p. Gặp nhau cách trung điểm 15m. Khoảng cách? | **30** | Hiệu quãng đường: 15 + 15 = 30 m | Khoảng cách là 180 + 210 = 390 m. | `answer: "390"`, `acceptedAnswers: ["390", "390 m", "390m"]` |
| 35 | `G4-NC-1187` | Chuyển động ngược | Mark 12 km/h, Nick 15 km/h. Gặp nhau cách trung điểm 3 km. Khoảng cách AB? | **6** | Hiệu quãng đường: 3 + 3 = 6 km | Khoảng cách AB là 24 + 30 = 54 km. | `answer: "54"`, `acceptedAnswers: ["54", "54 km", "54km"]` |
| 36 | `G4-NC-1188` | Chuyển động ngược | Qiqi 60 m/p, Weiling 70 m/p xuất phát sau 2p. Gặp nhau cách trung điểm 60m. Khoảng cách? | **6** | Hiệu vận tốc | Khoảng cách là 2160 m. | `answer: "2160"`, `acceptedAnswers: ["2160", "2160 m", "2160m"]` |
| 37 | `G4-NC-1196` | Chuyển động ngược | AB 240km. Xe A 50 km/h, B 46 km/h. Sau bao lâu cách nhau 48km? | **120** | Nửa quãng đường là 120 km | Sau 2 giờ (chưa gặp) hoặc 3 giờ (đã qua). | `answer: "2 hoặc 3"`, `acceptedAnswers: ["2", "3", "2 giờ", "3 giờ", "2 hoặc 3"]` |
| 38 | `G4-NC-1209` | Chuyển động cùng | 7h Xe A từ X (60 km/h), B từ Y (50 km/h). X cách Y 40km. Gặp nhau lúc mấy giờ? | **10** | Hiệu vận tốc: 60 - 50 = 10 km/h | Gặp nhau lúc 7 + 4 = 11 giờ. | `answer: "11"`, `acceptedAnswers: ["11", "11 giờ", "11h"]` |
| 39 | `G4-NC-1210` | Chuyển động cùng | Xe A trước 2h (70 km/h). Y cách X 200km. A đuổi kịp B sau 4h. Vận tốc B? | **420** | Quãng đường xe A: 70 × 6 = 420 km | Vận tốc xe B là 220 : 4 = 55 km/h. | `answer: "55"`, `acceptedAnswers: ["55", "55 km/h"]` |
| 40 | `G4-NC-1211` | Chuyển động cùng | A (80 km/h), B (60 km/h). Cách nhau 40km. A đuổi kịp B sau 3h. B rời bến trước mấy giờ? | **480** | Quãng đường A đi: 80 × 6 = 480 km | Xe B rời Y trước xe A 1 giờ. | `answer: "1"`, `acceptedAnswers: ["1", "1 giờ", "1h"]` |
| 41 | `G4-NC-1212` | Chuyển động cùng | A rời 8h (45 km/h). 10h B cùng chiều (60 km/h). Nơi gặp nhau cách bến bao xa? | **90** | Quãng đường A đi trước: 45 × 2 = 90 km | Cách bến 60 × 6 = 360 km. | `answer: "360"`, `acceptedAnswers: ["360", "360 km"]` |
| 42 | `G4-NC-1213` | Chuyển động cùng | A (72 km/h), B (60 km/h). Cách nhau 48km. Sau 7h hai xe cách nhau bao nhiêu km? | **12** | Hiệu vận tốc: 72 - 60 = 12 km/h | Cách nhau 84 - 48 = 36 km. | `answer: "36"`, `acceptedAnswers: ["36", "36 km"]` |
| 43 | `G4-NC-1214` | Chuyển động cùng | Xe A (54 km/h), B (45 km/h). Y cách X 36km. Quãng đường A đã đi khi đuổi kịp? | **9** | Hiệu vận tốc: 54 - 45 = 9 km/h | Quãng đường A đã đi là 216 km. | `answer: "216"`, `acceptedAnswers: ["216", "216 km"]` |

---

### 3.2. Danh mục 15 câu Giá trị Trung bình dính lỗi định dạng `(B) 87`
- **Tệp nguồn**: `grade4_special.js`
- **Mức độ nghiêm trọng**: **CRITICAL / BLOCKER**
- **Nguyên nhân kỹ thuật**: Dạng bài là trắc nghiệm (`type: "mc"`), giao diện gửi ký tự phương án `'A'`, `'B'`, `'C'`, `'D'`. Tuy nhiên, trường `answer` trong cơ sở dữ liệu lại lưu cả chuỗi ghép: `"(B) 87"`. Khi chấm, hàm `isAnswerCorrect` so sánh chuỗi trực tiếp khiến 100% học sinh chọn đúng phương án trắc nghiệm vẫn bị đánh trượt.
- **Biện pháp xử lý**: Đổi `answer` thành ký tự phương án chuẩn `'A'/'B'/'C'` và cấu hình `acceptedAnswers` mở rộng để học sinh gõ số hay gõ chữ đều được chấp nhận:

| # | Mã ID Câu Hỏi | Vòng Thi / Chuyên Đề | Phương Án Hiển Thị | Chuỗi Sai Hiện Tại Trong DB | Đáp Án Chuẩn (`answer`) | Mảng Chấp Nhận (`acceptedAnswers`) |
|:---:|:---|:---|:---|:---:|:---:|:---|
| 1 | `G4-NC-1074` | 01_GIÁ TRỊ TRUNG BÌNH P1 | A. 86, B. 87, C. 88, D. 89 | `(B) 87` | **B** | `["B", "b", "87", "(B) 87"]` |
| 2 | `G4-NC-1075` | 01_GIÁ TRỊ TRUNG BÌNH P1 | A. 125, B. 130, C. 135, D. 140 | `(B) 130` | **B** | `["B", "b", "130", "(B) 130"]` |
| 3 | `G4-NC-1076` | 01_GIÁ TRỊ TRUNG BÌNH P1 | A. 45, B. 47, C. 50, D. 52 | `(B) 47` | **B** | `["B", "b", "47", "(B) 47"]` |
| 4 | `G4-NC-1077` | 01_GIÁ TRỊ TRUNG BÌNH P1 | A. 9,0, B. 9,2, C. 9,5, D. 10 | `(A) 9,0` | **A** | `["A", "a", "9.0", "9,0", "9", "(A) 9,0"]` |
| 5 | `G4-NC-1078` | 01_GIÁ TRỊ TRUNG BÌNH P1 | A. 16, B. 17, C. 18, D. 19 | `(B) 17` | **B** | `["B", "b", "17", "(B) 17"]` |
| 6 | `G4-NC-1079` | 01_GIÁ TRỊ TRUNG BÌNH P1 | A. 52, B. 55, C. 58, D. 60 | `(B) 55` | **B** | `["B", "b", "55", "(B) 55"]` |
| 7 | `G4-NC-1080` | 01_GIÁ TRỊ TRUNG BÌNH P1 | A. 12, B. 13, C. 14, D. 15 | `(B) 13` | **B** | `["B", "b", "13", "(B) 13"]` |
| 8 | `G4-NC-1081` | 01_GIÁ TRỊ TRUNG BÌNH P1 | A. 80, B. 82, C. 85, D. 88 | `(B) 82` | **B** | `["B", "b", "82", "(B) 82"]` |
| 9 | `G4-NC-1082` | 01_GIÁ TRỊ TRUNG BÌNH P1 | A. 220, B. 230, C. 240, D. 250 | `(C) 240` | **C** | `["C", "c", "240", "(C) 240"]` |
| 10 | `G4-NC-1083` | 01_GIÁ TRỊ TRUNG BÌNH P1 | A. 9,5, B. 9,8, C. 10,0, D. 10,5 | `(C) 10,0` | **C** | `["C", "c", "10", "10.0", "10,0", "(C) 10,0"]` |
| 11 | `G4-NC-1084` | 01_GIÁ TRỊ TRUNG BÌNH P1 | A. 32, B. 34, C. 36, D. 38 | `(B) 34` | **B** | `["B", "b", "34", "(B) 34"]` |
| 12 | `G4-NC-1085` | 01_GIÁ TRỊ TRUNG BÌNH P1 | A. 26, B. 28, C. 30, D. 32 | `(C) 30` | **C** | `["C", "c", "30", "(C) 30"]` |
| 13 | `G4-NC-1086` | 01_GIÁ TRỊ TRUNG BÌNH P1 | A. 6,0, B. 6,2, C. 6,5, D. 7,0 | `(C) 6,5` | **C** | `["C", "c", "6.5", "6,5", "(C) 6,5"]` |
| 14 | `G4-NC-1087` | 01_GIÁ TRỊ TRUNG BÌNH P1 | A. 20,0, B. 21,0, C. 21,5, D. 22,0 | `(C) 21,5` | **C** | `["C", "c", "21.5", "21,5", "(C) 21,5"]` |
| 15 | `G4-NC-1088` | 01_GIÁ TRỊ TRUNG BÌNH P1 | A. 48, B. 50, C. 52, D. 54 | `(C) 52` | **C** | `["C", "c", "52", "(C) 52"]` |

---

### 3.3. Lỗi gộp dính câu trong chuyên đề Số nguyên tố (`G4-NC-1108`, `G4-NC-1109`)
- **Tệp nguồn**: `grade4_special.js`
- **Mức độ nghiêm trọng**: **CRITICAL**
- **Mô tả hiện tượng**: Trong chuyên đề `03_SỐ NGUYÊN TỐ P1`, chỉ có 2 bản ghi nhưng thực chất bị dán đè **10 bài toán độc lập**:
  1. **Bản ghi `G4-NC-1108`**: Gộp 2 bài toán:
     - **Câu 8**: *"Cho x là một số tự nhiên. Biết x + 1 là một số nguyên tố và x + 3 cũng là một số nguyên tố. Giá trị của x là: (A) 1  (B) 2  (C) 3  (D) 4  (E) 5"*
     - **Câu 9**: *"9. [ĐVH] Tìm số tự nhiên a sao cho a + 2 và a + 4 đều là các số nguyên tố. (A) 1  (B) 2  (C) 3  (D) 5  (E) 7"*
     - *Hậu quả*: Đề bài hiển thị 2 câu toán khác nhau, chỉ có 1 nút bấm chọn A-E, lời giải ghi "Lời giải chi tiết đang được cập nhật."
  2. **Bản ghi `G4-NC-1109`**: Gộp liên tiếp **8 bài toán** từ Câu 10 đến Câu 17 thành một khối văn bản 1.243 ký tự:
     - Câu 10: Cho $n \in \mathbb{N}$, $n + 1$ và $n + 7$ là số nguyên tố $\to$ Tìm $n$.
     - Câu 11: Cho $y \in \mathbb{N}$, $y - 1$ và $y + 3$ là số nguyên tố $\to$ Tìm $y$.
     - Câu 12: Cho $k \in \mathbb{N}$, $k + 5$ và $k + 7$ là số nguyên tố $\to$ Tìm $k$ nhỏ nhất.
     - Câu 13: Cho $x \in \mathbb{N}$, $x + 2$ và $x + 10$ là số nguyên tố $\to$ Tìm $x$.
     - Câu 14: Cho $a$ lẻ, $a + 2$ và $a + 6$ là số nguyên tố $\to$ Tìm $a$.
     - Câu 15: Cho $n > 0$, $n + 3$ và $n + 9$ là số nguyên tố $\to$ Tìm $n$.
     - Câu 16: Cho $m \in \mathbb{N}$, $m + 1, m + 3, m + 7$ là số nguyên tố $\to$ Tìm $m$.
     - Câu 17: Cho $p \in \mathbb{N}$, $p + 1, p + 5, p + 7$ là số nguyên tố $\to$ Tìm $p$.
- **Giải pháp xử lý**: Tách 2 bản ghi lỗi này thành 10 câu hỏi độc lập (từ `G4-NC-1108` đến `G4-NC-1117`), bổ sung đầy đủ lời giải chi tiết và đáp án chuẩn cho từng câu.

---

### 3.4. Danh mục 3 câu hỏi bị nuốt vào trường Lời giải (`G4-NC-1143`, `1187`, `1214`)
- **Tệp nguồn**: `grade4_special.js`
- **Mức độ nghiêm trọng**: **CRITICAL**
- **Chi tiết từng ca**:
  1. **Mã `G4-NC-1143` (Chuyên đề Gà & Thỏ)**:
     - **Câu chính (Bài 16)**: Isabelle thi 20 câu (+8 đúng, -4 sai, 100 điểm) $\to$ Đáp án đúng: **15 câu**.
     - **Câu bị nuốt chửng (Bài 17*)**: *"Một giáo viên thể dục đã mua 4 quả bóng rổ giống hệt nhau và 5 quả bóng chuyền giống hệt nhau với giá 230 đô la. Mỗi quả bóng rổ đắt hơn một quả bóng chuyền 8 đô la. Hãy tìm giá của mỗi quả bóng rổ và mỗi quả bóng chuyền."*
     - *Giải pháp*: Cắt Bài 17* ra thành câu mới `G4-NC-1143B`, đáp án: Bóng rổ $30, bóng chuyền $22.
  2. **Mã `G4-NC-1187` (Chuyên đề Chuyển động ngược chiều)**:
     - **Câu chính (Bài 5)**: Mark (12 km/h), Nick (15 km/h) gặp nhau cách trung điểm 3 km $\to$ Đáp án đúng: **54 km**.
     - **Câu bị nuốt chửng (Bài 6*)**: *"Một chiếc xe tải đi từ Thị trấn A đến Thị trấn B với tốc độ 60 km/h. Cùng lúc đó, một chiếc ô tô đi từ Thị trấn B đến Thị trấn A với tốc độ 80 km/h. Chúng gặp nhau tại điểm cách trung điểm của hai thị trấn 30 km. Tìm khoảng cách giữa hai thị trấn."*
     - *Giải pháp*: Cắt Bài 6* ra thành câu mới `G4-NC-1187B`, đáp án: **420 km**.
  3. **Mã `G4-NC-1214` (Chuyên đề Chuyển động cùng chiều)**:
     - **Câu chính (Bài 16)**: Xe A (54 km/h), B (45 km/h) cách nhau 36 km $\to$ Đáp án đúng: **216 km**.
     - **Câu bị nuốt chửng (Bài 17*)**: *"Lúc 6 giờ, xe B rời bến. Đến 9 giờ, xe A rời cùng bến đó, đi cùng chiều và đuổi kịp xe B lúc 15 giờ. Biết vận tốc xe A lớn hơn vận tốc xe B là 15 km/h. Tính vận tốc mỗi xe."*
     - *Giải pháp*: Cắt Bài 17* ra thành câu mới `G4-NC-1214B`, đáp án: Xe B: 30 km/h, Xe A: 45 km/h.

---

### 3.5. Hiện trạng 338 câu hỏi bị ẩn do thiếu đáp số số hóa
- **Tệp đối chiếu**: `grade4_special_orig.js` (520 câu) vs `grade4_special.js` (182 câu).
- **Phân tích nguyên nhân**: Script làm sạch dữ liệu trước đây đã lọc bỏ toàn bộ các câu hỏi có trường `answer` là `"Xem lời giải chi tiết"` hoặc lỗi font chữ `"Xem lá» i giáº£i"`.
- **Hậu quả**: Khiến 13 chuyên đề quan trọng (Dãy số cách đều, Hình học tổ hợp, Phép toán mới, Thừa thiếu, Số dư, Chữ số tận cùng...) và 10 đề Math IQ bị biến mất hoàn toàn khỏi hệ thống thi.
- **Kế hoạch phục hồi**: Được xây dựng chi tiết tại Kế hoạch Chỉnh sửa Triệt để (Phần IV).

---

## IV. DANH MỤC CHI TIẾT 2: KỲ THI TIMO KHỐI 1 - 5 (`timo_data.js`)

### 4.1. Lỗi sai đáp án Chu vi TIMO G4 Đề 5 Câu 17
- **Mã câu hỏi (ID)**: `4-Vong loai - De so 5-17`
- **Tệp nguồn**: `timo_data.js`, dòng 5096 - 5116
- **Mức độ nghiêm trọng**: **CRITICAL / BLOCKER**
- **Đề bài song ngữ**:
  > *"The area of a rectangle is 20. The length is 5 times as the width. Find its perimeter.*  
  > *Diện tích của một hình chữ nhật là 20. Chiều dài gấp 5 lần chiều rộng. Tính chu vi của hình chữ nhật đó."*
- **Các phương án lựa chọn**: `["A. 36", "B. 48", "C. 12", "D. 24"]`
- **Dữ liệu hiện tại trong hệ thống**:
  - `answer`: `"10"`  **(SAI NGHIÊM TRỌNG)**
  - `explanation`: *"Trong đó, chỉ có cặp số (10, 2) có số lớn gấp 5 lần số bé. Vậy chiều dài hình chữ nhật là 10 và chiều rộng hình chữ nhật là 2. Chu vi của hình chữ nhật là: (10 + 2) x 2 = 24. Đáp số: D."*
- **Nguyên nhân**: Lấy nhầm giá trị của Chiều dài (10) gán vào trường `answer`, trong khi đề hỏi Chu vi (24) và phương án đúng là D.
- **Giá trị chuẩn sửa đổi**:
  - `answer`: `"D"`
  - `acceptedAnswers`: `["D", "d", "24"]`

---

### 4.2. Danh mục 115 câu hỏi đề bài yêu cầu xem hình nhưng `image: null`
- **Hiện trạng kho TIMO**: Có 879 bản ghi nhưng hiện chỉ có **16 câu có ảnh**. Có đúng **115 câu hỏi** trong đề bài yêu cầu học sinh xem hình (*"in the figure below", "as shown", "hình dưới đây", "nhìn hình"...*) nhưng `image: null`.
- **Phân bổ theo Khối lớp**:
  - Khối 1: 19 câu
  - Khối 2: 27 câu
  - Khối 3: 25 câu
  - Khối 4: 24 câu
  - Khối 5: 20 câu
- **Phân bổ theo 7 nhóm chủ đề toán học cần vẽ hình**:
  1. **Hình học phẳng & Ghép hình / Diện tích** (55 câu): Tính diện tích phần tô đậm, đếm số hình vuông, hình chữ nhật trong lưới.
  2. **Hình học không gian 3D & Khối lập phương** (15 câu): Đếm khối lập phương nhìn từ các hướng trước, trên, phải.
  3. **Đoạn thẳng & Điểm & Cắt ghép** (13 câu): Đếm số đoạn thẳng, chia đoạn thẳng.
  4. **Quy luật hình vẽ & Dãy hình** (8 câu): Tìm hình thứ N trong chuỗi tuần hoàn.
  5. **Đếm hình tam giác** (6 câu): Đếm tam giác lồng nhau trong ngôi sao/đa giác.
  6. **Đường đi ngắn nhất & Mạng lưới giao thông** (5 câu): Số cách đi từ A đến B trên lưới ô vuông.
  7. **Bảng số ma phương & Tháp số** (13 câu).

#### Danh sách trích dẫn các câu tiêu biểu cần bổ sung hình vẽ:
| STT | ID Câu Hỏi | Khối | Vòng Thi | Số Câu | Chủ Đề | Trích Dẫn Đề Bài Yêu Cầu Xem Hình |
|:---:|:---|:---:|:---|:---:|:---|:---|
| 1 | `4-Vong loai - De so 0-4` | G4 | Vong loai - De so 0 | 4 | Logical thinking | According to the pattern below, how many squares are there in the first 50 figures? Dựa vào quy luật dưới đây, có bao nhiêu hình vuông trong 50 hình đầu tiên? |
| 2 | `4-Vong loai - De so 6-17` | G4 | Vong loai - De so 6 | 17 | Geometry | A small square with a perimeter of 16 cm is combined with two rectangles to get a bigger square with a perimeter of 24 cm. The figure is given as below. |
| 3 | `4-Vong loai - De so 0-19` | G4 | Vong loai - De so 0 | 19 | Geometry | At least how many square faces can be seen if viewing the figure below from the right? |
| 4 | `4-Vong loai - De so 0-20` | G4 | Vong loai - De so 0 | 20 | Geometry | Jerry draws and paints the gate in his grid paper as the figure below. Find the area of the painted area in cm2... |
| 5 | `4-Vong loai - De so 4-20` | G4 | Vong loai - De so 4 | 20 | Geometry | Teddy draws and paints the boat in his grid paper as the figure below. Find the area of the painted area in cm2... |
| 6 | `1-Vong loai - De so 1-17` | G1 | Vong loai - De so 1 | 17 | Geometry | How many squares are there in the figure below? Có bao nhiêu hình vuông trong hình dưới đây? |
| 7 | `2-Vong loai - De so 3-18` | G2 | Vong loai - De so 3 | 18 | Geometry | At least how many unit cubes are there in the figure below? Có ít nhất bao nhiêu khối lập phương đơn vị trong hình dưới đây? |
| 8 | `3-Vong quoc gia - De so 1-16` | G3 | Vong quoc gia - De so 1 | 16 | Geometry | How many triangles are there in the figure below? Có bao nhiêu hình tam giác trong hình vẽ dưới đây? |
| 9 | `5-Vong loai - De so 2-19` | G5 | Vong loai - De so 2 | 19 | Geometry | Find the shortest distance from point A to point B along the grid lines shown in the figure below... |

*(Tệp dữ liệu định danh đầy đủ 115 câu: `timo_115_missing_images.json`).*

---

### 4.3. Hiện tượng trùng lặp mã ID (251 bản ghi) và phân tích bản chất dữ liệu
- **Thực trạng**: Kho TIMO lưu trữ 879 bản ghi, trong đó hàm đếm ID duy nhất ghi nhận **628 mã ID phân biệt** (chênh lệch 251 bản ghi trùng ID).
  - Phân bổ theo khối: Khối 1: 156 lưu trữ / 108 ID (48 trùng); Khối 2: 179 / 129 ID (50 trùng); Khối 3: 176 / 131 ID (45 trùng); Khối 4: 189 / 130 ID (59 trùng); Khối 5: 179 / 130 ID (49 trùng).
- **Phân tích bản chất kỹ thuật (Phát hiện thẩm định quan trọng)**:
  - **Trùng lặp nội dung thực sự (True Text Duplicates)**: Chỉ có **từ 19 đến 28 câu hỏi** bị nhân bản trùng cả nội dung đề bài trong cùng một đề thi. *Ví dụ*: Trong vòng thi `Vong loai - De so 0` Khối 4, câu hỏi `4-Vong loai - De so 0-19` xuất hiện tới 4 lần tại các vị trí index 12, 43, 61, 73 với đề bài hoàn toàn giống nhau. Đây là rác trùng lặp thực sự cần loại bỏ.
  - **Xung đột mã định danh câu hỏi độc lập (ID Collisions across Exams)**: Khoảng **232 câu hỏi** còn lại là các câu hỏi toán học độc lập, hoàn toàn khác nhau về đề bài và đáp số, nhưng bị gán trùng mã ID do quy tắc sinh ID tự động khi nhập liệu từ nhiều năm thi/đề thi khác nhau.
    - *Chứng cứ thực nghiệm*: Tại Khối 1, mã `1-Vong loai - De so 7-22`:
      - Bản ghi 1: Bài toán tìm số lẻ có 2 chữ số khác nhau từ các chữ số 1, 2, 4, 6, 7 (Đáp án: B / 6 số).
      - Bản ghi 2: Bài toán tìm số chẵn có 2 chữ số khác nhau từ các chữ số 2, 3, 6, 7, 8 (Đáp án: B / 8 số).
    - Tại Khối 3, mã `3-Vong loai - De so 4-12`: Bản ghi 1 là bài toán John & Ryan (16 xe đồ chơi); Bản ghi 2 là bài toán Peter & John (20 viên bi); Bản ghi 3 là bài toán Tom & Jerry (16 hộp sữa).
- **Chiến lược khắc phục bắt buộc**:
  - **NGHIÊM CẤM** xóa bỏ bản ghi dựa thuần túy trên mã ID (`q.id`), vì hành động này sẽ phá hủy vĩnh viễn hơn 230 câu hỏi thi Olympic quốc tế có giá trị sư phạm thực thụ của học sinh.
  - **Quy trình chuẩn hóa 2 bước**:
    1. *Khử trùng lặp thực tế*: Chỉ loại bỏ các câu hỏi trùng cả vòng thi và nội dung đề bài (khử ~19 đến 28 bản ghi rác).
    2. *Tái định danh phân nhánh (Re-indexing / Disambiguation)*: Đối với các câu hỏi trùng ID nhưng khác nội dung, thực hiện chuẩn hóa lại mã ID kèm hậu tố phân nhánh (ví dụ `-A`, `-B` hoặc mã hóa theo năm thi/vòng thi chuẩn) để bảo toàn 100% kho đề gồm ~851 đến 860 câu hỏi chất lượng cao.

---

### 4.4. Phân mảnh 6 cặp vòng thi do không đồng nhất dấu tiếng Việt
Hệ thống hiển thị danh sách vòng thi bị xé nhỏ thành các cặp phân mảnh:
1. `Vong loai - De so 6` (6 câu) vs `Vòng loại - Đề số 6` (1 câu).
2. `Vong quoc gia - De so 1` (6 câu) vs `Vòng quốc gia - Đề số 1` (5 câu) $\to$ Đề bị xé đôi.
3. `Vong quoc gia - De so 3` (4 câu) vs `Vòng quốc gia - Đề số 3` (4 câu) $\to$ Đề bị xé đôi.
4. `Vong quoc gia - De so 4` (8 câu) vs `Vòng quốc gia - Đề số 4` (6 câu).
5. `Vong quoc gia - De so 5` (5 câu) vs `Vòng quốc gia - Đề số 5` (2 câu).
6. `Vong quoc gia - De so 6` (8 câu) vs `Vòng quốc gia - Đề số 6` (2 câu).

---

### 4.5. Tệp phế tích `timo_database.json`
- Kích thước 203 bytes, chứa ký tự đặc biệt **UTF-8 BOM (`\uFEFF`)** ở đầu tệp.
- Nội dung bên trong hoàn toàn rỗng: `{ "grade4": {}, "grade2": {}, "grade3": {}, "grade1": {}, "grade5": {} }`.
- Web app không sử dụng tệp này. Tệp này là rác tồn đọng cần được làm sạch hoặc xóa bỏ để tránh nhầm lẫn.

---

## V. DANH MỤC CHI TIẾT 3: KỲ THI KANGAROO IKMC KHỐI 1 - 5 (`kangaroo_data.js`)

### 5.1. Lỗi nuốt đề bài vào Phương án A (50 câu, đặc biệt G2 Đề 1)
- **Tệp nguồn**: `kangaroo_data.js`
- **Mức độ nghiêm trọng**: **HIGH**
- **Nguyên nhân**: Regex bóc tách phương án cắt nhầm dòng cuối của đề bài vào chuỗi `A. ...`.
- **Điểm nóng**: Vòng thi **IKMC Lớp 2 - Đề Số 01** có tới **24 câu bị phá hủy cấu trúc hoàn toàn**:
  - `IKMC-G2-D01-Q01`: Đề bài: *"Các số dương liên tiếp được đặt vào các ô của một bảng như dưới đây. Số bị"* $\to$ Option A: *"A. thiếu trong ô ở giữa là số nào?"* (Lời giải đi đếm đồng xu!).
  - `IKMC-G2-D01-Q03`: Đề bài: *"Sharon có 10 con búp bê. Bạn ấy cho Betty 1 búp bê. Bây giờ bạn ấy còn mấy"* $\to$ Option A: *"A. con búp bê?"* (Lời giải: 4 + 5 = 9!).
  - `IKMC-G2-D01-Q19`: Đề bài: *"...she noticed that she did not have enough flowers to"* $\to$ Option A: *"A. make another bouquet. How many flowers did she have left?"* (Lời giải: Đếm chân chó!).
  - `IKMC-G2-D01-Q20`: Đề bài: *"...in order to have the same amount"* $\to$ Option A: *"A. of water in both?"* (Lời giải: Phép nhân 2x4 = 8!).

---

### 5.2. Danh mục 5 câu hỏi có đề bài hoàn toàn rỗng (`text: ""`)
1. `IKMC-G2-D01-Q02`: `text: ""` | Option A: `"6 + 2 = ?"` (Lời giải: Bánh sinh nhật và nến).
2. `IKMC-G2-D01-Q05`: `text: ""` | Option A: `"Tháng nào thi thoảng có 29 ngày?"`.
3. `IKMC-G2-D01-Q07`: `text: ""` | Option A: `"Tổng các chữ số của số 2011 là bao nhiêu?"` (Lời giải: Đếm 4 chân bàn).
4. `IKMC-G2-D04-Q07`: `text: ""` | Options: `["A", "B", "C", "D", "E"]` (Thiếu toàn bộ mô tả về bạn Barb).
5. `IKMC-G2-D05-Q08`: `text: ""` | Options: `["A", "B", "C", "D", "E"]` (Thiếu toàn bộ mô tả về bạn Barb).

---

### 5.3. Xung đột trùng mã ID & tráo đổi đề - lời giải
1. **Lỗi tráo đổi giữa bài Ruồi/Nhện và Bánh xe ô tô (`IKMC-G5-D02-Q01`)**:
   - Index 31: Đề bài Ruồi & Nhện (đáp số đúng là 4 con mèo). Tuy nhiên options lại là số thực: `["A. 1.8", "B. 18", "C. 180", ...]` và lời giải tính quãng đường xe chạy $1,8\ \text{m} \times 10.000 = 18\ \text{km}$.
   - Index 37 & 38: Câu bánh xe ô tô lại bị băm nát thành 2 bản ghi thừa mang cùng ID `IKMC-G5-D02-Q01`.
2. **Lỗi tráo đổi bài Chọn số và Xâu chuỗi hạt (`IKMC-G5-D01-Q08`)**:
   - Mang cùng ID tại index 7 và 8. Index 7 đề bài chọn 3 số có tổng bằng 7 nhưng lời giải và ảnh lại là quan sát chuỗi hạt cườm.
3. **Lỗi xé đôi câu hỏi (`IKMC-G2-D04-Q10`)**:
   - Index 81 và 82 xé đôi một câu hỏi: "Tôi là một số..." và "Nếu bạn cộng tôi với 30...".

---

### 5.4. Lỗi ký tự đầu bị cắt cụt & ký tự rác OCR
- **4 câu bị cắt cụt chữ đầu**:
  - `IKMC-G5-D01-Q22`: *"n the figure on the right..."* (Mất chữ **I** trong "In").
  - `IKMC-G5-D02-Q09`: *"eter and Nick are both working..."* (Mất chữ **P** trong "Peter").
  - `IKMC-G5-D02-Q20`: *"afael has three squares..."* (Mất chữ **R** trong "Rafael").
  - `IKMC-G2-D06-Q08`: *"thăng bằng. Cần thêm bao nhiêu con vịt..."* (Mất vế đầu câu).
- **Ký tự rác bullet ``**: Xuất hiện ở 5 câu: `IKMC-G4-D09-Q06`, `IKMC-G4-D09-Q23`, `IKMC-G3-D04-Q06`, `IKMC-G3-D04-Q23`, `IKMC-G1-D01-Q23`.
- **Dính chữ OCR**: *"Markosate ăn nhiều hơn Fanis"* (Markos ate), *"Johnate ăn nhiều hơn Vasilis"* (John ate).

---

### 5.5. 3 câu hỏi Kangaroo thiếu ảnh minh họa
1. `IKMC-G4-D02-Q18`: *"Hai hình nào trong các hình ở dưới có thể được dùng để che phần trống trong hình vuông này?"* $\to$ `image: null`.
2. `IKMC-G5-D02-Q04`: *"There are 10 islands and 12 bridges, as depicted in the figure... What is the smallest number of bridges that must be closed..."* $\to$ `image: null`.
3. `IKMC-G5-D05-Q09`: *"Harry participated in a broom flight contest... The times when Harry passed the starting point are shown in the table..."* $\to$ `image: null` (Thiếu bảng dữ liệu).

---

## VI. DANH MỤC CHI TIẾT 4: TOÁN ARCHIMEDES KHỐI 1 - 5 (`archimedes_math_data.js`)

### 6.1. Lỗi nhân bản trùng lặp 3 lần liên tiếp (1.680 câu trùng rác)
- **Tệp nguồn**: `archimedes_math_data.js`
- **Mức độ nghiêm trọng**: **CRITICAL**
- **Thống kê chi tiết**:
  - Khối 1: 545 bản ghi lưu trữ $\to$ **330 câu trùng lặp**, chỉ có 215 câu duy nhất.
  - Khối 2: 535 bản ghi lưu trữ $\to$ **340 câu trùng lặp**, chỉ có 195 câu duy nhất.
  - Khối 3: 533 bản ghi lưu trữ $\to$ **342 câu trùng lặp**, chỉ có 191 câu duy nhất.
  - Khối 4: 594 bản ghi lưu trữ $\to$ **326 câu trùng lặp**, chỉ có 268 câu duy nhất.
  - Khối 5: 533 bản ghi lưu trữ $\to$ **342 câu trùng lặp**, chỉ có 191 câu duy nhất.
- **Tổng số câu trùng lặp rác**: **1.680 câu** (chiếm **61,3%** dung lượng tệp).
- **Hậu quả**: Khi học sinh làm đề kiểm tra một tiết học, có tới 3 đến 5 câu xuất hiện giống hệt nhau liên tiếp 3 lần trong cùng một bài làm!

---

### 6.2. Lỗi ghi đè runtime làm mất 29 tuần Lớp 4 (`archimedes_g4_real.js`)
- **Tệp nguồn**: `archimedes_g4_real.js`, dòng 865 - 867:
  ```javascript
  if (typeof ARCHIMEDES_MATH_DB !== 'undefined') {
    ARCHIMEDES_MATH_DB.grade4 = ARCHIMEDES_G4_REAL;
  }
  ```
- **Hậu quả**: Tệp `archimedes_g4_real.js` chỉ mới số hóa được **64 câu hỏi** thuộc **6 tuần** (Tuần 1 đến Tuần 6). Khi nạp vào `index.html`, lệnh này ghi đè toàn bộ mảng `grade4` (594 câu của 35 tuần) bằng 64 câu của 6 tuần. Học sinh chọn Lớp 4 sẽ bị **mất hoàn toàn 29 tuần** (Tuần 7 đến Tuần 35).

---

### 6.3. Vấn đề 618 câu hỏi tự sinh theo mẫu chung (Generic Prompts)
Trong `archimedes_math_data.js`:
- Khối 4 có **309 câu hỏi** có tiền tố `[Tuần X - Tiết Y] Trọng tâm: ...`
- Khối 5 có **309 câu hỏi** có tiền tố `[Tuần X - Tiết Y] Trọng tâm: ...`
Đây là các câu hỏi mẫu tự sinh bám theo tên bài học trong mục lục, chưa phản ánh đúng câu hỏi bài tập rèn luyện thực tế của Archimedes Academy.

---

## VII. DANH MỤC CHI TIẾT 5: TIẾNG VIỆT ARCHIMEDES KHỐI 1 - 5 (`tieng_viet_data.js`)

### 7.1. Định vị và phân loại 68 câu hỏi chứa phương án vô nghĩa (Placeholder)
- **Tệp nguồn**: `tieng_viet_data.js`
- **Mức độ nghiêm trọng**: **HIGH**
- **Quy mô định vị**: Có chính xác **68 câu hỏi** chứa cụm từ `"vô nghĩa"` trong phương án trả lời:
  - **Khối 1**: **33 câu hỏi** (Các câu có mã dạng `TV-G1-W{3..35}-T1-1`, tức Câu số 1 của Tiết 1 từ Tuần 3 đến Tuần 35).
  - **Khối 3**: **35 câu hỏi** (Các câu có mã dạng `TV-G3-W{1..35}-T3-1`, tức Câu số 1 của Tiết 3 từ Tuần 1 đến Tuần 35).
  - **Khối 2, 4, 5**: **0 câu**.

#### Các dạng phương án placeholder và synthetic filler:
1. `"D. Dãy âm vô nghĩa"` (23 câu Khối 1).
2. `"A. Dãy âm vô nghĩa"` (10 câu Khối 1).
3. `"B. Dãy từ vô nghĩa, không liên quan đến bài học"` (28 câu Khối 3).
4. `"A. Dãy từ vô nghĩa, không liên quan đến bài học"` (7 câu Khối 3).
5. Các phương án kèm theo: *"Tiếng không có trong từ điển tiếng Việt"*, *"Tiếng viết sai lỗi chính tả"*, *"Các thuật ngữ kinh tế phức tạp ngoài chương trình"*, *"Từ viết sai chính tả nặng"*.

---

### 7.2. Mâu thuẫn logic Lời giải - Đáp án ở các câu placeholder
Trong toàn bộ 68 câu hỏi trên, phần `explanation` bị gán cứng chuỗi văn bản:
> *"Tiếng ở đáp án A thể hiện chuẩn xác bài học..."* hoặc *"Các từ ngữ trong đáp án A bám sát mục tiêu..."*

Tuy nhiên, trong mảng `options`, phương án đúng thực tế bị hoán vị sang **B, C hoặc D**, trong khi lời giải **vẫn một mực khẳng định đáp án A**. Điều này khiến học sinh và phụ huynh khi xem phần giải thích sẽ thấy đáp án đúng và lời giải đối kháng nhau hoàn toàn, phá vỡ tính sư phạm.

---

## VIII. DANH MỤC CHI TIẾT 6: KỲ THI OLYMPIC FMO, ASMO & TOÁN TUỔI THƠ 2

### 8.1. Lỗi bộ lọc khối lớp FMO trong `index.html`
- **Vị trí**: `index.html`, dòng 1310 - 1313:
  ```javascript
  } else if (e === 'FMO') {
    if (typeof FMO_DATA === 'undefined') return [];
    const rounds = new Set();
    FMO_DATA.forEach(q => { if (q.round) rounds.add(q.round); });
    return Array.from(rounds);
  }
  ```
- **Hậu quả**: Hàm `getAvailableRounds()` không kiểm tra điều kiện khối lớp (`grade === 4`). Toàn bộ 42 câu hỏi FMO là đề thi Lớp 4 nhưng khi học sinh chọn **Lớp 1, Lớp 2, Lớp 3 hoặc Lớp 5**, kỳ thi FMO vẫn hiển thị và mở đề thi thử Lớp 4 cho học sinh tiểu học các khối dưới!

---

### 8.2. Tình trạng kỳ thi ảo ASMO (0 câu hỏi trong DB)
- **Hiện trạng trên giao diện**: Từ khóa `ASMO` xuất hiện **14 lần** trên `index.html` (đại diện cho 11 vị trí chức năng: banner header, danh mục menu bộ đề, checkbox phân quyền admin, cấu hình tài khoản học sinh).
- **Hiện trạng trong cơ sở dữ liệu**:
  - Không tồn tại tệp `asmo_data.js`.
  - Tệp `extra_exams.js` có 11 câu hỏi nhưng 100% là `exam: "Kangaroo"`. Số câu hỏi có `exam: "ASMO"` là **0**.
  - Hàm `getAvailableRounds(grade, 'ASMO')` luôn trả về mảng rỗng `[]`.
- **Hành vi lỗi**: Học sinh chọn ASMO sẽ không có vòng thi thật, nếu bấm bắt đầu thi thì hệ thống gọi hàm sinh ngẫu nhiên tạo ra các câu hỏi giả định (chỉ Lớp 4 có bài xúc xắc/ốc sên, các khối khác không hoạt động chuẩn).

---

### 8.3. Kiểm toán Tạp chí Toán Tuổi Thơ 2 (`toan_tuoi_tho_data.js`)
Tệp chứa thông tin liên kết **60 số báo PDF Google Drive** (từ số 146 đến số 280), phát hiện 4 nhóm lỗi dữ liệu:
1. **1 bản ghi lỗi font Unicode**: Số 280 tiêu đề ghi `"Tạp ch Toán Tuổi Thơ 2 số 280..."` do lỗi ký tự `\uFFFD`.
2. **11 bản ghi cụt năm xuất bản**: Tiêu đề kết thúc bằng cụm `"năm 202"` (bị mất chữ số cuối).
3. **6 bản ghi gán sai năm 2025**: Các số báo cũ xuất bản cách đây nhiều năm nhưng trường `year` bị gán cứng là `2025`.
4. **19 bản ghi bị khuyết trường tháng**: Trường `month` bị để chuỗi rỗng `""`.

---

## IX. DANH MỤC CHI TIẾT 7: TÀI NGUYÊN HÌNH ẢNH & ĐỘNG CƠ CHẤM ĐIỂM

### 9.1. Kiểm toán 638 tệp ảnh trên đĩa và 592 liên kết trong DB
- **Tài nguyên đĩa cứng (`images/`)**: Có tổng cộng **638 tệp** (628 PNG, 10 SVG).
  - `images/ikmc/`: 539 tệp
  - `images/arch_find/`: 34 tệp
  - `images/arch_weeks/`: 10 tệp
  - `images/timo/`: 4 tệp
  - `images/` (root): 51 tệp
- **Tính toàn vẹn liên kết**: Toàn bộ **592 liên kết ảnh** trong cơ sở dữ liệu đều tồn tại hợp lệ trên đĩa cứng (**0 liên kết bị lỗi 404/broken**).
- **Vấn đề cốt lõi**: Có **122 câu hỏi đề bài yêu cầu xem hình nhưng `image: null`** (trong đó **115 câu thuộc TIMO**, 3 câu thuộc Kangaroo, 2 câu Archimedes Math, 1 câu Toán 365, 1 câu Tiếng Việt).

---

### 9.2. Lỗ hổng đối chiếu trắc nghiệm trong hàm `isAnswerCorrect`
- **Vị trí**: `index.html`, dòng 3763 - 3795:
  Khi học sinh bấm chọn phương án A, B, C, D hoặc E, hệ thống lưu `userAns = 'B'`.
  Hàm `isAnswerCorrect(userAns, q)` chỉ so sánh chuỗi `userAns` với `q.answer`. Nếu `q.answer` được người soạn đề lưu dạng `"(B) 87"`, `"D. 24"`, hoặc `"Đáp án B"`, hàm này trả về `false`.
- **Hậu quả kép**:
  - Gây trượt 100% đối với 15 câu Giá trị Trung bình G4 (`(B) 87`).
  - Gây trượt 100% đối với câu TIMO G4 Đề 5 Q17 (`answer: "10"` vs lựa chọn D).

---

### 9.3. Lỗi hiển thị trắc nghiệm khi thiếu cờ `type: "mc"`
- **Vị trí**: `index.html`, dòng 3556:
  ```javascript
  ${q.type === 'mc' ? `...Hiển thị nút chọn A, B, C, D...` : `...Hiển thị ô nhập text (input)...`}
  ```
- Nếu một câu hỏi có mảng `options` đầy đủ nhưng người soạn đề quên không đặt thuộc tính `type: "mc"`, giao diện sẽ hiển thị một ô nhập text thay vì các nút bấm trắc nghiệm, buộc học sinh phải tự gõ tay chữ cái phương án vào ô.

---
*Bản quyền tài liệu thuộc về Hội đồng Thẩm định & Kiểm định Chất lượng Đề thi — Hệ thống Luyện thi Thầy Nguyễn Đình Chinh.*
