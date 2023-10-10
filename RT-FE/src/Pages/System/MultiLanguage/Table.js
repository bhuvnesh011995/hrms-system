export default function Table() {
    return(
        <div class="row">
                        <div class="col-12">
                            <div class="card">
                                <div class="card-body">

                                    <p class="card-title-desc" style={{textAlign: "right"}}>
                                        <button class="btn btn-primary text-right" data-bs-toggle="modal" data-bs-target="#myModal">
                                            Add Language
                                        </button>
                                    </p>

                                    <table id="datatable" class="table table-bordered dt-responsive nowrap w-100">
                                        <thead>
                                            <tr>
                                                <th>Name</th>
                                                <th>Code</th>
                                                <th>Status</th>
                                                <th>Action</th>

                                            </tr>
                                        </thead>

                                        <tbody>
                                            <tr>
                                                <td>English</td>
                                                <td>Eng</td>
                                                <td>Active</td>
                                                <td>
                                                    <a class="add"><i class="far fa-save"></i></a>
                                                    <a class="edit"><i class="fas fa-edit"></i></a>
                                                    <a class="delete"><i class="fas fa-trash-alt"></i></a>
                                                </td>

                                            </tr>

                                            <tr>
                                                <td>Tamil</td>
                                                <td>tamil</td>
                                                <td>Inactive</td>
                                                <td>
                                                    <a class="add"><i class="far fa-save"></i></a>
                                                    <a class="edit"><i class="fas fa-edit"></i></a>
                                                    <a class="delete"><i class="fas fa-trash-alt"></i></a>
                                                </td>

                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                        {/* <!-- end col --> */}


                        <div class="modal fade" id="myModal">
                <div class="modal-dialog">
                    <div class="modal-content">

                        {/* <!-- Modal Header --> */}
                        <div class="modal-header">
                            <h4 class="modal-title">Add Language</h4>
                            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                        </div>

                        {/* <!-- Modal body --> */}
                        <div class="modal-body">
                            <div class="row">
                                <div class="col-md-12 mb-2">
                                    <label for="">Language Name</label>
                                    <input type="text" class="form-control" placeholder=""/>
                                </div>
                                <div class="col-md-12 mb-2">
                                    <label for="">Language Code</label>
                                    <input type="text" class="form-control" placeholder=""/>
                                </div>
                                <div class="col-md-12">
                                    <button class="btn btn-info">Add Language</button>
                                </div>

                            </div>
                        </div>


                    </div>
                </div>
            </div>


                    </div>
    )
};
