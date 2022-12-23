import {Button,Card,CardBody,CardTitle, CardText,Modal,ModalHeader, ModalBody} from "reactstrap";
import {useState} from "react";
import {StudentForm} from "./StudentForm.jsx";

export const ModalComponent =  ({show, data, handleShow}) => {


    const onLoginFormSubmit = (e) => {
        e.preventDefault();
        handleClose();
    };

    return (
        <Modal isOpen={show}>
            <ModalHeader >
                Modificar Estudiante
            </ModalHeader>
            <ModalBody>
                <StudentForm onSubmit={onLoginFormSubmit}  data={data} handleShow={handleShow} />
            </ModalBody>
        </Modal>
    );
}