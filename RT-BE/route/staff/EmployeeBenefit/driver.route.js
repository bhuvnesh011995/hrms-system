const driverController = require("../../../controller/staff/EmployeeBenefit/driver.controller")

module.exports = async function(app){
    app.post("/rt/api/v1/driver",[],driverController.addDriver)
    app.get("/rt/api/v1/driver",[],driverController.getAllDriver)
    app.delete("/rt/api/v1/driver/:id",[],driverController.deleteDriver)


}