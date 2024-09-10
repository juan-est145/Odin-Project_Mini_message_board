const links = [
	{ href: "/", text: "Home" },
	{ href: "about", text: "About" },
];

function getRoot(req, res) {
	let path = String(req.originalUrl).slice(1);
	path = path === "" ? "index" : path;
	res.render("index", {
		message: "Hola caracola",
		links: links,
		route: path,
	});
}

module.exports = { getRoot };