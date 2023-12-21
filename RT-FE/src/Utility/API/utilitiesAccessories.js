import { api } from "../../Context/AuthContext"

export const addUtilitiesAccessories = async (data)=>{
    try {
        let response = await api.post("/utilitiesAccessories",data)
        return response
    } catch (error) {
        console.log(error)           
        return error.response
    }
}

export const getAllUtilitiesAccessories = async ()=>{
    try{
        let response = await api.get("/utilitiesAccessories")
        return response
    }
    catch(error){
        return error.response
    }
}

export const deleteUtilitiesAccessories = async (id)=>{
    try{
        let response = await api.delete("/utilitiesAccessories/"+id)
        return response

    }
    catch(error){
        return error.response
    }
}