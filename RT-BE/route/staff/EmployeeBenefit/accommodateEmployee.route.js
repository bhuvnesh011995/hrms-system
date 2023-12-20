const accommodateEmployeeController = require("../../../controller/staff/EmployeeBenefit/accommodatedEmployees")

module.exports = async function(app){
    app.post("/rt/api/v1/accommodatedEmployees",[],accommodateEmployeeController.addAccommodatedEmployee)
    app.get("/rt/api/v1/accommodatedEmployees/",[],accommodateEmployeeController.getAllAccommodatedEmployee)  
    app.delete("/rt/api/v1/accommodatedEmployees/:id",[],accommodateEmployeeController.deleteAccommodatedEmployee)
}