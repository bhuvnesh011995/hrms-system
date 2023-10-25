const db = require("../model")





exports.addAnnouncement = async function(req,res,next){
try {
    

    let obj = {}
    
    if(req.body.company) obj.company = req.body.company

    if(req.body.department) obj.department = req.body.department

    if(req.body.location) obj.location = req.body.location

    if(req.body.title) obj.title = req.body.title

    if(req.body.summary) obj.summary = req.body.summary

    if(req.body.description) obj.description = req.body.description

    if(req.body.start) obj.start = new Date(req.body.start)

    if(req.body.end) obj.end= new Date(req.body.end)
    obj.addedBy = req.id

    await db.announcement.create(obj)

    res.status(201).end()
} catch (error) {
    console.log(error)

    res.status(500).json({
        success:false,
        message:'internal error occured',
    })
}
}





exports.getAllAnnouncement = async function(req,res,next){
  
    try {

       
        let announcements = await db.announcement.find().populate([
            { path:"company",select:"name"},
            {path:"department",select:"name"},
            {path:"location",select:"name"}
    ])

    res.status(200).json(announcements)
    } catch (error) {
        console.log(error)

        res.status(500).json({
            success:false,
            message:"internal error occured",
        })
    }

}





exports.updateAnnouncement = async function(req,res,next){
    const {id} = req.params //announcement id

    try {
        let obj = {}

        if(req.body.company) obj.company = req.body.company

        if(req.body.department) obj.department = req.body.department

        if(req.body.location) obj.location = req.body.location

        if(req.body.title) obj.title = req.body.title

        if(req.body.summary) obj.summary = req.body.summary

        if(req.body.description) obj.description = req.body.description

        if(req.body.start) obj.start = new Date(req.body.start)

        if(req.body.end) obj.end= new Date(req.body.end)

        await db.announcement.updateOne({_id:id},{
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






exports.deleteAnnouncement = async function(req,res,next){
    const {id} = req.params // announcemnt id

    try {
        await db.announcement.deleteOne({_id:id})

        res.status(204).end()
    } catch (error) {
        console.log(error)

        res.status(500).json({
            success:false,
            message:"internal error occured",
        })
    }
}