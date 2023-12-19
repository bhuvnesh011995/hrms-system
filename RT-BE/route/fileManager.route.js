// const { upload } = require("../app");
const fileManagerController = require("../controller/fileManager.controller");

const multer = require("multer");

let storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/files");
  },
  filename: (req, file, cb) => {
    let uniqueName;
    uniqueName = "file-" + Date.now() + "." + file.mimetype.split("/")[1];
    cb(null, uniqueName);
  },
});

upload = multer({ storage });

module.exports = (app) => {
  app.post(
    "/rt/api/v1/fileManager/addNewFile",
    upload.array("files"),
    fileManagerController.addNewFile,
  );
  app.get(
    "/rt/api/v1/fileManager/getAllFiles/:department",
    [],
    fileManagerController.getAllFiles,
  );
  app.delete(
    "/rt/api/v1/fileManager/deleteFile/:id",
    [],
    fileManagerController.deleteFile,
  );
};
