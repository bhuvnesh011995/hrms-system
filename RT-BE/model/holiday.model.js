const { Schema, model } = require("mongoose");

const schema = new Schema(
  {
    title: { type: String },
    startDate: { type: Date },
    endDate: { type: Date },
    description: { type: String },
    status: { type: String },
    companyName: { type: String },
    eventType: { type: String },
  },
  {
    collection: "holidays",
    timestamps: true,
  }
);

module.exports = model("holidays", schema);
