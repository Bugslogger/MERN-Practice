const express = require("express");
const route = express.Router();

route.use("/", (req, res) => res.send("auth route"));

module.exports = route;
