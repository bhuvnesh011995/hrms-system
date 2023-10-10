const db = require("../model")

exports.addDepartment = async function(req,res,next){
    const {
        name,company,location,head
    } = req.body
    try {
        //checking company presence bc company is mandatory
        let companyDoc = await db.company.findOne({_id:company})
        if(!companyDoc) return res.status(400).json({ // if no company won't create depatment
            success:false,
            message:"cannot add department because no company found"
        })

        if(!companyDoc.location.includes(location)) return res.status(400).json({
            success:"false",
            message:"location is not present for the company"
        })

        if(location){
            let locationDoc = await db.location.findOne({_id:location})
            if(!locationDoc) return res.status(400).json({
                success:false,
                message:"pass a vaid location"
            })
        }

        // creating department
        let department = await db.department.create({
            name,company:companyDoc._id,location,head
        })


        // adding department in company if company is passed
        company && await db.company.updateOne({_id:companyDoc._id},{
            $push:{department:department._id}
        })

        res.status(200).json({
            success:true,
            message:"department created successfully"
        })


    } catch (error) {
        console.log(error)

        res.status(500).json({
            success:false,
            message:"error ococured",
            error
        })
    }
}



exports.getAllDepartment = async function(req,res,next){
    try {
        let departments = await db.department.find({company:req.params.id}).populate({path:"company",select:"name"})

        if(!departments || !departments.length) return res.status(200).json({
            success:true,
            message:"no department exist of company"
        })

        res.status(200).json({
            success:true,
            departments
        })
    } catch (error) {
        
    }
}

// .......................NOTE.................
// there is no logic for updateDepartment that for cross checking location available in company as addLocation function

exports.updateDepartment = async function(req,res,next){
    try {
        const {id} = req.params
        let obj = {};
        //checking department presence
        let department = await db.department.findOne({_id:id})

        if(!department) return res.status(400).json({
            success:false,
            message:"no department found"
        })


        if(req.body.name) obj.name = req.body.name
        if(req.body.company){
            let companyDoc = await db.company.findOne({_id:company})
            if(!companyDoc) return res.status(400).json({ // if no company won't create depatment
                success:false,
                message:"cannot update department because no company found"
            })


            // removing id from the department field of  company
            await db.company.updateOne({department:department._id},{
                $pull:{department:department._id}
            })

            // adding id of department in department field of the company
            await db.company.updateOne({_id:companyDoc._id},{
                $push:{department:department._id}
            })

            obj.company = companyDoc._id
        }
        if(req.body.location){
            let locationDoc = await db.location.findOne({_id:req.body.location})
            // checking location presence
            if(!locationDoc) return res.status(400).json({
                success:false,
                message:"cannot update department because no location found"
            })

            obj.location = req.body.location
            }

        if(req.body.head) obj.head = req.body.head

        await db.department.findOneAndUpdate({_id:id},{
            $set:obj
        })




        res.status(200).json({
            success:true,
            message:"department updated successfully"
        })
    } catch (error) {
        console.log(error)

        res.status(500).json({
            success:fasle,
            message:"error occured",
            error
        })
    }
}



exports.deleteDepartment = async function(req,res,next){
    const {id} = req.params

    try {

        let department = await db.department.findOne({_id:id})
        // checking if department exist
        if(!department) return res.status(400).json({
            success:false,
            message:"no department found"
        })


        // removing department from company
        department.company && await db.company.updateOne({department:department._id},{
            $pull:{department:department._id}
        })

        //deleteing department
        await db.department.findOneAndDelete({_id:id})

        // deleteing all related subdepartment
        await db.subdepartment.deleteMany({department:id})

        res.status(200).json({
            success:true,
            message:"department deleted Successfully"
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