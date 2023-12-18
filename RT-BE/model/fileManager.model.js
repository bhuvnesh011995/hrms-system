const { Schema, model } = require("mongoose");

const schema = new Schema(
  {
    department: { type: String },
    fileName: { type: String },
  },
  {
    collection: "filemanagers",
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  },
);

module.exports = model("filemanagers", schema);
