import React from "react";
import musicCenterLogo from "../../assets/logos/logo.png";

const Navbar = () => {
  return (
    <nav class="navbar navbar-custom navbar-expand-md">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <img src={musicCenterLogo} alt="music-center-logo" />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="offcanvas offcanvas-end"
          tabindex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div class="offcanvas-header">
            <img src={musicCenterLogo} alt="music-center-logo" />
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div class="offcanvas-body">
            <ul class="navbar-nav justify-content-start flex-grow-1 pe-3">
              <li class="nav-item">
                <a class="nav-link" aria-current="page" href="index.html">
                  Inicio
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Guitarras
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Amplificadores
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Pedales
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Accesorios
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
