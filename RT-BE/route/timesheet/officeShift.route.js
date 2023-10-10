const shiftController = require("../../controller/timesheet/officeShift.controller")


module.exports = function(app){
    app.post("/rt/api/v1/officeShift/",[],shiftController.addShift)
    app.get("/rt/api/v1/officeShift/:id",[],shiftController.getAllShift)
    app.put("/rt/api/v1/officeShift/:id",[],shiftController.updateShift)
    app.delete("/rt/api/v1/officeShift/:id",[],shiftController.deleteShift)
}