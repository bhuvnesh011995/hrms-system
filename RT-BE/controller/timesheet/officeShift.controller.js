const db = require("../../model")
const utility = require("../../utility")



exports.addShift = async function (req,res,next){
    const {company,name} = req.body; // twi mondatory thing

    try {
        if(!await utility.companyExist(company)) return res.status(400).json({
        success:false,
        message:"company does not exist"
    })

    let obj = {company,name}

        if(req.body.monday) obj.monday = {start:req.body.monday.start,end:req.body.monday.end}

        if(req.body.tuesday) obj.tuesday = {start:req.body.tuesday.start,end:req.body.tuesday.end}

        if(req.body.wednesday) obj.wednesday = {start:req.body.wednesday.start,end:req.body.wednesday.end}

        if(req.body.thursday) obj.thursday = {start:req.body.thursday.start,end:req.body.thursday.end}

        if(req.body.friday) obj.friday = {start:req.body.friday.start,end:req.body.friday.end}

        if(req.body.saturday) obj.saturday = {start:req.body.saturday.start,end:req.body.saturday.end}

        if(req.body.sunday) obj.sunday = {start:req.body.sunday.start,end:req.body.sunday.end}


        await db.officeShift.create(obj)

        res.status(200).json({
            success:true,
            message:"shift added successfully"
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



exports.getAllShift = async function (req,res,next){
    const {id} = req.params

    try {
        if(! await utility.companyExist(id)) return res.status(400).json({
            success:false,
            message:"company does not exist"
        })

        let shifts = await db.officeShift.find({company:id})

        if(!shifts || !shifts.length) return res.status(204).end()

        res.status(200).json({
            success:true,
            shifts
        })
    } catch (error) {
        console.log(eror)

        res.status(500).json({
            success:false,
            message:"error occured",
            error:error
        })
    }
}



exports.updateShift = async function (req,res,next){
    const {id} = req.params  // shift id


    try {
        if(! await utility.officeShiftExist(id)) return res.status(400).json({
            success:false,
            message:"shift does not exist"
        })

        let obj = {}

        if(req.body.monday) obj.monday = {start:req.body.monday.start,end:req.body.monday.end}

        if(req.body.tuesday) obj.tuesday = {start:req.body.tuesday.start,end:req.body.tuesday.end}

        if(req.body.wednesday) obj.wednesday = {start:req.body.wednesday.start,end:req.body.wednesday.end}

        if(req.body.thursday) obj.thursday = {start:req.body.thursday.start,end:req.body.thursday.end}

        if(req.body.friday) obj.friday = {start:req.body.friday.start,end:req.body.friday.end}

        if(req.body.saturday) obj.saturday = {start:req.body.saturday.start,end:req.body.saturday.end}

        if(req.body.sunday) obj.sunday = {start:req.body.sunday.start,end:req.body.sunday.end}

        await db.officeShift.updateOne({_id:id},{
            $set:obj
        })


        res.status(200).json({
            success:true,
            message:"shift updated successfully"
        })

    } catch (error) {
        console.log(eror)

        res.status(500).json({
            success:false,
            message:"error occured",
            error:error
        })
    }


}





exports.deleteShift = async function (req,res,next){
    const {id} = req.params

    try {
        if(! await utility.officeShiftExist(id)) return res.status(400).json({
            success:false,
            message:"shift does not exist"
        })

        await db.officeShift.deleteOne({_id:id})

        res.status(200).json({
            success:true,
            message:"shift deleted successfully"
        })
    } catch (error) {
        console.log(eror)

        res.status(500).json({
            success:false,
            message:"error occured",
            error:error
        })
    }
}