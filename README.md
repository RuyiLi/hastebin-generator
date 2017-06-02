# hastebin-generator
A npm module for generating hastebin links.

##Installation
```npm install discordjson```

##Example
```
const hastebin = require('hastebin-generator');
hastebin("code", "js").then(r => {
    console.log(r); //https://hastebin.com/sonahetugu.js
}).catch(console.error);
```
