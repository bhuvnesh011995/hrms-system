import MaterialReactTable from "material-react-table";
import { Box, IconButton } from "@mui/material";
import { Edit as EditIcon, Delete as DeleteIcon } from "@mui/icons-material";
import { useMemo, useState } from "react";
import { useEffect } from "react";
import { useCallback } from "react";
import AddNew from "./AddNew";
import { deleteAccommodation, getAllAccommodation } from "../../../../../Utility/API/accommodation";
export default function Accommodation() {
  const [isOpen,setIsOpen] = useState(false)
  const [data,setData] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)

  async function getAccommodation(){
    let res = await  getAllAccommodation()
    if(res.status ===200){
      let array = res.data.accommodation.map(ele=>({
        accommodationTitle:ele.accommodationTitle ,
        address:ele.addressLine1 + ele.addressLine2,
        periodFrom: ele.periodForm?.slice(0, 10).split("-").reverse().join("/") + " - " + ele.periodTo?.slice(0, 10).split("-").reverse().join("/"),
        annualValue:ele.annualValue,
        furnished:ele.furnished,
        rent:ele.annualRentPaid,
        createdAt:ele.createdAt?.slice(0,10).split("-").reverse().join("/"),
        id:ele._id
      }))
      setData(array)
    }else {
      setData([])
    }
  }
 
  const deleteAccommodationId= async (id)=>{
    try{
    let res = await deleteAccommodation(id)
    getAccommodation()
    console.log("id",res)
  
    }
    catch(error){
    console.log (error)
    }
  }
 

  useEffect(() => {
    getAccommodation();
  }, []);

  console.log("accommodation",data)

  const columns = useMemo(
    () => [
      {
        accessorFn: (row) => row.accommodationTitle,
        header: "Title",
      },
      {
        accessorFn: (row) => row.address,
        header: "Address",
      },
      {
        accessorFn:(row) => row.periodFrom,
        header:"period",
      },
      {
        accessorFn:(row) => row.annualValue,
        header:"Annual Value",
      },
      {
        accessorFn:(row)=> row.furnished,
        header:"Furnished"
      },
      {
        accessorFn:(row)=> row.rent,
        header:"rent"
      }
    ],
    []
  );
  



  return (
    <>
      <div className="row">
        <div className="col-md-6 mb-3">
          <h4>List All Accommodations</h4>
        </div>
        <div className="col-md-6 mb-3" style={{ textAlign: "right" }}>
          <button
            className="btn btn-primary text-right"
            onClick={()=>setIsOpen(true)}
          >
            Add New
          </button>
        </div>
      </div>

      <MaterialReactTable
        columns={columns}
        data={data || []}
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
            <IconButton
              color="error"
              onClick={() => {
                deleteAccommodationId(row.original.id)
              }}
            >
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
      {isOpen && <AddNew show={isOpen} setShow={setIsOpen}/>}

    </>
  );
}
