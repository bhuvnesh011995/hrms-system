const {Schema,model} = require("mongoose")


const schema = new Schema({

    company:{type:Schema.Types.ObjectId,ref:"company"},
    department:{type:Schema.Types.ObjectId,ref:"department"},
    location:{type:Schema.Types.ObjectId,ref:"location"},
    title:{
        type:String
    },
    
    summary:{
        type:String
    },
    description:{
        type:String
    },
    start:{
        type:Date
    },
    end:{
        type:Date
    },
    addedBy:{type:Schema.Types.ObjectId,ref:"employee"}
},{
    collection:"announcements",
    timestamps:true,
    
})


module.exports = model("announcements",schema)