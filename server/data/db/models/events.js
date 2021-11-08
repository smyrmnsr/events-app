const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Event = new Schema(
  {
    name: { type: String, required: true },
    location: { type: String, required: true },
    startDate: { type: String, required: true },
    endDate: { type: String, required: true },
    submittedAt: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("events", Event);
