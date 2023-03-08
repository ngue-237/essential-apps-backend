var express = require("express");
var router = express.Router();
const controller = require ("../controller/sensor.js");

router.get("/",controller.getMoistureInfo);
router.get("/:id",controller.getOneMoisture);
router.post("/",controller.createMoisture);
router.put("/:id",controller.updateMoisture);
router.delete("/:id",controller.deleteMoisture)

module.exports= router;