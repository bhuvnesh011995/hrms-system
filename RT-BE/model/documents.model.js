const {Schema,model} = require("mongoose")


const schema = new Schema({
    licenseName:{
        type:String
    },
    documentType:{
        type:String
    },
    licenseNumber:{
        type:String
    },
    company:{type:Schema.Types.ObjectId,ref:"company"},
    expiryDate:{
        type:Date
    },
    alarm:{
        type:Date
    },
    filename:{
        type:String
    }
},{
    collection:"documents",
    timestamps:true,
    
})


module.exports = model("documents",schema)