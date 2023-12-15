import React from 'react'
import { Modal } from 'react-bootstrap'

const CommonDeleteModal = ({header,show,setShow,message, deleteFunction}) => {
    const handleDeleteButton = () => {
        deleteFunction()
        setShow(false)
    }
    return (
    <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header>
            <Modal.Title>Delete {header ? header : "Data"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <span>{message ? message : ""}</span>
            <Modal.Footer>
                <button className='btn btn-primary' onClick={() => setShow(false)}>Cancel</button>
                <button className='btn btn-danger' onClick={handleDeleteButton}>Delete</button>
            </Modal.Footer>
        </Modal.Body>
    </Modal>
  )
}

export default CommonDeleteModal