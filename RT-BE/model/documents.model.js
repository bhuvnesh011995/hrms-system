const {Schema,model} = require("mongoose")


const schema = new Schema({
    name:{
        type:String
    },
    documentType:{
        type:Schema.Types.ObjectId,ref:"documentConstant"
    },
    licenseNumber:{
        type:String
    },
    company:{type:Schema.Types.ObjectId,ref:"company"},
    expiryDate:{
        type:Date
    },
    alarm:{
        type:String
    },
    filename:{
        type:String
    },
    addedBy:{type:Schema.Types.ObjectId,ref:"employee"}
},{
    collection:"documents",
    timestamps:true,
    
})


module.exports = model("documents",schema)