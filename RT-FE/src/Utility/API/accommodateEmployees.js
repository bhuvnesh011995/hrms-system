import { api } from "../../Context/AuthContext"

export const addAccommodatedEmployee = async (data)=>{
    try {
        let response = await api.post("/accommodatedEmployees",data)
        return response
    } catch (error) {
        console.log(error)
        return error.response
    }
}


export const getAllAccommodatedEmployee = async () =>{
    try{
        let response = await api.get("/accommodatedEmployees")
        return response
    }
    catch(error){
        return error.response
    }
}

export const deleteAccommodatedEmployee = async (id) =>{
    try{
        let response = await api.delete("/accommodatedEmployees/"+id)
        return response
    }
    catch(error){
        return error.response
    }
}