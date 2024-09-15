const messages = require("../messages");

function indexRender(req, res) {
	res.render("index", { messages: messages });
}

module.exports = { indexRender };