import { useMemo, useState } from "react";
import MaterialReactTable from "material-react-table";
import { Box, IconButton } from "@mui/material";
import { Edit as EditIcon, Delete as DeleteIcon } from "@mui/icons-material";
import AddNew from "../AddNew";
import { FormattedMessage } from "react-intl";
import { useAuth } from "../../../../Context/AuthContext";

export default function Table1() {
  const { permissions } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const columns = useMemo(
    () => [
      {
        accessorKey: "Employee",
        header: "Employee",
        Header: () => (
          <FormattedMessage id='Employee' defaultMessage={"Employee"} />
        ),
      },
      {
        accessorKey: "Citizenship",
        header: "Citizenship",
        Header: () => (
          <FormattedMessage id='Citizenship' defaultMessage={"Citizenship"} />
        ),
      },
      {
        accessorKey: "TotalTaxableAmount",
        header: "Total Taxable Amount",
        Header: () => (
          <FormattedMessage
            id='Total_Taxable_Amount'
            defaultMessage={"Total Taxable Amount"}
          />
        ),
      },
      {
        accessorKey: "YTDGrossSalary",
        header: "YTD Gross Salary",
        Header: () => (
          <FormattedMessage
            id='YTD_Gross_Salary'
            defaultMessage={"YTD Gross Salary"}
          />
        ),
      },
      {
        accessorKey: "YTDBonus",
        header: "YTD Bonus",
        Header: () => (
          <FormattedMessage id='YTD_Bonus' defaultMessage={"YTD Bonus"} />
        ),
      },
      {
        accessorKey: "YTDCPF",
        header: "YTD CPF",
        Header: () => (
          <FormattedMessage id='YTD_CPF' defaultMessage={"YTD CPF"} />
        ),
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
                <h4>List All Employee Summary for 2023</h4>
              </div>
              {(permissions.includes("All") ||
                permissions.includes("add52")) && (
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
            {/* <table id="datatable" class="table display table-bordered dt-responsive nowrap w-100">
                                        <thead>
                                            <tr>
                                                <th>Employee </th>
                                                <th>Citizenship</th>
                                                <th>Total Taxable Amount</th> 
                                                <th>YTD Gross Salary</th>  
                                                <th>YTD Bonus</th>   
                                                <th>YTD CPF</th>                                  
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
                                                    <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#myModal"><i class="fas fa-edit" style={{fontSize:"10px"}}></i></button>
                                                    <button class="btn btn-danger"><i class="fas fa-trash-alt" style={{fontSize:"10px"}}></i></button>
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
                    permissions.includes("update52")) && (
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
                    permissions.includes("delete52")) && (
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

            <div class='modal fade' id='myModal'>
              <div class='modal-dialog modal-lg'>
                <div class='modal-content'>
                  {/* <!-- Modal Header --> */}
                  <div class='modal-header'>
                    <h4 class='modal-title'>IR8A YA (Year of Assessment)</h4>
                    <button
                      type='button'
                      class='btn-close'
                      data-bs-dismiss='modal'
                    ></button>
                  </div>

                  {/* <!-- Modal body --> */}
                  <div class='modal-body'>
                    <div class='row'>
                      <div class='col-md-12'>
                        <div class='mb-3'>
                          <label
                            for='formrow-firstname-input'
                            class='form-label'
                          >
                            Select Year
                          </label>{" "}
                          <br />
                          <select
                            class='form-control select2-templating '
                            style={{ width: "100%" }}
                          >
                            <option value='2021'>2021</option>
                            <option value='2022'>2022</option>
                            <option value='2023'>2023</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* <!-- Modal footer --> */}
                  <div class='modal-footer'>
                    <button type='button' class='btn btn-success'>
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
