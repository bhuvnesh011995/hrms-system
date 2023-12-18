import { Modal } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { formApi } from "../../Context/AuthContext";
import { useEffect, useState } from "react";
import { getAllDepartments } from "../../Utility/API/department";

export default function AddNew({ show, setShow }) {
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
    try {
      const formdata = new FormData();
      for (let file of data.documentFiles) {
        formdata.append("files", file);
      }
      formdata.append("fileManagerData", JSON.stringify(data));

      const addNewFile = await formApi.post(
        "/fileManager/addNewFile",
        formdata,
      );
      console.log(addNewFile);
    } catch (err) {
      console.error(err);
    }
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
