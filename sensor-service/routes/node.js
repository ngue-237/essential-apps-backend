var express = require("express");
var router = express.Router();
const controller = require ("../controller/sensor.js");

router.get("/get/:id", controller.getNodeTest);
router.get("/",controller.getNodeInfo);
router.get("/:id",controller.getOneNode);
router.post("/",controller.createNode);
router.put("/:id",controller.updateNode);
router.delete("/:id",controller.deleteNode)


module.exports = router;
