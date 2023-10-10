const transferContoroller = require("../../controller/coreHR/transfer.controller")


module.exports = function (app){
    app.post("rt/api/v1/transfer/:id",[],transferContoroller.addTransfer) //employee id

    app.get("rt/api/v1/transfer/:id",[],transferContoroller.getAllTransfer) //company id

    app.put("rt/api/v1/transfer/:id",[],transferContoroller.updateTransfer) //employee id
    app.delete("rt/api/v1/transfer/:id",[],transferContoroller.deleteTransfer) //employee id
}