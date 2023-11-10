// import './App.css'
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./views/login/Login";
import Register from "./views/register/Register";
import Students from "./views/students/Students";
import { AuthProvider } from "./contexts/AuthContext";
import PrivateRouter from "./components/guards/PrivateRouter";
import StudentForm from "./components/student-form/StudentForm";

function App() {
//* npm run dev
  return (

    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate replace to="/login"/>}></Route>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/students" element={<PrivateRouter element={<Students/>}/>}/>
          <Route path="/edit-student/:id" element={<PrivateRouter element={<StudentForm/>}/>}/>
          <Route path="/create-student" element={<PrivateRouter element={<StudentForm/>}/>}/>
        </Routes>
      </Router>
    </AuthProvider>

  

  )
}

export default App

/* Microfrontend*/