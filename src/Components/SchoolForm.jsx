import {useState} from 'react'
import {Button, ButtonGroup, Col, Form, FormGroup, Input, Label} from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import client from "../api/student.js";

export const SchoolForm = ({data, handleShow, type}) => {

    console.log(`Form:  ${data}`);


    const [creation, setCreation] = useState({
        id: data ? data.id : null,
        firstName: data ? data.firstName : " ",
        lastName: data ? data.lastName : " ",
        age: data ? data.age : " ",
        teacher: data ? data.teacher : " "
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
        if(type === "student") {
            client.put('/update', creation).then(res => {
                if(res.status === 200) {
                    handleShow("success");
                }
            })
        }
        else if(type === "teacher") {
            client.put('/profesores/update', creation).then(res => {
                if(res.status === 200) {
                    handleShow("success");
                }
            })
        }

    }

    return(
        <>

        <Form onSubmit={handle}>
            <FormGroup>
                <Label for="firstName">
                    Nombre
                </Label>
                <Input
                    id="firstName"
                    name="firstName"
                    placeholder="Nombre"
                    defaultValue={data ? data.firstName : null}
                    required
                    onChange={handleChange}
                    invalid = {!creation.firstName}

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
                    defaultValue={data ? data.lastName : null}
                    required
                    onChange={handleChange}
                    invalid = {!creation.lastName}
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
                    defaultValue={data ? data.age : null}
                    type="number"
                    required
                    onChange={handleChange}
                    invalid = {!creation.age}

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
                    defaultValue={data ? data.teacher : null}
                    required
                    onChange={handleChange}
                    invalid = {!creation.teacher}

                />
            </FormGroup>
            <ButtonGroup className="my-2 form-button-group">
                <Button color="danger"  onClick={() =>handleShow("cancel")}>
                    Cancelar
                </Button>
                <Button color="primary" type="submit" onClick={() =>handleShow("create")} >
                    Aceptar
                </Button>
            </ButtonGroup>

        </Form>



            </>
    )
}