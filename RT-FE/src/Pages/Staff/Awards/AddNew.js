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
                                                                <label for="formrow-firstname-input" className="form-label">Company</label> <br/>
                                                                <select className="form-control select2-templating " style={{width: "100%"}}>
                                                                    <option value="HR">KMAC international pvt ltd</option>


                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-12">
                                                            <div className="mb-3">
                                                                <label for="formrow-firstname-input" className="form-label">Employee</label> <br/>
                                                                <select className="form-control select2-templating " style={{width: "100%"}}>
                                                                    <option value=""></option>


                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="mb-3">
                                                                <label for="formrow-firstname-input" className="form-label">Award Type</label> <br/>
                                                                <select className="form-control select2-templating " style={{width: "100%"}}>
                                                                    <option value="award1">Award Type 1</option>

                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="mb-3">
                                                                <label for="">Date</label>
                                                                <input type="date" className="form-control" placeholder=""/>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="mb-3">
                                                                <label for="">Gift</label>
                                                                <input type="text" className="form-control" placeholder="gift"/>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="mb-3">
                                                                <label for="">Cash</label>
                                                                <input type="text" className="form-control" placeholder="Cash"/>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="mb-3">
                                                                <label for="">Month & Year</label>
                                                                <input type="text" className="form-control" placeholder="Month & Year"/>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <label for="">Award Photo</label>
                                                            <input type="file" className="form-control"/>
                                                        </div>
                                                        <div className="col-md-12">
                                                            <div className="mb-3">
                                                                <label for="">Award Information</label>
                                                                <textarea name="" id="" cols="30" rows="10" className="form-control" style={{height: "70px"}}></textarea>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-12">
                                                            <div className="mb-3">
                                                                <label for="">Description</label>
                                                                <textarea name="" id="" cols="30" rows="10" className="form-control" style={{height: "70px"}}></textarea>
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
