/**
 * tests_challenger_2_r2.js
 * Independent Adversarial Stress-Testing Suite for Round 2 Remediation
 * Agent: Challenger 2 (Empirical Challenger)
 */

const fs = require('fs');
const path = require('path');
const vm = require('vm');

const baseDir = __dirname;
let testCount = 0;
let passCount = 0;
let failCount = 0;

function assert(description, condition, details = '') {
  testCount++;
  if (condition) {
    passCount++;
    console.log(`  [PASS] Test ${testCount}: ${description} ${details}`);
  } else {
    failCount++;
    console.error(`  [FAIL] Test ${testCount}: ${description} ${details}`);
  }
}

console.log('='.repeat(80));
console.log('CHALLENGER 2 (ROUND 2) - EMPIRICAL ADVERSARIAL RE-CHALLENGE SUITE');
console.log('='.repeat(80));

// ============================================================================
// SUITE 1: SECTION 3.3 SCRIPT BLUEPRINT EXECUTION
// ============================================================================
console.log('\n>>> SUITE 1: Verifying Section 3.3 Blueprint Execution & TypeError Immunity');

const fixesPath = path.join(baseDir, '.agents/teamwork/survey_explorer_2/detailed_fixes.json');
const g4Path = path.join(baseDir, 'grade4_special.js');

const fixes = JSON.parse(fs.readFileSync(fixesPath, 'utf8'));
global.window = {};
const g4Data = require(g4Path);
// Deep clone list so we do not mutate the disk file
const list = JSON.parse(JSON.stringify(g4Data.GRADE4_SPECIAL_DATA || global.window.GRADE4_SPECIAL_DATA || g4Data));

let blueprintThrewError = false;
let errorMsg = '';
let patchedAssump = 0;
let patchedAvg = 0;

