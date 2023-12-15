
import MaterialReactTable from "material-react-table";
import { Box, IconButton } from "@mui/material";
import { Edit as EditIcon, Delete as DeleteIcon } from "@mui/icons-material";
import { useMemo, useState } from "react";
import { getAllEmployeeExit } from "../../../Utility/API/employeeexit";
import { useEffect } from "react";
import { deleteEmployeeExit } from "../../../Utility/API/employeeexit";
export default function Table() {
  const [data, setData] =useState([])

 async function getEmployeeExit(){
   let res = await  getAllEmployeeExit()
   if(res.status ===200){
     let array = res.data.employeeexit.map(ele=>({
       employee:ele.employeeToExit,
       company:ele.company,
       typeofExit:ele.typeofExit,
       exitDate:ele.exitDate,
       exitInterview:ele.exitInterview,
       createdAt:ele.createdAt?.slice(0,10).split("-").reverse().join("/"),
       id:ele._id
     }))
     setData(array)
   }else {
     setData([])
   }
 }


 useEffect(()=>{
  getEmployeeExit()
 },[])




     const columns = useMemo(() => [
     {
         accessorKey: 'employee',
         header: 'Employee',                                      
                                              
       },
       {
           accessorKey: 'company',
           header: 'Company',                                      
                                                
         },
         {
             accessorKey: 'typeofExit',
             header: 'ExitType',                                      
                                                  
           },
           {
               accessorKey: 'exitDate',
               header: 'ExitDate',                                      
                                                    
             },
             {
                 accessorKey: 'exitInterview',
                 header: 'ExitInterview',                                      
                                                      
               },


     ],[])


     const handleDelete =  async (id) =>{
      alert(id)
      try{
       let res   = await deleteEmployeeExit(id)
       if(res.status == 204){
           console.log("success")
           getEmployeeExit()

       }
      }
      catch(error){
       console.log(error)
      }
      
     }


  return (
    <>
      

  <MaterialReactTable
 columns={columns}
 data={data}
 enableColumnActions={false}
 enableColumnFilters={false}
 enableSorting={false}
 enableTopToolbar={false}
 enableRowActions
             positionActionsColumn="last"
             enableRowNumbers
             rowNumberMode="static"
             renderRowActions={({ row, table }) => (
               <Box
                 sx={{ display: "flex", flexWrap: "nowrap", gap: "8px" }}
               >
                   <IconButton
                   color="secondary"
                   onClick={() => {
                     table.setEditingRow(row);
                   }}
                 >
                   <EditIcon />
                 </IconButton>
                   <IconButton
                   color="error"
                   onClick={() => handleDelete(row.original.id)}
                 >
                   <DeleteIcon />
                 </IconButton>
               </Box>
             )}
 muiTableProps={{
   sx: {
     border: '1px solid rgba(81, 81, 81, 1)',
   },
 }}
 muiTableHeadCellProps={{
   sx: {
     border: '1px solid rgba(81, 81, 81, 1)',
   },
 }}
 muiTableBodyCellProps={{
   sx: {
     border: '1px solid rgba(81, 81, 81, 1)',
   },
 }}
 /> 
    </>
  );
}
