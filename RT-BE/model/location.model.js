const {Schema,model} = require("mongoose")





const schema = new Schema({
    company:{type:Schema.Types.ObjectId,ref:"company"},
    head:String,
    name:{
        type:String
    },
    address:{
        type:String,
    },
    city:{
        type:String
    },
    state:{
        type:String
    },
    country:{
        type:String
    },
    zipCode:{
        type:String
    },
    email:{
        type:String
    },
    phone:{
        type:String,
    },
    faxNumber:{
        type:String
    }
},{
    collection:"location",
    timestamps:true,
    
})


module.exports = model("location",schema)