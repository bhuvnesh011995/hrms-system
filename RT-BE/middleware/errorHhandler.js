module.exports = (err,req,res,next)=>{
    const status = err.status || err.statusCode || 500;
    const message = err.message || "server error"

    res.status(status).json({message})
    next()
}