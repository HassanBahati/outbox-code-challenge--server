const express = require("express");
const router = express.Router();
const { getCalculations, addOneCalc } = require("../controllers/Calculation");
const { protect } = require("../middleware/auth");

router.route("/").get(protect, getCalculations);

router.route("/").post(protect, addOneCalc);

module.exports = router;
