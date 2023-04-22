var express = require("express");
var router = express.Router();
const controller = require ("../controller/sensor.js");

router.get("/",controller.getFireInfo);
router.get("/:id",controller.getOneFire);
router.post("/",controller.createFire);
router.put("/:id",controller.updateFire);
router.delete("/:id",controller.deleteFire)

module.exports= router;