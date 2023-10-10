const {Schema,model} = require("mongoose")


const schema = new Schema({
    name:String
},{
    collection:"travelArrangementConstant"
})


module.exports = model("travelArrangementConstant",schema)