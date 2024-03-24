const userModel = require("../models/userModel");

const router = require("express").Router();

router.get("/", async(req, res) => {
  let data = await userModel.find({});
  res.json("user work" + data + "finishhh");
});

router.post("/", async(req, res) => {
  let user = new userModel(req.body);
  await user.save();
  res.json(user);
});

module.exports = router;