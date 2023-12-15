import { useEffect, useState } from "react";
import NewHolidayModal from "../../HRDashboard/SubComponent/calendarModals/holidayModal";
import { api } from "../../../Context/AuthContext";
import { CommonDataTable } from "../../../Components/Common/commonDataTable";
import { holidayTableHeader } from "../../../Components/Common/table.constants";
import { FormattedMessage } from "react-intl";
import moment from "moment";
import CommonDeleteModal from "../../../Components/Common/commonDeleteModal";
import { toast } from "react-toastify";

export default function Table() {

    useEffect(() => {
        getHolidayEvents()
    },[])

    const [holidayModal,setHolidayModal] = useState(false)
    const [holidayEvents, setHolidayEvents] = useState([])
    const [deleteHolidayEvent, setDeleteHolidayEvent] = useState(false)
    const [eventIndex, setEventIndex] = useState(null)
    const [eventData, setEventData] = useState(null)

    const getHolidayEvents = async () => {
        try{
            let holidayEvents = await api.get("/events/getEvents/holiday" );
            setHolidayEvents(holidayEvents.data)
        }catch(err){
            console.error(err)
        }
    }

    const showHolidayModal = (data,type,index) => {
        setEventIndex(index)
        setEventData(data)
        if(type == "delete") {
            setDeleteHolidayEvent(true)
        }
        if(type !== "delete") setHolidayModal(true)
    }

    const updateHolidayEvents = (eventData) => {
        const filteredEvents = holidayEvents.filter(event => event._id == eventData._id)
        if(filteredEvents.length){
            holidayEvents[eventIndex] = eventData;
            setHolidayEvents([...holidayEvents])
        }else{
            setHolidayEvents([...holidayEvents,eventData])
        }
    }

    const deleteSelectedEvent = async () => {
        try{
            const deleteHoliday = await api.delete("/events/deleteEvent/" +eventData._id)
            if(deleteHoliday.status == 200)
            {
                const filteredEvents = holidayEvents.filter(event => event._id != eventData._id)
                setHolidayEvents([...filteredEvents])
                toast.success(deleteHoliday.data.message)
            }
            
        }catch(err){
            console.error(err)
        }
    }

    return(
        <div className="row">
                        <div className="col-12">
                            <div className="card">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-md-6 mb-3">
                                            <h4>Holidays</h4>
                                        </div>
                                        <div className="col-md-6 mb-3" style={{textAlign: "right"}}>
                                            <button className="btn btn-primary text-right" onClick={() => showHolidayModal()} data-bs-toggle="modal" data-bs-target="#myModal">Add New</button>
                                        </div>
                                    </div>

                                    <CommonDataTable 
                                        data={holidayEvents}
                                        tableHeaders={holidayTableHeader}
                                        changeSelectedColumnDataDesign={["startDate","endDate"]}
                                        changedDataCellColumn={(header, accessor) => {
                                            if(accessor == "startDate" || accessor == "endDate"){
                                                return {
                                                    accessorKey:accessor,
                                                    header:header,
                                                    Header:() => (
                                                        <FormattedMessage
                                                        id={header}
                                                        defaultMessage={header}
                                                        />
                                                    ),
                                                    Cell:({row}) => (
                                                        <div>
                                                            {moment(row.original[accessor]).format("YYYY-DD-MM")}
                                                        </div>
                                                    )
                                                }
                                            }
                                        }}
                                        actionButtons
                                        editButton
                                        deleteButton
                                        callback={(data,type,index) => showHolidayModal(data,type,index)}
                                    />

                                </div>
                            </div>
                        </div>
                        {
                            holidayModal &&(
                                 <NewHolidayModal 
                                show={holidayModal}
                                setShow={setHolidayModal}
                                eventData={eventData} 
                                callback={(data) => updateHolidayEvents(data)}
                            />
                            )
                        }

                        {
                            deleteHolidayEvent && <CommonDeleteModal 
                            header={"Holiday"}
                             show={deleteHolidayEvent} 
                             setShow={setDeleteHolidayEvent} 
                             message={`do you really want to delete event ${eventData?.title}` }
                              deleteFunction={deleteSelectedEvent}
                            />
                        }
                    </div>
    )
};
