const users = require("../controllers/users");


const router = require("express").Router();



router.get("/", users.findAllUsers);


router.get("/:userId", users.findUserById);

router.post("/", () => {
    console.log("body: " + router.body);
    users.createUser
});


// router.post("/", users.createUser);

module.exports = router;