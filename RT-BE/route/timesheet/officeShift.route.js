const shiftController = require("../../controller/timesheet/officeShift.controller")
const midware = require("../../middleware")

module.exports = function(app){
    app.post("/rt/api/v1/shift",[midware.verifyToken],shiftController.addShift)
    app.get("/rt/api/v1/shift",[],shiftController.getAllShift)
    app.put("/rt/api/v1/shift/:id",[],shiftController.updateShift)
    app.delete("/rt/api/v1/shift/:id",[],shiftController.deleteShift)
}