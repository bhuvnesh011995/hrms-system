const db = require("../model")

exports.addPolicy = async function(req,res,next){
 const {
    company
 } = req.body

 try {
    const companyDoc = await db.company.findOne({
        _id:company
    })
    if(!companyDoc) return res.status(400).json({
        success:false,
        message:"no company found"
    })
    let obj = {company};
        if(req.body.title) obj.title = req.body.title
        if(req.body.description) obj.description = req.body.description
        if(req.file?.filename) obj.filename = req.file.filename

    await db.policy.create(obj)


    res.status(200).json({
        success:true,
        message:"policy created successfully"
    })

 } catch (error) {
    console.log(error)

    res.status(500).json({
        success:false,
        message:"error occured",
        error
    })
 }
}






exports.getAllPolicy = async function(req,res,next){
    const {id} = req.params  // company id

    try {
        let policies = await db.policy.find({company:id}).populate({path:"company",select:"name"})

        if(!policies || !policies.length) return res.status(204).json({
            success:false,
            message:"no company policy found"
        })


        res.status(200).json({
            success:true,
            policies
        })
    } catch (error) {
        console.log(error)

        res.status(500).json({
            sucess:false,
            message:"error occured",
            error
        })
    }
}






exports.updatePolicy = async function(req,res,next){
    const {id} = req.params // policy id
    try {
        let policyDoc = await db.policy.findOne({_id:id})

        if(!policyDoc) return res.status(400).json({
            success:false,
            message:"no policy found"
        })

        let obj = {};
        if(req.body.title) obj.title = req.body.title
        if(req.body.description) obj.description = req.body.description
        if(req.file?.filename) obj.filename = req.file.filename

        await db.policy.updateOne({_id:id},{
            $set:obj
        })

        res.status(200).json({
            success:true,
            message:"policy updated successfully"
        })
    } catch (error) {
        console.log(error)

        res.status(500).json({
            success:false,
            message:"error occured",
            error:error
        })
    }
}



exports.deletePolicy = async function(req,res,next){
    const {id} = req.params  // policy id
    try {
        let policyDoc = await db.policy.findOne({_id:id})

        if(!policyDoc) return res.status(400).json({
            success:false,
            message:"no policy found"
        })

        await db.policy.deleteOne({_id:id})

        res.status(200).json({
            success:true,
            message:"policy deleted successfully"
        })
    } catch (error) {
        console.log(error)

        res.status(500).json({
            success:false,
            message:"error occured",
            error:error
        })
    }
}