export default function Table() {
    return(
        <div className="row">
        <div className="col-12">
            <div className="card">
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-6 mb-3">
                            <h4>List All Locations</h4>
                        </div>
                        <div className="col-md-6 mb-3" style={{textAlign: "right"}}>
                            <button className="btn btn-primary text-right" data-bs-toggle="modal" data-bs-target="#myModal">Add New</button>
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
                    <table id="datatable" className="table table-bordered dt-responsive nowrap w-100">
                        <thead>
                            <tr>
                                <th>Location Name</th>
                                <th>Location Head</th>
                                <th>City</th>
                                <th>Country</th>
                                <th>Added By</th>
                                <th>Action</th>

                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td>HQ Company: KMAC International Pte Ltd</td>
                                <td></td>
                                <td>Singapore</td>
                                <td>Singapore</td>
                                <td>Human Resource</td>
                                <td>
                                    <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#myModal"><i className="fas fa-edit" style={{fontSize:"10px"}}></i></button>
                                    <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#myModal2"><i className="fas fa-eye" style={{fontSize:"10px"}}></i></button>
                                    <button className="btn btn-danger"><i className="fas fa-trash-alt" style={{fontSize:"10px"}}></i></button>
                                </td>

                            </tr>


                        </tbody>
                    </table>
                    {/* <!-- The Modal --> */}
                    <div className="modal fade" id="myModal">
                        <div className="modal-dialog modal-lg">
                            <div className="modal-content">

                                {/* <!-- Modal Header --> */}
                                <div className="modal-header">
                                    <h4 className="modal-title">Add New Location</h4>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                                </div>

                                {/* <!-- Modal body --> */}
                                <div className="modal-body">
                                    <div className="row">
                                        <div className="col-md-4">
                                            <div className="mb-3">
                                                <label for="formrow-firstname-input" className="form-label">Company</label> <br/>
                                                <select className="form-control select2-templating " style={{width: "100%"}}>
                                                    <option value="KMAC">KMAC International Pte Ltd</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="mb-3">
                                                <label for="formrow-firstname-input" className="form-label">Location Head</label> <br/>
                                                <select className="form-control select2-templating " style={{width: "100%"}}>
                                                    <option value="null">No Result Found</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="mb-3">
                                                <label>Location Name</label>
                                                <input type="text" className="form-control" placeholder="Enter Location Name"/>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="mb-3">
                                                <label for="">Address Line 1</label>
                                                <input type="text" className="form-control" placeholder="Address Line 1"/>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="mb-3">
                                                <label for="">Address Line 2</label>
                                                <input type="text" className="form-control" placeholder="Address Line 2"/>
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="mb-3">
                                                <label for="">City</label>
                                                <input type="text" className="form-control" placeholder="Enter City Name"/>
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="mb-3">
                                                <label for="">State / Province</label>
                                                <input type="text" className="form-control" placeholder="Enter Your State"/>

                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="mb-3">
                                                <label for="">Zip</label>
                                                <input type="text" className="form-control" placeholder="Enter zip code"/>
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="mb-3">
                                                <label for="formrow-firstname-input" className="form-label">Country</label> <br/>
                                                <select className="form-control select2-templating " style={{width: "100%"}}>
                                                    <option value="IN">India</option>
                                                    <option value="CN">China</option>
                                                    <option value="BG">Bangladesh</option>
                                                    <option value="MY">Malaysia</option>
                                                    <option value="AUS">Australia</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="mb-3">
                                                <label for="">Email</label>
                                                <input type="email" className="form-control" placeholder="Enter Your Email"/>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="mb-3">
                                                <label for="">Phone Number</label>
                                                <input type="text" className="form-control" placeholder="Enter your phone"/>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="mb-3">
                                                <label for="">Fax Number</label>
                                                <input type="text" className="form-control" placeholder="Enter Fax Number"/>
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

                    {/* <!-- this is modal view--> */}

                    {/* <!-- The Modal --> */}
                    <div className="modal fade" id="myModal2">
                        <div className="modal-dialog">
                            <div className="modal-content">

                                {/* <!-- Modal Header --> */}
                                <div className="modal-header">
                                    <h4 className="modal-title">View Company</h4>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                                </div>

                                {/* <!-- Modal body --> */}
                                <div className="modal-body">
                                    <div className="row mb-2">
                                        <div className="col-md-4">
                                            <p><strong>Company</strong></p>
                                        </div>
                                        <div className="col-md-8">
                                            <p>KMAC International Pte Ltd</p>
                                        </div>
                                    </div>
                                    <div className="row mb-2">
                                        <div className="col-md-4">
                                            <p><strong>Location Name</strong></p>
                                        </div>
                                        <div className="col-md-8">
                                            <p>HQ</p>
                                        </div>
                                    </div>
                                    <div className="row mb-2">
                                        <div className="col-md-4">
                                            <p><strong>Location Head</strong></p>
                                        </div>
                                        <div className="col-md-8">
                                            <p></p>
                                        </div>
                                    </div>
                                    <div className="row mb-2">
                                        <div className="col-md-4">
                                            <p><strong>Email</strong></p>
                                        </div>
                                        <div className="col-md-8">
                                            <p>humanresource@kmac.com.sg</p>
                                        </div>
                                    </div>
                                    <div className="row mb-2">
                                        <div className="col-md-4">
                                            <p><strong>Phone</strong></p>
                                        </div>
                                        <div className="col-md-8">
                                            <p>69093822</p>
                                        </div>
                                    </div>
                                    <div className="row mb-2">
                                        <div className="col-md-4">
                                            <p><strong>Fax Number</strong></p>
                                        </div>
                                        <div className="col-md-8">
                                            <p></p>
                                        </div>
                                    </div>
                                    <div className="row mb-2">
                                        <div className="col-md-4">
                                            <p><strong> Address</strong></p>
                                        </div>
                                        <div className="col-md-8">
                                            <p> 8 Boon Lay Way #05-10 8@Tradehub 21</p>
                                        </div>
                                    </div>
                                    <div className="row mb-2">
                                        <div className="col-md-4">
                                            <p><strong>City</strong></p>
                                        </div>
                                        <div className="col-md-8">
                                            <p>Singapore</p>
                                        </div>
                                    </div>
                                    <div className="row mb-2">
                                        <div className="col-md-4">
                                            <p><strong>State / Province</strong></p>
                                        </div>
                                        <div className="col-md-8">
                                            <p></p>
                                        </div>
                                    </div>
                                    <div className="row mb-2">
                                        <div className="col-md-4">
                                            <p><strong>Zip Code</strong></p>
                                        </div>
                                        <div className="col-md-8">
                                            <p>609964</p>
                                        </div>
                                    </div>
                                    <div className="row mb-2">
                                        <div className="col-md-4">
                                            <p><strong>Country</strong></p>
                                        </div>
                                        <div className="col-md-8">
                                            <p>Singapore</p>
                                        </div>
                                    </div>



                                </div>

                                {/* <!-- Modal footer --> */}
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Close</button>
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
