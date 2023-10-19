const db = require("../model")


exports.addSubdepartment = async function(req,res,next){
const {
    name,department,company
} = req.body;
    try {

        // creating subdepartment
        await db.subdepartment.create({
            name,department,company
        })


        res.status(201).end()

    } catch (error) {
        console.log(error)

        res.status(500).json({
            success:false,
            message:"internal error occured"
        })
    }


}




exports.getAllSubdepartment = async function(req,res,next){
    try {
     
        let subdepartments = await db.subdepartment.find().populate([{path:"department",select:"name"},{path:"company",select:"name"}])
        

        res.status(200).json(subdepartments)
    } catch (error) {
        console.log(error)
        res.status(500).json({
            success:false,
            message:"internal error occured",
        })
    }
}





exports.updateSubdepartment = async function(req,res,next){
    const {id} = req.params

    try {
        let obj ={};

        if(req.body.name) obj.name = req.body.name
        if(req.body.department) obj.department = req.body.department
        if(req.body.company) obj.company = req.body.company

        await db.subdepartment.updateOne({_id:id},{
            $set:obj
        })

        res.status(204).end()
    } catch (error) {
        console.log(error)
        res.status(500).json({
            success:false,
            message:"internal error occoured"
        })
    }
}





exports.deleteSubdepartment = async function(req,res,next){
    const {id} = req.params
    try {

        await db.subdepartment.findOneAndDelete({_id:id})

        res.status(204).end()
    } catch (error) {
        console.log(error)

        res.status(500).json({
            success:false,
            message:"error occured "
        })
    }
}



exports.getSubDepartmentByDepartmentId = async ()=>{
    try {
        let subdepartments = await db.subdepartment.find({department:req.params.id})

        res.status(200).json(subdepartments)
    } catch (error) {
        res.status(500).json({
            success:false,
            message:"internal error occured"
        })
    }
} 