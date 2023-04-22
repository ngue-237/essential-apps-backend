var express = require("express");
var router = express.Router();
const controller = require ("../controller/sensor.js");

router.get("/",controller.getLigthInfo);
router.get("/:id",controller.getOneLigth);
router.post("/",controller.createLigth);
router.put("/:id",controller.updateLigth);
router.delete("/:id",controller.deleteLigth)


module.exports= router;