import { Modal } from "react-bootstrap";

export default function AddNew({show,setShow}) {
    return(
        <Modal size="xl" show={show} onHide={() => setShow(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Add New Empolyee</Modal.Title>
          </Modal.Header>
    
          <Modal.Body>
            <div className="row">
                                        <div className="col-md-4">
                                            <div className="mb-3">
                                                <label for="formrow-firstname-input" className="form-label">Company</label> <br/>
                                                <select className="form-control select2-templating " style={{width: "100%"}}>
                                                    <option value="KMAC">KMAC International Pte Ltd</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="mb-3">
                                                <label for="formrow-firstname-input" className="form-label">Location Head</label> <br/>
                                                <select className="form-control select2-templating " style={{width: "100%"}}>
                                                    <option value="null">No Result Found</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="mb-3">
                                                <label>Location Name</label>
                                                <input type="text" className="form-control" placeholder="Enter Location Name"/>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="mb-3">
                                                <label for="">Address Line 1</label>
                                                <input type="text" className="form-control" placeholder="Address Line 1"/>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="mb-3">
                                                <label for="">Address Line 2</label>
                                                <input type="text" className="form-control" placeholder="Address Line 2"/>
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="mb-3">
                                                <label for="">City</label>
                                                <input type="text" className="form-control" placeholder="Enter City Name"/>
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="mb-3">
                                                <label for="">State / Province</label>
                                                <input type="text" className="form-control" placeholder="Enter Your State"/>

                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="mb-3">
                                                <label for="">Zip</label>
                                                <input type="text" className="form-control" placeholder="Enter zip code"/>
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="mb-3">
                                                <label for="formrow-firstname-input" className="form-label">Country</label> <br/>
                                                <select className="form-control select2-templating " style={{width: "100%"}}>
                                                    <option value="IN">India</option>
                                                    <option value="CN">China</option>
                                                    <option value="BG">Bangladesh</option>
                                                    <option value="MY">Malaysia</option>
                                                    <option value="AUS">Australia</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="mb-3">
                                                <label for="">Email</label>
                                                <input type="email" className="form-control" placeholder="Enter Your Email"/>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="mb-3">
                                                <label for="">Phone Number</label>
                                                <input type="text" className="form-control" placeholder="Enter your phone"/>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="mb-3">
                                                <label for="">Fax Number</label>
                                                <input type="text" className="form-control" placeholder="Enter Fax Number"/>
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
