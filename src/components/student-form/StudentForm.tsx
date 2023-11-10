import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { IStudent } from "../../interfaces/IStudent";

const StudentForm = () => {
  const [student, setStudent] = useState<IStudent>();
  const { id } = useParams();

  const isEditMode = id !== undefined;

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


  //* otro modo mas 
  return (
    <div className="container mt-5">
      <h2>Editar Estudiante</h2>
      <form >
        <div className="mb-3">
          <label htmlFor="">Nombre:</label>
          <input 
            type="text" 
            className="form-control"
            value={student?.name}
            />
        </div>

        <div className="mb-3">
          <label htmlFor="">Nombre:</label>
          <input 
            type="number" 
            className="form-control"
            value={student?.age}
            />
        </div>
        <button type="submit" className="btn btn-primary">Guardar</button>
      </form>
    </div>
  )
}

export default StudentForm