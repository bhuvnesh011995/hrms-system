const constantController = require("../../controller/system/constant.controller")
const middleware = require("../../middleware")


module.exports = function (app){
    app.post("/rt/api/v1/constant/:type",[middleware.validateBody],constantController.addConstant)
    app.get("/rt/api/v1/constant",[],constantController.getAllConstant)
    app.put("/rt/api/v1/constant/:type/:id",[middleware.validateId],constantController.updateConstant)
    app.delete("/rt/api/v1/constant/:type/:id",[middleware.validateId],constantController.deleteConstant)
    app.get("/rt/api/v1/constant/:type",[],constantController.getAConstant)
}