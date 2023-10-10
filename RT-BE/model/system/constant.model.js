const {Schema,model} = require("mongoose")




const schema = new Schema({
    contract : [{name:String}],
    education:[{name:String}],
    language:[{name:String}],
    skill:[{name:String}],
    document : [{name:String}],
    award : [{name:String}],
    religion : [{name:String}],
    leave : [{name:String}],
    warning : [{name:String}],
    termination : [{name:String}],
    expense : [{company:String,name:String}],
    income : [{name:String}],
    employeeExit : [{name:String}],
    travelArrangement : [{name:String}],
    currency : [{
        name:String,
        code:String,
        symbol:String
    }],
    security : [{name:String}],
    claim : [{name:String}],
    company : [{name:String}],
},{
    collection:"constant",
    timestamps:true,
    
})


module.exports = model("constant",schema)