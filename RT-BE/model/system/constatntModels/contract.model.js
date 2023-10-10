const {Schema,model} = require("mongoose")


const schema = new Schema({
    name:String
},{
    collection:"contractConstant"
})


module.exports = model("contractConstant",schema)