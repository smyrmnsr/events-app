const mongoose = require("mongoose");
const Schema = mongoose.Schema;

/* Create user schema */
const User = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    avatar: { type: String, required: false },
  },
  { timestamps: true }
);

module.exports = mongoose.model("users", User);
