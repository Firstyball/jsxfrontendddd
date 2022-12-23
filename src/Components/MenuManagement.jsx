import {Button, Card, CardText, CardTitle } from "reactstrap";
import {IoSchoolOutline, IoMan, IoSettings } from "react-icons/io5";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from "react-router-dom";
import '../SchoolApp.css'

export const MenuManagement = ({students}) => {


    return(
        <>
            <div className="grid-card-group menu-background">
                <Card className="grid-card-container menu-card">
                    <CardTitle tag="h5">
                        <IoMan className="font-size-xl"/> {students.length} Students
                    </CardTitle>
                    <CardText>
                        With supporting text below as a natural lead-in to additional
                        content.
                    </CardText>
                    <Link to="/students"><Button outline color="info">Gestionar estudiantes</Button></Link>

                </Card>
                <Card className="grid-card-container menu-card">
                    <CardTitle tag="h5">
                        <IoSchoolOutline className="font-size-xl"/> 20 Profesores
                    </CardTitle>
                    <CardText>
                        With supporting text below as a natural lead-in to additional
                        content.
                    </CardText>
                    <Link to="/creation"><Button outline color="info">Gestionar Profesores</Button></Link>
                </Card>
                <Card className="grid-card-container menu-card">
                    <CardTitle tag="h5">
                        <IoSettings className="font-size-xl"/> 13 Empleados
                    </CardTitle>
                    <CardText>
                        With supporting text below as a natural lead-in to additional
                        content.
                    </CardText>
                    <Link to="/click"><Button outline color="info">Gestionar Empleados</Button></Link>
                </Card>
            </div>
        </>
    )
}