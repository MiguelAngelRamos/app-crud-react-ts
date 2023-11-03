
const Register = () => {
  return (
    <div className="container mt-5">
    <div className="row">
      <h1 className="text-center">Register</h1>
      <div className="col-6 offset-3">
        <form>
          <div className="mb-3">
            <label htmlFor="" className="form-label">Username</label>
            <input 
              type="text"
              className="form-control"
               />
          </div>

          <div className="mb-3">
            <label htmlFor="" className="form-label">Rol</label>
            <input 
              type="text"
              className="form-control"
               />
          </div>

          <div className="mb-3" >
            <label htmlFor="" className="form-label">Contraseña</label>
            <input 
              type="password"
              className="form-control"
            />
          </div>

          <div className="mb-3" >
            <label htmlFor="" className="form-label">Confirmar Contraseña</label>
            <input 
              type="password"
              className="form-control"
            />
          </div>

          <div className="mb-3" >
            <label htmlFor="" className="form-label">Imagen</label>
            <input 
              type="file"
              className="form-control"
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