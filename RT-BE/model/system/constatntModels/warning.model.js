const {Schema,model} = require("mongoose")


const schema = new Schema({
    name:String
},{
    collection:"warningConstant"
})


module.exports = model("warningConstant",schema)