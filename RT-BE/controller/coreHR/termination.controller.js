const db = require("../../model")
const fs = require("fs")


exports.addTermination = async function(req,res,next){
    console.log(req.body)
    try {


        let obj = {}
        if(req.body.terminationType) obj.terminationType = req.body.terminationType
        if(req.body.company) obj.company = req.body.company
        if(req.body.employee) obj.employee = req.body.employee
        if(req.body.noticeDate) obj.noticeDate = new Date(req.body.noticeDate)
        if(req.body.terminationDate) obj.terminationDate = new Date(req.body.terminationDate)
        if(req.body.description) obj.description = req.body.description
        if(req.files?.length) {
            let arr = req.files.map(ele=>ele.filename)
            obj.files = arr
        }
        obj.addedBy = req.id

        await db.terminations.create(obj)

        res.status(201).end()
    } catch (error) {
        console.log(error)

        res.status(500).json({
            success:false,
            message:"internal error occured",
        })
    }
}



exports.getAllTerminations = async function(req,res,next){
    try {
      
        let complaints = await db.terminations.find().populate([{path:"company",select:"name"},{path:"employee",select:"fName lName"},{path:"terminationType",select:"name"}])

        res.status(200).json(complaints)
        
    } catch (error) {
        console.log(error)

        res.status(500).json({
            success:false,
            message:"internal error occured",
        })
    }
}




exports.updateTermination = async function(req,res,next){
    try {
        const {id} = req.params



        let obj = {}

        if(req.body.terminationType) obj.terminationType = req.body.terminationType
        if(req.body.status) obj.status = req.body.status
        if(req.body.noticeDate) obj.noticeDate = new Date(req.body.noticeDate)
        if(req.body.terminationDate) obj.terminationDate = new Date(req.body.terminationDate)
        if(req.body.description) obj.description = req.body.description
        if(req.files?.length){
            let arr = req.files.map(ele=>ele.filename)
            await db.terminations.updateOne({_id:id},{
            $push:{files:{$each : arr}}
        })
}
        await db.terminations.updateOne({_id:id},{
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




exports.deleteTermination = async function(req,res,next){
    try {
        const {id} = req.params

        let termination = await db.terminations.findOne({_id:id}).select('files')

        if(termination.files?.length){
            termination.files.forEach(ele=>{
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

        await db.terminations.deleteOne({_id:id})

        res.status(204).end()

    } catch (error) {
        console.log(error)

        res.status(500).json({
            success:false,
            message:"internal error occured",
        })
    }
}



exports.deleteFileFromTermination = async (req,res,next)=>{
    try {
        await db.terminations.updateOne({_id:req.params.id},{
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



exports.getTerminationById = async (req,res,next)=>{
    try {
        let terminations = await db.terminations.findOne({_id:req.params.id}).populate([{path:"company",select:"name"},{path:"employee",select:"fName lName"},{path:"terminationType",select:"name"}])

        res.status(200).json(terminations)
    } catch (error) {
        console.log(error)
        res.status(500).json({
            success:false,
            message:"internal error occured"
        })
    }
}