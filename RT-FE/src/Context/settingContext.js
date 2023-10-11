import { createContext, useState } from "react";

let settingContext = createContext()


export default SettingProvider = ({children})=>{
const [theme,setTheme] = useState({})
const [language,setLanguage] = useState()
const [setting,setSetting] = useState()
const [constant,setConstant] = useState({})
const [paymentGateway,setPaymentGateway] = useState()
const [setupModule,setSetupModule] = useState()






    return (
        <settingContext.Provider>
            {children}
        </settingContext.Provider>
    )
}


export {settingContext}