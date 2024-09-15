const messages = require("../messages");

function indexRender(req, res) {
	res.render("index", { messages: messages });
}

function renderMsg(req, res) {
	const index = parseInt(req.params.id);
	if (!Number.isInteger(index) || index < 0 || index >= messages.length) {
		res.status(404).send("404: Message not found");
		return ;
	}
	res.render("viewMsg", {
		index: index,
		user: messages[index].user,
		text: messages[index].text,
		added: messages[index].added,
	});
}

module.exports = { indexRender, renderMsg };