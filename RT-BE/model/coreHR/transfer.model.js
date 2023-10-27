const {Schema,model}= require("mongoose")

const schema = new Schema({

    employee:{type:Schema.Types.ObjectId,ref:"employee"},

    from:{
        department:{type:Schema.Types.ObjectId,ref:"department"},
        location:{type:Schema.Types.ObjectId,ref:"location"},
        company:{type:Schema.Types.ObjectId,ref:"company"},
        subdepartment:{type:Schema.Types.ObjectId,ref:"subdepartment"},
        designation:{type:Schema.Types.ObjectId,ref:"designation"},
        shift:{type:Schema.Types.ObjectId,ref:"officeShift"},
    },
    to:{
        department:{type:Schema.Types.ObjectId,ref:"department"},
        location:{type:Schema.Types.ObjectId,ref:"location"},
        company:{type:Schema.Types.ObjectId,ref:"company"},
        designation:{type:Schema.Types.ObjectId,ref:"designation"},
        shift:{type:Schema.Types.ObjectId,ref:"officeShift"},
        subdepartment:{type:Schema.Types.ObjectId,ref:"subdepartment"},
    },
    date:Date,

    status:{
        type:Boolean,
        default:true
    },
    addedBy:{type:Schema.Types.ObjectId,ref:"employee"},

    description:String
},{
    collection:"transfer",
    timestamps:true
})


module.exports = model("transfer",schema)