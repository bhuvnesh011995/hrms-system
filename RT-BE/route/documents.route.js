const documentController = require("../controller/document.controller")

const midware = require("../middleware")
const multer= require("multer")
let storage = multer.diskStorage({
    destination:(req,file,cb)=>{
      cb(null,"public/files")
    },
    filename:(req,file,cb)=>{
      let uniqueName
      console.log(file)
      uniqueName = "file-"+Date.now()+"."+file.mimetype.split("/")[1]
      cb(null,uniqueName)
    }
  })

    upload = multer({ storage });

module.exports = function (app){
    app.post("/rt/api/v1/document",[upload.single("file"),midware.verifyToken],documentController.addDocument)
    app.get("/rt/api/v1/document",[],documentController.getAllDocument)
    app.put("/rt/api/v1/document/:id",[upload.single("file")],documentController.updateDocument)
    app.delete("/rt/api/v1/document/:id",[],documentController.deleteDocument)
}