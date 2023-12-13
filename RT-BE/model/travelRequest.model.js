const { Schema, model } = require("mongoose");

const schema = new Schema(
  {
    companyName: { type: String },
    employeeId: { type: String },
    startDate: { type: Date },
    endDate: { type: Date },
    visitPurpose: { type: String },
    visitPlace: { type: String },
    travelMode: { type: String },
    arrangementType: { type: String },
    expectedBudget: { type: String },
    actualBudget: { type: String },
    description: { type: String },
    eventType: { type: String },
    title: { type: String },
  },
  {
    collection: "travelRequests",
    timestamps: true,
  }
);

module.exports = model("travelRequests", schema);
