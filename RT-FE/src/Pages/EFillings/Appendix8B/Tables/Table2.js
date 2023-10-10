export default function Table2() {
    return(
        <div class="row">
                        <div class="col-12">
                            <div class="card">
                                <div class="card-body">
                                    <div class="row mb-3">
                                        <div class="col-md-6">
                                            <h4>Employees Timesheet</h4>
                                            <small>For the month of June 2023</small>
                                        </div>
                                        <div class="col-md-6" style={{textAlign: "right"}}>
                                            <button class="btn btn-info">CSV</button>
                                            <button class="btn btn-info">Excel</button>
                                            <button class="btn btn-info">PDF</button>
                                            <button class="btn btn-info">CSV</button>
                                        </div>
                                    </div>
                                    <div class="attendance-table" style={{overflow:"scroll"}}>
                                        <table id="datatable" class="table display attendance-table table-bordered nowrap" style={{width: "1400px"}}>
                                            <thead>
                                                <tr>
                                                    <th>Employee</th>
                                                    <th>Total Gross Amount of Gains (EEBR)</th>
                                                    <th>Total Gross Amount of Gains (ESIR) SMEs</th>
                                                    <th>Total Gross Amount of Gains (ESIR) CORPs </th>
                                                    <th>Total Gross Amount of Gains (ESIR) START-UPs</th>
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
                                                        <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#myModal"><i class="fas fa-edit" style={{fontSize:"10px"}}></i></button>
                                                        <button class="btn btn-danger"><i class="fas fa-trash-alt" style={{fontSize:"10px"}}></i></button>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                        {/* <!-- end col --> */}
                    </div>
    )
};
