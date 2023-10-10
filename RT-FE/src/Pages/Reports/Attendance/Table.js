export default function Table() {
    return(
        <div class="row">
            <div class="col-12">
                <div class="card">
                    <div class="card-body">
                        <div class="row mb-3">
                            <div class="col-md-6">
                                <h4>Daily Attendace Report</h4>
                            </div>
                            <div class="col-md-6" style={{textAlign: "right"}}>
                                <button class="btn btn-info">CSV</button>
                                <button class="btn btn-info">Excel</button>
                                <button class="btn btn-info">PDF</button>
                                <button class="btn btn-info">CSV</button>
                            </div>
                        </div>

                        <table id="datatable" class="table attendance-table table-bordered dt-responsive nowrap w-100">
                            <thead>
                                <tr>
                                    <tr role="row">
                                        <th colspan="2" rowspan="1">HR Information</th>
                                        <th colspan="10" rowspan="1">Attendace Report</th>
                                    </tr>
                                </tr>
                                <tr>
                                    <th>Employee</th>                                                
                                    <th>Company</th>
                                    <th>Status</th>
                                    <th>Date</th>                                                
                                    <th>Clock In</th>
                                    <th>Clock In Lattidue</th>                                            
                                    <th>Clock In Longitude</th>
                                    <th>Clock Out</th>
                                    <th>Clock Out Lattidue</th>
                                    <th>Clock Out Longitude</th>
                                    <th>Total Work</th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                    <td>Amanpreeti Kaur</td>                                               
                                    <td>KMAC International Pte Ltd</td>
                                    <td></td>
                                    <td>Absent</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td>00:00</td>
                                    
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            {/* <!-- end col --> */}
        </div>
    )
};
