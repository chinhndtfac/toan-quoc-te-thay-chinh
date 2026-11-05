const fs = require('fs');
const vm = require('vm');

function getVar(file, varName) {
  const code = fs.readFileSync('C:/Users/HNBV3384/.gemini/antigravity/scratch/toan-quoc-te/' + file, 'utf8');
  const sandbox = { window: {} };
  vm.createContext(sandbox);
  try {
    vm.runInContext(code + `;\nthis.${varName} = (typeof ${varName} !== 'undefined') ? ${varName} : (window.${varName});`, sandbox);
    return sandbox[varName];
  } catch(e) {
    console.error('Err loading ' + file, e.message);
    return null;
  }
}

const reqImgPattern = /in the figure below|the figure below|figure below|polygon below|grid below|pattern below|shown in the figure|the following figure|hình dưới đây|trong hình dưới|theo hình vẽ|như hình vẽ|bảng dưới đây|bảng số dưới đây|được tô màu|hình sau|hình vẽ sau|khối lập phương trong hình|ở hình dưới|nhìn vào hình bên|cho hình vuông dưới đây/i;

function checkQuestions(name, list) {
  let count = 0;
  let missing = 0;
  list.forEach(q => {
    if (!q) return;
    count++;
    const t = (q.text || '');
    if (reqImgPattern.test(t) && (!q.image || !q.image.trim())) {
      missing++;
    }
  });
  console.log(`${name}: Total ${count}, Missing required image: ${missing}`);
}

const K = getVar('kangaroo_data.js', 'KANGAROO_DB');
if (K) {
  for (let g = 1; g <= 5; g++) checkQuestions(`Kangaroo Grade ${g}`, K['grade' + g] || []);
}

const F = getVar('fmo_data.js', 'FMO_DATA');
if (F) checkQuestions('FMO', F);

const G4 = getVar('grade4_special.js', 'GRADE4_SPECIAL_DB');
if (G4) checkQuestions('Grade 4 Special', G4);

const Arch = getVar('archimedes_math_data.js', 'ARCHIMEDES_MATH_DB');
if (Arch) {
  for (let g = 1; g <= 5; g++) checkQuestions(`Archimedes Math Grade ${g}`, Arch['grade' + g] || []);
}
