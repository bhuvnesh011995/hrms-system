const complaintController = require("../../controller/coreHR/complaint.controller")
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
    app.get("/rt/api/v1/complaint",[midware.verifyToken,],complaintController.getAllComplaints)
    app.post("/rt/api/v1/complaint",[midware.verifyToken, upload.array("files")],complaintController.addComplaint)
    app.put("/rt/api/v1/complaint/:id",[upload.array("files")],complaintController.updateComplaint)
    app.delete("/rt/api/v1/complaint/:id",[],complaintController.deleteComplaint)
    app.delete("/rt/file/:filename/:id",[],complaintController.deleteFileFromComplaint)
}

    