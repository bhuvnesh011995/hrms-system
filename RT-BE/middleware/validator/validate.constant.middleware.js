exports.validateBody = async function(req,res,next){
    if(typeof(req.body.name)!="string" || !req.body.name){
        return res.status(400).json({
            success:false,
            message:"pass a valid name of Constant"
        })
    }
    if(req.params.type ==="currency"){
        if(!req.body.code || typeof(req.body.code)!="string") return res.status(400).json({
            success:false,
            message:"pass a valid code"
        })
        if(!req.body.symbol || typeof(req.body.symbol)!= "string" || req.body.symbol.length != 1) return res.status(400).json({
            success:false,
            message:"pass a valid symbol"
        })
    }
    if(req.params.type === "expense"){
        if(!req.body.company || typeof(req.body.company) != "string") return res.status(400).json({
            success:false,
            message:"pass a valid company"
        })
    }

    next()
}