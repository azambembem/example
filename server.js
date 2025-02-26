const http = require("http");
const { default: mongoose } = require("mongoose");
const app = require("./app");

// const mongoose = require("mongoose");
// const { config } = require("dotenv");
// config();
// let db;
// mongo db atlas
mongoose
  .connect(
    "mongodb+srv://kokokoko123:azamaws1020@cluster0.hmmxd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => console.log("Connected to to Atlas"))
  .catch((err) => console.log(err));

// mongoose
//   .connect(process.env.MONGODB_URL)
//   .then(() => console.log("Connected to Mongo"))
//   .catch((err) => console.log(err));

// const db = mongoose.connection;

const server = http.createServer(app);

// module.exports = db;

const PORT = 3000;

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT} http://localhost:${PORT}`);
});
