const db = require("../../../model")

exports.addUtilitiesAccessories = async (req,res,next)=>{
    console.log(req.body)
    try {
      const { body } = req;
      const utilitiesAccessories = await db.utilitiesAccessories.create(body);
      return res.status(200).send({
        utilitiesAccessories: utilitiesAccessories,
        message: " utilitiesAccessories Added",
      });
    } catch (err) {
      console.error(err);
    }
  };

  exports.getAllUtilitiesAccessories = async function(req,res,next){
    try {
        let utilitiesAccessories = await db.utilitiesAccessories.find().populate([{path:"company",select:"name"},{path:"employee",select:"fName"}])
      return res.status(200).send(utilitiesAccessories);
    } catch (err) {
      console.error(err);
    }
  };

  exports.deleteAllUtilitiesAccessories = async function(req,res,next){
    try {
        const {id} = req.params

        await db.utilitiesAccessories.deleteOne({_id:id})

        res.status(204).end()

    } catch (error) {
        console.log(error)

        res.status(500).json({
            success:false,
            message:"internal error occured",
        })
    }
}