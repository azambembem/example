const express = require("express");
const app = express();
const fs = require("fs");
const path = require("path");
const mongoose = require("mongoose");
// const { db } = require("./server");
// const mongoose = require("./server.js");

// const db = require("./server").mongoose();

const planSchema = new mongoose.Schema({
  reja: { type: String, required: true }
});

const Plan = mongoose.model("Plan", planSchema);

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

// app.post("/create-item", (req, res) => {
//   const new_reja = req.body.reja;
//   db.first_collection("plans").insertOne({ reja: new_reja }, (err, data) => {
//     if (err) {
//       console.log(err);
//       res.send("Something went wrong!");
//     } else {
//       res.send("Reja added successfully!");
//     }
//   });
//   console.log(req.body);
//   res.json({ status: "success" });
// });

app.post("/create-item", (req, res) => {
  const new_reja = req.body.reja;

  const newPlan = new Plan({ reja: new_reja });
  newPlan
    .save()
    .then(() => {
      res.send("Reja added successfully!");
    })
    .catch((err) => {
      console.log(err);
      res.send("Something went wrong!");
    });
});

app.get("/author", (req, res) => {
  res.render("author", { user: user });
});

app.get("/", (req, res) => {
  res.render("harid");
});

// app.get("/reja", (req, res) => {
//   db.first_collection("plans")
//     .find()
//     .toArray((err, data) => {
//       if (err) console.log(err);
//       else {
//         console.log(data);
//         res.render("reja");
//       }
//     });
// });

app.get("/reja", (req, res) => {
  Plan.find()
    .then((data) => {
      console.log(data);
      res.render("reja", { plans: data });
    })
    .catch((err) => {
      console.log(err);
      res.send("Something went wrong!");
    });
  console.log(data);
  res.render("reja", { items: data });
});

module.exports = app;
