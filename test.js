require('./index')(require('fs').readFileSync(__filename, 'utf-8'), 'js').then(r => console.log(r)).catch(console.error)
//https://hastebin.com/qoziyevubu.js