import {useEffect, useState} from 'react';
import {Button, Row, Col, Container} from 'reactstrap';
import {ModalComponent} from "./ModalComponent.jsx"
import '../SchoolApp.css'
import {GridManager} from "./GridManager";
import {ToastComponent} from "./ToastComponent.jsx";

export const ManageTeacher = ({teachers}) =>{

    const refreshPage = () => {
        window.location.reload(false);
    };

    const [show, setShow] = useState(false);
    const handleShow = (type) => {
        switch (type) {
            case "cancel":
                setShow(!show);
              break;
            case "edit":
                setShow(!show);
                break;
            case "create":
                setShow(!show);
                break;
            case "success":
                setShow(!show);
                refreshPage();
              break;
            default:
                console.error(`Wrong type`);
          }
    };

    const [showA, setShowA] = useState(false);
    const toggleShowA = () => setShowA(!showA);


    return (
        <div>

            <ToastComponent toggleShowA={toggleShowA} showA={showA} variant="success" title="Satisfactorio!" message="Creación de profesor exitosa"></ToastComponent>

            <div className="creation-button">
                <Button color="info" onClick={() => handleShow("create")} className="button-font">
                    <span className="font-size-l">Agregar Nuevo Profesor</span>
                </Button>
            </div>

            <div className="grid-card-group">
                {
                    teachers.map((teacher) =>
                        <GridManager key={teacher.id} data={teacher}/>
                    )
                }
            </div>

            <ModalComponent show={show} handleShow={handleShow} title="Crear Nuevo Profesor"/>

        </div>
    );
}

