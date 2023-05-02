const express = require("express");
const app = express();
const ecarRoutes = require("./routes/api.routes");

app.use("/api/ecar", ecarRoutes);

module.exports = app;