const themeController=require('../../controller/theme.controller')

module.exports = function(app){
   app.get("/rt/api/v1/themeSettings",[],themeController.getThemeSetting)
    app.put("/rt/api/v1/themeSettings",[],themeController.updateThemeSetting)
}

