const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");

// Init app
const app = express();
// Set template folder
app.set("views", path.join(__dirname, "views"));
// Set jade as view template
app.set("view engine", "jade");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// Add static to path
app.use(express.static(path.join(__dirname, "public")));

// Set Routes
app.get("/", function(req, res) {
  res.render("index", { title: "Home", active: "index" });
});

app.get("/about", function(req, res) {
  res.render("about", { title: "About Us", active: "about" });
});

app.get("/services", function(req, res) {
  res.render("services", { title: "Srvices", active: "services" });
});

app.get("/contact", function(req, res) {
  res.render("contact", { title: "Contact", active: "contact" });
});

app.post("/contact/send", function(req, res) {
  console.log("test");
  console.log(req.body.email);
  let transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: "msypniewski511@gmail.com",
      pass: "XXXXXXXX"
    }
  });

  let mailOption = {
    from: "Maciej Sypniewski <msypniewski511@gmail>",
    to: `${req.body.email}`,
    subject: "Website Submission",
    text:
      "You have a submission with the following details...Name: " +
      req.body.name +
      " Email: " +
      req.body.email +
      "Message: " +
      req.body.message,
    html:
      "<p>You have a submission with the following details...<ul>" +
      "<li>Name: " +
      req.body.name +
      "</li>" +
      "<li>Email: " +
      req.body.email +
      "</li>" +
      "<li>Message: " +
      req.body.message +
      "</li>" +
      "</ul></p>"
  };

  transporter.sendMail(mailOption, function(error, info) {
    if (error) {
      console.log(error);
      res.redirect("/");
    } else {
      console.log("Message Sent: " + info.response);
      res.redirect("/");
    }
  });
});
// End of routes
app.listen(3000);
console.log("Server is running on port 3000...");
