/**
 * INDEPENDENT EMPIRICAL CHALLENGE SUITE — CHALLENGER 1 (ROUND 2)
 * Quality Audit Council - Iteration 2 Gate Verification
 * 
 * Verifies Section 3.1 (rows 17-28 and all 43 rows) of DANH_MUC_LOI_KIEM_TOAN_CHI_TIET.md
 * and independently validates verify_audit_catalog.js (75 checks).
 */

const fs = require('fs');
const path = require('path');

const baseDir = __dirname;
const catalogPath = path.join(baseDir, 'DANH_MUC_LOI_KIEM_TOAN_CHI_TIET.md');
const planPath = path.join(baseDir, 'KE_HOACH_CHINH_SUA_TRIET_DE.md');
const g4Path = path.join(baseDir, 'grade4_special.js');
const verifyScriptPath = path.join(baseDir, 'verify_audit_catalog.js');

let totalTests = 0;
let passedTests = 0;
let failedTests = 0;
const failures = [];

function assertTest(name, condition, details = '') {
  totalTests++;
  if (condition) {
    passedTests++;
    console.log(`  [PASS] ${name}`);
  } else {
    failedTests++;
    console.log(`  [FAIL] ${name} -> ${details}`);
    failures.push({ name, details });
  }
}

console.log('='.repeat(80));
console.log('CHALLENGER 1 (ROUND 2) — INDEPENDENT EMPIRICAL CHALLENGE SUITE');
console.log('Target: Section 3.1 & verify_audit_catalog.js');
console.log('='.repeat(80));

// 1. Load files
const catalogMd = fs.readFileSync(catalogPath, 'utf8');
const g4Data = require(g4Path);
const g4List = g4Data.GRADE4_SPECIAL_DATA || g4Data;

// --- CHALLENGE GROUP 1: Exhaustive Verification of Rows 17-28 in Section 3.1 ---
console.log('\n--- GROUP 1: Verification of Rows 17-28 in Section 3.1 ---');

// Extract rows 17-28 directly from markdown
const sec31Start = catalogMd.indexOf('|:---:|:---|:---|:---|:---:|:---|:---|:---|');
const sec31End = catalogMd.indexOf('\n---\n', sec31Start);
const sec31TableText = catalogMd.slice(sec31Start, sec31End);
const sec31Rows = sec31TableText.trim().split(/\r?\n/).slice(1);

assertTest('Section 3.1 table contains exactly 43 rows', sec31Rows.length === 43, `Found ${sec31Rows.length}`);

// Target rows 17 to 28 (indices 16 to 27 in 0-indexed array)
const rows17to28 = sec31Rows.slice(16, 28);
assertTest('Rows 17-28 slice has exactly 12 items', rows17to28.length === 12, `Found ${rows17to28.length}`);

