module.exports = (app) => {
  require("./auth.route")(app);
  require("./role.route")(app);
  require("./system/constant.route")(app);
  require("./company.route")(app);
  require("./department.route")(app);
  require("./subdepartment.route")(app);
  require("./location.route")(app);
  require("./announcement.route")(app);
  require("./designation.route")(app);
  require("./documents.route")(app);
  require("./policy.route")(app);
  require("./timesheet/officeShift.route")(app);
  require("./coreHR/award.route")(app);
  require("./staff/employee.route")(app);
  require("./coreHR/transfer.route")(app);
  require("./system/paymentGateway.route")(app);
  require("./system/setting/system.route")(app);

  require("./system/modules.route")(app);

  require("./system/themeSetting.route")(app);
  require("./system/languageSetting.route")(app);
  require("./system/system.route")(app);
  require("./grouping.route")(app);
  require("./coreHR/resignation.route")(app);
  require("./coreHR/travel.route")(app);
  require("./coreHR/promotion.route")(app);
  require("./coreHR/complaint.route")(app);
  require("./coreHR/warning.route")(app);
  require("./coreHR/termination.route")(app);
};
