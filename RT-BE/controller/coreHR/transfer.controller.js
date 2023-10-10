const db = require("../../model")
const utility = require("../../utility")

exports.addTransfer = async function(req,res,next){

    try {
        const {id} = req.params // employee id

        if(! await utility.employeeExist(id)) return res.status(400).json({
            success:false,
            message:"no employee exist"
        })

        let employee = await db.employee.findOne({_id:id})

        const {company,department,location} = req.body

        if(!await utility.companyExist(company)) return res.status(400).json({
            success:false,
            message:"no company exist"
        })

        let companyDoc = await db.company.findOne({_id:company})

        if(!companyDoc.department.includes(department)) return res.status(400).json({
            success:false,
            message:"dpartment does not exist in company"
        })

        if(!companyDoc.location.includes(location)) return res.status(400).json({
            success:false,
            message:"location does not exist in company"
        })

        if(!await utility.departmentExist(department)) return res.status(400).json({
            success:false,
            message:"no department exist"
        })

        if(!await utility.locationExist(location)) return res.status(400).json({
            success:false,
            message:"no location exist"
        })

        let obj = {company,employee:id,from:{department:employee.department,location:employee.location},to:{}}

        if(req.body.date) obj.date = req.body.date
        if(req.body.description) obj.description = req.body.description
        if(department) obj.to.department = department
        if(location) obj.to.location = location

        await db.transfer.create(obj)

        res.status(200).json({
            success:true,
            message:"transfer done of employee"
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






exports.getAllTransfer = async function(req,res,next){

    try {
        const {id} = req.params  // company id

        if(! await utility.companyExist(company)) return res.status(400).json({
            success:false,
            message:"no company exist"
        })

        let transfers = await db.transfer.find({company:id})

        if(!transfers || !db.transfers.length) return res.status(204).end()

        res.status(200).json({
            success:true,
            transfers
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




exports.updateTransfer = async function(req,res,next){

    try {
        const {id} = req.params // transfer id

        if(!await utility.transferExist(id)) return res.status(400).json({
            success:false,
            message:"no transfer exist"
        })


        let transfer = await db.transfer.findOne({_id:id})

        let companyDoc = await db.company.findOne({_id:transfer.company})

        const {department,location} = req.body

        if(!companyDoc.department.includes(department)) return res.status(400).json({
            success:false,
            message:"dpartment does not exist in company"
        })

        if(!companyDoc.location.includes(location)) return res.status(400).json({
            success:false,
            message:"location does not exist in company"
        })

        if(!await utility.departmentExist(department)) return res.status(400).json({
            success:false,
            message:"no department exist"
        })

        if(!await utility.locationExist(location)) return res.status(400).json({
            success:false,
            message:"no location exist"
        })

        let obj = {to:{}}

        if(req.body.date) obj.date = req.body.date
        if(req.body.description) obj.description = req.body.description
        if(department) obj.to.department = department
        if(location) obj.to.location = location

        await db.transfer.updateOne({_id:id},{
            $set:obj
        })

        res.status(200).json({
            success:false,
            message:"transfer updated"
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




exports.deleteTransfer = async function(req,res,next){

    try {
        const {id} = req.params // transfer id

        if(!await utility.transferExist(id)) return res.status(400).json({
            success:false,
            message:"no transfer exist"
        })

        await db.transfer.deleteEOne({_id:id})

        res.status(200).json({
            success:true,
            message:"transfer deleted successfull"
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