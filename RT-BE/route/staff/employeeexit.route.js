const employeeexitController = require("../../controller/staff/employeeexit.controller")


module.exports = async function(app){
    app.post("/rt/api/v1/employeeexit",[],employeeexitController.addEmployeeExit)
    app.get("/rt/api/v1/employeeexit",[],employeeexitController.getAllEmployeeExit)
}