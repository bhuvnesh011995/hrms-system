import { api } from "../../Context/AuthContext"

export const addDriver = async (data)=>{
    try {
        let response = await api.post("/driver",data)
        return response
    } catch (error) {
        console.log(error)
        return error.response
    }
}

export const getAllDriver = async ()=>{
    try {
        let response = await api.get("/driver")
        return response
    } catch (error) {
        console.log("error",error)
        return error.response
    }
}

export const deleteDriver = async (id)=>{
    try{
        let response = await api.delete("/driver/"+id)
        return response

    }
    catch(error){
        return error.response
    }
}