const {Schema,model} = require("mongoose")


const schema = new Schema({
    company:{
        type:String,
        
    },
    employeeToExit:{
        type:String,
        
    },
    description:{
        type:String,
    },
    disableAccount:{
        type:String
    },
    exitDate:{
        type: Date,
        },

    exitInterview:{
        type:String
    },
    typeofExit:{
        type:String
    },
   
},{
    collection:"employeeexit",
    timestamps:true
})


module.exports = model("employeeexit",schema)