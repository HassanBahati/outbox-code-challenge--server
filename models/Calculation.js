const mongoose = require("mongoose");

const CalculationSchema = new mongoose.Schema({
  //   username: {
  //     type: String,
  //     required: [true, "Please provide a username"],
  //   },
  challenge: {
    type: Number,
    required: [true, "Please provide a number to compute"],
  },
  result: {
    type: Number,
    required: [true],
  },
});

const Calculation = mongoose.model("Calculation", CalculationSchema);

module.exports = Calculation;
