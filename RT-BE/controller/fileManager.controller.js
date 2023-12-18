const db = require("../model/index");

const addNewFile = async (req, res, next) => {
  try {
    const { files, body } = req;
    const fileData = JSON.parse(body.fileManagerData);
    const fileManagerData = {
      department: fileData.department,
      fileName: files[0].originalname,
    };

    const departmentFile = await db.fileManager.create(fileManagerData);

    return res.status(200).send(departmentFile);
  } catch (err) {
    console.error(err);
  }
};
const getAllFiles = async (req, res, next) => {
  try {
    const allDepartments = await db.fileManager.aggregate([
      {
        $lookup: {
          from: "department",
          let: { departmentId: "$department" },
          pipeline: [
            {
              $match: {
                $expr: {
                  $eq: [{ $toString: "$_id" }, "$$departmentId"],
                },
              },
            },
          ],
          as: "departmentDetails",
        },
      },
      { $unwind: "$departmentDetails" },
      {
        $project: {
          _id: 1,
          departmentName: "$departmentDetails.name",
          department: 1,
          fileName: 1,
          created_at: 1,
          updated_at: 1,
        },
      },
    ]);
    return res.status(200).send(allDepartments);
  } catch (err) {
    console.error(err);
  }
};
const deleteFile = async (req, res, next) => {
  try {
  } catch (err) {
    console.error(err);
  }
};

module.exports = {
  addNewFile,
  getAllFiles,
  deleteFile,
};
