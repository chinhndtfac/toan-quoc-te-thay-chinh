const fs = require('fs');
const path = require('path');

function generateSmartAcceptedAnswers(ans) {
  const set = new Set();
  if (!ans) return [];
  const raw = ans.trim();
  set.add(raw);
  set.add(raw.toLowerCase());

  // Clean parenthesis e.g. "28.000 cm³ (28 lít)" -> evaluate parts
  const parenMatch = raw.match(/^(.*?)\s*\((.*?)\)$/);
  if (parenMatch) {
    generateSmartAcceptedAnswers(parenMatch[1]).forEach(v => set.add(v));
    generateSmartAcceptedAnswers(parenMatch[2]).forEach(v => set.add(v));
  }

  // Handle multiple values separated by ;
  if (raw.includes(';')) {
    const parts = raw.split(';').map(p => p.trim());
    set.add(parts.join('; '));
    set.add(parts.join(', '));
    set.add(parts.join(' và '));
    set.add(parts.join(' '));
    const nums = parts.map(p => {
      const m = p.match(/[\d.,]+/);
      return m ? m[0] : p;
    });
    set.add(nums.join('; '));
    set.add(nums.join(', '));
    set.add(nums.join(' '));
    const dotNums = nums.map(n => n.replace(',', '.'));
    set.add(dotNums.join('; '));
    set.add(dotNums.join(', '));
    set.add(dotNums.join(' '));
  } else if (raw.includes(',') && !/^\d+,\d+(\s*(m²|cm²|dm²|m³|cm³|m|cm|dm|mm|km|kg|g|tấn|tạ|yến|%|km\/h|km\/giờ))?$/i.test(raw)) {
    const parts = raw.split(',').map(p => p.trim());
    set.add(parts.join(', '));
    set.add(parts.join('; '));
    set.add(parts.join(' và '));
    set.add(parts.join(' '));
  }

  // Percentage e.g. "75%" or "40,74%"
  const pctMatch = raw.match(/^([\d.,]+)\s*%$/);
  if (pctMatch) {
    const num = pctMatch[1];
    set.add(num + '%');
    set.add(num);
    set.add(num.replace(',', '.') + '%');
    set.add(num.replace(',', '.'));
    set.add(num.replace('.', ',') + '%');
    set.add(num.replace('.', ','));
  }

  // Common unit stripping
  const unitRegex = /^([\d.,]+)\s*(chữ số|số|ghế|chiếc ghế|học sinh|quyển|viên|con|tuổi|gói|hộp|đồng|m²|cm²|dm²|m³|cm³|m|cm|dm|mm|km|phút|giờ|giây|trận|quân bài|kg|g|tấn|tạ|yến|ngày|lần|đoạn|bạn|bông|cây|quả|bút|cái|chiếc|khối|khối gỗ|khối lập phương|que tính|lọ|chiếc kẹo|cái kẹo|cái chân|con gà|con vịt|lít|km\/h|km\/giờ)?$/i;
  const unitMatch = raw.match(unitRegex);
  if (unitMatch) {
    const rawNumWithSeparators = unitMatch[1];
    const unit = unitMatch[2] ? unitMatch[2].trim() : '';
    const cleanDigits = rawNumWithSeparators.replace(/[.,]/g, '');
    set.add(rawNumWithSeparators);
    set.add(cleanDigits);
    if (rawNumWithSeparators.includes(',')) {
      set.add(rawNumWithSeparators.replace(',', '.'));
    }
    if (rawNumWithSeparators.includes('.')) {
      set.add(rawNumWithSeparators.replace('.', ','));
    }
    if (unit) {
      set.add(`${cleanDigits} ${unit}`);
      set.add(`${rawNumWithSeparators} ${unit}`);
      const shortUnit = unit.replace(/^(chiếc|cái|con|khối)\s+/, '');
      if (shortUnit !== unit) {
        set.add(`${cleanDigits} ${shortUnit}`);
        set.add(`${rawNumWithSeparators} ${shortUnit}`);
      }
    }
  }

  // Time e.g. "9 giờ sáng", "9 giờ", "4 giờ đúng", "1 giờ"
  const timeMatch = raw.match(/^(\d+)\s*giờ(\s*(sáng|trưa|chiều|tối|đúng))?$/i);
  if (timeMatch) {
    const h = timeMatch[1];
    set.add(h);
    set.add(h + 'h');
    set.add(h + ' giờ');
    set.add(h + ':00');
    if (timeMatch[3]) {
      set.add(`${h} giờ ${timeMatch[3]}`);
      set.add(`${h}h ${timeMatch[3]}`);
    }
  }

  // Comparison e.g. "B > A"
  const compMatch = raw.match(/^([A-Za-z])\s*([><=])\s*([A-Za-z])$/);
  if (compMatch) {
    const left = compMatch[1].toUpperCase();
    const op = compMatch[2];
    const right = compMatch[3].toUpperCase();
    set.add(`${left} ${op} ${right}`);
    set.add(`${left}${op}${right}`);
    set.add(left);
    if (op === '>') set.add(`${left} lớn hơn ${right}`);
    if (op === '<') set.add(`${left} bé hơn ${right}`);
    if (op === '=') set.add(`${left} bằng ${right}`);
  }

  // Specific phrases
  if (/không thể/i.test(raw)) {
    set.add('không thể');
    set.add('khong the');
    set.add('không');
    set.add('khong');
  }
  if (/^có$/i.test(raw)) {
    set.add('có');
    set.add('co');
  }

  const res = new Set();
  set.forEach(v => {
    const trimmed = (v || '').trim();
    if (trimmed) res.add(trimmed);
  });
  return Array.from(res);
}

