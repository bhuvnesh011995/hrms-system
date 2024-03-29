export default [
  {
    name: "HR Dashboard",
    to: "/",
    icon: "bx bx-home-circle",
  },
  {
    name: "Staffs",
    icon: "bx bx-user",
    children: [
      { to: "/staffs/staffDashboard", name: "Staff Dashboard" },
      { to: "/staffs/employees", name: "Employees" },
      { to: "/staffs/employeeBenefit", name: "Employee Benefit" },
      { to: "/staffs/roleAndPrivillage", name: "Roles & Privillage" },
      { to: "/staffs/staffDirectory", name: "Staff Directory" },
      { to: "/staffs/employeeExit", name: "Employees Exit" },
      { to: "/staffs/expiredDocument", name: "Expired Documents" },
      { to: "/staffs/lastLogin", name: "Employee Last Login" },
    ],
  },
  {
    name: "CORE HR",
    icon: "bx bx-briefcase-alt-2",
    children: [
      { to: "/coreHr/awards", name: "Awards" },
      { to: "/coreHr/transfer", name: "Transfer" },
      { to: "/coreHr/resignations", name: "Resignations" },
      { to: "/coreHr/travels", name: "Travels" },
      { to: "/coreHr/promotions", name: "Promotions" },
      { to: "/coreHr/complaints", name: "Complaints" },
      { to: "/coreHr/warnings", name: "Warnings" },
      { to: "/coreHr/terminations", name: "Terminations" },
    ],
  },
  {
    name: "Organizations",
    icon: "bx bx-home-circle",
    children: [
      { to: "/organizations/company", name: "Company" },
      { to: "/organizations/officialDocument", name: "Official Documents" },
      { to: "/organizations/locations", name: "Locations" },
      { to: "/organizations/department", name: "Department" },
      { to: "/organizations/subdepartment", name: "Sub Department" },
      { to: "/organizations/grouping", name: "Grouping" },
      { to: "/organizations/designations", name: "Designations" },
      { to: "/organizations/announcements", name: "Announcements" },
      { to: "/organizations/companyPolicy", name: "Company Policy" },
    ],
  },
  {
    name: "Timesheet",
    icon: "bx bx-time-five",
    children: [
      { to: "/timesheet/timesheetDashboard", name: "Timesheet Dashboard" },
      { to: "/timesheet/attandance", name: "Attandance" },
      { to: "/timesheet/monthlyTimesheet", name: "Monthly Timesheet" },
      { to: "/timesheet/timesheetCalender", name: "Timesheet Calender" },
      { to: "/timesheet/dateWiseAttendance", name: "Date Wise Attendance" },
      { to: "/timesheet/updateAttandance", name: "Update Attandance" },
      { to: "/timesheet/overtimeRequest", name: "Overtime Request" },
      { to: "/timesheet/officeShifts", name: "Office Shifts" },
      { to: "/timesheet/manageHolidays", name: "Manage Holidays" },
      { to: "/timesheet/manageLeaves", name: "Manage Leaves" },
      { to: "/timesheet/leaveStatus", name: "Leave Status" },
    ],
  },
  {
    name: "Payroll",
    to: "/payroll",
    icon: "bx bx-wallet",
  },
  {
    name: "E-Filling",
    icon: "bx bx-time-five",
    children: [
      { to: "/Efilling/eFillingDetails", name: "E-Filling Details" },
      { to: "/Efilling/cpfSubmission", name: "CPF Submission" },
      { to: "/Efilling/ira8Form", name: "IRA8 Form" },
      { to: "/Efilling/appendix8A", name: "Appendix 8A" },
      { to: "/Efilling/appendix8B", name: "Appendix 8B" },
      { to: "/Efilling/ir8s", name: "IR8S" },
      { to: "/Efilling/irasSubmission", name: "IRAS Submission" },
    ],
  },
  {
    name: "HR Calender",
    to: "/hrCalender",
    icon: "fas fa-calendar-alt",
  },
  {
    name: "HR Import",
    to: "/hrImport",
    icon: "fas fa-cloud-upload-alt",
  },
  {
    name: "HR Report",
    to: "/hrReport",
    icon: "far fa-chart-bar",
  },
  {
    name: "File Manager",
    to: "/fileManager",
    icon: "fas fa-file",
  },
  {
    name: "System",
    icon: "bx bx-cog",
    children: [
      { to: "/system/multiLanguage", name: "Multi Language" },
      { to: "/system/setting", name: "Setting" },
      { to: "/system/setupModules", name: "Setup Modules" },
      { to: "/system/themeSetting", name: "Theme Setting" },
      { to: "/system/paymentGateway", name: "Payment Gateway" },
      { to: "/system/constants", name: "Constatns" },
      { to: "/system/databaseBackup", name: "Database Backup" },
    ],
  },
  {
    name: "Logout",
    to: "/logout",
    icon: "bx bx-power-off",
  },
];
