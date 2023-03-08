var express = require("express");
var router = express.Router();
const controller = require ("../controller/sensor.js");

router.get("/",controller.getCamInfo);
router.get("/:id",controller.getOneCam);
router.post("/",controller.createCam);
router.put("/:id",controller.updateCam);
router.delete("/:id",controller.deleteCam)

module.exports= router;