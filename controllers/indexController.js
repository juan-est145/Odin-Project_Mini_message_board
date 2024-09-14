const messages = [
	{
		text: "Hi there!",
		user: "Armando",
		added: new Date()
	},
	{
		text: "Hello World!",
		user: "Charles",
		added: new Date()
	}
];

function indexRender(req, res) {
	res.render("index", { messages: messages });
}

module.exports = { indexRender };