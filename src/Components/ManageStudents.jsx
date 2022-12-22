import React, {useEffect, useState} from 'react';
import {Button, Col, Container, Modal, ModalBody, ModalHeader, Row} from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import {RenderStudents} from "./RenderStudents";
import client from "../api/student.js";
import {StudentCreation} from "./StudentCreation.jsx";

export const ManageStudents = () => {
    const [student, setStudent] = useState([]);

    useEffect(() => {
        client.get('/list').then((response) => {
            setStudent(response.data);
            console.log(`student xd : ${ JSON.stringify(student)}`);
         });
    }, []);
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
                        <Button block color="success" onClick={handleShow} >
                            <span className="font-size-l">Create New Student</span>
                        </Button>
                    </Col>
                </Row>
            </Container>

            <RenderStudents data={student}/>

            <Modal isOpen={show} toggle={toggle}>
                <ModalHeader >
                    New Student
                </ModalHeader>
                <ModalBody>
                    <StudentCreation onSubmit={onLoginFormSubmit} />
                </ModalBody>

            </Modal>
      </div>
    );

}