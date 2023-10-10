export default function EmployeeTable() {
    return(
        <div className="row">
                        <div className="col-12">
                            <div className="card">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-md-6 mb-3">
                                            <h4>List All Travels</h4>
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
                                                <th>Employee </th>
                                                <th>Company</th>
                                                <th>Place Of Visit</th>
                                                <th>Start Date</th>
                                                <th>End Date</th>
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
                                    </table>
                                    <div className="modal fade" id="myModal">
                                        <div className="modal-dialog modal-lg">
                                            <div className="modal-content">

                                                
                                                <div className="modal-header">
                                                    <h4 className="modal-title">Add New Travel</h4>
                                                    <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                                                </div>

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
                                                                <label for="formrow-firstname-input" className="form-label"> Employee</label> <br/>
                                                                <select className="form-control select2-templating " style={{width: "100%"}}>
                                                                    <option value=""> </option>

                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="mb-3">
                                                                <label for="">Start Date</label>
                                                                <input type="date" className="form-control" placeholder="Date"/>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="mb-3">
                                                                <label for="">End Date</label>
                                                                <input type="date" className="form-control" placeholder="Date"/>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="mb-3">
                                                                <label for="">Expected Budget</label>
                                                                <input type="text" className="form-control" placeholder="Expected Budget"/>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="mb-3">
                                                                <label for="">Actual Budget</label>
                                                                <input type="text" className="form-control" placeholder="Actual Budget"/>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="mb-3">
                                                                <label for="">Purpose Of Visit</label>
                                                                <input type="text" className="form-control" placeholder="visit purpose"/>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="mb-3">
                                                                <label for="">Place of Visit</label>
                                                                <input type="text" className="form-control" placeholder="Place of visit"/>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="mb-3">
                                                                <label for="formrow-firstname-input" className="form-label"> Travel Mode</label> <br/>
                                                                <select className="form-control select2-templating " style={{width: "100%"}}>
                                                                    <option value="bus"> By Bus</option>
                                                                    <option value="train">By Train</option>
                                                                    <option value="plane">By Plane</option>
                                                                    <option value="taxi">By Taxi</option>
                                                                    <option value="rentcar">By Rental Car</option>

                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="mb-3">
                                                                <label for="formrow-firstname-input" className="form-label"> Arrangement Type</label> <br/>
                                                                <select className="form-control select2-templating " style={{width: "100%"}}>
                                                                    <option value="Corporation"> Corporation</option>
                                                                    <option value="guest-house">Guest House</option>
                                                                </select>
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

                                                <div className="modal-footer">
                                                    <button type="button" className="btn btn-success">SAVE</button>
                                                </div>

                                            </div>
                                        </div>
                                    </div>


                                </div>
                            </div>
                        </div>
                    </div>
    )
};
