export default function PayrollLogo() {
    return(
        <div class="tab-pane">
        <h4>Payroll Logo (for payroll pdf)</h4>
        <form action="">
            <div class="row">
                <div class="col-md-6">
                    <div class="mb-3">
                        <label for="">Logo</label>
                        <input type="file" class="form-control"/>
                        <small>- Upload files only: gif,png,jpg,jpeg</small> <br/>
                        <small>- Best Size: 137x40</small> <br/>
                    </div>


                </div>
            </div>
            <button type="button" class="btn btn-primary waves-effect waves-light w-25">SAVE</button>
        </form>

    </div>
    )
};
