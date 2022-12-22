import React, {useEffect, useState} from 'react';
import {Button, Card, CardText, CardTitle, Col, Container, Row } from "reactstrap";
import {IoSchoolOutline, IoMan, IoSettings } from "react-icons/io5";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from "react-router-dom";
import client from "../api/student.js";

export const MenuManagement = () => {

    const [student, setStudent] = useState([]);

    useEffect(() => {
        client.get('/list').then((response) => {
            setStudent(response.data);
            console.log(`student in menu : ${ JSON.stringify(student)}`);
         });
    }, []);

    return(
        <div>
            <Container className="mt-3">
                <Row>
                    <Col sm='4'>
                        <Card body>
                            <CardTitle tag="h5">
                                <IoMan className="font-size-xl"/> {student.length} Students
                            </CardTitle>
                            <CardText>
                                With supporting text below as a natural lead-in to additional
                                content.
                            </CardText>
                            <Link to="/students"><Button>Manage Students</Button></Link>
                        </Card>
                    </Col>
                    <Col sm='4'> <Card body>
                        <CardTitle tag="h5">
                            <IoSchoolOutline className="font-size-xl"/> 20 Teachers
                        </CardTitle>
                        <CardText>
                            With supporting text below as a natural lead-in to additional
                            content.
                        </CardText>
                        <Button>Manage Teachers</Button>
                    </Card>
                    </Col>
                    <Col sm='4'> <Card body>
                        <CardTitle tag="h5">
                            <IoSettings className="font-size-xl"/> 13 Employees
                        </CardTitle>
                        <CardText>
                            With supporting text below as a natural lead-in to additional
                            content.
                        </CardText>
                        <Button>Manage Employees</Button>
                    </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}