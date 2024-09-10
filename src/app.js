require("dotenv").config();
const express = require("express");
const app = express();
const authorRouter = require("./routes/aboutRouter");
const rootRouter = require("./routes/rootRouter");
const path = require("node:path");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use("/", rootRouter);
app.use("/about", authorRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`My first Express app - listening on port ${PORT}!`));