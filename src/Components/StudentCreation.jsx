import React, {useState} from 'react';
import {Button, Col, Form, Row} from 'reactstrap';
import client from "../api/student.js";
import {useNavigate} from "react-router-dom";


function StudentCreation(args) {

    function refreshPage() {
        window.location.reload(false);
    }

    const navigate = useNavigate();

    function returnToStudents() {
        navigate("/students")
    }


    const [creation, setCreation] = useState({
        firstName: "",
        lastName: "",
        age: 0,
        teacher: ""
    })

    function handleChange({target}) {
        setCreation({
            ...creation,
            [target.name]: target.value
        })

    }

    async function handle(e) {
        e.preventDefault();
        client.post('/create', creation).then(refreshPage)

    }

    return (
        <Form onSubmit={handle}>
            <Row>
                <Col>
                    <label>FirstName</label>
                </Col>
                <Col>
                    <input id="firstName" name="firstName" type="text" required onChange={handleChange}/>
                </Col>
            </Row>
            <Row>
                <Col>
                    <label>LastName</label>
                </Col>
                <Col>
                    <input id="lastName" name="lastName" type="text" required onChange={handleChange}/>
                </Col>
            </Row>
            <Row>
                <Col>
                    <label>Age</label>
                </Col>
                <Col>
                    <input id="age" name="age" type="number" required onChange={handleChange}/>
                </Col>
            </Row>
            <Row>
                <Col>
                    <label>Teacher</label>
                </Col>
                <Col>
                    <input id="teacher" name="teacher" type="text" required onChange={handleChange}/>
                </Col>
            </Row>
            <Button color="primary">
                Create New Student
            </Button>
            <Button color="danger" className="m-lg-2" onClick={refreshPage}>
                Close
            </Button>
        </Form>
    );
}

export {StudentCreation}

