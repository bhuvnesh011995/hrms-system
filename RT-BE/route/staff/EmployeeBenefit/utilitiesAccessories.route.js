const utilitiesAccessoriesController = require("../../../controller/staff/EmployeeBenefit/utilitiesAccessories.controller")

module.exports = async function(app){
    app.post("/rt/api/v1/utilitiesAccessories",[],utilitiesAccessoriesController.addUtilitiesAccessories)
    app.get("/rt/api/v1/utilitiesAccessories/",[],utilitiesAccessoriesController.getAllUtilitiesAccessories)  
    app.delete("/rt/api/v1/utilitiesAccessories/:id",[],utilitiesAccessoriesController.deleteAllUtilitiesAccessories)

}