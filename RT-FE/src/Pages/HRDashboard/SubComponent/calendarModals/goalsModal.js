import React, { useEffect } from "react";
import { Modal } from "react-bootstrap";
import { api } from "../../../../Context/AuthContext";
import moment from "moment";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";

const NewGoalModal = ({ show, setShow, eventData, callback }) => {
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

  const addNewGoal = async (data) => {
    try {
      if (data._id) {
        let response = await api.put("/events/updateEvent", data);
        if (response.status == 200) {
          callback(data);
          toast.success(response.data.message);
        } else {
          toast.error("Something went wrong");
        }
      } else {
        data["eventType"] = "goals";
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

  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Files</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <form
            className="needs-validation"
            onSubmit={handleSubmit(addNewGoal)}
          >
            <div className="row">
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label">Company</label>
                  <input
                    className="form-control"
                    placeholder="company name goes here"
                    type="text"
                    {...register("companyId", {
                      required: "Please Enter Company Name",
                    })}
                  />
                  {errors?.companyId && (
                    <span className="text-danger">
                      {errors?.companyId.message}
                    </span>
                  )}
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label">Goal Type</label>
                  <input
                    className="form-control"
                    placeholder="enter goal type"
                    type="text"
                    {...register("goalType", {
                      required: "Please Enter Goal Type",
                    })}
                  />
                  {errors?.goalType && (
                    <span className="text-danger">
                      {errors?.goalType.message}
                    </span>
                  )}
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label">Subject</label>
                  <input
                    className="form-control"
                    placeholder="Enter Subject"
                    type="text"
                    {...register("title", { required: "Please Enter Subject" })}
                  />
                  {errors?.title && (
                    <span className="text-danger">{errors?.title.message}</span>
                  )}
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label">Target Achievement</label>
                  <input
                    className="form-control"
                    placeholder="Target Achievement"
                    type="text"
                    {...register("targetAchievement", {
                      required: "Please Enter Target Achievement",
                    })}
                  />
                  {errors?.targetAchievement && (
                    <span className="text-danger">
                      {errors?.targetAchievement.message}
                    </span>
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
                  <label for="form-label">Description</label>
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

export default NewGoalModal;
