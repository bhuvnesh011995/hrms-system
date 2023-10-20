const {Schema,model} = require("mongoose")

const schema = new Schema({
    name:String,
    company:{type:Schema.Types.ObjectId,ref:"company"},
    department:{type:Schema.Types.ObjectId,ref:"department"},
    subdepartment:{type:Schema.Types.ObjectId,ref:"subdepartment"},
    addedBy:{type:Schema.Types.ObjectId,ref:"employee"}
},{
    collection:"grouping"
})


module.exports = model("grouping",schema)