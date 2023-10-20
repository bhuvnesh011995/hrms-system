const controller = require("../controller/grouping.controller")
const midware = require("../middleware")

module.exports = app=>{
    app.post("/rt/api/v1/grouping",[midware.verifyToken],controller.addGrouping)
    app.get("/rt/api/v1/grouping",[],controller.getAllGrouping)
    app.put("/rt/api/v1/grouping/:id",[],controller.updateGrouping)
    app.delete("/rt/api/v1/grouping/:id",[],controller.deleteGrouping)

}