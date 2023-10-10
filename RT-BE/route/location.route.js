const locationController = require("../controller/location.controller")


module.exports = function(app){
    app.post("/rt/api/v1/location/",[],locationController.addLocation)
    app.get("/rt/api/v1/location/:id",[],locationController.getAllLocation)
    app.put("/rt/api/v1/location/:id",[],locationController.updateLocation)
    app.delete("/rt/api/v1/location/:id",[],locationController.deleteLocation)
}