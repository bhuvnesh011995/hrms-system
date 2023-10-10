const systemController = require("../../../controller/system/setting/system.controller")


module.exports = function(app){
    app.get("/rt/api/v1/system",[],systemController.getSystem)
    app.put("/rt/api/v1/system",[],systemController.updateSystem)
}