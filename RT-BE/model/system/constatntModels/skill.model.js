const {Schema,model} = require("mongoose")


const schema = new Schema({
    name:String
},{
    collection:"skillConstant"
})


module.exports = model("skillConstant",schema)