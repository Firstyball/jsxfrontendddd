import {Modal,ModalHeader, ModalBody} from "reactstrap";
import {SchoolForm} from "./SchoolForm.jsx";
import {useState} from 'react';

export const ModalComponent =  ({show, data, handleShow, title}) => {


    const onLoginFormSubmit = (e) => {
        e.preventDefault();
        handleClose();
    };

    return (
        <>

            <Modal isOpen={show}>
                <ModalHeader >
                    {title}
                </ModalHeader>
                <ModalBody>
                    <SchoolForm onSubmit={onLoginFormSubmit}  data={data} handleShow={handleShow} />
                </ModalBody>
            </Modal>
        </>
    );
}