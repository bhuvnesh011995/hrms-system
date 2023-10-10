import { useCallback ,useState} from "react"
import { updateSetting } from "../../../../Utility/API/system"

export default function FileManager({data,getSettingData}) {
    


const [isLoading,setIsLoading] = useState(false)
    const [isError,setIsError] = useState(false)
    const [updateData,setUpdateData] = useState(null)
    const getValue = useCallback((field)=>{
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
                    let res = await updateSetting({system:updateData})
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
      <h4>Files Manager Configuration</h4>
      <form action="">
        <div class="row">
          <div class="col-md-6">
            <div class="mb-3 position-relative">
              <label class="form-label">
                Max. File Size
              </label>
              <div class="input-group">
                <input
                  type="text"
                  class="form-control"
                  placeholder=""
                />
                <div class="input-group-prepend">
                  <span class="input-group-text">
                    MB
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="mb-3">
              <label class="form-label">Allowed Extension</label>

              <input
                type="text"
                name="input-multiple"
                class="form-control"
              />
            </div>
          </div>
          <div class="col-md-6">
            <div class="mb-3">
              <label class="form-label">
                Employee can view/download all department files{" "}
              </label>{" "}
              <br />
              <input type="checkbox" id="switch14" switch="bool" />
              <label
                for="switch14"
                data-on-label="Yes"
                data-off-label="No"
              ></label>
            </div>
          </div>
        </div>
        <button
          type="button"
          class="btn btn-primary waves-effect waves-light w-25"
        >
          SAVE
        </button>
      </form>
    </div>
  );
}
