const mongoose = require("mongoose");
try {
  mongoose.connect(
    "mongodb+srv://samyrr1:S1m2r3@cluster0.gi4tc.mongodb.net/events-app?retryWrites=true&w=majority",
    { useNewUrlParser: true }
  );
  console.log("Database Connected Successfully");
} catch (err) {
  console.log("Database Not Connected");
}

const db = mongoose.connection;

module.exports = db;
