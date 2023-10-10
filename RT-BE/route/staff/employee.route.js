const employeeController = require("../../controller/staff/employee.controller")


module.exports = async function(app){
    app.post("/rt/api/v1/employee/",[],employeeController.addEmployee)
    app.get("/rt/api/v1/employee/:id",[],employeeController.getAllEmployee)
    app.put("/rt/api/v1/employee/:id",[],employeeController.updateEmployee)
    app.delete("/rt/api/v1/employee/:id",[],employeeController.deleteEmployee)
}