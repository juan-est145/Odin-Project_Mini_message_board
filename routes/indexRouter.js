const { Router } = require("express");
const indexControllers = require("../controllers/indexController");

const indexRouter = Router();

indexRouter.get("/", indexControllers.indexRender);

module.exports = indexRouter;