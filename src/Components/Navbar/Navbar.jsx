import React from "react";
import musicCenterLogo from "../../assets/logos/logo.png";
import CartWidget from "../CartWidget/CartWidget";
import { useState, useEffect } from "react";

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
        <a
          onClick={() => setPageTitle("Inicio")}
          className="navbar-brand"
          href="index.html"
        >
          <img src={musicCenterLogo} alt="music-center-logo" />
        </a>
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
                <a
                  onClick={() => setPageTitle("Inicio")}
                  className="nav-link"
                  aria-current="page"
                  href="index.html"
                >
                  Inicio
                </a>
              </li>
              <li className="nav-item">
                <a
                  onClick={() => setPageTitle("Guitarras")}
                  className="nav-link"
                  href="#"
                >
                  Guitarras
                </a>
              </li>
              <li className="nav-item">
                <a
                  onClick={() => setPageTitle("Amplificadores")}
                  className="nav-link"
                  href="#"
                >
                  Amplificadores
                </a>
              </li>
              <li className="nav-item">
                <a
                  onClick={() => setPageTitle("Pedales")}
                  className="nav-link"
                  href="#"
                >
                  Pedales
                </a>
              </li>
              <li className="nav-item">
                <a
                  onClick={() => setPageTitle("Accesorios")}
                  className="nav-link"
                  href="#"
                >
                  Accesorios
                </a>
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
