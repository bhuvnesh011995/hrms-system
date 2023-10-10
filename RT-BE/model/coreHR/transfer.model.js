const {Schema,model}= require("mongoose")

const schema = new Schema({
    company:{type:Schema.Types.ObjectId,ref:"company"},

    employee:{type:Schema.Types.ObjectId,ref:"employee"},

    from:{
        department:{type:Schema.Types.ObjectId,ref:"department"},
        location:{type:Schema.Types.ObjectId,ref:"location"}
    },
    to:{
        department:{type:Schema.Types.ObjectId,ref:"department"},
        location:{type:Schema.Types.ObjectId,ref:"location"}
    },
    date:Date,

    description:String
},{
    collection:"transfer",
    timestamps:true
})


module.exports = model("transfer",schema)