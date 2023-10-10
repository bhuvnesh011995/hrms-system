import { api } from "../../Context/AuthContext"

export const getPaymentGateway = async function(){
    

    try {
       let response = await api.get("/paymentGateway") 
       
       return response
    } catch (error) {
        console.log(error)
        return error.response
    }
}



export const updatePaymentGateway = async function(data){
    try {
        let response = await api.put("/paymentGateway",data)

        return response
    } catch (error) {
        console.log(error)
        return error.response
    }
    
}


export const getSetting = async ()=>{
    try {
        let response = await api.get("/system")
        return response
    } catch (error) {
        console.log(error)
        return error.response
    }
}


export const updateSetting = async (data)=>{
    try {
        console.log(DataTransfer)
        let response = api.put("/system",data)
        return response
    } catch (error) {
        console.log(error)
        return error.response
    }
}


export const getModulesSetting = async ()=>{
    try {
      let response = await api.get("/system/modules")
      return response
    } catch (error) {
        console.log(error)
        return error.response
    }
    

}


export const updateModulesSetting = async (data)=>{
    try {
        let response = await api.put("/system/modules",data)
        return response
    } catch (error) {
        console.log(error)
        return error.response
    }
}