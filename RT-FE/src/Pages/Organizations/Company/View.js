import { useEffect } from "react";
import { Modal } from "react-bootstrap";
import {fileUrl} from "../../../Config/Config" 

export default function View({ viewData, setViewData, show, setShow }) {
  useEffect(() => {
    return () => {
      setViewData(null);
    };
  }, []);
   console.log("Viewdata",viewData)
   
  return (
    <Modal size="lg" show={show} onHide={() => setShow(false)}>
      <Modal.Header closeButton>
        <Modal.Title>View Company</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <div className="row mb-2">
          <div className="col-md-4">
            <p>
              <strong>Company Name</strong>
            </p>
          </div>
          <div className="col-md-8">
            <p>{viewData?.name}</p>
          </div>
        </div>
        
        <div className="row mb-2">
          <div className="col-md-4">
            <p>
              <strong>
              Tax Number / EIN</strong>
            </p>
          </div>
          <div className="col-md-8">
            <p>{viewData?.taxNumber}</p>
          </div>
        </div>

        <div className="row mb-2">
          <div className="col-md-4">
            <p>
              <strong>
              Company Type</strong>
            </p>
          </div>
          <div className="col-md-8">
            <p>{viewData?.companyType?.name}</p>
          </div>
        </div>

        <div className="row mb-2">
          <div className="col-md-4">
            <p>
              <strong>
              Legal / Trading Name</strong>
            </p>
          </div>
          <div className="col-md-8">
            <p>{viewData?.tradingName}</p>
          </div>
        </div>

        <div className="row mb-2">
          <div className="col-md-4">
            <p>
              <strong>
              Resignation Number</strong>
            </p>
          </div>
          <div className="col-md-8">
            <p>{viewData?.registrationNumber}</p>
          </div>
        </div>

        
        <div className="row mb-2">
          <div className="col-md-4">
            <p>
              <strong>
              Contact Number</strong>
            </p>
          </div>
          <div className="col-md-8">
            <p>{viewData?.phone}</p>
          </div>
        </div>

        <div className="row mb-2">
          <div className="col-md-4">
            <p>
              <strong>
             Address Line 1</strong>
            </p>
          </div>
          <div className="col-md-8">
            <p>{viewData?.line1}</p>
          </div>
        </div>

        <div className="row mb-2">
          <div className="col-md-4">
            <p>
              <strong>
              Address Line 2</strong>
            </p>
          </div>
          <div className="col-md-8">
            <p>{viewData?.line2}</p>
          </div>
        </div>

        <div className="row mb-2">
          <div className="col-md-4">
            <p>
              <strong>
              Email</strong>
            </p>
          </div>
          <div className="col-md-8">
            <p>{viewData?.email}</p>
          </div>
        </div>

        <div className="row mb-2">
          <div className="col-md-4">
            <p>
              <strong>
              Website</strong>
            </p>
          </div>
          <div className="col-md-8">
            <p>{viewData?.website}</p>
          </div>
        </div>

        <div className="row mb-2">
          <div className="col-md-4">
            <p>
              <strong>
              Country</strong>
            </p>
          </div>
          <div className="col-md-8">
            <p>{viewData?.country}</p>
          </div>
        </div>

        <div className="row mb-2">
          <div className="col-md-4">
            <p>
              <strong>
              City</strong>
            </p>
          </div>
          <div className="col-md-8">
            <p>{viewData?.city}</p>
          </div>
        </div>

        <div className="row mb-2">
          <div className="col-md-4">
            <p>
              <strong>
              State / Province</strong>
            </p>
          </div>
          <div className="col-md-8">
            <p>{viewData?.state}</p>
          </div>
        </div>

        <div className="row mb-2">
          <div className="col-md-4">
            <p>
              <strong>
              Zip Code</strong>
            </p>
          </div>
          <div className="col-md-8">
            <p>{viewData?.zipCode}</p>
          </div>
        </div>

        <div className="row mb-2">
          <div className="col-md-4">
            <p>
              <strong>
              Username</strong>
            </p>
          </div>
          <div className="col-md-8">
            <p>{viewData?.username}</p>
          </div>
        </div>

       
        <div className="row mb-2">
          <div className="col-md-4">
            <p>
              <strong>
              Company Logo</strong>
            </p>
          </div>
          <div className="col-md-8">
          <p>{viewData?.logo} " " <a target="_blank" download={viewData.logo} href={`${fileUrl}/`+viewData.logo}>Download</a></p>
          </div>

        </div>

        <div className="row mb-2">
          <div className="col-md-4">
            <p>
              <strong>
              Currency
             </strong>
            </p>
          </div>  
          <div className="col-md-8">
            <p>{viewData?.currency? viewData?.currency?.name+ " "+viewData?.currency?.symbol:"not available" }</p>
          </div>
        </div>

        <div className="row mb-2">
          <div className="col-md-4">
            <p>
              <strong>
              Timezone
             </strong>
            </p>
          </div>
          <div className="col-md-8">
            <p>{viewData?.timeZone}</p>
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
