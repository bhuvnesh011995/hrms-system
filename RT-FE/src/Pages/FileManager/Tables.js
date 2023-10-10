export default function Tables() {
    return(
        <div class="col-md-9">

                            <div class="tab-content text-muted mt-4 mt-md-0" id="v-pills-tabContent">
                                <div class="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
                                    <div class="row">
                                        <div class="col-12">
                                            <div class="card">
                                                <div class="card-body">
                                                    <div class="row">
                                                        <div class="col-md-6 mb-3">
                                                            <h4>List All Files</h4>
                                                        </div>
                                                        <div class="col-md-6 mb-3" style={{textAlign: "right"}}>
                                                            <button class="btn btn-primary text-right" data-bs-toggle="modal" data-bs-target="#myModal">Add New</button>
                                                        </div>
                                                    </div>
                
                
                                                    <p class="card-title-desc" style={{textAlign: "right"}}>
                                                        <button class="btn btn-info text-right">
                                                            CSV
                                                        </button>
                                                        <button class="btn btn-info text-right">
                                                            Excel
                                                        </button>
                                                        <button class="btn btn-info text-right">
                                                            PDF
                                                        </button>
                                                        <button class="btn btn-info text-right">
                                                            Print
                                                        </button>
                                                    </p>
                                                    <table id="datatable" class="table display table-bordered dt-responsive nowrap w-100">
                                                        <thead>
                                                            <tr>
                                                                <th>ID  </th>
                                                                <th>Name</th>
                                                                <th>Company</th> 
                                                                <th>Email</th>  
                                                                <th>Role</th>
                                                                <th>Designation</th>
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
                                                                <td></td>
                                                                <td>
                                                                    <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#myModal"><i class="fas fa-edit" style={{fontSize:"10px"}}></i></button>
                                                                    <button class="btn btn-danger"><i class="fas fa-trash-alt" style={{fontSize:"10px"}}></i></button>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                  {/* <!-- The Modal --> */}
                                                  <div class="modal fade" id="myModal">
                                                    <div class="modal-dialog modal-lg">
                                                        <div class="modal-content">
                
                                                            {/* <!-- Modal Header --> */}
                                                            <div class="modal-header">
                                                                <h4 class="modal-title">Add New Files</h4>
                                                                <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                                                            </div>
                
                                                            {/* <!-- Modal body --> */}
                                                            <div class="modal-body">
                                                                <div class="row">
                                                                    <div class="col-md-12">
                                                                        <div class="mb-3">
                                                                            <label for="formrow-firstname-input" class="form-label">Department</label> <br/>
                                                                            <select class="form-control select2-templating " style={{width: "100%"}}>
                                                                                <option value="HR">HR</option>
                                                                                <option value="Operation">Operation</option>
                                                                                <option value="Accountant">Accountant</option>                                                              
                
                                                                            </select>
                                                                        </div>
                                                                    </div>     
                                                                    <div class="col-md-12">
                                                                        <div class="mb-3">
                                                                            <label for="">Document File</label>
                                                                            <input type="file" class="form-control" placeholder=""/>
                                                                        </div>
                                                                    </div>                                                                                          
                
                                                                    
                
                
                                                                </div>
                                                            </div>
                
                                                            {/* <!-- Modal footer --> */}
                                                            <div class="modal-footer">
                                                                <button type="button" class="btn btn-success">Get</button>
                                                            </div>
                
                                                        </div>
                                                    </div>
                                                </div>
                
                
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!-- end col --> */}
                                    </div>
                                    </div>

                                    <div class="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis similique consequuntur maxime, natus ea dolorum animi soluta numquam voluptate unde ipsam veritatis provident quaerat et dicta sit aliquam, minima consectetur.</p>
                                        </div>
                                </div>
                           
                            {/* <!-- end row --> */}
                        </div>
    )
};
