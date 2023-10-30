const roleController = require("../controller/role.controller")
const middleware = require('../middleware')


module.exports = function(app){
    app.post("/rt/api/v1/role/",[middleware.verifyToken],roleController.addRole)
    app.get("/rt/api/v1/role/",[middleware.verifyToken],roleController.getAllRoles)
    app.get("/rt/api/v1/rolesName",[middleware.verifyToken],roleController.getAllRolesName)
    app.put("/rt/api/v1/role/:id",[middleware.verifyToken],roleController.updateRole)
    app.delete("/rt/api/v1/role/:id",[middleware.verifyToken],roleController.deleteRole)
    app.get("/rt/api/v1/permissions",[middleware.verifyToken],roleController.getPermissions)
}