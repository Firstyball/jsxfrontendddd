import React from 'react'
import {Button, Card, CardBody, CardFooter, CardText, CardTitle, Col, Container, Navbar, NavbarBrand, Row } from "reactstrap";
import {
    IoSchoolOutline,
    IoMan,
    IoSettings,
    IoWomanOutline
} from "react-icons/io5";
import 'bootstrap/dist/css/bootstrap.min.css';

function MenuNav() {
    return(
    <div>
        <Navbar color="dark" light mb='2'>
            <NavbarBrand className="text-white">
                <IoSchoolOutline className="font-size-m"/>
                <span className="font-size-m ms-3">School Manager Application</span>
            </NavbarBrand>
        </Navbar>
    </div>
    )
}export {MenuNav}