import { api } from "../../Context/AuthContext"

export const addAccommodation = async (data)=>{
    try {
        let response = await api.post("/accommodation",data)
        return response
    } catch (error) {
        console.log(error)
        return error.response
    }
}

export const getAllAccommodation = async () =>{
    try{
        let response = await api.get("/accommodation")
        return response
    }
    catch(error){
        return error.response
    }
}

export const deleteAccommodation = async (id) =>{
try{
let response =await api.delete("/accommodation/"+id)
return response
}
catch(error){
    return error.response
}

}

