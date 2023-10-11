const db = require("../model")
const bcrypt = require("bcrypt")
const mongoose = require("mongoose")

exports.addCompany = async function(req,res,next){
    let companyObj = {
        name:req.body.name,
        taxNumber:req.body.taxNumber,
        companyType:req.body.companyType,
        tradingName:req.body.tradingName,
        address:`${req.body.address1} ${req.body.address2}`,
        registrationNumber:req.body.registrationNumber,
        phone:req.body.phone,
        email:req.body.email,
        website:req.body.website,
        country:req.body.country,
        state:req.body.state,
        city:req.body.city,
        zipCode:req.body.zipCode,
        username:req.body.username,
        password:bcrypt.hashSync(req.body.password,8),
        timeZone:req.body.timeZone,
        currency:req.body.currency,
        logo:req.file?.filename || null
    };


    try {
        await db.company.create(companyObj)

        res.status(200).json({
            success:true,
            message:"company created successfully"
        })
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
        let companies = await db.company.find({})

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
    let companyObj = {};
    try {
        if(req.body.name) companyObj.name = req.body.name
    if(req.body.taxNumber) companyObj.taxNumber = req.body.taxNumber
    if(req.body.companyType) companyObj.companyType = req.body.companyType
    if(req.body.tradingName) companyObj.tradingName = req.body.tradingName
    if(req.body.address1 || req.body.address2) companyObj.address = `${req.body.address1} ${req.body.address2}`
    if(req.body.registrationNumber) companyObj.registrationNumber = req.body.registrationNumber
    if(req.body.phone) companyObj.phone = req.body.phone
    if(req.body.email) companyObj.email = req.body.email
    if(req.body.website) companyObj.website = req.body.website
    if(req.body.country) companyObj.country = req.body.country
    if(req.body.state) companyObj.state = req.body.state
    if(req.body.city) companyObj.city = req.body.city
    if(req.body.zipCode) companyObj.zipCode = req.body.zipCode
    if(req.body.timeZone) companyObj.timeZone = req.body.timeZone
    if(req.body.username) companyObj.username = req.body.username
    if(req.body.currency) companyObj.currency = req.body.currency
    if(req.file) companyObj.logo = req.file.filename


    await db.company.findOneAndUpdate({_id:req.params.id},{
        $set : companyObj
    })

    res.status(200).json({
        success:true,
        message:"company details updated successfully"
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


exports.deleteCompany = async function(req,res,next){
    let {id} = req.params
    try {

        let company = await db.company.findOne({_id:id}).select("logo")
        if(!company) return res.status(400).json({
            success:false,
            message:"no company found"
        })
        let dbs = mongoose.connection.db
        let gridfsBucket = new mongoose.mongo.GridFSBucket(dbs,{
            bucketName: 'uploads'
          })
        

        let file = await gridfsBucket.find({filename:company.logo}).toArray()
        if(file || flie.length){
            //deleting company logo
            gridfsBucket.delete(file[0]._id,(err,gridStore)=>{
                if(err) console.log(err)
            })
        }

        // deleting company
        await db.company.findOneAndDelete({_id:id})
        // deleting departments
        await db.department.deleteMany({company:id})

        // deleting subdepartment 
        await db.subdepartment.deleteMany({company:id})

        // deleting locations
        await db.location.deleteMany({company:id})

        res.status(200).json({
            success:true,
            message : "company deleted successfully and its respected things"
        })
        
    } catch (error) {
        console.log(error)
        res.status(500).json({
            success:false,
            message:"error occured ",
            error
        })
    }
}



exports.getImage = async function(req,res,next){
    try {
        let dbs = mongoose.connection.db
        let gridfsBucket = new mongoose.mongo.GridFSBucket(dbs,{
            bucketName: 'uploads'
          })
        let files = await gridfsBucket.find({filename:req.params.filename}).toArray();

        if (!files || files.length === 0) {
            return res.status(404).json({
                success:false,
                message: 'No file exists'
            });
          }
          
        if (files[0].contentType === 'image/jpeg' || files[0].contentType === 'image/png') {
            // Read output to browser
            const readstream = gridfsBucket.openDownloadStream(files[0]._id);
            readstream.pipe(res);
          } else {
            res.status(404).json({
              err: 'Not an image'
            });
          }

    } catch (error) {
        console.log(error)
        res.status(500).json({
            success:false,
            message:"error occoured",
            error
        })
    }
   
}