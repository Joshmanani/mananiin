const path = require('path')

//returns a platform specific separator
console.log(path.sep)

//joins a sequence of path segments
const filePath = path.join('/content', 'subfolder', 'textfile.txt')
console.log(filePath)

//create basename
const base = path.basename(filePath)
console.log(base)

//returns an absolute path
const absolute = path.resolve(__dirname, 'content', 'subfolder', 'textfile.tst')
console.log(absolute)
