const db = require("../model")
const utility = require("../utility")
exports.addRole = async function(req,res,next){
    const {name,permission} = req.body


    try{
        await db.role.create({
            name,permission
        })

        res.status(200).json({
            success:true,
            message:"role is created"
        })
    }catch(err){
        console.log(err)
    }
}


exports.getAllRoles = async function(req,res,next){
    try{
        let roles = await db.role.find({}).select("name permission createdAt")

        res.status(200).json({
            success:true,
            roles
        })
    }catch(err){
        console.log(err)
    }
}


exports.updateRole = async function(req,res,next){
    const {name,permission} = req.body
    const id = req.params.id

   try{
    await db.role.findOneAndUpdate({_id:id},{
        name,permission
    })

    res.status(200).json({
        success:true,
        message:"role updated"
    })
}catch(err){
    console.log(err)
}
}


exports.deleteRole = async function(req,res,next){
    const id = req.params.id

    try{
       if(! await utility.roleExist(id)) return res.status(401).json({
        success:false,
        message:"no role exist"
       })

       await db.employee.deleteMany({type:id})

       await db.role.deleteOne({_id:id})
       

        res.status(204).end()
}catch(err){
    console.log(err)
}
}


exports.getPermissions = async function(req,res,next){
    try {
        if(req.role){
            let role = await db.role.findOne({_id:req.role})
            if(!role) return res.status(204).end()

            res.status(200).json({
                success:true,
                permission:role.permission
            })
        }else return res.status(400).end()
    } catch (error) {
        console.log(error)
        res.status(500).json({
            success:false,
            message:"error occured"
        })
    }

}


    exports.getAllRolesName = async (req,res,next)=>{
        try {
            let roles = await db.role.find({}).select("name")
            res.status(200).json(roles)

        } catch (error) {
            console.log(error)
            res.status(500).json({
                success:false,
                message:"internal error occured"
            })
        }
    }