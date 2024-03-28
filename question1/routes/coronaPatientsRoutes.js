import {findAllCoronaPatients, findCoronaPatientsById, createCoronaPatient} from "../controllers/coronaPatient.js";

import express from "express";

const router = express.Router();

router.get("/", findAllCoronaPatients);


router.get("/:id", findCoronaPatientsById);

router.post("/", createCoronaPatient);

export default router;