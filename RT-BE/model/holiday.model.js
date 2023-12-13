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

    employeeId: { type: String },
    visitPurpose: { type: String },
    visitPlace: { type: String },
    travelMode: { type: String },
    arrangementType: { type: String },
    expectedBudget: { type: String },
    actualBudget: { type: String },
    goalType: { type: String },
    targetAchievement: { type: String },
  },
  {
    collection: "holidays",
    timestamps: true,
  }
);

module.exports = model("holidays", schema);
