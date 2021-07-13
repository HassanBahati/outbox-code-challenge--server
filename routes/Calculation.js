const express = require("express");
const router = express.Router();
const { getCalculations } = require("../controllers/Calculation");
const { protect } = require("../middleware/auth");

router.route("/").get(protect, getCalculations);

module.exports = router;
