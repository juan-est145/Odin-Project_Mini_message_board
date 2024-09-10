const links = [
	{ href: "/", text: "Home" },
	{ href: "about", text: "About" },
];

const args = {
	message: "Hola caracola",
	links: links,
	route: "",
}

function getRoot(req, res) {
	let path = String(req.originalUrl).slice(1);
	args.route = path === "" ? "index" : path;
	res.render("index", args);
}

module.exports = { getRoot };