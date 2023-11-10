import { useState, useEffect } from "react";
import { IStudent } from "../../interfaces/IStudent";
import axios from "axios";

const Students: React.FC = () => {

  const [students, setStudents] = useState<IStudent[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {

    const token = localStorage.getItem('authToken');

    const headers = {
      Authorization: `Bearer ${token}`,
    };

    axios.get(`http://localhost:3000/students`, { headers })
      .then(response => {
        setStudents(response.data);
      }).catch(err => {
        if (axios.isAxiosError(err)) {
          setError(err.response?.data?.error || 'Error inesperado')
        }
      })
  }, []);

  if (error) return <p>{error}</p>
  return (

    <div className="container mt-5">
      <h2 className="mb-2">Listado de Estudiantes</h2>
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
            <tr>
              <td>{student.name}</td>
              <td>{student.age}</td>
              <td>Eliminar - Update</td>
           </tr>
          ))}
     
        </tbody>
      </table>
    </div>

  )


}

export default Students;