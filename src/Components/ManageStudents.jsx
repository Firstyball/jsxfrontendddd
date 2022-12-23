import {useEffect, useState} from 'react';
import {Button, Col, Container, Modal, ModalBody, ModalHeader, Row, CardGroup} from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import {GridManager} from "./GridManager";
import {StudentCreation} from "./StudentCreation.jsx";

export const ManageStudents = ({students}) => {

    const [show, setShow] = useState(false);

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    const toggle = () => setShow(!show);


    const onLoginFormSubmit = (e) => {
        e.preventDefault();
        handleClose();
    };
    return (
        <>
            <div className="student-button">
                <Button color="info" onClick={handleShow} className="button-font">
                    <span className="font-size-l">Agregar Nuevo Estudiante</span>
                </Button>
            </div>

            <div className="grid-card-group">
                {
                    students.map((student) =>
                        <GridManager key={student.id} data={student}/>
                    )
                }
            </div>


            <Modal isOpen={show} toggle={toggle}>
                <ModalHeader>
                    Crear Nuevo Estudiante
                </ModalHeader>
                <ModalBody>
                    <StudentCreation onSubmit={onLoginFormSubmit} />
                </ModalBody>

            </Modal>
      </>
    );

}