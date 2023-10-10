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
        type:String
    },
    subdepartment:[{type:Schema.Types.ObjectId,ref:"subdepartment"}]
},{
    collection:"department",
    timestamps:true,
    
})


module.exports = model("department",schema)