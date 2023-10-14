let languageField = require("../../utility/language.constant")
const { Schema, model } = require("mongoose")

let lanFieldObj = languageField.reduce((acc,curr)=>{
acc[curr] = {type:Schema.Types.String,default:null}
return acc
},{})



const schema = new Schema({
  name: { type: String },
  code: { type: String },
  language:lanFieldObj,
  status: {
    type: String,
    enum: ['active', 'inactive'],
    default: 'active'
  }
}, {
  collection: "languages"
})
module.exports = model('languages', schema)
