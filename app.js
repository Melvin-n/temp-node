//method name = require('frome here')
const {createReadStream} = require('fs')

//pass in file and assign to variable
const stream = createReadStream('./subfolder/big.txt')

stream.on('data', (result) => {
    console.log(result)
})