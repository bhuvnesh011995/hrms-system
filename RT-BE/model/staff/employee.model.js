const {Schema,model} = require("mongoose")

const schema = new Schema({
    fName:String,
    lName:String,
    company:{type:Schema.Types.ObjectId,ref:"company"},
    location:{type:Schema.Types.ObjectId,ref:"location"},
    username:String,
    email:String,
    DOB:Date,
    phone:String,
    role:{
        type:Schema.Types.ObjectId,
        ref:"role"
    },
    reportTo:{type:Schema.Types.ObjectId,ref:"employee"},
    passport:String,
    address:String,
    immigrationStatus:String,
    prEffectiveDate:Date,
    dateOfJoining:Date,
    confirmationDate:Date,
    department:{type:Schema.Types.ObjectId,ref:"department"},
    subdepartment:{type:Schema.Types.ObjectId,ref:"subdepartment"},
    designation:{type:Schema.Types.ObjectId,ref:"designation"},
    gender:String,
    shift:{type:Schema.Types.ObjectId,ref:"officeShift"},
    password:String,
    identification:{
        name:String,
        number:String
    },
    employeeId:String,
    workPermitNumber:String,
    vaccination:String,
    status:{
        type:String,
        required:true,
        default:"ACTIVE",
        emum:["ACTIVE","INACTIVE","BLOCK"]
    },
    addedBy:{type:Schema.Types.ObjectId,ref:"employee"}
},{
    collection:"employee",
    timestamps:true
})


module.exports = model("employee",schema)

