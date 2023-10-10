import { Box, IconButton } from "@mui/material"
import { MaterialReactTable } from "material-react-table"
import { useMemo, useState } from "react"
import { Button } from "react-bootstrap"
import AddNewEmployee from "./Modals/AddNewEmployee"

let data = [
    {
        id:"KS0082",
        fName:"Amanpreeti",
        lName:"Kaur ",
        role:"Cleaner",
        roleStatus:"ACTIVE",
        company:"KMAC International Pte Ltd",
        location:"Customer Site",
        department:"Operation (Site)",
        subDepartment:"",
        designation:"Household Service Worker",
        gender:"",
        dob:"",
        email:"preetiaman125@gmail.com",
        mobile:"85777653",
        officeShift:"(Off Monday)",
        reportTo:"Manager",
        idType:"",
        idNumber:"",
        ppNumber:"",
        wpNumber:"",
        address:"",
        vaccination:"",
        immigrationStatus:"",
        prEffectiveDate:"",



    }
]

export default function ListAllEmployees({setIsOpen}) {

let columns = useMemo(()=>[
    {
        accessorFn:(row)=>({
            name: `${row.fName} ${row.lName}`,
            officeShift:row.officeShift,
            id:row.id
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
                <div style={{fontSize:".7rem"}}>Shift RC : {cell.getValue()?.officeShift}</div>
                <a style={{cursor:"pointer",color:"blue",fontSize:".7rem"}}>Download Profile</a>
            </Box>)
        
    },
    {
        accessorFn:(row)=>({
            company:row.company,
            location:row.location,
            department:row.department,
            designation:row.designation
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
            mobile:row.mobile
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
        accessorKey:"report",
        header:"Report To",
        size:"100"
    },
    {
        accessorFn:(row)=>({
            role:row.role,
            roleStatus:row.roleStatus
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
                    backgroundColor:
                    cell.getValue()?.roleStatus==="ACTIVE"? theme.palette.success.dark : theme.palette.error.dark,
                    width:`${cell.getValue()?.roleStatus.length+1}ch`
                })}
                >
                {cell.getValue()?.roleStatus}
                </Box>
                <span style={{fontSize:".6rem",margin:0}} className={cell.getValue()?.roleStatus==="ACTIVE"?"bg-success":"bg-danger"}></span>
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
                    <Box>
                        <IconButton>
                        <i class="far fa-arrow-alt-circle-right" style={{fontSize:"10px"}}></i>
                        </IconButton>
                        <IconButton>
                        <i class="fas fa-trash-alt" style={{fontSize:"10px"}}></i>
                        </IconButton>
                    </Box>
                )}

                />
            </div>
        </div>
    )
};
