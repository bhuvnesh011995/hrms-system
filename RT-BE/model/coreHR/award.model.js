const {Schema,model} = require("mongoose")

const schema = new Schema({
    company:{type:Schema.Types.ObjectId,ref:"company"},

    employee:{type:Schema.Types.ObjectId,ref:"employee"},

    awardType:{type:Schema.Types.ObjectId,ref:"awardConstant"},

    date:Date,

    gift:String,

    cash:String,

    monthAndYear:String,

    awardInfo:String,

    description:String,

    filename:String,

    addedBy:{type:Schema.Types.ObjectId,ref:"employee"}
},{
    collection:"award",
    timestamps:true,
    
})


module.exports = model("award",schema)