var express = require("express");
var router = express.Router();
const controller = require ("../controller/user.js");

router.get("/",controller.getUserInfo);
router.get("/:id",controller.getOneUser);
router.post("/",controller.createUser);
router.put("/:id",controller.updateUser);
router.delete("/:id",controller.deleteUser)

module.exports = router;