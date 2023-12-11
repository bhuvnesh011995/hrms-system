const db = require("../../model")
const fs = require("fs")


exports.addWarning = async function(req,res,next){
    try {


        let obj = {}
        if(req.body.subject) obj.subject = req.body.subject
        if(req.body.company) obj.company = req.body.company
        if(req.body.to) obj.to = req.body.to
        if(req.body.by) obj.by = req.body.by
        if(req.body.warningType) obj.warningType = req.body.warningType
        if(req.body.date) obj.date = new Date(req.body.date)
        if(req.body.description) obj.description = req.body.description
        if(req.files?.length) {
            let arr = req.files.map(ele=>ele.filename)
            obj.files = arr
        }
        obj.addedBy = req.id

        await db.warnings.create(obj)

        res.status(201).end()
    } catch (error) {
        console.log(error)

        res.status(500).json({
            success:false,
            message:"internal error occured",
        })
    }
}



exports.getAllWarnings = async function(req,res,next){
    try {
      
        let warnings = await db.warnings.find().populate([{path:"company",select:"name"},{path:"to",select:"fName lName"},{path:"by",select:"fName lName"},{path:"warningType",select:"name"}])

        res.status(200).json(warnings)
        
        
    } catch (error) {
        console.log(error)

        res.status(500).json({
            success:false,
            message:"internal error occured",
        })
    }
}




exports.updateWarning = async function(req,res,next){
    try {
        const {id} = req.params



        let obj = {}

        if(req.body.subject) obj.subject = req.body.subject
        if(req.body.status) obj.status = req.body.status
        if(req.body.warningType) obj.warningType = req.body.warningType
        if(req.body.date) obj.date = new Date(req.body.date)
        if(req.body.description) obj.description = req.body.description
        if(req.files?.length){
            let arr = req.files.map(ele=>ele.filename)
            await db.warnings.updateOne({_id:id},{
            $push:{files:{$each : arr}}
        })
}
        await db.warnings.updateOne({_id:id},{
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




exports.deleteWarning = async function(req,res,next){
    try {
        const {id} = req.params

        let warning = await db.warnings.findOne({_id:id}).select('files')

        if(warning.files?.length){
            warning.files.forEach(ele=>{
                if(fs.existsSync("./public/files/"+ele)){
                    fs.unlink("./public/files/"+ele,(err)=>{
                        if(err){
                            console.log(err)
                        }else{
                            console.log(`file ${ele} deleted`)
                        }
                    })
                }
            })
        }

        await db.warnings.deleteOne({_id:id})

        res.status(204).end()

    } catch (error) {
        console.log(error)

        res.status(500).json({
            success:false,
            message:"internal error occured",
        })
    }
}



exports.deleteFileFromWarning = async (req,res,next)=>{
    try {
       
       await db.warnings.updateOne({_id:req.params.id},{
            $pull:{files:req.params.filename}
        })
       
        if(fs.existsSync("./public/files/"+req.params.filename)){
            fs.unlink("./public/files/"+req.params.filename,(err)=>{
                if(err){
                    console.log(err)
                    res.status(400).end()
                }else{
                    console.log(`file ${req.params.filename} deleted`)
                    res.status(204).end()
                }
            })
        }else return res.status(400).end()
        
    } catch (error) {
        console.log(error)
        res.status(500).json({
            success:false,
            message:"internal error occured"
        })
    }
}



exports.getWarningById = async (req,res,next)=>{
    try {
        let warning = await db.warnings.findOne({_id:req.params.id}).populate([{path:"company",select:"name"},{path:"to",select:"fName lName"},{path:"by",select:"fName lName"},{path:"warningType",select:"name"}])

        res.status(200).json(warning)
    } catch (error) {
        console.log(error)
        res.status(500).json({
            success:false,
            message:"internal error occured"
        })
    }
}