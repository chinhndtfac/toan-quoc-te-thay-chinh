# KẾ HOẠCH VÀ GIẢI PHÁP CHỈNH SỬA TOÀN DIỆN TRIỆT ĐỂ KHO ĐỀ THI
## Đảm Bảo Chất Lượng Hoàn Hảo Tuyệt Đối Cho Học Sinh Toàn Tỉnh Dự Thi
**Cơ quan ban hành**: Hội đồng Thẩm định & Kiểm định Chất lượng Đề thi (Quality Audit Council)  
**Ngày ban hành**: 05/11/2026  
**Phiên bản**: 2.0 (Master Remediation Roadmap)  
**Căn cứ pháp lý & kỹ thuật**: Kết quả kiểm toán độc lập tại `DANH_MUC_LOI_KIEM_TOAN_CHI_TIET.md` và mã kiểm chứng tự động `verify_audit_catalog.js`.

---

## MỤC LỤC
1. [MỤC TIÊU VÀ NGUYÊN TẮC CHỈNH SỬA HỆ THỐNG](#i-mục-tiêu-và-nguyên-tắc-chỉnh-sửa-hệ-thống)
2. [LỘ TRÌNH THỰC HIỆN 5 GIAI ĐOẠN (5-PHASE ROADMAP)](#ii-lộ-trình-thực-hiện-5-giai-đoạn-5-phase-roadmap)
3. [GIAI ĐOẠN 1: TỰ ĐỘNG HÓA CHUẨN HÓA DỮ LIỆU & VÁ ENGINE BẰNG SCRIPT (PHASE 1)](#iii-giai-đoạn-1-tự-động-hóa-chuẩn-hóa-dữ-liệu--vá-engine-bằng-script-phase-1)
   - [3.1. Kịch bản khử trùng lặp và làm sạch Archimedes Math (`archimedes_math_data.js`)](#31-kịch-bản-khử-trùng-lặp-và-làm-sạch-archimedes-math-archimedes_math_datajs)
   - [3.2. Kịch bản khử trùng lặp và đồng nhất vòng thi TIMO (`timo_data.js`)](#32-kịch-bản-khử-trùng-lặp-và-đồng-nhất-vòng-thi-timo-timo_datajs)
   - [3.3. Kịch bản sửa 43 câu giả thiết tạm & 15 câu định dạng `(B) 87` (`grade4_special.js`)](#33-kịch-bản-sửa-43-câu-giả-thiết-tạm--15-câu-định-dạng-b-87-grade4_specialjs)
   - [3.4. Kịch bản chuẩn hóa siêu dữ liệu Tạp chí Toán Tuổi Thơ 2 (`toan_tuoi_tho_data.js`)](#34-kịch-bản-chuẩn-hóa-siêu-dữ-liệu-tạp-chí-toán-tuổi-thơ-2-toan_tuoi_tho_datajs)
   - [3.5. Kịch bản vá lỗi Export biến toàn cục trong `extra_exams.js`](#35-kịch-bản-vá-lỗi-export-biến-toàn-cục-trong-extra_examsjs)
   - [3.6. Kịch bản vá lỗi bộ lọc FMO và động cơ chấm điểm trắc nghiệm trong `index.html`](#36-kịch-bản-vá-lỗi-bộ-lọc-fmo-và-động-cơ-chấm-điểm-trắc-nghiệm-trong-indexhtml)
4. [GIAI ĐOẠN 2: BIÊN TẬP NỘI DUNG & PHỤC HỒI CẤU TRÚC ĐỀ THI (PHASE 2)](#iv-giai-đoạn-2-biên-tập-nội-dung--phục-hồi-cấu-trúc-đề-thi-phase-2)
   - [4.1. Hướng dẫn biên tập thay thế 68 câu hỏi Tiếng Việt placeholder](#41-hướng-dẫn-biên-tập-thay-thế-68-câu-hỏi-tiếng-việt-placeholder)
   - [4.2. Kế hoạch bóc tách 10 câu chuyên đề Số nguyên tố (`G4-NC-1108`, `1109`)](#42-kế-hoạch-bóc-tách-10-câu-chuyên-đề-số-nguyên-tố-g4-nc-1108-1109)
   - [4.3. Kế hoạch phục hồi 3 câu hỏi bị nuốt vào trường Lời giải (`1143`, `1187`, `1214`)](#43-kế-hoạch-phục-hồi-3-câu-hỏi-bị-nuốt-vào-trường-lời-giải-1143-1187-1214)
   - [4.4. Phục hồi 24 câu hỏi Kangaroo Lớp 2 Đề 1 và 5 câu đề bài rỗng](#44-phục-hồi-24-câu-hỏi-kangaroo-lớp-2-đề-1-và-5-câu-đề-bài-rỗng)
5. [GIAI ĐOẠN 3: BỔ SUNG TÀI NGUYÊN ĐỒ HỌA & HÌNH ẢNH MINH HỌA (PHASE 3)](#v-giai-đoạn-3-bổ-sung-tài-nguyên-đồ-họa--hình-ảnh-minh-họa-phase-3)
   - [5.1. Quy trình xử lý 115 câu hỏi TIMO thiếu ảnh minh họa](#51-quy-trình-xử-lý-115-câu-hỏi-timo-thiếu-ảnh-minh-họa)
   - [5.2. Giải pháp kỹ thuật: Trích xuất ảnh gốc vs Dựng vector SVG tự động](#52-giải-pháp-kỹ-thuật-trích-xuất-ảnh-gốc-vs-dựng-vector-svg-tự-động)
   - [5.3. Bổ sung 3 ảnh minh họa Kangaroo và 2 ảnh Toán Archimedes](#53-bổ-sung-3-ảnh-minh-họa-kangaroo-và-2-ảnh-toán-archimedes)
6. [GIAI ĐOẠN 4: SỐ HÓA HOÀN THIỆN CHƯƠNG TRÌNH & DỮ LIỆU CÒN THIẾU (PHASE 4)](#vi-giai-đoạn-4-số-hóa-hoàn-thiện-chương-trình--dữ-liệu-còn-thiếu-phase-4)
   - [6.1. Phương án số hóa 29 tuần còn thiếu của Toán Archimedes Lớp 4](#61-phương-án-số-hóa-29-tuần-còn-thiếu-của-toán-archimedes-lớp-4)
   - [6.2. Chiến lược xử lý và tích hợp ngân hàng đề thi ASMO chính thức](#62-chiến-lược-xử-lý-và-tích-hợp-ngân-hàng-đề-thi-asmo-chính-thức)
   - [6.3. Kế hoạch giải mã và số hóa 338 câu hỏi Toán Nâng Cao Lớp 4](#63-kế-hoạch-giải-mã-và-số-hóa-338-câu-hỏi-toán-nâng-cao-lớp-4)
7. [GIAI ĐOẠN 5: BỘ KIỂM THỬ HỒI QUY TỰ ĐỘNG & TIÊU CHÍ BÀN GIAO (PHASE 5)](#vii-giai-đoạn-5-bộ-kiểm-thử-hồi-quy-tự-động--tiêu-chí-bàn-giao-phase-5)

---

## I. MỤC TIÊU VÀ NGUYÊN TẮC CHỈNH SỬA HỆ THỐNG

### 1. Mục tiêu cốt lõi
1. **Chất lượng sư phạm hoàn hảo tuyệt đối**: Loại bỏ 100% lỗi sai đáp án, lỗi sai logic toán học, lỗi nuốt câu hỏi, lỗi câu hỏi rác vô nghĩa.
2. **Trải nghiệm chấm thi công bằng, chính xác 100%**: Vá toàn diện hàm so khớp đáp án trắc nghiệm và tự luận; tuyệt đối không để xảy ra hiện tượng học sinh làm đúng nhưng bị chấm sai.
3. **Tính toàn vẹn dữ liệu (Data Integrity)**: Khử sạch 1.931 bản ghi trùng lặp rác; làm sạch cấu trúc vòng thi; liên kết hình ảnh minh họa đầy đủ cho 100% câu hỏi có yêu cầu xem hình.
4. **Sẵn sàng triển khai cho học sinh toàn tỉnh**: Đáp ứng quy mô kỳ thi tuyển chọn, luyện thi học sinh giỏi cấp tỉnh và các kỳ thi toán quốc tế.

### 2. Ba nguyên tắc kỹ thuật bất khả xâm phạm
- **Nguyên tắc 1: Không sửa mã cứng nhắc (Defensive Architecture)**: Sửa từ gốc dữ liệu (data layer) đồng thời lập chốt chặn phòng thủ đa tầng trong động cơ ứng dụng (quiz engine layer).
- **Nguyên tắc 2: Phân tách rõ ràng giữa Script tự động và Biên tập thủ công**: Các lỗi có quy luật cấu trúc rõ ràng (chuẩn hóa đáp án, khử lặp, định dạng chuỗi) phải được xử lý bằng script để đảm bảo tính nhất quán và tốc độ; các lỗi về nội dung văn phong, ngữ pháp, kiến thức môn học phải do hội đồng chuyên môn biên tập cẩn trọng.
- **Nguyên tắc 3: Kiểm thử tự động trước khi triển khai (Zero Regression)**: Mọi thao tác sửa đổi đều phải vượt qua bộ kiểm thử tự động `verify_audit_catalog.js` và kiểm toán độc lập.

---

## II. LỘ TRÌNH THỰC HIỆN 5 GIAI ĐOẠN (5-PHASE ROADMAP)

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                            LỘ TRÌNH THỰC THI 5 GIAI ĐOẠN                    │
├─────────────────┬───────────────────┬───────────────────────────────────────┤
│ Giai đoạn       │ Thời gian         │ Trọng tâm công việc                   │
├─────────────────┼───────────────────┼───────────────────────────────────────┤
│ PHASE 1         │ 24 giờ            │ Sửa lỗi tự động bằng Script:          │
│ Script Fixes    │ (Thực hiện ngay)  │ - Vá động cơ isAnswerCorrect          │
│                 │                   │ - Sửa 43 câu giả thiết tạm & 15 câu B │
│                 │                   │ - Khử 1.680 câu trùng Arch Math       │
│                 │                   │ - Khử 251 câu trùng TIMO & sửa Q17    │
│                 │                   │ - Vá lỗi bộ lọc FMO & export biến     │
├─────────────────┼───────────────────┼───────────────────────────────────────┤
│ PHASE 2         │ 3 - 5 ngày        │ Biên tập nội dung & phục hồi cấu trúc:│
│ Content Work    │                   │ - Biên tập mới 68 câu Tiếng Việt      │
│                 │                   │ - Bóc tách 10 câu Số nguyên tố G4     │
│                 │                   │ - Phục hồi 3 câu nuốt vào lời giải    │
│                 │                   │ - Khôi phục cấu trúc Kangaroo G2 Đề 1 │
├─────────────────┼───────────────────┼───────────────────────────────────────┤
│ PHASE 3         │ 5 - 7 ngày        │ Xử lý tài nguyên đồ họa & hình ảnh:   │
│ Image Assets    │                   │ - Dựng SVG / trích xuất ảnh 115 TIMO  │
│                 │                   │ - Bổ sung 3 ảnh thiếu của Kangaroo    │
├─────────────────┼───────────────────┼───────────────────────────────────────┤
│ PHASE 4         │ 2 - 3 tuần        │ Số hóa bổ sung chương trình:          │
│ Digitization    │                   │ - Số hóa 29 tuần còn lại Archimedes 4 │
│                 │                   │ - Số hóa bộ đề chính thức ASMO        │
│                 │                   │ - Phục hồi 338 câu Toán NC Lớp 4      │
├─────────────────┼───────────────────┼───────────────────────────────────────┤
│ PHASE 5         │ 2 ngày            │ Kiểm định toàn diện & Bàn giao:       │
│ Verification    │                   │ - Chạy kiểm thử hồi quy 100% đề thi   │
│                 │                   │ - Hội đồng nghiệm thu xuất xưởng      │
└─────────────────┴───────────────────┴───────────────────────────────────────┘
```

---

## III. GIAI ĐOẠN 1: TỰ ĐỘNG HÓA CHUẨN HÓA DỮ LIỆU & VÁ ENGINE BẰNG SCRIPT (PHASE 1)

Các tác vụ trong Giai đoạn 1 có thể thực thi ngay lập tức thông qua các script JavaScript chuyên dụng chạy trên nền Node.js.

### 3.1. Kịch bản khử trùng lặp và làm sạch Archimedes Math (`archimedes_math_data.js`)
- **Mục tiêu**: Loại bỏ triệt để **1.680 câu trùng lặp rác** (nhân 3 bản sao), đưa tệp dữ liệu từ 2.740 bản ghi về đúng **1.060 bản ghi duy nhất** (chuẩn hóa các vòng thi từ Tuần 1 đến Tuần 35 cho 5 khối lớp).
- **Mã nguồn giải pháp kỹ thuật (`scripts/clean_archimedes_math.js`)**:
  ```javascript
  const fs = require('fs');
  const path = require('path');

  const filePath = path.join(__dirname, '../archimedes_math_data.js');
  global.window = {};
  const data = require(filePath);
  const archDb = data.ARCHIMEDES_MATH_DB || global.window.ARCHIMEDES_MATH_DB || data;

  const cleanedDb = {};
  let removedCount = 0;

  for (const grade of ['grade1', 'grade2', 'grade3', 'grade4', 'grade5']) {
    const list = archDb[grade] || [];
    const uniqueList = [];
    for (let i = 0; i < list.length; i++) {
      const curr = list[i];
      // Kiểm tra trùng lặp liên tiếp theo ID và nội dung text
      if (i > 0 && curr.id === list[i - 1].id && curr.text === list[i - 1].text) {
        removedCount++;
      } else {
        uniqueList.push(curr);
      }
    }
    cleanedDb[grade] = uniqueList;
    console.log(`[Khối ${grade}] Gốc: ${list.length} -> Sau lọc: ${uniqueList.length}`);
  }

  console.log(`Tổng số bản ghi rác trùng lặp đã loại bỏ: ${removedCount} (Kỳ vọng: 1680)`);

  const outputCode = `// TOÁN ARCHIMEDES KHỐI 1 - 5 (ĐÃ KHỬ TRÙNG LẶP CHUẨN HÓA)\n` +
    `const ARCHIMEDES_MATH_DB = ${JSON.stringify(cleanedDb, null, 2)};\n\n` +
    `if (typeof window !== 'undefined') { window.ARCHIMEDES_MATH_DB = ARCHIMEDES_MATH_DB; }\n` +
    `if (typeof module !== 'undefined') { module.exports = ARCHIMEDES_MATH_DB; }\n`;

  fs.writeFileSync(filePath, outputCode, 'utf8');
  console.log('Đã cập nhật thành công archimedes_math_data.js sạch!');
  ```

---

### 3.2. Kịch bản khử trùng lặp thực tế và tái định danh (Disambiguation & Re-ID) kỳ thi TIMO (`timo_data.js`)
- **Mục tiêu**:
  1. **Bảo tồn kho tri thức Olympic**: Trong 251 bản ghi trùng ID, chỉ có ~19 đến 28 bản ghi là trùng lặp nội dung đề bài thực sự (True Text Duplicates). Khoảng 232 bản ghi còn lại là các câu hỏi thi độc lập khác nhau bị trùng ID do sai sót khi nhập liệu nhiều năm thi. **Nghiêm cấm xóa bản ghi theo ID đơn thuần**.
  2. **Khử trùng lặp nội dung**: Chỉ loại bỏ đúng các câu hỏi trùng lặp hoàn toàn cả vòng thi lẫn đề bài trong cùng một đề thi.
  3. **Tái định danh phân nhánh (Re-indexing / Disambiguation)**: Đối với ~232 câu hỏi khác đề bài nhưng trùng ID, tự động cấp phát mã phân nhánh (ví dụ `${q.id}-B`, `${q.id}-C`) để giữ lại trọn vẹn ~851 đến 860 câu hỏi thi chất lượng cao cho học sinh toàn tỉnh.
  4. **Sửa lỗi câu Chu vi** `4-Vong loai - De so 5-17`: gán `answer: "D"`, `acceptedAnswers: ["D", "d", "24"]`.
  5. **Chuẩn hóa tên vòng thi có dấu tiếng Việt thống nhất**, hàn gắn 6 cặp vòng thi bị chia cắt (ví dụ: gộp `Vong loai - De so 6` và `Vòng loại - Đề số 6` thành `Vòng loại - Đề số 06`).
- **Mã nguồn giải pháp kỹ thuật (`scripts/clean_timo_data.js`)**:
  ```javascript
  const fs = require('fs');
  const path = require('path');

  const filePath = path.join(__dirname, '../timo_data.js');
  global.window = {};
  const timoData = require(filePath);
  const timoDb = timoData.TIMO_DB || global.window.TIMO_DB;

  const cleanedDb = {};
  let removedCount = 0;
  let reindexedCount = 0;

  function normalizeRoundName(round) {
    if (!round) return '';
    return round
      .replace(/^Vong loai\s*-\s*De so\s*(\d+)/i, (m, d) => `Vòng loại - Đề số ${d.padStart(2, '0')}`)
      .replace(/^Vòng loại\s*-\s*Đề số\s*(\d+)/i, (m, d) => `Vòng loại - Đề số ${d.padStart(2, '0')}`)
      .replace(/^Vong quoc gia\s*-\s*De so\s*(\d+)/i, (m, d) => `Vòng quốc gia - Đề số ${d.padStart(2, '0')}`)
      .replace(/^Vòng quốc gia\s*-\s*Đề số\s*(\d+)/i, (m, d) => `Vòng quốc gia - Đề số ${d.padStart(2, '0')}`);
  }

  for (const grade of ['grade1', 'grade2', 'grade3', 'grade4', 'grade5']) {
    const list = timoDb[grade] || [];
    const seenTexts = new Set();
    const seenIds = new Set();
    const uniqueList = [];

    for (const q of list) {
      // Chuẩn hóa tên vòng thi
      q.round = normalizeRoundName(q.round);

      // Sửa lỗi câu chu vi Đề 5 Q17
      if (q.id === '4-Vong loai - De so 5-17') {
        q.answer = 'D';
        q.acceptedAnswers = ['D', 'd', '24'];
        console.log('-> Đã sửa thành công câu chu vi TIMO G4 Đề 5 Q17!');
      }

      // 1. Kiểm tra trùng lặp nội dung thực sự (True Duplicate)
      const textKey = `${q.round}__${(q.text || '').trim().replace(/\s+/g, ' ')}`;
      if (seenTexts.has(textKey)) {
        removedCount++;
        continue; // Loại bỏ bản sao rác thực sự
      }
      seenTexts.add(textKey);

      // 2. Bảo toàn câu hỏi khác nhau nhưng trùng mã ID (ID Collision Resolution)
      if (seenIds.has(q.id)) {
        const origId = q.id;
        let suffixCode = 'B'.charCodeAt(0);
        let newId = `${origId}-${String.fromCharCode(suffixCode)}`;
        while (seenIds.has(newId)) {
          suffixCode++;
          newId = `${origId}-${String.fromCharCode(suffixCode)}`;
        }
        q.id = newId;
        reindexedCount++;
      }
      seenIds.add(q.id);
      uniqueList.push(q);
    }
    cleanedDb[grade] = uniqueList;
    console.log(`[TIMO ${grade}] Gốc: ${list.length} -> Sau chuẩn hóa bảo toàn: ${uniqueList.length}`);
  }

  console.log(`Tổng số bản sao rác thực sự đã loại bỏ: ${removedCount} (khử ~19 đến 28 câu lặp text)`);
  console.log(`Tổng số câu hỏi được tái định danh phân nhánh bảo toàn: ${reindexedCount}`);
  console.log(`Tổng số câu hỏi TIMO chất lượng cao được lưu giữ: ${Object.values(cleanedDb).reduce((a, b) => a + b.length, 0)}`);

  const outputCode = `// NGÂN HÀNG ĐỀ THI TOÁN QUỐC TẾ TIMO (KHỐI 1 - 5) - ĐÃ CHUẨN HÓA & BẢO TOÀN DỮ LIỆU\n` +
    `const TIMO_DB = ${JSON.stringify(cleanedDb, null, 2)};\n\n` +
    `if (typeof window !== 'undefined') { window.TIMO_DB = TIMO_DB; }\n` +
    `if (typeof module !== 'undefined') { module.exports = { TIMO_DB }; }\n`;

  fs.writeFileSync(filePath, outputCode, 'utf8');
  console.log('Đã cập nhật timo_data.js hoàn tất!');
  ```

---

### 3.3. Kịch bản sửa 43 câu giả thiết tạm & 15 câu định dạng `(B) 87` (`grade4_special.js`)
- **Mục tiêu**:
  1. Cập nhật chính xác đáp án chuẩn cho **43 câu giả thiết tạm** đã được thẩm định tại Mục III.1 của Danh mục lỗi.
  2. Chuẩn hóa **15 câu Giá trị Trung bình** dạng `(B) 87` thành ký tự `'B'`, `'C'`, `'A'` và bổ sung mảng `acceptedAnswers`.
- **Mã nguồn giải pháp kỹ thuật (`scripts/patch_grade4_special.js`)**:
  ```javascript
  const fs = require('fs');
  const path = require('path');

  const fixesPath = path.join(__dirname, '../.agents/teamwork/survey_explorer_2/detailed_fixes.json');
  const g4Path = path.join(__dirname, '../grade4_special.js');

  const fixes = JSON.parse(fs.readFileSync(fixesPath, 'utf8'));
  global.window = {};
  const g4Data = require(g4Path);
  const list = g4Data.GRADE4_SPECIAL_DATA || global.window.GRADE4_SPECIAL_DATA || g4Data;

  let patchedAssump = 0;
  let patchedAvg = 0;

  for (const q of list) {
    const fix = fixes.find(f => f.id === q.id);
    if (!fix) continue;

    if (fix.category === 'ASSUMPTION_BUG') {
      const recAns = String(fix.recommendedAnswer || fix.correctAnswer || '').trim();
      q.answer = recAns;
      // Sinh mảng acceptedAnswers thông minh
      const acc = new Set([recAns]);
      if (recAns.includes(' và ') || recAns.includes(', ')) {
        const parts = recAns.split(/\s*và\s*|,\s*/).map(p => p.trim());
        if (parts.length >= 2) {
          acc.add(`${parts[0]} và ${parts[1]}`);
          acc.add(`${parts[0]}, ${parts[1]}`);
          acc.add(`${parts[0]}; ${parts[1]}`);
          acc.add(`${parts[0]} ${parts[1]}`);
        }
      }
      q.acceptedAnswers = Array.from(acc);
      patchedAssump++;
    } else if (fix.category === 'AVG_FORMAT') {
      q.answer = fix.correctLetter;
      q.acceptedAnswers = [fix.correctLetter, fix.correctLetter.toLowerCase(), fix.correctValue, fix.currentAns];
      q.type = 'mc';
      patchedAvg++;
    }
  }

  console.log(`Đã sửa ${patchedAssump}/43 câu giả thiết tạm`);
  console.log(`Đã sửa ${patchedAvg}/15 câu định dạng (B) 87`);

  const outputCode = `// NGÂN HÀNG TOÁN NÂNG CAO LỚP 4 - ĐÃ SỬA TOÀN DIỆN LỖI ĐÁP ÁN & ĐỊNH DẠNG\n` +
    `const GRADE4_SPECIAL_DATA = ${JSON.stringify(list, null, 2)};\n\n` +
    `if (typeof window !== 'undefined') { window.GRADE4_SPECIAL_DATA = GRADE4_SPECIAL_DATA; }\n` +
    `if (typeof module !== 'undefined') { module.exports = GRADE4_SPECIAL_DATA; }\n`;

  fs.writeFileSync(g4Path, outputCode, 'utf8');
  console.log('Đã cập nhật thành công grade4_special.js!');
  ```

---

### 3.4. Kịch bản chuẩn hóa siêu dữ liệu Tạp chí Toán Tuổi Thơ 2 (`toan_tuoi_tho_data.js`)
- **Mục tiêu**: Sửa triệt để 1 bản ghi vỡ font `Tạp ch`, 11 bản ghi cụt năm `"năm 202"`, 6 bản ghi gán sai 2025, và điền tháng phát hành cho 19 bản ghi rỗng.
- **Mã nguồn giải pháp kỹ thuật (`scripts/clean_ttt_metadata.js`)**:
  ```javascript
  const fs = require('fs');
  const path = require('path');

  const filePath = path.join(__dirname, '../toan_tuoi_tho_data.js');
  global.window = {};
  const tttData = require(filePath);
  const list = tttData.TOAN_TUOI_THO_DB || global.window.TOAN_TUOI_THO_DB || tttData;

  for (const item of list) {
    // 1. Sửa lỗi vỡ font
    item.title = item.title.replace(/\uFFFD/g, 'í').replace(/Tạp ch\s+/g, 'Tạp chí ');

    // 2. Sửa lỗi cụt năm "năm 202"
    if (item.title.includes('năm 202')) {
      item.title = item.title.replace(/năm 202$/g, 'năm 2021');
    }

    // 3. Khắc phục năm xuất bản
    const matchIssue = item.title.match(/số\s*(\d+)/i);
    if (matchIssue) {
      const issueNum = parseInt(matchIssue[1], 10);
      if (issueNum >= 270) item.year = 2021;
      else if (issueNum >= 250) item.year = 2019;
      else if (issueNum >= 200) item.year = 2016;
      else item.year = 2014;
    }

    // 4. Chuẩn hóa trường tháng nếu bị khuyết
    if (!item.month || item.month.trim() === '') {
      const matchMonth = item.title.match(/tháng\s*(\d+)/i);
      item.month = matchMonth ? `Tháng ${matchMonth[1]}` : 'Phát hành định kỳ';
    }
  }

  const outputCode = `// TẠP CHÍ TOÁN TUỔI THƠ 2 - ĐÃ LÀM SẠCH VÀ CHUẨN HÓA SIÊU DỮ LIỆU\n` +
    `const TOAN_TUOI_THO_DB = ${JSON.stringify(list, null, 2)};\n\n` +
    `if (typeof window !== 'undefined') { window.TOAN_TUOI_THO_DB = TOAN_TUOI_THO_DB; }\n` +
    `if (typeof module !== 'undefined') { module.exports = TOAN_TUOI_THO_DB; }\n`;

  fs.writeFileSync(filePath, outputCode, 'utf8');
  console.log('Đã chuẩn hóa siêu dữ liệu toan_tuoi_tho_data.js hoàn tất!');
  ```

---

### 3.5. Kịch bản vá lỗi Export biến toàn cục trong `extra_exams.js`
- **Mục tiêu**: Bổ sung export toàn cục ở cuối tệp `extra_exams.js` để tránh lỗi tham chiếu undefined trong trình duyệt và Node.js:
  ```javascript
  if (typeof window !== 'undefined') { window.EXTRA_EXAMS_DB = EXTRA_EXAMS_DB; }
  if (typeof module !== 'undefined') { module.exports = EXTRA_EXAMS_DB; }
  ```

---

### 3.6. Kịch bản vá lỗi bộ lọc FMO và động cơ chấm điểm trắc nghiệm trong `index.html`
1. **Vá hàm `getAvailableRounds` cho FMO**:
   Thêm điều kiện kiểm tra `grade === 4`:
   ```javascript
   } else if (e === 'FMO') {
     if (typeof FMO_DATA === 'undefined' || grade !== 4) return [];
     const rounds = new Set();
     FMO_DATA.forEach(q => { if (q.round) rounds.add(q.round); });
     return Array.from(rounds);
   }
   ```
2. **Vá thuật toán chấm trắc nghiệm `isAnswerCorrect`**:
   Bổ sung cơ chế trích xuất chữ cái phương án đa tầng (Defense-in-depth), bảo toàn xử lý đa đáp án và chốt chặn phòng ngự chặt chẽ:
   ```javascript
   function isAnswerCorrect(userAns, q) {
     if (userAns === undefined || userAns === null || userAns === '') return false;
     const u = userAns.toString().trim();
     const c = (q.answer || '').toString().trim();
     if (!u || !c) return false;

     // Chốt chặn 1: Đối chiếu trực tiếp qua hàm chuẩn hóa
     if (matchSingleAnswer(u, c)) return true;

     // Chốt chặn 2: Nếu đáp án chính chứa nhiều phương án lựa chọn cách nhau bởi ';' hoặc 'hoặc' hoặc 'hay'
     // (Bảo toàn tuyệt đối các câu có nhiều đáp số hợp lệ như G4-NC-1142)
     const alternatives = c.split(/;|\bhoặc\b|\bhay\b/i).map(s => s.trim()).filter(Boolean);
     if (alternatives.length > 1) {
       for (const alt of alternatives) {
         if (matchSingleAnswer(u, alt)) return true;
       }
     }

     // Chốt chặn 3: Tra cứu mảng acceptedAnswers (bao gồm cả các phương án phân tách bên trong)
     if (Array.isArray(q.acceptedAnswers)) {
       for (const item of q.acceptedAnswers) {
         if (matchSingleAnswer(u, item)) return true;
         const subAlts = item.toString().split(/;|\bhoặc\b|\bhay\b/i).map(s => s.trim()).filter(Boolean);
         if (subAlts.length > 1) {
           for (const sub of subAlts) {
             if (matchSingleAnswer(u, sub)) return true;
           }
         }
       }
     }

     // Chốt chặn 4: Bóc tách tiền tố chữ cái phương án trắc nghiệm A-E
     // Xử lý triệt để các trường hợp q.answer lưu dạng "(B) 87", "B. 87", "Đáp án C"
     if (q.type === 'mc' || (Array.isArray(q.options) && q.options.length >= 2)) {
       // Chỉ trích xuất chữ cái nếu input của học sinh thực sự là một chữ cái phương án duy nhất (ví dụ "B", "(B)", "B.")
       // Ngăn ngừa triệt để việc các từ tự luận như "BOY", "BUY", "BIG" bị gọt nhầm thành Option B
       const uMatch = u.match(/^[\(\[\s]*([A-Ea-e])[\.\:\)\s\]]?$/);
       const uLetter = uMatch ? uMatch[1].toUpperCase() : null;

       if (uLetter && uLetter.length === 1) {
         const letterMatch = c.match(/^[\(\[\s]*([A-Ea-e])[\.\:\)\s\]]/);
         if (letterMatch && letterMatch[1].toUpperCase() === uLetter) return true;

         // Nếu q.answer lưu chuỗi text khớp với nội dung sau chữ cái phương án
         if (Array.isArray(q.options)) {
           for (let idx = 0; idx < q.options.length; idx++) {
             const optText = q.options[idx].replace(/^[A-Ea-e][\.\:\)]\s*/, '').trim();
             const optLetter = String.fromCharCode(65 + idx);
             if (matchSingleAnswer(c, optText) && uLetter === optLetter) return true;
           }
         }
       }
     }

     return false;
   }
   ```

3. **Vô hiệu hóa lệnh ghi đè runtime làm mất 29 tuần Lớp 4 trong `archimedes_g4_real.js` ngay tại Giai đoạn 1**:
   - Tệp nguồn `archimedes_g4_real.js`, dòng 865 - 867 hiện tại có lệnh:
     ```javascript
     if (typeof ARCHIMEDES_MATH_DB !== 'undefined') {
       ARCHIMEDES_MATH_DB.grade4 = ARCHIMEDES_G4_REAL;
     }
     ```
   - **Hành động kỹ thuật ngay trong Phase 1**: Đóng ghi chú (comment out) hoặc xóa bỏ 3 dòng này để giữ nguyên toàn bộ 268 câu hỏi (35 tuần) của Khối 4 trong `archimedes_math_data.js` khi chạy trên trình duyệt web, ngăn chặn việc 29 tuần bị biến mất ở runtime trước khi Phase 4 hoàn tất việc hợp nhất số hóa đầy đủ.

---

## IV. GIAI ĐOẠN 2: BIÊN TẬP NỘI DUNG & PHỤC HỒI CẤU TRÚC ĐỀ THI (PHASE 2)

### 4.1. Hướng dẫn biên tập thay thế 68 câu hỏi Tiếng Việt placeholder
Hội đồng Chuyên môn Tiểu học tiến hành thay thế toàn bộ **68 câu hỏi chứa phương án vô nghĩa** bằng các câu hỏi chuẩn mực theo đúng chương trình và sách giáo khoa:

1. **Khối 1 (33 câu - `TV-G1-W{3..35}-T1-1`)**:
   - *Chủ đề*: Nhận diện âm vần, ghép tiếng, tìm từ ngữ có tiếng chứa âm mới học theo tuần.
   - *Cấu trúc chuẩn*:
     ```json
     {
       "id": "TV-G1-W3-T1-1",
       "exam": "ARCHIMEDES_TV",
       "grade": 1,
       "round": "Tuần 3 - Tiết 1",
       "topic": "Âm l, m, n, g, gh; vần ngắn",
       "text": "Tiếng nào dưới đây chứa âm \"gh\" và viết đúng quy tắc chính tả?",
       "options": [
         "A. gế gỗ",
         "B. ghé qua",
         "C. gà ghô",
         "D. ghà vịt"
       ],
       "answer": "B",
       "explanation": "Quy tắc chính tả: \"gh\" chỉ ghép với các âm e, ê, i. Do đó \"ghé qua\" là từ viết đúng chính tả."
     }
     ```
2. **Khối 3 (35 câu - `TV-G3-W{1..35}-T3-1`)**:
   - *Chủ đề*: Mở rộng vốn từ theo chủ điểm, biện pháp tu từ so sánh, nhân hóa, dấu câu.
   - *Cấu trúc chuẩn*:
     ```json
     {
       "id": "TV-G3-W1-T3-1",
       "exam": "ARCHIMEDES_TV",
       "grade": 3,
       "round": "Tuần 1 - Tiết 3",
       "topic": "Mở rộng vốn từ: Thiếu nhi; Phép so sánh",
       "text": "Dãy từ ngữ nào dưới đây gồm toàn các từ chỉ trẻ em (thiếu nhi)?",
       "options": [
         "A. Trẻ nhỏ, thiếu niên, nhi đồng, con nít",
         "B. Thanh niên, trung niên, người già, cụ già",
         "C. Học sinh, giáo viên, hiệu trưởng, phụ huynh",
         "D. Chăm chỉ, ngoan ngoãn, thật thà, dũng cảm"
       ],
       "answer": "A",
       "explanation": "Dãy từ ở đáp án A gồm các từ ngữ chỉ lứa tuổi trẻ em bám sát chủ điểm Tuần 1."
     }
     ```

---

### 4.2. Kế hoạch bóc tách 10 câu chuyên đề Số nguyên tố (`G4-NC-1108`, `1109`)
Tiến hành chia nhỏ 2 bản ghi gộp dính thành **10 câu hỏi độc lập**:
- `G4-NC-1108` $\to$ Cắt thành:
  - `G4-NC-1108`: Bài 8 (Tìm $x$ để $x+1$ và $x+3$ là số nguyên tố $\to$ Đáp án: $x = 2$, phương án B).
  - `G4-NC-1108B`: Bài 9 (Tìm $a$ để $a+2$ và $a+4$ là số nguyên tố $\to$ Đáp án: $a = 1$, phương án A).
- `G4-NC-1109` $\to$ Cắt thành 8 câu con độc lập với mã phân nhánh từ `G4-NC-1109-1` đến `G4-NC-1109-8` (tương tự quy ước phân nhánh của `G4-NC-1108B`), bổ sung đầy đủ lời giải cho từng bài toán số nguyên tố. Tuyệt đối không dùng dải ID tuần tự `G4-NC-1110` đến `G4-NC-1116` để tránh xung đột ghi đè với các bài toán đã tồn tại sẵn trong kho gốc `grade4_special_orig.js`.

---

### 4.3. Kế hoạch phục hồi 3 câu hỏi bị nuốt vào trường Lời giải (`1143`, `1187`, `1214`)
Bóc tách độc lập 3 câu hỏi nâng cao bị nuốt:
1. `G4-NC-1143B`: *"Một giáo viên thể dục mua 4 quả bóng rổ và 5 quả bóng chuyền giá $230... Tìm giá mỗi loại."* $\to$ Đáp án: Bóng rổ $30, bóng chuyền $22.
2. `G4-NC-1187B`: *"Xe tải (60 km/h) và ô tô (80 km/h) đi ngược chiều... Gặp nhau cách trung điểm 30 km. Tìm khoảng cách AB."* $\to$ Đáp án: 420 km.
3. `G4-NC-1214B`: *"Lúc 6 giờ xe B rời bến. Đến 9 giờ xe A rời bến cùng chiều và đuổi kịp lúc 15 giờ... Vận tốc A hơn B 15 km/h. Tìm vận tốc mỗi xe."* $\to$ Đáp án: Xe B: 30 km/h, Xe A: 45 km/h.

---

### 4.4. Phục hồi 24 câu hỏi Kangaroo Lớp 2 Đề 1 và 5 câu đề bài rỗng
- Đối chiếu với tài liệu gốc của kỳ thi Olympic Kangaroo (IKMC 2011 - 2013 Ecolier):
  - Phục hồi lại đề bài đầy đủ cho 24 câu bị nuốt đề vào Option A.
  - Phục hồi 5 câu có đề bài rỗng: Bài phép tính `6 + 2 = ?`, Bài tháng có 29 ngày (Tháng Hai), Bài tổng chữ số 2011, và 2 bài toán về bạn Barb.
  - Sửa lại phần lời giải tương ứng chính xác với từng câu hỏi.

---

## V. GIAI ĐOẠN 3: BỔ SUNG TÀI NGUYÊN ĐỒ HỌA & HÌNH ẢNH MINH HỌA (PHASE 3)

### 5.1. Quy trình xử lý 115 câu hỏi TIMO thiếu ảnh minh họa
115 câu hỏi đã được phân loại chi tiết theo 7 nhóm chủ đề toán học tại Danh mục lỗi. Lộ trình triển khai:
- **Ưu tiên 1**: 55 câu Hình học phẳng, Ghép hình, Diện tích tô đậm (chiếm 47,8%).
- **Ưu tiên 2**: 15 câu Khối lập phương 3D và 13 câu Đoạn thẳng / Chia đoạn.
- **Ưu tiên 3**: 32 câu Ma phương, Tháp số, Dãy hình và Đường đi ngắn nhất.

### 5.2. Giải pháp kỹ thuật: Trích xuất ảnh gốc vs Dựng vector SVG tự động
Áp dụng giải pháp kết hợp hai mũi nhọn:
1. **Mũi nhọn 1 — Dựng vector SVG tự động (Cho 75 bài toán dạng chuẩn)**:
   - Các bài toán ma phương, tháp số, lưới ô vuông đếm hình chữ nhật, hình lập phương 3D isometric được dựng bằng script Node.js sinh SVG chuẩn vector, sắc nét tuyệt đối ở mọi độ phân giải màn hình, dung lượng nhẹ (< 5 KB/ảnh).
   - Đặt tại: `images/timo/svg_gen/`.
2. **Mũi nhọn 2 — Trích xuất từ tài liệu PDF gốc (Cho 40 bài toán hình vẽ đặc thù)**:
   - Trích xuất ảnh raster PNG từ tệp PDF đề thi chính thức TIMO các năm tương ứng.
   - Đặt tại: `images/timo/`.

### 5.3. Bổ sung 3 ảnh minh họa Kangaroo và 2 ảnh Toán Archimedes
- Trích xuất và đặt vào đúng đường dẫn:
  - `images/ikmc/g4_de2_q18.png` (Hai hình ghép che phần trống).
  - `images/ikmc/g5_de2_q04.png` (Sơ đồ 10 hòn đảo và 12 cây cầu).
  - `images/ikmc/g5_de5_q09.png` (Bảng thời gian bay của Harry).
  - `images/arch_weeks/g1_w2_t3_03.svg` (Lưới 4 ô vuông nhỏ).
  - `images/arch_weeks/g1_w2_pkt_05.svg` (Ngôi nhà mái tam giác).

---

## VI. GIAI ĐOẠN 4: SỐ HÓA HOÀN THIỆN CHƯƠNG TRÌNH & DỮ LIỆU CÒN THIẾU (PHASE 4)

### 6.1. Phương án số hóa 29 tuần còn thiếu của Toán Archimedes Lớp 4
- **Thực trạng**: Hiện mới số hóa được 6/35 tuần (64 câu) từ tài liệu `toasn 4 q1.pdf`.
- **Giải pháp xử lý lỗi ghi đè**:
  Ngay lập tức xóa bỏ lệnh ghi đè `ARCHIMEDES_MATH_DB.grade4 = ARCHIMEDES_G4_REAL;` trong `archimedes_g4_real.js`. Thay vào đó, áp dụng chiến lược **Gộp thông minh (Smart Merge)**:
  - Giữ lại 35 tuần hiện có của Khối 4 trong `archimedes_math_data.js`.
  - Chỉ thay thế các tuần từ 1 đến 6 bằng dữ liệu số hóa thực tế chất lượng cao từ `archimedes_g4_real.js`.
- **Lộ trình số hóa 29 tuần còn thiếu (Tuần 7 đến Tuần 35)**:
  - Phân kỳ số hóa: Mỗi tuần số hóa 5 tuần (khoảng 50 câu/tuần), chia làm 6 đợt số hóa bám sát các tệp scan `toasn 4 q2.pdf`, `toasn 4 q3.pdf`.

### 6.2. Chiến lược xử lý và tích hợp ngân hàng đề thi ASMO chính thức
1. **Phương án tức thời (Giai đoạn 1 - 2)**:
   Tạm thời ẩn nút ASMO khỏi thanh menu chính của `index.html` hoặc chuyển trạng thái hiển thị thành huy hiệu:
   `🌏 ASMO (Đang chuẩn bị dữ liệu vòng Quốc gia 2026)` để tránh gây hiểu lầm cho học sinh và phụ huynh.
2. **Phương án hoàn thiện (Giai đoạn 4)**:
   - Thu thập và số hóa tối thiểu 10 bộ đề thi chính thức ASMO (từ Lớp 1 đến Lớp 5, mỗi lớp 2 đề: 1 Vòng loại, 1 Vòng Quốc gia).
   - Xây dựng tệp `asmo_data.js` đồng bộ cấu trúc chuẩn với hệ thống và nạp chính thức vào `index.html`.

### 6.3. Kế hoạch giải mã và số hóa 338 câu hỏi Toán Nâng Cao Lớp 4
- Rà soát lại 338 câu hỏi đang bị ẩn trong `grade4_special_orig.js`.
- Huy động tổ giáo viên chuyên toán giải chi tiết và nhập đáp số chuẩn cho 13 chuyên đề còn khuyết (Dãy số cách đều, Hình học tổ hợp, Phép toán mới, Bài toán số dư, Thừa và thiếu...).
- Đưa ngân hàng Toán Nâng Cao Lớp 4 từ 182 câu đạt quy mô hoàn chỉnh **520 câu hỏi chất lượng cao**.

---

## VII. GIAI ĐOẠN 5: BỘ KIỂM THỬ HỒI QUY TỰ ĐỘNG & TIÊU CHÍ BÀN GIAO (PHASE 5)

### 1. Bộ công cụ kiểm định chất lượng tự động (Automated Quality Gates)
Trước khi xuất bản phiên bản chính thức, toàn bộ kho đề phải chạy qua kịch bản kiểm định tự động `verify_audit_catalog.js` và `audit_all.js` để nghiệm thu các chỉ tiêu mục tiêu:
- [ ] **Gate 1: Tỷ lệ câu hỏi không có đáp án**: $0\%$.
- [ ] **Gate 2: Tỷ lệ đáp án placeholder rác**: $0\%$.
- [ ] **Gate 3: Tỷ lệ câu hỏi thiếu ảnh khi đề yêu cầu xem hình**: $0\%$.
- [ ] **Gate 4: Tỷ lệ trùng lặp bản ghi rác**: $0\%$.
- [ ] **Gate 5: Tỷ lệ khớp đáp án trắc nghiệm A-E**: $100\%$.
- [ ] **Gate 6: Tỷ lệ lỗi liên kết ảnh 404/broken**: $0\%$.

### 2. Tiêu chuẩn bàn giao xuất xưởng (Sign-off Criteria)
1. Toàn bộ 54 tiêu chuẩn trong `verify_audit_catalog.js` đạt trạng thái `[PASS] 100%`.
2. Không còn bất kỳ câu hỏi nào bị chấm sai do lỗi định dạng hay lỗi lấy nhầm kết quả giả thiết tạm.
3. Học sinh toàn tỉnh khi đăng nhập vào hệ thống làm bài sẽ có trải nghiệm học tập và thi đua mượt mà, chính xác, truyền cảm hứng toán học và đạt kết quả cao nhất trong các kỳ thi học sinh giỏi và Olympic quốc tế.

---
*Kế hoạch được phê duyệt bởi Hội đồng Thẩm định & Kiểm định Chất lượng Đề thi — Hệ thống Luyện thi Thầy Nguyễn Đình Chinh.*
