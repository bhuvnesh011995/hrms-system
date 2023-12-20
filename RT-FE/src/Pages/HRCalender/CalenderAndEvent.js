import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import { api, useAuth } from "../../Context/AuthContext";
import { useEffect } from "react";
import { useState } from "react";
import { convertUtcDateAndTime } from "../../Components/Common/Common";
import { CustomToolbar } from "../HRDashboard/SubComponent/calendarModals/customToolbar";
import { CommonCalendar } from "../../Components/Common/commonCalendar";
import NewLeaveModal from "../TitmeSheet/ManageLeaves/leaveModal";
import NewGoalModal from "../HRDashboard/SubComponent/calendarModals/goalsModal";
import NewTravelRequestModal from "../HRDashboard/SubComponent/calendarModals/travelRequestModal";
import NewHolidayModal from "../HRDashboard/SubComponent/calendarModals/holidayModal";

const localizer = momentLocalizer(moment);

export default function CalenderAndEvent() {
  const [totalEvents, setTotalEvents] = useState([]);
  const [holidayModal, setHolidayModal] = useState(false);
  const [travelModal, setTravelModal] = useState(false);
  const [goalsModal, setGoalsModal] = useState(false);
  const [leaveModal, setLeaveModal] = useState(false);
  const [eventData, setEventData] = useState(null);
  const { permissions } = useAuth();

  useEffect(() => {
    getAllEvents();
  }, []);

  const getAllEvents = async () => {
    try {
      const allEvents = await api.get("/events/getAllEvents");
      setTotalEvents(allEvents.data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleSelectEvent = (event) => {
    if (event.eventType == "holiday") {
      setHolidayModal(true);
    } else if (event.eventType == "travelRequest") {
      setTravelModal(true);
    } else if (event.eventType == "goals") {
      setGoalsModal(true);
    } else if (event.eventType == "leave") {
      setLeaveModal(true);
    }
    setEventData(event);
  };

  const updateAllEvents = (eventData) => {
    let selectedIndex;
    const filterEvents = totalEvents.filter((event, index) => {
      if (event._id == eventData._id) {
        selectedIndex = index;
        return event._id == eventData._id;
      }
    });

    if (filterEvents.length) {
      totalEvents[selectedIndex] = eventData;
      setTotalEvents([...totalEvents]);
    } else {
      setTotalEvents([...totalEvents, eventData]);
    }
  };

  const showCalendarModal = (data, type) => {
    setEventData(null);
    if (type == "holiday") {
      setHolidayModal(true);
    } else if (type == "travelRequest") {
      setTravelModal(true);
    } else if (type == "goals") {
      setGoalsModal(true);
    } else if (type == "leave") {
      setLeaveModal(true);
    }
  };

  return (
    <div class='row'>
      <div class='col-12'>
        <div class='row'>
          <div class='col-lg-3'>
            <div class='card'>
              <div class='card-body'>
                {(permissions.includes("All") ||
                  permissions.includes("add60")) && (
                  <div className='d-grid' id='external-events'>
                    <button
                      className='btn font-16 btn-primary mb-3'
                      id='btn-new-event'
                      onClick={() => showCalendarModal(null, "holiday")}
                    >
                      <i className='mdi mdi-plus-circle-outline'></i> Holiday
                    </button>
                    <button
                      className='btn font-16 btn-info mb-3'
                      onClick={() => showCalendarModal(null, "travelRequest")}
                    >
                      <i className='mdi mdi-plus-circle-outline'></i> Travel
                      Request
                    </button>
                    <button
                      className='btn font-16 btn-success mb-3'
                      onClick={() => showCalendarModal(null, "goals")}
                    >
                      <i className='mdi mdi-plus-circle-outline'></i> Goals
                    </button>
                    <button
                      className='btn font-16 btn-danger mb-3'
                      onClick={() => showCalendarModal(null, "leave")}
                    >
                      <i className='mdi mdi-plus-circle-outline'></i> Leave
                    </button>
                  </div>
                )}

                {/* <div id='external-events' class='mt-2'>
                  <br />
                  <p class='text-muted'>
                    Drag and drop your event or click in the calendar
                  </p>
                  <div
                    class='external-event fc-event bg-success'
                    data-class='bg-success'
                  >
                    <i class='mdi mdi-checkbox-blank-circle font-size-11 me-2'></i>
                    Holidays
                  </div>
                  <div
                    class='external-event fc-event bg-info'
                    data-class='bg-info'
                  >
                    <i class='mdi mdi-checkbox-blank-circle font-size-11 me-2'></i>
                    Travel Request
                  </div>
                  <div
                    class='external-event fc-event bg-warning'
                    data-class='bg-warning'
                  >
                    <i class='mdi mdi-checkbox-blank-circle font-size-11 me-2'></i>
                    Goals
                  </div>
                  <div
                    class='external-event fc-event bg-danger'
                    data-class='bg-danger'
                  >
                    <i class='mdi mdi-checkbox-blank-circle font-size-11 me-2'></i>
                    Upcoming Birthday
                  </div>
                </div> */}

                <div class='row justify-content-center mt-5'>
                  <img
                    src='assets/images/verification-img.png'
                    alt=''
                    class='img-fluid d-block'
                  />
                </div>
              </div>
            </div>
          </div>
          {/* <!-- end col--> */}

          <div class='col-lg-9'>
            <div class='card'>
              <div class='card-body'>
                <CommonCalendar
                  events={totalEvents}
                  callback={(event) =>
                    (permissions.includes("All") ||
                      permissions.includes("update60")) &&
                    handleSelectEvent(event)
                  }
                />
              </div>
            </div>
          </div>
          {/* <!-- end col --> */}
        </div>

        <div style={{ clear: "both" }}></div>

        {/* <!-- Add New Event MODAL --> */}
        <div class='modal fade' id='event-modal' tabindex='-1'>
          <div class='modal-dialog modal-dialog-centered'>
            <div class='modal-content'>
              <div class='modal-header py-3 px-4 border-bottom-0'>
                <h5 class='modal-title' id='modal-title'>
                  Event
                </h5>

                <button
                  type='button'
                  class='btn-close'
                  data-bs-dismiss='modal'
                  aria-hidden='true'
                ></button>
              </div>
              <div class='modal-body p-4'>
                <form
                  class='needs-validation'
                  name='event-form'
                  id='form-event'
                  novalidate
                >
                  <div class='row'>
                    <div class='col-12'>
                      <div class='mb-3'>
                        <label class='form-label'>Event Name</label>
                        <input
                          class='form-control'
                          placeholder='Insert Event Name'
                          type='text'
                          name='title'
                          id='event-title'
                          required
                          value=''
                        />
                        <div class='invalid-feedback'>
                          Please provide a valid event name
                        </div>
                      </div>
                    </div>
                    <div class='col-12'>
                      <div class='mb-3'>
                        <label class='form-label'>Category</label>
                        <select
                          class='form-control form-select'
                          name='category'
                          id='event-category'
                        >
                          <option selected> --Select-- </option>
                          <option value='bg-danger'>Danger</option>
                          <option value='bg-success'>Success</option>
                          <option value='bg-primary'>Primary</option>
                          <option value='bg-info'>Info</option>
                          <option value='bg-dark'>Dark</option>
                          <option value='bg-warning'>Warning</option>
                        </select>
                        <div class='invalid-feedback'>
                          Please select a valid event category
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class='row mt-2'>
                    <div class='col-6'>
                      <button
                        type='button'
                        class='btn btn-danger'
                        id='btn-delete-event'
                      >
                        Delete
                      </button>
                    </div>
                    <div class='col-6 text-end'>
                      <button
                        type='button'
                        class='btn btn-light me-1'
                        data-bs-dismiss='modal'
                      >
                        Close
                      </button>
                      <button
                        type='submit'
                        class='btn btn-success'
                        id='btn-save-event'
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
        {/* <!-- end modal--> */}
      </div>
      {holidayModal && (
        <NewHolidayModal
          show={holidayModal}
          setShow={setHolidayModal}
          eventData={eventData}
          callback={(data) => updateAllEvents(data)}
        />
      )}
      {travelModal && (
        <NewTravelRequestModal
          show={travelModal}
          setShow={setTravelModal}
          eventData={eventData}
          callback={(data) => updateAllEvents(data)}
        />
      )}
      {goalsModal && (
        <NewGoalModal
          show={goalsModal}
          setShow={setGoalsModal}
          eventData={eventData}
          callback={(data) => updateAllEvents(data)}
        />
      )}
      {leaveModal && (
        <NewLeaveModal
          show={leaveModal}
          setShow={setLeaveModal}
          eventData={eventData}
          callback={(data) => updateAllEvents(data)}
        />
      )}
    </div>
  );
}
