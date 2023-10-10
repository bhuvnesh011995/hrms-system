const db = require("../model")
const utility = require("../utility")


exports.addDesignation = async function(req,res,next){
    const {name,company,department,subdepartment} = req.body

    try {
        // check for department and subdepartment to be of same company
    if(!await utility.companyExist(company)) return res.status(400).json({
        success:false,
        message:"no company found"
    })
    let companyDoc = await db.company.findOne({_id:company})
    
    if(!companyDoc.department.includes(department)) return res.status(400).json({
        success:false,
        message:"departmetn not found in company"
    })
    if(!await utility.departmentExist(department)) return res.status(400).json({
            success:false,
            message:"no department found"
        })
    let departmentDoc = await db.department.findOne({_id:department})

    

    if(!departmentDoc.subdepartment.includes(subdepartment)) return res.status(400).json({
        success:false,
        message:"no subdepartment found in department"
    })

    

    if(!await utility.subdepartmetnExist(subdepartment)) return res.status(400).json({
        success:false,
        message:"no subdepartment found"
    })

    await db.designation.create({
        name,company,department,subdepartment
    })

    res.status(200).json({
        success:true,
        message:"designation created"
    })
    } catch (error) {
        console.log(error)

        res.status(500).json({
            success:false,
            message:"error occured",
            error : error
        })
    }

    
}





exports.getAllDesignation = async function(req,res,next){
    const {id} = req.params  // company id

    try {
        if(!await utility.companyExist(id)) return res.status(400).json({
            success:false,
            message:"no company found"
        })

        let designations = await db.designation.find({company:id})

        if(!designations || !designations.length) return res.status(204).json({
            success:false,
            message:"no designation found of company"
        })

        res.status(200).json({
            success:true,
            designations
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





exports.updateDesignation = async function(req,res,next){
    const {id} = req.params   // designation id

    try {

        if(!await utility.designationExitst(id)) return res.status(400).json({
            success:false,
            message:"no designation found"
        })

        let obj = {}

        if(req.body.name) obj.name = req.body.name

        await db.designation.updateOne({_id:id},{
            $set:obj
        })
        res.status(200).json({
            success:true,
            message:"designation updated successfully"
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





exports.deleteDesignation = async function(req,res,next){
    const {id} = req.params

    try {
        

        if(!await utility.designationExitst(id)) return res.status(400).json({
            success:false,
            message:"no designation found"
        })

        await db.designation.deleteOne({_id:id})

        res.status(200).json({
            success:true,
            message:"designation deleted successfully"
        })
    } catch (error) {
        console.log(error)

        res.stauts(500).json({
            success:false,
            message:"error occured",
            error:error
        })
    }
}