const {Schema,model} = require("mongoose")


const schema = new Schema({
    name:String,
    company:String
},{
    collection:"expenseConstant"
})


module.exports = model("expenseConstant",schema)