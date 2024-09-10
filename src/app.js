require("dotenv").config();
const express = require("express");
const app = express();
const authorRouter = require("./routes/aboutRouter");

app.use("/about", authorRouter);
app.get("/", (req, res) => res.send("Hello world"));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`My first Express app - listening on port ${PORT}!`));