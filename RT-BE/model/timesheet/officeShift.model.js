const {Schema,model} = require("mongoose")

const daysSchema = new Schema({
    
},{
    _id:false
})


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

    
},{
    collection:"officeShift",
    timestamps:true,
    
})




module.exports = model("officeShift",schema)