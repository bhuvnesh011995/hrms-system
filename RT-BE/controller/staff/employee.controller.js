const db = require("../../model")
const utility = require("../../utility")
const bcrypt = require("bcrypt")

exports.addEmployee = async function(req,res,next){
    try {
        // const {company,location,department,subdepartment,designation,shift} = req.body

        // if(! await utility.companyExist(company)) return res.status(400).json({
        //     success:false,
        //     message:"company does not exist"
        // })

        // let companyDoc = await db.company.findOne({_id:company})

        // if(!companyDoc.department.includes(department)) return res.status(400).json({
        //     success:false,
        //     message:"department not available in company"
        // })


        // if(! await utility.departmentExist(department)) return res.status(400).json({
        //     success:false,
        //     message:"department does not exist"
        // })


        // let departmentDoc = await db.department.findOne({_id:department})



        // if(!departmentDoc.subdepartment.includes(subdepartment)) return res.status(400).json({
        //     success:false,
        //     message:"subdepartment not available in department"
        // })



        // if(! await utility.subdepartmetnExist(subdepartment)) return res.status(400).json({
        //     success:false,
        //     message:"subdepartment does not exist"
        // })

        // if(!companyDoc.location.includes(location)) return res.status(400).json({
        //     success:false,
        //     message:"location not available in company"
        // })

        // if(! await utility.locationExist(location)) return res.status(400).json({
        //     success:false,
        //     message:"location does not exist"
        // })

        // let designationDoc = await db.designation.findOne({_id:designation,company})

        // if(!designationDoc) return res.status(400).json({
        //     success:false,
        //     message:"designation does not exist"
        // })

        // let shiftDoc = await db.officeShift.findOne({_id:shift,company})

        // if(!shiftDoc) return res.status(400).json({
        //     success:false,
        //     message:"shift does not exist"
        // })

        let obj = {company:req.body.company}

        if(req.body.fName ) obj.fName = req.body.fName 

        if(req.body.lName) obj.lName = req.body.lName

        if(req.body.username ) obj.username = req.body.username 

        if(req.body.email) obj.email = req.body.email

        if(req.body.DOB ) obj.DOB = new Date(req.body.DOB) 

        if(req.body.phone) obj.phone = req.body.phone

        if(req.body.type ) obj.type = req.body.type 

        if(req.body.reportTo) obj.reportTo = req.body.reportTo

        if(req.body.passport) obj.passport = req.body.passport

        if(req.body.address1 || req.body.address2) obj.address = req.body.address1 + " "+req.body.address2

        if(req.body.immigrationStatus) obj.immigrationStatus = req.body.immigrationStatus

        if(req.body.prEffectiveDate) obj.prEffectiveDate = new Date(req.body.prEffectiveDate)

        if(req.body.dateOfJoining) obj.dateOfJoining =new Date(req.body.dateOfJoining)

        if(req.body.confirmationDate) obj.confirmationDate = new Date(req.body.confirmationDate)

        if(req.body.gender) obj.gender = req.body.gender

        if(req.body.password) obj.password = bcrypt.hashSync(req.body.password,8) 

        if(req.body.nricNo) obj.nricNo = req.body.nricNo

        if(req.body.finNo) obj.finNo = req.body.finNo

        if(req.body.vaccination) obj.vaccination = req.body.vaccination
        if(req.body.status) obj.status = req.body.status


        if(req.body.company) obj.company = req.body.company
        if(req.body.location) obj.location = req.body.location
        if(req.body.department) obj.department = req.body.department

        
        if(req.body.designation) obj.designation = req.body.designation
        if(req.body.shift) obj.shift = req.body.shift
        if(req.body.subdepartment) obj.subdepartment = req.body.subdepartment
        await db.employee.create(obj)


        res.status(201).end()

    } catch (error) {
        console.log(error)

        res.status(500).json({
            success:false,
            message:"internal error occoured",
        })
    }
}



exports.getAllEmployee = async function(req,res,next){
    try {
       

        let employees = await db.employee.find({}).select("-password").populate("company")

        res.status(200).json({
            success:true,
            employees
        })


    } catch (error) {
        console.log(error)

        res.status(500).json({
            success:false,
            message:"error occoured",
            error:error
        })
    }
}



exports.updateEmployee = async function(req,res,next){
    try {
        const {id} = req.params

        let obj ={}

        if(req.body.fName ) obj.fName = req.body.fName 

        if(req.body.lName) obj.lName = req.body.lName

        if(req.body.username ) obj.username = req.body.username 

        if(req.body.email) obj.email = req.body.email

        if(req.body.DOB ) obj.DOB = new Date(req.body.DOB) 

        if(req.body.phone) obj.phone = req.body.phone

        if(req.body.type ) obj.type = req.body.type 

        if(req.body.reportTo) obj.reportTo = req.body.reportTo

        if(req.body.passport) obj.passport = req.body.passport

        if(req.body.address1 || req.body.address2) obj.address = req.body.address1 + " "+req.body.address2

        if(req.body.immigrationStatus) obj.immigrationStatus = req.body.immigrationStatus

        if(req.body.prEffectiveDate) obj.prEffectiveDate = new Date(req.body.prEffectiveDate)

        if(req.body.dateOfJoining) obj.dateOfJoining =new Date(req.body.dateOfJoining)

        if(req.body.confirmationDate) obj.confirmationDate = new Date(req.body.confirmationDate)

        if(req.body.gender) obj.gender = req.body.gender

        if(req.body.password) obj.password = bcrypt.hashSync(req.body.password,8) 

        if(req.body.nricNo) obj.nricNo = req.body.nricNo

        if(req.body.finNo) obj.finNo = req.body.finNo

        if(req.body.vaccination) obj.vaccination = req.body.vaccination

        if(req.body.status) obj.status = req.body.status
        if(req.body.company) obj.company = req.body.company
        if(req.body.location) obj.location = req.body.location
        if(req.body.department) obj.department = req.body.department
        
        if(req.body.designation) obj.designation = req.body.designation
        if(req.body.shift) obj.shift = req.body.shift
        if(req.body.subdepartment) obj.subdepartment = req.body.subdepartment
        await db.employee.updateOne({_id:id},{
            $set:obj
        })


        res.status(200).json({
            success:true,
            message:"employee updated"
        })


    } catch (error) {
        console.log(error)

        res.status(500).json({
            success:false,
            message:"error occoured",
            error:error
        })
    }
}




exports.deleteEmployee = async function(req,res,next){
    try {
        const {id} = req.params

        if(!await utility.employeeExist(id)) return res.status(400).json({
            success:false,
            message:"employee does not exist"
        })

        await db.employee.deleteOne({_id:id})


        res.status(200).json({
            success:true,
            message:"employee deleted"
        })


    } catch (error) {
        console.log(error)

        res.status(500).json({
            success:false,
            message:"error occoured",
            error:error
        })
    }
}


exports.getEmployeeByCompany = async (req,res,next)=>{
    try {
        const {id} = req.params

        let employees = await db.employee.find({company:id}).select("fName lName")

        res.status(200).json(employees)

    } catch (error) {
        console.log(error)
        
        res.status(500).json({success:false,message:"internal error occured"})
    }
}