import { Link } from 'react-router-dom';

const Login: React.FC = () => {

  return (
    <div className="container mt-5">
      <div className="row">
        <h1 className="text-center"> Login</h1>
        <div className="col-6 offset-3">
          <form>
            <div className="mb-3">
              <label htmlFor="" className="form-label">Username</label>
              <input 
                type="text"
                className="form-control"
                 />
            </div>

            <div className="mb-3" >
              <label htmlFor="" className="form-label">Password</label>
              <input 
                type="password"
                className="form-control"
              />
            </div>

            <div className="d-grid gap-2">
              <button className="btn btn-primary" type="button">Login</button>
              
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