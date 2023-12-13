const db = require("../../model")

exports.addEmployeeExit = async (req,res,next)=>{
    console.log(req.body)
    try {
        let obj = {}
        
        if(req.body.company) obj.company = req.body.company
        if(req.body.employeeToExit) obj.employeeToExit = req.body.employeeToExit
        if(req.body.exitDate) obj.exitDate = req.body.exitDate
        if(req.body.typeofExit) obj.typeofExit = req.body.typeofExit
        if(req.body.exitInterview) obj.exitInterview = req.body.exitInterview
        if(req.body.disableAccount) obj.disableAccount = req.body.disableAccount
        if(req.body.description) obj.description = req.body.description


        await db.employeeexit.create(obj)
        
        res.status(201).end()

    } catch (error) {
        console.log(error)

        res.status(500).json({
            success:false,
            message:"internal error occured"
        })
    }
}

exports.getAllEmployeeExit = async (req,res,next)=>{
    try{
      const employeeExitRecords = await db.employeeexit.find();
      res.status(200).json({
        data:employeeExitRecords,
      })

    }
    catch(error){
        res.status(500).json({
            success: false,
            message:"Internal error occurred"
        });
    }
}
