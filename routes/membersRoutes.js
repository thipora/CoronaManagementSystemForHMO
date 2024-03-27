const members = require("../controllers/members");

const router = require("express").Router();

router.get("/", members.findAllUsers);

router.get("/:memberId", members.findUserById);

router.post("/", members.createUser);

module.exports = router;