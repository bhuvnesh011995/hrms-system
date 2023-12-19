import { Modal } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { getAllDepartments } from "../../Utility/API/department";
import { addNewDepartmentFile } from "../../Utility/API/fileManager";
import { toast } from "react-toastify";

export default function AddNew({ show, setShow, callback }) {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [departments, setDepartments] = useState([]);

  useEffect(() => {
    getDepartments();
  }, []);

  const getDepartments = async () => {
    const response = await getAllDepartments();
    setDepartments(response.data);
  };

  const addNewForm = async (data) => {
    toast.dismiss();
    const newDepartmentFileResponse = await addNewDepartmentFile(data);
    if (newDepartmentFileResponse.status == 200) {
      callback(newDepartmentFileResponse.data);
      toast.success("new department file created");
    } else {
      toast.error("something went wrong");
    }
    setShow(false);
  };

  return (
    <Modal size='xl' show={show} onHide={() => setShow(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Add New Files</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <form onSubmit={handleSubmit(addNewForm)}>
          <div class='row'>
            <div class='col-md-12'>
              <div class='mb-3'>
                <label for='formrow-firstname-input' class='form-label'>
                  Department
                </label>{" "}
                <br />
                <select
                  class='form-control select2-templating '
                  style={{ width: "100%" }}
                  {...register("department", {
                    required: "Please Select Department",
                  })}
                >
                  {departments.map((department) => (
                    <option
                      value={department._id}
                      selected={
                        department._id == watch("department") && department._id
                      }
                    >
                      {department.name}
                    </option>
                  ))}
                  {errors?.department && (
                    <span className='text-danger'>
                      {errors?.department.message}
                    </span>
                  )}
                </select>
              </div>
            </div>
            <div class='col-md-12'>
              <div class='mb-3'>
                <label for=''>Document File</label>
                <input
                  type='file'
                  class='form-control'
                  placeholder=''
                  {...register("documentFiles", {
                    required: "Please Select Document File",
                  })}
                />
                {errors?.documentFiles && (
                  <span className='text-danger'>
                    {errors?.documentFiles.message}
                  </span>
                )}
              </div>
            </div>
          </div>
          <Modal.Footer>
            <button type='submit' class='btn btn-success'>
              Save
            </button>
          </Modal.Footer>
        </form>
      </Modal.Body>
    </Modal>
  );
}
