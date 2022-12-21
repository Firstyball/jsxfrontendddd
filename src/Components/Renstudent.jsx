import React, {useEffect, useState} from 'react';

import axios from 'axios';

import {Button, Card, CardBody, CardFooter, CardText, CardTitle, Col, Container, Navbar, NavbarBrand, Row } from "reactstrap";
import {
    IoSchoolOutline,
    IoMan,
    IoSettings,
    IoWomanOutline
} from "react-icons/io5";
import 'bootstrap/dist/css/bootstrap.min.css';
import {ConMana} from "./ConMana";

function tutu(tutu) {
    console.log(tutu);
}


 function Renstudent() {

    const [student, students] = useState([]);

    const fetch = () => {
        axios
            .get("http://localhost:7070/list")
            .then((response) => students(response.data));
    };


    useEffect(() => {
        fetch();
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

          <ConMana student={student}/>
      </div>
    )
}export {Renstudent}