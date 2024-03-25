const vccinations = require("../controllers/vaccinations");


const router = require("express").Router();

router.get("/", vccinations.findAllVaccinations);


// router.get("/:userId", vccinations.findvccinationsById);

router.post("/", vccinations.createvccination);

module.exports = router;