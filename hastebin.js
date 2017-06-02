var exports = module.exports = {};

exports.hastebin = function(code, language = ""){
    superagent.post("https://hastebin.com/documents")
			.send(code)
			.end((err, res) => {
                if(err) throw err;
				let url = `https://hastebin.com/${res.body.key}.${language}`;
				return url;
			});
}
