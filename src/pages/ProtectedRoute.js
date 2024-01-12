import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  // Get the JWT token from local storage
  const auth_token =
    localStorage.getItem('NELIREF') ||
    (localStorage.getItem('persist:root') &&
      JSON.parse(JSON.parse(localStorage.getItem('persist:root')).auth)?.token);

  localStorage.removeItem("NELIREF")

  return auth_token ? children : <Navigate to='/login' />;
};

export default ProtectedRoute;
