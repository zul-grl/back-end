import Foods from "./database/Food";
import cors from "cors";
import express from "express";
import bodyParser from "body-parser";
import { createFoods } from "./database/CreateFoods";
import { getStudents } from "./database/mongodb";
const app = express();
const port = 4000;
app.use(bodyParser.json());
// app.use(cors());
// app.use("/auth");
// app.use("/food");
// app.use("/food-category");
// app.use("/food-order");
app.post("/foods", cors(), async (req, res) => {
  try {
    const foods = await createFoods();
    res.status(201).json({ foods: foods });
  } catch (error) {
    res.status(500).json({ error: "Failed to create foods" });
  }
});
app.get("/students", cors(), async (req, res) => {
  try {
    const students = await getStudents();
    res.status(200).json({ students: students });
  } catch (error) {
    res.status(500).json({ error: "Failed to get students" });
  }
});
app.listen(port);
