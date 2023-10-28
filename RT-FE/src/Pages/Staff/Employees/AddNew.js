import { Button, Modal } from "react-bootstrap";
import { useSettingContext } from "../../../Context/settingContext";
import { useCallback, useEffect, useState } from "react";
import { addEmployee, getEmployeeByCompany, updateEmployee } from "../../../Utility/API/employee";
import { getAllCompanies } from "../../../Utility/API/company";
import { useForm } from "react-hook-form";

export default function AddNew({ viewData,
  setViewData,
  getEmployees,
  show,
  setShow,}) {
  const { constants } = useSettingContext();
  const [dataToUpdate, setDataToUpdate] = useState();
  const [companies, setCompanies] = useState();
  const [employees, setEmployees] = useState();
  const [locations, setLocations] = useState();

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
      let res = await addEmployee(data);
      if (res.status === 201) {
        setShow(false);
        getEmployees();
      } else console.log(res);
    } else {
      let res = await updateEmployee(viewData._id, dataToUpdate);
      if (res.status === 204) {
        setShow(false);
        getEmployees();
      } else console.log(res);
    }
  });
  const getCompanies = useCallback(async () => {
    let res = await getAllCompanies();
    if (res.status === 200) {
      setCompanies(res.data);
    }
  }, []);
  const getEmployeesOfCompany = useCallback(async (id) => {
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
      getEmployeesOfCompany(watch("company"));
    } else {
      setEmployees([]);
    }
  }, [watch("company")]);



  return (
    <Modal size="xl" show={show} onHide={() => setShow(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Add New Empolyee</Modal.Title>
      </Modal.Header>

      <Modal.Body>
      <form
          onSubmit={handleSubmit((data) => {
            onSubmit(data, dataToUpdate);
          })}
        >
          <div className="row">
            <div className="col-md-6">
              <div className="row">
                <div className="col-md-6">
                  <div className="mb-3">
                    <label for="">First Name</label>
                    <input
                    {...register("fName",{
                        required:"this field is required",
                        onChange:e=>setDataToUpdate(preVal=>({...preVal,fName:e.target.value}))
                    })}
                      type="text"
                      className="form-control"
                      placeholder="Enter First Name"
                    />
                    {errors.fName && <span style={{color:'red'}}>{errors.fName.message}</span>}
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <label for="">Last Name</label>
                    <input
                    {...register("lName",{
                        required:"this field is required",
                        onChange:e=>setDataToUpdate(preVal=>({...preVal,lName:e.target.value}))
                    })}

                      type="text"
                      className="form-control"
                      placeholder="Enter Last Name"
                    />{errors.lName && <span style={{color:'red'}}>{errors.lName.message}</span>}
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <label for="formrow-firstname-input" className="form-label">
                      Company
                    </label>{" "}
                    <br />
                    <select
                    {...register("company",{
                        required:"this field is required",
                        onChange:e=>setDataToUpdate(preVal=>({...preVal,company:e.target.value}))
                    })}

                      className="form-control select2-templating "
                      style={{ width: "100%" }}
                    >
                      <option value="">KMAC International Pte Ltd</option>
                    </select>{errors.company && <span style={{color:'red'}}>{errors.company.message}</span>}
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <label for="formrow-firstname-input" className="form-label">
                      Location
                    </label>{" "}
                    <br />
                    <select
                    {...register("location",{
                        required:"this field is required",
                        onChange:e=>setDataToUpdate(preVal=>({...preVal,location:e.target.value}))
                    })}

                      className="form-control select2-templating "
                      style={{ width: "100%" }}
                    >
                      <option value=""></option>
                    </select>{errors.location && <span style={{color:'red'}}>{errors.location.message}</span>}
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <label for="">Username</label>
                    <input
                    {...register("username",{
                        required:"this field is required",
                        onChange:e=>setDataToUpdate(preVal=>({...preVal,username:e.target.value}))
                    })}

                      type="text"
                      className="form-control"
                      placeholder="Enter username"
                    />{errors.username && <span style={{color:'red'}}>{errors.username.message}</span>}
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <label for="">Email</label>
                    <input
                    {...register("email",{
                        required:"this field is required",
                        onChange:e=>setDataToUpdate(preVal=>({...preVal,email:e.target.value}))
                    })}

                      type="email"
                      className="form-control"
                      placeholder="Enter email"
                    />{errors.email && <span style={{color:'red'}}>{errors.email.message}</span>}
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <label for="">Date of Birth</label>
                    <input
                    {...register("DOB",{
                        required:"this field is required",
                        onChange:e=>setDataToUpdate(preVal=>({...preVal,DOB:e.target.value}))
                    })}

                      type="date"
                      className="form-control"
                      placeholder=""
                    />{errors.DOB && <span style={{color:'red'}}>{errors.DOB.message}</span>}
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <label for="">Contact Number</label>
                    <input
                    {...register("phone",{
                        required:"this field is required",
                        onChange:e=>setDataToUpdate(preVal=>({...preVal,phone:e.target.value}))
                    })}

                      type="text"
                      className="form-control"
                      placeholder="Enter phone number"
                    />{errors.phone && <span style={{color:'red'}}>{errors.phone.message}</span>}
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <label for="formrow-firstname-input" className="form-label">
                      Roles
                    </label>
                    <br />
                    <select
                    {...register("role",{
                        required:"this field is required",
                        onChange:e=>setDataToUpdate(preVal=>({...preVal,role:e.target.value}))
                    })}

                      className="form-control select2-templating "
                      style={{ width: "100%" }}
                    >
                      <option value="">Director</option>
                      <option value="">HR Admin</option>
                      <option value="">Super Admin</option>
                      <option value="">Sales Department</option>
                    </select>{errors.role && <span style={{color:'red'}}>{errors.role.message}</span>}
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <label for="formrow-firstname-input" className="form-label">
                      Reports To
                    </label>{" "}
                    <br />
                    <select
                    {...register("reportTo",{
                        required:"this field is required",
                        onChange:e=>setDataToUpdate(preVal=>({...preVal,reportTo:e.target.value}))
                    })}

                      className="form-control select2-templating "
                      style={{ width: "100%" }}
                    >
                      <option value=""></option>
                    </select>{errors.reportTo && <span style={{color:'red'}}>{errors.reportTo.message}</span>}
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="mb-3">
                    <label for="">Passport Number</label>
                    <input
                    {...register("passport",{
                        required:"this field is required",
                        onChange:e=>setDataToUpdate(preVal=>({...preVal,passport:e.target.value}))
                    })}

                      type="text"
                      className="form-control"
                      placeholder="Enter passport number"
                    />{errors.passport && <span style={{color:'red'}}>{errors.passport.message}</span>}
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="mb-3">
                    <label for="">Address</label>
                    <input
                    {...register("address",{
                        required:"this field is required",
                        onChange:e=>setDataToUpdate(preVal=>({...preVal,address:e.target.value}))
                    })}

                      type="text"
                      className="form-control"
                      placeholder="Enter Address"
                    />{errors.address && <span style={{color:'red'}}>{errors.address.message}</span>}
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <label for="formrow-firstname-input" className="form-label">
                      Immigration Status
                    </label>{" "}
                    <br />
                    <select
                    {...register("immigrationStatus",{
                        required:"this field is required",
                        onChange:e=>setDataToUpdate(preVal=>({...preVal,immigrationStatus:e.target.value}))
                    })}

                      className="form-control select2-templating "
                      style={{ width: "100%" }}
                    >
                      <option value="">Singapore Citizen</option>
                      <option value="">Foreign Employee</option>
                    </select>{errors.immigrationStatus && <span style={{color:'red'}}>{errors.immigrationStatus.message}</span>}
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <label for="">PR Effective Date</label>
                    <input
                    {...register("prEffectiveDate",{
                        required:"this field is required",
                        onChange:e=>setDataToUpdate(preVal=>({...preVal,prEffectiveDate:e.target.value}))
                    })}

                      type="date"
                      className="form-control"
                      placeholder="Enter pr Effetive date"
                    />{errors.prEffectiveDate && <span style={{color:'red'}}>{errors.prEffectiveDate.message}</span>}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="row">
                <div className="col-md-4">
                  <div className="mb-3">
                    <label for="">Employee ID</label>
                    <input
                    {...register("employeeId",{
                        required:"this field is required",
                        onChange:e=>setDataToUpdate(preVal=>({...preVal,employeeId:e.target.value}))
                    })}

                      type="text"
                      className="form-control"
                      placeholder="Employee ID"
                    />{errors.employeeId && <span style={{color:'red'}}>{errors.employeeId.message}</span>}
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="mb-3">
                    <label for="">Date Of Joining</label>
                    <input
                    {...register("dateOfJoining",{
                        required:"this field is required",
                        onChange:e=>setDataToUpdate(preVal=>({...preVal,dateOfJoining:e.target.value}))
                    })}

                      type="date"
                      className="form-control"
                      placeholder=""
                    />{errors.dateOfJoining && <span style={{color:'red'}}>{errors.dateOfJoining.message}</span>}
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="mb-3">
                    <label for="">Confirmation Date</label>
                    <input
                    {...register("confirmationDate",{
                        required:"this field is required",
                        onChange:e=>setDataToUpdate(preVal=>({...preVal,confirmationDate:e.target.value}))
                    })}

                      type="text"
                      className="form-control"
                      placeholder="Confirmation Date"
                    />{errors.confirmationDate && <span style={{color:'red'}}>{errors.confirmationDate.message}</span>}
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="mb-3">
                    <label for="formrow-firstname-input" className="form-label">
                      Main Department
                    </label>{" "}
                    <br />
                    <select
                    {...register("department",{
                        required:"this field is required",
                        onChange:e=>setDataToUpdate(preVal=>({...preVal,department:e.target.value}))
                    })}

                      className="form-control select2-templating "
                      style={{ width: "100%" }}
                    >
                      <option value=""></option>
                    </select>{errors.department && <span style={{color:'red'}}>{errors.department.message}</span>}
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="mb-3">
                    <label for="formrow-firstname-input" className="form-label">
                      Sub Department
                    </label>{" "}
                    <br />
                    <select
                    {...register("subdepartment",{
                        required:"this field is required",
                        onChange:e=>setDataToUpdate(preVal=>({...preVal,subdepartment:e.target.value}))
                    })}

                      className="form-control select2-templating "
                      style={{ width: "100%" }}
                    >
                      <option value=""></option>
                    </select>{errors.subdepartment && <span style={{color:'red'}}>{errors.subdepartment.message}</span>}
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="mb-3">
                    <label for="formrow-firstname-input" className="form-label">
                      Designation
                    </label>{" "}
                    <br />
                    <select
                    {...register("designation",{
                        required:"this field is required",
                        onChange:e=>setDataToUpdate(preVal=>({...preVal,designation:e.target.value}))
                    })}

                      className="form-control select2-templating "
                      style={{ width: "100%" }}
                    >
                      <option value=""></option>
                    </select>{errors.designation && <span style={{color:'red'}}>{errors.designation.message}</span>}
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <label for="formrow-firstname-input" className="form-label">
                      Gender
                    </label>{" "}
                    <br />
                    <select
                    {...register("gender",{
                        required:"this field is required",
                        onChange:e=>setDataToUpdate(preVal=>({...preVal,gender:e.target.value}))
                    })}

                      className="form-control select2-templating "
                      style={{ width: "100%" }}
                    >
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                    </select>{errors.gender && <span style={{color:'red'}}>{errors.gender.message}</span>}
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <label for="formrow-firstname-input" className="form-label">
                      Office Shift
                    </label>{" "}
                    <br />
                    <select
                    {...register("shift",{
                        required:"this field is required",
                        onChange:e=>setDataToUpdate(preVal=>({...preVal,shift:e.target.value}))
                    })}

                      className="form-control select2-templating "
                      style={{ width: "100%" }}
                    >
                      <option value=""></option>
                    </select>{errors.shift && <span style={{color:'red'}}>{errors.shift.message}</span>}
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <label for="">Password</label>
                    <input
                    {...register("password",{
                        required:"this field is required",
                        onChange:e=>setDataToUpdate(preVal=>({...preVal,password:e.target.value}))
                    })}

                      type="password"
                      className="form-control"
                      placeholder="password"
                    />{errors.password && <span style={{color:'red'}}>{errors.password.message}</span>}
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <label for="">Confirm Password</label>
                    <input
                    {...register("cpassword",{
                        required:"this field is required",
                        onChange:e=>setDataToUpdate(preVal=>({...preVal,cpassword:e.target.value}))
                    })}

                      type="password"
                      className="form-control"
                      placeholder="confirm passowrd"
                    />{errors.cpassword && <span style={{color:'red'}}>{errors.cpassword.message}</span>}
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <label for="formrow-firstname-input" className="form-label">
                      Identification Type
                    </label>{" "}
                    <br />
                    <select
                    {...register("identification.name",{
                        required:"this field is required",
                        onChange:e=>setDataToUpdate(preVal=>({...preVal,[preVal.identification.name]:e.target.value}))
                    })}

                      className="form-control select2-templating "
                      style={{ width: "100%" }}
                    >
                      <option value="">NRIC</option>
                      <option value="">FIN</option>
                    </select>{errors.identification.name && <span style={{color:'red'}}>{errors.identification.name.message}</span>}
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <label for="">NRIC / FIN No.</label>
                    <input
                    {...register("identification.number",{
                        required:"this field is required",
                        onChange:e=>setDataToUpdate(preVal=>({...preVal,[preVal.identification.number]:e.target.value}))
                    })}

                      type="text"
                      className="form-control"
                      placeholder="Enter NRIC number"
                    />{errors["identification.number"] && <span style={{color:'red'}}>{errors["identification.number"].message}</span>}
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="mb-3">
                    <label for="">Work Permit Number</label>
                    <input
                    {...register("workPermitNumber",{
                        required:"this field is required",
                        onChange:e=>setDataToUpdate(preVal=>({...preVal,workPermitNumber:e.target.value}))
                    })}

                      type="text"
                      className="form-control"
                      placeholder="Work Permit Number"
                    />{errors.workPermitNumber && <span style={{color:'red'}}>{errors.workPermitNumber.message}</span>}
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="mb-3">
                    <label for="">Vaccination</label>
                    <input
                    {...register("vaccination",{
                        required:"this field is required",
                        onChange:e=>setDataToUpdate(preVal=>({...preVal,vaccination:e.target.value}))
                    })}

                      type="text"
                      className="form-control"
                      placeholder="Vaccination"
                    />{errors.vaccination && <span style={{color:'red'}}>{errors.vaccination.message}</span>}
                  </div>
                </div>
              </div>
            </div>
          </div><button type="submit" className="btn btn-success w-20">
            SAVE
          </button>
          </form>

        
          
      
      </Modal.Body>
    </Modal>
  );
}
