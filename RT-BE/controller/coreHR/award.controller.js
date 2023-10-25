const db = require("../../model")
const utility = require("../../utility")


exports.addAward = async function(req,res,next){
    try {


        let obj = {}

        if(req.body.company) obj.company = req.body.company
        if(req.body.employee) obj.employee = req.body.employee
        if(req.body.awardType) obj.awardType = req.body.awardType
        if(req.body.date) obj.date = new Date(req.body.date)
        if(req.body.gift) obj.gift = req.body.gift
        if(req.body.cash) obj.cash = req.body.cash
        if(req.body.monthAndYear)  obj.monthAndYear = req.body.monthAndYear
        if(req.body.awardInfo) obj.awardInfo = req.body.awardInfo
        if(req.body.description) obj.description = req.body.description
        if(req.file) obj.filename = req.file.filename
        obj.addedBy = req.id

        await db.award.create(obj)

        res.status(201).end()
    } catch (error) {
        console.log(error)

        res.status(500).json({
            success:false,
            message:"internal error occured",
        })
    }
}



exports.getAllAward = async function(req,res,next){
    try {

        let awards = await db.award.find().populate([{path:"company",select:"name"},{path:"employee",select:"fName lName"},{path:"awardType"}])

        res.status(200).json(awards)
        
        
    } catch (error) {
        console.log(error)

        res.status(500).json({
            success:false,
            message:"internal error occured",
        })
    }
}




exports.updateAward = async function(req,res,next){
    try {
        const {id} = req.params



        let obj = {}


        if(req.body.company) obj.company = req.body.company
        if(req.body.employee) obj.employee = req.body.employee
        if(req.body.awardType) obj.awardType = req.body.awardType
        if(req.body.date) obj.date = new Date(req.body.date)
        if(req.body.gift) obj.gift = req.body.gift
        if(req.body.cash) obj.cash = req.body.cash
        if(req.body.monthAndYear)  obj.monthAndYear = req.body.monthAndYear
        if(req.body.awardInfo) obj.awardInfo = req.body.awardInfo
        if(req.body.description) obj.description = req.body.description
        if(req.file) obj.filename = req.file.filename

        await db.award.updateOne({_id:id},{
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




exports.deleteAward = async function(req,res,next){
    try {
        const {id} = req.params

        await db.award.deleteOne({_id:id})

        res.status(204).end()

    } catch (error) {
        console.log(error)

        res.status(500).json({
            success:false,
            message:"internal error occured",
        })
    }
}