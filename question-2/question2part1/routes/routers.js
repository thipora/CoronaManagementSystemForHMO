import membersRoutes from "./membersRoutes.js";
import vaccinationsRoutes from "./vaccinationsRoutes.js";
import coronaPatientsRoutes from "./coronaPatientsRoutes.js";

import express from "express";

const router = express.Router();

router.use("/members", membersRoutes);


router.use("/vaccinations", vaccinationsRoutes);

router.use("/coronaPatients", coronaPatientsRoutes);

export default router;