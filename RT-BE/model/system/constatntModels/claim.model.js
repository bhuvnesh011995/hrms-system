const {Schema,model} = require("mongoose")


const schema = new Schema({
    name:String
},{
    collection:"claimConstant"
})


module.exports = model("claimConstant",schema)