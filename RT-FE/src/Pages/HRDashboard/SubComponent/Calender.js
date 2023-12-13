import { useEffect, useState } from "react";
import NewHolidayModal from "./calendarModals/holidayModal";
import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import moment from "moment";
import { CustomToolbar } from "./calendarModals/customToolbar";
import { api } from "../../../Context/AuthContext";
import NewTravelRequestModal from "./calendarModals/travelRequestModal";
import NewGoalModal from "./calendarModals/goalsModal";

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
    } else if (event.eventType == "travelRequest") {
      setTravelModal(true);
    } else if (event.eventType == "goals") {
      setGoalsModal(true);
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
          callback={(data) => console.log(data)}
        />
      )}
    </div>
  );
}
