const express = require("express");
const router = express.Router();
const { getCalculations, addOneCalc } = require("../controllers/Calculation");
const { protect } = require("../middleware/auth");

router.route("/").get( getCalculations);

router.route("/").post( addOneCalc);

module.exports = router;
