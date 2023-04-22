var express = require("express");
var router = express.Router();
const controller = require ("../controller/sensor.js");

router.get("/",controller.getDht11Info);
router.get("/:id",controller.getOneDht11);
router.post("/",controller.createDht11);
router.put("/:id",controller.updateDht11);
router.delete("/:id",controller.deleteDht11)

module.exports= router;