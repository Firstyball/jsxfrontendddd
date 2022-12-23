import React, {useState} from 'react'
import {Button, ButtonGroup, Col, Form, FormGroup, Input, Label, Navbar, NavbarBrand, Row} from "reactstrap";
import { IoSchoolOutline} from "react-icons/io5";
import 'bootstrap/dist/css/bootstrap.min.css';
import {useNavigate} from "react-router-dom";
import client from "../api/student.js";

export const StudentForm = ({data, handleShow}) => {
    console.log(`StudentForm ${JSON.stringify(data)}`);
    function refreshPage() {
        window.location.reload(false);
    }

    const navigate = useNavigate();

    function returnToStudents() {
        navigate("/students")
    }

    const handleClose = () => setShow(!show);

    const [creation, setCreation] = useState({
        id: data.id,
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
        console.log(creation)
    }

    async function handle(e) {
        e.preventDefault();
        client.put('/update', creation).then(res => {console.log(res)})

    }
    return(
        <Form onSubmit={handle}>
            <FormGroup>
                <Label for="firstName">
                    Nombre
                </Label>
                <Input
                    id="firstName"
                    name="firstName"
                    placeholder={data.firstName}
                    required
                    onChange={handleChange}
                />
            </FormGroup>

            <FormGroup>
                <Label for="lastName">
                    Apellido
                </Label>
                <Input
                    id="lastName"
                    name="lastName"
                    placeholder={data.lastName}
                    required
                    onChange={handleChange}
                />
            </FormGroup>

            <FormGroup>
                <Label for="age">
                    Edad
                </Label>
                <Input
                    id="age"
                    name="age"
                    placeholder={data.age}
                    type="number"
                    required
                    onChange={handleChange}
                />
            </FormGroup>

            <FormGroup>
                <Label for="teacher">
                    Profesor
                </Label>
                <Input
                    id="teacher"
                    name="teacher"
                    placeholder={data.teacher}
                    required
                    onChange={handleChange}
                />
            </FormGroup>
            <ButtonGroup className="my-2 form-button-group">
                <Button color="danger"  onClick={handleShow}>
                    Cancelar
                </Button>
                <Button color="primary" type="submit" onClick={handleShow}>
                    Modificar Estudiante
                </Button>
            </ButtonGroup>

        </Form>
    )
}