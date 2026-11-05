const fs = require('fs');

// Isometric cubes SVG for 8 cubes:
// 1st layer (base): 6 cubes (e.g. 2x3 or 5 cubes)
// 2nd layer: 2 cubes
// Total: 8 cubes
function drawIsoCube(x, y, size, fillTop, fillLeft, fillRight) {
  const dx = size * Math.cos(Math.PI / 6);
  const dy = size * Math.sin(Math.PI / 6);
  
  // Top face
  const top = `M ${x} ${y} L ${x + dx} ${y - dy} L ${x} ${y - 2*dy} L ${x - dx} ${y - dy} Z`;
  // Left face
  const left = `M ${x - dx} ${y - dy} L ${x} ${y} L ${x} ${y + size} L ${x - dx} ${y + size - dy} Z`;
  // Right face
  const right = `M ${x} ${y} L ${x + dx} ${y - dy} L ${x + dx} ${y + size - dy} L ${x} ${y + size} Z`;
  
  return `
    <path d="${top}" fill="${fillTop}" stroke="#334155" stroke-width="2"/>
    <path d="${left}" fill="${fillLeft}" stroke="#334155" stroke-width="2"/>
    <path d="${right}" fill="${fillRight}" stroke="#334155" stroke-width="2"/>
  `;
}

// Draw 8 cubes in a 3D stack:
// Base: (row 0, col 0), (row 0, col 1), (row 0, col 2), (row 1, col 0), (row 1, col 1), (row 1, col 2) -> 6 cubes
// Top layer: (row 0, col 0, level 1), (row 0, col 1, level 1) -> 2 cubes
// Total: 8 cubes.
const size = 50;
const dx = size * Math.cos(Math.PI / 6);
const dy = size * Math.sin(Math.PI / 6);
const originX = 250;
const originY = 160;

function getCubePos(row, col, level) {
  const x = originX + (col - row) * dx;
  const y = originY + (col + row) * dy - level * size;
  return { x, y };
}

let cubesSvg = '';
// Order of rendering from back to front:
const cubes = [
  { r: 0, c: 0, l: 0 },
  { r: 0, c: 0, l: 1 },
  { r: 0, c: 1, l: 0 },
  { r: 0, c: 1, l: 1 },
  { r: 0, c: 2, l: 0 },
  { r: 1, c: 0, l: 0 },
  { r: 1, c: 1, l: 0 },
  { r: 1, c: 2, l: 0 }
];

// Sort back-to-front
cubes.sort((a, b) => (a.r + a.c) - (b.r + b.c) || a.l - b.l);

cubes.forEach(c => {
  const pos = getCubePos(c.r, c.c, c.l);
  cubesSvg += drawIsoCube(pos.x, pos.y, size, '#93C5FD', '#3B82F6', '#1D4ED8');
});

const fullSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 380" width="100%" height="300">
  <rect width="500" height="380" fill="#F8FAFC" rx="16" stroke="#E2E8F0" stroke-width="2"/>
  <text x="250" y="38" text-anchor="middle" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="#0F172A">Hình khối lập phương (Đề số 08 - Câu 20)</text>
  <g>${cubesSvg}</g>
  <text x="250" y="350" text-anchor="middle" font-family="system-ui, sans-serif" font-size="14" font-weight="600" fill="#64748B">Có ít nhất bao nhiêu hình lập phương nhỏ?</text>
</svg>`;

fs.writeFileSync('C:/Users/HNBV3384/.gemini/antigravity/scratch/toan-quoc-te/images/timo_g1_de8_cubes8.svg', fullSvg, 'utf8');
console.log('Created images/timo_g1_de8_cubes8.svg');
