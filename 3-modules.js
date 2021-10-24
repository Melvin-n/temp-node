//Modules

//node apps are commonly split into modules

//every time you create yout own modules, use ./
const names = require('./4-first-module-names')
const sayHi = require('./5-utils')
const newFlavor = require('./6-alternative')

console.log(names)
sayHi(names.billy);
sayHi(names.peter);

sayHi(names.jon);

console.log(newFlavor)
require('./7-mind-grenade')



