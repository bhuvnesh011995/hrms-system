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
    if(req.body.name) obj.name = req.body.name;
    
    if(req.body.documentType) obj.documentType = req.body.documentType;
    
    if(req.body.licenseNumber) obj.licenseNumber = req.body.licenseNumber;
    
    if(req.body.expiryDate) obj.expiryDate = new Date(req.body.expiryDate);
    
    if(req.body.alarm) obj.alarm =req.body.alarm;

    if(req.file) obj.filename = req.file.filename 
 obj.addedBy = req.id
        await db.documents.create(obj)

        res.status(201).end()


    } catch (error) {
        console.log(error)

        res.status(500).json({
            success:false,
            message:"internal error occured",
        })
    }
}



exports.getAllDocument = async function(req,res,next){

    try {
        const documents = await db.documents.find().populate([{path:'company',select:"name"},[{path:"documentType"}]])

        res.status(200).json(documents)
    } catch (error) {
        console.log(error)

        res.status(500).json({
            success:false,
            message:"internal error occured",
        })
    }
}



exports.updateDocument = async function(req,res,next){
    const {id} = req.params // document id

    try {

    let obj ={};
    if(req.body.name) obj.name = req.body.name;
    
    if(req.body.documentType) obj.documentType = req.body.documentType;
    
    if(req.body.licenseNumber) obj.licenseNumber = req.body.licenseNumber;
    
    if(req.body.expiryDate) obj.expiryDate = new Date(req.body.expiryDate);
    
    if(req.body.alarm) obj.alarm =new Date(req.body.alarm);

    if(req.file) obj.filename = req.file.filename


    await db.documents.updateOne({_id:id},{
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




exports.deleteDocument = async function(req,res,next){
    const {id} = req.params
    try {
        
        await db.documents.deleteOne({_id:id})

        res.status(204).end()
    } catch (error) {
        console.log(error)

        res.status(500).json({
            success:false,
            message:"internal error occured",
        })
    }
}