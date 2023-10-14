import { useMemo, useState } from "react";					  
import MaterialReactTable from "material-react-table";
import { Box, IconButton } from "@mui/material";
import { Edit as EditIcon, Delete as DeleteIcon } from "@mui/icons-material";
import AddNew from "./AddNew";

export default function Table() {
    const [isOpen,setIsOpen] = useState(false)

     const columns = useMemo(() => [
     {
         accessorKey: 'ResidentialCleaner',
         header: 'Residential Cleaner',                                      
                                              
       },

         {                                                   

             accessorKey: 'Department',
             header: 'Department',
           },
         {                                                   

             accessorKey: 'Operation(site)',
             header: 'Operation (site)',
           },
                       
     ],[])

    return(
        <div className="row">
                        <div className="col-12">
                            <div className="card">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-md-6 mb-3">
                                            <h4>List All Grouping</h4>
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
                                    {/* <table id="datatable" className="table table-bordered dt-responsive nowrap w-100">
                                        <thead>
                                            <tr>
                                                <th> Name</th>
                                                <th>Main Department</th>
                                                <th>Sub Department</th>
                                                <th>Created At</th>
                                                <th>Action</th>


                                            </tr>
                                        </thead>

                                        <tbody>
                                            <tr>
                                                <td>Residential Cleaner</td>
                                                <td>Department</td>
                                                <td>Operation (site)</td>
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
                                    {/* <!-- The Modal --> */}
                                    <div className="modal fade" id="myModal">
                                        <div className="modal-dialog modal-lg">
                                            <div className="modal-content">

                                                {/* <!-- Modal Header --> */}
                                                <div className="modal-header">
                                                    <h4 className="modal-title">Add New Grouping</h4>
                                                    <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                                                </div>

                                                {/* <!-- Modal body --> */}
                                                <div className="modal-body">
                                                    <div className="row">
                                                        <div className="col-md-12">
                                                            <div className="mb-3">
                                                                <label for="">Name</label>
                                                                <input type="text" className="form-control" placeholder="Enter Your Name"/>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-12">
                                                            <div className="mb-3">
                                                                <label for="formrow-firstname-input" className="form-label">Main Department</label> <br/>
                                                                <select className="form-control select2-templating " style={{width: "100%"}}>
                                                                    <option value="HR">HR</option>
                                                                    <option value="Operation">Operation</option>
                                                                    <option value="Account">Account</option>
                                                                    <option value="Sales">Sales</option>
                                                                    <option value="Diretor">Director</option>
                                                                    <option value="Operation (site)">Operation (site)</option>



                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-12">
                                                            <div className="mb-3">
                                                                <label for="formrow-firstname-input" className="form-label">Sub Department</label> <br/>
                                                                <select className="form-control select2-templating " style={{width: "100%"}}>
                                                                    <option value="HR">HR</option>
                                                                    <option value="Operation">Operation</option>




                                                                </select>
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
