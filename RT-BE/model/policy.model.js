const {Schema,model}  = require("mongoose")


const schema = new Schema({
    company:{type:Schema.Types.ObjectId,ref:"company"},

    title:{
        type:String
    },
    description:{
        type:String
    },
    filename:{
        type:String
    }
},{
    collection:"policy",
    timestamps:true,
    
})




module.exports = model("policy",schema)