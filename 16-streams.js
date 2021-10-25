//method name = require('frome here')
const {createReadStream} = require('fs')

//pass in file and assign to variable
const stream = createReadStream('./subfolder/big.txt')

//reads data in 64kb chunks (default), last buffer will be the remainder
//highwatermark parameter allows to change default buffer size
//const stream = createReadStream('./subfolder/big.txt', {highWaterMark: 90000})
//encoding can also be passed in the same way
//const stream = createReadStream('./subfolder/big.txt', {encoding: 'utf8'})
stream.on('data', (result) => {
    console.log(result)
})