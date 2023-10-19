const {Schema,model} = require("mongoose")


const schema = new Schema({
    name:{
        type:String,
    },
    company:{
        type:Schema.Types.ObjectId,
        ref:"company",
    },
    location:{
        type:Schema.Types.ObjectId,
        ref:"location"
    },
    head:{
        type:Schema.Types.ObjectId,ref:"employee"
    },
    addedBy:{type:Schema.Types.ObjectId,ref:"employee"}
},{
    collection:"department",
    timestamps:true,
    
})


module.exports = model("department",schema)