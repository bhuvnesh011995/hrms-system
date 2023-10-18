import { api } from "../../Context/AuthContext"

export const getEmployeeByCompany = async (id)=>{
    try {
        let response = await api.get("/employee/"+id)
        return response
    } catch (error) {
        console.log(error)
        return error.response
    }
}