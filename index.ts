import Foods from "./src/database/Food";

var cors = require("cors");
const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const port = 4000;
app.use(bodyParser());
// app.use(cors());
// app.use("/auth");
// app.use("/food");
// app.use("/food-category");
// app.use("/food-order");
app.get("/", cors(), (req, res) => {
  res.send(Foods);
});
app.listen(port);
