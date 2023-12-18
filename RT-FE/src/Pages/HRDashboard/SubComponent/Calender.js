import { useEffect, useState } from "react";
import NewHolidayModal from "./calendarModals/holidayModal";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { api } from "../../../Context/AuthContext";
import NewTravelRequestModal from "./calendarModals/travelRequestModal";
import NewGoalModal from "./calendarModals/goalsModal";
import { CommonCalendar } from "../../../Components/Common/commonCalendar";
import NewLeaveModal from "../../TitmeSheet/ManageLeaves/leaveModal";

export default function Calender() {
  const [totalEvents, setTotalEvents] = useState([]);
  const [holidayModal, setHolidayModal] = useState(false);
  const [eventData, setEventData] = useState(null);
  const [travelModal, setTravelModal] = useState(false);
  const [goalsModal, setGoalsModal] = useState(false);
  const [leaveModal, setLeaveModal] = useState(false);

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

  const showCalendarModal = (data, type) => {
    setEventData(null);
    if (type == "holiday") {
      setHolidayModal(true);
    } else if (type == "travelRequest") {
      setTravelModal(true);
    } else if (type == "goals") {
      setGoalsModal(true);
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

  return (
    <div className='row'>
      <div className='col-12'>
        <div className='row'>
          <div className='col-lg-3'>
            <div className='card'>
              <div className='card-body'>
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
                </div>

                <div className='row justify-content-center mt-5'>
                  <img
                    src='assets/images/verification-img.png'
                    alt=''
                    className='img-fluid d-block'
                  />
                </div>
              </div>
            </div>
          </div>
          {/* <!-- end col--> */}

          <div className='col-lg-9'>
            <CommonCalendar
              events={totalEvents}
              callback={(event) => handleSelectEvent(event)}
            />
          </div>
          {/* <!-- end col --> */}
        </div>

        <div style={{ clear: "both" }}></div>
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
