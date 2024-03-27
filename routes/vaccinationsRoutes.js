const vccinations = require("../controllers/vaccinations");


const router = require("express").Router();

router.get("/", vccinations.findAllVaccinations);


router.get("/:vaccinationId", vccinations.findVaccinationById);

router.post("/", vccinations.createVaccination);

module.exports = router;