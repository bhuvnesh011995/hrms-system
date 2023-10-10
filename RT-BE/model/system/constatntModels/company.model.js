const {Schema,model} = require("mongoose")


const schema = new Schema({
    name:String
},{
    collection:"companyConstant"
})


module.exports = model("companyConstant",schema)