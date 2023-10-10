const modulesController = require("../../controller/system/modules.controller")

module.exports = app =>{
    app.get("/rt/api/v1/system/modules",[],modulesController.getModules)
    app.put("/rt/api/v1/system/modules",[],modulesController.updateModules)
}