import MaterialReactTable from "material-react-table";
import { Box, IconButton } from "@mui/material";
import { Edit as EditIcon, Delete as DeleteIcon } from "@mui/icons-material";
import { useMemo, useState } from "react";
import AddNew from "./AddNew";
import { FormattedMessage } from "react-intl";

export default function OtherBenifit() {
  const [isOpen, setIsOpen] = useState(false);

  const columns = useMemo(
    () => [
      {
        accessorKey: "Employee",
        header: "Employee",
        Header: () => (
          <FormattedMessage id='Employee' defaultMessage={"Employee"} />
        ),
      },
      {
        accessorKey: "BenefitYear",
        header: "Benefit Year",
        Header: () => (
          <FormattedMessage id='Benefit_Year' defaultMessage={"Benefit Year"} />
        ),
      },
      {
        accessorKey: "Benefit",
        header: "Benefit",
        Header: () => (
          <FormattedMessage id='Benefit' defaultMessage={"Benefit"} />
        ),
      },
      {
        accessorKey: "Remarks",
        header: "Remarks",
        Header: () => (
          <FormattedMessage id='Remarks' defaultMessage={"Remarks"} />
        ),
      },
      {
        accessorKey: "ActualCost",
        header: "Actual Cost",
        Header: () => (
          <FormattedMessage id='Actual_Cost' defaultMessage={"Actual Cost"} />
        ),
      },
    ],
    [],
  );

  return (
    <>
      {isOpen && <AddNew show={isOpen} setShow={setIsOpen} />}
      <div className='row'>
        <div className='col-md-6 mb-3'>
          <h4>List All Other Benefits</h4>
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
