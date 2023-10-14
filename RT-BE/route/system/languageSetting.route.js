const languageController=require('../../controller/languageController')

module.exports = app =>{
    app.get("/rt/api/language/modules/:id",[],languageController.getByTheId)
    app.get("/rt/api/languange",[],languageController.getAllTheLanguage)
    app.put("/rt/api/v1/language/modules",[],languageController.updateTheDetails)

}