const systemController = require("../../controller/system/AllSetting.controller")



module.exports = function(app){
    app.get("/rt/api/v1/system/setting",systemController.getAllSetting)
}