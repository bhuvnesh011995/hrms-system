import { useCallback, useEffect, useMemo, useState } from "react";
import MaterialReactTable from "material-react-table";
import { Box, IconButton } from "@mui/material";
import { Edit as EditIcon, Delete as DeleteIcon } from "@mui/icons-material";
import AddNew from "./AddNew";
import { deletePolicy, getAllPolicies } from "../../../Utility/API/policy";
import View from "./View";
import { FormattedMessage } from "react-intl";
import { useAuth } from "../../../Context/AuthContext";

export default function Table() {
  const { permissions } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [viewData, setViewData] = useState(null);
  const [isViewOpen, setIsViewOpen] = useState(false);

  const getPolicies = useCallback(async () => {
    setIsLoading(true);
    let res = await getAllPolicies();
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
    getPolicies();
  }, []);

  const columns = useMemo(
    () => [
      {
        accessorKey: "title",
        header: "Title",
        Header: () => <FormattedMessage id='Title' defaultMessage={"Title"} />,
      },
      {
        accessorFn: (row) =>
          row.company ? `${row.company.name}` : "not available",
        id: "company",
        header: "Company",
        Header: () => (
          <FormattedMessage id='Company' defaultMessage={"Company"} />
        ),
      },
      {
        accessorFn: (row) => "",
        id: "createdAt",
        header: "Created At",
        Header: () => (
          <FormattedMessage id='Created_At' defaultMessage={"Created At"} />
        ),
      },
      {
        accessorFn: (row) =>
          row.addedBy
            ? row.addedBy.fName + " " + row.addedBy.lName
            : "not available",
        id: "addedBy",
        header: "Added By",
        Header: () => (
          <FormattedMessage id='Added_By' defaultMessage={"Added By"} />
        ),
      },
      {
        accessorFn: (row) =>
          row.createdAt
            ? row.createdAt.slice(0, 10).split("-").reverse().join("/")
            : "not available",
        id: "createdAt",
        header: "Created At",
        Header: () => (
          <FormattedMessage id='Created_At' defaultMessage={"Created At"} />
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
                <h4>List All Policies</h4>
              </div>
              {(permissions.includes("All") ||
                permissions.includes("add28")) && (
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
                  {(permissions.includes("All") ||
                    permissions.includes("view28")) && (
                    <IconButton
                      color='info'
                      onClick={() => {
                        setViewData(row.original);
                        setIsViewOpen(true);
                      }}
                    >
                      <i className='fas fa-eye'></i>
                    </IconButton>
                  )}

                  {(permissions.includes("All") ||
                    permissions.includes("update28")) && (
                    <IconButton
                      color='secondary'
                      onClick={() => {
                        let obj = {
                          id: row.original._id,
                          company: row.original.company._id,
                          description: row.original.description,
                          title: row.original.title,
                        };
                        setViewData(obj);
                        setIsOpen(true);
                      }}
                    >
                      <EditIcon />
                    </IconButton>
                  )}
                  {(permissions.includes("All") ||
                    permissions.includes("delete28")) && (
                    <IconButton
                      color='error'
                      onClick={async () => {
                        let res = await deletePolicy(row.original._id);
                        if (res.status === 204) getPolicies();
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
                getPolicies={getPolicies}
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
    </div>
  );
}
