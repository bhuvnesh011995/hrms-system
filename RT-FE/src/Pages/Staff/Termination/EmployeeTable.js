import { useAuth } from "../../../Context/AuthContext";
import { useState, useEffect, useCallback, useMemo } from "react";
import AddNewTermination from "./AddNew";
import MaterialReactTable from "material-react-table";
import { Box, IconButton } from "@mui/material";
import { Edit as EditIcon, Delete as DeleteIcon } from "@mui/icons-material";
import {
  getAllTerminations,
  deleteTermination,
} from "../../../Utility/API/termination";
import { toast } from "react-toastify";
import View from "./View";

export default function EmployeeTable() {
  const { permissions } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const [isViewOpen, setIsViewOpen] = useState(false);
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [viewData, setViewData] = useState(null);

  const getTerminations = useCallback(async () => {
    setIsLoading(true);
    let res = await getAllTerminations();
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
    getTerminations();
  }, []);

  console.log("viewData", viewData);

  const columns = useMemo(
    () => [
      {
        accessorFn: (row) =>
          row.employee
            ? row.employee.fName + " " + row.employee.lName
            : "not available",
        id: "employee",
        header: "employee",
      },
      {
        accessorFn: (row) => (row.company ? row.company.name : "not available"),
        id: "company",
        header: "Company",
      },

      {
        accessorFn: (row) =>
          row.noticeDate
            ? row.noticeDate.slice(0, 10).split("-").reverse().join("/")
            : "not available",
        id: "noticeDate",
        header: "Notice Date",
      },

      {
        accessorFn: (row) =>
          row.terminationDate
            ? row.terminationDate.slice(0, 10).split("-").reverse().join("/")
            : "not available",
        id: "terminationDate",
        header: "Termination Date",
      },
    ],
    [],
  );

  return (
    <div className='row'>
      <div className='col-12'>
        <div className='card'>
          <div className='card-body'>
            <div className='row'>
              <div className='col-md-6 mb-3'>
                <h4>List All Terminations</h4>
              </div>
              {(permissions.includes("All") ||
                permissions.includes("add17")) && (
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
                  <IconButton
                    color='info'
                    onClick={() => {
                      setViewData(row.original);
                      setIsViewOpen(true);
                    }}
                  >
                    <i className='fas fa-eye'></i>
                  </IconButton>
                  <IconButton
                    color='secondary'
                    onClick={() => {
                      let obj = {
                        ...row.original,
                        company: row.original?.company?._id,
                        employee: row.original.employee?._id,
                        noticeDate: row.original.noticeDate?.slice(0, 10),
                        terminationDate: row.original.terminationDate?.slice(
                          0,
                          10,
                        ),
                      };
                      setViewData(obj);
                      setIsOpen(true);
                    }}
                  >
                    <EditIcon />
                  </IconButton>
                  <IconButton
                    color='error'
                    onClick={async () => {
                      try {
                        let res = await deleteTermination(row.original._id);
                        if (res.status === 204) {
                          toast.success("Termination deleted");
                          getTerminations();
                        } else console.log(res);
                      } catch (error) {
                        console.log(error);
                      }
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
            {isOpen && (
              <AddNewTermination
                viewData={viewData}
                setViewData={setViewData}
                getTerminations={getTerminations}
                show={isOpen}
                setShow={setIsOpen}
              />
            )}
            {isViewOpen && (
              <View
                show={isViewOpen}
                setShow={setIsViewOpen}
                setViewData={setViewData}
                viewData={viewData}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
