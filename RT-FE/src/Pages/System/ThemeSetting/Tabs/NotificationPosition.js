export default function NotificationPosition() {
    return(
        <div class="tab-pane">
        <h4>Notification Position</h4>
        <form action="">
            <div class="row">
                <div class="col-md-4">
                    <div class="mb-3">
                        <label class="form-label">Positions</label> <br/>
                        <select class="form-control select2-templating " style={{width: "100%"}}>
                            <option value="TopR">Top Right</option>
                            <option value="BR">Bottom Right</option>
                            <option value="BL">Bottom Left</option>
                            <option value="TOPL">Top Left</option>
                            <option value="TOPC">Top Center</option>

                        </select>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="mb-3">
                        <label class="form-label">Enable Close Button </label> <br/>
                        <input type="checkbox" id="switch1" switch="bool" checked />
                        <label for="switch1" data-on-label="Yes" data-off-label="No"></label>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="mb-3">
                        <label class="form-label">Progress Bar </label> <br/>
                        <input type="checkbox" id="switch2" switch="bool" />
                        <label for="switch2" data-on-label="Yes" data-off-label="No"></label>
                    </div>
                </div>
            </div>
            <button type="button" class="btn btn-primary waves-effect waves-light w-25">SAVE</button>
        </form>

    </div>
    )
};
