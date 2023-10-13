import { Modal } from "react-bootstrap";

export default function AddNew({show,setShow}) {
    return(
        <Modal size="sm" show={show} onHide={() => setShow(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Add New Language</Modal.Title>
          </Modal.Header>
    
          <Modal.Body>
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
          </Modal.Body>
        </Modal>
    )
};
