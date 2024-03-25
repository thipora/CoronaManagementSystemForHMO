const exModel = require("../models/exModel");

const router = require("express").Router();

router.get("/", async(req, res) => {
  let data = await exModel.find({});
  res.json("ex work       " + data + "      finish");
});

router.post("/add", async(req, res) => {
  const b = {"name": "tipidd"};
console.log("בהצלחה!!")
  let ex = new exModel(b);
  console.log("ה' יעזור" + req.body);
  await ex.save();
  res.json("req.body" + req.body);
});
module.exports = router;