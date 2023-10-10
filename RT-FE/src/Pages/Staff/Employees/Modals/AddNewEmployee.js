import { Button, Modal } from "react-bootstrap";

export default function AddNewEmployee({ show, setShow }) {
  return (
    <Modal size="xl" show={show} onHide={() => setShow(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Add New Empolyee</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <div class="modal-body">
          <div className="row">
            <div className="col-md-6">
              <div className="row">
                <div className="col-md-6">
                  <div className="mb-3">
                    <label for="">First Name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter First Name"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <label for="">Last Name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Last Name"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <label for="formrow-firstname-input" className="form-label">
                      Company
                    </label>{" "}
                    <br />
                    <select
                      className="form-control select2-templating "
                      style={{ width: "100%" }}
                    >
                      <option value="">KMAC International Pte Ltd</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <label for="formrow-firstname-input" className="form-label">
                      Location
                    </label>{" "}
                    <br />
                    <select
                      className="form-control select2-templating "
                      style={{ width: "100%" }}
                    >
                      <option value=""></option>
                    </select>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <label for="">Username</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter username"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <label for="">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Enter email"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <label for="">Date of Birth</label>
                    <input
                      type="date"
                      className="form-control"
                      placeholder=""
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <label for="">Contact Number</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter phone number"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <label for="formrow-firstname-input" className="form-label">
                      Roles
                    </label>{" "}
                    <br />
                    <select
                      className="form-control select2-templating "
                      style={{ width: "100%" }}
                    >
                      <option value="">Director</option>
                      <option value="">HR Admin</option>
                      <option value="">Super Admin</option>
                      <option value="">Sales Department</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <label for="formrow-firstname-input" className="form-label">
                      Reports To
                    </label>{" "}
                    <br />
                    <select
                      className="form-control select2-templating "
                      style={{ width: "100%" }}
                    >
                      <option value=""></option>
                    </select>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="mb-3">
                    <label for="">Passport Number</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter passport number"
                    />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="mb-3">
                    <label for="">Address</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Address"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <label for="formrow-firstname-input" className="form-label">
                      Immigration Status
                    </label>{" "}
                    <br />
                    <select
                      className="form-control select2-templating "
                      style={{ width: "100%" }}
                    >
                      <option value="">Singapore Citizen</option>
                      <option value="">Foreign Employee</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <label for="">PR Effective Date</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter pr Effetive date"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="row">
                <div className="col-md-4">
                  <div className="mb-3">
                    <label for="">Employee ID</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Employee ID"
                    />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="mb-3">
                    <label for="">Date Of Joining</label>
                    <input
                      type="date"
                      className="form-control"
                      placeholder=""
                    />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="mb-3">
                    <label for="">Confirmation Date</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Confirmation Date"
                    />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="mb-3">
                    <label for="formrow-firstname-input" className="form-label">
                      Main Department
                    </label>{" "}
                    <br />
                    <select
                      className="form-control select2-templating "
                      style={{ width: "100%" }}
                    >
                      <option value=""></option>
                    </select>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="mb-3">
                    <label for="formrow-firstname-input" className="form-label">
                      Sub Department
                    </label>{" "}
                    <br />
                    <select
                      className="form-control select2-templating "
                      style={{ width: "100%" }}
                    >
                      <option value=""></option>
                    </select>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="mb-3">
                    <label for="formrow-firstname-input" className="form-label">
                      Designation
                    </label>{" "}
                    <br />
                    <select
                      className="form-control select2-templating "
                      style={{ width: "100%" }}
                    >
                      <option value=""></option>
                    </select>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <label for="formrow-firstname-input" className="form-label">
                      Gender
                    </label>{" "}
                    <br />
                    <select
                      className="form-control select2-templating "
                      style={{ width: "100%" }}
                    >
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <label for="formrow-firstname-input" className="form-label">
                      Office Shift
                    </label>{" "}
                    <br />
                    <select
                      className="form-control select2-templating "
                      style={{ width: "100%" }}
                    >
                      <option value=""></option>
                    </select>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <label for="">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="password"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <label for="">Confirm Password</label>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="confirm passowrd"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <label for="formrow-firstname-input" className="form-label">
                      Identification Type
                    </label>{" "}
                    <br />
                    <select
                      className="form-control select2-templating "
                      style={{ width: "100%" }}
                    >
                      <option value="">NRIC</option>
                      <option value="">FIN</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <label for="">NRIC / FIN No.</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter NRIC number"
                    />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="mb-3">
                    <label for="">Work Permit Number</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Work Permit Number"
                    />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="mb-3">
                    <label for="">Vaccination</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Vaccination"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Modal footer --> */}
        <div className="modal-footer">
          <button type="button" className="btn btn-success">
            SAVE
          </button>
        </div>
      </Modal.Body>
    </Modal>
  );
}
