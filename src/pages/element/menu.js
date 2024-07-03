import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";

function Menu() {
  return (
    <Fragment>
      <div className="side-panel position-relative">
        <nav className="navbar">
          <div aria-labelledby="offcanvasNavbarLabel" className="offcanvas offcanvas-start show d-flex" id="offcanvasNavbar" data-bs-scroll="true" data-bs-backdrop="false" tabIndex="-1">
            <div className="offcanvas-body d-flex align-items-center ">
              <ul className="main-nav navbar-nav text-center">
                <li className="nav-item">
                  <NavLink to="/" className={({ isActive }) => (isActive ? "nav-link active d-flex flex-column" : "nav-link d-flex flex-column")}>
                    <span className="icon-holder">
                      <i className="fa-solid fa-circle-user"></i>
                    </span>
                    <span className="nav-text">About</span>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/projects" className={({ isActive }) => (isActive ? "nav-link active d-flex flex-column" : "nav-link d-flex flex-column")}>
                    <span className="icon-holder">
                      <i className="fa-solid fa-briefcase"></i>
                    </span>
                    <span className="nav-text">Projects</span>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/blog" className={({ isActive }) => (isActive ? "nav-link active d-flex flex-column" : "nav-link d-flex flex-column")}>
                    <span className="icon-holder">
                      <i className="fa-solid fa-pen-fancy"></i>
                    </span>
                    <span className="nav-text">Blog</span>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/resume" className={({ isActive }) => (isActive ? "nav-link active d-flex flex-column" : "nav-link d-flex flex-column")}>
                    <span className="icon-holder">
                      <i className="fa-solid fa-file-lines"></i>
                    </span>
                    <span className="nav-text">Resume</span>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/contact" className={({ isActive }) => (isActive ? "nav-link active d-flex flex-column" : "nav-link d-flex flex-column")}>
                    <span className="icon-holder">
                      <i className="fa-solid fa-comment-dots"></i>
                    </span>
                    <span className="nav-text">Contact</span>
                  </NavLink>
                </li>
                <li className="nav-item nav-item-close">
                  <NavLink aria-label="Close" className="btn-close" data-bs-dismiss="offcanvas" type="button">
                    <i className="bi bi-x"></i>
                  </NavLink>
                  {/* <button aria-label="Close" className="btn-close" data-bs-dismiss="offcanvas" type="button">
                    <i className="bi bi-x"></i>
                  </button> */}
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </Fragment>
  );
}
export default Menu;
