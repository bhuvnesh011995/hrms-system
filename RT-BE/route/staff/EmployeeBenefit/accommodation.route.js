const accommodationController = require("../../../controller/staff/EmployeeBenefit/accommodation.controller")

module.exports = async function(app){
    app.post("/rt/api/v1/accommodation",[],accommodationController.addAccommodation)
    app.get("/rt/api/v1/accommodation/",[],accommodationController.getAccommodation)  
    app.delete("/rt/api/v1/accommodation/:id",[],accommodationController.deleteAccommodation)
}