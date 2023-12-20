import { Modal } from "react-bootstrap";
import { useCallback, useEffect, useState } from "react";
import { getAllCompanies } from "../../../../../Utility/API/company";
import { Controller, useForm } from "react-hook-form";
import { getEmployeeByCompany } from "../../../../../Utility/API/employee";
import { addUtilitiesAccessories } from "../../../../../Utility/API/utilitiesAccessories";
import DeleteIcon from '@mui/icons-material/Delete';
export default function AddNew({show,setShow}) {
    const [rows, setRows] = useState([{ id: 1}]); 
    const [companies, setCompanies] = useState();
    const [employees, setEmployees] = useState();
    const [dataToUpdate, setDataToUpdate] = useState();
    const addRow = () => {
        const newRow = { id: rows.length + 1 };
        setRows([...rows, newRow]);
      };
      const deleteRow = (id) => {
        const updatedRows = rows.filter((row) => row.id !== id);
        setRows(updatedRows);
      };

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

      const submitData = async (data) => {
        try {
          let res = await addUtilitiesAccessories(data);
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

    return(
        <Modal size="lg" show={show} onHide={() => setShow(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Utilities</Modal.Title>
          </Modal.Header>
    
          <Modal.Body>
          <form onSubmit={handleSubmit(submitData)}>

            <div className="row">
            <div className="col-md-4">
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
                                                                <div className="col-md-4">
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
                                                                <div className="col-md-4">
                                                                    <div className="mb-3">
                                                                        <label for="formrow-firstname-input" className="form-label">Benefits Year</label> <br/>
                                                                        <select className="form-control select2-templating " style={{width: "100%"}}  {...register('benefitsYear')} >
                                                                            <option value="2023">2023 </option>
                                                                            <option value="2022">2022</option>
                                                                            <option value="2021">2021</option>
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                                <div className="col-sm-12">
  <div className="d-flex justify-content-end">
    <button type="button" className="btn btn-info add-new" onClick={addRow}>
      <i className="fa fa-plus"></i> Add Row
    </button>
  </div>
</div>

                                          
          {rows.map((row,index) => (
                        <div key={index}  className="row">
                                       
                                                                <div className="col-md-4">
                                                                    <div className="mb-3">
                                                                        <label for="formrow-firstname-input" className="form-label">Utilities & Accessories </label> <br/>
                                                                        <select className="form-control select2-templating " style={{width: "100%"}}{...register(`rows.${index}.utilitiesAccessories`)}  >
                                                                            <option value="Utilities">Utilities</option>
                                                                            <option value="Pager">Pager</option>
                                                                            <option value="Golf Bag & Accessories">Golf Bag & Accessories</option>
                                                                            <option value="Camera">Camera</option>

                                                                            <option value="Tablet">Tablet</option>
                                                                            <option value="Laptop">Laptop</option>
                                                                            <option value="Electronic Gadget">Electronic Gadget </option>
                                                                            <option value="Other">Other</option>
                                                                            <option value="Utilities"> Utilities</option>
                                                                                         
                                                                        </select>
                                                                    </div>
                                                                </div>

                                                                <div className="col-md-4">
      <div className="mb-3">
        <label htmlFor="">Remark</label>
        <input type="text" className="form-control" placeholder="" {...register(`rows.${index}.remark`)} />
      </div>
    </div>

    <div className="col-md-3">
      <div className="mb-3">
        <label htmlFor="">Actual Amount</label>
        <input type="text" className="form-control" placeholder="" {...register(`rows.${index}.actualAmount`)} />
      </div>
    </div>

    {index > 0 && (
      <div className="col-md-1">    
        <div className="mt-4">   
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => deleteRow(row.id)}
          >
            Delete
          </button>
        </div>
      </div>
    )}
  </div>
))}
                                                                         </div> 
                                                                                    <button type="submit" className="btn btn-success">SAVE</button>
        </form>
          </Modal.Body>
          <Modal.Footer>
         
          </Modal.Footer>
        </Modal>
    )
};