const {Schema,model} = require("mongoose")


const schema = new Schema({
    name:String
},{
    collection:"religionConstant"
})


module.exports = model("religionConstant",schema)