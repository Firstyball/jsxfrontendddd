import './App.css'
import {MenuNav} from "./Components/MenuNav";
import 'bootstrap/dist/css/bootstrap.min.css';
import {HashRouter, Route, Routes} from "react-router-dom";
import {MenuManagement} from "./Components/MenuManagement";
import {ManageStudents} from "./Components/ManageStudents";
import {TeacherCreation} from "./Components/TeacherCreation.jsx";



function App() {
    return(
    <div>
        <HashRouter>
            <MenuNav/>
            <MenuManagement/>

            <Routes>
                <Route path="/students" element={<ManageStudents/>}/>

                <Route path="/creation" element={<TeacherCreation/>}/>

                <Route path="/click" element={<click/>}/>
            </Routes>
        </HashRouter>

    </div>
    )
}

export default App
