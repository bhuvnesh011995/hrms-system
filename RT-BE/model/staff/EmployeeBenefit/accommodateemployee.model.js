const {Schema,model} = require("mongoose")


const schema = new Schema({
    accommodation:{
        type:Schema.Types.ObjectId,ref:"accommodation"
    },

    address:{
        type:String,
        
    },
    accommodationPeriod:{
        type:String,
    },
    company:{type:Schema.Types.ObjectId,ref:"company"},

    employee:{type:Schema.Types.ObjectId,ref:"employee"},


    accommodationFrom:{
        type:Date
    },

    accommodationTo:{
        type:Date
    },
    employeeRentPaid:{
        type:String
    },
   
   
},{
    collection:"accommodateEmployee",
    timestamps:true
})


module.exports = model("accommodateEmployee",schema)