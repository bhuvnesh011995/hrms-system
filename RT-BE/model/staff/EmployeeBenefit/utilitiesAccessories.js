const {Schema,model} = require("mongoose")

const schema = new Schema({
    company:{type:Schema.Types.ObjectId,ref:"company"},

    employee:{type:Schema.Types.ObjectId,ref:"employee"},

  benefitsYear: {
    type: Number,
    
  },
    rows: [{
            utilitiesAccessories: String,
            remark: String,
            actualAmount: Number,
          }],
  
   
},{
    collection:"utilitiesAccessories",
    timestamps:true
})


module.exports = model("utilitiesAccessories",schema)