import React, { useEffect } from "react";
import { Modal } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { api } from "../../../../Context/AuthContext";
import moment from "moment";
import { toast } from "react-toastify";

const NewTravelRequestModal = ({ show, setShow, eventData, callback }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm();

  useEffect(() => {
    if (eventData) {
      eventData["startDate"] = moment(eventData.startDate).format("YYYY-MM-DD");
      eventData["endDate"] = moment(eventData.endDate).format("YYYY-MM-DD");
      reset(eventData);
    }
  }, []);

  const addNewTravelRequest = async (data) => {
    try {
      if (data._id) {
        let response = await api.put(
          "/travelRequest/updateTravelRequest",
          data
        );
        if (response.status == 200) {
          callback(data);
          toast.success(response.data.message);
        } else {
          toast.error("Something went wrong");
        }
      } else {
        data["eventType"] = "travelRequest";
        let response = await api.post(
          "/travelRequest/addNewTravelRequest",
          data
        );
        if (response.status == 200) {
          callback(response.data.data);
          toast.success(response.data.message);
        } else {
          toast.error("Something went wrong");
        }
      }
      console.log(data);
    } catch (err) {
      console.error(err);
    }
    handleClose();
  };

  const handleClose = () => {
    setShow(false);
    reset();
  };

  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Files</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <form
            className="needs-validation"
            onSubmit={handleSubmit(addNewTravelRequest)}
          >
            <div className="row">
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label">Company Name</label>
                  <input
                    className="form-control"
                    placeholder="company name goes here"
                    type="text"
                    {...register("companyName", {
                      required: "Please Enter Company Name",
                    })}
                  />
                  {errors?.companyName && (
                    <span className="text-danger">
                      {errors?.companyName.message}
                    </span>
                  )}
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label">Employee</label>
                  <input
                    className="form-control"
                    placeholder="choose an Employee"
                    type="text"
                    {...register("employeeId", {
                      required: "Please Select Employee",
                    })}
                  />
                  {errors?.employeeId && (
                    <span className="text-danger">
                      {errors?.employeeId.message}
                    </span>
                  )}
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label">Title</label>
                  <input
                    className="form-control"
                    placeholder="company name goes here"
                    type="text"
                    {...register("title", {
                      required: "Please Enter Title Name",
                    })}
                  />
                  {errors?.title && (
                    <span className="text-danger">{errors?.title.message}</span>
                  )}
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label">Start Date</label>
                  <input
                    className="form-control"
                    placeholder=""
                    type="date"
                    {...register("startDate", {
                      required: "Please Enter Start Date",
                    })}
                  />
                  {errors?.startDate && (
                    <span className="text-danger">
                      {errors?.startDate.message}
                    </span>
                  )}
                </div>
              </div>

              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label">End Date</label>
                  <input
                    className="form-control"
                    placeholder=""
                    type="date"
                    {...register("endDate", {
                      required: "Please Enter End Date",
                    })}
                  />
                  {errors?.endDate && (
                    <span className="text-danger">
                      {errors?.endDate.message}
                    </span>
                  )}
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label">Purpose of visit</label>
                  <input
                    className="form-control"
                    placeholder="purpose visit"
                    type="text"
                    {...register("visitPurpose", {
                      required: "Please Enter Visit Purpose",
                    })}
                  />
                  {errors?.visitPurpose && (
                    <span className="text-danger">
                      {errors?.visitPurpose.message}
                    </span>
                  )}
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label">Place of visit</label>
                  <input
                    className="form-control"
                    placeholder="Enter place"
                    type="text"
                    {...register("visitPlace", {
                      required: "Please Enter Place Of Visit",
                    })}
                  />
                  {errors?.visitPlace && (
                    <span className="text-danger">
                      {errors?.visitPlace.message}
                    </span>
                  )}
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label">Travel Mode</label>
                  <select
                    className="form-control form-select"
                    name="category"
                    {...register("travelMode", {
                      required: "Please Select Travel Mode",
                    })}
                  >
                    <option selected value="">
                      --Select--
                    </option>
                    <option value="bus">By Bus</option>
                    <option value="train">By Train</option>
                    <option value="plane">By Plane</option>
                    <option value="taxi">By Taxi</option>
                    <option value="rent-car">By Rental Car</option>
                  </select>
                  {errors?.travelMode && (
                    <span className="text-danger">
                      {errors?.travelMode.message}
                    </span>
                  )}
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label">Arrangement Type</label>
                  <select
                    className="form-control form-select"
                    name="category"
                    {...register("arrangementType", {
                      required: "Please Select Arrangement Type",
                    })}
                  >
                    <option selected value="">
                      --Select--
                    </option>
                    <option value="corporation">Corporation</option>
                    <option value="guest-house">Guest House</option>
                  </select>
                  {errors?.arrangementType && (
                    <span className="text-danger">
                      {errors?.arrangementType.message}
                    </span>
                  )}
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label">Expected Budget</label>
                  <input
                    className="form-control"
                    placeholder="Enter expected budget"
                    type="text"
                    {...register("expectedBudget", {
                      required: "Please Enter Expected Budget",
                    })}
                  />
                  {errors?.expectedBudget && (
                    <span className="text-danger">
                      {errors?.expectedBudget.message}
                    </span>
                  )}
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label">Actual Budget</label>
                  <input
                    className="form-control"
                    placeholder="Enter Actual Budget"
                    type="text"
                    {...register("actualBudget", {
                      required: "Please Enter Actual Budget",
                    })}
                  />
                  {errors?.actualBudget && (
                    <span className="text-danger">
                      {errors?.actualBudget.message}
                    </span>
                  )}
                </div>
              </div>
              <div className="col-md-12">
                <label for="" className="form-label">
                  Description
                </label>
                <textarea
                  cols="30"
                  rows="10"
                  className="form-control"
                  style={{ height: "100px" }}
                  {...register("description", {
                    required: "Please Enter Description",
                  })}
                ></textarea>
                {errors?.description && (
                  <span className="text-danger">
                    {errors?.description.message}
                  </span>
                )}
              </div>
            </div>
            <Modal.Footer>
              <div className="col-6 text-end">
                <button
                  type="button"
                  onClick={handleClose}
                  className="btn btn-light me-1"
                >
                  Close
                </button>
                <button type="submit" className="btn btn-success">
                  Save
                </button>
              </div>
            </Modal.Footer>
          </form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default NewTravelRequestModal;
