import './SchoolApp.css'
import {MenuNav} from "./Components/MenuNav";
import 'bootstrap/dist/css/bootstrap.min.css';
import {HashRouter, Route, Routes} from "react-router-dom";
import {MenuManagement} from "./Components/MenuManagement";
import {ManageStudents} from "./Components/ManageStudents";
import {TeacherCreation} from "./Components/TeacherCreation.jsx";
import client from "./api/student.js";
import {useEffect, useState} from 'react';



export const SchoolApp = () => {
    console.log('School App init');
    const [students, setStudents] = useState([]);

    useEffect(() => {
        client.get('/list').then((response) => {
            setStudents(response.data);
            console.log(`student in app : ${ JSON.stringify(response)}`);
         });
    }, []);

    return(
    <>
        <HashRouter>
            <MenuNav/>


                <MenuManagement students={students}/>


                <div className="schoolapp-body">

                    <Routes>
                        <Route path="/students" element={<ManageStudents students={students}/>}/>
                        <Route path="/creation" element={<TeacherCreation/>}/>
                        <Route path="/click" element={<click/>}/>
                    </Routes>
                </div>

        </HashRouter>
    </>
    )
}