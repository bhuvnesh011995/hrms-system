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
                                                                <label for="formrow-firstname-input" className="form-label">Main Department</label> <br/>
                                                                <select className="form-control select2-templating " style={{width: "100%"}}>
                                                                    <option value="HR">HR</option>
                                                                    <option value="Operation">Operation</option>
                                                                    <option value="Account">Account</option>
                                                                    <option value="Sales">Sales</option>
                                                                    <option value="Diretor">Director</option>
                                                                    <option value="Operation (site)">Operation (site)</option>



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
