import { useMemo, useState } from "react";

import MaterialReactTable from "material-react-table";
import { Box, IconButton } from "@mui/material";
import { Edit as EditIcon, Delete as DeleteIcon } from "@mui/icons-material";
import AddNew from "./AddNew";
import { FormattedMessage } from "react-intl";
import { useAuth } from "../../../Context/AuthContext";

export default function Table() {
  const { permissions } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const columns = useMemo(
    () => [
      {
        accessorKey: "MonthYear",
        header: "Month Year",
        Header: () => (
          <FormattedMessage id='Month_Year' defaultMessage={"Month Year"} />
        ),
      },
      {
        accessorKey: "CSN",
        header: "CSN",
        Header: () => <FormattedMessage id='CSN' defaultMessage={"CSN"} />,
      },
      {
        accessorKey: "NoOfEmployees",
        header: "No Of Employees",
        Header: () => (
          <FormattedMessage
            id='No_Of_Employees'
            defaultMessage={"No Of Employees"}
          />
        ),
      },
      {
        accessorKey: "NoOfRecords",
        header: "No Of Records",
        Header: () => (
          <FormattedMessage
            id='No_Of_Records'
            defaultMessage={"No Of Records"}
          />
        ),
      },
      {
        accessorKey: "TotalAmount",
        header: "Total Amount",
        Header: () => (
          <FormattedMessage id='Total_Amount' defaultMessage={"Total Amount"} />
        ),
      },
      {
        accessorKey: "DateCreated",
        header: "Date Created",
        Header: () => (
          <FormattedMessage id='Date_Created' defaultMessage={"Date Created"} />
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
                <h4>List All CPF Submissions</h4>
              </div>
              {(permissions.includes("All") ||
                permissions.includes("add51")) && (
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
                                                <th>Month Year </th>
                                                <th>CSN</th>
                                                <th>No Of Employees</th> 
                                                <th>No Of Records</th>  
                                                <th>Total Amount</th>   
                                                <th>Date Created</th>                                  
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
                                                <td></td>
                                                <td>
                                                    <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#myModal"><i className="fas fa-edit" style={{fontSize:"10px"}}></i></button>
                                                    <button className="btn btn-danger"><i className="fas fa-trash-alt" style={{fontSize:"10px"}}></i></button>
                                                </td>

                                            </tr>


                                        </tbody>
                                    </table> */}
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
                    permissions.includes("update51")) && (
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
                    permissions.includes("delete51")) && (
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

            {isOpen && <AddNew show={isOpen} setShow={setIsOpen} />}
            {/* <!-- The Modal --> */}
            <div className='modal fade' id='myModal'>
              <div className='modal-dialog modal-lg'>
                <div className='modal-content'>
                  {/* <!-- Modal Header --> */}
                  <div className='modal-header'>
                    <h4 className='modal-title'>Add New</h4>
                    <button type='button' className='btn-close'></button>
                  </div>

                  {/* <!-- Modal body --> */}
                  <div className='modal-body'>
                    <div className='row'>
                      <div className='col-md-12'>
                        <div className='mb-3'>
                          <label for=''>CPF Submission Number</label>
                          <input
                            type='text'
                            className='form-control'
                            placeholder=''
                          />
                        </div>
                      </div>
                      <div className='col-md-12'>
                        <div className='mb-3'>
                          <label for=''>Select Month</label>
                          <input
                            type='date'
                            className='form-control'
                            placeholder=''
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* <!-- Modal footer --> */}
                  <div className='modal-footer'>
                    <button type='button' className='btn btn-success'>
                      Generate
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- end col --> */}
    </div>
  );
}
