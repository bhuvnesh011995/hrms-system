const authController = require("../controller/auth.controller")
const middleware = require("../middleware")


module.exports = function(app){
    app.post("/rt/api/v1/auth/login",[],authController.login)
    app.post("/rt/api/v1/auth/forgetPassword",[],authController.forgetPassword)
    app.get("/rt/api/v1/auth/verify",authController.verified)
    app.delete("/rt/api/v1/auth/logout",authController.logout)
    app.get("/rt/api/v1/auth/user",[middleware.verifyToken],authController.getUserDetails)
}