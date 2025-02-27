const http = require("http");
const { MongoClient } = require("mongodb");

const connectionString =
  "mongodb+srv://kokokoko123:azamaws1020@cluster0.hmmxd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

MongoClient.connect(connectionString)
  .then((client) => {
    console.log("✅ databasega mufavvaqiyatli ulandi");

    const db = client.db(); // database object olib kelish
    module.exports = db; // db obj yuborish

    const app = require("./app");
    const server = http.createServer(app);
    let PORT = 3000;

    server.listen(PORT, function () {
      console.log(`The server is running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error("ERROR on connection MongoDB:", err);
  });
