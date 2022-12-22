import React, {useEffect, useState} from 'react';
import {Button, Col, Container, Row } from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import {RenderStudents} from "./RenderStudents";
import client from "../api/student.js";

export const ManageStudents = () => {
    const [student, setStudent] = useState([]);

    useEffect(() => {
        client.get('/list').then((response) => {
            setStudent(response.data);
            console.log(`student xd : ${ JSON.stringify(student)}`);
         });
    }, []);

    return (
        <div>
            <Container className="mt-4 mb-4">
                <Row>
                    <Col sm='12'>
                        <Button block color="success" >
                            <span className="font-size-l">Create New Student</span>
                        </Button>
                    </Col>
                </Row>
            </Container>

            <RenderStudents data={student}/>
      </div>
    );

}