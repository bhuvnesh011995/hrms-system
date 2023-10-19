const db = require("../model")

exports.addDepartment = async function(req,res,next){
    const {
        name,company,location,head
    } = req.body
    try {
        

        // creating department
        await db.department.create({
            name,company,location,head,addedBy:req.id
        })


        res.status(201).end()


    } catch (error) {
        console.log(error)

        res.status(500).json({
            success:false,
            message:"internal error ococured",
        })
    }
}



exports.getAllDepartment = async function(req,res,next){
    try {
        let departments = await db.department.find({}).populate([{path:"company",select:"name"},{path:"location",select:"name"},{path:"head",select:"fName lName"}])


        res.status(200).json(departments)
    } catch (error) {
        console.log(error)

        res.status(500).json({
            success:false,
            message:"internal error ococured",
        })
    }
}


exports.updateDepartment = async function(req,res,next){
    try {
        const {id} = req.params
        let obj = {};
        

        if(req.body.name) obj.name = req.body.name
        if(req.body.company) obj.company = req.body.company
        
        if(req.body.location) obj.location = req.body.location

        if(req.body.head) obj.head = req.body.head

        await db.department.findOneAndUpdate({_id:id},{
            $set:obj
        })




        res.status(204).end()
    } catch (error) {
        console.log(error)

        res.status(500).json({
            success:fasle,
            message:"error occured"
        })
    }
}



exports.deleteDepartment = async function(req,res,next){
    const {id} = req.params

    try {

      
        await db.department.deleteOne({_id:id})

        res.status(204).end()

    } catch (error) {
        console.log(error)

        res.status(500).json({
            success:false,
            message:"internal error occured"
        })
    }
}



exports.getDepartmentByCompanyId = async (req,res,next)=>{
    try {
        let departments = await db.department.find({company:req.params.id}).select("name").lean()

        res.status(200).json(departments)

    } catch (error) {
        console.log(error)
        res.status(500).json({
            success:false,
            message:"internal error occured"
        })
    }
}