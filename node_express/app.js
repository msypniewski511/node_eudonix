const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", function(req, res) {
  console.log("Hello World");
  res.send("<h1>Hello World</h1>");
});

app.listen(3000);
console.log("Server is running on port 3000...");
