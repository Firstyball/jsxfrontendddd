import {useState} from 'react';
import {Button} from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../SchoolApp.css'
import {ModalComponent} from "./ModalComponent.jsx"

export const ManageEmployee = ({students}) => {

    const [show, setShow] = useState(false);
    const handleShow = () => {setShow(!show);};

    return (
        <>
            <div className="creation-button">
                <Button color="info" onClick={handleShow} className="button-font">
                    <span className="font-size-l">Agregar Nuevo Empleado</span>
                </Button>
            </div>

            <ModalComponent show={show} handleShow={handleShow} title="Crear Nuevo Empleado"/>

      </>
    );

}