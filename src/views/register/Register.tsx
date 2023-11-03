import { useFormik } from 'formik';

const Register: React.FC = () => {

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
      confirmPassword: '',
      role: '',
     
    }
  });
  return (
    <div className="container mt-5">
    <div className="row">
      <h1 className="text-center">Register</h1>

      <div className="col-6 offset-3">

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
              
            />
          </div>

          <div className="d-grid gap-2">
            <button className="btn btn-primary" type="button">Login</button>
            
          </div>
        </form>
      </div>
    </div>
  </div>
  )
}

export default Register