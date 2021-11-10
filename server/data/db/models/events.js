const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Event = new Schema(
  {
    eventName: { type: String, required: true },
    location: { type: String, required: true },
    startDate: { type: String, required: true },
    endDate: { type: String, required: true },
    submittedAt: { type: String, required: true },
    author: { type: String, required: true},
    uid: { type: String, required: true},
    avatar: { data: Buffer, type: String, required: false }
  },
  { timestamps: true }
);

module.exports = mongoose.model("events", Event);
