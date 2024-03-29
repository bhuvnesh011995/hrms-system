import MaterialReactTable from "material-react-table";
import { Box, IconButton } from "@mui/material";
import { Edit as EditIcon, Delete as DeleteIcon } from "@mui/icons-material";
import { useCallback, useEffect, useMemo, useState } from "react";
import {
  deleteResignation,
  getAllResignations,
} from "../../../Utility/API/resignation";
import AddNew from "./AddNew";
import View from "./View";
import { FormattedMessage } from "react-intl";
import { useAuth } from "../../../Context/AuthContext";

export default function EmployeeTable() {
  const { permissions } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [viewData, setViewData] = useState(null);
  const [isViewOpen, setIsViewOpen] = useState(false);

  const getResignations = useCallback(async () => {
    setIsLoading(true);
    let res = await getAllResignations();
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
    getResignations();
  }, []);

  const columns = useMemo(
    () => [
      {
        accessorFn: (row) =>
          row.employee ? row.employee.fName + " " + row.employee.lName : "NA",
        id: "employee",
        Header: () => (
          <FormattedMessage
            id='Employee_Name'
            defaultMessage={"Employee Name"}
          />
        ),
        header: "Employee Name",
      },
      {
        accessorFn: (row) => (row.company ? row.company.name : "NA"),
        id: "company",
        Header: () => (
          <FormattedMessage id='Company' defaultMessage={"Company"} />
        ),
        header: "Company",
      },
      {
        accessorFn: (row) =>
          row.noticeDate
            ? row.noticeDate.slice(0, 10).split("-").reverse().join("/")
            : "not available",
        id: "noticeDate",
        Header: () => (
          <FormattedMessage id='Notice_Date' defaultMessage={"Notice Date"} />
        ),
        header: "Notice Date",
      },
      {
        accessorFn: (row) =>
          row.resignationDate
            ? row.resignationDate.slice(0, 10).split("-").reverse().join("/")
            : "not available",
        id: "resignationDate",
        Header: () => (
          <FormattedMessage
            id='Resignation_Date'
            defaultMessage={"Resignation Date"}
          />
        ),
        header: "Resignation Date",
      },
      {
        accessorFn: (row) => row.status,
        id: "status",
        Header: () => (
          <FormattedMessage id='Status' defaultMessage={"Status"} />
        ),
        header: "Status",
        Cell: ({ renderedCellValue }) => (
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <span
              style={{
                color: renderedCellValue === "Not Approved" ? "red" : "green",
              }}
            >
              {renderedCellValue}
            </span>
          </Box>
        ),
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
                <h4>List All Resignations</h4>
              </div>
              {(permissions.includes("All") ||
                permissions.includes("add12")) && (
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

            <p className='card-title-desc' style={{ textAlign: "right" }}>
              <button className='btn btn-info text-right'>CSV</button>
              <button className='btn btn-info text-right'>Excel</button>
              <button className='btn btn-info text-right'>PDF</button>
              <button className='btn btn-info text-right'>Print</button>
            </p>
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

                  {(permissions.includes("All") ||
                    permissions.includes("update12")) && (
                    <IconButton
                      color='secondary'
                      onClick={() => {
                        let obj = {
                          id: row.original._id,
                          company: row.original.company?._id,
                          resignationReason: row.original.resignationReason,
                          noticeDate: row.original.noticeDate?.slice(0, 10),
                          resignationDate: row.original.resignationDate?.slice(
                            0,
                            10,
                          ),
                          employee: row.original.employee?._id,
                          status: row.original.status,
                        };
                        setViewData(obj);
                        setIsOpen(true);
                      }}
                    >
                      <EditIcon />
                    </IconButton>
                  )}
                  {(permissions.includes("All") ||
                    permissions.includes("delete12")) && (
                    <IconButton
                      color='error'
                      onClick={async () => {
                        let res = await deleteResignation(row.original._id);
                        if (res.status === 204) getResignations();
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
            {isOpen && (
              <AddNew
                viewData={viewData}
                setViewData={setViewData}
                getResignations={getResignations}
                show={isOpen}
                setShow={setIsOpen}
              />
            )}

            {isViewOpen && (
              <View
                viewData={viewData}
                setViewData={setViewData}
                show={isViewOpen}
                setShow={setIsViewOpen}
              />
            )}
          </div>
        </div>
      </div>
      {/* <!-- end col --> */}
    </div>
  );
}
