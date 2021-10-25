//asynchronous file read/write

const fs = require('fs')
//readfile requires 3 parameters: file path, encoding type, cb function with error and result parameters
fs.readFile('./subfolder/first.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err)
        return 
    }
    const first = result
    fs.readFile('./subfolder/second.txt', 'utf8', (err, result) => {
        if (err) {
            console.log(err)
            return
        }
    const second = result
    fs.writeFile('./subfolder/asyncresult2.txt', `here is the result ${first} ${second}`,
    (err, result) => {
        if (err) {
            console.log(err)
        }
        console.log('success')
        return result
    })
    })
})