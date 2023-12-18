import React, { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { api } from "../../../Context/AuthContext";
import moment from "moment";
import { toast } from "react-toastify";

const NewLeaveModal = ({ show, setShow, eventData, callback }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm();

  const [allCompanies, setAllCompanies] = useState([]);
  const [allEmployees, setAllEmployees] = useState([]);

  useEffect(() => {
    getAllCompanies();
    getAllEmployees();
    if (eventData) {
      eventData["startDate"] = moment(eventData.startDate).format("YYYY-MM-DD");
      eventData["endDate"] = moment(eventData.endDate).format("YYYY-MM-DD");
      reset(eventData);
    }
  }, []);

  const addNewLeave = async (data) => {
    try {
      if (data._id) {
        let response = await api.put("/events/updateEvent", data);
        if (response.status == 200) {
          console.log(response);
          callback(response.data.leaveData);
          toast.success(response.data.message);
        } else {
          toast.error("Something went wrong");
        }
      } else {
        data["eventType"] = "leave";
        let response = await api.post("/events/addNewEvent", data);
        if (response.status == 200) {
          callback(response.data.data);
          toast.success(response.data.message);
        } else {
          toast.error("Something went wrong");
        }
      }
    } catch (err) {
      console.error(err);
    }
    handleClose();
  };

  const handleClose = () => {
    setShow(false);
    reset();
  };

  const getAllCompanies = async () => {
    try {
      const companies = await api.get("/company");
      setAllCompanies(companies.data.companies);
    } catch (err) {
      console.error(err);
    }
  };

  const getAllEmployees = async () => {
    try {
      const employees = await api.get("/employee");

      setAllEmployees(employees.data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{eventData ? "Update" : "Add New"} Leave</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <form
            className='needs-validation'
            onSubmit={handleSubmit(addNewLeave)}
          >
            <div class='row'>
              <div class='col-md-12'>
                <div class='mb-3'>
                  <label for='formrow-firstname-input' class='form-label'>
                    Company
                  </label>{" "}
                  <br />
                  <select
                    className='form-select'
                    {...register("companyId", {
                      required: "Please Select Company",
                    })}
                  >
                    <option value=''>Select Company</option>
                    {allCompanies?.length &&
                      allCompanies.map((company) => (
                        <option
                          value={company._id}
                          selected={
                            watch("companyId") == company._id && company._id
                          }
                        >
                          {company.name}
                        </option>
                      ))}
                  </select>
                  {errors?.companyId && (
                    <span className='text-danger'>
                      {errors?.companyId.message}
                    </span>
                  )}
                </div>
              </div>
              <div class='col-md-12'>
                <div class='mb-3'>
                  <label for='formrow-firstname-input' class='form-label'>
                    Employee
                  </label>{" "}
                  <br />
                  <select
                    className='form-select'
                    {...register("employeeId", {
                      required: "Please Select Employee",
                    })}
                  >
                    {console.log(allEmployees)}
                    <option value=''>Select Employee</option>
                    {allEmployees?.length &&
                      allEmployees.map((employee) => (
                        <option
                          value={employee._id}
                          selected={
                            watch("employeeId") == employee._id && employee._id
                          }
                        >
                          {employee.username}
                        </option>
                      ))}
                  </select>
                  {errors?.employeeId && (
                    <span className='text-danger'>
                      {errors?.employeeId.message}
                    </span>
                  )}
                </div>
              </div>

              <div class='col-md-12'>
                <div class='mb-3'>
                  <label for='formrow-firstname-input' class='form-label'>
                    Leave Type
                  </label>{" "}
                  <br />
                  <select
                    class='form-control select2-templating '
                    {...register("title", {
                      required: "Please Select Leave Type",
                    })}
                    style={{ width: "100%" }}
                  >
                    <option value='newleave'>new leave</option>
                  </select>
                  {errors?.leaveType && (
                    <span className='text-danger'>
                      {errors?.leaveType.message}
                    </span>
                  )}
                </div>
              </div>
              <div class='col-md-12'>
                <div class='mb-3'>
                  <label for='' class='form-label'>
                    Remarks
                  </label>{" "}
                  <br />
                  <input
                    type='text'
                    class='form-control'
                    {...register("remarks", {
                      required: "Please Enter Remarks",
                    })}
                    placeholder=''
                  />
                  {errors?.remarks && (
                    <span className='text-danger'>
                      {errors?.remarks.message}
                    </span>
                  )}
                </div>
              </div>
              <div class='col-md-12'>
                <div class='mb-3'>
                  <label for='' class='form-label'>
                    Start Date
                  </label>{" "}
                  <br />
                  <input
                    type='date'
                    class='form-control'
                    {...register("startDate", {
                      required: "Please Select Start Date",
                    })}
                    placeholder=''
                  />
                  {errors?.startDate && (
                    <span className='text-danger'>
                      {errors?.startDate.message}
                    </span>
                  )}
                </div>
              </div>

              {!watch("halfDay") && (
                <div class='col-md-12'>
                  <div class='mb-3'>
                    <label for='' class='form-label'>
                      End Date
                    </label>{" "}
                    <br />
                    <input
                      type='date'
                      class='form-control'
                      {...register("endDate", {
                        required: "Please Select End Date",
                      })}
                      placeholder=''
                    />
                    {errors?.endDate && (
                      <span className='text-danger'>
                        {errors?.endDate.message}
                      </span>
                    )}
                  </div>
                </div>
              )}

              <div class='col-md-12'>
                <div class='mb-3'>
                  <input
                    type='checkbox'
                    {...register("halfDay")}
                    class=''
                    placeholder=''
                  />
                  <label for='' class='form-label'>
                    Half Day
                  </label>
                </div>
              </div>
              <div class='col-md-12'>
                <div class='mb-3'>
                  <label for='' class='form-label'>
                    Attachment
                  </label>{" "}
                  <br />
                  <input
                    type='file'
                    class='form-control'
                    {...register("files")}
                    placeholder=''
                  />
                </div>
              </div>
              <div class='col-md-12'>
                <div class='mb-3'>
                  <label for='' class='form-label'>
                    Leave Reason
                  </label>{" "}
                  <br />
                  <textarea
                    name=''
                    id=''
                    cols='30'
                    rows='10'
                    style={{ height: "70px" }}
                    {...register("leaveReason", {
                      required: "Please Enter Leave Reason",
                    })}
                    class='form-control'
                  ></textarea>
                  {errors?.leaveReason && (
                    <span className='text-danger'>
                      {errors?.leaveReason.message}
                    </span>
                  )}
                </div>
              </div>
            </div>
            <Modal.Footer>
              <div className='col-6 text-end'>
                <button type='submit' class='btn btn-success'>
                  {eventData ? "Update" : "SAVE"}
                </button>
              </div>
            </Modal.Footer>
          </form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default NewLeaveModal;
