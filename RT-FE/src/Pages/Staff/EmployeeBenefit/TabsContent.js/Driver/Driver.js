
import MaterialReactTable from "material-react-table";
import { Box, IconButton } from "@mui/material";
import { Edit as EditIcon, Delete as DeleteIcon } from "@mui/icons-material";
import { useMemo, useState } from "react";
import AddNew from "./AddNew";
import { deleteDriver, getAllDriver } from "../../../../../Utility/API/driver";
import { useEffect  } from "react";
import { useCallback } from "react";



export default function Driver() {
    const [isOpen,setIsOpen] = useState(false)
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    
  
    const getDriver = useCallback(async () => {
      setIsLoading(true);
      let res = await getAllDriver();
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
      getDriver();
    }, []);
  
    console.log("data",data)

    const columns = useMemo(() => [
      {
        accessorFn: (row) =>
          row.employee ? row.employee.fName : "not available",
        id: "employee",
        header: "Employee",
      },
      {
        accessorFn: (row) => row.benefitYear,
        id: "benefitsYear",
        header: "Benefit Year",
      },
      
         {
          accessorFn: (row) => row.driverAnnualWage,
          id:'driverAnnualWage',
          header: 'driver Annual Wage',                                      
                                                  
           },
          


     ],[])

     const deleteDriverId= async (id)=>{

      try{
      let res = await deleteDriver(id)
      getDriver()
      console.log("id",res)

      }
      catch(error){
      console.log (error)
      }
    }

  return (
    <>
    {isOpen && <AddNew show={isOpen} setShow={setIsOpen}/>}
      <div className="row">
                                                <div className="col-md-6 mb-3">
                                                    <h4>List All Driver Wages</h4>
                                                </div>
                                                <div className="col-md-6 mb-3" style={{textAlign: "right"}}>
                                                    <button className="btn btn-primary text-right" onClick={()=>setIsOpen(true)}>Add New</button>
                                                </div>
                                            </div>

  <MaterialReactTable
 columns={columns}
 data={data || [] }
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
                 
                   onClick={() => {deleteDriverId(row.original._id)}}
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
