import './SchoolApp.css'
import {MenuNav} from "./Components/MenuNav";
import 'bootstrap/dist/css/bootstrap.min.css';
import {HashRouter, Route, Routes} from "react-router-dom";
import {MenuManagement} from "./Components/MenuManagement";
import {ManageStudents} from "./Components/ManageStudents";
import {ManageTeacher} from "./Components/ManageTeacher.jsx";
import {ManageEmployee} from "./Components/ManageEmployee.jsx";

import client from "./api/student.js";
import {useEffect, useState} from 'react';



export const SchoolApp = () => {
    const [students, setStudents] = useState([]);
    const [teachers, setTeachers] = useState([]);

    useEffect(() => {
        client.get('/list').then((response) => {
            setStudents(response.data);
         });
    }, []);


    useEffect(() => {
        client.get('/profesores/list').then((response) => {
            setTeachers(response.data);
         });
    }, []);


    const [show, setShow] = useState(false);

    return(
    <>
        <HashRouter>
            <MenuNav/>
                <MenuManagement students={students} teachers={teachers}/>

                <div className="schoolapp-body">
                    <Routes>
                        <Route path="/students" element={<ManageStudents students={students}/>}/>
                        <Route path="/creation" element={<ManageTeacher teachers={teachers}/>}/>
                        <Route path="/click" element={<ManageEmployee/>}/>
                    </Routes>
                </div>

        </HashRouter>
    </>
    )
}