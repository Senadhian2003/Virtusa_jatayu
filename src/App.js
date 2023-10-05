import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./Components/Homepage/homepage";
import Login from "./Components/Authenticate/Login"
import Signup from "./Components/Authenticate/Signup"
import Admin from "./Components/Admin/Admin";
import Health_insure from "./Components/Homepage/health_insurance";

function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/home" element={<Homepage />} />
                    <Route path="/" element={<Login/>} />
                    <Route path="/signup" element={<Signup/>} />
                    <Route path="/new" element={<Admin/>} />


                </Routes>
            </Router>
        </>
    );
}

export default App;
