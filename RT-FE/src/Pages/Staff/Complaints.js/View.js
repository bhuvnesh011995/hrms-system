import { useEffect } from "react";
import { Modal } from "react-bootstrap";
import { fileUrl } from "../../../Config/Config";

import { toast } from "react-toastify";
import { deleteComplaintFile, getComplaintById } from "../../../Utility/API/complaint";

export default function View({ viewData, setViewData, show, setShow }) {
  useEffect(() => {
    return () => {
      setViewData(null);
    };
  }, []);
  return (
    <Modal size="lg" show={show} onHide={() => setShow(false)}>
      <Modal.Header closeButton>
        <Modal.Title>View Complaint</Modal.Title>
      </Modal.Header>

      <Modal.Body>
       
        <div className="row mb-2">
          <div className="col-md-4">
            <p>
              <strong>Company</strong>
            </p>
          </div>
          <div className="col-md-8">
            <p>{viewData?.company.name}</p>
          </div>
        </div>
        <div className="row mb-2">
          <div className="col-md-4">
            <p>
              <strong>
                Complaint Title</strong>
            </p>
          </div>
          <div className="col-md-8">
            <p>{viewData?.title}</p>
          </div>
        </div>
        <div className="row mb-2">
          <div className="col-md-4">
            <p>
              <strong>From Employee</strong>
            </p>
          </div>
          <div className="col-md-8">
          <p>{viewData?.from ? viewData?.from?.fName+ " "+viewData?.from?.lName:"not available"}</p>
          </div>
        </div>

        <div className="row mb-2">
          <div className="col-md-4">
            <p>
              <strong>Against Employee</strong>
            </p>
          </div>
          <div className="col-md-8">
          <p>{viewData?.against ? viewData?.against?.fName+ " "+viewData?.against?.lName:"not available"}</p>
          </div>
        </div>
 
        <div className="row mb-2">
          <div className="col-md-4">
            <p>
              <strong>
                Date</strong>
            </p>
          </div>
          <div className="col-md-8">
            <p>{viewData?.date?.slice(0,10).split("-").reverse().join("/")}</p>
          </div>
        </div>
        <div className="row mb-2">
          <div className="col-md-4">
            <p>
              <strong>Attachment</strong>
            </p>
          </div>
          <div className="col-md-8">
            {
                viewData?.files?.map((ele,i)=>(<p key={i}>{ele.slice(8)}  <a target="_blank" download={ele} href={`${fileUrl}/`+ele}>Download</a>
                <a className="ms-2" onClick={async()=>{
                    let res = await deleteComplaintFile(viewData._id,ele)
                    if(res.status===204) {
                        toast.success("file deleted")
                        let res = await getComplaintById(viewData._id)

                        if(res.status===200) setViewData(res.data)
                    }
                }} style={{color:"red",cursor:"pointer"}}>Delete</a>
                </p>)
                
                )
            }
            
          </div>
        </div>
       
        <div className="row mb-2">
          <div className="col-md-4">
            <p>
              <strong>
                Description</strong>
            </p>
          </div>
          <div className="col-md-8">
            <p>{viewData?.description}</p>
          </div>
        </div>
        
        
      </Modal.Body>
      <Modal.Footer>
        <button type="button" className="btn btn-danger" onClick={()=>setShow(false)}>
          Close
        </button>
      </Modal.Footer>
    </Modal>
  );
}
