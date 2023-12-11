const {Schema,model} = require("mongoose")


const schema = new Schema({
    company:{
        type:Schema.Types.ObjectId,ref:"company"
    },
    to:{
        type:Schema.Types.ObjectId,ref:"employee"
    },
    by:{
        type:Schema.Types.ObjectId,ref:"employee"
    },
    subject:{
        type:String
    },
    description:{
        type:String
    },
    date:{
        type:Date
    },
    warningType:{
        type:Schema.Types.ObjectId,ref:"warningConstant"
    },
    files:[String],
    addedBy:{
        type:Schema.Types.ObjectId,ref:"employee"
    },
    status:{
        type:String,
        default:"Pending"
    }
},{
    collection:"warnings",
    timestamps:true
})


module.exports = model("warnings",schema)