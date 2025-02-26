import { MongoClient } from "mongodb";
import { configDotenv } from "dotenv";

export async function getStudents() {
  configDotenv();
  const uri = process.env.MONGODB_URL || "";
  const client = new MongoClient(uri);
  try {
    await client.connect();
    const dbName = "school";
    const collectionName = "students";
    const database = client.db(dbName);
    const collection = database.collection(collectionName);
    await collection.insertMany([
      {
        name: "Bilguun",
        age: 21,
        gender: "male",
        gpa: 4,
        courses: ["Mathematics", "Physics", "Computer Science"],
      },
      {
        name: "Horloo",
        age: 30,
        gender: "male",
        gpa: 3.9,
        courses: ["Mathematics", "English Language", "Computer Science"],
      },
      {
        name: "Muugii",
        age: 30,
        gender: "female",
        gpa: 3.8,
        courses: ["Biology", "Japan Language", "Computer Science"],
      },
      {
        name: "Ochiroo",
        age: 18,
        gender: "male",
        gpa: 3,
        courses: ["Mathematics", "English Language", "Computer Science"],
      },
      {
        name: "Sapar",
        age: 18,
        gender: "male",
        gpa: 2.8,
        courses: ["Mathematics", "English Language", "Computer Science"],
      },
      {
        name: "Zulaa",
        age: 25,
        gender: "female",
        gpa: 2.7,
        courses: ["Mathematics", "English Language", "Computer Science"],
      },
      {
        name: "Batzorig",
        age: 22,
        gender: "male",
        gpa: 3.6,
        courses: ["History", "Mathematics", "Computer Science"],
      },
      {
        name: "Tsetseg",
        age: 19,
        gender: "female",
        gpa: 3.9,
        courses: ["English Language", "Computer Science", "Physics"],
      },
      {
        name: "Ganbaa",
        age: 35,
        gender: "male",
        gpa: 3.2,
        courses: ["Economics", "Mathematics", "Computer Science"],
      },
      {
        name: "Anujin",
        age: 28,
        gender: "female",
        gpa: 3.5,
        courses: ["Mathematics", "Art", "English Language"],
      },
      {
        name: "Narantuya",
        age: 20,
        gender: "female",
        gpa: 3.1,
        courses: ["Biology", "Chemistry", "English Language"],
      },
      {
        name: "Otgonbayar",
        age: 24,
        gender: "male",
        gpa: 3.7,
        courses: ["Computer Science", "Mathematics", "Data Science"],
      },
      {
        name: "Delgermaa",
        age: 27,
        gender: "female",
        gpa: 3,
        courses: ["Psychology", "English Language", "Computer Science"],
      },
      {
        name: "Erdene",
        age: 23,
        gender: "male",
        gpa: 2.5,
        courses: ["Mathematics", "English Language", "Music"],
      },
      {
        name: "Suvd",
        age: 29,
        gender: "female",
        gpa: 3.4,
        courses: ["Japanese Language", "English Language", "Business"],
      },
      {
        name: "Munkhbat",
        age: 26,
        gender: "male",
        gpa: 3.9,
        courses: ["Physics", "Engineering", "Computer Science"],
      },
    ]);
    //put request
    await collection.updateOne({ name: "Horloo" }, { set: { age: 31 } });
    await collection.updateMany(
      { courses: { eq: "Mathematics" } },
      { set: { gpa: 4.0 } }
    );
    //delete request
    await collection.deleteOne({ name: "Bilguun" });
    await collection.deleteMany({ gpa: 4.0 });
    //get request
    const findAll = await collection.find({}).toArray();
    const findStudentName = await collection.find({ name: "Muugii" }).toArray();
    const findMale = await collection.find({ gender: "male" }).toArray();
    const findAge = await collection.find({ age: { $gt: 25 } }).toArray();
    const findByGpa = await collection.find({ gpa: { $gte: 3.5 } }).toArray();
    const findCourse = await collection
      .find({ courses: "Computer Science" })
      .toArray();
    const findCourses = await collection
      .find({
        courses: { $all: ["Mathematics", "English Language"] },
      })
      .toArray();
    const findGpaInRange = await collection
      .find({ gpa: { $gte: 3, $lte: 4 } })
      .toArray();

    return {
      findAll,
      findStudentName,
      findMale,
      findAge,
      findByGpa,
      findCourse,
      findCourses,
      findGpaInRange,
    };
  } catch (e) {
    console.log(e);
  } finally {
    await client.close();
  }
}
