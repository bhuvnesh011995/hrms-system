const {Schema,model} = require("mongoose")


const schema = new Schema({
    name:String,
    code:String,
    symbol:String
},{
    collection:"currencyConstant"
})


module.exports = model("currencyConstant",schema)