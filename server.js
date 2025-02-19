const express = require("express");
const app = express();
const http = require("http");

// 1 kirish qismi
app.use(express.static("public"));
app.use(express.json());
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
app.get("/", (req, res) => {
  res.render("harid");
});

const server = http.createServer(app);

const PORT = 3000;

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
