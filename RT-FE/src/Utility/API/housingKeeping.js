import { api } from "../../Context/AuthContext"

export const addHousingKeeping = async (data)=>{
    try {
        let response = await api.post("/housingKeeping",data)
        return response
    } catch (error) {
        console.log(error)
        return error.response
    }
}
