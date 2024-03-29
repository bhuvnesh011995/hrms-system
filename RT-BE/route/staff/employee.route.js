const multer = require("multer");
const employeeController = require("../../controller/staff/employee.controller");
let storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public");
  },
  filename: (req, file, cb) => {
    let uniqueName;
    console.log(file);
    uniqueName = "img-" + Date.now() + "." + file.mimetype.split("/")[1];
    cb(null, "uploads/" + uniqueName);
  },
});

let upload = multer({ storage });

module.exports = async function (app) {
  app.post("/rt/api/v1/employee/", [], employeeController.addEmployee);
  app.get("/rt/api/v1/employee", [], employeeController.getAllEmployee);
  app.put(
    "/rt/api/v1/employee/:id",
    [upload.single("avatar")],
    employeeController.updateEmployee
  );
  app.delete("/rt/api/v1/employee/:id", [], employeeController.deleteEmployee);
  app.get(
    "/rt/api/v1/employee/:id",
    [],
    employeeController.getEmployeeByCompany
  );
  app.get(
    "/rt/api/v1/company/employee/:id",
    [],
    employeeController.getEmployeeDetailById
  );
  app.get("/rt/api/v1/employees", employeeController.getOnlyEmployee);
};
