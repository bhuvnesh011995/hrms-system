const awardController = require("../../controller/coreHR/award.controller")
const {upload} = require("../../app")

module.exports = function(app){
    app.post("/rt/api/v1/award/",[upload.single("file")],awardController.addAward)
    app.get("/rt/api/v1/award/:id",[],awardController.getAllAward)
    app.put("/rt/api/v1/award/:id",[upload.single("file")],awardController.updateAward)
    app.delete("/rt/api/v1/award/:id",[],awardController.deleteAward)
}