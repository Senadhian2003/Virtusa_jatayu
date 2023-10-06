import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./Components/Homepage/homepage";
import Login from "./Components/Authenticate/Login"
import Signup from "./Components/Authenticate/Signup"
import Admin from "./Components/Admin/Admin";
import FormDetail1 from "./Components/FormDetail/FormDetail1";
import FormDetail2 from "./Components/FormDetail/FormDetail2";
import FormDetail3 from "./Components/FormDetail/FormDetail3";

function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/home" element={<Homepage />} />
                    <Route path="/" element={<Login/>} />
                    <Route path="/signup" element={<Signup/>} />
                    <Route path="/new" element={<Admin/>} />
                    <Route path="/form1" element={<FormDetail1/>} />
                    <Route path="/form2" element={<FormDetail2/>} />
                    <Route path="/form3" element={<FormDetail3/>} />
                </Routes>
            </Router>
        </>
    );
}

export default App;
