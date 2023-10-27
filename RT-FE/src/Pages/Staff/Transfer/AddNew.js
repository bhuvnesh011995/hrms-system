import { useCallback, useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import { Controller, useForm } from "react-hook-form";

import { getAllCompanies } from "../../../Utility/API/company";
import { getDepartmentByCompanyId } from "../../../Utility/API/department";
import { getLocationByCompanyId } from "../../../Utility/API/location";
import { addTransfer, updateTransfer } from "../../../Utility/API/transfer";
import { getEmployeeByCompany } from "../../../Utility/API/employee";

export default function AddNew({viewData,
    setViewData,
    getTransfers,show,setShow}) {
    const [companies, setCompanies] = useState([]);
    const [dataToUpdate, setDataToUpdate] = useState();
    const [departments, setDepartments] = useState();
    const [locations, setLocatons] = useState();
    const [employees, setEmployees] = useState();
    
  const getDepartments = useCallback(async (id) => {
      let res = await getDepartmentByCompanyId(id);
      if (res.status === 200) {
        setDepartments(res.data);
      }
    });
    const getLocations = useCallback(async (id) => {
      let res = await getLocationByCompanyId(id);
      if (res.status === 200) {
        setLocatons(res.data);
      }
    });

    const getEmployees = useCallback(async (id) => {
        let res = await getEmployeeByCompany(id);
    
        if (res.status === 200) {
          setEmployees(res.data);
        }
      });


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
        if(data.file) data.file = data.file[0]
      let res = await addTransfer(data);
      if (res.status === 201) {
        setShow(false);
        getTransfers();
      } else console.log(res);
    } else {
        if(dataToUpdate.file) dataToUpdate.file = dataToUpdate.file[0]
      let res = await updateTransfer(viewData.id, dataToUpdate);
      if (res.status === 204) {
        setShow(false);
        getTransfers();
      } else console.log(res);
    }
  });
  const getCompanies = useCallback(async () => {
    let res = await getAllCompanies();
    if (res.status === 200) {
      setCompanies(res.data);
    }
  });
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
      getDepartments(watch("company"));
      getLocations(watch("company"));
      getEmployees(watch("company"))
    } else {
      setDepartments([]);
      setLocatons([]);
      setValue("location", null);
      setValue("department", null);
      setValue("employee",null);
    }
  }, [watch("company")]);

    return(
        <Modal size="lg" show={show} onHide={() => setShow(false)}>
          <Modal.Header closeButton>
            <Modal.Title>{viewData? "Update Transfer":"Add New Transfer"}</Modal.Title>
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
                                                                <label for="formrow-firstname-input" className="form-label">Company</label> <br/>
                                                                <Controller
                  name="company"
                  control={control}
                  rules={{ required: "this is required field" }}
                  render={({ field }) => (
                    <select
                      key={watch("company" + "1")}
                      {...field}
                      onChange={(e) => {
                        setDataToUpdate((preVal) => ({
                          ...preVal,
                          company: e.target.value,
                        }));
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
                                                        <div className="col-md-12">
              <div className="mb-3">
                <label for="formrow-firstname-input" className="form-label">
                  Employee
                </label>{" "}
                <br />
                <Controller
                  name="employee"
                  control={control}
                  rules={{ required: "this is required field" }}
                  render={({ field }) => (
                    <select
                      {...field}
                      disabled={viewData?true:false}
                      className="form-control select2-templating "
                      style={{ width: "100%" }}
                    >
                      <option value="">choose...</option>
                      {employees?.map((ele, i) => (
                        <option key={i} value={ele._id}>
                          {ele.fName + " " + ele.lName}
                        </option>
                      ))}
                    </select>
                  )}
                />
                {errors.employee && (
                  <span style={{ color: "red" }}>{errors.employee.message}</span>
                )}
              </div></div>
                                                      
                                                        <div className="col-md-4">
                                                            <div className="mb-3">
                                                                <label for="">Date</label>
                                                                <Controller name="date" control={control} rules={{required:"this is required field"}} render={({field})=>(
                                                                    <input {...field} onChange={e=>{
                                                                        setDataToUpdate(preVal=>({...preVal,data:e.target.value}))
                                                                        field.onChange(e)
                                                                    }} type="date" className="form-control" placeholder=""/>
                                                                )} />
                                                                {errors.date && (
                  <span style={{ color: "red" }}>{errors.date.message}</span>
                )}
                                                                
                                                            </div>
                                                        </div>
                                                        <div className="col-md-4">
            <div className="mb-3">
              <label for="formrow-firstname-input" className="form-label">
                Transfer To (Department)
              </label>
              <br />
              <Controller
                name="department"
                control={control}
                rules={{ required: "this is required field" }}
                render={({ field }) => (
              <select
              {...field}
                    onChange={(e) => {
                      setDataToUpdate((preVal) => ({
                        ...preVal,
                        department: e.target.value,
                      }));
                      field.onChange(e);
                    }}
                className="form-control select2-templating "
                style={{ width: "100%" }}
              >
                <option value="">choose...</option>
                {departments?.map((ele,i)=>(<option key={i} value={ele._id}>{ele.name}</option>))}

              </select>
              
                )}
              />
              {errors.department && (
                <span style={{ color: "red" }}>{errors.department.message}</span>
              )}
            </div>
          </div>

          <div className="col-md-4">
            <div className="mb-3">
              <label for="formrow-firstname-input" className="form-label">
              Transfer To (Locations)
              </label>
              <br />
              <Controller
                name="location"
                control={control}
                rules={{ required: "this is required field" }}
                render={({ field }) => (
              <select
              {...field}
                    onChange={(e) => {
                      setDataToUpdate((preVal) => ({
                        ...preVal,
                        location: e.target.value,
                      }));
                      field.onChange(e);
                    }}
                className="form-control select2-templating "
                style={{ width: "100%" }}
              >
                <option value="">choose...</option>
                {locations?.map((ele,i)=>(<option key={i} value={ele._id}>{ele.name}</option>))}
              </select>
                )}
              />
              {errors.location && (
                <span style={{ color: "red" }}>{errors.location.message}</span>
              )}
            </div>
          </div>

          <div className="col-md-12">
            <div className="mb-3">
              <label for="">Description</label>
              <Controller
              control={control} name="description"
              render={({field})=>(
                <textarea
                {...field}
                onChange={e=>{
                    setDataToUpdate(preVal=>({...preVal,description:e.target.value}))
                    field.onChange(e)
                }}
                rows="4"
                className="form-control"
              ></textarea>
              )}
              />
              
            </div>
          </div>
                                                    </div>
                                                    <button  type="submit" className="btn btn-success w-15">SAVE</button>
                                                    </form>
          </Modal.Body>
          <Modal.Footer>
         

          </Modal.Footer>
        </Modal>
    )
};
