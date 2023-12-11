import { api, formApi } from "../../Context/AuthContext"

export const getAllTerminations = async ()=>{
    try {
        let response = await api.get("/termination")
        return response
    } catch (error) {
        console.log(error)
        return error.response
    }
}

export const addTermination = async (data)=>{
    try {
        let response = await formApi.post("/termination",data)
        return response
    } catch (error) {
        console.log(error)
        return error.response
    }
}


export const updateTermination = async (id,data)=>{
    try {
        let response = await formApi.put("/termination/"+id,data)
        return response
    } catch (error) {
        console.log(error)
        return error.response
    }
}



export const deleteTermination = async (id)=>{
    try {
        let response = await api.delete("/termination/"+id)
        return response
    } catch (error) {
        console.log(error)
        return error.response
    }
}


export const getTerminationById = async id =>{
    try {
        let response = api.get("/termination/"+id)
        return response
    } catch (error) {
        console.log(error)
        return error.response
    }
}


export const deleteTerminationFile = async (id,file)=>{
    try {
        let response = await api.delete("/termination/file/"+file+"/"+id)
        return response
    } catch (error) {
        console.log(error)
        return error.response
    }
}