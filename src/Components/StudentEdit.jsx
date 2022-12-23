import React, {useState} from 'react'
import {Button, ButtonGroup, Col, Form, FormGroup, Input, Label, Navbar, NavbarBrand, Row} from "reactstrap";
import { IoSchoolOutline} from "react-icons/io5";
import 'bootstrap/dist/css/bootstrap.min.css';
import {useNavigate} from "react-router-dom";
import client from "../api/student.js";

function StudentEdit(studentId) {
    function refreshPage() {
        window.location.reload(false);
    }

    const navigate = useNavigate();

    function returnToStudents() {
        navigate("/students")
    }


    const [creation, setCreation] = useState({
        studentId,
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
                    placeholder="Nombre"
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
                    placeholder="Apellido"
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
                    placeholder="Edad"
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
                    placeholder="Profesor"
                    required
                    onChange={handleChange}
               

                />
            </FormGroup>
            <ButtonGroup className="my-2 form-button-group">
                <Button color="danger"  onClick={refreshPage}>
                    Cancelar
                </Button>
                <Button color="primary" type="submit">
                    Crear Estudiante
                </Button>
            </ButtonGroup>

        </Form>
    )
}export {StudentEdit}