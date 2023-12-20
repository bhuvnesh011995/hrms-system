import { Modal } from "react-bootstrap";
import { useState ,useCallback,useEffect} from "react";
import { getAllAccommodation } from "../../../../../Utility/API/accommodation";
import { getAllCompanies } from "../../../../../Utility/API/company";
import { getEmployeeByCompany } from "../../../../../Utility/API/employee";
import { addAccommodatedEmployee } from "../../../../../Utility/API/accommodateEmployees";
import { Controller, useForm } from "react-hook-form";
export default function AddNew({ show, setShow }) {
  const {
    register,
    reset,
    control,
    setValue,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm();
    const[companies,setCompanies] = useState([])
  const[accommodation, setAccommodation] = useState([])
  const [dataToUpdate, setDataToUpdate] = useState();
  const [employees, setEmployees] = useState();

  const getCompanies = useCallback(async () => {
    let res = await getAllCompanies();
    if (res.status === 200) {
      setCompanies(res.data);
    }
  }, []);

  


  const getAccommodation = useCallback(async () =>{
    let res = await getAllAccommodation();
    if(res.status === 200) {
      setAccommodation(res.data);
    }

  }, []); 

    const getEmployees = useCallback(async (id) => {
        let res = await getEmployeeByCompany(id);
    
        if (res.status === 200) {
          setEmployees(res.data);
        }
      }, []);

  useEffect(()=>{
       getCompanies()
       getAccommodation()
  },[])

 

  const submitData = async (data) => {
    try {
      let res = await  addAccommodatedEmployee(data);
      console.log("Response:", res);
      setShow(false)
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    if (watch("company")) {
      getEmployees(watch("company"));
    } else {
      setEmployees([]);
    }
  }, [watch("company")]);

  console.log("companies",employees)

  return (
    <Modal size="xl" show={show} onHide={() => setShow(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Add New Empolyee</Modal.Title>
      </Modal.Header>

      <Modal.Body>
      <form onSubmit={handleSubmit(submitData)}>

        <div className="row">
          <div className="col-md-6">
            <div className="mb-3">
              <label for="formrow-firstname-input" className="form-label">
                Accommodation
              </label>{" "}
              <br />
              <select
                className="form-control select2-templating "
                style={{ width: "100%" }}   {...register('accommodation')}
              >
                <option value=""> select....</option>
                 {accommodation.accommodation?.map((ele, i) => (
                        <option key={i} value={ele._id}>
                          {ele.accommodationTitle}
                        </option>
                      ))} 
              </select>
            </div>
          </div>
          <div className="col-md-6">
            <div className="mb-3">
              <label for="">Address</label>
              <input type="text" className="form-control" placeholder="" {...register('address')} />
            </div>
          </div>
          <div className="col-md-6">
            <div className="mb-3">
              <label for="">Accommodation Period</label>
              <input type="text" className="form-control" placeholder=""  {...register('accommodationPeriod')}/>
            </div>
          </div>
          <div className="col-md-6">
            <div className="mb-3">
              <label for="formrow-firstname-input" className="form-label">
                Company
              </label>{" "}
              <br />
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
              <label for="">Accommodation From</label>
              <input type="date" className="form-control" placeholder=""  {...register('accommodationFrom')} />
            </div>
          </div>
          <div className="col-md-6">
            <div className="mb-3">
              <label for="">Accommodation To</label>
              <input type="date" className="form-control" placeholder="" {...register('accommodationTo')} />
            </div>
          </div>
          <div className="col-md-6">
            <div className="mb-3">
              <label for="">Employee Rent Paid</label>
              <input type="text" className="form-control" placeholder="" {...register('employeeRentPaid')} />
            </div>
          </div>
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
