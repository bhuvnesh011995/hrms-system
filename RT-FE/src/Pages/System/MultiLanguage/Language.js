import { useState } from "react";
import MainPage from "../../../Components/Common/MainPage";
import AddNew from "./AddNew";
import Table from "./Table";

export default function Language() {
    const [isOpen,setIsOpen] = useState(false)

  return (
    <MainPage title={"Language"}>
        {isOpen && <AddNew show={isOpen} setShow={setIsOpen}/>}
      <div class="row">
        <div class="col-12">
          <div class="card">
            <div class="card-body">
              <p class="card-title-desc" style={{ textAlign: "right" }}>
                <button
                  class="btn btn-primary text-right"
                  onClick={()=>setIsOpen(true)}
                >
                  Add Language
                </button>
              </p>
              <Table />
            </div>
          </div>
        </div>
      </div>
    </MainPage>
  );
}
