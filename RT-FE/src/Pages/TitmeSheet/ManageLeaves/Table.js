import { useEffect, useState } from "react";
import NewLeaveModal from "./leaveModal";
import CommonDeleteModal from "../../../Components/Common/commonDeleteModal";
import { api } from "../../../Context/AuthContext";
import { toast } from "react-toastify";
import { CommonDataTable } from "../../../Components/Common/commonDataTable";
import { LeaveTableHeader } from "../../../Components/Common/table.constants";
import { FormattedMessage } from "react-intl";
import moment from "moment";

export default function Table() {

    const [leaveModal,setLeaveModal] = useState(false);
    const [leaveData,setLeaveData] = useState(null);
    const [leaveIndex,setLeaveIndex] = useState(null);
    const [leaveDelete,setLeaveDelete] = useState(null);
    const [leaveEvents,setLeaveEvents] = useState([]);


    useEffect(() => {
        getLeaveEvents()
    },[])
    
    const showLeaveModal = (data,type,index) => {
        setLeaveData(data)
        setLeaveIndex(index)
        if(type == "delete") setLeaveDelete(true)
        if(type !== "delete")setLeaveModal(true)
    }

    const updateLeaveEvents = (eventData) => {
        const filteredEvents = leaveEvents.filter(event => event._id == eventData._id)
        if(filteredEvents.length){
            leaveEvents[leaveIndex] = eventData;
            setLeaveEvents([...leaveEvents])
        }else{
            setLeaveEvents([...leaveEvents, eventData])
        }
    }

    const getLeaveEvents = async () => {
        try{
            let leaveEvents = await api.get("/events/getEvents/leave" );
            setLeaveEvents(leaveEvents.data)
        }catch(err){
            console.error(err)
        }
    }

    const deleteSelectedEvent = async () => {
        try{
            const deleteLeave = await api.delete("/events/deleteEvent/" +leaveData._id)
            if(deleteLeave.status == 200)
            {
                const filteredEvents = leaveEvents.filter(event => event._id != leaveData._id)
                setLeaveEvents([...filteredEvents])
                toast.success(deleteLeave.data.message)
            }
            
        }catch(err){
            console.error(err)
        }
    }

    return(
        <div class="row">
                        <div class="col-12">
                            <div class="card">
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-md-6 mb-3">
                                            <h4>Leaves</h4>
                                        </div>
                                        <div class="col-md-6 mb-3" style={{textAlign: "right"}}>
                                            <button class="btn btn-primary text-right" data-bs-toggle="modal" data-bs-target="#myModal" onClick={() =>showLeaveModal()}>Add New</button>
                                        </div>
                                    </div>

                                    <CommonDataTable 
                                        data={leaveEvents}
                                        tableHeaders={LeaveTableHeader}
                                        actionButtons
                                        editButton
                                        deleteButton
                                        callback={(data,type,index) => showLeaveModal(data,type,index)}
                                        changeSelectedColumnDataDesign={["createdAt","endDate"]}
                                        changedDataCellColumn={(header,accessor) => 
                                    {if(accessor == "createdAt" || accessor == "endDate") {
                                        return{
                                            header:header,
                                            Header:() => <FormattedMessage id={header} defaultMessage={header} />,
                                            accessorKey:accessor,
                                            Cell:({row}) => (
                                                <div>{moment(row.original[accessor]).format("YYYY-DD-MM")}</div>
                                            )
                                        }
                                    }}}
                                    />


                                </div>
                            </div>
                        </div>
                        {
                            leaveModal && (<NewLeaveModal 
                            show={leaveModal} setShow={setLeaveModal} eventData={leaveData} callback={(data) => updateLeaveEvents(data)}
                            />)
                        }

                        {
                            leaveDelete && (
                                <CommonDeleteModal 
                                    header ={ "Leave"} show ={leaveDelete} setShow ={setLeaveDelete}message={`do you really want to delete leave ${leaveData?.title}`} deleteFunction={deleteSelectedEvent}
                                />

                            )
                        }
                    </div>
    )
};
