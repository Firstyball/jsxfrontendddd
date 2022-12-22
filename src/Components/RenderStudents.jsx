import React from 'react'
import {Button, Card, CardBody, CardFooter, CardTitle, Col, Row } from "reactstrap";
import {IoMan} from "react-icons/io5";
import 'bootstrap/dist/css/bootstrap.min.css';

//Renderiza la información de un estudiante
export const RenderStudentData = (data) => {
    return(
        <div key={data.id}>
            <Row>
                <Col sm="12">
                    <Card body>
                        <CardTitle tag="h5">
                            <IoMan className="font-size-xl"/> {`${data.firstName} ${data.lastName}`}
                        </CardTitle>
                        <CardBody>
                            <Row>
                                <Col sm="4" className="text-center">
                                    <span className="font-weight-bold">Class</span>
                                    <span> Second Year</span>
                                </Col>
                                <Col sm="4" className="text-center">
                                    <span className="font-weight-bold">Age</span>
                                    <span> {data.age} </span>
                                </Col>
                                <Col sm="4" className="text-center">
                                    <span className="font-weight-bold">Teacher</span>
                                    <span> {data.teacher} </span>
                                </Col>
                            </Row>
                        </CardBody>
                        <CardFooter>
                            <Row>
                                <Col sm='6'>
                                    <Button block outline color="primary">
                                        Edit
                                    </Button>
                                </Col>
                                <Col sm='6'>
                                    <Button block outline color="danger" >
                                        delete
                                    </Button>
                                </Col>
                            </Row>
                        </CardFooter>
                    </Card>
                </Col>
            </Row>
        </div>
    );
}

//Renderiza la lista de estudiantes uno por uno a través de RenderStudentData
export const RenderStudents = ({data}) => {
    return(
        <div>
            {data.map((studen) => RenderStudentData(studen))}
        </div>
    );
}