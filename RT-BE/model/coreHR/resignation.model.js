const {Schema,model}= require("mongoose")

const schema = new Schema({

    company:{type:Schema.Types.ObjectId,ref:"company"},

    employee:{type:Schema.Types.ObjectId,ref:"employee"},

    noticeDate:Date,

    resignationDate:Date,

    status:{
        type:String,
        default:"Not Approved"
    },
    addedBy:{type:Schema.Types.ObjectId,ref:"employee"},

    resignationReason:String
},{
    collection:"resignations",
    timestamps:true
})


module.exports = model("resignations",schema)