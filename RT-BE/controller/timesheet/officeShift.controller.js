const db = require("../../model")
const utility = require("../../utility")



exports.addShift = async function (req,res,next){
    

    try {
        

    let obj = {}
        if(req.body.company !=undefined) obj.company = req.body.company
        if(req.body.name !=undefined) obj.name = req.body.name
        if(req.body.monday !=undefined) obj.monday = {start:req.body.monday.start,end:req.body.monday.end}

        if(req.body.tuesday !=undefined) obj.tuesday = {start:req.body.tuesday.start,end:req.body.tuesday.end}

        if(req.body.wednesday !=undefined) obj.wednesday = {start:req.body.wednesday.start,end:req.body.wednesday.end}

        if(req.body.thursday !=undefined) obj.thursday = {start:req.body.thursday.start,end:req.body.thursday.end}

        if(req.body.friday !=undefined) obj.friday = {start:req.body.friday.start,end:req.body.friday.end}

        if(req.body.saturday !=undefined) obj.saturday = {start:req.body.saturday.start,end:req.body.saturday.end}

        if(req.body.sunday !=undefined) obj.sunday = {start:req.body.sunday.start,end:req.body.sunday.end}
obj.addedBy = req.id

        await db.officeShift.create(obj)

        res.status(201).end()


    } catch (error) {
        console.log(error)

        res.status(500).json({
            success:false,
            message:"internal error occured",
        })
    }

    

    
}



exports.getAllShift = async function (req,res,next){


    try {
        

        let shifts = await db.officeShift.find().populate({path:"company",select:"name"})

        res.status(200).json(shifts)
    } catch (error) {
        console.log(error)

        res.status(500).json({
            success:false,
            message:"internal error occured",
        })
    }
}



exports.updateShift = async function (req,res,next){
    const {id} = req.params  // shift id


    try {
       
        let obj = {}

console.log(req.body)
        if(req.body.company) obj.company = req.body.company
        if(req.body.name) obj.name = req.body.name
        if(req.body["monday.start"]!=undefined) obj["monday.start"] = req.body["monday.start"]
        if(req.body["monday.end"]!=undefined) obj["monday.end"] = req.body["monday.end"]


        if(req.body["tuesday.start"]!=undefined) obj["tuesday.start"] = req.body["tuesday.start"]
        if(req.body["tuesday.end"]!=undefined) obj["tuesday.end"] = req.body["tuesday.end"]

        if(req.body["wednesday.start"]!=undefined) obj["wednesday.start"] = req.body["wednesday.start"]
        if(req.body["wednesday.end"]!=undefined) obj["wednesday.end"] = req.body["wednesday.end"]

        if(req.body["thursday.start"]!=undefined) obj["thursday.start"] = req.body["thursday.start"]
        if(req.body["thursday.end"]!=undefined) obj["thursday.end"] = req.body["thursday.end"]


if(req.body["friday.start"]!=undefined) obj["friday.start"] = req.body["friday.start"]
        if(req.body["friday.end"]!=undefined) obj["friday.end"] = req.body["friday.end"]

if(req.body["saturday.start"]!=undefined) obj["saturday.start"] = req.body["saturday.start"]
        if(req.body["saturday.end"]!=undefined) obj["saturday.end"] = req.body["saturday.end"]


if(req.body["sunday.start"]!=undefined) obj["sunday.start"] = req.body["sunday.start"]
        if(req.body["sunday.end"]!=undefined) obj["sunday.end"] = req.body["sunday.end"]


        await db.officeShift.updateOne({_id:id},{
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





exports.deleteShift = async function (req,res,next){
    const {id} = req.params

    try {
        

        await db.officeShift.deleteOne({_id:id})

        res.status(204).end()
    } catch (error) {
        console.log(error)

        res.status(500).json({
            success:false,
            message:"internal error occured",
        })
    }
}


exports.getShiftsByCompanyId = async (req,res,next)=>{
    try {
        let shifts = await db.officeShift.find({company:req.params.id})

        res.status(200).json(shifts)
    } catch (error) {
        console.log(error)
        res.status(500).json({
            success:"false",
            message:"internal error occured"
        })
    }
}