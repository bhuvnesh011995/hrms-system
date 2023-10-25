const companyController = require("../controller/company.controller")

const midWare = require("../middleware")
const {upload} = require("../app")

module.exports = function(app){
    app.post("/rt/api/v1/company",[upload.single("logo"),midWare.verifyToken],companyController.addCompany)
    app.get("/rt/api/v1/company",[],companyController.getAllCompany)
    app.put("/rt/api/v1/company/:id",upload.single("logo"),companyController.updateCompany)
    app.delete("/rt/api/v1/company/:id",[],companyController.deleteCompany)
    app.get("/rt/api/v1/companies",[],companyController.getCompanies)

}