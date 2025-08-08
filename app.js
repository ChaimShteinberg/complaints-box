import express from "express";
import { connectToMongo } from "./db/connect.db.js";
import complaintRouter from "./routes/complaint.route.js";

const app = express();

await connectToMongo();

app.use(express.static('public'))

app.use(express.urlencoded({ extended: true }));

app.use(express.json())

app.use("/complaint", complaintRouter);

app.listen(process.env.PORT, console.log("listennung..."));
