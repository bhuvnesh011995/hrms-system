const db = require("../../model")

exports.addTravel= async function(req,res,next){
    try {


        let obj = {}

        if(req.body.company) obj.company = req.body.company
        if(req.body.employee) obj.employee = req.body.employee
        if(req.body.start) obj.start = new Date(req.body.start)
        if(req.body.end) obj.end = new Date(req.body.end)
        if(req.body.expectedBudget) obj.expectedBudget = req.body.expectedBudget
        if(req.body.actualBudget) obj.actualBudget = req.body.actualBudget
        if(req.body.purpose) obj.purpose = req.body.purpose
        if(req.body.place) obj.place = req.body.place
        if(req.body.travelMode) obj.travelMode = req.body.travelMode
        if(req.body.travelType) obj.travelType = req.body.travelType

        if(req.body.description) obj.description = req.body.description
        obj.addedBy = req.id

        await db.travel.create(obj)

        res.status(201).end()
    } catch (error) {
        console.log(error)

        res.status(500).json({
            success:false,
            message:"internal error occured",
        })
    }
}



exports.getAllTravels = async function(req,res,next){
    try {

        let travels = await db.travel.find().populate([{path:"travelType",select:"name"},{path:"company",select:"name"},{path:"employee",select:"fName lName"}])

        res.status(200).json(travels)
        
        
    } catch (error) {
        console.log(error)

        res.status(500).json({
            success:false,
            message:"internal error occured",
        })
    }
}




exports.updateTravel= async function(req,res,next){
    try {
        const {id} = req.params



        let obj = {}

        if(req.body.company) obj.company = req.body.company
        if(req.body.employee) obj.employee = req.body.employee
        if(req.body.start) obj.start = new Date(req.body.start)
        if(req.body.end) obj.end = new Date(req.body.end)
        if(req.body.expectedBudget) obj.expectedBudget = req.body.expectedBudget
        if(req.body.actualBudget) obj.actualBudget = req.body.actualBudget
        if(req.body.purpose) obj.purpose = req.body.purpose
        if(req.body.place) obj.place = req.body.place
        if(req.body.travelMode) obj.travelMode = req.body.travelMode
        if(req.body.travelType) obj.travelType = req.body.travelType
        if(req.body.status) obj.status = req.body.status

        if(req.body.description) obj.description = req.body.description

        await db.travel.updateOne({_id:id},{
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




exports.deleteTravel= async function(req,res,next){
    try {
        const {id} = req.params

        await db.travel.deleteOne({_id:id})

        res.status(204).end()

    } catch (error) {
        console.log(error)

        res.status(500).json({
            success:false,
            message:"internal error occured",
        })
    }
}