import { Modal } from "react-bootstrap";
import TreeCheckbox from "./TreeCheckbox";
import { useState } from "react";
import { addRole } from "../../../Utility/API/role";

let data = [
  {
    value: "All",
    label: "Resourses",
    children: [
      {
        value: "staff",
        label: "Staff",
        children: [
          {
            value: "employee",
            label: "Employees",
            children: [
              { value: "add", label: "Add" },
              { value: "delete", label: "Delete" },
              { value: "update", label: "Update" },
              { value: "view", label: "View" },
            ],
          },
          {
            value: "employee banefit",
            label: "Employee Benefit",
            children: [
              { value: "add1", label: "Add" },
              { value: "delete1", label: "Delete" },
              { value: "update1", label: "Update" },
              { value: "view1", label: "View" },
            ],
          },
          {
            value: "roles and privillege",
            label: "Roles and Privillege",
            children: [
              { value: "add2", label: "Add" },
              { value: "delete2", label: "Delete" },
              { value: "update2", label: "Update" },
              { value: "view2", label: "View" },
            ],
          },
          {
            value: "staff directory",
            label: "Staff Directory",
            children: [{ value: "get3", label: "Get" }],
          },
          {
            value: "employees exit",
            label: "Employees Exit",
            children: [
              { value: "add4", label: "Add" },
              { value: "delete4", label: "Delete" },
              { value: "update4", label: "Update" },
              { value: "view4", label: "View" },
            ],
          },
          {
            value: "expired documents",
            label: "Expired Documents",
            children: [
              { value: "add5", label: "Add" },
              { value: "delete5", label: "Delete" },
              { value: "update5", label: "Update" },
              { value: "view5", label: "View" },
            ],
          },
          {
            value: "employee last login",
            label: "Employee Last Login",
            children: [
              { value: "add6", label: "Add" },
              { value: "delete6", label: "Delete" },
              { value: "update6", label: "Update" },
              { value: "view6", label: "View" },
            ],
          },
        ],
      },
      {
        value: "core hr",
        label: "Core HR",
        children: [
          {
            value: "award",
            label: "Award",
            children: [
              { value: "add10", label: "Add" },
              { value: "delete10", label: "Delete" },
              { value: "update10", label: "Update" },
              { value: "view10", label: "View" },
            ],
          },
          {
            value: "transfer",
            label: "Transfer",
            children: [
              { value: "add11", label: "Add" },
              { value: "delete11", label: "Delete" },
              { value: "update11", label: "Update" },
              { value: "view11", label: "View" },
            ],
          },
          {
            value: "resignations",
            label: "Resignations",
            children: [
              { value: "add12", label: "Add" },
              { value: "delete12", label: "Delete" },
              { value: "update12", label: "Update" },
              { value: "view12", label: "View" },
            ],
          },
          {
            value: "travels",
            label: "Travels",
            children: [
              { value: "add13", label: "Add" },
              { value: "delete13", label: "Delete" },
              { value: "update13", label: "Update" },
              { value: "view13", label: "View" },
            ],
          },
          {
            value: "promotions",
            label: "Promotions",
            children: [
              { value: "add14", label: "Add" },
              { value: "delete14", label: "Delete" },
              { value: "update14", label: "Update" },
              { value: "view14", label: "View" },
            ],
          },
          {
            value: "complaints",
            label: "Complaints",
            children: [
              { value: "add15", label: "Add" },
              { value: "delete15", label: "Delete" },
              { value: "update15", label: "Update" },
              { value: "view15", label: "View" },
            ],
          },
          {
            value: "warnings",
            label: "Warnings",
            children: [
              { value: "add16", label: "Add" },
              { value: "delete16", label: "Delete" },
              { value: "update16", label: "Update" },
              { value: "view16", label: "View" },
            ],
          },
          {
            value: "terminations",
            label: "Terminations",
            children: [
              { value: "add17", label: "Add" },
              { value: "delete17", label: "Delete" },
              { value: "update17", label: "Update" },
              { value: "view17", label: "View" },
            ],
          },
        ],
      },

      {
        value: "organizations",
        label: "Organizations",
        children: [
          {
            value: "company",
            label: "Company",
            children: [
              { value: "add20", label: "Add" },
              { value: "delete20", label: "Delete" },
              { value: "update20", label: "Update" },
              { value: "view20", label: "View" },
            ],
          },
          {
            value: "official documents",
            label: "Official Documents",
            children: [
              { value: "add21", label: "Add" },
              { value: "delete21", label: "Delete" },
              { value: "update21", label: "Update" },
              { value: "view21", label: "View" },
            ],
          },
          {
            value: "locations",
            label: "Locations",
            children: [
              { value: "add22", label: "Add" },
              { value: "delete22", label: "Delete" },
              { value: "update22", label: "Update" },
              { value: "view22", label: "View" },
            ],
          },
          {
            value: "department",
            label: "Department",
            children: [
              { value: "add23", label: "Add" },
              { value: "delete23", label: "Delete" },
              { value: "update23", label: "Update" },
              { value: "view23", label: "View" },
            ],
          },
          {
            value: "sub department",
            label: "Sub Department",
            children: [
              { value: "add24", label: "Add" },
              { value: "delete24", label: "Delete" },
              { value: "update24", label: "Update" },
              { value: "view24", label: "View" },
            ],
          },
          {
            value: "grouping",
            label: "Grouping",
            children: [
              { value: "add25", label: "Add" },
              { value: "delete25", label: "Delete" },
              { value: "update25", label: "Update" },
              { value: "view25", label: "View" },
            ],
          },
          {
            value: "designations",
            label: "Designations",
            children: [
              { value: "add26", label: "Add" },
              { value: "delete26", label: "Delete" },
              { value: "update26", label: "Update" },
              { value: "view26", label: "View" },
            ],
          },
          {
            value: "announcements",
            label: "Announcements",
            children: [
              { value: "add27", label: "Add" },
              { value: "delete27", label: "Delete" },
              { value: "update27", label: "Update" },
              { value: "view27", label: "View" },
            ],
          },
          {
            value: "company policy",
            label: "Company Policy",
            children: [
              { value: "add28", label: "Add" },
              { value: "delete28", label: "Delete" },
              { value: "update28", label: "Update" },
              { value: "view28", label: "View" },
            ],
          },
        ],
      },

      {
        value: "timesheet",
        label: "Timesheet",
        children: [
          {
            value: "attendance",
            label: "Attendance",
            children: [
              { value: "get30", label: "Get" },
              { value: "view30", label: "View" },
            ],
          },
          {
            value: "monthly timesheet",
            label: "Monthly Timesheet",
            children: [
              { value: "get31", label: "Get" },
              { value: "view31", label: "View" },
            ],
          },
          {
            value: "timesheet calendar",
            label: "Timesheet Calendar",
            children: [
              { value: "get32", label: "Get" },
              { value: "view32", label: "View" },
            ],
          },
          {
            value: "date wise attendance",
            label: "Date Wise Attendance",
            children: [
              { value: "get33", label: "Get" },
              { value: "view33", label: "View" },
            ],
          },
          {
            value: "update attendance",
            label: "Update Attendance",
            children: [
              { value: "add34", label: "Add" },
              { value: "delete34", label: "Delete" },
              { value: "update34", label: "Update" },
              { value: "view34", label: "View" },
            ],
          },
          {
            value: "overtime request",
            label: "Overtime Request",
            children: [
              { value: "add35", label: "Add" },
              { value: "delete35", label: "Delete" },
              { value: "update35", label: "Update" },
              { value: "view35", label: "View" },
            ],
          },
          {
            value: "office shifts",
            label: "Office Shifts",
            children: [
              { value: "add36", label: "Add" },
              { value: "delete36", label: "Delete" },
              { value: "update36", label: "Update" },
              { value: "view36", label: "View" },
            ],
          },
          {
            value: "manage holidays",
            label: "Manage Holidays",
            children: [
              { value: "add37", label: "Add" },
              { value: "delete37", label: "Delete" },
              { value: "update37", label: "Update" },
              { value: "view37", label: "View" },
            ],
          },
          {
            value: "manage leaves",
            label: "Manage Leaves",
            children: [
              { value: "add38", label: "Add" },
              { value: "delete38", label: "Delete" },
              { value: "update38", label: "Update" },
              { value: "view38", label: "View" },
            ],
          },
          {
            value: "leave status",
            label: "Leave Status",
            children: [
              { value: "add39", label: "Add" },
              { value: "delete39", label: "Delete" },
              { value: "update39", label: "Update" },
              { value: "view39", label: "View" },
            ],
          },
        ],
      },

      {
        value: "payroll",
        label: "Payroll",
        children: [
          { value: "add40", label: "Add" },
          { value: "delete40", label: "Delete" },
          { value: "update40", label: "Update" },
          { value: "view40", label: "View" },
        ],
      },

      {
        value: "e-filling",
        label: "E-Filling",
        children: [
          {
            value: "e-filling details",
            label: "E-Filling Details",
            children: [
              { value: "update50", label: "Update" },
              { value: "view50", label: "View" },
            ],
          },
          {
            value: "cpf submission",
            label: "CPF Submission",
            children: [
              { value: "add51", label: "Add" },
              { value: "delete51", label: "Delete" },
              { value: "update51", label: "Update" },
              { value: "view51", label: "View" },
            ],
          },
          {
            value: "ira8 form",
            label: "IRA8 Form",
            children: [
              { value: "add52", label: "Add" },
              { value: "delete52", label: "Delete" },
              { value: "update52", label: "Update" },
              { value: "view52", label: "View" },
            ],
          },
          {
            value: "appendix 8a",
            label: "Appendix 8A",
            children: [
              { value: "add53", label: "Add" },
              { value: "delete53", label: "Delete" },
              { value: "update53", label: "Update" },
              { value: "view53", label: "View" },
            ],
          },
          {
            value: "appendix 8b",
            label: "Appendix 8B",
            children: [
              { value: "add54", label: "Add" },
              { value: "delete54", label: "Delete" },
              { value: "update54", label: "Update" },
              { value: "view54", label: "View" },
            ],
          },
          {
            value: "ir8s",
            label: "IR8S",
            children: [
              { value: "add55", label: "Add" },
              { value: "delete55", label: "Delete" },
              { value: "update55", label: "Update" },
              { value: "view55", label: "View" },
            ],
          },
          {
            value: "iras submission",
            label: "IRAS Submission",
            children: [
              { value: "add56", label: "Add" },
              { value: "delete56", label: "Delete" },
              { value: "update56", label: "Update" },
              { value: "view56", label: "View" },
            ],
          },
        ],
      },

      {
        value: "hr calendar",
        label: "HR Calendar",
        children: [
          { value: "add60", label: "Add" },
          { value: "delete60", label: "Delete" },
          { value: "update60", label: "Update" },
          { value: "view60", label: "View" },
        ],
      },

      {
        value: "file manager",
        label: "File Manager",
        children: [
          { value: "add70", label: "Add" },
          { value: "delete70", label: "Delete" },
          { value: "update70", label: "Update" },
          { value: "view70", label: "View" },
        ],
      },

      {
        value: "system",
        label: "System",
        children: [
          {
            value: "multi language",
            label: "Multi Language",
            children: [
              { value: "add80", label: "Add" },
              { value: "delete80", label: "Delete" },
              { value: "update80", label: "Update" },
              { value: "view80", label: "View" },
            ],
          },
          {
            value: "setting",
            label: "Setting",
            children: [
              { value: "update81", label: "Update" },
              { value: "view81", label: "View" },
            ],
          },
          {
            value: "setup modules",
            label: "Setup Modules",
            children: [
              { value: "update82", label: "Update" },
              { value: "view82", label: "View" },
            ],
          },
          {
            value: "theme setting",
            label: "Theme Setting",
            children: [
              { value: "update83", label: "Update" },
              { value: "view83", label: "View" },
            ],
          },
          {
            value: "payment gateway",
            label: "Payment Gateway",
            children: [
              { value: "update84", label: "Update" },
              { value: "view84", label: "View" },
            ],
          },
          {
            value: "constants",
            label: "Constants",
            children: [
              { value: "add85", label: "Add" },
              { value: "delete85", label: "Delete" },
              { value: "update85", label: "Update" },
              { value: "view85", label: "View" },
            ],
          },
        ],
      },
    ],
  },
];

