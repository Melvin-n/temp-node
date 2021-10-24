//OS modules
//built in module (no need to add ./ when exporting)
//
const os = require('os')

//info about current user
const user = os.userInfo();
console.log(user)


//returns uptime in seconds
const uptime = os.uptime();
console.log(`system uptime is ${uptime} seconds`)

//data about operating system
const currentOS = {
    name: os.type(),
    release: os.release(),
    totalmem: os.totalmem(),
    freemem: os.freemem(),
}

console.log(currentOS)