const db = require("../model")
const bcrypt = require("bcrypt")
const mongoose = require("mongoose")

exports.addCompany = async function(req,res,next){
    
    let obj = {}

    if(req.body.name) obj = {...obj,name:req.body.name}
    if(req.body.taxNumber) obj = {...obj,taxNumber:req.body.taxNumber}
    if(req.body.companyType) obj = {...obj,companyType:req.body.companyType}
    if(req.body.tradingName) obj = {...obj,tradingName:req.body.tradingName}
    if(req.body.line1) obj = {...obj,address :{...obj.address,line1:req.body.line1} }
    if(req.body.line2) obj = {...obj,address :{...obj.address,line2:req.body.line2} }

    if(req.body.country) obj = {...obj,address :{...obj.address,country:req.body.country} }

    if(req.body.state) obj = {...obj,address :{...obj.address,state:req.body.state} }

    if(req.body.city) obj = {...obj,address :{...obj.address,city:req.body.city} }

    if(req.body.zipCode) obj = {...obj,address :{...obj.address,zipCode:req.body.zipCode} }

    if(req.body.registrationNumber) obj = {...obj,registrationNumber:req.body.registrationNumber}
    if(req.body.phone) obj = {...obj,phone:req.body.phone}
    if(req.body.email) obj = {...obj,email:req.body.email}
    if(req.body.website) obj = {...obj,website:req.body.website}
    if(req.body.username) obj = {...obj,username:req.body.username}
    if(req.body.password) obj = {...obj,password:bcrypt.hashSync(req.body.password,8),}
    if(req.body.timeZone) obj = {...obj,timeZone:req.body.timeZone}
    if(req.body.currency) obj = {...obj,currency:req.body.currency}
    if(req.file) obj = {...obj,logo:req.file.filename}
    obj = {...obj,addedBy:req.id}


    try {
        await db.company.create(obj)

        res.status(201).end()
    } catch (error) {
        console.log(error)
        res.status(500).json({
            success:false,
            message:"error occoured",
            error
        })
    }

}


exports.getAllCompany = async function(req,res,next){
    try {
        let companies = await db.company.find({}).select("-password").populate([{path:"currency"},{path:"companyType"}])

        res.status(200).json({
            success:true,
            companies
        })
    } catch (error) {
        console.log(error)

        res.status(500).json({
            success:false,
            messsage:"error occoured",
            error
        })
    }
}


exports.updateCompany = async function(req,res,next){
    
    try {
        let obj = {}

    if(req.body.name) obj = {...obj,name:req.body.name}
    if(req.body.taxNumber) obj = {...obj,taxNumber:req.body.taxNumber}
    if(req.body.companyType) obj = {...obj,companyType:req.body.companyType}
    if(req.body.tradingName) obj = {...obj,tradingName:req.body.tradingName}
    if(req.body.line1) obj = {...obj,address :{...obj.address,line1:req.body.line1} }
    if(req.body.line2) obj = {...obj,address :{...obj.address,line2:req.body.line2} }

    if(req.body.country) obj = {...obj,address :{...obj.address,country:req.body.country} }

    if(req.body.state) obj = {...obj,address :{...obj.address,state:req.body.state} }

    if(req.body.city) obj = {...obj,address :{...obj.address,city:req.body.city} }

    if(req.body.zipCode) obj = {...obj,address :{...obj.address,zipCode:req.body.zipCode} }

    if(req.body.registrationNumber) obj = {...obj,registrationNumber:req.body.registrationNumber}
    if(req.body.phone) obj = {...obj,phone:req.body.phone}
    if(req.body.email) obj = {...obj,email:req.body.email}
    if(req.body.website) obj = {...obj,website:req.body.website}
    if(req.body.username) obj = {...obj,username:req.body.username}
    if(req.body.password) obj = {...obj,password:bcrypt.hashSync(req.body.password,8),}
    if(req.body.timeZone) obj = {...obj,timeZone:req.body.timeZone}
    if(req.body.currency) obj = {...obj,currency:req.body.currency}
    if(req.file) obj = {...obj,logo:req.file.filename}
    

    await db.company.findOneAndUpdate({_id:req.params.id},{
        $set : obj
    })

    res.status(204).end()

    } catch (error) {
        console.log(error)
        res.status(500).json({
            success:false,
            message:"error occured",
            error
        })
    }
}


exports.deleteCompany = async function(req,res,next){
    let {id} = req.params
    try {

        let isExist = await db.company.exists({_id:id})
        if(!isExist) return res.status(400).json({
            success:false,
            message:"no company found"
        })
        

        

        // deleting company
        await db.company.findOneAndDelete({_id:id})
        // deleting departments
        // await db.department.deleteMany({company:id})

        // deleting subdepartment 
        // await db.subdepartment.deleteMany({company:id})

        // deleting locations
        // await db.location.deleteMany({company:id})

        res.status(204).end()
        
    } catch (error) {
        console.log(error)
        res.status(500).json({
            success:false,
            message:"error occured ",
            error
        })
    }
}



// exports.getImage = async function(req,res,next){
//     try {
//         let dbs = mongoose.connection.db
//         let gridfsBucket = new mongoose.mongo.GridFSBucket(dbs,{
//             bucketName: 'uploads'
//           })
//         let files = await gridfsBucket.find({filename:req.params.filename}).toArray();

//         if (!files || files.length === 0) {
//             return res.status(404).json({
//                 success:false,
//                 message: 'No file exists'
//             });
//           }
          
//         if (files[0].contentType === 'image/jpeg' || files[0].contentType === 'image/png') {
//             // Read output to browser
//             const readstream = gridfsBucket.openDownloadStream(files[0]._id);
//             readstream.pipe(res);
//           } else {
//             res.status(404).json({
//               err: 'Not an image'
//             });
//           }

//     } catch (error) {
//         console.log(error)
//         res.status(500).json({
//             success:false,
//             message:"error occoured",
//             error
//         })
//     }
   
// }