require("dotenv").config();
const express = require("express");
const app = express();
const authorRouter = require("./routes/aboutRouter");
const rootRouter = require("./routes/rootRouter");
const path = require("node:path");

