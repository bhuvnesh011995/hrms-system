import { useMemo } from "react";
import MaterialReactTable from "material-react-table";
import { Box, IconButton } from "@mui/material";
import { Edit as EditIcon, Delete as DeleteIcon } from "@mui/icons-material";
import { FormattedMessage } from "react-intl";
import { useAuth } from "../../Context/AuthContext";

export default function Table() {
  const { permissions } = useAuth();
  const columns = useMemo(
    () => [
      {
        accessorKey: "Name",
        header: "Name",
        Header: () => <FormattedMessage id='Name' defaultMessage={"Name"} />,
      },

      {
        accessorKey: "PayrollType",
        header: "Payroll Type",
        Header: () => (
          <FormattedMessage id='Payroll_Type' defaultMessage={"Payroll Type"} />
        ),
      },
      {
        accessorKey: "Salary",
        header: "Salary",
        Header: () => (
          <FormattedMessage id='Salary' defaultMessage={"Salary"} />
        ),
      },
      {
        accessorKey: "CPFEmployee",
        header: "CPF Employee",
        Header: () => (
          <FormattedMessage id='CPF_Employee' defaultMessage={"CPF Employee"} />
        ),
      },

      {
        accessorKey: "NetSalary",
        header: "Net Salary",
        Header: () => (
          <FormattedMessage id='Net_Salary' defaultMessage={"Net Salary"} />
        ),
      },
      {
        accessorKey: "Status",
        header: "Status",
        Header: () => (
          <FormattedMessage id='Status' defaultMessage={"Status"} />
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
                <h4>Payment Info for 2023-07</h4>
              </div>
              {(permissions.includes("All") ||
                permissions.includes("add40")) && (
                <div className='col-md-6 mb-3' style={{ textAlign: "right" }}>
                  <a
                    href='payslip-history.html'
                    className='btn btn-primary text-right'
                  >
                    Payslip History
                  </a>
                </div>
              )}
            </div>

            <p className='card-title-desc' style={{ textAlign: "right" }}>
              <button className='btn btn-info text-right'>CSV</button>
              <button className='btn btn-info text-right'>Excel</button>
              <button className='btn btn-info text-right'>PDF</button>
              <button className='btn btn-info text-right'>Print</button>
            </p>
            {/* <table id="datatable" className="table display table-bordered dt-responsive nowrap w-100">
                                        <thead>
                                            <tr>
                                                <th>Name </th>
                                                <th>Payroll Type</th>
                                                <th>Salary</th> 
                                                <th>CPF Employee</th>  
                                                <th>Net Salary</th> 
                                                <th>Status</th>                                                                                 
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
                                    </table>*/}

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
                    permissions.includes("update40")) && (
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
                    permissions.includes("delete40")) && (
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
          </div>
        </div>
      </div>
      {/* <!-- end col --> */}
    </div>
  );
}
