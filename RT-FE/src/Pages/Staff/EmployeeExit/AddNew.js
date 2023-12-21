import { Modal } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { addEmployeeExit } from "../../../Utility/API/employeeexit";
import { getAllCompanies } from "../../../Utility/API/company";
import { useCallback } from "react";
import { useEffect } from "react";
import { useState } from "react";
export default function AddNew({show,setShow}) {
    const { register, handleSubmit,  formState: { errors }} = useForm();
    const [companies, setCompanies] = useState([]);

    const submitData = async (data) => {
        try {
          let res = await addEmployeeExit(data);
          console.log("Response:", res);
          setShow(false)
        } catch (error) {
          console.error("Error:", error);
        }
      };

      const getCompanies = useCallback(async () => {
        let res = await getAllCompanies();
        if (res.status === 200) {
          setCompanies(res.data);
        }
      }, []);
   
      useEffect(()=>{
           getCompanies()
      },[])


    return(
        <Modal size="xl" show={show} onHide={() => setShow(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Add New Empolyee Exit</Modal.Title>
          </Modal.Header>
    
          <Modal.Body>
          <form onSubmit={handleSubmit(submitData)}>
            <div className="row">
<div className="col-md-6 mb-2">
    <label for="">Company</label> <br/>
    <select className="form-control select2-templating" style={{width: "100%"}} {...register('company')}  >
        <option value="">choose...</option>
                      {companies?.map((ele, i) => (
                        <option key={i} value={ele._id}>
                          {ele.name}
                        </option>
                      ))}
    </select>
</div>
<div className="col-md-6 mb-2">
    <label for="">Employee To Exit</label> <br/>
    <select className="form-control select2-templating" style={{width: "100%"}}   {...register("employeeToExit")} >
        <option value="exit"> Exit</option>
    </select>
</div>
<div className="col-md-6">
    <div className="mb-3">
        <label for="">Exit Date</label>
        <input type="date" className="form-control" placeholder=""   {...register("exitDate")}  />
    </div>
</div>
<div className="col-md-6 mb-2">
    <label for="">Type of Exit</label> <br/>
    <select className="form-control select2-templating" style={{width: "100%"}}   {...register("typeofExit")}
>
        <option value="res">Resign</option>
        <option value="ter">Terminated</option>
    </select>
</div>
<div className="col-md-6 mb-2">
    <label for="">Exit Interview</label> <br/>
    <select className="form-control select2-templating" style={{width: "100%"}}   {...register("exitInterview")} >
        <option value="Yes">Yes</option>
        <option value="No.">No.</option>
    </select>
</div>
<div className="col-md-6 mb-2">
    <label for="">Disable Account</label> <br/>
    <select className="form-control select2-templating" style={{width: "100%"}}  {...register("disableAccount")}>
        <option value="Yes">Yes</option>
        <option value="No">No</option>
    </select>
</div>
<div className="col-md-12">
    <div className="mb-3">
        <label for="">Description</label>
        <textarea name="" id="" cols="30" rows="10" style={{height: "70px"}} className="form-control" 
        {...register("description",{ required:"Please Enter Description",
        })}></textarea>
        {errors?.description && (
                  <span className="text-danger">
                    {errors?.description.message}
                  </span>
                )}
    </div>
</div>

<div className="col-md-12" style={{textAlign: "right"}}>
    <button className="btn btn-primary">Save</button>
</div>
</div>
</form>

          </Modal.Body>
        </Modal>
    )
};