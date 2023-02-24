var express = require("express");
var router = express.Router();

/* GET users listing. */

router.get("/", function (req, res, next) {
  console.log("hello world")
  res.send("Hi I'm sensor microservice");
});

module.exports = router;
