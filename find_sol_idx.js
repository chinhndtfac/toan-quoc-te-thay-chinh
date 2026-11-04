const fs = require('fs');

const files = [
  'V:/ChinhND/Đề ôn tập/toan_nang_cao_lop_1/toan_nang_cao_lop_1_chuan.html',
  'V:/ChinhND/Đề ôn tập/toan_nang_cao_lop_2/toan_nang_cao_lop_2_chuan.html',
  'V:/ChinhND/Đề ôn tập/toan_nang_cao_lop_3/toan_nang_cao_lop_3_chuan.html',
  'V:/ChinhND/Đề ôn tập/365 Bài toán hay và khó/Lớp 4/tap_1_so_hoc_va_day_so.html',
  'V:/ChinhND/Đề ôn tập/365 Bài toán hay và khó/Lớp 4/tap_2_cac_dang_toan_dien_hinh_1.html',
  'V:/ChinhND/Đề ôn tập/365 Bài toán hay và khó/Lớp 4/tap_3_phuong_phap_giai_toan.html',
  'V:/ChinhND/Đề ôn tập/365 Bài toán hay và khó/Lớp 4/tap_4_to_hop_logic_phan_so.html',
  'V:/ChinhND/Đề ôn tập/365 Bài toán hay và khó/Lớp 4/tap_5_hinh_hoc_chia_het_chuyen_dong.html',
  'V:/ChinhND/Đề ôn tập/toan_nang_cao_lop_5/tap_1_so_hoc_va_ti_so_phan_tram.html',
  'V:/ChinhND/Đề ôn tập/toan_nang_cao_lop_5/tap_2_hinh_hoc_va_chuyen_dong.html'
];

files.forEach(f => {
  const c = fs.readFileSync(f, 'utf8');
  // First occurrence of <div class="sol-item">
  const firstSolIdx = c.indexOf('<div class="sol-item">');
  console.log(f.split('/').pop(), 'First sol-item index:', firstSolIdx);
});
