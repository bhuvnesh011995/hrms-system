export default function Table() {
    return(
        <div className="row">
        <div className="col-12">
            <div className="card">
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-6 mb-3">
                            <h4>List All Official Documents</h4>
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
                                <th>Document Type</th>
                                <th>Title </th>
                                <th>Company</th>
                                <th>Expiry Date</th>
                                <th>Notifications</th>
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
                                    <button className="btn btn-primary"><i className="fas fa-eye" style={{fontSize:"10px"}}></i></button>
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
                                    <h4 className="modal-title">Add New Document</h4>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                                </div>

                                {/* <!-- Modal body --> */}
                                <div className="modal-body">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="mb-3">
                                                <label for="">License Name</label>
                                                <input type="text" className="form-control" placeholder="Enter License Name"/>
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="mb-3">
                                                <label for="formrow-firstname-input" className="form-label">Document Type</label> <br/>
                                                <select className="form-control select2-templating " style={{width: "100%"}}>
                                                    <option value="DL">Driving License</option>
                                                    <option value="LTVP">Long Term Visit Pass</option>


                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="mb-3">
                                                <label for="">License Number</label>
                                                <input type="text" className="form-control" placeholder="Enter License Name"/>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="mb-3">
                                                <label for="formrow-firstname-input" className="form-label">
                                                    Company
                                                </label> <br/>
                                                <select className="form-control select2-templating " style={{width: "100%"}}>
                                                    <option value="KMAC">KMAC International PTE LTD</option>



                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="mb-3">
                                                <label for="">Expiry Date</label>
                                                <input type="date" className="form-control" placeholder=""/>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="mb-3">
                                                <label for="formrow-firstname-input" className="form-label">
                                                    Alarm Notifications
                                                </label> <br/>
                                                <select className="form-control select2-templating " style={{width: "100%"}}>
                                                    <option value="noalarm">No Alarm</option>
                                                    <option value="1month"> 1 Month</option>
                                                    <option value="3month"> 3 Month</option>
                                                    <option value="6month"> 6 Month</option>



                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <label for="">Official Document</label>
                                            <input type="file" placeholder="" className="form-control"/>
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
      
    </div>
    )
};
