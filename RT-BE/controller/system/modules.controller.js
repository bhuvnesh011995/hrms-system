const db = require("../../model")

exports.getModules = async function(req,res,next){
    try {
        let modules = await db.modules.findOne({})

        res.status(200).json({
            success:true,
            modules
        })
    } catch (error) {
        res.status(500).json({
            success:false,
            message:"error occured"
        })
    }
}


exports.updateModules = async (req,res,next)=>{
    try {
        let obj = {}

        if(req.body.recruitment!=undefined) obj = {...obj,recruitment:req.body.recruitment}
        if(req.body.travels!=undefined) obj = {...obj,travels:req.body.travels}
        if(req.body.fileManager!=undefined) obj = {...obj,fileManager:req.body.fileManager}
        if(req.body.multiLanguage!=undefined) obj = {...obj,multiLanguage:req.body.multiLanguage}
        if(req.body.organizationChart!=undefined) obj = {...obj,organizationChart:req.body.organizationChart}
        if(req.body.eventMeetings!=undefined) obj = {...obj,eventMeetings:req.body.eventMeetings}
        if(req.body.chatBox!=undefined) obj = {...obj,chatBox:req.body.chatBox}
        if(req.body.subdepartment!=undefined) obj = {...obj,subdepartment:req.body.subdepartment}
        if(req.body.payroll!=undefined) obj = {...obj,payroll:req.body.payroll}
        if(req.body.performance!=undefined) obj = {...obj,performance:req.body.performance}

        await db.modules.findOneAndUpdate({},{
            $set:obj
        })

        res.status(204).end();
    } catch (error) {
        res.status(500).json({
            success:false,
            message:"error occured"
        })
    }
}