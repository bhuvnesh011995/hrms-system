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

    const newDepartment = await db.fileManager.aggregate([
      {
        $match: {
          $expr: {
            $eq: ["$_id", departmentFile._id],
          },
        },
      },
      {
        $lookup: {
          from: "department",
          let: { departmentId: departmentFile.department },
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
    return res.status(200).send(newDepartment[0]);
  } catch (err) {
    console.error(err);
  }
};
const getAllFiles = async (req, res, next) => {
  try {
    // console.log(req.params.department);
    const departmentFileAggregation = [];

    if (req.params.department && req.params.department != "allDepartment") {
      departmentFileAggregation.push({
        $match: {
          $expr: {
            $eq: ["$department", req.params.department],
          },
        },
      });
    }
    departmentFileAggregation.push(
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
    );

    const allDepartments = await db.fileManager.aggregate(
      departmentFileAggregation,
    );
    console.log(allDepartments);
    return res.status(200).send(allDepartments);
  } catch (err) {
    console.error(err);
  }
};
const deleteFile = async (req, res, next) => {
  try {
    await db.fileManager.deleteOne({ _id: req.params.id });
    return res
      .status(200)
      .send({ message: "department file deleted successfully" });
  } catch (err) {
    console.error(err);
  }
};

module.exports = {
  addNewFile,
  getAllFiles,
  deleteFile,
};
