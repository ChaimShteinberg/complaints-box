import db from "../db/connect.db.js";

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

export function auth(req, res, next){
  const {password} = req.body
  if (password === process.env.PASSWORD){
    next()
  }else{
    res.send("סיסמה לא נכונה")
  }
}

export async function getAllComplaints(req, res) {
  try {
    const complaints = await collection.find().toArray();
    res.json(complaints);
  } catch (error) {
    res.status(error.status | 400).send(error.message);
  }
}
