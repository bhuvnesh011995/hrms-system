export default function OrganizationChart() {
    return(
        <div class="tab-pane">
        <h4>Organization Chart</h4>
        <form action="">
            <div class="row">
                <div class="col-md-4">
                    <div class="mb-3">
                        <label for="formrow-firstname-input" class="form-label">Chart Layout</label> <br/>
                        <select class="form-control select2-templating " style={{width: "100%"}}>
                            <option value="RtL">Right to Left</option>
                            <option value="LtR">Left to Right</option>
                            <option value="Ttb">Top to Bottom</option>
                            <option value="BtT">Bottom to Top</option>


                        </select>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="mb-3">
                        <label for="">Export File Title</label>
                        <input type="text" class="form-control" placeholder=""/>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="mb-3">
                        <label for="formrow-firstname-input" class="form-label">Export Chart </label>  <br/>
                        <input type="checkbox" id="switch13" switch="bool" checked />
                        <label for="switch13" data-on-label="Yes" data-off-label="No"></label>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="mb-3">
                        <label for="formrow-firstname-input" class="form-label">Zoom Chart </label>  <br/>
                        <input type="checkbox" id="switch14" switch="bool" checked />
                        <label for="switch14" data-on-label="Yes" data-off-label="No"></label>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="mb-3">
                        <label for="formrow-firstname-input" class="form-label">Pan Chart </label><br/>
                        <input type="checkbox" id="switch15" switch="bool" checked />
                        <label for="switch15" data-on-label="Yes" data-off-label="No"></label>
                    </div>
                </div>
            </div>
            <button type="button" class="btn btn-primary waves-effect waves-light w-25">SAVE</button>
        </form>

    </div>
    )
};
