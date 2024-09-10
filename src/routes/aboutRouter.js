const { Router } = require("express");
const aboutControllers = require("../controllers/aboutControllers");

const aboutRouter = Router();

aboutRouter.get("/", aboutControllers.getAboutPage);

module.exports = aboutRouter;