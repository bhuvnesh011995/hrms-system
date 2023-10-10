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
    type:{
        type:Schema.Types.ObjectId,
        ref:"role"
    },
    reportTo:String,
    passport:String,
    address:String,
    immigrationStatus:String,
    prEffectiveDate:String,
    dateOfJoining:Date,
    confirmationDate:Date,
    department:{type:Schema.Types.ObjectId,ref:"department"},
    subdepartment:{type:Schema.Types.ObjectId,ref:"subdepartment"},
    designation:{type:Schema.Types.ObjectId,ref:"designation"},
    gender:String,
    shift:{type:Schema.Types.ObjectId,ref:"officeShift"},
    password:String,
    nricNo:String,
    finNo :String,
    vaccination:Boolean,
    status:{
        type:String,
        required:true,
        default:"ACTIVE",
        emum:["ACTIVE","INACTIVE","BLOCK"]
    }
},{
    collection:"employee",
    timestamps:true
})


module.exports = model("employee",schema)

