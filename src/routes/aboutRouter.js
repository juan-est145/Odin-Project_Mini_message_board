const { Router } = require("express");

const aboutRouter = Router();

aboutRouter.get("/", (req, res) => {
	res.send("This is my about page");
});

module.exports = aboutRouter;