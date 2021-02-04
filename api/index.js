require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const mongoUrl = process.env.ACCESS_DATABASE;
mongoose
  .connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("mongodb is connected"))
  .catch((err) => console.log(err));
var app = express();
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
var Users = require("./router/api");
app.use("/user", Users);
var port = process.env.PORT || 1000;
app.listen(port, () => {
  console.log("Server is running on port");
});
