const fs = require('fs');

const path = 'C:/Users/HNBV3384/.gemini/antigravity/scratch/toan-quoc-te/index.html';
let html = fs.readFileSync(path, 'utf8');

// 1. BUMP ALL CACHE-BUSTING SCRIPT TAGS to v=20261105_1400
html = html.replace(/v=20261105_1200/g, 'v=20261105_1400');

// 2. Add resolveQuestionImage and isQuestionPlayable helper functions right before startFreshQuiz
const helperFunctions = `    // HỆ THỐNG KIỂM SOÁT HÌNH ẢNH & ĐỘ SẴN SÀNG CỦA ĐỀ THI
    function resolveQuestionImage(q) {
      if (q && q.image && q.image.trim()) return q.image;
      if (!q || !q.text) return null;
      if (typeof TIMO_DB !== 'undefined') {
        for (let g = 1; g <= 5; g++) {
          const list = TIMO_DB['grade' + g] || [];
          const found = list.find(item => (q.origId && item.id === q.origId) || (q.text && item.text === q.text));
          if (found && found.image) return found.image;
        }
      }
      return null;
    }

    function isQuestionPlayable(q) {
      if (!q || !q.text) return false;
      const t = (q.text + ' ' + (q.explanation || '')).toLowerCase();
      const requiresImage = /in the figure below|the figure below|figure below|polygon below|grid below|pattern below|shown in the figure|the following figure|hình dưới đây|trong hình dưới|theo hình vẽ|như hình vẽ|bảng dưới đây|bảng số dưới đây|được tô màu|hình sau|hình vẽ sau|khối lập phương trong hình|ở hình dưới|nhìn vào hình bên|cho hình vuông dưới đây/i.test(t);
      const img = resolveQuestionImage(q);
      if (requiresImage && (!img || !img.trim())) {
        return false;
      }
      return true;
    }

    `;

// Check saved session in startQuiz for unplayable questions
const oldStartQuizResume = `      // 1. KIỂM TRA BÀI ĐANG LÀM DỞ
      const savedSession = getSavedSession(state.selectedGrade, state.selectedExam, state.selectedRound);
      if (savedSession) {
        state.resumeModal = { type: 'in_progress', session: savedSession };
        render();
        return;
      }`;

const newStartQuizResume = `      // 1. KIỂM TRA BÀI ĐANG LÀM DỞ
      const savedSession = getSavedSession(state.selectedGrade, state.selectedExam, state.selectedRound);
      if (savedSession) {
        const hasUnplayable = savedSession.questions && savedSession.questions.some(q => !isQuestionPlayable(q));
        if (hasUnplayable) {
          clearSavedSession(state.selectedGrade, state.selectedExam, state.selectedRound);
        } else {
          state.resumeModal = { type: 'in_progress', session: savedSession };
          render();
          return;
        }
      }`;

if (html.includes(oldStartQuizResume)) {
  html = html.replace(oldStartQuizResume, newStartQuizResume);
  console.log('Patched startQuiz resume logic.');
}

// Replace startFreshQuiz with filtered & robust version
const sfqTarget = `    function startFreshQuiz() {
      clearSavedSession(state.selectedGrade, state.selectedExam, state.selectedRound);
      let pool = [];`;

const sfqReplacement = `${helperFunctions}function startFreshQuiz() {
      clearSavedSession(state.selectedGrade, state.selectedExam, state.selectedRound);
      let pool = [];`;

if (html.includes(sfqTarget)) {
  html = html.replace(sfqTarget, sfqReplacement);
  console.log('Inserted helper functions before startFreshQuiz.');
} else {
  console.warn('sfqTarget not found!');
}

// Update TIMO branch in startFreshQuiz
const oldTimoBranch = `      // Nếu chọn kỳ thi TIMO
      else if (state.selectedExam === 'TIMO' && typeof TIMO_DB !== 'undefined' && TIMO_DB['grade' + state.selectedGrade]) {
        const gradeList = TIMO_DB['grade' + state.selectedGrade];
        if (state.selectedRound === 'random') {
          pool = [...gradeList].sort(() => Math.random() - 0.5).slice(0, 15);
        } else {
          pool = gradeList.filter(q => q.round === state.selectedRound);
        }
      }`;

