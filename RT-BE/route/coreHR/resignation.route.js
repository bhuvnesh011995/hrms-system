const resignationController = require("../../controller/coreHR/resignation.controller")

const midware = require("../../middleware")


module.exports = function(app){
    app.post("/rt/api/v1/resignation",[midware.verifyToken],resignationController.addResignation)
    app.get("/rt/api/v1/resignation",[],resignationController.getAllResignations)
    app.put("/rt/api/v1/resignation/:id",[],resignationController.updateResignation)
    app.delete("/rt/api/v1/resignation/:id",[],resignationController.deleteResignation)
}