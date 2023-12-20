import MaterialReactTable from "material-react-table";
import { Box, IconButton } from "@mui/material";
import { Edit as EditIcon, Delete as DeleteIcon } from "@mui/icons-material";
import { useContext, useMemo, useState } from "react";
import AddNew from "./AddNew";
import { FormattedMessage } from "react-intl";
import { useAuth } from "../../../../../Context/AuthContext";

export default function AccommodateEmployee() {
  const { permissions } = useAuth();
  console.log(permissions, "hahahahahahaha");
  const [isOpen, setIsOpen] = useState(false);

  const columns = useMemo(
    () => [
      {
        accessorKey: "Employee",
        Header: () => (
          <FormattedMessage id='Employee' defaultMessage={"Employee"} />
        ),
        header: "Employee",
      },
      {
        accessorKey: "Accommodation",
        Header: () => (
          <FormattedMessage
            id='Accommodation'
            defaultMessage={"Accommodation"}
          />
        ),
        header: "Accommodation",
      },
      {
        accessorKey: "Period",
        Header: () => (
          <FormattedMessage id='Period' defaultMessage={"Period"} />
        ),
        header: "Period",
      },
      {
        accessorKey: "RentPaid",
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
              <IconButton color='error' onClick={() => {}}>
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
