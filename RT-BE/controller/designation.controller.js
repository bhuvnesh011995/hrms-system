const db = require("../model")
const utility = require("../utility")


exports.addDesignation = async function(req,res,next){
    const {name,company,department,subdepartment} = req.body

    try {
    

    await db.designation.create({
        name,company,department,subdepartment,addedBy:req.id
    })

    res.status(201).end()
    } catch (error) {
        console.log(error)

        res.status(500).json({
            success:false,
            message:"internal error occured",
        })
    }

    
}





exports.getAllDesignation = async function(req,res,next){
    
try{

        let designations = await db.designation.find({}).populate(
            [
                {path:"company",select:"name"},

                {path:"department",select:"name"},
                {path:"subdepartment",select:"name"}
            ]
        )

        
        res.status(200).json(designations)
    } catch (error) {
        console.log(error)

        res.status(500).json({
            success:false,
            message:"internal error occured",
        })
    }
}





exports.updateDesignation = async function(req,res,next){
    const {id} = req.params   // designation id

    try {

        let obj = {}

        if(req.body.name) obj.name = req.body.name
        if(req.body.company) obj.company = req.body.company
        if(req.body.department) obj.department = req.body.department
        if(req.body.subdepartment) obj.subdepartment = req.body.subdepartment

        await db.designation.updateOne({_id:id},{
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





exports.deleteDesignation = async function(req,res,next){
    const {id} = req.params

    try {
        await db.designation.deleteOne({_id:id})

        res.status(204).end()
    } catch (error) {
        console.log(error)

        res.stauts(500).json({
            success:false,
            message:"internal error occured",
        })
    }
}