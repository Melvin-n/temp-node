//filesync, read and write files
//one way t do it
const {readFileSync, writeFileSync} = require('fs')

const first = readFileSync ('./subfolder/first.txt', 'utf8')
const second = readFileSync ('./subfolder/second.txt', 'utf8')

console.log(first, second)

writeFileSync('./subfolder/result.txt', 'hello world!')

//another way to do it
const fs = require('fs')
console.log(fs)
const one = fs.readFileSync('./subfolder/first.txt', 'utf8')

console.log(one)