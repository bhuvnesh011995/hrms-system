const employeeexitController = require("../../controller/staff/employeeexit.controller")
const { employeeexit } = require("../../model")


module.exports = async function(app){
    app.post("/rt/api/v1/employeeexit",[],employeeexitController.addEmployeeExit)
    app.get("/rt/api/v1/employeeexit",[],employeeexitController.getAllEmployeeExit)
    app.delete("/rt/api/v1/employeeexit/:id",employeeexitController.deleteEmployeeExit)
}