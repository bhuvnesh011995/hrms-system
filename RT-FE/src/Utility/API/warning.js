import { api, formApi } from "../../Context/AuthContext"

export const getAllWarnings = async ()=>{
    try {
        let response = await api.get("/warning")
        return response
    } catch (error) {
        console.log(error)
        return error.response
    }
}

export const addWarning = async (data)=>{
    try {
        let response = await formApi.post("/warning",data)
        return response
    } catch (error) {
        console.log(error)
        return error.response
    }
}


export const updateWarning = async (id,data)=>{
    try {
        let response = await formApi.put("/warning/"+id,data)
        return response
    } catch (error) {
        console.log(error)
        return error.response
    }
}



export const deleteWarning = async (id)=>{
    try {
        let response = await api.delete("/warning/"+id)
        return response
    } catch (error) {
        console.log(error)
        return error.response
    }
}


export const getWarningById = async id =>{
    try {
        let response = api.get("/warning/"+id)
        return response
    } catch (error) {
        console.log(error)
        return error.response
    }
}


export const deleteWarningFile = async (id,file)=>{
    try {
        console.log(file,id,"hi")
        let response = await api.delete("/warning/file/"+file+"/"+id)
        return response
    } catch (error) {
        console.log(error)
        return error.response
    }
}