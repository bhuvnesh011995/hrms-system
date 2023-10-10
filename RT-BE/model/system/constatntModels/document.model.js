const {Schema,model} = require("mongoose")


const schema = new Schema({
    name:String
},{
    collection:"documentConstant"
})


module.exports = model("documentConstant",schema)