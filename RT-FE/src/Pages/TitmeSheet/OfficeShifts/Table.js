import MaterialReactTable from "material-react-table";
import { Box, IconButton } from "@mui/material";
import { Edit as EditIcon, Delete as DeleteIcon } from "@mui/icons-material";
import { useCallback, useEffect, useMemo, useState } from "react";
import AddNew from "./AddNew";
import { deleteShift, getAllShifts } from "../../../Utility/API/shift";
import { FormattedMessage } from "react-intl";
import { useAuth } from "../../../Context/AuthContext";
export default function Table() {
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState([
    {
      company: { name: "kmac" },
      name: "shift 1",
      monday: { start: "10:00 AM", end: "12:00 PM" },
    },
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [viewData, setViewData] = useState(null);
  const [isViewOpen, setIsViewOpen] = useState(false);

  const { permissions } = useAuth();

  const getShifts = useCallback(async () => {
    setIsLoading(true);
    let res = await getAllShifts();
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
    getShifts();
  }, []);

  const columns = useMemo(
    () => [
      {
        accessorFn: (row) =>
          row.company ? `${row.company.name}` : "not available",
        id: "company",
        Header: () => (
          <FormattedMessage id='Company' defaultMessage={"Company"} />
        ),
        header: "Company",
        size: 50,
      },
      {
        accessorKey: "name",
        Header: () => <FormattedMessage id='Name' defaultMessage={"Name"} />,
        header: "Name",
        size: 50,
      },
      {
        accessorFn: (row) => ({
          start: row.monday?.start,
          end: row.monday?.end,
        }),
        size: 120,
        id: "monday",
        Header: () => (
          <FormattedMessage id='Monday' defaultMessage={"Monday"} />
        ),
        header: "Monday",
        Cell: ({ cell }) => {
          return (
            <div>
              <span>In Time :- {cell.getValue()?.start || "NA"}</span>
              <br />
              <span>Out Time :- {cell.getValue()?.end || "NA"}</span>
            </div>
          );
        },
      },
      {
        accessorFn: (row) => ({
          start: row.tuesday?.start,
          end: row.tuesday?.end,
        }),
        size: 120,
        id: "tuesday",
        Header: () => (
          <FormattedMessage id='Tuesday' defaultMessage={"Tuesday"} />
        ),
        header: "Tuesday",
        Cell: ({ cell }) => {
          return (
            <div>
              <span>In Time :- {cell.getValue()?.start || "NA"}</span>
              <br />
              <span>Out Time :- {cell.getValue()?.end || "NA"}</span>
            </div>
          );
        },
      },
      {
        accessorFn: (row) => ({
          start: row.wednesday?.start,
          end: row.wednesday?.end,
        }),
        size: 120,
        id: "wednesday",
        Header: () => (
          <FormattedMessage id='Wednesday' defaultMessage={"Wednesday"} />
        ),
        header: "Wednesday",
        Cell: ({ cell }) => {
          return (
            <div>
              <span>In Time :- {cell.getValue()?.start || "NA"}</span>
              <br />
              <span>Out Time :- {cell.getValue()?.end || "NA"}</span>
            </div>
          );
        },
      },
      {
        accessorFn: (row) => ({
          start: row.thursday?.start,
          end: row.thursday?.end,
        }),
        size: 120,
        id: "thursday",
        Header: () => (
          <FormattedMessage id='Thursday' defaultMessage={"Thursday"} />
        ),
        header: "Thursday",
        Cell: ({ cell }) => {
          return (
            <div>
              <span>In Time :- {cell.getValue()?.start || "NA"}</span>
              <br />
              <span>Out Time :- {cell.getValue()?.end || "NA"}</span>
            </div>
          );
        },
      },
      {
        accessorFn: (row) => ({
          start: row.friday?.start,
          end: row.friday?.end,
        }),
        size: 120,
        id: "friday",
        Header: () => (
          <FormattedMessage id='Friday' defaultMessage={"Friday"} />
        ),
        header: "Friday",
        Cell: ({ cell }) => {
          return (
            <div>
              <span>In Time :- {cell.getValue()?.start || "NA"}</span>
              <br />
              <span>Out Time :- {cell.getValue()?.end || "NA"}</span>
            </div>
          );
        },
      },
      {
        accessorFn: (row) => ({
          start: row.saturday?.start,
          end: row.saturday?.end,
        }),
        size: 120,
        id: "saturday",
        Header: () => (
          <FormattedMessage id='Saturday' defaultMessage={"Saturday"} />
        ),
        header: "Saturday",
        Cell: ({ cell }) => {
          return (
            <div>
              <span>In Time :- {cell.getValue()?.start || "NA"}</span>
              <br />
              <span>Out Time :- {cell.getValue()?.end || "NA"}</span>
            </div>
          );
        },
      },
      {
        accessorFn: (row) => ({
          start: row.sunday?.start,
          end: row.sunday?.end,
        }),
        size: 120,
        id: "sunday",
        Header: () => (
          <FormattedMessage id='Sunday' defaultMessage={"Sunday"} />
        ),
        header: "Sunday",
        Cell: ({ cell }) => {
          return (
            <div>
              <span>In Time :- {cell.getValue()?.start || "NA"}</span>
              <br />
              <span>Out Time :- {cell.getValue()?.end || "NA"}</span>
            </div>
          );
        },
      },
    ],
    [],
  );

  return (
    <div class='row'>
      <div class='col-12'>
        <div class='card'>
          <div class='card-body'>
            <div class='row'>
              <div class='col-md-6 mb-3'>
                <h4>Office Shifts</h4>
              </div>
              {(permissions.includes("All") ||
                permissions.includes("add36")) && (
                <div class='col-md-6 mb-3' style={{ textAlign: "right" }}>
                  <button
                    class='btn btn-primary text-right'
                    onClick={() => setIsOpen(true)}
                  >
                    Add New
                  </button>
                </div>
              )}
            </div>

            <p class='card-title-desc' style={{ textAlign: "right" }}>
              <button class='btn btn-info text-right'>CSV</button>
              <button class='btn btn-info text-right'>Excel</button>
              <button class='btn btn-info text-right'>PDF</button>
              <button class='btn btn-info text-right'>Print</button>
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
                  {(permissions.includes("All") ||
                    permissions.includes("update36")) && (
                    <IconButton
                      color='secondary'
                      onClick={() => {
                        let obj = {
                          ...row.original,
                          company: row.original.company?._id,
                        };
                        setViewData(obj);
                        setIsOpen(true);
                      }}
                    >
                      <EditIcon />
                    </IconButton>
                  )}
                  {(permissions.includes("All") ||
                    permissions.includes("delete36")) && (
                    <IconButton
                      color='error'
                      onClick={async () => {
                        let res = await deleteShift(row.original._id);
                        if (res.status === 204) getShifts();
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
                getShifts={getShifts}
                show={isOpen}
                setShow={setIsOpen}
              />
            )}
          </div>
        </div>
      </div>
      {/* // <!-- end col --> */}
    </div>
  );
}
