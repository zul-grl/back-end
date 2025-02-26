import { MongoClient } from "mongodb";
import { configDotenv } from "dotenv";
export async function createFoods() {
  configDotenv();
  const uri = process.env.MONGODB_URL || "";
  const client = new MongoClient(uri);
  try {
    await client.connect();
    const dbName = "food-delivery";
    const collectionName = "foods";
    const database = client.db(dbName);
    const collection = database.collection(collectionName);
    await collection.insertMany([
      {
        name: "Cranberry Brie Bites",
        category: "Appetizers",
        price: 12.99,
        description:
          "Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.",
        image:
          "https://res.cloudinary.com/dzb3xzqxv/image/upload/v1739932219/image4_y6xuj2.png",
      },
      {
        name: "Sunshine Stackers",
        category: "Appetizers",
        price: 12.99,
        image:
          "https://res.cloudinary.com/dzb3xzqxv/image/upload/v1739932222/image1_jxazg9.png",
        description:
          "Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.",
      },
      {
        image:
          "https://res.cloudinary.com/dzb3xzqxv/image/upload/v1739932227/salad1_xhfbl8.png",
        name: "Brie Crostini Appetizer",
        category: "Appetizers",
        price: 12.99,
        description:
          "Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.",
      },
      {
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

        name: "Burrata Caprese",
        category: "Salads",
        price: 12.99,
        description:
          "Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.",
      },
      {
        image:
          "https://res.cloudinary.com/dzb3xzqxv/image/upload/v1739932229/image5_aeg6ub.png",

        name: "Beetroot and Orange Salad",
        category: "Salads",
        price: 12.99,
        description:
          "Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.",
      },
      {
        name: "Sunshine Stackers",
        category: "Lunch favorites",
        price: 12.99,
        image:
          "https://res.cloudinary.com/dzb3xzqxv/image/upload/v1739932232/salad3_cprn1b.png",
        description:
          "Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.",
      },
    ]);
  } catch (e) {
    console.log(e);
  } finally {
    await client.close();
  }
}
