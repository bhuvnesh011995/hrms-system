const db = require("../model")





exports.addAnnouncement = async function(req,res,next){
const {company,department,location} = req.body

try {
    let companyDoc = await db.company.findOne({_id:company})

    if(!companyDoc) return res.status(400).json({
        success:false,
        message:"no company found"
    })

    if(!companyDoc.department.includes(department) || !companyDoc.location.includes(location)) return res.status(400).json({
        success:false,
        message:'no departmetn or location found of company'
    })

    let departmentDoc = await db.department.findOne({_id:department})

    if(!departmentDoc) return res.status(400).json({
        success:false,
        message:'no departmetn found'
    })

    let locationDoc = await db.location.findOne({_id:location})

    if(!locationDoc) return res.status(400).json({
        success:false,
        message:'no location found'
    })

    let obj = {company,department,location}
    if(req.body.title) obj.title = req.body.title

    if(req.body.summary) obj.summary = req.body.summary

    if(req.body.description) obj.description = req.body.description

    if(req.body.start) obj.start = new Date(req.body.start)

    if(req.body.end) obj.end= new Date(req.body.end)

    await db.announcement.create(obj)

    res.status(200).json({
        success:true,
        message:"announcement created successfull"
    })
} catch (error) {
    console.log(error)

    res.status(500).json({
        success:false,
        message:'error occured',
        error:error
    })
}
}





exports.getAllAnnouncement = async function(req,res,next){
    const {id} = req.params

    try {

        let isCompanyExist = await db.company.exists({_id:id})
        if(!isCompanyExist) return res.status(400).json({
            success:false,
            message:"company does not exist"
        })

        let announcements = await db.announcement.find({company:id}).populate([
            { path:"company",select:"name"},
            {path:"department",select:"name"},
            {path:"location",select:"name"}
    ])

    if(!announcements || !announcements.length) return res.status(204).json({
        success:false,
        message:"no announcement found of company"
    })

    res.status(200).json({
        success:true,
        announcements
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





exports.updateAnnouncement = async function(req,res,next){
    const {id} = req.params //announcement id

    try {
        let obj = {}

        let announcementDoc = await db.announcement.findOne({_id:id})

        if(!announcementDoc) return res.staus(400).json({
            success:false,
            message:"no announceent found"
        })

        if(req.body.title) obj.title = req.body.title

        if(req.body.summary) obj.summary = req.body.summary

        if(req.body.description) obj.description = req.body.description

        if(req.body.start) obj.start = new Date(req.body.start)

        if(req.body.end) obj.end= new Date(req.body.end)

        await db.announcement.updateOne({_id:id},{
            $set:obj
        })

        res.status(200).json({
            success:true,
            message:"announcement updated successfully"
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






exports.deleteAnnouncement = async function(req,res,next){
    const {id} = req.params // announcemnt id

    try {
        let announcement = await db.announcement.findOne({_id:id})

        if(!announcement) return res.status(400).json({
            success:false,
            message:"no announcement found"
        })

        await db.announcement.deleteOne({_id:id})

        res.status(200).json({
            success:true,
            message:"announcement deleted successfully"
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