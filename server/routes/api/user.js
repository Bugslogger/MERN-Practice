const express = require("express");
const route = express.Router();

route.use("/", (req, res) => res.send("user route"));

module.exports = route;
