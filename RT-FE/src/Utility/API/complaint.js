import { api, formApi } from "../../Context/AuthContext"

export const getAllComplaints = async ()=>{
    try {
        let response = await api.get("/complaint")
        return response
    } catch (error) {
        console.log(error)
        return error.response
    }
}

export const addComplaint = async (data)=>{
    try {
        let response = await formApi.post("/complaint",data)
        return response
    } catch (error) {
        console.log(error)
        return error.response
    }
}


export const updateComplaint = async (id,data)=>{
    try {
        let response = await formApi.put("/complaint/"+id,data)
        return response
    } catch (error) {
        console.log(error)
        return error.response
    }
}



export const deleteComplaint = async (id)=>{
    try {
        let response = await api.delete("/complaint/"+id)
        return response
    } catch (error) {
        console.log(error)
        return error.response
    }
}


