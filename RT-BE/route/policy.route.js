const policyController = require("../controller/policy.controller")
const multer = require("multer")


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


    const midware = require("../middleware")
module.exports = function (app){
    app.post("/rt/api/v1/policy",[upload.single("file"),midware.verifyToken],policyController.addPolicy)
    app.get("/rt/api/v1/policy",[],policyController.getAllPolicy)
    app.put("/rt/api/v1/policy/:id",[upload.single("file")],policyController.updatePolicy)
    app.delete("/rt/api/v1/policy/:id",[],policyController.deletePolicy)
}


