import React, { useState } from "react";
import logoDark from "../assets/images/logo-dark.png";

const Navbar = () => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  return (
    <nav
      className="navbar navbar-expand-lg fixed-top navbar-white navbar-custom"
      id="navbar"
    >
      <div className="container">
        <a className="navbar-brand text-uppercase" href="#home">
          <img src={logoDark} alt="Kasy Logo" height="45" />
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded={!isNavCollapsed}
          aria-label="Toggle navigation"
          onClick={handleNavCollapse}
        >
          <span className="mdi mdi-menu"></span>
        </button>

        <div
          className={`${isNavCollapsed ? "collapse" : ""} navbar-collapse`}
          id="navbarCollapse"
        >
          <ul className="navbar-nav mx-auto" id="navbar-navlist">
            <li className="nav-item">
              <a className="nav-link active" href="#home">
                Home
              </a>
            </li>

            {/* Keeping direct links if they are meant to be standalone */}
            {/* If 'Applications' and 'Staff Base' were meant to be parent links, you might want to create direct sections for them. */}
            {/* For now, removing the dropdown structure. */}

            <li className="nav-item">
              <a className="nav-link" href="#projects">
                {" "}
                {/* Changed from dropdown toggle */}
                Applications
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#contact">
                {" "}
                {/* Changed from dropdown toggle */}
                Staff Base
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#daily-report">
                Daily Work Report
              </a>
            </li>
          </ul>

          <div className="d-flex align-items-center">
            <div className="me-5 flex-shrink-0 d-none d-lg-block">
              <a className="btn btn-primary nav-btn" href="#">
                Sign Up
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
