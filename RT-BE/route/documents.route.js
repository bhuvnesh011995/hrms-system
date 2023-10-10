const documentController = require("../controller/document.controller")
const {upload} = require("../app")

module.exports = function (app){
    app.post("/rt/api/v1/document/",[upload.single("file")],documentController.addDocument)
    app.get("/rt/api/v1/document/:id",[],documentController.getAllDocument)
    app.put("/rt/api/v1/document/:id",[upload.single("file")],documentController.updateDocument)
    app.delete("/rt/api/v1/document/:id",[],documentController.deleteDocument)
}