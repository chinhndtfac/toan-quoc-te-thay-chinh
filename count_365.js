const fs = require('fs');
const path = 'V:\\ChinhND\\Đề ôn tập\\365 Bài toán hay và khó lớp 4';

const files = fs.readdirSync(path).filter(f => f.endsWith('.html'));
let totalChapters = 0;
let totalProblems = 0;

files.forEach(file => {
  const full = `${path}\\${file}`;
  const content = fs.readFileSync(full, 'utf8');
  const chapters = content.match(/<div class="chapter-header">([^<]+)<\/div>/g) || [];
  const problems = content.match(/<div class="problem-item"><span class="problem-num">Bài\s*(\d+):<\/span>([\s\S]*?)<\/div>/g) || [];
  console.log(`File ${file}: ${chapters.length} chapters, ${problems.length} problems`);
  chapters.forEach(c => {
    const title = c.replace(/<[^>]+>/g, '').trim();
    console.log(`   - ${title}`);
  });
  totalChapters += chapters.length;
  totalProblems += problems.length;
});

console.log(`\nTOTAL: ${totalChapters} chapters, ${totalProblems} problems`);
