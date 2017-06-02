# hastebin-generator
A npm module for generating hastebin links. 
https://www.npmjs.com/package/hastebin-generator

## Installation
```npm i hastebin-generator```

## Example
```
const hastebin = require('hastebin-generator');
hastebin("code", "js").then(r => {
    console.log(r); //https://hastebin.com/sonahetugu.js
}).catch(console.error);
```
