const fs = require('fs');
const path = require('path');
const baseDir = 'C:/Users/HNBV3384/.gemini/antigravity/scratch/toan-quoc-te';

const extraExams = require(path.join(baseDir, 'extra_exams.js'));
const fmoData = require(path.join(baseDir, 'fmo_data.js'));
const archMath = require(path.join(baseDir, 'archimedes_math_data.js'));

console.log('--- Checking extra_exams.js ---');
// Let's see what exams and grades are in extra_exams
// Wait, extra_exams might not export directly, let's inspect extra_exams.js text or execute it.
