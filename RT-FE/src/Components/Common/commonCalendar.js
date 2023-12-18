import moment from "moment";
import { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import { convertUtcDateAndTime } from "./Common";
import { CustomToolbar } from "../../Pages/HRDashboard/SubComponent/calendarModals/customToolbar";

const localizer = momentLocalizer(moment);

export const CommonCalendar = ({ events, callback }) => {
  const eventStyleGetter = (event, start, end, isSelected) => {
    const style = {
      backgroundColor: "#32de84",
      color: "white",
      fontSize: "15px",
      fontWeight: "bolder",
      border: "none",
    };
    if (event.eventType == "goals") {
      style.backgroundColor = "#9ADE7B";
    } else if (event.eventType == "travelRequest") {
      style.backgroundColor = "#5FBDFF";
    } else if (event.eventType == "holiday") {
      style.backgroundColor = "blue";
    } else if (event.eventType == "leave") {
      style.backgroundColor = "red";
    }

    return {
      className: "",
      style,
    };
  };

  const handleSelectEvent = (event) => {
    callback(event);
  };

  return (
    <div className='card'>
      <div className='card-body'>
        <Calendar
          localizer={localizer}
          events={events}
          style={{ height: 500 }}
          startAccessor={(val) => convertUtcDateAndTime(val?.startDate)}
          endAccessor={(val) => convertUtcDateAndTime(val?.endDate)}
          views={["month", "week", "day"]}
          components={{
            toolbar: CustomToolbar,
          }}
          eventPropGetter={eventStyleGetter}
          onSelectEvent={handleSelectEvent}
        />
      </div>
    </div>
  );
};
