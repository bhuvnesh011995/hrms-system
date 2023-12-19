import { api, formApi } from "../../Context/AuthContext";

export const getAllDepartmentFiles = async (department) => {
  try {
    const response = await api.get("/fileManager/getAllFiles/" + department);
    return response;
  } catch (err) {
    console.error(err);
  }
};

export const deleteDepartmentFile = async (fileId) => {
  try {
    const response = await api.delete("/fileManager/deleteFile/" + fileId);
    return response;
  } catch (err) {
    console.error(err);
  }
};

export const addNewDepartmentFile = async (data) => {
  try {
    const formdata = new FormData();
    for (let file of data.documentFiles) {
      formdata.append("files", file);
    }
    formdata.append("fileManagerData", JSON.stringify(data));

    const addNewFile = await formApi.post("/fileManager/addNewFile", formdata);
    return addNewFile;
  } catch (err) {
    console.error(err);
  }
};
