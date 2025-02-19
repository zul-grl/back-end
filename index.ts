import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
const Foods = [
  {
    id: 1,
    name: "Cranberry Brie Bites",
    category: "Appetizers",
    price: 12.99,
    description:
      "Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.",
    image:
      "https://res.cloudinary.com/dzb3xzqxv/image/upload/v1739932219/image4_y6xuj2.png",
  },
  {
    id: 2,
    name: "Sunshine Stackers",
    category: "Appetizers",
    price: 12.99,
    image:
      "https://res.cloudinary.com/dzb3xzqxv/image/upload/v1739932222/image1_jxazg9.png",
    description:
      "Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.",
  },
  {
    id: 3,
    image:
      "https://res.cloudinary.com/dzb3xzqxv/image/upload/v1739932227/salad1_xhfbl8.png",
    name: "Brie Crostini Appetizer",
    category: "Appetizers",
    price: 12.99,
    description:
      "Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.",
  },
  {
    id: 4,
    image:
      "https://res.cloudinary.com/dzb3xzqxv/image/upload/v1739932227/image2_s6zfy8.png",
    name: "Grilled Chicken Cobb Salad",
    category: "Salads",
    price: 12.99,
    description:
      "Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.",
  },
  {
    image:
      "https://res.cloudinary.com/dzb3xzqxv/image/upload/v1739932228/image3_fukrpe.png",
    id: 5,
    name: "Burrata Caprese",
    category: "Salads",
    price: 12.99,
    description:
      "Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.",
  },
  {
    image:
      "https://res.cloudinary.com/dzb3xzqxv/image/upload/v1739932229/image5_aeg6ub.png",
    id: 6,
    name: "Beetroot and Orange Salad",
    category: "Salads",
    price: 12.99,
    description:
      "Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.",
  },
  {
    id: 7,
    name: "Sunshine Stackers",
    category: "Lunch favorites",
    price: 12.99,
    image:
      "https://res.cloudinary.com/dzb3xzqxv/image/upload/v1739932232/salad3_cprn1b.png",
    description:
      "Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.",
  },
];

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
