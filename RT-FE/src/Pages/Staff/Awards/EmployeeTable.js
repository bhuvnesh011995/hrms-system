import AddNew from "./AddNew";

import MaterialReactTable from "material-react-table";
import { Box, IconButton } from "@mui/material";
import { Edit as EditIcon, Delete as DeleteIcon } from "@mui/icons-material";
import { useCallback, useEffect, useMemo, useState } from "react";
import { deleteAward, getAllAwards } from "../../../Utility/API/award";
import ReactDatePicker from "react-datepicker";
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

  const getAwards = useCallback(async () => {
    setIsLoading(true);
    let res = await getAllAwards();
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
    getAwards();
  }, []);

  const columns = useMemo(
    () => [
      {
        accessorFn: (row) =>
          row.awardType ? row.awardType.name : "not available",
        id: "awardType",
        header: "Award Name",
        Header: () => (
          <FormattedMessage id='Award_Name' defaultMessage={"Award Name"} />
        ),
      },

      {
        accessorFn: (row) =>
          row.employee
            ? row.employee.fName + " " + row.employee.lName
            : "not available",
        id: "employee",
        Header: () => <FormattedMessage id='Name' defaultMessage={"Name"} />,
        header: "Name",
      },

      {
        accessorFn: (row) => (row.company ? row.company.name : "not available"),
        id: "company",
        Header: () => (
          <FormattedMessage id='Company' defaultMessage={"Company"} />
        ),
        header: "Company",
      },
      {
        accessorKey: "gift",
        Header: () => <FormattedMessage id='Gift' defaultMessage={"Gift"} />,
        header: "Gift",
      },
      {
        accessorKey: "monthAndYear",
        Header: () => (
          <FormattedMessage
            id='Month_and_Year'
            defaultMessage={"Month & Year"}
          />
        ),
        header: "Month & Year",
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
                <h4>List All Awards</h4>
              </div>
              {(permissions.includes("All") ||
                permissions.includes("add10")) && (
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
                    permissions.includes("update10")) && (
                    <IconButton
                      color='secondary'
                      onClick={() => {
                        let obj = {
                          ...row.original,
                          company: row.original?.company?._id,
                          employee: row.original.employee?._id,
                          awardType: row.original.awardType?._id,
                          date: row.original.date?.slice(0, 10),
                        };
                        setViewData(obj);
                        setIsOpen(true);
                      }}
                    >
                      <EditIcon />
                    </IconButton>
                  )}
                  {(permissions.includes("All") ||
                    permissions.includes("delete10")) && (
                    <IconButton
                      color='error'
                      onClick={async () => {
                        let res = await deleteAward(row.original._id);
                        if (res.status === 204) getAwards();
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
                getAwards={getAwards}
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
