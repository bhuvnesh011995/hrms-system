const db = require("../model")


exports.addLocation = async function(req,res,next){
    const {
        company,head,name,line1,line2,city,state,country,zipCode,email,phone,faxNumber
    } = req.body;

    let obj = {addedBy:req.id}

    if(company) obj = {...obj,company}
    if(head) obj = {...obj,head}
    if(name) obj = {...obj,name}
    if(line1) obj = {...obj,"address.line1":line1}
    if(line2) obj = {...obj,"address.line2":line2}
    if(city) obj = {...obj,"address.city":city}
    if(state) obj = {...obj,"address.state":state}
    if(country) obj = {...obj,"address.country":country}
    if(zipCode) obj = {...obj,"address.zipCode":zipCode}
    if(email) obj = {...obj,email}
    if(phone) obj = {...obj,phone}
    if(faxNumber) obj = {...obj,faxNumber}
    if(company) obj = {...obj,company}
    try {
        // company is mandatory checking presence
        let companyDoc = await db.company.exists({_id:company})
        if(!companyDoc) return res.status(400).end()

  
// creating location and linking with company
    const location = await db.location.create(obj)

    // linking company with location
    // await db.company.updateOne({
    //     _id:companyDoc._id
    // },{
    //     $push:{location:location._id}
    // })

    res.status(201).end()

    } catch (error) {
        console.log(error)

        res.status(500).json({
            suuccess:false,
            message:"error occoured",
            error
        })
    }

   
}











exports.getAllLocation = async function(req,res,next){
    

    try {
        let locations = await db.location.find().populate([{path:"company",select:"name"},{path:"head",select:"fName lName"},{path:"addedBy",select:"fName lName"}])

        res.status(200).json({
            success:true,
            locations
        })
    } catch (error) {
        console.log(error)

        res.status(500).json({
            success:false,
            message:"error occured",
            error
        })
    }
}









exports.updateLocation = async function(req,res,next){
    const {id} = req.params
    const {
        company,head,name,line1,line2,city,state,country,zipCode,email,phone,faxNumber
    } = req.body;

    let obj = {}

    if(company) obj = {...obj,company}
    if(head) obj = {...obj,head}
    if(name) obj = {...obj,name}
    if(line1) obj = {...obj,"address.line1":line1}
    if(line2) obj = {...obj,"address.line2":line2}
    if(city) obj = {...obj,"address.city":city}
    if(state) obj = {...obj,"address.state":state}
    if(country) obj = {...obj,"address.country":country}
    if(zipCode) obj = {...obj,"address.zipCode":zipCode}
    if(email) obj = {...obj,email}
    if(phone) obj = {...obj,phone}
    if(faxNumber) obj = {...obj,faxNumber}
    
    try {
        if(company){
             obj = {...obj,company}
             
             let companyExist = await db.company.exists({_id:company})
                if(!companyExist) return res.status(400).json({
                success:false,
                message:"no compnay found"
    })
            }
        // company is mandatory checking presence
        

        let location = await db.location.findOne({_id:id})

        if(!location) return res.status(400).json({
            success:false,
            message:"cannot update because no location found"
        })
        
        // if(req.body.company){
        //     // checking presence of company
        //     let companyDoc = await db.company.findOne({_id:req.body.company})

        //     if(!companyDoc) return res.status(400).json({
        //         success:false,
        //         message:"cannot update because no company found"
        //     })
        //     // unlinking location from company
        //     await db.company.updateOne({_id:companyDoc._id},{$pull:{location:location._id}})


        //     // linking location to new company

        //     await db.company.updateOne({_id:req.body.company},{
        //         $push:{location:location._id}
        //     })

        // }

        //updating the location
        await db.location.updateOne({_id:id},{
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









exports.deleteLocation = async function(req,res,next){
    try {
        const {id} = req.params
        // finding location

        let locationDoc = await db.location.exists({_id:id})
        
        if(!locationDoc) return res.status(400).end()

        // await db.company.findOneAndUpdate({_id:locationDoc.company},{
            // $pull:{location:locationDoc._id}
        // })
        // deleteing location
        await db.location.findOneAndDelete({_id:id})

        // unlinking department from location

        // await db.department.updateMany({location:id},{location:null})

        

        res.status(204).end()
    } catch (error) {
        console.log(error)
        res.status(500).json({
            success:false,
            message:"internal error occured"
        })
    }
}


exports.getLocationsByCompanyId = async (req,res,next)=>{
    try {
        let locations = await db.location.find({company:req.params.id}).select("name")

        res.status(200).json(locations)
    } catch (error) {
        console.log(error)
        res.status(500).json({
            success:false,
            message:"internal error occured"
        })
    }
}