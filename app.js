import express from "express";
import db, { connectToMongo } from "./db/connect.db.js";

const app = express();

await connectToMongo();

app.listen(process.env.PORT, console.log("listennung..."));
