const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect("mongodb+srv://bahati:bahati@safe-courier.e9cwq.mongodb.net/safe-courier", {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: true,
  });

  console.log("mongodb connected");
};

module.exports = connectDB;
