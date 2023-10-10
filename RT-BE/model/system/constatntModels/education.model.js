const {Schema,model} = require("mongoose")


const schema = new Schema({
    name:String
},{
    collection:"educationConstant"
})


module.exports = model("educationConstant",schema)