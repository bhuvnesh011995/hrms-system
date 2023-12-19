import { useEffect } from "react";
import { Card } from "react-bootstrap";

export default function Basic({ id }) {
  return (
    <Card>
      <Card.Body>
        <div class="tab-content" id="v-pills-tabContent">
          <div
            class="tab-pane fade show active"
            id="v-pills-home"
            role="tabpanel"
            aria-labelledby="v-pills-home-tab"
          >
            <h5>Basic Information</h5>
            <div class="row">
              <div class="col-md-4">
                <div class="mb-3">
                  <label for="">First Name</label>
                  <input type="text" class="form-control" placeholder="" />
                </div>
              </div>
              <div class="col-md-4">
                <div class="mb-3">
                  <label for="">Last Name</label>
                  <input type="text" class="form-control" placeholder="" />
                </div>
              </div>
              <div class="col-md-4">
                <div class="mb-3">
                  <label for="">Confirmation Date</label>
                  <input type="date" class="form-control" placeholder="" />
                </div>
              </div>
              <div class="col-md-4">
                <div class="mb-3">
                  <label for="">Employee ID</label>
                  <input type="text" class="form-control" placeholder="" />
                </div>
              </div>
              <div class="col-md-4">
                <div class="mb-3">
                  <label for="">Username</label>
                  <input type="text" class="form-control" placeholder="" />
                </div>
              </div>
              <div class="col-md-4">
                <div class="mb-3">
                  <label for="">Email</label>
                  <input type="email" class="form-control" placeholder="" />
                </div>
              </div>
              <div class="col-md-4">
                <div class="mb-3">
                  <label for="formrow-firstname-input" class="form-label">
                    Company
                  </label>{" "}
                  <br />
                  <select
                    class="form-control select2-templating "
                    style={{ width: "100%" }}
                  >
                    <option value="KMAC">KMAC International Pte Ltd</option>
                  </select>
                </div>
              </div>
              <div class="col-md-4">
                <div class="mb-3">
                  <label for="formrow-firstname-input" class="form-label">
                    Location
                  </label>{" "}
                  <br />
                  <select
                    class="form-control select2-templating "
                    style={{ width: "100%" }}
                  >
                    <option value="Csite">Customer Site</option>
                    <option value="HQ">HQ</option>
                  </select>
                </div>
              </div>
              <div class="col-md-4">
                <div class="mb-3">
                  <label for="formrow-firstname-input" class="form-label">
                    Department
                  </label>{" "}
                  <br />
                  <select
                    class="form-control select2-templating "
                    style={{ width: "100%" }}
                  >
                    <option value="Operation-site">Operation Site</option>
                  </select>
                </div>
              </div>
              <div class="col-md-3">
                <div class="mb-3">
                  <label for="formrow-firstname-input" class="form-label">
                    Sub Department
                  </label>{" "}
                  <br />
                  <select
                    class="form-control select2-templating "
                    style={{ width: "100%" }}
                  >
                    <option value="RC">Residential Cleaner</option>
                    <option value="CC">Commercial Cleaner</option>
                    <option value="floater">Floater</option>
                  </select>
                </div>
              </div>
              <div class="col-md-3">
                <div class="mb-3">
                  <label for="formrow-firstname-input" class="form-label">
                    Designation
                  </label>{" "}
                  <br />
                  <select
                    class="form-control select2-templating "
                    style={{ width: "100%" }}
                  >
                    <option value="Household">Household Service Worker</option>
                    <option value="RC">Residential Cleaner</option>
                  </select>
                </div>
              </div>
              <div class="col-md-3">
                <div class="mb-3">
                  <label for="">Date of Joining</label>
                  <input type="date" class="form-control" placeholder="" />
                </div>
              </div>
              <div class="col-md-3">
                <div class="mb-3">
                  <label for="">Date of Leaving</label>
                  <input type="date" class="form-control" placeholder="" />
                </div>
              </div>
              <div class="col-md-4">
                <div class="mb-3">
                  <label for="formrow-firstname-input" class="form-label">
                    Role
                  </label>{" "}
                  <br />
                  <select
                    class="form-control select2-templating "
                    style={{ width: "100%" }}
                  >
                    <option value="Cleaner">Cleaner</option>
                    <option value="HR">HR</option>
                    <option value="Director">Director</option>
                  </select>
                </div>
              </div>
              <div class="col-md-4">
                <div class="mb-3">
                  <label for="formrow-firstname-input" class="form-label">
                    Gender
                  </label>{" "}
                  <br />
                  <select
                    class="form-control select2-templating "
                    style={{ width: "100%" }}
                  >
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                </div>
              </div>
              <div class="col-md-4">
                <div class="mb-3">
                  <label for="formrow-firstname-input" class="form-label">
                    Marital Status
                  </label>{" "}
                  <br />
                  <select
                    class="form-control select2-templating "
                    style={{ width: "100%" }}
                  >
                    <option value="Single">Single</option>
                    <option value="Married">Married</option>
                    <option value="Widowed">Widowed</option>
                    <option value="divoce">Divorce</option>
                  </select>
                </div>
              </div>
              <div class="col-md-3">
                <div class="mb-3">
                  <label for="">Contact Number</label>
                  <input type="text" class="form-control" />
                </div>
              </div>
              <div class="col-md-3">
                <div class="mb-3">
                  <label for="formrow-firstname-input" class="form-label">
                    {" "}
                    Status
                  </label>{" "}
                  <br />
                  <select
                    class="form-control select2-templating "
                    style={{ width: "100%" }}
                  >
                    <option value="Active">Active</option>
                    <option value="Inactive">Inactive</option>
                  </select>
                </div>
              </div>
              <div class="col-md-3">
                <div class="mb-3">
                  <label for="formrow-firstname-input" class="form-label">
                    {" "}
                    Office Shift
                  </label>{" "}
                  <br />
                  <select
                    class="form-control select2-templating "
                    style={{ width: "100%" }}
                  >
                    <option value="mon-sat">Monday to Saturday</option>
                    <option value="RC(off saturday)">RC (Off Saturday)</option>
                  </select>
                </div>
              </div>
              <div class="col-md-3">
                <div class="mb-3">
                  <label for="">Date Of Birth</label>
                  <input type="date" class="form-control" placeholder="" />
                </div>
              </div>
              <div class="col-md-4">
                <div class="mb-3">
                  <label for="formrow-firstname-input" class="form-label">
                    {" "}
                    Reports To
                  </label>{" "}
                  <br />
                  <select
                    class="form-control select2-templating "
                    style={{ width: "100%" }}
                  >
                    <option value="mon-sat">Lai Jiale</option>
                    <option value="RC(off saturday)">Pea Lay Eng</option>
                  </select>
                </div>
              </div>
              <div class="col-md-4">
                <div class="mb-3">
                  <label for="formrow-firstname-input" class="form-label">
                    {" "}
                    Identification Type
                  </label>{" "}
                  <br />
                  <select
                    class="form-control select2-templating "
                    style={{ width: "100%" }}
                  >
                    <option value="FIN">FIN</option>
                    <option value="NRIC">NRIC</option>
                  </select>
                </div>
              </div>
              <div class="col-md-4">
                <div class="mb-3">
                  <label for="">Identification Number</label>
                  <input type="text" class="form-control" placeholder="" />
                </div>
              </div>
              <div class="col-md-6">
                <div class="mb-3">
                  <label for="">Passport Number</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="passport number"
                  />
                </div>
              </div>
              <div class="col-md-6">
                <div class="mb-3">
                  <label for="">Work Permit Number</label>
                  <input type="text" class="form-control" placeholder="" />
                </div>
              </div>
              <div class="col-md-12">
                <div class="mb-3">
                  <label class="form-label">View Companies Data</label>
                  <input
                    type="text"
                    name="input-multiple"
                    class="form-control"
                    placeholder=""
                  />
                </div>
              </div>
              <div class="col-md-4">
                <div class="mb-3">
                  <label for="">State / Province</label>
                  <input type="text" class="form-control" placeholder="State" />
                </div>
              </div>
              <div class="col-md-4">
                <div class="mb-3">
                  <label for="">City</label>
                  <input type="text" class="form-control" placeholder="City" />
                </div>
              </div>
              <div class="col-md-4">
                <div class="mb-3">
                  <label for="">Zip Code</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Zip Code"
                  />
                </div>
              </div>
              <div class="col-md-4">
                <div class="mb-3">
                  <label for="formrow-firstname-input" class="form-label">
                    {" "}
                    Religion
                  </label>{" "}
                  <br />
                  <select
                    class="form-control select2-templating "
                    style={{ width: "100%" }}
                  >
                    <option value="Hindu">Hinduism</option>
                    <option value="Muslim">Muslim</option>
                    <option value="Christian">Christian</option>
                  </select>
                </div>
              </div>
              <div class="col-md-4">
                <div class="mb-3">
                  <label for="">Address</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="address"
                  />
                </div>
              </div>
              <div class="col-md-4">
                <div class="mb-3">
                  <label for="">Vaccination</label>
                  <input type="date" class="form-control" placeholder="" />
                </div>
              </div>
              <div class="col-md-4">
                <div class="mb-3">
                  <label for="formrow-firstname-input" class="form-label">
                    {" "}
                    Blood Group
                  </label>{" "}
                  <br />
                  <select
                    class="form-control select2-templating "
                    style={{ width: "100%" }}
                  >
                    <option value="O+">O+</option>
                    <option value="B+">B+</option>
                    <option value="A+">A+</option>
                  </select>
                </div>
              </div>
              <div class="col-md-4">
                <div class="mb-3">
                  <label for="formrow-firstname-input" class="form-label">
                    {" "}
                    Nationality
                  </label>{" "}
                  <br />
                  <select
                    class="form-control select2-templating "
                    style={{ width: "100%" }}
                  >
                    <option value="IND">India</option>
                    <option value="SN">Singapore</option>
                    <option value="CN">China</option>
                  </select>
                </div>
              </div>
              <div class="col-md-4">
                <div class="mb-3">
                  <label for="formrow-firstname-input" class="form-label">
                    {" "}
                    Citizenship
                  </label>{" "}
                  <br />
                  <select
                    class="form-control select2-templating "
                    style={{ width: "100%" }}
                  >
                    <option value="IND">Indian</option>
                    <option value="SN">Singaporian</option>
                    <option value="CN">Chinese</option>
                  </select>
                </div>
              </div>
              <div class="col-md-4">
                <div class="mb-3">
                  <label for="formrow-firstname-input" class="form-label">
                    {" "}
                    Immigration Status{" "}
                  </label>{" "}
                  <br />
                  <select
                    class="form-control select2-templating "
                    style={{ width: "100%" }}
                  >
                    <option value="FE">Foreign Employee</option>
                    <option value="Singapore-citizen">Singapore Citizen</option>
                    <option value="Singapore-PR">Singapore PR</option>
                  </select>
                </div>
              </div>
            </div>
            <button class="btn btn-primary w-25">Save</button>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}
