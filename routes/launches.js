const express = require("express");
const router = express.Router();
const { getLaunches } = require("../controller/controller");

router.get("/", getLaunches);

module.exports = router;