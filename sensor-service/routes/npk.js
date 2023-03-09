var express = require("express");
var router = express.Router();
const controller = require ("../controller/sensor.js");

router.get("/",controller.getNpkInfo);
router.get("/:id",controller.getOneNpk);
router.post("/",controller.createNpk);
router.put("/:id",controller.updateNpk);
router.delete("/:id",controller.deleteNpk)


module.exports= router;