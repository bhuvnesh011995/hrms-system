import { useCallback, useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import { Controller, useForm } from "react-hook-form";
import { getAllCompanies } from "../../../Utility/API/company";
import { getEmployeeByCompany } from "../../../Utility/API/employee";
import { toast } from "react-toastify";
import { addTermination, updateTermination } from "../../../Utility/API/termination";

export default function AddNew({viewData,
    setViewData,
    getTerminations,show,setShow}) {

 
        const [dataToUpdate, setDataToUpdate] = useState();
        const [companies, setCompanies] = useState();
        const [employees, setEmployees] = useState();


        const {
          register,
          reset,
          control,
          setValue,
          watch,
          handleSubmit,
          formState: { errors },
        } = useForm();
      
        const onSubmit = useCallback(async (data, dataToUpdate) => {
          if (!viewData) {
            let formData = new FormData()
           let arr = Object.keys(data)
           for(let key of arr){
            if(key==="files"){
              for(let value of data[key]){
                formData.append("files",value)
              }
            }else{
              formData.append(key,data[key])
            }
           }
            let res = await addTermination(formData);
            if (res.status === 201) {
              setShow(false);
              getTerminations();
            } else console.log(res);
          } else {
            if(!dataToUpdate) return toast.error("no data to update")
            let formData = new FormData()
            let arr = Object.keys(dataToUpdate)
           for(let key of arr){
            if(key==="files"){
              for(let value of data[key]){
                formData.append("files",value)
              }
            }else{
              formData.append(key,data[key])
            }
           }


            let res = await updateTermination(viewData._id, formData);
            if (res.status === 204) {
              toast.success("complaint updated")
              setShow(false);
              getTerminations();
            } else console.log(res);
          }
        },[viewData]);
        const getCompanies = useCallback(async () => {
          let res = await getAllCompanies();
          if (res.status === 200) {
            setCompanies(res.data);
          }
        }, []);
        const getEmployees = useCallback(async (id) => {
          let res = await getEmployeeByCompany(id);
      
          if (res.status === 200) {
            setEmployees(res.data);
          }
        }, []);

        useEffect(() => {
          getCompanies();
          if (viewData) {
            reset(viewData);
          }
      
          return () => {
            setViewData(null);
          };
        }, []);
      
        useEffect(() => {
          if (watch("company")) {
            getEmployees(watch("company"));
          } else {
            setEmployees([]);
          }
        }, [watch("company")]);



    return(
        <Modal size="lg" show={show} onHide={() => setShow(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Add New Termination</Modal.Title>
          </Modal.Header>
    
          <Modal.Body>
          <form
          onSubmit={handleSubmit((data) => {
            onSubmit(data, dataToUpdate);
          })}
        >
            <div className="row">
            <div className="col-md-12">
              <div className="mb-3">
                <label className="form-label">Company</label> <br />
                <Controller
                  name="company"
                  control={control}
                  rules={{ required: "this is required field" }}
                  render={({ field }) => (
                    <select
                    disabled={viewData?true:false}
                      {...field}
                      onChange={(e) => {
                        setDataToUpdate((preVal) => ({
                          ...preVal,
                          company: e.target.value,
                        }));
                        setValue("employee", null);
                        field.onChange(e);
                      }}
                      className="form-control select2-templating"
                      style={{ width: "100%" }}
                    >
                      <option value="">choose...</option>
                      {companies?.map((ele, i) => (
                        <option key={i} value={ele._id}>
                          {ele.name}
                        </option>
                      ))}
                    </select>
                  )}
                />
                {errors.company && (
                  <span style={{ color: "red" }}>{errors.company.message}</span>
                )}
              </div>
            </div>

               <div className="col-md-6">
                <div className="mb-3">
                 <label for="formrow-firstname-input" className="form-label">Terminate Employee</label> <br/>
                 <Controller
                  name="employee"
                  control={control}
                  rules={{ required: "this is required field" }}
                  render={({ field }) => (
                    <select
                    disabled={viewData?true:false}
                      key={watch("company")}
                      {...field}
                      onChange={(e) => {
                        setDataToUpdate((preVal) => ({
                          ...preVal,
                          employee: e.target.value,
                        }));
                        field.onChange(e);
                      }}
                      className="form-control select2-templating "
                      style={{ width: "100%" }}
                    >
                      <option value="">choose...</option>
                      {employees?.map((ele, i) => (
                        <option disabled={ele._id===watch("against")} key={i} value={ele._id}>
                          {ele.fName + " " + ele.lName}
                        </option>
                      ))}
                    </select>
                  )}
                />
                {errors.employee && (
                  <span style={{ color: "red" }}>
                    {errors.employee.message}
                  </span>
                )}
                    </div>
                      </div>
                       <div className="col-md-6">
                         <div className="mb-3">
                          <label for="">Notice Date </label>
                           <Controller
                  name="noticeDate"
                  control={control}
                  rules={{ required: "this is required field" }}
                  render={({ field }) => (
                    <input
                      {...field}
                      onChange={(e) => {
                        setDataToUpdate((preVal) => ({
                          ...preVal,
                          noticeDate: e.target.value,
                        }));
                        field.onChange(e);
                      }}
                      type="date"
                      className="form-control"
                      placeholder=""
                    />
                  )}
                />
                {errors.noticeDate && (
                  <span style={{ color: "red" }}>{errors.noticeDate.message}</span>
                )}
                </div>
                 </div>
                  <div className="col-md-6">
                         <div className="mb-3">
                          <label for="">Notice Date </label>
                           <Controller
                  name="terminationDate"
                  control={control}
                  rules={{ required: "this is required field" }}
                  render={({ field }) => (
                    <input
                      {...field}
                      onChange={(e) => {
                        setDataToUpdate((preVal) => ({
                          ...preVal,
                          terminationDate: e.target.value,
                        }));
                        field.onChange(e);
                      }}
                      type="date"
                      className="form-control"
                      placeholder=""
                    />
                  )}
                />
                {errors.terminationDate && (
                  <span style={{ color: "red" }}>{errors.terminationDate.message}</span>
                )}
                </div>
                </div>
                <div className="col-md-12">
                    <div className="mb-3">
                        <label for="">Attachment</label>
                        <input {...register("files",{onChange:e=>{
                            setDataToUpdate(preVAl=>({...preVAl,files:e.target.files}))
                            }})} multiple type="file" className="form-control"/>
                    </div>
                </div>
                {viewData && <div className="col-md-12">
              <div className="mb-3">
                <label for="formrow-firstname-input" className="form-label">
                  Status
                </label>
                <br />
                <Controller
                  name="status"
                  control={control}
                  rules={{ required: "this is required field" }}
                  render={({ field }) => (
                    <select
                      {...field}
                      onChange={(e) => {
                        setDataToUpdate((preVal) => ({
                          ...preVal,
                          status: e.target.value,
                        }));
                        field.onChange(e);
                      }}
                      className="form-control select2-templating"
                      style={{ width: "100%" }}
                    >
                        <option value="Pending">Pending</option>
                        <option value="Rejected">Rejected</option>
                        <option value="Accepted">Accepted</option>
                    </select>
                  )}
                />
                {errors.status && (
                  <span style={{ color: "red" }}>{errors.status.message}</span>
                )}
              </div>
            </div>}
                                                        <div className="col-md-12">
                                                            <div className="mb-3">
                                                                <label for="">Add Description</label>
                                                                <Controller
                  name="description"
                  control={control}
                  rules={{
                    required: "thihs is required field",
                  }}
                  render={({ field }) => (
                    <textarea
                      {...field}
                      onChange={(e) => {
                        setDataToUpdate((preVal) => ({
                          ...preVal,
                          description: e.target.value,
                        }));
                        field.onChange(e);
                      }}
                      name=""
                      id=""
                      cols="30"
                      rows="10"
                      className="form-control"
                      style={{ height: "70px" }}
                    ></textarea>
                  )}
                />
                {errors.description && (
                  <span style={{ color: "red" }}>
                    {errors.description.message}
                  </span>
                )}                                                            </div>
                                                        </div>

                                                    </div>
                                                    <button type="submit" className="btn btn-success">SAVE</button>

</form>
          </Modal.Body>
          <Modal.Footer>
          

          </Modal.Footer>
        </Modal>
    )
};
