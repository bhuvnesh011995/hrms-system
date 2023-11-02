const db = require("../../model")
const fs = require("fs")


exports.addComplaint = async function(req,res,next){
    try {


        let obj = {}
        if(req.body.title) obj.title = req.body.title
        if(req.body.company) obj.company = req.body.company
        if(req.body.from) obj.from = req.body.from
        if(req.body.against) obj.against = req.body.against
        if(req.body.date) obj.date = new Date(req.body.date)
        if(req.body.description) obj.description = req.body.description
        if(req.files?.length) {
            let arr = req.files.map(ele=>ele.filename)
            obj.files = arr
        }
        obj.addedBy = req.id

        await db.complaints.create(obj)

        res.status(201).end()
    } catch (error) {
        console.log(error)

        res.status(500).json({
            success:false,
            message:"internal error occured",
        })
    }
}



exports.getAllComplaints = async function(req,res,next){
    try {
      
        let complaints = await db.complaints.find().populate([{path:"company",select:"name"},{path:"from",select:"fName lName"},{path:"against",select:"fName lName"}])

        res.status(200).json(complaints)
        
        
    } catch (error) {
        console.log(error)

        res.status(500).json({
            success:false,
            message:"internal error occured",
        })
    }
}




exports.updateComplaint = async function(req,res,next){
    try {
        const {id} = req.params



        let obj = {}

        if(req.body.title) obj.title = req.body.title
        if(req.body.company) obj.company = req.body.company
        if(req.body.date) obj.date = new Date(req.body.date)
        if(req.body.description) obj.description = req.body.description
        if(req.files?.length){
            let arr = req.files.map(ele=>ele.filename)
            await db.complaints.updateOne({_id:id},{
            $push:{files:{$each : arr}}
        })
}
        await db.complaints.updateOne({_id:id},{
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




exports.deleteComplaint = async function(req,res,next){
    try {
        const {id} = req.params

        let complaint = await db.complaints.findOne({_id:id}).select('files')

        if(complaint.files?.length){
            complaint.files.forEach(ele=>{
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

        await db.complaints.deleteOne({_id:id})

        res.status(204).end()

    } catch (error) {
        console.log(error)

        res.status(500).json({
            success:false,
            message:"internal error occured",
        })
    }
}



exports.deleteFileFromComplaint = async (req,res,next)=>{
    try {
        await db.complaints.updateOne({_id:req.params.id},{
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