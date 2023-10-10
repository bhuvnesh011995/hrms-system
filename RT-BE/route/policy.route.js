const policyController = require("../controller/policy.controller")
const {upload} = require("../app")

module.exports = function (app){
    app.post("/rt/api/v1/policy/",[upload.single("file")],policyController.addPolicy)
    app.get("/rt/api/v1/policy/:id",[],policyController.getAllPolicy)
    app.put("/rt/api/v1/policy/:id",[upload.single("file")],policyController.updatePolicy)
    app.delete("/rt/api/v1/policy/:id",[],policyController.deletePolicy)
}