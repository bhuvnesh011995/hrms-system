import { useCallback, useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { Controller, useForm } from "react-hook-form";
import useCustomEffect from "../../../../../../../customHook/useCustomEffect";
import { getSubdepartmentByDepartmentId } from "../../../../../../../Utility/API/subdepartment";
import { getLocationByCompanyId } from "../../../../../../../Utility/API/location";
import { getDesignationsByCompanyId } from "../../../../../../../Utility/API/designation";
import { getShiftsByCompanyId } from "../../../../../../../Utility/API/shift";
import { getDepartmentByLocationId } from "../../../../../../../Utility/API/department";
import { getAllRolesName } from "../../../../../../../Utility/API/role";
import { toast } from "react-toastify";
import { getEmployeeByCompany } from "../../../../../../../Utility/API/employee";
import { getAllCompanies } from "../../../../../../../Utility/API/company";

export default function Basic({ data }) {
  const {
    register,
    handleSubmit,
    watch,
    control,
    setValue,
    reset,
    formState: { errors, isDirty, dirtyFields },
  } = useForm();
  useCustomEffect(reset, data);
  const onSubmit = useCallback(
    async (formData) => {
      console.log(isDirty);
      console.log(dirtyFields);
      console.log(formData);
      let updatedData = Object.keys(dirtyFields).reduce((acc, ele) => {
        acc[ele] = formData[ele];
        return acc;
      }, {});
      console.log(updatedData);
    },
    [dirtyFields, isDirty]
  );
  const [employees, setEmployees] = useState();
  const [companies, setCompanies] = useState();
  const [locations, setLocations] = useState();
  const [departments, setDepartments] = useState();
  const [subdepartments, setSubdepartments] = useState();
  const [designations, setDesignations] = useState();
  const [roles, setRoles] = useState();
  const [shifts, setShifts] = useState();
  const getCompanies = useCallback(async () => {
    let res = await getAllCompanies();
    if (res.status === 200) {
      setCompanies(res.data);
    }
  }, []);
  const getEmployeesOfCompany = useCallback(
    async (id) => {
      let res = await getEmployeeByCompany(id);

      if (res.status === 200) {
        let filteredEmployee = res.data.filter((ele) => data._id != ele._id);
        setEmployees(filteredEmployee);
      } else {
        setEmployees([]);
        console.log(res);
      }
    },
    [data]
  );

  const getAllRoles = useCallback(async () => {
    try {
      let res = await getAllRolesName();

      if (res.status === 200) {
        setRoles(res.data);
      } else {
        setRoles([]);
        toast.error("error in getting roles");
      }
    } catch (error) {
      console.log(error);
    }
  });

  const getDepartments = useCallback(async (id) => {
    try {
      let res = await getDepartmentByLocationId(id);
      if (res.status === 200) {
        setDepartments(res.data);
      } else {
        console.log(res);
        setDepartments([]);
      }
    } catch (error) {
      console.log(error);
    }
  });

  const getLocations = useCallback(async (id) => {
    try {
      let res = await getLocationByCompanyId(id);
      if (res.status === 200) {
        setLocations(res.data);
        // setValue("department",null)
        // setValue('subdepartment',null)
      } else {
        console.log(res);
        setSubdepartments([]);
      }
    } catch (error) {
      console.log(error);
    }
  });

  const getSubdepartments = useCallback(async (id) => {
    try {
      let res = await getSubdepartmentByDepartmentId(id);
      if (res.status === 200) {
        setSubdepartments(res.data);
      } else {
        console.log(res);
        setSubdepartments([]);
      }
    } catch (error) {
      console.log(error);
    }
  }, []);

  const getDesignations = useCallback(async (id) => {
    try {
      let res = await getDesignationsByCompanyId(id);
      if (res.status === 200) {
        setDesignations(res.data);
      } else console.log(res);
    } catch (error) {
      console.log(error);
    }
  }, []);

  const getShifts = useCallback(async (id) => {
    try {
      let res = await getShiftsByCompanyId(id);
      if (res.status === 200) {
        setShifts(res.data);
      } else {
        setShifts([]);
        console.log(res);
      }
    } catch (error) {
      console.log(error);
    }
  }, []);
  useCustomEffect(getCompanies);
  useCustomEffect(getAllRoles);

  useEffect(() => {
    if (watch("company")) {
      getEmployeesOfCompany(watch("company"));
      getLocations(watch("company"));
      getDesignations(watch("company"));
      getShifts(watch("company"));
    } else {
      setShifts([]);
      setDesignations([]);
      setEmployees([]);
      setLocations([]);
    }
  }, [watch("company")]);

  useEffect(() => {
    if (watch("location")) {
      getDepartments(watch("location"));
    } else setDepartments([]);
  }, [watch("location")]);

  useEffect(() => {
    if (watch("department")) {
      getSubdepartments(watch("department"));
    } else {
      setSubdepartments([]);
    }
  }, [watch("department")]);

  useEffect(() => {}, []);
  return (
    <Card>
      <Card.Body>
        <div class="tab-content" id="v-pills-tabContent">
          <div
            class="tab-pane fade show active"
            id="v-pills-home"
            role="tabpanel"
            aria-labelledby="v-pills-home-tab"
          >
            <h5>Basic Information</h5>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div class="row">
                <div class="col-md-4">
                  <div class="mb-3">
                    <label htmlFor="">First Name</label>
                    <input
                      {...register("fName")}
                      type="text"
                      class="form-control"
                      placeholder=""
                    />
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="mb-3">
                    <label for="">Last Name</label>
                    <input
                      {...register("lName")}
                      type="text"
                      class="form-control"
                      placeholder=""
                    />
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="mb-3">
                    <label for="">Confirmation Date</label>
                    <input
                      {...register("confirmationDate")}
                      type="date"
                      class="form-control"
                      placeholder=""
                    />
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="mb-3">
                    <label for="">Employee ID</label>
                    <input
                      {...register("employeeId")}
                      disabled
                      type="text"
                      class="form-control"
                      placeholder=""
                    />
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="mb-3">
                    <label for="">Username</label>
                    <input
                      {...register("username")}
                      disabled
                      type="text"
                      class="form-control"
                      placeholder=""
                    />
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="mb-3">
                    <label for="">Email</label>
                    <input
                      {...register("email")}
                      type="email"
                      class="form-control"
                      placeholder=""
                    />
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="mb-3">
                    <label for="formrow-firstname-input" class="form-label">
                      Company
                    </label>{" "}
                    <br />
                    <Controller
                      control={control}
                      name="company"
                      render={({ field }) => (
                        <select
                          {...field}
                          class="form-control select2-templating "
                          style={{ width: "100%" }}
                        >
                          <option value="">Choose</option>
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
                <div class="col-md-4">
                  <div class="mb-3">
                    <label for="formrow-firstname-input" class="form-label">
                      Location
                    </label>{" "}
                    <br />
                    <Controller
                      control={control}
                      name="location"
                      render={({ field }) => (
                        <select
                          {...field}
                          class="form-control select2-templating "
                          style={{ width: "100%" }}
                        >
                          <option value="">Choose</option>
                          {locations?.map((ele, i) => (
                            <option key={i} value={ele._id}>
                              {ele.name}
                            </option>
                          ))}
                        </select>
                      )}
                    />
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="mb-3">
                    <label for="formrow-firstname-input" class="form-label">
                      Department
                    </label>{" "}
                    <br />
                    <Controller
                      control={control}
                      name="department"
                      render={({ field }) => (
                        <select
                          {...field}
                          class="form-control select2-templating "
                          style={{ width: "100%" }}
                        >
                          <option value="">Choose</option>
                          {departments?.map((ele, i) => (
                            <option key={i} value={ele._id}>
                              {ele.name}
                            </option>
                          ))}
                        </select>
                      )}
                    />
                  </div>
                </div>
                <div class="col-md-3">
                  <div class="mb-3">
                    <label for="formrow-firstname-input" class="form-label">
                      Sub Department
                    </label>{" "}
                    <br />
                    <Controller
                      name="subdepartment"
                      control={control}
                      render={({ field }) => (
                        <select
                          {...field}
                          class="form-control select2-templating "
                          style={{ width: "100%" }}
                        >
                          <option value="">Choose</option>
                          {subdepartments?.map((ele, i) => (
                            <option key={i} value={ele._id}>
                              {ele.name}
                            </option>
                          ))}
                        </select>
                      )}
                    />
                  </div>
                </div>
                <div class="col-md-3">
                  <div class="mb-3">
                    <label for="formrow-firstname-input" class="form-label">
                      Designation
                    </label>{" "}
                    <br />
                    <Controller
                      name="designation"
                      control={control}
                      render={({ field }) => (
                        <select
                          {...register("designation")}
                          class="form-control select2-templating "
                          style={{ width: "100%" }}
                        >
                          <option value="">Choose</option>
                          {designations?.map((ele, i) => (
                            <option key={i} value={ele._id}>
                              {ele.name}
                            </option>
                          ))}
                          <option value="RC">Residential Cleaner</option>
                        </select>
                      )}
                    />
                  </div>
                </div>
                <div class="col-md-3">
                  <div class="mb-3">
                    <label for="">Date of Joining</label>
                    <input
                      {...register("dateOfJoining")}
                      type="date"
                      class="form-control"
                      placeholder=""
                    />
                  </div>
                </div>
                <div class="col-md-3">
                  <div class="mb-3">
                    <label for="">Date of Leaving</label>
                    <input
                      {...register("dateOfLeaving")}
                      type="date"
                      class="form-control"
                      placeholder=""
                    />
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="mb-3">
                    <label for="formrow-firstname-input" class="form-label">
                      Role
                    </label>{" "}
                    <br />
                    <Controller
                      name="role"
                      control={control}
                      render={({ field }) => (
                        <select
                          {...field}
                          class="form-control select2-templating "
                          style={{ width: "100%" }}
                        >
                          <option value="">Choose</option>
                          {roles?.map((ele, i) => (
                            <option key={i} value={ele._id}>
                              {ele.name}
                            </option>
                          ))}
                        </select>
                      )}
                    />
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="mb-3">
                    <label for="formrow-firstname-input" class="form-label">
                      Gender
                    </label>{" "}
                    <br />
                    <select
                      {...register("gender")}
                      class="form-control select2-templating "
                      style={{ width: "100%" }}
                    >
                      <option value="">Choose...</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                    </select>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="mb-3">
                    <label for="formrow-firstname-input" class="form-label">
                      Marital Status
                    </label>{" "}
                    <br />
                    <select
                      {...register("maritalStatus")}
                      class="form-control select2-templating "
                      style={{ width: "100%" }}
                    >
                      <option value="">Choose...</option>
                      <option value="Single">Single</option>
                      <option value="Married">Married</option>
                      <option value="Widowed">Widowed</option>
                      <option value="divoce">Divorce</option>
                    </select>
                  </div>
                </div>
                <div class="col-md-3">
                  <div class="mb-3">
                    <label for="">Contact Number</label>
                    <input
                      {...register("phone")}
                      type="text"
                      class="form-control"
                    />
                  </div>
                </div>
                <div class="col-md-3">
                  <div class="mb-3">
                    <label for="formrow-firstname-input" class="form-label">
                      {" "}
                      Status
                    </label>{" "}
                    <br />
                    <select
                      {...register("status")}
                      class="form-control select2-templating "
                      style={{ width: "100%" }}
                    >
                      <option value="">Choose...</option>
                      <option value="ACTIVE">Active</option>
                      <option value="INACTIVE">Inactive</option>
                    </select>
                  </div>
                </div>
                <div class="col-md-3">
                  <div class="mb-3">
                    <label for="formrow-firstname-input" class="form-label">
                      {" "}
                      Office Shift
                    </label>{" "}
                    <br />
                    <Controller
                      name="shift"
                      control={control}
                      render={({ field }) => (
                        <select
                          {...field}
                          class="form-control select2-templating "
                          style={{ width: "100%" }}
                        >
                          <option value="">Choose...</option>
                          {shifts?.map((ele) => (
                            <option key={ele._id} value={ele._id}>
                              {ele.name}
                            </option>
                          ))}
                        </select>
                      )}
                    />
                  </div>
                </div>
                <div class="col-md-3">
                  <div class="mb-3">
                    <label for="">Date Of Birth</label>
                    <input
                      {...register("DOB")}
                      type="date"
                      class="form-control"
                      placeholder=""
                    />
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="mb-3">
                    <label for="formrow-firstname-input" class="form-label">
                      {" "}
                      Reports To
                    </label>{" "}
                    <br />
                    <Controller
                      name="reportTo"
                      control={control}
                      render={({ field }) => (
                        <select
                          {...field}
                          class="form-control select2-templating "
                          style={{ width: "100%" }}
                        >
                          <option value="">LChoose...</option>
                          {employees?.map((ele) => (
                            <option key={ele._id} value={ele._id}>
                              {ele.fName + " " + ele.lName}
                            </option>
                          ))}
                        </select>
                      )}
                    />
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="mb-3">
                    <label for="formrow-firstname-input" class="form-label">
                      {" "}
                      Identification Type
                    </label>{" "}
                    <br />
                    <select
                      {...register("identification.name")}
                      class="form-control select2-templating "
                      style={{ width: "100%" }}
                    >
                      <option value="FIN">FIN</option>
                      <option value="NRIC">NRIC</option>
                    </select>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="mb-3">
                    <label for="">Identification Number</label>
                    <input
                      {...register("identification.number")}
                      type="text"
                      class="form-control"
                      placeholder=""
                    />
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="mb-3">
                    <label for="">Passport Number</label>
                    <input
                      {...register("passport")}
                      type="text"
                      class="form-control"
                      placeholder="passport number"
                    />
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="mb-3">
                    <label for="">Work Permit Number</label>
                    <input
                      {...register("workPermitNumber")}
                      type="text"
                      class="form-control"
                      placeholder=""
                    />
                  </div>
                </div>
                <div class="col-md-12">
                  <div class="mb-3">
                    <label class="form-label">View Companies Data</label>
                    <input
                      {...register("viewCompaniesData")}
                      type="text"
                      name="input-multiple"
                      class="form-control"
                      placeholder=""
                    />
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="mb-3">
                    <label for="">State / Province</label>
                    <input
                      {...register("state")}
                      type="text"
                      class="form-control"
                      placeholder="State"
                    />
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="mb-3">
                    <label for="">City</label>
                    <input
                      {...register("city")}
                      type="text"
                      class="form-control"
                      placeholder="City"
                    />
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="mb-3">
                    <label for="">Zip Code</label>
                    <input
                      {...register("zipcode")}
                      type="text"
                      class="form-control"
                      placeholder="Zip Code"
                    />
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="mb-3">
                    <label for="formrow-firstname-input" class="form-label">
                      {" "}
                      Religion
                    </label>{" "}
                    <br />
                    <select
                      {...register("religion")}
                      class="form-control select2-templating "
                      style={{ width: "100%" }}
                    >
                      <option value="Hindu">Hinduism</option>
                      <option value="Muslim">Muslim</option>
                      <option value="Christian">Christian</option>
                    </select>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="mb-3">
                    <label for="">Address</label>
                    <input
                      {...register("address")}
                      type="text"
                      class="form-control"
                      placeholder="address"
                    />
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="mb-3">
                    <label for="">Vaccination</label>
                    <input
                      {...register("vaccination")}
                      type="date"
                      class="form-control"
                      placeholder=""
                    />
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="mb-3">
                    <label for="formrow-firstname-input" class="form-label">
                      {" "}
                      Blood Group
                    </label>{" "}
                    <br />
                    <select
                      {...register("bloodGroup")}
                      class="form-control select2-templating "
                      style={{ width: "100%" }}
                    >
                      <option value="O+">O+</option>
                      <option value="B+">B+</option>
                      <option value="A+">A+</option>
                      <option value="O-">O-</option>
                      <option value="B-">B-</option>
                      <option value="A-">A-</option>
                    </select>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="mb-3">
                    <label for="formrow-firstname-input" class="form-label">
                      {" "}
                      Nationality
                    </label>{" "}
                    <br />
                    <select
                      {...register("nationality")}
                      class="form-control select2-templating "
                      style={{ width: "100%" }}
                    >
                      <option value="IND">India</option>
                      <option value="SN">Singapore</option>
                      <option value="CN">China</option>
                    </select>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="mb-3">
                    <label for="formrow-firstname-input" class="form-label">
                      {" "}
                      Citizenship
                    </label>{" "}
                    <br />
                    <select
                      {...register("citizenship")}
                      class="form-control select2-templating "
                      style={{ width: "100%" }}
                    >
                      <option value="IND">Indian</option>
                      <option value="SN">Singaporian</option>
                      <option value="CN">Chinese</option>
                    </select>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="mb-3">
                    <label for="formrow-firstname-input" class="form-label">
                      {" "}
                      Immigration Status{" "}
                    </label>{" "}
                    <br />
                    <select
                      {...register("immigrationStatus")}
                      class="form-control select2-templating "
                      style={{ width: "100%" }}
                    >
                      <option value="FE">Foreign Employee</option>
                      <option value="Singapore-citizen">
                        Singapore Citizen
                      </option>
                      <option value="Singapore-PR">Singapore PR</option>
                    </select>
                  </div>
                </div>
                {watch("immigrationStatus") === "singaporePR" && (
                  <div className="col-md-4">
                    <div className="mb-3">
                      <label>PR Effective Date</label>
                      <input
                        {...register("prEffectiveDate", {
                          required: "this field is required",
                        })}
                        type="date"
                        className="form-control"
                        placeholder="Enter pr Effetive date"
                      />
                      {errors.prEffectiveDate && (
                        <span style={{ color: "red" }}>
                          {errors.prEffectiveDate.message}
                        </span>
                      )}
                    </div>
                  </div>
                )}
              </div>

              <button type="submit" class="btn btn-primary w-25">
                Save
              </button>
            </form>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}
