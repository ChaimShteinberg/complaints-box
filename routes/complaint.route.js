import express from "express";
import {
  getAllComplaints,
  submitComplaint,
} from "../controllers/complaint.controller.js";

const router = express.Router();

router.post("/submit", submitComplaint);

router.get("/getAll", getAllComplaints);

export default router;
