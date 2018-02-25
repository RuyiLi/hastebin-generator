const { promisified: p } = require('phin');
module.exports = async function(code, lang = ''){
    try{
        const res = await p({url: 'https://hastebin.com/documents', method: 'POST', data: code})
        const { key } = JSON.parse(res.body);
        return `https://hastebin.com/${key}${lang && `.${lang}`}`
    }catch(err){
        throw err;
    }
}