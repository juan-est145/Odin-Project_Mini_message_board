function getRoot(req, res) {
	res.render("index", {message: "Hola caracola!"});
}

module.exports = { getRoot };