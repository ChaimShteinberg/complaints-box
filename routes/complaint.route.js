import express from "express";
import { submitComplaint } from "../controllers/complaint.controller.js";

const router = express.Router();

router.post("/submit", submitComplaint);

router.get("/getAll");

export default router;
