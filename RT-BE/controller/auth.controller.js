const db = require("../model")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
require("dotenv").config()


exports.login = async function (req,res,next){
    const {username,password} = req.body
try {
    const user = await db.employee.findOne({username:username})

    if(!user ) return res.status(401).end()

    const isValid = bcrypt.compareSync(password,user.password);

    if(!isValid) return res.status(401).end();

    let token = jwt.sign({username,role:user.type,id:user._id},process.env.SECRET_KEY,{expiresIn:"1d"})

    let obj = {success:true, accessToken:token,username,name:user.fName +" "+ user.lName,email:user.email || "",role:user.type}

    res.status(200).json(obj)
} catch (error) {
    console.log(error)
    res.status(500).json({
        success:false,
        message:"server error"
    })
}
    
}


exports.forgetPassword = async function (req,res,next){
    const {username,password} = req.body

    try {
        await db.employee.findOneAndUpdate({username},{
            $set:{password:bcrypt.hashSync(password,8)}
        })

        res.status(204).end()

    } catch (error) {
        console.log(error)
        res.status(500).json({
        success:false,
        message:"server error"
    })
    }
}



exports.verified = async function(req,res,next){
    res.status(200).json({
        success:true
    })
}