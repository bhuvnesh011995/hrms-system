const housingKeepingController = require("../../../controller/staff/EmployeeBenefit/houseKeeping.controller")

module.exports = async function(app){
    app.post("/rt/api/v1/housingKeeping",[],housingKeepingController.addHousingKeeping)

}