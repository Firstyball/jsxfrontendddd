import React from 'react'
import {Button, Card, CardBody, CardFooter, CardText, CardTitle, Col, Container, Navbar, NavbarBrand, Row } from "reactstrap";
import {
    IoSchoolOutline,
    IoMan,
    IoSettings,
    IoWomanOutline
} from "react-icons/io5";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from "react-router-dom";

function MenuManagement() {
    return(
        <div>
            <Container className="mt-3">
                <Row>
                    <Col sm='4'>
                        <Card body>
                            <CardTitle tag="h5">
                                <IoMan className="font-size-xl"/> 86 Students
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
}export {MenuManagement}