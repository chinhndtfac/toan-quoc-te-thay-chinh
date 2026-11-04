const fs = require('fs');

function checkGrade(filePath, grade) {
  const content = fs.readFileSync(filePath, 'utf8');
  console.log(`\n================ GRADE ${grade}: ${filePath.split('/').pop()} ================`);
  
  const solHeaderIdx = content.search(/HƯỚNG DẪN GIẢI/i);
  const probSection = content.substring(0, solHeaderIdx);
  const solSection = content.substring(solHeaderIdx);
  
  const chaps = probSection.split(/<div class="chapter-header">/);
  console.log('Chapters found:', chaps.length - 1);
  for (let i = 1; i < chaps.length; i++) {
    const part = chaps[i];
    const title = part.substring(0, part.indexOf('</div>')).trim();
    const probNums = [];
    const re = /<span class="problem-num">Bài\s*(\d+):<\/span>/g;
    let m;
    while ((m = re.exec(part)) !== null) probNums.push(parseInt(m[1], 10));
    console.log(`  ${title}: Bài ${probNums[0]} -> Bài ${probNums[probNums.length - 1]} (${probNums.length} bài)`);
  }
}

checkGrade('V:/ChinhND/Đề ôn tập/toan_nang_cao_lop_1/toan_nang_cao_lop_1_chuan.html', 1);
checkGrade('V:/ChinhND/Đề ôn tập/toan_nang_cao_lop_2/toan_nang_cao_lop_2_chuan.html', 2);
checkGrade('V:/ChinhND/Đề ôn tập/toan_nang_cao_lop_3/toan_nang_cao_lop_3_chuan.html', 3);
checkGrade('V:/ChinhND/Đề ôn tập/toan_nang_cao_lop_5/tap_1_so_hoc_va_ti_so_phan_tram.html', 5);
checkGrade('V:/ChinhND/Đề ôn tập/toan_nang_cao_lop_5/tap_2_hinh_hoc_va_chuyen_dong.html', 5);
