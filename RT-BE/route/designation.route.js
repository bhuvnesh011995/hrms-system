const designationController = require("../controller/designation.controller")


module.exports = function (app){
    app.post("/rt/api/v1/designation/",[],designationController.addDesignation)
    app.get("/rt/api/v1/designation/:id",[],designationController.getAllDesignation)
    app.put("/rt/api/v1/designation/:id",[],designationController.updateDesignation)
    app.delete("/rt/api/v1/designation/:id",[],designationController.deleteDesignation)
}