const db = require("../../../model")

exports.addHousingKeeping = async (req,res,next)=>{
    console.log(req.body)
    try {
      const { body } = req;
      const housingKeeping = await db.housingKeeping.create(body);
      return res.status(200).send({
        housingKeeping: housingKeeping,
        message: " housingKeeping Added",
      });
    } catch (err) {
      console.error(err);
    }
  };