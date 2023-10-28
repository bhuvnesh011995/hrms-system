import { Box, IconButton } from "@mui/material"
import { MaterialReactTable } from "material-react-table"
import { useCallback, useEffect, useMemo, useState } from "react"
import { Button } from "react-bootstrap"
import AddNewEmployee from "./Modals/AddNewEmployee"
import { getAllEmployees } from "../../../Utility/API/employee"
import { Edit as EditIcon, Delete as DeleteIcon } from "@mui/icons-material";
import AddNew from "./AddNew"
import View from "./View"



export default function ListAllEmployees() {


    const [isOpen,setIsOpen] = useState(false)
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [viewData, setViewData] = useState(null);
    const [isViewOpen, setIsViewOpen] = useState(false);
  
    const getEmployees = useCallback(async () => {
      setIsLoading(true);
      let res = await getAllEmployees();
      if (res.status === 200) {
        setData(res.data);
        setIsLoading(false);
      } else {
        console.log(res);
        setIsLoading(false);
        setIsError(true);
      }
    }, []);
  
    useEffect(() => {
        getEmployees();
    }, []);


let columns = useMemo(()=>[
    {
        accessorFn:(row)=>({
            name: `${row.fName} ${row.lName}`,
            shift:row.shift?.name||"NA",
            id:row._id
    }),
        id:"name",
        header:"Name",
        size:"100",
        Cell:({cell})=>(
        <Box
            sx={{
                display: 'flex',
                flexDirection:"column",
              }}
            >
                <div>{`${cell.getValue()?.name}`}</div>
                <div style={{fontSize:".7rem"}}>ID : {cell.getValue()?.id}</div>
                <div style={{fontSize:".7rem"}}>Shift : {cell.getValue()?.shift}</div>
                {/* <a style={{cursor:"pointer",color:"blue",fontSize:".7rem"}}>Download Profile</a> */}
            </Box>)
        
    },
    {
        accessorFn:(row)=>({
            company:row.company?.name||"NA",
            location:row.location?.name||"NA",
            department:row.department?.name||"NA",
            designation:row.designation?.name||"NA"
        }),
        id:"company",
        header:"Company",
        size:"200",
        Cell:({cell})=>(
            <Box
            sx={{
                display: 'flex',
                flexDirection:"column",
              }}
            >
                <div>Company :{cell.getValue()?.company}</div>
                <div style={{fontSize:".7rem"}}>Location :{cell.getValue()?.location}</div>
              <div style={{fontSize:".7rem"}}>Department :{cell.getValue()?.department}</div>
              <div style={{fontSize:".7rem"}}>Designation :{cell.getValue()?.designation}</div>
            </Box>
        )
    },
    {
        accessorFn:(row)=>({
            name: `${row.fName} ${row.lName}`,
            email:row.email,
            mobile:row.phone
        }),
        id:"contact",
        header:"Contact",
        size:"100",
        Cell:({cell})=>(
            <Box 
            sx={{
                display: 'flex',
                flexDirection:"column",
              }}
            >
                <span><i className="bx bx-user"></i>{cell.getValue()?.name}</span>
                <span><i className="dripicons-mail"></i>{cell.getValue()?.email}</span>
                <span><i className="dripicons-phone"></i>{cell.getValue()?.mobile}</span>
            </Box>
        )
    },
    {
        accessorFn:(row)=>row.reportTo ? `${row.reportTo.fName} ${row.reportTo.lName}`:"NA",
        header:"Report To",
        size:"100"
    },
    {
        accessorFn:(row)=>({
            role:row.role?.name || "NA",
            status:row.role?.status || "NA"
        }),
        header:"Role",
        size:"100",
        Cell:({cell})=>(
            <Box
            sx={{
                display:"flex",
                flexDirection:"column"
            }}
            >
                <span>{cell.getValue()?.role}</span>
                <Box
                sx={(theme)=>({
                    color:"white",
                    backgroundColor:
                    cell.getValue()?.status==="ACTIVE"? theme.palette.success.dark : theme.palette.error.dark,
                    width:`${cell.getValue()?.status.length+1}ch`
                })}
                >
                {cell.getValue()?.status}
                </Box>
                <span style={{fontSize:".6rem",margin:0}} className={cell.getValue()?.status==="ACTIVE"?"bg-success":"bg-danger"}></span>
            </Box>
        )
    },
],[])
    return(
        <div className="card">
            <div className="card-body">
                <h4>All Employees List</h4>
                <div className="d-flex justify-content-end me-5">
                    <Button onClick={()=>{
                    setIsOpen(true)}}>Add New</Button>
                </div>
               
            
                <MaterialReactTable columns={columns}
                data={data}
                enableRowActions
                positionActionsColumn="last"
                renderRowActions={({row})=>(
                    <Box
                    sx={{ display: "flex", flexWrap: "nowrap", gap: "8px" }}
                    >
                        <IconButton
                        color="info"
                        >
                            <i className="fas fa-eye"></i>
                        </IconButton>

                        <IconButton
                        color="secondary"
                        >
                            <EditIcon />
                        </IconButton>
                        <IconButton
                        color="error">
                       <DeleteIcon />
                        </IconButton>
                    </Box>
                )}

                />
                {isOpen && <AddNew viewData={viewData}
setViewData={setViewData}
getEmployees={getEmployees} show={isOpen} setShow={setIsOpen}/>}
                                    {isViewOpen && (
              <View
                viewData={viewData}
                setViewData={setViewData}
                show={isViewOpen}
                setShow={setIsViewOpen}
              />
            )}  
            </div>
        </div>
    )
};
