import React from 'react';

import axios from 'axios';

import {Button, Card, CardBody, CardFooter, CardText, CardTitle, Col, Container, Navbar, NavbarBrand, Row } from "reactstrap";
import {
    IoSchoolOutline,
    IoMan,
    IoSettings,
    IoWomanOutline
} from "react-icons/io5";
import 'bootstrap/dist/css/bootstrap.min.css';



export default class PostList extends React.Component {
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

    render() {
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

        return (
            <ul>
                { this.state.students.map(post => renderStudent(student))}
                { this.state.students.map(post => <li>{post.title}</li>)}
                {students.map(student => renderStudent(student))}
            </ul>
        )
    }
}