const { Router } = require("express");
const newMsgControllers = require("../controllers/newMsgController");

const newMsgRouter = Router();

newMsgRouter.get("/", newMsgControllers.formRender);
newMsgRouter.post("/", newMsgControllers.postMsg);

module.exports = newMsgRouter;