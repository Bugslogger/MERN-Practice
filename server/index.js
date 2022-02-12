const express = require("express")();
const { append } = require("express/lib/response");
const db = require("./config/db");

db();

express.get("/", (req, res) => {
  res.send("<h1>Server Running</h1>");
  res.end();
});

// routes
express.use("/api/user", require("./routes/api/user"));
express.use("/api/auth", require("./routes/api/auth"));

express.listen(process.env.PORT || 9000, (error) => {
  if (error) throw error;
  console.log(`server running on port ${process.env.PORT || 9000}`);
});
