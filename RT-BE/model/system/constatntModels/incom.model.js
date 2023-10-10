const {Schema,model} = require("mongoose")


const schema = new Schema({
    name:String
},{
    collection:"incomeConstant"
})


module.exports = model("incomeConstant",schema)