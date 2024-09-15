const { Router } = require("express");
const indexControllers = require("../controllers/indexController");

const indexRouter = Router();

indexRouter.get("/", indexControllers.indexRender);
indexRouter.get("/message/:id", indexControllers.renderMsg);

module.exports = indexRouter;