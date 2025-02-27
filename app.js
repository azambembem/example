const express = require("express");
const app = express();
const fs = require("fs");
const db = require("./server");
const mongodb = require("mongodb");

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("views", "views");
app.set("view engine", "ejs");

app.post("/create-item", async (req, res) => {
  try {
    const new_reja = req.body.reja;
    await db.collection("plans").insertOne({ reja: new_reja }, (err, data) => {
      res.json(data.ops[0]);
    });
  } catch (err) {
    console.log(err);
    res.status(500).send("Database insertion error");
  }
});

app.post("/delete-item", (req, res) => {
  const id = req.body.id;
  db.collection("plans").deleteOne(
    { _id: new mongodb.ObjectId(id.toString()) },
    function (err, data) {
      res.json({ state: "success" });
    }
  );
});

app.get("/", async (req, res) => {
  try {
    const data = await db.collection("plans").find().toArray();
    res.render("reja", { items: data.length ? data : [] });
  } catch (err) {
    console.log(err);
    res.status(500).send("Database fetch error");
  }
});

module.exports = app;
