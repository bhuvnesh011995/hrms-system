import { useState } from "react"
import AddNewEmployee from "./AddNewEmployee"

export default function Modals({addNewIsOpen,setAddNewIsOpen}) {
    return(
        <>
        {addNewIsOpen && <AddNewEmployee show={addNewIsOpen} setShow={setAddNewIsOpen}/>}
        </>
    )
};
