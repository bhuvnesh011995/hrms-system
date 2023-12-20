const db = require("../../model");
const utility = require("../../utility");
const bcrypt = require("bcrypt");
const { create_error } = require("../../utility/create_error");

exports.addEmployee = async function (req, res, next) {
  try {
    let obj = {};

    if (req.body.fName) obj.fName = req.body.fName;
    if (req.body.lName) obj.lName = req.body.lName;

    if (req.body.username) obj.username = req.body.username;

    if (req.body.email) obj.email = req.body.email;

    if (req.body.DOB) obj.DOB = new Date(req.body.DOB);

    if (req.body.phone) obj.phone = req.body.phone;

    if (req.body.role) obj.role = req.body.role;

    if (req.body.reportTo) obj.reportTo = req.body.reportTo;

    if (req.body.passport) obj.passport = req.body.passport;

    if (req.body.address) obj.address = req.body.address;

    if (req.body.immigrationStatus)
      obj.immigrationStatus = req.body.immigrationStatus;

    if (req.body.prEffectiveDate)
      obj.prEffectiveDate = new Date(req.body.prEffectiveDate);

    if (req.body.dateOfJoining)
      obj.dateOfJoining = new Date(req.body.dateOfJoining);

    if (req.body.confirmationDate)
      obj.confirmationDate = new Date(req.body.confirmationDate);

    if (req.body.gender) obj.gender = req.body.gender;

    if (req.body.password) obj.password = bcrypt.hashSync(req.body.password, 8);

    if (req.body.identification) obj.identification = req.body.identification;

    if (req.body.vaccination) obj.vaccination = req.body.vaccination;
    if (req.body.status) obj.status = req.body.status;

    if (req.body.company) obj.company = req.body.company;
    if (req.body.location) obj.location = req.body.location;
    if (req.body.department) obj.department = req.body.department;

    if (req.body.designation) obj.designation = req.body.designation;
    if (req.body.shift) obj.shift = req.body.shift;
    if (req.body.subdepartment) obj.subdepartment = req.body.subdepartment;

    if (req.body.workPermitNumber)
      obj.workPermitNumber = req.body.workPermitNumber;
    if (req.body.employeeId) obj.employeeId = req.body.employeeId;
    obj.addedBy = req.id;

    await db.employee.create(obj);

    res.status(201).end();
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: "internal error occoured",
    });
  }
};

exports.getAllEmployee = async function (req, res, next) {
  try {
    let employees = await db.employee
      .find({})
      .select("-password")
      .populate([
        { path: "company", select: "name" },
        { path: "shift", select: "name" },
        { path: "department", select: "name" },
        { path: "designation", select: "name" },
        { path: "subdepartment", select: "name" },
        { path: "location", select: "name" },
        { path: "reportTo", select: "fName lName" },
        { path: "role", select: "name status" },
      ]);

    res.status(200).json(employees);
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: "internal error occoured",
    });
  }
};

exports.updateEmployee = async function (req, res, next) {
  try {
    const { id } = req.params;
    if (req.body.password != undefined)
      throw create_error(400, "cannot change password, use different method");
    let obj = { ...req.body };
    if (obj.identification?.name)
      obj["identification.name"] = obj.identification.name;
    if (obj.identification?.number)
      obj["identification.number"] = obj.identification.number;

    // if (req.body.fName) obj.fName = req.body.fName;

    // if (req.body.lName) obj.lName = req.body.lName;

    // if (req.body.username) obj.username = req.body.username;

    // if (req.body.email) obj.email = req.body.email;

    // if (req.body.DOB) obj.DOB = new Date(req.body.DOB);

    // if (req.body.phone) obj.phone = req.body.phone;

    // if (req.body.role) obj.role = req.body.role;

    // if (req.body.reportTo) obj.reportTo = req.body.reportTo;

    // if (req.body.passport) obj.passport = req.body.passport;

    // if (req.body.address) obj.address = req.body.address;

    // if (req.body.immigrationStatus)
    //   obj.immigrationStatus = req.body.immigrationStatus;

    // if (req.body.prEffectiveDate)
    //   obj.prEffectiveDate = new Date(req.body.prEffectiveDate);

    // if (req.body.dateOfJoining)
    //   obj.dateOfJoining = new Date(req.body.dateOfJoining);

    // if (req.body.confirmationDate)
    //   obj.confirmationDate = new Date(req.body.confirmationDate);

    // if (req.body.gender) obj.gender = req.body.gender;

    // if (req.body.password) obj.password = bcrypt.hashSync(req.body.password, 8);

    // if (req.body.identification?.number)
    //   obj["idendification.number"] = req.body.identification.number;
    // if (req.body.identification?.name)
    //   obj["idendification.name"] = req.body.identification.name;

    // if (req.body.vaccination) obj.vaccination = req.body.vaccination;

    // if (req.body.company) obj.company = req.body.company;
    // if (req.body.location) obj.location = req.body.location;
    // if (req.body.department) obj.department = req.body.department;

    // if (req.body.designation) obj.designation = req.body.designation;
    // if (req.body.shift) obj.shift = req.body.shift;
    // if (req.body.subdepartment) obj.subdepartment = req.body.subdepartment;
    // if (req.body.workPermitNumber)
    //   obj.workPermitNumber = req.body.workPermitNumber;
    // if (req.body.employeeId) obj.employeeId = req.body.employeeId;

    await db.employee.updateOne(
      { _id: id },
      {
        $set: req.body,
      }
    );

    res.status(204).end();
  } catch (error) {
    console.log(error);

    next(error);
  }
};

exports.deleteEmployee = async function (req, res, next) {
  try {
    const { id } = req.params;

    await db.employee.deleteOne({ _id: id });

    res.status(204).end();
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: "internal error occoured",
    });
  }
};

exports.getEmployeeByCompany = async (req, res, next) => {
  try {
    const { id } = req.params;

    let employees = await db.employee
      .find({ company: id })
      .select("fName lName");

    res.status(200).json(employees);
  } catch (error) {
    console.log(error);

    res.status(500).json({ success: false, message: "internal error occured" });
  }
};

exports.getEmployeeDetailById = async (req, res, next) => {
  try {
    let employee = await db.employee
      .findOne({ _id: req.params.id })
      .select("-password")
      .lean();

    res.status(200).json(employee);
  } catch (error) {
    console.log(error);

    res.status(500).json({ success: false, message: "internal error occured" });
  }
};

// get all employee not details
exports.getOnlyEmployee = async (req, res, next) => {
  try {
    let employees = await db.employee.aggregate([
      {
        $lookup: {
          from: "role",
          localField: "role",
          foreignField: "_id",
          as: "role",
        },
      },
      {
        $unwind: "$role",
      },
      { $project: { fName: true, lName: true, role: "$role.name" } },
    ]);
    res.status(200).json(employees);
  } catch (error) {
    next(error);
  }
};
