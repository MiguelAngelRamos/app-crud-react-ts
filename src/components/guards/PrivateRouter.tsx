import { useAuth } from "../../contexts/AuthContext";
import { Navigate } from 'react-router-dom';
import Navbar from "../navbar/Navbar";

//* Definir las propiedades que espera recibir el componente PrivateRouter

type PrivateRouteProps = {
  element: React.ReactElement; //* Esperamos un elemento de React como propiedad
}
const PrivateRouter: React.FC<PrivateRouteProps> = ({ element }) => {
  const { isAuthenticated } = useAuth(); //* usamos el hook useAuth para obtener el estado autenticación

  return isAuthenticated ? (
    <>
      <Navbar/>
      {element} 
    </>
   ):(
    <Navigate to="/login" replace />
   )
}

export default PrivateRouter;

//* Context

