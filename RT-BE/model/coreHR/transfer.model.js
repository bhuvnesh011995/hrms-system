const {Schema,model}= require("mongoose")

const schema = new Schema({

    company:{type:Schema.Types.ObjectId,ref:"company"},

    employee:{type:Schema.Types.ObjectId,ref:"employee"},

    from:{
        department:{type:Schema.Types.ObjectId,ref:"department"},
        location:{type:Schema.Types.ObjectId,ref:"location"},
        subdepartment:{type:Schema.Types.ObjectId,ref:"subdepartment"},
    },
    to:{
        department:{type:Schema.Types.ObjectId,ref:"department"},
        location:{type:Schema.Types.ObjectId,ref:"location"},
        subdepartment:{type:Schema.Types.ObjectId,ref:"subdepartment"},
    },
    date:Date,

    status:{
        type:String,
        enum:["Approved","Pending","Rejected"],
        default:"Pending"
    },
    addedBy:{type:Schema.Types.ObjectId,ref:"employee"},

    description:String
},{
    collection:"transfer",
    timestamps:true
})


module.exports = model("transfer",schema)