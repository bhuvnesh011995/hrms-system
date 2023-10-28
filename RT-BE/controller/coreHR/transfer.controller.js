const db = require("../../model")
const utility = require("../../utility")

exports.addTransfer = async function(req,res,next){

    try {
        
        let modules = await db.modules.findOne({})

        let employee = await db.employee.findOne({_id:req.body.employee})
        
        let obj ={employee:req.body.employee,company:req.body.company}
        obj.from ={
            department:employee.department,location:employee.location
         }
        let obj2 = {}
        if(employee.subdepartment) obj.from.subdepartment =  employee.subdepartment
        
        if(modules.subdepartment && req.body.subdepartment){
            obj = {...obj,"to.subdepartment":req.body.subdepartment}
            
            obj2 ={...obj2,subdepartment:req.body.subdepartment}
        }else if(!modules.subdepartment) obj2 = {...obj2,subdepartment:null}


        if(req.body.department){
            obj = {...obj,"to.department":req.body.department}

            obj2 ={...obj2,department:req.body.department}
            }else obj = {...obj,"to.department":employee.department}
        if(req.body.location){
            obj = {...obj,"to.location":req.body.location}

            obj2 ={...obj2,location:req.body.location}
            }else obj = {...obj,"to.location":employee.location}

        if(req.body.date) obj.date = req.body.date
        if(req.body.description) obj.description = req.body.description

        


        
        
       obj.addedBy=req.id


        await db.transfer.create(obj)
        await db.employee.updateOne({_id:req.body.employee},{
            $set:obj2
        })
        res.status(201).end()


    } catch (error) {
        console.log(error)

        res.status(500).json({
            success:false,
            message:"internal error occured",
        })
    }
}






exports.getAllTransfer = async function(req,res,next){

    try {


        let transfers = await db.transfer.find().populate([
            {path:"company",select:"name"},
            {path:"to.department",select:"name"},
            {path:"to.subdepartment",select:"name"},
            {path:"to.location",select:"name"},
            {path:"from.department",select:"name"},
            {path:"from.subdepartment",select:"name"},
            {path:"from.location",select:"name"},
            {path:"employee",select:"fName lName"}
    ])

        res.status(200).json(transfers)

    } catch (error) {
        console.log(error)

        res.status(500).json({
            success:false,
            message:"internal error occured",
        })
    }
}




exports.updateTransfer = async function(req,res,next){

    try {
        const {id} = req.params // transfer id
// employee and company is not going to be updated instead of changing employee delete a transfer and create a new transfer for the employee because from(transfer from) is not changing here by code
let modules = await db.modules.findOne({})
        let obj = {}
        let obj2 ={}
        if(modules.subdepartment && req.body.subdepartment){
            obj = {...obj,"to.subdepartment":req.body.subdepartment}

            obj2 ={...obj2,subdepartment:req.body.subdepartment}
        }

       if(req.body.department){
            obj = {...obj,"to.department":req.body.department}

            obj2 ={...obj2,department:req.body.department}
           }
       if(req.body.location){
            obj = {...obj,"to.location":req.body.location}
            
            obj2 ={...obj2,location:req.body.location}
           }
       
        if(req.body.date) obj.date = req.body.date
        if(req.body.description) obj.description = req.body.description

        if(req.body.status) obj.status = req.body.status

        await db.transfer.updateOne({_id:id},{
            $set:obj
        })
        if(Object.keys(obj2).length) await db.employee.updateOne({_id:req.body.employee},{
            $set:obj2
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




exports.deleteTransfer = async function(req,res,next){

    try {
        const {id} = req.params // transfer id

        await db.transfer.deleteOne({_id:id})

        res.status(204).end()

    } catch (error) {
        console.log(error)

        res.status(500).json({
            success:false,
            message:"internal error occured",
        })
    }
}