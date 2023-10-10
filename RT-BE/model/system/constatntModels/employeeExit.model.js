const {Schema,model} = require("mongoose")


const schema = new Schema({
    name:String
},{
    collection:"employeeExitConstant"
})


module.exports = model("employeeExitConstant",schema)