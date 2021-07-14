const mongoose = require("mongoose");

const CalculationSchema = new mongoose.Schema({
  type: {
    type: String
  },
  challenge: {
    type: Number,
   
  },
  result: {
    type: Number,
 
  },
});

const Calculation = mongoose.model("Calculation", CalculationSchema);

module.exports = Calculation;