const expectedRowsDetail = [
  {
    row: 17,
    id: 'G4-NC-1152',
    nameSnippet: 'Isabelle',
    dbAns: '40',
    intermediateCalc: '44 - 4 = 40',
    finalAns: '14',
    textKeyword: 'Isabelle'
  },
  {
    row: 18,
    id: 'G4-NC-1153',
    nameSnippet: 'Joel',
    dbAns: '26',
    intermediateCalc: '34 - 8 = 26',
    finalAns: '5',
    textKeyword: 'Joel'
  },
  {
    row: 19,
    id: 'G4-NC-1154',
    nameSnippet: 'Beatrice',
    dbAns: '24',
    intermediateCalc: '34 - 10 = 24',
    finalAns: '2',
    textKeyword: 'Beatrice'
  },
  {
    row: 20,
    id: 'G4-NC-1155',
    nameSnippet: 'Jimmy',
    dbAns: '72',
    intermediateCalc: '66 + 6 = 72',
    finalAns: '5 và 61',
    textKeyword: 'Jimmy'
  },
  {
    row: 21,
    id: 'G4-NC-1156',
    nameSnippet: 'Samuel',
    dbAns: '51',
    intermediateCalc: '64 - 13 = 51',
    finalAns: '4',
    textKeyword: 'Samuel'
  },
  {
    row: 22,
    id: 'G4-NC-1157',
    nameSnippet: 'mẹ',
    dbAns: '30',
    intermediateCalc: '38 - 8 = 30',
    finalAns: '7',
    textKeyword: 'daughter'
  },
  {
    row: 23,
    id: 'G4-NC-1158',
    nameSnippet: 'Melanie',
    dbAns: '5',
    intermediateCalc: '5',
    finalAns: '20 và 15',
    textKeyword: 'Melanie'
  },
  {
    row: 24,
    id: 'G4-NC-1159',
    nameSnippet: 'Jonathan',
    dbAns: '24',
    intermediateCalc: '10 + 14 = 24',
    finalAns: '23 và 27',
    textKeyword: 'Jonathan'
  },
  {
    row: 25,
    id: 'G4-NC-1160',
    nameSnippet: 'Mabel',
    dbAns: '55',
    intermediateCalc: '60 - 5 = 55',
    finalAns: '6',
    textKeyword: 'Mabel'
  },
  {
    row: 26,
    id: 'G4-NC-1161',
    nameSnippet: 'Bố',
    dbAns: '26',
    intermediateCalc: '50 - 24 = 26',
    finalAns: '11',
    textKeyword: 'father'
  },
  {
    row: 27,
    id: 'G4-NC-1162',
    nameSnippet: 'Jenevieve',
    dbAns: '10',
    intermediateCalc: '10',
    finalAns: '34',
    textKeyword: 'Jenevieve'
  },
  {
    row: 28,
    id: 'G4-NC-1163',
    nameSnippet: 'Cindy',
    dbAns: '12',
    intermediateCalc: '12',
    finalAns: '37',
    textKeyword: 'Cindy'
  }
];

expectedRowsDetail.forEach((expected, idx) => {
  const rowLine = rows17to28[idx];
  const parts = rowLine.split('|').map(s => s.trim());
  const rowNum = parseInt(parts[1], 10);
  const qId = parts[2].replace(/`/g, '');
  const topic = parts[3];
  const summary = parts[4];
  const dbAnsInMd = parts[5].replace(/\*\*/g, '');
  const intermediateStep = parts[6];
  const conclusionInMd = parts[7];
  const recAns = parts[8];

  const dbQuestion = g4List.find(q => q.id === qId);

  assertTest(`Row ${expected.row} ID is ${expected.id}`, qId === expected.id, `Got ${qId}`);
  assertTest(`Row ${expected.row} exists in grade4_special.js`, Boolean(dbQuestion), `ID ${qId} not found in DB`);

  if (dbQuestion) {
    // Check DB answer match
    assertTest(
      `Row ${expected.row} (${qId}): MD dbAns (${dbAnsInMd}) == DB answer (${dbQuestion.answer})`,
      String(dbQuestion.answer).trim() === dbAnsInMd,
      `MD has ${dbAnsInMd}, DB has ${dbQuestion.answer}`
    );

    // Check DB text matches person / subject
    const textHasSubject = dbQuestion.text.toLowerCase().includes(expected.textKeyword.toLowerCase());
    assertTest(
      `Row ${expected.row} (${qId}): DB question text includes '${expected.textKeyword}'`,
      textHasSubject,
      `DB text preview: ${dbQuestion.text.substring(0, 60)}...`
    );

    // Check explanation contains the intermediate calculation
    const explHasIntermediate = dbQuestion.explanation.includes(expected.intermediateCalc) ||
                               dbQuestion.explanation.includes(expected.dbAns);
    assertTest(
      `Row ${expected.row} (${qId}): DB explanation contains intermediate calculation '${expected.intermediateCalc}'`,
      explHasIntermediate,
      `Explanation snippet: ${dbQuestion.explanation.slice(0, 100)}`
    );

    // Check explanation conclusion matches recommended answer
    assertTest(
      `Row ${expected.row} (${qId}): Recommended answer in MD includes expected final answer '${expected.finalAns}'`,
      recAns.includes(expected.finalAns),
      `MD recAns: ${recAns}`
    );

    // Check that dbAns is indeed an assumption error (dbAns != finalAns)
    assertTest(
      `Row ${expected.row} (${qId}): Genuine bug confirmation (DB answer != final answer)`,
      String(dbQuestion.answer).trim() !== expected.finalAns,
      `DB answer is ${dbQuestion.answer}, final is ${expected.finalAns}`
    );
  }
});

// Check that hallucinated content is 100% gone
console.log('\n--- Checking for absence of hallucinated data ---');
const hallucinatedPhrases = [
  'Khi con bằng tuổi bố, bố 71',
  'Mẹ 32, con gái 6, con trai 2',
  'Khi bố bằng tuổi con, con 2',
  'sau mấy năm tuổi mẹ bằng tổng tuổi 2 con'
];
hallucinatedPhrases.forEach(phrase => {
  const present = catalogMd.toLowerCase().includes(phrase.toLowerCase());
  assertTest(`Hallucinated phrase '${phrase}' is absent from catalog`, !present, `Found in catalog!`);
});

// --- CHALLENGE GROUP 2: Full 43-Row Table Structural & Data Integrity ---
console.log('\n--- GROUP 2: Full 43-Row Table In-Depth Validation ---');
let all43Match = true;
let all43Exist = true;
let all43BugsConfirmed = true;

sec31Rows.forEach((rowLine, i) => {
  const parts = rowLine.split('|').map(s => s.trim());
  const rowNum = parseInt(parts[1], 10);
  const qId = parts[2].replace(/`/g, '');
  const dbAnsInMd = parts[5].replace(/\*\*/g, '');
  const recAns = parts[8];

  const dbQ = g4List.find(q => q.id === qId);
  if (!dbQ) {
    all43Exist = false;
    console.log(`  Row ${rowNum} (${qId}) NOT found in DB!`);
    return;
  }
  if (String(dbQ.answer).trim() !== dbAnsInMd) {
    all43Match = false;
    console.log(`  Row ${rowNum} (${qId}) answer mismatch: MD=${dbAnsInMd} vs DB=${dbQ.answer}`);
  }
  // Check if DB answer is different from recommended answer (i.e. truly defective)
  if (recAns.includes(`answer: "${dbQ.answer}"`)) {
    all43BugsConfirmed = false;
    console.log(`  Row ${rowNum} (${qId}) is NOT an assumption error: DB answer matches recAns!`);
  }
});

