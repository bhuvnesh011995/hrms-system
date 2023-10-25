const announcementController = require("../controller/announcements.controller")
const midware = require("../middleware")

module.exports = function (app){
    app.post("/rt/api/v1/announcement/",[midware.verifyToken],announcementController.addAnnouncement)
    app.get("/rt/api/v1/announcement/",[],announcementController.getAllAnnouncement)
    app.put("/rt/api/v1/announcement/:id",[],announcementController.updateAnnouncement)
    app.delete("/rt/api/v1/announcement/:id",[],announcementController.deleteAnnouncement)
}