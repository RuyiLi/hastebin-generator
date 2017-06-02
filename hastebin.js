const superagent = require("superagent");
module.exports = async function(code, language = ""){
    let url = "https://hastebin.com/";
    superagent.post("https://hastebin.com/documents")
			.send(code)
			.then(function(err, res){
                if(err) throw err;
				url += `${res.body.key}.${language}`;
			});
    return url;
}
