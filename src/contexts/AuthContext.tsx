import axios from 'axios';
import { createContext, useContext, ReactNode, useState } from 'react';

//* Definir el tipo de contexto de autenticación.
interface AuthContextType {
  isAuthenticated: boolean; //* Estado que indica si el usuario esta autenticado
  login: (username: string, password: string) => Promise<void>;
  logout: () => void; // función para manejar el cierre de sesión del usuario
}

//* Creación del contexto de autenticación con un valor inicial indefinido
const AuthContext = createContext<AuthContextType | undefined>(undefined);

//* Componente AuthProvider engloba cualquier parte de la aplicación que necesitemos autenticar.

export const AuthProvider:React.FC<{children: ReactNode}> = ({children}) => {
  
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(!!localStorage.getItem('authToken'));

  //* Función para iniciar sesión
  const login = async (username: string, password: string) => {
    const response = await axios.post('http://localhost:3000/users/login', {username, password});
    const token = response.data.token;
    localStorage.setItem('authToken', token);
    setIsAuthenticated(true);
  };

  const logout = () => {
    localStorage.removeItem('authToken');
    setIsAuthenticated(false);
  }

  return (
    <AuthContext.Provider value={{isAuthenticated, login, logout}}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if(context === undefined) {
    throw new Error("error context undefined");
  }
  return context;
}

