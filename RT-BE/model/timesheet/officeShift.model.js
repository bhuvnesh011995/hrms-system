const {Schema,model} = require("mongoose")


const schema = new Schema({

    company:{type:Schema.Types.ObjectId,ref:"company"},

    name:{type:String},

    monday:{
        start:String,
        end:String
    },
    tuesday:{
        start:String,
        end:String
    },
    wednesday:{
        start:String,
        end:String
    },
    thursday:{
        start:String,
        end:String
    },
    friday:{
        start:String,
        end:String
    },
    saturday:{
        start:String,
        end:String
    },
    sunday:{
        start:String,
        end:String
    },
    addedBy:{type:Schema.Types.ObjectId,ref:"employee"}

    
},{
    collection:"officeShift",
    timestamps:true,
    
})




module.exports = model("officeShift",schema)