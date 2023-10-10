import { useState } from "react";
import { Modal } from "react-bootstrap";
import { addConstant } from "../../../../../Utility/API/constant";

export default function AddNew({getAll,show,setShow}) {
  const [name,setName] = useState("")
  async function handleSubmit(e){
    e.preventDefault()
    if(!name) return
    let res = await addConstant("company",{name})

    if(res.status ===204){
      getAll();
      setShow(false);
    }
  }

    return (
        <Modal size="lg" show={show} onHide={() => setShow(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Add New Company Type</Modal.Title>
          </Modal.Header>
    
          <Modal.Body>
          <label for="">Company Type</label>
                <input
                value={name}
                onChange={e=>setName(e.target.value)}
                  type="text"
                  class="form-control"
                  placeholder="Enter Company type"
                />
          </Modal.Body>
          <Modal.Footer>
          <button onClick={handleSubmit} type="button" class="btn btn-success">
                  Save
                </button>
          </Modal.Footer>
        </Modal>
      );
};
