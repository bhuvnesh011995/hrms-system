import { createContext, useContext, useEffect, useState } from "react";
import { IntlProvider } from 'react-intl';
import { api } from "./AuthContext";
let settingContext = createContext()

let getLanguage;
export default function SettingProvider({children}){
const [theme,setTheme] = useState({})
const [language,setLanguage] = useState()
const [setting,setSetting] = useState()
const [constant,setConstant] = useState({})
const [paymentGateway,setPaymentGateway] = useState()
const [setupModule,setSetupModule] = useState()
const [lanCode,setLanCode] = useState("")

getLanguage = async (id="")=>{
    let res = await api.get("/language/?id="+id)
    console.log(res)
    if(res.status===200){
        setLanCode(res.data.language.code)
        setLanguage(res.data.language.language)
    }
}

useEffect(()=>{
    getLanguage()
},[])

    return (
        <settingContext.Provider>
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