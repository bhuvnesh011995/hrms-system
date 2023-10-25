const db = require("../model")

exports.addPolicy = async function(req,res,next){

 try {
   
    let obj = {};
    if(req.body.company) obj.company = req.body.company
        if(req.body.title) obj.title = req.body.title
        if(req.body.description) obj.description = req.body.description
        if(req.file) obj.filename = req.file.filename
        obj.addedBy = req.id

    await db.policy.create(obj)


    res.status(201).end()

 } catch (error) {
    console.log(error)

    res.status(500).json({
        success:false,
        message:"internal error occured",
    })
 }
}






exports.getAllPolicy = async function(req,res,next){
    const {id} = req.params  // company id

    try {
        let policies = await db.policy.find().populate([{path:"company",select:"name"},{path:"addedBy",select:"fName lName"}])


        res.status(200).json(policies)

    } catch (error) {
        console.log(error)

        res.status(500).json({
            sucess:false,
            message:"internal error occured",
        })
    }
}






exports.updatePolicy = async function(req,res,next){
    const {id} = req.params // policy id
    try {


        let obj = {};
        if(req.body.company) obj.company = req.body.company
        if(req.body.title) obj.title = req.body.title
        if(req.body.description) obj.description = req.body.description
        if(req.file) obj.filename = req.file.filename

        await db.policy.updateOne({_id:id},{
            $set:obj
        })

        res.status(204).end()
    } catch (error) {
        console.log(error)

        res.status(500).json({
            success:false,
            message:"internal error occured"
        })
    }
}



exports.deletePolicy = async function(req,res,next){
    const {id} = req.params  // policy id
    try {
       
        await db.policy.deleteOne({_id:id})

        res.status(204).end()
    } catch (error) {
        console.log(error)

        res.status(500).json({
            success:false,
            message:"internal error occured"
        })
    }
}