const {Schema,model} = require("mongoose")

const schema = new Schema({
    name : String,

    permission:[
        {
            type:String
        }
    ]
},{
    collection:"role",
    timestamps:true,
    versionKey: false
})


module.exports = model("role",schema)