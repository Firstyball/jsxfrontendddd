import React from 'react'
import {Button, Card, CardBody, CardFooter, CardText, CardTitle, Col, Container, Navbar, NavbarBrand, Row } from "reactstrap";
import {
    IoSchoolOutline,
    IoMan,
    IoSettings,
    IoWomanOutline
} from "react-icons/io5";
import 'bootstrap/dist/css/bootstrap.min.css';

function Renderstudents(estudi){
    console.log(estudi.id);
    return(
        <div key={estudi.id}>
        <Row>
            <Col sm="12">
                <Card body>
                    <CardTitle tag="h5">
                        <IoMan className="font-size-xl"/> {estudi.firstName + " " + estudi.lastName}
                    </CardTitle>
                    <CardBody>
                        <Row>
                            <Col sm="4" className="text-center">
                                <span className="font-weight-bold">Class</span>
                                <span> Second Year</span>
                            </Col>
                            <Col sm="4" className="text-center">
                                <span className="font-weight-bold">Age</span>
                                <span> {estudi.age} </span>
                            </Col>
                            <Col sm="4" className="text-center">
                                <span className="font-weight-bold">Teacher</span>
                                <span> {estudi.teacher} </span>
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

function ConMana(props) {

const content = props.student.map((studen) => Renderstudents(studen))


    return(
      <div>
          {content}

      </div>
    )
}export {ConMana}


