import React from "react";
import musicCenterLogo from "../../assets/logos/logo.png";
import CartWidget from "../CartWidget/CartWidget";
import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [pageTitle, setPageTitle] = useState("Inicio");

  useEffect(() => {
    document.title = `${pageTitle} | Music Center`;
  }, [pageTitle]);

  const handlePageTitle = (pageTitle) => {
    setPageTitle(pageTitle);
  };

  return (
    <nav className="navbar navbar-custom navbar-expand-md">
      <div className="container-fluid">
        <Link
          to="/"
          onClick={() => handlePageTitle("Inicio")}
          className="navbar-brand"
        >
          <img src={musicCenterLogo} alt="music-center-logo" />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="offcanvas offcanvas-end"
          tabIndex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header">
            <img src={musicCenterLogo} alt="music-center-logo" />
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-start flex-grow-1 pe-3">
              <li className="nav-item">
                <NavLink
                  to="/"
                  onClick={() => handlePageTitle("Inicio")}
                  className="nav-link"
                >
                  Inicio
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/category/1"
                  onClick={() => handlePageTitle("Guitarras")}
                  className="nav-link"
                >
                  Guitarras
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/category/2"
                  onClick={() => handlePageTitle("Amplificadores")}
                  className="nav-link"
                >
                  Amplificadores
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/category/3"
                  onClick={() => handlePageTitle("Pedales")}
                  className="nav-link"
                >
                  Pedales
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/category/4"
                  onClick={() => handlePageTitle("Accesorios")}
                  className="nav-link"
                >
                  Accesorios
                </NavLink>
              </li>
            </ul>
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li className="nav-item">
                <CartWidget />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
