const {Schema,model} = require("mongoose")


const schema = new Schema({
    name:String
},{
    collection:"securityConstant"
})


module.exports = model("securityConstant",schema)