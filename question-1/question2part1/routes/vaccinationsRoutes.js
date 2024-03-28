import { createVaccination, findVaccinationById, findAllVaccinations } from "../controllers/vaccinations.js";

import express from "express";

const router = express.Router();

router.get("/", findAllVaccinations);


router.get("/:id", findVaccinationById);

router.post("/", createVaccination);

export default router;