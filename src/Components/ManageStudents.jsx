import React from 'react'
import {Button, Card, CardBody, CardFooter, CardText, CardTitle, Col, Container, Navbar, NavbarBrand, Row } from "reactstrap";
import {
    IoSchoolOutline,
    IoMan,
    IoSettings,
    IoWomanOutline
} from "react-icons/io5";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";



 class PersonList extends React.Component {
    state = {
        students: []
    }

    componentDidMount() {
        axios.get('http://localhost:7070/list')
            .then( res => {
                const students = res.data
                this.setState({students})
            })
    }

}
function ManageStudents() {
    function renderStudent(student) {
        return (

            <Row>
                <Col sm="12">
                    <Card body>
                        <CardTitle tag="h5">
                            <IoMan className="font-size-xl"/> {student.firstName + " " + student.lastName}
                        </CardTitle>
                        <CardBody>
                            <Row>
                                <Col sm="4" className="text-center">
                                    <span className="font-weight-bold">Class</span>
                                    <span> Second Year</span>
                                </Col>
                                <Col sm="4" className="text-center">
                                    <span className="font-weight-bold">Age</span>
                                    <span> {student.age} </span>
                                </Col>
                                <Col sm="4" className="text-center">
                                    <span className="font-weight-bold">Teacher</span>
                                    <span> {student.teacher} </span>
                                </Col>
                            </Row>
                        </CardBody>
                        <CardFooter>
                            <Row>
                                <Col sm-6>
                                    <Button block outline color="primary">
                                        Edit
                                    </Button>
                                </Col>
                                <Col sm-6>
                                    <Button block outline color="danger" >
                                        delete
                                    </Button>
                                </Col>
                            </Row>
                        </CardFooter>
                    </Card>
                </Col>
            </Row>
        )
    }

    return(

<div>
        <Container className="mt-4">
            <Row>
                <Col sm='12'>
                    <Button block color="success" >
                        <span className="font-size-l">Create New Student</span>
                    </Button>
                </Col>
            </Row>
        </Container>

        <Container>
            {students.map(student => renderStudent(student))}


        </Container>
</div>
    )
}export {ManageStudents}