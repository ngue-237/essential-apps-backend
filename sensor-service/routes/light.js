var express = require("express");
var router = express.Router();
const controller = require ("../controller/sensor.js");

router.get("/",controller.getLightInfo);
router.get("/:id",controller.getOneLight);
router.post("/",controller.createLight);
router.put("/:id",controller.updateLight);
router.delete("/:id",controller.deleteLight)


module.exports= router;