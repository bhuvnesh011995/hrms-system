const transferContoroller = require("../../controller/coreHR/transfer.controller")
const midware = require("../../middleware")

module.exports = function (app){
    app.post("/rt/api/v1/transfer",[midware.verifyToken],transferContoroller.addTransfer)

    app.get("/rt/api/v1/transfer",[],transferContoroller.getAllTransfer) 

    app.put("/rt/api/v1/transfer/:id",[],transferContoroller.updateTransfer)

    app.delete("/rt/api/v1/transfer/:id",[],transferContoroller.deleteTransfer)

}