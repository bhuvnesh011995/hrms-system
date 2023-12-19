import MaterialReactTable from "material-react-table";
import { Box, IconButton } from "@mui/material";
import { Edit as EditIcon, Delete as DeleteIcon } from "@mui/icons-material";
import { useMemo, useState } from "react";
import AddNew from "./AddNew";
import { FormattedMessage } from "react-intl";

export default function HotelAccommodation() {
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
        accessorKey: "Hotel",
        Header: () => <FormattedMessage id='Hotel' defaultMessage={"Hotel"} />,
        header: "Hotel",
      },
      {
        accessorKey: "CheckIn",
        Header: () => (
          <FormattedMessage id='Check_In' defaultMessage={"Check In"} />
        ),
        header: "Check In",
      },
      {
        accessorKey: "CheckOut",
        Header: () => (
          <FormattedMessage id='Check_Out' defaultMessage={"Check Out"} />
        ),
        header: "Check Out",
      },
      {
        accessorKey: "AnnualCost",
        Header: () => (
          <FormattedMessage id='Annual_Cost' defaultMessage={"Annual Cost"} />
        ),
        header: "Annual Cost",
      },
      {
        accessorKey: "EmployeePaid",
        Header: () => (
          <FormattedMessage
            id='Employee_Paid'
            defaultMessage={"Employee Paid"}
          />
        ),
        header: "Employee Paid",
      },
    ],
    [],
  );

  return (
    <>
      {isOpen && <AddNew show={isOpen} setShow={setIsOpen} />}
      <div className='row'>
        <div className='col-md-6 mb-3'>
          <h4>List All Hotel Accommodation</h4>
        </div>
        <div className='col-md-6 mb-3' style={{ textAlign: "right" }}>
          <button
            className='btn btn-primary text-right'
            onClick={() => setIsOpen(true)}
          >
            Add New
          </button>
        </div>
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
            <IconButton
              color='secondary'
              onClick={() => {
                table.setEditingRow(row);
              }}
            >
              <EditIcon />
            </IconButton>
            <IconButton color='error' onClick={() => {}}>
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
    </>
  );
}
