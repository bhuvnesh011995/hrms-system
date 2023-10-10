import { useCallback ,useState} from "react"
import { updateSetting } from "../../../../Utility/API/system"

export default function Payroll({data,getSettingData}) {
    


const [isLoading,setIsLoading] = useState(false)
    const [isError,setIsError] = useState(false)
    const [updateData,setUpdateData] = useState(null)
    const getValue = useCallback((field,check=false)=>{
      if(check){
        if(updateData && updateData[field]!=undefined) return updateData[field]
        else if(data && data[field]!=undefined) return data[field]
        else return false
      }
        if(updateData&&updateData[field] !=undefined) return updateData[field]
        else if(data&&data[field]){
            if(field==="defaultCurrency") return data[field]?._id
            else return data[field]
        }
        else return ""
    },[updateData,data])
    
            const handleSubmit = useCallback(async ()=>{
                try {
                    console.log(updateData)
                    if(!updateData) return
                    let res = await updateSetting({payroll:updateData})
                    console.log(res)
                    if(res.status===204){
                        getSettingData()
                        setUpdateData(null)
                    }
                } catch (error) {
                    
                }
            },[updateData])
  return (
    <div
      class="tab-pane"
    >
      <h4>Payroll Configuration</h4>
      <form action="">
        <div class="row">
          <div class="col-md-6">
            <div class="templating-select">
              <label class="form-label">Payslip password format</label> <br />
              <select
              value={getValue("passwordFormat")}
              onChange={e=>setUpdateData(preVal=>({...preVal,passwordFormat:e.target.value}))}
                class="form-control select2-templating"
                style={{ width: "100%" }}
              >
                <option value={""}>choose...</option>
                <option value="DOB">Employee Date Of Birth (22/06/2023)</option>
                <option value="CN">Employee Contact Number (123456789)</option>
                <option value="EMAIL">
                  Employee Email Address (example@mail.com)
                </option>
              </select>
            </div>
          </div>
          <div class="col-md-6">
            <div class="mb-3">
              <label for="formrow-firstname-input" class="form-label">
                Enable Password generate for payslip{" "}
              </label>{" "}
              <br />
              <input
              checked={getValue("passwordForPayslip",true)}
              onChange={e=>setUpdateData(preVal=>({...preVal,passwordForPayslip:e.target.checked}))}
              type="checkbox" id="switch12" switch="bool" />
              <label
                for="switch12"
                data-on-label="Yes"
                data-off-label="No"
              ></label>
            </div>
          </div>
          <div class="col-md-6">
            <div class="mb-3">
              <label for="formrow-firstname-input" class="form-label">
                Is Half Monthly?
              </label>
              <br />
              <input
              checked={getValue("halfMonthly",true)}
              onChange={e=>setUpdateData(preVal=>({...preVal,halfMonthly:e.target.checked}))}
              type="checkbox" id="switch13" switch="bool" />
              <label
                for="switch13"
                data-on-label="Yes"
                data-off-label="No"
              ></label>
            </div>
          </div>
        </div>
        <div>
        <button
        onClick={()=>handleSubmit()}
          type="button"
          class="btn btn-primary waves-effect waves-light w-15 me-2"
        >
          SAVE
        </button>
        <button
        onClick={()=>setUpdateData(null)}
          type="button"
          class="btn btn-danger waves-effect waves-light w-15 me-2"
        >
          Cancel
        </button>
        </div>
        
      </form>
    </div>
  );
}

