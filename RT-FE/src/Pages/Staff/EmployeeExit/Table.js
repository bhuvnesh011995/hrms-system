import MaterialReactTable from "material-react-table";
import { Box, IconButton } from "@mui/material";
import { Edit as EditIcon, Delete as DeleteIcon } from "@mui/icons-material";
import { useMemo, useState, useEffect } from "react";
import { FormattedMessage } from "react-intl";
import { useAuth } from "../../../Context/AuthContext";
import {
  getAllEmployeeExit,
  deleteEmployeeExit,
} from "../../../Utility/API/employeeexit";

export default function Table() {
  const { permissions } = useAuth();
  const [data, setData] = useState([]);

  async function getEmployeeExit() {
    let res = await getAllEmployeeExit();
    if (res.status === 200) {
      let array = res.data.employeeexit.map((ele) => ({
        employee: ele.employeeToExit,
        company: ele.company,
        typeofExit: ele.typeofExit,
        exitDate: ele.exitDate,
        exitInterview: ele.exitInterview,
        createdAt: ele.createdAt?.slice(0, 10).split("-").reverse().join("/"),
        id: ele._id,
      }));
      setData(array);
    } else {
      setData([]);
    }
  }

  useEffect(() => {
    getEmployeeExit();
  }, []);

  const columns = useMemo(
    () => [
      {
        accessorKey: "employee",
        header: "Employee",
        Header: () => (
          <FormattedMessage id='Employee' defaultMessage={"Employee"} />
        ),
      },
      {
        accessorKey: "company",
        header: "Company",
        Header: () => (
          <FormattedMessage id='Company' defaultMessage={"Company"} />
        ),
      },
      {
        accessorKey: "typeofExit",
        header: "Exit Type",
        Header: () => (
          <FormattedMessage id='Exit_Type' defaultMessage={"Exit Type"} />
        ),
      },
      {
        accessorKey: "exitDate",
        header: "Exit Date",
        Header: () => (
          <FormattedMessage id='Exit_Date' defaultMessage={"Exit Date"} />
        ),
      },
      {
        accessorKey: "exitInterview",
        header: "Exit Interview",
        Header: () => (
          <FormattedMessage
            id='Exit_Interview'
            defaultMessage={"Exit Interview"}
          />
        ),
      },
    ],
    [],
  );

  const handleDelete = async (id) => {
    alert(id);
    try {
      let res = await deleteEmployeeExit(id);
      if (res.status == 204) {
        console.log("success");
        getEmployeeExit();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <MaterialReactTable
        columns={columns}
        data={[]}
        enableColumnActions={false}
        enableColumnFilters={false}
        enableSorting={false}
        enableTopToolbar={false}
        enableRowActions
        positionActionsColumn='last'
        enableRowNumbers
        rowNumberMode='static'
        renderRowActions={({ row, table }) => (
          <Box sx={{ display: "flex", flexWrap: "nowrap", gap: "8px" }}>
            {(permissions.includes("All") ||
              permissions.includes("update4")) && (
              <IconButton
                color='secondary'
                onClick={() => {
                  table.setEditingRow(row);
                }}
              >
                <EditIcon />
              </IconButton>
            )}
            {(permissions.includes("All") ||
              permissions.includes("delete4")) && (
              <IconButton color='error' onClick={() => {}}>
                <DeleteIcon onClick={() => handleDelete(row.original.id)} />
              </IconButton>
            )}
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
