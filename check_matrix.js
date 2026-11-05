const fs = require('fs');
const path = require('path');
const baseDir = 'C:/Users/HNBV3384/.gemini/antigravity/scratch/toan-quoc-te';

const html = fs.readFileSync(path.join(baseDir, 'index.html'), 'utf8');

const timoDb = require(path.join(baseDir, 'timo_data.js')).TIMO_DB || {};
const kangarooDb = require(path.join(baseDir, 'kangaroo_data.js')).KANGAROO_DB || {};
const toan365Db = require(path.join(baseDir, 'toan365_data.js')) || {};
const fmoDb = require(path.join(baseDir, 'fmo_data.js')) || [];
const grade4Spec = require(path.join(baseDir, 'grade4_special.js')) || [];
const archMathDb = require(path.join(baseDir, 'archimedes_math_data.js')) || {};
const realG4 = require(path.join(baseDir, 'archimedes_g4_real.js'));
if (realG4 && archMathDb.grade4) archMathDb.grade4 = realG4;
const tiengVietDb = (require(path.join(baseDir, 'tieng_viet_data.js')) || {}).TIENG_VIET_DB || {};

global.window = {};
global.state = {};
global.TIMO_DB = timoDb;
global.KANGAROO_DB = kangarooDb;
global.TOAN_365_DB = toan365Db;
global.FMO_DATA = fmoDb;
global.GRADE4_SPECIAL_DB = grade4Spec;
global.ARCHIMEDES_MATH_DB = archMathDb;
global.TIENG_VIET_DB = tiengVietDb;

const startIdx = html.indexOf('function sortArchimedesRounds(');
const endIdx = html.indexOf('// HÀM CHUẨN HÓA KÝ HIỆU TOÁN HỌC');
const code = html.slice(startIdx, endIdx);
eval(code);

const grades = [1, 2, 3, 4, 5];
const exams = ['TIMO', 'TOAN_365', 'FMO', 'Kangaroo', 'ASMO', 'SPECIAL_G4', 'ARCHIMEDES_MATH', 'TIENG_VIET'];

console.log('--- EXAM AVAILABILITY MATRIX ---');
const matrix = {};
exams.forEach(e => {
  matrix[e] = {};
  grades.forEach(g => {
    const rounds = getAvailableRounds(g, e);
    matrix[e]['Lớp ' + g] = rounds.length;
  });
});

console.table(matrix);
