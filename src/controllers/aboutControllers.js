function getAboutPage(req, res) {
	let path = String(req.originalUrl).slice(1);
	res.render("about", {route: path === "/" ? "index" : path});
}

module.exports = { getAboutPage };