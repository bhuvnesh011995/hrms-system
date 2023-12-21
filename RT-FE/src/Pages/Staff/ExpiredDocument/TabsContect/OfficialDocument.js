import MaterialReactTable from "material-react-table";
import { Box, IconButton } from "@mui/material";
import { Edit as EditIcon, Delete as DeleteIcon, } from "@mui/icons-material";
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';
import { useMemo, useState } from "react";
import { useEffect } from "react";
import { useCallback } from "react";
import { getAllDocuments } from "../../../../Utility/API/document";

export default function OfficialDocument() {
  const [isLoading,setIsLoading] = useState(false)
  const [data,setData] = useState(false)
  const [isError ,setIsError ] = useState(false)



  const getdocs = useCallback(async () => {
    setIsLoading(true);
    let res = await getAllDocuments();
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
      getdocs();
  }, []);


  const columns = useMemo(() => [
  
        {                                                   

            accessorKey: 'name',
            header: 'Title',
          },
        {                                                   

           accessorFn: (row) => row.company?`${row.company.name}`:"not available",
           id: "company",
            header: 'Company',
          },
        {                                                   

           accessorFn:  (row)=>row.expiryDate ? row.expiryDate.slice(0,10).split("-").reverse().join("/"):"not available",
           id:"expiryDate",
            header: 'Expiry Date',
          },    
        {                                                   

            accessorKey: 'alarm',
            header: 'Notifications',
          },   
    ],[])

  return (
    <>
      <div className="row">
        <div className="col-md-6 mb-3">
          <h4>List All  OfficialDocument</h4>
        </div>
       
      </div>

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
                
              }}
            >
              <DownloadForOfflineIcon />
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
    

    </>
  );
}
