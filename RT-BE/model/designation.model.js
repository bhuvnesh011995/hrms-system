const {Schema,model} = require("mongoose")

const schema = new Schema({
    name:{
        type:String,   
    },

    company:{type:Schema.Types.ObjectId,ref:"company"},
    department:{type:Schema.Types.ObjectId,ref:"department"},
    subdepartment:{type:Schema.Types.ObjectId,ref:"subdepartment"},
},{
    collection:"designation",
    timestamps:true,
    
})


module.exports = model("designation",schema)