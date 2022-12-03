import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Navigate, Outlet, Link } from "react-router-dom";


const MainLayout = () => {
  const { isAuth, logout } = useContext(AuthContext);

  if (!isAuth()) return <Navigate to="/" />;

  return (
    <div>

      <Outlet />
    </div>
  );
};

export default MainLayout;