import {useState} from 'react';
import {Button} from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import {GridManager} from "./GridManager";
import '../SchoolApp.css'
import {ModalComponent} from "./ModalComponent.jsx"
import { ToastComponent } from './ToastComponent';

export const ManageStudents = ({students}) => {

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
                toggleShowA(true);
                refreshPage();
              break;
            default:
                console.error(`Wrong type`);
          }
    };


    const [showA, setShowA] = useState(false);
    const toggleShowA = () => setShowA(!showA);

    return (
        <>
            <ToastComponent toggleShowA={toggleShowA} showA={showA} variant="success" title="Satisfactorio!" message="Creación de estudiante exitosa"></ToastComponent>
            <ModalComponent type="student" show={show} handleShow={handleShow} title="Crear Nuevo Estudiante"/>
            <div className="creation-button">
                <Button color="info" onClick={() => handleShow("create")} className="button-font">
                    <span className="font-size-l">Agregar Nuevo Estudiante</span>
                </Button>
            </div>

            <div className="grid-card-group">
                {
                    students.map((student) =>
                        <GridManager key={student.id} data={student} type="student"/>
                    )
                }
            </div>



      </>
    );

}