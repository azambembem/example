console.log("Web serverni boshlash");
const express = require("express");
const app = express();
const fs = require("fs");
const path = require("path");
// const { default: mongoose } = require("mongoose");

// const db = require("./server").db();

let user;

fs.readFile("db/user.json", "utf8", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    user = JSON.parse(data);
  }
});

// 1 kirish qismi
app.use(express.static("public"));
app.use(express.json());

// mongoose
//   .connect(
//     "mongodb+srv://kokokoko123:azamaws1020@cluster0.hmmxd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
//   )
//   .then(() => console.log("Cluster"))
//   .catch((err) => console.log(err));

app.use(express.urlencoded({ extended: true })); // htmldan

// 2: Session qismi

// 3 Views qismi
app.set("views", "views");
app.set("view engine", "ejs");

// 4 Route qismi

app.post("/create-item", (req, res) => {
  console.log(req.body);
  res.json({ status: "success" });
});

app.get("/author", (req, res) => {
  res.render("author", { user: user });
});

app.get("/", (req, res) => {
  res.render("harid");
});

app.get("/reja", (req, res) => {
  res.render("reja");
});

module.exports = app;
