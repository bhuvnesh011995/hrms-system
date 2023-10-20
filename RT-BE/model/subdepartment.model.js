const {Schema,model} = require("mongoose")


const schema = new Schema({
    name:{
        type:String
    },
    department:{type:Schema.Types.ObjectId,ref:"department"},

    company:{type:Schema.Types.ObjectId,ref:"company"},
    addedBy:{type:Schema.Types.ObjectId,ref:"employee"}
},{
    collection:"subdepartment",
    timestamps:true,
    
})



module.exports = model("subdepartment",schema)