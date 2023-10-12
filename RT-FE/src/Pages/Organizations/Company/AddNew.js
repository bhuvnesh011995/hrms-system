import { Modal } from "react-bootstrap";

export default function AddNew({show,setShow}) {
    return(
        <Modal size="xl" show={show} onHide={() => setShow(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Add New Empolyee</Modal.Title>
          </Modal.Header>
    
          <Modal.Body>
            <div className="row">
                                                        <div className="col-md-6">
                                                            <div className="mb-3">
                                                                <label for="">Company Name</label>
                                                                <input type="text" className="form-control" placeholder="Enter Company Name"/>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="mb-3">
                                                                <label for="">Tax Number / EIN</label>
                                                                <input type="text" className="form-control" placeholder="Enter Tax Number"/>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-3">
                                                            <div className="mb-3">
                                                                <label for="formrow-firstname-input" className="form-label">Company Type</label> <br/>
                                                                <select className="form-control select2-templating " style={{width: "100%"}}>
                                                                    <option value="CR">Corporation</option>
                                                                    <option value="PR">Partnership</option>
                                                                    <option value="LLC">Limited Liability Company</option>
                                                                    <option value="SLP">Sole Proprietor</option>
                                                                    <option value="PLC">Private Limited Company</option>

                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-3">
                                                            <div className="mb-3">
                                                                <label for="">Legal / Trading Name</label>
                                                                <input type="text" className="form-control" placeholder="Enter Legal"/>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="mb-3">
                                                                <label for="">Address Line 1</label>
                                                                <input type="text" className="form-control" placeholder="Enter Address Line"/>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-3">
                                                            <div className="mb-3">
                                                                <label for="">Resignation Number</label>
                                                                <input type="text" className="form-control" placeholder="Enter Resignation"/>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-3">
                                                            <div className="mb-3">
                                                                <label for="">Contact Number</label>
                                                                <input type="text" className="form-control" placeholder="Enter Number"/>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="mb-3">
                                                                <label for="">Address Line 2</label>
                                                                <input type="text" className="form-control" placeholder="Enter Addres Line2"/>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-4">
                                                            <div className="mb-3">
                                                                <label for="">Email</label>
                                                                <input type="email" className="form-control" placeholder="Enter Email Address"/>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-4">
                                                            <div className="mb-3">
                                                                <label for="">Website</label>
                                                                <input type="text" className="form-control" placeholder="Enter Website Here"/>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-4">
                                                            <div className="mb-3">
                                                                <label for="formrow-firstname-input" className="form-label">Country</label> <br/>
                                                                <select className="form-control select2-templating " style={{width: "100%"}}>
                                                                    <option value="WB">West Bengal</option>
                                                                    <option value="UK">Uttarakhand</option>
                                                                    <option value="Bihar">Bihar</option>
                                                                    <option value="MH">Maharastra</option>
                                                                    <option value="DH">Delhi</option>

                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-4">
                                                            <div className="mb-3">
                                                                <label for="">City</label>
                                                                <input type="text" className="form-control" placeholder="Enter City"/>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-4">
                                                            <div className="mb-3">
                                                                <label for="">State / Province</label>
                                                                <input type="text" className="form-control" placeholder="Enter State"/>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-4">
                                                            <div className="mb-3">
                                                                <label for="">Zip Code</label>
                                                                <input type="text" className="form-control" placeholder="Enter Zipcode"/>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-4">
                                                            <div className="mb-3">
                                                                <label for="">Username</label>
                                                                <input type="text" className="form-control" placeholder="Enter username"/>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-4">
                                                            <div className="mb-3">
                                                                <label for="">Password</label>
                                                                <input type="password" className="form-control" placeholder="Enter password"/>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-4">
                                                            <div className="mb-3">
                                                                <label for="">Company Logo</label>
                                                                <input type="file" className="form-control" placeholder=""/>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="mb-3">
                                                                <label for="formrow-firstname-input" className="form-label">Currency</label> <br/>
                                                                <select className="form-control select2-templating " style={{width: "100%"}}>
                                                                    <option value="WB">S$SGD</option>


                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="mb-3">
                                                                <label for="formrow-firstname-input" className="form-label">Country</label> <br/>
                                                                <select className="form-control select2-templating " style={{width: "100%"}}>
                                                                    <option value="WB">(GMT + 8:00) Singapore</option>
                                                                    <option value=""></option>


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
