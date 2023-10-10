const {Schema,model} = require("mongoose")


const schema = new Schema({
    name:String
},{
    collection:"leaveConstant"
})


module.exports = model("leaveConstant",schema)