const { upload } = require('../../app')
const themeController=require('../../controller/theme.controller')

module.exports = function(app){
   app.get("/rt/api/v1/themeSettings",[],themeController.getThemeSetting)
   app.put("/rt/api/v1/themeSettings/:type",[upload.fields([{ name:"systemLogo", maxCount: 1 },{ name:"favicon", maxCount: 1 }, { name:"logo", maxCount: 1 }, { name:"payRollLogo", maxCount: 1 }])],themeController.updateThemeSetting)
}

