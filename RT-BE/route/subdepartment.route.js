const subdepartmentController = require("../controller/subdepartment.controller")
const middleware = require("../middleware")

module.exports = function(app){
    app.post("/rt/api/v1/subdepartment/",[middleware.customFieldValidateId("department")],subdepartmentController.addSubdepartment)
    app.get("/rt/api/v1/subdepartment",[middleware.validateId],subdepartmentController.getAllSubdepartment) // passing department id to get all its subdepartment
    app.put("/rt/api/v1/subdepartment/:id",[middleware.validateId,middleware.customFieldValidateId("department")],subdepartmentController.updateSubdepartment)
    app.delete("/rt/api/v1/subdepartment/:id",[middleware.validateId],subdepartmentController.deleteSubdepartment)
}