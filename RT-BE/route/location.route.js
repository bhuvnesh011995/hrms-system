const locationController = require("../controller/location.controller")
const midware = require("../middleware")

module.exports = function(app){
    app.post("/rt/api/v1/location/",[midware.verifyToken],locationController.addLocation)
    app.get("/rt/api/v1/location",[],locationController.getAllLocation)
    app.put("/rt/api/v1/location/:id",[],locationController.updateLocation)
    app.delete("/rt/api/v1/location/:id",[],locationController.deleteLocation)
}