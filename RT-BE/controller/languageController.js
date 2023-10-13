const db = require("../model")

exports.getByTheId= async function (req, res, next) {
    let Id=req.params.id
    try {
        let languageDetails = await db.language.findOne({ _id: Id}).select({ name: 1,language:1, code: 1, status: 1 })
        res.status(200).json({
            success: true,
            languageDetails
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            success: false,
            message: "error occured",
            error: error
        })
    }
}
exports.getAllTheLanguage=async function(req,res,next){

    try {
        let system = await db.language.find({}).select({name:1,code:1,status:1})

        if(!system) return res.status(500).json({
            success:true,
            message:"error occured"
        })

        res.status(200).json({
            success:true,
            system
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            success:false,
            message:"error occured"
        })
    }

}
exports.updateTheDetails = async function (req, res, next) {
    try {
        let obj = {};
        let { language,status } = req.body;
        // if (name) {
        //     obj.name = name;
        // }
        // if (code) {
        //     obj.code = code
        // }
        // if (status) {
        //     obj.status = status
        // }
        console.log(obj)
        await db.language.findOneAndUpdate({}, {
            $set: obj
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            success: false,
            message: "error occured",
            error: error
        })
    }
}
