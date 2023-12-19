import MaterialReactTable from "material-react-table";
import { Box, IconButton } from "@mui/material";
import { Edit as EditIcon, Delete as DeleteIcon } from "@mui/icons-material";
import View from "./View";
import AddNew from "./AddNew";
import { deleteWarning, getAllWarnings } from "../../../Utility/API/warning";
import { useCallback, useEffect, useMemo, useState } from "react";
import { toast } from "react-toastify";
import { FormattedMessage } from "react-intl";

export default function EmployeeTable() {
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [viewData, setViewData] = useState(null);
  const [isViewOpen, setIsViewOpen] = useState(false);

  const getWarnings = useCallback(async () => {
    setIsLoading(true);
    let res = await getAllWarnings();
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
    getWarnings();
  }, []);

  const columns = useMemo(
    () => [
      {
        accessorFn: (row) =>
          row.to ? row.to.fName + " " + row.to.lName : "not available",
        id: "to",
        Header: () => (
          <FormattedMessage id='Warning_To' defaultMessage={"Warning To"} />
        ),
        header: "Warning To",
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
        accessorFn: (row) =>
          row.by ? row.by.fName + " " + row.by.lName : "not available",
        id: "by",
        Header: () => (
          <FormattedMessage id='Warning_By' defaultMessage={"Warning By"} />
        ),
        header: "Warning By",
      },

      {
        accessorFn: (row) =>
          row.warningType ? row.warningType.name : "not available",
        id: "warningType",
        Header: () => (
          <FormattedMessage id='Warning_Type' defaultMessage={"Warning Type"} />
        ),
        header: "Warning Type",
      },
      {
        accessorKey: "subject",
        Header: () => (
          <FormattedMessage
            id='Warning_Subject'
            defaultMessage={"Warning Subject"}
          />
        ),
        header: "Warning Subject",
      },
      {
        accessorFn: (row) =>
          row.date
            ? row.date.slice(0, 10).split("-").reverse().join("/")
            : "NA",
        id: "date",
        Header: () => (
          <FormattedMessage id='Warning_Date' defaultMessage={"Warning Date"} />
        ),
        header: "Warning Date",
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
                <h4>List All Warnings</h4>
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
                  <IconButton
                    color='secondary'
                    onClick={() => {
                      let obj = {
                        ...row.original,
                        company: row.original?.company?._id,
                        by: row.original.by?._id,
                        to: row.original.to?._id,
                        date: row.original.date?.slice(0, 10),
                        warningType: row.original.warningType?._id,
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
                        let res = await deleteWarning(row.original._id);
                        if (res.status === 204) {
                          toast.success("complaint deleted");
                          getWarnings();
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
              <AddNew
                viewData={viewData}
                setViewData={setViewData}
                getWarnings={getWarnings}
                show={isOpen}
                setShow={setIsOpen}
              />
            )}

            {isViewOpen && (
              <View
                getWarnings={getWarnings}
                viewData={viewData}
                setViewData={setViewData}
                show={isViewOpen}
                setShow={setIsViewOpen}
              />
            )}
            {/* <table id="datatable" className="table table-bordered dt-responsive nowrap w-100">
                                        <thead>
                                            <tr>
                                                <th>Employee </th>
                                                <th>Company</th>
                                                <th>Warning Date</th>
                                                <th>Subject</th>
                                                <th>Warning By</th>
                                                <th>Action</th>


                                            </tr>
                                        </thead>

                                        <tbody>
                                            <tr>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td>
                                                    <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#myModal"><i className="fas fa-edit" style={{fontSize:"10px"}}></i></button>
                                                    <button className="btn btn-danger"><i className="fas fa-trash-alt" style={{fontSize:"10px"}}></i></button>
                                                </td>

                                            </tr>


                                        </tbody>
                                    </table> */}

            <div className='modal fade' id='myModal'>
              <div className='modal-dialog modal-lg'>
                <div className='modal-content'>
                  <div className='modal-header'>
                    <h4 className='modal-title'>Add New Warnings</h4>
                    <button
                      type='button'
                      className='btn-close'
                      data-bs-dismiss='modal'
                    ></button>
                  </div>

                  <div className='modal-body'>
                    <div className='row'>
                      <div className='col-md-12'>
                        <div className='mb-3'>
                          <label
                            for='formrow-firstname-input'
                            className='form-label'
                          >
                            Company
                          </label>{" "}
                          <br />
                          <select
                            className='form-control select2-templating '
                            style={{ width: "100%" }}
                          >
                            <option value='HR'>
                              KMAC international pvt ltd
                            </option>
                          </select>
                        </div>
                      </div>

                      <div className='col-md-12'>
                        <div className='mb-3'>
                          <label
                            for='formrow-firstname-input'
                            className='form-label'
                          >
                            Warning To
                          </label>{" "}
                          <br />
                          <select
                            className='form-control select2-templating '
                            style={{ width: "100%" }}
                          >
                            <option value=''></option>
                          </select>
                        </div>
                      </div>
                      <div className='col-md-6'>
                        <div className='mb-3'>
                          <label
                            for='formrow-firstname-input'
                            className='form-label'
                          >
                            Warning Type
                          </label>{" "}
                          <br />
                          <select
                            className='form-control select2-templating '
                            style={{ width: "100%" }}
                          >
                            <option value='Fwarning'>First Warning</option>
                            <option value='warinign1'>Warning 1</option>
                          </select>
                        </div>
                      </div>
                      <div className='col-md-6'>
                        <div className='mb-3'>
                          <label for=''>Subject</label>
                          <input
                            type='text'
                            className='form-control'
                            placeholder='Subject'
                          />
                        </div>
                      </div>
                      <div className='col-md-6'>
                        <div className='mb-3'>
                          <label
                            for='formrow-firstname-input'
                            className='form-label'
                          >
                            Warning By
                          </label>{" "}
                          <br />
                          <select
                            className='form-control select2-templating '
                            style={{ width: "100%" }}
                          >
                            <option value=''></option>
                          </select>
                        </div>
                      </div>
                      <div className='col-md-6'>
                        <div className='mb-3'>
                          <label for=''>Warning Date</label>
                          <input
                            type='date'
                            className='form-control'
                            placeholder=''
                          />
                        </div>
                      </div>
                      <div className='col-md-12'>
                        <div className='mb-3'>
                          <label for=''>Attachment</label>
                          <input
                            type='file'
                            className='form-control'
                            placeholder=''
                          />
                        </div>
                      </div>
                      <div className='col-md-12'>
                        <div className='mb-3'>
                          <label for=''>Description</label>
                          <textarea
                            name=''
                            id=''
                            cols='30'
                            rows='10'
                            className='form-control'
                            style={{ height: "70px" }}
                          ></textarea>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className='modal-footer'>
                    <button type='button' className='btn btn-success'>
                      SAVE
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
