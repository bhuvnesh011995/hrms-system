import { api } from "../../Context/AuthContext"

export const login = async function(data){
    try {
        let response = await api.post("/auth/login",data)
    return response
    } catch (error) {
        return error.response
    }
}


export const logout = async function(){
    try {
        let response = await api.delete("/auth/logout")
        return response
    } catch (error) {
        console.log(error)
        return error.response
    }
}