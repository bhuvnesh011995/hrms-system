const {Schema,model} = require("mongoose")


const schema = new Schema({
    name:String
},{
    collection:"languageConstant"
})


module.exports = model("languageConstant",schema)