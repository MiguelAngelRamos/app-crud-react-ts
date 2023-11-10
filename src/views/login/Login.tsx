import { Link, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import axios from 'axios';
import { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';

const Login: React.FC = () => {

  const navigate = useNavigate();
  const [error, setError] = useState<string | null>(null);
  const { login } = useAuth();

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    onSubmit: async values => {
      try {
        await login(values.username, values.password);
        navigate('/students');
      } catch (error) {
        if(axios.isAxiosError(error)) {
          setError(error.response?.data?.error);
        } else {
          setError('Unexpected error');
        }
      }
    }
  });
  return (
    <div className="container mt-5">
      <div className="row">
        <h1 className="text-center"> Login</h1>
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

            <div className="d-grid gap-2">
              <button className="btn btn-primary" type="submit">Login</button>
              
            </div>
          </form>

          <p className="mt-3">
            ¿No tienes cuenta? <Link to="/register">Regístrate aquí</Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Login;