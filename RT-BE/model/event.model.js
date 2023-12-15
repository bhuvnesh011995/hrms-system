const { Schema, model } = require("mongoose");

const schema = new Schema(
  {
    title: { type: String },
    startDate: { type: Date },
    endDate: { type: Date },
    description: { type: String },
    status: { type: String },
    companyId: { type: String },
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
  
    halfDay: { type: Boolean },
    leaveReason: { type: String } ,
    remarks: { type: String },
  },
  {
    collection: "events",
    timestamps: {
      createdAt:"created_at",updatedAt:"updated_at"
    }
  }
);

module.exports = model("events", schema);
