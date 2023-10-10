const db = require("../model")


exports.addLocation = async function(req,res,next){
    const {
        company,head,name,address1,address2,city,state,country,zipCode,email,phone,faxNumber
    } = req.body;

    try {
        // company is mandatory checking presence
        let companyDoc = await db.company.findOne({_id:company})
        if(!companyDoc) return res.status(400).json({
        success:false,
        message:"no compnay found"
    })

    let address = address1 +" "+address2

// creating location and linking with company
    const location = await db.location.create({
        name,head,address,city,state,country,zipCode,email,phone,faxNumber,company:companyDoc._id
    }) 

    // linking company with location
    await db.company.updateOne({
        _id:companyDoc._id
    },{
        $push:{location:location._id}
    })

    res.status(200).json({
        success:true,
        message:"location created successfully"
    })

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
    const {id} = req.params

    try {
        let locations = await db.location.find({company:id}).populate({path:"company",select:"name"})

        if(!locations || !locations.length) return res.status(400).json({
            success:false,
            message:"no location found of company"
        })

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

    try {
        let obj = {};
        let location = await db.location.findOne({_id:id})

        if(!location) return res.status(400).json({
            success:false,
            message:"cannot update because no location found"
        })
        if(req.body.head) obj.head = req.body.head;
        if(req.body.name) obj.name = req.body.name
        if(req.body.address1 || req.body.address2) obj.address = req.body.address1 + " " + req.body.address2
        if(req.body.city) obj.city = req.body.city
        if(req.body.state) obj.state = req.body.state
        if(req.body.country) obj.country = req.body.country
        if(req.body.zipCode) obj.zipCode = req.body.zipCode
        if(req.body.phone) obj.phone = req.body.phone
        if(req.body.email) obj.email = req.body.email
        if(req.body.faxNumber) obj.faxNumber = req.body.faxNumber
        if(req.body.company){
            // checking presence of company
            let companyDoc = await db.company.findOne({_id:req.body.company})

            if(!companyDoc) return res.status(400).json({
                success:false,
                message:"cannot update because no company found"
            })
            // unlinking location from company
            await db.company.updateOne({_id:companyDoc._id},{$pull:{location:location._id}})


            // linking location to new company

            await db.company.updateOne({_id:req.body.company},{
                $push:{location:location._id}
            })

        }

        //updating the location
        await db.location.updateOne({_id:location._id},{
            $set:obj
        })

        res.status(200).json({
            succeess:true,
            message:"location updated successfully"
        })

    } catch (error) {
        console.log(error)
        res.status(400).json({
            success:false,
            message:"error occured",
            error
        })
    }
}









exports.deleteLocation = async function(req,res,next){
    try {
        const {id} = req.params
        // finding location

        let locationDoc = await db.location.findOne({_id:id})
        
        if(!locationDoc) return res.status(400).json({
            success:false,
            message:"no departmet found to delete"
        })

        await db.company.findOneAndUpdate({_id:locationDoc.company},{
            $pull:{location:locationDoc._id}
        })
        // deleteing location
        await db.location.findOneAndDelete({_id:id})

        // unlinking department from location

        await db.department.updateMany({location:id},{location:null})

        

        res.status(200).json({
            success:true,
            message:"location is deleted and respective department location is empty now"
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