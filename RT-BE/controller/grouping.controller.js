const db = require("../model")


exports.addGrouping = async (req,res,next)=>{
    try {
        let obj = {}
        
        obj.addedBy = req.id
        if(req.body.name) obj.name = req.body.name
        if(req.body.company) obj.company = req.body.company
        if(req.body.department) obj.department = req.body.department
        if(req.body.subdepartment) obj.subdepartment = req.body.subdepartment

        await db.grouping.create(obj)
        
        res.status(201).end()

    } catch (error) {
        console.log(error)

        res.status(500).json({
            success:false,
            message:"internal error occured"
        })
    }
}



exports.getAllGrouping = async (req,res,next)=>{
    try {
        let groupings = await db.grouping.find({}).populate(
            [
                {path:"department",select:"name"},
                {path:"company",select:"name"},
                {path:"subdepartment",select:"name"}
            ]
        )


        res.status(200).json(groupings)

    } catch (error) {
        console.log(error)
        res.status(500).json({
            success:false,
            message:"internal error occured"
        })
    }
}



exports.updateGrouping = async (req,res,next)=>{
    try {
        let obj = {}
    
        if(req.body.name) obj.name = req.body.name
        if(req.body.company) obj.company = req.body.company
        if(req.body.department) obj.department = req.body.department
        if(req.body.subdepartment) obj.subdepartment = req.body.subdepartment

        await db.grouping.findOneAndUpdate({_id:req.params.id},{
            $set:obj
        })
        res.status(204).end()
    } catch (error) {
        console.log(error)
        res.status(500).json({
            success:false,
            message:"internal error occured"
        })
    }
}



exports.deleteGrouping = async (req,res,next)=>{
    try {
        await db.grouping.findOneAndDelete({_id:req.params.id})

        res.status(204).end()
    } catch (error) {
        console.log(error)
        res.status(500).json({
            success:false,
            message:"internal error occured"
        })
    }
}