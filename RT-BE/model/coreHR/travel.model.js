const {Schema,model}= require("mongoose")

const schema = new Schema({

    company:{type:Schema.Types.ObjectId,ref:"company"},

    employee:{type:Schema.Types.ObjectId,ref:"employee"},

    start:Date,

    end:Date,
    expectedBudget:String,
    actualBudget:String,
    purpose:String,
    place:String,
    
    travelMode:String,
    travelType:{type:Schema.Types.ObjectId,ref:"travelArrangementConstant"},
    status:{
        type:String,
        default:"Pending",
        enum:["Pending","Accepted","Rejected"]
    },
    addedBy:{type:Schema.Types.ObjectId,ref:"employee"},

    description:String
},{
    collection:"travel",
    timestamps:true
})


module.exports = model("travel",schema)