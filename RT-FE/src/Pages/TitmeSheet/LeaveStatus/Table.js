import { useAuth } from "../../../Context/AuthContext";

export default function Table() {
  const { permissions } = useAuth();
  return (
    <div className='row'>
      <div className='col-12'>
        <div className='card'>
          <div className='card-body'>
            <div className='row'>
              <div className='col-md-6 mb-3'>
                <h4>Leaves</h4>
              </div>
              {(permissions.includes("All") ||
                permissions.includes("add39")) && (
                <div className='col-md-6 mb-3' style={{ textAlign: "right" }}>
                  <button
                    className='btn btn-primary text-right'
                    data-bs-toggle='modal'
                    data-bs-target='#myModal'
                  >
                    Add New
                  </button>
                </div>
              )}
            </div>

            <p className='card-title-desc' style={{ textAlign: "right" }}>
              <button className='btn btn-info text-right'>CSV</button>
              <button className='btn btn-info text-right'>Excel</button>
              <button className='btn btn-info text-right'>PDF</button>
              <button className='btn btn-info text-right'>Print</button>
            </p>
            <table
              id='datatable'
              className='table table-bordered dt-responsive nowrap w-100'
            >
              <thead>
                <tr>
                  <th>Company </th>
                  <th>Employee</th>
                  <th>Approved</th>
                  <th>Pending</th>
                  <th>Upcoming</th>
                  <th>Rejected</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>
                    <button
                      className='btn btn-primary'
                      data-bs-toggle='modal'
                      data-bs-target='#myModal'
                    >
                      <i
                        className='fas fa-edit'
                        style={{ fontSize: "10px" }}
                      ></i>
                    </button>
                    <button className='btn btn-danger'>
                      <i
                        className='fas fa-trash-alt'
                        style={{ fontSize: "10px" }}
                      ></i>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
            {/* <!-- The Modal --> */}
            <div className='modal fade' id='myModal'>
              <div className='modal-dialog modal-lg'>
                <div className='modal-content'>
                  {/* <!-- Modal Header --> */}
                  <div className='modal-header'>
                    <h4 className='modal-title'>Add New</h4>
                    <button
                      type='button'
                      className='btn-close'
                      data-bs-dismiss='modal'
                    ></button>
                  </div>

                  {/* <!-- Modal body --> */}
                  <div className='modal-body'>
                    <div className='row'>
                      <div className='col-md-12'>
                        <div className='mb-3'>
                          <label for=''>Start Date</label>
                          <input
                            type='date'
                            className='form-control'
                            placeholder=''
                          />
                        </div>
                      </div>
                      <div className='col-md-12'>
                        <div className='mb-3'>
                          <label for=''>End Date</label>
                          <input
                            type='date'
                            className='form-control'
                            placeholder=''
                          />
                        </div>
                      </div>
                      <div className='col-md-12'>
                        <div className='mb-3'>
                          <label
                            for='formrow-firstname-input'
                            className='form-label'
                          >
                            Company
                          </label>{" "}
                          <br />
                          <select
                            className='form-control select2-templating '
                            style={{ width: "100%" }}
                          >
                            <option value=''></option>
                          </select>
                        </div>
                      </div>
                      <div className='col-md-12'>
                        <div className='mb-3'>
                          <label
                            for='formrow-firstname-input'
                            className='form-label'
                          >
                            Choose an Employee
                          </label>{" "}
                          <br />
                          <select
                            className='form-control select2-templating '
                            style={{ width: "100%" }}
                          >
                            <option value=''></option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* <!-- Modal footer --> */}
                  <div className='modal-footer'>
                    <button type='button' className='btn btn-success'>
                      SAVE
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- end col --> */}
    </div>
  );
}
