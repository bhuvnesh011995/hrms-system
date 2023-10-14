module.exports = {
    employee:require("./staff/employee.model"),
    role:require("./role.model"),
    constant:require("./system/constant.model"),
    company:require("./company.model"),
    department:require("./department.model"),
    subdepartment:require("./subdepartment.model"),
    location:require("./location.model"),
    policy:require("./policy.model"),
    designation:require("./designation.model"),
    announcement:require("./announcements.model"),
    documents:require("./documents.model"),
    officeShift:require("./timesheet/officeShift.model"),
    award:require("./coreHR/award.model"),
    transfer:require("./coreHR/transfer.model"),
    paymentGateway:require("./system/paymentGateway.model"),
    system:require("./system/setting/system.model"),
    constants:require("./system/constatntModels"),
    modules:require("./system/modules/modules.model"),

    themes:require('./system/themeSetting.model'),
    language:require('./system/language.model')

    themes:require('./system/themeSetting.model')

}