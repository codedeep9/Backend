const path=require('path');
const fs=require('fs');
const givenpath='f4.txt'



// console.log(extName)

const baseName='D:\Backend'
// console.log(baseName);

// console.log(__dirname);
// console.log(__filename);


// copy the content from one file to another

const reqFileContent='/Backend/f4.txt';
const destinationFile=path.join(baseName,givenpath);
console.log(destinationFile)
fs.copyFileSync(reqFileContent,destinationFile);
console.log('destination file updated!')

