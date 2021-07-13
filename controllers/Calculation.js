const Calculation = require("../models/Calculation");

exports.getCalculations = async(req, res, next) => {
    try {
        const calc = await Calculation.find();
        res.json(calc);
      } catch (err) {
        res.json({ message: err });
      }
};
