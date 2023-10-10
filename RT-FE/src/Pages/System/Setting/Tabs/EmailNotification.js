import { useCallback ,useState} from "react"
import { updateSetting } from "../../../../Utility/API/system"

export default function EmailNotification({data,getSettingData}) {
    


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
                    let res = await updateSetting({emailNotification:updateData})
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
      <h4>Email Notifications</h4>
      <form action="">
        <div class="row">
          <div class="col-md-6">
            <div class="mb-3">
              <label for="formrow-firstname-input" class="form-label">
                Enable email notifications{" "}
              </label>{" "}
              <br />
              <input
              checked={getValue("enableEmailNotifiction",true)}
              onChange={e=>setUpdateData(preVal=>({...preVal,enableEmailNotifiction:e.target.checked}))}
              type="checkbox" id="switch20" switch="bool" />
              <label
                for="switch20"
                data-on-label="Yes"
                data-off-label="No"
              ></label>
            </div>
          </div>
          <div class="col-md-6">
            <div class="mb-3">
              <label for="formrow-firstname-input" class="form-label">
                Email Type
              </label>
              <select
              value={getValue("emailType")}
              onChange={e=>setUpdateData(preVal=>({...preVal,emailType:e.target.value}))}
              class="form-select" id="">
                <option value="">Choose...</option>
                <option value="SMTP">SMTP </option>
                <option value="Phpmail">PHP Mail</option>
              </select>
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


              