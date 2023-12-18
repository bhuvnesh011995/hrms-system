import { api } from "../../Context/AuthContext";

export const getAllDepartmentFiles = async () => {
  try {
    const response = await api.get("/fileManager/getAllFiles");
    return response;
  } catch (err) {
    console.error(err);
  }
};
