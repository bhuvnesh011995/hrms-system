const db = require("../../../model")

exports.addAccommodatedEmployee = async (req,res,next)=>{
    console.log(req.body)
    try {
        let obj = {}
        
        if(req.body.accommodation) obj.accommodation = req.body.accommodation
        if(req.body.address) obj.address = req.body.address
        if(req.body.accommodationPeriod) obj.accommodationPeriod = req.body.accommodationPeriod
        if(req.body.company) obj.company = req.body.company
        if(req.body.employee) obj.employee = req.body.employee
        if(req.body.accommodationFrom) obj.accommodationFrom = req.body.accommodationFrom
        if(req.body.accommodationTo) obj.accommodationTo = req.body.accommodationTo

        if(req.body.employeeRentPaid) obj.employeeRentPaid = req.body.employeeRentPaid
        if(req.body.furnished) obj.furnished = req.body.furnished

        await db.accommodateEmployee.create(obj)
        
        res.status(201).end()

    } catch (error) {
        console.log(error)

        res.status(500).json({
            success:false,
            message:"internal error occured"
        })
    }
}

exports.getAllAccommodatedEmployee = async function(req,res,next){
    try {

        let accommodateEmployee = await db.accommodateEmployee.find().populate([ {path:"accommodation",select:'accommodationTitle'},{path:"company",select:"name"},{path:"employee",select:"fName"}])

        res.status(200).json(accommodateEmployee)
        
        
    } catch (error) {
        console.log(error)

        res.status(500).json({
            success:false,
            message:"internal error occured",
        })
    }
}

exports.deleteAccommodatedEmployee = async function(req,res,next){
    try {
        const {id} = req.params

        await db.accommodateEmployee.deleteOne({_id:id})

        res.status(204).end()

    } catch (error) {
        console.log(error)

        res.status(500).json({
            success:false,
            message:"internal error occured",
        })
    }
}