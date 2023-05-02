const express = require("express");
const app = express();
const ecarRoutes = require("./ecar.routes");

app.use("/api/ecar", ecarRoutes);

module.exports = app;