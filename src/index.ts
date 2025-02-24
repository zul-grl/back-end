import Foods from "./database/Food";
import { getMovies } from "./database/mongodb";
import cors from "cors";
import express from "express";
import bodyParser from "body-parser";
// const bodyParser = require("body-parser");
// const express = require("express");
const app = express();
const port = 4000;
app.use(bodyParser());
// app.use(cors());
// app.use("/auth");
// app.use("/food");
// app.use("/food-category");
// app.use("/food-order");
app.get("/movies", cors(), async (req, res) => {
  try {
    const movies = await getMovies();
    res.status(200).json({ movies: movies });
  } catch {
    res.status(500);
  }
});
app.listen(port);
