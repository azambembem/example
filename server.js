const express = require("express");
const app = express();
const http = require("http");

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // htmldan

// 2: Session

// 3

app.set("views", "views");
app.set("view engine", "ejs");

// 4
app.get("/", (req, res) => {
  res.send("<h1>Hello World</h1>");
});

const server = http.createServer(app);

const PORT = 3000;

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
