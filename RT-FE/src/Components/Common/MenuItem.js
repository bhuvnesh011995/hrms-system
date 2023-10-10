export default [
  {
    name: "HR Dashboard",
    to: "/",
    icon: "bx bx-home-circle",
  },
  {
    name: "Staffs",
    to: "#",
    icon: "bx bx-user",
    children: [
      { to: "/staffDashboard", name: "Staff Dashboard" },
      { to: "/employees", name: "Employees" },
      { to: "/employeeBenefit", name: "Employee Benefit" },
      { to: "/roleAndPrivillage", name: "Roles & Privillage" },
      { to: "/staffDirectory", name: "Staff Directory" },
      { to: "/employeeExit", name: "Employees Exit" },
      { to: "/expiredDocument", name: "Expired Documents" },
      { to: "/lastLogin", name: "Employee Last Login" },
    ],
  },
  {
    name: "CORE HR",
    to: "#",
    icon: "bx bx-briefcase-alt-2",
    children: [
      { to: "/awards", name: "Awards" },
      { to: "/transfer", name: "Transfer" },
      { to: "/resignations", name: "Resignations" },
      { to: "/travels", name: "Travels" },
      { to: "/promotions", name: "Promotions" },
      { to: "/complaints", name: "Complaints" },
      { to: "/warnings", name: "Warnings" },
      { to: "/terminations", name: "Terminations" },
    ],
  },
  {
    name: "Organizations",
    to: "#",
    icon: "bx bx-home-circle",
    children: [
      { to: "/company", name: "Company"},
      { to: "/officialDocument", name: "Official Documents" },
      { to: "/locations", name: "Locations" },
      { to: "/department", name: "Department" },
      { to: "/subDepartment", name: "Sub Department" },
      { to: "/grouping", name: "Grouping" },
      { to: "/designations", name: "Designations" },
      { to: "/announcements", name: "Announcements" },
      { to: "/companyPolicy", name: "Company Policy" },
    ],
  },
  {
    name: "Timesheet",
    to: "#",
    icon: "bx bx-time-five",
    children: [
      { to: "/timesheetDashboard", name: "Timesheet Dashboard" },
      { to: "/attandance", name: "Attandance" },
      { to: "/monthlyTimesheet", name: "Monthly Timesheet" },
      { to: "/timesheetCalender", name: "Timesheet Calender" },
      { to: "/dateWiseAttendance", name: "Date Wise Attendance" },
      { to: "/updateAttandance", name: "Update Attandance" },
      { to: "/overtimeRequest", name: "Overtime Request" },
      { to: "/officeShifts", name: "Office Shifts" },
      { to: "/manageHolidays", name: "Manage Holidays" },
      { to: "/manageLeaves", name: "Manage Leaves" },
      { to: "/leaveStatus", name: "Leave Status" },
    ],
  },
  {
    name: "Payroll",
    to: "/payroll",
    icon: "bx bx-wallet",
  },
  {
    name: "E-Filling",
    to: "#",
    icon: "bx bx-time-five",
    children: [
      { to: "/eFillingDetails", name: "E-Filling Details" },
      { to: "/cpfSubmission", name: "CPF Submission" },
      { to: "/ira8Form", name: "IRA8 Form" },
      { to: "/appendix8A", name: "Appendix 8A" },
      { to: "/appendix8B", name: "Appendix 8B" },
      { to: "/ir8s", name: "IR8S" },
      { to: "/irasSubmission", name: "IRAS Submission" },
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
    to: "#",
    icon: "bx bx-cog",
    children: [
      { to: "/multiLanguage", name: "Multi Language" },
      { to: "/setting", name: "Setting" },
      { to: "/setupModules", name: "Setup Modules" },
      { to: "/themeSetting", name: "Theme Setting" },
      { to: "/paymentGateway", name: "Payment Gateway" },
      { to: "/constants", name: "Constatns" },
      { to: "/databaseBackup", name: "Database Backup" },
    ],
  },
  {
    name: "Logout",
    to: "/logout",
    icon: "bx bx-power-off",
  },
];
