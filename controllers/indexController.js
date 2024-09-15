const messages = require("../messages");

function indexRender(req, res) {
	res.render("index", { messages: messages });
}

function renderMsg(req, res) {
	const index = req.params.id;
	res.render("viewMsg", {
		index: index,
		user: messages[index].user,
		text: messages[index].text,
		added: messages[index].added,
	});
}

module.exports = { indexRender, renderMsg };