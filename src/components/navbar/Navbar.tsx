import { jwtDecode } from "jwt-decode";
import { useAuth } from "../../contexts/AuthContext"
import { IUser } from "../../interfaces/IUser";
import { useNavigate } from "react-router-dom";

const Navbar:React.FC = () => {

  const {isAuthenticated, logout} = useAuth();

  const token = localStorage.getItem('authToken');

  let user: IUser | null = null;

  if(token) {
    user = jwtDecode<IUser>(token);
  }
  
  //* Tomar la imagen
  const profileImageUrl = user ? `http://localhost:3000${user.imgUrl}`: '';

  const navigate = useNavigate();
  const handleLogout = () => {
    logout();
    // window.location.href = '/login'; //* se puede utilizar codigo js dentro de ts
    navigate("/")
  }
 
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">App Students</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarNav">
        {isAuthenticated && user && (
          <ul className="navbar-nav ms-auto align-items-center">

            <li className="nav-item ">
              <a className="nav-link d-flex align-items-center" aria-current="page" href="#">
                <img
                  src={profileImageUrl}
                  alt="profile image"
                  style={{width: '40px', height: '40px', borderRadius: '50%', marginRight: '10px'}}
                />

                <span className="text-white">
                  Nombre: {user.username} - Role: {user.role}
                </span>
              </a>
            </li>

            <li className="nav-item">
              <button className="btn btn-outline-danger" onClick={handleLogout}>Cerrar Sesión</button>
            </li>
        </ul>
        )}
      </div>

    </div>
  </nav>
  )
}

export default Navbar