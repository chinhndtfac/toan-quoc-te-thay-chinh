const fs = require('fs');
const path = require('path');

const htmlPath = path.join(__dirname, '../index.html');
let html = fs.readFileSync(htmlPath, 'utf8');

// 1. Vá FMO trong getAvailableRounds
const oldFmo = `} else if (e === 'FMO') {
        if (typeof FMO_DATA === 'undefined') return [];`;
const newFmo = `} else if (e === 'FMO') {
        if (typeof FMO_DATA === 'undefined' || grade !== 4) return [];`;

if (html.includes(oldFmo)) {
  html = html.replace(oldFmo, newFmo);
  console.log('Đã vá bộ lọc FMO trong getAvailableRounds!');
}

// 2. Vá thuật toán isAnswerCorrect
const oldIsAns = `function isAnswerCorrect(userAns, q) {
      if (userAns === undefined || userAns === null || userAns === '') return false;
      const u = userAns.toString().trim();
      const c = (q.answer || '').toString().trim();
      if (!u || !c) return false;

      // 1. So khớp trực tiếp với đáp án chính
      if (matchSingleAnswer(u, c)) return true;

      // 2. Nếu đáp án chính chứa nhiều phương án lựa chọn cách nhau bởi ';' hoặc 'hoặc' hoặc 'hay'
      // Ví dụ: "Đỏ - Xanh - Đỏ - Xanh; Xanh - Đỏ - Xanh - Đỏ"
      const alternatives = c.split(/;|\\bhoặc\\b|\\bhay\\b/i).map(s => s.trim()).filter(Boolean);
      if (alternatives.length > 1) {
        for (const alt of alternatives) {
          if (matchSingleAnswer(u, alt)) return true;
        }
      }

      // 3. Kiểm tra mảng acceptedAnswers
      if (Array.isArray(q.acceptedAnswers)) {
        for (const item of q.acceptedAnswers) {
          if (matchSingleAnswer(u, item)) return true;
          const subAlts = item.toString().split(/;|\\bhoặc\\b|\\bhay\\b/i).map(s => s.trim()).filter(Boolean);
          if (subAlts.length > 1) {
            for (const sub of subAlts) {
              if (matchSingleAnswer(u, sub)) return true;
            }
          }
        }
      }

      return false;
    }`;

const newIsAns = `function isAnswerCorrect(userAns, q) {
      if (userAns === undefined || userAns === null || userAns === '') return false;
      const u = userAns.toString().trim();
      const c = (q.answer || '').toString().trim();
      if (!u || !c) return false;

      // 1. So khớp trực tiếp với đáp án chính
      if (matchSingleAnswer(u, c)) return true;

      // 2. Nếu đáp án chính chứa nhiều phương án lựa chọn cách nhau bởi ';' hoặc 'hoặc' hoặc 'hay'
      const alternatives = c.split(/;|\\bhoặc\\b|\\bhay\\b/i).map(s => s.trim()).filter(Boolean);
      if (alternatives.length > 1) {
        for (const alt of alternatives) {
          if (matchSingleAnswer(u, alt)) return true;
        }
      }

      // 3. Kiểm tra mảng acceptedAnswers
      if (Array.isArray(q.acceptedAnswers)) {
        for (const item of q.acceptedAnswers) {
          if (matchSingleAnswer(u, item)) return true;
          const subAlts = item.toString().split(/;|\\bhoặc\\b|\\bhay\\b/i).map(s => s.trim()).filter(Boolean);
          if (subAlts.length > 1) {
            for (const sub of subAlts) {
              if (matchSingleAnswer(u, sub)) return true;
            }
          }
        }
      }

      // 4. Bóc tách phương án trắc nghiệm A-E thông minh đa tầng
      if (q.type === 'mc' || (Array.isArray(q.options) && q.options.length >= 2)) {
        const uMatch = u.match(/^[\\(\\[\\s]*([A-Ea-e])[\\.\\:\\)\\s\\]]?$/);
        const uLetter = uMatch ? uMatch[1].toUpperCase() : null;

        if (uLetter && uLetter.length === 1) {
          const cMatch = c.match(/^[\\(\\[\\s]*([A-Ea-e])[\\.\\:\\)\\s\\]]?/);
          if (cMatch && cMatch[1].toUpperCase() === uLetter) return true;

          const optIdx = uLetter.charCodeAt(0) - 65;
          if (q.options && q.options[optIdx]) {
            const optText = q.options[optIdx].replace(/^[A-Ea-e][\\.\\:\\)]\\s*/, '').trim();
            if (matchSingleAnswer(optText, c)) return true;
          }
        }
      }

      return false;
    }`;

if (html.includes('function isAnswerCorrect(userAns, q) {')) {
  // Replace isAnswerCorrect
  const startIdx = html.indexOf('function isAnswerCorrect(userAns, q) {');
  const endIdx = html.indexOf('function submitQuiz() {');
  if (startIdx !== -1 && endIdx !== -1) {
    html = html.slice(0, startIdx) + newIsAns + '\n\n    ' + html.slice(endIdx);
    console.log('Đã vá động cơ chấm trắc nghiệm đa tầng trong index.html!');
  }
}

// 3. Cập nhật version query string cho script tags
html = html.replace(/\.js\?v=[0-9_]+/g, '.js?v=20261105_1200');
console.log('Đã cập nhật mã cache buster v=20261105_1200 cho toàn bộ script tags!');

// 4. Cập nhật nhãn ASMO trong CONFIG.exams thành "(Sắp ra mắt)" để tránh học sinh click nhầm
html = html.replace(/\{ id: 'ASMO', name: 'ASMO', emoji: '🌏', desc: 'Olympic Toán châu Á' \}/, `{ id: 'ASMO', name: 'ASMO (Sắp mở)', emoji: '🌏', desc: 'Olympic Toán châu Á (Đang cập nhật ngân hàng đề thi chính thức)' }`);

fs.writeFileSync(htmlPath, html, 'utf8');
console.log('Đã cập nhật thành công index.html!');
