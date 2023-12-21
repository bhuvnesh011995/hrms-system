const {Schema,model} = require("mongoose")

const schema = new Schema({
    company:{type:Schema.Types.ObjectId,ref:"company"},

    employee:{type:Schema.Types.ObjectId,ref:"employee"},

  benefitsYear: {
    type: Number,
    
  },
    rows: [{
            houseKeeping: String,
            remark: String,
            annualWage: Number,
          }],
  
   
},{
    collection:"housingKeeping",
    timestamps:true
})


module.exports = model("housingKeeping",schema)