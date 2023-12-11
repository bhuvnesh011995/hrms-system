const warningController = require("../../controller/coreHR/warning.controller")
const multer = require("multer")
const midware = require("../../middleware")


let storage = multer.diskStorage({
    destination:(req,file,cb)=>{
      cb(null,"public/files")
    },
    filename:(req,file,cb)=>{
      let uniqueName
      uniqueName = "file-"+Date.now()+"."+file.mimetype.split("/")[1]
      cb(null,uniqueName)
    }
  })

    upload = multer({ storage });

module.exports = app=>{
    app.get("/rt/api/v1/warning",[midware.verifyToken,],warningController.getAllWarnings)
    app.post("/rt/api/v1/warning",[midware.verifyToken, upload.array("files")],warningController.addWarning)
    app.put("/rt/api/v1/warning/:id",[upload.array("files")],warningController.updateWarning)
    app.delete("/rt/api/v1/warning/:id",[],warningController.deleteWarning)
    app.delete("/rt/api/v1/warning/file/:filename/:id",[],warningController.deleteFileFromWarning)
    app.get("/rt/api/v1/warning/:id",[],warningController.getWarningById)
}

    