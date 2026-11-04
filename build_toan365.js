const fs = require('fs');
const path = require('path');

const srcDir = 'V:\\ChinhND\\Đề ôn tập\\365 Bài toán hay và khó lớp 4';
const files = [
  'tap_1_so_hoc_va_day_so.html',
  'tap_2_cac_dang_toan_dien_hinh_1.html',
  'tap_3_phuong_phap_giai_toan.html',
  'tap_4_to_hop_logic_phan_so.html',
  'tap_5_hinh_hoc_chia_het_chuyen_dong.html'
];

function generateAcceptedAnswers(ans) {
  const set = new Set();
  const a = ans.trim();
  set.add(a);
  
  // Strip units
  const numOnlyMatch = a.match(/^([\d.,]+)\s*(chữ số|số|ghế|học sinh|quyển|viên|con|tuổi|gói|hộp|đồng|m²|cm²|dm²|m|cm|km|phút|giờ|giây|trận|quân bài|kg|g|tấn|tạ|yến)?$/i);
  if (numOnlyMatch) {
    const rawNum = numOnlyMatch[1].replace(/[.,]/g, '');
    const formattedNum = numOnlyMatch[1];
    set.add(rawNum);
    set.add(formattedNum);
    if (numOnlyMatch[2]) {
      set.add(`${rawNum} ${numOnlyMatch[2]}`);
    }
  }

  // Handle multiple values separated by ; or ,
  if (a.includes(';') || a.includes(',')) {
    const parts = a.split(/[;,]/).map(p => p.trim());
    set.add(parts.join('; '));
    set.add(parts.join(', '));
    set.add(parts.join(' và '));
    set.add(parts.join(' '));
    // Also extract raw numbers from parts if applicable
    const nums = parts.map(p => {
      const m = p.match(/\d+/);
      return m ? m[0] : p;
    });
    set.add(nums.join('; '));
    set.add(nums.join(', '));
    set.add(nums.join(' '));
  }

  // Handle fraction format
  if (a.includes('/')) {
    set.add(a.replace(/\s+/g, ''));
  }

  // Lowercase / non-accent variations for common words
  if (/không thể/i.test(a)) {
    set.add('không thể');
    set.add('khong the');
    set.add('không');
    set.add('khong');
  }

  return Array.from(set);
}

const allQuestions = [];

files.forEach(fileName => {
  const content = fs.readFileSync(path.join(srcDir, fileName), 'utf8');
  const solSectionStart = content.indexOf('HƯỚNG DẪN GIẢI VÀ ĐÁP ÁN CHI TIẾT');
  const probContent = content.substring(0, solSectionStart);
  const solContent = content.substring(solSectionStart);
  
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
  
  // Fallbacks for the 7 questions that don't have strong tags
  if (solMap[118] && !solMap[118].ans) solMap[118].ans = "190; 19; 76";
  if (solMap[130] && !solMap[130].ans) solMap[130].ans = "36; 45; 27";
  if (solMap[141] && !solMap[141].ans) solMap[141].ans = "562.5";
  if (solMap[248] && !solMap[248].ans) solMap[248].ans = "Có";
  if (solMap[252] && !solMap[252].ans) solMap[252].ans = "Có";
  if (solMap[255] && !solMap[255].ans) solMap[255].ans = "7";
  if (solMap[354] && !solMap[354].ans) solMap[354].ans = "Cường, An, Dũng, Nam, Bình";

  const chapterSplits = probContent.split(/<div class="chapter-header">/);
  for (let c = 1; c < chapterSplits.length; c++) {
    const part = chapterSplits[c];
    const chapTitle = part.substring(0, part.indexOf('</div>')).trim();
    // Clean chapter title for round name: "CHỦ ĐỀ 1: DÃY SỐ..." -> "Chuyên đề 1: Dãy số cách đều & Bài toán tính nhanh"
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

      allQuestions.push({
        id: `T365-G4-${String(num).padStart(3, '0')}`,
        exam: "TOAN_365",
        grade: 4,
        round: roundName,
        topic: topicName,
        num: num,
        text: `Bài ${num}. ${probText}`,
        type: "fill",
        answer: ans,
        acceptedAnswers: generateAcceptedAnswers(ans),
        explanation: exp
      });
    }
  }
});

console.log('Total questions compiled:', allQuestions.length);

const outPath = path.join(__dirname, 'toan365_data.js');
const fileContent = `// BỘ 365 BÀI TOÁN HAY VÀ KHÓ LỚP 4 (25 CHUYÊN ĐỀ BỒI DƯỠNG HSG & TOÁN NĂNG KHIẾU)
// Biên soạn: Thầy Nguyễn Đình Chinh (0941.492.468)
// Cấu trúc đầy đủ 25 chuyên đề - 365 bài toán chuẩn mực có lời giải chi tiết và chấm điểm tự động

const TOAN_365_DB = {
  grade1: [],
  grade2: [],
  grade3: [],
  grade4: ${JSON.stringify(allQuestions, null, 2)},
  grade5: []
};

if (typeof window !== 'undefined') {
  window.TOAN_365_DB = TOAN_365_DB;
  window.TOAN_365_DATA = TOAN_365_DB.grade4;
}
if (typeof module !== 'undefined') {
  module.exports = TOAN_365_DB;
}
`;

fs.writeFileSync(outPath, fileContent, 'utf8');
console.log('Successfully wrote toan365_data.js, size:', fileContent.length);
