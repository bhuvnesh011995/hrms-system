const {Schema,model} = require("mongoose")


const schema = new Schema({
    company:{
        type:Schema.Types.ObjectId,ref:"company"
    },
    from:{
        type:Schema.Types.ObjectId,ref:"employee"
    },
    against:{
        type:Schema.Types.ObjectId,ref:"employee"
    },
    title:{
        type:String
    },
    description:{
        type:String
    },
    date:{
        type:Date
    },
    files:[String],
    addedBy:{
        type:Schema.Types.ObjectId,ref:"employee"
    },
    status:{
        type:String
    }
},{
    collection:"complaints",
    timestamps:true
})


module.exports = model("complaints",schema)