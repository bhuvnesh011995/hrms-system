import { useEffect } from "react";
import { Modal } from "react-bootstrap";
import { fileUrl } from "../../../Config/Config";

import { toast } from "react-toastify";

import { deleteTerminationFile,getTerminationById } from "../../../Utility/API/termination";

export default function View({viewData, setViewData, show, setShow }) {
  useEffect(() => {
    return () => {
      setViewData(null);
    };
  }, []);


  return (
    <Modal size="lg" show={show} onHide={() => setShow(false)}>
      <Modal.Header closeButton>
        <Modal.Title>View Termination</Modal.Title>
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
              Terminate Employee
              </strong>
            </p>
          </div>
          <div className="col-md-8"> 
            <p>{viewData?.employee ? viewData?.employee?.fName+ " "+viewData?.employee?.lName:"not available"}</p>
          </div>
        </div>
        <div className="row mb-2">
          <div className="col-md-4">
            <p>
              <strong>
              Notice Date</strong>
            </p>
          </div>
          <div className="col-md-8"> 
            <p>{viewData?.noticeDate?.slice(0,10).split("-").reverse().join("/")}</p>
          </div>
        </div>
        <div className="row mb-2">
          <div className="col-md-4">
            <p>
              <strong>Termination Date</strong>
            </p>
          </div>
          <div className="col-md-8">
          <p>{viewData?.terminationDate?.slice(0,10).split("-").reverse().join("/")}</p>
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
                viewData?.files?.map((ele,i)=>(<p key={i}>{ele.slice(8)}  <a target="_blank" download={ele} href={`${fileUrl}/`+ele}><button className="btn-primary">Download</button></a>
                <button className="ms-2 btn-danger" onClick={async()=>{
                    let res = await deleteTerminationFile(viewData._id,ele)
                    if(res.status===204) {
                        toast.success("file deleted")
                        let res = await getTerminationById(viewData._id)

                        if(res.status===200) setViewData(res.data)
                    }
                }}>Delete</button>
                </p>)
                
                )
            }
            
          </div>
        </div>
        <div className="row mb-2">
          <div className="col-md-4">
            <p>
              <strong>
                Status</strong>
            </p>
          </div>
          <div className="col-md-8">
            <span style={{backgroundColor:viewData?.status!="Accepted"?"red":"green" || "while",color:viewData?.status?"white":"black"}}>{viewData?.status||"NA"}</span>
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
