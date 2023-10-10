const db = require("../model")


exports.addSubdepartment = async function(req,res,next){
const {
    name,department
} = req.body;
    try {
        //department is mandatory for subdepartment
        let departmentDoc = await db.department.findOne({_id:department})
        if(!departmentDoc) return res.status(400).json({
            success:true,
            message:"connot find department"
        })


        // creating subdepartment
        let subdepartment =  await db.subdepartment.create({
            name,department:departmentDoc._id,company:departmentDoc.company
        })

        //adding subdepartment in company department
        await db.department.updateOne({_id:departmentDoc._id},{
            $push:{subdepartment:subdepartment._id}
        })

        res.status(200).json({
            success:true,
            message:"subdepartment added successfully"
        })

    } catch (error) {
        console.log(error)

        res.status(500).json({
            success:false,
            message:"error occured",
            error
        })
    }


}




exports.getAllSubdepartment = async function(req,res,next){
    try {
        // req.params.id is departmetn id
        let subdepartments = await db.subdepartment.find({department:req.params.id}).populate({path:"department",select:"name"})
        
        if(!subdepartments || !subdepartments.length) return res.status(204).json({
            success:false,
            message :"no subdepartment exist of the department"
        })

        res.status(200).json({
            success:true,
            subdepartments
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            success:false,
            message:"error occured",
            error
        })
    }
}





exports.updateSubdepartment = async function(req,res,next){
    const {id} = req.params

    try {
        let obj ={};
        let subdepartment = await db.subdepartment.findOne({_id:id})

        if(!subdepartment) return res.status(400).json({
            success:false,
            message:"no subdepartment found"
        })


        if(req.body.name) obj.name = req.body.name
        if(req.body.department){
            //checking if valid department or not
            let departmentDoc = await db.department.findOne({_id:req.body.department})
            if(!departmentDoc) return res.status(400).json({
                success:false,
                message:"give a valid department to update subdepartment"
            })

            // removing subdepartment from previous department

            await db.department.updateOne({subdepartment:subdepartment._id},{
                $pull:{subdepartment:subdepartment._id}
            })

            // adding subdepartment in department

            await db.department.updateOne({_id:departmentDoc._id},{$push:{subdepartment:subdepartment._id}})

            obj.department = departmentDoc._id

        }

        await db.subdepartment.updateOne({_id:id},{
            $set:obj
        })

        res.status(200).json({
            success:true,
            message:"subdepartment updated successfully"
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            success:false,
            message:"error occoured",
            error
        })
    }
}


exports.deleteSubdepartment = async function(req,res,next){
    const {id} = req.params
    try {
        let subdepartment = await db.subdepartment.findOne({_id:id})

        if(!subdepartment) return res.status(400).json({
            success:false,
            message:"no subdepartment found"
        })

        subdepartment.department && await db.department.updateOne({_id:subdepartment.department},{
            $pull:{subdepartment:subdepartment._id}
        })

        await db.subdepartment.findOneAndDelete({_id:id})

        res.status(200).json({
            success:true,
            message:"subdepartment deleted successfull"
        })
    } catch (error) {
        console.log(error)

        res.status(500).json({
            success:false,
            message:"error occured ",
            error
        })
    }
}