export default function Table() {
    return(
        <div class="row">
                        <div class="col-12">
                            <div class="card">
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-md-6 mb-3">
                                            <h4>Office Shifts</h4>
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
                                    <table id="datatable" class="table table-bordered dt-responsive nowrap w-100">
                                        <thead>
                                            <tr>
                                                <th>Company </th>
                                                <th>Day</th>
                                                <th>Monday </th>                                            
                                                <th>Tuesdau</th>
                                                <th>Wednesday</th>
                                                <th>Thursday</th>
                                                <th>Friday</th>
                                                <th>Saturday</th>
                                                <th>Sunday</th>
                                                <th>Action</th>


                                            </tr>
                                        </thead>

                                        <tbody>
                                            <tr>
                                              <td>KMAC International Pte Ltd</td>
                                              <td> Monday To Friday 9am to 5pm</td>
                                              <td>9am to 5pm</td>
                                              <td>9am to 5pm</td>
                                              <td>9am to 5pm</td>
                                              <td>9am to 5pm</td>
                                              <td>9am to 5pm</td>
                                              <td>9am to 5pm</td>
                                              <td>9am to 5pm</td>
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
                                                    <h4 class="modal-title">Add New</h4>
                                                    <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                                                </div>

                                                {/* <!-- Modal body --> */}
                                                <div class="modal-body">
                                                    <div class="row">
                                                        <div class="col-md-12">
                                                            <div class="mb-3">
                                                                <label for="formrow-firstname-input" class="form-label">Company</label> <br/>
                                                                <select class="form-control select2-templating " style={{width: "100%"}}>
                                                                    <option value="HR">KMAC international pvt ltd</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div class="col-md-12">
                                                            <div class="mb-3">
                                                                <label for="">Shift Name</label>
                                                                <input type="text" class="form-control" placeholder="Enter Shift Name"/>
                                                            </div>
                                                        </div>
                                                        <div class="col-md-12">
                                                            
                                                                
                                                            
                                                            <form class="repeater" enctype="multipart/form-data">
                                                                <div data-repeater-list="group-a">
                                                                    <div data-repeater-item class="row">
                                                                        <label for="">Monday</label>
                                                                        <div  class="mb-3 col-lg-5">
                                                                            <label for="">In Time</label>
                                                                            <input type="time" id="" name="untyped-input" class="form-control" placeholder="Enter In Time"/>
                                                                        </div>
                            
                                                                        <div  class="mb-3 col-lg-5">
                                                                            <label for="">Out Time</label>
                                                                            <input type="time" id="" class="form-control" placeholder="Enter Out Time"/>
                                                                        </div>
                            
                                                                        
                                                                        
                                                                        <div class="col-lg-2 align-self-center">
                                                                            <div class="d-grid">
                                                                                <input data-repeater-delete type="button" class="btn btn-primary" value="Delete"/>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    
                                                                </div>
                                                                <input data-repeater-create type="button" class="btn btn-success mt-3 mt-lg-0" value="Add"/>
                                                            </form>
                                                        </div>
                                                      
                                                        


                                                    </div>
                                                </div>

                                                {/* <!-- Modal footer --> */}
                                                <div class="modal-footer">
                                                    <button type="button" class="btn btn-success">SAVE</button>
                                                </div>

                                            </div>
                                        </div>
                                    </div>


                                </div>
                            </div>
                        </div>
                        {/* // <!-- end col --> */}
                    </div>
    )
};
