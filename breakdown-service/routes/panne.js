var express = require("express");
var router = express.Router();
var Panne = require("../models/panne.model");

router.post("/", async (req, res) => {
  const panne = new Panne(req.body);
  try {
    await panne.save();
    res.json(req.body);
  } catch (error) {
    res.statusCode(500).json({ msg: "something wrong during save operation" });
  }
});

router.get("/", async (req, res) => {
  const pannes = await Panne.find();
  res.json(pannes);
});

router.get("/last-record", async (req, res) => {
  try {
    const panne = await Panne.findOne().sort({ _id: -1 });
    res.json(panne);
  } catch (error) {
    res.json(error);
  }
});

router.delete("/:_id", async (req, res) => {
  try {
    await Panne.findByIdAndRemove(req.params._id);
    res.json({ msg: "breakdown deleted successfully" });
  } catch (error) {
    res.json({ msg: "something something wrong during delete operation" });
  }
});
module.exports = router;
