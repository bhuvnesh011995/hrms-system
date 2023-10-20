import { Modal } from "react-bootstrap";

export default function AddNew({show,setShow}) {
    return(
        <Modal size="xl" show={show} onHide={() => setShow(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Add New Empolyee Exit</Modal.Title>
          </Modal.Header>
    
          <Modal.Body>
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
                                    <button type="button" className="btn btn-success">SAVE</button>

          </Modal.Body>
        </Modal>
    )
};