const {Schema,model} = require("mongoose")


const schema = new Schema({
    name:String
},{
    collection:"awardConstant"
})


module.exports = model("awardConstant",schema)