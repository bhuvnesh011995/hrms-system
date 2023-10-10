import { useState } from "react";
import MainPage from "../../../Components/Common/MainPage";
import ListAllEmployees from "./ListAllEmployees";
import EmployeeSummery from "./SubComponent/EmployeeSummery";
import AddNewEmployee from "./Modals/AddNewEmployee";


export default function Employees() {
    const [isOpen,setIsOpen] = useState(false)
    return(
        <MainPage title={"EMPOLYEES"}>
            <EmployeeSummery />
            <ListAllEmployees setIsOpen={setIsOpen} />
            {isOpen && <AddNewEmployee show={isOpen} setShow={setIsOpen}/>}
        </MainPage>
    )
};
