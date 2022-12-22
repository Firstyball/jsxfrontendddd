import React from 'react'
import  {Navbar, NavbarBrand } from "reactstrap";
import { IoSchoolOutline} from "react-icons/io5";
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