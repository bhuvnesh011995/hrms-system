const db = require("../../model")

exports.addResignation = async function(req,res,next){
    try {


        let obj = {}

        if(req.body.company) obj.company = req.body.company
        if(req.body.employee) obj.employee = req.body.employee
        if(req.body.noticeDate) obj.noticeDate = new Date(req.body.noticeDate)
        if(req.body.resignationDate) obj.resignationDate = new Date(req.body.resignationDate)


        if(req.body.resignationReason) obj.resignationReason = req.body.resignationReason
        obj.addedBy = req.id

        await db.resignations.create(obj)

        res.status(201).end()
    } catch (error) {
        console.log(error)

        res.status(500).json({
            success:false,
            message:"internal error occured",
        })
    }
}



exports.getAllResignations = async function(req,res,next){
    try {

        let resignations = await db.resignations.find().populate([{path:"company",select:"name"},{path:"employee",select:"fName lName"}])

        res.status(200).json(resignations)
        
        
    } catch (error) {
        console.log(error)

        res.status(500).json({
            success:false,
            message:"internal error occured",
        })
    }
}




exports.updateResignation = async function(req,res,next){
    try {
        const {id} = req.params



        let obj = {}

        if(req.body.noticeDate) obj.noticeDate = new Date(req.body.noticeDate)
        if(req.body.resignationDate) obj.resignationDate = new Date(req.body.resignationDate)
        if(req.body.status) obj.status = req.body.status


        if(req.body.resignationReason) obj.resignationReason = req.body.resignationReason

        await db.resignations.updateOne({_id:id},{
            $set:obj
        })


        res.status(204).end()

    } catch (error) {
        console.log(error)

        res.status(500).json({
            success:false,
            message:"internal error occured",
        })
    }
}




exports.deleteResignation = async function(req,res,next){
    try {
        const {id} = req.params

        await db.resignations.deleteOne({_id:id})

        res.status(204).end()

    } catch (error) {
        console.log(error)

        res.status(500).json({
            success:false,
            message:"internal error occured",
        })
    }
}