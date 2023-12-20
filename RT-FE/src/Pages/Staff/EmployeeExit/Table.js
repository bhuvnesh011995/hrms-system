import MaterialReactTable from "material-react-table";
import { Box, IconButton } from "@mui/material";
import { Edit as EditIcon, Delete as DeleteIcon } from "@mui/icons-material";
import { useMemo, useState } from "react";
import { FormattedMessage } from "react-intl";
import { useAuth } from "../../../Context/AuthContext";

export default function Table() {
  const { permissions } = useAuth();
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
        accessorKey: "Company",
        header: "Company",
        Header: () => (
          <FormattedMessage id='Company' defaultMessage={"Company"} />
        ),
      },
      {
        accessorKey: "ExitType",
        header: "Exit Type",
        Header: () => (
          <FormattedMessage id='Exit_Type' defaultMessage={"Exit Type"} />
        ),
      },
      {
        accessorKey: "ExitDate",
        header: "Exit Date",
        Header: () => (
          <FormattedMessage id='Exit_Date' defaultMessage={"Exit Date"} />
        ),
      },
      {
        accessorKey: "ExitInterview",
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
