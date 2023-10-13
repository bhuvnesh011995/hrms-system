const { Schema, model } = require("mongoose")
const schema = new Schema({
  name: { type: String },
  code: { type: String },
  language:
  {
    Set__Roles: { type: String, default: null },
    View__Application: { type: String, default: null },
    Configurations: { type: String, default: null },
    Earning: { type: String, default: null }
  },
  status: {
    type: String,
    enum: ['active', 'inactive'],
    default: 'active'
  }
}, {
  collection: "languages"
})
module.exports = model('languages', schema)
