const db= require("../model")



exports.addDocument = async function(req,res,next){
    const {company} = req.body

    
    try {
        let companyDoc = await db.company.findOne({_id:company})
        if(!companyDoc) return res.status(400).json({
            success:false,
            message:"no company found"
        })

        
    let obj ={company};
    if(req.body.licenseName) obj.licenseName = req.body.licenseName;
    
    if(req.body.documentType) obj.documentType = req.body.documentType;
    
    if(req.body.licenseNumber) obj.licenseNumber = req.body.licenseNumber;
    
    if(req.body.expiryDate) obj.expiryDate = new Date(req.body.expiryDate);
    
    if(req.body.alarm) obj.alarm =new Date(req.body.alarm);

    if(req.file?.filename) obj.filename = req.file.filename 

        await db.documents.create(obj)

        res.status(200).json({
            success:true,
            message:"document created successfully"
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



exports.getAllDocument = async function(req,res,next){
    const {id} = req.params

    try {
        const documents = await db.documents.find({company:id}).populate({path:'company',select:"name"})

        if(!documents || !documents.length) return res.status(204).json({
            success:true,
            message:"no documents found"
        })

        res.status(200).json({
            success:true,
            documents
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



exports.updateDocument = async function(req,res,next){
    const {id} = req.params // document id

    try {
       const documentDoc = await db.documents.findOne({_id:id})

    if(!documentDoc) return res.status(400).json({
        success:false,
        message:"no document found"
    })
    let obj ={};
    if(req.body.licenseName) obj.licenseName = req.body.licenseName;
    
    if(req.body.documentType) obj.documentType = req.body.documentType;
    
    if(req.body.licenseNumber) obj.licenseNumber = req.body.licenseNumber;
    
    if(req.body.expiryDate) obj.expiryDate = new Date(req.body.expiryDate);
    
    if(req.body.alarm) obj.alarm =new Date(req.body.alarm);

    if(req.file?.filename) obj.filename = req.file.filename


    await db.documents.updateOne({_id:id},{
        $set:obj
    }) 

    res.status(200).json({
        success:true,
        message:"document updated"
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




exports.deleteDocument = async function(req,res,next){
    const {id} = req.params
    try {
        const documentDoc = await db.documents.findOne({_id:id})

        if(!documentDoc) return res.status(400).json({
            success:false,
            message:'no document found'
        })

        await db.documents.deleteOne({_id:id})

        res.status(200).json({
            success:true,
            message:"document deleted successfull"
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