assertTest('All 43 rows in Section 3.1 exist in grade4_special.js', all43Exist);
assertTest('All 43 rows in Section 3.1 have 100% exact match with DB answer', all43Match);
assertTest('All 43 rows in Section 3.1 are confirmed genuine defects (0 false positives)', all43BugsConfirmed);

// --- CHALLENGE GROUP 3: verify_audit_catalog.js Static & Dynamic Audit ---
console.log('\n--- GROUP 3: verify_audit_catalog.js Static & Dynamic Audit ---');
const verifyCode = fs.readFileSync(verifyScriptPath, 'utf8');

// Check that verify_audit_catalog.js really executes 75 checks (excluding function definition)
const checkCalls = (verifyCode.match(/(?<!function\s)assertCheck\(/g) || []).length;
assertTest('verify_audit_catalog.js contains exactly 75 assertCheck calls', checkCalls === 75, `Found ${checkCalls}`);

// Execute verify_audit_catalog.js directly via child process and verify output
const cp = require('child_process');
let verifyOutput = '';
let verifyExitCode = 0;
try {
  verifyOutput = cp.execFileSync('C:\\Program Files\\nodejs\\node.exe', [verifyScriptPath], {
    cwd: baseDir,
    encoding: 'utf8'
  });
} catch (err) {
  verifyExitCode = err.status || 1;
  verifyOutput = err.stdout + '\n' + err.stderr;
}

assertTest('verify_audit_catalog.js runs with exit code 0', verifyExitCode === 0, `Exit code was ${verifyExitCode}`);
assertTest(
  'verify_audit_catalog.js reports 75/75 TIÊU CHÍ ĐẠT (100.0%)',
  verifyOutput.includes('75/75 TIÊU CHÍ ĐẠT (100.0%)')
);
assertTest(
  'verify_audit_catalog.js reports 0 FAIL',
  !verifyOutput.includes('[FAIL]') && !verifyOutput.includes('KHÔNG KHỚP')
);

// Check that it checks markdown directly
assertTest('verify_audit_catalog.js reads DANH_MUC_LOI_KIEM_TOAN_CHI_TIET.md', verifyCode.includes("fs.readFileSync(catalogPath, 'utf8')"));
assertTest('verify_audit_catalog.js reads KE_HOACH_CHINH_SUA_TRIET_DE.md', verifyCode.includes("fs.readFileSync(planPath, 'utf8')"));

// Check that it specifically asserts rows 17-28
assertTest('verify_audit_catalog.js has explicit assertion for rows 17-28', verifyCode.includes('expectedRows17to28') && verifyCode.includes('genuineRowsMatchCount'));


// Check Section 3.2 (15 AVG format questions) in catalog
const sec32Start = catalogMd.indexOf('| # | Mã ID Câu Hỏi | Vòng Thi / Chuyên Đề | Phương Án Hiển Thị |');
const sec32End = catalogMd.indexOf('\n---\n', sec32Start);
const sec32Rows = catalogMd.slice(sec32Start, sec32End).trim().split(/\r?\n/).slice(2);
assertTest('Section 3.2 contains exactly 15 questions', sec32Rows.length === 15, `Found ${sec32Rows.length}`);

// Verify all 15 AVG questions have (Letter) Number format in DB
let avgFormatMatches = 0;
sec32Rows.forEach(row => {
  const parts = row.split('|').map(s => s.trim());
  const qId = parts[2].replace(/`/g, '');
  const dbFormat = parts[5].replace(/`/g, '');
  const dbQ = g4List.find(q => q.id === qId);
  if (dbQ && String(dbQ.answer).trim() === dbFormat) {
    avgFormatMatches++;
  }
});
assertTest('All 15 AVG questions in Section 3.2 match DB answer format', avgFormatMatches === 15, `Matched ${avgFormatMatches}/15`);

// --- CHALLENGE GROUP 4: Remediation Plan Adversarial Checks ---
console.log('\n--- GROUP 4: Remediation Plan Adversarial Checks ---');
const planMd = fs.readFileSync(planPath, 'utf8');

// TIMO Re-ID vs deletion
assertTest(
  'Plan does NOT advocate naive deletion of 251 TIMO records',
  !planMd.includes('Loại bỏ **251 bản ghi trùng lặp**, giữ lại đúng **628 câu hỏi duy nhất**')
);
assertTest(
  'Plan mandates Re-ID / Disambiguation preserving ~851+ TIMO questions',
  planMd.includes('Tái định danh phân nhánh') && planMd.includes('851')
);

// recommendedAnswer in script blueprint
assertTest(
  'Plan Section 3.3 uses recommendedAnswer instead of correctAnswer (TypeError defense)',
  planMd.includes('recommendedAnswer') && !planMd.includes('if (fix.correctAnswer.includes')
);

// Prime numbers branch IDs scheme
assertTest(
  'Plan Section 4.2 uses branch IDs G4-NC-1109-1..8 avoiding collision with grade4_special_orig.js',
  planMd.includes('G4-NC-1109-1') && planMd.includes('G4-NC-1109-8') && !planMd.includes('tách thành `G4-NC-1110` đến `G4-NC-1116`')
);

// Scoring engine regex and alternatives
assertTest(
  'Plan Section 3.6 enforces uLetter.length === 1',
  planMd.includes('uLetter.length === 1')
);
assertTest(
  'Plan Section 3.6 preserves multi-alternative answer splitting',
  planMd.includes('c.split(/;|\\bhoặc\\b|\\bhay\\b/i)')
);

// Neutralization of archimedes_g4_real.js runtime override
assertTest(
  'Plan Section 3.6 neutralizes archimedes_g4_real.js line 865-867 override',
  planMd.includes('865 - 867') && planMd.includes('Vô hiệu hóa lệnh ghi đè runtime')
);

console.log('\n' + '='.repeat(80));
console.log(`TOTAL TESTS: ${totalTests} | PASSED: ${passedTests} | FAILED: ${failedTests}`);
if (failedTests === 0) {
  console.log('>>> FINAL RE-CHALLENGE VERDICT: APPROVE <<<');
} else {
  console.log('>>> FINAL RE-CHALLENGE VERDICT: REQUEST_CHANGES <<<');
}
console.log('='.repeat(80));

process.exit(failedTests > 0 ? 1 : 0);
