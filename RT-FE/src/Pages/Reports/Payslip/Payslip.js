import MainPage from "../../../Components/Common/MainPage";

export default function Payslip() {
    return(
        <MainPage title={"Payslip Report"}>
            <div class="row">
                        <div class="col-12">
                            <div class="card">
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-md-6 mb-3">
                                            <h4>View Payslip Report</h4>
                                        </div>
                                        <div class="col-md-6 mb-3" style={{textAlign: "right"}}>
                                            <button class="btn btn-primary text-right" data-bs-toggle="modal" data-bs-target="#myModal">Report Filters</button>
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
                                                <th>Employee ID </th>
                                                <th>Employee Name</th>
                                                <th>Paid Amount</th> 
                                                <th>Payment Month</th>  
                                                <th>Payment Date</th> 
                                                <th>Payslip Type</th>                                                                                 
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
                                    </table>
                                  {/* <!-- The Modal --> */}
                                  <div class="modal fade" id="myModal">
                                    <div class="modal-dialog modal-lg">
                                        <div class="modal-content">

                                            {/* <!-- Modal Header --> */}
                                            <div class="modal-header">
                                                <h4 class="modal-title">Report Filters</h4>
                                                <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                                            </div>

                                            {/* <!-- Modal body --> */}
                                            <div class="modal-body">
                                                <div class="row">
                                                    <div class="col-md-12">
                                                        <div class="mb-3">
                                                            <label for="formrow-firstname-input" class="form-label">Company</label> <br/>
                                                            <select class="form-control select2-templating " style={{width: "100%"}}>
                                                                <option value="Company">All Company</option>                                                                                                                              

                                                            </select>
                                                        </div>
                                                    </div>    
                                                    <div class="col-md-12">
                                                        <div class="mb-3">
                                                            <label for="formrow-firstname-input" class="form-label">Employee</label> <br/>
                                                            <select class="form-control select2-templating " style={{width: "100%"}}>
                                                                <option value="employee">Choose an employee</option>                                                                                                                              

                                                            </select>
                                                        </div>
                                                    </div>      
                                                    <div class="col-md-12">
                                                        <div class="mb-3">
                                                            <label for="">Month & Year</label>
                                                            <input type="date" class="form-control" placeholder=""/>
                                                        </div>
                                                    </div>                                                                                             

                                                    


                                                </div>
                                            </div>

                                            {/* <!-- Modal footer --> */}
                                            <div class="modal-footer">
                                                <button type="button" class="btn btn-success">Generate</button>
                                            </div>

                                        </div>
                                    </div>
                                </div>


                                </div>
                            </div>
                        </div>
                        {/* <!-- end col --> */}
                    </div>
        </MainPage>
    )
};
