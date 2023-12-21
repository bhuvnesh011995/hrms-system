const db = require("../../../model")

exports.addDriver = async (req,res,next)=>{
    console.log(req.body)
    try {
      const { body } = req;
      const driver = await db.driver.create(body);
      return res.status(200).send({
        driver: driver,
        message: "Driver  Added",
      });
    } catch (err) {
      console.error(err);
    }
  };

 

exports.getAllDriver = async function(req,res,next){
    try {
        let driver = await db.driver.find().populate([{path:"company",select:"name"},{path:"employee",select:"fName"}])
      return res.status(200).send(driver);
    } catch (err) {
      console.error(err);
    }
  };

  exports.deleteDriver = async function(req,res,next){
    try {
        const {id} = req.params

        await db.driver.deleteOne({_id:id})

        res.status(204).end()

    } catch (error) {
        console.log(error)

        res.status(500).json({
            success:false,
            message:"internal error occured",
        })
    }
}