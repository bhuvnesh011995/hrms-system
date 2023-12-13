exports.create_error = (statusCode,message)=>{
    let error = new Error(message || "something went wrong")
    error.status = statusCode || 500
     return error
}