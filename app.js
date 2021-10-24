//npm is a public domain of shared modules also called packages or dependencies
//npm comes installed with node
//packages can be used in projects as below (local dependancy)
//npm i <insertPackageName>
//i means install
//can also be used globally (global dependency) (in all projects not just one)
//npm install -g <insertPackageName>

//installing an npm will create a file with all package data and add it to package.json


const _ = require('lodash')
//test flatten method from lodash
const items = [1, 2, 'hello', true, [['re']], [], [[[[[4]]]]]]
const flatItems = _.flattenDeep(items)

console.log(flatItems)