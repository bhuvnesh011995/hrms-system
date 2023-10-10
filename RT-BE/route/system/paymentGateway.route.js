const paymentGatewaycontroller = require("../../controller/system/paymentGatway.controller")
const middleware = require("../../middleware")


module.exports = function(app){
    
    app.put("/rt/api/v1/paymentGateway",[middleware.verifyToken],paymentGatewaycontroller.updatePaymentGateway)
    app.get("/rt/api/v1/paymentGateway",[middleware.verifyToken],paymentGatewaycontroller.getPaymentGateway)

}