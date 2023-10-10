export default function Table1() {
    return(
        <div class="row">
                        <div class="col-12">
                            <div class="card">
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-md-6 mb-3">
                                            <h4>List All Employee Summary for 2023</h4>
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
                                    </table>
                                 
                                    <div class="modal fade" id="myModal">
                                        <div class="modal-dialog modal-lg">
                                            <div class="modal-content">

                                                {/* <!-- Modal Header --> */}
                                                <div class="modal-header">
                                                    <h4 class="modal-title">IR8A YA (Year of Assessment)</h4>
                                                    <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                                                </div>

                                                {/* <!-- Modal body --> */}
                                                <div class="modal-body">
                                                    <div class="row">
                                                        <div class="col-md-12">
                                                            <div class="mb-3">
                                                                <label for="formrow-firstname-input" class="form-label">Select Year</label> <br/>
                                                                <select class="form-control select2-templating " style={{width: "100%"}}>
                                                                    <option value="2021">2021</option>
                                                                    <option value="2022">2022</option>
                                                                    <option value="2023">2023</option>
                                                                   

                                                                </select>
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
    )
};
