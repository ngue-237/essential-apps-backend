var express = require("express");
var router = express.Router();
const controller = require ("../controller/sensor.js");

router.get("/",controller.getTempInfo);
router.get("/:id",controller.getOneTemp);
router.post("/",controller.createTemp);
router.put("/:id",controller.updateTemp);
router.delete("/:id",controller.deleteTemp)

module.exports= router;