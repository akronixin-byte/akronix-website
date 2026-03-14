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

  content = content.replace(/cyan-900/g, 'fuchsia-900');
  content = content.replace(/cyan-800/g, 'fuchsia-800');
  content = content.replace(/cyan-600/g, 'fuchsia-600');
  content = content.replace(/teal-[0-9]00/g, 'pink-500');
  content = content.replace(/blue-[0-9]00/g, 'purple-600');
  content = content.replace(/emerald-[0-9]00/g, 'fuchsia-500'); 
  content = content.replace(/orange-[0-9]00/g, 'purple-500');
  content = content.replace(/slate-950/g, 'fuchsia-950');
  
  content = content.replace(/#1F4959/gi, '#6B2C4F');
  content = content.replace(/31,\s*73,\s*89/g, '107, 44, 79');
  content = content.replace(/#5C7C89/gi, '#C69C9D');
  
  content = content.replace(/hsl\(0,0%,[0-9]+%\)/gi, 'rgba(15, 10, 60, 0.6)');

  if (content !== original) {
    fs.writeFileSync(file, content);
    console.log('Updated', file);
    count++;
  }
}
console.log('Total files updated:', count);
