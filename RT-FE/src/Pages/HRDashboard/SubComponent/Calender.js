import { useEffect, useState } from "react";
import NewHolidayModal from "./calendarModals/holidayModal";
import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import moment from "moment";
import { CustomToolbar } from "./calendarModals/customToolbar";
import { api } from "../../../Context/AuthContext";

const localizer = momentLocalizer(moment);

export default function Calender() {
  const [totalEvents, setTotalEvents] = useState([]);
  const [holidayModal, setHolidayModal] = useState(false);
  const [eventData, setEventData] = useState(null);
  const [travelModal, setTravelModal] = useState(false);
  const [goalsModal, setGoalsModal] = useState(false);

  useEffect(() => {
    getAllEvents();
  }, []);

  const convertUtcDateAndTime = (date) => {
    return new Date(
      moment(
        `${moment(date).format("YYYY-MM-DD")} `,
        "YYYY-MM-DD HH:mm"
      ).format("ddd MMM D YYYY HH:mm:ss [GMT]ZZ (z)")
    );
  };

  const getAllEvents = async () => {
    try {
      const allEvents = await api.get("/holiday/getAllHolidays");
      console.log(allEvents, "events");
      setTotalEvents(allEvents.data);
    } catch (err) {
      console.error(err);
    }
  };

  const showHolidayModal = (data) => {
    setHolidayModal(true);
  };
  const showTravelModal = (data) => {
    setTravelModal(true);
  };
  const showGoalsModal = (data) => {
    setGoalsModal(true);
  };

  const handleSelectEvent = (event) => {
    if (event.eventType == "holiday") {
      setHolidayModal(true);
    }
    setEventData(event);
  };
  return (
    <div className="row">
      <div className="col-12">
        <div className="row">
          <div className="col-lg-3">
            <div className="card">
              <div className="card-body">
                <div className="d-grid" id="external-events">
                  <button
                    className="btn font-16 btn-primary mb-3"
                    id="btn-new-event"
                    onClick={showHolidayModal}
                  >
                    <i className="mdi mdi-plus-circle-outline"></i> Holiday
                  </button>
                  <button
                    className="btn font-16 btn-info mb-3"
                    onClick={showTravelModal}
                  >
                    <i className="mdi mdi-plus-circle-outline"></i> Travel
                    Request
                  </button>
                  <button
                    className="btn font-16 btn-success mb-3"
                    onClick={showGoalsModal}
                  >
                    <i className="mdi mdi-plus-circle-outline"></i> Goals
                  </button>
                </div>

                <div className="row justify-content-center mt-5">
                  <img
                    src="assets/images/verification-img.png"
                    alt=""
                    className="img-fluid d-block"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* <!-- end col--> */}

          <div className="col-lg-9">
            <div className="card">
              <div className="card-body">
                <Calendar
                  localizer={localizer}
                  events={totalEvents}
                  style={{ height: 500 }}
                  startAccessor={(val) => convertUtcDateAndTime(val?.startDate)}
                  endAccessor={(val) => convertUtcDateAndTime(val?.endDate)}
                  views={["month", "week", "day"]}
                  components={{
                    toolbar: CustomToolbar,
                  }}
                  onSelectEvent={handleSelectEvent}
                />
              </div>
            </div>
          </div>
          {/* <!-- end col --> */}
        </div>

        <div style={{ clear: "both" }}></div>

        {/* <!-- Add New Event MODAL --> */}
        <div className="modal fade" id="event-modal" tabindex="-1">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header py-3 px-4 border-bottom-0">
                <h5 className="modal-title" id="">
                  Set New Holiday
                </h5>

                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-hidden="true"
                ></button>
              </div>
              <div className="modal-body p-4">
                <form
                  className="needs-validation"
                  name="event-form"
                  id="form-event"
                  novalidate
                >
                  <div className="row">
                    <div className="col-12">
                      <div className="mb-3">
                        <label className="form-label">Company Name</label>
                        <input
                          className="form-control"
                          placeholder="company name goes here"
                          type="text"
                          name="title"
                          id=""
                          required
                          value=""
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="mb-3">
                        <label className="form-label">Event Name</label>
                        <input
                          className="form-control"
                          placeholder="event name goes here"
                          type="text"
                          name="title"
                          id=""
                          required
                          value=""
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label className="form-label">Start Date</label>
                        <input
                          className="form-control"
                          placeholder=""
                          type="date"
                          name="title"
                          id=""
                          required
                          value=""
                        />
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="mb-3">
                        <label className="form-label">End Date</label>
                        <input
                          className="form-control"
                          placeholder=""
                          type="date"
                          name="title"
                          id=""
                          required
                          value=""
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="mb-3">
                        <label className="form-label">Description</label> <br />
                        <textarea
                          name=""
                          id=""
                          cols="30"
                          rows="10"
                          className="form-control"
                          style={{ height: "100px" }}
                        ></textarea>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="mb-3">
                        <label className="form-label">Status</label>
                        <select
                          className="form-control form-select"
                          name="category"
                          id="event-category"
                        >
                          <option selected>--Select--</option>
                          <option value="published">Published</option>
                          <option value="unpublished">Unpublished</option>
                        </select>
                        <div className="invalid-feedback">
                          Please select a valid event category
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row mt-2">
                    <div className="col-6">
                      <button
                        type="button"
                        className="btn btn-danger"
                        id="btn-delete-event"
                      >
                        Delete
                      </button>
                    </div>
                    <div className="col-6 text-end">
                      <button
                        type="button"
                        className="btn btn-light me-1"
                        data-bs-dismiss="modal"
                      >
                        Close
                      </button>
                      <button
                        type="submit"
                        className="btn btn-success"
                        id="btn-save-event"
                      >
                        Save
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            {/* <!-- end modal-content--> */}
          </div>
          {/* <!-- end modal dialog--> */}
        </div>
        {/* <!-- end modal-->
                            <!-- Add New Travel MODAL -->
                            <!-- The Modal --> */}
        <div className="modal fade" id="myModal">
          <div className="modal-dialog">
            <div className="modal-content">
              {/* <!-- Modal Header --> */}
              <div className="modal-header">
                <h4 className="modal-title">Add New Travel</h4>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                ></button>
              </div>

              {/* <!-- Modal body --> */}
              <div className="modal-body">
                <div className="row">
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label">Company Name</label>
                      <input
                        className="form-control"
                        placeholder="company name goes here"
                        type="text"
                        name="title"
                        id=""
                        required
                        value=""
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label">Employee</label>
                      <input
                        className="form-control"
                        placeholder="choose an Employee"
                        type="text"
                        name="title"
                        id=""
                        required
                        value=""
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label">Start Date</label>
                      <input
                        className="form-control"
                        placeholder=""
                        type="date"
                        name="title"
                        id=""
                        required
                        value=""
                      />
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label">End Date</label>
                      <input
                        className="form-control"
                        placeholder=""
                        type="date"
                        name="title"
                        id=""
                        required
                        value=""
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label">Purpose of visit</label>
                      <input
                        className="form-control"
                        placeholder="purpose visit"
                        type="text"
                        name="title"
                        id=""
                        required
                        value=""
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label">Place of visit</label>
                      <input
                        className="form-control"
                        placeholder="Enter place"
                        type="text"
                        name="title"
                        id=""
                        required
                        value=""
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label">Travel Mode</label>
                      <select
                        className="form-control form-select"
                        name="category"
                        id=""
                      >
                        <option selected>--Select--</option>
                        <option value="bus">By Bus</option>
                        <option value="train">By Train</option>
                        <option value="plane">By Plane</option>
                        <option value="taxi">By Taxi</option>
                        <option value="rent-car">By Rental Car</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label">Arrangement Type</label>
                      <select
                        className="form-control form-select"
                        name="category"
                        id=""
                      >
                        <option selected>--Select--</option>
                        <option value="corporation">Corporation</option>
                        <option value="guest-house">Guest House</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label">Expected Budget</label>
                      <input
                        className="form-control"
                        placeholder="Enter expected budget"
                        type="text"
                        name="title"
                        id=""
                        required
                        value=""
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label">Actual Budget</label>
                      <input
                        className="form-control"
                        placeholder="Enter Actual Budget"
                        type="text"
                        name="title"
                        id=""
                        required
                        value=""
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <label for="" className="form-label">
                      Description
                    </label>
                    <textarea
                      name=""
                      id=""
                      cols="30"
                      rows="10"
                      className="form-control"
                      style={{ height: "100px" }}
                    ></textarea>
                  </div>
                </div>
                <div className="row mt-2">
                  <div className="col-md-6">
                    <button
                      type="button"
                      className="btn btn-danger"
                      id="btn-delete-event"
                    >
                      Delete
                    </button>
                  </div>
                  <div className="col-md-6" style={{ textAlign: "right" }}>
                    <button
                      type="submit"
                      className="btn btn-success"
                      id="btn-save-event"
                    >
                      Save
                    </button>
                  </div>
                </div>
              </div>

              {/* <!-- Modal footer --> */}
            </div>
          </div>
        </div>
        {/* <!-- end modal-->

                            <!-- this is goals modal -->


                            <!-- The Modal --> */}
        <div className="modal fade" id="myModal2">
          <div className="modal-dialog">
            <div className="modal-content">
              {/* 
                                        <!-- Modal Header --> */}
              <div className="modal-header">
                <h4 className="modal-title">Set New Goal</h4>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                ></button>
              </div>

              {/* <!-- Modal body --> */}
              <div className="modal-body">
                <div className="row">
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label">Company</label>
                      <input
                        className="form-control"
                        placeholder="company name goes here"
                        type="text"
                        name="title"
                        id=""
                        required
                        value=""
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label">Goal Type</label>
                      <input
                        className="form-control"
                        placeholder="enter goal type"
                        type="text"
                        name="title"
                        id=""
                        required
                        value=""
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label">Subject</label>
                      <input
                        className="form-control"
                        placeholder="Enter Subject"
                        type="text"
                        name="title"
                        id=""
                        required
                        value=""
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label">Target Achievement</label>
                      <input
                        className="form-control"
                        placeholder="Target Achievement"
                        type="text"
                        name="title"
                        id=""
                        required
                        value=""
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label">Start Date</label>
                      <input
                        className="form-control"
                        placeholder=""
                        type="date"
                        name="title"
                        id=""
                        required
                        value=""
                      />
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label">End Date</label>
                      <input
                        className="form-control"
                        placeholder=""
                        type="date"
                        name="title"
                        id=""
                        required
                        value=""
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="mb-3">
                      <label for="form-label">Description</label>
                      <textarea
                        name=""
                        id=""
                        cols="30"
                        rows="10"
                        className="form-control"
                        style={{ height: "100px" }}
                      ></textarea>
                    </div>
                  </div>
                  <div className="row mt-2">
                    <div className="col-md-6">
                      <button
                        type="button"
                        className="btn btn-danger"
                        id="btn-delete-event"
                      >
                        Delete
                      </button>
                    </div>
                    <div className="col-md-6" style={{ textAlign: "right" }}>
                      <button
                        type="submit"
                        className="btn btn-success"
                        id="btn-save-event"
                      >
                        Save
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {holidayModal && (
        <NewHolidayModal
          show={holidayModal}
          setShow={setHolidayModal}
          eventData={eventData}
        />
      )}
    </div>
  );
}
