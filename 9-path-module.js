//built in path module

const path = require('path');

//joins the path of the passed in files
console.log(path.join('/coding projects', 'pythonprojects', 'collision-game'))

const absolute = path.resolve('__dirname')
console.log(absolute)