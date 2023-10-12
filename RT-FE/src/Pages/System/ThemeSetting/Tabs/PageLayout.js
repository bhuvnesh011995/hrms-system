import { useState } from "react";
import { Toast, ToastContainer } from "react-bootstrap";

export default function PageLayout({data,getThemeSettingData}) {
const [show,setShow] = useState(false)
const [toast,setToast] = useState({})
  return (
    <div class="tab-pane">
      <ToastContainer containerPosition="bottom-end" position="top-right" style={{zIndex:1,position:"fixed",top:"100px", right:"5px"}}>
              <Toast style={{width:"auto"}} className="p-1" onClose={()=>setShow(false)} show={show} delay={3000} bg={toast.bg} autohide>
                <Toast.Body className="text-white">
                  {toast.message}
                </Toast.Body>
              </Toast>
            </ToastContainer>
      <h4>Page Layouts</h4>
      <form action="">
        <div class="row">
          <div class="col-md-4">
            <div class="mb-3">
              <label for="formrow-firstname-input" class="form-label">
                Footer Layout
              </label>
              <select class="form-control select2-templating ">
                <option value="Dfooter">Dark Footer</option>
                <option value="lfooter">Light Footer</option>
                <option value="Tfooter">Transparent Footer</option>
              </select>
            </div>
          </div>
          <div class="col-md-4">
            <div class="mb-3">
              <label for="formrow-firstname-input" class="form-label">
                Statistics cards on dashboard
              </label>
              <select class="form-control select2-templating ">
                <option value="0">0</option>
                <option value="4">4</option>
                <option value="8">8</option>
              </select>
            </div>
          </div>

          <div class="col-md-4">
            <div class="mb-3">
              <label for="formrow-firstname-input" class="form-label">
                Admin Dashboard
              </label>
              <select class="form-control select2-templating ">
                <option value="dash1">Dashboard 1</option>
                <option value="dash2">Dashboard 2</option>
                <option value="dash3">Dashboard 3</option>
                <option value="dash4">Dashboard 4</option>
              </select>
            </div>
          </div>
          <div class="col-md-4">
            <div class="mb-3">
              <label for="formrow-firstname-input" class="form-label">
                Login Page Options
              </label>
              <select class="form-control select2-templating ">
                <option value="log1">Login Page Version 1</option>
                <option value="log2">Login Page Version 2</option>
                <option value="log3">Login Page Version 3</option>
                <option value="log4">Login Page Version 4</option>
              </select>
            </div>
          </div>
          <div class="col-md-4">
            <div class="mb-3">
              <label for="formrow-firstname-input" class="form-label">
                Show calendar on dashboard?{" "}
              </label>{" "}
              <br />
              <input type="checkbox" id="switch11" switch="bool" checked />
              <label
                for="switch11"
                data-on-label="Yes"
                data-off-label="No"
              ></label>
            </div>
          </div>
          {/* <div class="col-md-4">
                <div class="mb-3">
                    <label for="formrow-firstname-input" class="form-label">Sub menu icons </label>
                    <ul class="setting-drop-icon">
                        <li><i class="fas fa-circle-notch"></i></li>
                        <li><i class="fas fa-circle"></i></li>
                        <li><i class="fas fa-check"></i></li>
                        <li><i class="fas fa-ellipsis-h"></i></li>
                        <li><i class="far fa-check-circle"></i></li>
                        <li><i class="fas fa-arrow-right"></i></li>

                    </ul>
                    <ul class="setting-drop-icon">

                        <input name="fontawesome-icon" value="" id="" type="radio" >
                        <input name="fontawesome-icon" value="" id="" type="radio" >
                        <input name="fontawesome-icon" value="" id="" type="radio" >
                        <input name="fontawesome-icon" value="" id="" type="radio" >
                        <input name="fontawesome-icon" value="" id="" type="radio" >
                        <input name="fontawesome-icon" value="" id="" type="radio" >
                    </ul>
                </div>
            </div> */}
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
