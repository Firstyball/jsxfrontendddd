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
            <div className="creation-button fs-1 d-flex align-items-center justify-content-center">
               <h5 className="justify-content-center">NO TIENES PERMISOS PARA GESTIONAR ESTA INFORMACION</h5>
            </div>

            <ModalComponent show={show} handleShow={handleShow} title="Crear Nuevo Empleado"/>

      </>
    );

}