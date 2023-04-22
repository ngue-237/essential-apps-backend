var express = require("express");
var router = express.Router();
const controller = require ("../controller/sensor.js");

router.get("/",controller.getWaterInfo);
router.get("/:id",controller.getOneWater);
router.post("/",controller.createWater);
router.put("/:id",controller.updateWater);
router.delete("/:id",controller.deleteWater)

module.exports= router;