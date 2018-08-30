const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");

const app = express();

// Set jade as view template
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", function(req, res) {
  console.log("Hello World");
  res.render("index", { active: "index" });
});

app.get("/about", function(req, res) {
  console.log("Hello World");
  res.render("about", { title: "Welcom", active: "about" });
});

app.get("/contact", function(req, res) {
  console.log("Hello World");
  res.render("contact", { title: "Welcom", active: "contact" });
});

app.listen(3000);
console.log("Server is running on port 3000...");
