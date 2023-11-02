import { useCallback, useEffect, useMemo, useState } from "react";
import AddNew from "./AddNew";
import MaterialReactTable from "material-react-table";
import { Box, IconButton } from "@mui/material";
import { Edit as EditIcon, Delete as DeleteIcon } from "@mui/icons-material";
import { getAllComplaints } from "../../../Utility/API/complaint";
export default function EmployeeTable() {
  const [isOpen,setIsOpen] = useState(false)
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [viewData, setViewData] = useState(null);
    const [isViewOpen, setIsViewOpen] = useState(false);
  
    const getComplaints = useCallback(async () => {
      setIsLoading(true);
      let res = await getAllComplaints();
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
        getComplaints();
    }, []);



     const columns = useMemo(() => [

         {                                                   

            accessorFn: (row)=>row.from?row.from.fName + " "+row.from.lName: "not available",
            id:"from",
             header: 'From Employee',
           },

           {                                                   
  
              accessorFn: (row)=>row.against?row.against.fName + " "+row.against.lName: "not available",
              id:"against",
               header: 'From Employee',
             },

         {                                                   

            accessorFn: (row)=>row.company?row.company.name:"not available",
            id:"company",
             header: 'Company',
           },
           {
             accessorKey: "title",
             header: "Complaint Title",
           },
           {
             accessorFn: (row)=>row.date?row.date.slice(0,10).split("-").reverse().join("/"):"NA",
             id:"date",
             header: "Complaint Date",
           },
     ],[])


  return (
    <div className="row">
      <div className="col-12">
        <div className="card">
          <div className="card-body">
            <div className="row">
              <div className="col-md-6 mb-3">
                <h4>List All Complaints</h4>
              </div>
              <div className="col-md-6 mb-3" style={{ textAlign: "right" }}>
                <button
                  className="btn btn-primary text-right"
                  onClick={() => setIsOpen(true)}
                >
                  Add New
                </button>
              </div>
            </div>

            <p className="card-title-desc" style={{ textAlign: "right" }}>
              <button className="btn btn-info text-right">CSV</button>
              <button className="btn btn-info text-right">Excel</button>
              <button className="btn btn-info text-right">PDF</button>
              <button className="btn btn-info text-right">Print</button>
            </p>

            <MaterialReactTable
              columns={columns}
              data={data||[]}
              enableColumnActions={false}
              enableColumnFilters={false}
              enableSorting={false}
              enableTopToolbar={false}
              enableRowActions
              positionActionsColumn="last"
              enableRowNumbers
              rowNumberMode="static"
              renderRowActions={({ row, table }) => (
                <Box sx={{ display: "flex", flexWrap: "nowrap", gap: "8px" }}>
                  <IconButton
                    color="secondary"
                    onClick={() => {
                      table.setEditingRow(row);
                    }}
                  >
                    <EditIcon />
                  </IconButton>
                  <IconButton color="error" onClick={() => {}}>
                    <DeleteIcon />
                  </IconButton>
                </Box>
              )}
              muiTableProps={{
                sx: {
                  border: "1px solid rgba(81, 81, 81, 1)",
                },
              }}
              muiTableHeadCellProps={{
                sx: {
                  border: "1px solid rgba(81, 81, 81, 1)",
                },
              }}
              muiTableBodyCellProps={{
                sx: {
                  border: "1px solid rgba(81, 81, 81, 1)",
                },
              }}
            />

{isOpen && <AddNew viewData={viewData}
setViewData={setViewData}
getComplaints={getComplaints} show={isOpen} setShow={setIsOpen}/>}

            
          </div>
        </div>
      </div>
    </div>
  );
}
