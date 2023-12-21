import { Modal } from "react-bootstrap";
import { useCallback, useEffect, useState } from "react";
import { getAllCompanies } from "../../../../../Utility/API/company";
import { Controller, useForm } from "react-hook-form";
import { getEmployeeByCompany } from "../../../../../Utility/API/employee";
import { addDriver } from "../../../../../Utility/API/driver";
export default function AddNew({show,setShow}) {
    const [companies, setCompanies] = useState();
    const [employees, setEmployees] = useState();
    const [dataToUpdate, setDataToUpdate] = useState();
    const {
        register,
        reset,
        control,
        setValue,
        watch,
        handleSubmit,
        formState: { errors },
      } = useForm();

      const getEmployees = useCallback(async (id) => {
        let res = await getEmployeeByCompany(id);
    
        if (res.status === 200) {
          setEmployees(res.data);
        }
      }, []);

      const getCompanies = useCallback(async () => {
        let res = await getAllCompanies();
        if (res.status === 200) {
          setCompanies(res.data);
        }
      }, []);

      useEffect(() => {
        getCompanies();
      
      }, []);

      useEffect(() => {
        if (watch("company")) {
          getEmployees(watch("company"));
        } else {
          setEmployees([]);
        }
      }, [watch("company")]);

      const submitData = async (data) => {
        console.log("data",data)
        try {
        
          let res = await addDriver(data);
          console.log("Response:", res);
          setShow(false)
        } catch (error) {
          console.error("Error:", error);
        }
      };

    return(
        <Modal size="xl" show={show} onHide={() => setShow(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Driver</Modal.Title>
          </Modal.Header>

          <Modal.Body>
          <form onSubmit={handleSubmit(submitData)}>

            <div className="row">
                                                                <div className="col-md-6">
                                                                    <div className="mb-3">
                                                                        <label for="formrow-firstname-input" className="form-label">Company</label> <br/>
                                                                        <Controller
                  name="company"
                  control={control}
                  rules={{ required: "this is required field" }}
                  render={({ field }) => (
                    <select
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
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-6">
                                                                    <div className="mb-3">
                                                                        <label for="formrow-firstname-input" className="form-label">Employee</label> <br/>
                                                                        <Controller
                  name="employee"
                  control={control}
                  rules={{ required: "this is required field" }}
                  render={({ field }) => (
                    <select
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
                        <option key={i} value={ele._id}>
                          {ele.fName + " " + ele.lName}
                        </option>
                      ))}
                    </select>
                  )}
                />
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-6">
                                                                    <div className="mb-3">
                                                                        <label for="formrow-firstname-input" className="form-label">Benefits Year</label> <br/>
                                                                        <select className="form-control select2-templating " style={{width: "100%"}} {...register("benefitYear")} >
                                                                            <option value="2017">2017 </option>
                                                                            <option value="2018">2018</option>
                                                                            <option value="2019">2019</option>
                                                                            <option value="2020">2020 </option>
                                                                            <option value="2021">2021</option>
                                                                            <option value="2022">2022</option>
                                                                            <option value="2023">2023</option>
                                                                            <option value="2024">2024</option>


                                                                        </select>
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-6">
                                                                    <div className="mb-3">
                                                                        <label for="">Driver Annual Wage</label>
                                                                        <input type="text" className="form-control" placeholder="" {...register("driverAnnualWage")}/>
                                                                        <small>Annual wages x (Private / Total Mileage)</small>
                                                                    </div>
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