const newTimoBranch = `      // Nếu chọn kỳ thi TIMO
      else if (state.selectedExam === 'TIMO' && typeof TIMO_DB !== 'undefined' && TIMO_DB['grade' + state.selectedGrade]) {
        const allList = TIMO_DB['grade' + state.selectedGrade];
        if (state.selectedRound === 'random') {
          pool = allList.filter(isQuestionPlayable).sort(() => Math.random() - 0.5).slice(0, 15);
        } else {
          pool = allList.filter(q => q.round === state.selectedRound && isQuestionPlayable(q));
          if (pool.length < 15) {
            const backups = allList.filter(q => q.round !== state.selectedRound && isQuestionPlayable(q)).sort(() => Math.random() - 0.5);
            for (let b of backups) {
              if (pool.length >= 15) break;
              if (!pool.some(p => p.id === b.id)) pool.push(b);
            }
          }
        }
      }`;

if (html.includes(oldTimoBranch)) {
  html = html.replace(oldTimoBranch, newTimoBranch);
  console.log('Patched TIMO branch in startFreshQuiz.');
} else {
  console.warn('oldTimoBranch not found!');
}

// Add origId to state.questions mapping
const oldMapping = `      state.questions = pool.map((q, idx) => ({
        id: idx + 1,
        text: q.text,
        image: q.image || null,`;

const newMapping = `      state.questions = pool.map((q, idx) => ({
        id: idx + 1,
        origId: q.id,
        text: q.text,
        image: resolveQuestionImage(q) || null,`;

if (html.includes(oldMapping)) {
  html = html.replace(oldMapping, newMapping);
  console.log('Patched state.questions mapping.');
} else {
  console.warn('oldMapping not found!');
}

// Update renderQuiz image resolution & fallback card
const oldRenderCard = `          <div class="question-box">
            \${formatQuestionText(q.text)}
            \${q.image ? \`<div style="text-align:center;margin:15px 0;"><img src="\${q.image}" alt="Hình minh họa đề thi" style="max-width:100%;max-height:380px;border-radius:12px;box-shadow:0 3px 12px rgba(0,0,0,0.1);background:white;padding:10px;object-fit:contain"></div>\` : ''}
          </div>`;

const newRenderCard = `          <div class="question-box">
            \${formatQuestionText(q.text)}
            \${(() => {
              const img = resolveQuestionImage(q);
              if (img) {
                return \`<div style="text-align:center;margin:15px 0;"><img src="\${img}" alt="Hình minh họa đề thi" style="max-width:100%;max-height:380px;border-radius:12px;box-shadow:0 3px 12px rgba(0,0,0,0.1);background:white;padding:10px;object-fit:contain"></div>\`;
              }
              const requiresImg = /in the figure below|the figure below|figure below|polygon below|grid below|pattern below|shown in the figure|the following figure|hình dưới đây|trong hình dưới|theo hình vẽ|như hình vẽ|bảng dưới đây|bảng số dưới đây|hình sau|hình vẽ sau|khối lập phương trong hình|ở hình dưới|nhìn vào hình bên|cho hình vuông dưới đây/i.test(q.text || '');
              if (requiresImg) {
                return \`<div style="background:#FFFBEB;border:2px dashed #F59E0B;border-radius:14px;padding:16px;margin:16px 0;text-align:center;color:#92400E"><div style="font-size:1.8em;margin-bottom:6px">🖼️</div><div style="font-weight:800;font-size:1.05em">Hình vẽ đang được hệ thống đồng bộ</div><div style="font-size:0.9em;margin-top:4px;color:#78350F">Thầy Chinh đang đồng bộ ảnh chuẩn cho câu hỏi này. Con hãy bấm <b>Câu sau ➔</b> để làm tiếp các câu khác nhé!</div></div>\`;
              }
              return '';
            })()}
          </div>`;

if (html.includes(oldRenderCard)) {
  html = html.replace(oldRenderCard, newRenderCard);
  console.log('Patched renderQuiz card image display.');
} else {
  console.warn('oldRenderCard not found!');
}

// Update renderResults d.image
const oldResultImg = `\${d.image ? \`<div style="text-align:center;margin:12px 0;"><img src="\${d.image}" alt="Hình minh họa" style="max-width:100%;max-height:360px;border-radius:10px;box-shadow:0 2px 8px rgba(0,0,0,0.1);background:white;padding:8px;object-fit:contain"></div>\` : ''}`;

const newResultImg = `\${(() => {
                const img = resolveQuestionImage(d);
                return img ? \`<div style="text-align:center;margin:12px 0;"><img src="\${img}" alt="Hình minh họa" style="max-width:100%;max-height:360px;border-radius:10px;box-shadow:0 2px 8px rgba(0,0,0,0.1);background:white;padding:8px;object-fit:contain"></div>\` : '';
              })()}`;

if (html.includes(oldResultImg)) {
  html = html.replace(oldResultImg, newResultImg);
  console.log('Patched renderResults image display.');
} else {
  console.warn('oldResultImg not found!');
}

fs.writeFileSync(path, html, 'utf8');
console.log('Successfully wrote patched index.html!');
