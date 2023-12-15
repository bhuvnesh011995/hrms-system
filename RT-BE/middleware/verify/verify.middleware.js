const jwt = require("jsonwebtoken");
const { deletedToken } = require("../../store");
const { create_error } = require("../../utility/create_error");
require("dotenv").config();


exports.verifyToken = async function(req,res,next){
    const token = req.headers["x-access-token"]
try {
    if(deletedToken.includes(token)) throw create_error(401,"login again")
    if(!token) throw create_error(401,"login again")
    
    jwt.verify(token,process.env.SECRET_KEY,(err,decode)=>{
        if(err) throw create_error(401,"login again")

        req.username = decode.username;
        req.role = decode.role
        req.id = decode.id

        next()
    })

} catch (error) {
    next(error)
} 
}