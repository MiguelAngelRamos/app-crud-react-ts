import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
// import { IStudent } from "../../interfaces/IStudent";

const StudentForm = () => {
  const [student, setStudent] = useState({name: '', age: 0});
  const { id } = useParams();
  const navigate = useNavigate();

  const isEditMode:boolean = id !== undefined;
 
  console.log(student);
  useEffect(() => {
    if(isEditMode) {
      const getStudentData = async () => {
        try {
          const token = localStorage.getItem('authToken');
          const headers = { Authorization: `Bearer ${token}`};

          const response = await axios.get(`http://localhost:3000/students/${id}`, { headers });
          setStudent(response.data);
          
        } catch (error) {
          console.log('Error al cargar los datos del estudiante: ', error);
        }
      };
      getStudentData();
    }
  }, [id, isEditMode])

  const handleSave = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('authToken');
      const headers = { Authorization: `Bearer ${token}`};

      if(isEditMode) {
        await axios.put(`http://localhost:3000/students/${id}`, student, {headers})
      } else {
        await axios.post('http://localhost:3000/students', student, {headers})
      }
      navigate('/students')
    } catch (error) {
      console.error("Error al guardar al estudiante" + error);
    }
   

  }
  //* otro modo mas 
  return (
    <div className="container mt-5">
      <h2>Formulario de Student</h2>
      <form onSubmit={handleSave}>
        <div className="mb-3">
          <label htmlFor="">Nombre:</label>
          <input 
            type="text" 
            className="form-control"
            id="studentName"
            value={student?.name}
            onChange={(e) => setStudent({...student, name: e.target.value})}
            />
        </div>

        <div className="mb-3">
          <label htmlFor="">Edad:</label>
          <input 
            type="number" 
            className="form-control"
            id="studentAge"
            value={student?.age}
            onChange={(e) => setStudent({...student, age: parseInt(e.target.value, 10) || 0 })}
            />
        </div>
        <button type="submit" className="btn btn-primary">Guardar</button>
      </form>

      
    </div>
  )
}

export default StudentForm