import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { IntlProvider } from 'react-intl';
import { api } from "./AuthContext";
import axios from "axios";
import BASEURL from "../Config/Config";
import { getConstant } from "../Utility/API/constant";
import { getAllLanguage } from "../Utility/API/system";
let settingContext = createContext()

let getLanguage;
export default function SettingProvider({children}){
const [theme,setTheme] = useState({})
const [language,setLanguage] = useState()
const [setting,setSetting] = useState()
const [constants,setConstant] = useState({})
const [paymentGateway,setPaymentGateway] = useState()
const [setupModule,setSetupModule] = useState()
const [lanCode,setLanCode] = useState("")

getLanguage = async (id="")=>{
    let res = await api.get("/language/?id="+id)
    
    if(res.status===200){
        setLanCode(res.data.language.code)
        setLanguage(res.data.language.language)
    }
}

 const getAllSetting = async function(){
    try {
         const [systemRes,constantRes] = await Promise.all([axios.get(BASEURL+"/system/setting"),axios.get(BASEURL+"/constant")])
         if(systemRes.status===200){
            setSetting(systemRes.data.setting)
            setTheme(systemRes.data.theme)
            setPaymentGateway(systemRes.data.paymentGateway)
            setSetupModule(systemRes.data.setupModule)
         }

         if(constantRes.status===200){
            console.log(constantRes)
            setConstant(constantRes.data.constants)
         }
    } catch (error) {
        console.log(error)
    }
   
 }



useEffect(()=>{
    getAllSetting()
    getLanguage()
},[])

    return (
        <settingContext.Provider value={{lanCode,getLanguage,theme,setting,constants,paymentGateway,setupModule}}>
            <IntlProvider locale={lanCode} messages={language}>
                {children}
            </IntlProvider>
        </settingContext.Provider>
    )
}

const useSettingContext = ()=>{
    return useContext(settingContext)
}


export {useSettingContext,getLanguage}