// import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./views/login/Login";
import Register from "./views/register/Register";
import Students from "./views/students/Students";

function App() {
//* npm run dev
  return (
    <Router>
      <Routes>
        <Route path="/students" element={<Students/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
      </Routes>
    </Router>
  )
}

export default App

/* Microfrontend*/