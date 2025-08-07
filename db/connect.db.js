import { MongoClient } from "mongodb";

const client = new MongoClient(process.env.URI);

export async function connectToMongo() {
  try {
    await client.connect();
    console.log("connect to DB");
  } catch (error) {
    console.log(error.message);
  }
}

export default client.db("complaints-box");
