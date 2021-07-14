require("dotenv").config({ path: "./.env" });
const express = require("express");
const connectDB = require("./config/db");
const errorHandler = require('./middleware/error')

//conect db
connectDB()

const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.json());

app.get('/', (req,res)=>{res.send('Server is booming online')})

app.use("/api/v1/auth", require("./routes/auth"));
app.use("/api/v1/private", require("./routes/private"));
app.use("/api/v1/calc", require("./routes/Calculation"));

// errorHandler should be last piece of middleware 
app.use(errorHandler)


const server = app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// handle errors when server crashes 
process.on('unhandledRejection', (err, promise)=>{
console.log(`Logged error: ${err}`)
server.close(()=> process.exit(1))
})