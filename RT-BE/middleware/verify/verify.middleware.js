const jwt = require("jsonwebtoken")
require("dotenv").config();


exports.verifyToken = async function(req,res,next){
    const token = req.headers["x-access-token"]
try {
    if(!token) return res.status(401).end()

    jwt.verify(token,process.env.SECRET_KEY,(err,decode)=>{
        if(err) return res.status(401).end()

        req.username = decode.username;
        req.role = decode.role
        req.id = decode.id

    })
    
} catch (error) {
    console.log(error)
    res.status(500).json({
        success:false,
        message:"error occured"
    })
}

next()
    
}