import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Logo from "../../styles/logo.png";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <a className="navbar-brand" href="/">
          <img
            src={Logo}
            alt="Logo de Zone2Rire"
            width="50"
            height="50"
            className="d-inline-block align-text-top"
          />
        </a>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <ul className="nav mx-auto justify-content-center">
            <li className="nav-item">
              <Link to="/" className="nav-link text-dark">
                <i className="fa-solid fa-house me-2"></i>
                Accueil
              </Link>
            </li>
            <li className="nav-item">
              <a href="/" className="nav-link text-dark">
                <i className="fa-solid fa-face-grin-tongue-wink fa-spin me-2"></i>
                Blague
              </a>
            </li>
            <li className="nav-item">
              <a href="/" className="nav-link text-dark">
                <i className="fa-solid fa-video fa-fade me-2"></i>
                Video
              </a>
            </li>
            <li className="nav-item">
              <a href="/" className="nav-link text-dark">
                <i className="fa-solid fa-music fa-flip me-2"></i>
                Audio
              </a>
            </li>
            <li className="nav-item">
              <a href="/" className="nav-link text-dark">
                <i className="fa-solid fa-file-circle-plus fa-shake me-2"></i>
                Proposer un contenu
              </a>
            </li>
          </ul>

          <ul className="nav justify-content-center">
            <li className="nav-item">
              <a href="/" className="nav-link text-dark">
                <i className="fa-solid fa-user-circle me-2"></i>
                Mon compte
              </a>
            </li>
            <li className="nav-item">
              <a href="/" className="nav-link text-dark">
                <i className="fa-solid fa-sign-out-alt me-2"></i>
                Déconnexion
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
