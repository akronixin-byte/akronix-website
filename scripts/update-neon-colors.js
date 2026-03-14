const fs = require('fs');
const path = require('path');

function getFiles(dir, files = []) {
  if (!fs.existsSync(dir)) return files;
  const list = fs.readdirSync(dir);
  for (const file of list) {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      getFiles(filePath, files);
    } else if (filePath.endsWith('.tsx') || filePath.endsWith('.ts')) {
      files.push(filePath);
    }
  }
  return files;
}

const allFiles = [...getFiles('app'), ...getFiles('components')];
let count = 0;

for (const file of allFiles) {
  let content = fs.readFileSync(file, 'utf8');
  let original = content;

  // Replace utility classes to represent neon theme (fuchsia/pink)
  content = content.replace(/rose-900/g, 'fuchsia-900');
  content = content.replace(/rose-800/g, 'fuchsia-800');
  content = content.replace(/rose-700/g, 'fuchsia-500');
  content = content.replace(/rose-600/g, 'fuchsia-400');
  content = content.replace(/rose-500/g, 'pink-500');

  // Replace Hexes and RGBs
  content = content.replace(/#985E6D/gi, '#9A5B65'); // old primary to neon pink red
  content = content.replace(/#B27081/gi, '#C69C9D');
  content = content.replace(/152,\s*94,\s*109/g, '154, 91, 101'); 
  
  if (content !== original) {
    fs.writeFileSync(file, content);
    console.log('Updated', file);
    count++;
  }
}
console.log('Total files updated:', count);