function parseHtmlFile(filePath, grade) {
  const content = fs.readFileSync(filePath, 'utf8');
  const firstSolIdx = content.indexOf('<div class="sol-item">');
  const probContent = content.substring(0, firstSolIdx);
  const solContent = content.substring(firstSolIdx);

  const solMap = {};
  const solRegex = /<div class="sol-item"><span class="sol-num">Bài\s*(\d+):<\/span>([\s\S]*?)<\/div>/g;
  let sm;
  while ((sm = solRegex.exec(solContent)) !== null) {
    const num = parseInt(sm[1], 10);
    const body = sm[2].trim();
    const strongMatch = body.match(/<strong>(.*?)<\/strong>/g);
    let extractedAns = '';
    if (strongMatch) {
      extractedAns = strongMatch.map(s => s.replace(/<\/?strong>/g, '').trim()).join('; ');
    }
    solMap[num] = {
      ans: extractedAns,
      cleanText: body.replace(/<[^>]+>/g, '').trim()
    };
  }

  // Fallback for Grade 4 items
  if (grade === 4) {
    if (solMap[118] && !solMap[118].ans) solMap[118].ans = "190; 19; 76";
    if (solMap[130] && !solMap[130].ans) solMap[130].ans = "36; 45; 27";
    if (solMap[141] && !solMap[141].ans) solMap[141].ans = "562.5";
    if (solMap[248] && !solMap[248].ans) solMap[248].ans = "Có";
    if (solMap[252] && !solMap[252].ans) solMap[252].ans = "Có";
    if (solMap[255] && !solMap[255].ans) solMap[255].ans = "7";
    if (solMap[354] && !solMap[354].ans) solMap[354].ans = "Cường, An, Dũng, Nam, Bình";
  }
  // Fallback for Grade 3
  if (grade === 3 && solMap[17] && !solMap[17].ans) {
    solMap[17].ans = "48; 12";
  }
  // Fallback for Grade 5
  if (grade === 5 && solMap[30] && !solMap[30].ans) {
    solMap[30].ans = "24,8; 28; 14";
  }

  const questions = [];
  const chapterSplits = probContent.split(/<div class="chapter-header">/);
  for (let c = 1; c < chapterSplits.length; c++) {
    const part = chapterSplits[c];
    const chapTitle = part.substring(0, part.indexOf('</div>')).trim();
    const roundName = chapTitle.replace(/^CHỦ ĐỀ\s*/i, 'Chuyên đề ');
    const topicName = chapTitle.replace(/^CHỦ ĐỀ\s*\d+\s*:\s*/i, '');

    const probRegex = /<div class="problem-item"><span class="problem-num">Bài\s*(\d+):<\/span>([\s\S]*?)<\/div>/g;
    let pm;
    while ((pm = probRegex.exec(part)) !== null) {
      const num = parseInt(pm[1], 10);
      const probText = pm[2].replace(/<[^>]+>/g, '').trim();
      const sol = solMap[num];
      const ans = sol ? sol.ans : '';
      const exp = sol ? sol.cleanText : '';

      const accepted = generateSmartAcceptedAnswers(ans);
      if (grade === 3 && num === 17) {
        accepted.push('48', '48 con gà, 12 con vịt', '48 và 12', '44; 11', '12; 48');
      }
      if (grade === 5 && num === 30) {
        accepted.push('24.8; 28; 14', '24.8, 28, 14', '24,8, 28, 14', '14; 28; 24,8', '14; 28; 24.8');
      }

      questions.push({
        id: `T365-G${grade}-${String(num).padStart(3, '0')}`,
        exam: "TOAN_365",
        grade: grade,
        round: roundName,
        topic: topicName,
        num: num,
        text: `Bài ${num}. ${probText}`,
        type: "fill",
        answer: ans,
        acceptedAnswers: accepted,
        explanation: exp
      });
    }
  }

  return questions;
}