export default function AddNewRole({ show, setShow, getRoles }) {
  const [name, setName] = useState("");
  const [checked, setChecked] = useState(["10"]);

  async function handleSubmit(e) {
    e.preventDefault();
    if (!name || !name.length) return;
    try {
      let response = await addRole({ name: name, permission: checked });

      if (response.success) {
        setShow(false);
        setName("");
        setChecked([]);
        getRoles();
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Modal size='lg' show={show} onHide={() => setShow(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Add New Role</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <div className='row'>
          <div className='col-md-6 mb-2'>
            <label for=''>Role Name</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type='text'
              className='form-control'
              placeholder=''
            />
          </div>
          <div className='col-md-6 mb-2'>
            <label for=''>Select Access</label> <br />
            <select
              className='form-control select2-templating'
              style={{ width: "100%" }}
            >
              <option value='cmenu'>Custom Menu Access</option>
              <option value='allmenu'>All Menu Access</option>
            </select>
          </div>
          <div className='col-md-12'>
            <label for=''>Permissions</label>
            <div
              className='well'
              style={{ backgroundColor: "transparent !important" }}
            >
              <TreeCheckbox check={checked} setCheck={setChecked} data={data} />
            </div>
          </div>
          <div className='col-md-12'>
            <h6>Note:</h6>
            <p>
              1. If you enable the module for an employee, it means employee
              will only see their related record of assigned module.
            </p>
            <p>
              2: If you check for a company add, it means employee will be able
              to see all record of his/her company of assigned module.
            </p>
          </div>
        </div>
      </Modal.Body>
      <div class='modal-footer'>
        <button onClick={handleSubmit} type='button' class='btn btn-primary'>
          Save
        </button>
        <button
          type='button'
          class='btn btn-danger'
          onClick={() => setShow(false)}
        >
          Close
        </button>
      </div>
    </Modal>
  );
}
