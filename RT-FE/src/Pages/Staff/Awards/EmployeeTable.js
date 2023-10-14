import AddNew from "./AddNew";

import MaterialReactTable from "material-react-table";
import { Box, IconButton } from "@mui/material";
import { Edit as EditIcon, Delete as DeleteIcon } from "@mui/icons-material";
import { useMemo, useState } from "react";


export default function EmployeeTable() {

    const [isOpen,setIsOpen] = useState(false)
     const columns = useMemo(() => [
     {
         accessorKey: 'AwardName',
         header: 'Award Name',                                      
                                              
       },

         {                                                   

             accessorKey: 'Name',
             header: 'Name',
           },

         {                                                   

             accessorKey: 'Company',
             header: 'Company',
           },
     {
         accessorKey: 'Gift',
         header: 'Gift',                                      
                                              
       },
     {
         accessorKey: 'Month&Year',
         header: 'Month & Year',                                      
                                              
       },


     ],[])


    return(
        <div className="row">
                        <div className="col-12">
                            <div className="card">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-md-6 mb-3">
                                            <h4>List All Awards</h4>
                                        </div>
                                        <div className="col-md-6 mb-3" style={{textAlign: "right"}}>
                                            <button className="btn btn-primary text-right" onClick={()=>setIsOpen(true)}>Add New</button>
                                        </div>
                                    </div>


                                    <p className="card-title-desc" style={{textAlign: "right"}}>
                                        <button className="btn btn-info text-right">
                                            CSV
                                        </button>
                                        <button className="btn btn-info text-right">
                                            Excel
                                        </button>
                                        <button className="btn btn-info text-right">
                                            PDF
                                        </button>
                                        <button className="btn btn-info text-right">
                                            Print
                                        </button>
                                    </p>
                                    


  <MaterialReactTable
 columns={columns}
 data={[]}
 enableColumnActions={false}
 enableColumnFilters={false}
 enableSorting={false}
 enableTopToolbar={false}
 enableRowActions
             positionActionsColumn="last"
             enableRowNumbers
             rowNumberMode="static"
             renderRowActions={({ row, table }) => (
               <Box
                 sx={{ display: "flex", flexWrap: "nowrap", gap: "8px" }}
               >
                   <IconButton
                   color="secondary"
                   onClick={() => {
                     table.setEditingRow(row);
                   }}
                 >
                   <EditIcon />
                 </IconButton>
                   <IconButton
                   color="error"
                   onClick={() => {}}
                 >
                   <DeleteIcon />
                 </IconButton>
               </Box>
             )}
 muiTableProps={{
   sx: {
     border: '1px solid rgba(81, 81, 81, 1)',
   },
 }}
 muiTableHeadCellProps={{
   sx: {
     border: '1px solid rgba(81, 81, 81, 1)',
   },
 }}
 muiTableBodyCellProps={{
   sx: {
     border: '1px solid rgba(81, 81, 81, 1)',
   },
 }}
 /> 

 
{isOpen && <AddNew show={isOpen} setShow={setIsOpen}/>}
                                    {/* <table id="datatable" className="table table-bordered dt-responsive nowrap w-100">
                                        <thead>
                                            <tr>
                                                <th>Award Name</th>
                                                <th>Name</th>
                                                <th>Company</th>
                                                <th>Gift</th>
                                                <th>Month & Year</th>
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
                                    {/* <!-- The Modal --> */}
                                    <div className="modal fade" id="myModal">
                                        <div className="modal-dialog modal-lg">
                                            <div className="modal-content">

                                                {/* <!-- Modal Header --> */}
                                                <div className="modal-header">
                                                    <h4 className="modal-title">Add New Award</h4>
                                                    <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                                                </div>

                                                {/* <!-- Modal body --> */}
                                                <div className="modal-body">
                                                    <div className="row">
                                                        <div className="col-md-12">
                                                            <div className="mb-3">
                                                                <label for="formrow-firstname-input" className="form-label">Company</label> <br/>
                                                                <select className="form-control select2-templating " style={{width: "100%"}}>
                                                                    <option value="HR">KMAC international pvt ltd</option>


                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-12">
                                                            <div className="mb-3">
                                                                <label for="formrow-firstname-input" className="form-label">Employee</label> <br/>
                                                                <select className="form-control select2-templating " style={{width: "100%"}}>
                                                                    <option value=""></option>


                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="mb-3">
                                                                <label for="formrow-firstname-input" className="form-label">Award Type</label> <br/>
                                                                <select className="form-control select2-templating " style={{width: "100%"}}>
                                                                    <option value="award1">Award Type 1</option>

                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="mb-3">
                                                                <label for="">Date</label>
                                                                <input type="date" className="form-control" placeholder=""/>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="mb-3">
                                                                <label for="">Gift</label>
                                                                <input type="text" className="form-control" placeholder="gift"/>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="mb-3">
                                                                <label for="">Cash</label>
                                                                <input type="text" className="form-control" placeholder="Cash"/>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="mb-3">
                                                                <label for="">Month & Year</label>
                                                                <input type="text" className="form-control" placeholder="Month & Year"/>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <label for="">Award Photo</label>
                                                            <input type="file" className="form-control"/>
                                                        </div>
                                                        <div className="col-md-12">
                                                            <div className="mb-3">
                                                                <label for="">Award Information</label>
                                                                <textarea name="" id="" cols="30" rows="10" className="form-control" style={{height: "70px"}}></textarea>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-12">
                                                            <div className="mb-3">
                                                                <label for="">Description</label>
                                                                <textarea name="" id="" cols="30" rows="10" className="form-control" style={{height: "70px"}}></textarea>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>

                                                {/* <!-- Modal footer --> */}
                                                <div className="modal-footer">
                                                    <button type="button" className="btn btn-success">SAVE</button>
                                                </div>

                                            </div>
                                        </div>
                                    </div>


                                </div>
                            </div>
                        </div>
                        {/* <!-- end col --> */}
                    </div>
    )
};
