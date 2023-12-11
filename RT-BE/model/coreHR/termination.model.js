const {Schema,model} = require("mongoose")


const schema = new Schema({
    company:{
        type:Schema.Types.ObjectId,ref:"company"
    },
    employee:{
        type:Schema.Types.ObjectId,ref:"employee"
    },
    terminationType:{
        type:Schema.Types.ObjectId,ref:"terminationConstant"
    },
    description:{
        type:String
    },
    noticeDate:{
        type:Date
    },
    terminationDate:{
        type:Date
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
    collection:"terminations",
    timestamps:true
})


module.exports = model("terminations",schema)