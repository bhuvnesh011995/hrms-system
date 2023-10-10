const db = require("../../model")
const utility = require("../../utility")


exports.addAward = async function(req,res,next){
    try {
        const {company,employee} = req.body

        if(! await utility.companyExist(company)) return res.status(400).json({
            success:false,
            message:"company does not exist"
        })

        // employee code is remailning like company


        let obj = {company}


        if(req.body.awardType) obj.awardType = req.body.awardType
        if(req.body.date) obj.date = new Date(req.body.date)
        if(req.body.gift) obj.gift = req.body.gift
        if(req.body.cash) obj.cash = req.body.cash
        if(req.body.monthAndYear)  obj.monthAndYear = req.body.monthAndYear
        if(req.body.awardInfo) obj.awardInfo = req.body.awardInfo
        if(req.body.description) obj.description = req.body.description
        if(req.file) obj.filename = req.file.filename


        await db.award.create(obj)

        res.status(200).json({
            success:true,
            message:"award created successfully"
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



exports.getAllAward = async function(req,res,next){
    try {
        const {id} = req.params

        if(!await utility.companyExist(id)) return res.status(400).json({
            success:false,
            message:"company does not exist"
        })

        let awards = await db.award.find({company:id})

        if(!awards || !awards.length) return res.status(204).end()

        res.status(200).json({
            success:true,
            awards
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




exports.updateAward = async function(req,res,next){
    try {
        const {id} = req.params


        if(! await utility.awardExist(id)) return res.status(400).json({
            success:false,
            message:"award does not exist"
        })


        let obj = {}

        if(req.body.awardType) obj.awardType = req.body.awardType
        if(req.body.data) obj.data = new Date(req.body.date)
        if(req.body.gift) obj.gift = req.body.gift
        if(req.body.cash) obj.cash = req.body.cash
        if(req.body.monthAndYear)  obj.monthAndYear = req.body.monthAndYear
        if(req.body.awardInfo) obj.awardInfo = req.body.awardInfo
        if(req.body.description) obj.description = req.body.description
        if(req.file) obj.filename = req.file.filename

        await db.award.updateOne({_id:id},{
            $set:obj
        })


        res.status(200).json({
            success:true,
            message:"award updated successfull"
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




exports.deleteAward = async function(req,res,next){
    try {
        const {id} = req.params

        if(! await utility.awardExist(id)) return res.status(400).json({
            success:false,
            message:"award does not exist"
        })

        await db.award.deleteOne({_id:id})

        res.status(200).json({
            success:true,
            message:"award deleted"
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