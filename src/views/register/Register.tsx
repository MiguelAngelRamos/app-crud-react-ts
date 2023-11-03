import { useFormik } from 'formik';
import { useState } from 'react';
import axios from 'axios';

const Register: React.FC = () => {

  const [error, setError] = useState<string | null>(null);
  
  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
      confirmPassword: '',
      role: '',
      image: null
     
    },
    onSubmit: async values => {
      //* Verificar que las password sean iguales
      if(values.password !== values.confirmPassword) {
        setError("Las passwords no coinciden");
        return;
      }
      //* Crear el objeto FormData para enviar los datos del formulario
      const formData = new FormData();
      //* shift + alt + flecha hacia abajo (del teclado)
      formData.append('username', values.username);
      formData.append('password', values.password);
      formData.append('role', values.role);

      if(values.image) {
        formData.append('image', values.image);
      }
      
      try {
        await axios.post('http://localhost:3000/users/register', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });

      } catch (error) {
        if(axios.isAxiosError(error)) {
          setError(error.response?.data?.error);
        } else {
          setError('Unexpected error');
        }
      }
    }
  });

  //* Manejador para cuando se seleccione un archivo
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if(event.currentTarget.files) {
      formik.setFieldValue('image', event.currentTarget.files[0]);
    }
  };

  return (
    <div className="container mt-5">
    <div className="row">
      <h1 className="text-center">Register</h1>
     
      <div className="col-6 offset-3">

        {error && <div className="mt-2 mb-4 alert alert-danger">{error}</div>}
        
        <form onSubmit={formik.handleSubmit}>

          <div className="mb-3">
            <label htmlFor="" className="form-label">Username</label>
            <input 
              type="text"
              className="form-control"
              id="username"
              name="username"
              onChange={formik.handleChange}
              value={formik.values.username}
               />
          </div>

          <div className="mb-3">
            <label htmlFor="" className="form-label">Rol</label>
            <input 
              type="text"
              className="form-control"
              id="role"
              name="role"
              onChange={formik.handleChange}
              value={formik.values.role}
               />
          </div>

          <div className="mb-3" >
            <label htmlFor="" className="form-label">Password</label>
            <input 
              type="password"
              className="form-control"
              id="password"
              name="password"
              onChange={formik.handleChange}
              value={formik.values.password}
            />
          </div>

          <div className="mb-3" >
            <label htmlFor="" className="form-label">Repeat Password</label>
            <input 
              type="password"
              className="form-control"
              id="confirmPassword"
              name="confirmPassword"
              onChange={formik.handleChange}
              value={formik.values.confirmPassword}
            />
          </div>

          <div className="mb-3" >
            <label htmlFor="" className="form-label">Imagen</label>
            <input 
              type="file"
              className="form-control"
              name="image"
              onChange={handleFileChange}
              
            />
          </div>

          <div className="d-grid gap-2">
            <button className="btn btn-primary" type="submit">Register</button>
            
          </div>
        </form>
      </div>
    </div>
  </div>
  )
}

export default Register