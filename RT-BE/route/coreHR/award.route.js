const awardController = require("../../controller/coreHR/award.controller")
const {upload} = require("../../app")
const midware = require("../../middleware")


module.exports = function(app){
    app.post("/rt/api/v1/award",[upload.single("img"),midware.verifyToken],awardController.addAward)
    app.get("/rt/api/v1/award",[],awardController.getAllAward)
    app.put("/rt/api/v1/award/:id",[upload.single("file")],awardController.updateAward)
    app.delete("/rt/api/v1/award/:id",[],awardController.deleteAward)
}