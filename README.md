# hastebin-generator
A npm module for generating hastebin links. 
https://www.npmjs.com/package/hastebin-generator

## Installation
`npm i hastebin-generator`

## Examples
```js
const h = require('./index');
h('code', 'js').then(r => {
    console.log(r); //https://hastebin.com/ifuzovakeg.js
}).catch(console.error);
```

```js
require('hastebin-generator')(require('fs').readFileSync(__filename), 'js').then(r => console.log(r))
//https://hastebin.com/qoziyevubu.js
```