import { Navigate, Outlet } from 'react-router';
const useAuth = () => {
  if (localStorage.getItem('isLoggedIn') === false) return false;
};
const ProtectedRoutes = () => {
  const isAuth = useAuth();
  return isAuth ? <Outlet /> : <Navigate to="/Login" />;
};

export default ProtectedRoutes;
