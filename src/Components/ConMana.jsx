import React from 'react'
import {Button, Card, CardBody, CardFooter, CardText, CardTitle, Col, Container, Navbar, NavbarBrand, Row } from "reactstrap";
import {
    IoSchoolOutline,
    IoMan,
    IoSettings,
    IoWomanOutline
} from "react-icons/io5";
import 'bootstrap/dist/css/bootstrap.min.css';

function letras(estudi, index, any){
    console.log(estudi);
    console.log(index);
    console.log(any);



}

function ConMana(props) {

    console.log(props.student)

    const estudia = [props];



    const renderList = estudia.map(
        (element,index ,any ) => letras(element, index, any))



    return(
      <div>
          {renderList}
      </div>
    )
}export {ConMana}


