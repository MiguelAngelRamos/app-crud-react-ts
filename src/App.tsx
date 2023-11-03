// import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./views/login/Login";
import Register from "./views/register/Register";

function App() {
//* npm run dev
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
      </Routes>
    </Router>
  )
}

export default App

/* Microfrontend*/