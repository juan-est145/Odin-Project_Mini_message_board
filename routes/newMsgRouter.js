const { Router } = require("express");

const newMsgRouter = Router();

newMsgRouter.get("/", (req, res) => {
	res.send("Estás en new message");
});

module.exports = newMsgRouter;