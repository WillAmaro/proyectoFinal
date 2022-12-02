import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Navigate, Outlet, Link } from "react-router-dom";


const MainLayout = () => {
  const { isAuth, logout } = useContext(AuthContext);

  if (!isAuth()) return <Navigate to="/login" />;

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo03"
            aria-controls="navbarTogglerDemo03"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
              <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/"
                >
                  Inicio
                </Link>
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/perfil"
                >
                  Editar Perfil
                </Link>
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/todoapp"
                >
                  Reservar cita
                </Link>

                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/cites"
                >
                  Reservar cita2
                </Link>
              </li>
              <li className="nav-item">
                <a
                  href=""
                  className="nav-link active text-danger"
                  onClick={logout}
                >
                  Cerrar sesión
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Outlet />
    </div>
  );
};

export default MainLayout;