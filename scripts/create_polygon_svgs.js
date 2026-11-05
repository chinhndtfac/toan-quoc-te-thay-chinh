const fs = require('fs');
const path = require('path');

const imgDir = path.join(__dirname, '../images');
if (!fs.existsSync(imgDir)) fs.mkdirSync(imgDir, { recursive: true });

function generatePolygonSvg(sides, title, subtitle) {
  const cx = 160, cy = 160, r = 110;
  const points = [];
  const vertexElements = [];

  for (let i = 0; i < sides; i++) {
    // Start from top
    const angle = (i * 2 * Math.PI / sides) - (Math.PI / 2);
    const x = Math.round(cx + r * Math.cos(angle));
    const y = Math.round(cy + r * Math.sin(angle));
    points.push(`${x},${y}`);
    vertexElements.push(`<circle cx="${x}" cy="${y}" r="5" fill="#1e40af" stroke="#ffffff" stroke-width="2" />`);
  }

  const pointsStr = points.join(' ');

  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 320" width="300" height="300">
  <rect width="320" height="320" fill="#f8fafc" rx="16" stroke="#cbd5e1" stroke-width="1.5" />
  <!-- Polygon ${sides} sides -->
  <polygon points="${pointsStr}" fill="#dbeafe" stroke="#2563eb" stroke-width="3.5" stroke-linejoin="round" />
  ${vertexElements.join('\n  ')}
  <text x="160" y="150" font-family="'Nunito', Arial, sans-serif" font-size="15" font-weight="bold" fill="#1e3a8a" text-anchor="middle">${title || 'Hình Đa Giác'}</text>
  <text x="160" y="172" font-family="'Nunito', Arial, sans-serif" font-size="13" font-weight="600" fill="#475569" text-anchor="middle">${subtitle || `(${sides} cạnh)`}</text>
</svg>`;
}

// 1. Polygon 8 sides (Bát giác cho bài TIMO G1 Đề 8 Câu 16)
fs.writeFileSync(path.join(imgDir, 'timo_g1_de8_polygon8.svg'), generatePolygonSvg(8, 'Hình Đa Giác', '(Polygon)'), 'utf8');

// 2. Polygon 7 sides
fs.writeFileSync(path.join(imgDir, 'timo_g1_de7_polygon7.svg'), generatePolygonSvg(7, 'Hình Đa Giác', '(Polygon)'), 'utf8');

// 3. Polygon 12 sides
fs.writeFileSync(path.join(imgDir, 'timo_g1_de2_polygon12.svg'), generatePolygonSvg(12, 'Hình Đa Giác', '(Polygon)'), 'utf8');

// 4. Polygon 13 sides
fs.writeFileSync(path.join(imgDir, 'timo_g1_de3_polygon13.svg'), generatePolygonSvg(13, 'Hình Đa Giác', '(Polygon)'), 'utf8');

console.log('Đã tạo thành công các tệp SVG hình đa giác!');
