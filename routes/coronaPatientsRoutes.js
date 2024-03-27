const coronaPatients = require("../controllers/coronaPatients");

const router = require("express").Router();

router.get("/", coronaPatients.findAllCoronaPatients);


router.get("/:coronaPatientId", coronaPatients.findCoronaPatientsById);

router.post("/", coronaPatients.createCoronaPatient);

module.exports = router;