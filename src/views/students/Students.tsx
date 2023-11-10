import { useState, useEffect } from "react";
import { IStudent } from "../../interfaces/IStudent";
import { Link } from 'react-router-dom';
import axios from "axios";

const Students: React.FC = () => {

  const [students, setStudents] = useState<IStudent[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {

    const token = localStorage.getItem('authToken');

    const headers = {
      Authorization: `Bearer ${token}`,
    };

    axios.get("http://localhost:3000/students", { headers })
      .then(response => {
        setStudents(response.data);
      }).catch(err => {
        if (axios.isAxiosError(err)) {
          setError(err.response?.data?.error || 'Error inesperado')
        }
      })
  }, []);

  const deleteStudent = async (studentId: number) => {
    //* localhost:3000/students/68
   try {
    //* recuperar el token
    const token = localStorage.getItem('authToken');
    const headers = {
      Authorization: `Bearer ${token}`
    }

    //* Realizar la solicitud de Eliminación con el token de autenticación
    const response = await axios.delete(`http://localhost:3000/students/${studentId}`, {headers});
    if(response.status === 204) {
      setStudents(students.filter(student => student.id !== studentId))
    }
   } catch (error) {
    console.log('Error al eliminar estudiante', error);
   }
  }

  if (error) return <p>{error}</p>
  return (

    <div className="container mt-5">
      <h2 className="mb-2">Listado de Estudiantes</h2>
      <Link to="/create-student" className="btn btn-success mb-3">Crear Nuevo Estudiante</Link>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Age</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody className="table-group-divider">
          {students.map(student => (
            <tr key={student.id}>
              <td>{student.name}</td>
              <td>{student.age}</td>
              <td>
                <Link to={`/edit-student/${student.id}`}>
                  <i className="text-success fa-solid fa-pen-to-square mx-3"></i>
                </Link>
                <i className="text-danger fa-solid fa-trash" onClick={()=> deleteStudent(student.id)}></i>
              </td>
           </tr>
          ))}
     
        </tbody>
      </table>
    </div>

  )

}

export default Students;