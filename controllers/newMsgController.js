const messages = require("../messages");

function formRender(req, res) {
	res.render("form");
}

function postMsg(req, res) {
	const name = req.body.name;
	const msg = req.body.msg;
	messages.push({ text: msg, user: name, added: new Date(), id: messages.length });
	res.redirect("/");
}

module.exports = { formRender, postMsg }