const {Schema,model} = require("mongoose")


const schema = new Schema({
    name:String
},{
    collection:"countryConstant"
})

module.exports = model("countryConstant",schema)