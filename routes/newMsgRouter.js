const { Router } = require("express");
const newMsgControllers = require("../controllers/newMsgController");

const newMsgRouter = Router();

newMsgRouter.get("/", newMsgControllers.formRender);

module.exports = newMsgRouter;