const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const dataRoute = require("./Router/route");
const mongoose = require("mongoose");
const app = express();
require("dotenv").config();

// connect to database
async function connectDB() {
  await mongoose.connect("mongodb://127.0.0.1:27017/testDB");
}
connectDB()
  .then(() => console.log("เชื่อมดาต้าเบสเรียบร้อย !!"))
  .catch((err) => console.log(err));

//middleware
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

app.use("/api", dataRoute);

const port = process.env.port || 8080;

app.listen(port, () => {
  console.log("start server at port " + port);
});