try {
  // Exact logic from Section 3.3 in KE_HOACH_CHINH_SUA_TRIET_DE.md lines 247-273
  for (const q of list) {
    const fix = fixes.find(f => f.id === q.id);
    if (!fix) continue;

    if (fix.category === 'ASSUMPTION_BUG') {
      const recAns = String(fix.recommendedAnswer || fix.correctAnswer || '').trim();
      q.answer = recAns;
      // Sinh mang acceptedAnswers thong minh
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
} catch (e) {
  blueprintThrewError = true;
  errorMsg = e.message;
}

assert('Section 3.3 blueprint executes without uncaught TypeError', !blueprintThrewError, errorMsg ? `(Error: ${errorMsg})` : '');
assert('Section 3.3 blueprint patches exactly 43 assumption bugs', patchedAssump === 43, `(Patched: ${patchedAssump}/43)`);
assert('Section 3.3 blueprint patches exactly 15 average format bugs', patchedAvg === 15, `(Patched: ${patchedAvg}/15)`);

// Check sample patched questions
const qValerie = list.find(q => q.id === 'G4-NC-1131');
assert('G4-NC-1131 (Valerie) answer updated to recommended "5"', qValerie && qValerie.answer === '5');
assert('G4-NC-1131 acceptedAnswers contains "5"', qValerie && qValerie.acceptedAnswers.includes('5'));

const qJimmy = list.find(q => q.id === 'G4-NC-1155');
const fixJimmy = fixes.find(f => f.id === 'G4-NC-1155');
assert('G4-NC-1155 (Jimmy & grandpa) answer updated to recommendedAnswer ("5, 61")',
  qJimmy && qJimmy.answer === fixJimmy.recommendedAnswer, `(Answer: ${qJimmy?.answer})`
);
assert('G4-NC-1155 acceptedAnswers contains all permutations ("5 và 61", "5, 61", "5; 61", "5 61")',
  qJimmy && ['5 và 61', '5, 61', '5; 61', '5 61'].every(v => qJimmy.acceptedAnswers.includes(v)),
  qJimmy ? `(Actual: ${JSON.stringify(qJimmy.acceptedAnswers)})` : ''
);

const qAvgSample = list.find(q => q.id === 'G4-NC-1074');
assert('G4-NC-1074 (Avg format) answer updated to "B"', qAvgSample && qAvgSample.answer === 'B');
assert('G4-NC-1074 acceptedAnswers includes "B", "b", "87", "(B) 87"',
  qAvgSample && ['B', 'b', '87', '(B) 87'].every(v => qAvgSample.acceptedAnswers.includes(v))
);

// Stress test: defensive against non-string recommendedAnswer
let testNonString = null;
try {
  const dummyFix = { category: 'ASSUMPTION_BUG', recommendedAnswer: 42 };
  const recAns = String(dummyFix.recommendedAnswer || dummyFix.correctAnswer || '').trim();
  testNonString = recAns;
} catch (e) {
  testNonString = null;
}
assert('Blueprint handles non-string numeric recommendedAnswer defensively', testNonString === '42');

// ============================================================================
// SUITE 2: SECTION 3.6 SCORING ENGINE PATCH & ADVERSARIAL STRESS TEST
// ============================================================================
console.log('\n>>> SUITE 2: Verifying Section 3.6 Scoring Engine Patch & Adversarial Defenses');

// Load index.html helper functions
const html = fs.readFileSync(path.join(baseDir, 'index.html'), 'utf8');
const cleanStart = html.indexOf('function cleanMathSymbols');
const submitStart = html.indexOf('function submitQuiz');
const helperCode = html.slice(cleanStart, submitStart);

const sandbox = { window: {}, console };
vm.createContext(sandbox);
vm.runInContext(helperCode, sandbox);

// Define Section 3.6 isAnswerCorrect inside sandbox
const sec36Code = `
function isAnswerCorrect(userAns, q) {
  if (userAns === undefined || userAns === null || userAns === '') return false;
  const u = userAns.toString().trim();
  const c = (q.answer || '').toString().trim();
  if (!u || !c) return false;

  // Chốt chặn 1: Đối chiếu trực tiếp qua hàm chuẩn hóa
  if (matchSingleAnswer(u, c)) return true;

  // Chốt chặn 2: Nếu đáp án chính chứa nhiều phương án lựa chọn cách nhau bởi ';' hoặc 'hoặc' hoặc 'hay'
  // (Bảo toàn tuyệt đối các câu có nhiều đáp số hợp lệ như G4-NC-1142)
  const alternatives = c.split(/;|\\bhoặc\\b|\\bhay\\b/i).map(s => s.trim()).filter(Boolean);
  if (alternatives.length > 1) {
    for (const alt of alternatives) {
      if (matchSingleAnswer(u, alt)) return true;
    }
  }

  // Chốt chặn 3: Tra cứu mảng acceptedAnswers (bao gồm cả các phương án phân tách bên trong)
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

  // Chốt chặn 4: Bóc tách tiền tố chữ cái phương án trắc nghiệm A-E
  // Xử lý triệt để các trường hợp q.answer lưu dạng "(B) 87", "B. 87", "Đáp án C"
  if (q.type === 'mc' || (Array.isArray(q.options) && q.options.length >= 2)) {
    // Chỉ trích xuất chữ cái nếu input của học sinh thực sự là một chữ cái phương án duy nhất (ví dụ "B", "(B)", "B.")
    // Ngăn ngừa triệt để việc các từ tự luận như "BOY", "BUY", "BIG" bị gọt nhầm thành Option B
    const uMatch = u.match(/^[\\(\\[\\s]*([A-Ea-e])[\\.\\:\\)\\s\\]]?$/);
    const uLetter = uMatch ? uMatch[1].toUpperCase() : null;

    if (uLetter && uLetter.length === 1) {
      const letterMatch = c.match(/^[\\(\\[\\s]*([A-Ea-e])[\\.\\:\\)\\s\\]]/);
      if (letterMatch && letterMatch[1].toUpperCase() === uLetter) return true;

      // Nếu q.answer lưu chuỗi text khớp với nội dung sau chữ cái phương án
      if (Array.isArray(q.options)) {
        for (let idx = 0; idx < q.options.length; idx++) {
          const optText = q.options[idx].replace(/^[A-Ea-e][\\.\\:\\)]\\s*/, '').trim();
          const optLetter = String.fromCharCode(65 + idx);
          if (matchSingleAnswer(c, optText) && uLetter === optLetter) return true;
        }
      }
    }
  }

  return false;
}
`;
vm.runInContext(sec36Code, sandbox);

const isAnswerCorrect = sandbox.isAnswerCorrect;

// Test 2.1: Multi-alternative regression test (G4-NC-1142)
const q1142 = { id: 'G4-NC-1142', answer: '1 thuyền lớn và 8 thuyền nhỏ, hoặc 4 thuyền lớn' };
assert('G4-NC-1142 accepts "4 thuyền lớn"', isAnswerCorrect('4 thuyền lớn', q1142) === true);
assert('G4-NC-1142 accepts "1 thuyền lớn và 8 thuyền nhỏ"', isAnswerCorrect('1 thuyền lớn và 8 thuyền nhỏ', q1142) === true);
assert('G4-NC-1142 rejects "2 thuyền lớn"', isAnswerCorrect('2 thuyền lớn', q1142) === false);
assert('G4-NC-1142 rejects "10 thuyền"', isAnswerCorrect('10 thuyền', q1142) === false);

// Test 2.2: Adversarial words test on (B) 87 multiple choice
const q1074 = {
  id: 'G4-NC-1074',
  answer: '(B) 87',
  type: 'mc',
  options: ['A. 80', 'B. 87', 'C. 90', 'D. 95']
};

assert('G4-NC-1074 accepts valid option letter "B"', isAnswerCorrect('B', q1074) === true);
assert('G4-NC-1074 accepts valid option letter "b" (lowercase)', isAnswerCorrect('b', q1074) === true);
assert('G4-NC-1074 accepts formatted option "(B)"', isAnswerCorrect('(B)', q1074) === true);
assert('G4-NC-1074 accepts formatted option "B."', isAnswerCorrect('B.', q1074) === true);
assert('G4-NC-1074 accepts formatted option "[B]"', isAnswerCorrect('[B]', q1074) === true);
assert('G4-NC-1074 accepts formatted option "B:"', isAnswerCorrect('B:', q1074) === true);
assert('G4-NC-1074 accepts numeric answer "87"', isAnswerCorrect('87', q1074) === true);

// Adversarial word rejection
const adversarialWords = ['BOY', 'BIG', 'BUY', 'BED', 'BAD', 'CAB', 'BE', 'BEE', 'ACE', 'DEAD', 'DEED', 'CANDY', 'DOG'];
let falsePositives = 0;
for (const word of adversarialWords) {
  if (isAnswerCorrect(word, q1074)) {
    falsePositives++;
    console.error(`  [LEAK] Word "${word}" was erroneously accepted!`);
  }
}
assert('Section 3.6 rejects all 13 adversarial words (BOY, BIG, BUY, etc.)', falsePositives === 0, `(False positives: ${falsePositives})`);

assert('G4-NC-1074 rejects wrong options "A", "C", "D"',
  !isAnswerCorrect('A', q1074) && !isAnswerCorrect('C', q1074) && !isAnswerCorrect('D', q1074)
);

// Empty and null inputs
assert('Rejects empty string input ""', isAnswerCorrect('', q1074) === false);
assert('Rejects null input', isAnswerCorrect(null, q1074) === false);
assert('Rejects undefined input', isAnswerCorrect(undefined, q1074) === false);

// Test 2.3: Multiple answers in acceptedAnswers
const qAccepted = {
  id: 'G4-NC-1155',
  answer: '5 và 61',
  acceptedAnswers: ['5 và 61', '5, 61', '5; 61', '5 61']
};
assert('qAccepted accepts "5 và 61"', isAnswerCorrect('5 và 61', qAccepted) === true);
assert('qAccepted accepts "5, 61"', isAnswerCorrect('5, 61', qAccepted) === true);
assert('qAccepted accepts "5; 61"', isAnswerCorrect('5; 61', qAccepted) === true);
assert('qAccepted accepts "5 61"', isAnswerCorrect('5 61', qAccepted) === true);
assert('qAccepted rejects "5 và 62"', isAnswerCorrect('5 và 62', qAccepted) === false);

// ============================================================================
// SUITE 3: SECTION 3.2 TIMO DEDUPLICATION & DISAMBIGUATION
// ============================================================================
console.log('\n>>> SUITE 3: Verifying Section 3.2 TIMO Disambiguation & Re-Indexing');

const timoRawData = require(path.join(baseDir, 'timo_data.js')).TIMO_DB;
// Deep clone TIMO_DB
const timoDbClone = JSON.parse(JSON.stringify(timoRawData));

function normalizeRoundName(round) {
  if (!round) return '';
  return round
    .replace(/^Vong loai\s*-\s*De so\s*(\d+)/i, (m, d) => `Vòng loại - Đề số ${d.padStart(2, '0')}`)
    .replace(/^Vòng loại\s*-\s*Đề số\s*(\d+)/i, (m, d) => `Vòng loại - Đề số ${d.padStart(2, '0')}`)
    .replace(/^Vong quoc gia\s*-\s*De so\s*(\d+)/i, (m, d) => `Vòng quốc gia - Đề số ${d.padStart(2, '0')}`)
    .replace(/^Vòng quốc gia\s*-\s*Đề số\s*(\d+)/i, (m, d) => `Vòng quốc gia - Đề số ${d.padStart(2, '0')}`);
}

const cleanedDb = {};
let removedCount = 0;
let reindexedCount = 0;

for (const grade of ['grade1', 'grade2', 'grade3', 'grade4', 'grade5']) {
  const list = timoDbClone[grade] || [];
  const seenTexts = new Set();
  const seenIds = new Set();
  const uniqueList = [];

  for (const q of list) {
    q.round = normalizeRoundName(q.round);

    if (q.id === '4-Vong loai - De so 5-17') {
      q.answer = 'D';
      q.acceptedAnswers = ['D', 'd', '24'];
    }

    // 1. Kiem tra trung lap noi dung thuc su
    const textKey = `${q.round}__${(q.text || '').trim().replace(/\s+/g, ' ')}`;
    if (seenTexts.has(textKey)) {
      removedCount++;
      continue;
    }
    seenTexts.add(textKey);

    // 2. Bao toan cau hoi khac nhau nhung trung ma ID
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
}

const totalCleaned = Object.values(cleanedDb).reduce((a, b) => a + b.length, 0);

assert('TIMO algorithm removes only true text duplicates (13-28)', removedCount >= 13 && removedCount <= 28, `(Removed: ${removedCount})`);
assert('TIMO algorithm preserves all distinct questions (total: >= 851, actual 866)', totalCleaned >= 851, `(Total preserved: ${totalCleaned})`);
assert('TIMO algorithm re-indexes colliding IDs (reindexed: >= 230, actual 238)', reindexedCount >= 230, `(Reindexed: ${reindexedCount})`);

// Verify that within each grade, all IDs are 100% unique after disambiguation
let allUnique = true;
for (const grade of ['grade1', 'grade2', 'grade3', 'grade4', 'grade5']) {
  const ids = cleanedDb[grade].map(q => q.id);
  const uSet = new Set(ids);
  if (uSet.size !== ids.length) {
    allUnique = false;
    console.error(`  Duplicate ID found in ${grade}: ${ids.length - uSet.size} duplicates!`);
  }
}
assert('All TIMO questions have 100% strictly unique IDs within each grade', allUnique);

// Verify TIMO G4 Đề 5 Q17 fix
const timoQ17 = cleanedDb.grade4.find(q => q.id === '4-Vong loai - De so 5-17');
assert('TIMO G4 Đề 5 Q17 answer fixed to "D"', timoQ17 && timoQ17.answer === 'D');
assert('TIMO G4 Đề 5 Q17 acceptedAnswers contains "D", "d", "24"',
  timoQ17 && ['D', 'd', '24'].every(v => timoQ17.acceptedAnswers.includes(v))
);

// ============================================================================
// SUITE 4: SECTION 4.2 PRIME NUMBERS NON-COLLISION CHECK
// ============================================================================
console.log('\n>>> SUITE 4: Verifying Section 4.2 Prime Numbers Non-Collision');

const origContent = fs.readFileSync(path.join(baseDir, 'grade4_special_orig.js'), 'utf8');
const origList = vm.runInContext(origContent + '; GRADE4_SPECIAL_DB;', vm.createContext({ window: {} }));

// Check if G4-NC-1110 to 1116 already exist in orig
const existing1110to1116 = origList.filter(q => /^G4-NC-111[0-6]$/.test(q.id));
assert('Original DB contains existing questions at IDs G4-NC-1110 through 1116',
  existing1110to1116.length === 7, `(Found: ${existing1110to1116.length}/7)`
);

// Verify plan specifies G4-NC-1109-1 to G4-NC-1109-8
const planMd = fs.readFileSync(path.join(baseDir, 'KE_HOACH_CHINH_SUA_TRIET_DE.md'), 'utf8');
const usesBranching = planMd.includes('G4-NC-1109-1') && planMd.includes('G4-NC-1109-8') &&
  planMd.includes('Tuyệt đối không dùng dải ID tuần tự `G4-NC-1110`');
assert('Plan Section 4.2 enforces branching IDs G4-NC-1109-1..8 and forbids sequential G4-NC-1110..1116', usesBranching);

// ============================================================================
// SUITE 5: SECTION 3.6 ARCHIMEDES RUNTIME CLOBBER VERIFICATION
// ============================================================================
console.log('\n>>> SUITE 5: Verifying Section 3.6 Archimedes Runtime Clobber Fix');

const archG4Content = fs.readFileSync(path.join(baseDir, 'archimedes_g4_real.js'), 'utf8');
const linesArch = archG4Content.split(/\r?\n/);
let foundClobber = false;
let clobberLineNum = -1;
for (let i = 0; i < linesArch.length; i++) {
  if (linesArch[i].includes('ARCHIMEDES_MATH_DB.grade4 = ARCHIMEDES_G4_REAL')) {
    foundClobber = true;
    clobberLineNum = i + 1;
    break;
  }
}
assert('archimedes_g4_real.js contains runtime clobber at line 865-867', foundClobber, `(Found at line: ${clobberLineNum})`);

const planClobberAddressed = planMd.includes('Vô hiệu hóa lệnh ghi đè runtime làm mất 29 tuần') &&
  planMd.includes('dòng 865 - 867');
assert('Plan Section 3.6 explicitly neutralizes runtime clobber in Phase 1', planClobberAddressed);

// ============================================================================
// SUITE 6: CHECK INTEGRITY OF VERIFY_AUDIT_CATALOG (75 CHECKS)
// ============================================================================
console.log('\n>>> SUITE 6: Verifying verify_audit_catalog.js Independent Execution');

const execSync = require('child_process').execSync;
let auditOutput = '';
let auditSuccess = false;
try {
  auditOutput = execSync(`"${process.execPath}" "${path.join(baseDir, 'verify_audit_catalog.js')}"`, { encoding: 'utf8' });
  auditSuccess = auditOutput.includes('75/75 TIÊU CHÍ ĐẠT (100.0%)');
} catch (e) {
  auditOutput = e.stdout || e.message;
}
assert('verify_audit_catalog.js executes with 75/75 (100%) checks passing', auditSuccess);

// ============================================================================
// SUMMARY
// ============================================================================
console.log('\n' + '='.repeat(80));
console.log(`TOTAL TESTS: ${testCount} | PASSED: ${passCount} | FAILED: ${failCount}`);
console.log(`SUCCESS RATE: ${((passCount / testCount) * 100).toFixed(1)}%`);
if (failCount === 0) {
  console.log('>>> ALL ADVERSARIAL STRESS TESTS PASSED EMPIRICALLY <<<');
  console.log('>>> VERDICT: APPROVE <<<');
} else {
  console.error('>>> SOME STRESS TESTS FAILED <<<');
}
console.log('='.repeat(80) + '\n');

if (failCount > 0) process.exit(1);
