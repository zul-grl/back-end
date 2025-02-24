import { MongoClient } from "mongodb";
import { configDotenv } from "dotenv";

export async function getMovies() {
  configDotenv();
  const uri = process.env.MONGODB_URL || "";
  const client = new MongoClient(uri);
  try {
    await client.connect();
    const dbName = "sample_mflix";
    const collectionName = "movies";
    const database = client.db(dbName);
    const collection = database.collection(collectionName);
    const findQuery = { year: { $gt: 2010 } };
    const movies = await collection.find(findQuery).limit(10).toArray();
    console.log(movies);
    return movies;
  } catch (e) {
    console.log(e);
  } finally {
    await client.close();
  }
}
