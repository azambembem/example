const http = require("http");

const mongoose = require("mongoose");
const { config } = require("dotenv");
config();

let db;

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log("Connected to Mongo"))
  .catch((err) => console.log(err));

const app = require("./app");

const server = http.createServer(app);

// module.exports = { db };

const PORT = 3000;

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT} http://localhost:${PORT}`);
});

// module.exports = mongoose.connection;
