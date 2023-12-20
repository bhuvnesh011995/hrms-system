const {Schema,model} = require("mongoose")


const schema = new Schema({
    accommodationTitle:{
        type:String,
        
    },
    addressLine1:{
        type:String,
        
    },
    addressLine2:{
        type:String,
    },
    periodForm:{
        type: Date,
    },
    periodTo:{
        type: Date,
        },

    accommodationType:{
        type:String
    },

    annualValue:{
        type:String
    },
    furnished:{
        type:String
    },
    annualRentPaid:{
        type:String
    },
  
   
},{
    collection:"accommodation",
    timestamps:true
})


module.exports = model("accommodation",schema)