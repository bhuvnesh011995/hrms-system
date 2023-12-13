import { api } from "../../Context/AuthContext"

export const addEmployeeExit = async (data)=>{
    try {
        let response = await api.post("/employeeexit",data)
        return response
    } catch (error) {
        console.log(error)
        return error.response
    }
}



export const getAllEmployeeExit = async ()=>{
    try{
        let response = await api.get("/employeeexit")
        return response
    }
    catch(error){
        return error.response
    }
}
