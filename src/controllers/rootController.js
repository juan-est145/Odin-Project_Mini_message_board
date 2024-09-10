const links = [
	{ href: "/", text: "Home" },
	{ href: "about", text: "About" },
  ];

function getRoot(req, res) {
	res.render("index", {message: "Hola caracola!", links: links});
}

module.exports = { getRoot };