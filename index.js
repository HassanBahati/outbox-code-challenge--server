require("dotenv").config({ path: "./.env" });
const express = require("express");
const connectDB = require("./config/db");
const errorHandler = require("./middleware/error");
const cors = require("cors");

//conect db
connectDB();

const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());
//for cross origin resource sharing
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); //update to match detail you make requests from
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Credentials", true);
  next();
});

app.get("/", (req, res) => {
  res.send("Server is booming online");
});

app.use("/api/v1/auth", require("./routes/auth"));
app.use("/api/v1/private", require("./routes/private"));
app.use("/api/v1/calc", require("./routes/Calculation"));

// errorHandler should be last piece of middleware
app.use(errorHandler);

const server = app.listen(PORT, () =>
  console.log(`Server running on port ${PORT}`)
);

// handle errors when server crashes
process.on("unhandledRejection", (err, promise) => {
  console.log(`Logged error: ${err}`);
  server.close(() => process.exit(1));
});
