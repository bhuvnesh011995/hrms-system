const languageController=require('../../controller/languageController')

module.exports = app =>{
    app.get("/rt/api/v1/language",[],languageController.getById)
    app.get("/rt/api/v1/languages",[],languageController.getAllTheLanguage)
    app.post("/rt/api/v1/language",[],languageController.addLanguage)
    app.put("/rt/api/v1/language/:id",[],languageController.updateLanguageKey)
    app.delete("/rt/api/v1/language/:id",[],languageController.deleteLanguage)

}