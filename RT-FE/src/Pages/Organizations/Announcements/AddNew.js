import { Modal } from "react-bootstrap";

export default function AddNew({show,setShow}) {
  

    return (
        <Modal size="lg" show={show} onHide={() => setShow(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Add New Announcements</Modal.Title>
          </Modal.Header>
    
          <Modal.Body>
          <div className="row">
                                                        <div className="col-md-12">
                                                            <div className="mb-3">
                                                                <label for="">Title</label>
                                                                <input type="text" className="form-control" placeholder="Enter Title"/>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="mb-3">
                                                                <label for="">Start Date</label>
                                                                <input type="date" className="form-control" placeholder=""/>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="mb-3">
                                                                <label for="">End Date</label>
                                                                <input type="date" className="form-control" placeholder=""/>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="mb-3">
                                                                <label for="formrow-firstname-input" className="form-label">Company</label> <br/>
                                                                <select className="form-control select2-templating " style={{width: "100%"}}>
                                                                    <option value="HR">KMAC International Pte Ltd</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="mb-3">
                                                                <label for="formrow-firstname-input" className="form-label">Location</label> <br/>
                                                                <select className="form-control select2-templating " style={{width: "100%"}}>
                                                                    <option value="HQ">HQ</option>
                                                                    <option value="Customersite">Customer Site</option>

                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="mb-3">
                                                                <label for="formrow-firstname-input" className="form-label"> Department</label> <br/>
                                                                <select className="form-control select2-templating " style={{width: "100%"}}>
                                                                    <option value=""></option>
                                                                    <option value=""></option>




                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="mb-3">
                                                                <label for="">Summary</label>
                                                                <input type="text" className="form-control" placeholder="Summary "/>
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
      );
};
