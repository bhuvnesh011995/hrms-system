import { useCallback, useEffect, useMemo, useState } from "react";
import MaterialReactTable from "material-react-table";
import { Box, IconButton } from "@mui/material";
import { Edit as EditIcon, Delete as DeleteIcon } from "@mui/icons-material";
import AddNew from "./AddNew";
import {
  deleteDesignation,
  getAllDesignations,
} from "../../../Utility/API/designation";
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

  const getDesignations = useCallback(async () => {
    setIsLoading(true);
    let res = await getAllDesignations();
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
    getDesignations();
  }, []);

  const columns = useMemo(
    () => [
      {
        accessorKey: "name",
        header: "Designation",
        Header: () => (
          <FormattedMessage id='Designation' defaultMessage={"Designation"} />
        ),
      },

      {
        accessorFn: (row) =>
          row.company ? `${row.company?.name}` : "not available",
        id: "company",
        header: "Company",
        Header: () => (
          <FormattedMessage id='Company' defaultMessage={"Company"} />
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
                <h4>List All Designations</h4>
              </div>
              {(permissions.includes("All") ||
                permissions.includes("add26")) && (
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
            {/* <table id="datatable" className="table table-bordered dt-responsive nowrap w-100">
                                        <thead>
                                            <tr>
                                                <th>Designation</th>
                                                <th>Company</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>

                                        <tbody>
                                            <tr>
                                                <td>HR Executive
                                                    Department: HR
                                                    Sub Department: Management</td>
                                                <td>KMAC International Pte ltd</td>
                                                <td>
                                                    <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#myModal"><i className="fas fa-edit" style={{fontSize:"10px"}}></i></button>
                                                    <button className="btn btn-danger"><i className="fas fa-trash-alt" style={{fontSize:"10px"}}></i></button>
                                                </td>

                                            </tr>


                                        </tbody>
                                    </table> */}

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
                    permissions.includes("view26")) && (
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
                    permissions.includes("update26")) && (
                    <IconButton
                      color='secondary'
                      onClick={() => {
                        let obj = {
                          id: row.original._id,
                          company: row.original?.company?._id,
                          department: row.original?.department?._id,
                          subdepartment: row.original?.subdepartment?._id,
                          name: row.original.name,
                        };
                        setViewData(obj);
                        setIsOpen(true);
                      }}
                    >
                      <EditIcon />
                    </IconButton>
                  )}
                  {(permissions.includes("All") ||
                    permissions.includes("delete26")) && (
                    <IconButton
                      color='error'
                      onClick={async () => {
                        let res = await deleteDesignation(row.original._id);
                        if (res.status === 204) getDesignations();
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
                getDesignations={getDesignations}
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
