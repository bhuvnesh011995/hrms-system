import MaterialReactTable from "material-react-table";
import { Box, IconButton } from "@mui/material";
import { Edit as EditIcon, Delete as DeleteIcon } from "@mui/icons-material";
import { useContext, useMemo, useState } from "react";
import AddNew from "./AddNew";
import { FormattedMessage } from "react-intl";
import { useAuth } from "../../../../../Context/AuthContext";

export default function Driver() {
  const { permissions } = useAuth();

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
        accessorKey: "DriveAnnualWage",
        header: "Driver Annual Wage",
        Header: () => (
          <FormattedMessage
            id='Driver_Annual_Wage'
            defaultMessage={"Driver Annual Wage"}
          />
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
          <h4>List All Driver Wages</h4>
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
    </>
  );
}