// Compile Grade 1
console.log('Compiling Grade 1...');
const g1 = parseHtmlFile('V:/ChinhND/Đề ôn tập/toan_nang_cao_lop_1/toan_nang_cao_lop_1_chuan.html', 1);

// Compile Grade 2
console.log('Compiling Grade 2...');
const g2 = parseHtmlFile('V:/ChinhND/Đề ôn tập/toan_nang_cao_lop_2/toan_nang_cao_lop_2_chuan.html', 2);

// Compile Grade 3
console.log('Compiling Grade 3...');
const g3 = parseHtmlFile('V:/ChinhND/Đề ôn tập/toan_nang_cao_lop_3/toan_nang_cao_lop_3_chuan.html', 3);

// Compile Grade 4 (5 files)
console.log('Compiling Grade 4...');
const g4Files = [
  'V:/ChinhND/Đề ôn tập/365 Bài toán hay và khó/Lớp 4/tap_1_so_hoc_va_day_so.html',
  'V:/ChinhND/Đề ôn tập/365 Bài toán hay và khó/Lớp 4/tap_2_cac_dang_toan_dien_hinh_1.html',
  'V:/ChinhND/Đề ôn tập/365 Bài toán hay và khó/Lớp 4/tap_3_phuong_phap_giai_toan.html',
  'V:/ChinhND/Đề ôn tập/365 Bài toán hay và khó/Lớp 4/tap_4_to_hop_logic_phan_so.html',
  'V:/ChinhND/Đề ôn tập/365 Bài toán hay và khó/Lớp 4/tap_5_hinh_hoc_chia_het_chuyen_dong.html'
];
const g4 = [];
g4Files.forEach(f => {
  g4.push(...parseHtmlFile(f, 4));
});

// Compile Grade 5 (2 files)
console.log('Compiling Grade 5...');
const g5Files = [
  'V:/ChinhND/Đề ôn tập/toan_nang_cao_lop_5/tap_1_so_hoc_va_ti_so_phan_tram.html',
  'V:/ChinhND/Đề ôn tập/toan_nang_cao_lop_5/tap_2_hinh_hoc_va_chuyen_dong.html'
];
const g5 = [];
g5Files.forEach(f => {
  g5.push(...parseHtmlFile(f, 5));
});

console.log('Summary of compiled questions:');
console.log('Grade 1:', g1.length);
console.log('Grade 2:', g2.length);
console.log('Grade 3:', g3.length);
console.log('Grade 4:', g4.length);
console.log('Grade 5:', g5.length);
console.log('TOTAL:', g1.length + g2.length + g3.length + g4.length + g5.length);

const outDb = {
  grade1: g1,
  grade2: g2,
  grade3: g3,
  grade4: g4,
  grade5: g5
};

const jsContent = `// BỘ 365 BÀI TOÁN HAY VÀ KHÓ & TOÁN NÂNG CAO TIỂU HỌC (LỚP 1 - LỚP 5)
// Biên soạn & Quản lý: Thầy Nguyễn Đình Chinh (0941.492.468)
// Hệ thống tuyển chọn các chuyên đề bồi dưỡng HSG, Toán Olympic & Tư duy tiểu học chuẩn hóa

const TOAN_365_DB = ${JSON.stringify(outDb, null, 2)};

if (typeof window !== 'undefined') {
  window.TOAN_365_DB = TOAN_365_DB;
  window.TOAN_365_DATA = TOAN_365_DB.grade4;
}
if (typeof module !== 'undefined') {
  module.exports = TOAN_365_DB;
}
`;

const destPath = path.join(__dirname, 'toan365_data.js');
fs.writeFileSync(destPath, jsContent, 'utf8');
console.log('Successfully written toan365_data.js! File size:', jsContent.length);
