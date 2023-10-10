const departmentController = require("../controller/department.controller")
const middleware = require("../middleware")

module.exports = async function(app){
    app.post("/rt/api/v1/department/",[middleware.customFieldValidateId("company")],departmentController.addDepartment)
    app.get("/rt/api/v1/department/:id",[middleware.validateId],departmentController.getAllDepartment)
    app.put("/rt/api/v1/department/:id",[middleware.validateId,middleware.customFieldValidateId("company")],departmentController.updateDepartment)
    app.delete("/rt/api/v1/department/:id",[middleware.validateId],departmentController.deleteDepartment)
}