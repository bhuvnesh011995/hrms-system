import MaterialReactTable from "material-react-table";
import { Box, IconButton } from "@mui/material";
import { Edit as EditIcon, Delete as DeleteIcon } from "@mui/icons-material";
import {
  getAllAccommodatedEmployee,
  deleteAccommodatedEmployee,
} from "../../../../../Utility/API/accommodateEmployees";
import { useContext, useMemo, useState, useEffect, useCallback } from "react";
import AddNew from "./AddNew";
import { FormattedMessage } from "react-intl";
import { useAuth } from "../../../../../Context/AuthContext";

export default function AccommodateEmployee() {
  const { permissions } = useAuth();
  console.log(permissions, "hahahahahahaha");
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const getAccommodatedEmployee = useCallback(async () => {
    setIsLoading(true);
    let res = await getAllAccommodatedEmployee();
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
    getAccommodatedEmployee();
  }, []);

  const deleteAccommodationId = async (id) => {
    try {
      let res = await deleteAccommodatedEmployee(id);
      getAccommodatedEmployee();
      console.log("id", res);
    } catch (error) {
      console.log(error);
    }
  };

  const columns = useMemo(
    () => [
      {
        accessorFn: (row) =>
          row.employee ? row.employee.fName : "not available",
        id: "employee",
        Header: () => (
          <FormattedMessage id='Employee' defaultMessage={"Employee"} />
        ),
        header: "Employee",
      },
      {
        accessorFn: (row) =>
          row.accommodation
            ? row.accommodation.accommodationTitle
            : "not available",
        id: "accommodation",
        Header: () => (
          <FormattedMessage
            id='Accommodation'
            defaultMessage={"Accommodation"}
          />
        ),
        header: "Accommodation",
      },
      {
        accessorFn: (row) => row.accommodationPeriod,
        id: "accommodationPeriod",
        Header: () => (
          <FormattedMessage id='Period' defaultMessage={"Period"} />
        ),
        header: "Period",
      },
      {
        accessorFn: (row) => row.employeeRentPaid,
        id: "employeeRentPaid",
        Header: () => (
          <FormattedMessage id='Rent_Paid' defaultMessage={"Rent Paid"} />
        ),
        header: "Rent Paid",
      },
    ],
    [],
  );

  return (
    <>
      <div className='row'>
        <div className='col-md-6 mb-3'>
          <h4>List All Accommodated Employees</h4>
        </div>
        {(permissions?.includes("All") || permissions?.includes("add1")) && (
          <div className='col-md-6 mb-3' style={{ textAlign: "right" }}>
            <button
              className='btn btn-primary text-right'
              onClick={() => setIsOpen(true)}
            >
              Add New
            </button>
          </div>
        )}
      </div>

      <MaterialReactTable
        columns={columns}
        data={data || []}
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
            {(permissions?.includes("All") ||
              permissions?.includes("update1")) && (
              <IconButton
                color='secondary'
                onClick={() => {
                  table.setEditingRow(row);
                }}
              >
                <EditIcon />
              </IconButton>
            )}
            {(permissions?.includes("All") ||
              permissions?.includes("delete1")) && (
              <IconButton
                color='error'
                onClick={() => {
                  deleteAccommodationId(row.original._id);
                }}
              >
                <DeleteIcon />
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
      {isOpen && <AddNew show={isOpen} setShow={setIsOpen} />}
    </>
  );
}
