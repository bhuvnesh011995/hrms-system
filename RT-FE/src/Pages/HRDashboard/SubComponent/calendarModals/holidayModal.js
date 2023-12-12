import React, { useEffect } from "react";
import { Modal } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { api } from "../../../../Context/AuthContext";
import moment from "moment";

const NewHolidayModal = ({ show, setShow, eventData }) => {
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

  const addNewHoliday = async (data) => {
    try {
      if (data._id) {
        let response = await api.post("/holiday/updateHoliday", data);
        console.log(response.data);
      } else {
        data["eventType"] = "holiday";
        let response = await api.post("/holiday/addNewHoliday", data);
        console.log(response.data);
      }
    } catch (err) {
      console.error(err);
    }
    // setShow(false);
  };

  return (
    <div>
      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Files</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <form
            className="needs-validation"
            onSubmit={handleSubmit(addNewHoliday)}
          >
            <div className="row">
              <div className="col-12">
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
              <div className="col-12">
                <div className="mb-3">
                  <label className="form-label">Event Name</label>
                  <input
                    className="form-control"
                    placeholder="event name goes here"
                    type="text"
                    {...register("title", {
                      required: "Please Enter Event Name",
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
              <div className="col-md-12">
                <div className="mb-3">
                  <label className="form-label">Description</label> <br />
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
              <div className="col-12">
                <div className="mb-3">
                  <label className="form-label">Status</label>
                  <select
                    className="form-control form-select"
                    name="category"
                    {...register("status", {
                      required: "Please Select Status",
                    })}
                  >
                    <option selected value="">
                      --Select--
                    </option>
                    <option value="published">Published</option>
                    <option value="unpublished">Unpublished</option>
                  </select>
                  {errors?.status && (
                    <span className="text-danger">
                      {errors?.status.message}
                    </span>
                  )}
                  <div className="invalid-feedback">
                    Please select a valid event category
                  </div>
                </div>
              </div>
            </div>
            <Modal.Footer>
              <div className="col-6 text-end">
                <button
                  type="button"
                  onClick={() => setShow(false)}
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

export default NewHolidayModal;
