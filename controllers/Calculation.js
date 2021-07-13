const Calculation = require("../models/Calculation");

exports.getCalculations = async (req, res, next) => {
  try {
    const calc = await Calculation.find();
    res.json(calc);
  } catch (err) {
    res.json({ message: err });
  }
};

//post submits an calculation
exports.addOneCalc = async (req, res) => {
  const calc = new Calculation({
    challenge: req.body.challenge,
    result: req.body.result
  });
  try {
    const savedCalc = await calc.save();
    res.json(savedCalc);
  } catch (err) {
    res.json({ message: err });
  }
};
