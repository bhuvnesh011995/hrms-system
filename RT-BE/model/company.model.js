const {Schema,model, trusted} = require("mongoose")


schema = new Schema({
    name:{
        type:String,
        
    },
    taxNumber:{
        type:String,
        
    },
    companyType:{
        type:String
    },
    tradingName:{
        type:String
    },
    address:{
        type:String
    },
    registrationNumber:{
        type:String
    },
    phone:{
        type:String
    },
    email:{
        type:String
    },
    website:{
        type:String
    },
    country:{
        type:String
    },
    city:{
        type:String
    },
    state:{
        type:String
    },
    zipCode:{
        type:String
    },
    username:{
        type:String
    },
    password:{
        type:String
    },
    logo:{
        type:String
    },
    timeZone:{
        type:String
    },
    currency:{
        type:String
    },
    department:[{type:Schema.Types.ObjectId,ref:"department"}],

    location:[{type:Schema.Types.ObjectId,ref:"location"}]
},{
    collection:"company",
    timestamps:true,
    
})


module.exports = model("company",schema)