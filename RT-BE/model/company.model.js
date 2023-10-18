const {Schema,model, trusted} = require("mongoose")


const schema = new Schema({
    name:{
        type:String,
        
    },
    taxNumber:{
        type:String,
        
    },
    companyType:{
        type:Schema.Types.ObjectId,ref:"companyConstant"
    },
    tradingName:{
        type:String
    },
    address:{
        line1:{
            type:String
        },
        line2:{
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
        type:Schema.Types.ObjectId,ref:"currencyConstant"
    },
    // department:[{type:Schema.Types.ObjectId,ref:"department"}],

    // location:[{type:Schema.Types.ObjectId,ref:"location"}]
},{
    collection:"company",
    timestamps:true
})


module.exports = model("company",schema)