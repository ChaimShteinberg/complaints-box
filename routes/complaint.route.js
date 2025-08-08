import express from "express";
import {
  auth,
  getAllComplaints,
  submitComplaint,
} from "../controllers/complaint.controller.js";

const router = express.Router();

router.post("/submit", submitComplaint);

router.use('/admin', auth)

router.post("/admin/getAll", getAllComplaints);

export default router;
