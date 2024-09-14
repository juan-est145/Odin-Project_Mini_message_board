require("dotenv").config();
const express = require("express");
const app = express();
const indexRouter = require("./routes/indexRouter");
const newMsgRouter = require("./routes/newMsgRouter");
const path = require("node:path");

app.use("/", indexRouter);
app.use("/new", newMsgRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`My first Express app - listening on port ${PORT}!`));