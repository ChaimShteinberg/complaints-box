import db from "../db/connect.db";

const collection = db.collection("complaints");

export async function submitComplaint(req, res) {
  try {
    const { category, message } = req.body;
    await collection.insertOne({ category, message });
    res.send("The form was submitted successfully.");
  } catch (error) {
    res.status(error.status | 400).send(error.message);
  }
}
