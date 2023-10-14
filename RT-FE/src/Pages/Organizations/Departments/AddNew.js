import { Modal } from "react-bootstrap";

export default function AddNew({show,setShow}) {
    return(
        <Modal size="xl" show={show} onHide={() => setShow(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Add New Empolyee</Modal.Title>
          </Modal.Header>
    
          <Modal.Body>
            <div className="row">
                                                        <div className="col-md-12">
                                                            <div className="mb-3">
                                                                <label for="">Name</label>
                                                                <input type="text" className="form-control" placeholder="Enter Your Name"/>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-12">
                                                            <div className="mb-3">
                                                                <label for="formrow-firstname-input" className="form-label">Company</label> <br/>
                                                                <select className="form-control select2-templating " style={{width: "100%"}}>
                                                                    <option value="KMAC">KMAC International Pte Ltd</option>



                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-12">
                                                            <div className="mb-3">
                                                                <label for="formrow-firstname-input" className="form-label">Locations</label> <br/>
                                                                <select className="form-control select2-templating " style={{width: "100%"}}>
                                                                    <option value="HQ">HQ</option>

                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-12">
                                                            <div className="mb-3">
                                                                <label for="formrow-firstname-input" className="form-label">Department Head</label> <br/>
                                                                <select className="form-control select2-templating " style={{width: "100%"}}>
                                                                    <option value="Director">Director</option>
                                                                    <option value="Sales">Sales</option>
                                                                    <option value="HR">HR</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </div>
          </Modal.Body>
          <Modal.Footer>
          <button type="button" className="btn btn-success">SAVE</button>

          </Modal.Footer>
        </Modal>
    )
};
