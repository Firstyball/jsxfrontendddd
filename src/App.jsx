import './App.css'
import {MenuNav} from "./Components/MenuNav";
import 'bootstrap/dist/css/bootstrap.min.css';
import {HashRouter, Route, Routes} from "react-router-dom";
import Nav from "./Components/Nav.jsx";
import {MenuManagement} from "./Components/MenuManagement";
import {ManageStudents} from "./Components/ManageStudents";

function App() {
    return(
    <div>
        <HashRouter>
            <MenuNav/>
            <MenuManagement/>
            <Routes>
                <Route path="/students" element={<ManageStudents/>}/>
            </Routes>
        </HashRouter>

    </div>
    )
}

export default App
