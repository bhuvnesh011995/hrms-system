const travelController = require("../../controller/coreHR/travel.controller")

const midware = require("../../middleware")


module.exports = function(app){
    app.post("/rt/api/v1/travel",[midware.verifyToken],travelController.addTravel)
    app.get("/rt/api/v1/travel",[],travelController.getAllTravels)
    app.put("/rt/api/v1/travel/:id",[],travelController.updateTravel)
    app.delete("/rt/api/v1/travel/:id",[],travelController.deleteTravel)
}