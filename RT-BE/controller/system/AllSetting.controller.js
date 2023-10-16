const db = require("../../model")

exports.getAllSetting = async (req,res,next)=>{
    try {
        let [theme,setting,paymentGateway,setupModule] = await Promise.all([
            db.themes.findOne({}),
            db.system.findOne({}),
            db.paymentGateway.findOne({}),
            db.modules.findOne({})
        ])

        res.status(200).json({
            theme,setting,paymentGateway,setupModule
        })

    } catch (error) {
        console.log(error)
        res.status(500).json({
            success:false,
            message:"error occured"
        })
        
    }
}