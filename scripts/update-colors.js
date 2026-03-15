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

  content = content.replace(/indigo-600/g, 'rose-900');
  content = content.replace(/indigo-500/g, 'rose-800');
  content = content.replace(/indigo-400/g, 'rose-700');
  content = content.replace(/indigo-300/g, 'rose-600');
  content = content.replace(/purple-500/g, 'rose-800');
  content = content.replace(/#4F46E5/gi, '#985E6D'); 
  content = content.replace(/#6366F1/gi, '#985E6D'); 
  
  if (content !== original) {
    fs.writeFileSync(file, content);
    console.log('Updated', file);
    count++;
  }
}
console.log('Total files updated:', count);
