const {Schema,model} = require("mongoose")


const schema = new Schema({

    company:{type:Schema.Types.ObjectId,ref:"company"},

    employee:{type:Schema.Types.ObjectId,ref:"employee"},


    benefitYear:{
        type:Number
    },

    driverAnnualWage:{
        type:String
    },
   
   
},{
    collection:"driver",
    timestamps:true
})


module.exports = model("driver",schema)