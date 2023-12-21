import MaterialReactTable from "material-react-table";
import { Box, IconButton } from "@mui/material";
import { Edit as EditIcon, Delete as DeleteIcon } from "@mui/icons-material";
import { useContext, useMemo, useState, useEffect, useCallback } from "react";
import AddNew from "./AddNew";
import { FormattedMessage } from "react-intl";
import { useAuth } from "../../../../../Context/AuthContext";
import {
  getAllUtilitiesAccessories,
  deleteUtilitiesAccessories,
} from "../../../../../Utility/API/utilitiesAccessories";

export default function UtilitiesAndAccessories() {
  const { permissions } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const getUtilitiesAccessories = useCallback(async () => {
    setIsLoading(true);
    let res = await getAllUtilitiesAccessories();
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
    getUtilitiesAccessories();
  }, []);

  const deleteUtilitiesAccessoriesId = async (id) => {
    try {
      let res = await deleteUtilitiesAccessories(id);
      getUtilitiesAccessories();
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
        header: "Employee",
        Header: () => (
          <FormattedMessage id='Employee' defaultMessage={"Employee"} />
        ),
      },
      {
        accessorFn: (row) => row.benefitYear,
        id: "benefitYear",
        header: "Benefit Year",
        Header: () => (
          <FormattedMessage id='Benefit_Year' defaultMessage={"Benefit Year"} />
        ),
      },
      {
        accessorFn: (row) => row.benefitYear,
        id: "utilitiesAccessories",
        header: "Utility",
        Header: () => (
          <FormattedMessage id='Utility' defaultMessage={"Utility"} />
        ),
      },
      {
        accessorFn: (row) =>
          row.rows && row.rows.length > 0 && row.rows[0] && row.rows[0].remark
            ? row.rows[0].remark
            : "",
        id: "remark",
        header: "Remark",
        Header: () => (
          <FormattedMessage id='Remark' defaultMessage={"Remark"} />
        ),
      },
      {
        accessorFn: (row) =>
          row.rows &&
          row.rows.length > 0 &&
          row.rows[0] &&
          row.rows[0].actualAmount
            ? row.rows[0].actualAmount
            : "",
        id: "actualAmount",
        header: "Amount",
        Header: () => (
          <FormattedMessage id='Amount' defaultMessage={"Amount"} />
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
          <h4>List All Utilities & Accessories</h4>
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
              <IconButton
                color='error'
                onClick={() => {
                  deleteUtilitiesAccessoriesId(row.original._id);
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
    </>
  );
}
