require("dotenv").config();
const express = require("express");
const app = express();
const indexRouter = require("./routes/indexRouter");
const newMsgRouter = require("./routes/newMsgRouter");
const path = require("node:path");

const assetPath = path.join(__dirname, "./public");
app.set("views", path.join(__dirname, "./views"));
app.set("view engine", "ejs");

app.use(express.static(assetPath));
app.use(express.urlencoded({ extended: true }));
app.use("/", indexRouter);
app.use("/new", newMsgRouter);
app.use((req, res, next) => {
	res.status(404).send("404: Page not found");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`My first Express app - listening on port ${PORT}!`));