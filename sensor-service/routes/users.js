var express = require("express");
var router = express.Router();
const controller = require ("../controller/sensor.js");

/* GET users listing. */

router.get("/", function (req, res, next) {
  console.log("hello world")
  res.send("Hi I'm sensor microservice");
});

router.get("/node",controller.getNodeInfo);
router.post("/",controller.createNode);
router.put("/node/:id",controller.updateNode);
router.delete("/",controller.deleteNode)
module.exports = router;
