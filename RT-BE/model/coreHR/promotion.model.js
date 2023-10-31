const {Schema,model}= require("mongoose")

const schema = new Schema({

    company:{type:Schema.Types.ObjectId,ref:"company"},

    employee:{type:Schema.Types.ObjectId,ref:"employee"},
  

    designation:{type:Schema.Types.ObjectId,ref:"designation"},
    title:String,

    date:Date,

    addedBy:{type:Schema.Types.ObjectId,ref:"employee"},

    description:String
},{
    collection:"promotion",
    timestamps:true
})


module.exports = model("promotion",schema)