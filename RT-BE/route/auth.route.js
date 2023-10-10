const authController = require("../controller/auth.controller")



module.exports = function(app){
    app.post("/rt/api/v1/auth/login",[],authController.login)
    app.post("/rt/api/v1/auth/forgetPassword",[],authController.forgetPassword)
    app.get("/rt/api/v1/auth/verify",authController.verified)
}