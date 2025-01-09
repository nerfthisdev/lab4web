import { Link, useLocation, useNavigate } from "react-router-dom";
import { logout } from "../services/apiService";

export function NavBar() {
  const location = useLocation();
  const navigate = useNavigate();
  if (location.pathname === "/signup" || location.pathname === "/login") {
    return null;
  }

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-expand-lg" data-bs-theme="dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img
            src="src/assets/panicemoji.png"
            width={30}
            height={30}
            className="d-inline-block align-top"
            alt=""
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link className="nav-link" aria-current="page" to="/">
              Home
            </Link>
            <Link className="nav-link" to="/app">
              App
            </Link>
            <Link className="nav-link" to="/about">
              About
            </Link>
            <li className="nav-item">
              <a className="nav-link" onClick={handleLogout} href="#">
                Link
              </a>
            </li>
          </div>
        </div>
      </div>
    </nav>
  );
}
