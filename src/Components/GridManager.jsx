import {Button,Card,CardBody,CardTitle, CardText,Modal,ModalHeader, ModalBody} from "reactstrap";
import {IoMan} from "react-icons/io5";
import 'bootstrap/dist/css/bootstrap.min.css';
import client from "../api/student.js";
import '../SchoolApp.css';
import {useState} from "react";
import {ModalComponent} from "./ModalComponent.jsx"

//Renderiza la información de un estudiante
export const GridManager = ({data}) => {

    function refreshPage() {
        window.location.reload(false);
    }
    function deleteStudents(id) {
        client.delete(`/delete/${id}`).then(refreshPage)
    }

    const [show, setShow] = useState(false);
    const handleShow = () => {console.log('me ejecuto papi'); setShow(!show);};


    return(
    <>
        <Card outline className="grid-card-container">
            <CardBody>
                <CardTitle tag="h5">
                    <IoMan className="font-size-xl"/> {`${data.firstName} ${data.lastName}`}
                </CardTitle>
                <div className="grid-card-text">
                    <CardText>
                        <span className="fw-bold">Clase:  </span>
                        <span> Second Year</span>
                    </CardText>
                    <CardText>
                        <span className="fw-bold">Edad: </span>
                        <span> {data.age} </span>
                    </CardText>
                    <CardText>
                        <span className="fw-bold"> Profesor:</span>
                        <span> {data.teacher} </span>
                    </CardText>
                </div>
                <div className="grid-button-container">
                    <Button block outline color="primary" className="grid-button" onClick={() => {handleShow();}}>
                        Modificar
                    </Button>
                    <Button block outline color="danger" className="grid-button" onClick={() => deleteStudents(data.id)}>
                        Eliminar
                    </Button>
                </div>
            </CardBody>
        </Card>

        <ModalComponent show={show} data={data} handleShow={handleShow}/>

    </>
    );
}

