export default function SystemLogo() {
    return (
        <div class="tab-pane">
        <h4>System Logo</h4>
        <form action="">
            <div class="row">
                <div class="col-md-6">
                    <div class="mb-3">
                        <label >System Logo</label>
                        <input type="file" class="form-control"/>
                        <small>Upload files only: gif,png,jpg,jpeg</small> <br/>
                        <small>- Best Size: 32x27</small> <br/>
                        <small>- Light logo</small>
                    </div>

                </div>
                <div class="col-md-6">
                    <div class="mb-3">
                        <label for="">Favicon</label>
                        <input type="file" class="form-control"/>
                        <small>- Upload files only: gif,ico,png</small> <br/>
                        <small>- Best Size: 16x16</small> <br/>
                    </div>

                 
                </div>
            </div>
            <button type="button" class="btn btn-primary waves-effect waves-light w-25">SAVE</button>
        </form>
    </div>
    )
};
