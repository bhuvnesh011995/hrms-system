const terminationController = require("../../controller/coreHR/termination.controller")
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
    app.get("/rt/api/v1/termination",[midware.verifyToken,],terminationController.getAllTerminations)
    app.post("/rt/api/v1/termination",[midware.verifyToken, upload.array("files")],terminationController.addTermination)
    app.put("/rt/api/v1/termination/:id",[upload.array("files")],terminationController.updateTermination)
    app.delete("/rt/api/v1/termination/:id",[],terminationController.deleteTermination)
    app.delete("/rt/api/v1/termination/file/:filename/:id",[],terminationController.deleteFileFromTermination)
    app.get("/rt/api/v1/termination/:id",[],terminationController.getTerminationById)
}

    