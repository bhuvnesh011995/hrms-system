const db = require("../../model")


// // add new constant
// exports.addConstant = async function (req,res,next){
//     // constant type like award/contaract/document/language....
//     const {type} = req.params
    
//     try{
//         // adding the constant according to the type and passing the 
        
//         let obj = {};

//         if(req.body.name) obj.name = req.body.name;
//         if(req.body.code) obj.code = req.body.code;
//         if(req.body.symbol) obj.symbol = req.body.symbol;
//         if(req.body.company) obj.company = req.body.company
       
//          await db.constant.findOneAndUpdate({},{
//                 $push:{
//                     [type]:obj
//                 }
//             })

//             res.status(204).end()
        
    
//     }catch(error){
//         console.log(error)
//         res.status(500).json({
//             success:false,
//             message:"error occoured",
//             error
//         })
//     }
    

// }



// exports.getAllConstant = async function (req,res,next){
//     try{
//         let constants = await db.constant.findOne({})


//         res.status(200).json({
//             success:true,
//             constants
//         })
//     }catch(err){ 
//         console.log(error) 
//         res.status(500).json({
//             success:false,
//             message:"error occoured",
//             error
//         })
    
//     }
// }




// exports.updateConstant = async function(req,res,next){
//     const {type,id} = req.params
//     try{
//         if(type==="currency"){
//             let update = {
//                 $set:{
                    
//                 }
//             }
//             // assigning field to be updated 
//             if(req.body.name ) update.$set[`${type}.$[elem].name`] = req.body.name;
//             if(req.body.code) update.$set[`${type}.$[elem].code`] = req.body.code;
//             if(req.body.symbol) update.$set[`${type}.$[elem].symbol`] = req.body.symbol;
            
//             await db.constant.findOneAndUpdate({},update,{
//                 new:true,
//                 arrayFilters:[{ 'elem._id': id }]
//             })
//         }else{
//             let updateField = `${type}.$[elem].name`
//             await db.constant.findOneAndUpdate({},{
//                 $set:{
//                     [updateField] : req.body.name
//                 }
//             },{
//                 new:true,
//                 arrayFilters:[{ 'elem._id': id }]
//             })
            
            
//         }

//         res.status(200).json({
//             success:true,
//             message:`${type} is updated Successfully`
//         })
//     }catch(error){
//         res.status(500).json({
//             success:false,
//             message:"error occoured",
//             error
//         })
//     }
// }


// exports.deleteConstant = async function (req,res,next){
//     const {type,id} = req.params

//     try{
//         await db.constant.findOneAndUpdate({},{
//             $pull:{
//                 [type]:{_id:id}
//             }
//         },{new:true})

//         res.status(204).end()
//     }catch(error){
//         console.log(error)
//         res.status(500).json({
//             success:false,
//             message:"error occoured",
//             error
//         })
//     }
// }






exports.getAllConstant = async (req,res,next)=>{
    try {
        // console.log(await Promise.all([db.constants.contract.find(),db.constants.eduction.find(),]))
        let [contract,education,language,skill,document,award,religion,leave,warning,termination,expense,income,employeeExit,travelArrangement,currency,security,claim,company,country] = await Promise.all([
            db.constants.contract.find(),
            db.constants.education.find(),
            db.constants.language.find(),
            db.constants.skill.find(),
            db.constants.document.find(),
            db.constants.award.find(),
            db.constants.religion.find(),
            db.constants.leave.find(),
            db.constants.warning.find(),
            db.constants.termination.find(),
            db.constants.expense.find(),
            db.constants.income.find(),
            db.constants.employeeExit.find(),
            db.constants.travelArrangement.find(),
            db.constants.currency.find(),
            db.constants.security.find(),
            db.constants.claim.find(),
            db.constants.company.find(),
            db.constants.country.find()
        ])


        res.status(200).json({
            success:true,
            constants:{
                contract,education,language,skill,document,award,religion,leave,warning,termination,expense,income,employeeExit,travelArrangement,currency,security,claim,company,country
            }
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            success:false,
            message:"error occured"
        })
    }
}



exports.addConstant = async (req,res,next)=>{
    const {type} = req.params

    try {
        let obj = {};

        if(req.body.name) obj.name = req.body.name;
        if(req.body.code) obj.code = req.body.code;
        if(req.body.symbol) obj.symbol = req.body.symbol;
        if(req.body.company) obj.company = req.body.company

        await db.constants[type].create(obj)

        res.status(204).end()

    } catch (error) {
        console.log(error)
        res.status(500).json({
            success:false,
            message:"error occured"
        })
    }
}


exports.updateConstant = async (req,res,next)=>{
    const {type,id} = req.params

    try {
        let obj ={}
        if(req.body.name) obj.name = req.body.name;
        if(req.body.code) obj.code = req.body.code;
        if(req.body.symbol) obj.symbol = req.body.symbol;
        if(req.body.company) obj.company = req.body.company

        await db.constants[type].findOneAndUpdate({_id:id},{
            $set:obj
        })

        res.status(204).end()

    } catch (error) {
        console.log(error)
        res.status(500).json({
            success:false,
            message:"error occured"
        })
    }
}


exports.deleteConstant = async (req,res,next)=>{
    const {type,id} = req.params
    try {
        await db.constants[type].findOneAndDelete({_id:id})

        res.status(204).end()

    } catch (error) {
        console.log(error)
        res.status(500).json({
            success:false,
            message:"error occured"
        })
    }
}



exports.getAConstant = async (req,res,next)=>{
    try {
        const {type} = req.params

        let constant = await db.constants[type].find()

        res.status(200).json({
            success:true,
            constant
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            success:false,
            message:"error occured"
        })
    }
}