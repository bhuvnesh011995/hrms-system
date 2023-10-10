const {Schema,model} = require("mongoose")


const schema = new Schema({
    name:String
},{
    collection:"terminationConstant"
})


module.exports = model("terminationConstant",schema)