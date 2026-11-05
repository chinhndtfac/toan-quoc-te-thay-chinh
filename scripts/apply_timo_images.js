const fs = require('fs');

const path = 'C:/Users/HNBV3384/.gemini/antigravity/scratch/toan-quoc-te/timo_data.js';
let content = fs.readFileSync(path, 'utf8');

const imageMappings = {
  '1-Vong quoc gia - De so 8-16': 'images/timo_g1_de8_polygon8.svg',
  '1-Vong quoc gia - De so 8-17': 'images/timo_g1_de8_line_segments18.svg',
  '1-Vong quoc gia - De so 8-20': 'images/timo_g1_de8_cubes8.svg',
  '1-Vong quoc gia - De so 7-17': 'images/timo_g1_de7_polygon7.svg',
  '1-Vong quoc gia - De so 2-18-B': 'images/timo_g1_de2_polygon12.svg',
  '1-Vong quoc gia - De so 3-16': 'images/timo_g1_de3_polygon13.svg',
  '2-Vong quoc gia - De so 3-19': 'images/timo_g1_de3_polygon13.svg'
};

let updatedCount = 0;
for (const [id, imgPath] of Object.entries(imageMappings)) {
  const target = `"id": "${id}",`;
  const idx = content.indexOf(target);
  if (idx !== -1) {
    // Check if image already exists in this object
    const nextBrace = content.indexOf('}', idx);
    const sub = content.substring(idx, nextBrace);
    if (!sub.includes('"image":')) {
      // Insert image property right after id line
      const replacement = `"id": "${id}",\n      "image": "${imgPath}",`;
      content = content.replace(target, replacement);
      console.log(`Assigned ${imgPath} to ${id}`);
      updatedCount++;
    } else {
      console.log(`Already has image for ${id}`);
    }
  } else {
    console.warn(`Target ID not found: ${id}`);
  }
}

fs.writeFileSync(path, content, 'utf8');
console.log(`Successfully updated ${updatedCount} questions in timo_data.js`);
