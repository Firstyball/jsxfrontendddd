import {useState} from 'react';
import {Button, Form, ButtonGroup, Input, FormGroup, Label } from 'reactstrap';
import client from "../api/student.js";
import {useNavigate} from "react-router-dom";
import student from '../api/student.js';


export const StudentCreation = (args) => {

    function refreshPage() {
        window.location.reload(false);
    }

    const navigate = useNavigate();

    function returnToStudents() {
        navigate("/students")
    }


    const [creation, setCreation] = useState({
        firstName: " ",
        lastName: " ",
        age: 0,
        teacher: " "
    })

    function handleChange({target}) {
        console.log(`target name:  ${target.name} target value: ${target.value} `);
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
                    invalid = {!creation.firstName}
                    valid = {creation.firstName && creation.firstName !== " "}
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
                    invalid = {!creation.lastName}
                    valid = {creation.lastName && creation.lastName !== " "}

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
                    invalid = {!creation.age && creation.age !== 0}
                    valid = {creation.age}

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
                    invalid = {!creation.teacher}
                    valid = {creation.teacher && creation.teacher !== " "}

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
    );
}
