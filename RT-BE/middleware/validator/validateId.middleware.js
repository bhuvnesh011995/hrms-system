const mongoose = require("mongoose")

exports.validateId = async function (req,res,next){
    if(req.params.id && !mongoose.Types.ObjectId.isValid(req.params.id)){
        return res.status(400).json({
            success:false,
            message:"pass a valid id"
        })
    }

    if(req.query.id && !mongoose.Types.ObjectId.isValid(req.query.id)){
        return res.status(400).json({
            success:false,
            message:"pass a valid id"
        })
    }
    if(req.body.id && !mongoose.Types.ObjectId.isValid(req.body.id)){
        return res.status(400).json({
            success:false,
            message:"pass a valid id"
        })
    }
    next()
}

exports.customFieldIdvalidator = function(field){
    return (req, res, next) => {
        if(req.body[field] && !mongoose.Types.ObjectId.isValid(req.body[field])) return res.status(400).json({
            success:false,
            message:"pass a valid id"
        })
    
        next()
    }
}