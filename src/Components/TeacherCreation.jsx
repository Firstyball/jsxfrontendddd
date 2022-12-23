import {useEffect, useState} from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter, Row, Col, Container, Form} from 'reactstrap';
import {StudentCreation} from "./StudentCreation.jsx";
import client from "../api/student.js";

function TeacherCreation(args) {

    const [show, setShow] = useState(false);

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    const toggle = () => setShow(!show);


    const onLoginFormSubmit = (e) => {
        e.preventDefault();
        handleClose();
    };

    return (
        <div>
            <Container className="mt-4 mb-4">
                <Row>
                    <Col sm='12'>
                        <Button block color="success"  onClick={handleShow} >
                            <span className="font-size-l">Create New Teacher</span>
                        </Button>
                    </Col>
                </Row>
            </Container>

            <Modal isOpen={show} toggle={toggle}>
                <ModalHeader >
                    Adding new Student
                </ModalHeader>
                <ModalBody>
                    <StudentCreation onSubmit={onLoginFormSubmit} />
                </ModalBody>

            </Modal>

        </div>
    );
}export {TeacherCreation}

