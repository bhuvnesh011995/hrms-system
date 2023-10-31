const db = require("../../model")

exports.addPromotion = async function(req,res,next){
    try {


        let obj = {}

        if(req.body.company) obj.company = req.body.company
        if(req.body.employee) obj.employee = req.body.employee
        
        if(req.body.designation) obj.designation = req.body.designation
        if(req.body.title) obj.title = req.body.title
        
        if(req.body.date) obj.date = new Date(req.body.date)


        if(req.body.description) obj.description = req.body.description
        obj.addedBy = req.id


        await db.promotion.create(obj)

        res.status(201).end()
    } catch (error) {
        console.log(error)

        res.status(500).json({
            success:false,
            message:"internal error occured",
        })
    }
}



exports.getAllPromotions = async function(req,res,next){
    try {

        let promotions = await db.promotion.find().populate([{path:"company",select:"name"},{path:"employee",select:"fName lName"},{path:"designation",select:"name"}])

        res.status(200).json(promotions)
        
        
    } catch (error) {
        console.log(error)

        res.status(500).json({
            success:false,
            message:"internal error occured",
        })
    }
}




exports.updatePromotion = async function(req,res,next){
    try {
        const {id} = req.params



        let obj = {}

        if(req.body.title) obj.title = req.body.title
        
       
        if(req.body.date) obj.date = new Date(req.body.date)


        if(req.body.description) obj.description = req.body.description

        await db.promotion.updateOne({_id:id},{
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




exports.deletePromotion = async function(req,res,next){
    try {
        const {id} = req.params
        await db.promotion.deleteOne({_id:id})

        res.status(204).end()

    } catch (error) {
        console.log(error)

        res.status(500).json({
            success:false,
            message:"internal error occured",
        })
    }
}