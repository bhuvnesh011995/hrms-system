const db = require("../../../model")

exports.addAccommodation = async (req,res,next)=>{
    console.log(req.body)
    try {
        let obj = {}
        
        if(req.body.accommodationTitle) obj.accommodationTitle = req.body.accommodationTitle
        if(req.body.addressLine1) obj.addressLine1 = req.body.addressLine1
        if(req.body.addressLine2) obj.addressLine2 = req.body.addressLine2
        if(req.body.periodForm) obj.periodForm = req.body.periodForm
        if(req.body.periodTo) obj.periodTo = req.body.periodTo
        if(req.body.accommodationType) obj.accommodationType = req.body.accommodationType
        if(req.body.annualRentPaid) obj.annualRentPaid = req.body.annualRentPaid

        if(req.body.annualValue) obj.annualValue = req.body.annualValue
        if(req.body.furnished) obj.furnished = req.body.furnished

        await db.accommodation.create(obj)
        
        res.status(201).end()

    } catch (error) {
        console.log(error)

        res.status(500).json({
            success:false,
            message:"internal error occured"
        })
    }
}

exports.getAccommodation = async (req,res,next)=>{
    try{
      const accommodationRecords = await db.accommodation.find();
      res.status(200).json({
        accommodation:accommodationRecords,
      })

    }
    catch(error){
        res.status(500).json({
            success: false,
            message:"Internal error occurred"
        });
    }
}

exports.deleteAccommodation = async function(req, res) {
    let { id } = req.params;
    console.log(id)
    try {
        let isExit = await db.accommodation.exists({ _id: id });

        if (!isExit) {
            return res.status(400).json({
                success: false,
                message: "No accommodation found",
            });
        }

        await db.accommodation.findOneAndDelete({ _id: id });

        res.status(204).end();

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error occurred",
            error: error.message, 
        });
    }
};
