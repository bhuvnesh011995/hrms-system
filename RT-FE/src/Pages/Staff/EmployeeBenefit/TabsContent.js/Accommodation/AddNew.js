import { Modal } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { addAccommodation } from "../../../../../Utility/API/accommodation";
export default function AddNew({ show, setShow }) {
  const { register, handleSubmit,  formState: { errors }} = useForm();
  const [accommodationType , setAccommodationType] = useState("");

  const submitData =async (data)=>{
    try{
      let res = await addAccommodation(data);
      console.log("Response:", res);
      setShow(false)

    } catch(error){
      console.error("Error:", error);
    }

  }



  const handleAccommodationTypeChange = (event) => {
    setAccommodationType(event.target.value);
  };



  return (
    <Modal size="xl" show={show} onHide={() => setShow(false)}>
      <Modal.Header closeButton  >
        <Modal.Title>Add New Empolyee</Modal.Title>
      </Modal.Header>

      <Modal.Body>
                <form onSubmit={handleSubmit(submitData)}>

        <div className="row">
          <div className="col-md-4">
            <div className="mb-3">
              <label for="">Accommodation Title</label>
              <input type="text" className="form-control" placeholder=""   {...register("accommodationTitle")}  />
            </div>
          </div>
          <div className="col-md-4">
            <div className="mb-3">
              <label for="">Address Line 1</label>
              <input
                type="text"
                className="form-control"
                placeholder="address line 1"
                {...register("addressLine1")}
              />
            </div>
          </div>
          <div className="col-md-4">
            <div className="mb-3">
              <label for="">Address Line 2</label>
              <input
                type="text"
                className="form-control"
                placeholder="address line 2"
                {...register("addressLine2")}
              />
            </div>
          </div>
          <div className="col-md-4">
            <div className="mb-3">
              <label for="">Period Form </label>
              <input type="date" className="form-control" placeholder=""  {...register("periodForm")} />
            </div>
          </div>
          <div className="col-md-4">
            <div className="mb-3">
              <label for="">Period To</label>
              <input type="date" className="form-control" placeholder="" {...register("periodTo")} />
            </div>
          </div>
          <div className="col-md-4">
            <div className="mb-3">
              <label for="formrow-firstname-input" className="form-label">
                Accommodation Type
              </label>{" "}
              <br />
              <select
                className="form-control select2-templating " value={accommodationType} {...register("accommodationType")}
                onChange={handleAccommodationTypeChange}
                style={{ width: "100%" }}
              >
                <option value="">...select </option>
                <option value="rented">Rented</option>
                <option value="owned">Owned</option>

              </select>
            </div>
          </div>
          {accommodationType === "rented" && (    
            <>                                     
          <div className="col-md-4">
            <div className="mb-3">
              <label for="formrow-firstname-input" className="form-label">
              Annual Rent Paid
                            </label>{" "}
              <br />
         
              <input type="text" className="form-control" placeholder="Total Rent Paid in the Period"  {...register("annualRentPaid")} />

            </div>
          </div>
          </>    
 )  }
          {accommodationType === "owned" && (     
            <>                   
          <div className="col-md-4">
            <div className="mb-3">
              <label for="formrow-firstname-input" className="form-label">
              Annual Value
              </label>{" "}
              <br />
         
              <input type="text" className="form-control" placeholder="Annual Value"  {...register("annualValue")} />

            </div>
          </div>
          <div className="col-md-4">
            <div className="mb-3">
              <label for="formrow-firstname-input" className="form-label">
              Furnished 
              </label>{" "}
              <br />
         
              <input type="text" className="form-control" placeholder="Furnished "  {...register("furnished")} />

            </div>
          </div>
          </> 
            )}
        </div>
        <button type="submit" className="btn btn-success">
          SAVE
        </button>
        </form>
      </Modal.Body>
      <Modal.Footer>
      
      </Modal.Footer>
    </Modal>
  );
}
