require('./index')(require('fs').readFileSync(__filename), 'js').then(r => console.log(r))
//https://hastebin.com/qoziyevubu.js